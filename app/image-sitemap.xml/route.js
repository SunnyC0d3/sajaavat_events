export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    const currentDate = new Date().toISOString()

    const images = [
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/hero/event-decor-main.jpg`,
            caption: 'Bespoke wedding and event decor with luxury backdrop styling by Sajaavat Events in Coventry, UK',
            title: 'Bespoke Wedding & Event Decor - Sajaavat Events',
            license: `${baseUrl}/terms`,
            geoLocation: 'Coventry, UK'
        },
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/hero/wedding-stage-backdrop.jpg`,
            caption: 'Elegant wedding stage backdrop and venue styling designed by Sajaavat Events (UK-wide service)',
            title: 'Wedding Stage Backdrop Styling - Sajaavat Events',
            license: `${baseUrl}/terms`,
            geoLocation: 'Coventry, West Midlands, UK'
        },
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/hero/corporate-event-styling.jpg`,
            caption: 'Professional corporate event styling with premium backdrop setup by Sajaavat Events',
            title: 'Corporate Event Styling & Backdrops - Sajaavat Events',
            license: `${baseUrl}/terms`,
            geoLocation: 'United Kingdom'
        },
        {
            loc: `${baseUrl}/#services`,
            imageUrl: `${baseUrl}/images/services/wedding-stage-styling.jpg`,
            caption: 'Bespoke wedding stage styling and luxury backdrop setup for ceremonies and receptions',
            title: 'Wedding Stage Styling & Luxury Backdrops',
            license: `${baseUrl}/terms`,
            geoLocation: 'Coventry, UK'
        },
        {
            loc: `${baseUrl}/#services`,
            imageUrl: `${baseUrl}/images/services/cultural-ceremony-decor.jpg`,
            caption: 'Culturally considerate ceremony decor with mandap-inspired staging and elegant venue styling',
            title: 'Cultural Ceremony Decor & Mandap-Inspired Styling',
            license: `${baseUrl}/terms`,
            geoLocation: 'West Midlands, UK'
        },
        {
            loc: `${baseUrl}/#services`,
            imageUrl: `${baseUrl}/images/services/reception-backdrop.jpg`,
            caption: 'Reception decor and statement backdrop styling designed for guest experience and photography',
            title: 'Reception Decor & Statement Backdrops',
            license: `${baseUrl}/terms`,
            geoLocation: 'United Kingdom'
        },
        {
            loc: `${baseUrl}/#services`,
            imageUrl: `${baseUrl}/images/services/entrance-styling.jpg`,
            caption: 'Event entrance styling and welcome display decor for weddings, celebrations, and corporate events',
            title: 'Event Entrance Styling & Welcome Displays',
            license: `${baseUrl}/terms`,
            geoLocation: 'Coventry, UK'
        },
        {
            loc: `${baseUrl}/#gallery`,
            imageUrl: `${baseUrl}/images/gallery/wedding-portfolio-1.jpg`,
            caption: 'Wedding decor portfolio featuring bespoke backdrops, stage styling, and venue transformation',
            title: 'Wedding Decor Portfolio - Backdrops & Stage Styling',
            license: `${baseUrl}/terms`,
            geoLocation: 'United Kingdom'
        },
        {
            loc: `${baseUrl}/#gallery`,
            imageUrl: `${baseUrl}/images/gallery/celebration-portfolio.jpg`,
            caption: 'Celebration decor portfolio with themed backdrops and photo-ready styling',
            title: 'Celebration Decor Portfolio - Backdrops & Styling',
            license: `${baseUrl}/terms`,
            geoLocation: 'United Kingdom'
        },
        {
            loc: `${baseUrl}/#gallery`,
            imageUrl: `${baseUrl}/images/gallery/corporate-portfolio.jpg`,
            caption: 'Corporate decor portfolio showcasing branded backdrops and professional event styling',
            title: 'Corporate Event Decor Portfolio - Branded Backdrops',
            license: `${baseUrl}/terms`,
            geoLocation: 'United Kingdom'
        },
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/regions/west-midlands-event-decor.jpg`,
            caption: 'Event decor specialists based in Coventry serving the West Midlands and across the UK',
            title: 'Coventry Event Decor Specialists - UK Wide Service',
            license: `${baseUrl}/terms`,
            geoLocation: 'Coventry, West Midlands, UK'
        },
        {
            loc: `${baseUrl}/#gallery`,
            imageUrl: `${baseUrl}/images/process/venue-transformation.jpg`,
            caption: 'Venue transformation showing before and after a bespoke decor and backdrop setup',
            title: 'Venue Transformation - Bespoke Decor & Backdrops',
            license: `${baseUrl}/terms`,
            geoLocation: 'United Kingdom'
        },
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/team/event-styling-team.jpg`,
            caption: 'Sajaavat Events team preparing a bespoke backdrop and venue styling setup',
            title: 'Event Styling Team - Sajaavat Events',
            license: `${baseUrl}/terms`,
            geoLocation: 'Coventry, UK'
        }
    ]

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images.map(image => `  <url>
    <loc>${image.loc}</loc>
    <image:image>
      <image:loc>${image.imageUrl}</image:loc>
      <image:caption>${image.caption}</image:caption>
      <image:title>${image.title}</image:title>
      <image:license>${image.license}</image:license>
      <image:geo_location>${image.geoLocation}</image:geo_location>
    </image:image>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`

    return new Response(xmlContent, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400',
        },
    })
}
