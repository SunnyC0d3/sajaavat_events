export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    const currentDate = new Date().toISOString()

    const pages = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        }
    ]

    return pages
}