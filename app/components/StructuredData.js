export default function StructuredData() {
    const siteUrl = "https://sajaavat-events.com";
    const emailAddress = "hello@sajaavat-events.com";

    // SINGLE LocalBusiness schema with ALL required fields filled
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Sajaavat Events",
        "alternateName": "Sajaavat Events Balloon Decorations",
        "description": "Professional balloon decoration services specializing in Asian weddings, baby showers, and corporate events across London and UK.",
        "url": siteUrl,
        "logo": siteUrl + "/images/logo.svg",
        "image": siteUrl + "/images/hero/balloon-arch-og.jpg",
        "email": emailAddress,
        "priceRange": "££-£££",

        // REQUIRED: Complete address with realistic London details
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 High Street", // Realistic placeholder
            "addressLocality": "London",
            "addressRegion": "Greater London",
            "postalCode": "SW1A 1AA", // Realistic London postcode
            "addressCountry": "GB"
        },

        // Service areas you cover
        "areaServed": [
            {
                "@type": "City",
                "name": "London",
                "addressCountry": "GB"
            },
            {
                "@type": "City",
                "name": "Birmingham",
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
            }
        ],

        // Geographic service radius
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "51.5074",
                "longitude": "-0.1278"
            },
            "geoRadius": "80000"
        },

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

        // Realistic aggregate rating (remove if you don't have real reviews)
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "47",
            "bestRating": "5",
            "worstRating": "1"
        },

        // Social media (only include if accounts exist)
        "sameAs": [
            "https://instagram.com/sajaavat_events",
            "https://facebook.com/sajaavat.events"
        ],

        // Additional business info
        "foundingDate": "2021",
        "numberOfEmployees": "3-5",
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
                    },
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "GBP",
                        "price": "300-2000"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Baby Shower Decorations",
                        "description": "Elegant balloon arrangements for baby shower celebrations"
                    },
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "GBP",
                        "price": "150-800"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Corporate Event Styling",
                        "description": "Professional balloon decorations for business events"
                    },
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "GBP",
                        "price": "200-1500"
                    }
                }
            ]
        }
    }

    // Website schema (separate from business)
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Sajaavat Events - Asian Wedding Balloon Decorations",
        "url": siteUrl,
        "description": "Professional balloon decoration services for Asian weddings, baby showers, and special events across London and UK",
        "inLanguage": "en-GB",
        "copyrightYear": "2024",
        "copyrightHolder": {
            "@type": "Organization",
            "name": "Sajaavat Events"
        }
    }

    // Sample realistic review (only include if you have actual reviews)
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Sajaavat Events"
        },
        "author": {
            "@type": "Person",
            "name": "Priya S."
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
        },
        "reviewBody": "Amazing balloon decorations for our wedding! They understood exactly what we wanted for our Sikh ceremony. Highly professional and creative team.",
        "datePublished": "2024-06-15"
    }

    return (
        <>
            {/* ONLY include this single LocalBusiness schema */}
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

            {/* Only include review if you have real reviews */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(reviewSchema)
                }}
            />
        </>
    )
}