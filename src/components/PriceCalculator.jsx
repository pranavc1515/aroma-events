import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

/* Base prices by event type (₹) */
const basePrices = {
    'birthday': 12000,
    'wedding': 45000,
    'babyshower': 10000,
    'anniversary': 18000,
    'corporate': 25000,
};

/* Per-guest add-on (₹) */
const perGuest = {
    'birthday': 200,
    'wedding': 500,
    'babyshower': 150,
    'anniversary': 250,
    'corporate': 300,
};

/**
 * PriceCalculator — Rough estimate based on event type and guest count
 */
const PriceCalculator = () => {
    const [eventType, setEventType] = useState('birthday');
    const [guests, setGuests] = useState(30);

    const base = basePrices[eventType] || basePrices.birthday;
    const guestCost = (perGuest[eventType] || 200) * Math.max(0, guests - 20);
    const subtotal = base + guestCost;
    const estimate = Math.round(subtotal / 500) * 500;

    return (
        <AnimatedSection>
            <div className="bg-white dark:bg-charcoal rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-blush-dark dark:border-charcoal-light">
                <h3 className="font-playfair font-bold text-charcoal dark:text-white text-xl mb-1">Price Estimator</h3>
                <p className="font-poppins text-gray-500 dark:text-gray-400 text-sm mb-6">
                    Get a rough idea — final quote depends on theme & location.
                </p>

                <div className="space-y-5">
                    <div>
                        <label className="block font-poppins font-medium text-charcoal dark:text-gray-200 text-sm mb-2">
                            Event Type
                        </label>
                        <select
                            value={eventType}
                            onChange={(e) => setEventType(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-blush-dark dark:border-charcoal-light dark:bg-charcoal-light dark:text-white font-poppins text-sm outline-none focus:ring-2 focus:ring-rose-gold/40"
                        >
                            <option value="birthday">Birthday Party</option>
                            <option value="wedding">Wedding</option>
                            <option value="babyshower">Baby Shower</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="corporate">Corporate Event</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-poppins font-medium text-charcoal dark:text-gray-200 text-sm mb-2">
                            Number of Guests
                        </label>
                        <div className="flex items-center gap-3">
                            <input
                                type="range"
                                min="10"
                                max="150"
                                value={guests}
                                onChange={(e) => setGuests(Number(e.target.value))}
                                className="flex-1 h-2 bg-blush dark:bg-charcoal-light rounded-full appearance-none cursor-pointer accent-rose-gold"
                            />
                            <span className="font-poppins font-semibold text-charcoal dark:text-white w-12 text-right">
                                {guests}
                            </span>
                        </div>
                    </div>
                </div>

                <motion.div
                    key={`${eventType}-${guests}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-blush dark:bg-charcoal-light rounded-xl"
                >
                    <p className="font-poppins text-gray-500 dark:text-gray-400 text-sm">Estimated range</p>
                    <p className="font-playfair font-bold text-rose-gold-dark text-2xl dark:text-rose-gold">
                        ₹{estimate.toLocaleString('en-IN')} – ₹{(estimate + 5000).toLocaleString('en-IN')}
                    </p>
                    <Link
                        to="/book"
                        className="mt-3 inline-block text-rose-gold-dark dark:text-rose-gold font-semibold text-sm font-poppins hover:underline"
                    >
                        Get exact quote →
                    </Link>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default PriceCalculator;
