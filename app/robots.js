export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://sajaavat-events.com'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/_next/cache/', '/private/', '/cgi-bin/', '/wp-admin/', '/wp-content/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            {
                userAgent: 'AhrefsBot',
                disallow: '/',
            },
            {
                userAgent: 'MJ12bot',
                disallow: '/',
            },
            {
                userAgent: 'DotBot',
                disallow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
