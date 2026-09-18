import {
    Timer, FileEdit, Smartphone, BrainCircuit,
    Target, PlayCircle,
    CheckCircle2, BookOpen, UploadCloud,
    Download
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import FadeIn from '../componenets/FadeIn';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import { LatexText } from '../componenets/Latex';
import mockTestLibraryImg from '../assets/mock_test_library.png';
import postTestAnalysisImg from '../assets/post_test_analysis.png';

const PREPONE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.solviq.prepone';

const Hero = () => (
    <section className="relative pt-32 pb-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#5046E5] rounded-full mix-blend-screen filter blur-[150px] opacity-25"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#3B82F6] rounded-full mix-blend-screen filter blur-[140px] opacity-20"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-1.5 mb-8 border border-white/10 shadow-sm backdrop-blur-md">
                <FileEdit className="w-4 h-4 text-[#818CF8]" />
                <span className="text-[#818CF8] text-xs font-bold tracking-wider uppercase">PrepOne Mock Tests</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-300 text-xs font-medium">Built by IITians</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-white font-bold mb-6 leading-tight">
                <LetterReveal text="Practice like it's the" delay={100} /><br />
                <span className="bg-gradient-to-r from-[#818CF8] via-[#A5B4FC] to-[#93C5FD] bg-clip-text text-transparent">
                    <LetterReveal text="Real Board Exam." delay={300} />
                </span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Stop practicing with random MCQs on your phone. Take full-length, board-aligned mock tests on physical paper, and let our AI evaluate your subjective answers instantly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a
                    href={PREPONE_PLAY_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#5046E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl inline-flex items-center transition-all shadow-[0_0_24px_rgba(80,70,229,0.35)] hover:-translate-y-0.5 font-bold text-base sm:text-lg group"
                >
                    <PlayCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    Start Your First Free Mock
                </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto text-left">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
                    <span>3-Hour Timed PDF Papers</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
                    <span>CBSE 10/12 & BSEB 10/12</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10 col-span-2 sm:col-span-1">
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0" />
                    <span>60-Sec Step Evaluation</span>
                </div>
            </div>
        </div>
    </section>
);

const AppUISimulation = () => (
    <section className="py-24 bg-[#F8F9FC] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center px-3.5 py-1 rounded-md bg-[#EEF2FF] border border-[#C7D2FE] text-xs font-bold text-[#4338CA] uppercase tracking-wider mb-3">
                    Curated Board Question Papers
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]">
                    <LetterReveal text="Your Personal Mock Test Studio" delay={100} threshold={0.1} />
                </h2>
                <p className="text-[#64748B] text-base sm:text-lg mt-3">
                    Full-length exam series calibrated strictly to the latest 2026 blueprint, section divisions, and step rubrics.
                </p>
            </div>

            {/* Showcase Grid: App Screenshot + Feature Cards */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left: Mobile App Mock Test Library Showcase */}
                <div className="lg:col-span-5 flex justify-center">
                    <div className="relative max-w-[310px] w-full">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#5046E5]/20 to-[#3B82F6]/10 rounded-[3rem] blur-xl" />
                        <div className="relative rounded-[2.5rem] p-2 bg-[#0F172A] shadow-2xl border border-gray-700/80">
                            <img
                                src={mockTestLibraryImg}
                                alt="PrepOne Mock Test Library Screen"
                                className="w-full h-auto rounded-[2rem] object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Live Simulated Test Cards */}
                <div className="lg:col-span-7 space-y-4">
                    {/* Active Test Card */}
                    <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-[#5046E5] shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[#5046E5] text-white text-[11px] font-extrabold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                            Recommended Next
                        </div>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-[#EEF2FF] rounded-2xl flex items-center justify-center text-[#5046E5] shrink-0">
                                <FileEdit className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold text-[#5046E5] uppercase tracking-wide">Class 12 • Physics</span>
                                    <span className="text-gray-300">•</span>
                                    <span className="text-xs text-gray-500 font-medium">3 Hours • 70 Marks</span>
                                </div>
                                <h4 className="font-bold text-[#0F172A] text-xl">CBSE 2026 Full Syllabus Pre-Board #3</h4>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                            Includes Section A (16 MCQs), Section B (Short Answer 2M), Section C (Short Answer 3M), Section D (Case Studies 4M), and Section E (Long Answer 5M).
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                            <a
                                href={PREPONE_PLAY_STORE_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#5046E5] hover:bg-[#4338CA] text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                            >
                                <Download className="w-4 h-4" /> Download Printable PDF & OMR
                            </a>
                            <span className="text-xs text-gray-500 text-center sm:text-left">
                                Free with instantaneous step evaluation
                            </span>
                        </div>
                    </div>

                    {/* Evaluated Past Test Card */}
                    <div className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Completed • AI Graded</span>
                                        <span className="text-gray-300">•</span>
                                        <span className="text-xs text-gray-500">BSEB Class 12 Chemistry</span>
                                    </div>
                                    <h4 className="font-bold text-[#0F172A] text-lg">Electrochemistry & Kinetics Block Test</h4>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-[10px] text-gray-400 font-bold uppercase block">Official Score</span>
                                <span className="text-2xl font-extrabold text-[#0F172A]">62<span className="text-xs text-gray-400 font-normal">/70</span></span>
                            </div>
                        </div>
                        <div className="bg-[#F8F9FC] p-3.5 rounded-xl border border-gray-100 flex items-center justify-between text-xs text-gray-600">
                            <span>Step deductions: -4M calculation slip, -4M omitted SI unit in Nernst equation</span>
                            <span className="text-[#5046E5] font-bold">Read examiner notes →</span>
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
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#EEF2FF] rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
                                <div className="relative z-10">
                                    <div className="text-5xl font-bold text-gray-100 mb-4 group-hover:text-indigo-100 transition-colors">0{i + 1}</div>
                                    <h3 className="text-xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
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
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#5046E5] rounded-full mix-blend-screen filter blur-[160px] opacity-20" />
            <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#3B82F6] rounded-full mix-blend-screen filter blur-[150px] opacity-15" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Side */}
                <div>
                    <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 border border-white/10 shadow-sm backdrop-blur-md">
                        <Target className="w-4 h-4 text-[#818CF8]" />
                        <span className="text-[#818CF8] text-xs font-bold tracking-wide uppercase">AI Examiner Telemetry</span>
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                        Know exactly why you lost every single mark.
                    </h2>
                    <p className="font-body text-gray-300 text-lg mb-8 leading-relaxed">
                        Don't just see a red cross. PrepOne's vision engine breaks down your handwriting by category: conceptual gap, arithmetic slip, omitted intermediate derivation step, or missing unit.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <div className="bg-white/10 p-2 rounded-xl mr-4 mt-1 border border-white/10 text-[#818CF8]">
                                <FileEdit className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="font-bold text-white block text-base">Line-by-Line Examiner Rubric Matching</span>
                                <span className="text-gray-400 text-sm block mt-1">See notes directly on your scanned handwriting showing where you skipped crucial board steps.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-white/10 p-2 rounded-xl mr-4 mt-1 border border-white/10 text-[#818CF8]">
                                <BrainCircuit className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="font-bold text-white block text-base">ABHYAS+ Adaptive Remediation</span>
                                <span className="text-gray-400 text-sm block mt-1">Our engine automatically feeds identified weak micro-topics into your daily targeted practice queue.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Visual Mockup + Image side */}
                <div className="space-y-6">
                    <div className="bg-[#1E293B] border border-gray-700/80 p-6 sm:p-8 rounded-[2.5rem] shadow-2xl relative">
                        <div className="flex justify-between items-center mb-6 border-b border-gray-700/80 pb-4">
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Examiner Rubric Audit</p>
                                <p className="text-lg font-bold text-white">CBSE Class 12 • Physics Q4 (Derivation)</p>
                            </div>
                            <div className="bg-red-500/15 text-red-300 px-3 py-1 rounded-full font-bold text-xs border border-red-500/30">
                                -2 Marks Deducted
                            </div>
                        </div>

                        <div className="space-y-3.5">
                            <div className="bg-[#0F172A] p-4 rounded-xl border border-gray-800">
                                <p className="text-gray-300 text-xs sm:text-sm italic leading-relaxed">
                                    <LatexText text="Student applied the first law of thermodynamics (\(\Delta U = Q - W\)) correctly (+1M), but failed to account for work done BY the gas during isobaric expansion (\(W = P\Delta V\)) (-2M)." />
                                </p>
                            </div>
                            <div className="bg-[#5046E5]/10 border border-[#5046E5]/30 p-3.5 rounded-xl text-xs text-indigo-200 flex items-center justify-between">
                                <span>Remedial Practice Queued: <strong>Work & Energy in Gases</strong></span>
                                <span className="text-white font-bold underline cursor-pointer">Start 5-min drill</span>
                            </div>
                        </div>
                    </div>

                    {/* Integrated Screenshot banner */}
                    <div className="rounded-3xl overflow-hidden border border-gray-700 shadow-xl bg-black/40">
                        <img
                            src={postTestAnalysisImg}
                            alt="Post Test Analysis Telemetry Screen"
                            className="w-full h-44 object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default function MockTestsPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#5046E5] selection:text-white">
            <SEO
                title="PrepOne Mock Tests | AI-Evaluated, Board-Aligned Practice Papers"
                description="Experience the future of exam prep with PrepOne's AI-evaluated mock tests. Download full-length, board-aligned papers, practice on physical paper, and get instant AI feedback to boost your performance."
                canonicalUrl="https://solviq.in/prepone/mock-tests"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'PrepOne', url: '/prepone' },
                        { name: 'Mock Tests', url: '/prepone/mock-tests' }
                    ])
                ]}
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
                <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="bg-[#5046E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl inline-flex items-center justify-center mx-auto transition-all shadow-[0_0_24px_rgba(80,70,229,0.35)] hover:-translate-y-0.5 font-bold">
                    <Smartphone className="w-5 h-5 mr-3" />
                    Download PrepOne App
                </a>
            </section>

            <Footer />
        </div>
    );
}
