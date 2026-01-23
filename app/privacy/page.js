import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from "@/app/components/Footer"
import { ArrowLeft, Shield, Eye, Lock, FileText, Users, Calendar } from 'lucide-react'

export const metadata = {
    title: 'Privacy Policy - How Sajaavat Events Protects Your Personal Information | Event Decor Coventry & UK',
    description:
        'Learn how Sajaavat Events collects, uses, and protects your personal information. GDPR and UK Data Protection Act compliant privacy policy for our bespoke wedding and event decor, backdrops, and venue styling services across Coventry and the UK.',
    keywords: [
        'Sajaavat Events privacy policy',
        'event decor data protection',
        'wedding decor privacy policy',
        'venue styling data security',
        'GDPR compliance event services',
        'customer information protection UK',
        'Coventry event decorator privacy',
        'backdrop hire privacy policy'
    ],
    openGraph: {
        title: 'Privacy Policy - Sajaavat Events Data Protection',
        description:
            'How we protect your personal information when you enquire about or book bespoke wedding and event decor services.',
        url: process.env.NEXT_PUBLIC_SITE_URL + '/privacy',
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_SITE_URL + '/privacy',
    },
    robots: {
        index: true,
        follow: true,
        noarchive: true,
    },
}

const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": process.env.NEXT_PUBLIC_SITE_URL + '/privacy',
    "name": "Privacy Policy - Sajaavat Events",
    "description":
        "Privacy policy detailing how Sajaavat Events collects, uses, and protects customer personal information for wedding and event decor, backdrops, and venue styling services.",
    "url": process.env.NEXT_PUBLIC_SITE_URL + '/privacy',
    "isPartOf": {
        "@type": "WebSite",
        "name": "Sajaavat Events",
        "url": process.env.NEXT_PUBLIC_SITE_URL
    },
    "about": {
        "@type": "Organization",
        "name": "Sajaavat Events",
        "description": "Bespoke wedding and event decor specialists",
        "url": process.env.NEXT_PUBLIC_SITE_URL
    },
    "dateModified": "2025-01-01",
    "inLanguage": "en-GB"
}

