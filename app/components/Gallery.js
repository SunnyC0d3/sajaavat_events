'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, Heart, Baby, Grid3x3 } from 'lucide-react'
import { Button } from '@/app/components/Button'
import Image from 'next/image'

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [selectedImage, setSelectedImage] = useState(null)
    const [filteredImages, setFilteredImages] = useState([])
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

    const carouselRef = useRef(null)
    const swipeLockRef = useRef(false)
    const startRef = useRef({ x: 0, y: 0 })

    const galleryImages = useMemo(
        () => [
            {
                id: 1,
                src: '/images/gallery/ss-event/SS-Chunni-Landscape-2.jpg',
                alt: "Chunni decor for Sukhkaran and Simrans chunni event",
                category: 'pre-wedding',
                title: 'Blush Meets Blue Theme - Sukhkaran and Simran',
                description:
                    'A soft and intimate pre-wedding setup designed for a Chunni ceremony, featuring a neutral velvet seating area framed with delicate florals and gold accents. The styling creates a warm, welcoming atmosphere that feels elegant yet personal — perfect for meaningful family moments and timeless photographs.',
                event: 'Chunni ceremony event',
                location: 'Coventry',
                culturalElements:
                    'Elegant, intimate, and emotionally warm — perfect for meaningful pre-wedding rituals.',
                keywords: 'event decor, bespoke pre-wedding backdrop, chunni, coventry',
                images: [
                    { src: '/images/gallery/ss-event/SS-Chunni-Landscape-1.jpg', alt: 'Before the decoration for chunni event' },
                    { src: '/images/gallery/ss-event/SS-Chunni-Landscape-2.jpg', alt: 'After the decoration for chunni event' },
                    { src: '/images/gallery/ss-event/SS-Chunni-Landscape-3.jpg', alt: 'Chunni decor event' },
                    { src: '/images/gallery/ss-event/SS-Chunni-Landscape-5.jpg', alt: 'Centrepiece chunni event' }
                ]
            },
            {
                id: 2,
                src: '/images/gallery/ss-event/SS-Wedding-Landscape-2.JPG',
                alt: "Wedding day decor for Sukhkaran and Simrans big day",
                category: 'wedding',
                title: 'The Maharaja Theme - Sukhkaran and Simran',
                description:
                    'A refined wedding stage designed with layered textures, draped fabrics, and muted neutral tones to create a calm yet luxurious focal point. The setup balances tradition with modern elegance, offering a timeless backdrop that photographs beautifully from every angle.',
                event: 'Wedding day ceremony',
                location: 'Coventry',
                culturalElements:
                    'Calm, luxurious, and timeless — a sophisticated stage that elevates the ceremony without distraction.',
                keywords: 'event decor, bespoke wedding backdrop, wedding, coventry',
                images: [
                    { src: '/images/gallery/ss-event/SS-Wedding-Landscape-1.JPG', alt: 'The Maharaja theme styled backdrop' },
                    { src: '/images/gallery/ss-event/SS-Wedding-Portrait-2.JPG', alt: 'Simran on her special day with the Maharaja theme backdrop' }
                ]
            }
        ],
        []
    )

    const filterCategories = useMemo(
        () => [
            {
                id: 'all',
                label: 'All Decor Events',
                icon: Grid3x3,
                count: galleryImages.length,
                description: 'Browse our complete portfolio of event decor and backdrops',
                keywords: 'event decor portfolio, backdrop styling gallery'
            },
            {
                id: 'pre-wedding',
                label: 'Pre-Wedding',
                icon: Heart,
                count: galleryImages.filter((img) => img.category === 'pre-wedding').length,
                description: 'Pre-wedding stages, backdrops styling',
                keywords: 'pre-wedding decor Midlands and across the UK'
            },
            {
                id: 'wedding',
                label: 'Wedding',
                icon: Heart,
                count: galleryImages.filter((img) => img.category === 'wedding').length,
                description: 'Wedding stages, backdrops styling',
                keywords: 'wedding decor Midlands and across the UK'
            },
            {
                id: 'parties',
                label: 'Parties',
                icon: Baby,
                count: galleryImages.filter((img) => img.category === 'parties').length,
                description: 'Party styling and photo moment backdrops',
                keywords: 'party decor UK backdrops and venue styling'
            }
        ],
        [galleryImages]
    )

    useEffect(() => {
        if (activeFilter === 'all') setFilteredImages(galleryImages)
        else setFilteredImages(galleryImages.filter((img) => img.category === activeFilter))
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
                custom_map: { dimension4: image.category }
            })
        }
    }, [])

    const closeLightbox = useCallback(() => {
        setSelectedImage(null)
        setCurrentCarouselIndex(0)
        document.body.style.overflow = 'unset'
    }, [])

    const navigateCarousel = useCallback(
        (direction) => {
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
        },
        [selectedImage]
    )

    const goToCarouselImage = useCallback((i) => {
        setCurrentCarouselIndex(i)
    }, [])

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!selectedImage) return
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowLeft') navigateCarousel('prev')
            if (e.key === 'ArrowRight') navigateCarousel('next')
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [selectedImage, closeLightbox, navigateCarousel])

    useEffect(() => {
        const el = carouselRef.current
        if (!el) return
        if (!selectedImage?.images || selectedImage.images.length <= 1) return

        const threshold = 40
        const verticalGuard = 12

        const onTouchStart = (e) => {
            const t = e.touches[0]
            startRef.current = { x: t.clientX, y: t.clientY }
            swipeLockRef.current = false
        }

        const onTouchMove = (e) => {
            if (e.touches.length !== 1) return
            const t = e.touches[0]
            const dx = t.clientX - startRef.current.x
            const dy = t.clientY - startRef.current.y
            if (!swipeLockRef.current) {
                if (Math.abs(dx) > verticalGuard && Math.abs(dx) > Math.abs(dy)) {
                    swipeLockRef.current = true
                }
            }
            if (swipeLockRef.current) e.preventDefault()
        }

        const onTouchEnd = (e) => {
            const t = e.changedTouches[0]
            const dx = t.clientX - startRef.current.x
            const dy = t.clientY - startRef.current.y
            if (Math.abs(dy) > Math.abs(dx)) return
            if (dx > threshold) navigateCarousel('prev')
            if (dx < -threshold) navigateCarousel('next')
        }

        el.addEventListener('touchstart', onTouchStart, { passive: true })
        el.addEventListener('touchmove', onTouchMove, { passive: false })
        el.addEventListener('touchend', onTouchEnd, { passive: true })

        return () => {
            el.removeEventListener('touchstart', onTouchStart)
            el.removeEventListener('touchmove', onTouchMove)
            el.removeEventListener('touchend', onTouchEnd)
        }
    }, [selectedImage, navigateCarousel])

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
                        Our Event Decor Portfolio
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed" itemProp="description">
                        Explore a selection of our bespoke backdrops and event styling across the Midlands and the UK. From pre-wedding and wedding stages to party photo moments, each concept is designed to elevate your vision.
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
                                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
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

                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" aria-hidden="true" />

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
                      image.category === 'pre-wedding' ? 'bg-blue-500' :
                          image.category === 'wedding' ? 'bg-pink-500' :
                              'bg-blue-500'
                  }`}>
                    {image.category === 'parties' ? 'Parties' :
                        image.category === 'pre-wedding' ? 'Pre-Wedding' : 'Wedding'}
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
                            e.stopPropagation()
                            closeLightbox()
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
                            <div
                                ref={carouselRef}
                                className="relative flex-shrink-0 w-full bg-neutral-900 min-h-[400px] sm:min-h-[500px]"
                                style={{ touchAction: 'pan-y' }}
                            >
                                {selectedImage.images && selectedImage.images.map((img, i) => (
                                    <div
                                        key={i}
                                        className={`absolute inset-0 transition-opacity duration-500 ${
                                            i === currentCarouselIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
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
                                            e.stopPropagation()
                                            navigateCarousel('prev')
                                        }}
                                        className="hidden sm:block absolute left-2 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-neutral-50 hover:bg-white/30 transition-colors duration-200 z-20 items-center justify-center cursor-pointer"
                                        aria-label="Previous photo"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            navigateCarousel('next')
                                        }}
                                        className="hidden sm:block absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-neutral-50 hover:bg-white/30 transition-colors duration-200 z-20 items-center justify-center cursor-pointer"
                                        aria-label="Next photo"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>

                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                                        {selectedImage.images.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    goToCarouselImage(i)
                                                }}
                                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                                    i === currentCarouselIndex
                                                        ? 'bg-white scale-125 w-8'
                                                        : 'bg-white/50 hover:bg-white/75'
                                                }`}
                                                aria-label={`Go to photo ${i + 1}`}
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
                                onClick={() => { window.location.href = '/#contact' }}
                                aria-label={`Request a quote for a similar decor style for ${String(selectedImage.event || '').toLowerCase()}`}
                                className="text-sm sm:text-base"
                            >
                                Request This Style
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            <div className="sr-only" aria-hidden="true">
                <h3>Event Decor Gallery</h3>
                <p>
                    Bespoke event decor portfolio featuring luxury backdrops, stage styling, party styling, and pre-wedding and wedding backdrops. Based in the Midlands, and serving across the UK including Coventry, Birmingham, Leicester, Warwick, Solihull, London, Manchester, Leeds, and surrounding areas.
                </p>
            </div>
        </section>
    )
}
