import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from "@/app/components/Footer"
import { ArrowLeft, FileText, CreditCard, Calendar, Shield, Phone, AlertTriangle } from 'lucide-react'

export const metadata = {
    title: 'Terms & Conditions - Sajaavat Events | Bespoke Wedding & Event Decor Coventry & UK',
    description:
        'Read the terms and conditions for Sajaavat Events bespoke wedding and event decor services. Booking, payments, cancellations, and setup details for luxury backdrops, venue styling, and event decor across Coventry and the UK.',
    keywords: [
        'Sajaavat Events terms and conditions',
        'event decor booking policy',
        'wedding decor terms UK',
        'backdrop hire terms and conditions',
        'venue styling service agreement',
        'event decorator cancellation policy',
        'Coventry event decor terms',
        'UK wedding decor contract'
    ],
    openGraph: {
        title: 'Terms & Conditions - Sajaavat Events',
        description:
            'Professional terms and conditions for bespoke wedding and event decor services, including booking policies, payments, and cancellations.',
        url: process.env.NEXT_PUBLIC_SITE_URL + '/terms',
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_SITE_URL + '/terms',
    },
    robots: {
        index: true,
        follow: true,
        noarchive: true,
    },
}

// Terms page schema
const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": process.env.NEXT_PUBLIC_SITE_URL + '/terms',
    "name": "Terms & Conditions - Sajaavat Events",
    "description":
        "Terms and conditions for bespoke wedding and event decor services, including luxury backdrops, venue styling, and event setup.",
    "url": process.env.NEXT_PUBLIC_SITE_URL + '/terms',
    "isPartOf": {
        "@type": "WebSite",
        "name": "Sajaavat Events",
        "url": process.env.NEXT_PUBLIC_SITE_URL
    },
    "about": {
        "@type": "Service",
        "name": "Wedding & Event Decor Services",
        "description": "Bespoke decor services including backdrops, stage styling, and venue transformation",
        "provider": {
            "@type": "Organization",
            "name": "Sajaavat Events"
        }
    },
    "dateModified": "2025-01-01",
    "inLanguage": "en-GB"
}

