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
        default: 'Sajaavat Events | Bespoke Wedding & Event Decor Specialists in Coventry UK',
        template: '%s | Sajaavat Events'
    },
    description:
        'Sajaavat Events provides bespoke event decor, luxury backdrops, and wedding styling across Coventry and the UK. Specialising in weddings, cultural celebrations, and corporate events with full design, setup, and styling services.',
    keywords: [
        'event decor Coventry',
        'wedding decor Coventry',
        'bespoke event decor UK',
        'bespoke event backdrops UK',
        'luxury event styling UK',
        'venue styling Coventry',
        'wedding backdrop hire Coventry',
        'stage decor and backdrop styling',
        'mandap and stage decor UK',
        'reception decor UK',
        'entrance decor wedding',
        'photo backdrop for events',
        'corporate event styling UK',
        'brand event decor UK',
        'event decor setup and styling',
        'Asian wedding decor UK',
        'Sikh wedding decor UK',
        'Hindu wedding decor UK',
        'Pakistani wedding decor UK',
        'Nikah and Walima decor',
        'fusion wedding decor UK',
        'event decor Coventry',
        'wedding decor Birmingham',
        'event styling Leicester',
        'venue styling Warwickshire',
        'wedding decor West Midlands',
        'event decor London',
        'event styling Manchester',
        'event styling Leeds',
        'bespoke wedding backdrop and stage decor',
        'luxury wedding and reception decor UK',
        'professional venue styling and setup',
        'custom event decor design and installation'
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
        title: 'Sajaavat Events | Bespoke Wedding & Event Decor in the UK',
        description:
            'Luxury wedding and event decor specialists based in Coventry, delivering bespoke backdrops and styling across the UK.',
        siteName: 'Sajaavat Events',
        images: [
            {
                url: '/images/hero/event-decor-main.jpg',
                width: 1200,
                height: 630,
                alt: 'Elegant bespoke wedding and event decor by Sajaavat Events in the UK',
                type: 'image/jpeg',
            },
            {
                url: '/images/hero/wedding-decor-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Bespoke wedding stage and reception decor by Sajaavat Events in Coventry and across the UK',
                type: 'image/jpeg',
            },
            {
                url: '/images/hero/corporate-decor-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Corporate event styling and branded backdrop decor by Sajaavat Events in the UK',
                type: 'image/jpeg',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sajaavat-events',
        creator: '@sajaavat-events',
        title: 'Sajaavat Events | Bespoke Wedding & Event Decor',
        description:
            'Bespoke event decor, luxury backdrops, and wedding styling across Coventry and the UK. Weddings, cultural celebrations, and corporate events.',
        images: [
            {
                url: '/images/hero/event-decor-main.jpg',
                alt: 'Elegant bespoke wedding and event decor by Sajaavat Events in the UK',
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
    classification: 'Event Decoration & Styling Services',
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
            <meta name="geo.region" content="GB-COV"/>
            <meta name="geo.placename" content="Coventry"/>
            <meta name="geo.position" content="52.4068;-1.5197"/>
            <meta name="ICBM" content="52.4068, -1.5197"/>
            <meta name="business:contact_data:street_address" content="Coventry"/>
            <meta name="business:contact_data:locality" content="Coventry"/>
            <meta name="business:contact_data:region" content="West Midlands"/>
            <meta name="business:contact_data:postal_code" content="West Midlands"/>
            <meta name="business:contact_data:country_name" content="United Kingdom"/>
            <meta name="business:contact_data:website" content={`${process.env.NEXT_PUBLIC_SITE_URL}`}/>
            <meta name="service-area" content="Coventry, West Midlands, Birmingham, Leicester, Warwick, Solihull, Rugby, London, Manchester, Leeds, UK"/>
            <meta name="service-type" content="Bespoke Event Decor, Luxury Backdrops, Wedding Styling, Corporate Event Styling"/>
            <meta name="language" content="English"/>
            <meta name="content-language" content="en-GB"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link rel="preconnect" href="https://images.unsplash.com"/>
            <link rel="dns-prefetch" href="//www.google-analytics.com"/>
            <link rel="dns-prefetch" href="//www.googletagmanager.com"/>
            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}`}/>
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
