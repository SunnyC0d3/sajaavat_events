'use client'

import Link from 'next/link'
import {useState} from 'react'
import {
    Mail,
    MapPin,
    Send,
    CheckCircle,
    AlertCircle,
    Instagram
} from 'lucide-react'
import {Button} from '@/app/components/Button'
import Image from 'next/image'
import logo from '@/public/images/logo-3.svg'

export default function Footer({hasHeader = true}) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDates: '',
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
        if (!formData.eventType.trim()) newErrors.eventType = 'Event type is required'

        if (formData.eventDates.trim()) {
            const hasNumbers = /\d/.test(formData.eventDates)
            const looksLikeDate = /\d{1,2}(\/|-|th|st|nd|rd|\s)/.test(formData.eventDates) ||
                /(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i.test(formData.eventDates)

            if (!hasNumbers || !looksLikeDate) {
                newErrors.eventDates = 'Please enter dates in a valid format (e.g. 15th Jan 2025, 20/01/2025)'
            }
        }

        if (!formData.message.trim()) newErrors.message = 'Please describe your decor vision'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.ok) {
                if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'form_submit', {
                        event_category: 'contact',
                        event_label: 'contact_form_success',
                        value: 1,
                    })
                }

                setSubmitStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    eventType: '',
                    eventDates: '',
                    message: ''
                })
            } else {
                throw new Error(data.error || 'Something went wrong')
            }
        } catch (error) {
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'form_submit', {
                    event_category: 'contact',
                    event_label: 'contact_form_error',
                    value: 1,
                })
            }

            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Enquiries',
            details: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
            action: 'mailto:' + process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
            description: 'Send us your event details and decor vision'
        },
        {
            icon: MapPin,
            title: 'Service Coverage',
            details: 'Coventry & Nationwide UK',
            action: null,
            description: 'Based in Coventry, styling events across the UK'
        }
    ]

    const socialLinks = [
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://instagram.com/sajaavat.events',
            color: 'hover:text-pink-500',
            description: 'Follow our event decor portfolio on Instagram'
        }
    ]

    const navigationLinks = [
        {
            label: 'Decor Portfolio',
            href: '/#gallery',
            description: 'Explore our wedding and event decor gallery'
        },
        {
            label: 'Client Reviews',
            href: '/#testimonials',
            description: 'Read testimonials from clients across the UK'
        },
        {
            label: 'Free Consultation',
            href: '/#contact',
            description: 'Request a free decor consultation and quote'
        }
    ]

    return (
        <>
            <section
                id="contact"
                className="bg-neutral-50 py-16 lg:py-24"
                aria-labelledby="contact-heading"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {hasHeader && (
                        <div className="text-center mb-16">
                            <h2 id="contact-heading" className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
                                Request Your Free Decor Quote
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                                Planning a wedding, celebration, or corporate event? Share your theme, venue, and vision — we’ll create a
                                bespoke decor concept with statement backdrops and styling that elevates your space. Based in Coventry and
                                available across the UK.
                            </p>
                        </div>
                    )}
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-neutral-100 rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send Us Your Event Details</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
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
                                        <input
                                            type="text"
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 bg-neutral-50 ${
                                                errors.eventType ? 'border-red-500' : 'border-neutral-300 focus:border-primary-500'
                                            }`}
                                            placeholder="e.g. Wedding, Reception, Birthday, Corporate Event"
                                            aria-describedby={errors.eventType ? 'eventType-error' : undefined}
                                            aria-required="true"
                                        />
                                        {errors.eventType && (
                                            <p id="eventType-error" className="mt-1 text-sm text-red-600"
                                               role="alert">{errors.eventType}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-900 mb-2">
                                            Preferred Event Dates
                                        </label>
                                        <input
                                            type="text"
                                            name="eventDates"
                                            value={formData.eventDates}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 bg-neutral-50 ${
                                                errors.eventDates ? 'border-red-500' : 'border-neutral-300 focus:border-primary-500'
                                            }`}
                                            placeholder="e.g. 15th Jan 2026, 20/01/2026"
                                            aria-label="Enter your preferred event dates"
                                            aria-describedby={errors.eventDates ? 'eventDates-error' : 'eventDates-help'}
                                        />
                                        {errors.eventDates ? (
                                            <p id="eventDates-error" className="mt-1 text-sm text-red-600" role="alert">
                                                {errors.eventDates}
                                            </p>
                                        ) : (
                                            <p id="eventDates-help" className="mt-1 text-xs text-neutral-500">
                                                Enter one or multiple dates in format: DD/MM/YYYY or 15th Jan 2026
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                                        Tell us about your decor vision *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none bg-neutral-50 ${
                                            errors.message ? 'border-red-500' : 'border-neutral-300 focus:border-primary-500'
                                        }`}
                                        placeholder="Share your venue, theme, colours, guest count, and any inspiration photos or must-have decor moments (stage/backdrop, entrance, reception, photo area)..."
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
                                            <span>Sending...</span>
                                        </div>
                                    ) : (
                                        'Send Quote Request'
                                    )}
                                </Button>
                                <p id="submit-description" className="sr-only">
                                    Click to send your event decor enquiry and receive a response within 24 hours.
                                </p>

                                {submitStatus === 'success' && (
                                    <div
                                        className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg"
                                        role="alert"
                                        aria-live="polite"
                                    >
                                        <CheckCircle className="w-5 h-5" aria-hidden="true"/>
                                        <span>Thank you! We&apos;ll get back to you within 24 hours with your free decor quote.</span>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div
                                        className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
                                        role="alert"
                                        aria-live="polite"
                                    >
                                        <AlertCircle className="w-5 h-5" aria-hidden="true"/>
                                        <span>Something went wrong. Please try again.</span>
                                    </div>
                                )}
                            </form>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                                    Contact Our Event Decor Team
                                </h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div
                                                className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <info.icon className="w-6 h-6" aria-hidden="true"/>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-neutral-900">{info.title}</h4>
                                                {info.action && info.action.startsWith('tel:') ? (
                                                    <a
                                                        href={info.action}
                                                        onClick={() => {
                                                            if (typeof window !== 'undefined' && window.gtag) {
                                                                window.gtag('event', 'form_submit', {
                                                                    event_category: 'contact',
                                                                    event_label: 'contact_form_error',
                                                                    value: 1,
                                                                });
                                                            }
                                                        }}
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
                            </div>

                            <div>
                                <h4 className="font-semibold text-neutral-900 mb-4">Follow Our Decor Work</h4>
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
                                    See our latest decor setups, venue styling, and client moments
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-neutral-900 text-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-2">
                            <div className="flex-shrink-0 w-[100px] flex items-center space-x-3 mb-4">
                                <Link
                                    href="/"
                                    className="flex items-center"
                                    aria-label="Sajaavat Events - Return to homepage"
                                >
                                    <Image
                                        src={logo}
                                        alt="Sajaavat Events - Bespoke wedding and event decor specialists in Coventry and across the UK"
                                        width={200}
                                        height={50}
                                    />
                                </Link>
                            </div>
                            <p className="text-neutral-300 leading-relaxed mb-6 max-w-md">
                                Bespoke wedding and event decor, luxury backdrops, and venue styling designed around your celebration.
                                From cultural ceremonies and receptions to birthdays and corporate events — based in Coventry and available
                                across the UK.
                            </p>

                            <div className="space-y-2">
                                <a
                                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                                    className="flex items-center space-x-2 text-neutral-300 hover:text-neutral-50 transition-colors"
                                    aria-label="Email Sajaavat Events for event enquiries"
                                >
                                    <Mail className="w-4 h-4" aria-hidden="true"/>
                                    <span>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span>
                                </a>
                            </div>
                        </div>

                        <nav className="space-y-4" aria-labelledby="footer-navigation">
                            <h4 id="footer-navigation" className="font-semibold text-neutral-50 mb-4">Quick Links</h4>
                            <ul className="space-y-2" role="list">
                                {navigationLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-300 hover:text-neutral-50 transition-colors"
                                            aria-label={link.description}
                                            title={link.description}
                                        >
                                            {link.label}
                                        </Link>
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
                                        aria-label="Read our terms and conditions for event decor services"
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
                                    >
                                        <social.icon className="w-5 h-5" aria-hidden="true"/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
                        <p className="text-neutral-400 text-sm">
                            © {new Date().getFullYear()} Sajaavat Events. All rights reserved. |
                            Bespoke wedding and event decor, luxury backdrops, and venue styling across the UK.
                        </p>
                        <p className="text-neutral-500 text-xs mt-2">
                            Based in Coventry, serving the West Midlands and nationwide — styling weddings, cultural celebrations,
                            corporate events, and private parties with tailored decor concepts.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
