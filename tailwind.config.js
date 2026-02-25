/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'rose-gold': '#E8B4B8',
                'rose-gold-dark': '#D4919B',
                'rose-gold-light': '#F5D5D8',
                'charcoal': '#1F2937',
                'charcoal-light': '#374151',
                'blush': '#FDF2F3',
                'blush-dark': '#FAE4E6',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'playfair': ['"Playfair Display"', 'serif'],
            },
            boxShadow: {
                'soft': '0 4px 20px rgba(232, 180, 184, 0.25)',
                'soft-lg': '0 8px 40px rgba(232, 180, 184, 0.35)',
                'card': '0 2px 15px rgba(31, 41, 55, 0.08)',
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #FDF2F3 0%, #FAE4E6 50%, #F5D5D8 100%)',
                'rose-gradient': 'linear-gradient(135deg, #E8B4B8 0%, #D4919B 100%)',
                'overlay': 'linear-gradient(to top, rgba(31,41,55,0.85) 0%, rgba(31,41,55,0.3) 60%, transparent 100%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
            },
        },
    },
    plugins: [],
}
