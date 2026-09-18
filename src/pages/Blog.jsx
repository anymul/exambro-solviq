import { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Clock, FileText, X, Star } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema, SOLVIQ_ORGANIZATION_SCHEMA } from '../componenets/Schema';
import blogsData from '../data/blogs.json';

const PREPONE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.solviq.prepone';

// --- CUSTOM ANIMATION HOOK ---
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
            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

// --- HERO COMPONENT WITH ACTIVE SEARCH & CATEGORY FILTERS ---
const Hero = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, categories }) => {
    return (
        <section className="relative bg-[#0F172A] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#4F46E5] rounded-full mix-blend-screen filter blur-[150px] opacity-25"></div>
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#3B82F6] rounded-full mix-blend-screen filter blur-[130px] opacity-20"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Academic Trust Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 border border-white/10 backdrop-blur-md">
                    <FileText className="w-4 h-4 text-[#818CF8]" />
                    <span className="text-[#818CF8] text-xs font-bold tracking-wider uppercase">Board Exam Study Material</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300 text-xs font-medium">Built by IITians</span>
                </div>

                {/* Primary Sans-Serif Headline with High-Contrast Gradient */}
                <h1 className="font-body text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-5 tracking-tight">
                    CBSE &amp; Bihar Board <br />
                    <span className="bg-gradient-to-r from-[#818CF8] via-[#A5B4FC] to-[#93C5FD] bg-clip-text text-transparent">
                        Exam Guides, PYQs &amp; Marking Schemes
                    </span>
                </h1>

                {/* Specific, Concrete Subheading */}
                <p className="font-body text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    10-year question frequency trends, official marking scheme breakdowns, and chapter-wise study blueprints curated by IIT alumni for Class 10 &amp; 12 board candidates.
                </p>

                {/* Real-time Search & Filter Engine */}
                <div className="max-w-2xl mx-auto">
                    <div className="relative mb-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder='Search by subject, chapter, or board (e.g., "Physics PYQ", "Calculus", "BSEB 12th")...'
                            className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl py-3.5 pl-12 pr-10 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent backdrop-blur-md transition-all text-sm sm:text-base font-body"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1 rounded-full"
                                aria-label="Clear search"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Dynamic Category Filter Pills */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => {
                            const isActive = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                                        isActive
                                            ? 'bg-[#4F46E5] text-white shadow-xs font-semibold'
                                            : 'bg-white/5 text-gray-300 border border-white/10 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- FEATURED ARTICLE COMPONENT ---
const FeaturedArticle = ({ post }) => {
    if (!post) return null;

    return (
        <section className="bg-[#F8F9FC] pt-14 pb-8 border-b border-gray-200/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <Link to={`/study-material/${post.slug}`} className="block group">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-xs border border-gray-200/80 flex flex-col lg:flex-row hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
                            {/* Image Half */}
                            <div className="lg:w-7/12 relative overflow-hidden aspect-video lg:aspect-auto">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
                                    loading="eager"
                                />
                            </div>

                            {/* Content Half */}
                            <div className="lg:w-5/12 p-8 lg:p-10 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#4F46E5] bg-[#EEF2FF] border border-[#C7D2FE]">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-300">•</span>
                                    <span className="flex items-center text-xs text-gray-500 font-medium">
                                        <Clock className="w-3.5 h-3.5 mr-1 text-gray-400" /> {post.readTime || '6 min read'}
                                    </span>
                                </div>

                                <h2 className="font-body text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4F46E5] transition-colors leading-tight">
                                    {post.title}
                                </h2>

                                <p className="font-body text-gray-600 mb-6 leading-relaxed text-sm sm:text-base line-clamp-3">
                                    {post.seoDescription || post.excerpt}
                                </p>

                                <div className="mt-auto pt-2">
                                    <span className="inline-flex items-center font-semibold text-white bg-[#4F46E5] group-hover:bg-[#4338CA] px-5 py-2.5 rounded-xl transition-colors shadow-xs text-sm">
                                        Read Full Guide &amp; Solutions <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

// --- ARTICLE GRID COMPONENT ---
const ArticleGrid = ({ posts, isFiltered, resetFilters }) => {
    return (
        <section className="bg-[#F8F9FC] py-12 pb-24 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header & Meta Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-8">
                    <div>
                        <h3 className="font-body text-2xl sm:text-3xl font-bold text-[#0F172A]">
                            High-Yield Board Preparation Guides
                        </h3>
                        <p className="font-body text-gray-500 text-sm mt-1">
                            Step-marking breakdowns, chapter weightage tables, and examiner trap warnings.
                        </p>
                    </div>

                    {isFiltered && (
                        <div className="flex items-center gap-3 self-end sm:self-auto">
                            <span className="text-xs font-semibold text-gray-500 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-xs">
                                Showing {posts.length} {posts.length === 1 ? 'guide' : 'guides'}
                            </span>
                            <button
                                onClick={resetFilters}
                                className="text-xs font-semibold text-[#4F46E5] hover:text-[#4338CA] underline cursor-pointer"
                            >
                                Reset filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Empty State */}
                {posts.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-lg mx-auto my-8 shadow-xs">
                        <FileText className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                        <h4 className="font-body font-bold text-lg text-[#0F172A] mb-1">No matching study guides found</h4>
                        <p className="font-body text-gray-500 text-sm mb-6">
                            Try searching for different keywords (e.g. "Physics", "Chemistry", "Calculus") or reset your category filter.
                        </p>
                        <button
                            onClick={resetFilters}
                            className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                        >
                            Reset All Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {posts.map((post, i) => (
                            <Reveal key={post.id} delay={i * 60}>
                                <Link to={`/study-material/${post.slug}`} className="block h-full group">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-xs border border-gray-200/80 flex flex-col h-full hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg transition-all duration-200 cursor-pointer">
                                        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-400"
                                                loading="lazy"
                                            />
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#4F46E5] bg-[#EEF2FF] border border-[#C7D2FE]">
                                                    {post.category}
                                                </span>
                                                <span className="text-gray-300">•</span>
                                                <span className="text-xs text-gray-400 font-medium">
                                                    {post.readTime || '5 min read'}
                                                </span>
                                            </div>

                                            <h4 className="font-body text-lg font-bold text-[#0F172A] mb-2.5 group-hover:text-[#4F46E5] transition-colors leading-snug line-clamp-2">
                                                {post.title}
                                            </h4>

                                            <p className="font-body text-gray-600 text-sm mb-5 flex-grow line-clamp-3 leading-relaxed">
                                                {post.seoDescription || post.excerpt}
                                            </p>

                                            <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                                                <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                                                <span className="text-[#4F46E5] text-xs font-semibold flex items-center group-hover:text-[#4338CA]">
                                                    Read Guide <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

// --- APP UPSELL CTA (ZERO GREEN TELLS, AUTHORITATIVE CONVERSION COPY) ---
const AppUpsellCTA = () => (
    <section className="bg-[#0F172A] py-16 sm:py-20 relative overflow-hidden border-t border-gray-800 text-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4F46E5] rounded-full mix-blend-screen filter blur-[150px] opacity-15"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <h2 className="font-body text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Turn Passive Reading into Proven Exam Marks
            </h2>
            <p className="font-body text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                Reading question papers only reveals what was asked before. PrepOne's AI evaluates your handwritten answers in 60 seconds against official CBSE and BSEB step-marking schemes, pinpoints derivation flaws, and builds your custom revision loop.
            </p>

            {/* Google Play Store Badge Button */}
            <div className="flex items-center justify-center mb-6">
                <a
                    href={PREPONE_PLAY_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white hover:bg-gray-100 text-[#0F172A] px-6 py-3 rounded-xl inline-flex items-center gap-3 transition-all shadow-sm font-body cursor-pointer group"
                >
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186A2.25 2.25 0 0 1 3 20.721V3.279c0-.59.242-1.106.609-1.465z" fill="#4285F4" />
                        <path d="M17.183 8.608L13.792 12l3.391 3.392 3.818-2.179c.872-.498.872-1.927 0-2.426l-3.818-2.179z" fill="#FBBC05" />
                        <path d="M3.609 22.186L13.792 12l3.391 3.392-10.742 6.134a1.865 1.865 0 0 1-1.832-.04c-.365-.357-.608-.874-.608-1.463z" fill="#34A853" />
                        <path d="M13.792 12L3.609 1.814c.432-.414 1.024-.671 1.66-.671.636 0 1.228.257 1.66.671l10.443 5.965-3.391 3.392z" fill="#EA4335" />
                    </svg>
                    <div className="text-left leading-tight">
                        <div className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Get it on</div>
                        <div className="text-sm font-bold text-[#0F172A]">Google Play</div>
                    </div>
                </a>
            </div>

            {/* Social Proof Line */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400 font-medium">
                <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.8 Rating
                </span>
                <span className="text-gray-600">•</span>
                <span>Instant 60-Sec Step Marking</span>
                <span className="text-gray-600">•</span>
                <span>Official CBSE &amp; BSEB Rubrics</span>
                <span className="text-gray-600">•</span>
                <span>10,000+ Answers Graded</span>
            </div>
        </div>
    </section>
);

// --- MAIN PAGE EXPORT ---
export default function SEOBlogHub() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Dynamically derive category list
    const categories = useMemo(() => {
        const unique = Array.from(new Set(blogsData.map((b) => b.category)));
        return ['All', ...unique];
    }, []);

    // Filter posts reactively based on search query and category
    const filteredPosts = useMemo(() => {
        return blogsData.filter((post) => {
            const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
            const q = searchQuery.trim().toLowerCase();
            const matchesSearch =
                !q ||
                post.title.toLowerCase().includes(q) ||
                (post.seoDescription && post.seoDescription.toLowerCase().includes(q)) ||
                post.category.toLowerCase().includes(q);
            return matchesCat && matchesSearch;
        });
    }, [searchQuery, selectedCategory]);

    const isFiltered = searchQuery.trim() !== '' || selectedCategory !== 'All';

    const resetFilters = () => {
        setSearchQuery('');
        setSelectedCategory('All');
    };

    // When unfiltered, feature the first post and grid the rest.
    // When filtered, render all filtered matches in the grid.
    const featuredPost = !isFiltered ? filteredPosts[0] : null;
    const gridPosts = !isFiltered ? filteredPosts.slice(1) : filteredPosts;

    const blogHubSchemas = [
        SOLVIQ_ORGANIZATION_SCHEMA,
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://solviq.in/blog#collection",
            "url": "https://solviq.in/blog",
            "name": "CBSE & Bihar Board Class 10 & 12 Study Material & PYQs Hub",
            "description": "Free PDF downloads for CBSE and Bihar Board Class 10 & 12 Previous Year Question Papers (PYQs), chapter-wise important questions, and revision notes.",
            "mainEntity": {
                "@type": "ItemList",
                "itemListElement": blogsData.map((post, idx) => ({
                    "@type": "ListItem",
                    "position": idx + 1,
                    "url": `https://solviq.in/study-material/${post.slug}`,
                    "name": post.title
                }))
            }
        },
        buildBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Study Hub & Blogs', url: '/blog' }
        ])
    ];

    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#4F46E5] selection:text-white">
            <SEO
                title="Download CBSE & Bihar Board Class 10 & 12 PYQs, Important Questions | SolvIQ"
                description="Free PDF downloads for CBSE and Bihar Board Class 10 & 12 Previous Year Question Papers (PYQs), chapter-wise important questions, and revision notes."
                keywords="CBSE class 12 PYQ pdf, Bihar board class 12 important questions, BSEB previous year papers, CBSE marking scheme, class 12 revision notes"
                canonicalUrl="https://solviq.in/blog"
                schema={blogHubSchemas}
            />
            <Navbar />
            <Hero
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
            />
            {featuredPost && <FeaturedArticle post={featuredPost} />}
            <ArticleGrid
                posts={gridPosts}
                isFiltered={isFiltered}
                resetFilters={resetFilters}
            />
            <AppUpsellCTA />
            <Footer />
        </div>
    );
}
