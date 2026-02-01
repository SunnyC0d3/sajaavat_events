import Link from "next/link"
import { ArrowLeft, Search, Phone, MapPin, Home } from "lucide-react"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"

export default function NotFoundPage() {
    const quickLinks = [
        {
            label: "Decor Portfolio",
            href: "/#gallery",
            icon: Search,
            description: "Explore our wedding and event decor gallery",
        },
        {
            label: "Request a Free Quote",
            href: "/#contact",
            icon: Phone,
            description: "Tell us your vision and get a decor quote",
        },
        {
            label: "Midlands & UK Coverage",
            href: "/",
            icon: MapPin,
            description: "Based in the Midlands, available across the UK",
        },
    ]

    return (
        <>
            <Header />

            <main
                className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24"
                role="main"
                aria-labelledby="error-heading"
            >
                <div className="text-center relative z-10">
                    <div className="mb-8">
                        <h1
                            id="error-heading"
                            className="text-8xl lg:text-9xl font-bold text-neutral-900/10 leading-none"
                        >
                            404
                        </h1>
                        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
                            Oops! We Can’t Find That Page
                        </h2>
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
            </main>

            <Footer hasHeader={false} />
        </>
    )
}