export default function Terms() {
    const termsSections = [
        {
            id: 'introduction',
            title: '1. Introduction',
            icon: FileText,
            summary: 'About these terms and our services'
        },
        {
            id: 'services',
            title: '2. Our Services',
            icon: Calendar,
            summary: 'Backdrops, venue styling, and event decor'
        },
        {
            id: 'booking',
            title: '3. Booking & Payment Terms',
            icon: CreditCard,
            summary: 'Deposits, balances, and how to secure your date'
        },
        {
            id: 'cancellation',
            title: '4. Cancellation & Refund Policy',
            icon: AlertTriangle,
            summary: 'Cancellation timelines and refund conditions'
        },
        {
            id: 'service-delivery',
            title: '5. Delivery, Setup & Access',
            icon: Shield,
            summary: 'What to expect on the day (access, timings, venue rules)'
        },
        {
            id: 'contact',
            title: '6. Contact Information',
            icon: Phone,
            summary: 'How to reach us for questions or support'
        }
    ]

    return (
        <div className="min-h-screen bg-neutral-50">
            <Header />

            {/* Schema markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
            />

            <main className="pt-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="mb-8" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2 text-sm text-neutral-600">
                            <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
                            <li>/</li>
                            <li className="text-neutral-900 font-medium">Terms & Conditions</li>
                        </ol>
                    </nav>

                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                            Terms & Conditions
                        </h1>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                            These terms apply to Sajaavat Events bespoke wedding and event decor services, including luxury
                            backdrops, stage styling, and venue transformation across Coventry and the UK.
                        </p>
                        <p className="text-sm text-neutral-500 mt-4">
                            Last updated: January 2025
                        </p>
                    </div>

                    {/* Quick Navigation */}
                    <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Quick Navigation</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {termsSections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                                >
                                    <section.icon className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <div className="font-medium text-neutral-900 text-sm">{section.title}</div>
                                        <div className="text-neutral-600 text-xs">{section.summary}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 space-y-12">

                        <section id="introduction">
                            <div className="flex items-center space-x-3 mb-6">
                                <FileText className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">1. Introduction</h2>
                            </div>
                            <p className="text-neutral-600 leading-relaxed mb-4">
                                Welcome to Sajaavat Events (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We provide bespoke wedding and event decor
                                services including luxury backdrops, stage focal points, entrance styling, and venue transformation.
                                We are based in Coventry and serve clients across the UK.
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                By enquiring about or booking our services, you agree to be bound by these Terms & Conditions.
                                If you do not agree, please do not proceed with a booking.
                            </p>
                        </section>

                        <section id="services">
                            <div className="flex items-center space-x-3 mb-6">
                                <Calendar className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">2. Our Services</h2>
                            </div>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                We offer tailored decor packages depending on your event, venue, and design requirements. Services may include:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-neutral-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-neutral-800 mb-3">✨ Weddings & Receptions</h3>
                                    <ul className="list-disc list-inside space-y-1 text-neutral-600 text-sm">
                                        <li>Stage and backdrop styling</li>
                                        <li>Ceremony focal points (including mandap-inspired staging)</li>
                                        <li>Reception decor and photo moments</li>
                                        <li>Entrance styling and welcome displays</li>
                                        <li>Theme and colour coordination</li>
                                    </ul>
                                </div>

                                <div className="bg-neutral-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-neutral-800 mb-3">🏢 Events & Celebrations</h3>
                                    <ul className="list-disc list-inside space-y-1 text-neutral-600 text-sm">
                                        <li>Corporate event styling and branded backdrops</li>
                                        <li>Birthdays, engagements, anniversaries, and private celebrations</li>
                                        <li>Venue transformation for halls, hotels, and home events</li>
                                        <li>Design, delivery, setup, and dismantle (where agreed)</li>
                                        <li>On-site styling and finishing touches</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <p className="text-blue-800 text-sm">
                                    <strong>Service Areas:</strong> We are based in Coventry (West Midlands) and travel across the UK.
                                    Travel fees may apply depending on distance, access, timings, and venue requirements.
                                    All bookings are subject to availability and suitability of the venue.
                                </p>
                            </div>
                        </section>

                        <section id="booking">
                            <div className="flex items-center space-x-3 mb-6">
                                <CreditCard className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">3. Booking & Payment Terms</h2>
                            </div>
                            <ul className="list-disc list-inside space-y-3 ml-4 text-neutral-600">
                                <li><strong>Quotes:</strong> Quotes are based on the information provided at the time of enquiry (event type, venue, dates, and design requirements).</li>
                                <li><strong>Booking Confirmation:</strong> Your date is only secured once the required deposit is paid and you receive written confirmation from us.</li>
                                <li><strong>Deposit:</strong> Deposits are typically non-refundable as they reserve your date and cover planning/design time (unless we cancel as described below).</li>
                                <li><strong>Balance Payment:</strong> The remaining balance is due by the date stated on your invoice/booking confirmation (commonly before the event date).</li>
                                <li><strong>Additional Costs:</strong> Changes to design scope, venue constraints, additional items, or last-minute requests may incur additional charges.</li>
                            </ul>

                            <div className="mt-6 bg-neutral-50 p-4 rounded-lg">
                                <p className="text-neutral-700 text-sm">
                                    <strong>Payment Methods:</strong> Bank transfer and other methods may be available. Any payment provider fees (if applicable) may be passed on.
                                </p>
                            </div>
                        </section>

                        <section id="cancellation">
                            <div className="flex items-center space-x-3 mb-6">
                                <AlertTriangle className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">4. Cancellation & Refund Policy</h2>
                            </div>
                            <p className="text-neutral-600 leading-relaxed mb-4">
                                If you need to cancel or reschedule, please contact us as soon as possible. Where possible, we will try to
                                accommodate date changes (subject to availability).
                            </p>
                            <ul className="list-disc list-inside space-y-3 ml-4 text-neutral-600">
                                <li><strong>Deposits:</strong> Deposits are generally non-refundable.</li>
                                <li><strong>Rescheduling:</strong> Reschedules may be possible if your new date is available. Additional costs may apply.</li>
                                <li><strong>Refunds:</strong> Any refunds (if applicable) are assessed case-by-case based on work already completed, materials sourced, and proximity to the event date.</li>
                                <li><strong>Our Cancellation:</strong> If we must cancel due to unforeseen circumstances and cannot offer a suitable alternative, we will refund payments received for services not provided.</li>
                            </ul>
                            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <p className="text-yellow-800 text-sm">
                                    <strong>Important:</strong> Please ensure your venue booking and key details are confirmed before committing to major design changes.
                                </p>
                            </div>
                        </section>

                        <section id="service-delivery">
                            <div className="flex items-center space-x-3 mb-6">
                                <Shield className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">5. Delivery, Setup & Access</h2>
                            </div>
                            <ul className="list-disc list-inside space-y-3 ml-4 text-neutral-600">
                                <li><strong>Access & Timings:</strong> You (or your venue coordinator) must provide adequate access and setup time as agreed in advance.</li>
                                <li><strong>Venue Rules:</strong> You are responsible for informing us of venue restrictions (loading bays, parking, power access, ladder restrictions, fixing restrictions, etc.).</li>
                                <li><strong>Health & Safety:</strong> We may refuse or adjust installation if conditions are unsafe or not suitable for the agreed setup.</li>
                                <li><strong>On-the-day Changes:</strong> If the venue layout/access differs from what was agreed, we may need to modify the setup to ensure safety and feasibility.</li>
                                <li><strong>Dismantle/Collection:</strong> If dismantle/collection is included in your package, collection time must be agreed with the venue in advance.</li>
                            </ul>
                        </section>

                        <section id="contact">
                            <div className="flex items-center space-x-3 mb-6">
                                <Phone className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">6. Contact Information</h2>
                            </div>
                            <div className="bg-neutral-50 p-6 rounded-lg">
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    If you have questions about these Terms & Conditions, your booking, or your event setup, contact us:
                                </p>
                                <div className="space-y-2 text-neutral-800">
                                    <p><strong>Business:</strong> Sajaavat Events</p>
                                    <p>
                                        <strong>Email:</strong>{' '}
                                        <a
                                            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                                            className="text-primary-600 hover:text-primary-700"
                                        >
                                            {process.env.NEXT_PUBLIC_EMAIL_ADDRESS}
                                        </a>
                                    </p>
                                    <p><strong>Location:</strong> Coventry, West Midlands, United Kingdom</p>
                                </div>
                            </div>
                        </section>

                        <section className="border-t border-neutral-200 pt-6">
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                We may update these Terms & Conditions from time to time. The version displayed on this page will apply to new
                                bookings from the date it is published. Existing bookings will continue under the terms agreed at the time of booking,
                                unless otherwise required by law.
                            </p>
                        </section>
                    </div>

                    <div className="text-center mt-12">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="inline-flex items-center px-8 py-4 text-base h-12 min-w-[120px] rounded-lg border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 transition-all"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer hasHeader={false}/>
        </div>
    )
}
