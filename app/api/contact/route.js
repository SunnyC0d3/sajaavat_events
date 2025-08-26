import {NextResponse} from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
})

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
            const notificationEmail = {
                from: process.env.GMAIL_USER,
                to: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
                subject: `New Balloon Decoration Enquiry - ${eventTypeMap[eventType] || eventType}`,
                html: `
                  <h2>New Contact Form Submission</h2>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Phone:</strong> ${phone}</p>
                  <p><strong>Event Type:</strong> ${eventTypeMap[eventType] || eventType}</p>
                  ${eventDate ? `<p><strong>Event Date:</strong> ${eventDate}</p>` : ''}
                  <p><strong>Message:</strong></p>
                  <p>${message.replace(/\n/g, '<br>')}</p>
                  <hr>
                  <p><small>Submitted at: ${new Date().toLocaleString('en-GB')}</small></p>
                `
            }

            const customerReply = {
                from: process.env.GMAIL_USER,
                to: email,
                subject: 'Thank you for your balloon decoration enquiry - Sajaavat Events',
                html: `
                  <h2>Thank you for contacting Sajaavat Events!</h2>
                  <p>Hi ${name},</p>
                  <p>Thank you for your interest in our balloon decoration services. We've received your enquiry for <strong>${eventTypeMap[eventType] || eventType}</strong> and will get back to you within 24 hours with a personalized quote.</p>
                  
                  <h3>What happens next?</h3>
                  <ul>
                    <li>We'll review your requirements and prepare a custom quote</li>
                    <li>One of our decoration specialists will call you to discuss your vision</li>
                    <li>We'll schedule a free consultation if needed</li>
                  </ul>
                  
                  <p>If you have any urgent questions, please don't hesitate to call us at <strong>+44 712 345 6789</strong> or WhatsApp us for a quick response.</p>
                  
                  <p>Looking forward to making your celebration beautiful!</p>
                  
                  <p>Best regards,<br>
                  The Sajaavat Events Team<br>
                  <a href="tel:+447123456789">+44 712 345 6789</a><br>
                  <a href="https://wa.me/447123456789">WhatsApp</a></p>
                  
                  <hr>
                  <p><small>Your enquiry details:</small></p>
                  <p><small><strong>Event Type:</strong> ${eventTypeMap[eventType] || eventType}</small></p>
                  ${eventDate ? `<p><small><strong>Preferred Date:</strong> ${eventDate}</small></p>` : ''}
                  <p><small><strong>Phone:</strong> ${phone}</small></p>
                `
            }

            await Promise.all([
                transporter.sendMail(notificationEmail),
                transporter.sendMail(customerReply)
            ])

        } catch (emailError) {
            console.error('Email sending failed:', emailError)
        }

        return NextResponse.json({
            success: true,
            message: 'Thank you! We\'ll get back to you within 24 hours with your free balloon decoration quote.'
        })

    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            {error: 'Something went wrong. Please try again or call us at +44 712 345 6789.'},
            {status: 500}
        )
    }
}