import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from "@/app/components/Footer";
import { ArrowLeft, Shield, Eye, Lock, FileText, Users, Calendar } from 'lucide-react'

export const metadata = {
    title: 'Privacy Policy - How Sajaavat Events Protects Your Personal Information | Balloon Decorations London',
    description: 'Learn how Sajaavat Events, London\'s premier Asian wedding balloon decoration specialists, collects, uses, and protects your personal information. GDPR compliant privacy policy for our balloon decoration services.',
    keywords: [
        'Sajaavat Events privacy policy',
        'balloon decoration data protection',
        'Asian wedding decorator privacy',
        'GDPR compliance balloon services',
        'personal data protection London',
        'wedding decorator privacy policy',
        'event decoration data security',
        'customer information protection'
    ],
    openGraph: {
        title: 'Privacy Policy - Sajaavat Events Balloon Decorations Data Protection',
        description: 'How we protect your personal information when booking Asian wedding and event balloon decoration services.',
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

// Organization schema for the privacy policy
const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": process.env.NEXT_PUBLIC_SITE_URL + '/privacy',
    "name": "Privacy Policy - Sajaavat Events Balloon Decorations",
    "description": "Privacy policy detailing how Sajaavat Events collects, uses, and protects customer personal information for balloon decoration services",
    "url": process.env.NEXT_PUBLIC_SITE_URL + '/privacy',
    "isPartOf": {
        "@type": "WebSite",
        "name": "Sajaavat Events",
        "url": process.env.NEXT_PUBLIC_SITE_URL
    },
    "about": {
        "@type": "Organization",
        "name": "Sajaavat Events",
        "description": "Asian wedding balloon decoration specialists",
        "url": process.env.NEXT_PUBLIC_SITE_URL
    },
    "dateModified": "2025-01-01",
    "inLanguage": "en-GB"
}

export default function Privacy() {
    const privacySections = [
        {
            id: 'introduction',
            title: '1. Introduction',
            icon: Shield,
            content: `At Sajaavat Events ("we," "our," or "us"), we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our balloon decoration services for Asian weddings, baby showers, and special events.`
        },
        {
            id: 'information-collected',
            title: '2. Information We Collect',
            icon: Eye,
            content: `We collect information necessary to provide our balloon decoration services across London and UK.`
        },
        {
            id: 'how-we-use',
            title: '3. How We Use Your Information',
            icon: Users,
            content: `We use your personal information to deliver exceptional balloon decoration services for your celebrations.`
        },
        {
            id: 'data-protection',
            title: '4. Data Protection & Security',
            icon: Lock,
            content: `We implement appropriate technical and organizational measures to protect your personal information.`
        },
        {
            id: 'your-rights',
            title: '5. Your Rights Under GDPR',
            icon: FileText,
            content: `Under GDPR, you have specific rights regarding your personal data.`
        },
        {
            id: 'contact-us',
            title: '6. Contact Us',
            icon: Calendar,
            content: `For questions about this Privacy Policy or data protection, contact us.`
        }
    ]

    return (
        <div className="min-h-screen bg-neutral-50">
            <Header/>

            {/* Schema markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
            />

            <main className="pt-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
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
                            How Sajaavat Events, London&apos;s premier Asian wedding balloon decoration specialists,
                            protects your personal information and respects your privacy.
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
                                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                                information when you use our professional balloon decoration services for Asian weddings, Sikh ceremonies,
                                Hindu celebrations, Pakistani weddings, baby showers, and corporate events across London and UK.
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                By booking our balloon decoration services or using our website, you agree to the practices described in this policy.
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <Eye className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">2. Information We Collect</h2>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">2.1 Personal Information for Balloon Decoration Services</h3>
                                    <p className="text-neutral-600 leading-relaxed mb-3">We collect the following information to provide our Asian wedding and event decoration services:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4 text-neutral-600">
                                        <li><strong>Contact Details:</strong> Name, email address, phone number, and service address</li>
                                        <li><strong>Event Information:</strong> Event date, venue location, type of celebration (Sikh wedding, Hindu ceremony, baby shower, etc.)</li>
                                        <li><strong>Cultural Preferences:</strong> Traditional colors, cultural requirements, and specific decoration needs</li>
                                        <li><strong>Payment Information:</strong> Processed securely through third-party payment providers</li>
                                        <li><strong>Communication Records:</strong> Emails, messages, consultation notes, and service agreements</li>
                                        <li><strong>Event Photography:</strong> Photos and videos of our balloon decoration work (with your explicit consent)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">2.2 Website Usage Information</h3>
                                    <p className="text-neutral-600 leading-relaxed mb-3">When you visit our website, we may automatically collect:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4 text-neutral-600">
                                        <li>IP address, browser type, and device information</li>
                                        <li>Website usage data and page analytics</li>
                                        <li>Cookies and similar tracking technologies</li>
                                        <li>Referral source and search terms used to find our balloon decoration services</li>
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
                                We use your personal information to provide exceptional balloon decoration services for your Asian wedding or special event:
                            </p>
                            <ul className="list-disc list-inside space-y-3 ml-4 text-neutral-600">
                                <li><strong>Service Delivery:</strong> Planning, creating, and installing balloon decorations for your celebration</li>
                                <li><strong>Cultural Customization:</strong> Ensuring decorations honor your Sikh, Hindu, Pakistani, or other cultural traditions</li>
                                <li><strong>Communication:</strong> Updates about your booking, decoration planning, and event coordination</li>
                                <li><strong>Payment Processing:</strong> Secure handling of deposits and final payments for decoration services</li>
                                <li><strong>Quality Assurance:</strong> Following up after events to ensure satisfaction with our balloon decorations</li>
                                <li><strong>Business Operations:</strong> Scheduling, logistics, and service area management across London and UK</li>
                                <li><strong>Marketing (with consent):</strong> Sharing information about our Asian wedding decoration services and seasonal offers</li>
                                <li><strong>Legal Compliance:</strong> Meeting business, tax, and regulatory requirements</li>
                            </ul>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <Lock className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">4. Legal Basis for Processing (GDPR Compliance)</h2>
                            </div>
                            <p className="text-neutral-600 leading-relaxed mb-4">
                                Under the General Data Protection Regulation (GDPR), we process your personal data based on the following legal grounds:
                            </p>
                            <div className="space-y-4 text-neutral-600">
                                <div className="bg-neutral-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-neutral-800 mb-2">🤝 Contractual Necessity</h4>
                                    <p>To fulfill our balloon decoration service agreement and deliver your Asian wedding or event decorations</p>
                                </div>
                                <div className="bg-neutral-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-neutral-800 mb-2">✅ Legitimate Interest</h4>
                                    <p>To improve our services, prevent fraud, and operate our balloon decoration business effectively</p>
                                </div>
                                <div className="bg-neutral-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-neutral-800 mb-2">📧 Consent</h4>
                                    <p>For marketing communications about our services and photography of our decoration work</p>
                                </div>
                                <div className="bg-neutral-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-neutral-800 mb-2">⚖️ Legal Obligation</h4>
                                    <p>To comply with UK tax laws, business regulations, and health & safety requirements</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <FileText className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">5. Your Rights Under GDPR</h2>
                            </div>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                As a UK/EU resident, you have comprehensive rights regarding your personal data:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { title: 'Right to Access', description: 'Request copies of your personal data we hold' },
                                    { title: 'Right to Rectification', description: 'Correct any inaccurate or incomplete information' },
                                    { title: 'Right to Erasure', description: 'Request deletion of your personal data (subject to legal requirements)' },
                                    { title: 'Right to Portability', description: 'Receive your data in a portable, machine-readable format' },
                                    { title: 'Right to Restriction', description: 'Limit how we process your personal information' },
                                    { title: 'Right to Object', description: 'Object to processing for marketing or legitimate interests' },
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
                                    Contact us using the information below. We will respond within 30 days and provide clear instructions on next steps.
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
                                        <li><strong>Event Planning Data:</strong> Until your event is complete plus 1 year for follow-up</li>
                                        <li><strong>Financial Records:</strong> 7 years as required by UK tax law</li>
                                        <li><strong>Marketing Consents:</strong> Until you withdraw consent or unsubscribe</li>
                                        <li><strong>Photography:</strong> Until you withdraw consent or request removal</li>
                                        <li><strong>Website Analytics:</strong> 26 months maximum (Google Analytics standard)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">Data Security Measures</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        We implement industry-standard security measures including encrypted data storage,
                                        secure payment processing, regular security audits, and staff training on data protection.
                                        However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-6">
                                <Calendar className="w-8 h-8 text-primary-500" />
                                <h2 className="text-2xl font-bold text-neutral-900">7. Contact Our Data Protection Team</h2>
                            </div>
                            <div className="bg-neutral-50 p-6 rounded-lg">
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    For questions about this Privacy Policy, to exercise your data rights, or to report a privacy concern:
                                </p>
                                <div className="space-y-2 text-neutral-800">
                                    <p><strong>Data Controller:</strong> Sajaavat Events Balloon Decorations</p>
                                    <p><strong>Email:</strong> <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`} className="text-primary-600 hover:text-primary-700">{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a></p>
                                    <p><strong>Address:</strong> London, United Kingdom</p>
                                    <p><strong>Response Time:</strong> Within 30 days of receiving your request</p>
                                </div>
                                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                                    <p className="text-yellow-800 text-sm">
                                        <strong>Complaint Rights:</strong> If you&apos;re not satisfied with our response, you can lodge a complaint with the
                                        Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" className="underline">ico.org.uk</a>
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="border-t border-neutral-200 pt-6">
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                We may update this Privacy Policy periodically to reflect changes in our balloon decoration services,
                                legal requirements, or data protection practices. Significant changes will be communicated via email
                                or prominent website notice. Continued use of our services constitutes acceptance of any updates.
                            </p>
                            <p className="text-sm text-neutral-500 mt-4">
                                This privacy policy applies specifically to Sajaavat Events balloon decoration services for Asian weddings,
                                baby showers, and special events across London, Birmingham, Manchester, Leeds, and throughout the UK.
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
