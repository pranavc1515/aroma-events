import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ThemeCard from '../components/ThemeCard';
import { AnimatedSection, AnimatedItem, AnimatedFade } from '../components/AnimatedSection';
import { themes } from '../data/themes';

/* ─── Static testimonials data ─── */
const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        event: 'Birthday Party',
        rating: 5,
        text: 'Aroma Events transformed my daughter\'s birthday into an absolute fairytale! Every detail was perfect — the balloon arch, the lighting, the cake table. We were completely blown away!',
        avatar: '/images/WhatsApp Image 2026-02-24 at 12.13.13 PM.jpeg',
    },
    {
        id: 2,
        name: 'Rahul & Divya Mehta',
        event: 'Wedding Ceremony',
        rating: 5,
        text: 'Our wedding was everything we dreamed of and more. The floral arrangements were breathtaking and the team was incredibly professional. Highly recommend Aroma Events!',
        avatar: '/images/WhatsApp Image 2026-02-24 at 12.13.15 PM.jpeg',
    },
    {
        id: 3,
        name: 'Sneha Patil',
        event: 'Baby Shower',
        rating: 5,
        text: 'The pastel cloud theme for my baby shower was so cute and elegant. All my guests loved it. The setup was done perfectly on time and looked exactly like the photos!',
        avatar: '/images/10.jpeg',
    },
];

/* ─── About / Service Areas ─── */
const serviceAreas = [
    'Koramangala', 'Indiranagar', 'Whitefield', 'HSR Layout', 'JP Nagar',
    'Electronic City', 'Marathahalli', 'BTM Layout', 'Jayanagar', 'MG Road',
];

/* ─── How It Works ─── */
const howItWorks = [
    { step: 1, icon: '💬', title: 'Share Your Vision', desc: 'Tell us about your event — date, theme, and budget. We\'ll schedule a quick call or chat.' },
    { step: 2, icon: '🎨', title: 'Pick a Theme', desc: 'Browse our gallery and choose from 8+ stunning themes, or share your custom idea.' },
    { step: 3, icon: '📅', title: 'Confirm & Plan', desc: 'We\'ll share a tailored quote. Confirm your booking with a small advance.' },
    { step: 4, icon: '🎉', title: 'We Decorate', desc: 'Our team arrives on time, sets up everything, and ensures your venue looks magical.' },
];

/* ─── Event Planning Tips ─── */
const eventTips = [
    { icon: '📅', title: 'Book Early', desc: 'Weekends & peak seasons fill fast. Book 2–3 weeks ahead for the best themes.' },
    { icon: '🎨', title: 'Pick a Color Palette', desc: 'Choose 2–3 main colors. It makes décor cohesive and photo-perfect.' },
    { icon: '📸', title: 'Share Reference Pics', desc: 'Send us Pinterest or Instagram ideas. We\'ll bring your vision to life.' },
    { icon: '⏰', title: 'Plan Setup Time', desc: 'Allow 2–4 hours before the event for setup. We\'ll be in & out smoothly.' },
];

/* ─── FAQ ─── */
const faqs = [
    { q: 'Which areas in Bangalore do you serve?', a: 'We serve all of Bangalore including Koramangala, Indiranagar, Whitefield, HSR Layout, JP Nagar, Electronic City, Marathahalli, BTM Layout, Jayanagar, MG Road, and nearby areas in Karnataka.' },
    { q: 'How far in advance should I book?', a: 'We recommend booking at least 2–3 weeks ahead for weekends and peak seasons. For last-minute requests, call or WhatsApp us — we may still have availability.' },
    { q: 'What\'s included in the decoration package?', a: 'Packages typically include balloons, backdrops, floral arrangements, table decor, props, and setup. Exact items vary by theme — check each theme\'s "What\'s Included" list.' },
    { q: 'Do you offer custom themes?', a: 'Yes! Share your vision, color palette, or reference images, and we\'ll create a bespoke theme just for you.' },
    { q: 'How do I confirm my booking?', a: 'Fill the Book Now form or WhatsApp us. We\'ll share a quote and bank details. A 30–50% advance secures your date.' },
];

