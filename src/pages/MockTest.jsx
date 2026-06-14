import React from 'react';
import {
    Timer, FileEdit, Smartphone, BrainCircuit,
    Target, PlayCircle, ArrowRight,
    CheckCircle2, BookOpen, UploadCloud, Lock
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import FadeIn from '../componenets/FadeIn';
import SEO from '../componenets/SEO';

const Hero = () => (
    <section className="relative pt-32 pb-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#4F46E5] rounded-full mix-blend-screen filter blur-[150px] opacity-30 animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#F59E0B] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-8 border border-white/10">
                <FileEdit className="w-4 h-4 text-indigo-400" />
                <span className="text-white text-sm font-bold tracking-wide uppercase">PrepOne Mock Tests</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
                <LetterReveal text="Practice like it's the" delay={100} /><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87fc4d] to-[#16A34A]">Real Exam.</span>
            </h1>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Stop practicing with random MCQs on your phone. Take full-length, board-aligned mock tests on physical paper, and let our AI evaluate your subjective answers instantly.
            </p>
            <button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl inline-flex items-center transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] font-bold text-lg group">
                <PlayCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Start Your First Free Mock
            </button>
        </div>
    </section>
);

const AppUISimulation = () => (
    <section className="py-20 bg-[#F8F9FC] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold text-[#0F172A]">Your Personal Test Library</h2>
                <p className="text-[#64748B] mt-2">New papers unlocked weekly based on your syllabus.</p>
            </div>

            {/* Mock App Interface */}
            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-200 overflow-hidden max-w-4xl mx-auto">
                <div className="bg-[#0F172A] px-6 py-4 flex items-center justify-between">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white/50 text-sm font-mono tracking-wider">PrepOne App View</div>
                </div>

                <div className="p-8 bg-[#F8F9FC]">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Active Test */}
                        <div className="bg-white p-6 rounded-2xl border-2 border-[#4F46E5] shadow-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#4F46E5] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">Recommended</div>
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-[#4F46E5] mb-4">
                                <FileEdit className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-[#0F172A] text-lg mb-1">Physics Pre-Board #3</h4>
                            <p className="text-sm text-gray-500 mb-4">Class 12 • Bihar Board • 70 Marks</p>
                            <button className="w-full bg-[#4F46E5] text-white py-2.5 rounded-lg font-bold text-sm hover:bg-[#4338CA] transition-colors">
                                Download PDF Paper
                            </button>
                        </div>

                        {/* Completed Test */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-200 opacity-90">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-500 font-bold">Score</div>
                                    <div className="text-2xl font-bold text-[#0F172A]">62<span className="text-sm text-gray-400">/70</span></div>
                                </div>
                            </div>
                            <h4 className="font-bold text-[#0F172A] text-lg mb-1">Optics Block Test</h4>
                            <p className="text-sm text-gray-500 mb-4">Evaluated on Oct 12</p>
                            <button className="w-full bg-gray-50 text-[#0F172A] py-2.5 rounded-lg font-bold text-sm border border-gray-200 hover:bg-gray-100 transition-colors">
                                View AI Analysis Report
                            </button>
                        </div>

                        {/* Locked Test */}
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 border-dashed relative">
                            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center rounded-2xl">
                                <Lock className="w-8 h-8 text-gray-400 mb-2" />
                                <span className="text-sm font-bold text-gray-500">Unlocks in 3 Days</span>
                            </div>
                            <div className="w-12 h-12 bg-gray-200 rounded-xl mb-4"></div>
                            <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 w-1/2 bg-gray-200 rounded mb-4"></div>
                            <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Workflow = () => {
    const steps = [
        { icon: <BookOpen />, title: "Download the Paper", desc: "Select your syllabus. We generate a fresh, 3-hour PDF paper based on past year trends." },
        { icon: <Timer />, title: "Write on Paper", desc: "Put your phone away. Sit at your desk with blank paper. Practice real handwriting speed." },
        { icon: <UploadCloud />, title: "Snap & Upload", desc: "Once time is up, use the PrepOne app to scan your handwritten sheets." },
        { icon: <BrainCircuit />, title: "Instant AI Score", desc: "Our AI reads your cursive, applies step-marking, and returns your score in 60 seconds." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">The physical-to-digital workflow.</h2>
                    <p className="text-[#64748B] text-lg">Because you can't type your board exams.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <FadeIn key={i} delay={i * 150} direction="up">
                            <div className="bg-white rounded-[2rem] p-8 h-full shadow-sm border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all relative group overflow-hidden">
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
                                <div className="relative z-10">
                                    <div className="text-5xl font-display font-bold text-gray-100 mb-4 group-hover:text-indigo-100 transition-colors">0{i + 1}</div>
                                    <h3 className="font-display text-xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                                    <p className="text-[#64748B] leading-relaxed text-sm">{step.desc}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PostTestAnalytics = () => (
    <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Side */}
                <div>
                    <h2 className="font-display text-4xl font-bold text-white mb-6 leading-tight">
                        Don't just look at your score. <span className="text-[#F59E0B]">Fix it.</span>
                    </h2>
                    <p className="font-body text-gray-400 text-lg mb-8 leading-relaxed">
                        Knowing you scored 82/100 is useless if you don't know why you lost 18 marks. PrepOne breaks down your test performance and instantly creates a remedial action plan.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1 border border-white/10">
                                <Target className="w-5 h-5 text-[#F59E0B]" />
                            </div>
                            <div>
                                <span className="font-bold text-white block text-lg">Micro-Mistake Tracking</span>
                                <span className="text-gray-400 text-sm block mt-1">See exactly where you lose marks—is it calculation errors, missing formula steps, or bad handwriting?</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1 border border-white/10">
                                <BrainCircuit className="w-5 h-5 text-[#4F46E5]" />
                            </div>
                            <div>
                                <span className="font-bold text-white block text-lg">Abhyas+ Integration</span>
                                <span className="text-gray-400 text-sm block mt-1">Our system automatically feeds your weak concepts into your daily adaptive practice queue.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Visual Mockup */}
                <div className="bg-[#1E293B] border border-gray-700 p-8 rounded-[3rem] shadow-2xl relative">
                    <div className="flex justify-between items-center mb-8 border-b border-gray-700 pb-6">
                        <div>
                            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">AI Feedback</p>
                            <p className="text-xl font-display font-bold text-white">Q4: Thermodynamics</p>
                        </div>
                        <div className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full font-bold text-sm border border-red-500/20">
                            -2 Marks
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-[#0F172A] p-4 rounded-xl border border-gray-800">
                            <p className="text-gray-300 text-sm italic">"Student applied the first law of thermodynamics correctly but failed to account for work done BY the gas during expansion..."</p>
                        </div>
                        <button className="w-full bg-[#4F46E5] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#4338CA] transition-colors flex items-center justify-center">
                            Generate Remedial Questions <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default function MockTestsPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#4F46E5] selection:text-white">
            <SEO
                title="PrepOne Mock Tests | AI-Evaluated, Board-Aligned Practice Papers"
                description="Experience the future of exam prep with PrepOne's AI-evaluated mock tests. Download full-length, board-aligned papers, practice on physical paper, and get instant AI feedback to boost your performance."
                canonicalUrl="https://solviq.in/prepone/mock-tests"
            />
            <Navbar />
            <Hero />
            <AppUISimulation />
            <Workflow />
            <PostTestAnalytics />

            {/* Simple CTA */}
            <section className="bg-white py-20 text-center border-t border-gray-200">
                <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6">Stop guessing. Start testing.</h2>
                <p className="text-[#64748B] mb-8 max-w-xl mx-auto text-lg">Get your first 3 full-length Mock Tests evaluated by AI absolutely free.</p>
                <button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl flex items-center justify-center mx-auto transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] font-bold">
                    <Smartphone className="w-5 h-5 mr-3" />
                    Download PrepOne App
                </button>
            </section>

            <Footer />
        </div>
    );
}