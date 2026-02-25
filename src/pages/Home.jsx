import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ThemeCard from '../components/ThemeCard';
import PriceCalculator from '../components/PriceCalculator';
import { AnimatedSection, AnimatedItem, AnimatedFade } from '../components/AnimatedSection';
import { themes } from '../data/themes';

/* ─── Testimonials (Birthday-focused) ─── */
const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        event: 'Princess Birthday Party',
        location: 'Koramangala',
        rating: 5,
        text: 'Aroma Events transformed my daughter\'s 5th birthday into an absolute fairytale! The balloon arch, fairy lights, and cake table setup were beyond perfect. Every guest asked for their number. Cannot recommend enough!',
        avatar: '/images/WhatsApp Image 2026-02-24 at 12.13.13 PM.jpeg',
    },
    {
        id: 2,
        name: 'Vikram & Anjali Rao',
        event: '1st Birthday Celebration',
        location: 'Indiranagar',
        rating: 5,
        text: 'For our baby\'s first birthday, we wanted something magical. Aroma Events delivered a dreamy pastel setup that made us cry happy tears. On-time, professional, and the photos turned out stunning!',
        avatar: '/images/WhatsApp Image 2026-02-24 at 12.13.15 PM.jpeg',
    },
    {
        id: 3,
        name: 'Meera Krishnan',
        event: '30th Milestone Birthday',
        location: 'Whitefield',
        rating: 5,
        text: 'My 30th had to be special — and Aroma Events nailed it. Golden glam theme, elegant backdrop, perfect lighting. Felt like a celebrity. The team understood exactly what I wanted from my Pinterest pins!',
        avatar: '/images/10.jpeg',
    },
    {
        id: 4,
        name: 'Rohan Gupta',
        event: 'Kids Birthday Party',
        location: 'HSR Layout',
        rating: 5,
        text: 'Stress-free birthday planning! They handled everything from theme to setup. My son\'s superhero party was a hit. Parents were asking "Who did your decoration?" — Aroma Events, that\'s who!',
        avatar: '/images/3.jpeg',
    },
];

/* ─── About / Service Areas ─── */
const serviceAreas = [
    'Koramangala', 'Indiranagar', 'Whitefield', 'HSR Layout', 'JP Nagar',
    'Electronic City', 'Marathahalli', 'BTM Layout', 'Jayanagar', 'MG Road',
];

/* ─── Birthday Services ─── */
const birthdayServices = [
    { icon: '👶', title: 'Kids Birthday Parties', desc: 'Princess, superhero, unicorn, jungle safari & more. Age-appropriate themes that make little ones squeal with joy. Balloon arches, backdrops, cake tables & props.', keywords: 'kids birthday decoration Bangalore' },
    { icon: '🎂', title: '1st Birthday Celebrations', desc: 'Milestone first birthdays deserve magic. Soft pastels, cloud themes, smash cake setups & photo-worthy backdrops. Perfect for baby\'s big day.', keywords: '1st birthday party decoration' },
    { icon: '✨', title: 'Milestone Birthdays (18, 21, 30)', desc: 'Adult birthdays that feel premium. Golden glam, midnight themes, elegant florals & sophisticated setups. Because grown-ups deserve to feel special too.', keywords: 'milestone birthday Bangalore' },
    { icon: '🎈', title: 'Balloon Installations', desc: 'Arches, columns, garlands & balloon walls. Custom colors, organic or structured designs. Instagram-worthy in every frame.', keywords: 'birthday balloon decoration' },
    { icon: '🌸', title: 'Backdrop & Cake Table Setup', desc: 'Stunning backdrops for photos, elegant cake table styling, fresh or artificial florals. We make every corner photo-ready.', keywords: 'birthday backdrop Bangalore' },
];

/* ─── How It Works ─── */
const howItWorks = [
    { step: 1, icon: '💬', title: 'Free Consultation', desc: 'Tell us about the birthday — age, theme, venue & date. We\'ll share ideas & a custom quote within 24 hours.' },
    { step: 2, icon: '🎨', title: 'Choose Your Theme', desc: 'Browse our gallery or share Pinterest/Instagram inspo. We\'ll bring your dream setup to life.' },
    { step: 3, icon: '📅', title: 'Confirm & Plan', desc: 'Lock your date with a small advance. We\'ll finalize every detail so you can relax.' },
    { step: 4, icon: '🎉', title: 'We Decorate, You Celebrate', desc: 'Our team arrives, sets up beautifully, and you enjoy a stress-free birthday party!' },
];

