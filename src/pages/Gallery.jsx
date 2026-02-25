import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Breadcrumbs from '../components/Breadcrumbs';
import ImageSkeleton from '../components/ImageSkeleton';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';

/**
 * Gallery images mapped from the images folder
 * All 16 images used across 3 categories
 */
const galleryImages = [
    { id: 1, src: '/images/1.jpeg', category: 'birthday', title: 'Rose Birthday Setup' },
    { id: 2, src: '/images/2.jpeg', category: 'birthday', title: 'Golden Glam Birthday' },
    { id: 3, src: '/images/3.jpeg', category: 'birthday', title: 'Princess Party Decor' },
    { id: 4, src: '/images/4.jpeg', category: 'wedding', title: 'Elegant White Wedding' },
    { id: 5, src: '/images/5.jpeg', category: 'wedding', title: 'Royal Garden Wedding' },
    { id: 6, src: '/images/6.jpeg', category: 'babyshower', title: 'Pastel Cloud Shower' },
    { id: 7, src: '/images/7.jpeg', category: 'babyshower', title: 'Safari Baby Shower' },
    { id: 8, src: '/images/8.jpeg', category: 'birthday', title: 'Midnight Glam Night' },
    { id: 9, src: '/images/9.jpeg', category: 'wedding', title: 'Floral Wedding Arch' },
    { id: 10, src: '/images/10.jpeg', category: 'babyshower', title: 'Dreamy Pink Shower' },
    { id: 11, src: '/images/12.jpeg', category: 'birthday', title: 'Fairy Light Birthday' },
    { id: 12, src: '/images/14.jpeg', category: 'wedding', title: 'Candlelit Romance' },
    { id: 13, src: '/images/16.jpeg', category: 'babyshower', title: 'Floral Cloud Shower' },
    { id: 14, src: '/images/18.jpeg', category: 'birthday', title: 'Confetti Carnival Setup' },
    { id: 15, src: '/images/WhatsApp Image 2026-02-24 at 12.13.13 PM.jpeg', category: 'birthday', title: 'Birthday Gala Decor' },
    { id: 16, src: '/images/WhatsApp Image 2026-02-24 at 12.13.15 PM.jpeg', category: 'wedding', title: 'Wedding Venue Setup' },
];

const filterTabs = [
    { key: 'all', label: 'All' },
    { key: 'birthday', label: 'Birthdays' },
    { key: 'wedding', label: 'Weddings' },
    { key: 'babyshower', label: 'Baby Shower' },
];

/**
 * Gallery — Photo grid with category filters and modal preview
 */
const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);
    const [loadedIds, setLoadedIds] = useState(new Set());

    // Filter images based on active tab
    const filteredImages =
        activeFilter === 'all'
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeFilter);

    // Open modal
    const openModal = useCallback((img) => setSelectedImage(img), []);

    // Close modal
    const closeModal = useCallback(() => setSelectedImage(null), []);

    // Navigate in modal
    const navigate = useCallback(
        (direction) => {
            if (!selectedImage) return;
            const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
            const nextIndex =
                direction === 'next'
                    ? (currentIndex + 1) % filteredImages.length
                    : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
            setSelectedImage(filteredImages[nextIndex]);
        },
        [selectedImage, filteredImages]
    );

    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKey = (e) => {
            if (!selectedImage) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') navigate('next');
            if (e.key === 'ArrowLeft') navigate('prev');
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [selectedImage, closeModal, navigate]);

    return (
        <div className="pt-20 min-h-screen bg-white">
            <Breadcrumbs items={[{ to: '/', label: 'Home' }, { label: 'Gallery' }]} />

            {/* Page Header */}
            <div className="bg-blush dark:bg-charcoal/50 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
<SectionTitle
                        tag="Our Portfolio"
                        title="Birthday Party Gallery"
                        subtitle="Browse our birthday setups — kids parties, milestone celebrations & themed decorations across Bangalore."
                    />
                    </AnimatedSection>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                {/* Filter Tabs */}
                <AnimatedSection>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
                    {filterTabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveFilter(tab.key)}
                            className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-semibold font-poppins transition-all duration-200 min-h-[44px] ${activeFilter === tab.key
                                    ? 'bg-rose-gradient text-white shadow-soft'
                                    : 'bg-blush text-charcoal hover:bg-blush-dark'
                                }`}
                        >
                            {tab.label}
                            <span className="ml-2 text-xs opacity-70">
                                ({tab.key === 'all' ? galleryImages.length : galleryImages.filter((i) => i.category === tab.key).length})
                            </span>
                        </button>
                    ))}
                </div>
                </AnimatedSection>

                {/* Image Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
                >
                    {filteredImages.map((img, i) => (
                        <AnimatedItem key={img.id} index={i}>
                        <motion.div
                            layout
                            onClick={() => openModal(img)}
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-soft-lg"
                            style={{ aspectRatio: '1 / 1' }}
                        >
                            {!loadedIds.has(img.id) && (
                                <ImageSkeleton className="absolute inset-0 w-full h-full" />
                            )}
                            <img
                                src={img.src}
                                alt={img.title}
                                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${loadedIds.has(img.id) ? 'opacity-100' : 'opacity-0'}`}
                                loading="lazy"
                                onLoad={() => setLoadedIds((prev) => new Set(prev).add(img.id))}
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                <p className="text-white font-poppins text-xs font-semibold leading-tight">{img.title}</p>
                                <p className="text-white/70 font-poppins text-xs capitalize">{img.category}</p>
                            </div>

                            {/* Zoom icon */}
                            <div className="absolute top-3 right-3 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-100">
                                <svg className="w-3.5 h-3.5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </motion.div>
                        </AnimatedItem>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-20">
                        <p className="font-poppins text-gray-400 text-lg">No images found for this category.</p>
                    </div>
                )}
            </div>

            {/* ─────────── Modal ─────────── */}
            <AnimatePresence>
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
                    onClick={closeModal}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative max-w-4xl w-full max-h-[90vh] rounded-xl sm:rounded-2xl overflow-hidden shadow-soft-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image */}
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="w-full max-h-[80vh] object-contain bg-charcoal"
                        />

                        {/* Caption */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal to-transparent p-5">
                            <p className="text-white font-playfair font-semibold text-lg">{selectedImage.title}</p>
                            <p className="text-white/60 font-poppins text-sm capitalize">{selectedImage.category}</p>
                        </div>

                        {/* Close */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        {/* Prev */}
                        <button
                            onClick={() => navigate('prev')}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-rose-gold rounded-full flex items-center justify-center text-white transition-all duration-200"
                            aria-label="Previous"
                        >
                            ‹
                        </button>

                        {/* Next */}
                        <button
                            onClick={() => navigate('next')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-rose-gold rounded-full flex items-center justify-center text-white transition-all duration-200"
                            aria-label="Next"
                        >
                            ›
                        </button>
                    </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
