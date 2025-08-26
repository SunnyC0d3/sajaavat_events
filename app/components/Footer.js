'use client'

import Link from 'next/link'
import {useState} from 'react'
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    AlertCircle,
    Instagram,
    Facebook,
    Twitter,
    MessageCircle,
    Heart,
    Baby,
    Building2,
    PartyPopper
} from 'lucide-react'
import {Button} from '@/app/components/Button'
import Image from 'next/image'
import logo from '@/public/images/logo-3.svg'
import * as gtag from '@/lib/gtag'

export default function Footer({hasHeader = true}) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
    })
    const [errors, setErrors] = useState({})

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
        if (errors[name]) {
            setErrors(prev => ({...prev, [name]: ''}))
        }
    }

    const validateForm = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address'
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
        if (!formData.eventType) newErrors.eventType = 'Please select an event type'
        if (!formData.message.trim()) newErrors.message = 'Please describe your event vision'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) return

        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log('Form data:', formData)

            gtag.event({
                action: 'form_submit',
                category: 'contact',
                label: 'contact_form_success',
                value: 1
            })

            setSubmitStatus('success')
            setFormData({
                name: '',
                email: '',
                phone: '',
                eventType: '',
                eventDate: '',
                message: ''
            })
        } catch (error) {
            gtag.event({
                action: 'form_submit',
                category: 'contact',
                label: 'contact_form_error'
            })

            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone Consultation',
            details: '+44 712 345 6789',
            action: 'tel:+447123456789',
            description: 'Call us for immediate balloon decoration consultation',
            structuredData: {telephone: '+44-712-345-6789'}
        },
        {
            icon: MessageCircle,
            title: 'WhatsApp Chat',
            details: '+44 712 345 6789',
            action: 'https://wa.me/447123456789',
            description: 'Quick responses via WhatsApp for event planning',
            structuredData: {sameAs: 'https://wa.me/447123456789'}
        },
        {
            icon: Mail,
            title: 'Email Enquiries',
            details: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
            action: 'mailto:' + process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
            description: 'Send us your Asian wedding decoration requirements',
            structuredData: {email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS}
        },
        {
            icon: MapPin,
            title: 'Service Coverage',
            details: 'London & Surrounding Areas',
            action: null,
            description: 'We travel within 50 miles of London for balloon installations',
            structuredData: {areaServed: 'London, Birmingham, Manchester, Leeds, UK'}
        }
    ]

    const businessHours = [
        {
            day: 'Monday - Friday',
            hours: '9:00 AM - 7:00 PM',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '19:00'
        },
        {day: 'Saturday', hours: '10:00 AM - 6:00 PM', dayOfWeek: 'Saturday', opens: '10:00', closes: '18:00'},
        {day: 'Sunday', hours: '12:00 PM - 5:00 PM', dayOfWeek: 'Sunday', opens: '12:00', closes: '17:00'}
    ]

    const socialLinks = [
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://instagram.com/sajaavat-events',
            color: 'hover:text-pink-500',
            description: 'Follow our balloon decoration portfolio on Instagram'
        },
        {
            name: 'Facebook',
            icon: Facebook,
            url: 'https://facebook.com/sajaavat-events',
            color: 'hover:text-blue-600',
            description: 'Like our Facebook page for Asian wedding inspiration'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            url: 'https://twitter.com/sajaavat-events',
            color: 'hover:text-blue-400',
            description: 'Follow us on Twitter for balloon decoration tips'
        }
    ]

    const eventTypes = [
        {value: 'asian-wedding', label: 'Asian Wedding Decoration', icon: Heart},
        {value: 'baby-shower', label: 'Baby Shower Styling', icon: Baby},
        {value: 'corporate', label: 'Corporate Event Decoration', icon: Building2},
        {value: 'other', label: 'Other Special Celebration', icon: PartyPopper}
    ]

    return (
        <>
            <section
                id="contact"
                className="bg-neutral-50 py-16 lg:py-24"
                itemScope
                itemType="https://schema.org/ContactPage"
                aria-labelledby="contact-heading"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {hasHeader && (
                        <div className="text-center mb-16">
                            <h2 id="contact-heading" className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
                                Get Your Free Balloon Decoration Quote
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                                Ready to transform your Asian wedding or special celebration? Let&apos;s discuss your
                                cultural vision and create something
                                beautiful together that honors your traditions. We&apos;re here to make your London event
                                unforgettable.
                            </p>
                        </div>
                    )}
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-neutral-100 rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send Us Your Event Details</h3>

                            <form onSubmit={handleSubmit} className="space-y-6" itemScope
                                  itemType="https://schema.org/ContactPoint">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 bg-neutral-50 ${
                                            errors.name ? 'border-red-500' : 'border-neutral-300 focus:border-primary-500'
                                        }`}
                                        placeholder="Your full name"
                                        aria-describedby={errors.name ? 'name-error' : undefined}
                                        aria-required="true"
                                    />
                                    {errors.name && (
                                        <p id="name-error" className="mt-1 text-sm text-red-600"
                                           role="alert">{errors.name}</p>
                                    )}
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-900 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 bg-neutral-50 ${
                                                errors.email ? 'border-red-500' : 'border-neutral-300 focus:border-primary-500'
                                            }`}
                                            placeholder="your@email.com"
                                            aria-describedby={errors.email ? 'email-error' : undefined}
                                            aria-required="true"
                                        />
                                        {errors.email && (
                                            <p id="email-error" className="mt-1 text-sm text-red-600"
                                               role="alert">{errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-900 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 bg-neutral-50 ${
                                                errors.phone ? 'border-red-500' : 'border-neutral-300 focus:border-primary-500'
                                            }`}
                                            placeholder="+44 712 345 6789"
                                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                                            aria-required="true"
                                        />
                                        {errors.phone && (
                                            <p id="phone-error" className="mt-1 text-sm text-red-600"
                                               role="alert">{errors.phone}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-900 mb-2">
                                            Event Type *
                                        </label>
                                        <select
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 bg-neutral-50 ${
                                                errors.eventType ? 'border-red-500' : 'border-neutral-300 focus:border-primary-500'
                                            }`}
                                            aria-describedby={errors.eventType ? 'eventType-error' : undefined}
                                            aria-required="true"
                                        >
                                            <option value="">Select your event type</option>
                                            {eventTypes.map((type) => (
                                                <option key={type.value} value={type.value}>
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.eventType && (
                                            <p id="eventType-error" className="mt-1 text-sm text-red-600"
                                               role="alert">{errors.eventType}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-900 mb-2">
                                            Preferred Event Date
                                        </label>
                                        <input
                                            type="date"
                                            name="eventDate"
                                            value={formData.eventDate}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-neutral-50"
                                            aria-label="Select your preferred event date"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                                        Tell us about your celebration vision *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none bg-neutral-50 ${
                                            errors.message ? 'border-red-500' : 'border-neutral-300 focus:border-primary-500'
                                        }`}
                                        placeholder="Describe your event, cultural requirements, color preferences, venue details, and any special balloon decoration requirements..."
                                        aria-describedby={errors.message ? 'message-error' : undefined}
                                        aria-required="true"
                                    />
                                    {errors.message && (
                                        <p id="message-error" className="mt-1 text-sm text-red-600"
                                           role="alert">{errors.message}</p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                    icon={isSubmitting ? null : Send}
                                    iconPosition="right"
                                    disabled={isSubmitting}
                                    aria-describedby="submit-description"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center space-x-2">
                                            <div
                                                className="w-5 h-5 border-2 border-neutral-50 border-t-transparent rounded-full animate-spin"
                                                role="status"
                                                aria-label="Sending message"/>
                                            <span>Sending Message...</span>
                                        </div>
                                    ) : (
                                        'Send Free Quote Request'
                                    )}
                                </Button>
                                <p id="submit-description" className="sr-only">
                                    Click to send your balloon decoration enquiry and receive a free quote within 24
                                    hours
                                </p>

                                {submitStatus === 'success' && (
                                    <div
                                        className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg"
                                        role="alert"
                                        aria-live="polite"
                                    >
                                        <CheckCircle className="w-5 h-5" aria-hidden="true"/>
                                        <span>Thank you! We&apos;ll get back to you within 24 hours with your free balloon decoration quote.</span>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div
                                        className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
                                        role="alert"
                                        aria-live="polite"
                                    >
                                        <AlertCircle className="w-5 h-5" aria-hidden="true"/>
                                        <span>Something went wrong. Please try again or call us directly at +44 712 345 6789.</span>
                                    </div>
                                )}
                            </form>
                        </div>

                        <div className="space-y-8">
                            <div itemScope itemType="https://schema.org/LocalBusiness">
                                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Contact Our Balloon Decoration
                                    Experts</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div
                                                className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <info.icon className="w-6 h-6 text-neutral-50" aria-hidden="true"/>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-neutral-900">{info.title}</h4>
                                                {info.action && info.action.startsWith('tel:') ? (
                                                    <a
                                                        href={info.action}
                                                        onClick={() => gtag.event({
                                                            action: 'phone_click',
                                                            category: 'contact',
                                                            label: 'phone_footer_contact'
                                                        })}
                                                        className="text-primary-600 hover:text-primary-700 font-medium"
                                                        aria-label={`${info.title}: ${info.details}`}
                                                    >
                                                        {info.details}
                                                    </a>
                                                ) : info.action ? (
                                                    <a
                                                        href={info.action}
                                                        className="text-primary-600 hover:text-primary-700 font-medium"
                                                        {...(info.action.startsWith('http') && {
                                                            target: '_blank',
                                                            rel: 'noopener noreferrer'
                                                        })}
                                                        aria-label={`${info.title}: ${info.details}`}
                                                    >
                                                        {info.details}
                                                    </a>
                                                ) : (
                                                    <p className="text-neutral-900 font-medium">{info.details}</p>
                                                )}
                                                <p className="text-neutral-600 text-sm">{info.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Hidden structured data */}
                                <div className="sr-only">
                                    <span itemProp="name">Sajaavat Events</span>
                                    <span itemProp="telephone">+44-712-345-6789</span>
                                    <span itemProp="email">{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span>
                                    <span
                                        itemProp="areaServed">London, Birmingham, Manchester, Leeds, Leicester, UK</span>
                                    <span itemProp="priceRange">££-£££</span>
                                </div>
                            </div>

                            <div className="bg-neutral-100 rounded-lg p-6" itemScope
                                 itemType="https://schema.org/LocalBusiness">
                                <div className="flex items-center space-x-3 mb-4">
                                    <Clock className="w-6 h-6 text-primary-500" aria-hidden="true"/>
                                    <h4 className="font-semibold text-neutral-900">Business Hours for Consultations</h4>
                                </div>
                                <div className="space-y-2">
                                    {businessHours.map((schedule, index) => (
                                        <div key={index} className="flex justify-between items-center"
                                             itemProp="openingHoursSpecification" itemScope
                                             itemType="https://schema.org/OpeningHoursSpecification">
                                            <span className="text-neutral-600"
                                                  itemProp="dayOfWeek">{schedule.day}</span>
                                            <span className="text-neutral-900 font-medium">
                                                <span itemProp="opens" content={schedule.opens}></span>
                                                <span itemProp="closes" content={schedule.closes}></span>
                                                {schedule.hours}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-neutral-500 mt-3">
                                    Emergency consultations available for urgent event requirements
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-neutral-900 mb-4">Follow Our Balloon Decoration
                                    Work</h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social) => (
                                        <Link
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 bg-neutral-200 rounded-lg flex items-center justify-center text-neutral-600 transition-colors duration-200 ${social.color}`}
                                            aria-label={social.description}
                                            title={social.description}
                                        >
                                            <social.icon className="w-6 h-6" aria-hidden="true"/>
                                        </Link>
                                    ))}
                                </div>
                                <p className="text-sm text-neutral-600 mt-2">
                                    See our latest Asian wedding decorations and customer reviews
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-neutral-900 text-neutral-50" itemScope itemType="https://schema.org/LocalBusiness">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-2">
                            <div className="flex-shrink-0 w-[100px] flex items-center space-x-3 mb-4">
                                <Link
                                    href="/"
                                    className="flex items-center"
                                    aria-label="Sajaavat Events - Return to homepage"
                                    itemProp="url"
                                >
                                    <Image
                                        src={logo}
                                        alt="Sajaavat Events - Professional balloon decorations for Asian weddings and events in London UK"
                                        width={200}
                                        height={50}
                                        itemProp="logo"
                                    />
                                </Link>
                            </div>
                            <p className="text-neutral-300 leading-relaxed mb-6 max-w-md" itemProp="description">
                                Creating memorable Asian wedding celebrations and special events with stunning balloon
                                artistry.
                                Specializing in Sikh, Hindu, Pakistani, and Bengali wedding decorations across London
                                and surrounding areas.
                            </p>

                            <div className="space-y-2">
                                <a
                                    href="tel:+447123456789"
                                    className="flex items-center space-x-2 text-neutral-300 hover:text-neutral-50 transition-colors"
                                    aria-label="Call Sajaavat Events for balloon decoration consultation"
                                    itemProp="telephone"
                                    onClick={() => gtag.event({
                                        action: 'phone_click',
                                        category: 'contact',
                                        label: 'phone_footer_bottom'
                                    })}
                                >
                                    <Phone className="w-4 h-4" aria-hidden="true"/>
                                    <span>+44 712 345 6789</span>
                                </a>
                                <a
                                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                                    className="flex items-center space-x-2 text-neutral-300 hover:text-neutral-50 transition-colors"
                                    aria-label="Email Sajaavat Events for event enquiries"
                                    itemProp="email"
                                >
                                    <Mail className="w-4 h-4" aria-hidden="true"/>
                                    <span>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span>
                                </a>
                            </div>

                            {/* Hidden structured data */}
                            <div className="sr-only">
                                <span itemProp="name">Sajaavat Events</span>
                                <span itemProp="alternateName">Sajaavat Events Balloon Decorations</span>
                                <span itemProp="areaServed">London, Birmingham, Manchester, Leeds, Leicester, Bradford, Southall, UK</span>
                                <span itemProp="serviceType">Asian Wedding Decorations, Balloon Arch Installation, Event Styling</span>
                                <span itemProp="priceRange">££-£££</span>
                            </div>
                        </div>

                        <nav className="space-y-4" aria-labelledby="footer-navigation">
                            <h4 id="footer-navigation" className="font-semibold text-neutral-50 mb-4">Quick Links</h4>
                            <ul className="space-y-2" role="list">
                                {[
                                    {
                                        label: 'Asian Wedding Services',
                                        href: '#services',
                                        description: 'Balloon decorations for Sikh, Hindu, Pakistani weddings'
                                    },
                                    {
                                        label: 'Portfolio Gallery',
                                        href: '#gallery',
                                        description: 'Browse our balloon decoration portfolio'
                                    },
                                    {
                                        label: 'Customer Reviews',
                                        href: '#testimonials',
                                        description: 'Read testimonials from satisfied clients'
                                    },
                                    {
                                        label: 'Free Consultation',
                                        href: '#contact',
                                        description: 'Get a free quote for your event'
                                    }
                                ].map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-neutral-300 hover:text-neutral-50 transition-colors"
                                            aria-label={link.description}
                                            title={link.description}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-neutral-50 mb-4">Legal & Social</h4>
                            <ul className="space-y-2 mb-6" role="list">
                                <li>
                                    <a
                                        href="/terms"
                                        className="text-neutral-300 hover:text-neutral-50 transition-colors"
                                        aria-label="Read our terms and conditions for balloon decoration services"
                                    >
                                        Terms & Conditions
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/privacy"
                                        className="text-neutral-300 hover:text-neutral-50 transition-colors"
                                        aria-label="Read our privacy policy and data protection information"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>

                            <div className="flex space-x-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-300 hover:text-neutral-50 hover:bg-primary-500 transition-all duration-200"
                                        aria-label={social.description}
                                        title={social.description}
                                        itemProp="sameAs"
                                    >
                                        <social.icon className="w-5 h-5" aria-hidden="true"/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
                        <p className="text-neutral-400 text-sm">
                            © {new Date().getFullYear()} Sajaavat. All rights reserved. |
                            <span itemProp="description"> Professional balloon decoration services for Asian weddings, baby showers, and corporate events across London, Birmingham, Manchester, Leeds, and UK.</span>
                        </p>
                        <p className="text-neutral-500 text-xs mt-2">
                            Specializing in Sikh wedding decorations, Hindu ceremony styling, Pakistani wedding
                            celebrations,
                            baby shower balloon decorations, and corporate event styling throughout Greater London and
                            surrounding areas.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}