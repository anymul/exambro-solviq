import React from 'react';
import {
    BookOpen, Sparkles, BrainCircuit, Target,
    Zap, Bookmark, Download,
    FileText, Smartphone, Highlighter
} from 'lucide-react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import FadeIn from '../componenets/FadeIn';
import SEO from '../componenets/SEO';

const PREPONE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.solviq.prepone';

const mathJaxConfig = {
    tex: {
        inlineMath: [['\\(', '\\)']],
        displayMath: [['\\[', '\\]']],
    },
};

const Hero = () => (
    <section className="relative pt-32 pb-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#4F46E5] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#06B6D4] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-8 border border-white/10 shadow-sm backdrop-blur-sm">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span className="text-white text-sm font-bold tracking-wide uppercase">Smart Revision</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
                <LetterReveal text="Stop re-reading the" delay={100} /><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#818CF8]">whole textbook.</span>
            </h1>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Why revise what you already know? PrepOne generates bite-sized, personalized revision notes based on the exact mistakes you made in your mock tests.
            </p>
            <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl inline-flex items-center transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] font-bold text-lg group">
                <Sparkles className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Generate My Notes
            </a>
        </div>
    </section>
);

const TheProblem = () => (
    <section className="py-24 bg-[#F8F9FC] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-xl flex flex-col lg:flex-row items-center justify-between">

                <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
                        Beat the Forgetting Curve.
                    </h2>
                    <p className="font-body text-[#64748B] text-lg mb-8 leading-relaxed">
                        Science says you forget 70% of what you learn within 24 hours. The night before an exam, flipping through a 400-page physics book causes panic, not retention. You need precision.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <div className="bg-indigo-50 p-2 rounded-lg mr-4 mt-1">
                                <Target className="w-5 h-5 text-[#4F46E5]" />
                            </div>
                            <div>
                                <span className="font-bold text-[#0F172A] block text-lg">Hyper-Targeted Snippets</span>
                                <span className="text-[#64748B] text-sm">Notes are built strictly around the concepts where your Confidence Score is lowest.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-emerald-50 p-2 rounded-lg mr-4 mt-1">
                                <Zap className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                                <span className="font-bold text-[#0F172A] block text-lg">Read in 5 Minutes</span>
                                <span className="text-[#64748B] text-sm">Strictly high-yield formulas, key definitions, and examiner "trap" warnings. Zero fluff.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="lg:w-5/12 w-full relative">
                    {/* Visual Comparison */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#4F46E5] rounded-[2rem] transform rotate-3 opacity-10"></div>
                        <div className="bg-[#0F172A] p-6 rounded-[2rem] border border-gray-800 relative z-10 shadow-2xl">
                            <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-3">
                                <span className="text-white font-bold text-sm">Traditional Notes</span>
                                <span className="text-gray-500 text-xs">Page 1 of 40</span>
                            </div>
                            <div className="space-y-2 mb-6">
                                <div className="h-2 bg-gray-700 rounded w-full"></div>
                                <div className="h-2 bg-gray-700 rounded w-full"></div>
                                <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                                <div className="h-24 bg-gray-800 rounded w-full flex items-center justify-center text-gray-600 text-xs border border-gray-700">Generic Diagram</div>
                                <div className="h-2 bg-gray-700 rounded w-full"></div>
                            </div>

                            <div className="absolute top-[40%] -right-10 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 z-20 w-64 transform transition-transform hover:scale-105">
                                <div className="flex items-center space-x-2 mb-3">
                                    <Sparkles className="w-4 h-4 text-indigo-500" />
                                    <span className="text-[#0F172A] font-bold text-xs uppercase tracking-wider">PrepOne Note</span>
                                </div>
                                <p className="text-[#0F172A] font-bold text-sm mb-1">Gauss's Law Trap!</p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    You lost 2 marks here yesterday. Remember: The flux only depends on the charge <strong className="text-indigo-600">enclosed inside</strong> the surface, not outside.
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
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
                                    {React.cloneElement(f.icon, { className: 'w-6 h-6' })}
                                </div>
                                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-3">{f.title}</h3>
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
    <MathJaxContext config={mathJaxConfig}>
        <section className="py-24 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-12">Clean. Distraction-free. Fast.</h2>

            <div className="bg-[#1E293B] border border-gray-700 p-2 rounded-[2rem] md:rounded-[3rem] shadow-2xl max-w-3xl mx-auto overflow-hidden">
                <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden text-left">
                    <div className="bg-indigo-50 px-6 py-4 flex items-center justify-between border-b border-indigo-100">
                        <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-indigo-600" />
                            <span className="font-bold text-indigo-900">Chemistry: Electrochemistry</span>
                        </div>
                        <span className="bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                            High Priority
                        </span>
                    </div>

                    <div className="p-6 md:p-10">
                        <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Nernst Equation (Micro-Note)</h3>

                        <div className="bg-[#F8F9FC] border-l-4 border-[#4F46E5] p-4 rounded-r-xl mb-6">
                            <MathJax className="text-lg font-bold text-[#0F172A] mb-2">
                                {'\\(E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n}\\log(Q)\\)'}
                            </MathJax>
                            <p className="text-sm text-gray-600">Where <strong>n</strong> = number of moles of electrons transferred.</p>
                        </div>

                        <p className="text-sm text-red-500 font-bold mb-2 flex items-center">
                            <Zap className="w-4 h-4 mr-1" /> Frequent Mistake Alert
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-8">
                            In your last Mock Test, you forgot to balance the chemical equation before determining 'n'. Always balance first!
                        </p>

                        <button className="w-full bg-gray-50 text-indigo-600 py-3 rounded-xl font-bold text-sm border border-gray-200 hover:bg-indigo-50 transition-colors flex items-center justify-center">
                            <Bookmark className="w-4 h-4 mr-2" /> Save to Flashcards
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </MathJaxContext>
);

export default function RevisionNotesPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#4F46E5] selection:text-white">
            <SEO
                title="PrepOne Revision Notes | AI-Powered Study Material"
                description="Access personalized revision notes generated by AI. Focus on what you need to know with our intelligent study tools."
                canonicalUrl="https://solviq.in/prepone/revision-notes"
            />
            <Navbar />
            <Hero />
            <TheProblem />
            <FeatureGrid />
            <UIPreview />

            {/* CTA Section */}
            <section className="bg-white py-20 text-center border-t border-gray-200">
                <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6">Revise smarter today.</h2>
                <p className="text-[#64748B] mb-8 max-w-xl mx-auto text-lg">Take a test, and watch your personalized notes generate instantly.</p>
                <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl flex items-center justify-center mx-auto transition-all shadow-xl font-bold">
                    <Smartphone className="w-5 h-5 mr-3 text-indigo-300" />
                    Download PrepOne App
                </a>
            </section>

            <Footer />
        </div>
    );
}
