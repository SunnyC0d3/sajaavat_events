'use client'

import {useState, useEffect} from 'react'
import {Menu, X} from 'lucide-react'
import {IconButton} from '@/app/components/Button'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.svg'

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
        {href: '#aboutus', label: 'About Us', ariaLabel: 'Find out more about us'},
        {href: '#gallery', label: 'Gallery', ariaLabel: 'Browse our portfolio of wedding and event decorations'},
        {href: '#testimonials', label: 'Testimonials', ariaLabel: 'Hear what others have to say about us'},
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
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 overflow-hidden h-[90px]">
                        {/* Logo - Left */}
                        <div className="flex-shrink-0 w-[90px]">
                            <Link
                                href="/"
                                className="flex items-center"
                                aria-label="Sajaavat Events - Premium balloon decoration services for Asian weddings and events"
                            >
                                <Image
                                    src={logo}
                                    alt="Sajaavat Events logo - Premium balloon arch decorations for Asian weddings, baby showers and corporate events in UK"
                                    width={200}
                                    height={50}
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation - Center */}
                        <nav
                            className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2"
                            role="navigation"
                            aria-label="Main navigation"
                        >
                            {navigationLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-neutral-700 hover:text-neutral-900 font-medium text-md transition-colors duration-200"
                                    aria-label={link.ariaLabel}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Menu Button - Right */}
                        <div className="lg:hidden flex items-center space-x-2">
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
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}