'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock, Star } from 'lucide-react'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'

export default function ComingSoon() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    // Set launch date (you can modify this)
    const launchDate = new Date('2025-09-15T00:00:00').getTime()

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = launchDate - now

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            })

            if (distance < 0) {
                clearInterval(timer)
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [launchDate])

    const handlePhoneClick = () => {
        window.location.href = 'tel:+447123456789'
    }

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/447123456789?text=Hello! I\'d like to inquire about your balloon decoration services.', '_blank')
    }

    const handleEmailClick = () => {
        window.location.href = `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}?subject=Inquiry about Balloon Decoration Services`
    }

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Top Banner */}
            <div className="bg-neutral-900 text-neutral-50 text-center py-2 text-sm font-medium">
                <div className="max-w-7xl mx-auto px-4 py-2">
                    <span>
                        Free consultation for events over £500 • Email{' '}
                        <button
                            onClick={handlePhoneClick}
                            className="underline hover:no-underline font-semibold cursor-pointer bg-transparent border-none text-inherit"
                        >
                            {process.env.NEXT_PUBLIC_EMAIL_ADDRESS}
                        </button>
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-40 right-16 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
                <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-200 rounded-full opacity-60 animate-pulse delay-2000"></div>
                <div className="absolute bottom-60 right-32 w-24 h-24 bg-blue-200 rounded-full opacity-60 animate-pulse delay-500"></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Logo Section */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6">
                            <Image
                                src={logo}
                                alt="Sajaavat Events logo - Premium balloon arch decorations for Asian weddings, baby showers and corporate events in London UK"
                                width={200}
                                height={50}
                                itemProp="logo"
                                priority
                            />
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-bold text-neutral-900 mb-4">
                            Sajaavat Events
                        </h1>
                        <p className="text-xl sm:text-2xl text-neutral-600 font-medium mb-2">
                            Premium Balloon Arch Decorations
                        </p>
                        <p className="text-lg text-neutral-500">
                            Specializing in Asian Wedding & Event Styling
                        </p>
                    </div>

                    {/* Coming Soon Section */}
                    <div className="text-center mb-16">
                        <div className="inline-block bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-8">
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                                Website Coming Soon
                            </h2>
                            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                                We&apos;re crafting a beautiful new experience to showcase our stunning balloon decorations.
                                Our team is working hard to bring you the perfect platform to plan your dream event.
                            </p>

                            {/* Countdown Timer */}
                            <div className="grid grid-cols-4 gap-4 sm:gap-8 mb-8">
                                <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-xl p-4 sm:p-6">
                                    <div className="text-2xl sm:text-4xl font-bold">{timeLeft.days}</div>
                                    <div className="text-sm sm:text-base opacity-90">Days</div>
                                </div>
                                <div className="bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-xl p-4 sm:p-6">
                                    <div className="text-2xl sm:text-4xl font-bold">{timeLeft.hours}</div>
                                    <div className="text-sm sm:text-base opacity-90">Hours</div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-500 to-teal-600 text-white rounded-xl p-4 sm:p-6">
                                    <div className="text-2xl sm:text-4xl font-bold">{timeLeft.minutes}</div>
                                    <div className="text-sm sm:text-base opacity-90">Minutes</div>
                                </div>
                                <div className="bg-gradient-to-br from-teal-500 to-green-600 text-white rounded-xl p-4 sm:p-6">
                                    <div className="text-2xl sm:text-4xl font-bold">{timeLeft.seconds}</div>
                                    <div className="text-sm sm:text-base opacity-90">Seconds</div>
                                </div>
                            </div>

                            <div className="inline-flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full text-sm font-medium">
                                <Clock className="w-4 h-4" />
                                <span>Expected Launch: Mid September 2025</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Preview */}
                    <div className="mb-16">
                        <h3 className="text-2xl sm:text-3xl font-bold text-center text-neutral-900 mb-8">
                            What We Specialize In
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-neutral-900 mb-2">Asian Weddings</h4>
                                <p className="text-neutral-600">Stunning balloon arches and decorations for Sikh, Hindu, Pakistani, and Indian weddings</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-neutral-900 mb-2">Baby Showers</h4>
                                <p className="text-neutral-600">Beautiful and elegant balloon decorations to celebrate your little one&apos;s arrival</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-neutral-900 mb-2">Corporate Events</h4>
                                <p className="text-neutral-600">Professional balloon styling for corporate celebrations and company events</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                                Ready to Plan Your Event?
                            </h3>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                                Don&apos;t wait for the website! Contact us now for a free consultation and quote.
                                We&apos;re already creating magical moments for clients across London and the UK.
                            </p>
                        </div>

                        <div className="flex justify-center items-center mb-8">
                            <button
                                onClick={handleEmailClick}
                                className="min-w-[300px] cursor-pointer flex flex-col items-center space-y-3 p-6 rounded-xl border-2 border-neutral-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-center">
                                    <div className="font-semibold text-neutral-900">Email Us</div>
                                    <div className="text-sm text-neutral-600">Get Detailed Quote</div>
                                </div>
                            </button>
                        </div>

                        <div className="flex items-center justify-center space-x-2 text-neutral-600">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">Serving London, Birmingham, Manchester, Leeds & UK</span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-12 pt-8 border-t border-neutral-200">
                        <p className="text-neutral-500 text-sm">
                            © 2025 Sajaavat Events. Premium balloon decorations for your special moments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// import Header from '@/app/components/Header'
