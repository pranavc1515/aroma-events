/**
 * Formspree form IDs for form submissions.
 * Sign up at https://formspree.io and create forms for:
 * - Book Now
 * - Contact
 * - Newsletter
 * Then replace the IDs below with your actual form IDs.
 */
export const FORMS = {
    book: import.meta.env.VITE_FORMSPREE_BOOK || 'YOUR_BOOK_FORM_ID',
    contact: import.meta.env.VITE_FORMSPREE_CONTACT || 'YOUR_CONTACT_FORM_ID',
    newsletter: import.meta.env.VITE_FORMSPREE_NEWSLETTER || 'YOUR_NEWSLETTER_FORM_ID',
};
