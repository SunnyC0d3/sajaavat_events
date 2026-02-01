import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import Gallery from '@/app/components/Gallery'
import Testimonials from '@/app/components/Testimonials'
import Footer from '@/app/components/Footer'
import StructuredData from '@/app/components/StructuredData'

export default function Home() {
    return (
        <div className="min-h-screen">
            <StructuredData />

            <Header/>

            <main role="main">
                <h1 className="sr-only">
                    Sajaavat Events - Bespoke Event Decor, Luxury Backdrops and Styling - the Midlands & UK Wide
                </h1>

                <Hero/>
                <Gallery/>
                <Testimonials/>
            </main>

            <Footer/>

            <div className="sr-only" aria-hidden="true">
                <h2>Service Areas</h2>
                <p>
                    We provide bespoke event decor, wedding styling, and statement backdrops throughout the UK. Based in the Midlands, we regularly work across Coventry, Birmingham, Leicester, Warwick, Solihull, Rugby, Nuneaton and surrounding
                    areas — and also travel nationwide for pre-wedding events, weddings and parties across the UK.
                </p>

                <h2>Cultural Expertise</h2>
                <p>
                    We create decor that respects cultural traditions while delivering a modern, luxury finish. Our team has experience
                    styling Sikh and Hindu ceremonies, Mendhi and engagement events, as well as fusion
                    weddings that blend heritage elements with contemporary design. Whether your celebration is rooted in tradition or
                    fully modern, we tailor the backdrop, stage styling, draping, florals, and finishing details to your vision.
                </p>

                <h2>Event Types</h2>
                <p>
                    Weddings, pre-wedding events (engagements, Mendhi, Sangeet), birthdays and milestone parties. We design decor concepts for all your needs.
                </p>

                <h2>Services</h2>
                <p>
                    Bespoke event decor and styling including stage and backdrop design, and signage styling, custom signage moments, draping, lighting-led ambience, and photo-worthy
                    feature areas for guests. We offer full setup and on-the-day styling, with optional takedown and coordination support —
                    ensuring your venue looks cohesive, elevated, and beautifully finished from start to end.
                </p>

                <h2>Why Choose Sajaavat Events</h2>
                <p>
                    Based in the Midlands, Sajaavat Events delivers premium event decor across the UK with a focus on craftsmanship,
                    detail, and personalised design. We combine cultural understanding with modern styling to create bespoke backdrops
                    and thoughtfully curated event spaces that photograph beautifully. From design planning to
                    professional setup on the day, we make the decor process smooth — so you can focus on your celebration.
                </p>

                <h2>The Midlands Decor Specialists</h2>
                <p>
                    Proud to support clients as the Midlands-based event decor studio. Our central location allows efficient travel to Coventry, Birmingham, Leicester, Warwickshire, Nottinghamshire, Wolverhampton and nearby towns, with UK-wide
                    availability for larger events. We’re familiar with a wide range of venues — from temples, gurdwaras, and community halls
                    to hotels, banquet suites, and modern event spaces — helping you plan with confidence and achieve a polished finish on the day.
                </p>
            </div>
        </div>
    )
}
