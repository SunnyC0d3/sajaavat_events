import {Inter} from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
    title: {
        default: 'Sajaavat Events - Premium Balloon Arch Decorations for Asian Weddings | Coventry UK',
        template: '%s | Sajaavat Events'
    },
    description: 'Transform your special day with stunning balloon artistry. Specializing in Asian wedding decorations, baby showers, and corporate events. Based in Coventry, serving all of the UK with professional setup and cleanup included.',
    keywords: [
        // Primary Keywords
        'balloon arch decorations Coventry',
        'Asian wedding balloon decorations UK',
        'balloon decorations Coventry',
        'wedding balloon arch UK',

        // Service Keywords
        'baby shower decorations UK',
        'corporate event decorations',
        'balloon installation services UK',
        'event decorations UK',

        // Cultural Keywords
        'Sikh wedding decorations UK',
        'Hindu wedding balloon arch',
        'Pakistani wedding decorations',
        'Indian wedding balloon decorations',

        // Location Keywords
        'balloon decorations Coventry',
        'balloon decorations Birmingham',
        'balloon decorations London',
        'wedding decorations Manchester',
        'event styling Leeds',
        'balloon arch Leicester',

        // Long-tail Keywords
        'professional balloon decorations UK',
        'custom balloon arch installation',
        'Asian wedding event styling',
        'premium balloon decorations UK'
    ],
    authors: [{name: 'Sajaavat Events', url: process.env.NEXT_PUBLIC_SITE_URL}],
    creator: 'Sajaavat Events',
    publisher: 'Sajaavat Events',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_GB',
        url: process.env.NEXT_PUBLIC_SITE_URL,
        title: 'Sajaavat Events - Premium Balloon Arch Decorations for Asian Weddings',
        description: 'Transform your special day with stunning balloon artistry. Specializing in Asian wedding decorations, baby showers, and event styling. Based in Coventry, serving all of the UK.',
        siteName: 'Sajaavat Events',
        images: [
            {
                url: '/images/hero/balloon-arch-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Beautiful pink and gold balloon arch decoration for Asian wedding by Sajaavat Events',
                type: 'image/jpeg',
            },
            {
                url: '/images/hero/baby-shower-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Elegant baby shower balloon decorations in pastel colors by Sajaavat Events',
                type: 'image/jpeg',
            },
            {
                url: '/images/hero/corporate-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Professional corporate event balloon styling by Sajaavat Events',
                type: 'image/jpeg',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sajaavat-events',
        creator: '@sajaavat-events',
        title: 'Sajaavat Events - Premium Balloon Arch Decorations',
        description: 'Transform your special day with stunning balloon artistry. Specializing in Asian wedding decorations, baby showers, and event styling. Based in Coventry, serving all of the UK.',
        images: [
            {
                url: '/images/hero/balloon-arch-og.jpg',
                alt: 'Beautiful balloon arch decoration for Asian wedding by Sajaavat Events',
            }
        ],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            {url: '/images/favicon.ico'},
            {url: '/images/icons/icon-16x16.png', sizes: '16x16', type: 'image/png'},
            {url: '/images/icons/icon-32x32.png', sizes: '32x32', type: 'image/png'},
        ],
        apple: [
            {url: '/images/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png'},
        ],
        other: [
            {rel: 'mask-icon', url: '/images/icons/safari-pinned-tab.svg', color: '#171717'},
        ],
    },
    manifest: '/manifest.json',
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
    },
    category: 'business',
    classification: 'Event Planning & Decoration Services',
    other: {
        'mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'default',
        'apple-mobile-web-app-title': 'Sajaavat Events',
        'application-name': 'Sajaavat Events',
        'msapplication-TileColor': '#171717',
        'msapplication-config': '/images/icons/browserconfig.xml',
        'theme-color': '#171717',
    },
}

export default function RootLayout({children}) {
    return (
        <html lang="en-GB" className="scroll-smooth">
        <head>
            {/* Additional SEO Meta Tags - Coventry based, UK-wide service */}
            <meta name="geo.region" content="GB-COV"/>
            <meta name="geo.placename" content="Coventry"/>
            <meta name="geo.position" content="52.4068;-1.5197"/>
            <meta name="ICBM" content="52.4068, -1.5197"/>

            {/* Business/Service Specific Meta */}
            <meta name="business:contact_data:street_address" content="Coventry"/>
            <meta name="business:contact_data:locality" content="Coventry"/>
            <meta name="business:contact_data:region" content="West Midlands"/>
            <meta name="business:contact_data:postal_code" content="West Midlands"/>
            <meta name="business:contact_data:country_name" content="United Kingdom"/>
            <meta name="business:contact_data:website" content={`${process.env.NEXT_PUBLIC_SITE_URL}`}/>

            {/* Service Area Meta - UK-wide with Coventry base */}
            <meta name="service-area" content="Coventry, Birmingham, London, Manchester, Leeds, Leicester, UK"/>
            <meta name="service-type" content="Event Decoration, Balloon Arch Installation, Wedding Decorations"/>

            {/* Cultural/Language Meta */}
            <meta name="language" content="English"/>
            <meta name="content-language" content="en-GB"/>

            {/* Preconnect for Performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link rel="preconnect" href="https://images.unsplash.com"/>

            {/* DNS Prefetch */}
            <link rel="dns-prefetch" href="//www.google-analytics.com"/>
            <link rel="dns-prefetch" href="//www.googletagmanager.com"/>

            {/* Canonical URL */}
            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}`}/>

            {/* Hreflang for International SEO */}
            <link rel="alternate" href={`${process.env.NEXT_PUBLIC_SITE_URL}`} hrefLang="en-GB"/>
            <link rel="alternate" href={`${process.env.NEXT_PUBLIC_SITE_URL}`} hrefLang="en"/>

            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />

            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_location: window.location.href,
                    page_title: document.title,
                  });
                `,
                }}
            />
        </head>
        <body className={`${inter.variable} antialiased`}>
        {children}
        </body>
        </html>
    )
}