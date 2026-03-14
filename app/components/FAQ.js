const faqs = [
    {
        q: 'What areas does Sajaavat Events serve?',
        a: 'Sajaavat Events is based in the Midlands and serves clients across the UK. We regularly work in Coventry, Birmingham, Leicester, Warwick, Solihull, London, Manchester, Leeds, and surrounding areas. We travel nationwide for weddings, pre-wedding events, and parties.',
    },
    {
        q: 'What types of events does Sajaavat Events decorate?',
        a: 'We specialise in bespoke decor for weddings, pre-wedding events (engagements, Mehndi, Sangeet, chunni ceremonies), birthdays, anniversaries, baby celebrations, and private parties. Each event is styled with custom backdrops, stage design, and photo-worthy details.',
    },
    {
        q: 'How far in advance should I book?',
        a: 'We recommend booking 3–6 months in advance for weddings and major events to ensure availability. However, we can accommodate shorter notice periods depending on our schedule — contact us for a free consultation to discuss your event date.',
    },
    {
        q: 'Does Sajaavat Events provide setup and takedown?',
        a: 'Yes. Our team handles delivery, installation, and ensures every detail is photo-ready before your event begins. Takedown can be arranged based on your venue requirements and schedule.',
    },
    {
        q: 'Can Sajaavat Events work with cultural wedding traditions?',
        a: 'Absolutely. We have experience styling Sikh, Hindu, Muslim, and fusion weddings — respecting cultural traditions while delivering a modern, luxury finish. We work closely with you to understand your heritage and create decor that honours your customs.',
    },
]

export default function FAQ() {
    return (
        <section id="faq" className="bg-white py-16 lg:py-24" aria-labelledby="faq-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 id="faq-heading" className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Everything you need to know about working with Sajaavat Events.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-neutral-50 rounded-xl px-6 py-5 lg:px-8 lg:py-6">
                            <h3 className="text-base font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
