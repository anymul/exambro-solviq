import React from 'react';
import {
    Clock, Zap, Calendar, FileSpreadsheet,
    CheckCircle2, XCircle, ArrowRight, BrainCircuit,
    Hourglass, Target, Coffee
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import FadeIn from '../componenets/FadeIn';

const Hero = () => (
    <section className="relative pt-32 pb-24 bg-[#111210] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01696f] rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-8 border border-white/10">
                <Clock className="w-4 h-4 text-teal-400" />
                <span className="text-white text-sm font-bold tracking-wide uppercase">Time Management</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-6 leading-tight">
                <LetterReveal text="You started an institute to teach." delay={100} /><br />
                <span className="text-teal-400">Not to do data entry at 2 AM.</span>
            </h1>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Between setting papers, checking answer sheets, and updating Excel trackers, administrative tasks consume 40% of an educator's week. CoachOne automates the grunt work so you can focus on student growth.
            </p>
            <button className="bg-[#01696f] hover:bg-[#015257] text-white px-8 py-4 rounded-xl inline-flex items-center transition-all shadow-[0_0_20px_rgba(1,105,111,0.4)] font-bold text-lg">
                Reclaim Your Weekends <ArrowRight className="w-5 h-5 ml-3" />
            </button>
        </div>
    </section>
);

const Comparison = () => (
    <section className="py-24 bg-[#f7f6f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">The True Cost of Manual Management</h2>
                <p className="font-body text-gray-600 text-lg">How an average coaching institute spends time on a weekly test cycle.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* The Old Way */}
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-200 shadow-sm opacity-80">
                    <div className="flex items-center mb-8 pb-4 border-b border-gray-100">
                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mr-4">
                            <Hourglass className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                            <h3 className="font-display text-2xl font-bold text-gray-800">The Old Way</h3>
                            <p className="text-gray-500 text-sm">~ 18 Hours / Week</p>
                        </div>
                    </div>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <XCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                                <span className="font-bold text-gray-800 block">Hunting for Questions (4 hrs)</span>
                                <span className="text-gray-500 text-sm">Typing equations and formatting PDFs manually.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <XCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                                <span className="font-bold text-gray-800 block">Manual Checking (10 hrs)</span>
                                <span className="text-gray-500 text-sm">Evaluating subjective answers sheet by sheet over the weekend.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <XCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                                <span className="font-bold text-gray-800 block">Data Entry & Reports (4 hrs)</span>
                                <span className="text-gray-500 text-sm">Updating Excel sheets and messaging parents individually.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* The CoachOne Way */}
                <div className="bg-[#01696f] p-8 md:p-10 rounded-[2rem] shadow-xl relative transform md:-translate-y-4">
                    <div className="absolute top-0 right-0 bg-teal-400 text-[#01696f] text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                        90% Faster
                    </div>
                    <div className="flex items-center mb-8 pb-4 border-b border-teal-700">
                        <div className="w-12 h-12 bg-teal-800 rounded-xl flex items-center justify-center mr-4">
                            <Zap className="w-6 h-6 text-teal-400" />
                        </div>
                        <div>
                            <h3 className="font-display text-2xl font-bold text-white">The CoachOne Way</h3>
                            <p className="text-teal-200 text-sm">~ 1.5 Hours / Week</p>
                        </div>
                    </div>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-teal-400 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                                <span className="font-bold text-white block">AI Test Generation (10 mins)</span>
                                <span className="text-teal-100 text-sm">Select topics. AI auto-generates a formatted, board-aligned paper.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-teal-400 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                                <span className="font-bold text-white block">Bulk AI Evaluation (1 hr)</span>
                                <span className="text-teal-100 text-sm">Scan and upload. AI grades subjective answers with step-marking instantly.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-teal-400 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                                <span className="font-bold text-white block">Auto-Published Reports (10 mins)</span>
                                <span className="text-teal-100 text-sm">1-click WhatsApp dispatch of detailed analytics to all parents.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

const FeatureShowcase = () => (
    <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
                        Do more with the team you already have.
                    </h2>
                    <p className="font-body text-gray-600 text-lg mb-8 leading-relaxed">
                        Scaling an institute usually means hiring more evaluators, admins, and support staff. CoachOne acts as your digital workforce, allowing you to double your student intake without increasing your operational overhead.
                    </p>

                    <div className="space-y-6">
                        {[
                            { icon: <BrainCircuit />, title: "Eliminate Evaluation Bottlenecks", desc: "No more waiting a week to give test results. Publish results while the concepts are still fresh in students' minds." },
                            { icon: <FileSpreadsheet />, title: "Zero Data Migration", desc: "Stop jumping between Google Forms, Excel, and WhatsApp. Everything lives in one synchronized dashboard." },
                            { icon: <Coffee />, title: "Focus on High-Value Mentorship", desc: "Spend your saved time analyzing our predictive dashboards to identify weak students, rather than calculating percentages." }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#01696f]">
                                        {React.cloneElement(feature.icon, { className: 'w-6 h-6' })}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-display text-xl font-bold text-[#0F172A] mb-1">{feature.title}</h4>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual Graphic */}
                <div className="relative">
                    <div className="absolute inset-0 bg-[#01696f] rounded-[3rem] transform rotate-3 opacity-10"></div>
                    <div className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-2xl relative">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Monthly Time Saved</p>
                                <p className="text-4xl font-display font-bold text-[#0F172A]">68 Hours</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <Target className="w-6 h-6 text-green-600" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                { label: 'Paper Creation', saved: '12 hrs', width: 'w-[30%]' },
                                { label: 'Evaluation', saved: '40 hrs', width: 'w-[80%]' },
                                { label: 'Parent Comms', saved: '16 hrs', width: 'w-[40%]' },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm font-bold text-gray-700 mb-1">
                                        <span>{stat.label}</span>
                                        <span className="text-teal-600">{stat.saved} saved</span>
                                    </div>
                                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`h-full bg-[#01696f] rounded-full ${stat.width}`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const BottomCTA = () => (
    <section className="bg-[#111210] py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="font-display text-4xl font-bold text-white mb-6">Stop managing. Start scaling.</h2>
            <p className="font-body text-xl text-gray-400 mb-10">
                Let us show you how CoachOne can give you back 40+ hours every single month.
            </p>
            <button className="bg-[#01696f] hover:bg-[#015257] text-white px-8 py-4 rounded-xl flex items-center justify-center mx-auto transition-all font-bold text-lg">
                <Calendar className="w-5 h-5 mr-3" />
                Book a 20-Min Demo
            </button>
        </div>
    </section>
);

export default function TimeManagementMarketingPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <Navbar />
            <Hero />
            <Comparison />
            <FeatureShowcase />
            <BottomCTA />
            <Footer />
        </div>
    );
}