/* ─── Why Choose Us data ─── */
const whyChooseUs = [
    {
        icon: '✨',
        title: 'Premium Quality',
        desc: 'We use only the finest decoration materials — fresh flowers, high-quality balloons, and premium fabrics for a luxurious look.',
    },
    {
        icon: '⏰',
        title: 'On-Time Setup',
        desc: 'Our professional team ensures everything is perfectly set up before your guests arrive, every single time.',
    },
    {
        icon: '🎨',
        title: 'Custom Themes',
        desc: 'Every event is unique. We create bespoke decoration themes tailored entirely to your vision and preferences.',
    },
    {
        icon: '💌',
        title: '100% Satisfaction',
        desc: 'Your happiness is our priority. We work closely with you to ensure every detail exceeds your expectations.',
    },
    {
        icon: '📸',
        title: 'Photo-Ready Setup',
        desc: 'Our setups are designed to look absolutely stunning in photographs, so your memories last forever.',
    },
    {
        icon: '💰',
        title: 'Transparent Pricing',
        desc: 'No hidden costs, no surprises. We offer clear, upfront pricing for all our decoration packages.',
    },
];

/**
 * Home — Landing page with hero, about, featured themes, process, why choose us, testimonials, FAQ, CTA
 */
const Home = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const featuredThemes = themes.slice(0, 4);

    return (
        <div className="overflow-x-hidden">
            {/* ──────────────────── HERO SECTION ──────────────────── */}
            <section className="relative min-h-[100svh] sm:min-h-screen flex items-center bg-hero-gradient pt-20 pb-8 sm:pb-0">
                {/* Decorative circles */}
                <div className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-rose-gold/15 rounded-full blur-3xl -translate-y-1/4 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-1/4 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-rose-gold/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/2 pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
                    {/* Left — Text Content */}
                    <AnimatedFade delay={0.1} className="order-2 lg:order-1">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1.5 bg-rose-gold/20 text-rose-gold-dark text-xs font-semibold font-poppins tracking-widest uppercase rounded-full mb-4 sm:mb-5"
                        >
                            ✦ Premium Event Decoration
                        </motion.span>

                        <h1 className="font-playfair font-bold text-charcoal text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-tight mb-4 sm:mb-6">
                            Crafting{' '}
                            <span className="relative">
                                <span className="text-rose-gold-dark italic">Beautiful</span>
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rose-gradient rounded-full" />
                            </span>
                            <br />
                            Memories
                        </h1>

                        <p className="text-gray-500 font-poppins text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                            Transform every celebration into an unforgettable experience.
                            From dreamy birthday setups to grand wedding ceremonies —
                            Aroma Events brings your vision to life with elegance.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                            <Link
                                to="/gallery"
                                className="inline-flex items-center justify-center gap-2 bg-rose-gradient text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg hover:scale-105 active:scale-[0.98] transition-all duration-200 min-h-[44px]"
                            >
                                ✦ View Themes
                            </Link>
                            <Link
                                to="/book"
                                className="inline-flex items-center justify-center gap-2 bg-white text-charcoal border border-blush-dark px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm font-semibold font-poppins shadow-card hover:shadow-soft hover:scale-105 active:scale-[0.98] transition-all duration-200 min-h-[44px]"
                            >
                                Book Now →
                            </Link>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-4 max-w-sm"
                        >
                            {[
                                { num: '500+', label: 'Events Done' },
                                { num: '5★', label: 'Avg Rating' },
                                { num: '100%', label: 'Satisfaction' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="font-playfair font-bold text-xl sm:text-2xl text-rose-gold-dark">{stat.num}</div>
                                    <div className="font-poppins text-xs text-gray-500 mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatedFade>

                    {/* Right — Image Grid (mobile: single hero image; desktop: grid) */}
                    <AnimatedFade delay={0.2} className="relative order-1 lg:order-2">
                        {/* Mobile: single hero image */}
                        <div className="lg:hidden relative rounded-2xl overflow-hidden aspect-[4/3] max-h-[280px] shadow-soft-lg">
                            <img src="/images/1.jpeg" alt="Event decoration" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-overlay" />
                            <p className="absolute bottom-3 left-3 text-white text-sm font-poppins font-medium">Premium Event Decoration</p>
                        </div>
                        {/* Desktop: image grid */}
                        <div className="relative hidden lg:block">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-10">
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="relative rounded-2xl overflow-hidden h-52 shadow-soft-lg">
                                        <img src="/images/1.jpeg" alt="Birthday decoration" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-overlay" />
                                        <p className="absolute bottom-3 left-3 text-white text-xs font-poppins font-medium">Birthday</p>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="relative rounded-2xl overflow-hidden h-36 shadow-soft">
                                        <img src="/images/3.jpeg" alt="Princess decor" className="w-full h-full object-cover" />
                                    </motion.div>
                                </div>
                                <div className="space-y-4">
                                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }} className="relative rounded-2xl overflow-hidden h-36 shadow-soft">
                                        <img src="/images/2.jpeg" alt="Golden glam" className="w-full h-full object-cover" />
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 }} className="relative rounded-2xl overflow-hidden h-52 shadow-soft-lg">
                                        <img src="/images/4.jpeg" alt="Wedding decoration" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-overlay" />
                                        <p className="absolute bottom-3 left-3 text-white text-xs font-poppins font-medium">Wedding</p>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-soft-lg px-5 py-3 flex items-center gap-3"
                            >
                                <span className="text-2xl">🎉</span>
                                <div>
                                    <p className="font-playfair font-bold text-charcoal text-sm">500+ Happy Clients</p>
                                    <p className="font-poppins text-gray-500 text-xs">Across Bangalore & Karnataka</p>
                                </div>
                            </motion.div>
                        </div>
                    </AnimatedFade>
                </div>

                {/* Wave divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 80V40C360 0 720 80 1080 40C1260 20 1380 0 1440 0V80H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* ──────────────────── SPECIAL OFFER BANNER ──────────────────── */}
            <AnimatedSection>
                <div className="bg-rose-gradient py-4 sm:py-5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                        <div>
                            <p className="font-playfair font-bold text-white text-lg sm:text-xl">🎉 Limited Time Offer</p>
                            <p className="font-poppins text-white/90 text-sm">Book 2 weeks in advance & get 5% off your decoration package!</p>
                        </div>
                        <Link
                            to="/book"
                            className="inline-flex items-center justify-center gap-2 bg-white text-rose-gold-dark px-6 py-3 rounded-xl text-sm font-semibold font-poppins shadow-soft hover:shadow-lg transition-all whitespace-nowrap"
                        >
                            Book Now & Save
                        </Link>
                    </div>
                </div>
            </AnimatedSection>

            {/* ──────────────────── ABOUT US ──────────────────── */}
            <AnimatedSection>
                <section className="py-16 sm:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <SectionTitle tag="About Us" title="Your Partner for Memorable Events in Bangalore" subtitle="" centered={false} />
                                <p className="font-poppins text-gray-500 text-base leading-relaxed mb-6">
                                    Aroma Events is a Bangalore-based event decoration studio passionate about turning your celebrations into magical experiences. From intimate birthday parties to grand weddings and dreamy baby showers — we bring elegance, creativity, and attention to detail to every event.
                                </p>
                                <p className="font-poppins text-gray-500 text-base leading-relaxed mb-8">
                                    With 500+ successful events across Karnataka, we understand what makes an occasion unforgettable. Our team works closely with you to bring your vision to life, on time and within budget.
                                </p>
                                <Link to="/contact" className="inline-flex items-center gap-2 text-rose-gold-dark font-semibold font-poppins text-sm hover:text-rose-gold transition-colors">
                                    Get in touch →
                                </Link>
                            </div>
                            <div>
                                <h3 className="font-playfair font-bold text-charcoal text-lg mb-4">We serve across Bangalore</h3>
                                <div className="flex flex-wrap gap-2">
                                    {serviceAreas.map((area, i) => (
                                        <span key={i} className="px-4 py-2 bg-blush text-charcoal-light rounded-full text-sm font-poppins">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ──────────────────── FEATURED THEMES ──────────────────── */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle
                            tag="Our Collections"
                            title="Featured Themes"
                            subtitle="Discover our most-loved decoration packages, handpicked for their beauty and popularity."
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {featuredThemes.map((theme, i) => (
                            <AnimatedItem key={theme.id} index={i}>
                                <ThemeCard theme={theme} />
                            </AnimatedItem>
                        ))}
                    </div>

                    <AnimatedSection delay={0.3}>
                        <div className="text-center mt-8 sm:mt-10">
                            <Link
                                to="/gallery"
                                className="inline-flex items-center justify-center gap-2 border-2 border-rose-gold text-rose-gold-dark px-6 sm:px-8 py-3 rounded-full text-sm font-semibold font-poppins hover:bg-rose-gold hover:text-white transition-all duration-200 min-h-[44px]"
                            >
                                View All Themes →
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ──────────────────── HOW IT WORKS ──────────────────── */}
            <section className="py-16 sm:py-20 bg-blush">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle
                            tag="Simple Process"
                            title="How It Works"
                            subtitle="From first chat to final setup — we make booking effortless."
                        />
                    </AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {howItWorks.map((item, i) => (
                            <AnimatedItem key={i} index={i}>
                                <div className="relative bg-white rounded-2xl p-6 shadow-card text-center">
                                    <div className="w-14 h-14 bg-rose-gradient rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-soft">
                                        {item.icon}
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-rose-gold text-white rounded-full flex items-center justify-center text-sm font-bold font-poppins">{item.step}</span>
                                    <h3 className="font-playfair font-bold text-charcoal text-lg mb-2">{item.title}</h3>
                                    <p className="font-poppins text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────────── EVENT PLANNING TIPS ──────────────────── */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle
                            tag="Pro Tips"
                            title="Event Planning Tips"
                            subtitle="Quick tips to make your event planning smooth and stress-free."
                        />
                    </AnimatedSection>
                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {eventTips.map((tip, i) => (
                            <AnimatedItem key={i} index={i}>
                                <div className="bg-blush rounded-2xl p-5 sm:p-6 border border-blush-dark/50 hover:border-rose-gold/30 transition-colors">
                                    <div className="w-12 h-12 bg-rose-gold/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                                        {tip.icon}
                                    </div>
                                    <h3 className="font-playfair font-bold text-charcoal text-base mb-2">{tip.title}</h3>
                                    <p className="font-poppins text-gray-500 text-sm leading-relaxed">{tip.desc}</p>
                                </div>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────────── WHY CHOOSE US ──────────────────── */}
            <section className="py-16 sm:py-20 bg-blush">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle
                            tag="Why Aroma Events"
                            title="The Difference is in the Details"
                            subtitle="We go above and beyond to ensure your event is a masterpiece of elegance and joy."
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {whyChooseUs.map((item, i) => (
                            <AnimatedItem key={i} index={i}>
                                <motion.div
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    className="bg-white rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-soft transition-shadow duration-300 group h-full"
                                >
                                    <div className="w-12 h-12 bg-blush rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-playfair font-bold text-charcoal text-lg mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="font-poppins text-gray-500 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────────── TESTIMONIALS ──────────────────── */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle
                            tag="Happy Clients"
                            title="Words from Our Families"
                            subtitle="Real stories from real people who trusted Aroma Events to make their celebrations magical."
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {testimonials.map((t, i) => (
                            <AnimatedItem key={t.id} index={i}>
                                <motion.div
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    className="bg-blush rounded-2xl p-5 sm:p-6 hover:shadow-soft transition-shadow duration-300 h-full"
                                >
                                {/* Star Rating */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <span key={i} className="text-rose-gold-dark text-sm">★</span>
                                    ))}
                                </div>

                                <p className="font-poppins text-charcoal-light text-sm leading-relaxed mb-5 italic">
                                    "{t.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-11 h-11 rounded-full object-cover border-2 border-rose-gold/30"
                                    />
                                    <div>
                                        <p className="font-poppins font-semibold text-charcoal text-sm">{t.name}</p>
                                        <p className="font-poppins text-gray-500 text-xs">{t.event}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatedItem>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────────── FAQ ──────────────────── */}
            <section className="py-16 sm:py-20 bg-blush">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle
                            tag="FAQ"
                            title="Frequently Asked Questions"
                            subtitle="Quick answers to common questions about our event decoration services."
                        />
                    </AnimatedSection>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <AnimatedItem key={i} index={i}>
                                <div
                                    className={`bg-white rounded-xl shadow-card overflow-hidden transition-all duration-200 ${openFaq === i ? 'shadow-soft' : ''}`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-poppins font-semibold text-charcoal hover:bg-blush/50 transition-colors"
                                    >
                                        <span className="text-sm sm:text-base">{faq.q}</span>
                                        <span className={`text-rose-gold-dark text-xl flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-5 pb-4">
                                            <p className="font-poppins text-gray-500 text-sm leading-relaxed border-t border-blush-dark pt-3">{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────────── CTA BANNER ──────────────────── */}
            <AnimatedSection>
                <section className="py-16 sm:py-20 bg-charcoal relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-rose-gold/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-rose-gold/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="inline-block px-4 py-1.5 bg-rose-gold/20 text-rose-gold text-xs font-semibold font-poppins tracking-widest uppercase rounded-full mb-4 sm:mb-5">
                            ✦ Let's Create Magic
                        </span>
                        <h2 className="font-playfair font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 sm:mb-5">
                            Your Dream Event Awaits
                        </h2>
                        <p className="font-poppins text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
                            Ready to turn your vision into reality? Book a consultation today
                            and let us craft an unforgettable celebration just for you.
                        </p>
                        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
                            <Link
                                to="/book"
                                className="inline-flex items-center justify-center gap-2 bg-rose-gradient text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg hover:scale-105 active:scale-[0.98] transition-all duration-200 min-h-[44px]"
                            >
                                Book Your Event Now
                            </Link>
                            <a
                                href="https://wa.me/919971054664"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm font-semibold font-poppins hover:bg-white/20 active:scale-[0.98] transition-all duration-200 min-h-[44px]"
                            >
                                💬 WhatsApp Us
                            </a>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default Home;
