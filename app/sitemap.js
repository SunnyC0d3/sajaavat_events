export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    const currentDate = new Date().toISOString()

    const pages = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        }
    ]

    return pages
}