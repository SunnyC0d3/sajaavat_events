'use client'

import {useState, useEffect, useMemo} from 'react'
import {ArrowRight, Play, Star, Calendar, Users, Award} from 'lucide-react'
import {Button} from '@/app/components/Button'
import Image from 'next/image'

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Memoize heroImages to prevent recreation on every render
    const heroImages = useMemo(() => [
        {
            url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=800&fit=crop',
            alt: 'Elegant pink and gold balloon arch decoration for Asian wedding ceremony with traditional mandap styling by Sajaavat Events London'
        },
        {
            url: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop',
            alt: 'Beautiful pastel blue balloon decorations for baby shower celebration with professional styling by Sajaavat Events'
        },
        {
            url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop',
            alt: 'Professional corporate event balloon styling with sophisticated design for business celebration by Sajaavat Events'
        }
    ], [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
        }, 7000) // Change every 7 seconds for smoother experience
        return () => clearInterval(interval)
    }, [heroImages.length])

    const trustStats = [
        {icon: Calendar, number: '3+', label: 'Years Experience', description: '3+ years creating beautiful balloon decorations'},
        {icon: Users, number: '200+', label: 'Happy Clients', description: '200+ satisfied customers across London and UK'},
        {icon: Award, number: '500+', label: 'Events Decorated', description: '500+ successful events including Asian weddings'},
        {icon: Star, number: '5.0', label: 'Average Rating', description: '5.0 star rating from customer reviews'},
    ]

    return (
        <section
            id="home"
            className="bg-neutral-50"
            itemScope
            itemType="https://schema.org/LocalBusiness"
            aria-labelledby="hero-heading"
        >
            {/* Hero with elegant gradient background */}
            <div className="relative overflow-hidden">
                {/* Blurred Photo Carousel Background */}
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
                    {/* Much lighter gradient - just enough to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-80/90 via-neutral-50/65 to-neutral-80/90"></div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-accent-50/30 z-10" aria-hidden="true"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-20 z-10" aria-hidden="true">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto p-6 min-h-[700px] flex items-center z-20">
                    <div className="w-full text-center">
                        {/* Main Heading */}
                        <h1
                            id="hero-heading"
                            className="text-5xl font-bold text-neutral-900 mb-8 leading-tight max-w-5xl mx-auto"
                            itemProp="name"
                        >
                            Transform Your Asian Wedding Celebrations
                        </h1>

                        {/* Description */}
                        <p
                            className="text-xl text-neutral-600 mb-12 leading-relaxed max-w-4xl mx-auto"
                            itemProp="description"
                        >
                            Specializing in traditional Asian wedding ceremonies, baby showers, and corporate events.
                            Creating unforgettable moments with elegant balloon arch decorations across London and UK
                            that perfectly complement your cultural celebration and family traditions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Button
                                variant="primary"
                                size="xl"
                                icon={Calendar}
                                iconPosition="left"
                                onClick={() => window.location.href = '#contact'}
                                aria-label="Book free consultation for balloon decoration services"
                            >
                                Book Free Consultation
                            </Button>
                            <Button
                                variant="outline"
                                size="xl"
                                icon={Play}
                                iconPosition="left"
                                onClick={() => window.location.href = '#gallery'}
                                aria-label="View our portfolio of Asian wedding and event decorations"
                            >
                                View Our Portfolio
                            </Button>
                        </div>

                        {/* Hidden SEO content */}
                        <div className="sr-only">
                            <span itemProp="areaServed">London, Birmingham, Manchester, Leeds, Leicester, Bradford, Southall</span>
                            <span itemProp="serviceType">Balloon Decorations, Asian Wedding Styling, Event Decorations</span>
                            <span itemProp="priceRange">££-£££</span>
                            <span itemProp="email">{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                            Why Choose Sajaavat Events for Your Asian Wedding?
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            We understand that every celebration is unique. Our personalized approach
                            ensures your event reflects your cultural style and family traditions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8" role="region" aria-labelledby="why-choose-us">
                        <h3 id="why-choose-us" className="sr-only">Why Choose Our Balloon Decoration Services</h3>
                        {[
                            {
                                title: 'Cultural Expertise',
                                description: 'Specialized in Sikh, Hindu, Muslim, and Pakistani wedding traditions with authentic color schemes and cultural understanding.',
                                icon: '🎨',
                                keywords: 'Asian wedding expertise, cultural decorations'
                            },
                            {
                                title: 'Premium Quality Materials',
                                description: 'High-quality balloons and professional installation techniques for lasting beauty throughout your celebration.',
                                icon: '✨',
                                keywords: 'premium balloon decorations, professional installation'
                            },
                            {
                                title: 'Complete Service Package',
                                description: 'From initial consultation to final cleanup, we handle every detail so you can focus on enjoying your special day.',
                                icon: '🎯',
                                keywords: 'full service decorations, setup and cleanup'
                            }
                        ].map((feature, index) => (
                            <article
                                key={index}
                                className="text-center"
                                itemScope
                                itemType="https://schema.org/Service"
                            >
                                <div className="text-4xl mb-4" aria-hidden="true">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3" itemProp="name">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed" itemProp="description">
                                    {feature.description}
                                </p>
                                <span className="sr-only" itemProp="keywords">{feature.keywords}</span>
                            </article>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            variant="primary"
                            size="lg"
                            icon={ArrowRight}
                            iconPosition="right"
                            onClick={() => window.location.href = '#services'}
                            aria-label="Learn more about our Asian wedding decoration services"
                        >
                            Learn More About Our Services
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}