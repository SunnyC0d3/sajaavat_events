'use client'

import { useState, useEffect } from 'react'
import { Mail, MapPin, Clock, Star } from 'lucide-react'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Top Banner */}
            <div className="bg-neutral-900 text-neutral-50 text-center py-2 text-sm font-medium"></div>

            {/* Main Content */}
            <div className="relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-40 right-16 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
                <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-200 rounded-full opacity-60 animate-pulse delay-2000"></div>
                <div className="absolute bottom-60 right-32 w-24 h-24 bg-blue-200 rounded-full opacity-60 animate-pulse delay-500"></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Logo Section */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6">
                            <Image
                                src={logo}
                                alt="Sajaavat Events logo - Premium balloon arch decorations for Asian weddings, baby showers and corporate events in London UK"
                                width={200}
                                height={50}
                                itemProp="logo"
                                priority
                            />
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-bold text-neutral-900 mb-4">
                            Sajaavat Events
                        </h1>
                        <p className="text-xl sm:text-2xl text-neutral-600 font-medium mb-2">
                            Premium Balloon Arch Decorations
                        </p>
                        <p className="text-lg text-neutral-500">
                            Specializing in Asian Wedding & Event Styling
                        </p>
                    </div>

                    {/* Coming Soon Section */}
                    <div className="text-center mb-16">
                        <div className="inline-block bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-8">
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                                Website Coming Soon
                            </h2>
                            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                                We&apos;re crafting a beautiful new experience to showcase our stunning balloon decorations.
                                Our team is working hard to bring you the perfect platform to plan your dream event.
                            </p>
                        </div>
                    </div>

                    {/* Services Preview */}
                    <div className="mb-16">
                        <h3 className="text-2xl sm:text-3xl font-bold text-center text-neutral-900 mb-8">
                            What We Specialize In
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-neutral-900 mb-2">Asian Weddings</h4>
                                <p className="text-neutral-600">Stunning balloon arches and decorations for Sikh, Hindu, Pakistani, and Indian weddings</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-neutral-900 mb-2">Baby Showers</h4>
                                <p className="text-neutral-600">Beautiful and elegant balloon decorations to celebrate your little one&apos;s arrival</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-neutral-900 mb-2">Corporate Events</h4>
                                <p className="text-neutral-600">Professional balloon styling for corporate celebrations and company events</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-12 pt-8 border-t border-neutral-200">
                        <p className="text-neutral-500 text-sm">
                            © 2025 Sajaavat Events. Premium balloon decorations for your special moments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}