'use client'

import {useState, useRef, useEffect} from 'react'
import {
    Heart,
    Baby,
    Building2,
    PartyPopper,
    Check,
    ArrowRight,
    Star,
    Calendar,
    Phone,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'
import {Button} from '@/app/components/Button'

export default function Services() {
    const [selectedService, setSelectedService] = useState(0)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const detailSectionRef = useRef(null)
    const autoPlayRef = useRef(null)

    const handleServiceClick = (index) => {
        setSelectedService(index)
        setCurrentImageIndex(0)

        setTimeout(() => {
            if (detailSectionRef.current) {
                const elementPosition = detailSectionRef.current.offsetTop
                const offsetPosition = elementPosition - 100

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            }
        }, 100)
    }

    const nextImage = () => {
        const currentService = services[selectedService]
        setCurrentImageIndex((prev) =>
            prev === currentService.images.length - 1 ? 0 : prev + 1
        )
    }

    const previousImage = () => {
        const currentService = services[selectedService]
        setCurrentImageIndex((prev) =>
            prev === 0 ? currentService.images.length - 1 : prev - 1
        )
    }

    const goToImage = (index) => {
        setCurrentImageIndex(index)
    }

    useEffect(() => {
        if (isAutoPlaying && services[selectedService].images.length > 1) {
            autoPlayRef.current = setInterval(() => {
                nextImage()
            }, 4000)
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
            }
        }
    }, [selectedService, currentImageIndex, isAutoPlaying])

    const handleMouseEnter = () => {
        setIsAutoPlaying(false)
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current)
        }
    }

    const handleMouseLeave = () => {
        setIsAutoPlaying(true)
    }

    const services = [
        {
            id: 'asian-weddings',
            title: 'Asian Wedding Balloon Decorations',
            icon: Heart,
            description: 'Traditional and modern balloon artistry for Sikh, Hindu, Muslim, and Pakistani wedding ceremonies',
            features: [
                'Mandap backdrop balloon decorations',
                'Mehendi ceremony balloon styling',
                'Reception entrance balloon arches',
                'Cultural color coordination and authenticity',
                'Traditional pattern integration with modern design'
            ],
            image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&h=400&fit=crop',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
                    alt: 'Gender neutral baby shower balloon decorations with green and white nature theme'
                }
            ],
            priceFrom: '',
            popular: false,
            keywords: 'baby shower decorations, gender reveal balloons, baby celebration styling, maternity party decorations'
        },
        {
            id: 'corporate-events',
            title: 'Corporate Event Balloon Styling',
            icon: Building2,
            description: 'Professional balloon decorations for business celebrations, product launches, and corporate milestones',
            features: [
                'Brand color integration and logo incorporation',
                'Professional logo incorporation in designs',
                'Awards ceremony styling and backdrops',
                'Product launch event backdrops',
                'Networking event setups and branding'
            ],
            image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
                    alt: 'Corporate awards ceremony balloon decoration with professional styling and branding by Saajavat'
                },
                {
                    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
                    alt: 'Tech company product launch event balloon styling with modern corporate design'
                },
                {
                    src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&h=600&fit=crop',
                    alt: 'Professional networking event balloon setup with elegant business atmosphere'
                }
            ],
            priceFrom: '',
            popular: false,
            keywords: 'corporate event decorations, business celebration styling, product launch balloons, professional event decorations'
        }
    ]

    return (
        <section
            id="services"
            className="bg-neutral-50 pt-16 lg:pt-24"
            itemScope
            itemType="https://schema.org/Service"
            aria-labelledby="services-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 id="services-heading" className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
                        Professional Balloon Decoration Services
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                        From intimate celebrations to grand events, we create beautiful balloon installations
                        that perfectly complement your special moments and honor your cultural traditions across London
                        and UK.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" role="region"
                     aria-labelledby="service-options">
                    <h3 id="service-options" className="sr-only">Available Balloon Decoration Services</h3>
                    {services.map((service, index) => (
                        <article
                            key={service.id}
                            className={`relative group cursor-pointer transition-all duration-300 ${
                                selectedService === index ? 'transform scale-105' : 'hover:transform hover:scale-102'
                            }`}
                            onClick={() => handleServiceClick(index)}
                            itemScope
                            itemType="https://schema.org/Service"
                        >
                            {service.popular && (
                                <div className="absolute z-10">
                                    <div
                                        className="bg-primary-500 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center space-x-1"
                                        role="badge"
                                        aria-label="Most popular service"
                                    >
                                        <Star className="w-3 h-3 fill-current" aria-hidden="true"/>
                                        <span>Most Popular</span>
                                    </div>
                                </div>
                            )}

                            <div
                                className={`bg-neutral-50 border-2 rounded-lg overflow-hidden transition-all duration-300 min-h-[500px] ${
                                    selectedService === index ? 'border-primary-500 shadow-lg' : 'border-neutral-200 hover:border-neutral-300'
                                }`}
                            >
                                <div className="aspect-w-3 aspect-h-2 bg-neutral-200">
                                    <img
                                        src={service.image}
                                        alt={`${service.title} - Professional balloon decoration services by Saajavat London`}
                                        className="w-full h-48 object-cover"
                                        loading="lazy"
                                        itemProp="image"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center mb-3">
                                        <service.icon className="w-6 h-6 text-primary-500 mr-3" aria-hidden="true"/>
                                        <h3 className="text-lg font-semibold text-neutral-900" itemProp="name">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed" itemProp="description">
                                        {service.description}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-start text-sm text-neutral-600">
                                                <Check className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
                                                       aria-hidden="true"/>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {service.priceFrom !== '' && (
                                        <div className="flex items-center justify-between">
                                            <div className="text-neutral-900 font-bold text-lg" itemProp="offers"
                                                 itemScope itemType="https://schema.org/Offer">
                                                <span itemProp="priceCurrency"
                                                      content="GBP">From {service.priceFrom}</span>
                                            </div>
                                        </div>
                                    )}

                                    <span className="sr-only" itemProp="keywords">{service.keywords}</span>
                                    <span className="sr-only" itemProp="areaServed">London, Birmingham, Manchester, Leeds, UK</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div ref={detailSectionRef} className="bg-neutral-100 rounded-lg overflow-hidden scroll-mt-32">
                    <div className="grid lg:grid-cols-2 gap-0">
                        <div
                            className="relative bg-neutral-200 h-64 lg:h-full"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            role="img"
                            aria-label={`${services[selectedService].title} gallery images`}
                        >
                            <img
                                src={services[selectedService].images[currentImageIndex].src}
                                alt={services[selectedService].images[currentImageIndex].alt}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                                itemProp="image"
                            />

                            {services[selectedService].images.length > 1 && (
                                <>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        icon={ChevronLeft}
                                        onClick={previousImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-neutral-50 hover:text-neutral-900 text-neutral-600 rounded-full"
                                        aria-label="Previous image"
                                    />

                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        icon={ChevronRight}
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-neutral-50 hover:text-neutral-900 text-neutral-600 rounded-full"
                                        aria-label="Next image"
                                    />
                                </>
                            )}

                            {services[selectedService].images.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
                                     role="tablist" aria-label="Image navigation">
                                    {services[selectedService].images.map((_, index) => (
                                        <Button
                                            key={index}
                                            variant="ghost"
                                            size="counter"
                                            onClick={() => goToImage(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                                currentImageIndex === index
                                                    ? 'bg-neutral-50 scale-125 shadow-lg w-8'
                                                    : 'bg-neutral-50/60 hover:bg-neutral-50/80'
                                            }`}
                                            role="tab"
                                            aria-selected={currentImageIndex === index}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}

                            <div
                                className="absolute top-4 right-4 bg-neutral-900/50 text-neutral-50 text-xs px-2 py-1 rounded">
                                {currentImageIndex + 1} / {services[selectedService].images.length}
                            </div>

                            <div
                                className="absolute top-4 left-4 bg-neutral-900/50 text-neutral-50 text-xs px-2 py-1 rounded flex items-center space-x-1">
                                <div
                                    className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-neutral-400'}`}></div>
                                <span>{isAutoPlaying ? 'Auto' : 'Paused'}</span>
                            </div>
                        </div>

                        <div className="p-8 lg:p-12 bg-neutral-50" itemScope itemType="https://schema.org/Service">
                            <div className="flex items-center mb-4">
                                {(() => {
                                    const IconComponent = services[selectedService].icon;
                                    return <IconComponent className="w-8 h-8 text-primary-500 mr-3"
                                                          aria-hidden="true"/>;
                                })()}
                                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900" itemProp="name">
                                    {services[selectedService].title}
                                </h3>
                            </div>

                            <p className="text-neutral-600 mb-8 leading-relaxed text-lg" itemProp="description">
                                {services[selectedService].description}. We specialize in creating stunning,
                                culturally-appropriate decorations that honor your traditions while adding modern
                                elegance perfect for London and UK celebrations.
                            </p>

                            <div className="mb-8">
                                <h4 className="font-semibold text-neutral-900 mb-4 text-lg">Service Includes:</h4>
                                <div className="grid gap-3">
                                    {services[selectedService].features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center">
                                            <Check className="w-5 h-5 text-primary-500 mr-3" aria-hidden="true"/>
                                            <span className="text-neutral-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    icon={Calendar}
                                    iconPosition="left"
                                    aria-label={`Book consultation for ${services[selectedService].title.toLowerCase()}`}
                                    onClick={() => window.location.href = '#contact'}
                                >
                                    Book Free Consultation
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    icon={Phone}
                                    iconPosition="left"
                                    aria-label="Call for personalized quote"
                                    onClick={() => window.location.href = '#contact'}
                                >
                                    Call for Quote
                                </Button>
                            </div>

                            <span className="sr-only" itemProp="provider" itemScope
                                  itemType="https://schema.org/Organization">
                                <span itemProp="name">Saajavat</span>
                            </span>
                            <span className="sr-only" itemProp="areaServed">London, Birmingham, Manchester, Leeds, Leicester, UK</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}