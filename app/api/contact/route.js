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
                from: `Enquiries - <${process.env.NO_REPLY_EMAIL_ADDRESS}>`,
                to: [`${process.env.EMAIL_ADDRESS}`],
                replyTo: email,
                subject: `New Enquiry: ${eventTypeMap[eventType] || eventType} - ${name}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white;">
                        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
                            <h1 style="margin: 0; font-size: 24px;">🎈 New Contact Form Submission</h1>
                        </div>
                        
                        <div style="padding: 30px;">
                            <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #007cba;">
                                <h2 style="margin-top: 0; color: #333;">Customer Details</h2>
                                <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
                                <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007cba;">${email}</a></p>
                                <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #007cba;">${phone}</a></p>
                                <p style="margin: 8px 0;"><strong>Event Type:</strong> <span style="background: #e3f2fd; padding: 4px 8px; border-radius: 4px; color: #1565c0;">${eventTypeMap[eventType] || eventType}</span></p>
                                ${eventDate ? `<p style="margin: 8px 0;"><strong>Event Date:</strong> ${eventDate}</p>` : ''}
                            </div>
                            
                            <div style="background: #fff3e0; padding: 20px; border-radius: 8px; border-left: 4px solid #ff9800; margin: 20px 0;">
                                <h3 style="margin-top: 0; color: #e65100;">Customer Message:</h3>
                                <div style="background: white; padding: 15px; border-radius: 4px; line-height: 1.6; color: #333;">
                                    ${message.replace(/\n/g, '<br>')}
                                </div>
                            </div>
                            
                            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; text-align: center; margin: 25px 0;">
                                <p style="margin: 0; color: #2e7d32;">
                                    💡 <strong>Quick Actions:</strong> 
                                    <a href="tel:${phone}" style="color: #2e7d32; text-decoration: none; margin: 0 10px;">📞 Call</a> |
                                    <a href="mailto:${email}" style="color: #2e7d32; text-decoration: none; margin: 0 10px;">✉️ Reply</a> |
                                    <a href="https://wa.me/${phone.replace(/\D/g, '')}" style="color: #2e7d32; text-decoration: none; margin: 0 10px;">💬 WhatsApp</a>
                                </p>
                            </div>
                        </div>
                        
                        <div style="background: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #eee;">
                            <p style="margin: 0; color: #666; font-size: 14px;">
                                📅 Submitted: ${new Date().toLocaleString('en-GB', {
                    dateStyle: 'full',
                    timeStyle: 'short'
                })}
                            </p>
                        </div>
                    </div>
                `
            })

            // Send auto-reply to customer
            const customerReply = await resend.emails.send({
                from: `Sajaavat Events - <${process.env.EMAIL_ADDRESS}>`,
                to: [email],
                subject: '🎈 Thank you for your enquiry - Sajaavat Events',
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white;">
                        <div style="text-align: center; padding: 50px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                            <h1 style="margin: 0 0 10px; font-size: 32px;">Thank You! 🎈</h1>
                            <p style="margin: 0; font-size: 18px; opacity: 0.9;">Sajaavat Events</p>
                            <p style="margin: 10px 0 0; opacity: 0.8; font-size: 14px;">Making your celebrations beautiful</p>
                        </div>
                        
                        <div style="padding: 40px 30px;">
                            <p style="font-size: 20px; margin: 0 0 25px; color: #333;"><strong>Hi ${name}! 👋</strong></p>
                            
                            <p style="line-height: 1.6; color: #555; margin: 0 0 25px;">
                                Thank you for your interest in our balloon decoration services! We've received your enquiry for 
                                <strong style="color: #007cba; background: #e3f2fd; padding: 3px 8px; border-radius: 4px;">${eventTypeMap[eventType] || eventType}</strong> 
                                and we're excited to help make your celebration absolutely stunning.
                            </p>
                            
                            <div style="background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%); padding: 30px; border-radius: 12px; margin: 30px 0;">
                                <h3 style="color: #333; margin: 0 0 20px; font-size: 18px;">🎯 What happens next?</h3>
                                <div style="space-y: 15px;">
                                    <div style="display: flex; align-items: center; margin: 15px 0;">
                                        <span style="background: #007cba; color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 15px;">1</span>
                                        <span style="color: #444;">We'll prepare a personalized quote within 24 hours</span>
                                    </div>
                                    <div style="display: flex; align-items: center; margin: 15px 0;">
                                        <span style="background: #007cba; color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 15px;">2</span>
                                        <span style="color: #444;">Our decoration specialist will call to discuss your vision</span>
                                    </div>
                                    <div style="display: flex; align-items: center; margin: 15px 0;">
                                        <span style="background: #007cba; color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 15px;">3</span>
                                        <span style="color: #444;">We'll schedule a free consultation if needed</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="background: #fff8e1; padding: 25px; border-radius: 8px; border: 1px solid #ffc107; margin: 30px 0; text-align: center;">
                                <h4 style="margin: 0 0 15px; color: #f57c00;">⚡ Need to speak urgently?</h4>
                                <p style="margin: 0 0 15px; color: #666;">Don't wait - get in touch now!</p>
                                <div style="margin: 15px 0;">
                                    <a href="tel:+447123456789" style="display: inline-block; background: #007cba; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; margin: 5px; font-weight: bold;">📞 Call Now</a>
                                    <a href="https://wa.me/447123456789" style="display: inline-block; background: #25d366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; margin: 5px; font-weight: bold;">💬 WhatsApp</a>
                                </div>
                                <p style="margin: 15px 0 0; font-size: 14px; color: #666;">+44 712 345 6789</p>
                            </div>
                            
                            <div style="text-align: center; margin: 40px 0 30px;">
                                <p style="margin: 0 0 10px; font-size: 18px; color: #333;">Looking forward to making your celebration beautiful! ✨</p>
                                <p style="margin: 0; color: #666;">We can't wait to bring your vision to life with stunning balloon decorations.</p>
                            </div>
                        </div>
                        
                        <div style="background: #f8f9fa; padding: 30px; border-top: 1px solid #dee2e6;">
                            <div style="text-align: center; margin-bottom: 25px;">
                                <p style="margin: 0 0 5px; font-weight: bold; color: #333;">Best regards,</p>
                                <p style="margin: 0 0 15px; color: #007cba; font-size: 18px; font-weight: bold;">The Sajaavat Events Team</p>
                                <p style="margin: 0; color: #666; font-size: 14px;">
                                    📞 <a href="tel:+447123456789" style="color: #007cba; text-decoration: none;">+44 712 345 6789</a> | 
                                    💬 <a href="https://wa.me/447123456789" style="color: #25d366; text-decoration: none;">WhatsApp</a>
                                </p>
                            </div>
                            
                            <div style="background: #e9ecef; padding: 20px; border-radius: 8px; border-left: 4px solid #007cba;">
                                <p style="margin: 0 0 10px; font-weight: bold; color: #333; font-size: 14px;">📋 Your Enquiry Summary:</p>
                                <div style="color: #666; font-size: 14px; line-height: 1.5;">
                                    <p style="margin: 5px 0;">🎪 <strong>Event:</strong> ${eventTypeMap[eventType] || eventType}</p>
                                    ${eventDate ? `<p style="margin: 5px 0;">📅 <strong>Date:</strong> ${eventDate}</p>` : ''}
                                    <p style="margin: 5px 0;">📱 <strong>Phone:</strong> ${phone}</p>
                                    <p style="margin: 5px 0;">📧 <strong>Email:</strong> ${email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            })

            console.log('✅ Emails sent successfully:', {
                notification: notificationEmail.data?.id,
                customerReply: customerReply.data?.id
            })

        } catch (emailError) {
            console.error('❌ Email sending failed:', emailError)
        }

        return NextResponse.json({
            success: true,
            message: "🎉 Thank you! We'll get back to you within 24 hours with your free balloon decoration quote."
        })

    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Something went wrong. Please try again or call us at +44 712 345 6789.' },
            { status: 500 }
        )
    }
}