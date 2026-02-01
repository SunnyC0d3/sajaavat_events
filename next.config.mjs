/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        scrollRestoration: true,
    },
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 365,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sajaavat-events.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.sajaavat-events.com',
                port: '',
                pathname: '/**',
            },
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    compress: true,
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
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
            {
                source: '/images/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            },
            {
                source: '/(favicon.ico|manifest.json|robots.txt|sitemap.xml)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400'
                    }
                ]
            }
        ]
    },

    async generateBuildId() {
        return Date.now().toString()
    },

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
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

    env: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://sajaavat-events.com',
        NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || '',
        NEXT_PUBLIC_EMAIL_ADDRESS: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || '',
        NO_REPLY_EMAIL_ADDRESS: process.env.NO_REPLY_EMAIL_ADDRESS || '',
        BUSINESS_EMAIL_ADDRESS: process.env.BUSINESS_EMAIL_ADDRESS || '',
        AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID || '',
        AZURE_CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET || '',
        AZURE_TENANT_ID: process.env.AZURE_TENANT_ID || '',
    },
    output: 'standalone',
    trailingSlash: false,
}

export default nextConfig