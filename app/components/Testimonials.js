'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const testimonials = [
        {
            id: 1,
            name: 'Sukhkaran',
            event: 'Chunni Event',
            location: 'Coventry',
            image:
                '/images/gallery/ss-event/SS-Chunni-Landscape-4.jpg',
            review:
                'We chose Sajaavat for our engagement decor and the result was absolutely amazing. The team put so much thought into the colour scheme and overall design - everything complemented each other perfectly and tied the whole setup together beautifully. You could really see the level of planning and attention to detail in every element. The decor looked stunning in person and even better in photos. The entire process was smooth, stress-free, and delivered to a very high standard. I would highly recommend Sajaavat to anyone looking for quality and elegance.',
            date: 'August 2025',
        },
        {
            id: 2,
            name: 'Sukhkaran',
            event: 'Wedding Day',
            location: 'Coventry',
            image:
                '/images/gallery/ss-event/SS-Wedding-Portrait-4.JPG',
            review:
                'Saajavat created the wedding morning backdrop at my home and it completely elevated the space. The colour platte was carefully chosen and worked perfectly with the surroundings, giving everything a clean, elegant, and premium feel. It made such a big difference to the atmosphere of the morning and looked incredible in photos and videos. The team were professional, efficient, and clearly took pride in their work. I could not have been happier with the final result and would definitely recommend Sajaavat.',
            date: 'September 2025',
        },
        {
            id: 3,
            name: 'Simran',
            event: 'Wedding Day',
            location: 'Coventry',
            image:
                '/images/gallery/ss-event/SS-Wedding-Portrait-1.JPG',
            review:
                'Sajaavat did an incredible job with our engagement decor. The colour scheme was so thoughtfully planned and everything worked together beautifully; from the backdrop to the finer details, it all felt perfectly coordinated. You could really see the care and effort that went into the design, and the final setup was even better than I imagined. It created such an elegant and special atmosphere, and we received so many compliments from our guests. I would highly recommend Sajaavat for anyone looking for decor that feels both personal and professionally executed.',
            date: 'September 2025',
        },
    ]

    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 7000)
        return () => clearInterval(interval)
    }, [isAutoPlaying, testimonials.length])

    const goToNext = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const goToPrev = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const goToSlide = (index) => {
        setCurrentTestimonial(index)
        setIsAutoPlaying(false)
    }

    const current = testimonials[currentTestimonial]

    return (
        <section id="testimonials" className="bg-neutral-100 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
                        Client Testimonials
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                        What it&apos;s like working with Sajaavat Events.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <button
                        onClick={goToPrev}
                        className="hidden md:flex absolute -left-6 lg:-left-16 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 rounded-full bg-white/80 shadow-lg hover:bg-white transition"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 text-neutral-700" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="hidden md:flex absolute -right-6 lg:-right-16 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 rounded-full bg-white/80 shadow-lg hover:bg-white transition"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 text-neutral-700" />
                    </button>

                    <article className="grid md:grid-cols-2 bg-neutral-50 rounded-2xl overflow-hidden shadow-xl">
                        <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[2/3] overflow-hidden">
                            <Image
                                src={current.image}
                                alt={`${current.name} testimonial from ${current.event} in ${current.location}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-center md:object-top"
                                priority={currentTestimonial === 0}
                                quality={85}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        </div>
                        <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                            <blockquote className="text-neutral-700 leading-relaxed text-[15px] md:text-base">
                <span className="block italic">
                  "{current.review}"
                </span>
                            </blockquote>

                            <div className="my-8 h-px w-full bg-neutral-200" />

                            <div className="text-neutral-900 font-medium">
                                {current.name} <span className="text-neutral-500 font-normal">|</span>{' '}
                                <span className="text-neutral-700">{current.event}</span>
                            </div>
                            <div className="text-sm text-neutral-500 mt-1">
                                {current.location} • {current.date}
                            </div>
                            <div className="flex md:hidden gap-3 mt-8">
                                <button
                                    onClick={goToPrev}
                                    className="flex-1 h-11 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition flex items-center justify-center"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={goToNext}
                                    className="flex-1 h-11 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition flex items-center justify-center"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </article>

                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((t, index) => (
                            <button
                                key={t.id}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all ${
                                    index === currentTestimonial ? 'w-10 bg-neutral-900' : 'w-2 bg-neutral-400 hover:bg-neutral-500'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
