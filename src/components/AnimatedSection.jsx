import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedSection — Scroll-triggered fade/slide animation for sections
 * Props: children, className, delay, once (default true)
 */
export const AnimatedSection = ({ children, className = '', delay = 0, once = true }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, margin: '-50px' }}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

/**
 * AnimatedItem — Staggered list item (use with AnimatedContainer)
 */
export const AnimatedItem = ({ children, className = '', index = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

/**
 * AnimatedFade — Simple fade in
 */
export const AnimatedFade = ({ children, className = '', delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

/**
 * AnimatedScale — Scale in (for modals, overlays)
 */
export const AnimatedScale = ({ children, className = '', isOpen }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

export default AnimatedSection;