export default function Privacy() {
    return (
        <div className="min-h-screen bg-neutral-50">
            <Header/>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
            />

            <main className="pt-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="mb-8" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2 text-sm text-neutral-600">
                            <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
                            <li>/</li>
                            <li className="text-neutral-900 font-medium">Privacy Policy</li>
                        </ol>
                    </nav>

                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                            Privacy Policy & Data Protection
                        </h1>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                            How Sajaavat Events protects your personal information when you enquire about or book
                            bespoke wedding and event decor, backdrops, and venue styling services.
                        </p>
                        <p className="text-sm text-neutral-500 mt-4">
                            Last updated: January 2025 | GDPR & UK Data Protection Act Compliant
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 space-y-12">
                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <Shield className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">1. Introduction</h2>
                            </div>
                            <p className="text-neutral-600 leading-relaxed mb-4">
                                At Sajaavat Events (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy and
                                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                                when you use our website or contact us about wedding and event decor services across Coventry and the UK.
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                By using our website or booking our services, you agree to the practices described in this policy.
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <Eye className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">2. Information We Collect</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                                        2.1 Information You Provide (Enquiries & Bookings)
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed mb-3">
                                        We collect information that helps us respond to your enquiry and plan your decor setup, such as:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4 text-neutral-600">
                                        <li><strong>Contact Details:</strong> Name, email address, phone number</li>
                                        <li><strong>Event Information:</strong> Event date(s), venue location, event type (wedding, reception, corporate, private celebration)</li>
                                        <li><strong>Design Preferences:</strong> Theme, colour palette, style references, and any cultural or venue requirements</li>
                                        <li><strong>Quotes & Agreements:</strong> Consultation notes, proposals, and service agreements</li>
                                        <li><strong>Payment Information:</strong> Processed securely through third-party payment providers (we do not store full card details)</li>
                                        <li><strong>Event Photography:</strong> Photos/videos of our work <em>only with your explicit consent</em></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">2.2 Website Usage Information</h3>
                                    <p className="text-neutral-600 leading-relaxed mb-3">
                                        When you visit our website, we may automatically collect:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4 text-neutral-600">
                                        <li>IP address, browser type, device information</li>
                                        <li>Pages viewed, actions taken, and approximate location (city-level)</li>
                                        <li>Cookies and similar technologies (where enabled)</li>
                                        <li>Referral source and search terms used to find our services</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <Users className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">3. How We Use Your Information</h2>
                            </div>
                            <p className="text-neutral-600 leading-relaxed mb-4">
                                We use your information to provide and improve our services, including:
                            </p>
                            <ul className="list-disc list-inside space-y-3 ml-4 text-neutral-600">
                                <li><strong>Responding to Enquiries:</strong> Providing quotes, availability, and recommendations</li>
                                <li><strong>Service Delivery:</strong> Planning, designing, delivering, and setting up decor and backdrops for your event</li>
                                <li><strong>Coordination:</strong> Communicating about logistics, access times, and venue requirements</li>
                                <li><strong>Payments & Invoicing:</strong> Handling deposits, invoices, and receipts securely</li>
                                <li><strong>Customer Support:</strong> Following up after your event to ensure satisfaction</li>
                                <li><strong>Analytics:</strong> Understanding how visitors use our website to improve content and performance</li>
                                <li><strong>Marketing (with consent):</strong> Sharing updates, offers, and portfolio content where you’ve opted in</li>
                                <li><strong>Legal Compliance:</strong> Meeting business, tax, and regulatory requirements</li>
                            </ul>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <Lock className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">4. Legal Basis for Processing (GDPR)</h2>
                            </div>
                            <p className="text-neutral-600 leading-relaxed mb-4">
                                We process personal data under the UK GDPR based on:
                            </p>
                            <div className="space-y-4 text-neutral-600">
                                <div className="bg-neutral-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-neutral-800 mb-2">🤝 Contractual Necessity</h4>
                                    <p>To deliver the decor services you request and fulfil our agreement with you.</p>
                                </div>
                                <div className="bg-neutral-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-neutral-800 mb-2">✅ Legitimate Interests</h4>
                                    <p>To run our business, improve services, and prevent fraud (balanced against your rights).</p>
                                </div>
                                <div className="bg-neutral-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-neutral-800 mb-2">📧 Consent</h4>
                                    <p>For marketing communications and for using event photos/videos in our portfolio.</p>
                                </div>
                                <div className="bg-neutral-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-neutral-800 mb-2">⚖️ Legal Obligation</h4>
                                    <p>To comply with UK tax laws and other applicable legal requirements.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <FileText className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">5. Your Rights Under GDPR</h2>
                            </div>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                You have rights regarding your personal data, including:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { title: 'Right to Access', description: 'Request a copy of the personal data we hold about you' },
                                    { title: 'Right to Rectification', description: 'Ask us to correct inaccurate or incomplete information' },
                                    { title: 'Right to Erasure', description: 'Request deletion of your data (subject to legal requirements)' },
                                    { title: 'Right to Portability', description: 'Receive your data in a usable, machine-readable format' },
                                    { title: 'Right to Restriction', description: 'Ask us to limit how we use your information in certain cases' },
                                    { title: 'Right to Object', description: 'Object to processing based on legitimate interests or direct marketing' },
                                ].map((right, index) => (
                                    <div key={index} className="bg-neutral-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-neutral-800 mb-2">{right.title}</h4>
                                        <p className="text-neutral-600 text-sm">{right.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <p className="text-blue-800 font-medium mb-2">How to Exercise Your Rights:</p>
                                <p className="text-blue-700 text-sm">
                                    Contact us using the details below. We aim to respond within 30 days.
                                </p>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <Calendar className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">6. Data Retention & Security</h2>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">How Long We Keep Your Data</h3>
                                    <ul className="list-disc list-inside space-y-2 ml-4 text-neutral-600">
                                        <li><strong>Enquiry & Planning Data:</strong> Until your event is complete plus up to 12 months for follow-up</li>
                                        <li><strong>Financial Records:</strong> 7 years as required by UK tax law</li>
                                        <li><strong>Marketing Consents:</strong> Until you withdraw consent or unsubscribe</li>
                                        <li><strong>Portfolio Photography:</strong> Until you withdraw consent or request removal</li>
                                        <li><strong>Website Analytics:</strong> Retained in line with our analytics settings</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">Data Security Measures</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        We use appropriate technical and organisational measures designed to protect your information, including
                                        access controls, secure storage, and reputable service providers for email and payment processing.
                                        No method of online transmission is completely secure, so we cannot guarantee absolute security.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <Calendar className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">7. Contact Us</h2>
                            </div>
                            <div className="bg-neutral-50 p-6 rounded-lg">
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    If you have questions about this Privacy Policy, want to exercise your rights, or wish to raise a privacy concern:
                                </p>
                                <div className="space-y-2 text-neutral-800">
                                    <p><strong>Data Controller:</strong> Sajaavat Events</p>
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
                                    <p><strong>Response Time:</strong> Within 30 days of receiving your request</p>
                                </div>
                                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                                    <p className="text-yellow-800 text-sm">
                                        <strong>Complaint Rights:</strong> If you&apos;re not satisfied with our response, you can lodge a complaint with the
                                        Information Commissioner&apos;s Office (ICO).
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="border-t border-neutral-200 pt-6">
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                We may update this Privacy Policy periodically to reflect changes in our services, legal requirements, or data practices.
                                Continued use of our website or services constitutes acceptance of the updated policy.
                            </p>
                            <p className="text-sm text-neutral-500 mt-4">
                                This privacy policy applies to Sajaavat Events and our bespoke wedding and event decor services delivered across Coventry
                                and throughout the UK.
                            </p>
                        </section>
                    </div>

                    <div className="text-center mt-12">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="inline-flex items-center px-8 py-4 text-base h-12 min-w-[120px] rounded-lg border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 transition-all"
                                aria-label="Return to Sajaavat Events homepage"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2 flex-shrink-0" />
                                <span className="truncate">Back to Home</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer hasHeader={false}/>
        </div>
    )
}
