import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from "@/app/components/Footer";
import { ArrowLeft, FileText, CreditCard, Calendar, Shield, Phone, AlertTriangle } from 'lucide-react'

export const metadata = {
    title: 'Terms & Conditions - Sajaavat Events Balloon Decoration Services | Asian Wedding Specialists London',
    description: 'Read the terms and conditions for Sajaavat Events professional balloon decoration services. Booking policies, cancellation terms, and service agreements for Asian weddings, baby showers, and events across London and UK.',
    keywords: [
        'Sajaavat Events terms conditions',
        'balloon decoration booking policy',
        'Asian wedding decorator terms',
        'event decoration service agreement',
        'balloon installation terms London',
        'wedding decoration cancellation policy',
        'corporate event terms conditions',
        'balloon decoration contract terms'
    ],
    openGraph: {
        title: 'Terms & Conditions - Sajaavat Events Balloon Decoration Services',
        description: 'Professional terms and conditions for Asian wedding balloon decoration services, booking policies, and service agreements.',
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
    "name": "Terms & Conditions - Sajaavat Events Balloon Decorations",
    "description": "Terms and conditions for professional balloon decoration services specializing in Asian weddings and special events",
    "url": process.env.NEXT_PUBLIC_SITE_URL + '/terms',
    "isPartOf": {
        "@type": "WebSite",
        "name": "Sajaavat Events",
        "url": process.env.NEXT_PUBLIC_SITE_URL
    },
    "about": {
        "@type": "Service",
        "name": "Balloon Decoration Services",
        "description": "Professional balloon decorations for Asian weddings, baby showers, and corporate events",
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
            summary: 'Welcome to Sajaavat Events balloon decoration services'
        },
        {
            id: 'services',
            title: '2. Our Balloon Decoration Services',
            icon: Calendar,
            summary: 'Asian weddings, baby showers, and corporate events'
        },
        {
            id: 'booking',
            title: '3. Booking & Payment Terms',
            icon: CreditCard,
            summary: 'How to secure your decoration services'
        },
        {
            id: 'cancellation',
            title: '4. Cancellation & Refund Policy',
            icon: AlertTriangle,
            summary: 'Important cancellation terms and refund conditions'
        },
        {
            id: 'service-delivery',
            title: '5. Service Delivery & Installation',
            icon: Shield,
            summary: 'What to expect from our balloon decoration team'
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
                            <li><a href="/" className="hover:text-primary-600">Home</a></li>
                            <li>/</li>
                            <li className="text-neutral-900 font-medium">Terms & Conditions</li>
                        </ol>
                    </nav>

                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                            Terms & Conditions
                        </h1>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                            Professional terms and conditions for Sajaavat Events balloon decoration services,
                            specializing in Asian weddings, baby showers, and corporate events across London and UK.
                        </p>
                        <p className="text-sm text-neutral-500 mt-4">
                            Last updated: January 2025 | Applicable to all balloon decoration bookings
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
                                Welcome to Sajaavat Events ("we," "our," or "us"), London's premier balloon decoration specialists
                                for Asian weddings, baby showers, and special events. These Terms and Conditions ("Terms") govern
                                your use of our professional balloon decoration and event styling services across London,
                                Birmingham, Manchester, Leeds, and throughout the UK.
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                By booking our balloon decoration services for your Sikh wedding, Hindu ceremony, Pakistani celebration,
                                baby shower, or corporate event, you agree to be legally bound by these Terms.
                            </p>
                        </section>

                        <section id="services">
                            <div className="flex items-center space-x-3 mb-6">
                                <Calendar className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">2. Our Balloon Decoration Services</h2>
                            </div>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                Sajaavat Events provides professional balloon decoration services specializing in cultural celebrations
                                and special events across the UK:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-neutral-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-neutral-800 mb-3">🎊 Asian Wedding Specialists</h3>
                                    <ul className="list-disc list-inside space-y-1 text-neutral-600 text-sm">
                                        <li>Sikh wedding mandap backdrop decorations</li>
                                        <li>Hindu ceremony balloon arch installations</li>
                                        <li>Pakistani wedding reception styling</li>
                                        <li>Tamil and Bengali wedding celebrations</li>
                                        <li>Cultural color coordination and authenticity</li>
                                    </ul>
                                </div>

                                <div className="bg-neutral-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-neutral-800 mb-3">🎈 Event Decoration Services</h3>
                                    <ul className="list-disc list-inside space-y-1 text-neutral-600 text-sm">
                                        <li>Baby shower and gender reveal decorations</li>
                                        <li>Corporate event and product launch styling</li>
                                        <li>Birthday party and anniversary celebrations</li>
                                        <li>Custom balloon arch installations</li>
                                        <li>Complete setup and breakdown services</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <p className="text-blue-800 text-sm">
                                    <strong>Service Areas:</strong> We provide balloon decoration services throughout London and within
                                    50 miles, including Birmingham, Manchester, Leeds, Leicester, Bradford, Southall, and surrounding areas.
                                    All services are subject to availability and venue suitability assessment.
                                </p>
                            </div>
                        </section>

                        {/* Continue with remaining sections... */}

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