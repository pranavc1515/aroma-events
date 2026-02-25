import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { AnimatedSection } from '../components/AnimatedSection';
import { themes } from '../data/themes';

/* ─── Initial form state ─── */
const initialForm = {
    fullName: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    location: '',
    budgetRange: '',
    notes: '',
    selectedTheme: '',
};

/**
 * BookNow — Booking form with full validation and success feedback
 */
const BookNow = () => {
    const [searchParams] = useSearchParams();
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    // Pre-fill theme from URL param (e.g. coming from ThemeDetails page)
    useEffect(() => {
        const themeId = searchParams.get('theme');
        if (themeId) {
            setForm((prev) => ({ ...prev, selectedTheme: themeId }));
        }
    }, [searchParams]);

    /* ─── Validation ─── */
    const validate = () => {
        const newErrors = {};
        if (!form.fullName.trim()) newErrors.fullName = 'Full name is required.';
        if (!form.phone.trim()) newErrors.phone = 'Phone number is required.';
        else if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone)) newErrors.phone = 'Enter a valid phone number.';
        if (!form.email.trim()) newErrors.email = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email address.';
        if (!form.eventType) newErrors.eventType = 'Please select an event type.';
        if (!form.eventDate) newErrors.eventDate = 'Please select a date.';
        if (!form.location.trim()) newErrors.location = 'Location is required.';
        if (!form.budgetRange) newErrors.budgetRange = 'Please select a budget range.';
        return newErrors;
    };

    /* ─── Handlers ─── */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            // Scroll to first error
            const firstErrorField = Object.keys(validationErrors)[0];
            document.getElementById(firstErrorField)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        // Simulate async submission
        setLoading(true);
        await new Promise((res) => setTimeout(res, 1200));
        console.log('📋 Booking Form Submission:', form);
        setLoading(false);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleReset = () => {
        setForm(initialForm);
        setErrors({});
        setSubmitted(false);
    };

    /* ─── Success Screen ─── */
    if (submitted) {
        return (
            <div className="pt-20 min-h-screen bg-blush flex items-center">
                <div className="max-w-lg mx-auto px-4 sm:px-6 py-20 text-center animate-fade-in">
                    <div className="w-24 h-24 bg-rose-gradient rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-soft-lg">
                        🎉
                    </div>
                    <h2 className="font-playfair font-bold text-charcoal text-4xl mb-3">Booking Received!</h2>
                    <div className="w-12 h-1 bg-rose-gradient rounded-full mx-auto mb-5" />
                    <p className="font-poppins text-gray-500 leading-relaxed mb-2">
                        Thank you, <strong className="text-charcoal">{form.fullName}</strong>! 🌸
                    </p>
                    <p className="font-poppins text-gray-500 leading-relaxed mb-8">
                        We've received your booking request and will get in touch with you on{' '}
                        <strong className="text-charcoal">{form.phone}</strong> or{' '}
                        <strong className="text-charcoal">{form.email}</strong> within 24 hours.
                    </p>
                    <div className="bg-white rounded-2xl shadow-card p-5 mb-8 text-left space-y-2">
                        <InfoRow label="Event Type" value={form.eventType} />
                        <InfoRow label="Event Date" value={form.eventDate} />
                        <InfoRow label="Location" value={form.location} />
                        <InfoRow label="Budget" value={form.budgetRange} />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleReset}
                            className="inline-flex items-center justify-center gap-2 bg-rose-gradient text-white px-8 py-3 rounded-2xl text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg transition-all duration-200"
                        >
                            Submit Another Booking
                        </button>
                        <a
                            href="https://wa.me/919971054664"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-charcoal text-white px-8 py-3 rounded-2xl text-sm font-semibold font-poppins hover:bg-charcoal-light transition-all duration-200"
                        >
                            💬 Chat With Us
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Header */}
            <div className="bg-blush py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                    <SectionTitle
                        tag="Get Started"
                        title="Book Your Birthday Party"
                        subtitle="Fill the form for a FREE custom quote. We reply within 24 hours. No commitment — just ideas & transparent pricing."
                    />
                    </AnimatedSection>
                </div>
            </div>

            <AnimatedSection delay={0.1}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Row 1: Full Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                            id="fullName"
                            name="fullName"
                            label="Full Name"
                            type="text"
                            placeholder="e.g. Priya Sharma"
                            value={form.fullName}
                            onChange={handleChange}
                            error={errors.fullName}
                            required
                        />
                        <FormField
                            id="phone"
                            name="phone"
                            label="Phone Number"
                            type="tel"
                            placeholder="e.g. +91 99710 54664"
                            value={form.phone}
                            onChange={handleChange}
                            error={errors.phone}
                            required
                        />
                    </div>

                    {/* Row 2: Email + Event Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            error={errors.email}
                            required
                        />
                        <div>
                            <label htmlFor="eventType" className="block font-poppins font-medium text-charcoal text-sm mb-1.5">
                                Event Type <span className="text-rose-gold-dark">*</span>
                            </label>
                            <select
                                id="eventType"
                                name="eventType"
                                value={form.eventType}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm text-charcoal bg-white transition-colors duration-200 outline-none focus:ring-2 focus:ring-rose-gold/40 ${errors.eventType ? 'border-red-400' : 'border-blush-dark focus:border-rose-gold'
                                    }`}
                            >
                                <option value="">Select event type…</option>
                                <option value="Birthday Party">Birthday Party</option>
                                <option value="Wedding Ceremony">Wedding Ceremony</option>
                                <option value="Baby Shower">Baby Shower</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Corporate Event">Corporate Event</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.eventType && (
                                <p className="mt-1 text-red-500 text-xs font-poppins">{errors.eventType}</p>
                            )}
                        </div>
                    </div>

                    {/* Row 3: Event Date + Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                            id="eventDate"
                            name="eventDate"
                            label="Event Date"
                            type="date"
                            value={form.eventDate}
                            onChange={handleChange}
                            error={errors.eventDate}
                            required
                            min={new Date().toISOString().split('T')[0]}
                        />
                        <FormField
                            id="location"
                            name="location"
                            label="Event Location"
                            type="text"
                            placeholder="e.g. Bangalore, Koramangala"
                            value={form.location}
                            onChange={handleChange}
                            error={errors.location}
                            required
                        />
                    </div>

                    {/* Row 4: Budget Range + Theme */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="budgetRange" className="block font-poppins font-medium text-charcoal text-sm mb-1.5">
                                Budget Range <span className="text-rose-gold-dark">*</span>
                            </label>
                            <select
                                id="budgetRange"
                                name="budgetRange"
                                value={form.budgetRange}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm text-charcoal bg-white transition-colors duration-200 outline-none focus:ring-2 focus:ring-rose-gold/40 ${errors.budgetRange ? 'border-red-400' : 'border-blush-dark focus:border-rose-gold'
                                    }`}
                            >
                                <option value="">Select budget range…</option>
                                <option value="Under ₹10,000">Under ₹10,000</option>
                                <option value="₹10,000 – ₹20,000">₹10,000 – ₹20,000</option>
                                <option value="₹20,000 – ₹40,000">₹20,000 – ₹40,000</option>
                                <option value="₹40,000 – ₹75,000">₹40,000 – ₹75,000</option>
                                <option value="₹75,000+">₹75,000+</option>
                            </select>
                            {errors.budgetRange && (
                                <p className="mt-1 text-red-500 text-xs font-poppins">{errors.budgetRange}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="selectedTheme" className="block font-poppins font-medium text-charcoal text-sm mb-1.5">
                                Preferred Theme <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <select
                                id="selectedTheme"
                                name="selectedTheme"
                                value={form.selectedTheme}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-blush-dark focus:border-rose-gold font-poppins text-sm text-charcoal bg-white transition-colors duration-200 outline-none focus:ring-2 focus:ring-rose-gold/40"
                            >
                                <option value="">No specific theme yet</option>
                                {themes.map((t) => (
                                    <option key={t.id} value={t.id}>
                                        {t.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                        <label htmlFor="notes" className="block font-poppins font-medium text-charcoal text-sm mb-1.5">
                            Additional Notes <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            rows={4}
                            value={form.notes}
                            onChange={handleChange}
                            placeholder="Tell us about your vision, special requests, or any questions you have…"
                            className="w-full px-4 py-3 rounded-xl border border-blush-dark focus:border-rose-gold font-poppins text-sm text-charcoal bg-white transition-colors duration-200 outline-none focus:ring-2 focus:ring-rose-gold/40 resize-none"
                        />
                    </div>

                    {/* Privacy note */}
                    <p className="text-xs font-poppins text-gray-400 text-center">
                        🔒 Your information is safe with us. We'll never share your details with third parties.
                    </p>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-rose-gradient text-white py-4 px-8 rounded-2xl text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                </svg>
                                Submitting…
                            </>
                        ) : (
                            '🎉 Submit Booking Request'
                        )}
                    </button>
                </form>
            </div>
            </AnimatedSection>
        </div>
    );
};

/* ─── Helper: FormField ─── */
const FormField = ({ id, name, label, type, placeholder, value, onChange, error, required, min }) => (
    <div>
        <label htmlFor={id} className="block font-poppins font-medium text-charcoal text-sm mb-1.5">
            {label} {required && <span className="text-rose-gold-dark">*</span>}
        </label>
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            min={min}
            className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm text-charcoal bg-white transition-colors duration-200 outline-none focus:ring-2 focus:ring-rose-gold/40 placeholder-gray-300 ${error ? 'border-red-400' : 'border-blush-dark focus:border-rose-gold'
                }`}
        />
        {error && <p className="mt-1 text-red-500 text-xs font-poppins">{error}</p>}
    </div>
);

/* ─── Helper: InfoRow (success screen) ─── */
const InfoRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-1.5 border-b border-blush-dark last:border-0">
        <span className="font-poppins text-gray-400 text-sm">{label}</span>
        <span className="font-poppins text-charcoal text-sm font-medium">{value || '—'}</span>
    </div>
);

export default BookNow;
