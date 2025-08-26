'use client'

import {useState, useEffect, useMemo, useCallback} from 'react'
import {X, ChevronLeft, ChevronRight, Heart, Baby, Building2, Grid3X3, Calendar} from 'lucide-react'
import {Button} from '@/app/components/Button'
import Image from 'next/image'

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [selectedImage, setSelectedImage] = useState(null)
    const [filteredImages, setFilteredImages] = useState([])

    // Memoize galleryImages to prevent recreation on every render
    const galleryImages = useMemo(() => [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&h=600&fit=crop',
            alt: 'Elegant pink and gold balloon arch decoration for Sikh wedding ceremony with traditional mandap styling at London gurdwara by Sajaavat Events',
            category: 'wedding',
            title: 'Romantic Pink & Gold Sikh Wedding Arch',
            description: 'Beautiful mandap backdrop with traditional Punjabi colors honoring Sikh wedding traditions',
            event: 'Sikh Wedding Ceremony',
            location: 'Gurdwara, London',
            culturalElements: 'Traditional Sikh colors, Mandap styling',
            keywords: 'Sikh wedding decorations, mandap balloon arch, pink gold wedding'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop',
            alt: 'Pastel blue baby shower balloon decorations with gender reveal theme and professional styling by Sajaavat Events London',
            category: 'baby-shower',
            title: 'Sweet Blue Baby Boy Shower',
            description: 'Soft pastel theme for baby boy celebration with modern balloon styling',
            event: 'Gender Reveal Party',
            location: 'Private Venue, Birmingham',
            culturalElements: 'Contemporary styling, Gender reveal theme',
            keywords: 'baby shower decorations, gender reveal balloons, blue baby shower'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
            alt: 'Professional corporate event balloon styling with sophisticated design and company branding by Sajaavat Events Manchester',
            category: 'corporate',
            title: 'Corporate Achievement Awards Ceremony',
            description: 'Sophisticated balloon styling for company milestone celebration with professional aesthetic',
            event: 'Annual Awards Ceremony',
            location: 'Conference Centre, Manchester',
            culturalElements: 'Professional styling, Corporate branding',
            keywords: 'corporate event decorations, professional balloon styling, awards ceremony'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
            alt: 'Traditional red and white balloon arch for Hindu wedding ceremony with authentic cultural colors and mandap styling by Sajaavat Events',
            category: 'wedding',
            title: 'Traditional Red & White Hindu Mandap',
            description: 'Classic Hindu wedding colors honoring traditional ceremonies with authentic cultural elements',
            event: 'Hindu Wedding Reception',
            location: 'Banquet Hall, Leicester',
            culturalElements: 'Hindu wedding traditions, Sacred color combinations',
            keywords: 'Hindu wedding decorations, red white balloon arch, traditional Hindu colors'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
            alt: 'Pink and gold baby shower balloon decorations with princess theme and luxury styling for baby girl celebration',
            category: 'baby-shower',
            title: 'Princess Theme Baby Girl Shower',
            description: 'Luxurious pink and gold styling perfect for welcoming a little princess',
            event: 'Baby Girl Celebration',
            location: 'Family Home, Leeds',
            culturalElements: 'Princess theme, Luxury styling',
            keywords: 'baby girl shower decorations, princess theme balloons, pink gold baby shower'
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop',
            alt: 'Multi-colored vibrant balloon arch for Punjabi wedding celebration with traditional bright colors and cultural authenticity',
            category: 'wedding',
            title: 'Vibrant Punjabi Wedding Celebration Colors',
            description: 'Colorful celebration of Punjabi culture with traditional bright color combinations',
            event: 'Punjabi Wedding Sangam',
            location: 'Community Centre, Southall London',
            culturalElements: 'Punjabi traditions, Vibrant cultural colors',
            keywords: 'Punjabi wedding decorations, colorful balloon arch, Southall wedding'
        },
        {
            id: 7,
            src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
            alt: 'Blue and silver corporate event balloon styling with modern design for tech company product launch by Sajaavat Events',
            category: 'corporate',
            title: 'Tech Company Product Launch Event',
            description: 'Modern balloon styling for high-tech product unveiling with corporate sophistication',
            event: 'Product Launch Event',
            location: 'London Tech Hub',
            culturalElements: 'Modern tech aesthetic, Corporate sophistication',
            keywords: 'tech company event decorations, product launch balloons, corporate styling'
        },
        {
            id: 8,
            src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
            alt: 'Neutral theme baby shower with white and green balloon decorations for gender neutral celebration',
            category: 'baby-shower',
            title: 'Garden Theme Gender Neutral Baby Shower',
            description: 'Natural green and white styling perfect for gender-neutral celebrations',
            event: 'Gender Neutral Celebration',
            location: 'Garden Venue, Oxford',
            culturalElements: 'Natural theme, Gender neutral styling',
            keywords: 'gender neutral baby shower, green white decorations, garden theme'
        },
        {
            id: 9,
            src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
            alt: 'Golden balloon arch for Tamil wedding ceremony with traditional South Indian colors and cultural elements',
            category: 'wedding',
            title: 'Elegant Tamil Wedding Gold Styling',
            description: 'Sophisticated gold theme with traditional Tamil wedding elements and cultural authenticity',
            event: 'Tamil Wedding Ceremony',
            location: 'Temple Hall, Bradford',
            culturalElements: 'Tamil traditions, South Indian cultural elements',
            keywords: 'Tamil wedding decorations, golden balloon arch, South Indian wedding'
        }
    ], [])

    // Filter categories with SEO-optimized descriptions
    const filterCategories = useMemo(() => [
        {
            id: 'all',
            label: 'All Decorations',
            icon: Grid3X3,
            count: galleryImages.length,
            description: 'Browse our complete portfolio of balloon decorations',
            keywords: 'balloon decoration portfolio, event styling gallery'
        },
        {
            id: 'wedding',
            label: 'Asian Weddings',
            icon: Heart,
            count: galleryImages.filter(img => img.category === 'wedding').length,
            description: 'Sikh, Hindu, Pakistani, Tamil wedding balloon decorations',
            keywords: 'Asian wedding decorations, cultural wedding styling'
        },
        {
            id: 'baby-shower',
            label: 'Baby Celebrations',
            icon: Baby,
            count: galleryImages.filter(img => img.category === 'baby-shower').length,
            description: 'Baby shower and gender reveal balloon decorations',
            keywords: 'baby shower balloons, gender reveal decorations'
        },
        {
            id: 'corporate',
            label: 'Corporate Events',
            icon: Building2,
            count: galleryImages.filter(img => img.category === 'corporate').length,
            description: 'Professional corporate event balloon styling',
            keywords: 'corporate event decorations, business celebration styling'
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
        document.body.style.overflow = 'hidden'

        // Analytics tracking for image views
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
        document.body.style.overflow = 'unset'
    }, [])

    // Memoize navigateImage function to prevent recreation on every render
    const navigateImage = useCallback((direction) => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
        let newIndex

        if (direction === 'prev') {
            newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
        } else {
            newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
        }

        setSelectedImage(filteredImages[newIndex])

        // Track navigation
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'gallery_navigate', {
                event_category: 'Gallery Engagement',
                event_label: direction,
                value: 1
            })
        }
    }, [filteredImages, selectedImage])

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (selectedImage) {
                if (e.key === 'Escape') closeLightbox()
                if (e.key === 'ArrowLeft') navigateImage('prev')
                if (e.key === 'ArrowRight') navigateImage('next')
            }
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [selectedImage, closeLightbox, navigateImage])

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
                        Our Asian Wedding & Event Decoration Portfolio
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed" itemProp="description">
                        Discover the beautiful moments we&apos;ve helped create across London and UK. From traditional Sikh and Hindu wedding ceremonies
                        to modern baby celebrations and corporate events, each decoration tells a unique story of cultural celebration and joy.
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
                                        {image.category === 'baby-shower' ? 'Baby Celebration' :
                                            image.category === 'wedding' ? 'Asian Wedding' : 'Corporate Event'}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center bg-neutral-100 rounded-lg p-8 sm:p-12">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                        Ready to Create Your Perfect Asian Wedding or Event?
                    </h3>
                    <p className="text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Let&apos;s bring your cultural vision to life with beautiful balloon decorations that perfectly capture
                        the essence of your Sikh, Hindu, Pakistani, or other special celebration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="primary"
                            size="lg"
                            icon={Calendar}
                            iconPosition="left"
                            onClick={() => window.location.href = '/#contact'}
                            aria-label="Book free consultation for balloon decoration services"
                        >
                            Book Free Consultation
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => window.location.href = '/#services'}
                            aria-label="Learn more about our Asian wedding decoration services"
                        >
                            View More Services
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile-Friendly Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-neutral-900/90 flex items-center justify-center p-2 sm:p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="lightbox-title"
                    aria-describedby="lightbox-description"
                    onClick={closeLightbox}
                >
                    {/* Close button - improved mobile positioning */}
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

                    {/* Navigation buttons - hidden on very small screens, repositioned on mobile */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage('prev');
                        }}
                        className="hidden sm:block absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-60 p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full text-neutral-50 hover:bg-white/20 transition-colors duration-200"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage('next');
                        }}
                        className="hidden sm:block absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-60 p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full text-neutral-50 hover:bg-white/20 transition-colors duration-200"
                        aria-label="Next image"
                    >
                        <ChevronRight className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Modal content - improved mobile layout */}
                    <div
                        className="w-full max-w-4xl h-full flex flex-col bg-neutral-50 rounded-lg overflow-y-auto mx-2 sm:mx-0"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image container */}
                        <div className="relative flex-shrink-0 w-full">
                            <div className="aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="w-full h-full object-contain sm:object-cover bg-neutral-100"
                                    itemScope
                                    itemType="https://schema.org/Photograph"
                                    width={1200}
                                    height={800}
                                />
                            </div>
                        </div>

                        {/* Content section - scrollable on mobile */}
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
                                    <span className="text-sm text-neutral-500 block">Cultural Elements</span>
                                    <span className="font-medium text-neutral-900 text-sm sm:text-base">{selectedImage.culturalElements}</span>
                                </div>
                            </div>

                            {/* Mobile navigation buttons */}
                            <div className="flex sm:hidden gap-2 mb-4">
                                <button
                                    onClick={() => navigateImage('prev')}
                                    className="flex-1 flex items-center justify-center p-3 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors duration-200"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-5 h-5 mr-2" />
                                    Previous
                                </button>
                                <button
                                    onClick={() => navigateImage('next')}
                                    className="flex-1 flex items-center justify-center p-3 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors duration-200"
                                    aria-label="Next image"
                                >
                                    Next
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </button>
                            </div>

                            <Button
                                variant="primary"
                                size="md"
                                fullWidth
                                onClick={() => window.location.href = '/#contact'}
                                aria-label={`Book similar decoration style for ${selectedImage.event.toLowerCase()}`}
                                className="text-sm sm:text-base"
                            >
                                Book Similar Style
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Hidden SEO content */}
            <div className="sr-only" aria-hidden="true">
                <h3>Asian Wedding Balloon Decoration Gallery</h3>
                <p>
                    Professional balloon decorations for Sikh weddings, Hindu ceremonies, Pakistani celebrations, Tamil weddings,
                    Bengali wedding styling, baby shower decorations, gender reveal parties, corporate events, product launches,
                    and special celebrations across London, Birmingham, Manchester, Leeds, Leicester, and UK.
                </p>
            </div>
        </section>
    )
}