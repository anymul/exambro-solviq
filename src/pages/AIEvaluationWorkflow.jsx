import React from 'react';
import { Link } from 'react-router-dom';
import {
    Scan, FileEdit, CheckCircle2,
    Zap, Cpu, ShieldCheck, SearchCode, Eye,
    Calendar, Check, AlertTriangle
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import { InlineMath, BlockMath, LatexText } from '../componenets/Latex';

const Hero = () => (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-[#111210] overflow-hidden text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#01696f] rounded-full mix-blend-multiply filter blur-[140px] opacity-25"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-4">
                Subjective Copy Checking
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight tracking-tight">
                <LetterReveal text="Check 100 handwritten papers." delay={100} /><br />
                <span className="text-teal-400 italic">
                    <LetterReveal text="While you finish your evening tea." delay={700} />
                </span>
            </h1>
            <p className="font-body text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Objective MCQs are easy to score, but real board exams depend on long derivations, equations, and explanations. CoachOne reads student handwriting, awards partial step marks, and highlights exactly where marks were lost.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link to="/book-demo" className="w-full sm:w-auto bg-[#01696f] hover:bg-[#015257] text-white px-7 py-3.5 rounded-xl inline-flex items-center justify-center transition-all shadow-md font-bold text-base">
                    <Calendar className="w-4 h-4 mr-2.5" />
                    Book a Live Demo
                </Link>
                <a href="#pipeline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-xl inline-flex items-center justify-center transition-all font-bold text-base backdrop-blur-sm">
                    See How It Works
                </a>
            </div>
        </div>
    </section>
);

// --- INTERACTIVE STEP-MARKING SIMULATOR ---
const StepMarkingDemo = () => (
    <section className="py-20 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-2.5">
                    Step-by-Step Marking
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3 leading-snug">
                    It grades like an experienced board examiner.
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    CoachOne checks answers against your official marking scheme, giving students step marks for the right formula and substitution even if the final calculation has a small error.
                </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden flex flex-col lg:flex-row">
                {/* Mock Handwritten Sheet - Dark Slate Board */}
                <div className="lg:w-1/2 bg-slate-900 p-6 md:p-7 text-white relative flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-700 text-xs">
                            <span className="text-teal-400 font-bold uppercase tracking-wider">Student Submission Sheet</span>
                            <span className="text-gray-400">Class 12 • Roll #24</span>
                        </div>

                        <div className="space-y-3.5 text-xs text-gray-200">
                            <div className="p-3.5 bg-slate-800/90 rounded-xl border border-slate-700">
                                <p className="text-teal-300 font-semibold mb-1">Q3: Derive Lens Maker's Formula for thin convex lens.</p>
                                <p className="italic text-gray-300 font-serif text-xs sm:text-sm leading-relaxed">
                                    <LatexText text="Let a thin lens of refractive index \(n_2\) be placed in a medium of index \(n_1\). For refraction at first spherical surface:" />
                                </p>
                            </div>

                            {/* Bounding Box 1 */}
                            <div className="p-3 bg-emerald-950/40 border border-emerald-500/50 rounded-xl relative">
                                <span className="bg-emerald-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded absolute -top-2.5 right-3 shadow-sm">
                                    Formula Verified
                                </span>
                                <div className="text-emerald-300 font-semibold text-xs mb-1 flex items-center">
                                    <Check className="w-3.5 h-3.5 inline mr-1 text-emerald-400" /> Step 1: Surface 1 Formula Stated Correctly
                                </div>
                                <div className="text-xs text-gray-200">
                                    <BlockMath math="\frac{n_2}{v_1} - \frac{n_1}{u} = \frac{n_2 - n_1}{R_1}" />
                                </div>
                            </div>

                            {/* Bounding Box 2 */}
                            <div className="p-3 bg-emerald-950/40 border border-emerald-500/50 rounded-xl relative">
                                <span className="bg-emerald-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded absolute -top-2.5 right-3 shadow-sm">
                                    Logic Correct
                                </span>
                                <div className="text-emerald-300 font-semibold text-xs mb-1 flex items-center">
                                    <Check className="w-3.5 h-3.5 inline mr-1 text-emerald-400" /> Step 2: Surface 2 &amp; Thin Lens Condition Applied
                                </div>
                                <div className="text-xs text-gray-200">
                                    <BlockMath math="\frac{n_1}{v} - \frac{n_2}{v_1} = \frac{n_1 - n_2}{R_2}" />
                                </div>
                            </div>

                            {/* Bounding Box 3 */}
                            <div className="p-3 bg-amber-950/40 border border-amber-500/50 rounded-xl relative">
                                <span className="bg-amber-500 text-slate-900 text-[10px] font-semibold px-2 py-0.5 rounded absolute -top-2.5 right-3 shadow-sm">
                                    Sign Mistake Detected
                                </span>
                                <div className="text-amber-300 font-semibold text-xs mb-1 flex items-center">
                                    <AlertTriangle className="w-3.5 h-3.5 inline mr-1 text-amber-400" /> Step 3: Sign Convention Mistake
                                </div>
                                <div className="text-xs text-gray-200 leading-relaxed">
                                    <LatexText text="Student wrote \(\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} + \frac{1}{R_2}\right)\) instead of \(-\frac{1}{R_2}\)." />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-700 flex justify-between items-center text-xs text-gray-400">
                        <span className="flex items-center gap-1">Multi-page checking <Check className="w-3.5 h-3.5 text-emerald-400 inline" /></span>
                        <span className="text-teal-300 font-medium">Checked in 1.2 seconds</span>
                    </div>
                </div>

                {/* AI Grading Output Panel */}
                <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-white">
                    <div>
                        <div className="flex items-center space-x-3 mb-5">
                            <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#01696f] flex items-center justify-center font-bold">
                                <Cpu className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0F172A]">Step Marks Breakdown</h3>
                                <p className="text-xs text-gray-500">Board Marking Scheme Applied</p>
                            </div>
                        </div>

                        <div className="space-y-2.5">
                            <div className="p-3 border border-emerald-200 bg-emerald-50/60 rounded-xl flex justify-between items-center">
                                <div>
                                    <div className="font-semibold text-emerald-950 text-xs">Step 1: Surface 1 Refraction (1.5M)</div>
                                    <div className="text-emerald-700 text-[11px] leading-normal">Correct formula and diagrammatic ray logic</div>
                                </div>
                                <div className="font-bold text-emerald-800 text-sm sm:text-base ml-3 flex-shrink-0">+1.5 / 1.5</div>
                            </div>

                            <div className="p-3 border border-emerald-200 bg-emerald-50/60 rounded-xl flex justify-between items-center">
                                <div>
                                    <div className="font-semibold text-emerald-950 text-xs">Step 2: Surface 2 &amp; Thin Lens Condition (1.5M)</div>
                                    <div className="text-emerald-700 text-[11px] leading-normal">Virtual object assumption correctly framed</div>
                                </div>
                                <div className="font-bold text-emerald-800 text-sm sm:text-base ml-3 flex-shrink-0">+1.5 / 1.5</div>
                            </div>

                            <div className="p-3 border border-emerald-200 bg-emerald-50/60 rounded-xl flex justify-between items-center">
                                <div>
                                    <div className="font-semibold text-emerald-950 text-xs">Step 3: Adding Equations &amp; Focal Length (1.5M)</div>
                                    <div className="text-emerald-700 text-[11px] leading-normal">Algebraic addition steps verified</div>
                                </div>
                                <div className="font-bold text-emerald-800 text-sm sm:text-base ml-3 flex-shrink-0">+1.5 / 1.5</div>
                            </div>

                            <div className="p-3 border border-amber-200 bg-amber-50/70 rounded-xl flex justify-between items-center relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></div>
                                <div className="pl-1">
                                    <div className="font-semibold text-amber-950 text-xs">Step 4: Final Sign Convention (0.5M)</div>
                                    <div className="text-amber-800 text-[11px] leading-normal">Missed negative sign on <InlineMath math="R_2" /> radius</div>
                                </div>
                                <div className="font-bold text-amber-800 text-sm sm:text-base ml-3 flex-shrink-0">0.0 / 0.5</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-gray-100 flex justify-between items-end">
                        <div>
                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Final Question Score</div>
                            <div className="flex items-center text-teal-700 font-medium text-xs">
                                <Zap className="w-3.5 h-3.5 mr-1 text-[#01696f]" /> Partial marks awarded fairly
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-[#0F172A]">
                            4.5 <span className="text-base text-gray-400 font-normal">/ 5.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- THE 4-STEP EVALUATION PIPELINE ---
const TimelineWorkflow = () => {
    const steps = [
        {
            icon: <Scan />,
            title: "1. Scan Copies in One Go",
            desc: "Collect answer sheets after the test. Feed the stack through any office scanner as one single PDF. CoachOne splits pages automatically by roll number."
        },
        {
            icon: <SearchCode />,
            title: "2. Clean Handwriting Reading",
            desc: "The system transcribes student handwriting, recognizes strike-throughs, and reads equations, chemical formulas, and diagrams with high accuracy."
        },
        {
            icon: <CheckCircle2 />,
            title: "3. Step-by-Step Board Grading",
            desc: "Evaluates each question against your answer key. Awards marks for formula recall, correct values, and intermediate steps just like board examiners."
        },
        {
            icon: <Eye />,
            title: "4. Teacher Review & Fast Approval",
            desc: "Messy or unclear handwriting is flagged for a quick teacher look. Teachers can adjust marks with one click before reports are sent to parents."
        }
    ];

    return (
        <section id="pipeline" className="py-20 bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-2.5">
                        How It Works
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3 leading-snug">
                        How your center checks 100 papers in 4 steps
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                        Designed to fit your daily center routine without requiring special scanners or technical training.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

                    <div className="space-y-8 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className={`flex flex-col md:flex-row items-start md:items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className={`md:w-1/2 ${i % 2 !== 0 ? 'md:pl-12' : 'md:pr-12'} mb-3 md:mb-0 pl-14 md:pl-0`}>
                                    <div className={`bg-gray-50/80 p-5 sm:p-6 rounded-xl border border-gray-200 hover:shadow-md hover:border-teal-300 transition-all ${i % 2 !== 0 ? 'text-left' : 'md:text-right text-left'}`}>
                                        <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1.5">{step.title}</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-[#01696f] rounded-full border-4 border-white flex items-center justify-center text-white shadow-md">
                                        {React.cloneElement(step.icon, { className: 'w-5 h-5' })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- TRUST BANNER - CLEAN BALANCED CARDS ---
const TrustBanner = () => (
    <section className="bg-[#f8fafc] py-16 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200 shadow-sm">
                    <ShieldCheck className="w-9 h-9 text-[#01696f] mx-auto mb-3" />
                    <h4 className="text-[#0F172A] text-lg font-bold mb-1.5">96.4% Evaluator Accuracy</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Benchmarked against blind manual checks by senior board paper examiners.</p>
                </div>
                <div className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200 shadow-sm">
                    <FileEdit className="w-9 h-9 text-[#01696f] mx-auto mb-3" />
                    <h4 className="text-[#0F172A] text-lg font-bold mb-1.5">Zero Teacher Burnout</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">The 100th paper is checked with the exact same focus and care as the 1st paper.</p>
                </div>
                <div className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200 shadow-sm">
                    <CheckCircle2 className="w-9 h-9 text-[#01696f] mx-auto mb-3" />
                    <h4 className="text-[#0F172A] text-lg font-bold mb-1.5">Consistent &amp; Fair Marking</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Every student is scored against the same step rules, giving parents complete trust in test results.</p>
                </div>
            </div>
        </div>
    </section>
);

export default function AIEvaluationMarketingPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <SEO
                title="AI Handwritten Copy Checking Software for Coaching Institutes | CoachOne"
                description="Check 100+ handwritten subjective test papers in minutes. Step-by-step board marking, teacher review mode, and instant WhatsApp parent report cards."
                keywords="AI copy checking, handwritten answer checking software, coaching test evaluation, CBSE step marking software, paper checker for institutes"
                canonicalUrl="https://solviq.in/ai-evaluation"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'CoachOne', url: '/coachone' },
                        { name: 'AI Subjective Evaluation', url: '/ai-evaluation' }
                    ])
                ]}
            />
            <Navbar />
            <Hero />
            <StepMarkingDemo />
            <TimelineWorkflow />
            <TrustBanner />
            <Footer />
        </div>
    );
}