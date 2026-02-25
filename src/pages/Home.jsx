import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ThemeCard from '../components/ThemeCard';
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
 * Home — Landing page with hero, featured themes, why choose us, testimonials, CTA
 */
const Home = () => {
    // Show first 4 themes as featured
    const featuredThemes = themes.slice(0, 4);

    return (
        <div className="overflow-x-hidden">
            {/* ──────────────────── HERO SECTION ──────────────────── */}
            <section className="relative min-h-screen flex items-center bg-hero-gradient pt-20">
                {/* Decorative circles */}
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-rose-gold/15 rounded-full blur-3xl -translate-y-1/4 translate-x-1/2" />
                <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-rose-gold/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/2" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Text Content */}
                    <div className="animate-fade-in">
                        <span className="inline-block px-4 py-1.5 bg-rose-gold/20 text-rose-gold-dark text-xs font-semibold font-poppins tracking-widest uppercase rounded-full mb-5">
                            ✦ Premium Event Decoration
                        </span>

                        <h1 className="font-playfair font-bold text-charcoal text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
                            Crafting{' '}
                            <span className="relative">
                                <span className="text-rose-gold-dark italic">Beautiful</span>
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rose-gradient rounded-full" />
                            </span>
                            <br />
                            Memories
                        </h1>

                        <p className="text-gray-500 font-poppins text-lg leading-relaxed mb-8 max-w-lg">
                            Transform every celebration into an unforgettable experience.
                            From dreamy birthday setups to grand wedding ceremonies —
                            Aroma Events brings your vision to life with elegance.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/gallery"
                                className="inline-flex items-center justify-center gap-2 bg-rose-gradient text-white px-8 py-4 rounded-2xl text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-200"
                            >
                                ✦ View Themes
                            </Link>
                            <Link
                                to="/book"
                                className="inline-flex items-center justify-center gap-2 bg-white text-charcoal border border-blush-dark px-8 py-4 rounded-2xl text-sm font-semibold font-poppins shadow-card hover:shadow-soft hover:scale-105 transition-all duration-200"
                            >
                                Book Now →
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid grid-cols-3 gap-4 max-w-sm">
                            {[
                                { num: '500+', label: 'Events Done' },
                                { num: '5★', label: 'Avg Rating' },
                                { num: '100%', label: 'Satisfaction' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="font-playfair font-bold text-2xl text-rose-gold-dark">{stat.num}</div>
                                    <div className="font-poppins text-xs text-gray-500 mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Image Grid */}
                    <div className="relative hidden lg:block animate-slide-up">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-10">
                                <div className="relative rounded-2xl overflow-hidden h-52 shadow-soft-lg">
                                    <img src="/images/1.jpeg" alt="Birthday decoration" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-overlay" />
                                    <p className="absolute bottom-3 left-3 text-white text-xs font-poppins font-medium">Birthday</p>
                                </div>
                                <div className="relative rounded-2xl overflow-hidden h-36 shadow-soft">
                                    <img src="/images/3.jpeg" alt="Princess decor" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="relative rounded-2xl overflow-hidden h-36 shadow-soft">
                                    <img src="/images/2.jpeg" alt="Golden glam" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative rounded-2xl overflow-hidden h-52 shadow-soft-lg">
                                    <img src="/images/4.jpeg" alt="Wedding decoration" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-overlay" />
                                    <p className="absolute bottom-3 left-3 text-white text-xs font-poppins font-medium">Wedding</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-soft-lg px-5 py-3 flex items-center gap-3">
                            <span className="text-2xl">🎉</span>
                            <div>
                                <p className="font-playfair font-bold text-charcoal text-sm">500+ Happy Clients</p>
                                <p className="font-poppins text-gray-500 text-xs">Across Maharashtra</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 80V40C360 0 720 80 1080 40C1260 20 1380 0 1440 0V80H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* ──────────────────── FEATURED THEMES ──────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        tag="Our Collections"
                        title="Featured Themes"
                        subtitle="Discover our most-loved decoration packages, handpicked for their beauty and popularity."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredThemes.map((theme) => (
                            <ThemeCard key={theme.id} theme={theme} />
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            to="/gallery"
                            className="inline-flex items-center gap-2 border-2 border-rose-gold text-rose-gold-dark px-8 py-3 rounded-full text-sm font-semibold font-poppins hover:bg-rose-gold hover:text-white transition-all duration-200"
                        >
                            View All Themes →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ──────────────────── WHY CHOOSE US ──────────────────── */}
            <section className="py-20 bg-blush">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        tag="Why Aroma Events"
                        title="The Difference is in the Details"
                        subtitle="We go above and beyond to ensure your event is a masterpiece of elegance and joy."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────────── TESTIMONIALS ──────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        tag="Happy Clients"
                        title="Words from Our Families"
                        subtitle="Real stories from real people who trusted Aroma Events to make their celebrations magical."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t) => (
                            <div
                                key={t.id}
                                className="bg-blush rounded-2xl p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────────── CTA BANNER ──────────────────── */}
            <section className="py-20 bg-charcoal relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-rose-gold/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-gold/5 rounded-full blur-3xl" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 bg-rose-gold/20 text-rose-gold text-xs font-semibold font-poppins tracking-widest uppercase rounded-full mb-5">
                        ✦ Let's Create Magic
                    </span>
                    <h2 className="font-playfair font-bold text-white text-4xl md:text-5xl leading-tight mb-5">
                        Your Dream Event Awaits
                    </h2>
                    <p className="font-poppins text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                        Ready to turn your vision into reality? Book a consultation today
                        and let us craft an unforgettable celebration just for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/book"
                            className="inline-flex items-center justify-center gap-2 bg-rose-gradient text-white px-8 py-4 rounded-2xl text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-200"
                        >
                            Book Your Event Now
                        </Link>
                        <a
                            href="https://wa.me/919971054664"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl text-sm font-semibold font-poppins hover:bg-white/20 transition-all duration-200"
                        >
                            💬 WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
