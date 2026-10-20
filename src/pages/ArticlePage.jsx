import { useMemo, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowRight, ShieldAlert } from 'lucide-react';
import katex from 'katex';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildArticleSchema, buildBreadcrumbSchema } from '../componenets/Schema';
import { CtaBand, Hl } from '../componenets/prepone/ui';
import { CARD_BG } from '../componenets/prepone/tokens';

// IMPORT YOUR JSON DATA DIRECTLY
import blogsData from '../data/blogs.json'; 

// The display face has no em dash glyph, so headings show a colon instead.
const displayTitle = (title) => title.replace(/\s*—\s*/g, ': ');

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
            <div className="min-h-screen bg-wash font-body">
                <Navbar />
                <main className="graph-paper flex min-h-screen flex-col items-center justify-center bg-brand px-4 text-center text-white">
                    <h1 className="font-display text-4xl font-bold sm:text-5xl">Guide not found</h1>
                    <p className="mb-8 mt-4 text-white/85">The study material you are looking for does not exist.</p>
                    <Link to="/blog" className="sticker bg-sun px-7 py-3.5 font-extrabold text-ink">Back to the study hub</Link>
                </main>
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

    return (
        <div className="min-h-screen bg-wash font-body selection:bg-sun selection:text-ink">
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
                <div role="alert" className="sticker fixed bottom-6 right-6 z-50 flex max-w-sm items-center gap-3 bg-coral px-4 py-3 text-ink">
                    <ShieldAlert className="h-5 w-5 shrink-0" />
                    <div className="text-xs">
                        <div className="font-extrabold">Content protected</div>
                        <div className="font-medium">Copying and right-click are disabled to protect this study material.</div>
                    </div>
                </div>
            )}

            <main>
                <header className="graph-paper bg-brand pb-12 pt-28 text-white lg:pb-16 lg:pt-36">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-sm font-bold text-white/85">
                            <Link to="/blog" className="flex items-center underline decoration-sun decoration-2 underline-offset-4 hover:text-sun">
                                <ArrowLeft className="mr-1 h-4 w-4" /> Study hub
                            </Link>
                            <span className="mx-2 text-white/50">/</span>
                            <span>{article.category}</span>
                        </nav>
                        <h1 className="font-display lining-nums text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                            {displayTitle(article.title)}
                        </h1>
                        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-bold text-white/85">
                            <span className="sticker-sm -rotate-1 bg-white px-3 py-1 text-xs font-extrabold text-ink">{article.author}</span>
                            <span className="flex items-center"><Calendar className="mr-1.5 h-4 w-4" /> {article.date}</span>
                            <span className="flex items-center"><Clock className="mr-1.5 h-4 w-4" /> {article.readTime}</span>
                        </div>
                    </div>
                </header>

                <div className="bg-white">
                <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
                    <div
                        className="article-content protected-content mx-auto max-w-3xl select-none text-lg leading-relaxed text-ink/85"
                        dangerouslySetInnerHTML={{ __html: processedContent }}
                    />

                    {/* Related articles for the internal link graph */}
                    <div className="mx-auto mt-16 max-w-3xl border-t-2 border-dashed border-ink/25 pt-10">
                        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">More study guides</h2>
                        <div className="mt-6 grid gap-5 md:grid-cols-3">
                            {relatedArticles.map((rel, i) => (
                                <Link
                                    key={rel.id}
                                    to={`/study-material/${rel.slug}`}
                                    className={`sticker flex flex-col p-5 text-ink ${CARD_BG[i % CARD_BG.length]}`}
                                >
                                    <span className="sticker-sm mb-3 inline-block self-start bg-white px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide">{rel.category}</span>
                                    <h3 className="font-display line-clamp-3 text-base font-bold leading-snug">{displayTitle(rel.title)}</h3>
                                    <span className="mt-4 flex items-center text-sm font-extrabold">Read <ArrowRight className="ml-1 h-4 w-4" /></span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </article>
                </div>

                <CtaBand
                    placement="article"
                    title={<>Now <Hl>write</Hl> it and get it marked.</>}
                    body="Attempt a board question on paper, upload a photo, and PrepOne gives you step marks against the CBSE or Bihar Board scheme in about a minute."
                    points={['Free to download', 'CBSE and Bihar Board', 'Android']}
                />
            </main>

            <Footer />
        </div>
    );
}
