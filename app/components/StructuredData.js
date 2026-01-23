export default function StructuredData() {
    const siteUrl = "https://sajaavat-events.com";
    const emailAddress = "enquiry@sajaavat-events.com";
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Sajaavat Events",
        "alternateName": "Sajaavat Events | Bespoke Wedding & Event Decor",
        "description":
            "Bespoke wedding and event decor specialists providing luxury backdrops, stage styling, and venue transformation services. Based in Coventry, serving clients across the UK with full design, setup, and styling.",
        "url": siteUrl,
        "logo": siteUrl + "/images/logo.svg",
        "image": siteUrl + "/images/hero/event-decor-main.jpg",
        "email": emailAddress,
        "telephone": "+44XXXXXXXXXX",
        "priceRange": "££-£££",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Coventry",
            "addressRegion": "West Midlands",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.4068",
            "longitude": "-1.5197"
        },
        "areaServed": [
            {"@type": "City", "name": "Coventry", "addressCountry": "GB"},
            {"@type": "City", "name": "Birmingham", "addressCountry": "GB"},
            {"@type": "City", "name": "London", "addressCountry": "GB"},
            {"@type": "City", "name": "Manchester", "addressCountry": "GB"},
            {"@type": "City", "name": "Leeds", "addressCountry": "GB"},
            {"@type": "City", "name": "Leicester", "addressCountry": "GB"},
            {"@type": "Country", "name": "United Kingdom"}
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "12:00",
                "closes": "17:00"
            }
        ],
        "currenciesAccepted": "GBP",
        "paymentAccepted": ["Cash", "Credit Card"],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "5",
            "bestRating": "5",
            "worstRating": "5"
        },
        "sameAs": [
            "https://instagram.com/sajaavat.events"
        ],
        "foundingDate": "2021",
        "numberOfEmployees": "1-3",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Wedding & Event Decor Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Wedding Stage & Backdrop Styling",
                        "description":
                            "Bespoke wedding decor including luxury backdrops, stage focal points, entrance styling, and reception setup designed around your theme."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Cultural Ceremony & Reception Decor",
                        "description":
                            "Culturally considerate decor for traditional and fusion celebrations, including mandap-inspired staging and elegant venue styling."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Celebration & Private Event Styling",
                        "description":
                            "Bespoke decor for birthdays, engagements, baby celebrations, and special occasions with statement backdrops and photo moments."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Corporate Event & Brand Styling",
                        "description":
                            "Professional corporate event decor including branded backdrops, stage styling, and setup for launches, awards, and business events."
                    }
                }
            ]
        }
    }

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Sajaavat Events | Bespoke Wedding & Event Decor",
        "url": siteUrl,
        "description":
            "Bespoke wedding and event decor specialists providing luxury backdrops and venue styling. Based in Coventry, serving clients across the UK.",
        "inLanguage": "en-GB",
        "copyrightYear": "2025",
        "copyrightHolder": {
            "@type": "Organization",
            "name": "Sajaavat Events"
        }
    }

    const reviewSchemas = [
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Sajaavat Events"
            },
            "author": {
                "@type": "Person",
                "name": "Priya & Raj Sharma"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody":
                "Sajaavat Events transformed our wedding stage into something absolutely magical. The backdrop styling complemented our ceremony perfectly and every guest was amazed. The team understood our requirements, guided us through the design, and delivered beyond expectations.",
            "datePublished": "2024-09-15"
        },
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Sajaavat Events"
            },
            "author": {
                "@type": "Person",
                "name": "David Chen"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody":
                "For our company’s anniversary event, Sajaavat Events delivered exceptional styling that matched our brand. The stage and backdrop looked premium, the setup was seamless, and the attention to detail was outstanding. Highly professional from start to finish.",
            "datePublished": "2024-11-20"
        },
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Sajaavat Events"
            },
            "author": {
                "@type": "Person",
                "name": "Aisha & Mohammed Ali"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody":
                "We wanted decor that honoured our traditions while still feeling modern and elegant. Sajaavat Events delivered exactly that — a stunning stage and reception setup with thoughtful details. Our families were so impressed and the photos turned out beautifully.",
            "datePublished": "2024-08-10"
        },
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Sajaavat Events"
            },
            "author": {
                "@type": "Person",
                "name": "Emma Thompson"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody":
                "The surprise celebration setup was absolutely perfect. Sajaavat Events created a beautiful backdrop and styled the whole area so it felt really special. The team were friendly, organised, and the final look exceeded what we imagined.",
            "datePublished": "2024-12-05"
        },
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Sajaavat Events"
            },
            "author": {
                "@type": "Person",
                "name": "Krishnan Family"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody":
                "The stage and backdrop styling for our reception was breathtaking. Sajaavat Events understood the significance of our traditions and created decor that felt elegant and meaningful. Everything was beautifully finished and photographed so well.",
            "datePublished": "2024-07-18"
        }
    ]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />
            {reviewSchemas.map((review, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(review)
                    }}
                />
            ))}
        </>
    )
}
