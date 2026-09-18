import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    CheckCircle2, Calendar, ArrowRight, BrainCircuit,
    PieChart, FileText, Send, ChevronDown,
    Cpu, Sparkles, Layers, AlertTriangle,
    Check, CreditCard, School, GitBranch, Award, Activity,
    CheckCheck, Download, Clock, Zap, Play,
    Smartphone, Target, X, ShieldCheck, Minus,
    Globe, Users, Star, Search, BookOpen, Calculator, DollarSign, TrendingUp
} from 'lucide-react';
import Navbar from './componenets/Navbar';
import LetterReveal from './componenets/LetterReveal';
import Footer from './componenets/Footer';
import FadeIn from './componenets/FadeIn';
import SEO from './componenets/SEO';
import { 
    buildCoachOneSaasSchema, 
    buildFaqSchema, 
    buildBreadcrumbSchema 
} from './componenets/Schema';
import { InlineMath, BlockMath, LatexText } from './componenets/Latex';
import InstituteCodeValidator from './componenets/InstituteCodeValidator';
import BackendStatusBadge from './componenets/BackendStatusBadge';

// --- PROLOGUE: THE HERO VISION ---
const Hero = ({ onExploreClick }) => (
    <section className="relative min-h-[100vh] bg-[#111210] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#01696f] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-8 max-w-5xl mx-auto">
                <LetterReveal
                    text=" The Intelligence Layer Every"
                    delay={100}
                /><br className="hidden md:block" />
                <span className="text-teal-400">
                    <LetterReveal
                        text="Coaching Institute Needs"
                        delay={700}
                    />
                </span>
            </h1>
            <FadeIn delay={1000} direction='up'>
                <p className="font-body text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Automate test evaluation, generate batch-wise predictive analytics, and send branded reports to parents instantly. Scale your quality, not your admin work.
                </p>
            </FadeIn>
            <FadeIn delay={1200} direction='up'>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link to="/book-demo" className="w-full sm:w-auto bg-[#01696f] hover:bg-[#015257] text-white px-8 py-4 rounded-xl flex items-center justify-center transition-all shadow-[0_0_20px_rgba(1,105,111,0.4)] hover:-translate-y-1 font-bold text-lg">
                        <Calendar className="w-5 h-5 mr-3" />
                        Book a Demo
                    </Link>
                    <button onClick={onExploreClick} className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl flex items-center justify-center transition-all backdrop-blur-md hover:-translate-y-1 font-bold text-lg">
                        Explore Features
                    </button>
                </div>
            </FadeIn>
        </div>
    </section>
);

