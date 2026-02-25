import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Breadcrumbs — Navigation trail for Gallery, Theme, Blog
 */
const Breadcrumbs = ({ items }) => (
    <nav className="bg-blush dark:bg-charcoal/50 border-b border-blush-dark dark:border-charcoal-light overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <ol className="flex items-center gap-2 text-xs sm:text-sm font-poppins min-w-0 flex-wrap">
                {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 flex-shrink-0">
                        {i > 0 && <span className="text-gray-300 dark:text-gray-600">/</span>}
                        {item.to ? (
                            <Link
                                to={item.to}
                                className="text-gray-500 dark:text-gray-400 hover:text-rose-gold-dark dark:hover:text-rose-gold transition-colors whitespace-nowrap"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-charcoal dark:text-white font-medium truncate">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    </nav>
);

export default Breadcrumbs;
