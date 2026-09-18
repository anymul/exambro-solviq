import { cloneElement } from 'react';
import {
    BookOpen, Sparkles, BrainCircuit, Target,
    Zap, Bookmark, Download,
    Star, Highlighter, CheckCircle2
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import FadeIn from '../componenets/FadeIn';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import FlashcardDeck from '../componenets/FlashcardDeck';
import BackendStatusBadge from '../componenets/BackendStatusBadge';

const PREPONE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.solviq.prepone';

const Hero = () => (
    <section className="relative pt-32 pb-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#5046E5] rounded-full mix-blend-screen filter blur-[150px] opacity-25"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#3B82F6] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-1.5 mb-8 border border-white/10 shadow-sm backdrop-blur-md">
                <BookOpen className="w-4 h-4 text-[#818CF8]" />
                <span className="text-[#818CF8] text-xs font-bold tracking-wider uppercase">Smart Revision</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-300 text-xs font-medium">Built by IITians</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-white font-bold mb-6 leading-tight">
                <LetterReveal text="Stop re-reading the" delay={100} /><br />
                <span className="bg-gradient-to-r from-[#818CF8] via-[#A5B4FC] to-[#93C5FD] bg-clip-text text-transparent">
                    <LetterReveal text="whole textbook." delay={300} />
                </span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Why revise what you already know? PrepOne generates bite-sized, personalized revision notes based on the exact mistakes you made in your mock tests.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a
                    href={PREPONE_PLAY_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#5046E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl inline-flex items-center transition-all shadow-[0_0_24px_rgba(80,70,229,0.35)] hover:-translate-y-0.5 font-bold text-base sm:text-lg group"
                >
                    <Sparkles className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                    Generate My Revision Notes
                </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto text-left">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
                    <span>Active Recall Flashcards</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
                    <span>SM-2 Spaced Repetition</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10 col-span-2 sm:col-span-1">
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
                    <span>Offline 'Exam Eve' PDF</span>
                </div>
            </div>
        </div>
    </section>
);

const TheProblem = () => (
    <section className="py-24 bg-[#F8F9FC] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-xl flex flex-col lg:flex-row items-center justify-between">

                <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                    <div className="inline-flex items-center px-3.5 py-1 rounded-md bg-[#EEF2FF] border border-[#C7D2FE] text-xs font-bold text-[#4338CA] uppercase tracking-wider mb-3">
                        Cognitive Science Backed
                    </div>
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
                        Beat the Forgetting Curve.
                    </h2>
                    <p className="font-body text-[#64748B] text-lg mb-8 leading-relaxed">
                        Science proves students forget over 70% of new material within 48 hours without active recall. The night before a board exam, leafing through a 500-page textbook produces panic, not retention. PrepOne replaces passive reading with targeted high-yield synthesis.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <div className="bg-[#EEF2FF] p-2.5 rounded-xl mr-4 mt-1 text-[#5046E5] shrink-0">
                                <Target className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="font-bold text-[#0F172A] block text-lg">Hyper-Targeted Snippets</span>
                                <span className="text-[#64748B] text-sm">Notes are built strictly around the concepts where your diagnostic test confidence is lowest.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-emerald-50 p-2.5 rounded-xl mr-4 mt-1 text-emerald-600 shrink-0">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="font-bold text-[#0F172A] block text-lg">5-Minute Revision Sheets</span>
                                <span className="text-[#64748B] text-sm">Strictly core formulas, verified examiner keywords, and "common trap" warnings. Zero filler.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="lg:w-5/12 w-full relative">
                    {/* Visual Comparison */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#5046E5] rounded-[2rem] transform rotate-3 opacity-10"></div>
                        <div className="bg-[#0F172A] p-6 rounded-[2rem] border border-gray-800 relative z-10 shadow-2xl">
                            <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-3">
                                <span className="text-white font-bold text-sm">Traditional Bulky Notes</span>
                                <span className="text-gray-500 text-xs">Page 1 of 40</span>
                            </div>
                            <div className="space-y-2 mb-6">
                                <div className="h-2 bg-gray-700 rounded w-full"></div>
                                <div className="h-2 bg-gray-700 rounded w-full"></div>
                                <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                                <div className="h-20 bg-gray-800 rounded w-full flex items-center justify-center text-gray-500 text-xs border border-gray-700">Generic Uncondensed Diagram</div>
                                <div className="h-2 bg-gray-700 rounded w-full"></div>
                            </div>

                            <div className="absolute top-[35%] -right-6 sm:-right-10 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 z-20 w-72 transform transition-transform hover:scale-105">
                                <div className="flex items-center space-x-2 mb-2.5">
                                    <Sparkles className="w-4 h-4 text-[#5046E5]" />
                                    <span className="text-[#5046E5] font-bold text-xs uppercase tracking-wider">PrepOne High-Yield Note</span>
                                </div>
                                <p className="text-[#0F172A] font-bold text-sm mb-1.5">Gauss's Law Core Trap!</p>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    You lost 2 marks here on yesterday's test. Remember: Flux strictly depends on charge <strong className="text-[#5046E5]">enclosed inside</strong> the Gaussian surface, never external charges.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

const FeatureGrid = () => {
    const features = [
        {
            icon: <Highlighter />,
            title: "Examiner Keywords",
            desc: "Board examiners look for specific keywords when grading subjective answers. Our notes highlight exactly which words you must include to secure full marks."
        },
        {
            icon: <BrainCircuit />,
            title: "Abhyas+ Synergized",
            desc: "The notes engine talks directly to your mock test performance. If you fail an Optics numerical, the relevant Optics formula sheet instantly pins to your dashboard."
        },
        {
            icon: <Bookmark />,
            title: "Flashcard Mode",
            desc: "Convert any revision note into an active-recall flashcard. Swipe right if you know it, swipe left if you forgot it. We'll show it to you again tomorrow."
        },
        {
            icon: <Download />,
            title: "Offline Ready",
            desc: "Download your personalized 'Exam Eve' PDF. It compiles all your weak spots into one printable document so you can study without screen distractions."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">Your ultimate cheat sheet.</h2>
                    <p className="text-[#64748B] text-lg">Legally, of course.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <FadeIn key={i} delay={i * 100} direction="up">
                            <div className="p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 h-full group">
                                <div className="w-14 h-14 bg-[#EEF2FF] rounded-2xl flex items-center justify-center mb-6 text-[#5046E5] group-hover:bg-[#5046E5] group-hover:text-white transition-colors">
                                    {cloneElement(f.icon, { className: 'w-6 h-6' })}
                                </div>
                                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{f.title}</h3>
                                <p className="font-body text-[#64748B] text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

const UIPreview = () => (
    <section className="py-20 bg-[#F8F9FC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">Interactive Spaced Repetition Deck</h2>
                <p className="text-[#64748B] text-lg">Test your active recall on high-yield board formulas, rate your retention, and track live Memory Health % in real time.</p>
            </div>
            <FlashcardDeck />
        </div>
    </section>
);

export default function RevisionNotesPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#5046E5] selection:text-white">
            <SEO
                title="PrepOne Revision Notes | Spaced Repetition Flashcards & Memory Health"
                description="Access personalized revision notes generated by AI. Track your Memory Health % and revise right before you forget with active recall flashcards."
                keywords="spaced repetition revision, board exam flashcards, active recall study app, formula revision notes, memory health gauge"
                canonicalUrl="https://solviq.in/prepone/revision-notes"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'PrepOne', url: '/prepone' },
                        { name: 'Revision Notes & Flashcards', url: '/prepone/revision-notes' }
                    ])
                ]}
            />
            <Navbar />
            <Hero />
            <TheProblem />
            <FeatureGrid />
            <UIPreview />

            {/* Download the App CTA Section */}
            <section className="bg-slate-50/60 py-12 sm:py-14 text-center border-t border-gray-200">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="font-body text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight mb-3">
                        Master CBSE &amp; BSEB Revision with PrepOne
                    </h2>
                    <p className="font-body text-[#64748B] text-base max-w-xl mx-auto leading-relaxed mb-6">
                        Turn mock test mistakes in Physics, Chemistry, and Math into targeted active recall flashcards. Review formula sheets, catch examiner traps, and retain high-yield board concepts.
                    </p>

                    {/* Google Play Store Badge */}
                    <div className="flex items-center justify-center mb-5">
                        <a
                            href={PREPONE_PLAY_STORE_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#0F172A] hover:bg-[#1E293B] text-white px-5 py-2.5 rounded-xl inline-flex items-center gap-3 transition-colors border border-gray-800 shadow-xs"
                        >
                            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186A2.25 2.25 0 0 1 3 20.721V3.279c0-.59.242-1.106.609-1.465z" fill="#4285F4" />
                                <path d="M17.183 8.608L13.792 12l3.391 3.392 3.818-2.179c.872-.498.872-1.927 0-2.426l-3.818-2.179z" fill="#FBBC05" />
                                <path d="M3.609 22.186L13.792 12l3.391 3.392-10.742 6.134a1.865 1.865 0 0 1-1.832-.04c-.365-.357-.608-.874-.608-1.463z" fill="#34A853" />
                                <path d="M13.792 12L3.609 1.814c.432-.414 1.024-.671 1.66-.671.636 0 1.228.257 1.66.671l10.443 5.965-3.391 3.392z" fill="#EA4335" />
                            </svg>
                            <div className="text-left leading-tight">
                                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Get it on</div>
                                <div className="text-sm font-bold text-white">Google Play</div>
                            </div>
                        </a>
                    </div>

                    {/* Social proof line */}
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500 font-medium">
                        <span className="inline-flex items-center gap-1 text-amber-600 font-semibold">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.8 Rating
                        </span>
                        <span className="text-gray-300">•</span>
                        <span>CBSE &amp; BSEB Aligned (Class 10 &amp; 12)</span>
                        <span className="text-gray-300">•</span>
                        <span>10,000+ Handwritten Answers Evaluated</span>
                    </div>
                </div>
            </section>
            <BackendStatusBadge />
            <Footer />
        </div>
    );
}
