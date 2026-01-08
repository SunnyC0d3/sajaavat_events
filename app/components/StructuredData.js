export default function StructuredData() {
    const siteUrl = "https://sajaavat-events.com";
    const emailAddress = "enquiry@sajaavat-events.com";

    // SINGLE LocalBusiness schema - the ONLY business schema on the entire site
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Sajaavat Events",
        "alternateName": "Sajaavat Events Balloon Decorations",
        "description": "Professional balloon decoration services specializing in Asian weddings, baby showers, and corporate events. Based in Coventry, serving all of the UK.",
        "url": siteUrl,
        "logo": siteUrl + "/images/logo.svg",
        "image": siteUrl + "/images/hero/balloon-arch-og.jpg",
        "email": emailAddress,
        "telephone": "+44XXXXXXXXXX",
        "priceRange": "££-£££",

        // Mobile-based business address - Coventry location
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Coventry",
            "addressRegion": "West Midlands",
            "addressCountry": "GB"
        },

        // Coventry coordinates
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.4068",
            "longitude": "-1.5197"
        },

        // UK-wide service area with Coventry as base
        "areaServed": [
            {
                "@type": "City",
                "name": "Coventry",
                "addressCountry": "GB"
            },
            {
                "@type": "City",
                "name": "Birmingham",
                "addressCountry": "GB"
            },
            {
                "@type": "City",
                "name": "London",
                "addressCountry": "GB"
            },
            {
                "@type": "City",
                "name": "Manchester",
                "addressCountry": "GB"
            },
            {
                "@type": "City",
                "name": "Leeds",
                "addressCountry": "GB"
            },
            {
                "@type": "City",
                "name": "Leicester",
                "addressCountry": "GB"
            },
            {
                "@type": "Country",
                "name": "United Kingdom"
            }
        ],

        // Business hours
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

        // Payment and pricing info
        "currenciesAccepted": "GBP",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "PayPal"],

        // Real aggregate rating from 5 testimonials (all 5 stars)
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "5",
            "bestRating": "5",
            "worstRating": "5"
        },

        // Real social media
        "sameAs": [
            "https://instagram.com/sajaavat.events"
        ],

        // Additional business info
        "foundingDate": "2021",
        "numberOfEmployees": "1-3",

        // Service catalog
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Wedding & Event Decoration Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Asian Wedding Decorations",
                        "description": "Traditional balloon decorations for Sikh, Hindu, Pakistani, and Bengali weddings"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Baby Shower Decorations",
                        "description": "Elegant balloon arrangements for baby shower celebrations and gender reveals"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Corporate Event Styling",
                        "description": "Professional balloon decorations for business events and product launches"
                    }
                }
            ]
        }
    }

    // Website schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Sajaavat Events - Asian Wedding Balloon Decorations",
        "url": siteUrl,
        "description": "Professional balloon decoration services for Asian weddings, baby showers, and special events. Based in Coventry, serving all of the UK.",
        "inLanguage": "en-GB",
        "copyrightYear": "2025",
        "copyrightHolder": {
            "@type": "Organization",
            "name": "Sajaavat Events"
        }
    }

    // Real customer reviews from your testimonials
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
            "reviewBody": "Sajaavat Events transformed our wedding mandap into something absolutely magical. The pink and gold balloon arch perfectly complemented our traditional ceremony, and every guest was amazed by the beautiful setup. The team understood our cultural requirements perfectly and delivered beyond our expectations.",
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
            "reviewBody": "For our company's 10th anniversary celebration, Sajaavat Events delivered exceptional corporate styling that perfectly matched our brand colors. The balloon installations added elegance to our event without being overwhelming. Highly professional service and outstanding attention to detail.",
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
            "reviewBody": "We wanted something that honored our Pakistani traditions while being modern and elegant. Sajaavat Events delivered exactly that! The burgundy and gold balloon arch was stunning, and they even incorporated some traditional patterns. Our families were so impressed, and the photos turned out beautifully.",
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
            "reviewBody": "The surprise gender reveal setup was absolutely perfect! Sajaavat Events created a beautiful neutral backdrop that transformed into the most amazing pink explosion when we popped the balloon. The whole family was in tears of joy. Thank you for making our moment so special!",
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
            "reviewBody": "The golden balloon arch for our Tamil wedding reception was absolutely breathtaking. Sajaavat Events understood the significance of our traditions and created decorations that perfectly honored our heritage. The setup was elegant, sophisticated, and photographed beautifully.",
            "datePublished": "2024-07-18"
        }
    ]

    return (
        <>
            {/* Main LocalBusiness schema - THE ONLY business schema on the site */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema)
                }}
            />

            {/* Website info */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />

            {/* Real customer reviews */}
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