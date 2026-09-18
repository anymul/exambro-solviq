import React from 'react';
import {
    History, TrendingUp, BookOpen, Smartphone,
    BrainCircuit, Target, CheckCircle2,
    Calendar, Search, Filter
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import { InlineMath } from '../componenets/Latex';
import PYQExplorer from '../componenets/PYQExplorer';
import BackendStatusBadge from '../componenets/BackendStatusBadge';
import pyqAnalyticsImg from '../assets/pyq_analytics.png';

const PREPONE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.solviq.prepone';


const Hero = () => (
    <section className="relative pt-32 pb-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#5046E5] rounded-full mix-blend-screen filter blur-[150px] opacity-25"></div>
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#3B82F6] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-1.5 mb-8 border border-white/10 shadow-sm backdrop-blur-md">
                <History className="w-4 h-4 text-[#818CF8]" />
                <span className="text-[#818CF8] text-xs font-bold tracking-wider uppercase">PrepOne PYQ Engine</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-300 text-xs font-medium">Built by IITians</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-white font-bold mb-6 leading-tight">
                <LetterReveal text="10+ Years of Board Papers." delay={100} /><br />
                <span className="bg-gradient-to-r from-[#818CF8] via-[#A5B4FC] to-[#93C5FD] bg-clip-text text-transparent">
                    <LetterReveal text="Decoded by AI." delay={300} />
                </span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Don't just read the solutions. See which topics repeat every year, practice chapter-wise, and get your handwritten PYQ answers graded against the official board rubrics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a
                    href={PREPONE_PLAY_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#5046E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl inline-flex items-center transition-all shadow-[0_0_24px_rgba(80,70,229,0.35)] hover:-translate-y-0.5 font-bold text-base sm:text-lg group"
                >
                    <Search className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    Explore the PYQ Library
                </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto text-left">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
                    <span>2014–2025 Solved Archive</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
                    <span>Chapter-wise Weightage</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10 col-span-2 sm:col-span-1">
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
                    <span>Official Marking Rubrics</span>
                </div>
            </div>
        </div>
    </section>
);

const TrendAnalysis = () => (
    <section className="py-24 bg-[#F8F9FC] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Text Side */}
                <div className="lg:col-span-6">
                    <div className="inline-flex items-center px-3.5 py-1 rounded-md bg-[#EEF2FF] border border-[#C7D2FE] text-xs font-bold text-[#4338CA] uppercase tracking-wider mb-3">
                        Predictive Topic Analytics
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                        Know exactly what the examiner will ask.
                    </h2>
                    <p className="font-body text-[#64748B] text-base sm:text-lg mb-8 leading-relaxed">
                        We fed 5,000+ past year board questions into our AI engine to map the historical DNA of CBSE and Bihar Board exams. PrepOne highlights recurring micro-concepts that statistically carry up to 60% of paper weightage.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <div className="bg-[#EEF2FF] p-2.5 rounded-xl mr-4 mt-1 text-[#5046E5] shrink-0">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="font-bold text-[#0F172A] block text-base sm:text-lg">Predictive Weightage Engine</span>
                                <span className="text-[#64748B] text-sm">"Ray Optics and Wave Optics have appeared in 9 out of the last 10 board exam sessions, carrying an average of 14 marks."</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-[#EEF2FF] p-2.5 rounded-xl mr-4 mt-1 text-[#5046E5] shrink-0">
                                <Filter className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="font-bold text-[#0F172A] block text-base sm:text-lg">One-Tap Smart Filtering</span>
                                <span className="text-[#64748B] text-sm">Filter 10+ years of papers by chapter, difficulty, bloom's taxonomy, or format (Objective vs Derivations).</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* UI Mockup Side */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                        <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Concept Frequency Tracker</p>
                                <p className="text-xl font-display font-bold text-[#0F172A]">Class 12: Moving Charges & Magnetism</p>
                            </div>
                            <div className="bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE] px-3 py-1 rounded-full font-bold text-xs">
                                94% Recurrence
                            </div>
                        </div>

                        {/* Visual Frequency Chart */}
                        <div className="flex items-end justify-between h-44 mb-3 space-x-2 border-b border-gray-100 pb-2">
                            {[4, 6, 3, 7, 5, 8, 4, 9, 6, 8].map((height, idx) => {
                                const year = 2015 + idx;
                                return (
                                    <div key={idx} className="w-full flex flex-col items-center justify-end h-full group cursor-pointer">
                                        <div className="opacity-0 group-hover:opacity-100 text-[10px] font-bold text-[#5046E5] mb-1 transition-opacity">
                                            {height}M
                                        </div>
                                        <div
                                            className={`w-full rounded-t-md transition-all duration-300 ${height >= 7 ? 'bg-[#5046E5] group-hover:bg-[#4338CA]' : 'bg-[#C7D2FE] group-hover:bg-[#A5B4FC]'}`}
                                            style={{ height: `${height * 10}%`, minHeight: '6px' }}
                                        />
                                        <div className="text-[10px] text-gray-400 font-bold mt-2 pt-1">
                                            {String(year).slice(-2)}'
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="text-xs text-gray-500 text-center">Historical marks distribution across CBSE Main & Compartment papers (2015–2024)</p>
                    </div>

                    {/* Integrated Screenshot banner */}
                    <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-slate-900">
                        <img
                            src={pyqAnalyticsImg}
                            alt="PrepOne PYQ Analytics Screen"
                            className="w-full h-44 object-cover object-top opacity-95"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const PracticeModes = () => {
    const modes = [
        {
            icon: <BookOpen />,
            title: "Chapter-wise Deep Dive",
            desc: "Focus on one chapter at a time. Master all questions ever asked from 'Electrostatics' or 'Optics' across the last 10 years.",
            color: "indigo"
        },
        {
            icon: <Calendar />,
            title: "Year-wise Full Papers",
            desc: "Ready for the real deal? Sit down for 3 hours and attempt the exact past year paper under timed exam conditions.",
            color: "blue"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">Practice your way.</h2>
                    <p className="text-[#64748B] text-lg">Switch between revision mode and full exam mode effortlessly.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {modes.map((mode, i) => (
                        <div key={i} className={`p-10 rounded-[2rem] border-2 transition-all group ${mode.color === 'indigo'
                            ? 'border-indigo-100 bg-[#EEF2FF]/40 hover:border-[#5046E5]'
                            : 'border-blue-100 bg-blue-50/40 hover:border-[#3B82F6]'
                            }`}>
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm ${mode.color === 'indigo' ? 'bg-[#5046E5] text-white' : 'bg-[#3B82F6] text-white'
                                }`}>
                                {React.cloneElement(mode.icon, { className: 'w-8 h-8' })}
                            </div>
                            <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">{mode.title}</h3>
                            <p className="font-body text-[#64748B] leading-relaxed text-base sm:text-lg">{mode.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const OfficialRubricGrading = () => (
    <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1E293B] rounded-[3rem] p-8 md:p-16 border border-gray-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between">

                <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                    <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 border border-white/10">
                        <BrainCircuit className="w-4 h-4 text-[#818CF8]" />
                        <span className="text-[#818CF8] text-xs font-bold tracking-wide uppercase">AutoScore Integration</span>
                    </div>
                    <h2 className="font-display text-4xl font-bold text-white mb-6 leading-tight">
                        Graded by the official marking scheme.
                    </h2>
                    <p className="font-body text-gray-400 text-lg mb-8 leading-relaxed">
                        If you write the 2022 board paper, our AI doesn't just guess your marks. It evaluates your handwritten answers against the exact step-marking rubric released by the board for that specific year.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center text-gray-300">
                            <CheckCircle2 className="w-5 h-5 text-[#818CF8] mr-3" /> Real board rubrics trained into the LLM
                        </li>
                        <li className="flex items-center text-gray-300">
                            <CheckCircle2 className="w-5 h-5 text-[#818CF8] mr-3" /> Step-marking for partial derivations
                        </li>
                        <li className="flex items-center text-gray-300">
                            <CheckCircle2 className="w-5 h-5 text-[#818CF8] mr-3" /> Detailed examiner commentary on your mistakes
                        </li>
                    </ul>
                </div>

                <div className="lg:w-5/12 w-full">
                    <div className="bg-[#0F172A] p-6 rounded-2xl border border-gray-700">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-400 font-bold text-sm">2022 Physics Paper</span>
                            <span className="text-[#818CF8] font-bold text-sm flex items-center"><Target className="w-4 h-4 mr-1" /> Rubric Match</span>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex justify-between">
                                <div>
                                    <p className="text-emerald-400 text-sm font-bold">1. Gauss's Law Statement</p>
                                    <p className="text-gray-400 text-xs mt-1">
                                        Matched official formula: <InlineMath math="\oint \mathbf{E} \cdot d\mathbf{A} = \frac{q_{\text{enclosed}}}{\varepsilon_0}" />
                                    </p>
                                </div>
                                <span className="text-emerald-400 font-bold">+1 Mark</span>
                            </div>
                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex justify-between">
                                <div>
                                    <p className="text-red-400 text-sm font-bold">2. Mathematical Derivation</p>
                                    <p className="text-gray-400 text-xs mt-1">
                                        Missed integration limits <InlineMath math="\int_{0}^{R}" /> as per 2022 guidelines.
                                    </p>
                                </div>
                                <span className="text-red-400 font-bold">0 Marks</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default function PYQsMarketingPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#5046E5] selection:text-white">
            <SEO
                title="10+ Years Board Exam PYQs Decoded by AI | PrepOne"
                description="Practice chapter-wise Past Year Questions (PYQs) for CBSE and Bihar Board. Get your handwritten answers graded against official board marking schemes."
                keywords="board exam PYQs, previous year question papers solved, chapter-wise PYQs class 12, AI PYQ evaluation, CBSE 10 year papers"
                canonicalUrl="https://solviq.in/prepone/pyqs"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'PrepOne', url: '/prepone' },
                        { name: 'Previous Year Questions (PYQs)', url: '/prepone/pyqs' }
                    ])
                ]}
            />
            <Navbar />
            <Hero />
            <TrendAnalysis />
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">Interactive PYQ Solver</h2>
                        <p className="text-[#64748B] text-lg">Browse official board questions by subject and view predicted recurrences alongside marking schemes.</p>
                    </div>
                    <PYQExplorer />
                </div>
            </section>
            <PracticeModes />
            <OfficialRubricGrading />

            {/* CTA Section */}
            <section className="bg-[#F8F9FC] py-20 text-center border-t border-gray-200">
                <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6">Unlock 10+ Years of Mastery.</h2>
                <p className="text-[#64748B] mb-8 max-w-xl mx-auto text-lg">Stop searching the internet for blurry PDFs. Get fully evaluated PYQs right in your pocket.</p>
                <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="bg-[#5046E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl inline-flex items-center justify-center mx-auto transition-all shadow-[0_0_24px_rgba(80,70,229,0.35)] hover:-translate-y-0.5 font-bold">
                    <Smartphone className="w-5 h-5 mr-3 text-indigo-300" />
                    Download PrepOne App
                </a>
            </section>
            <BackendStatusBadge />
            <Footer />
        </div>
    );
}
