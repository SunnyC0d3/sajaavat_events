'use client'

import {useState, useEffect} from 'react'
import {Star, ChevronLeft, ChevronRight, Heart, Baby, Building2, Calendar, Quote} from 'lucide-react'
import {Button} from '@/app/components/Button'

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const testimonials = [
        {
            id: 1,
            name: 'Priya & Raj Sharma',
            event: 'Sikh Wedding Ceremony',
            location: 'Gurdwara, London',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            review: 'Sajaavat Events transformed our wedding mandap into something absolutely magical. The pink and gold balloon arch perfectly complemented our traditional ceremony, and every guest was amazed by the beautiful setup. The team understood our cultural requirements perfectly and delivered beyond our expectations.',
            eventType: 'wedding',
            date: 'September 2024'
        },
        {
            id: 2,
            name: 'Sarah & James Wilson',
            event: 'Baby Shower Celebration',
            location: 'Private Venue, Birmingham',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
            review: 'The team at Sajaavat Events created the most adorable baby shower setup for our little princess. The pastel pink and gold theme was exactly what we dreamed of, and the balloon arch became the perfect backdrop for our photos. Professional, punctual, and absolutely wonderful to work with!',
            eventType: 'baby-shower',
            date: 'October 2024'
        },
        {
            id: 3,
            name: 'David Chen',
            event: 'Annual Awards Ceremony',
            location: 'Manchester Conference Centre',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            review: 'For our company\'s 10th anniversary celebration, Sajaavat Events delivered exceptional corporate styling that perfectly matched our brand colors. The balloon installations added elegance to our event without being overwhelming. Highly professional service and outstanding attention to detail.',
            eventType: 'corporate',
            date: 'November 2024'
        },
        {
            id: 4,
            name: 'Aisha & Mohammed Ali',
            event: 'Nikah Reception',
            location: 'Community Hall, Bradford',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?w=150&h=150&fit=crop&crop=face',
            review: 'We wanted something that honored our Pakistani traditions while being modern and elegant. Sajaavat Events delivered exactly that! The burgundy and gold balloon arch was stunning, and they even incorporated some traditional patterns. Our families were so impressed, and the photos turned out beautifully.',
            eventType: 'wedding',
            date: 'August 2024'
        },
        {
            id: 5,
            name: 'Emma Thompson',
            event: 'Gender Reveal Party',
            location: 'Garden Party, Oxford',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            review: 'The surprise gender reveal setup was absolutely perfect! Sajaavat Events created a beautiful neutral backdrop that transformed into the most amazing pink explosion when we popped the balloon. The whole family was in tears of joy. Thank you for making our moment so special!',
            eventType: 'baby-shower',
            date: 'December 2024'
        },
        {
            id: 6,
            name: 'Krishnan Family',
            event: 'Tamil Wedding Reception',
            location: 'Banquet Hall, Leicester',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            review: 'The golden balloon arch for our Tamil wedding reception was absolutely breathtaking. Sajaavat Events understood the significance of our traditions and created decorations that perfectly honored our heritage. The setup was elegant, sophisticated, and photographed beautifully.',
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
                        Don't just take our word for it. Here's what families and businesses across the UK
                        have to say about their Sajaavat Events experience.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto mb-16">
                    <Button
                        variant="ghost"
                        size="sm"
                        icon={ChevronLeft}
                        onClick={goToPrev}
                        className="absolute left-0 lg:-left-16 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-neutral-50 shadow-lg rounded-full text-neutral-600 hover:text-neutral-900 hover:shadow-xl"
                    />

                    <Button
                        variant="ghost"
                        size="sm"
                        icon={ChevronRight}
                        onClick={goToNext}
                        className="absolute right-0 lg:-right-16 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-neutral-50 shadow-lg rounded-full text-neutral-600 hover:text-neutral-900 hover:shadow-xl"
                    />

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
                                "{current.review}"
                            </blockquote>

                            <div className="flex items-center justify-center space-x-4">
                                <img
                                    src={current.image}
                                    alt={current.name}
                                    className="w-16 h-16 rounded-full object-cover"
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

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        {number: '200+', label: 'Happy Clients', icon: Heart},
                        {number: '500+', label: 'Events Decorated', icon: Calendar},
                        {number: '5.0', label: 'Average Rating', icon: Star},
                        {number: '100%', label: 'Satisfaction Rate', icon: Quote}
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-neutral-50 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                            <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3"/>
                            <div className="text-3xl font-bold text-neutral-900 mb-2">{stat.number}</div>
                            <div className="text-neutral-600 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <div key={testimonial.id}
                             className="bg-neutral-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-200">
                            {/* Rating */}
                            <div className="flex items-center space-x-1 mb-4">
                                {renderStars(testimonial.rating)}
                            </div>
                            <p className="text-neutral-700 leading-relaxed mb-4 text-sm line-clamp-3">
                                "{testimonial.review.substring(0, 120)}..."
                            </p>
                            <div className="flex items-center space-x-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-medium text-neutral-900 text-sm">{testimonial.name}</div>
                                    <div className="text-neutral-500 text-xs">{testimonial.event}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-neutral-50 rounded-lg p-12">
                    <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">Join Our Happy Clients</h3>
                    <p className="text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Ready to create your own unforgettable celebration? Let's make your event as special
                        as the ones our clients are raving about.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" size="lg" icon={Calendar} iconPosition="left" onClick={() => window.location.href = '#contact'}>
                            Book Your Consultation
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => window.location.href = '#testimonials'}>
                            Read More Reviews
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}