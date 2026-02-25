import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Breadcrumbs from '../components/Breadcrumbs';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { blogPosts } from '../data/blogPosts';

/**
 * Blog — List of articles and single post view
 */
const BlogList = () => (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
        <div className="bg-blush dark:bg-charcoal/50 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedSection>
                    <SectionTitle
                        tag="Blog"
                        title="Event Planning Tips & Ideas"
                        subtitle="Birthday planning tips, theme ideas, and inspiration for your next celebration."
                    />
                </AnimatedSection>
            </div>
        </div>

        <Breadcrumbs items={[{ to: '/', label: 'Home' }, { label: 'Blog' }]} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="space-y-8">
                {blogPosts.map((post, i) => (
                    <AnimatedItem key={post.id} index={i}>
                        <Link
                            to={`/blog/${post.slug}`}
                            className="block bg-blush dark:bg-charcoal/50 rounded-2xl overflow-hidden shadow-card hover:shadow-soft-lg transition-shadow duration-300 group"
                        >
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="aspect-video md:aspect-auto md:h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex flex-col justify-center">
                                    <span className="text-rose-gold-dark dark:text-rose-gold text-xs font-semibold font-poppins uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                    <h2 className="font-playfair font-bold text-charcoal dark:text-white text-xl mt-2 group-hover:text-rose-gold-dark dark:group-hover:text-rose-gold transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="font-poppins text-gray-500 dark:text-gray-400 text-sm mt-2 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <p className="font-poppins text-gray-400 dark:text-gray-500 text-xs mt-3">
                                        {new Date(post.date).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </AnimatedItem>
                ))}
            </div>
        </div>
    </div>
);

const BlogPost = ({ post }) => (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
        <Breadcrumbs items={[{ to: '/', label: 'Home' }, { to: '/blog', label: 'Blog' }, { label: post.title }]} />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <AnimatedSection>
                <span className="text-rose-gold-dark dark:text-rose-gold text-xs font-semibold font-poppins uppercase tracking-wider">
                    {post.category}
                </span>
                <h1 className="font-playfair font-bold text-charcoal dark:text-white text-3xl sm:text-4xl mt-2 leading-tight">
                    {post.title}
                </h1>
                <p className="font-poppins text-gray-500 dark:text-gray-400 text-sm mt-3">
                    {new Date(post.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}
                </p>
                <div className="mt-6 rounded-2xl overflow-hidden shadow-soft-lg">
                    <img src={post.image} alt={post.title} className="w-full aspect-video object-cover" />
                </div>
                <div className="mt-8 prose prose-sm max-w-none dark:prose-invert prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-strong:text-charcoal dark:prose-strong:text-white">
                    {post.content.trim().split('\n\n').map((para, i) => {
                        if (para.startsWith('**') && para.endsWith('**')) {
                            return (
                                <h3 key={i} className="font-playfair font-bold text-charcoal dark:text-white text-lg mt-6 mb-2">
                                    {para.replace(/\*\*/g, '')}
                                </h3>
                            );
                        }
                        const parts = para.split(/(\*\*[^*]+\*\*)/g);
                        return (
                            <p key={i} className="font-poppins text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                {parts.map((p, j) =>
                                    p.startsWith('**') ? (
                                        <strong key={j} className="text-charcoal dark:text-white">
                                            {p.replace(/\*\*/g, '')}
                                        </strong>
                                    ) : (
                                        p
                                    )
                                )}
                            </p>
                        );
                    })}
                </div>
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 mt-8 text-rose-gold-dark dark:text-rose-gold font-semibold font-poppins text-sm hover:underline"
                >
                    ← Back to Blog
                </Link>
            </AnimatedSection>
        </article>
    </div>
);

const Blog = () => {
    const { slug } = useParams();
    const post = slug ? blogPosts.find((p) => p.slug === slug) : null;

    if (slug && post) {
        return <BlogPost post={post} />;
    }
    return <BlogList />;
};

export default Blog;
