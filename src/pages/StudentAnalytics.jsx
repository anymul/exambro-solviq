import { Link } from 'react-router-dom';
import {
    PieChart, CheckCircle2, ArrowRight, BarChart3,
    Calendar, Send, Sparkles, Check
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import { InlineMath, LatexText } from '../componenets/Latex';

const Hero = () => (
    <section className="relative pt-32 pb-20 bg-[#111210] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#01696f]/30 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-purple-900/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiLz48L3N2Zz4=')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 text-teal-400 text-xs font-semibold tracking-wider uppercase mb-4">
                <PieChart className="w-4 h-4 text-teal-400" />
                <span>Student Mistake &amp; Performance Insights</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 tracking-tight leading-snug">
                <LetterReveal text="Marks don't tell the" delay={100} /><br />
                <span className="text-teal-400">
                    <LetterReveal text="Whole Story." delay={500} />
                </span>
            </h1>
            <p className="font-body text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Instead of generic feedback like "work harder in Physics", CoachOne shows teachers where students stumble, uncovers gaps from earlier grades, and suggests practical revision drills for tomorrow's class.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link to="/book-demo" className="w-full sm:w-auto bg-[#01696f] hover:bg-[#015257] text-white px-6 py-3.5 rounded-xl inline-flex items-center justify-center transition-all shadow-md font-bold text-base">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a Walkthrough
                </Link>
                <a href="#distractors" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl inline-flex items-center justify-center transition-all font-semibold text-base">
                    Explore Student Traps
                </a>
            </div>
        </div>
    </section>
);

// --- 1. CHAPTER STRUGGLE HEATMAP ---
const ChapterHeatmapSection = () => (
    <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Visual Side */}
                <div className="relative">
                    <div className="bg-white border border-gray-200 p-6 md:p-7 rounded-2xl shadow-sm text-gray-900 relative z-10">
                        <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
                            <div>
                                <span className="text-xs font-semibold text-[#01696f] uppercase tracking-wider block">Class Performance Matrix</span>
                                <h3 className="text-xl font-bold text-gray-900 mt-0.5">Class 12 Target: Physics</h3>
                            </div>
                            <span className="bg-teal-50 text-[#01696f] text-xs font-semibold px-2.5 py-1 rounded-md border border-teal-100">48 Students Tested</span>
                        </div>
                        
                        {/* Interactive Matrix */}
                        <div className="space-y-3">
                            {[
                                { chapter: '1. Electrostatics & Capacitance', score: 84, tag: 'Strong Grasp', color: 'bg-emerald-500', text: 'text-emerald-700' },
                                { chapter: '2. Current Electricity & Circuits', score: 76, tag: 'Good Progress', color: 'bg-emerald-500', text: 'text-emerald-700' },
                                { chapter: '3. Magnetic Effects & Biot-Savart', score: 58, tag: 'Formula Slips', color: 'bg-amber-500', text: 'text-amber-700' },
                                { chapter: '4. Induction & Alternating Current', score: 46, tag: 'Struggle Area', color: 'bg-rose-500', text: 'text-rose-700' },
                                { chapter: '5. Ray Optics & Instruments', score: 42, tag: 'Prerequisite Gap', color: 'bg-rose-500', text: 'text-rose-700' },
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                                    <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                                        <span className="text-gray-800">{item.chapter}</span>
                                        <span className={item.text}>{item.score}% • {item.tag}</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.score}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap justify-between items-center text-xs text-gray-500 gap-2">
                            <span>Batch spread: 14 High • 22 Average • 12 Need Help</span>
                            <span className="text-[#01696f] font-semibold flex items-center gap-1">1-Click PDF Summary <Check className="w-3.5 h-3.5 inline" /></span>
                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div>
                    <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider block mb-3">
                        Batch Chapter Analysis
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        Pinpoint batch weaknesses before the final exam.
                    </h2>
                    <p className="font-body text-gray-600 text-base mb-6 leading-relaxed">
                        A score of 52/100 doesn't help a teacher adapt their lesson plan. CoachOne maps student performance across chapters, sub-topics, and question types, showing faculty exactly which concept needs re-teaching in tomorrow's lecture.
                    </p>
                    <ul className="space-y-3.5">
                        {[
                            "Batch struggle summary updated automatically upon test evaluation.",
                            "Identifies top-rank contenders alongside students needing support.",
                            "Generates focused practice problems based on specific chapter failure points."
                        ].map((point, i) => (
                            <li key={i} className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0 mt-0.5" />
                                <span className="font-medium text-gray-700 text-sm">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// --- 2. DISTRACTOR TRAP & MISCONCEPTION FINGERPRINTING ---
const DistractorTrapSection = () => (
    <section id="distractors" className="py-20 bg-[#f7f6f2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider block mb-3">
                    Targeted Mistake Patterns
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Understanding why students pick the wrong option
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                    When students choose an incorrect answer, it is rarely random guessing. CoachOne classifies common errors so teachers can immediately see whether a mistake was due to sign conventions, unit conversion, or formula misapplication.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {[
                    {
                        icon: "🔴",
                        tag: "Sign Convention Slip",
                        example: "Forgot the negative sign in Lenz's law or mirrored coordinates in ray optics.",
                        solution: "Triggers targeted sign-rule drills."
                    },
                    {
                        icon: "🟠",
                        tag: "Formula Input Error",
                        example: "Used diameter instead of radius, or confused peak voltage with RMS voltage.",
                        solution: "Reinforces variable definition checkpoints."
                    },
                    {
                        icon: "🟡",
                        tag: "Concept Confusion",
                        example: "Treated adiabatic expansion as isothermal, or confused series with parallel capacitors.",
                        solution: "Visualizes thermodynamic process paths."
                    },
                    {
                        icon: "🔵",
                        tag: "Unit & Magnitude Slip",
                        example: "Missed cm to m conversion or computed energy in eV instead of Joules.",
                        solution: "Highlights dimensional analysis reminders."
                    }
                ].map((trap, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="text-2xl mb-3">{trap.icon}</div>
                            <h3 className="font-bold text-base text-gray-900 mb-1.5">{trap.tag}</h3>
                            <p className="text-xs text-gray-600 leading-relaxed mb-4">{trap.example}</p>
                        </div>
                        <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-[11px] text-[#01696f] font-semibold">
                            Class action: {trap.solution}
                        </div>
                    </div>
                ))}
            </div>

            {/* Live Question Trap Breakdown UI */}
            <div className="bg-white p-6 md:p-7 rounded-2xl border border-gray-200 text-gray-900 shadow-sm max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100 text-xs">
                    <span className="text-[#01696f] font-bold tracking-wider uppercase">Faculty Note: Question #14</span>
                    <span className="bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded border border-amber-200 font-semibold">64% Batch Mistake</span>
                </div>
                <p className="text-sm text-gray-800 mb-4 font-medium leading-relaxed">
                    <LatexText text="A circular coil of radius \(10\,\text{cm}\) rotates in a magnetic field \(B = 0.5\,\text{T}\). What is the induced EMF when the magnetic flux through the coil is decreasing at \(4\,\text{Wb/s}\)?" />
                </p>
                <div className="space-y-2 text-xs">
                    <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl flex justify-between items-center">
                        <span className="text-emerald-950 font-medium">Option A: <InlineMath math="+4.0\,\text{V}" /></span>
                        <span className="text-emerald-700 font-bold">Correct Answer (36% Chose)</span>
                    </div>
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex justify-between items-center">
                        <span className="text-amber-950 font-medium">Option B: <InlineMath math="-4.0\,\text{V}" /></span>
                        <span className="text-amber-800 font-bold">Common Trap: Sign Convention (64% Chose)</span>
                    </div>
                </div>
                <div className="mt-4 p-3.5 bg-teal-50/80 border border-teal-200/80 rounded-xl text-xs text-teal-950 leading-relaxed">
                    <strong className="text-[#01696f]">Teacher Takeaway:</strong> Most students understood Faraday's law of induction, but got caught by Lenz's rule negative sign convention.
                </div>
            </div>
        </div>
    </section>
);

// --- 3. QUESTION-NATIVE SUBJECTIVE RUBRIC TELEMETRY ---
const SubjectiveRubricSection = () => (
    <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider block mb-3">
                        Authentic Board Marking
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        Step-by-step marking schemes that mirror CBSE and state boards.
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        Students rarely lose an entire 3-mark or 5-mark question completely. CoachOne preserves authentic board marking schemes and attributes lost marks to the exact derivation or calculation step.
                    </p>
                    
                    <div className="space-y-3.5">
                        {[
                            { label: "1. Formula Recall & Theorem Identification", val: "88% Batch Success", bar: "w-[88%]", color: "bg-emerald-500" },
                            { label: "2. Vector & Diagrammatic Representation", val: "74% Batch Success", bar: "w-[74%]", color: "bg-emerald-500" },
                            { label: "3. Algebraic Variable Substitution", val: "62% Batch Success", bar: "w-[62%]", color: "bg-amber-500" },
                            { label: "4. Final Calculation & SI Units", val: "44% Success (56% Lost Marks)", bar: "w-[44%]", color: "bg-rose-500" },
                        ].map((m, i) => (
                            <div key={i} className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                                <div className="flex justify-between text-xs font-semibold text-gray-800 mb-1.5">
                                    <span>{m.label}</span>
                                    <span className="text-[#01696f]">{m.val}</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className={`h-full ${m.color} rounded-full ${m.bar}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Visual */}
                <div className="bg-white p-6 md:p-7 rounded-2xl border border-gray-200 text-gray-900 shadow-sm">
                    <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
                        <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider">Step-by-Step Marking Breakdown</span>
                        <span className="text-xs bg-teal-50 text-[#01696f] font-semibold px-2.5 py-1 rounded-md border border-teal-100">CBSE Short Answer (3 Marks)</span>
                    </div>

                    <div className="space-y-3 text-xs">
                        <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200">
                            <div className="flex justify-between text-emerald-800 font-bold mb-1">
                                <span>Step 1: Formula Identified (+1.0 Mark)</span>
                                <span className="text-emerald-700">88% Batch Success</span>
                            </div>
                            <p className="text-gray-700">
                                <LatexText text="\(F = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})\) written correctly." />
                            </p>
                        </div>

                        <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200">
                            <div className="flex justify-between text-emerald-800 font-bold mb-1">
                                <span>Step 2: Velocity Selector Condition (+1.0 Mark)</span>
                                <span className="text-emerald-700">82% Batch Success</span>
                            </div>
                            <p className="text-gray-700">
                                <LatexText text="\(qE = qvB \implies v = \frac{E}{B}\) derived correctly." />
                            </p>
                        </div>

                        <div className="p-3 bg-rose-50 rounded-xl border border-rose-200">
                            <div className="flex justify-between text-rose-800 font-bold mb-1">
                                <span>Step 3: Arithmetic &amp; Units (+1.0 Mark)</span>
                                <span className="text-rose-700">44% Batch Success</span>
                            </div>
                            <p className="text-gray-700">
                                <LatexText text="Missed \(\text{kV/m} \rightarrow \text{V/m}\) unit conversion; omitted \(\text{m/s}\) in answer." />
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-600 bg-gray-50/70 p-3 rounded-xl border border-gray-100">
                        <strong className="text-gray-800">Teacher Note:</strong> Students understand the theory, but 56% dropped the final step on unit conversion. A 5-minute drill in class will fix it.
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- 4. PREREQUISITE KNOWLEDGE GRAPH TRACER ---
const PrerequisiteGraphSection = () => (
    <section className="py-20 bg-[#f7f6f2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider block mb-3">
                    Foundational Connections
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Finding the root cause in earlier chapters
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                    When a Class 12 student struggles with alternating current, the issue is often harmonic motion from Class 11. CoachOne links current curriculum problems to prior foundational chapters so teachers can fix the real gap.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
                {[
                    {
                        subject: "Physics",
                        current: "Class 12: LC Oscillations & AC",
                        prereq: "Class 11: Simple Harmonic Motion (SHM)",
                        desc: "Difficulty with differential equations and phase leads to confusion during resonance calculations.",
                        badge: "42% Prerequisite Gap"
                    },
                    {
                        subject: "Chemistry",
                        current: "Class 12: Aldehydes, Ketones & Acids",
                        prereq: "Class 11: General Organic Chemistry (GOC)",
                        desc: "Gaps in inductive effects and nucleophilic addition mechanisms slow down multi-step organic synthesis.",
                        badge: "51% Prerequisite Gap"
                    },
                    {
                        subject: "Mathematics",
                        current: "Class 12: Definite Integrals & Areas",
                        prereq: "Class 11: Conic Sections & Limits",
                        desc: "Students struggle to sketch parabola-line intersections before setting up integration limits.",
                        badge: "38% Prerequisite Gap"
                    }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs font-bold text-[#01696f] uppercase">{item.subject}</span>
                                <span className="text-xs bg-rose-50 text-rose-700 font-semibold px-2 py-0.5 rounded border border-rose-200">{item.badge}</span>
                            </div>
                            <div className="text-sm font-bold text-gray-900 mb-1">{item.current}</div>
                            <div className="text-xs font-semibold text-purple-800 bg-purple-50 p-2 rounded-lg mb-3 border border-purple-100">
                                ↳ Root Cause: {item.prereq}
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed mb-5">{item.desc}</p>
                        </div>
                        <button className="w-full bg-[#01696f] hover:bg-[#015257] text-white text-xs font-semibold py-2 rounded-xl transition-colors flex items-center justify-center">
                            Dispatch 10-Min Refresher <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// --- 5. STUDENT DIAGNOSTIC PROFILE & AI REMEDIAL SUMMARIES ---
const StudentProfileSection = () => (
    <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider block mb-3">
                        Student Profiles
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        Clear student profiles with practical teacher notes.
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        Open any student's record to review their test progression, recurring error patterns, and practical suggestions for their next practice sheet.
                    </p>
                    <ul className="space-y-3.5">
                        {[
                            "Growth trajectory across all tests and subjects over the academic year.",
                            "Balanced difficulty scoring calibrated to actual test toughness.",
                            "Actionable suggestions for specific practice problem sets."
                        ].map((p, i) => (
                            <li key={i} className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0 mt-0.5" />
                                <span className="font-medium text-gray-700 text-sm">{p}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Profile Card Simulation */}
                <div className="bg-white p-6 md:p-7 rounded-2xl border border-gray-200 text-gray-900 shadow-sm">
                    <div className="flex items-center space-x-3 mb-5 pb-4 border-b border-gray-100">
                        <div className="w-11 h-11 rounded-full bg-[#01696f]/10 text-[#01696f] flex items-center justify-center font-bold text-sm">
                            AV
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-base">Aarav Verma (#STU-4821)</h4>
                            <p className="text-xs text-gray-500">Class 12 Target Batch • Target: JEE &amp; CBSE 95%+</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <span className="text-xs text-gray-500 block mb-0.5">Overall Accuracy</span>
                            <span className="text-xl font-bold text-[#01696f]">88.4%</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <span className="text-xs text-gray-500 block mb-0.5">Tests Completed</span>
                            <span className="text-xl font-bold text-gray-900">12 Full Tests</span>
                        </div>
                    </div>

                    <div className="bg-teal-50/80 border border-teal-200/80 p-4 rounded-xl text-xs space-y-1.5">
                        <span className="text-[#01696f] font-bold uppercase block flex items-center tracking-wider text-[11px]">
                            <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Teacher Action Note
                        </span>
                        <p className="text-gray-700 leading-relaxed">
                            Aarav scores above 90% in conceptual questions, but regularly drops marks in multi-step algebraic substitution. Recommended: 8 to 10 focused numerical practice questions on LC Oscillations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- 6. 1-CLICK WHATSAPP PARENT DISPATCH ---
const ParentDispatchSection = () => (
    <section className="py-20 bg-[#f7f6f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Visual Side */}
                <div className="bg-slate-100 p-5 rounded-3xl border border-slate-200 shadow-sm max-w-md mx-auto w-full">
                    <div className="flex items-center space-x-2.5 mb-3.5 px-1 text-xs font-semibold text-gray-700">
                        <Send className="w-4 h-4 text-[#01696f]" />
                        <span>Automatic WhatsApp Report</span>
                    </div>

                    <div className="bg-white text-gray-900 p-4 rounded-2xl text-xs space-y-3 shadow-sm border border-gray-100">
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="font-bold text-[#01696f]">Apex Academy Updates</span>
                            <span className="text-gray-400 text-[11px]">10:45 AM</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Dear Parent, Rahul Sharma scored <strong>68/70 (97.1%)</strong> in Physics Mock Test #4.
                        </p>
                        <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-200 flex items-center justify-between">
                            <div>
                                <div className="font-bold text-gray-900">Rahul_Sharma_Report.pdf</div>
                                <div className="text-[10px] text-gray-500">Performance Report • 2 Pages</div>
                            </div>
                            <span className="bg-[#01696f] text-white px-2.5 py-1 rounded text-[10px] font-bold">Download</span>
                        </div>
                        <p className="text-[11px] text-gray-500 italic">
                            "Identified small gap in Class 11 SHM. A quick 10-minute revision worksheet was shared."
                        </p>
                    </div>
                </div>

                {/* Text Side */}
                <div>
                    <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider block mb-3">
                        Parent Trust &amp; Retention
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        Your best marketing tool? <br />
                        <span className="text-[#01696f]">A well-informed, reassured parent.</span>
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        Parents invest significant trust and fees into coaching institutes. Instead of irregular phone calls or generic mark sheets, send clean, personalized updates directly on WhatsApp minutes after test grading is finished.
                    </p>
                    <Link to="/book-demo" className="bg-[#01696f] hover:bg-[#015257] text-white px-6 py-3.5 rounded-xl inline-flex items-center font-bold text-base transition-all shadow-md">
                        <Calendar className="w-4 h-4 mr-2" />
                        See WhatsApp Demo
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

// --- BOTTOM CTA ---
const BottomCTA = () => (
    <section className="bg-[#111210] py-20 relative overflow-hidden text-white">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Ready to give your teachers clearer insight?
            </h2>
            <p className="font-body text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                Join institutes across India using CoachOne to identify student struggle points, keep parents informed, and help students improve their rank.
            </p>
            <Link to="/book-demo" className="bg-[#01696f] hover:bg-[#015257] text-white px-6 py-3.5 rounded-xl inline-flex items-center justify-center transition-all font-bold text-base shadow-md">
                <BarChart3 className="w-4 h-4 mr-2" />
                Schedule a Walkthrough
            </Link>
        </div>
    </section>
);

export default function StudentAnalyticsMarketingPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <SEO
                title="Student Analytics & Learning Gaps | CoachOne"
                description="Understand where students struggle, trace gaps back to earlier classes, and keep parents updated with automated WhatsApp reports."
                keywords="student analytics, coaching institute analytics, mistake analysis, CBSE marking schemes, prerequisite learning gaps, parent updates"
                canonicalUrl="https://solviq.in/student-analytics"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'CoachOne', url: '/coachone' },
                        { name: 'Student Analytics', url: '/student-analytics' }
                    ])
                ]}
            />
            <Navbar />
            <Hero />
            <ChapterHeatmapSection />
            <DistractorTrapSection />
            <SubjectiveRubricSection />
            <PrerequisiteGraphSection />
            <StudentProfileSection />
            <ParentDispatchSection />
            <BottomCTA />
            <Footer />
        </div>
    );
}