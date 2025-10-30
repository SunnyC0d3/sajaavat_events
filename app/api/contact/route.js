import {NextResponse} from 'next/server'
import {sendEmail} from '@/lib/email-service'
import {getEmailSignature} from '@/lib/signatures/email-signature'

export async function POST(request) {
    try {
        const {name, email, phone, eventType, eventDate, message} = await request.json()

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

        const eventTypeMap = {
            'asian-wedding': 'Asian Wedding Decoration',
            'baby-shower': 'Baby Shower Styling',
            'corporate': 'Corporate Event Decoration',
            'other': 'Other Special Celebration'
        }

        try {
            const notificationResult = await sendEmail({
                to: process.env.BUSINESS_EMAIL_ADDRESS,
                subject: `New ${eventTypeMap[eventType] || eventType} Enquiry from ${name}`,
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
                                New Enquiry: ${eventTypeMap[eventType] || eventType}
                            </h2>

                            <p style="color: #6a2929; margin: 0 0 25px; font-size: 14px;">
                                🚨 Response Required - Customer expects reply within 24 hours
                            </p>

                            <h3 style="color: #2b2020; margin: 0 0 10px; font-size: 16px; font-weight: 600;">Customer Details</h3>
                            <p style="margin: 0 0 20px; line-height: 1.8;">
                                <strong>Name:</strong> ${name}<br>
                                <strong>Email:</strong> <a href="mailto:${email}" style="color: #6a2929; text-decoration: none;">${email}</a><br>
                                <strong>Phone:</strong> <a href="tel:${phone}" style="color: #6a2929; text-decoration: none;">${phone}</a><br>
                                <strong>Event Type:</strong> ${eventTypeMap[eventType] || eventType}<br>
                                ${eventDate ? `<strong>Event Date:</strong> ${eventDate}<br>` : ''}
                            </p>

                            <h3 style="color: #2b2020; margin: 0 0 10px; font-size: 16px; font-weight: 600;">Message</h3>
                            <p style="margin: 0 0 20px; line-height: 1.6;">
                                ${message.replace(/\n/g, '<br>')}
                            </p>

                            ${getEmailSignature()}
                        </div>
                    </body>
                    </html>
                `,
                replyTo: email
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
                                We've received your enquiry for <strong>${eventTypeMap[eventType] || eventType}</strong>
                            </p>

                            <h2 style="color: #2b2020; margin: 0 0 10px; font-size: 18px; font-weight: 600;">
                                What Happens Next?
                            </h2>
                            <ul style="margin: 0 0 25px; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Within 24 hours:</strong> We'll contact you with a personalized quote</li>
                                <li><strong>Free consultation:</strong> Discuss your vision and requirements</li>
                                <li><strong>Venue visit:</strong> If needed, we'll arrange a complimentary site visit</li>
                            </ul>

                            <h3 style="color: #2b2020; margin: 0 0 10px; font-size: 16px; font-weight: 600;">
                                Your Enquiry Summary
                            </h3>
                            <p style="margin: 0 0 20px; line-height: 1.8;">
                                <strong>Event Type:</strong> ${eventTypeMap[eventType] || eventType}<br>
                                ${eventDate ? `<strong>Event Date:</strong> ${eventDate}<br>` : ''}
                                <strong>Contact:</strong> ${phone}
                            </p>

                            ${getEmailSignature()}
                        </div>
                    </body>
                    </html>
                `
            })

            console.log('Emails sent successfully:', {
                notification: notificationResult.success ? 'sent' : 'failed',
                customerReply: customerReplyResult.success ? 'sent' : 'failed'
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
            message: "Thank you! We'll get back to you within 24 hours with your free balloon decoration quote."
        })

    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            {error: 'Something went wrong. Please try again or call us at +44 712 345 6789.'},
            {status: 500}
        )
    }
}
