/**
 * Static blog posts for event planning tips and SEO
 */
export const blogPosts = [
    {
        id: 'birthday-planning-tips-bangalore',
        slug: 'birthday-planning-tips-bangalore',
        title: '10 Birthday Planning Tips for a Stress-Free Party in Bangalore',
        excerpt: 'Planning a birthday party in Bangalore? From booking venues to choosing themes, here are expert tips to make your celebration unforgettable.',
        date: '2025-02-20',
        category: 'Tips',
        image: '/images/1.jpeg',
        content: `
            Planning a birthday party can feel overwhelming, but with the right approach, it can be smooth and enjoyable. Here are our top 10 tips for Bangalore parents and party hosts:

            1. **Book Early** – Weekend slots fill up fast. Aim to book at least 2-3 weeks in advance, especially for popular themes.

            2. **Pick a Clear Theme** – Whether it's princess, unicorn, or golden glam, a clear theme helps decorators and vendors align with your vision.

            3. **Share Inspiration** – Send Pinterest or Instagram references. We love recreating looks you admire within your budget.

            4. **Consider the Venue** – Indoor vs outdoor, size, and access affect setup time and decor options.

            5. **Budget Wisely** – Allocate for decoration, cake, catering, and a small buffer for extras.

            6. **Plan Setup Time** – Allow 2-4 hours before guests arrive for our team to set up perfectly.

            7. **Communicate Dietary Needs** – If you're ordering food, share allergies and preferences early.

            8. **Hire a Photographer** – Your decor deserves to be captured. Book a photographer for key moments.

            9. **Keep Kids Entertained** – Games, activities, or a small play area keep little guests happy.

            10. **Relax and Enjoy** – You've planned well. Now savor the moment!
        `,
    },
    {
        id: 'princess-birthday-theme-ideas',
        slug: 'princess-birthday-theme-ideas',
        title: 'Princess Birthday Theme Ideas That Will Wow Your Little One',
        excerpt: 'Discover stunning princess party themes — from classic fairytale to modern twist. Perfect for ages 3-10.',
        date: '2025-02-15',
        category: 'Themes',
        image: '/images/3.jpeg',
        content: `
            Princess themes never go out of style. Here are some ideas to make your child's princess party magical:

            **Classic Fairytale** – Soft pinks, lavenders, and gold. Think castles, crowns, and wands.

            **Frozen-Inspired** – Ice blue, silver, and snowflakes. Perfect for Elsa fans.

            **Mermaid Princess** – Ocean blues, teals, and shimmer. Seashells and underwater vibes.

            **Modern Minimal** – Clean pastels, geometric shapes, and elegant balloons.

            **Garden Princess** – Florals, greenery, and a whimsical outdoor feel.

            Mix and match elements to create a unique setup. Share your ideas with us and we'll bring them to life!
        `,
    },
    {
        id: 'first-birthday-decoration-ideas',
        slug: 'first-birthday-decoration-ideas',
        title: 'First Birthday Decoration Ideas: From Soft Pastels to Bold Themes',
        excerpt: 'Your baby\'s first birthday deserves something special. Explore soft pastels, cloud themes, and smash cake setups.',
        date: '2025-02-10',
        category: 'Ideas',
        image: '/images/6.jpeg',
        content: `
            First birthdays are milestones. Here are trending decoration ideas:

            **Cloud & Stars** – Dreamy whites, soft blues, and fluffy cloud balloons. Great for gender-neutral celebrations.

            **Pastel Rainbow** – Soft pinks, mint, lavender, and peach. Sweet and photogenic.

            **Safari / Jungle** – Animals, greenery, and adventure vibes. Fun for both boys and girls.

            **Smash Cake Setup** – A dedicated corner for the baby's first cake moment. Easy to clean, super cute for photos.

            **Floral & Minimal** – Fresh or artificial florals with a clean backdrop. Timeless and elegant.

            Pro tip: First birthdays are as much for parents as for the baby. Choose a theme you'll love to look back on!
        `,
    },
];

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
