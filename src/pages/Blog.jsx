import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Download, Clock, ChevronRight, FileText, Target } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import blogsData from '../data/blogs.json'; // IMPORTING THE JSON DATA

// --- CUSTOM HOOKS ---
const Reveal = ({ children, delay = 0, className = "", threshold = 0.1 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold, rootMargin: "0px 0px -50px 0px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

// --- COMPONENTS ---

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => { setIsLoaded(true); }, []);

    const categories = ["CBSE Class 12", "Bihar Board 12th", "PYQ PDFs", "Revision Notes", "Syllabus Weightage", "NCERT Solutions"];

    return (
        <section className="relative bg-[#0F172A] pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#4F46E5] rounded-full mix-blend-screen filter blur-[150px] opacity-30"></div>
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#F59E0B] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className={`transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/10">
                        <FileText className="w-4 h-4 text-indigo-400" />
                        <span className="text-white text-sm font-bold tracking-wide uppercase">Free Study Material</span>
                    </div>
                </div>

                <h1 className={`font-display text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6 transition-all duration-1000 delay-100 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] to-[#87fc4d]">Board Exam Hub</span>
                </h1>

                <p className={`font-body text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Download 10 years of PYQs, chapter-wise important questions, and official marking schemes for CBSE and Bihar Board exams.
                </p>

                {/* Search & Filter */}
                <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative mb-8">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="e.g., 'CBSE Class 12 Physics PYQ PDF' or 'Bihar Board Chemistry Notes'"
                            className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent backdrop-blur-sm transition-all"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat, i) => (
                            <button
                                key={cat}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${i === 0 ? 'bg-white text-[#0F172A]' : 'bg-transparent text-gray-400 border border-white/20 hover:text-white hover:border-white/50'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeaturedArticle = () => {
    // Dynamically grab the first item from the JSON array to be the featured post
    const featuredPost = blogsData[0];

    // If the JSON is empty, don't break the page
    if (!featuredPost) return null;

    return (
        <section className="bg-[#f7f6f2] pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    {/* Wrapped the whole card in a React Router Link pointing to the JSON slug */}
                    <Link to={`/study-material/${featuredPost.slug}`} className="block">
                        <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 group cursor-pointer flex flex-col lg:flex-row hover:shadow-2xl transition-all duration-500">
                            {/* Image Half */}
                            <div className="lg:w-7/12 relative overflow-hidden aspect-video lg:aspect-auto">
                                <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Content Half */}
                            <div className="lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center">
                                <div className="inline-block w-max px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border text-indigo-600 bg-indigo-50 border-indigo-200">
                                    {featuredPost.category}
                                </div>

                                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 group-hover:text-[#4F46E5] transition-colors leading-tight">
                                    {featuredPost.title}
                                </h2>

                                <p className="font-body text-gray-600 mb-8 leading-relaxed text-lg">
                                    {featuredPost.seoDescription || featuredPost.excerpt}
                                </p>

                                <div className="flex items-center text-sm text-gray-500 font-body mb-8">
                                    <Clock className="w-4 h-4 mr-1" /> {featuredPost.date}
                                </div>

                                <div className="mt-auto">
                                    <span className="inline-flex items-center font-bold text-white bg-[#4F46E5] px-6 py-3 rounded-xl hover:bg-[#3730A3] transition-colors shadow-md">
                                        <Download className="w-4 h-4 mr-2" /> Read & Download
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

const ArticleGrid = () => {
    // Remove the first item since it's already featured, map over the rest
    const gridPosts = blogsData.slice(1);

    return (
        <section className="bg-[#f7f6f2] py-12 pb-24 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="flex justify-between items-end mb-10">
                    <h3 className="font-display text-3xl font-bold text-[#0F172A]">Trending Study Material</h3>
                    <button className="hidden md:flex items-center text-[#4F46E5] font-bold hover:text-[#3730A3] transition-colors">
                        View all materials <ChevronRight className="w-5 h-5 ml-1" />
                    </button>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* DYNAMIC MAPPING FROM JSON */}
                    {gridPosts.map((post, i) => (
                        <Reveal key={post.id} delay={i * 100}>
                            {/* React Router Link pointing to the slug */}
                            <Link to={`/study-material/${post.slug}`} className="block h-full">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="inline-block w-max px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 border text-amber-600 bg-amber-50 border-amber-200">
                                            {post.category}
                                        </div>

                                        <h4 className="font-display text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4F46E5] transition-colors leading-tight">
                                            {post.title}
                                        </h4>

                                        <p className="font-body text-gray-600 text-sm mb-6 flex-grow">
                                            {post.seoDescription || post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-gray-100">
                                            <span className="text-[#4F46E5] text-sm font-bold flex items-center group-hover:text-[#3730A3]">
                                                Read & Download <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="bg-white border border-gray-200 text-[#0F172A] px-6 py-3 rounded-xl font-bold shadow-sm hover:bg-gray-50 transition-colors w-full">
                        Load More Material
                    </button>
                </div>
            </div>
        </section>
    );
};

const AppUpsellCTA = () => (
    <section className="bg-[#4F46E5] py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#87fc4d] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
        </div>
        <Reveal className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <Target className="w-12 h-12 text-[#87fc4d] mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Stop reading PDFs. Start practicing.</h2>
            <p className="font-body text-xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Downloading PYQs is just step one. Download the PrepOne App to attempt these papers digitally and get your handwritten answers evaluated by AI instantly.
            </p>

            <button
                onClick={() => window.location.href = '#'} // Link to Play Store
                className="bg-white hover:bg-gray-50 text-[#0F172A] px-8 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center justify-center mx-auto text-lg"
            >
                Download Free PrepOne App <ArrowRight className="w-5 h-5 ml-2" />
            </button>
        </Reveal>
    </section>
);

export default function SEOBlogHub() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#4F46E5] selection:text-white">
            <SEO
                title="Download CBSE & Bihar Board Class 12 PYQs, Important Questions | PrepOne"
                description="Free PDF downloads for CBSE and Bihar Board Class 12 Previous Year Question Papers (PYQs), chapter-wise important questions, and revision notes."
                keywords="CBSE class 12 PYQ pdf, Bihar board class 12 important questions, BSEB previous year papers, CBSE marking scheme, class 12 revision notes"
                canonicalUrl="https://yourwebsite.com/study-material"
            />
            <Navbar />
            <Hero />
            <FeaturedArticle />
            <ArticleGrid />
            <AppUpsellCTA />
            <Footer />
        </div>
    );
}