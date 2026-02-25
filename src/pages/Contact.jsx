import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';

/* ─── Contact information ─── */
const contactInfo = [
    {
        icon: '📞',
        title: 'Phone',
        value: '+91 99710 54664',
        href: 'tel:+919971054664',
        desc: 'Kapil — Support & Sales',
    },
    {
        icon: '📧',
        title: 'Email',
        value: 'hello@aromaevents.in',
        href: 'mailto:hello@aromaevents.in',
        desc: 'We reply within 24 hours',
    },
    {
        icon: '💬',
        title: 'WhatsApp',
        value: '+91 99710 54664',
        href: 'https://wa.me/919971054664',
        desc: 'Kapil — Support & Sales',
    },
    {
        icon: '📸',
        title: 'Instagram',
        value: '@aromaevents',
        href: 'https://instagram.com/aromaevents',
        desc: 'See our latest work',
    },
];

const initialForm = { name: '', email: '', phone: '', message: '' };

/**
 * Contact — Contact information and simple contact form
 */
const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name is required.';
        if (!form.email.trim()) errs.email = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email.';
        if (!form.message.trim()) errs.message = 'Message is required.';
        return errs;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
        if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1000));
        console.log('📨 Contact Form:', form);
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Header */}
            <div className="bg-blush py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <SectionTitle
                            tag="Get In Touch"
                            title="Let's Talk About Your Event"
                            subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
                        />
                    </AnimatedSection>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                <div className="grid lg:grid-cols-2 gap-10 sm:gap-12">

                    {/* ─── Left: Contact Info ─── */}
                    <AnimatedSection>
                    <div>
                        <h2 className="font-playfair font-bold text-charcoal text-2xl mb-2">
                            Contact Information
                        </h2>
                        <div className="w-12 h-1 bg-rose-gradient rounded-full mb-6" />
                        <p className="font-poppins text-gray-500 text-sm leading-relaxed mb-8">
                            Based in Bangalore, we serve Koramangala, Indiranagar, Whitefield, and across Karnataka.
                            Whether you're planning a birthday bash, a fairy-tale wedding, or a sweet baby shower — we're here to help.
                        </p>

                        {/* Contact Cards */}
                        <div className="space-y-4 mb-8 sm:mb-10">
                            {contactInfo.map((item, i) => (
                                <AnimatedItem key={item.title} index={i}>
                                <a
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="flex items-center gap-4 bg-blush rounded-2xl p-4 hover:shadow-soft transition-all duration-200 group"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-card group-hover:scale-110 transition-transform duration-200">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="font-poppins font-semibold text-charcoal text-sm">{item.title}</p>
                                        <p className="font-poppins text-rose-gold-dark font-medium text-sm">{item.value}</p>
                                        <p className="font-poppins text-gray-400 text-xs">{item.desc}</p>
                                    </div>
                                    <div className="ml-auto text-gray-300 group-hover:text-rose-gold transition-colors duration-200">→</div>
                                </a>
                                </AnimatedItem>
                            ))}
                        </div>

                        {/* Google Maps */}
                        <div className="rounded-2xl overflow-hidden shadow-card h-48 sm:h-56">
                            <iframe
                                title="Aroma Events - Bangalore"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.6600700944!2d77.3507!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!2zQmVuZ2FsdXJ1LCBLYXJuYXRha2E!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full min-h-[192px]"
                            />
                        </div>
                        <p className="font-poppins text-gray-400 text-xs mt-2">📍 Bangalore, Karnataka • Serving all areas</p>
                    </div>
                    </AnimatedSection>

                    {/* ─── Right: Contact Form ─── */}
                    <AnimatedSection delay={0.15}>
                    <div className="bg-blush rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                        {submitted ? (
                            <div className="text-center py-10 animate-fade-in">
                                <div className="w-16 h-16 bg-rose-gradient rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-soft">
                                    ✅
                                </div>
                                <h3 className="font-playfair font-bold text-charcoal text-2xl mb-2">Message Sent!</h3>
                                <p className="font-poppins text-gray-500 text-sm leading-relaxed mb-6">
                                    Thank you, {form.name}! We've received your message and will get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => { setForm(initialForm); setSubmitted(false); }}
                                    className="bg-rose-gradient text-white px-6 py-3 rounded-xl text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg transition-all duration-200"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="font-playfair font-bold text-charcoal text-xl mb-1">Send a Message</h3>
                                <div className="w-10 h-0.5 bg-rose-gradient rounded-full mb-6" />

                                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                    {/* Name + Phone */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <ContactField id="name" name="name" label="Your Name" type="text" placeholder="Priya Sharma" value={form.name} onChange={handleChange} error={errors.name} required />
                                        <ContactField id="phone" name="phone" label="Phone (Optional)" type="tel" placeholder="+91 99710 54664" value={form.phone} onChange={handleChange} />
                                    </div>

                                    {/* Email */}
                                    <ContactField id="email" name="email" label="Email Address" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} error={errors.email} required />

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block font-poppins font-medium text-charcoal text-sm mb-1.5">
                                            Message <span className="text-rose-gold-dark">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your event or ask us anything…"
                                            className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm text-charcoal bg-white transition-colors duration-200 outline-none focus:ring-2 focus:ring-rose-gold/40 resize-none placeholder-gray-300 ${errors.message ? 'border-red-400' : 'border-blush-dark focus:border-rose-gold'
                                                }`}
                                        />
                                        {errors.message && <p className="mt-1 text-red-500 text-xs font-poppins">{errors.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full flex items-center justify-center gap-2 bg-rose-gradient text-white py-3.5 px-8 rounded-xl text-sm font-semibold font-poppins shadow-soft hover:shadow-soft-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                                </svg>
                                                Sending…
                                            </>
                                        ) : (
                                            '📨 Send Message'
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

/* ─── Helper: ContactField ─── */
const ContactField = ({ id, name, label, type, placeholder, value, onChange, error, required }) => (
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
            className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm text-charcoal bg-white transition-colors duration-200 outline-none focus:ring-2 focus:ring-rose-gold/40 placeholder-gray-300 ${error ? 'border-red-400' : 'border-blush-dark focus:border-rose-gold'
                }`}
        />
        {error && <p className="mt-1 text-red-500 text-xs font-poppins">{error}</p>}
    </div>
);

export default Contact;
