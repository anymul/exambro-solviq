import { useMemo, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Zap, ShieldAlert } from 'lucide-react';
import katex from 'katex';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildArticleSchema, buildBreadcrumbSchema } from '../componenets/Schema';

// IMPORT YOUR JSON DATA DIRECTLY
import blogsData from '../data/blogs.json'; 

const PREPONE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.solviq.prepone';

export default function DynamicArticlePage() {
    const { slug } = useParams();
    const [securityWarning, setSecurityWarning] = useState(false);

    const article = blogsData.find((post) => post.slug === slug);

    // Enforce Anti-Copy, Anti-Right Click, and DevTools/Shortcut Protection
    useEffect(() => {
        const triggerWarning = () => {
            setSecurityWarning(true);
            setTimeout(() => setSecurityWarning(false), 2500);
        };

        const handleContextMenu = (e) => {
            e.preventDefault();
            triggerWarning();
            return false;
        };

        const handleCopy = (e) => {
            e.preventDefault();
            triggerWarning();
            if (e.clipboardData) {
                e.clipboardData.setData('text/plain', 'Content protected by SolvIQ PrepOne. Copying is disabled.');
            }
            return false;
        };

        const handleCut = (e) => {
            e.preventDefault();
            triggerWarning();
            return false;
        };

        const handleKeyDown = (e) => {
            // Block Ctrl+C, Ctrl+A, Ctrl+U (view source), Ctrl+S (save page), Ctrl+P (optional bypass), F12, Ctrl+Shift+I
            const isCtrlOrCmd = e.ctrlKey || e.metaKey;
            if (
                (isCtrlOrCmd && ['c', 'a', 'u', 's'].includes(e.key.toLowerCase())) ||
                e.key === 'F12' ||
                (isCtrlOrCmd && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase()))
            ) {
                e.preventDefault();
                triggerWarning();
                return false;
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('copy', handleCopy);
        document.addEventListener('cut', handleCut);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('copy', handleCopy);
            document.removeEventListener('cut', handleCut);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const processedContent = useMemo(() => {
        const rawContent = article?.content || '';
        if (!rawContent) return '';
        try {
            const cleanLatex = (eq) => {
                return eq.trim()
                    .replace(/&amp;/g, '&')
                    .replace(/&#039;/g, "'")
                    .replace(/&apos;/g, "'")
                    .replace(/&quot;/g, '"')
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
                    .replace(/\\ओमेगा/g, '\\omega')
                    .replace(/\\गामा/g, '\\gamma')
                    .replace(/\\लॉग/g, '\\log')
                    .replace(/\\गुना/g, '\\times')
                    .replace(/\\कप/g, '\\cup');
            };

            // 1. Display math: $$ ... $$ and \[ ... \]
            let res = rawContent.replace(/\$\$([\s\S]+?)\$\$/g, (_, eq) => {
                return katex.renderToString(cleanLatex(eq), { displayMode: true, throwOnError: false });
            }).replace(/\\\[([\s\S]+?)\\\]/g, (_, eq) => {
                return katex.renderToString(cleanLatex(eq), { displayMode: true, throwOnError: false });
            });

            // 2. Inline math: \( ... \) and $ ... $
            res = res.replace(/\\\(([\s\S]+?)\\\)/g, (_, eq) => {
                return katex.renderToString(cleanLatex(eq), { displayMode: false, throwOnError: false });
            }).replace(/\$([^$\n]+?)\$/g, (_, eq) => {
                return katex.renderToString(cleanLatex(eq), { displayMode: false, throwOnError: false });
            });

            // Clean any residual HTML numeric entities in surrounding text
            res = res.replace(/&#039;/g, "'");

            return res;
        } catch {
            return rawContent;
        }
    }, [article?.content]);

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <Navbar />
                <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-32">Article Not Found</h1>
                <p className="text-gray-500 mb-8">The study material you are looking for does not exist.</p>
                <Link to="/blog" className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold">
                    Back to Study Hub
                </Link>
            </div>
        );
    }

    const articleUrl = `https://solviq.in/study-material/${article.slug}`;

    const articleSchemas = [
        buildArticleSchema({
            title: article.title,
            description: article.seoDescription,
            url: articleUrl,
            imageUrl: article.image,
            datePublished: article.date,
            authorName: article.author || "PrepOne Academic Team",
            category: article.category
        }),
        buildBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Study Hub', url: '/blog' },
            { name: article.category, url: '/blog' },
            { name: article.title, url: `/study-material/${article.slug}` }
        ])
    ];

    // Related articles for internal link graph
    const relatedArticles = blogsData.filter(b => b.slug !== slug).slice(0, 3);

    // 4. Render the matched article
    return (
        <div className="min-h-screen bg-white font-body selection:bg-transparent selection:text-inherit">
            <SEO 
                title={`${article.title} | SolvIQ PrepOne`}
                description={article.seoDescription}
                canonicalUrl={articleUrl}
                ogImage={article.image}
                ogType="article"
                author={article.author}
                schema={articleSchemas}
            />
            <Navbar />

            {/* Content Protection Warning Toast */}
            {securityWarning && (
                <div className="fixed bottom-6 right-6 z-50 bg-[#0F172A] text-white px-4 py-3 rounded-xl shadow-2xl border border-red-500/50 flex items-center gap-3 transition-all animate-bounce">
                    <ShieldAlert className="w-5 h-5 text-red-400 shrink-0" />
                    <div className="text-xs">
                        <div className="font-bold text-red-200">Content Protected</div>
                        <div className="text-gray-300">Copying and right-click have been disabled to protect proprietary study material.</div>
                    </div>
                </div>
            )}

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
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-[#EEF2FF] text-[#4F46E5] border border-[#C7D2FE]">
                        {article.category}
                    </div>
                    <h1 className="font-body text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6 tracking-tight">
                        {article.title}
                    </h1>
                    <div className="flex flex-wrap items-center justify-center text-sm text-gray-500 gap-4 md:gap-6 font-body">
                        <div className="flex items-center font-semibold text-[#0F172A]">{article.author}</div>
                        <div className="flex items-center"><Calendar className="w-4 h-4 mr-1.5 text-gray-400" /> {article.date}</div>
                        <div className="flex items-center"><Clock className="w-4 h-4 mr-1.5 text-gray-400" /> {article.readTime}</div>
                    </div>
                </div>

                <div className="rounded-[2rem] overflow-hidden mb-12 shadow-sm border border-gray-200 aspect-video bg-gray-100">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover select-none pointer-events-none" />
                </div>

                <div 
                    className="max-w-3xl mx-auto text-[#334155] text-lg leading-relaxed article-content font-body protected-content select-none"
                    dangerouslySetInnerHTML={{ __html: processedContent }}
                />

                {/* Standard App Upsell placed at the bottom of every article */}
                <div className="max-w-3xl mx-auto my-12 bg-[#0F172A] rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden text-white border border-gray-800">
                    <div className="relative z-10">
                        <div className="flex items-center space-x-2 text-[#818CF8] font-bold text-xs uppercase tracking-wider mb-3">
                            <Zap className="w-4 h-4" /> Active Exam Practice
                        </div>
                        <h3 className="font-body text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
                            Get Your Handwritten Answers Evaluated by AI
                        </h3>
                        <p className="font-body text-gray-300 text-base mb-8 max-w-xl leading-relaxed">
                            Attempt board questions on paper, upload a photo, and receive 60-second step-marking breakdowns against official CBSE and Bihar Board marking schemes.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href={PREPONE_PLAY_STORE_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-white hover:bg-gray-100 text-[#0F172A] px-5 py-2.5 rounded-xl inline-flex items-center gap-3 transition-colors shadow-xs font-body group"
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
                            <Link
                                to="/prepone"
                                className="bg-white/10 hover:bg-white/15 text-white px-5 py-3 rounded-xl font-medium text-sm inline-flex items-center border border-white/15 transition-colors font-body"
                            >
                                Explore PrepOne Features →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Related Articles for Internal SEO Link Graph */}
                <div className="max-w-3xl mx-auto mt-16 pt-10 border-t border-gray-200">
                    <h3 className="font-body text-xl sm:text-2xl font-bold text-[#0F172A] mb-6 tracking-tight">
                        Explore Related Study Materials
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {relatedArticles.map((rel) => (
                            <Link 
                                key={rel.id} 
                                to={`/study-material/${rel.slug}`} 
                                className="group block bg-[#F8F9FC] hover:bg-white p-5 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all"
                            >
                                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#4F46E5] bg-[#EEF2FF] px-2 py-0.5 rounded-full mb-3 border border-[#C7D2FE]">
                                    {rel.category}
                                </span>
                                <h4 className="font-body font-bold text-sm text-[#0F172A] group-hover:text-[#4F46E5] transition-colors line-clamp-2">
                                    {rel.title}
                                </h4>
                                <p className="text-xs text-gray-500 mt-2 flex items-center font-body font-medium">
                                    Read guide →
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}
