'use client'

import {useState, useEffect} from 'react'
import {Menu, X, Phone, MessageCircle} from 'lucide-react'
import {Button, IconButton} from '@/app/components/Button'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.svg'
import * as gtag from '@/lib/gtag'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    const navigationLinks = [
        {href: '#gallery', label: 'Gallery', ariaLabel: 'Browse our portfolio of wedding and event decorations'},
        {href: '#contact', label: 'Contact Us', ariaLabel: 'Contact us for a free consultation and quote'},
    ]

    return (
        <>
            {/* Top Banner */}
            <div className="bg-neutral-900 text-neutral-50 text-center py-2 text-sm font-medium" role="banner">
                <div className="max-w-7xl mx-auto px-4 py-2"></div>
            </div>

            {/* Main Header */}
            <header
                className={`sticky top-0 z-50 bg-neutral-50 transition-all duration-300 ${
                    isScrolled ? 'shadow-sm border-b border-neutral-200' : ''
                }`}
                role="banner"
                itemScope
                itemType="https://schema.org/Organization"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 overflow-hidden h-[90px]">
                        {/* Logo - Left */}
                        <div className="flex-shrink-0 w-[90px]">
                            <Link
                                href="/"
                                className="flex items-center"
                                aria-label="Sajaavat Events - Premium balloon decoration services for Asian weddings and events"
                                itemProp="url"
                            >
                                <Image
                                    src={logo}
                                    alt="Sajaavat Events logo - Premium balloon arch decorations for Asian weddings, baby showers and corporate events in London UK"
                                    width={200}
                                    height={50}
                                    itemProp="logo"
                                    priority
                                />
                                <span className="sr-only" itemProp="name">
                                    Sajaavat Events - Balloon Decoration Services London
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation - Center */}
                        <nav
                            className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2"
                            role="navigation"
                            aria-label="Main navigation"
                            itemScope
                            itemType="https://schema.org/SiteNavigationElement"
                        >
                            {navigationLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-neutral-700 hover:text-neutral-900 font-medium text-md transition-colors duration-200"
                                    aria-label={link.ariaLabel}
                                    itemProp="url"
                                >
                                    <span itemProp="name">{link.label}</span>
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Menu Button - Right */}
                        <div className="lg:hidden flex items-center space-x-2">
                            <IconButton
                                variant="ghost"
                                size="md"
                                icon={Phone}
                                onClick={() => {
                                    gtag.event({
                                        action: 'phone_click',
                                        category: 'contact',
                                        label: 'phone_header_mobile'
                                    })
                                    window.location.href = 'tel:+447123456789'
                                }}
                                aria-label="Call Sajaavat Events balloon decorations"
                            />
                            <IconButton
                                variant="ghost"
                                size="md"
                                icon={isMenuOpen ? X : Menu}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                                aria-expanded={isMenuOpen}
                                aria-controls="mobile-navigation"
                            />
                        </div>

                        {/* Right side spacer - balances the logo on desktop */}
                        <div className="hidden lg:block w-[90px]"></div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div
                            className="lg:hidden border-t border-neutral-200 py-4"
                            id="mobile-navigation"
                            role="navigation"
                            aria-label="Mobile navigation"
                        >
                            <nav className="space-y-1">
                                {navigationLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className="block py-3 px-3 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 font-medium transition-colors duration-200 rounded-lg"
                                        aria-label={link.ariaLabel}
                                    >
                                        {link.label}
                                    </a>
                                ))}

                                <div className="pt-4 border-t border-neutral-200 mt-4">
                                    <div className="px-3 pt-3">
                                        <Button
                                            variant="primary"
                                            size="md"
                                            fullWidth
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                window.location.href = '#contact';
                                            }}
                                            aria-label="Get free balloon decoration quote"
                                        >
                                            Get Free Quote
                                        </Button>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    )}
                </div>

                {/* Hidden structured data for organization */}
                <div className="sr-only">
                    <span itemProp="name">Sajaavat Events</span>
                    <span itemProp="description">Premium balloon arch decorations for Asian weddings, baby showers and corporate events</span>
                    <span itemProp="areaServed">London, Birmingham, Manchester, Leeds, UK</span>
                    <span itemProp="priceRange">££-£££</span>
                </div>
            </header>
        </>
    )
}