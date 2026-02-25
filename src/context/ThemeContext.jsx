import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
    return ctx;
};

export const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(() => {
        if (typeof window === 'undefined') return false;
        const saved = localStorage.getItem('aroma-dark-mode');
        if (saved !== null) return saved === 'true';
        return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
    });

    useEffect(() => {
        localStorage.setItem('aroma-dark-mode', String(dark));
        document.documentElement.classList.toggle('dark', dark);
    }, [dark]);

    const toggle = () => setDark((d) => !d);

    return (
        <ThemeContext.Provider value={{ dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};
