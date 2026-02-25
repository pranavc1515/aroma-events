import React from 'react';

/**
 * SectionTitle — Reusable section header component
 * Props:
 *  - title: main heading text
 *  - subtitle: smaller description below title
 *  - centered: boolean for center alignment (default true)
 *  - light: boolean for light-coloured text on dark backgrounds
 *  - tag: small label above the title
 */
const SectionTitle = ({
    title,
    subtitle,
    centered = true,
    light = false,
    tag,
}) => {
    return (
        <div className={`mb-8 sm:mb-10 ${centered ? 'text-center' : 'text-left'}`}>
            {/* Tag label */}
            {tag && (
                <span
                    className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold font-poppins tracking-widest uppercase mb-3 ${light
                            ? 'bg-white/20 text-white/90'
                            : 'bg-rose-gold/20 text-rose-gold-dark'
                        }`}
                >
                    {tag}
                </span>
            )}

            {/* Main Heading */}
            <h2
                className={`font-playfair font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl leading-tight ${light ? 'text-white' : 'text-charcoal'
                    }`}
            >
                {title}
            </h2>

            {/* Decorative underline */}
            <div
                className={`mt-4 mx-auto h-1 w-16 rounded-full ${centered ? 'mx-auto' : 'mx-0'
                    } ${light ? 'bg-white/50' : 'bg-rose-gradient'}`}
            />

            {/* Subtitle */}
            {subtitle && (
                <p
                    className={`mt-4 font-poppins text-base md:text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''
                        } ${light ? 'text-white/80' : 'text-gray-500'}`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
