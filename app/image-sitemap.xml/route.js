export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    const currentDate = new Date().toISOString()

    // Image data with SEO-optimized information
    const images = [
        // Hero/Homepage Images
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/hero/asian-wedding-balloon-arch.jpg`,
            caption: 'Beautiful pink and gold balloon arch decoration for Asian wedding ceremony by Sajaavat Events London',
            title: 'Asian Wedding Balloon Arch - Sajaavat Events',
            license: `${baseUrl}/terms`,
            geoLocation: 'London, UK'
        },
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/hero/baby-shower-decorations.jpg`,
            caption: 'Elegant baby shower balloon decorations in pastel colors for celebration in London',
            title: 'Baby Shower Balloon Decorations - Sajaavat Events',
            license: `${baseUrl}/terms`,
            geoLocation: 'London, UK'
        },
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/hero/corporate-event-balloons.jpg`,
            caption: 'Professional corporate event balloon styling with sophisticated design',
            title: 'Corporate Event Balloon Styling - Sajaavat Events',
            license: `${baseUrl}/terms`,
            geoLocation: 'London, UK'
        },

        // Service-specific Images
        {
            loc: `${baseUrl}/#services`,
            imageUrl: `${baseUrl}/images/services/sikh-wedding-mandap.jpg`,
            caption: 'Traditional Sikh wedding mandap with pink and gold balloon decoration backdrop',
            title: 'Sikh Wedding Mandap Balloon Decorations',
            license: `${baseUrl}/terms`,
            geoLocation: 'London, UK'
        },
        {
            loc: `${baseUrl}/#services`,
            imageUrl: `${baseUrl}/images/services/hindu-wedding-arch.jpg`,
            caption: 'Hindu wedding ceremony balloon arch with traditional red and white colors',
            title: 'Hindu Wedding Balloon Arch Installation',
            license: `${baseUrl}/terms`,
            geoLocation: 'Birmingham, UK'
        },
        {
            loc: `${baseUrl}/#services`,
            imageUrl: `${baseUrl}/images/services/pakistani-wedding-colors.jpg`,
            caption: 'Pakistani wedding balloon decorations with vibrant cultural colors and patterns',
            title: 'Pakistani Wedding Balloon Styling',
            license: `${baseUrl}/terms`,
            geoLocation: 'Manchester, UK'
        },
        {
            loc: `${baseUrl}/#services`,
            imageUrl: `${baseUrl}/images/services/balloon-arch-installation.jpg`,
            caption: 'Custom balloon arch installation for event entrance with professional styling',
            title: 'Professional Balloon Arch Installation Services',
            license: `${baseUrl}/terms`,
            geoLocation: 'London, UK'
        },

        // Gallery Images
        {
            loc: `${baseUrl}/#gallery`,
            imageUrl: `${baseUrl}/images/gallery/wedding-portfolio-1.jpg`,
            caption: 'Asian wedding balloon decoration portfolio showing elegant mandap styling',
            title: 'Asian Wedding Balloon Decoration Portfolio',
            license: `${baseUrl}/terms`,
            geoLocation: 'London, UK'
        },
        {
            loc: `${baseUrl}/#gallery`,
            imageUrl: `${baseUrl}/images/gallery/baby-shower-portfolio.jpg`,
            caption: 'Baby shower balloon decoration portfolio with gender reveal styling',
            title: 'Baby Shower Balloon Decoration Examples',
            license: `${baseUrl}/terms`,
            geoLocation: 'Leeds, UK'
        },
        {
            loc: `${baseUrl}/#gallery`,
            imageUrl: `${baseUrl}/images/gallery/corporate-portfolio.jpg`,
            caption: 'Corporate event balloon decoration portfolio showing professional styling',
            title: 'Corporate Event Balloon Decoration Portfolio',
            license: `${baseUrl}/terms`,
            geoLocation: 'Manchester, UK'
        },

        // Cultural/Regional Images
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/cultural/punjabi-wedding-balloons.jpg`,
            caption: 'Punjabi wedding balloon decorations with traditional vibrant colors and cultural authenticity',
            title: 'Punjabi Wedding Balloon Decorations - Cultural Specialists',
            license: `${baseUrl}/terms`,
            geoLocation: 'Southall, London, UK'
        },
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/cultural/bengali-wedding-styling.jpg`,
            caption: 'Bengali wedding balloon styling with traditional red and gold cultural theme',
            title: 'Bengali Wedding Balloon Styling Services',
            license: `${baseUrl}/terms`,
            geoLocation: 'London, UK'
        },

        // Before/After Images
        {
            loc: `${baseUrl}/#gallery`,
            imageUrl: `${baseUrl}/images/process/venue-transformation.jpg`,
            caption: 'Venue transformation showing before and after balloon decoration installation',
            title: 'Venue Transformation with Balloon Decorations',
            license: `${baseUrl}/terms`,
            geoLocation: 'Birmingham, UK'
        },

        // Team/Behind the Scenes
        {
            loc: `${baseUrl}/`,
            imageUrl: `${baseUrl}/images/team/balloon-installation-team.jpg`,
            caption: 'Professional balloon decoration installation team setting up Asian wedding arch',
            title: 'Professional Balloon Installation Team - Sajaavat Events',
            license: `${baseUrl}/terms`,
            geoLocation: 'London, UK'
        }
    ]

    // Generate XML content
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
            'Cache-Control': 'public, max-age=86400', // Cache for 1 day
        },
    })
}