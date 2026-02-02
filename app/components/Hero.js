'use client'

import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import {ChevronLeft, ChevronRight} from "lucide-react";

export default function Hero() {
    const slides = useMemo(
        () => [
            {
                id: 'wedding',
                image: '/images/gallery/ss-event/SS-Wedding-Landscape-1.JPG',
                alt: 'Sukhkaran and Simran\'s wedding day - The Maharaja'
            },
            {
                id: 'pre-wedding',
                image: '/images/gallery/ss-event/SS-Chunni-Landscape-2.jpg',
                alt: 'Sukhkaran and Simran\'s chunni event - Blush Meets Blue'
            },
        ],
        []
    )

    const [index, setIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const trackRef = useRef(null)
    const autoplayMs = 6000

    const goTo = useCallback(
        (next) => {
            const clamped = (next + slides.length) % slides.length
            setIndex(clamped)
        },
        [slides.length]
    )

    const next = useCallback(() => goTo(index + 1), [goTo, index])
    const prev = useCallback(() => goTo(index - 1), [goTo, index])

    useEffect(() => {
        if (isPaused) return
        const t = setInterval(() => next(), autoplayMs)
        return () => clearInterval(t)
    }, [isPaused, next])

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [next, prev])

    useEffect(() => {
        const el = trackRef.current
        if (!el) return

        let startX = 0
        let startY = 0
        let isTouching = false

        const onTouchStart = (e) => {
            isTouching = true
            startX = e.touches[0].clientX
            startY = e.touches[0].clientY
        }

        const onTouchEnd = (e) => {
            if (!isTouching) return
            isTouching = false
            const endX = e.changedTouches[0].clientX
            const endY = e.changedTouches[0].clientY
            const dx = endX - startX
            const dy = endY - startY

            if (Math.abs(dy) > Math.abs(dx)) return

            if (dx > 40) prev()
            if (dx < -40) next()
        }

        el.addEventListener('touchstart', onTouchStart, { passive: true })
        el.addEventListener('touchend', onTouchEnd, { passive: true })

        return () => {
            el.removeEventListener('touchstart', onTouchStart)
            el.removeEventListener('touchend', onTouchEnd)
        }
    }, [next, prev])

    return (
        <section id="home" className="bg-neutral-50">
            <div
                className="relative w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                aria-roledescription="carousel"
                aria-label="Homepage banners"
            >
                <div className="overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex transition-transform duration-700 ease-out"
                        style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
                    >
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slide.id}
                                className="relative min-w-full h-[520px] sm:h-[620px] lg:h-[720px]"
                                role="group"
                                aria-roledescription="slide"
                                aria-label={slide.alt}
                            >
                                <Image
                                    src={slide.image}
                                    alt={slide.alt}
                                    fill
                                    priority={slideIndex === 0}
                                    loading={slideIndex === 0 ? 'eager' : 'lazy'}
                                    quality={90}
                                    sizes="100vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    {slides.map((s, i) => (
                        <button
                            key={s.id}
                            type="button"
                            onClick={() => goTo(i)}
                            className={`h-2 rounded-full transition-all ${
                                i === index ? 'w-8 bg-white' : 'w-2 bg-white/60 hover:bg-white/80'
                            }`}
                            aria-label={`Go to slide ${i + 1} of ${slides.length}`}
                            aria-current={i === index ? 'true' : undefined}
                        />
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
                    <button
                        onClick={prev}
                        className="pointer-events-auto absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 shadow-lg hover:bg-white transition"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-neutral-700" />
                    </button>

                    <button
                        onClick={next}
                        className="pointer-events-auto absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 shadow-lg hover:bg-white transition"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-neutral-700" />
                    </button>
                </div>
            </div>

            <div id="aboutus" className="bg-neutral-900 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-50 leading-tight">
                                WHY CHOOSE
                                <br />
                                SAJAAVAT EVENTS
                                <br />
                                FOR YOUR EVENT DECOR?
                            </h2>
                        </div>
                        <div className="lg:pt-1">
                            <p className="mt-6 text-neutral-300 text-lg">
                                Bespoke styling, thoughtful design, and a premium finish — built around your celebration.
                            </p>
                            <br />
                            <p className="text-neutral-200 text-base sm:text-lg leading-relaxed">
                                We understand every client's vision is different. We take the time to listen, plan, and design a
                                setup that feels personal to you — with a focus on aesthetic balance, clean finishing, and
                                photo-ready details from every angle.
                            </p>
                        </div>
                    </div>
                    <div className="mt-14 lg:mt-16">
                        <h3 id="why-choose-us" className="sr-only">
                            Why Choose Our Event Decor and Backdrop Services
                        </h3>
                        <div className="grid md:grid-cols-3 gap-10 md:gap-0">
                            {[
                                {
                                    title: 'Bespoke Design & Backdrops',
                                    description:
                                        'Custom backdrops, decor and signage designed around your theme — from minimal to full luxury.',
                                },
                                {
                                    title: 'Cultural & Modern Styling',
                                    description:
                                        'Styling that respects tradition while still feeling clean, modern and elevated for today&apos;s celebrations.',
                                },
                                {
                                    title: 'Professional Setup & Finish',
                                    description:
                                        'Planned delivery, clean installation, and detailed finishing so everything looks premium and photo-ready.',
                                },
                            ].map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className={`md:px-10 ${
                                        index !== 0 ? 'md:border-l md:border-neutral-700' : ''
                                    }`}
                                >
                                    <div className="text-neutral-50 text-lg font-semibold">
                                        {feature.title}
                                    </div>
                                    <p className="mt-3 text-neutral-300 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
