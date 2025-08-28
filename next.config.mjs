/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable experimental features for better SEO
    experimental: {
        scrollRestoration: true,
    },

    // Image optimization for SEO and performance
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
        domains: [
            'images.unsplash.com',
            'sajaavat-events.com',
            'www.sajaavat-events.com'
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Compression for faster loading
    compress: true,
    poweredByHeader: false,

    // Headers for SEO and security
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    // Security headers
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                ]
            },
            // Cache static assets
            {
                source: '/images/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            },
            // Cache icons and manifest
            {
                source: '/(favicon.ico|manifest.json|robots.txt|sitemap.xml)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400' // 1 day
                    }
                ]
            }
        ]
    },

    // Generate sitemap and robots at build time
    async generateBuildId() {
        // Use timestamp for build ID
        return Date.now().toString()
    },

    // Webpack optimizations for performance
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Optimize bundle analyzer in production
        if (!dev && !isServer) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors',
                            chunks: 'all',
                        },
                    },
                },
            }
        }

        return config
    },

    // Environment variables for SEO tracking
    env: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://sajaavat-events.com',
        NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || '',
        NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || '',
        NEXT_PUBLIC_EMAIL_ADDRESS: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || '',
        RESEND_API_KEY: process.env.RESEND_API_KEY || '',
        NO_REPLY_EMAIL_ADDRESS: process.env.NO_REPLY_EMAIL_ADDRESS || '',
        BUSINESS_EMAIL_ADDRESS: process.env.BUSINESS_EMAIL_ADDRESS || '',
        AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID || '',
        AZURE_CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET || '',
        AZURE_TENANT_ID: process.env.AZURE_TENANT_ID || '',
    },

    // Output settings for better SEO
    output: 'standalone',

    // Trailing slashes for consistent URLs
    trailingSlash: false,
}

export default nextConfig