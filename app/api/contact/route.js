import {NextResponse} from 'next/server'
import {sendEmail} from '@/lib/email-service'
import {getEmailSignature} from '@/lib/signatures/email-signature'

function validateImage(image) {
    if (!image || !image.data || !image.type || !image.name) {
        return {valid: false, error: 'Invalid image data'}
    }

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!validTypes.includes(image.type)) {
        return {valid: false, error: 'Invalid image type. Only JPG, PNG, and WebP are allowed'}
    }

    const base64Pattern = /^data:image\/(jpeg|jpg|png|webp);base64,/
    if (!base64Pattern.test(image.data)) {
        return {valid: false, error: 'Invalid image format'}
    }

    const base64Length = image.data.length
    const estimatedSize = (base64Length * 0.75) / (1024 * 1024)
    if (estimatedSize > 5) {
        return {valid: false, error: 'Image exceeds 5MB size limit'}
    }

    const sanitizedName = image.name
        .replace(/[^a-zA-Z0-9._-]/g, '_')
        .substring(0, 100)

    return {valid: true, sanitizedName}
}

export async function POST(request) {
    try {
        const {name, email, phone, eventType, eventDates, message, images = []} = await request.json()

        if (!name || !email || !phone || !eventType || !message) {
            return NextResponse.json(
                {error: 'Missing required fields'},
                {status: 400}
            )
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {error: 'Invalid email address'},
                {status: 400}
            )
        }

        if (images && images.length > 0) {
            if (images.length > 5) {
                return NextResponse.json(
                    {error: 'Maximum 5 images allowed'},
                    {status: 400}
                )
            }

            for (const image of images) {
                const validation = validateImage(image)
                if (!validation.valid) {
                    return NextResponse.json(
                        {error: validation.error},
                        {status: 400}
                    )
                }
            }

            const totalSize = images.reduce((sum, img) => {
                const base64Length = img.data.length
                return sum + (base64Length * 0.75) / (1024 * 1024)
            }, 0)

            if (totalSize > 20) {
                return NextResponse.json(
                    {error: 'Total image size exceeds 20MB limit'},
                    {status: 400}
                )
            }
        }

        const attachments = images.map((image, index) => {
            const validation = validateImage(image)
            const base64Data = image.data.split('base64,')[1]

            const ext =
                image.type === 'image/png' ? 'png' :
                    image.type === 'image/webp' ? 'webp' :
                        'jpg'

            const filename =
                validation.sanitizedName && validation.sanitizedName.includes('.')
                    ? validation.sanitizedName
                    : (validation.sanitizedName ? `${validation.sanitizedName}.${ext}` : `inspiration-${index + 1}.${ext}`)

            return {
                filename,
                content: base64Data,
                encoding: 'base64',
                contentType: image.type
            }
        })

        const imageAttachmentNote = images.length > 0 ? `
            <h3 style="color: #2b2020; margin: 20px 0 10px; font-size: 16px; font-weight: 600;">
                📎 Inspiration Photos Attached (${images.length})
            </h3>
            <p style="margin: 0 0 20px; color: #5c4a4a; line-height: 1.6;">
                The customer has included ${images.length} inspiration photo${images.length > 1 ? 's' : ''} 
                with their enquiry. Please see the attached file${images.length > 1 ? 's' : ''} at the bottom of this email.
            </p>
        ` : ''

        try {
            const notificationResult = await sendEmail({
                to: process.env.BUSINESS_EMAIL_ADDRESS,
                subject: `New ${eventType} Decor Enquiry from ${name}${images.length > 0 ? ` (${images.length} photos)` : ''}`,
                html: `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>
                    <body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #2b2020;">
                        <div style="max-width: 600px; margin: 0 auto;">

                            <h2 style="color: #2b2020; margin: 0 0 10px; font-size: 20px; font-weight: 600;">
                                New Enquiry: ${eventType}
                            </h2>

                            <p style="color: #6a2929; margin: 0 0 25px; font-size: 14px;">
                                🚨 Response Required - Customer expects reply within 24 hours
                            </p>

                            <h3 style="color: #2b2020; margin: 0 0 10px; font-size: 16px; font-weight: 600;">Customer Details</h3>
                            <p style="margin: 0 0 20px; line-height: 1.8;">
                                <strong>Name:</strong> ${name}<br>
                                <strong>Email:</strong> <a href="mailto:${email}" style="color: #6a2929; text-decoration: none;">${email}</a><br>
                                <strong>Phone:</strong> <a href="tel:${phone}" style="color: #6a2929; text-decoration: none;">${phone}</a><br>
                                <strong>Event Type:</strong> ${eventType}<br>
                                ${eventDates ? `<strong>Event Date(s):</strong> ${eventDates}<br>` : ''}
                            </p>

                            <h3 style="color: #2b2020; margin: 0 0 10px; font-size: 16px; font-weight: 600;">Vision & Requirements</h3>
                            <p style="margin: 0 0 20px; line-height: 1.6;">
                                ${message.replace(/\n/g, '<br>')}
                            </p>

                            ${imageAttachmentNote}

                            ${getEmailSignature()}
                        </div>
                    </body>
                    </html>
                `,
                replyTo: email,
                attachments: attachments.length > 0 ? attachments : undefined
            })

            const customerReplyResult = await sendEmail({
                to: email,
                subject: 'Thank you for your enquiry - Sajaavat Events',
                html: `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>
                    <body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #2b2020;">
                        <div style="max-width: 600px; margin: 0 auto;">

                            <h1 style="color: #2b2020; margin: 0 0 10px; font-size: 24px; font-weight: 600;">
                                Thank You, ${name}!
                            </h1>
                            <p style="margin: 0 0 25px; color: #5c4a4a;">
                                We've received your enquiry for <strong>${eventType}</strong> decor${images.length > 0 ? ` along with your ${images.length} inspiration photo${images.length > 1 ? 's' : ''}` : ''}.
                            </p>

                            <h2 style="color: #2b2020; margin: 0 0 10px; font-size: 18px; font-weight: 600;">
                                What Happens Next?
                            </h2>
                            <ul style="margin: 0 0 25px; padding-left: 20px; line-height: 1.8;">
                                <li><strong>We've received your enquiry,</strong> we will aim to respond within 48 hours. Thank you for enquiring.</li>
                            </ul>

                            <h3 style="color: #2b2020; margin: 0 0 10px; font-size: 16px; font-weight: 600;">
                                Your Enquiry Summary
                            </h3>
                            <p style="margin: 0 0 20px; line-height: 1.8;">
                                <strong>Event Type:</strong> ${eventType}<br>
                                ${eventDates ? `<strong>Event Date(s):</strong> ${eventDates}<br>` : ''}
                                <strong>Contact:</strong> ${phone}${images.length > 0 ? `<br><strong>Inspiration Photos:</strong> ${images.length} image${images.length > 1 ? 's' : ''} sent` : ''}
                            </p>

                            <p style="margin: 0 0 20px; color: #5c4a4a;">
                                If you have ${images.length > 0 ? 'additional ' : ''}inspiration photos or venue details, feel free to reply to this email — we'll use them to shape your decor concept.
                            </p>

                            ${getEmailSignature()}
                        </div>
                    </body>
                    </html>
                `
            })

            console.log('Emails sent successfully:', {
                notification: notificationResult.success ? 'sent' : 'failed',
                customerReply: customerReplyResult.success ? 'sent' : 'failed',
                imageCount: images.length
            })

            if (!notificationResult.success || !customerReplyResult.success) {
                console.error('Email sending errors:', {
                    notification: notificationResult.error,
                    customerReply: customerReplyResult.error
                })
            }

        } catch (emailError) {
            console.error('Email sending failed:', emailError)
        }

        return NextResponse.json({
            success: true,
            message: "Thank you! We'll get back to you within 24 hours with your free decor quote."
        })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            {error: 'Something went wrong. Please try again.'},
            {status: 500}
        )
    }
}
