export default function StructuredData() {
    // Use hardcoded values or pass as props
    const siteUrl = "https://sajaavat-events.com";
    const emailAddress = "info@sajaavat-events.com";

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sajaavat Events",
        "alternateName": "Sajaavat Events Balloon Decorations",
        "description": "Premium balloon arch decorations specializing in Asian weddings, baby showers, and event styling across London and surrounding areas.",
        "url": siteUrl,
        "logo": siteUrl + "/images/logo.svg",
        "image": siteUrl + "/images/hero/balloon-arch-og.jpg",
        "foundingDate": "2021",
        "founders": [
            {
                "@type": "Person",
                "name": "Sajaavat Events Team"
            }
        ],
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+44-712-345-6789",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Punjabi"],
                "areaServed": "GB",
                "hoursAvailable": [
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
                ]
            }
        ]
        // Remove sameAs until you have real social media accounts
    }

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness", // Changed from "EventDecorator"
        "name": "Sajaavat Events",
        "description": "Professional balloon decoration service specializing in Asian wedding ceremonies, baby showers, and corporate events. Premium balloon arch installations across London and UK.",
        "url": siteUrl,
        "telephone": "+44-712-345-6789",
        "email": emailAddress,
        "image": siteUrl + "/images/hero/balloon-arch-og.jpg",
        "priceRange": "££-£££",
        "currenciesAccepted": "GBP",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
        // Add proper address
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "GB"
            // Add postalCode when you have one
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
        // Remove fake reviews - add this when you have real ones
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
        ]
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Balloon Decoration Services",
        "description": "Professional balloon arch and decoration services for weddings, baby showers, and special events",
        "provider": {
            "@type": "Organization",
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
                        "description": "Adorable balloon decorations and styling for baby shower celebrations and gender reveals"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Corporate Event Styling",
                        "description": "Professional balloon decorations for corporate events, product launches, and business celebrations"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Balloon Arch Installations",
                        "description": "Custom balloon arches for photo opportunities and venue entrances"
                    }
                }
            ]
        }
    }

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Sajaavat Events - Balloon Decorations",
        "url": siteUrl,
        "description": "Professional balloon decoration services for Asian weddings, baby showers, and special events across London and UK",
        "mainEntity": {
            "@type": "Organization",
            "name": "Sajaavat Events"
        }
        // Remove SearchAction unless you implement actual search
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema)
                }}
            />
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