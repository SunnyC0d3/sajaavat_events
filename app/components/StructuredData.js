export default function StructuredData() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "";
    const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "";
    const telephone = process.env.NEXT_PUBLIC_PHONE || null;

    const businessId = `${siteUrl}/#localbusiness`;
    const websiteId = `${siteUrl}/#website`;
    const organizationId = `${siteUrl}/#organization`;

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": businessId,
        "name": "Sajaavat Events",
        "alternateName": "Sajaavat Events | Bespoke Event Decor",
        "description":
            "Bespoke event decor specialists providing luxury backdrops, stage styling, and venue transformation services. Based in the Midlands, serving clients across the UK with full design, setup, and styling.",
        "url": siteUrl,
        "logo": `${siteUrl}/images/logo.svg`,
        "image": [
            `${siteUrl}/images/gallery/ss-event/SS-Chunni-Landscape-2.jpg`,
            `${siteUrl}/images/gallery/ss-event/SS-Wedding-Landscape-1.JPG`,
            `${siteUrl}/images/gallery/ss-event/SS-Wedding-Landscape-2.JPG`
        ],
        "email": emailAddress,
        ...(telephone ? { telephone } : {}),
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
            { "@type": "City", "name": "Warwick", "addressCountry": "GB" },
            { "@type": "City", "name": "Solihull", "addressCountry": "GB" },
            { "@type": "City", "name": "Rugby", "addressCountry": "GB" },
            { "@type": "City", "name": "Nuneaton", "addressCountry": "GB" },
            { "@type": "Country", "name": "United Kingdom" }
        ],
        "openingHours": "Mo-Su",
        "currenciesAccepted": "GBP",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
        "sameAs": [
            "https://instagram.com/sajaavat.events"
        ],
        "foundingDate": "2025",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "3",
            "bestRating": "5",
            "worstRating": "1"
        },
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
                            "Bespoke wedding decor including luxury backdrops, stage focal points, signage styling, and setup designed around your theme.",
                        "provider": { "@id": businessId },
                        "areaServed": { "@type": "Country", "name": "United Kingdom" }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Pre-Wedding Event Decor",
                        "serviceType": "Pre-wedding event decor and styling",
                        "description":
                            "Bespoke decor for engagement ceremonies and other pre-wedding celebrations with statement backdrops.",
                        "provider": { "@id": businessId },
                        "areaServed": { "@type": "Country", "name": "United Kingdom" }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Celebration & Private Event Styling",
                        "serviceType": "Private event decor and styling",
                        "description":
                            "Bespoke decor for birthdays, engagements, baby celebrations, and special occasions with statement backdrops and photo moments.",
                        "provider": { "@id": businessId },
                        "areaServed": { "@type": "Country", "name": "United Kingdom" }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Party & Brand Styling",
                        "serviceType": "Party event decor and branded styling",
                        "description":
                            "Professional party event decor including branded backdrops, stage styling, and setup.",
                        "provider": { "@id": businessId },
                        "areaServed": { "@type": "Country", "name": "United Kingdom" }
                    }
                }
            ]
        },
        "potentialAction": {
            "@type": "ReserveAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/#contact`,
                "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                ]
            },
            "result": {
                "@type": "Reservation",
                "name": "Event Decor Consultation"
            }
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": websiteId,
        "name": "Sajaavat Events | Bespoke Event Decor",
        "url": siteUrl,
        "description":
            "Bespoke wedding and event decor specialists providing luxury backdrops and venue styling. Based in the Midlands, serving clients across the UK.",
        "inLanguage": "en-GB",
        "publisher": {
            "@id": organizationId
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/?s={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": organizationId,
        "name": "Sajaavat Events",
        "url": siteUrl,
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/images/logo.svg`,
            "width": 200,
            "height": 50
        },
        "description": "Bespoke event decor specialists in the UK",
        "email": emailAddress,
        ...(telephone ? { telephone } : {}),
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Midlands",
            "addressRegion": "West Midlands",
            "addressCountry": "GB"
        },
        "sameAs": [
            "https://instagram.com/sajaavat.events"
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": `${siteUrl}/#aboutus`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Gallery",
                "item": `${siteUrl}/#gallery`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Testimonials",
                "item": `${siteUrl}/#testimonials`
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact",
                "item": `${siteUrl}/#contact`
            }
        ]
    };

    const reviewSchemas = [
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": { "@id": businessId },
            "author": {
                "@type": "Person",
                "name": "Sukhkaran S."
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody":
                "We chose Sajaavat for our engagement decor and the result was absolutely amazing. The team put so much thought into the colour scheme and overall design - everything complemented each other perfectly and tied the whole setup together beautifully. You could really see the level of planning and attention to detail in every element. The decor looked stunning in person and even better in photos. The entire process was smooth, stress-free, and delivered to a very high standard. I would highly recommend Sajaavat to anyone looking for quality and elegance.",
            "datePublished": "2025-08-15",
            "publisher": {
                "@type": "Organization",
                "name": "Sajaavat Events"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": { "@id": businessId },
            "author": {
                "@type": "Person",
                "name": "Sukhkaran S."
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody":
                "Sajaavat created the wedding morning backdrop at my home and it completely elevated the space. The colour palette was carefully chosen and worked perfectly with the surroundings, giving everything a clean, elegant, and premium feel. It made such a big difference to the atmosphere of the morning and looked incredible in photos and videos. The team were professional, efficient, and clearly took pride in their work. I could not have been happier with the final result and would definitely recommend Sajaavat.",
            "datePublished": "2025-09-20",
            "publisher": {
                "@type": "Organization",
                "name": "Sajaavat Events"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": { "@id": businessId },
            "author": {
                "@type": "Person",
                "name": "Simran K."
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody":
                "Sajaavat did an incredible job with our engagement decor. The colour scheme was so thoughtfully planned and everything worked together beautifully; from the backdrop to the finer details, it all felt perfectly coordinated. You could really see the care and effort that went into the design, and the final setup was even better than I imagined. It created such an elegant and special atmosphere, and we received so many compliments from our guests. I would highly recommend Sajaavat for anyone looking for decor that feels both personal and professionally executed.",
            "datePublished": "2025-09-20",
            "publisher": {
                "@type": "Organization",
                "name": "Sajaavat Events"
            }
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What areas does Sajaavat Events serve?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sajaavat Events is based in the Midlands and serves clients across the UK. We regularly work in Coventry, Birmingham, Leicester, Warwick, Solihull, London, Manchester, Leeds, and surrounding areas. We travel nationwide for weddings, pre-wedding events, and parties."
                }
            },
            {
                "@type": "Question",
                "name": "What types of events does Sajaavat Events decorate?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialize in bespoke decor for weddings, pre-wedding events (engagements, Mehndi, Sangeet, chunni ceremonies), birthdays, anniversaries, baby celebrations, corporate events, and private parties. Each event is styled with custom backdrops, stage design, and photo-worthy details."
                }
            },
            {
                "@type": "Question",
                "name": "How far in advance should I book Sajaavat Events?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We recommend booking 3-6 months in advance for weddings and major events to ensure availability. However, we can accommodate shorter notice periods depending on our schedule. Contact us for a free consultation to discuss your event date."
                }
            },
            {
                "@type": "Question",
                "name": "Does Sajaavat Events provide setup and takedown services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide full professional setup on the day of your event. Our team handles delivery, installation, and ensures every detail is photo-ready. Takedown services can be arranged based on your venue requirements and event schedule."
                }
            },
            {
                "@type": "Question",
                "name": "Can Sajaavat Events work with cultural wedding traditions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! We have experience styling Sikh, Hindu, Muslim, and fusion weddings, respecting cultural traditions while delivering modern, luxury finishes. We work closely with you to understand your heritage and create decor that honors your customs."
                }
            }
        ]
    };

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {reviewSchemas.map((review, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }}
                />
            ))}
        </>
    );
}