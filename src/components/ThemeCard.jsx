import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ThemeCard — Reusable card for displaying a decoration theme
 * Props:
 *  - theme: theme object from themes.js
 *  - compact: boolean for smaller card variant
 */
const ThemeCard = ({ theme, compact = false }) => {
    const categoryLabels = {
        birthday: 'Birthday',
        wedding: 'Wedding',
        babyshower: 'Baby Shower',
    };

    const categoryColors = {
        birthday: 'bg-rose-gold/20 text-rose-gold-dark',
        wedding: 'bg-purple-100 text-purple-700',
        babyshower: 'bg-sky-100 text-sky-700',
    };

    return (
        <Link
            to={`/theme/${theme.id}`}
            className={`group block bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 ${compact ? 'h-72' : 'h-80'
                }`}
        >
            {/* Image Section */}
            <div className={`relative overflow-hidden ${compact ? 'h-44' : 'h-52'}`}>
                <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold font-poppins backdrop-blur-sm ${categoryColors[theme.category] || 'bg-white/80 text-charcoal'
                            }`}
                    >
                        {categoryLabels[theme.category] || theme.category}
                    </span>
                </div>

                {/* Popular Badge */}
                {theme.popular && (
                    <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold font-poppins bg-rose-gradient text-white shadow-soft">
                            ⭐ Popular
                        </span>
                    </div>
                )}

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-white text-charcoal px-4 py-2 rounded-full text-xs font-semibold font-poppins shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        View Details →
                    </span>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                    <h3 className="font-playfair font-semibold text-charcoal text-base leading-snug line-clamp-2 group-hover:text-rose-gold-dark transition-colors duration-200 mb-1">
                        {theme.title}
                    </h3>
                    {!compact && (
                        <p className="text-gray-500 text-xs font-poppins leading-relaxed line-clamp-2">
                            {theme.description}
                        </p>
                    )}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mt-3">
                    <div>
                        <span className="text-xs text-gray-400 font-poppins block">Starting from</span>
                        <span className="font-playfair font-bold text-rose-gold-dark text-lg">{theme.price}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blush flex items-center justify-center group-hover:bg-rose-gold transition-colors duration-200">
                        <svg
                            className="w-4 h-4 text-rose-gold-dark group-hover:text-white transition-colors duration-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ThemeCard;
