export default function StructuredData() {
    const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || ''

    const emailAddress =
        process.env.NEXT_PUBLIC_EMAIL_ADDRESS || ''

    const telephone = process.env.NEXT_PUBLIC_PHONE || null

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Sajaavat Events",
        "alternateName": "Sajaavat Events | Bespoke Event Decor",
        "description":
            "Bespoke event decor specialists providing luxury backdrops, stage styling, and venue transformation services. Based in the Midlands, serving clients across the UK with full design, setup, and styling.",
        "url": siteUrl,
        "logo": `${siteUrl}/images/logo.svg`,
        "image": `${siteUrl}/images/gallery/ss-event/SS-Chunni-Landscape-2.jpg`,
        "email": emailAddress,
        ...(telephone ? { "telephone": telephone } : {}),
        "priceRange": "££-£££",

        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Midlands",
            "addressRegion": "West Midlands",
            "addressCountry": "GB"
        },

        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 52.4068,
            "longitude": -1.5197
        },

        "areaServed": [
            { "@type": "City", "name": "Coventry", "addressCountry": "GB" },
            { "@type": "City", "name": "Birmingham", "addressCountry": "GB" },
            { "@type": "City", "name": "London", "addressCountry": "GB" },
            { "@type": "City", "name": "Manchester", "addressCountry": "GB" },
            { "@type": "City", "name": "Leeds", "addressCountry": "GB" },
            { "@type": "City", "name": "Leicester", "addressCountry": "GB" },
            { "@type": "Country", "name": "United Kingdom" }
        ],

        "openingHours": "Mo-Su",

        "currenciesAccepted": "GBP",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],

        "sameAs": [
            "https://instagram.com/sajaavat.events"
        ],

        "foundingDate": "2025",

        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Event Decor Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Wedding Stage & Backdrop Styling",
                        "serviceType": "Wedding decor and backdrop styling",
                        "description":
                            "Bespoke wedding decor including luxury backdrops, stage focal points, signage styling, and setup designed around your theme."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Celebration & Private Event Styling",
                        "serviceType": "Private event decor and styling",
                        "description":
                            "Bespoke decor for birthdays, engagements, baby celebrations, and special occasions with statement backdrops and photo moments."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Party & Brand Styling",
                        "serviceType": "Party event decor and branded styling",
                        "description":
                            "Professional party event decor including branded backdrops, stage styling, and setup."
                    }
                }
            ]
        }
    }

    const aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "5",
        "bestRating": "5",
        "worstRating": "1"
    }

    localBusinessSchema.aggregateRating = aggregateRating

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Sajaavat Events | Bespoke Event Decor",
        "url": siteUrl,
        "description":
            "Bespoke wedding and event decor specialists providing luxury backdrops and venue styling. Based in the Midlands, serving clients across the UK.",
        "inLanguage": "en-GB",
        "publisher": {
            "@type": "Organization",
            "name": "Sajaavat Events",
            "url": siteUrl
        }
    }

    const reviewSchemas = [
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": { "@type": "Service", "name": "Sajaavat Events" },
            "author": { "@type": "Person", "name": "Sukhkaran" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody":
                "We chose Sajaavat for our engagement decor and the result was absolutely amazing. The team put so much thought into the colour scheme and overall design - everything complemented each other perfectly and tied the whole setup together beautifully. You could really see the level of planning and attention to detail in every element. The decor looked stunning in person and even better in photos. The entire process was smooth, stress-free, and delivered to a very high standard. I would highly recommend Sajaavat to anyone looking for quality and elegance.",
            "datePublished": "2026-31-01"
        },
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": { "@type": "Service", "name": "Sajaavat Events" },
            "author": { "@type": "Person", "name": "Sukhkaran" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody":
                "Saajavat created the wedding morning backdrop at my home and it completely elevated the space. The colour platte was carefully chosen and worked perfectly with the surroundings, giving everything a clean, elegant, and premium feel. It made such a big difference to the atmosphere of the morning and looked incredible in photos and videos. The team were professional, efficient, and clearly took pride in their work. I could not have been happier with the final result and would definitely recommend Sajaavat.",
            "datePublished": "2026-31-01"
        },
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": { "@type": "Service", "name": "Sajaavat Events" },
            "author": { "@type": "Person", "name": "Simran" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody":
                "Sajaavat did an incredible job with our engagement decor. The colour scheme was so thoughtfully planned and everything worked together beautifully; from the backdrop to the finer details, it all felt perfectly coordinated. You could really see the care and effort that went into the design, and the final setup was even better than I imagined. It created such an elegant and special atmosphere, and we received so many compliments from our guests. I would highly recommend Sajaavat for anyone looking for decor that feels both personal and professionally executed.",
            "datePublished": "2026-31-01"
        },
    ]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            {reviewSchemas.map((review, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }}
                />
            ))}
        </>
    )
}
