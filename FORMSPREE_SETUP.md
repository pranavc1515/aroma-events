# Formspree Setup Guide

This website uses Formspree for form submissions (Book Now, Contact, Newsletter). To receive submissions:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create 3 forms:
   - **Book Now** – for booking requests
   - **Contact** – for general contact messages
   - **Newsletter** – for email signups

3. Copy each form's ID (e.g. `xyzabcde` from `https://formspree.io/f/xyzabcde`).

4. Either:

   **Option A: Environment variables** (recommended for production)
   
   Create a `.env` file in the project root:
   ```
   VITE_FORMSPREE_BOOK=your_book_form_id
   VITE_FORMSPREE_CONTACT=your_contact_form_id
   VITE_FORMSPREE_NEWSLETTER=your_newsletter_form_id
   ```

   **Option B: Edit config directly**
   
   Edit `src/config/forms.js` and replace the placeholder IDs with your actual Formspree form IDs.

5. Rebuild the site: `npm run build`

Form submissions will then be delivered to your Formspree dashboard and your configured email.