/* ─── Birthday Planning Tips ─── */
const eventTips = [
    { icon: '📅', title: 'Book 2–3 Weeks Ahead', desc: 'Weekend slots fill fast. Secure your favourite theme before someone else does.' },
    { icon: '🎨', title: 'Pick a Clear Theme', desc: 'Princess, unicorn, golden glam — a clear theme helps us nail the decor.' },
    { icon: '📸', title: 'Share Pinterest / Instagram Pics', desc: 'Send us inspo! We\'ll recreate the look you love within your budget.' },
    { icon: '⏰', title: 'Allow 2–4 Hours for Setup', desc: 'We need time to make it perfect. Plan setup 2–4 hours before guests arrive.' },
];

/* ─── FAQ (Birthday-focused) ─── */
const faqs = [
    { q: 'Do you do kids birthday parties?', a: 'Yes! Kids birthdays are our specialty. Princess, superhero, unicorn, jungle safari, teddy bear — we have 8+ themes and create custom ones too. Perfect for ages 1–12.' },
    { q: 'Which areas in Bangalore do you serve?', a: 'We serve all of Bangalore: Koramangala, Indiranagar, Whitefield, HSR Layout, JP Nagar, Electronic City, Marathahalli, BTM Layout, Jayanagar, MG Road & across Karnataka.' },
    { q: 'How much does birthday decoration cost?', a: 'Packages start from ₹8,000 and vary by theme, venue size & extras. Fill our Book Now form or WhatsApp us for a custom quote. No hidden charges.' },
    { q: 'Can you match a theme from Pinterest/Instagram?', a: 'Absolutely! Send us reference images and we\'ll recreate the look. Custom themes are our strength.' },
    { q: 'How far in advance should I book?', a: 'Book at least 2–3 weeks ahead for weekends. Last-minute? WhatsApp us — we may have availability.' },
    { q: 'What\'s included in a birthday package?', a: 'Typically: balloon arch/backdrop, cake table decor, props, setup & dismantle. Exact items depend on the theme — check each theme\'s details.' },
];

/* ─── Why Choose Us (Birthday specialist) ─── */
const whyChooseUs = [
    {
        icon: '🎂',
        title: 'Birthday Specialists',
        desc: 'We focus on birthdays — kids, milestones, adults. 500+ parties delivered. We know what works and what wows.',
    },
    {
        icon: '⏰',
        title: 'Stress-Free Planning',
        desc: 'From consultation to setup, we handle it all. You enjoy the party; we make sure every balloon is perfect.',
    },
    {
        icon: '🎨',
        title: 'Custom & Pinterest Themes',
        desc: 'Share your inspo — we recreate it. Princess, unicorn, golden glam, or your unique idea. Your vision, our craft.',
    },
    {
        icon: '📸',
        title: 'Photo-Ready Setups',
        desc: 'Every corner is Instagram-worthy. Balloon arches, backdrops, cake tables — designed for stunning photos.',
    },
    {
        icon: '💰',
        title: 'Transparent Pricing',
        desc: 'Clear quotes, no surprises. Know exactly what you pay. Packages to suit every budget.',
    },
];

/**
 * Home — Landing page with hero, about, featured themes, process, why choose us, testimonials, FAQ, CTA
 */
