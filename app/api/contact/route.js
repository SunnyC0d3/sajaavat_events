import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email-service'

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

        const logoUrl = 'http://localhost:3000/images/logo.svg'

        try {
            // Business notification email
            const notificationResult = await sendEmail({
                to: process.env.BUSINESS_EMAIL_ADDRESS,
                subject: `New ${eventTypeMap[eventType] || eventType} Enquiry from ${name}`,
                html: `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>New Enquiry - Sajaavat Events</title>
                    </head>
                    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f8f4f6; line-height: 1.6;">
                        <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(106, 41, 41, 0.15);">
                            
                            <!-- Header -->
                            <div style="background: linear-gradient(135deg, #8b3a3a 0%, #6a2929 100%); padding: 40px 30px; text-align: center; position: relative;">
                                <img src="${logoUrl}" alt="Sajaavat Events Logo" style="width: 80px; height: 80px; margin-bottom: 20px; filter: brightness(0) invert(1);">
                                <h1 style="color: #ffffff; margin: 0 0 8px; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
                                    New Enquiry Received
                                </h1>
                                <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 16px; font-weight: 500;">
                                    Sajaavat Events • Balloon Decoration Services
                                </p>
                            </div>

                            <!-- Content -->
                            <div style="padding: 40px 30px;">
                                
                                <!-- Priority Alert -->
                                <div style="background: #fef7f0; border-left: 4px solid #e66666; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                                    <p style="color: #8b3a3a; margin: 0; font-size: 14px; font-weight: 600;">
                                        🚨 Priority Response Required - Customer expects reply within 24 hours
                                    </p>
                                </div>

                                <!-- Customer Details -->
                                <div style="background: #fafafa; border: 1px solid #e8e8e8; border-radius: 12px; padding: 30px; margin-bottom: 30px;">
                                    <h2 style="color: #2b2020; margin: 0 0 20px; font-size: 18px; font-weight: 600; border-bottom: 2px solid #6a2929; padding-bottom: 8px; display: inline-block;">
                                        Customer Information
                                    </h2>
                                    
                                    <table style="width: 100%; border-collapse: collapse;">
                                        <tr>
                                            <td style="padding: 12px 0; width: 30%; color: #7a6666; font-size: 14px; font-weight: 500; vertical-align: top;">Name:</td>
                                            <td style="padding: 12px 0; color: #2b2020; font-size: 16px; font-weight: 600;">${name}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 12px 0; color: #7a6666; font-size: 14px; font-weight: 500; vertical-align: top;">Email:</td>
                                            <td style="padding: 12px 0;">
                                                <a href="mailto:${email}" style="color: #6a2929; text-decoration: none; font-weight: 600; font-size: 16px;">${email}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 12px 0; color: #7a6666; font-size: 14px; font-weight: 500; vertical-align: top;">Phone:</td>
                                            <td style="padding: 12px 0;">
                                                <a href="tel:${phone}" style="color: #6a2929; text-decoration: none; font-weight: 600; font-size: 16px;">${phone}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 12px 0; color: #7a6666; font-size: 14px; font-weight: 500; vertical-align: top;">Event Type:</td>
                                            <td style="padding: 12px 0;">
                                                <span style="background: linear-gradient(135deg, #f4ebf2 0%, #efe4ec 100%); color: #6a2929; padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; border: 1px solid #e8d0de;">
                                                    ${eventTypeMap[eventType] || eventType}
                                                </span>
                                            </td>
                                        </tr>
                                        ${eventDate ? `
                                        <tr>
                                            <td style="padding: 12px 0; color: #7a6666; font-size: 14px; font-weight: 500; vertical-align: top;">Event Date:</td>
                                            <td style="padding: 12px 0; color: #2b2020; font-size: 16px; font-weight: 600;">${eventDate}</td>
                                        </tr>
                                        ` : ''}
                                    </table>
                                </div>

                                <!-- Message Section -->
                                <div style="background: #fff8f8; border: 1px solid #f4c2c2; border-radius: 12px; margin-bottom: 30px; overflow: hidden;">
                                    <div style="background: #fdf2f2; padding: 20px 25px; border-bottom: 1px solid #f4c2c2;">
                                        <h3 style="color: #6a2929; margin: 0; font-size: 16px; font-weight: 600;">
                                            💬 Customer Message
                                        </h3>
                                    </div>
                                    <div style="padding: 25px;">
                                        <div style="background: #ffffff; border-radius: 8px; padding: 20px; border-left: 4px solid #e66666; line-height: 1.6; color: #2b2020; font-size: 15px;">
                                            ${message.replace(/\n/g, '<br>')}
                                        </div>
                                    </div>
                                </div>

                                <!-- Quick Actions -->
                                <div style="background: #f4ebf2; border: 1px solid #e8d0de; border-radius: 12px; padding: 25px; text-align: center; margin-bottom: 30px;">
                                    <h4 style="color: #6a2929; margin: 0 0 20px; font-size: 16px; font-weight: 600;">
                                        Quick Response Actions
                                    </h4>
                                    <div style="display: inline-block;">
                                        <a href="tel:${phone}" style="display: inline-block; background: linear-gradient(135deg, #6a2929 0%, #8b3a3a 100%); color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; margin: 0 8px 8px 0; box-shadow: 0 4px 12px rgba(106, 41, 41, 0.3);">
                                            📞 Call Customer
                                        </a>
                                        <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #b82a2a 0%, #d14545 100%); color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; margin: 0 8px 8px 0; box-shadow: 0 4px 12px rgba(184, 42, 42, 0.3);">
                                            ✉️ Send Email
                                        </a>
                                        <a href="https://wa.me/${phone.replace(/\D/g, '')}" style="display: inline-block; background: linear-gradient(135deg, #25d366 0%, #20b358 100%); color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; margin: 0 8px 8px 0; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);">
                                            💬 WhatsApp
                                        </a>
                                    </div>
                                </div>

                                <!-- Reminder -->
                                <div style="background: #fdf9fc; border: 1px solid #e8d0de; border-radius: 8px; padding: 20px; text-align: center;">
                                    <p style="color: #6a2929; margin: 0; font-size: 14px; font-weight: 500;">
                                        ⭐ Remember: Quick responses lead to higher conversion rates!
                                    </p>
                                </div>
                            </div>

                            <!-- Footer -->
                            <div style="background: #fafafa; border-top: 1px solid #e8e8e8; padding: 25px 30px; text-align: center;">
                                <p style="color: #8a8a8a; margin: 0 0 10px; font-size: 13px;">
                                    📅 Submitted: ${new Date().toLocaleString('en-GB', {
                    dateStyle: 'full',
                    timeStyle: 'short'
                })}
                                </p>
                                <p style="color: #6a2929; margin: 0; font-size: 14px; font-weight: 600;">
                                    Sajaavat Events - Premium Balloon Decoration Services
                                </p>
                            </div>
                        </div>
                    </body>
                    </html>
                `,
                replyTo: email
            })

            // Customer confirmation email
            const customerReplyResult = await sendEmail({
                to: email,
                subject: 'Thank you for your balloon decoration enquiry - Sajaavat Events',
                html: `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Thank You - Sajaavat Events</title>
                    </head>
                    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f8f4f6; line-height: 1.6;">
                        <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(106, 41, 41, 0.15);">
                            
                            <!-- Hero Header -->
                            <div style="background: linear-gradient(135deg, #8b3a3a 0%, #6a2929 100%); padding: 50px 30px; text-align: center; position: relative;">
                                <img src="${logoUrl}" alt="Sajaavat Events Logo" style="width: 100px; height: 100px; margin-bottom: 20px; filter: brightness(0) invert(1);">
                                <h1 style="color: #ffffff; margin: 0 0 12px; font-size: 36px; font-weight: 700; letter-spacing: -1px;">
                                    Thank You!
                                </h1>
                                <p style="color: rgba(255,255,255,0.95); margin: 0 0 8px; font-size: 20px; font-weight: 600;">
                                    Sajaavat Events
                                </p>
                                <p style="color: rgba(255,255,255,0.8); margin: 0; font-size: 14px;">
                                    Making your celebrations extraordinarily beautiful
                                </p>
                            </div>

                            <!-- Welcome Message -->
                            <div style="padding: 40px 30px;">
                                <div style="text-align: center; margin-bottom: 35px;">
                                    <h2 style="color: #2b2020; margin: 0 0 16px; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                                        Hello ${name}! 👋
                                    </h2>
                                    <p style="color: #5c4a4a; font-size: 16px; line-height: 1.6; margin: 0;">
                                        Thank you for choosing us for your 
                                        <span style="background: linear-gradient(135deg, #f4ebf2 0%, #efe4ec 100%); color: #6a2929; padding: 4px 12px; border-radius: 16px; font-weight: 600; border: 1px solid #e8d0de;">
                                            ${eventTypeMap[eventType] || eventType}
                                        </span>! 
                                        We're thrilled to help create stunning balloon decorations for your special celebration.
                                    </p>
                                </div>

                                <!-- Next Steps -->
                                <div style="background: linear-gradient(135deg, #fdf9fc 0%, #f8f2f6 100%); border: 2px solid #e8d0de; border-radius: 16px; padding: 30px; margin-bottom: 35px;">
                                    <h3 style="color: #2b2020; margin: 0 0 25px; font-size: 20px; font-weight: 600; text-align: center;">
                                        What happens next?
                                    </h3>
                                    
                                    <div style="margin-bottom: 20px;">
                                        <div style="display: table; width: 100%; margin-bottom: 20px;">
                                            <div style="display: table-cell; width: 50px; vertical-align: top;">
                                                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #6a2929 0%, #8b3a3a 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 16px; font-weight: 700; text-align: center; line-height: 40px;">1</div>
                                            </div>
                                            <div style="display: table-cell; padding-left: 15px; vertical-align: top;">
                                                <h4 style="color: #2b2020; margin: 0 0 6px; font-size: 16px; font-weight: 600;">
                                                    Personalized Quote & Consultation
                                                </h4>
                                                <p style="color: #7a6666; margin: 0; font-size: 14px; line-height: 1.5;">
                                                    Within 24 hours, you'll receive a detailed quote tailored to your specific requirements and design preferences.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div style="margin-bottom: 20px;">
                                        <div style="display: table; width: 100%; margin-bottom: 20px;">
                                            <div style="display: table-cell; width: 50px; vertical-align: top;">
                                                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #6a2929 0%, #8b3a3a 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 16px; font-weight: 700; text-align: center; line-height: 40px;">2</div>
                                            </div>
                                            <div style="display: table-cell; padding-left: 15px; vertical-align: top;">
                                                <h4 style="color: #2b2020; margin: 0 0 6px; font-size: 16px; font-weight: 600;">
                                                    Design Strategy Call
                                                </h4>
                                                <p style="color: #7a6666; margin: 0; font-size: 14px; line-height: 1.5;">
                                                    Our decoration specialist will call to understand your vision, cultural preferences, and venue requirements.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div style="margin-bottom: 0;">
                                        <div style="display: table; width: 100%;">
                                            <div style="display: table-cell; width: 50px; vertical-align: top;">
                                                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #6a2929 0%, #8b3a3a 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 16px; font-weight: 700; text-align: center; line-height: 40px;">3</div>
                                            </div>
                                            <div style="display: table-cell; padding-left: 15px; vertical-align: top;">
                                                <h4 style="color: #2b2020; margin: 0 0 6px; font-size: 16px; font-weight: 600;">
                                                    Complimentary Venue Visit
                                                </h4>
                                                <p style="color: #7a6666; margin: 0; font-size: 14px; line-height: 1.5;">
                                                    If needed, we'll arrange a free consultation at your venue to finalize the perfect decoration plan.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Urgent Contact Section -->
                                <div style="background: #fff8f5; border: 2px solid #f4c2c2; border-radius: 16px; padding: 30px; text-align: center; margin-bottom: 35px;">
                                    <h4 style="color: #6a2929; margin: 0 0 16px; font-size: 18px; font-weight: 600;">
                                        🚀 Need immediate assistance?
                                    </h4>
                                    <p style="color: #8b3a3a; margin: 0 0 25px; font-size: 15px;">
                                        Don't wait - get in touch now for immediate assistance!
                                    </p>
                                    
                                    <div style="margin-bottom: 20px;">
                                        <a href="tel:+447123456789" style="display: inline-block; background: linear-gradient(135deg, #6a2929 0%, #8b3a3a 100%); color: #ffffff; padding: 14px 25px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px; margin: 0 8px 8px 0; box-shadow: 0 4px 12px rgba(106, 41, 41, 0.3);">
                                            📞 Call Now
                                        </a>
                                        <a href="https://wa.me/447123456789" style="display: inline-block; background: linear-gradient(135deg, #25d366 0%, #20b358 100%); color: #ffffff; padding: 14px 25px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px; margin: 0 8px 8px 0; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);">
                                            💬 WhatsApp
                                        </a>
                                    </div>
                                    <p style="color: #6a2929; margin: 0; font-size: 16px; font-weight: 600;">
                                        📱 +44 712 345 6789
                                    </p>
                                </div>

                                <!-- Promise Section -->
                                <div style="text-align: center; margin-bottom: 35px;">
                                    <div style="background: #f9f7f7; border: 1px solid #e8e8e8; border-radius: 16px; padding: 30px; position: relative;">
                                        <div style="color: #ffc107; font-size: 16px; margin-bottom: 15px;">
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                        <h3 style="color: #2b2020; margin: 0 0 16px; font-size: 20px; font-weight: 600;">
                                            Our Promise to You
                                        </h3>
                                        <p style="color: #7a6666; margin: 0 0 16px; font-size: 15px; line-height: 1.6; font-style: italic;">
                                            "We don't just create decorations – we craft magical experiences that perfectly capture the joy and cultural significance of your celebration."
                                        </p>
                                        <div style="background: linear-gradient(135deg, #6a2929 0%, #8b3a3a 100%); color: #ffffff; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; display: inline-block;">
                                            ✨ 100% Satisfaction Guarantee
                                        </div>
                                    </div>
                                </div>

                                <!-- Closing Message -->
                                <div style="text-align: center; margin-bottom: 35px;">
                                    <h3 style="color: #2b2020; margin: 0 0 12px; font-size: 22px; font-weight: 600;">
                                        We can't wait to exceed your expectations! 🎉
                                    </h3>
                                    <p style="color: #7a6666; margin: 0; font-size: 15px; line-height: 1.6;">
                                        Get ready for balloon decorations that will leave you and your guests absolutely amazed.
                                    </p>
                                </div>
                            </div>

                            <!-- Enquiry Summary -->
                            <div style="background: #fafafa; padding: 35px 30px;">
                                <div style="background: #ffffff; border: 1px solid #e8e8e8; border-radius: 12px; padding: 25px;">
                                    <h3 style="color: #2b2020; margin: 0 0 20px; font-size: 18px; font-weight: 600; text-align: center; border-bottom: 2px solid #6a2929; padding-bottom: 8px; display: inline-block; width: 100%; box-sizing: border-box;">
                                        Your Enquiry Summary
                                    </h3>
                                    
                                    <table style="width: 100%; border-collapse: collapse;">
                                        <tr>
                                            <td style="padding: 12px 0; color: #8a8a8a; font-size: 13px; font-weight: 600; text-transform: uppercase; width: 35%;">Event Type:</td>
                                            <td style="padding: 12px 0; color: #2b2020; font-size: 15px; font-weight: 600;">${eventTypeMap[eventType] || eventType}</td>
                                        </tr>
                                        ${eventDate ? `
                                        <tr>
                                            <td style="padding: 12px 0; color: #8a8a8a; font-size: 13px; font-weight: 600; text-transform: uppercase;">Event Date:</td>
                                            <td style="padding: 12px 0; color: #2b2020; font-size: 15px; font-weight: 600;">${eventDate}</td>
                                        </tr>
                                        ` : ''}
                                        <tr>
                                            <td style="padding: 12px 0; color: #8a8a8a; font-size: 13px; font-weight: 600; text-transform: uppercase;">Phone:</td>
                                            <td style="padding: 12px 0; color: #6a2929; font-size: 15px; font-weight: 600;">${phone}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 12px 0; color: #8a8a8a; font-size: 13px; font-weight: 600; text-transform: uppercase;">Email:</td>
                                            <td style="padding: 12px 0; color: #6a2929; font-size: 15px; font-weight: 600;">${email}</td>
                                        </tr>
                                    </table>

                                    <!-- Team Signature -->
                                    <div style="text-align: center; margin-top: 25px; padding-top: 25px; border-top: 1px solid #f0f0f0;">
                                        <p style="color: #2b2020; margin: 0 0 4px; font-size: 15px; font-weight: 500;">
                                            Warmest regards,
                                        </p>
                                        <p style="color: #6a2929; margin: 0 0 15px; font-size: 18px; font-weight: 700;">
                                            The Sajaavat Events Team
                                        </p>
                                        <div style="display: inline-block;">
                                            <a href="tel:+447123456789" style="color: #6a2929; text-decoration: none; font-size: 14px; font-weight: 500; margin-right: 15px;">
                                                📞 +44 712 345 6789
                                            </a>
                                            <a href="https://wa.me/447123456789" style="color: #25d366; text-decoration: none; font-size: 14px; font-weight: 500;">
                                                💬 WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            { error: 'Something went wrong. Please try again or call us at +44 712 345 6789.' },
            { status: 500 }
        )
    }
}