// import Hero from '@/app/components/Hero'
// import Services from '@/app/components/Services'
// import Gallery from '@/app/components/Gallery'
// import Testimonials from '@/app/components/Testimonials'
// import Footer from '@/app/components/Footer'
// import StructuredData from '@/app/components/StructuredData'
//
// export const metadata = {
//     title: 'Sajaavat Events - Premium Balloon Arch Decorations for Asian Weddings | London UK',
//     description: 'Transform your special day with stunning balloon artistry. Specializing in Asian wedding decorations, baby showers, corporate events and balloon arch installations across London and UK. Professional setup and cleanup included. Free consultations available.',
//     keywords: [
//         'balloon arch decorations London',
//         'Asian wedding balloon decorations',
//         'Sikh wedding decorations London',
//         'Hindu wedding balloon arch',
//         'baby shower decorations UK',
//         'corporate event decorations London',
//         'balloon installation services',
//         'wedding balloon arch Birmingham',
//         'event decorations Manchester',
//         'professional balloon decorations',
//         'custom balloon arch installation',
//         'Pakistani wedding decorations',
//         'Indian wedding balloon decorations'
//     ],
//     openGraph: {
//         title: 'Sajaavat Events - Premium Balloon Arch Decorations for Asian Weddings',
//         description: 'Transform your special day with stunning balloon artistry. Specializing in Asian wedding decorations, baby showers, and event styling across London and UK.',
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
//         description: 'Specializing in Asian wedding decorations, baby showers, and event styling across London and UK.',
//         images: ['/images/hero/balloon-arch-main.jpg'],
//     },
//     alternates: {
//         canonical: process.env.NEXT_PUBLIC_SITE_URL,
//     },
//     other: {
//         // Local Business Meta
//         'geo.region': 'GB-LND',
//         'geo.placename': 'London',
//         'geo.position': '51.5074;-0.1278',
//         'ICBM': '51.5074, -0.1278',
//
//         // Service Specific
//         'service-area': 'London, Birmingham, Manchester, Leeds, Leicester, Bradford, UK',
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
//                     Sajaavat Events - Premium Balloon Arch Decorations for Asian Weddings, Baby Showers, and Corporate Events in London UK
//                 </h1>
//
//                 <Hero/>
//                 <Services/>
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
//                     We provide professional balloon decoration services across London and surrounding areas including
//                     Birmingham, Manchester, Leeds, Bradford, Leicester, Southall, Slough, Reading, Oxford, Cambridge,
//                     Luton, Watford, Croydon, Kingston, Richmond, and throughout Greater London and the Home Counties.
//                 </p>
//
//                 <h2>Cultural Expertise</h2>
//                 <p>
//                     Specializing in Asian wedding traditions including Sikh wedding ceremonies, Hindu wedding celebrations,
//                     Pakistani wedding festivities, Indian wedding decorations, Bengali wedding styling, Tamil wedding decor,
//                     Punjabi wedding celebrations, and modern fusion wedding styles.
//                 </p>
//
//                 <h2>Event Types</h2>
//                 <p>
//                     Asian weddings, Sikh wedding ceremonies, Hindu wedding celebrations, Muslim wedding receptions,
//                     baby shower decorations, gender reveal parties, birthday party styling, corporate event decorations,
//                     product launch events, anniversary celebrations, engagement parties, and special occasion styling.
//                 </p>
//
//                 <h2>Services</h2>
//                 <p>
//                     Balloon arch installations, mandap backdrop decorations, entrance styling, photo booth backdrops,
//                     table centerpieces, ceiling installations, organic balloon garlands, balloon columns,
//                     custom color matching, professional setup and cleanup, consultation services, and event planning support.
//                 </p>
//             </div>
//         </div>
//     )
// }
