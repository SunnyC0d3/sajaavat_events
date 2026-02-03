export async function GET() {
    const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL

    if (!rawBaseUrl) {
        return new Response('Missing NEXT_PUBLIC_SITE_URL', { status: 500 })
    }

    const baseUrl = rawBaseUrl.replace(/\/$/, '')

    const LASTMOD_CHUNNI = '2025-08-01T00:00:00.000Z'
    const LASTMOD_WEDDING = '2025-09-01T00:00:00.000Z'

    const escapeXml = (value = '') =>
        String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;')

    const images = [
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/gallery/ss-event/SS-Chunni-Landscape-2.jpg`,
            caption:
                "Blush and powder-blue chunni event decor with a styled stage moment and floral finishing — designed by Sajaavat Events in Coventry.",
            title: "Chunni Event Decor - Sajaavat Events",
            geoLocation: 'Coventry, UK',
            lastmod: LASTMOD_CHUNNI,
        },
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/gallery/ss-event/SS-Wedding-Landscape-1.JPG`,
            caption:
                "Wedding day stage styling with a regal, premium finish and photo-ready details — created by Sajaavat Events (Coventry, UK-wide).",
            title: "Wedding Day Stage Styling - Sajaavat Events",
            geoLocation: 'Coventry, West Midlands, UK',
            lastmod: LASTMOD_WEDDING,
        },
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/gallery/ss-event/SS-Wedding-Landscape-2.jpg`,
            caption:
                "Wedding reception decor featuring a luxury stage setup with clean lines, layered textures, and a polished, modern finish — by Sajaavat Events.",
            title: "Wedding Reception Decor - Sajaavat Events",
            geoLocation: 'Coventry, UK',
            lastmod: LASTMOD_WEDDING,
        },
        {
            loc: `${baseUrl}/#testimonials`,
            imageUrl: `${baseUrl}/images/gallery/ss-event/SS-Chunni-Landscape-4.jpg`,
            caption:
                "Chunni event decor featuring a styled stage setup with coordinated florals and a soft, elegant colour palette by Sajaavat Events in Coventry.",
            title: "Chunni Event Decor & Styling - Sajaavat Events",
            geoLocation: 'Coventry, UK',
            lastmod: LASTMOD_CHUNNI,
        },
        {
            loc: `${baseUrl}/#testimonials`,
            imageUrl: `${baseUrl}/images/gallery/ss-event/SS-Wedding-Portrait-4.jpg`,
            caption:
                "Wedding day portrait styling with a premium, photo-ready backdrop setup created by Sajaavat Events in Coventry (UK-wide service).",
            title: "Wedding Day Backdrop Styling - Sajaavat Events",
            geoLocation: 'Coventry, West Midlands, UK',
            lastmod: LASTMOD_WEDDING,
        },
        {
            loc: `${baseUrl}/#testimonials`,
            imageUrl: `${baseUrl}/images/gallery/ss-event/SS-Wedding-Portrait-1.JPG`,
            caption:
                "Elegant wedding styling detail shot featuring curated textures and a clean finish for photography by Sajaavat Events.",
            title: "Wedding Styling Details - Sajaavat Events",
            geoLocation: 'Coventry, UK',
            lastmod: LASTMOD_WEDDING,
        },
    ]

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
        ${images
                .map(
                    (img) => `  
                    <url>
                        <loc>${escapeXml(img.loc)}</loc>
                        <image:image>
                          <image:loc>${escapeXml(img.imageUrl)}</image:loc>
                          <image:caption>${escapeXml(img.caption)}</image:caption>
                          <image:title>${escapeXml(img.title)}</image:title>
                          <image:license>${escapeXml(img.license)}</image:license>
                          <image:geo_location>${escapeXml(img.geoLocation)}</image:geo_location>
                        </image:image>
                        <lastmod>${escapeXml(img.lastmod)}</lastmod>
                        <changefreq>monthly</changefreq>
                        <priority>0.8</priority>
                      </url>`
                )
                .join('\n')}
        </urlset>`

    return new Response(xmlContent, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
        },
    })
}
