import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

/**
 * Navbar — Sticky navigation with mobile hamburger menu
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const location = useLocation();
    const { dark, toggle: toggleDark } = useTheme();
    const { lang, setLang, t } = useLanguage();

    // Detect scroll to add glass effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Close language dropdown on click outside
    useEffect(() => {
        if (!langOpen) return;
        const close = () => setLangOpen(false);
        window.addEventListener('click', close);
        return () => window.removeEventListener('click', close);
    }, [langOpen]);

    const navLinks = [
        { to: '/', label: t('nav.home') },
        { to: '/gallery', label: t('nav.gallery') },
        { to: '/book', label: t('nav.book') },
        { to: '/contact', label: t('nav.contact') },
        { to: '/blog', label: t('nav.blog') },
    ];

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${dark
                    ? 'bg-charcoal/95 dark:bg-charcoal/95 backdrop-blur-md shadow-card'
                    : scrolled
                        ? 'bg-white/90 backdrop-blur-md shadow-card'
                        : 'bg-white/70 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-full bg-rose-gradient flex items-center justify-center shadow-soft">
                            <span className="text-white font-playfair font-bold text-lg">A</span>
                        </div>
                        <div className="leading-tight">
                            <span className="font-playfair font-bold text-charcoal dark:text-white text-lg block leading-none">
                                Aroma
                            </span>
                            <span className="text-rose-gold-dark dark:text-rose-gold text-xs font-poppins tracking-widest font-medium uppercase">
                                Events
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === '/'}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-full text-sm font-medium font-poppins transition-all duration-200 ${isActive
                                        ? 'bg-rose-gold text-white shadow-soft'
                                        : 'text-charcoal dark:text-gray-200 hover:text-rose-gold-dark dark:hover:text-rose-gold hover:bg-blush dark:hover:bg-charcoal-light'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* CTA + Dark mode + Language + Hamburger */}
                    <div className="flex items-center gap-2">
                        {/* Dark mode toggle */}
                        <button
                            onClick={toggleDark}
                            className="p-2 rounded-xl text-charcoal dark:text-white hover:bg-blush dark:hover:bg-charcoal-light transition-colors"
                            aria-label={dark ? 'Light mode' : 'Dark mode'}
                        >
                            {dark ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>

                        {/* Language selector */}
                        <div className="relative" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
                                className="px-2 py-1.5 rounded-lg text-xs font-medium font-poppins text-charcoal dark:text-white hover:bg-blush dark:hover:bg-charcoal-light transition-colors uppercase"
                            >
                                {lang}
                            </button>
                            {langOpen && (
                                <div className="absolute right-0 top-full mt-1 py-1 bg-white dark:bg-charcoal rounded-lg shadow-card border border-blush-dark dark:border-charcoal-light min-w-[80px]">
                                    {['en', 'kn', 'hi'].map((l) => (
                                        <button
                                            key={l}
                                            onClick={() => { setLang(l); setLangOpen(false); }}
                                            className={`block w-full text-left px-3 py-2 text-sm font-poppins ${lang === l ? 'bg-rose-gold/20 text-rose-gold-dark dark:text-rose-gold' : 'text-charcoal dark:text-gray-300 hover:bg-blush dark:hover:bg-charcoal-light'}`}
                                        >
                                            {l === 'en' ? 'English' : l === 'kn' ? 'ಕನ್ನಡ' : 'हिंदी'}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to="/book"
                            className="hidden sm:inline-flex items-center gap-2 bg-rose-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-200"
                        >
                            {t('nav.book')}
                        </Link>

                        {/* Hamburger button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 rounded-xl text-charcoal dark:text-white hover:bg-blush dark:hover:bg-charcoal-light transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <div className="w-5 h-4 flex flex-col justify-between">
                                <span
                                    className={`block h-0.5 bg-charcoal dark:bg-white rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                                />
                                <span
                                    className={`block h-0.5 bg-charcoal dark:bg-white rounded transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`}
                                />
                                <span
                                    className={`block h-0.5 bg-charcoal dark:bg-white rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="md:hidden overflow-hidden"
                >
                <div className="bg-white/95 backdrop-blur-md border-t border-blush-dark px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === '/'}
                            className={({ isActive }) =>
                                `block px-4 py-3 rounded-xl text-sm font-medium font-poppins transition-all duration-200 ${isActive
                                    ? 'bg-rose-gold text-white'
                                    : 'text-charcoal hover:bg-blush'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/book"
                        className="block mt-2 text-center bg-rose-gradient text-white px-5 py-3 rounded-xl text-sm font-semibold font-poppins shadow-soft min-h-[44px] flex items-center justify-center"
                    >
                        {t('nav.book')}
                    </Link>
                </div>
                </motion.div>
            )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
