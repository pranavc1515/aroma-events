import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        if (typeof window === 'undefined') return 'en';
        return localStorage.getItem('aroma-lang') || 'en';
    });

    useEffect(() => {
        localStorage.setItem('aroma-lang', lang);
    }, [lang]);

    const t = (key) => {
        const keys = key.split('.');
        let val = translations[lang];
        for (const k of keys) {
            val = val?.[k];
        }
        if (val != null) return val;
        val = translations.en;
        for (const k of keys) {
            val = val?.[k];
        }
        return val ?? key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
