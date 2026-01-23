'use client'

import {useState, useEffect} from 'react'
import {ArrowLeft, Search, Phone, MapPin, Calendar, Home} from 'lucide-react'
import {Button} from "@/app/components/Button";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function NotFoundPage() {
    const [searchQuery] = useState('')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

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
            const searchTerm = searchQuery.toLowerCase()

            if (
                searchTerm.includes('wedding') ||
                searchTerm.includes('decor') ||
                searchTerm.includes('décor') ||
                searchTerm.includes('backdrop') ||
                searchTerm.includes('stage') ||
                searchTerm.includes('mandap') ||
                searchTerm.includes('reception')
            ) {
                window.location.href = '/#gallery'
            } else if (
                searchTerm.includes('corporate') ||
                searchTerm.includes('business') ||
                searchTerm.includes('brand') ||
                searchTerm.includes('launch')
            ) {
                window.location.href = '/#gallery'
            } else if (
                searchTerm.includes('gallery') ||
                searchTerm.includes('portfolio') ||
                searchTerm.includes('photos') ||
                searchTerm.includes('images')
            ) {
                window.location.href = '/#gallery'
            } else if (
                searchTerm.includes('contact') ||
                searchTerm.includes('quote') ||
                searchTerm.includes('book') ||
                searchTerm.includes('enquiry') ||
                searchTerm.includes('consultation')
            ) {
                window.location.href = '/#contact'
            } else {
                window.location.href = '/'
            }
        }
    }

    const quickLinks = [
        {
            label: 'Wedding & Event Decor',
            href: '/#gallery',
            icon: Calendar,
            description: 'Bespoke backdrops, stages, and venue styling'
        },
        {
            label: 'Decor Portfolio',
            href: '/#gallery',
            icon: Search,
            description: 'Explore our wedding and event decor gallery'
        },
        {
            label: 'Request a Free Quote',
            href: '/#contact',
            icon: Phone,
            description: 'Tell us your vision and get a decor quote'
        },
        {
            label: 'Coventry & UK Coverage',
            href: '/',
            icon: MapPin,
            description: 'Based in Coventry, available across the UK'
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
                                Oops! We Can’t Find That Page
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                                The page you’re looking for isn’t available right now. If you’re planning a wedding, celebration,
                                or corporate event, you can still explore our decor portfolio or request a free quote — we’re
                                based in Coventry and work across the UK.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
                    <div className="grid sm:grid-cols-2 gap-4 text-left mb-16" aria-label="Popular links">
                        {quickLinks.map((link) => {
                            const Icon = link.icon
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="bg-neutral-50 rounded-lg shadow-sm border border-neutral-200 p-5 hover:shadow-md transition-shadow"
                                    aria-label={link.label}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5">
                                            <Icon className="w-5 h-5 text-neutral-700" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-neutral-900">{link.label}</div>
                                            <div className="text-sm text-neutral-600">{link.description}</div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className="sr-only" aria-hidden="true">
                    <h2>Event Decor & Backdrop Services</h2>
                    <p>
                        Sajaavat Events provides bespoke wedding and event decor in Coventry and across the UK. Services include luxury
                        backdrops, stage and mandap-inspired styling, entrance decor, reception decor, venue styling, and corporate event
                        setups. We work throughout the West Midlands and nationwide including Birmingham, Leicester, Warwick, Solihull,
                        London, Manchester, Leeds, and surrounding areas.
                    </p>
                </div>
            </main>

            <Footer hasHeader={false}/>
        </>
    )
}
