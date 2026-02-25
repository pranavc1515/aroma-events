import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ThemeDetails from './pages/ThemeDetails';
import BookNow from './pages/BookNow';
import Contact from './pages/Contact';

/**
 * ScrollToTop — Scrolls to top of page on every route change
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);
    return null;
};

/**
 * Layout — Wraps pages with Navbar and Footer
 */
const Layout = ({ children }) => (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
    </div>
);

/**
 * App — Root application with full React Router setup
 */
const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/theme/:id" element={<ThemeDetails />} />
                    <Route path="/book" element={<BookNow />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* 404 catch-all */}
                    <Route
                        path="*"
                        element={
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
                        }
                    />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
