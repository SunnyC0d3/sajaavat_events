export default function StructuredData() {
    const siteUrl = "https://sajaavat-events.com";
    const emailAddress = "hello@sajaavat-events.com";

    // SINGLE LocalBusiness schema with ALL required fields
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Sajaavat Events",
        "alternateName": "Sajaavat Events Balloon Decorations",
        "description": "Professional balloon decoration services specializing in Asian weddings, baby showers, and corporate events across London and UK.",
        "url": siteUrl,
        "logo": siteUrl + "/images/logo.svg",
        "image": siteUrl + "/images/hero/balloon-arch-og.jpg",
        "telephone": "+44-712-345-6789",
        "email": emailAddress,
        "priceRange": "££-£££",

        // REQUIRED: Address field - this was missing!
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressRegion": "England",
            "addressCountry": "GB"
            // Add streetAddress and postalCode when you have them
        },

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

        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "51.5074",
                "longitude": "-0.1278"
            },
            "geoRadius": "80000"
        },

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
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],

        // Only add social media if accounts actually exist
        "sameAs": [
            "https://instagram.com/sajaavat-events",
            "https://facebook.com/sajaavat-events"
        ]
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Asian Wedding Balloon Decorations",
        "description": "Professional balloon arch and decoration services for Asian weddings, baby showers, and special events",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Sajaavat Events"
        },
        "areaServed": "London, UK",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Balloon Decoration Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Asian Wedding Balloon Decorations",
                        "description": "Traditional and modern balloon artistry for Sikh, Hindu, Muslim, and other Asian wedding ceremonies"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Baby Shower Decorations",
                        "description": "Adorable balloon decorations and styling for baby shower celebrations"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Corporate Event Styling",
                        "description": "Professional balloon decorations for corporate events and business celebrations"
                    }
                }
            ]
        }
    }

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Sajaavat Events - Asian Wedding Balloon Decorations",
        "url": siteUrl,
        "description": "Professional balloon decoration services for Asian weddings, baby showers, and special events across London and UK"
    }

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
                    __html: JSON.stringify(serviceSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />
        </>
    )
}