import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
    try {
        const { name, email, phone, eventType, eventDate, message } = await request.json()

        if (!name || !email || !phone || !eventType || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            )
        }

        const eventTypeMap = {
            'asian-wedding': 'Asian Wedding Decoration',
            'baby-shower': 'Baby Shower Styling',
            'corporate': 'Corporate Event Decoration',
            'other': 'Other Special Celebration'
        }

        try {
            const notificationEmail = await resend.emails.send({
                from: `Sajaavat Enquiries <enquiries@${process.env.DOMAIN_NAME}>`,
                to: [process.env.BUSINESS_EMAIL],
                replyTo: email,
                subject: `New ${eventTypeMap[eventType] || eventType} Enquiry from ${name}`,
                html: `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>New Enquiry - Sajaavat Events</title>
                    </head>
                    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9f7f7;">
                        <div style="max-width: 600px; margin: 0 auto; background: #fdfcfc;">
                            <div style="background: linear-gradient(135deg, #6a2929 0%, #b82a2a 100%); padding: 32px 24px; text-align: center;">
                                <h1 style="color: #fdfcfc; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
                                    New Balloon Decoration Enquiry
                                </h1>
                                <p style="color: rgba(253,252,252,0.9); margin: 8px 0 0; font-size: 16px;">
                                    Sajaavat Events
                                </p>
                            </div>

                            <div style="padding: 32px 24px;">
                                <div style="background: #f9f7f7; border: 1px solid #e8e1e1; border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #6a2929;">
                                    <h2 style="color: #2b2020; margin: 0 0 20px; font-size: 18px; font-weight: 600;">
                                        Customer Details
                                    </h2>
                                    
                                    <table style="width: 100%; border-collapse: collapse;">
                                        <tr>
                                            <td style="padding: 8px 0; width: 30%; color: #7a6666; font-size: 14px; font-weight: 500;">Name:</td>
                                            <td style="padding: 8px 0; color: #2b2020; font-size: 14px; font-weight: 600;">${name}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px 0; color: #7a6666; font-size: 14px; font-weight: 500;">Email:</td>
                                            <td style="padding: 8px 0;">
                                                <a href="mailto:${email}" style="color: #6a2929; text-decoration: none; font-weight: 500;">${email}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px 0; color: #7a6666; font-size: 14px; font-weight: 500;">Phone:</td>
                                            <td style="padding: 8px 0;">
                                                <a href="tel:${phone}" style="color: #6a2929; text-decoration: none; font-weight: 500;">${phone}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px 0; color: #7a6666; font-size: 14px; font-weight: 500;">Event Type:</td>
                                            <td style="padding: 8px 0;">
                                                <span style="background: #f4ebf2; color: #6a2929; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">
                                                    ${eventTypeMap[eventType] || eventType}
                                                </span>
                                            </td>
                                        </tr>
                                        ${eventDate ? `
                                        <tr>
                                            <td style="padding: 8px 0; color: #7a6666; font-size: 14px; font-weight: 500;">Event Date:</td>
                                            <td style="padding: 8px 0; color: #2b2020; font-size: 14px; font-weight: 600;">${eventDate}</td>
                                        </tr>
                                        ` : ''}
                                    </table>
                                </div>

                                <div style="background: #f9dddd; border: 1px solid #f4c2c2; border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #e66666;">
                                    <h3 style="color: #6a2929; margin: 0 0 16px; font-size: 16px; font-weight: 600;">
                                        Customer Message
                                    </h3>
                                    <div style="background: #fdfcfc; border-radius: 8px; padding: 20px; line-height: 1.6; color: #2b2020; font-size: 14px;">
                                        ${message.replace(/\n/g, '<br>')}
                                    </div>
                                </div>

                                <div style="background: #f4ebf2; border: 1px solid #e8d0de; border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 24px;">
                                    <h4 style="color: #6a2929; margin: 0 0 16px; font-size: 16px; font-weight: 600;">
                                        Quick Actions
                                    </h4>
                                    <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
                                        <a href="tel:${phone}" style="display: inline-flex; align-items: center; background: #6a2929; color: #fdfcfc; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: 500; font-size: 14px;">
                                            Call Customer
                                        </a>
                                        <a href="mailto:${email}" style="display: inline-flex; align-items: center; background: #b82a2a; color: #fdfcfc; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: 500; font-size: 14px;">
                                            Send Email
                                        </a>
                                        <a href="https://wa.me/${phone.replace(/\D/g, '')}" style="display: inline-flex; align-items: center; background: #25d366; color: #fdfcfc; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: 500; font-size: 14px;">
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>

                                <div style="background: #fdf2f2; border: 1px solid #fce7e7; border-radius: 8px; padding: 16px; text-align: center;">
                                    <p style="color: #6a2929; margin: 0; font-size: 14px; font-weight: 500;">
                                        Remember to respond within 24 hours for best customer experience
                                    </p>
                                </div>
                            </div>

                            <div style="background: #f9f7f7; border-top: 1px solid #e8e1e1; padding: 20px 24px; text-align: center;">
                                <p style="color: #7a6666; margin: 0; font-size: 13px;">
                                    Submitted: ${new Date().toLocaleString('en-GB', {
                    dateStyle: 'full',
                    timeStyle: 'short'
                })}
                                </p>
                                <p style="color: #7a6666; margin: 8px 0 0; font-size: 12px;">
                                    Sajaavat Events - Balloon Decoration Services
                                </p>
                            </div>
                        </div>
                    </body>
                    </html>
                `
            })

            const customerReply = await resend.emails.send({
                from: `Sajaavat Events <hello@${process.env.DOMAIN_NAME}>`,
                to: [email],
                subject: 'Thank you for your balloon decoration enquiry - Sajaavat Events',
                html: `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Thank You - Sajaavat Events</title>
                    </head>
                    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9f7f7;">
                        <div style="max-width: 600px; margin: 0 auto; background: #fdfcfc; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                            <div style="background: linear-gradient(135deg, #6a2929 0%, #b82a2a 100%); padding: 48px 32px; text-align: center; position: relative; overflow: hidden;">
                                <h1 style="color: #fdfcfc; margin: 0 0 12px; font-size: 36px; font-weight: 700; letter-spacing: -1px;">
                                    Thank You!
                                </h1>
                                <p style="color: rgba(253,252,252,0.95); margin: 0; font-size: 20px; font-weight: 500;">
                                    Sajaavat Events
                                </p>
                                <p style="color: rgba(253,252,252,0.8); margin: 8px 0 0; font-size: 14px;">
                                    Making your celebrations beautiful
                                </p>
                            </div>

                            <div style="padding: 40px 32px;">
                                <div style="text-align: center; margin-bottom: 32px;">
                                    <h2 style="color: #2b2020; margin: 0 0 16px; font-size: 24px; font-weight: 600;">
                                        Hi ${name}!
                                    </h2>
                                    <p style="color: #5c4a4a; font-size: 16px; line-height: 1.6; margin: 0;">
                                        Thank you for your interest in our balloon decoration services! We've received your enquiry for 
                                        <strong style="background: #f4ebf2; color: #6a2929; padding: 2px 8px; border-radius: 4px; font-weight: 600;">
                                            ${eventTypeMap[eventType] || eventType}
                                        </strong> 
                                        and we're excited to help make your celebration absolutely stunning.
                                    </p>
                                </div>

                                <div style="background: linear-gradient(135deg, #fdf9fc 0%, #f4ebf2 100%); border: 1px solid #e8d0de; border-radius: 16px; padding: 32px; margin-bottom: 32px;">
                                    <h3 style="color: #2b2020; margin: 0 0 24px; font-size: 20px; font-weight: 600; text-align: center;">
                                        What happens next?
                                    </h3>
                                    
                                    <div style="space-y: 20px;">
                                        <div style="display: flex; align-items: flex-start; margin-bottom: 20px;">
                                            <div style="background: #6a2929; color: #fdfcfc; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; margin-right: 16px; flex-shrink: 0;">
                                                1
                                            </div>
                                            <div>
                                                <h4 style="color: #2b2020; margin: 0 0 4px; font-size: 16px; font-weight: 600;">
                                                    Personalized Quote
                                                </h4>
                                                <p style="color: #7a6666; margin: 0; font-size: 14px; line-height: 1.5;">
                                                    We'll prepare a detailed quote within 24 hours based on your specific requirements
                                                </p>
                                            </div>
                                        </div>

                                        <div style="display: flex; align-items: flex-start; margin-bottom: 20px;">
                                            <div style="background: #6a2929; color: #fdfcfc; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; margin-right: 16px; flex-shrink: 0;">
                                                2
                                            </div>
                                            <div>
                                                <h4 style="color: #2b2020; margin: 0 0 4px; font-size: 16px; font-weight: 600;">
                                                    Design Consultation
                                                </h4>
                                                <p style="color: #7a6666; margin: 0; font-size: 14px; line-height: 1.5;">
                                                    Our decoration specialist will call to discuss your vision and cultural preferences
                                                </p>
                                            </div>
                                        </div>

                                        <div style="display: flex; align-items: flex-start; margin-bottom: 0;">
                                            <div style="background: #6a2929; color: #fdfcfc; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; margin-right: 16px; flex-shrink: 0;">
                                                3
                                            </div>
                                            <div>
                                                <h4 style="color: #2b2020; margin: 0 0 4px; font-size: 16px; font-weight: 600;">
                                                    Free Site Visit
                                                </h4>
                                                <p style="color: #7a6666; margin: 0; font-size: 14px; line-height: 1.5;">
                                                    We'll arrange a complimentary consultation at your venue if needed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style="background: #f9dddd; border: 2px solid #f4c2c2; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 32px;">
                                    <h4 style="color: #6a2929; margin: 0 0 12px; font-size: 18px; font-weight: 600;">
                                        Need to speak urgently?
                                    </h4>
                                    <p style="color: #6a2929; margin: 0 0 20px; font-size: 14px;">
                                        Don't wait - get in touch now for immediate assistance!
                                    </p>
                                    
                                    <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
                                        <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
                                            <a href="tel:+447123456789" style="display: inline-flex; align-items: center; background: #6a2929; color: #fdfcfc; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 14px;">
                                                Call Now
                                            </a>
                                            <a href="https://wa.me/447123456789" style="display: inline-flex; align-items: center; background: #25d366; color: #fdfcfc; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 14px;">
                                                WhatsApp
                                            </a>
                                        </div>
                                        <p style="color: #6a2929; margin: 0; font-size: 16px; font-weight: 600;">
                                            +44 712 345 6789
                                        </p>
                                    </div>
                                </div>

                                <div style="text-align: center; margin-bottom: 32px;">
                                    <h3 style="color: #2b2020; margin: 0 0 8px; font-size: 20px; font-weight: 600;">
                                        Looking forward to making your celebration beautiful!
                                    </h3>
                                    <p style="color: #7a6666; margin: 0; font-size: 16px; line-height: 1.5;">
                                        We can't wait to bring your vision to life with stunning balloon decorations
                                        that perfectly capture the essence of your special celebration.
                                    </p>
                                </div>
                            </div>

                            <div style="background: #f9f7f7; border-top: 1px solid #e8e1e1; padding: 32px;">
                                <div style="text-align: center; margin-bottom: 24px;">
                                    <p style="color: #2b2020; margin: 0 0 4px; font-size: 16px; font-weight: 500;">
                                        Best regards,
                                    </p>
                                    <p style="color: #6a2929; margin: 0 0 12px; font-size: 20px; font-weight: 700;">
                                        The Sajaavat Events Team
                                    </p>
                                    <div style="display: flex; justify-content: center; align-items: center; gap: 16px; flex-wrap: wrap;">
                                        <a href="tel:+447123456789" style="color: #6a2929; text-decoration: none; font-size: 14px; font-weight: 500;">
                                            +44 712 345 6789
                                        </a>
                                        <span style="color: #d1c4c4;">|</span>
                                        <a href="https://wa.me/447123456789" style="color: #25d366; text-decoration: none; font-size: 14px; font-weight: 500;">
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>

                                <div style="background: #e8e1e1; border: 1px solid #d1c4c4; border-radius: 12px; padding: 20px; border-left: 4px solid #6a2929;">
                                    <h4 style="color: #2b2020; margin: 0 0 12px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                        Your Enquiry Summary
                                    </h4>
                                    <table style="width: 100%; border-collapse: collapse;">
                                        <tr>
                                            <td style="padding: 4px 0; color: #7a6666; font-size: 13px; font-weight: 500; width: 30%;">Event:</td>
                                            <td style="padding: 4px 0; color: #2b2020; font-size: 13px; font-weight: 600;">${eventTypeMap[eventType] || eventType}</td>
                                        </tr>
                                        ${eventDate ? `
                                        <tr>
                                            <td style="padding: 4px 0; color: #7a6666; font-size: 13px; font-weight: 500;">Date:</td>
                                            <td style="padding: 4px 0; color: #2b2020; font-size: 13px; font-weight: 600;">${eventDate}</td>
                                        </tr>
                                        ` : ''}
                                        <tr>
                                            <td style="padding: 4px 0; color: #7a6666; font-size: 13px; font-weight: 500;">Phone:</td>
                                            <td style="padding: 4px 0; color: #2b2020; font-size: 13px; font-weight: 600;">${phone}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 4px 0; color: #7a6666; font-size: 13px; font-weight: 500;">Email:</td>
                                            <td style="padding: 4px 0; color: #2b2020; font-size: 13px; font-weight: 600;">${email}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </body>
                    </html>
                `
            })

            console.log('Emails sent successfully:', {
                notification: notificationEmail.data?.id,
                customerReply: customerReply.data?.id
            })

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
            { error: 'Something went wrong. Please try again or call us at +44 712 345 6789.' },
            { status: 500 }
        )
    }
}