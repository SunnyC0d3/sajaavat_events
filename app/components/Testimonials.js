'use client'

import {useState, useEffect} from 'react'
import {Star, ChevronLeft, ChevronRight, Heart, Baby, Building2, Calendar, Quote} from 'lucide-react'
import {Button} from '@/app/components/Button'
import Image from 'next/image'

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const testimonials = [
        {
            id: 1,
            name: 'Priya & Raj Sharma',
            event: 'Wedding Stage & Backdrop Styling',
            location: 'London',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            review: 'Sajaavat Events transformed our wedding stage into something absolutely magical. The backdrop styling complemented our ceremony perfectly, and every guest was amazed by the finished look. The team understood our requirements, guided us through the design, and delivered beyond our expectations.',
            eventType: 'wedding',
            date: 'September 2024'
        },
        {
            id: 3,
            name: 'David Chen',
            event: 'Corporate Event Styling',
            location: 'Manchester',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            review: 'For our company’s anniversary celebration, Sajaavat Events delivered exceptional styling that matched our brand and elevated the whole venue. The stage and backdrop looked premium, the setup was seamless, and the attention to detail was outstanding. Highly professional service from start to finish.',
            eventType: 'corporate',
            date: 'November 2024'
        },
        {
            id: 4,
            name: 'Aisha & Mohammed Ali',
            event: 'Cultural Wedding Reception Styling',
            location: 'Bradford',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?w=150&h=150&fit=crop&crop=face',
            review: 'We wanted decor that honoured our traditions while still feeling modern and elegant. Sajaavat Events delivered exactly that — a stunning stage and reception setup with thoughtful details. Our families were so impressed, and the photos turned out beautifully.',
            eventType: 'wedding',
            date: 'August 2024'
        },
        {
            id: 5,
            name: 'Emma Thompson',
            event: 'Private Celebration Backdrop',
            location: 'Oxford',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            review: 'The surprise celebration setup was absolutely perfect. Sajaavat Events created a beautiful backdrop and styled the whole area so it felt really special. The team were friendly, organised, and the final look exceeded what we imagined.',
            eventType: 'baby-shower',
            date: 'December 2024'
        },
        {
            id: 6,
            name: 'Krishnan Family',
            event: 'Reception Stage & Venue Styling',
            location: 'Leicester',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            review: 'The stage and backdrop styling for our reception was breathtaking. Sajaavat Events understood the significance of our traditions and created decor that felt elegant and meaningful. Everything was beautifully finished and photographed so well.',
            eventType: 'wedding',
            date: 'July 2024'
        }
    ]

    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
            }, 5000)
            return () => clearInterval(interval)
        }
    }, [isAutoPlaying, testimonials.length])

    const goToNext = () => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const goToPrev = () => {
        setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const goToSlide = (index) => {
        setCurrentTestimonial(index)
        setIsAutoPlaying(false)
    }

    const getEventIcon = (eventType) => {
        switch (eventType) {
            case 'wedding':
                return Heart
            case 'baby-shower':
                return Baby
            case 'corporate':
                return Building2
            default:
                return Calendar
        }
    }

    const renderStars = (rating) => {
        return Array.from({length: 5}, (_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${
                    index < rating
                        ? 'text-gold-400 fill-current'
                        : 'text-neutral-300'
                }`}
            />
        ))
    }

    const current = testimonials[currentTestimonial]
    const EventIcon = getEventIcon(current.eventType)

    return (
        <section id="testimonials" className="bg-neutral-100 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">What Our Clients Say</h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                        Here’s what couples, families, and businesses across the UK say about working with Sajaavat Events —
                        from bespoke backdrops and venue styling to full event decor setups.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto mb-16">
                    <button
                        onClick={goToPrev}
                        className="hidden sm:block absolute left-0 lg:-left-16 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 shadow-lg backdrop-blur-sm rounded-full bg-neutral-50 hover:text-neutral-900 text-neutral-600 transition-colors duration-200"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="hidden sm:block absolute right-0 lg:-right-16 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 shadow-lg backdrop-blur-sm rounded-full bg-neutral-50 hover:text-neutral-900 text-neutral-600 transition-colors duration-200"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <div className="bg-neutral-50 rounded-lg shadow-lg overflow-hidden">
                        <div className="p-8 lg:p-12">
                            <div className="flex justify-center mb-6">
                                <Quote className="w-8 h-8 text-primary-500"/>
                            </div>

                            <div className="flex justify-center items-center space-x-1 mb-6">
                                {renderStars(current.rating)}
                            </div>

                            <blockquote
                                className="text-lg lg:text-xl text-neutral-700 leading-relaxed text-center mb-8 font-medium">
                                &quot;{current.review}&quot;
                            </blockquote>

                            <div className="flex items-center justify-center space-x-4">
                                <Image
                                    src={current.image}
                                    alt={current.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                    width={1200}
                                    height={800}
                                />
                                <div className="text-center">
                                    <h4 className="font-bold text-neutral-900 text-lg">{current.name}</h4>
                                    <p className="text-neutral-600">{current.event}</p>
                                    <p className="text-neutral-500 text-sm">{current.location} • {current.date}</p>
                                </div>
                                <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center">
                                    <EventIcon className="w-5 h-5 text-neutral-600"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <Button
                                key={index}
                                variant="ghost"
                                size="counter"
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                    index === currentTestimonial
                                        ? 'bg-neutral-900 w-8'
                                        : 'bg-neutral-400 hover:bg-neutral-500'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {testimonials.slice(0, 3).map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-neutral-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                            <div className="flex items-center space-x-1 mb-4">
                                {renderStars(testimonial.rating)}
                            </div>
                            <p className="text-neutral-700 leading-relaxed mb-4 text-sm line-clamp-3">
                                &quot;{testimonial.review.substring(0, 120)}...&quot;
                            </p>
                            <div className="flex items-center space-x-3">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                    width={1200}
                                    height={800}
                                />
                                <div>
                                    <div className="font-medium text-neutral-900 text-sm">{testimonial.name}</div>
                                    <div className="text-neutral-500 text-xs">{testimonial.event}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
