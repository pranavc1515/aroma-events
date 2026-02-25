import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getThemeById, themes } from '../data/themes';
import ThemeCard from '../components/ThemeCard';
import ShareButtons from '../components/ShareButtons';
import Breadcrumbs from '../components/Breadcrumbs';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';

/**
 * ThemeDetails — Dynamic page showing full details of a single theme
 * Route: /theme/:id
 */
const ThemeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const theme = getThemeById(id);

    // Related themes (same category, excluding current)
    const relatedThemes = themes
        .filter((t) => t.category === theme?.category && t.id !== id)
        .slice(0, 3);

    // Category labels
    const categoryLabels = {
        birthday: 'Birthday',
        wedding: 'Wedding',
        babyshower: 'Baby Shower',
    };

    // 404 state
    if (!theme) {
        return (
            <div className="pt-24 min-h-screen flex flex-col items-center justify-center bg-blush text-center px-4">
                <p className="font-playfair font-bold text-5xl text-charcoal mb-4">Theme Not Found</p>
                <p className="font-poppins text-gray-500 text-lg mb-8">
                    The theme you're looking for doesn't exist or may have been removed.
                </p>
                <Link
                    to="/gallery"
                    className="bg-rose-gradient text-white px-8 py-3 rounded-full text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg transition-all duration-200"
                >
                    Browse All Themes
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-20 min-h-screen bg-white">
            <Breadcrumbs items={[{ to: '/', label: 'Home' }, { to: '/gallery', label: 'Gallery' }, { label: theme.title }]} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">

                    {/* ─── Left: Image ─── */}
                    <AnimatedSection>
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-soft-lg aspect-[4/3]">
                            <img
                                src={theme.image}
                                alt={theme.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient overlay on image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />

                            {/* Badges */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold font-poppins text-charcoal">
                                    {categoryLabels[theme.category]}
                                </span>
                                {theme.popular && (
                                    <span className="px-3 py-1.5 bg-rose-gradient text-white rounded-full text-xs font-semibold font-poppins">
                                        ⭐ Popular
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Price card overlay */}
                        <div className="absolute -bottom-5 -right-3 bg-white rounded-2xl shadow-soft-lg px-6 py-4 text-center">
                            <p className="font-poppins text-gray-400 text-xs mb-0.5">Starting from</p>
                            <p className="font-playfair font-bold text-rose-gold-dark text-2xl">{theme.price}</p>
                        </div>
                    </div>
                    </AnimatedSection>

                    {/* ─── Right: Details ─── */}
                    <AnimatedSection delay={0.15}>
                    <div className="lg:pt-4">
                        <h1 className="font-playfair font-bold text-charcoal text-3xl md:text-4xl leading-tight mb-4">
                            {theme.title}
                        </h1>

                        {/* Divider */}
                        <div className="w-16 h-1 bg-rose-gradient rounded-full mb-5" />

                        <p className="font-poppins text-gray-500 text-base leading-relaxed mb-8">
                            {theme.description}
                        </p>

                        {/* What's Included */}
                        <div className="bg-blush rounded-2xl p-6 mb-8">
                            <h3 className="font-playfair font-bold text-charcoal text-xl mb-4">
                                ✨ What's Included
                            </h3>
                            <ul className="space-y-3">
                                {theme.includes.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-rose-gradient rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="font-poppins text-charcoal-light text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Important note */}
                        <div className="flex items-start gap-3 bg-white border border-blush-dark rounded-xl p-4 mb-8">
                            <span className="text-xl flex-shrink-0">💡</span>
                            <p className="font-poppins text-gray-500 text-sm leading-relaxed">
                                <strong className="text-charcoal">Note:</strong> Prices vary by location and exact requirements.
                                Contact us for a custom quote tailored to your event.
                            </p>
                        </div>

                        {/* Share */}
                        <div className="mb-6">
                            <ShareButtons title={theme.title} />
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to={`/book?theme=${theme.id}`}
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-rose-gradient text-white px-6 py-4 rounded-2xl text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-200"
                            >
                                🎉 Book This Theme
                            </Link>
                            <a
                                href={`https://wa.me/919971054664?text=Hi! I'm interested in the "${theme.title}" package.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-charcoal text-white px-6 py-4 rounded-2xl text-sm font-semibold font-poppins hover:bg-charcoal-light transition-all duration-200"
                            >
                                💬 Enquire on WhatsApp
                            </a>
                        </div>
                    </div>
                    </AnimatedSection>
                </div>

                {/* ─── Related Themes ─── */}
                {relatedThemes.length > 0 && (
                    <AnimatedSection>
                    <div className="mt-16 sm:mt-20">
                        <h2 className="font-playfair font-bold text-charcoal text-2xl sm:text-3xl mb-2">
                            You May Also Like
                        </h2>
                        <div className="w-12 h-1 bg-rose-gradient rounded-full mb-6 sm:mb-8" />
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                            {relatedThemes.map((t, i) => (
                                <AnimatedItem key={t.id} index={i}>
                                    <ThemeCard theme={t} compact />
                                </AnimatedItem>
                            ))}
                        </div>
                    </div>
                    </AnimatedSection>
                )}

                {/* Back Button */}
                <div className="mt-10 text-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-charcoal font-poppins text-sm font-medium transition-colors duration-200"
                    >
                        ← Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThemeDetails;
