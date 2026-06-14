import React from 'react';
import {
    History, TrendingUp, BookOpen, Smartphone,
    BrainCircuit, Target, ArrowRight, CheckCircle2,
    Calendar, Search, BarChart3, Filter
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import FadeIn from '../componenets/FadeIn';
import SEO from '../componenets/SEO';


const Hero = () => (
    <section className="relative pt-32 pb-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#4F46E5] rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-8 border border-white/10">
                <History className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-white text-sm font-bold tracking-wide uppercase">PrepOne PYQ Engine</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
                <LetterReveal text="5 years of Board Papers." delay={100} /><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#FCD34D]">Decoded by AI.</span>
            </h1>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Don't just read the solutions. See which topics repeat every year, practice chapter-wise, and get your handwritten PYQ answers graded against the official board rubrics.
            </p>
            <button className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] px-8 py-4 rounded-xl inline-flex items-center transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] font-bold text-lg group">
                <Search className="w-5 h-5 mr-3 group-hover:scale-15 transition-transform" />
                Explore the PYQ Library
            </button>
        </div>
    </section>
);

const TrendAnalysis = () => (
    <section className="py-24 bg-[#F8F9FC] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Side */}
                <div>
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
                        Know exactly what the examiner will ask.
                    </h2>
                    <p className="font-body text-[#64748B] text-lg mb-8 leading-relaxed">
                        We fed 5,000+ past year questions into our AI to map the DNA of your board exams. PrepOne highlights high-weightage micro-concepts that are statistically guaranteed to appear.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <div className="bg-amber-100 p-2 rounded-lg mr-4 mt-1">
                                <TrendingUp className="w-5 h-5 text-[#F59E0B]" />
                            </div>
                            <div>
                                <span className="font-bold text-[#0F172A] block text-lg">Predictive Weightage</span>
                                <span className="text-[#64748B] text-sm">"Ray Optics has appeared in 9 out of the last 5 years, carrying an average of 7 marks."</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-indigo-100 p-2 rounded-lg mr-4 mt-1">
                                <Filter className="w-5 h-5 text-[#4F46E5]" />
                            </div>
                            <div>
                                <span className="font-bold text-[#0F172A] block text-lg">Smart Filtering</span>
                                <span className="text-[#64748B] text-sm">Filter 5 years of papers by chapter, topic, or question type (Objective vs Subjective) in one tap.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* UI Mockup Side */}
                <div className="bg-white border border-gray-200 p-8 rounded-[3rem] shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-[100px] z-0"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                            <div>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Concept Frequency</p>
                                <p className="text-xl font-display font-bold text-[#0F172A]">Physics: Magnetism</p>
                            </div>
                            <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold text-sm">
                                High Probability
                            </div>
                        </div>

                        {/* Mock Bar Chart - FIXED */}
                        <div className="flex items-end justify-between h-48 mb-4 space-x-2 border-b border-gray-100 pb-2">
                            {[4, 6, 3, 7, 5, 8, 4, 9, 6, 8].map((height, idx) => {
                                // Corrected Year Math
                                const year = 2014 + idx;
                                return (
                                    <div key={idx} className="w-full flex flex-col items-center justify-end h-full group cursor-pointer">
                                        <div className="opacity-0 group-hover:opacity-100 text-xs font-bold text-[#4F46E5] mb-1 transition-opacity">
                                            {height}M
                                        </div>
                                        <div
                                            className={`w-full rounded-t-md transition-all duration-300 ${height >= 7 ? 'bg-[#F59E0B] group-hover:bg-[#D97706]' : 'bg-indigo-100 group-hover:bg-indigo-200'}`}
                                            style={{ height: `${height * 10}%`, minHeight: '4px' }}
                                        ></div>
                                        <div className="text-[10px] text-gray-400 font-bold mt-2 pt-2">
                                            {year}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
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
            title: "Chapter-wise PYQs",
            desc: "Just finished studying Thermodynamics? Immediately solve every board question asked from this chapter since 2014.",
            color: "indigo"
        },
        {
            icon: <Calendar />,
            title: "Year-wise Full Papers",
            desc: "Ready for the real deal? Sit down for 3 hours and attempt the exact 2023 paper under timed exam conditions.",
            color: "amber"
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
                            ? 'border-indigo-50 bg-indigo-50/30 hover:border-[#4F46E5]'
                            : 'border-amber-50 bg-amber-50/30 hover:border-[#F59E0B]'
                            }`}>
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm ${mode.color === 'indigo' ? 'bg-[#4F46E5] text-white' : 'bg-[#F59E0B] text-white'
                                }`}>
                                {React.cloneElement(mode.icon, { className: 'w-8 h-8' })}
                            </div>
                            <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">{mode.title}</h3>
                            <p className="font-body text-[#64748B] leading-relaxed text-lg">{mode.desc}</p>
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
                    <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/10">
                        <BrainCircuit className="w-4 h-4 text-[#87fc4d]" />
                        <span className="text-white text-sm font-bold tracking-wide uppercase">AutoScore Integration</span>
                    </div>
                    <h2 className="font-display text-4xl font-bold text-white mb-6 leading-tight">
                        Graded by the official marking scheme.
                    </h2>
                    <p className="font-body text-gray-400 text-lg mb-8 leading-relaxed">
                        If you write the 2022 board paper, our AI doesn't just guess your marks. It evaluates your handwritten answers against the exact step-marking rubric released by the board for that specific year.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center text-gray-300">
                            <CheckCircle2 className="w-5 h-5 text-[#87fc4d] mr-3" /> Real board rubrics trained into the LLM
                        </li>
                        <li className="flex items-center text-gray-300">
                            <CheckCircle2 className="w-5 h-5 text-[#87fc4d] mr-3" /> Step-marking for partial derivations
                        </li>
                        <li className="flex items-center text-gray-300">
                            <CheckCircle2 className="w-5 h-5 text-[#87fc4d] mr-3" /> Detailed examiner commentary on your mistakes
                        </li>
                    </ul>
                </div>

                <div className="lg:w-5/12 w-full">
                    <div className="bg-[#0F172A] p-6 rounded-2xl border border-gray-700">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-400 font-bold text-sm">2022 Physics Paper</span>
                            <span className="text-indigo-400 font-bold text-sm flex items-center"><Target className="w-4 h-4 mr-1" /> Rubric Match</span>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl flex justify-between">
                                <div>
                                    <p className="text-green-400 text-sm font-bold">1. Gauss's Law Statement</p>
                                    <p className="text-gray-400 text-xs mt-1">Matched official keyword: "enclosed charge"</p>
                                </div>
                                <span className="text-green-400 font-bold">+1 Mark</span>
                            </div>
                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex justify-between">
                                <div>
                                    <p className="text-red-400 text-sm font-bold">2. Mathematical Derivation</p>
                                    <p className="text-gray-400 text-xs mt-1">Missed integration limits as per 2022 guidelines.</p>
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
        <div className="min-h-screen bg-white font-body selection:bg-[#F59E0B] selection:text-[#0F172A]">
            <SEO
                title="5 Years Board Exam PYQs Decoded by AI | PrepOne"
                description="Practice chapter-wise Past Year Questions (PYQs) for CBSE and Bihar Board. Get your handwritten answers graded against official board marking schemes."
                keywords="board exam PYQs, previous year question papers solved, chapter-wise PYQs class 12, AI PYQ evaluation, CBSE 10 year papers"
                canonicalUrl="https://yourwebsite.com/prepone/pyqs"
            />
            <Navbar />
            <Hero />
            <TrendAnalysis />
            <PracticeModes />
            <OfficialRubricGrading />

            {/* CTA Section */}
            <section className="bg-[#F8F9FC] py-20 text-center border-t border-gray-200">
                <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6">Unlock 5 years of Mastery.</h2>
                <p className="text-[#64748B] mb-8 max-w-xl mx-auto text-lg">Stop searching the internet for blurry PDFs. Get fully evaluated PYQs right in your pocket.</p>
                <button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl flex items-center justify-center mx-auto transition-all shadow-xl font-bold">
                    <Smartphone className="w-5 h-5 mr-3 text-indigo-300" />
                    Download PrepOne App
                </button>
            </section>

            <Footer />
        </div>
    );
}