import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import Services from '@/app/components/Services'
import Gallery from '@/app/components/Gallery'
import Testimonials from '@/app/components/Testimonials'
import Footer from '@/app/components/Footer'
import StructuredData from '@/app/components/StructuredData'

export const metadata = {
    title: 'Sajaavat Events - Premium Balloon Arch Decorations for Asian Weddings | London UK',
    description: 'Transform your special day with stunning balloon artistry. Specializing in Asian wedding decorations, baby showers, corporate events and balloon arch installations across London and UK. Professional setup and cleanup included. Free consultations available.',
    keywords: [
        'balloon arch decorations London',
        'Asian wedding balloon decorations',
        'Sikh wedding decorations London',
        'Hindu wedding balloon arch',
        'baby shower decorations UK',
        'corporate event decorations London',
        'balloon installation services',
        'wedding balloon arch Birmingham',
        'event decorations Manchester',
        'professional balloon decorations',
        'custom balloon arch installation',
        'Pakistani wedding decorations',
        'Indian wedding balloon decorations'
    ],
    openGraph: {
        title: 'Sajaavat Events - Premium Balloon Arch Decorations for Asian Weddings',
        description: 'Transform your special day with stunning balloon artistry. Specializing in Asian wedding decorations, baby showers, and event styling across London and UK.',
        url: process.env.NEXT_PUBLIC_SITE_URL,
        images: [
            {
                url: '/images/hero/balloon-arch-main.jpg',
                width: 1200,
                height: 630,
                alt: 'Beautiful pink and gold balloon arch decoration for Asian wedding ceremony by Sajaavat Events'
            }
        ],
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sajaavat Events - Premium Balloon Arch Decorations',
        description: 'Specializing in Asian wedding decorations, baby showers, and event styling across London and UK.',
        images: ['/images/hero/balloon-arch-main.jpg'],
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_SITE_URL,
    },
    other: {
        // Local Business Meta
        'geo.region': 'GB-LND',
        'geo.placename': 'London',
        'geo.position': '51.5074;-0.1278',
        'ICBM': '51.5074, -0.1278',

        // Service Specific
        'service-area': 'London, Birmingham, Manchester, Leeds, Leicester, Bradford, UK',
        'service-type': 'Balloon Decorations, Event Styling, Wedding Decorations',
        'business-hours': 'Mon-Fri 9AM-7PM, Sat 10AM-6PM, Sun 12PM-5PM',
        'price-range': '££-£££',
        'payment-accepted': 'Cash, Card, Bank Transfer',

        // Cultural Keywords
        'cultural-specialties': 'Asian Weddings, Sikh Ceremonies, Hindu Weddings, Pakistani Celebrations',
        'languages-spoken': 'English, Hindi, Punjabi',
    }
}

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Structured Data for Rich Snippets */}
            <StructuredData />

            <Header/>

            <main role="main">
                <h1 className="sr-only">
                    Sajaavat Events - Premium Balloon Arch Decorations for Asian Weddings, Baby Showers, and Corporate Events in London UK
                </h1>

                <Hero/>
                <Services/>
                <Gallery/>
                <Testimonials/>
            </main>

            <Footer/>

            {/* Additional SEO Content - Hidden but crawlable */}
            <div className="sr-only" aria-hidden="true">
                <h2>Service Areas</h2>
                <p>
                    We provide professional balloon decoration services across London and surrounding areas including
                    Birmingham, Manchester, Leeds, Bradford, Leicester, Southall, Slough, Reading, Oxford, Cambridge,
                    Luton, Watford, Croydon, Kingston, Richmond, and throughout Greater London and the Home Counties.
                </p>

                <h2>Cultural Expertise</h2>
                <p>
                    Specializing in Asian wedding traditions including Sikh wedding ceremonies, Hindu wedding celebrations,
                    Pakistani wedding festivities, Indian wedding decorations, Bengali wedding styling, Tamil wedding decor,
                    Punjabi wedding celebrations, and modern fusion wedding styles.
                </p>

                <h2>Event Types</h2>
                <p>
                    Asian weddings, Sikh wedding ceremonies, Hindu wedding celebrations, Muslim wedding receptions,
                    baby shower decorations, gender reveal parties, birthday party styling, corporate event decorations,
                    product launch events, anniversary celebrations, engagement parties, and special occasion styling.
                </p>

                <h2>Services</h2>
                <p>
                    Balloon arch installations, mandap backdrop decorations, entrance styling, photo booth backdrops,
                    table centerpieces, ceiling installations, organic balloon garlands, balloon columns,
                    custom color matching, professional setup and cleanup, consultation services, and event planning support.
                </p>
            </div>
        </div>
    )
}
