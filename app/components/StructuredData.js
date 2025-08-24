export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Saajavat",
        "alternateName": "Saajavat Balloon Decorations",
        "description": "Premium balloon arch decorations specializing in Asian weddings, baby showers, and event styling across London and surrounding areas.",
        "url": "https://saajavat.com",
        "logo": "https://saajavat.com/images/logo.svg",
        "image": "https://saajavat.com/images/hero/balloon-arch-og.jpg",
        "foundingDate": "2021",
        "founders": [
            {
                "@type": "Person",
                "name": "Saajavat Team"
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
        ],
        "sameAs": [
            "https://instagram.com/saajavat",
            "https://facebook.com/saajavat",
            "https://twitter.com/saajavat"
        ]
    }

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "EventDecorator",
        "name": "Saajavat",
        "description": "Professional balloon decoration service specializing in Asian wedding ceremonies, baby showers, and corporate events. Premium balloon arch installations across London and UK.",
        "url": "https://saajavat.com",
        "telephone": "+44-712-345-6789",
        "email": "hello@saajavat.com",
        "image": "https://saajavat.com/images/hero/balloon-arch-og.jpg",
        "priceRange": "££-£££",
        "currenciesAccepted": "GBP",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
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
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "200",
            "bestRating": "5",
            "worstRating": "1"
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
        ]
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Balloon Decoration Services",
        "description": "Professional balloon arch and decoration services for weddings, baby showers, and special events",
        "provider": {
            "@type": "Organization",
            "name": "Saajavat"
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
        "name": "Saajavat - Balloon Decorations",
        "url": "https://saajavat.com",
        "description": "Professional balloon decoration services for Asian weddings, baby showers, and special events across London and UK",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://saajavat.com/#services"
            },
            "query-input": "required name=search_term_string"
        },
        "mainEntity": {
            "@type": "Organization",
            "name": "Saajavat"
        }
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
                    __html: JSON.stringify(faqSchema)
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