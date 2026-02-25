import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Footer — Full-featured footer with quick links, contact info, and social media
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { to: '/', label: 'Home' },
        { to: '/gallery', label: 'Gallery' },
        { to: '/book', label: 'Book Now' },
        { to: '/contact', label: 'Contact Us' },
    ];

    const categories = [
        'Birthday Decoration',
        'Wedding Decoration',
        'Baby Shower Setup',
        'Corporate Events',
        'Anniversary Parties',
    ];

    return (
        <footer className="bg-charcoal text-white">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-full bg-rose-gradient flex items-center justify-center shadow-soft">
                                <span className="text-white font-playfair font-bold text-xl">A</span>
                            </div>
                            <div className="leading-tight">
                                <span className="font-playfair font-bold text-white text-xl block leading-none">Aroma</span>
                                <span className="text-rose-gold text-xs font-poppins tracking-widest uppercase">Events</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm font-poppins leading-relaxed mb-5">
                            Crafting beautiful memories through elegant event decoration.
                            Every celebration deserves to be extraordinary.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {[
                                { label: 'Instagram', icon: 'IG', href: 'https://instagram.com' },
                                { label: 'WhatsApp', icon: 'WA', href: 'https://wa.me/919971054664' },
                                { label: 'Facebook', icon: 'FB', href: 'https://facebook.com' },
                            ].map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-white/10 hover:bg-rose-gold flex items-center justify-center text-xs font-bold font-poppins transition-colors duration-200"
                                    aria-label={s.label}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-playfair font-semibold text-white text-lg mb-5">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-gray-400 hover:text-rose-gold text-sm font-poppins transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-playfair font-semibold text-white text-lg mb-5">Our Services</h4>
                        <ul className="space-y-2.5">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <span className="text-gray-400 text-sm font-poppins flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-gold" />
                                        {cat}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-playfair font-semibold text-white text-lg mb-5">Get In Touch</h4>
                        <ul className="space-y-3">
                            {[
                                { icon: '📞', text: 'Kapil: +91 99710 54664', href: 'tel:+919971054664' },
                                { icon: '📧', text: 'hello@aromaevents.in', href: 'mailto:hello@aromaevents.in' },
                                { icon: '💬', text: 'WhatsApp (Kapil)', href: 'https://wa.me/919971054664' },
                                { icon: '📍', text: 'Mumbai, Maharashtra', href: null },
                            ].map((item, i) => (
                                <li key={i}>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="flex items-center gap-3 text-gray-400 hover:text-rose-gold text-sm font-poppins transition-colors duration-200"
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        >
                                            <span className="text-base">{item.icon}</span>
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-3 text-gray-400 text-sm font-poppins">
                                            <span className="text-base">{item.icon}</span>
                                            {item.text}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-xs font-poppins text-center sm:text-left">
                        © {currentYear} Aroma Events. All rights reserved. Crafted with ❤️
                    </p>
                    <div className="flex gap-4">
                        <Link to="/contact" className="text-gray-500 hover:text-rose-gold text-xs font-poppins transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <Link to="/contact" className="text-gray-500 hover:text-rose-gold text-xs font-poppins transition-colors duration-200">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