// --- CHAPTER 1: THE REALITY OF COACHING ---
const SilentBreakdownSection = () => (
    <section className="bg-[#f7f6f2] py-24 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="text-xs font-semibold text-[#01696f] uppercase tracking-wider mb-3">
                    The Hidden Reality of Running Batches
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                    Why checking tests takes away all your teaching time.
                </h2>
                <p className="font-body text-gray-600 text-lg leading-relaxed">
                    You started your coaching to teach students and help them succeed. But as your batches grow, checking hundreds of answer copies by hand drains all your energy and weekends.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Vignette 1 */}
                <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg mb-6">
                            01
                        </div>
                        <h3 className="font-bold text-gray-900 text-xl mb-3">Late Night Copy Checking</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6">
                            Teachers spend entire weekends checking 200+ answer copies by hand. After checking 40 papers, fatigue sets in: step-marking becomes hurried, and teachers don't have time to write helpful feedback.
                        </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-xl text-xs font-bold text-red-700 border border-red-100">
                        Result: 15+ teacher hours lost every week on manual checking.
                    </div>
                </div>

                {/* Vignette 2 */}
                <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg mb-6">
                            02
                        </div>
                        <h3 className="font-bold text-gray-900 text-xl mb-3">Total Marks Don't Show Real Mistakes</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6">
                            A student scores 52/100. The teacher says "Study the chapter again." But nobody has the time to see that the student knew all formulas, and only lost marks in small calculation or sign mistakes.
                        </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-xl text-xs font-bold text-amber-800 border border-amber-100">
                        Result: Student marks stay stuck even after teaching again.
                    </div>
                </div>

                {/* Vignette 3 */}
                <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#01696f] flex items-center justify-center font-bold text-lg mb-6">
                            03
                        </div>
                        <h3 className="font-bold text-gray-900 text-xl mb-3">Parents Waiting Weeks for Results</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6">
                            Parents pay hard-earned fees and wait weeks to know how their child is performing. When marks are delayed, parents worry, ask questions during PTMs, and lose confidence in the coaching.
                        </p>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-xl text-xs font-bold text-[#01696f] border border-teal-100">
                        Result: Unhappy parents and students leaving the coaching.
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- CHAPTER 2: COMPLETE EXAM CYCLE IN 1 DAY ---
const WeeklyStorySection = () => {
    const steps = [
        {
            number: "01",
            time: "Morning 09:00 AM",
            actor: "Teacher / Institute",
            title: "Build & Release Tests",
            description: "Pick questions from 50,000+ CBSE & state board questions or add custom problems. Export print-ready papers with your coaching watermark in under 5 minutes.",
            highlight: "Ready in 5 minutes",
            icon: <FileText className="w-5 h-5 text-[#01696f]" />
        },
        {
            number: "02",
            time: "Afternoon 02:00 PM",
            actor: "Students",
            title: "Students Attempt & Submit",
            description: "Students write answers on plain paper and upload photos of their handwritten sheets via the app. Teachers never have to collect, count, or carry physical bundles.",
            highlight: "Zero paper collection",
            icon: <Smartphone className="w-5 h-5 text-[#01696f]" />
        },
        {
            number: "03",
            time: "Evening 04:00 PM",
            actor: "Evaluation Engine",
            title: "Step-Wise Copy Checking",
            description: "The engine reads student handwriting, awards authentic step marks for formulas and derivations against board rubrics, and flags sign mistakes.",
            highlight: "Fair step-marking",
            icon: <CheckCircle2 className="w-5 h-5 text-[#01696f]" />
        },
        {
            number: "04",
            time: "Night 07:00 PM",
            actor: "Parents & Faculty",
            title: "WhatsApp Reports Dispatched",
            description: "Individual performance cards, batch ranks, and topic weakness breakdowns are sent straight to parents on WhatsApp, the exact same evening.",
            highlight: "Same-day parent updates",
            icon: <Send className="w-5 h-5 text-[#01696f]" />
        }
    ];

    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-xs font-semibold text-[#01696f] uppercase tracking-wider mb-3">
                        Complete Exam Process in 1 Day
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                        From creating the test to sending results: all done in one day.
                    </h2>
                    <p className="font-body text-gray-600 text-lg leading-relaxed">
                        No weekend pile of uncorrected answer sheets. You publish the test, students upload their copies, and results reach parents the same evening.
                    </p>
                </div>

                {/* 4 Clean Step Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <div 
                            key={i} 
                            className="bg-[#fcfbf9] p-7 rounded-2xl border border-gray-200 flex flex-col justify-between hover:border-teal-400 hover:bg-white hover:shadow-md transition-all"
                        >
                            <div>
                                {/* Top Step Number & Time Tag */}
                                <div className="flex items-center justify-between mb-5">
                                    <span className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center font-bold text-sm text-[#01696f]">
                                        {step.number}
                                    </span>
                                    <span className="text-[11px] font-semibold text-gray-600 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                                        {step.time}
                                    </span>
                                </div>

                                <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-1">
                                    {step.actor}
                                </div>
                                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                    {step.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-gray-200/70 flex items-center text-xs font-bold text-[#01696f]">
                                <Check className="w-4 h-4 mr-1.5 text-teal-600 flex-shrink-0" />
                                <span>{step.highlight}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- CHAPTER 3: COACHING DASHBOARD PREVIEW ---
const DashboardDemo = ({ demoRef }) => {
    const [activeTab, setActiveTab] = useState('telemetry');

    return (
        <section ref={demoRef} className="bg-[#f8fafc] py-24 text-gray-900 relative border-y border-gray-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                             {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="text-xs font-semibold text-[#01696f] uppercase tracking-wider mb-3">
                        Inside the Platform
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
                        See how your center runs with CoachOne.
                    </h2>
                    <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed">
                        Check answer copies, build custom question papers, spot class mistake patterns, and automate parent updates in one unified dashboard.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-10 bg-gray-100/90 p-1.5 rounded-xl border border-gray-200 shadow-inner max-w-4xl mx-auto">
                    {[
                        { id: 'telemetry', label: 'Mistake Reports', icon: <PieChart className="w-4 h-4" /> },
                        { id: 'evaluation', label: 'Copy Checking', icon: <BrainCircuit className="w-4 h-4" /> },
                        { id: 'studio', label: 'Test Paper Studio', icon: <FileText className="w-4 h-4" /> },
                        { id: 'operations', label: 'Fees & Attendance', icon: <CreditCard className="w-4 h-4" /> },
                        { id: 'whatsapp', label: 'WhatsApp Reports', icon: <Send className="w-4 h-4" /> }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all ${
                                activeTab === tab.id
                                    ? 'bg-white text-[#01696f] shadow-sm border border-gray-200/80'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                            }`}
                        >
                            {tab.icon}
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Main Content Box */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-lg">
                    
                    {/* TAB 1: MISTAKE REPORTS */}
                    {activeTab === 'telemetry' && (
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            {/* Left: Operational Benefit */}
                            <div className="lg:col-span-5 space-y-5">
                                <div className="text-xs font-semibold text-[#01696f] uppercase tracking-wider">
                                    Mistake Analysis
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug">
                                    Catch where the entire batch loses marks before board exams.
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Instead of generic test totals, see exactly which formula step, calculation mistake, or Class 11 gap caused marks to drop.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>Pinpoint common traps:</strong> Flags questions where over 50% of the class made the same mistake.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>Class 11 foundation alerts:</strong> Traces Class 12 failures back to weak prerequisite concepts.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>1-click remedial practice:</strong> Generates targeted revision worksheets for weak students.</span>
                                    </li>
                                </ul>
                                <div className="pt-2">
                                    <Link to="/student-analytics" className="inline-flex items-center text-xs font-bold text-[#01696f] hover:text-[#015257]">
                                        See Detailed Analytics Feature <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right: UI Mock & Screenshot Placeholder Frame */}
                            <div className="lg:col-span-7 space-y-4">
                                {/* Product Screenshot Frame Placeholder */}
                                <div className="relative rounded-xl border border-gray-200 bg-gray-900 overflow-hidden shadow-md group">
                                    <div className="flex items-center justify-between px-3.5 py-2 bg-gray-800/90 border-b border-gray-700/60 text-[11px] text-gray-400">
                                        <div className="flex items-center space-x-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                            <span className="ml-2 text-gray-300">coachone.app/telemetry/batch-diagnostic</span>
                                        </div>
                                        <span className="text-teal-400 font-medium">Actual UI Preview</span>
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[220px] flex flex-col justify-center items-center text-center relative">
                                        <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-3">
                                            <PieChart className="w-6 h-6" />
                                        </div>
                                        <p className="text-sm font-semibold text-gray-200">
                                            [ High-Res Screenshot: Batch Misconception Heatmap ]
                                        </p>
                                        <p className="text-xs text-gray-400 max-w-sm mt-1">
                                            Visual chapter matrix highlighting high-frequency student errors and foundational prerequisite gaps.
                                        </p>
                                    </div>
                                </div>

                                {/* Clean Preview Card */}
                                <div className="bg-gray-50/90 border border-gray-200 rounded-xl p-5 space-y-3.5">
                                    <div className="flex justify-between items-center pb-2.5 border-b border-gray-200 text-xs">
                                        <span className="font-bold text-gray-900">Class 12 Batch • Physics Mock Test #4</span>
                                        <span className="text-[#01696f] bg-teal-50 border border-teal-200 px-2 py-0.5 rounded text-[11px] font-bold">48 Students Evaluated</span>
                                    </div>

                                    <div className="space-y-2.5">
                                        <div className="bg-white border border-amber-300 rounded-lg p-3.5 shadow-sm">
                                            <div className="flex justify-between items-center text-xs mb-1">
                                                <span className="text-amber-800 font-bold flex items-center">
                                                    <AlertTriangle className="w-3.5 h-3.5 mr-1.5 text-amber-600" /> Top Batch Trap (64% of class)
                                                </span>
                                                <span className="text-gray-500 font-medium text-[11px]">Q.14 (Electromagnetism)</span>
                                            </div>
                                            <p className="text-xs text-gray-700 mb-2 leading-relaxed">
                                                <strong>Sign Mistake:</strong> Students recalled the formula correctly, but forgot the negative sign in Faraday-Lenz law.
                                            </p>
                                            <span className="text-[11px] text-[#01696f] font-semibold bg-teal-50 px-2 py-0.5 rounded inline-block border border-teal-200">
                                                ✓ 10-minute revision worksheet prepared
                                            </span>
                                        </div>

                                        <div className="bg-white border border-purple-200 rounded-lg p-3 shadow-sm">
                                            <div className="flex justify-between items-center text-xs mb-1">
                                                <span className="text-purple-900 font-bold flex items-center">
                                                    <GitBranch className="w-3.5 h-3.5 mr-1.5 text-purple-600" /> Prerequisite Gap Detected
                                                </span>
                                                <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded text-[10px] font-bold border border-purple-200">Class 12 → Class 11</span>
                                            </div>
                                            <p className="text-xs text-gray-700 leading-relaxed">
                                                LC oscillation errors traced to <strong>Class 11 Simple Harmonic Motion differential equations</strong>.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-2.5 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
                                        <span>Class Average: <strong className="text-gray-900">74.2%</strong></span>
                                        <span className="text-emerald-700 font-bold flex items-center">
                                            <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" /> Practice sets assigned on student app
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 2: COPY CHECKING */}
                    {activeTab === 'evaluation' && (
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            {/* Left: Operational Benefit */}
                            <div className="lg:col-span-5 space-y-5">
                                <div className="text-xs font-semibold text-[#01696f] uppercase tracking-wider">
                                    AI Handwritten Evaluation
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug">
                                    Fair step-marking on handwritten answer sheets in seconds.
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    The evaluation engine reads cursive handwriting, awards partial credit according to official board rubrics, and lets teachers review everything on one screen.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>Official board rubrics:</strong> Awards partial marks for formula recall, substitutions, and units.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>96.4% handwriting accuracy:</strong> Evaluates messy handwriting, derivations, and math symbols.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>Teacher in full control:</strong> Review, adjust marks, or add comments with a single click.</span>
                                    </li>
                                </ul>
                                <div className="pt-2">
                                    <Link to="/ai-evaluation" className="inline-flex items-center text-xs font-bold text-[#01696f] hover:text-[#015257]">
                                        See How Paper Checking Works <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right: UI Mock & Screenshot Placeholder Frame */}
                            <div className="lg:col-span-7 space-y-4">
                                {/* Product Screenshot Frame Placeholder */}
                                <div className="relative rounded-xl border border-gray-200 bg-gray-900 overflow-hidden shadow-md group">
                                    <div className="flex items-center justify-between px-3.5 py-2 bg-gray-800/90 border-b border-gray-700/60 text-[11px] text-gray-400">
                                        <div className="flex items-center space-x-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                            <span className="ml-2 text-gray-300">coachone.app/grading/split-view</span>
                                        </div>
                                        <span className="text-teal-400 font-medium">Actual UI Preview</span>
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[220px] flex flex-col justify-center items-center text-center relative">
                                        <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-3">
                                            <BrainCircuit className="w-6 h-6" />
                                        </div>
                                        <p className="text-sm font-semibold text-gray-200">
                                            [ High-Res Screenshot: Scanned Handwritten Copy with AI Step Marking ]
                                        </p>
                                        <p className="text-xs text-gray-400 max-w-sm mt-1">
                                            Side-by-side view of student's physical handwriting with red-ink step-by-step rubrics and teacher verification controls.
                                        </p>
                                    </div>
                                </div>

                                {/* Step Breakdown Card */}
                                <div className="bg-gray-50/90 border border-gray-200 rounded-xl p-5 space-y-3.5">
                                    <div className="flex justify-between items-center pb-2.5 border-b border-gray-200 text-xs">
                                        <span className="font-bold text-gray-900">Student: Aarav Verma • Q4 Lens Maker Derivation</span>
                                        <span className="text-[#01696f] bg-teal-50 border border-teal-200 px-2 py-0.5 rounded text-[11px] font-bold">5 Marks Question</span>
                                    </div>

                                    <div className="space-y-2 text-xs">
                                        <div className="flex justify-between items-center p-2.5 bg-white rounded-lg border border-gray-200 shadow-sm">
                                            <span className="text-gray-800 font-medium">1. Formula for Surface 1 (1.5M)</span>
                                            <span className="font-bold text-emerald-700">+1.5 / 1.5</span>
                                        </div>
                                        <div className="flex justify-between items-center p-2.5 bg-white rounded-lg border border-gray-200 shadow-sm">
                                            <span className="text-gray-800 font-medium">2. Working for Surface 2 (1.5M)</span>
                                            <span className="font-bold text-emerald-700">+1.5 / 1.5</span>
                                        </div>
                                        <div className="flex justify-between items-center p-2.5 bg-white rounded-lg border border-gray-200 shadow-sm">
                                            <span className="text-gray-800 font-medium">3. Equation Addition &amp; Focal Length (1.5M)</span>
                                            <span className="font-bold text-emerald-700">+1.5 / 1.5</span>
                                        </div>
                                        <div className="flex justify-between items-center p-2.5 bg-amber-50 rounded-lg border border-amber-300 shadow-sm">
                                            <span className="text-amber-900 font-medium">4. Sign Convention on Curvature Radius (0.5M)</span>
                                            <span className="font-bold text-amber-700">0.0 / 0.5 (Deducted 0.5M)</span>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
                                        <span className="text-xs text-gray-500">Total Awarded: <strong className="text-xl text-gray-900 ml-1 font-bold">4.5 / 5.0</strong></span>
                                        <span className="text-xs bg-emerald-600 text-white font-bold px-3 py-1.5 rounded-lg flex items-center shadow-sm">
                                            <Check className="w-3.5 h-3.5 mr-1" /> Verified by Faculty
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 3: TEST PAPER STUDIO */}
                    {activeTab === 'studio' && (
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            {/* Left: Operational Benefit */}
                            <div className="lg:col-span-5 space-y-5">
                                <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider">
                                    Academic Test Studio
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug">
                                    Build custom, print-ready test papers in under 5 minutes.
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Pick from 50,000+ verified CBSE, Bihar Board, JEE, and NEET questions, or paste your own. Generate balanced question papers with watermarks instantly.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>50,000+ Question Bank:</strong> Chapter-wise CBSE, State Boards, JEE Mains, and NEET.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>Full LaTeX equation support:</strong> Formatted formulas, diagrams, and official solutions.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>Institute watermarked PDFs:</strong> Export with your center logo and custom header.</span>
                                    </li>
                                </ul>
                                <div className="pt-2">
                                    <Link to="/test-management" className="inline-flex items-center text-xs font-bold text-[#01696f] hover:text-[#015257]">
                                        Explore Test Paper Studio <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right: UI Mock & Screenshot Placeholder Frame */}
                            <div className="lg:col-span-7 space-y-4">
                                {/* Product Screenshot Frame Placeholder */}
                                <div className="relative rounded-xl border border-gray-200 bg-gray-900 overflow-hidden shadow-md group">
                                    <div className="flex items-center justify-between px-3.5 py-2 bg-gray-800/90 border-b border-gray-700/60 text-[11px] text-gray-400 font-medium">
                                        <div className="flex items-center space-x-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                            <span className="ml-2 text-gray-300">coachone.app/test-generator/blueprint</span>
                                        </div>
                                        <span className="text-teal-400">Actual UI Preview</span>
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[220px] flex flex-col justify-center items-center text-center relative">
                                        <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-3">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <p className="text-sm font-semibold text-gray-200">
                                            [ High-Res Screenshot: LaTeX Paper Builder &amp; Watermarked PDF Preview ]
                                        </p>
                                        <p className="text-xs text-gray-400 max-w-sm mt-1">
                                            Intuitive question paper editor with syllabus balance sliders, equation preview, and one-click PDF print export.
                                        </p>
                                    </div>
                                </div>

                                {/* Clean Test Blueprint Card */}
                                <div className="bg-gray-50/90 border border-gray-200 rounded-xl p-5 space-y-3.5">
                                    <div className="flex justify-between items-center pb-2.5 border-b border-gray-200 text-xs">
                                        <div>
                                            <div className="font-bold text-gray-900">Class 12 Physics • Board Blueprint Test</div>
                                            <div className="text-gray-500 text-[11px] font-medium">70 Marks • 33 Questions Total</div>
                                        </div>
                                        <span className="text-[#01696f] bg-teal-50 border border-teal-200 px-2 py-0.5 rounded text-[11px] font-bold">
                                            Ready to Print
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                                        <div className="bg-white border border-gray-200 p-2.5 rounded-lg shadow-sm">
                                            <div className="text-gray-500 text-[10px] font-medium">Section A</div>
                                            <div className="font-bold text-gray-900 mt-0.5">16 MCQs (16M)</div>
                                        </div>
                                        <div className="bg-white border border-gray-200 p-2.5 rounded-lg shadow-sm">
                                            <div className="text-gray-500 text-[10px] font-medium">Section B</div>
                                            <div className="font-bold text-gray-900 mt-0.5">5 Short (10M)</div>
                                        </div>
                                        <div className="bg-white border border-gray-200 p-2.5 rounded-lg shadow-sm">
                                            <div className="text-gray-500 text-[10px] font-medium">Section C</div>
                                            <div className="font-bold text-gray-900 mt-0.5">7 Short (21M)</div>
                                        </div>
                                        <div className="bg-white border border-gray-200 p-2.5 rounded-lg shadow-sm">
                                            <div className="text-gray-500 text-[10px] font-medium">Section D/E</div>
                                            <div className="font-bold text-gray-900 mt-0.5">5 Long (23M)</div>
                                        </div>
                                    </div>

                                    <div className="bg-white border border-gray-200 rounded-lg p-3 text-xs text-gray-700 shadow-sm">
                                        <div className="font-bold text-gray-900 mb-1">Sample Question (3 Marks):</div>
                                        <p className="text-gray-600 leading-relaxed text-[11px]">
                                            Calculate the resonant frequency and quality factor (Q) of a series LCR circuit with L = 2.0 H, C = 32 µF, and R = 10 Ω.
                                        </p>
                                    </div>

                                    <div className="pt-2.5 border-t border-gray-200 flex justify-between items-center text-xs">
                                        <span className="text-gray-500">Marking key &amp; solutions included</span>
                                        <span className="text-[#01696f] font-semibold flex items-center">
                                            <Download className="w-3.5 h-3.5 mr-1" /> Watermarked PDF Ready
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 4: FEES & ATTENDANCE */}
                    {activeTab === 'operations' && (
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            {/* Left: Operational Benefit */}
                            <div className="lg:col-span-5 space-y-5">
                                <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider">
                                    Fees &amp; Center Operations
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug">
                                    Stop chasing fee defaulters and managing attendance registers.
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Automate recurring parent reminders with UPI payment links, track student attendance, and manage multiple batches effortlessly.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>WhatsApp fee reminders:</strong> Direct payment links sent to parents with 1 click.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>Attendance auto-alerts:</strong> Immediate notification to parents if a student is absent.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>Coaching website included:</strong> Branded website to capture online admission enquiries.</span>
                                    </li>
                                </ul>
                                <div className="pt-2">
                                    <Link to="/institute-operations" className="inline-flex items-center text-xs font-bold text-[#01696f] hover:text-[#015257]">
                                        See Center Management Tools <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right: UI Mock & Screenshot Placeholder Frame */}
                            <div className="lg:col-span-7 space-y-4">
                                {/* Product Screenshot Frame Placeholder */}
                                <div className="relative rounded-xl border border-gray-200 bg-gray-900 overflow-hidden shadow-md group">
                                    <div className="flex items-center justify-between px-3.5 py-2 bg-gray-800/90 border-b border-gray-700/60 text-[11px] text-gray-400 font-medium">
                                        <div className="flex items-center space-x-1.5">
                                             <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                             <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                             <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                             <span className="ml-2 text-gray-300">coachone.app/billing/fee-collection</span>
                                        </div>
                                        <span className="text-teal-400">Actual UI Preview</span>
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[220px] flex flex-col justify-center items-center text-center relative">
                                        <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-3">
                                            <CreditCard className="w-6 h-6" />
                                        </div>
                                        <p className="text-sm font-semibold text-gray-200">
                                            [ High-Res Screenshot: Smart Fee Management &amp; UPI Reconciliation ]
                                        </p>
                                        <p className="text-xs text-gray-400 max-w-sm mt-1">
                                            Live collection ledger with one-click WhatsApp payment reminders and automated digital receipts.
                                        </p>
                                    </div>
                                </div>

                                {/* Clean Operations Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div className="bg-gray-50/90 border border-gray-200 rounded-xl p-4 shadow-sm">
                                        <span className="text-xs text-gray-500 block mb-1 font-medium">Monthly Collected</span>
                                        <span className="text-2xl font-bold text-gray-900">₹4,85,000</span>
                                        <div className="text-xs text-emerald-700 mt-2 font-bold flex items-center">
                                            <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" /> 92% on time
                                        </div>
                                    </div>
                                    <div className="bg-gray-50/90 border border-gray-200 rounded-xl p-4 shadow-sm">
                                        <span className="text-xs text-gray-500 block mb-1 font-medium">Pending Fees</span>
                                        <span className="text-2xl font-bold text-amber-700">8 Students</span>
                                        <div className="text-xs text-amber-800 mt-2 font-medium">
                                            Reminders queued
                                        </div>
                                    </div>
                                    <div className="bg-gray-50/90 border border-gray-200 rounded-xl p-4 shadow-sm">
                                        <span className="text-xs text-gray-500 block mb-1 font-medium">Today's Attendance</span>
                                        <span className="text-2xl font-bold text-[#01696f]">96.8%</span>
                                        <div className="text-xs text-teal-800 mt-2 font-medium">
                                            4 absent alerted
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50/90 border border-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm">
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">Institute Admission Website</div>
                                        <div className="text-xs text-gray-500">Capturing local student enquiries on your custom domain</div>
                                    </div>
                                    <span className="text-xs bg-[#01696f] text-white font-bold px-3 py-1.5 rounded-lg flex items-center shadow-sm">
                                        <Check className="w-3.5 h-3.5 mr-1" /> Active
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 5: WHATSAPP REPORTS */}
                    {activeTab === 'whatsapp' && (
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            {/* Left: Operational Benefit */}
                            <div className="lg:col-span-5 space-y-5">
                                <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider">
                                    Parent Communication
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug">
                                    Keep parents informed after every single test.
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Send branded report cards with marks, rank, and topic weakness breakdowns straight to parents' phones the same evening.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>Instant WhatsApp delivery:</strong> No printing paper report cards or waiting for PTMs.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>White-labeled PDFs:</strong> Highlight your coaching logo, faculty feedback, and batch rank.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>Higher retention:</strong> Parents see continuous academic care, reducing student drop-offs.</span>
                                    </li>
                                </ul>
                                <div className="pt-2">
                                    <Link to="/student-analytics" className="inline-flex items-center text-xs font-bold text-[#01696f] hover:text-[#015257]">
                                        See Parent Communication Tools <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Clean WhatsApp Message Card & Placeholder */}
                            <div className="lg:col-span-7 space-y-4">
                                {/* Product Screenshot Frame Placeholder */}
                                <div className="relative rounded-xl border border-gray-200 bg-gray-900 overflow-hidden shadow-md group">
                                    <div className="flex items-center justify-between px-3.5 py-2 bg-gray-800/90 border-b border-gray-700/60 text-[11px] text-gray-400 font-medium">
                                        <div className="flex items-center space-x-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                            <span className="ml-2 text-gray-300">WhatsApp Official Business API Engine</span>
                                        </div>
                                        <span className="text-teal-400">Actual Message Output</span>
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[200px] flex flex-col justify-center items-center text-center relative">
                                        <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-3">
                                            <Send className="w-6 h-6" />
                                        </div>
                                        <p className="text-sm font-semibold text-gray-200">
                                            [ High-Res Screenshot: WhatsApp Parent Notification &amp; Visual Report Card ]
                                        </p>
                                        <p className="text-xs text-gray-400 max-w-sm mt-1">
                                            Automated parent delivery interface showcasing personalized score summary, PDF link, and teacher notes.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-50/90 border border-gray-200 rounded-xl p-5 shadow-sm space-y-3 text-xs font-sans">
                                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm space-y-2.5">
                                        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                            <span className="font-bold text-[#01696f] text-sm">Your Coaching Academy</span>
                                            <span className="text-gray-400 text-[11px]">Today, 06:15 PM</span>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed">
                                            Dear Parent, <strong>Aarav Sharma</strong> scored <strong>68 / 70 (97.1%)</strong> in Physics Full Mock Test #4.
                                        </p>
                                        <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-200 flex justify-between items-center">
                                            <div>
                                                <div className="font-bold text-gray-900 text-xs">Aarav_Sharma_Report_Card.pdf</div>
                                                <div className="text-[11px] text-gray-500 mt-0.5">Score: 68/70 • Rank #3 in Batch • Chapter Diagnostic</div>
                                            </div>
                                            <span className="bg-[#01696f] text-white px-3 py-1 rounded-md text-xs font-bold shadow-sm">
                                                Download PDF
                                            </span>
                                        </div>
                                        <p className="text-gray-600 italic text-[11px] bg-gray-50 p-2 rounded border border-gray-100">
                                            Faculty Note: "Strong conceptual understanding. 1 remedial worksheet assigned on PrepOne app for Class 11 SHM formulas."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

// --- CHAPTER 4: 5 CORE PLATFORM PILLARS ---
const FeatureGrid = () => {
    const pillars = [
        {
            icon: <School className="w-8 h-8 text-[#01696f]" />,
            pillarNum: "Pillar 01",
            title: "Institute Management",
            link: "/institute-operations",
            desc: "Everything you need to run daily operations: student records, batch schedules, attendance tracking with auto-alerts, fee registers, and payment receipts."
        },
        {
            icon: <FileText className="w-8 h-8 text-[#01696f]" />,
            pillarNum: "Pillar 02",
            title: "Assessment Suite",
            link: "/test-management",
            desc: "Create subjective board papers, MCQ tests, and DPPs in minutes. Choose from 50,000+ verified questions or add your own, with your institute's custom watermarked PDFs."
        },
        {
            icon: <BrainCircuit className="w-8 h-8 text-[#01696f]" />,
            pillarNum: "Pillar 03",
            title: "Academic Insights & AI Evaluation",
            link: "/student-analytics",
            desc: "AI reads handwritten answer sheets and awards step marks. Get batch-level heatmaps, mistake pattern detection, and student weakness diagnostics across chapters."
        },
        {
            icon: <Globe className="w-8 h-8 text-[#01696f]" />,
            pillarNum: "Pillar 04",
            title: "Admissions & Institute Growth",
            link: "/book-demo",
            desc: "Grow your coaching reputation with a branded institute microsite, admission leads CRM pipeline, automated Google 5-star review booster, and local search visibility."
        },
        {
            icon: <Send className="w-8 h-8 text-[#01696f]" />,
            pillarNum: "Pillar 05",
            title: "Smart Automation",
            link: "/student-analytics",
            desc: "Automate routine communications: 1-click WhatsApp report cards to parents, test schedule alerts, attendance notifications, and fee payment reminders."
        }
    ];

    return (
        <section className="bg-[#F8F9FC] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                        The 5 Core Pillars
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
                        Everything you need to run and grow your coaching institute.
                    </h2>
                    <p className="font-body text-gray-600 text-base md:text-lg mt-4 leading-relaxed">
                        Replace fragmented tools, late-night copy checking, and paper registers with one unified, dependable system.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillars.map((p, i) => (
                        <div key={i} className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center group-hover:bg-[#01696f] transition-colors">
                                        {React.cloneElement(p.icon, { className: 'w-7 h-7 text-[#01696f] group-hover:text-white transition-colors' })}
                                    </div>
                                    <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded border border-teal-200/60 uppercase tracking-wider">
                                        {p.pillarNum}
                                    </span>
                                </div>
                                <h3 className="font-bold text-xl text-[#0F172A] mb-3">{p.title}</h3>
                                <p className="font-body text-[#64748B] leading-relaxed text-sm mb-6">{p.desc}</p>
                            </div>
                            <Link to={p.link} className="inline-flex items-center text-sm font-bold text-[#01696f] group-hover:text-[#015257] transition-colors pt-4 border-t border-gray-100">
                                Explore {p.title} <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- CHAPTER 5: DETAILED MISTAKE ANALYSIS ---
const TelemetrySpotlight = () => (
    <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                        Detailed Mistake Analysis
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                        Don't just give total marks. <br />
                        <span className="text-[#01696f]">Understand why students lose marks.</span>
                    </h2>
                    <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                        Simple test results only show right or wrong. CoachOne shows teachers the real reason behind student mistakes, whether it was calculation errors, wrong formulas, or weak basics from previous classes.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mr-4 mt-1 font-bold">
                                <Target className="w-5 h-5 text-amber-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Why Students Pick Wrong Options</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Classifies MCQ mistakes into clear categories: plus/minus sign confusion, wrong formula applied, or calculation traps.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#01696f] flex items-center justify-center flex-shrink-0 mr-4 mt-1 font-bold">
                                <FileText className="w-5 h-5 text-[#01696f]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Step-by-Step Board Marking</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Follows exact board marking rules. Gives step marks for correct formula, substitution, and final answer so students know where marks were deducted.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 mr-4 mt-1 font-bold">
                                <GitBranch className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Find Weak Basics From Earlier Classes</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    <LatexText text="Finds if a Class 12 struggle is caused by weak Class 11 fundamentals (e.g. \(\text{LC Oscillations} \implies \text{Simple Harmonic Motion}\)) and creates quick revision practice." />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <Link to="/student-analytics" className="inline-flex items-center bg-[#01696f] hover:bg-[#015257] text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-md">
                            See Student Analysis Guide <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>

                {/* Right Visual Card with Screenshot Frame */}
                <div className="space-y-4">
                    {/* UI Screenshot Placeholder */}
                    <div className="relative rounded-2xl border border-gray-200 bg-gray-900 overflow-hidden shadow-lg group">
                        <div className="flex items-center justify-between px-4 py-2.5 bg-gray-800/95 border-b border-gray-700 text-xs text-gray-400 font-medium">
                            <div className="flex items-center space-x-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                <span className="ml-2 text-gray-300">coachone.app/insights/concept-lineage</span>
                            </div>
                            <span className="text-teal-400 font-semibold">Diagnostic Engine</span>
                        </div>
                        <div className="p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[220px] flex flex-col justify-center items-center text-center">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                                <GitBranch className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-semibold text-gray-200">
                                [ High-Res Screenshot: Prerequisite Lineage Graph &amp; Misconception Heatmap ]
                            </p>
                            <p className="text-xs text-gray-400 max-w-sm mt-1 leading-relaxed">
                                Visual concept dependency tree connecting board questions to foundational class 11 prerequisites.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-md text-gray-900 relative">
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                            <div>
                                <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider">FINDING WEAK BASICS</span>
                                <h4 className="font-bold text-xl text-[#0F172A]">Class 11 &amp; 12 Concept Link</h4>
                            </div>
                            <span className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md border border-purple-200 font-bold">Physics Cl 12</span>
                        </div>

                        {/* Interactive Diagram UI */}
                        <div className="space-y-4">
                            <div className="bg-rose-50/70 p-4 rounded-xl border border-rose-200 shadow-sm">
                                <div className="flex justify-between text-xs font-bold text-rose-700 mb-1">
                                    <span>CURRENT CLASS 12 CHAPTER</span>
                                    <span>46% Batch Avg</span>
                                </div>
                                <div className="text-base font-bold text-gray-900">Class 12: Electromagnetic Induction &amp; LC Oscillations</div>
                                <p className="text-xs text-gray-600 mt-1">Many students losing marks in formula derivation and resonance calculation.</p>
                            </div>

                            <div className="flex justify-center my-1">
                                <div className="w-0.5 h-6 bg-purple-300"></div>
                            </div>

                            <div className="bg-purple-50/70 p-4 rounded-xl border border-purple-200 shadow-sm">
                                <div className="flex justify-between text-xs font-bold text-purple-800 mb-1">
                                    <span>REASON: WEAK CLASS 11 BASE</span>
                                    <span>42% Foundation Deficit</span>
                                </div>
                                <div className="text-base font-bold text-gray-900">Class 11: Simple Harmonic Motion (Oscillations)</div>
                                <p className="text-xs text-gray-600 mt-1">Students are weak in Class 11 basic concepts needed for this topic.</p>
                            </div>

                            <div className="bg-teal-50 p-4 rounded-xl border border-teal-200 flex items-center justify-between">
                                <div>
                                    <span className="text-[11px] font-bold text-[#01696f] uppercase block">Quick Action for Teachers</span>
                                    <span className="text-xs text-gray-700">Ready: 10-Minute Revision Test on Basics</span>
                                </div>
                                <button className="bg-[#01696f] hover:bg-[#015257] text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors shadow-sm">
                                    Send to Students
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- ADMISSIONS & INSTITUTE GROWTH SUITE (WRITEUP SECTION 8) ---
const GrowthSuiteSection = () => (
    <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                    Admissions &amp; Institute Growth
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
                    Tools to build your coaching brand and grow new admissions.
                </h2>
                <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed">
                    CoachOne does not just manage your classroom tests. It equips your academy with modern digital infrastructure to attract enquiries, manage prospective student leads, and collect authentic Google reviews.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Growth Card 1: Microsite */}
                <div className="bg-[#f7f6f2] p-7 rounded-2xl border border-gray-200/80 flex flex-col justify-between hover:shadow-lg transition-shadow">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#01696f] flex items-center justify-center font-bold text-lg mb-5 border border-teal-100">
                            <Globe className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-xl mb-2">Institute Microsite</h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                            Get a clean, mobile-optimized website for your coaching center. Display faculty profiles, past topper ranks, course fee structures, and photo galleries without paying a web developer.
                        </p>
                    </div>
                    <div className="pt-3 border-t border-gray-200 text-xs font-bold text-[#01696f] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-teal-600" /> Ready in 10 minutes
                    </div>
                </div>

                {/* Growth Card 2: Admission Leads CRM */}
                <div className="bg-[#f7f6f2] p-7 rounded-2xl border border-gray-200/80 flex flex-col justify-between hover:shadow-lg transition-shadow">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#01696f] flex items-center justify-center font-bold text-lg mb-5 border border-teal-100">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-xl mb-2">Admissions Pipeline</h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                            Never lose an enquiry in notebook registers. Track incoming student leads across stages: <span className="font-semibold text-gray-800">New &rarr; Contacted &rarr; Demo Class &rarr; Follow-up &rarr; Admitted</span> with staff assignment.
                        </p>
                    </div>
                    <div className="pt-3 border-t border-gray-200 text-xs font-bold text-[#01696f] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-teal-600" /> Built-in lead tracking
                    </div>
                </div>

                {/* Growth Card 3: Google Reviews Booster */}
                <div className="bg-[#f7f6f2] p-7 rounded-2xl border border-gray-200/80 flex flex-col justify-between hover:shadow-lg transition-shadow">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg mb-5 border border-amber-100">
                            <Star className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-xl mb-2">Google Reviews Booster</h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                            Automatically prompt happy parents and students to leave 5-star ratings on your Google Business Profile right after great test performance or positive milestones.
                        </p>
                    </div>
                    <div className="pt-3 border-t border-gray-200 text-xs font-bold text-amber-700 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-amber-600" /> Strengthen local trust
                    </div>
                </div>

                {/* Growth Card 4: Local SEO Discovery */}
                <div className="bg-[#f7f6f2] p-7 rounded-2xl border border-gray-200/80 flex flex-col justify-between hover:shadow-lg transition-shadow">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#01696f] flex items-center justify-center font-bold text-lg mb-5 border border-teal-100">
                            <Search className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-xl mb-2">Local Search Presence</h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                            Optimized structure for parents searching nearby: <em>"Best Class 10 tuition in my locality"</em> or <em>"NEET dropper batch near me"</em>. Clean meta descriptions and fast loading.
                        </p>
                    </div>
                    <div className="pt-3 border-t border-gray-200 text-xs font-bold text-[#01696f] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-teal-600" /> Organic local discovery
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- CHAPTER 6: THE TRANSFORMATION IN NUMBERS (BEFORE VS AFTER) ---
const TransformationSection = () => (
    <section className="bg-[#f7f6f2] py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                    Clear Comparison
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
                    Before CoachOne vs. With CoachOne
                </h2>
                <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed">
                    See how much time teachers save and how smoothly your coaching runs with CoachOne.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Traditional Coaching */}
                <div className="bg-white p-8 rounded-2xl border border-red-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-400"></div>
                    <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-6">
                        Without CoachOne (Traditional Setup)
                    </div>
                    <ul className="space-y-4 text-sm text-gray-700">
                        <li className="flex items-start">
                            <span className="w-5 h-5 rounded bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5"><X className="w-3.5 h-3.5" /></span>
                            <span><strong>Hours wasted each week</strong> searching for questions and formatting test papers.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-5 h-5 rounded bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5"><X className="w-3.5 h-3.5" /></span>
                            <span><strong>1 to 2 weeks delay</strong> in checking copies; students have already moved to next chapters.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-5 h-5 rounded bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5"><X className="w-3.5 h-3.5" /></span>
                            <span><strong>Total marks only</strong> (e.g. 52/100). No clear report showing which exact topics need practice.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-5 h-5 rounded bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5"><X className="w-3.5 h-3.5" /></span>
                            <span><strong>Manual fee registers</strong>, missed payment tracking, and uncomfortable phone calls to parents.</span>
                        </li>
                    </ul>
                </div>

                {/* With CoachOne */}
                <div className="bg-white p-8 rounded-2xl border-2 border-[#01696f] shadow-lg text-gray-900 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#01696f]"></div>
                    <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-6">
                        With CoachOne Platform
                    </div>
                    <ul className="space-y-4 text-sm text-gray-700">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#01696f] mr-3 flex-shrink-0 mt-0.5" />
                            <span><strong>5-minute test maker</strong> with 50,000+ questions and your coaching branding.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#01696f] mr-3 flex-shrink-0 mt-0.5" />
                            <span><strong>Same-day AI copy checking</strong> with step marks; zero paper sorting or manual scanning for teachers.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#01696f] mr-3 flex-shrink-0 mt-0.5" />
                            <span><strong>Detailed mistake analysis</strong>: formula errors, calculation traps, and weak fundamentals.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#01696f] mr-3 flex-shrink-0 mt-0.5" />
                            <span><strong>Automated WhatsApp reports</strong>, fee receipts, and daily attendance notices for parents.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// --- ROI & COST COMPARISON CALCULATOR ---
const ROICalculatorSection = () => {
    const [studentCount, setStudentCount] = useState(250);
    const [testsPerMonth, setTestsPerMonth] = useState(2);
    const [pagesPerTest, setPagesPerTest] = useState(8);

    // Traditional Offline Cost Breakdown:
    // Printing question papers + answer sheets (~₹10) + DTP/typing (~₹5) + Manual evaluation (~₹12-15) = ~₹28/student/test
    const offlineCostPerStudentTest = 28;
    const totalStudentTests = studentCount * testsPerMonth;
    const totalOfflineCost = totalStudentTests * offlineCostPerStudentTest;

    // CoachOne Cost Breakdown:
    // AI Evaluation: ₹1.50 per evaluated page
    const totalEvaluatedPages = totalStudentTests * pagesPerTest;
    const aiEvaluationCost = totalEvaluatedPages * 1.5;
    
    // Base Subscription Tier selection based on studentCount
    const basePlanPrice = studentCount <= 75 ? 999 : studentCount <= 200 ? 1999 : 4499;
    const basePlanName = studentCount <= 75 ? "Starter" : studentCount <= 200 ? "Growth" : "Scale";
    
    const totalCoachOneCost = basePlanPrice + aiEvaluationCost;
    const netMonthlySavings = Math.max(0, totalOfflineCost - totalCoachOneCost);
    const estimatedTeacherHoursSaved = Math.round(totalStudentTests * 0.25); // ~15 mins per copy checked manually

    return (
        <section className="bg-[#f8fafc] py-24 relative overflow-hidden text-gray-900 border-y border-gray-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                        Interactive Cost &amp; ROI Calculator
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
                        Calculate your institute's savings.
                    </h2>
                    <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed">
                        Traditional offline test series cost <strong>₹25–₹30 per student per test</strong> in DTP typing, question printing, physical answer sheets, and manual teacher evaluation. See how CoachOne saves money while delivering reports in 1 day.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
                    {/* Left: Input Sliders */}
                    <div className="lg:col-span-6 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-[#01696f]" />
                                Your Institute Parameters
                            </h3>

                            {/* Slider 1: Students */}
                            <div className="mb-7">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-xs sm:text-sm font-semibold text-gray-700">
                                        Active Enrolled Students
                                    </label>
                                    <span className="text-base font-bold text-[#01696f] bg-teal-50 px-3 py-1 rounded-lg border border-teal-200">
                                        {studentCount} Students
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="30"
                                    max="500"
                                    step="10"
                                    value={studentCount}
                                    onChange={(e) => setStudentCount(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#01696f]"
                                />
                                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                                    <span>30 (Small Batch)</span>
                                    <span>200 (Medium)</span>
                                    <span>500 (Large Academy)</span>
                                </div>
                            </div>

                            {/* Slider 2: Subjective Tests */}
                            <div className="mb-7">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-xs sm:text-sm font-semibold text-gray-700">
                                        Subjective Tests / Month per Student
                                    </label>
                                    <span className="text-base font-bold text-[#01696f] bg-teal-50 px-3 py-1 rounded-lg border border-teal-200">
                                        {testsPerMonth} Tests / mo
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="6"
                                    step="1"
                                    value={testsPerMonth}
                                    onChange={(e) => setTestsPerMonth(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#01696f]"
                                />
                                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                                    <span>1 Monthly Test</span>
                                    <span>2 Fortnightly</span>
                                    <span>6 Weekly Full Mock</span>
                                </div>
                            </div>

                            {/* Slider 3: Answer Pages */}
                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-xs sm:text-sm font-semibold text-gray-700">
                                        Average Pages per Handwritten Copy
                                    </label>
                                    <span className="text-base font-bold text-[#01696f] bg-teal-50 px-3 py-1 rounded-lg border border-teal-200">
                                        {pagesPerTest} Pages
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="4"
                                    max="16"
                                    step="2"
                                    value={pagesPerTest}
                                    onChange={(e) => setPagesPerTest(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#01696f]"
                                />
                                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                                    <span>4 Pages (Unit Test)</span>
                                    <span>8 Pages (Standard)</span>
                                    <span>16 Pages (Full Board Mock)</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-100 text-xs text-gray-600 space-y-1">
                            <p>• <strong>{totalStudentTests.toLocaleString()}</strong> total tests conducted per month</p>
                            <p>• <strong>{totalEvaluatedPages.toLocaleString()}</strong> handwritten pages checked by AI</p>
                            <p className="text-[#01696f] font-semibold">• Unlimited MCQ tests and DPPs are included free with ₹0 evaluation charge</p>
                        </div>
                    </div>

                    {/* Right: Side-by-Side Financial Comparison */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                        {/* Comparison Card */}
                        <div className="grid sm:grid-cols-2 gap-4 h-full">
                            {/* Offline Method */}
                            <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm">
                                <div>
                                    <div className="text-[11px] font-bold text-rose-700 uppercase tracking-wider mb-1">
                                        Traditional Method
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Manual Paper Tests</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                        Includes question printing, physical copies, DTP formatting, and evaluator wages (~₹28/student test).
                                    </p>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Monthly Expense:</div>
                                    <div className="text-2xl sm:text-3xl font-bold text-rose-700">
                                        ₹{totalOfflineCost.toLocaleString()}
                                    </div>
                                    <div className="text-[11px] text-gray-500 mt-1">~1 to 2 weeks result delay</div>
                                </div>
                            </div>

                            {/* CoachOne Method */}
                            <div className="bg-teal-50/60 border-2 border-[#01696f]/40 rounded-2xl p-5 flex flex-col justify-between shadow-sm">
                                <div>
                                    <div className="text-[11px] font-bold text-[#01696f] uppercase tracking-wider mb-1">
                                        With CoachOne
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Digital Exam Hub</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                        {basePlanName} Plan (₹{basePlanPrice.toLocaleString()}) + {totalEvaluatedPages.toLocaleString()} pages @ ₹1.50/page.
                                    </p>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Total Monthly Cost:</div>
                                    <div className="text-2xl sm:text-3xl font-bold text-[#01696f]">
                                        ₹{Math.round(totalCoachOneCost).toLocaleString()}
                                    </div>
                                    <div className="text-[11px] text-[#01696f] font-semibold mt-1">✓ Same-day WhatsApp reports</div>
                                </div>
                            </div>
                        </div>

                        {/* Net Monthly Value Callout */}
                        <div className="bg-gradient-to-r from-[#01696f] via-[#015e63] to-[#014d52] border border-teal-600 rounded-2xl p-6 shadow-xl text-white">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <span className="text-xs text-teal-100 font-bold uppercase tracking-wider">
                                        Estimated Monthly ROI &amp; Time Saved
                                    </span>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                                        ₹{netMonthlySavings.toLocaleString()}
                                        <span className="text-sm font-normal text-teal-100 ml-2">saved / month</span>
                                    </div>
                                    <p className="text-xs text-teal-50 mt-1">
                                        Plus ~<strong>{estimatedTeacherHoursSaved} teacher hours</strong> saved from manual paper correction each month.
                                    </p>
                                </div>
                                <Link
                                    to="/book-demo"
                                    className="bg-white text-[#01696f] hover:bg-teal-50 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-center transition-all whitespace-nowrap shadow-md flex items-center justify-center gap-1.5 flex-shrink-0"
                                >
                                    <Calendar className="w-4 h-4 text-[#01696f]" />
                                    Book Free Pilot
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PRICING_COMPARISON_GROUPS = [
    {
        category: "Core Limits & Capacity",
        rows: [
            { feature: "Price", starter: "₹999/mo", growth: "₹1,999/mo", scale: "₹4,499/mo", enterprise: "Custom" },
            { feature: "Students", starter: "Up to 75", growth: "Up to 200", scale: "Up to 500", enterprise: "500+" },
            { feature: "Batches", starter: "Up to 5", growth: "Up to 15", scale: "Unlimited", enterprise: "Unlimited" },
            { feature: "Teachers/Admins", starter: "2", growth: "5", scale: "15", enterprise: "Custom" },
        ]
    },
    {
        category: "Coaching & Student Management",
        rows: [
            { feature: "Student Management", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Batch Management", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Attendance", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Student Portal", starter: true, growth: true, scale: true, enterprise: true },
        ]
    },
    {
        category: "Tests & Question Bank",
        rows: [
            { feature: "MCQ Tests", starter: "Unlimited", growth: "Unlimited", scale: "Unlimited", enterprise: "Unlimited" },
            { feature: "MCQ DPP", starter: "Unlimited", growth: "Unlimited", scale: "Unlimited", enterprise: "Unlimited" },
            { feature: "Question Bank", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Test Scheduling", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Subjective Tests", starter: true, growth: true, scale: true, enterprise: true },
        ]
    },
    {
        category: "AI Handwritten Evaluation",
        rows: [
            { feature: "AI Handwritten Evaluation", starter: "₹1.50/page", growth: "₹1.50/page", scale: "₹1.50/page", enterprise: "₹1.50/page" },
            { feature: "Step-wise Marking", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "AI Feedback", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Teacher Review/Override", starter: true, growth: true, scale: true, enterprise: true },
        ]
    },
    {
        category: "Analytics & Mistake Tracking",
        rows: [
            { feature: "Student Analytics", starter: "Basic", growth: "Advanced", scale: "Advanced+", enterprise: "Custom" },
            { feature: "Batch Analytics", starter: "Basic", growth: "Advanced", scale: "Advanced+", enterprise: "Custom" },
            { feature: "Chapter/Topic Analytics", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "Mistake Analysis", starter: "Basic", growth: true, scale: "Advanced", enterprise: "Advanced" },
            { feature: "At-risk Student Detection", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "Performance Trends", starter: "Basic", growth: true, scale: "Advanced", enterprise: "Advanced" },
        ]
    },
    {
        category: "Reports & Parent Communication",
        rows: [
            { feature: "Automated Student Reports", starter: "Basic", growth: true, scale: true, enterprise: true },
            { feature: "Automated Parent Reports", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "WhatsApp Reports", starter: false, growth: true, scale: true, enterprise: true },
        ]
    },
    {
        category: "Institute Website & Admissions (CRM)",
        rows: [
            { feature: "Institute Microsite", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Admission Enquiry Forms", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Lead Management / CRM", starter: "Basic", growth: true, scale: "Advanced", enterprise: "Custom" },
            { feature: "Follow-up Tracking", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "Admission Conversion Analytics", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "Google Reviews Booster", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Local SEO Booster", starter: "Basic", growth: true, scale: "Advanced", enterprise: "Advanced" },
            { feature: "SEO Analytics", starter: false, growth: true, scale: true, enterprise: true },
        ]
    },
    {
        category: "AI Smart Features",
        rows: [
            { feature: "AI Test Generation", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "Smart Practice Recommendations", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "Automated Performance Insights", starter: false, growth: true, scale: "Advanced", enterprise: "Advanced" },
        ]
    },
    {
        category: "Scale, Branding & Support",
        rows: [
            { feature: "API Access", starter: false, growth: false, scale: "Limited", enterprise: true },
            { feature: "Custom Branding", starter: false, growth: false, scale: true, enterprise: true },
            { feature: "Multiple Branches", starter: false, growth: false, scale: true, enterprise: true },
            { feature: "Dedicated Onboarding", starter: false, growth: false, scale: true, enterprise: true },
            { feature: "Priority Support", starter: "Standard", growth: "Standard", scale: "Priority", enterprise: "Dedicated" },
        ]
    }
];

const renderCellValue = (val, isGrowth = false) => {
    if (val === true) {
        return (
            <div className="flex items-center justify-center">
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${isGrowth ? 'bg-teal-500/20 text-[#01696f]' : 'bg-teal-50 text-[#01696f]'}`}>
                    <Check className="w-3.5 h-3.5" />
                </span>
            </div>
        );
    }
    if (val === false) {
        return (
            <div className="flex items-center justify-center">
                <Minus className="w-4 h-4 text-gray-300" />
            </div>
        );
    }
    return (
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
            isGrowth 
                ? 'text-[#01696f] font-bold bg-teal-50' 
                : 'text-gray-700'
        }`}>
            {val}
        </span>
    );
};

// --- CHAPTER 7: TRANSPARENT PRICING ---
const Pricing = () => {
    return (
        <section id="pricing" className="bg-[#f7f6f2] py-24 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                        Clear &amp; Simple Pricing
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
                        Affordable plans for coaching institutes of all sizes.
                    </h2>
                    <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed">
                        Zero hidden fees. AI handwritten copy checking at just ₹1.50/page across all plans.
                    </p>
                </div>

                {/* 4 Plan Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch mb-20">
                    {/* Starter */}
                    <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-4">
                                Starter Plan
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Starter</h3>
                            <p className="text-[#64748B] text-xs mb-5 min-h-[32px] leading-relaxed">For individual teachers &amp; small single-branch coaching classes.</p>
                            <div className="text-4xl font-bold text-[#0F172A] mb-2">
                                ₹999<span className="text-sm font-normal text-[#64748B]">/mo</span>
                            </div>
                            <div className="text-xs text-[#01696f] font-semibold mb-6 bg-teal-50 px-2.5 py-1 rounded-md inline-block border border-teal-200/60">
                                Up to 75 Students • 5 Batches
                            </div>
                            <ul className="space-y-3 mb-8 text-xs text-gray-700">
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Up to <strong>75 Students</strong></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Up to <strong>5 Batches</strong> &amp; 2 Admins</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> <strong>Unlimited MCQ Tests &amp; DPP</strong></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> AI Evaluation: <strong>₹1.50 / page</strong></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Student &amp; Batch Management</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Student Portal &amp; Attendance</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Institute Microsite &amp; Leads</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Standard Support</li>
                            </ul>
                        </div>
                        <Link to="/book-demo" className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-xl font-bold text-xs text-center transition-colors">
                            Choose Starter
                        </Link>
                    </div>

                    {/* Growth */}
                    <div className="bg-white p-7 rounded-2xl border-2 border-[#01696f] shadow-xl text-gray-900 flex flex-col justify-between relative">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#01696f] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded shadow-sm whitespace-nowrap">
                            Most Popular for Institutes
                        </div>
                        <div>
                            <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-4">
                                Growth Plan
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Growth</h3>
                            <p className="text-gray-600 text-xs mb-5 min-h-[32px] leading-relaxed">For expanding coaching centers with multiple batches &amp; teachers.</p>
                            <div className="text-4xl font-bold text-[#0F172A] mb-2">
                                ₹1,999<span className="text-sm font-normal text-gray-500">/mo</span>
                            </div>
                            <div className="text-xs text-[#01696f] font-semibold mb-6 bg-teal-50 px-2.5 py-1 rounded-md inline-block border border-teal-200">
                                Up to 200 Students • 15 Batches
                            </div>
                            <ul className="space-y-3 mb-8 text-xs text-gray-700">
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> Up to <strong>200 Students</strong></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> Up to <strong>15 Batches</strong> &amp; 5 Admins</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> <strong>WhatsApp Parent Reports</strong></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> Chapter &amp; Topic Mistake Analysis</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> At-risk Student Detection</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> AI Test Generation &amp; Practice</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> Lead CRM &amp; Local SEO Booster</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> AI Evaluation: <strong>₹1.50 / page</strong></li>
                            </ul>
                        </div>
                        <Link to="/book-demo" className="w-full bg-[#01696f] hover:bg-[#015257] text-white py-3 rounded-xl font-bold text-xs text-center transition-all shadow-md">
                            Get Started with Growth
                        </Link>
                    </div>

                    {/* Scale */}
                    <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-4">
                                Scale Plan
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Scale</h3>
                            <p className="text-[#64748B] text-xs mb-5 min-h-[32px] leading-relaxed">For established academies scaling across multiple batches &amp; branches.</p>
                            <div className="text-4xl font-bold text-[#0F172A] mb-2">
                                ₹4,499<span className="text-sm font-normal text-[#64748B]">/mo</span>
                            </div>
                            <div className="text-xs text-[#01696f] font-semibold mb-6 bg-teal-50 px-2.5 py-1 rounded-md inline-block border border-teal-200/60">
                                Up to 500 Students • Unlimited Batches
                            </div>
                            <ul className="space-y-3 mb-8 text-xs text-gray-700">
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Up to <strong>500 Students</strong></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> <strong>Unlimited Batches</strong> &amp; 15 Admins</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> <strong>Custom Branding &amp; Multi-Branch</strong></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Advanced+ Analytics &amp; Insights</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Automated Performance Insights</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Dedicated Onboarding</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Priority Support &amp; Limited API</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> AI Evaluation: <strong>₹1.50 / page</strong></li>
                            </ul>
                        </div>
                        <Link to="/book-demo" className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-xl font-bold text-xs text-center transition-colors">
                            Choose Scale
                        </Link>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-4">
                                Enterprise Tier
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Enterprise</h3>
                            <p className="text-[#64748B] text-xs mb-5 min-h-[32px] leading-relaxed">For premier coaching networks with 500+ students &amp; custom setups.</p>
                            <div className="text-4xl font-bold text-[#0F172A] mb-2">
                                Custom
                            </div>
                            <div className="text-xs text-purple-700 font-semibold mb-6 bg-purple-50 px-2.5 py-1 rounded-md inline-block border border-purple-200/60">
                                500+ Students • Unlimited Scale
                            </div>
                            <ul className="space-y-3 mb-8 text-xs text-gray-700">
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> <strong>500+ Students</strong></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> <strong>Unlimited Batches &amp; Custom Admins</strong></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> <strong>Full API Access</strong></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> Custom Branding &amp; Multi-Branch</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> Dedicated Account Manager</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> 24/7 Dedicated Support</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> Dedicated Onboarding</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> AI Evaluation: <strong>₹1.50 / page</strong></li>
                            </ul>
                        </div>
                        <Link to="/book-demo" className="w-full bg-[#0F172A] hover:bg-black text-white py-3 rounded-xl font-bold text-xs text-center transition-colors">
                            Contact Enterprise
                        </Link>
                    </div>
                </div>

                {/* Practical Math Example & Page Definition Box (Writeup Section 12) */}
                <div className="max-w-5xl mx-auto mb-20 bg-white rounded-2xl p-7 sm:p-9 border border-gray-200 shadow-md">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                        <div>
                            <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider">
                                Realistic Cost Breakdown
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
                                How monthly pricing actually works: A real example
                            </h3>
                        </div>
                        <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-200/60 max-w-sm">
                            <strong className="text-gray-900 block mb-0.5">What is an "Evaluated Page"?</strong>
                            1 evaluated page = 1 student handwritten answer-sheet page processed by CoachOne. Blank pages and question sheets are never charged.
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 pt-6">
                        <div className="bg-[#f7f6f2] p-5 rounded-2xl border border-gray-200">
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Example Academy</div>
                            <div className="text-2xl font-bold text-gray-900 mb-2">300 Students</div>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Runs 2 subjective tests per month. Each student writes an 8-page handwritten answer paper.
                            </p>
                        </div>

                        <div className="bg-[#f7f6f2] p-5 rounded-2xl border border-gray-200">
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Evaluation Volume</div>
                            <div className="text-2xl font-bold text-[#01696f] mb-2">4,800 Pages</div>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                300 students × 2 tests × 8 pages = 4,800 pages. At ₹1.50/page = <strong>₹7,200</strong> evaluation cost.
                            </p>
                        </div>

                        <div className="bg-teal-950 text-white p-5 rounded-2xl border border-teal-800">
                            <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">Total Monthly Investment</div>
                            <div className="text-2xl font-bold text-white mb-2">₹11,699 <span className="text-xs text-gray-300 font-normal">/ mo</span></div>
                            <p className="text-xs text-teal-100/80 leading-relaxed">
                                ₹4,499 (Scale Plan) + ₹7,200 (AI checking) = <strong>₹11,699/mo</strong> total for 300 students (under ₹39/student/month all inclusive).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ecosystem Advantage: PrepOne Premium for Institute Students (Writeup Section 9) */}
                <div className="max-w-5xl mx-auto mb-20 bg-gradient-to-br from-teal-50/70 via-white to-teal-50/30 text-gray-900 rounded-2xl p-7 sm:p-10 border border-teal-200 shadow-md relative overflow-hidden">
                    <div className="relative z-10 grid md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-8">
                            <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-2">
                                PrepOne Ecosystem Advantage
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3 leading-tight">
                                Give your students PrepOne Premium practice material.
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                                Participating CoachOne coaching institutes can give their enrolled batches access to PrepOne Premium. Students get verified board PYQs, chapter-wise adaptive practice, and step-by-step model solutions directly on their phones under your institute's batch umbrella.
                            </p>
                            <div className="flex flex-wrap gap-4 text-xs text-gray-700 font-medium">
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#01696f]" /> 10+ Years Board PYQs</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#01696f]" /> Auto-sync with Institute Batches</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#01696f]" /> Zero paper printing for homework</span>
                            </div>
                        </div>
                        <div className="md:col-span-4 bg-white border border-teal-200/80 rounded-2xl p-5 text-center shadow-sm">
                            <div className="text-xs text-[#01696f] uppercase tracking-wider font-bold mb-1">Student Pitch Advantage</div>
                            <div className="text-xl font-bold text-[#0F172A] mb-1">A Modern Edge</div>
                            <p className="text-[11px] text-gray-600 mb-4 leading-relaxed">
                                Tell prospective parents during admissions that your academy provides daily digital exam practice &amp; instant AI checks.
                            </p>
                            <Link to="/book-demo" className="inline-block w-full bg-[#01696f] hover:bg-[#015257] text-white py-2.5 rounded-xl font-bold text-xs transition-colors shadow-sm">
                                Ask About Student Access
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Complete Feature Comparison Table */}
                <div className="mt-20 max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0F172A]">
                            Detailed Feature Comparison
                        </h3>
                        <p className="text-gray-600 text-sm mt-2">
                            Compare all 42 features side-by-side across Starter, Growth, Scale, and Enterprise.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50/70">
                                        <th className="p-4 sm:p-5 text-sm font-bold text-gray-900 w-[32%] sticky left-0 bg-gray-50/90 backdrop-blur-sm z-10">
                                            Feature
                                        </th>
                                        <th className="p-4 sm:p-5 text-center text-sm font-bold text-gray-900 w-[17%]">
                                            <div>Starter</div>
                                            <div className="text-xs font-normal text-[#01696f] mt-0.5">₹999/mo</div>
                                        </th>
                                        <th className="p-4 sm:p-5 text-center text-sm font-bold text-[#01696f] w-[17%] bg-teal-50/50">
                                            <div className="inline-flex items-center gap-1">
                                                <span>Growth</span>
                                                <span className="text-[9px] bg-[#01696f] text-white px-1.5 py-0.5 rounded font-bold">Popular</span>
                                            </div>
                                            <div className="text-xs font-normal text-[#01696f] mt-0.5">₹1,999/mo</div>
                                        </th>
                                        <th className="p-4 sm:p-5 text-center text-sm font-bold text-gray-900 w-[17%]">
                                            <div>Scale</div>
                                            <div className="text-xs font-normal text-[#01696f] mt-0.5">₹4,499/mo</div>
                                        </th>
                                        <th className="p-4 sm:p-5 text-center text-sm font-bold text-gray-900 w-[17%]">
                                            <div>Enterprise</div>
                                            <div className="text-xs font-normal text-[#01696f] mt-0.5">Custom</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {PRICING_COMPARISON_GROUPS.map((group, gIdx) => (
                                        <React.Fragment key={gIdx}>
                                            <tr className="bg-gray-100/60 border-y border-gray-200">
                                                <td colSpan={5} className="py-2.5 px-4 sm:px-5 text-xs font-bold uppercase tracking-wider text-[#01696f]">
                                                    {group.category}
                                                </td>
                                            </tr>
                                            {group.rows.map((row, rIdx) => (
                                                <tr key={rIdx} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                                    <td className="p-3.5 sm:p-4 text-xs sm:text-sm font-medium text-gray-800 sticky left-0 bg-white z-10 border-r border-gray-100 sm:border-r-0">
                                                        {row.feature}
                                                    </td>
                                                    <td className="p-3.5 sm:p-4 text-center">
                                                        {renderCellValue(row.starter, false)}
                                                    </td>
                                                    <td className="p-3.5 sm:p-4 text-center bg-teal-50/30">
                                                        {renderCellValue(row.growth, true)}
                                                    </td>
                                                    <td className="p-3.5 sm:p-4 text-center">
                                                        {renderCellValue(row.scale, false)}
                                                    </td>
                                                    <td className="p-3.5 sm:p-4 text-center">
                                                        {renderCellValue(row.enterprise, false)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Bottom Assistance Callout */}
                <div className="mt-14 bg-white rounded-2xl p-6 border border-gray-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                    <div>
                        <h4 className="font-bold text-gray-900 text-base">Need help choosing the right plan for your institute?</h4>
                        <p className="text-gray-600 text-xs mt-0.5">Talk to our team for a personalized 15-minute walkthrough of CoachOne.</p>
                    </div>
                    <Link to="/book-demo" className="bg-[#0F172A] hover:bg-black text-white text-xs font-bold px-5 py-3 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" /> Book a Demo
                    </Link>
                </div>
            </div>
        </section>
    );
};

const COACHONE_FAQS = [
    {
        q: "What counts as an evaluated page?",
        a: "An evaluated page is counted only when CoachOne processes a student's handwritten answer-sheet page. Unused blank pages, instruction covers, and question paper sheets are never billed. You only pay ₹1.50 for actual answer pages evaluated."
    },
    {
        q: "Do I have to conduct my tests inside CoachOne, or can I keep using our existing paper-based tests?",
        a: "You can keep conducting your tests exactly as you do today! You do not need to change your physical classroom routines. Students can write on standard physical paper copies and upload photos via the PrepOne student app, or your office staff can batch scan papers into a single PDF. CoachOne handles the rest."
    },
    {
        q: "Does CoachOne replace our teachers?",
        a: "No, absolutely not. AI assists the teacher, it does not replace the teacher. CoachOne handles the repetitive, time-consuming mechanical tasks of checking hundreds of pages, verifying formula steps, and tabulating marks. Teachers retain full control to review, edit, or override any mark with 1 click, freeing their time for mentoring and actual classroom teaching."
    },
    {
        q: "Are MCQ tests and Daily Practice Problems (DPPs) included?",
        a: "Yes. Unlimited MCQ tests, online practice quizzes, and daily practice problem sheets (DPPs) are included free across all plans. There is zero per-page or evaluation fee for any objective/MCQ test."
    },
    {
        q: "How does AI evaluate cursive student handwriting and step-marking?",
        a: "Our vision model is specifically trained on Indian student handwriting across CBSE, ICSE, and state board patterns. It checks solutions against step-by-step marking rubrics, awarding partial credit for correct theorem recall, formula substitutions, and units, and highlights specific calculation slips."
    },
    {
        q: "Can I create an institute website and manage admission leads?",
        a: "Yes! Every CoachOne plan comes with an Institute Microsite builder. You can showcase faculty profiles, course schedules, and past topper ranks. Any prospective student or parent who fills out the enquiry form appears immediately in your built-in Admissions CRM pipeline to track through counselling to enrollment."
    },
    {
        q: "How does the Google Reviews Booster work, and do you guarantee rankings?",
        a: "The review booster prompts satisfied parents and students to leave 5-star ratings on your Google Business Profile after strong test scores or positive milestones. While we cannot guarantee exact Google search ranks (since local search algorithms factor in location, competition, and age of profile), consistent authentic 5-star reviews significantly improve your local discovery and parent trust."
    },
    {
        q: "Can our enrolled students access PrepOne Premium practice material?",
        a: "Yes. Institutes subscribed to CoachOne can grant their students access to PrepOne Premium. Students get access to 10+ years of solved board PYQs, adaptive smart practice, and model solutions directly inside their app linked to your institute batch code."
    },
    {
        q: "What happens if our institute grows beyond its current student limit?",
        a: "You can easily upgrade to the next tier at any point during your subscription with pro-rated billing. Your student history, batches, questions, and test archives remain completely intact."
    },
    {
        q: "Can we try CoachOne before subscribing?",
        a: "Yes. You can book a 20-minute live demonstration or start a guided free pilot with your actual batch papers to experience how the test builder, handwritten copy checking, and WhatsApp reports work firsthand."
    }
];

// --- FAQ ACCORDION ---
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="bg-white py-24 border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                        Frequently Asked Questions
                    </div>
                    <h2 className="font-display text-4xl font-bold text-[#0F172A]">
                        Everything you need to know.
                    </h2>
                </div>

                <div className="space-y-4">
                    {COACHONE_FAQS.map((faq, i) => (
                        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-6 text-left font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-base sm:text-lg pr-4">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform ${openIndex === i ? 'rotate-180 text-[#01696f]' : ''}`} />
                            </button>
                            {openIndex === i && (
                                <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- EPILOGUE: THE NEXT CHAPTER (FINAL CTA) ---
const BottomCTA = () => (
    <section className="bg-gradient-to-br from-[#01696f] via-[#01585d] to-[#014044] py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full filter blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="text-xs font-bold text-teal-300 uppercase tracking-widest mb-4">
                The Next Chapter for Your Institute
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to write your academy's topper story?
            </h2>
            <p className="font-body text-lg md:text-xl text-teal-50 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of coaching institutes across India using CoachOne to eliminate mark leakage, empower faculty, and delight parents.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/book-demo" className="w-full sm:w-auto bg-white text-[#01696f] hover:bg-teal-50 px-8 py-4 rounded-xl flex items-center justify-center transition-all shadow-xl hover:-translate-y-0.5 font-bold text-lg">
                    <Calendar className="w-5 h-5 mr-3 text-[#01696f]" />
                    Book a 20-Min Personalized Demo
                </Link>
                <Link to="/test-management" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-xl flex items-center justify-center transition-all font-bold text-lg">
                    Explore Test Studio
                </Link>
            </div>
        </div>
    </section>
);

export default function CoachOne() {
    const demoRef = useRef(null);

    const scrollToDemo = () => {
        demoRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <SEO
                title="CoachOne | All-in-One Software for Coaching Institutes & Academies"
                description="Complete software for coaching institutes. AI handwritten copy checking with step marks, test paper generator with 50,000+ questions, student mistake analysis, and automated WhatsApp parent report cards."
                keywords="coaching institute software, AI copy checking, test paper generator, CBSE step marking software, coaching CRM, parent WhatsApp report cards, coaching ERP India"
                canonicalUrl="https://solviq.in/coachone"
                schema={[
                    buildCoachOneSaasSchema(),
                    buildFaqSchema(COACHONE_FAQS),
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'CoachOne', url: '/coachone' }
                    ])
                ]}
            />
            <Navbar />
            <Hero onExploreClick={scrollToDemo} />
            <SilentBreakdownSection />
            <WeeklyStorySection />
            <DashboardDemo demoRef={demoRef} />
            <FeatureGrid />
            <TelemetrySpotlight />
            <GrowthSuiteSection />
            <section className="py-24 bg-[#f8fafc] border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                            Student &amp; Center Sync
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
                            Try Institute Batch Code
                        </h2>
                        <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed">
                            See how students enter your coaching institute code on their PrepOne app to automatically get tests, practice questions, and study material.
                        </p>
                    </div>
                    <InstituteCodeValidator />
                </div>
            </section>
            <TransformationSection />
            <ROICalculatorSection />
            <Pricing />
            <FAQ />
            <BottomCTA />
            <BackendStatusBadge />
            <Footer />
        </div>
    );
}
