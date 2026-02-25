import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar — Sticky navigation with mobile hamburger menu
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/gallery', label: 'Gallery' },
        { to: '/book', label: 'Book Now' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
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
                            <span className="font-playfair font-bold text-charcoal text-lg block leading-none">
                                Aroma
                            </span>
                            <span className="text-rose-gold-dark text-xs font-poppins tracking-widest font-medium uppercase">
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
                                        : 'text-charcoal hover:text-rose-gold-dark hover:bg-blush'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/book"
                            className="hidden sm:inline-flex items-center gap-2 bg-rose-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-200"
                        >
                            Book Now
                        </Link>

                        {/* Hamburger button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-xl text-charcoal hover:bg-blush transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <div className="w-5 h-4 flex flex-col justify-between">
                                <span
                                    className={`block h-0.5 bg-charcoal rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''
                                        }`}
                                />
                                <span
                                    className={`block h-0.5 bg-charcoal rounded transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''
                                        }`}
                                />
                                <span
                                    className={`block h-0.5 bg-charcoal rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                                        }`}
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
                        Book Now
                    </Link>
                </div>
                </motion.div>
            )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
