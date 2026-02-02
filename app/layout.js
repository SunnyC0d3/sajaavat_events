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
        default: 'Sajaavat Events | Bespoke Event Decor Specialists in the Midlands UK',
        template: '%s | Sajaavat Events'
    },
    description:
        'Sajaavat Events provides bespoke event decor, luxury backdrops, and wedding styling across Midlands and the UK. Specialising in pre-weddings, weddings, and party events with full design, setup, and styling services.',
    keywords: [
        'event decor Midlands',
        'wedding decor Midlands',
        'bespoke event decor UK',
        'luxury event styling UK',
        'wedding backdrop hire Midlands',
        'stage and backdrop decor',
        'pre-wedding decor UK',
        'photo backdrops for events',
        'party styling UK',
        'Asian wedding decor UK',
        'Sikh wedding decor UK',
        'Hindu wedding decor UK',
        'Pakistani wedding decor UK',
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
        title: 'Sajaavat Events | Bespoke Event Decor in the UK',
        description:
            'Luxury wedding and event decor specialists based in the Midlands, delivering bespoke backdrops and styling across the UK.',
        siteName: 'Sajaavat Events',
        images: [
            {
                url: '/images/gallery/ss-event/SS-Chunni-Landscape-2.jpg',
                width: 1200,
                height: 630,
                alt: 'Luxury wedding and event decor by Sajaavat Events in the UK',
                type: 'image/jpeg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sajaavat Events | Bespoke Event Decor in the UK',
        description: 'Luxury wedding and event decor specialists based in the Midlands, delivering bespoke backdrops and styling across the UK.',
        images: ['/images/gallery/ss-event/SS-Chunni-Landscape-2.jpg'],
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
            {url: '/images/favicon.ico', sizes: '32x32', type: 'image/x-icon'}
        ],
        apple: [
            {url: '/images/favicon.ico', sizes: '180x180', type: 'image/x-icon'}
        ],
    },
    manifest: '/manifest.json',
    category: 'business',
    classification: 'Event Decoration & Styling Services',
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    },
    other: {
        'mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'default',
        'apple-mobile-web-app-title': 'Sajaavat Events',
        'application-name': 'Sajaavat Events',
        'msapplication-TileColor': '#171717',
        'theme-color': '#171717',
    },
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: '#171717',
}

export default function RootLayout({children}) {
    return (
        <html lang="en-GB" className="scroll-smooth">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link rel="dns-prefetch" href="//www.google-analytics.com"/>
            <link rel="dns-prefetch" href="//www.googletagmanager.com"/>
            <link
                rel="preload"
                href="/images/gallery/ss-event/SS-Wedding-Landscape-1.JPG"
                as="image"
                type="image/jpeg"
            />
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
