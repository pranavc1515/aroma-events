import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ThemeDetails from './pages/ThemeDetails';
import BookNow from './pages/BookNow';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

/**
 * ScrollToTop — Scrolls to top of page on every route change
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    return null;
};

const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
};

const pageTransition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };

const PageWrap = ({ children }) => (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
        {children}
    </motion.div>
);

/**
 * Layout — Wraps pages with Navbar and Footer
 */
const Layout = ({ children }) => (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
    </div>
);

/**
 * App — Root application with full React Router setup
 */
const AppRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrap><Home /></PageWrap>} />
                <Route path="/gallery" element={<PageWrap><Gallery /></PageWrap>} />
                <Route path="/theme/:id" element={<PageWrap><ThemeDetails /></PageWrap>} />
                <Route path="/book" element={<PageWrap><BookNow /></PageWrap>} />
                <Route path="/contact" element={<PageWrap><Contact /></PageWrap>} />
                <Route path="/blog" element={<PageWrap><Blog /></PageWrap>} />
                <Route path="/blog/:slug" element={<PageWrap><Blog /></PageWrap>} />
                    {/* 404 catch-all */}
                <Route
                    path="*"
                    element={
                        <PageWrap>
                            <div className="pt-32 pb-20 min-h-screen bg-blush flex flex-col items-center justify-center text-center px-4">
                                <p className="font-playfair font-bold text-8xl text-rose-gold mb-4">404</p>
                                <h1 className="font-playfair font-bold text-charcoal text-3xl mb-3">Page Not Found</h1>
                                <p className="font-poppins text-gray-500 mb-8">
                                    The page you're looking for doesn't exist.
                                </p>
                                <a
                                    href="/"
                                    className="bg-rose-gradient text-white px-8 py-3 rounded-full text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg transition-all duration-200"
                                >
                                    Go Home
                                </a>
                            </div>
                        </PageWrap>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

const App = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Layout>
            <AppRoutes />
        </Layout>
    </BrowserRouter>
);

export default App;
