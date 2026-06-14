import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Smartphone, Zap } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';

// IMPORT YOUR JSON DATA DIRECTLY
import blogsData from '../data/blogs.json'; 

export default function DynamicArticlePage() {
    const { slug } = useParams();

    const article = blogsData.find((post) => post.slug === slug);

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <Navbar />
                <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-32">Article Not Found</h1>
                <p className="text-gray-500 mb-8">The study material you are looking for does not exist.</p>
                <Link to="/study-material" className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold">
                    Back to Study Hub
                </Link>
            </div>
        );
    }

    // 4. Render the matched article
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#4F46E5] selection:text-white">
            <SEO 
                title={`${article.title} | PrepOne`}
                description={article.seoDescription}
                canonicalUrl={`https://solviq.in/study-material/${article.slug}`}
            />
            <Navbar />

            {/* Breadcrumbs */}
            <div className="bg-[#0b0909] pt-32 pb-6 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center text-sm text-gray-300 font-medium">
                    <Link to="/blog" className="hover:text-[#a7a2ff] transition-colors flex items-center">
                        <ArrowLeft className="w-4 h-4 mr-1" /> Study Hub
                    </Link>
                    <span className="mx-2 text-gray-200">/</span>
                    <span className="text-gray-200">{article.category}</span>
                </div>
            </div>

            {/* Article Hero */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-16">
                <div className="text-center mb-10">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-indigo-50 text-indigo-600 border border-indigo-200">
                        {article.category}
                    </div>
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
                        {article.title}
                    </h1>
                    <div className="flex flex-wrap items-center justify-center text-sm text-gray-500 gap-4 md:gap-6">
                        <div className="flex items-center font-bold text-[#0F172A]">{article.author}</div>
                        <div className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {article.date}</div>
                        <div className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> {article.readTime}</div>
                    </div>
                </div>

                <div className="rounded-[2rem] overflow-hidden mb-12 shadow-lg border border-gray-100 aspect-video">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>

              <div 
                    className="max-w-3xl mx-auto text-[#334155] text-lg leading-relaxed article-content"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Standard App Upsell placed at the bottom of every article */}
                <div className="max-w-3xl mx-auto my-12 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[2rem] p-8 shadow-2xl relative overflow-hidden text-white">
                    <div className="relative z-10">
                        <div className="flex items-center space-x-2 text-[#87fc4d] font-bold text-sm uppercase mb-4">
                            <Zap className="w-5 h-5" /> Put it into practice
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Get your answers evaluated by AI</h3>
                        <p className="text-gray-300 mb-8">Download PrepOne to attempt PYQs and get instant step-marks.</p>
                        <button className="bg-white text-[#0F172A] px-8 py-3.5 rounded-xl font-bold flex items-center">
                            <Smartphone className="w-5 h-5 mr-3 text-indigo-600" /> Download App
                        </button>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}