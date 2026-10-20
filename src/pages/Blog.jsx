import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Clock, FileText, X } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema, SOLVIQ_ORGANIZATION_SCHEMA } from '../componenets/Schema';
import { CtaBand, Hl } from '../componenets/prepone/ui';
import { CARD_BG } from '../componenets/prepone/tokens';
import blogsData from '../data/blogs.json';

// Each category keeps one pastel across the hub, so a subject is recognisable at a glance.
const categoryColour = (categories, category) => CARD_BG[Math.max(0, categories.indexOf(category) - 1) % CARD_BG.length];

// The display face has no em dash glyph, so titles show a colon instead.
const displayTitle = (title) => title.replace(/\s*—\s*/g, ': ');

const CategoryTag = ({ children }) => (
    <span className="sticker-sm inline-block bg-white px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-ink">
        {children}
    </span>
);

const Hero = ({ total, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, categories }) => (
    <section className="graph-paper relative overflow-hidden bg-brand pb-16 pt-28 text-white lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <span className="sticker-sm mb-6 inline-block -rotate-2 bg-white px-3 py-1.5 text-xs font-extrabold text-ink">
                {total} free board exam guides
            </span>
            <h1 className="font-display lining-nums text-balance text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-6xl">
                CBSE &amp; Bihar Board <Hl>PYQs, notes and marking schemes</Hl>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                Question frequency trends, marking scheme breakdowns and chapter-wise study guides for Class 10 and Class 12 board candidates, written by IIT alumni.
            </p>

            <div className="mx-auto mt-10 max-w-2xl">
                <div className="relative mb-6">
                    <label htmlFor="blog-search" className="sr-only">Search study guides</label>
                    <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/50" />
                    <input
                        id="blog-search"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder='Search guides, e.g. "Physics PYQ"'
                        className="sticker w-full bg-white py-3.5 pl-12 pr-10 text-sm text-ink placeholder-ink/45 focus:outline-2 focus:outline-offset-2 focus:outline-sun sm:text-base"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-ink/60 hover:text-ink"
                            aria-label="Clear search"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>

                <div className="flex flex-wrap justify-center gap-2.5">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            aria-pressed={selectedCategory === cat}
                            className={`sticker-sm px-3.5 py-1.5 text-xs font-extrabold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun ${selectedCategory === cat ? 'bg-sun' : 'bg-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const FeaturedArticle = ({ post, colour }) => {
    if (!post) return null;
    return (
        <section className="pt-14">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <Link to={`/study-material/${post.slug}`} className={`sticker block p-7 text-ink sm:p-10 ${colour}`}>
                    <p className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="sticker-sm inline-block -rotate-1 bg-sun px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide">Start here</span>
                        <CategoryTag>{post.category}</CategoryTag>
                        <span className="flex items-center text-xs font-bold text-ink/70"><Clock className="mr-1 h-3.5 w-3.5" /> {post.readTime}</span>
                    </p>
                    <h2 className="font-display lining-nums text-balance text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">{displayTitle(post.title)}</h2>
                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink/75 sm:text-lg">{post.seoDescription || post.excerpt}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-base font-extrabold underline decoration-2 underline-offset-4">
                        Read the guide <ArrowRight className="h-5 w-5" />
                    </span>
                </Link>
            </div>
        </section>
    );
};

const ArticleGrid = ({ posts, categories, isFiltered, resetFilters }) => (
    <section className="py-14 pb-20 lg:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
                <h2 className="font-display lining-nums text-3xl font-bold text-ink sm:text-4xl">
                    {isFiltered ? 'Matching guides' : 'All study guides'}
                </h2>
                {isFiltered && (
                    <p className="flex items-center gap-4 text-sm font-bold text-ink/70">
                        {posts.length} {posts.length === 1 ? 'guide' : 'guides'}
                        <button onClick={resetFilters} className="underline decoration-sun decoration-2 underline-offset-4 hover:text-brand">Reset filters</button>
                    </p>
                )}
            </div>

            {posts.length === 0 ? (
                <div className="sticker mx-auto max-w-lg bg-butter p-10 text-center text-ink">
                    <FileText className="mx-auto mb-3 h-10 w-10" />
                    <h3 className="font-display text-2xl font-bold">No guide matches that</h3>
                    <p className="mt-2 text-sm text-ink/70">Try a subject such as "Physics" or "Calculus", or clear the filters.</p>
                    <button onClick={resetFilters} className="sticker mt-6 bg-sun px-6 py-3 text-sm font-extrabold">Reset all filters</button>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {posts.map((post, i) => (
                        <Link
                            key={post.id}
                            to={`/study-material/${post.slug}`}
                            className={`sticker pop-in flex h-full flex-col p-6 text-ink ${categoryColour(categories, post.category)}`}
                            style={{ '--i': Math.min(i, 8) }}
                        >
                            <div className="mb-4 flex flex-wrap items-center gap-2.5">
                                <CategoryTag>{post.category}</CategoryTag>
                                <span className="text-xs font-bold text-ink/65">{post.readTime}</span>
                            </div>
                            <h3 className="font-display lining-nums line-clamp-3 text-balance text-xl font-bold leading-snug">{displayTitle(post.title)}</h3>
                            <p className="mt-3 line-clamp-3 flex-grow text-sm leading-relaxed text-ink/75">{post.seoDescription || post.excerpt}</p>
                            <div className="mt-5 flex items-center justify-between border-t-2 border-dashed border-ink/25 pt-4">
                                <span className="text-xs font-bold text-ink/65">{post.date}</span>
                                <span className="flex items-center text-sm font-extrabold">Read <ArrowRight className="ml-1 h-4 w-4" /></span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
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
        <div className="min-h-screen bg-wash font-body selection:bg-sun selection:text-ink">
            <SEO
                title="Download CBSE & Bihar Board Class 10 & 12 PYQs, Important Questions | SolvIQ"
                description="Free PDF downloads for CBSE and Bihar Board Class 10 & 12 Previous Year Question Papers (PYQs), chapter-wise important questions, and revision notes."
                keywords="CBSE class 12 PYQ pdf, Bihar board class 12 important questions, BSEB previous year papers, CBSE marking scheme, class 12 revision notes"
                canonicalUrl="https://solviq.in/blog"
                schema={blogHubSchemas}
            />
            <Navbar />
            <main>
            <Hero
                total={blogsData.length}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
            />
            {featuredPost && <FeaturedArticle post={featuredPost} colour="bg-butter" />}
            <ArticleGrid
                categories={categories}
                posts={gridPosts}
                isFiltered={isFiltered}
                resetFilters={resetFilters}
            />
            <CtaBand
                placement="blog_hub"
                title={<>Reading shows what was asked. <Hl>Writing</Hl> shows what you lose.</>}
                body="Write a board answer on paper, click a photo, and PrepOne marks it step by step against the board scheme in about a minute."
                points={['Free to download', 'CBSE and Bihar Board', 'Android']}
            />
            </main>
            <Footer />
        </div>
    );
}
