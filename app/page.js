import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import Gallery from '@/app/components/Gallery'
import Testimonials from '@/app/components/Testimonials'
import FAQ from '@/app/components/FAQ'
import Footer from '@/app/components/Footer'
import StructuredData from '@/app/components/StructuredData'

export default function Home() {
    return (
        <div className="min-h-screen">
            <StructuredData />

            <Header/>

            <main role="main">
                <Hero/>
                <Gallery/>
                <Testimonials/>
                <FAQ/>
            </main>

            <Footer/>
        </div>
    )
}
