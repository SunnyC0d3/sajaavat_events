import { Suspense } from 'react'
import Script from 'next/script'

// Lazy loading wrapper for heavy components
export function LazyComponentWrapper({ children, fallback = null }) {
    return (
        <Suspense fallback={fallback}>
            {children}
        </Suspense>
    )
}

// Critical resource preloader
export function CriticalResourcePreloader() {
    return (
        <>
            {/* Preload critical fonts */}
            <link
                rel="preload"
                href="/fonts/inter-var.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />

            {/* Preload critical images */}
            <link
                rel="preload"
                href="/images/hero/asian-wedding-balloon-arch.webp"
                as="image"
                type="image/webp"
            />
            <link
                rel="preload"
                href="/images/logo.svg"
                as="image"
                type="image/svg+xml"
            />

            {/* DNS prefetch for external resources */}
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link rel="dns-prefetch" href="//fonts.gstatic.com" />
            <link rel="dns-prefetch" href="//images.unsplash.com" />
            <link rel="dns-prefetch" href="//www.google-analytics.com" />
            <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        </>
    )
}

// Analytics and tracking scripts
export function AnalyticsScripts() {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

    return (
        <>
            {/* Google Analytics */}
            {GA_ID && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_title: 'Sajaavat Events - Asian Wedding Balloon Decorations',
                custom_map: {'dimension1': 'balloon_decorations'},
                content_group1: 'Wedding Services',
                content_group2: 'Asian Wedding Specialists'
              });
            `}
                    </Script>
                </>
            )}

            {/* Google Tag Manager */}
            {GTM_ID && (
                <>
                    <Script id="google-tag-manager" strategy="afterInteractive">
                        {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
                    </Script>
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                </>
            )}

            {/* Local Business Schema for enhanced SEO */}
            <Script
                id="local-business-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
            >
                {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "${process.env.NEXT_PUBLIC_SITE_URL}/#business",
            "name": "Sajaavat Events",
            "alternateName": "Sajaavat Events Balloon Decorations",
            "description": "Professional balloon decoration services specializing in Asian weddings, baby showers, and corporate events across London and UK",
            "url": ${process.env.NEXT_PUBLIC_SITE_URL},
            "telephone": "+44-712-345-6789",
            "email": ${process.env.NEXT_PUBLIC_EMAIL_ADDRESS},
            "priceRange": "££-£££",
            "image": [
              "${process.env.NEXT_PUBLIC_SITE_URL}/images/hero/asian-wedding-balloon-arch.jpg",
              "${process.env.NEXT_PUBLIC_SITE_URL}/images/services/sikh-wedding-mandap.jpg",
              "${process.env.NEXT_PUBLIC_SITE_URL}/images/gallery/balloon-decoration-portfolio.jpg"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GB",
              "addressRegion": "England",
              "addressLocality": "London"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.5074",
              "longitude": "-0.1278"
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
            "serviceType": "Event Decoration Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Asian Wedding & Event Decoration Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Asian Wedding Balloon Decorations",
                    "description": "Traditional Sikh, Hindu, Pakistani wedding ceremony decorations"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Baby Shower Balloon Styling",
                    "description": "Gender reveal and baby celebration decorations"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Corporate Event Decorations",
                    "description": "Professional balloon styling for business events"
                  }
                }
              ]
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
            ],
            "sameAs": [
              "https://instagram.com/sajaavat-events",
              "https://facebook.com/sajaavat-events",
              "https://twitter.com/sajaavat-events"
            ]
          }
        `}
            </Script>

            {/* Breadcrumb Schema */}
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
            >
                {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": ${process.env.NEXT_PUBLIC_SITE_URL}
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Asian Wedding Decorations",
                "item": "${process.env.NEXT_PUBLIC_SITE_URL}/#services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Portfolio Gallery",
                "item": "${process.env.NEXT_PUBLIC_SITE_URL}/#gallery"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Contact",
                "item": "${process.env.NEXT_PUBLIC_SITE_URL}/#contact"
              }
            ]
          }
        `}
            </Script>
        </>
    )
}

// Image optimization component
export function OptimizedImage({
                                   src,
                                   alt,
                                   width,
                                   height,
                                   priority = false,
                                   className = '',
                                   sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
                                   ...props
                               }) {
    // Convert external URLs to optimized format
    const optimizedSrc = src.includes('unsplash.com')
        ? `${src}&auto=format&fit=crop&w=${width}&h=${height}&q=75`
        : src

    return (
        <img
            src={optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            className={className}
            sizes={sizes}
            {...props}
        />
    )
}

// Performance monitoring
export function PerformanceMonitoring() {
    return (
        <Script id="performance-monitoring" strategy="afterInteractive">
            {`
        // Web Vitals tracking
        function sendToAnalytics(metric) {
          if (typeof gtag !== 'undefined') {
            gtag('event', metric.name, {
              event_category: 'Web Vitals',
              value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
              event_label: metric.id,
              non_interaction: true,
            });
          }
        }

        // Import and initialize web vitals
        import('https://unpkg.com/web-vitals@3/dist/web-vitals.js').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
          onCLS(sendToAnalytics);
          onFID(sendToAnalytics);
          onFCP(sendToAnalytics);
          onLCP(sendToAnalytics);
          onTTFB(sendToAnalytics);
        });

        // Performance observer for custom metrics
        if ('PerformanceObserver' in window) {
          // Track navigation timing
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'navigation') {
                const loadTime = entry.loadEventEnd - entry.loadEventStart;
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'page_load_time', {
                    event_category: 'Performance',
                    value: Math.round(loadTime),
                    custom_map: {'dimension2': 'balloon_decorations_site'}
                  });
                }
              }
            }
          }).observe({entryTypes: ['navigation']});

          // Track resource timing for images
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.initiatorType === 'img' && entry.name.includes('balloon') || entry.name.includes('wedding')) {
                const imageLoadTime = entry.responseEnd - entry.requestStart;
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'image_load_time', {
                    event_category: 'Performance',
                    event_label: entry.name,
                    value: Math.round(imageLoadTime)
                  });
                }
              }
            }
          }).observe({entryTypes: ['resource']});
        }

        // Track user engagement
        let engagementTime = 0;
        let isActive = true;
        
        const trackEngagement = () => {
          if (isActive) {
            engagementTime += 1000;
          }
        };

        setInterval(trackEngagement, 1000);

        // Track when user becomes inactive
        ['blur', 'focusout', 'visibilitychange'].forEach(type => {
          window.addEventListener(type, () => {
            isActive = false;
          });
        });

        ['focus', 'focusin', 'visibilitychange'].forEach(type => {
          window.addEventListener(type, () => {
            if (!document.hidden) {
              isActive = true;
            }
          });
        });

        // Send engagement time when leaving
        window.addEventListener('beforeunload', () => {
          if (typeof gtag !== 'undefined' && engagementTime > 5000) {
            gtag('event', 'engagement_time', {
              event_category: 'User Engagement',
              value: Math.round(engagementTime / 1000),
              custom_map: {'dimension3': 'balloon_decorations_engagement'}
            });
          }
        });

        // Track scroll depth for long-form content
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
          const scrollPercent = Math.round(
            (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
          );
          if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
          }
        });

        window.addEventListener('beforeunload', () => {
          if (typeof gtag !== 'undefined' && maxScroll > 25) {
            gtag('event', 'scroll_depth', {
              event_category: 'User Engagement',
              value: maxScroll,
              event_label: maxScroll > 75 ? 'deep_engagement' : 'moderate_engagement'
            });
          }
        });
      `}
        </Script>
    )
}

// Critical CSS inliner
export function CriticalCSS() {
    return (
        <style jsx>{`
      /* Critical above-the-fold styles */
      .hero-section {
        min-height: 600px;
        background: #f5f5f5;
      }
      
      .hero-title {
        font-size: clamp(2rem, 5vw, 4rem);
        font-weight: 700;
        line-height: 1.2;
        color: #171717;
      }
      
      .hero-text {
        font-size: 1.125rem;
        line-height: 1.6;
        color: #525252;
        max-width: 48rem;
      }
      
      .btn-primary {
        background: #171717;
        color: #fafafa;
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        font-weight: 500;
        transition: background-color 0.2s;
      }
      
      .btn-primary:hover {
        background: #404040;
      }
      
      /* Loading skeleton */
      .skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      
      /* Optimize font loading */
      @font-face {
        font-family: 'Inter var';
        src: url('/fonts/inter-var.woff2') format('woff2');
        font-weight: 100 900;
        font-style: normal;
        font-display: swap;
      }
    `}</style>
    )
}

// Loading states and skeletons
export function LoadingSkeleton({ className = '', lines = 3 }) {
    return (
        <div className={`animate-pulse ${className}`} aria-label="Loading content">
            {Array.from({ length: lines }, (_, i) => (
                <div
                    key={i}
                    className="skeleton h-4 bg-neutral-200 rounded mb-2"
                    style={{ width: `${Math.random() * 40 + 60}%` }}
                />
            ))}
        </div>
    )
}

// Error boundary for performance
export function PerformanceErrorBoundary({ children, fallback }) {
    return (
        <Suspense fallback={fallback || <LoadingSkeleton />}>
            {children}
        </Suspense>
    )
}