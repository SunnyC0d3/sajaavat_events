'use client'

import { forwardRef } from 'react'

export const Button = forwardRef(({
                                      variant = 'primary',
                                      size = 'md',
                                      children,
                                      className = '',
                                      icon: Icon,
                                      iconPosition = 'left',
                                      fullWidth = false,
                                      onClick,
                                      disabled = false,
                                      'aria-label': ariaLabel,
                                      type = 'button',
                                      ...props
                                  }, ref) => {
    const baseClasses = "cursor-pointer inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"

    const variants = {
        primary: "bg-neutral-900 text-neutral-50 hover:bg-neutral-800 focus:ring-neutral-500 active:bg-neutral-800",
        secondary: "bg-primary-500 text-neutral-50 hover:bg-primary-600 focus:ring-primary-500 active:bg-primary-600",
        outline: "border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 focus:ring-neutral-500 active:bg-neutral-800 active:text-neutral-50",
        ghost: "text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-500 active:bg-neutral-200",
        white: "bg-neutral-50 text-neutral-900 border-2 border-neutral-200 hover:bg-neutral-100 focus:ring-neutral-500 active:bg-neutral-200",
        destructive: "bg-red-600 text-neutral-50 hover:bg-red-700 focus:ring-red-500 active:bg-red-700"
    }

    const sizes = {
        sm: "px-4 py-2 text-sm h-9 min-w-[80px]",
        md: "px-6 py-3 text-sm h-11 min-w-[100px]",
        lg: "px-8 py-4 text-base h-12 min-w-[120px]",
        xl: "px-10 py-5 text-lg h-14 min-w-[140px]",
        counter: "px-1 py-1 text-base h-1 min-w-0",
    }

    const handleClick = (e) => {
        if (typeof window !== 'undefined' && window.gtag && children) {
            const buttonText = typeof children === 'string' ? children : 'Button Click'
            const buttonCategory = variant === 'primary' ? 'Primary Action' :
                variant === 'outline' ? 'Secondary Action' :
                    'Other Action'

            window.gtag('event', 'button_click', {
                event_category: buttonCategory,
                event_label: buttonText,
                value: 1,
                custom_map: {
                    'dimension5': buttonText.toLowerCase().includes('contact') ||
                    buttonText.toLowerCase().includes('book') ||
                    buttonText.toLowerCase().includes('quote') ||
                    buttonText.toLowerCase().includes('consultation') ? 'conversion_intent' : 'navigation'
                }
            })
        }

        if (onClick) {
            onClick(e)
        }
    }

    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`

    const accessibilityProps = {
        type,
        disabled,
        'aria-label': ariaLabel || (typeof children === 'string' ? children : undefined),
        'aria-disabled': disabled,
        role: type === 'submit' ? undefined : 'button',
        tabIndex: disabled ? -1 : 0,
        ...props
    }

    return (
        <button
            ref={ref}
            className={buttonClasses}
            onClick={handleClick}
            {...accessibilityProps}
        >
            {Icon && iconPosition === 'left' && (
                <Icon
                    className="w-4 h-4 mr-2 flex-shrink-0"
                    aria-hidden="true"
                />
            )}
            {children && (
                <span className="truncate">
                    {children}
                </span>
            )}
            {Icon && iconPosition === 'right' && (
                <Icon
                    className="w-4 h-4 ml-2 flex-shrink-0"
                    aria-hidden="true"
                />
            )}
        </button>
    )
})

Button.displayName = 'Button'

export const IconButton = forwardRef(({
                                          variant = 'ghost',
                                          size = 'md',
                                          icon: Icon,
                                          className = '',
                                          'aria-label': ariaLabel,
                                          onClick,
                                          disabled = false,
                                          ...props
                                      }, ref) => {
    const baseClasses = "inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"

    const variants = {
        primary: "bg-neutral-900 text-neutral-50 hover:bg-neutral-800 focus:ring-neutral-500",
        ghost: "text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-500",
        outline: "border-2 border-neutral-300 text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-500",
        white: "bg-neutral-50 text-neutral-900 border-2 border-neutral-200 hover:bg-neutral-100 focus:ring-neutral-500"
    }

    const sizes = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
        xl: "w-14 h-14"
    }

    const iconSizes = {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7"
    }

    // Enhanced click handler for analytics
    const handleClick = (e) => {
        if (typeof window !== 'undefined' && window.gtag && ariaLabel) {
            window.gtag('event', 'icon_button_click', {
                event_category: 'User Interaction',
                event_label: ariaLabel,
                value: 1
            })
        }

        if (onClick) {
            onClick(e)
        }
    }

    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

    return (
        <button
            ref={ref}
            className={buttonClasses}
            onClick={handleClick}
            aria-label={ariaLabel || 'Icon button'}
            disabled={disabled}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            {...props}
        >
            {Icon && (
                <Icon
                    className={iconSizes[size]}
                    aria-hidden="true"
                />
            )}
        </button>
    )
})

IconButton.displayName = 'IconButton'

export const CTAButton = forwardRef(({
                                         children,
                                         variant = 'primary',
                                         size = 'lg',
                                         urgency = false,
                                         conversion = false,
                                         trackingLabel,
                                         ...props
                                     }, ref) => {
    const handleCTAClick = (e) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', conversion ? 'conversion_action' : 'cta_click', {
                event_category: 'High Intent Actions',
                event_label: trackingLabel || children || 'CTA Button',
                value: conversion ? 10 : 5,
                custom_map: {
                    'dimension6': urgency ? 'urgent_cta' : 'standard_cta',
                    'dimension7': conversion ? 'conversion_goal' : 'engagement_goal'
                }
            })

            if (conversion) {
                window.gtag('event', 'generate_lead', {
                    currency: 'GBP',
                    value: 500,
                    event_category: 'Lead Generation',
                    event_label: trackingLabel || 'CTA Conversion'
                })
            }
        }

        if (props.onClick) {
            props.onClick(e)
        }
    }

    const urgencyClass = urgency ? 'animate-pulse ring-2 ring-primary-300' : ''
    const combinedClassName = `${urgencyClass} ${props.className || ''}`

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            {...props}
            className={combinedClassName}
            onClick={handleCTAClick}
        >
            {children}
        </Button>
    )
})

CTAButton.displayName = 'CTAButton'

export const PhoneButton = forwardRef(({
                                           phoneNumber = '+447123456789',
                                           children = 'Call Now',
                                           variant = 'primary',
                                           size = 'lg',
                                           trackingContext = 'header',
                                           ...props
                                       }, ref) => {
    const handlePhoneClick = (e) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'phone_call_attempt', {
                event_category: 'Lead Generation',
                event_label: `Phone Click - ${trackingContext}`,
                value: 20,
                custom_map: {
                    'dimension8': 'phone_conversion',
                    'dimension9': trackingContext
                }
            })
            window.gtag('event', 'generate_lead', {
                currency: 'GBP',
                value: 800,
                event_category: 'Phone Leads',
                event_label: trackingContext
            })
        }

        if (props.onClick) {
            props.onClick(e)
        }
    }

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            {...props}
            onClick={handlePhoneClick}
        >
            <a
                href={`tel:${phoneNumber}`}
                className="flex items-center space-x-2 text-inherit no-underline"
                aria-label={`Call Sajaavat Events at ${phoneNumber} for event decor and backdrop styling consultation`}
            >
                {children}
            </a>
        </Button>
    )
})

PhoneButton.displayName = 'PhoneButton'