const Home = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const featuredThemes = themes.filter((t) => t.category === 'birthday').slice(0, 4);

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
                            Bangalore's #1 Birthday Party Specialists
                        </motion.span>

                        <h1 className="font-playfair font-bold text-charcoal text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-tight mb-4 sm:mb-6">
                            Birthday Parties That{' '}
                            <span className="relative">
                                <span className="text-rose-gold-dark italic">Wow</span>
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rose-gradient rounded-full" />
                            </span>
                            <br />
                            — Every Time
                        </h1>

                        <p className="text-gray-500 font-poppins text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                            Kids, milestone & adult birthdays — we make them magical. Princess themes, golden glam, 1st birthday setups & more. Stress-free planning, photo-ready décor, 500+ parties delivered in Bangalore.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                            <Link
                                to="/book"
                                className="inline-flex items-center justify-center gap-2 bg-rose-gradient text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg hover:scale-105 active:scale-[0.98] transition-all duration-200 min-h-[44px]"
                            >
                                Get FREE Quote
                            </Link>
                            <Link
                                to="/gallery"
                                className="inline-flex items-center justify-center gap-2 bg-white text-charcoal border border-blush-dark px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm font-semibold font-poppins shadow-card hover:shadow-soft hover:scale-105 active:scale-[0.98] transition-all duration-200 min-h-[44px]"
                            >
                                View Birthday Themes →
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
                                { num: '500+', label: 'Birthdays Done' },
                                { num: '5★', label: 'Avg Rating' },
                                { num: '8+', label: 'Themes' },
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
                            <p className="font-playfair font-bold text-white text-lg sm:text-xl">🎂 Birthday Special</p>
                            <p className="font-poppins text-white/90 text-sm">Book 2 weeks ahead & get 5% off your birthday decoration! Free consultation.</p>
                        </div>
                        <Link
                            to="/book"
                            className="inline-flex items-center justify-center gap-2 bg-white text-rose-gold-dark px-6 py-3 rounded-xl text-sm font-semibold font-poppins shadow-soft hover:shadow-lg transition-all whitespace-nowrap"
                        >
                            Get FREE Quote
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
                                <SectionTitle tag="About Us" title="Birthday Specialists Who Make Your Day Magical" subtitle="" centered={false} />
                                <p className="font-poppins text-gray-500 text-base leading-relaxed mb-6">
                                    Aroma Events is Bangalore's trusted birthday party decoration specialists. We live for the moment a child's eyes light up at their princess setup, or when a 30-year-old feels like royalty at their milestone party. Birthdays are our passion — and it shows in every balloon, backdrop, and detail.
                                </p>
                                <p className="font-poppins text-gray-500 text-base leading-relaxed mb-8">
                                    With 500+ birthday parties delivered across Bangalore & Karnataka, we know what works. Our mission: stress-free planning for you, magical moments for your guests. From 1st birthdays to golden jubilees — we bring your vision to life, on time and within budget.
                                </p>
                                <Link to="/book" className="inline-flex items-center gap-2 text-rose-gold-dark font-semibold font-poppins text-sm hover:text-rose-gold transition-colors">
                                    Book Your Free Consultation →
                                </Link>
                            </div>
                            <div>
                                <h3 className="font-playfair font-bold text-charcoal text-lg mb-4">Birthday parties across Bangalore</h3>
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

            {/* ──────────────────── BIRTHDAY SERVICES ──────────────────── */}
            <section className="py-16 sm:py-20 bg-blush">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle
                            tag="Our Services"
                            title="Birthday Party Decoration in Bangalore"
                            subtitle="From kids' parties to milestone celebrations — we offer full decoration & styling services."
                        />
                    </AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {birthdayServices.map((svc, i) => (
                            <AnimatedItem key={i} index={i}>
                                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-soft transition-shadow h-full">
                                    <div className="w-12 h-12 bg-rose-gold/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                                        {svc.icon}
                                    </div>
                                    <h3 className="font-playfair font-bold text-charcoal text-lg mb-2">{svc.title}</h3>
                                    <p className="font-poppins text-gray-500 text-sm leading-relaxed mb-3">{svc.desc}</p>
                                    <span className="text-rose-gold-dark text-xs font-poppins font-medium">{svc.keywords}</span>
                                </div>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────────── PRICE CALCULATOR ──────────────────── */}
            <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        <AnimatedSection>
                            <SectionTitle
                                tag="Estimate"
                                title="Rough Price Estimate"
                                subtitle="Get an instant idea of what your event might cost. Final quote depends on theme, location & extras."
                            />
                            <p className="font-poppins text-gray-500 dark:text-gray-400 text-sm mt-4">
                                Our packages start from ₹8,000 for birthday decorations. Use the calculator for a quick estimate, then get a custom quote via our Book Now form or WhatsApp.
                            </p>
                        </AnimatedSection>
                        <PriceCalculator />
                    </div>
                </div>
            </section>

            {/* ──────────────────── INSTAGRAM STYLE GRID ──────────────────── */}
            <section className="py-16 sm:py-20 bg-blush dark:bg-charcoal/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle
                            tag="@aromaevents"
                            title="Latest From Our Events"
                            subtitle="Real setups from birthdays, weddings & baby showers across Bangalore."
                        />
                    </AnimatedSection>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mt-8">
                        {['/images/1.jpeg', '/images/3.jpeg', '/images/2.jpeg', '/images/4.jpeg', '/images/6.jpeg', '/images/8.jpeg'].map((src, i) => (
                            <AnimatedItem key={i} index={i}>
                                <a
                                    href="https://instagram.com/aromaevents"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block aspect-square rounded-xl overflow-hidden group"
                                >
                                    <img
                                        src={src}
                                        alt={`Event ${i + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </a>
                            </AnimatedItem>
                        ))}
                    </div>
                    <AnimatedSection delay={0.2}>
                        <div className="text-center mt-6">
                            <a
                                href="https://instagram.com/aromaevents"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-rose-gold-dark dark:text-rose-gold font-semibold font-poppins text-sm hover:underline"
                            >
                                Follow us on Instagram →
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ──────────────────── BEFORE/AFTER TRANSFORMATIONS ──────────────────── */}
            <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle
                            tag="Transformations"
                            title="From Vision to Reality"
                            subtitle="See how we transform empty spaces into magical celebrations."
                        />
                    </AnimatedSection>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <AnimatedItem index={0}>
                            <div className="bg-blush dark:bg-charcoal/50 rounded-2xl p-6 border border-blush-dark dark:border-charcoal-light">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xs font-semibold font-poppins text-gray-500 dark:text-gray-400 uppercase">Before</span>
                                    <span className="text-gray-300">→</span>
                                    <span className="text-xs font-semibold font-poppins text-rose-gold-dark dark:text-rose-gold uppercase">After</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="aspect-square rounded-xl bg-gray-200 dark:bg-charcoal-light flex items-center justify-center">
                                        <span className="text-gray-400 dark:text-gray-500 text-4xl">🏠</span>
                                    </div>
                                    <div className="aspect-square rounded-xl overflow-hidden">
                                        <img src="/images/1.jpeg" alt="After decoration" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <p className="font-poppins text-charcoal dark:text-gray-200 text-sm mt-4 font-medium">Romantic Rose Birthday Setup</p>
                            </div>
                        </AnimatedItem>
                        <AnimatedItem index={1}>
                            <div className="bg-blush dark:bg-charcoal/50 rounded-2xl p-6 border border-blush-dark dark:border-charcoal-light">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xs font-semibold font-poppins text-gray-500 dark:text-gray-400 uppercase">Before</span>
                                    <span className="text-gray-300">→</span>
                                    <span className="text-xs font-semibold font-poppins text-rose-gold-dark dark:text-rose-gold uppercase">After</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="aspect-square rounded-xl bg-gray-200 dark:bg-charcoal-light flex items-center justify-center">
                                        <span className="text-gray-400 dark:text-gray-500 text-4xl">✨</span>
                                    </div>
                                    <div className="aspect-square rounded-xl overflow-hidden">
                                        <img src="/images/2.jpeg" alt="After decoration" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <p className="font-poppins text-charcoal dark:text-gray-200 text-sm mt-4 font-medium">Golden Glam Milestone Party</p>
                            </div>
                        </AnimatedItem>
                    </div>
                </div>
            </section>

            {/* ──────────────────── FEATURED BIRTHDAY THEMES ──────────────────── */}
            <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle
                            tag="Popular Themes"
                            title="Featured Birthday Setups"
                            subtitle="Our most-loved birthday themes — princess, golden glam, romantic rose & more."
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
                                View All Birthday Themes →
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
                            title="Birthday Planning Tips"
                            subtitle="Quick tips for a smooth, stress-free birthday party."
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
                            title="Why Bangalore Parents & Party Hosts Choose Us"
                            subtitle="Birthday specialists who deliver stress-free planning and wow-worthy setups."
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

            {/* ──────────────────── GOOGLE REVIEWS BADGE ──────────────────── */}
            <AnimatedSection>
                <section className="py-8 sm:py-10 bg-charcoal dark:bg-charcoal/90">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl">★</span>
                                    ))}
                                </div>
                                <span className="font-poppins font-semibold text-white text-lg">5.0</span>
                            </div>
                            <p className="font-poppins text-gray-300 text-sm text-center sm:text-left">
                                Rated by 500+ happy customers on Google
                            </p>
                            <a
                                href="https://www.google.com/search?q=aroma+events+bangalore"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-poppins font-medium transition-colors"
                            >
                                Find us on Google
                            </a>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* ──────────────────── TESTIMONIALS ──────────────────── */}
            <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle
                            tag="Happy Clients"
                            title="What Birthday Hosts Say About Us"
                            subtitle="Real parents & party hosts who chose Aroma Events for their special day."
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
                                        <p className="font-poppins text-gray-500 text-xs">{t.event}{t.location ? ` • ${t.location}` : ''}</p>
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
                            title="Birthday Party FAQs"
                            subtitle="Common questions about our birthday decoration services in Bangalore."
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
                            ✦ Let's Plan Your Birthday
                        </span>
                        <h2 className="font-playfair font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 sm:mb-5">
                            Ready for a Birthday That Wows?
                        </h2>
                        <p className="font-poppins text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
                            Get a FREE consultation & custom quote. We reply within 24 hours.
                            No commitment — just ideas, themes & transparent pricing.
                        </p>
                        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
                            <Link
                                to="/book"
                                className="inline-flex items-center justify-center gap-2 bg-rose-gradient text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg hover:scale-105 active:scale-[0.98] transition-all duration-200 min-h-[44px]"
                            >
                                Get FREE Quote
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
