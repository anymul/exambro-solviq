import { useState } from 'react';
import {
    Sparkles,
    CheckCircle2,
    PlayCircle,
    ArrowRight,
    Scan,
    Target,
    Clock,
    BookOpen,
    BrainCircuit,
    ChevronDown,
    TrendingUp,
    FileText,
    X,
    RotateCw,
    Star
} from 'lucide-react';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';
import FadeIn from './componenets/FadeIn';
import LetterReveal from './componenets/LetterReveal';
import SEO from './componenets/SEO';
import BackendStatusBadge from './componenets/BackendStatusBadge';
import {
    buildPrepOneAppSchema,
    buildFaqSchema,
    buildBreadcrumbSchema
} from './componenets/Schema';

import homescreen from './assets/UI_Home_Feed.png';
import scannerEvaluationImg from './assets/scanner_evaluation.png';
import mockTestLibraryImg from './assets/mock_test_library.png';
import postTestAnalysisImg from './assets/post_test_analysis.png';
import pyqAnalyticsImg from './assets/pyq_analytics.png';

const PREPONE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.solviq.prepone';

// =========================================================================
// 1. HERO SECTION
// =========================================================================
const Hero = () => {
    return (
        <section className="relative bg-[#0B0C10] pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden text-white">
            {/* Subtle Brand Ambient Glows (#5046E5 matched) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-10 right-1/4 w-[520px] h-[520px] bg-[#5046E5] rounded-full mix-blend-screen filter blur-[150px] opacity-25" />
                <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-[#3B82F6] rounded-full mix-blend-screen filter blur-[160px] opacity-15" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Value Proposition */}
                    <div className="lg:col-span-7 text-center lg:text-left">
                        {/* IITian Trust Badge */}
                        <FadeIn delay={100} direction="down">
                            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-200 mb-6 backdrop-blur-md shadow-sm">
                                <Sparkles className="w-3.5 h-3.5 text-[#818CF8]" />
                                <span className="text-[#818CF8] font-bold uppercase tracking-wider text-[11px]">
                                    Built by IITians
                                </span>
                                <span className="text-gray-500">•</span>
                                <span className="text-gray-300 text-[11px] font-medium">Your Personal AI Exam Strategist</span>
                            </div>
                        </FadeIn>

                        {/* Main Headline with Selective Blurple Accent */}
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-[1.12] mb-6 tracking-tight">
                            <LetterReveal text="Prepare smarter." delay={100} threshold={0.1} /> <br />
                            <LetterReveal text="Write better." delay={300} threshold={0.1} /> <br />
                            <span className="bg-gradient-to-r from-[#818CF8] via-[#A5B4FC] to-[#93C5FD] bg-clip-text text-transparent inline-block">
                                <LetterReveal text="Score higher." delay={500} threshold={0.1} />
                            </span>
                        </h1>

                        <FadeIn delay={200} direction="up">
                            <p className="font-body text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Stop wondering what to study next. PrepOne analyzes your strengths and weaknesses to create a smarter learning path with instant handwritten answer evaluation, personalized practice, chapter PYQs, and realistic board mock tests.
                            </p>
                        </FadeIn>

                        {/* Slogan Pill */}
                        <FadeIn delay={300} direction="up">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-[#818CF8] mb-8 uppercase tracking-wider">
                                <span>Prep Earlier. Prep Better.</span>
                            </div>
                        </FadeIn>

                        {/* Action Buttons */}
                        <FadeIn delay={400} direction="up">
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-10">
                                <a
                                    href={PREPONE_PLAY_STORE_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-[#5046E5] hover:bg-[#4338CA] text-white px-7 py-3.5 rounded-xl flex items-center justify-center transition-all shadow-[0_0_24px_rgba(80,70,229,0.4)] hover:-translate-y-0.5 font-bold text-base group"
                                >
                                    <PlayCircle className="w-5 h-5 mr-2 text-white group-hover:scale-110 transition-transform" />
                                    Download on Google Play
                                </a>
                                <a
                                    href="#features"
                                    className="bg-white/10 hover:bg-white/15 text-white border border-white/15 px-6 py-3.5 rounded-xl flex items-center justify-center transition-all font-semibold text-sm backdrop-blur-sm hover:-translate-y-0.5"
                                >
                                    Explore Features <ArrowRight className="w-4 h-4 ml-2 text-[#818CF8]" />
                                </a>
                            </div>
                        </FadeIn>

                        {/* Quick Trust Highlights */}
                        <FadeIn delay={500} direction="up">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 text-left">
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10">
                                    <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
                                    <span>AI Handwritten Evaluation</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10">
                                    <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
                                    <span>CBSE 12 & BSEB 10/12</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10 col-span-2 sm:col-span-1">
                                    <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
                                    <span>Hindi & English Medium</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column: High-Impact Device Showcase */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                        <FadeIn delay={300} direction="right">
                            <div className="relative">
                                {/* Floating Badge Top Left */}
                                <div className="absolute -top-4 -left-6 sm:-left-10 bg-[#0F172A] border border-gray-700/80 rounded-2xl p-3 shadow-2xl z-30 hidden sm:flex items-center gap-3 backdrop-blur-md">
                                    <div className="w-8 h-8 rounded-lg bg-[#5046E5]/20 text-[#818CF8] flex items-center justify-center font-bold">
                                        <Scan className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold text-white leading-none">60-Sec AI Check</p>
                                        <p className="text-[9px] text-gray-400 mt-1">Step-by-step marking</p>
                                    </div>
                                </div>

                                {/* Floating Badge Bottom Right */}
                                <div className="absolute -bottom-5 -right-6 sm:-right-8 bg-[#0F172A] border border-gray-700/80 rounded-2xl p-3 shadow-2xl z-30 hidden sm:flex items-center gap-3 backdrop-blur-md">
                                    <div className="w-8 h-8 rounded-lg bg-[#5046E5]/20 text-[#818CF8] flex items-center justify-center font-bold">
                                        <Target className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold text-white leading-none">Targeted Weak Topics</p>
                                        <p className="text-[9px] text-[#818CF8] font-semibold mt-1">
                                            +15% Score Boost
                                        </p>
                                    </div>
                                </div>

                                {/* Phone Frame */}
                                <div className="relative w-[265px] sm:w-[290px] aspect-[9/19] bg-gray-950 border-[8px] border-gray-800 rounded-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-full z-20" />
                                    <img
                                        src={homescreen}
                                        alt="PrepOne AI Exam Strategist App Interface"
                                        className="w-full h-full object-cover object-top"
                                        loading="eager"
                                        decoding="async"
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

// =========================================================================
// 2. TRUST STRIP & SUPPORTED BOARDS
// =========================================================================
const TrustStrip = () => {
    const supported = [
        {
            board: 'CBSE Class 12 Science',
            tags: 'Physics, Chemistry, Maths, Biology & English Core'
        },
        {
            board: 'Bihar Board (BSEB) Class 10',
            tags: 'Matriculation • Hindi & English Medium'
        },
        {
            board: 'Bihar Board (BSEB) Class 12',
            tags: 'Intermediate Science & Arts • Bilingual'
        }
    ];

    const stats = [
        { value: '50,000+', label: 'Exam Questions & PYQs' },
        { value: '60 Sec', label: 'AI Handwritten Grading' },
        { value: '4.8 ★', label: 'Average Student Rating' },
        { value: 'IITians', label: 'Pedagogy & AI Architecture' }
    ];

    return (
        <section className="bg-white py-12 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats Row */}
                <FadeIn direction="up">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10 border-b border-gray-100 text-center">
                        {stats.map((s, idx) => (
                            <div key={idx} className="group">
                                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A] group-hover:text-[#5046E5] transition-colors">
                                    {s.value}
                                </div>
                                <div className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* Supported Boards Row */}
                <FadeIn delay={150} direction="up">
                    <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-6 bg-[#F8F9FC] p-4 sm:p-6 rounded-2xl border border-gray-200/90">
                        <div className="text-center lg:text-left">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#5046E5] block mb-1">
                                Official Syllabus Alignment
                            </span>
                            <h3 className="text-lg font-bold text-[#0F172A]">Fully Supported Boards & Streams</h3>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-3 w-full lg:w-auto">
                            {supported.map((item, i) => (
                                <div key={i} className="bg-white p-3 rounded-xl border border-gray-200 shadow-xs hover:border-[#C7D2FE] transition-colors">
                                    <div className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5 mb-0.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5046E5] shrink-0" />
                                        <span>{item.board}</span>
                                    </div>
                                    <div className="text-[11px] text-gray-500">{item.tags}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

// =========================================================================
// 3. THE CORE PROBLEM (WHY STANDARD PRACTICE FAILS)
// =========================================================================
const ProblemSection = () => {
    const problems = [
        {
            num: '01',
            title: 'The MCQ Practice Trap',
            desc: 'Board exams are written by hand on paper, not tapped on a phone screen. Solving 500 MCQs does not prepare you for writing 5-mark derivations, diagrams, and balancing equations under time pressure.',
            tag: 'Result: Lost marks in steps & theory'
        },
        {
            num: '02',
            title: 'Delayed & Vague Test Checking',
            desc: 'Coaching centers take 10-14 days to return your test papers. When you finally get your copy back, you only see a total score like 48/70 without any line-by-line notes on where you dropped steps or units.',
            tag: 'Result: You repeat the exact same mistakes'
        },
        {
            num: '03',
            title: 'Random, Unfocused Revision',
            desc: 'Without diagnostic data, students spend 80% of their revision time re-reading chapters they already find easy, while high-weightage weak concepts slip through the cracks until the exam morning.',
            tag: 'Result: Unpredictable board scores'
        }
    ];

    return (
        <section className="bg-[#f7f6f2] py-20 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <FadeIn direction="down">
                        <div className="inline-flex items-center px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                            The Board Exam Dilemma
                        </div>
                    </FadeIn>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
                        <LetterReveal text="Why solving questions isn't enough to score 95%+" delay={100} threshold={0.1} />
                    </h2>
                    <FadeIn delay={200} direction="up">
                        <p className="font-body text-gray-600 text-base sm:text-lg leading-relaxed">
                            In board exams, every single step carries marks. If you only practice objective questions and never get handwritten feedback, you're leaving your final result to chance.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {problems.map((p, idx) => (
                        <FadeIn key={idx} delay={idx * 120} direction="up">
                            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow h-full">
                                <div>
                                    <span className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-sm mb-5 border border-slate-200">
                                        {p.num}
                                    </span>
                                    <h3 className="font-bold text-[#0F172A] text-xl mb-3">{p.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{p.desc}</p>
                                </div>
                                <div className="bg-amber-50 p-3 rounded-xl text-xs font-semibold text-amber-800 border border-amber-100">
                                    {p.tag}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

// =========================================================================
// 4. THE PREPONE METHOD (4-STEP SUCCESS LOOP)
// =========================================================================
const MethodSection = () => {
    const steps = [
        {
            num: '1',
            title: 'Targeted Practice',
            desc: 'Solve curated questions matched strictly to your CBSE or Bihar Board syllabus and chapter weightage.',
            icon: Target
        },
        {
            num: '2',
            title: 'Write by Hand',
            desc: 'Write your complete answer on actual paper just like you will in the 3-hour board exam hall.',
            icon: FileText
        },
        {
            num: '3',
            title: 'Instant AI Evaluation',
            desc: 'Snap a picture. AutoScore AI checks your answer in 60s, awarding step marks and flagging missing formulas.',
            icon: Scan
        },
        {
            num: '4',
            title: 'Master & Retain',
            desc: 'PrepOne detects weak topics and schedules smart spaced revision so you retain concepts until exam day.',
            icon: RotateCw
        }
    ];

    return (
        <section className="bg-white py-20 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <FadeIn direction="down">
                        <div className="inline-flex items-center px-3.5 py-1 rounded-md bg-[#EEF2FF] border border-[#C7D2FE] text-xs font-bold text-[#4338CA] uppercase tracking-wider mb-3">
                            The PrepOne Advantage
                        </div>
                    </FadeIn>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
                        <LetterReveal text="A complete preparation system built for board success" delay={100} threshold={0.1} />
                    </h2>
                    <FadeIn delay={200} direction="up">
                        <p className="font-body text-gray-600 text-base sm:text-lg">
                            Practice. Write. Get feedback. Understand. Revise. Test. Improve.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {steps.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <FadeIn key={i} delay={i * 120} direction="up">
                                <div className="bg-[#F8F9FC] p-6 rounded-2xl border border-gray-200 relative flex flex-col justify-between hover:border-[#C7D2FE] transition-colors h-full">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-center text-[#5046E5]">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-bold text-[#4338CA] bg-[#EEF2FF] border border-[#C7D2FE] px-2.5 py-0.5 rounded-full">
                                                Step {s.num}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#0F172A] mb-2">{s.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// =========================================================================
// 5. KEY FEATURE SHOWCASES WITH REAL SCREENSHOTS
// =========================================================================
const FeaturesShowcase = () => {
    return (
        <section id="features" className="bg-[#f7f6f2] py-24 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <FadeIn direction="down">
                        <div className="inline-flex items-center px-3.5 py-1 rounded-md bg-[#EEF2FF] border border-[#C7D2FE] text-xs font-bold text-[#4338CA] uppercase tracking-wider mb-3">
                            Key Features
                        </div>
                    </FadeIn>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
                        <LetterReveal text="Everything you need to master board exams in one app" delay={100} threshold={0.1} />
                    </h2>
                    <FadeIn delay={200} direction="up">
                        <p className="font-body text-gray-600 text-base sm:text-lg">
                            Built from the ground up for CBSE & BSEB students. No generic video lectures or endless scrolling. Just high-precision practice, instant evaluation, and actionable feedback.
                        </p>
                    </FadeIn>
                </div>

                {/* Feature 1: AI Subjective Answer Evaluation */}
                <FadeIn direction="up">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4338CA] bg-[#EEF2FF] border border-[#C7D2FE] px-3 py-1 rounded-md uppercase tracking-wider">
                                <Scan className="w-3.5 h-3.5 text-[#5046E5]" />
                                <span>AutoScore AI Technology</span>
                            </div>
                            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                                AI Subjective Answer Evaluation. <br />
                                <span className="text-[#5046E5]">
                                    Get marks & feedback in 60 seconds.
                                </span>
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Board exams are written exams. Write your solutions on actual paper with pen. Take a photo through the PrepOne app and receive immediate step-marking analysis based on official CBSE & Bihar Board answer keys.
                            </p>
                            <div className="space-y-3 pt-2">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#5046E5] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-sm text-[#0F172A] block">Partial Step Marking:</strong>
                                        <span className="text-xs text-gray-600">Earn marks for correct formulas and derivation steps even if your final arithmetic has a typo.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#5046E5] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-sm text-[#0F172A] block">Presentation & Unit Checks:</strong>
                                        <span className="text-xs text-gray-600">Get alerts for missing SI units, omitted diagrams, or unclear step transitions.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#5046E5] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-sm text-[#0F172A] block">Hinglish & English Feedback:</strong>
                                        <span className="text-xs text-gray-600">Understand clear explanations in the language you are most comfortable with.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 flex justify-center">
                            <div className="relative w-full max-w-md bg-white p-3 rounded-3xl border border-gray-200 shadow-xl overflow-hidden group">
                                <img
                                    src={scannerEvaluationImg}
                                    alt="PrepOne AI Handwritten Scanner Evaluation Preview"
                                    className="w-full h-auto rounded-2xl object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Feature 2: Smart Personalized Practice */}
                <FadeIn direction="up">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
                            {/* Interactive UI Mockup for Weak Concepts */}
                            <div className="w-full max-w-md bg-white rounded-3xl p-6 border border-gray-200 shadow-xl">
                                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase text-[#5046E5] tracking-wider block">
                                            Diagnostic Engine
                                        </span>
                                        <h4 className="font-bold text-[#0F172A] text-base">Physics: Ray Optics Diagnostics</h4>
                                    </div>
                                    <span className="text-xs bg-[#EEF2FF] text-[#4338CA] font-bold px-2.5 py-1 rounded-md">Live Path</span>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="p-3.5 rounded-xl border border-[#C7D2FE] bg-[#EEF2FF]/60 flex justify-between items-center text-xs">
                                        <div>
                                            <span className="font-bold text-gray-900 block">Lens Formula & Magnification</span>
                                            <span className="text-gray-500 text-[11px]">14 questions mastered</span>
                                        </div>
                                        <span className="font-bold text-[#4338CA] bg-[#E0E7FF] px-2 py-0.5 rounded">92% Strong</span>
                                    </div>

                                    <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/70 flex justify-between items-center text-xs">
                                        <div>
                                            <span className="font-bold text-gray-900 block">Sign Convention Traps</span>
                                            <span className="text-gray-500 text-[11px]">Convex vs Concave mirror slips</span>
                                        </div>
                                        <span className="font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">58% Review</span>
                                    </div>

                                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex justify-between items-center text-xs">
                                        <div>
                                            <span className="font-bold text-slate-900 block">Lens Maker's Derivation</span>
                                            <span className="text-slate-600 text-[11px]">Surface 2 refraction sign slips</span>
                                        </div>
                                        <span className="font-bold text-slate-800 bg-slate-200 px-2 py-0.5 rounded">34% Priority</span>
                                    </div>
                                </div>

                                <div className="bg-[#F8F9FC] p-4 rounded-xl border border-gray-200 text-xs">
                                    <div className="font-bold text-[#0F172A] mb-1">Recommended Adaptive Queue:</div>
                                    <p className="text-gray-600 text-[11px] leading-relaxed">
                                        3 targeted questions on <strong>Thin Lens Surface Refraction</strong> assigned next. Complete to boost your Board Readiness by +8%.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4338CA] bg-[#EEF2FF] border border-[#C7D2FE] px-3 py-1 rounded-md uppercase tracking-wider">
                                <BrainCircuit className="w-3.5 h-3.5 text-[#5046E5]" />
                                <span>ABHYAS+ Adaptive Learning</span>
                            </div>
                            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                                Smart Personalized Practice. <br />
                                <span className="text-[#5046E5]">
                                    Practice what you actually need.
                                </span>
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                No two students have the exact same gaps. Our AI continuously assesses your speed, accuracy, and mistake types to build a customized study path that turns your weakest concepts into scoring strengths.
                            </p>
                            <div className="space-y-3 pt-2">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#5046E5] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-sm text-[#0F172A] block">Weak Topic Detection:</strong>
                                        <span className="text-xs text-gray-600">Instantly flags if you are dropping marks due to conceptual gaps, derivation steps, or arithmetic.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#5046E5] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-sm text-[#0F172A] block">Calibrated Difficulty:</strong>
                                        <span className="text-xs text-gray-600">Starts at your current mastery and gradually levels up to rigorous board exam standard.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Feature 3: Chapter-wise & Full Syllabus Mock Tests */}
                <FadeIn direction="up">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-md uppercase tracking-wider">
                                <Clock className="w-3.5 h-3.5 text-amber-700" />
                                <span>Real Exam Simulation</span>
                            </div>
                            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                                Chapter & Full Syllabus Mock Tests. <br />
                                <span className="text-[#5046E5]">
                                    Experience the 3-hour exam pressure.
                                </span>
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Chapter practice builds confidence; full 3-hour mock tests build board exam readiness. Practice with mock papers crafted strictly to the latest CBSE and Bihar Board blueprints with Sections A through E.
                            </p>
                            <div className="space-y-3 pt-2">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#5046E5] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-sm text-[#0F172A] block">Latest Exam Patterns:</strong>
                                        <span className="text-xs text-gray-600">Includes assertion-reasoning, case-based questions, and 50% objective ratio for Bihar Board.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#5046E5] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-sm text-[#0F172A] block">Realistic Exam Countdown:</strong>
                                        <span className="text-xs text-gray-600">Ticking timer teaches time distribution across long derivations and short questions.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 flex justify-center">
                            <div className="relative w-full max-w-md bg-white p-3 rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                                <img
                                    src={mockTestLibraryImg}
                                    alt="PrepOne Mock Test Library Preview"
                                    className="w-full h-auto rounded-2xl object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Feature 4: Previous Year Questions (PYQs) */}
                <FadeIn direction="up">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
                            <div className="relative w-full max-w-md bg-white p-3 rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                                <img
                                    src={pyqAnalyticsImg}
                                    alt="PrepOne PYQ Analytics and Exam Papers Preview"
                                    className="w-full h-auto rounded-2xl object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4338CA] bg-[#EEF2FF] border border-[#C7D2FE] px-3 py-1 rounded-md uppercase tracking-wider">
                                <BookOpen className="w-3.5 h-3.5 text-[#5046E5]" />
                                <span>10+ Years Official Archive</span>
                            </div>
                            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                                Previous Year Questions (PYQs). <br />
                                <span className="text-[#5046E5]">
                                    Master how your board asks questions.
                                </span>
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Don't memorize yesterday's answers; understand the recurring blueprints. PrepOne organizes past 10 years of CBSE and BSEB board papers by chapter and weightage so you know which topics carry maximum marks.
                            </p>
                            <div className="space-y-3 pt-2">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#5046E5] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-sm text-[#0F172A] block">Chapter-Wise PYQ Drill:</strong>
                                        <span className="text-xs text-gray-600">Solve every question that ever appeared in your board for each chapter.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#5046E5] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-sm text-[#0F172A] block">Model Handwritten Solutions:</strong>
                                        <span className="text-xs text-gray-600">Review topper-grade step presentation and diagram formatting for full marks.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Feature 5 & 6: Progress Analytics & Smart Revision */}
                <FadeIn direction="up">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4338CA] bg-[#EEF2FF] border border-[#C7D2FE] px-3 py-1 rounded-md uppercase tracking-wider">
                                <TrendingUp className="w-3.5 h-3.5 text-[#5046E5]" />
                                <span>Spaced Revision & Analytics</span>
                            </div>
                            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                                Progress Analytics & Smart Revision. <br />
                                <span className="text-[#5046E5]">
                                    Never forget a formula on exam day.
                                </span>
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Cramming 500 pages right before the exam leads to panic and forgotten formulas. PrepOne uses active recall flashcards and spaced reminders based on your decay curve, ensuring concepts stay fresh in your memory.
                            </p>
                            <div className="space-y-3 pt-2">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#5046E5] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-sm text-[#0F172A] block">Board Readiness Score:</strong>
                                        <span className="text-xs text-gray-600">See a single calibrated score predicting your board percentage based on real test performance.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#5046E5] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-sm text-[#0F172A] block">Smart Revision Reminders:</strong>
                                        <span className="text-xs text-gray-600">Timely prompts to review formulas and reactions before they slip from memory.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 flex justify-center">
                            <div className="relative w-full max-w-md bg-white p-3 rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                                <img
                                    src={postTestAnalysisImg}
                                    alt="PrepOne Post Test Analysis and Analytics Preview"
                                    className="w-full h-auto rounded-2xl object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

// =========================================================================
// 6. SUPPORTED BOARDS & FULL SUBJECT CATALOG
// =========================================================================
const SubjectCatalog = () => {
    const [activeTab, setActiveTab] = useState('cbse12');

    const catalogs = {
        cbse12: {
            title: 'CBSE Class 12 Science',
            subtitle: 'Board Exam Pattern & Full NCERT Curriculum',
            medium: 'English Medium',
            subjects: [
                { name: 'Physics', desc: 'Derivations, Ray/Wave Optics, Electrostatics, Magnetism & Modern Physics' },
                { name: 'Chemistry', desc: 'Organic Mechanisms, Physical Numericals, Coordination & Biomolecules' },
                { name: 'Mathematics', desc: 'Calculus, Vectors & 3D Geometry, Linear Programming & Matrices' },
                { name: 'Biology', desc: 'Genetics, Human Physiology, Biotechnology & Ecology' },
                { name: 'English Core', desc: 'Reading Comprehension, Note Making, Notice/Report Writing & Literature' },
                { name: 'Computer Science', desc: 'Python Programming, SQL Queries, Computer Networks' }
            ]
        },
        bseb10: {
            title: 'Bihar Board (BSEB) Class 10',
            subtitle: 'Matriculation Exam • 50% Objective + 50% Subjective',
            medium: 'Hindi & English Medium',
            subjects: [
                { name: 'Mathematics (गणित)', desc: 'Real Numbers, Quadratic Equations, Trigonometry & Geometry proofs' },
                { name: 'Science (विज्ञान)', desc: 'Physics (भौतिकी), Chemistry (रसायन) & Biology (जीव विज्ञान)' },
                { name: 'Social Science (सामाजिक विज्ञान)', desc: 'History (इतिहास), Civics (नागरिक शास्त्र), Geography (भूगोल) & Economics (अर्थशास्त्र)' },
                { name: 'Hindi (हिंदी)', desc: 'गोधूलि भाग 2, वर्णिका भाग 2, व्याकरण एवं निबंध लेखन' },
                { name: 'English', desc: 'Panorama Part 2, Reading, Writing Skills & Grammar' },
                { name: 'Sanskrit (संस्कृत)', desc: 'पीयूषम् भाग 2, व्याकरण, पत्र लेखन एवं अनुवाद' }
            ]
        },
        bseb12: {
            title: 'Bihar Board (BSEB) Class 12',
            subtitle: 'Intermediate Science & Arts • Bilingual Evaluation',
            medium: 'Hindi & English Medium',
            subjects: [
                { name: 'Physics (भौतिकी)', desc: 'Complete 70-Mark Theory + 35 Objective OMR format' },
                { name: 'Chemistry (रसायनशास्त्र)', desc: 'Physical, Inorganic, Organic mechanisms & equations' },
                { name: 'Mathematics (गणित)', desc: 'Integration, Differential Equations, Matrices & Determinants' },
                { name: 'Biology (जीव विज्ञान)', desc: 'Genetics, Ecology, Reproductive Biology with diagrams' },
                { name: 'Hindi 100 Marks (हिंदी)', desc: 'दिगंत भाग 2, गद्य खंड, पद्य खंड एवं व्याकरण' },
                { name: 'English 100 Marks', desc: 'Rainbow Part 2, Story of English, Essays & Grammar' },
                { name: 'History (इतिहास)', desc: 'Ancient, Medieval & Modern Indian History' },
                { name: 'Political Science (राजनीति शास्त्र)', desc: 'Contemporary World Politics & Politics in India Since Independence' }
            ]
        }
    };

    const current = catalogs[activeTab];

    return (
        <section className="bg-white py-20 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <FadeIn direction="down">
                        <div className="inline-flex items-center px-3.5 py-1 rounded-md bg-[#EEF2FF] border border-[#C7D2FE] text-xs font-bold text-[#4338CA] uppercase tracking-wider mb-3">
                            Curriculum Directory
                        </div>
                    </FadeIn>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">
                        Subjects Available on PrepOne
                    </h2>
                    <FadeIn delay={150} direction="up">
                        <p className="text-gray-600 text-base">
                            Choose your board to explore available courses, question banks, and mock papers.
                        </p>
                    </FadeIn>

                    {/* Tab Switcher */}
                    <FadeIn delay={250} direction="up">
                        <div className="flex flex-wrap justify-center gap-2 mt-8">
                            <button
                                onClick={() => setActiveTab('cbse12')}
                                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                                    activeTab === 'cbse12'
                                        ? 'bg-[#5046E5] text-white shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                CBSE Class 12 Science
                            </button>
                            <button
                                onClick={() => setActiveTab('bseb10')}
                                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                                    activeTab === 'bseb10'
                                        ? 'bg-[#5046E5] text-white shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                Bihar Board Class 10 (Matric)
                            </button>
                            <button
                                onClick={() => setActiveTab('bseb12')}
                                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                                    activeTab === 'bseb12'
                                        ? 'bg-[#5046E5] text-white shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                Bihar Board Class 12 (Inter)
                            </button>
                        </div>
                    </FadeIn>
                </div>

                {/* Active Curriculum Content */}
                <FadeIn delay={200} direction="up">
                    <div className="bg-[#F8F9FC] rounded-3xl p-6 sm:p-10 border border-gray-200">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-200 mb-8">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-[#5046E5] block mb-1">
                                    {current.medium}
                                </span>
                                <h3 className="text-2xl font-bold text-[#0F172A]">{current.title}</h3>
                                <p className="text-xs text-gray-500 mt-0.5">{current.subtitle}</p>
                            </div>
                            <a
                                href={PREPONE_PLAY_STORE_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#5046E5] hover:bg-[#4338CA] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm shrink-0"
                            >
                                Start Practice Free
                            </a>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {current.subjects.map((sub, i) => (
                                <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs hover:border-[#C7D2FE] transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-[#5046E5]" />
                                        <h4 className="font-bold text-[#0F172A] text-base">{sub.name}</h4>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed">{sub.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

// =========================================================================
// 7. TRANSFORMATION MATRIX (BEFORE VS AFTER PREPONE)
// =========================================================================
const TransformationMatrix = () => {
    const rows = [
        {
            feature: 'Practice Format',
            before: 'Tapping multiple-choice questions on apps',
            after: 'Real paper & pen handwriting under exam conditions'
        },
        {
            feature: 'Answer Checking',
            before: 'Wait 14 days for coaching copies with just total marks',
            after: 'Instant 60-sec AI step-by-step scoring & partial credits'
        },
        {
            feature: 'Step Mistakes & Units',
            before: 'No feedback on missing SI units, diagrams, or formula slips',
            after: 'Line-by-line flags showing exactly where you drop marks'
        },
        {
            feature: 'Topic Selection',
            before: 'Randomly re-reading chapters you already find easy',
            after: 'ABHYAS+ AI assigns questions tailored to your exact weak links'
        },
        {
            feature: 'Revision Routine',
            before: 'Last-minute panic cramming through 500 pages',
            after: 'Spaced flashcards & formula reminders that stick'
        },
        {
            feature: 'Exam Day Confidence',
            before: 'Uncertainty about paper timing and derivation presentation',
            after: 'Mastered 5+ full-length 3-hour board mock simulations'
        }
    ];

    return (
        <section className="bg-[#f7f6f2] py-20 border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <FadeIn direction="down">
                        <div className="inline-flex items-center px-3.5 py-1 rounded-md bg-[#EEF2FF] border border-[#C7D2FE] text-xs font-bold text-[#4338CA] uppercase tracking-wider mb-3">
                            The Transformation
                        </div>
                    </FadeIn>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
                        <LetterReveal text="Why students score higher with PrepOne" delay={100} threshold={0.1} />
                    </h2>
                    <FadeIn delay={200} direction="up">
                        <p className="text-gray-600 text-base">
                            See how switching to an AI-calibrated preparation routine completely changes your exam trajectory.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn delay={250} direction="up">
                    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                        {/* Header Row */}
                        <div className="grid grid-cols-12 bg-[#0F172A] text-white p-4 sm:p-5 text-xs sm:text-sm font-bold">
                            <div className="col-span-4 sm:col-span-3 text-gray-300">Dimension</div>
                            <div className="col-span-4 sm:col-span-4 text-gray-400 flex items-center gap-1.5">
                                <X className="w-4 h-4 shrink-0 text-gray-400" />
                                <span>Without PrepOne</span>
                            </div>
                            <div className="col-span-4 sm:col-span-5 text-[#818CF8] flex items-center gap-1.5 font-bold">
                                <Sparkles className="w-4 h-4 text-[#818CF8] shrink-0" />
                                <span>With PrepOne AI</span>
                            </div>
                        </div>

                        {/* Table Rows */}
                        <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                            {rows.map((row, i) => (
                                <div key={i} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-gray-50/80 transition-colors">
                                    <div className="col-span-4 sm:col-span-3 font-bold text-[#0F172A]">
                                        {row.feature}
                                    </div>
                                    <div className="col-span-4 sm:col-span-4 text-gray-500 pr-2">
                                        {row.before}
                                    </div>
                                    <div className="col-span-4 sm:col-span-5 font-semibold text-[#1E1B4B] bg-[#EEF2FF]/80 p-2 sm:p-2.5 rounded-xl border border-[#C7D2FE]">
                                        {row.after}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

// =========================================================================
// 8. TRANSPARENT PRICING
// =========================================================================
const PricingSection = () => {
    const plans = [
        {
            name: '1 Week',
            price: '₹49',
            period: 'for 7 days',
            desc: 'Ideal for quick weekly unit test prep or testing the AI scanner.',
            highlight: false,
            badge: null,
            features: [
                'Full access to all subjects',
                'AI Handwritten Answer Scans',
                'Chapter-wise PYQs',
                'MCQ speed drills',
                'Hinglish & English explanations'
            ]
        },
        {
            name: '1 Month',
            price: '₹199',
            period: 'per month',
            desc: 'Perfect for mastering complex chapters and term exams.',
            highlight: false,
            badge: null,
            features: [
                'Everything in 1 Week plan',
                'Unlimited AI Step Evaluations',
                'ABHYAS+ Adaptive Diagnostic Engine',
                'Spaced Revision Flashcards',
                'Progress Analytics & Weak Topic Tracker'
            ]
        },
        {
            name: '3 Months',
            price: '₹499',
            period: 'for 3 months',
            desc: 'Ideal for term exams and comprehensive pre-board revision.',
            highlight: false,
            badge: null,
            features: [
                'Everything in 1 Month plan',
                'Full-Length 3-Hour Mock Test Series',
                'Predicted Board Readiness Score',
                '10+ Years Solved PYQ Archive',
                'Priority AI evaluation processing'
            ]
        },
        {
            name: 'Board Pass',
            price: '₹699',
            period: 'until board exam completion',
            desc: 'Complete all-in-one exam season companion until results.',
            highlight: true,
            badge: 'Best Value',
            features: [
                'Valid until your final board exam',
                'Unlimited AI handwritten scans',
                'All chapter tests & full board mocks',
                'Complete formula & reaction revision sheets',
                'Dedicated examiner step-marking rubric',
                'Complete confidence for 95%+ score'
            ]
        }
    ];

    return (
        <section id="pricing" className="bg-white py-24 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn direction="down">
                        <div className="inline-flex items-center px-3.5 py-1 rounded-md bg-[#EEF2FF] border border-[#C7D2FE] text-xs font-bold text-[#4338CA] uppercase tracking-wider mb-3">
                            Student-Friendly Pricing
                        </div>
                    </FadeIn>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
                        <LetterReveal text="Affordable plans. Maximum board marks." delay={100} threshold={0.1} />
                    </h2>
                    <FadeIn delay={200} direction="up">
                        <p className="text-gray-600 text-base sm:text-lg">
                            Less than the cost of a single textbook. Start free and upgrade when you want unlimited AI handwritten checking.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {plans.map((plan, i) => (
                        <FadeIn key={i} delay={i * 100} direction="up" className="pt-3">
                            <div
                                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 h-full relative ${
                                    plan.highlight
                                        ? 'bg-white border-2 border-[#5046E5] shadow-xl shadow-[#5046E5]/15 -translate-y-1'
                                        : 'bg-[#F8F9FC] text-[#0F172A] border border-gray-200 shadow-sm hover:shadow-md'
                                }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                                        {/* Abstract ambient gradient blooms for light theme */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F6FF] via-[#EEF2FF] to-white" />
                                        <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-[#C7D2FE]/70 via-[#DDD6FE]/60 to-[#BAE6FD]/50 rounded-full blur-2xl" />
                                        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-tr from-[#E0E7FF]/70 via-[#EEF2FF]/60 to-[#C7D2FE]/50 rounded-full blur-2xl" />
                                    </div>
                                )}

                                {plan.badge && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#5046E5] text-white text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md z-20 whitespace-nowrap">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="relative z-10">
                                    <h3 className="font-bold text-xl mb-1 text-[#0F172A]">{plan.name}</h3>
                                    <p className="text-xs mb-6 text-gray-500">
                                        {plan.desc}
                                    </p>

                                    <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-gray-200/80">
                                        <span className={`font-display text-4xl sm:text-5xl font-extrabold ${plan.highlight ? 'text-[#1E1B4B]' : 'text-[#0F172A]'}`}>
                                            {plan.price}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {plan.period}
                                        </span>
                                    </div>

                                    <div className="space-y-3 mb-8">
                                        {plan.features.map((feat, fidx) => (
                                            <div key={fidx} className="flex items-start gap-2.5 text-xs">
                                                <CheckCircle2
                                                    className="w-4 h-4 shrink-0 mt-0.5 text-[#5046E5]"
                                                />
                                                <span className="text-gray-700 font-medium">
                                                    {feat}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative z-10 mt-auto">
                                    <a
                                        href={PREPONE_PLAY_STORE_URL}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`w-full py-3 rounded-xl font-bold text-xs text-center block transition-all shadow-sm ${
                                            plan.highlight
                                                ? 'bg-[#5046E5] hover:bg-[#4338CA] text-white font-extrabold shadow-md shadow-[#5046E5]/20'
                                                : 'bg-[#0F172A] hover:bg-black text-white'
                                        }`}
                                    >
                                        Get Started on App
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Play Store Reassurance */}
                <FadeIn delay={400} direction="up">
                    <div className="mt-12 text-center text-xs text-gray-500">
                        Free version available with daily questions & sample scans. Secure in-app activation via UPI, Cards, & NetBanking.
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

// =========================================================================
// 9. TESTIMONIALS & RESULTS
// =========================================================================
const TestimonialsSection = () => {
    const reviews = [
        {
            quote: 'I finally understood why I was losing marks in physics derivations. PrepOne flagged my missing units and ray diagram arrow signs. Jumped from 54 to 67 in pre-boards.',
            author: 'Aman D.',
            board: 'CBSE Class 12 Science',
            gain: 'Physics: 54/70 ➔ 67/70',
            highlight: 'Step-by-step formula feedback'
        },
        {
            quote: 'I stopped just checking final answers and learned how to write subjective answers properly in Hindi. Bihar Board checking gave me 18 extra marks in chemistry.',
            author: 'Sneha M.',
            board: 'Bihar Board (BSEB) Class 12',
            gain: 'Chemistry Subjective: +18 Marks',
            highlight: 'Hindi medium handwritten review'
        },
        {
            quote: 'ABHYAS+ pinpointed that I was dropping marks specifically in geometry proofs. It gave me 5 targeted questions each day. My maths accuracy jumped to 88%.',
            author: 'Rahul V.',
            board: 'BSEB Class 10 (Matric)',
            gain: 'Maths Accuracy: 64% ➔ 88%',
            highlight: 'Targeted geometry practice'
        },
        {
            quote: 'Practicing 3-hour full mock tests with physical paper upload took away all my board exam fear. On the real exam day, I finished 20 minutes before time.',
            author: 'Priya S.',
            board: 'CBSE Class 12 Science',
            gain: 'Mock Score: 84/100 ➔ 96/100',
            highlight: 'Real 3-hour exam discipline'
        }
    ];

    return (
        <section className="bg-[#f7f6f2] py-24 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn direction="down">
                        <div className="inline-flex items-center px-3.5 py-1 rounded-md bg-[#EEF2FF] border border-[#C7D2FE] text-xs font-bold text-[#4338CA] uppercase tracking-wider mb-3">
                            Student Experiences
                        </div>
                    </FadeIn>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
                        Preparation feels different when you know what to improve
                    </h2>
                    <FadeIn delay={200} direction="up">
                        <p className="text-gray-600 text-base">
                            Real stories from CBSE and Bihar Board students who used PrepOne to boost their marks.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((r, i) => (
                        <FadeIn key={i} delay={i * 120} direction="up">
                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow h-full">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[10px] font-bold text-[#4338CA] bg-[#EEF2FF] border border-[#C7D2FE] px-2 py-0.5 rounded">
                                            {r.gain}
                                        </span>
                                        <div className="flex text-amber-400">
                                            {[...Array(5)].map((_, idx) => (
                                                <Star key={idx} className="w-3 h-3 fill-amber-400" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6">
                                        "{r.quote}"
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-gray-100">
                                    <strong className="font-bold text-sm text-[#0F172A] block">{r.author}</strong>
                                    <span className="text-xs text-gray-500 block">{r.board}</span>
                                    <span className="text-[10px] font-semibold text-[#5046E5] mt-1 block">Key: {r.highlight}</span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

// =========================================================================
// 10. FAQ SECTION (10 KEY QUESTIONS WITH SCHEMA)
// =========================================================================
const PREPONE_FAQS = [
    {
        q: 'How does AI handwritten answer evaluation work?',
        a: 'Write your answers on physical paper using your regular pen. Take a clear photo using the PrepOne scanner. The AI extracts your handwriting, checks your formulas, derivations, diagrams, and numerical steps against official board mark schemes, and awards partial marks within 60 seconds.'
    },
    {
        q: 'Can PrepOne evaluate subjective answers and derivations?',
        a: 'Yes! PrepOne is built specifically for subjective board exams. It evaluates derivations, chemical reaction mechanisms, physics formulas, and step-by-step mathematical proofs, giving feedback on structure, presentation, and missing steps.'
    },
    {
        q: 'Does PrepOne support Bihar Board (BSEB) in Hindi medium?',
        a: 'Yes, absolutely. PrepOne provides dedicated support for both Hindi and English mediums for Bihar Board Class 10 (Matric) and Class 12 (Intermediate Science & Arts), including the 50% objective OMR format.'
    },
    {
        q: 'Is PrepOne only for MCQs?',
        a: 'No. While PrepOne includes thousands of objective questions for Section A speed drills, its core superpower is subjective handwritten answer checking and 3-hour full syllabus board simulations.'
    },
    {
        q: 'What is ABHYAS+?',
        a: 'ABHYAS+ is PrepOne’s adaptive practice engine. It analyzes your mistakes, determines whether errors are conceptual, mathematical, or presentation-based, and serves customized questions to fix your specific weak links.'
    },
    {
        q: 'Are previous year questions (PYQs) solved?',
        a: 'Yes. PrepOne contains 10+ years of official solved CBSE and Bihar Board questions sorted chapter-wise, complete with topper-style step solutions.'
    },
    {
        q: 'Is PrepOne really built by IITians?',
        a: 'Yes. PrepOne was developed by alumni of IIT Gandhinagar, combining rigorous pedagogical frameworks with state-of-the-art multimodal vision AI.'
    },
    {
        q: 'Can I use PrepOne for free?',
        a: 'Yes. You can download PrepOne free from Google Play and start practicing daily questions, chapter flashcards, and test sample AI handwritten scans before choosing a paid pass.'
    },
    {
        q: 'What is the Board Readiness Score?',
        a: 'The Board Readiness Score is a predictive index from 0 to 100 calculated using your mock test accuracy, derivation step completeness, and time pacing, giving you an accurate estimate of your upcoming board result.'
    },
    {
        q: 'Can coaching institutes connect with PrepOne?',
        a: 'Yes. Coaching centers using SolvIQ CoachOne can assign tests directly to students on the PrepOne app, providing automated institute-level evaluation and parent reports.'
    }
];

const FAQ = () => {
    const [open, setOpen] = useState(0);

    return (
        <section id="faq" className="bg-white py-24 border-b border-gray-200">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <FadeIn direction="down">
                        <div className="inline-flex items-center px-3.5 py-1 rounded-md bg-[#EEF2FF] border border-[#C7D2FE] text-xs font-bold text-[#4338CA] uppercase tracking-wider mb-3">
                            Have Questions?
                        </div>
                    </FadeIn>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">
                        Frequently Asked Questions
                    </h2>
                    <FadeIn delay={150} direction="up">
                        <p className="text-gray-600 text-base">
                            Everything you need to know about PrepOne and how it transforms your board preparation.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn delay={200} direction="up">
                    <div className="space-y-4">
                        {PREPONE_FAQS.map((faq, i) => (
                            <div
                                key={i}
                                className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all duration-200"
                            >
                                <button
                                    onClick={() => setOpen(open === i ? -1 : i)}
                                    className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none cursor-pointer"
                                >
                                    <span className="font-bold text-sm sm:text-base text-[#0F172A] pr-4">
                                        {faq.q}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${
                                            open === i ? 'rotate-180 text-[#5046E5]' : ''
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                                        open === i ? 'max-h-56 py-4 border-t border-gray-100' : 'max-h-0 py-0'
                                    }`}
                                >
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

// =========================================================================
// 11. FINAL HIGH-CONVERTING CLOSING CTA
// =========================================================================
const FinalCTA = () => (
    <section className="bg-[#0B0C10] py-24 relative overflow-hidden text-white">
        {/* Subtle Ambient Brand Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#5046E5] rounded-full mix-blend-screen filter blur-[150px] opacity-25" />
            <div className="absolute top-0 left-10 w-[400px] h-[400px] bg-[#3B82F6] rounded-full mix-blend-screen filter blur-[160px] opacity-15" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <FadeIn direction="down">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-gray-200 mb-6 backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#818CF8] mr-2" />
                    <span>Your Board Exam Preparation Starts Now</span>
                </div>
            </FadeIn>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                <LetterReveal text="Prep Earlier. Prep Better." delay={100} threshold={0.1} /> <br />
                <span className="bg-gradient-to-r from-[#818CF8] via-[#A5B4FC] to-[#93C5FD] bg-clip-text text-transparent inline-block">
                    <LetterReveal text="Score Higher." delay={400} threshold={0.1} />
                </span>
            </h2>

            <FadeIn delay={250} direction="up">
                <p className="font-body text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
                    Don't wait for pre-boards to discover your derivation and formula flaws. Download PrepOne today and get your personal AI exam strategist.
                </p>
            </FadeIn>

            <FadeIn delay={350} direction="up">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                    <a
                        href={PREPONE_PLAY_STORE_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto bg-[#5046E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl flex items-center justify-center transition-all shadow-[0_0_24px_rgba(80,70,229,0.4)] hover:-translate-y-0.5 font-bold text-base group"
                    >
                        <PlayCircle className="w-5 h-5 mr-2 text-white group-hover:scale-110 transition-transform" />
                        Download PrepOne on Google Play
                    </a>
                </div>
            </FadeIn>

            <FadeIn delay={450} direction="up">
                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#818CF8]" /> Free to Download
                    </span>
                    <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#818CF8]" /> CBSE & Bihar Board Aligned
                    </span>
                    <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#818CF8]" /> Built by IITians
                    </span>
                </div>
            </FadeIn>
        </div>
    </section>
);

// =========================================================================
// MAIN PAGE EXPORT
// =========================================================================
export default function PrepOne() {
    return (
        <div className="min-h-screen bg-[#f7f6f2] font-body selection:bg-[#5046E5] selection:text-white">
            <SEO
                title="PrepOne: CBSE & BSEB Exam Prep | Your Personal AI Exam Strategist"
                description="Prepare smarter for CBSE Class 12 and Bihar Board Class 10 & 12 with PrepOne. AI handwritten answer evaluation, ABHYAS+ personalized practice, chapter PYQs, and realistic board mock tests. Built by IITians."
                keywords="PrepOne, CBSE Class 12 Science preparation, Bihar Board Class 10 Matric, Bihar Board Class 12 Inter, BSEB exam prep, AI subjective answer evaluation, handwritten answer evaluation, board exam mock tests, chapter PYQ practice, ABHYAS adaptive practice, SolvIQ"
                canonicalUrl="https://solviq.in/prepone"
                schema={[
                    buildPrepOneAppSchema(),
                    buildFaqSchema(PREPONE_FAQS),
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'PrepOne', url: '/prepone' }
                    ])
                ]}
            />
            <Navbar />
            <Hero />
            <TrustStrip />
            <ProblemSection />
            <MethodSection />
            <FeaturesShowcase />
            <SubjectCatalog />
            <TransformationMatrix />
            <PricingSection />
            <TestimonialsSection />
            <FAQ />
            <FinalCTA />
            <BackendStatusBadge />
            <Footer />
        </div>
    );
}
