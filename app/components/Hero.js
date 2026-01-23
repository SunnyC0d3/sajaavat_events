'use client'

import {useState, useEffect, useMemo} from 'react'
import {ArrowRight, Play, Star, Calendar, Users, Award} from 'lucide-react'
import {Button} from '@/app/components/Button'
import Image from 'next/image'

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const heroImages = useMemo(() => [
        {
            url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=800&fit=crop',
            alt: 'Elegant wedding backdrop and stage decor with mandap-inspired styling by Sajaavat Events in the UK'
        },
        {
            url: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop',
            alt: 'Bespoke event backdrop and celebration decor setup by Sajaavat Events in Coventry and across the UK'
        },
        {
            url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop',
            alt: 'Corporate event styling with premium decor and branded backdrop by Sajaavat Events in the UK'
        }
    ], [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
        }, 7000)
        return () => clearInterval(interval)
    }, [heroImages.length])

    const trustStats = [
        {icon: Calendar, number: '3+', label: 'Years of Event Styling Experience', description: '3+ years creating bespoke decor and backdrops'},
        {icon: Users, number: '200+', label: 'Happy Clients Nationwide', description: '200+ clients across Coventry, the Midlands, and the UK'},
        {icon: Award, number: '500+', label: 'Events Styled Across the UK', description: '500+ weddings, celebrations, and corporate events styled'},
        {icon: Star, number: '5.0', label: 'Average Rating', description: '5.0 star rating from customer reviews'},
    ]

    return (
        <section
            id="home"
            className="bg-neutral-50"
            aria-labelledby="hero-heading"
        >
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-2000 ${
                                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <Image
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover scale-110"
                                style={{
                                    opacity: 0.5
                                }}
                                width={1920}
                                height={1080}
                                loading={index === 0 ? "eager" : "lazy"}
                                priority={index === 0}
                            />
                        </div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-80/90 via-neutral-50/65 to-neutral-80/90"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-accent-50/30 z-10" aria-hidden="true"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-20 z-10" aria-hidden="true">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto p-6 min-h-[700px] flex items-center z-20">
                    <div className="w-full text-center">
                        <h1
                            id="hero-heading"
                            className="text-5xl font-bold text-neutral-900 mb-8 leading-tight max-w-5xl mx-auto"
                        >
                            Bespoke Wedding & Event Decor That Transforms Your Celebration
                        </h1>

                        <p
                            className="text-xl text-neutral-600 mb-12 leading-relaxed max-w-4xl mx-auto"
                        >
                            At Sajaavat Events, we design and deliver bespoke event decor and statement backdrops for weddings,
                            celebrations, and corporate events. From elegant stages and mandaps to modern reception styling and
                            custom installations, we create beautifully curated spaces across Coventry and the UK.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Button
                                variant="primary"
                                size="xl"
                                icon={Calendar}
                                iconPosition="left"
                                onClick={() => window.location.href = '#contact'}
                                aria-label="Book a free event decor consultation"
                            >
                                Book a Free Decor Consultation
                            </Button>
                            <Button
                                variant="outline"
                                size="xl"
                                icon={Play}
                                iconPosition="left"
                                onClick={() => window.location.href = '#gallery'}
                                aria-label="Explore our portfolio of bespoke wedding and event decor"
                            >
                                Explore Our Decor Portfolio
                            </Button>
                        </div>
                        <div
                            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
                            role="region"
                            aria-label="Sajaavat Events highlights"
                        >
                            {trustStats.map((stat, idx) => {
                                const Icon = stat.icon
                                return (
                                    <div key={idx} className="bg-neutral-50/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center justify-center mb-2">
                                            <Icon className="w-5 h-5 text-neutral-700" aria-hidden="true" />
                                        </div>
                                        <div className="text-2xl font-bold text-neutral-900">{stat.number}</div>
                                        <div className="text-sm font-semibold text-neutral-900 mt-1">{stat.label}</div>
                                        <p className="text-xs text-neutral-600 mt-1">{stat.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div id="aboutus" className="bg-neutral-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                            Why Choose Sajaavat Events for Your Wedding or Event Decor?
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Every venue, celebration, and guest experience is different. We take your vision and turn it into a
                            cohesive decor plan — creating backdrops and styling moments that feel personal, elevated, and
                            photo-ready.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8" role="region" aria-labelledby="why-choose-us">
                        <h3 id="why-choose-us" className="sr-only">Why Choose Our Event Decor and Backdrop Services</h3>
                        {[
                            {
                                title: 'Bespoke Design & Backdrops',
                                description: 'Custom backdrops, stages, entrances, and feature moments designed around your theme, venue, and budget — from elegant minimal to full luxury.',
                                icon: '🪄',
                                keywords: 'bespoke event decor, custom backdrops, stage styling'
                            },
                            {
                                title: 'Cultural & Modern Styling',
                                description: 'Experience styling cultural ceremonies and modern events — including mandap-inspired stages and reception decor that blends heritage with contemporary design.',
                                icon: '✨',
                                keywords: 'Asian wedding decor UK, mandap styling, fusion wedding decor'
                            },
                            {
                                title: 'Professional Setup & Finish',
                                description: 'We plan, deliver, and style on the day with a focus on detail — ensuring everything looks polished, cohesive, and ready before guests arrive.',
                                icon: '🎯',
                                keywords: 'event styling service, venue setup, decor installation'
                            }
                        ].map((feature, index) => (
                            <article
                                key={index}
                                className="text-center"
                            >
                                <div className="text-4xl mb-4" aria-hidden="true">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            variant="primary"
                            size="lg"
                            icon={ArrowRight}
                            iconPosition="right"
                            onClick={() => window.location.href = '#contact'}
                            aria-label="Contact Sajaavat Events to discuss event decor and backdrop styling"
                        >
                            Request Your Free Decor Quote
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
