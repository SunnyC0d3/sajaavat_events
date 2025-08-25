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
        }, 5000)
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
            <div className="relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
                        <div className="flex items-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                            <div className="w-full max-w-xl">
                                <div
                                    className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-8"
                                    role="banner"
                                >
                                    <Star className="w-4 h-4 fill-current" aria-hidden="true"/>
                                    <span>London&apos;s Premier Asian Wedding Balloon Specialists</span>
                                </div>

                                <h1
                                    id="hero-heading"
                                    className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight"
                                    itemProp="name"
                                >
                                    Transform Your
                                    <span className="block text-primary-500">Asian Wedding Celebrations</span>
                                </h1>

                                <p
                                    className="text-lg text-neutral-600 mb-8 leading-relaxed"
                                    itemProp="description"
                                >
                                    Specializing in traditional Asian wedding ceremonies, baby showers, and corporate events.
                                    Creating unforgettable moments with elegant balloon arch decorations across London and UK
                                    that perfectly complement your cultural celebration and family traditions.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        icon={Calendar}
                                        iconPosition="left"
                                        onClick={() => window.location.href = '#contact'}
                                        aria-label="Book free consultation for balloon decoration services"
                                    >
                                        Book Free Consultation
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        icon={Play}
                                        iconPosition="left"
                                        onClick={() => window.location.href = '#gallery'}
                                        aria-label="View our portfolio of Asian wedding and event decorations"
                                    >
                                        View Our Portfolio
                                    </Button>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" role="region" aria-labelledby="trust-stats">
                                    <h2 id="trust-stats" className="sr-only">Customer Trust Statistics</h2>
                                    {trustStats.map((stat, index) => (
                                        <div key={index} className="text-center lg:text-left" itemScope itemType="https://schema.org/Rating">
                                            <div className="flex items-center justify-center lg:justify-start mb-2">
                                                <stat.icon className="w-5 h-5 text-primary-500 mr-2" aria-hidden="true"/>
                                                <span
                                                    className="text-2xl font-bold text-neutral-900"
                                                    itemProp="ratingValue"
                                                    aria-label={stat.description}
                                                >
                                                    {stat.number}
                                                </span>
                                            </div>
                                            <div className="text-sm text-neutral-600" itemProp="description">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Hidden SEO content */}
                                <div className="sr-only">
                                    <span itemProp="areaServed">London, Birmingham, Manchester, Leeds, Leicester, Bradford, Southall</span>
                                    <span itemProp="serviceType">Balloon Decorations, Asian Wedding Styling, Event Decorations</span>
                                    <span itemProp="priceRange">££-£££</span>
                                    <span itemProp="telephone">+44-712-345-6789</span>
                                    <span itemProp="email">{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-neutral-100 lg:bg-transparent">
                            <div className="absolute inset-0">
                                {heroImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-1000 ${
                                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    >
                                        <Image
                                            src={image.url}
                                            alt={image.alt}
                                            width={1200}
                                            height={800}
                                            className="w-full h-full object-cover"
                                            loading={index === 0 ? "eager" : "lazy"}
                                            itemProp={index === currentImageIndex ? "image" : undefined}
                                        />
                                    </div>
                                ))}

                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary-500/10"
                                    aria-hidden="true">
                                </div>
                            </div>

                            <div className="absolute bottom-6 right-6 flex space-x-2" role="group" aria-label="Image navigation">
                                {heroImages.map((_, index) => (
                                    <Button
                                        key={index}
                                        variant="ghost"
                                        size="counter"
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 p-0 min-h-0 ${
                                            index === currentImageIndex
                                                ? 'bg-neutral-50 scale-125 shadow-lg w-8'
                                                : 'bg-neutral-50/60 hover:bg-neutral-50/80'
                                        }`}
                                        aria-label={`View ${index === 0 ? 'wedding' : index === 1 ? 'baby shower' : 'corporate'} decoration image`}
                                    />
                                ))}
                            </div>

                            <div
                                className="absolute bottom-8 left-8 bg-neutral-50 p-6 rounded-lg shadow-xl max-w-xs"
                                itemScope
                                itemType="https://schema.org/Review"
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="flex" role="img" aria-label="5 star rating">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-gold-400 fill-current"/>
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium text-neutral-800" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                                        <span itemProp="ratingValue">5.0</span>/<span itemProp="bestRating">5</span>
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed" itemProp="reviewBody">
                                    &quot;Finally found a decoration service that understands Asian wedding traditions.
                                    Everything else feels basic now.&quot;
                                </p>
                                <div className="text-xs text-neutral-500 mt-2">
                                    Based on <span itemProp="reviewCount">200+</span> customer reviews
                                </div>
                            </div>
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