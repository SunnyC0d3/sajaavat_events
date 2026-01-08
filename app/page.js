'use client'

import ComingSoon from '@/app/components/ComingSoon'

export default function Home() {
    return (
        <ComingSoon/>
    )
}

// import Header from '@/app/components/Header'
// import Hero from '@/app/components/Hero'
// import Gallery from '@/app/components/Gallery'
// import Testimonials from '@/app/components/Testimonials'
// import Footer from '@/app/components/Footer'
// import StructuredData from '@/app/components/StructuredData'
//
// export const metadata = {
//     title: 'Sajaavat Events - Premium Balloon Arch Decorations for Asian Weddings | Coventry UK',
//     description: 'Transform your special day with stunning balloon artistry. Specializing in Asian wedding decorations, baby showers, and corporate events. Based in Coventry, serving all of the UK with professional setup and cleanup included. Free consultations available.',
//     keywords: [
//         'balloon arch decorations Coventry',
//         'Asian wedding balloon decorations UK',
//         'Sikh wedding decorations Coventry',
//         'Hindu wedding balloon arch UK',
//         'baby shower decorations UK',
//         'corporate event decorations Coventry',
//         'balloon installation services UK',
//         'wedding balloon arch Birmingham',
//         'event decorations Manchester',
//         'professional balloon decorations Coventry',
//         'custom balloon arch installation UK',
//         'Pakistani wedding decorations',
//         'Indian wedding balloon decorations UK'
//     ],
//     openGraph: {
//         title: 'Sajaavat Events - Premium Balloon Arch Decorations for Asian Weddings',
//         description: 'Transform your special day with stunning balloon artistry. Specializing in Asian wedding decorations, baby showers, and event styling. Based in Coventry, serving all of the UK.',
//         url: process.env.NEXT_PUBLIC_SITE_URL,
//         images: [
//             {
//                 url: '/images/hero/balloon-arch-main.jpg',
//                 width: 1200,
//                 height: 630,
//                 alt: 'Beautiful pink and gold balloon arch decoration for Asian wedding ceremony by Sajaavat Events'
//             }
//         ],
//         locale: 'en_GB',
//         type: 'website',
//     },
//     twitter: {
//         card: 'summary_large_image',
//         title: 'Sajaavat Events - Premium Balloon Arch Decorations',
//         description: 'Specializing in Asian wedding decorations, baby showers, and event styling. Based in Coventry, serving all of the UK.',
//         images: ['/images/hero/balloon-arch-main.jpg'],
//     },
//     alternates: {
//         canonical: process.env.NEXT_PUBLIC_SITE_URL,
//     },
//     other: {
//         // Local Business Meta - Coventry based
//         'geo.region': 'GB-COV',
//         'geo.placename': 'Coventry',
//         'geo.position': '52.4068;-1.5197',
//         'ICBM': '52.4068, -1.5197',
//
//         // Service Specific - UK-wide
//         'service-area': 'Coventry, Birmingham, London, Manchester, Leeds, Leicester, Bradford, UK',
//         'service-type': 'Balloon Decorations, Event Styling, Wedding Decorations',
//         'business-hours': 'Mon-Fri 9AM-7PM, Sat 10AM-6PM, Sun 12PM-5PM',
//         'price-range': '££-£££',
//         'payment-accepted': 'Cash, Card, Bank Transfer',
//
//         // Cultural Keywords
//         'cultural-specialties': 'Asian Weddings, Sikh Ceremonies, Hindu Weddings, Pakistani Celebrations',
//         'languages-spoken': 'English, Hindi, Punjabi',
//     }
// }
//
// export default function Home() {
//     return (
//         <div className="min-h-screen">
//             {/* Structured Data for Rich Snippets */}
//             <StructuredData />
//
//             <Header/>
//
//             <main role="main">
//                 <h1 className="sr-only">
//                     Sajaavat Events - Premium Balloon Arch Decorations for Asian Weddings, Baby Showers, and Corporate Events - Coventry UK
//                 </h1>
//
//                 <Hero/>
//                 <Gallery/>
//                 <Testimonials/>
//             </main>
//
//             <Footer/>
//
//             {/* Additional SEO Content - Hidden but crawlable */}
//             <div className="sr-only" aria-hidden="true">
//                 <h2>Service Areas</h2>
//                 <p>
//                     We provide professional balloon decoration services throughout the UK. Based in Coventry, West Midlands,
//                     we serve Birmingham, London, Manchester, Leeds, Leicester, Bradford, Nottingham, Derby, Wolverhampton,
//                     Warwick, Solihull, Rugby, Nuneaton, Leamington Spa, Stratford-upon-Avon, and all surrounding areas
//                     across England, Scotland, Wales, and Northern Ireland.
//                 </p>
//
//                 <h2>Cultural Expertise</h2>
//                 <p>
//                     Specializing in Asian wedding traditions including Sikh wedding ceremonies and Gurdwara decorations,
//                     Hindu wedding celebrations and mandap styling, Pakistani wedding festivities and Walima receptions,
//                     Indian wedding decorations, Bengali wedding styling, Tamil wedding decor, Punjabi wedding celebrations,
//                     Muslim Nikah ceremonies, and modern fusion wedding styles that blend traditional and contemporary elements.
//                 </p>
//
//                 <h2>Event Types</h2>
//                 <p>
//                     Asian weddings, Sikh wedding ceremonies, Hindu wedding celebrations, Muslim wedding receptions and Nikah ceremonies,
//                     Pakistani Walima and Mehndi events, baby shower decorations and gender reveal parties, birthday party styling,
//                     corporate event decorations and product launch events, anniversary celebrations, engagement parties,
//                     graduation celebrations, religious festivals, community events, and special occasion styling for all celebrations.
//                 </p>
//
//                 <h2>Services</h2>
//                 <p>
//                     Professional balloon arch installations, traditional mandap backdrop decorations, entrance styling and welcome displays,
//                     photo booth backdrops for social media moments, elegant table centerpieces, dramatic ceiling installations,
//                     organic balloon garlands and modern designs, balloon columns and pillars, custom color matching to wedding themes,
//                     professional setup and cleanup services, free consultation and venue visits, event planning support,
//                     delivery across the UK, and coordination with other vendors. We specialize in culturally authentic decorations
//                     that honor your heritage while creating Instagram-worthy moments for your special day.
//                 </p>
//
//                 <h2>Why Choose Sajaavat Events</h2>
//                 <p>
//                     Based in the heart of Coventry, West Midlands, Sajaavat Events brings premium balloon decoration services
//                     to clients across the entire UK. We understand the importance of cultural authenticity in Asian weddings
//                     and special celebrations, combining traditional values with modern design aesthetics. Our team has years of
//                     experience working with Sikh, Hindu, Muslim, and other Asian communities, ensuring your decorations perfectly
//                     reflect your family traditions and personal style. From intimate gatherings to grand celebrations with hundreds
//                     of guests, we provide the same level of dedication, creativity, and professionalism to every event.
//                 </p>
//
//                 <h2>Coventry and West Midlands Specialist</h2>
//                 <p>
//                     As Coventry's premier balloon decoration specialists, we're proud to serve our local community in the West Midlands.
//                     Our central location allows us to efficiently serve Birmingham, Leicester, Nottingham, Derby, and all surrounding
//                     cities. We know the best venues in Coventry and the West Midlands, from traditional Gurdwaras and temples to modern
//                     banquet halls and hotels. Our familiarity with local venues means faster setup, better planning, and stunning results
//                     that transform any space into the celebration of your dreams.
//                 </p>
//             </div>
//         </div>
//     )
// }
