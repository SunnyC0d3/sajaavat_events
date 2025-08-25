'use client'

import {useState, useEffect} from 'react'
import {ArrowLeft, Search, Phone, MapPin, Calendar, Home} from 'lucide-react'
import {Button} from "@/app/components/Button";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function NotFoundPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Track 404 for analytics
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'page_not_found', {
                page_title: '404 - Page Not Found',
                page_location: window.location.href,
                custom_map: {
                    'dimension1': '404_error'
                }
            })
        }
    }, [])

    const handleGoHome = () => {
        window.location.href = '/'
    }

    const handleGoBack = () => {
        if (window.history.length > 1) {
            window.history.back()
        } else {
            window.location.href = '/'
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            // Redirect to homepage with hash based on search term
            const searchTerm = searchQuery.toLowerCase()
            if (searchTerm.includes('wedding') || searchTerm.includes('asian') || searchTerm.includes('sikh') || searchTerm.includes('hindu')) {
                window.location.href = '/#services'
            } else if (searchTerm.includes('baby') || searchTerm.includes('shower')) {
                window.location.href = '/#services'
            } else if (searchTerm.includes('corporate') || searchTerm.includes('business')) {
                window.location.href = '/#services'
            } else if (searchTerm.includes('gallery') || searchTerm.includes('portfolio') || searchTerm.includes('photos')) {
                window.location.href = '/#gallery'
            } else if (searchTerm.includes('contact') || searchTerm.includes('quote') || searchTerm.includes('book')) {
                window.location.href = '/#contact'
            } else {
                window.location.href = '/'
            }
        }
    }

    const quickLinks = [
        {
            label: 'Asian Wedding Services',
            href: '/#services',
            icon: Calendar,
            description: 'Sikh, Hindu, Pakistani wedding balloon decorations'
        },
        {
            label: 'Portfolio Gallery',
            href: '/#gallery',
            icon: Search,
            description: 'Browse our balloon decoration portfolio'
        },
        {
            label: 'Get Free Quote',
            href: '/#contact',
            icon: Phone,
            description: 'Contact us for a free consultation'
        },
        {
            label: 'Service Areas',
            href: '/',
            icon: MapPin,
            description: 'London, Birmingham, Manchester, Leeds coverage'
        }
    ]

    if (!mounted) {
        return null
    }

    return (
        <>
            <Header/>

            <main
                className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24"
                role="main"
                aria-labelledby="error-heading"
            >
                <div className="text-center relative z-10">
                    <div className="mb-8">
                        <h1 id="error-heading" className="text-8xl lg:text-9xl font-bold text-neutral-900/10 leading-none">
                            404
                        </h1>
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
                                Oops! This Page Has Floated Away
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                                It looks like the page you&apos;re looking for has floated away like a balloon!
                                Don&apos;t worry, we&apos;ll help you find what you need for your Asian wedding celebration or special event.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Button
                            variant="primary"
                            size="lg"
                            icon={Home}
                            iconPosition="left"
                            onClick={handleGoHome}
                            aria-label="Go to Sajaavat Events homepage"
                        >
                            Go to Homepage
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            icon={ArrowLeft}
                            iconPosition="left"
                            onClick={handleGoBack}
                            aria-label="Go back to previous page"
                        >
                            Go Back
                        </Button>
                    </div>
                </div>

                {/* SEO Content */}
                <div className="sr-only" aria-hidden="true">
                    <h2>Available Services</h2>
                    <p>
                        Asian wedding balloon decorations, Sikh wedding mandap styling, Hindu ceremony decorations,
                        Pakistani wedding celebrations, baby shower balloon styling, gender reveal decorations,
                        corporate event balloon installations, balloon arch services across London, Birmingham,
                        Manchester, Leeds, Leicester, and surrounding UK areas.
                    </p>
                </div>
            </main>

            <Footer hasHeader={false}/>
        </>
    )
}