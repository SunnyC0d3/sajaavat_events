'use client'

import {useState, useEffect, useMemo, useCallback} from 'react'
import {
    X,
    ChevronLeft,
    ChevronRight,
    Heart,
    Baby,
    Building2,
    Grid3x3
} from 'lucide-react'
import {Button} from '@/app/components/Button'
import Image from 'next/image'

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [selectedImage, setSelectedImage] = useState(null)
    const [filteredImages, setFilteredImages] = useState([])
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

    const galleryImages = useMemo(() => [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&h=600&fit=crop',
            alt: 'Bespoke wedding stage backdrop and elegant venue styling by Sajaavat Events, Coventry and UK wide',
            category: 'wedding',
            title: 'Romantic Wedding Stage & Backdrop Styling',
            description: 'A refined stage focal point designed to elevate the ceremony and create a photo-ready backdrop.',
            event: 'Wedding Ceremony Styling',
            location: 'UK Venue',
            culturalElements: 'Bespoke staging, curated colour palette',
            keywords: 'wedding decor Coventry, bespoke wedding backdrop, stage styling UK',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&h=600&fit=crop',
                    alt: 'Main view of a bespoke wedding stage backdrop and decor styling'
                },
                {
                    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop',
                    alt: 'Close-up detail of the backdrop styling and decor finish'
                },
                {
                    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop',
                    alt: 'Full venue setup showing coordinated wedding decor styling'
                }
            ]
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop',
            alt: 'Bespoke celebration backdrop and styling for a baby celebration by Sajaavat Events in the UK',
            category: 'baby-shower',
            title: 'Baby Celebration Backdrop & Styling',
            description: 'A soft, modern setup designed for guest photos and a standout focal point.',
            event: 'Baby Celebration Styling',
            location: 'Private Venue, UK',
            culturalElements: 'Modern styling, photo moment backdrop',
            keywords: 'baby celebration decor, event backdrop UK, party styling Coventry',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop',
                    alt: 'Main backdrop styling for a baby celebration'
                },
                {
                    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
                    alt: 'Coordinated dessert table and decor styling'
                },
                {
                    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
                    alt: 'Guest area styled to match the event decor theme'
                }
            ]
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
            alt: 'Corporate event styling with a premium stage setup and branded backdrop by Sajaavat Events in the UK',
            category: 'corporate',
            title: 'Corporate Stage & Branded Backdrop Styling',
            description: 'A polished event setup designed to align with branding and elevate the guest experience.',
            event: 'Corporate Event Styling',
            location: 'Conference Venue, UK',
            culturalElements: 'Corporate aesthetic, brand-led styling',
            keywords: 'corporate event decor UK, branded backdrop, venue styling',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
                    alt: 'Main corporate stage and backdrop styling'
                },
                {
                    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
                    alt: 'Event focal point and branded setup styling'
                },
                {
                    src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&h=600&fit=crop',
                    alt: 'Corporate venue entrance styling and decor details'
                }
            ]
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
            alt: 'Mandap-inspired wedding stage decor and elegant backdrop styling by Sajaavat Events, Coventry and UK wide',
            category: 'wedding',
            title: 'Mandap-Inspired Stage & Reception Styling',
            description: 'A luxury focal stage designed with cultural sensitivity and a modern, premium finish.',
            event: 'Cultural Wedding Styling',
            location: 'Banquet Hall, UK',
            culturalElements: 'Mandap-inspired staging, modern luxury styling',
            keywords: 'Asian wedding decor UK, mandap styling, stage decor Coventry',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
                    alt: 'Mandap-inspired stage setup and wedding decor styling'
                },
                {
                    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
                    alt: 'Traditional ceremony styling details with a luxury finish'
                },
                {
                    src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&h=600&fit=crop',
                    alt: 'Reception hall setup showing cohesive decor styling'
                }
            ]
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
            alt: 'Luxury celebration backdrop and themed styling for a baby celebration by Sajaavat Events in the UK',
            category: 'baby-shower',
            title: 'Luxury Celebration Backdrop & Theme Styling',
            description: 'A premium theme-led setup designed for photos, guest moments, and an elevated finish.',
            event: 'Private Celebration Styling',
            location: 'Family Venue, UK',
            culturalElements: 'Luxury theme styling, photo-ready focal point',
            keywords: 'luxury party decor, celebration backdrop, event styling UK',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
                    alt: 'Luxury themed celebration setup and backdrop styling'
                },
                {
                    src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop',
                    alt: 'Styled gift and dessert area matching the decor theme'
                },
                {
                    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
                    alt: 'Feature photo area styled for guest pictures'
                }
            ]
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop',
            alt: 'Vibrant wedding decor and reception styling with a statement backdrop by Sajaavat Events in the UK',
            category: 'wedding',
            title: 'Vibrant Reception Styling & Statement Backdrop',
            description: 'A bold, joyful colour story brought together with a cohesive stage and reception design.',
            event: 'Reception Styling',
            location: 'Community Venue, UK',
            culturalElements: 'Bold colour palette, statement focal backdrop',
            keywords: 'reception decor UK, statement backdrop, wedding styling Coventry',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop',
                    alt: 'Vibrant wedding reception decor styling and backdrop'
                },
                {
                    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop',
                    alt: 'Decor detail showing coordinated styling elements'
                },
                {
                    src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&h=600&fit=crop',
                    alt: 'Reception focal area designed for photography'
                }
            ]
        },
        {
            id: 7,
            src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
            alt: 'Modern corporate event decor with a premium stage setup and brand-led styling by Sajaavat Events in the UK',
            category: 'corporate',
            title: 'Modern Product Launch Styling',
            description: 'A clean, modern setup designed for high-impact launches, photos, and guest flow.',
            event: 'Product Launch Styling',
            location: 'London, UK',
            culturalElements: 'Modern design, brand-led styling',
            keywords: 'product launch decor UK, corporate styling, event backdrop',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
                    alt: 'Main product launch stage and backdrop styling'
                },
                {
                    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
                    alt: 'Brand-led decor styling for corporate event photography'
                },
                {
                    src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&h=600&fit=crop',
                    alt: 'Event space styling designed for guest experience'
                }
            ]
        },
        {
            id: 8,
            src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
            alt: 'Neutral celebration decor with a modern backdrop and venue styling by Sajaavat Events in the UK',
            category: 'baby-shower',
            title: 'Neutral Celebration Backdrop & Styling',
            description: 'A calm, elegant setup with a natural palette, perfect for modern celebrations and photos.',
            event: 'Celebration Styling',
            location: 'Garden Venue, UK',
            culturalElements: 'Neutral palette, modern styling',
            keywords: 'neutral party decor, backdrop styling UK, venue styling',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
                    alt: 'Neutral decor setup with a photo-ready backdrop'
                },
                {
                    src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop',
                    alt: 'Outdoor venue styling details for celebration'
                },
                {
                    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
                    alt: 'Feature photo moment area styled in a natural theme'
                }
            ]
        },
        {
            id: 9,
            src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
            alt: 'Elegant cultural wedding stage decor with luxury backdrop styling by Sajaavat Events in the UK',
            category: 'wedding',
            title: 'Elegant Cultural Wedding Stage Styling',
            description: 'A luxury stage and backdrop concept designed with cultural understanding and premium finishing.',
            event: 'Cultural Ceremony Styling',
            location: 'Temple/Community Venue, UK',
            culturalElements: 'Cultural styling, luxury finish, stage focal point',
            keywords: 'cultural wedding decor UK, stage styling, luxury wedding backdrop',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
                    alt: 'Elegant wedding stage decor and backdrop styling'
                },
                {
                    src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&h=600&fit=crop',
                    alt: 'Ceremony area styled to match the decor concept'
                },
                {
                    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop',
                    alt: 'Venue-wide styling showing cohesive decor finish'
                }
            ]
        }
    ], [])

    const filterCategories = useMemo(() => [
        {
            id: 'all',
            label: 'All Decor',
            icon: Grid3x3,
            count: galleryImages.length,
            description: 'Browse our complete portfolio of event decor and backdrops',
            keywords: 'event decor portfolio, backdrop styling gallery'
        },
        {
            id: 'wedding',
            label: 'Weddings',
            icon: Heart,
            count: galleryImages.filter(img => img.category === 'wedding').length,
            description: 'Wedding stages, backdrops, and reception styling',
            keywords: 'wedding decor Coventry, wedding backdrop UK, stage decor'
        },
        {
            id: 'baby-shower',
            label: 'Celebrations',
            icon: Baby,
            count: galleryImages.filter(img => img.category === 'baby-shower').length,
            description: 'Celebration styling and photo moment backdrops',
            keywords: 'party decor UK, celebration backdrops, venue styling'
        },
        {
            id: 'corporate',
            label: 'Corporate',
            icon: Building2,
            count: galleryImages.filter(img => img.category === 'corporate').length,
            description: 'Corporate event styling and branded backdrops',
            keywords: 'corporate event decor UK, branded backdrop, launch styling'
        }
    ], [galleryImages])

    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredImages(galleryImages)
        } else {
            setFilteredImages(galleryImages.filter(img => img.category === activeFilter))
        }
    }, [activeFilter, galleryImages])

    const openLightbox = useCallback((image) => {
        setSelectedImage(image)
        setCurrentCarouselIndex(0)
        document.body.style.overflow = 'hidden'

        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'gallery_image_view', {
                event_category: 'Gallery Engagement',
                event_label: image.title,
                value: 1,
                custom_map: {'dimension4': image.category}
            })
        }
    }, [])

    const closeLightbox = useCallback(() => {
        setSelectedImage(null)
        setCurrentCarouselIndex(0)
        document.body.style.overflow = 'unset'
    }, [])

    const navigateImage = useCallback((direction) => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
        let newIndex

        if (direction === 'prev') {
            newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
        } else {
            newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
        }

        setSelectedImage(filteredImages[newIndex])
        setCurrentCarouselIndex(0)

        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'gallery_navigate', {
                event_category: 'Gallery Engagement',
                event_label: direction,
                value: 1
            })
        }
    }, [filteredImages, selectedImage])

    const navigateCarousel = useCallback((direction) => {
        if (!selectedImage || !selectedImage.images) return

        if (direction === 'prev') {
            setCurrentCarouselIndex((prev) =>
                prev === 0 ? selectedImage.images.length - 1 : prev - 1
            )
        } else {
            setCurrentCarouselIndex((prev) =>
                prev === selectedImage.images.length - 1 ? 0 : prev + 1
            )
        }
    }, [selectedImage])

    const goToCarouselImage = useCallback((index) => {
        setCurrentCarouselIndex(index)
    }, [])

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (selectedImage) {
                if (e.key === 'Escape') closeLightbox()
                if (e.key === 'ArrowLeft') navigateCarousel('prev')
                if (e.key === 'ArrowRight') navigateCarousel('next')
            }
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [selectedImage, closeLightbox, navigateCarousel])

    return (
        <section
            id="gallery"
            className="bg-neutral-50 py-16 lg:py-24"
            itemScope
            itemType="https://schema.org/ImageGallery"
            aria-labelledby="gallery-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 id="gallery-heading" className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6" itemProp="name">
                        Our Wedding & Event Decor Portfolio
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed" itemProp="description">
                        Explore a selection of our bespoke backdrops and event styling across Coventry and the UK. From wedding stages and
                        reception setups to celebration photo moments and corporate branding, each concept is designed to elevate your venue.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12" role="tablist" aria-label="Gallery category filters">
                    {filterCategories.map((category) => {
                        const IconComponent = category.icon
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`cursor-pointer flex items-center space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 text-sm sm:text-base ${
                                    activeFilter === category.id
                                        ? 'bg-neutral-900 text-neutral-50'
                                        : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                                }`}
                                role="tab"
                                aria-selected={activeFilter === category.id}
                                aria-controls="gallery-grid"
                                aria-label={`${category.description} - ${category.count} items`}
                                title={category.keywords}
                            >
                                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true"/>
                                <span className="hidden xs:inline">{category.label}</span>
                                <span className="xs:hidden">{category.label.split(' ')[0]}</span>
                                <span className={`text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${
                                    activeFilter === category.id
                                        ? 'bg-white/20 text-neutral-50'
                                        : 'bg-neutral-300 text-neutral-500'
                                }`}>
                                    {category.count}
                                </span>
                            </button>
                        )
                    })}
                </div>

                <div
                    id="gallery-grid"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                    role="tabpanel"
                    aria-labelledby="gallery-heading"
                >
                    {filteredImages.map((image, index) => (
                        <article
                            key={image.id}
                            className="group cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
                            onClick={() => openLightbox(image)}
                            itemScope
                            itemType="https://schema.org/Photograph"
                        >
                            <div className="relative bg-neutral-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="aspect-w-4 aspect-h-3">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading={index < 6 ? 'eager' : 'lazy'}
                                        itemProp="image"
                                        width={1200}
                                        height={800}
                                    />
                                </div>

                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" aria-hidden="true"/>

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-neutral-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="font-semibold text-lg mb-2" itemProp="name">{image.title}</h3>
                                    <p className="text-neutral-50/90 text-sm mb-2" itemProp="description">{image.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-neutral-50/80 text-xs" itemProp="about">{image.event}</span>
                                        <span className="text-neutral-50/80 text-xs" itemProp="contentLocation">{image.location}</span>
                                    </div>
                                    <div className="sr-only">
                                        <span itemProp="keywords">{image.keywords}</span>
                                        <span itemProp="genre">{image.culturalElements}</span>
                                    </div>
                                </div>

                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-neutral-50 ${
                                        image.category === 'wedding' ? 'bg-primary-500' :
                                            image.category === 'baby-shower' ? 'bg-pink-500' :
                                                'bg-blue-500'
                                    }`}>
                                        {image.category === 'baby-shower' ? 'Celebration' :
                                            image.category === 'wedding' ? 'Wedding' : 'Corporate'}
                                    </span>
                                </div>

                                {image.images && image.images.length > 1 && (
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                                        📸 {image.images.length} photos
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-neutral-900/90 flex items-center justify-center p-2 sm:p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="lightbox-title"
                    aria-describedby="lightbox-description"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            closeLightbox();
                        }}
                        className="cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4 z-60 p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full text-neutral-50 hover:bg-white/20 transition-colors duration-200"
                        aria-label="Close image viewer"
                    >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <div
                        className="w-full max-w-5xl h-full flex flex-col bg-neutral-50 rounded-lg overflow-y-auto mx-2 sm:mx-0"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative flex-shrink-0 w-full bg-neutral-900">
                            <div className="relative flex-shrink-0 w-full bg-neutral-900 min-h-[400px] sm:min-h-[500px]">
                                {selectedImage.images && selectedImage.images.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-500 ${
                                            index === currentCarouselIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-contain"
                                            width={1200}
                                            height={800}
                                        />
                                    </div>
                                ))}
                            </div>

                            {selectedImage.images && selectedImage.images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigateCarousel('prev');
                                        }}
                                        className="hidden sm:block absolute left-2 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-neutral-50 hover:bg-white/30 transition-colors duration-200 z-20 items-center justify-center cursor-pointer"
                                        aria-label="Previous photo"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigateCarousel('next');
                                        }}
                                        className="hidden sm:block absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-neutral-50 hover:bg-white/30 transition-colors duration-200 z-20 items-center justify-center cursor-pointer"
                                        aria-label="Next photo"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>

                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                                        {selectedImage.images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    goToCarouselImage(index);
                                                }}
                                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                                    index === currentCarouselIndex
                                                        ? 'bg-white scale-125 w-8'
                                                        : 'bg-white/50 hover:bg-white/75'
                                                }`}
                                                aria-label={`Go to photo ${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                                        {currentCarouselIndex + 1} / {selectedImage.images.length}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="flex-1 p-4 sm:p-6 lg:p-8">
                            <h3 id="lightbox-title" className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 sm:mb-4">
                                {selectedImage.title}
                            </h3>
                            <p id="lightbox-description" className="text-neutral-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                {selectedImage.description}
                            </p>

                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <div>
                                    <span className="text-sm text-neutral-500 block">Event Type</span>
                                    <span className="font-medium text-neutral-900 text-sm sm:text-base">{selectedImage.event}</span>
                                </div>
                                <div>
                                    <span className="text-sm text-neutral-500 block">Location</span>
                                    <span className="font-medium text-neutral-900 text-sm sm:text-base">{selectedImage.location}</span>
                                </div>
                                <div>
                                    <span className="text-sm text-neutral-500 block">Style Notes</span>
                                    <span className="font-medium text-neutral-900 text-sm sm:text-base">{selectedImage.culturalElements}</span>
                                </div>
                            </div>

                            {selectedImage.images && selectedImage.images.length > 1 && (
                                <div className="flex sm:hidden gap-2 mb-4">
                                    <button
                                        onClick={() => navigateCarousel('prev')}
                                        className="flex-1 flex items-center justify-center p-3 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors duration-200"
                                        aria-label="Previous photo"
                                    >
                                        <ChevronLeft className="w-5 h-5 mr-2" />
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => navigateCarousel('next')}
                                        className="flex-1 flex items-center justify-center p-3 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors duration-200"
                                        aria-label="Next photo"
                                    >
                                        Next
                                        <ChevronRight className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            )}

                            <Button
                                variant="primary"
                                size="md"
                                fullWidth
                                onClick={() => window.location.href = '/#contact'}
                                aria-label={`Request a quote for a similar decor style for ${selectedImage.event.toLowerCase()}`}
                                className="text-sm sm:text-base"
                            >
                                Request This Style
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            <div className="sr-only" aria-hidden="true">
                <h3>Wedding and Event Decor Gallery</h3>
                <p>
                    Bespoke wedding and event decor portfolio featuring luxury backdrops, stage styling, mandap-inspired setups, reception decor,
                    celebration styling, and corporate event backdrops. Based in Coventry, serving the West Midlands and across the UK including
                    Birmingham, Leicester, Warwick, Solihull, London, Manchester, Leeds, and surrounding areas.
                </p>
            </div>
        </section>
    )
}
