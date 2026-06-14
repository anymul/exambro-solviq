import React from 'react';
import {
    BrainCircuit, Scan, FileEdit, CheckCircle2,
    Zap, FileText, Cpu, ShieldCheck, ArrowRight,
    SearchCode, Eye
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import FadeIn from '../componenets/FadeIn';
import SEO from '../componenets/SEO';

const Hero = () => (
    <section className="relative pt-32 pb-24 bg-[#111210] overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#01696f] rounded-full mix-blend-screen filter blur-[150px] opacity-30 animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-800 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-8 border border-white/10">
                <BrainCircuit className="w-4 h-4 text-teal-400" />
                <span className="text-white text-sm font-bold tracking-wide uppercase">AI Evaluation Engine</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
                <LetterReveal text="Grade 100 subjective papers." delay={100} /><br />
                <LetterReveal text="While you drink your Tea." delay={700} className="text-teal-400 italic" />

                {/* <span className="text-teal-400 italic">While you drink your Tea.</span> */}
            </h1>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                MCQs are easy. But board exams demand subjective answers. Our algorithm reads messy handwriting, understands mathematical derivations, and applies step-marking—just like your best teacher.
            </p>
            <button className="bg-[#01696f] hover:bg-[#015257] text-white px-8 py-4 rounded-xl inline-flex items-center transition-all shadow-[0_0_20px_rgba(1,105,111,0.4)] font-bold text-lg">
                See How the AI Grades <ArrowRight className="w-5 h-5 ml-3" />
            </button>
        </div>
    </section>
);

const StepMarkingDemo = () => (
    <section className="py-24 bg-[#f7f6f2] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">It doesn't just read. It understands.</h2>
                <p className="text-gray-600 text-lg">CoachOne's AI evaluates answers against a master rubric, giving marks for correct formulas and logic, even if the final calculation is wrong.</p>
            </div>

            <div className="bg-white rounded-[2rem] border border-gray-200 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                {/* Mock Handwritten Sheet */}
                <div className="lg:w-1/2 bg-gray-50 p-8 border-r border-gray-200 relative">
                    <div className="absolute top-4 right-4 bg-gray-200 text-gray-500 text-xs px-2 py-1 rounded font-bold uppercase tracking-wider">Student Upload</div>
                    <img
                        src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800"
                        alt="Handwritten equations"
                        className="w-full h-auto rounded-xl opacity-60 mix-blend-multiply contrast-125"
                    />
                    {/* Overlay Bounding Boxes simulating AI Vision */}
                    <div className="absolute top-[30%] left-[20%] w-[60%] h-[15%] border-2 border-teal-400 bg-teal-400/10 rounded-lg flex items-start p-2">
                        <span className="bg-teal-400 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">Formula Detected</span>
                    </div>
                    <div className="absolute top-[60%] left-[20%] w-[40%] h-[15%] border-2 border-yellow-400 bg-yellow-400/10 rounded-lg flex items-start p-2">
                        <span className="bg-yellow-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">Calc Error</span>
                    </div>
                </div>

                {/* AI Output Panel */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-3 mb-6">
                        <Cpu className="w-8 h-8 text-teal-600" />
                        <h3 className="font-display text-2xl font-bold text-[#0F172A]">AI Grading Output</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl flex justify-between items-center">
                            <div>
                                <div className="font-bold text-green-800 text-sm">Step 1: Formula Application</div>
                                <div className="text-green-600 text-xs mt-1">v = u + at correctly applied.</div>
                            </div>
                            <div className="font-display font-bold text-green-700 text-xl">+1.0</div>
                        </div>

                        <div className="p-4 border border-green-200 bg-green-50 rounded-xl flex justify-between items-center">
                            <div>
                                <div className="font-bold text-green-800 text-sm">Step 2: Value Substitution</div>
                                <div className="text-green-600 text-xs mt-1">Correct variables isolated.</div>
                            </div>
                            <div className="font-display font-bold text-green-700 text-xl">+1.0</div>
                        </div>

                        <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-xl flex justify-between items-center relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
                            <div>
                                <div className="font-bold text-yellow-800 text-sm">Step 3: Final Calculation</div>
                                <div className="text-yellow-600 text-xs mt-1">Arithmetic error in final addition.</div>
                            </div>
                            <div className="font-display font-bold text-yellow-700 text-xl">0.0</div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-end">
                        <div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Final Question Score</div>
                            <div className="flex items-center text-teal-600 font-bold text-sm">
                                <Zap className="w-4 h-4 mr-1" /> Evaluated in 1.2s
                            </div>
                        </div>
                        <div className="font-display text-4xl font-bold text-[#0F172A]">2.0 <span className="text-xl text-gray-400">/ 3.0</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TimelineWorkflow = () => {
    const steps = [
        { icon: <Scan />, title: "Bulk Scan & Upload", desc: "Collect the batch's handwritten sheets. Run them through any standard scanner as a single PDF. Upload it to the portal—we handle the splitting." },
        { icon: <SearchCode />, title: "OCR & Context Extraction", desc: "Our vision models clean up the images and transcribe cursive handwriting, struck-out words, and mathematical symbols with high fidelity." },
        { icon: <BrainCircuit />, title: "Algorithmic Step-Marking", desc: "The LLM compares the student's answer against the master answer key, awarding partial marks for methodology and logical flow." },
        { icon: <Eye />, title: "Human-in-the-Loop Review", desc: "The AI flags low-confidence or highly messy answers for your manual review. You always have the final say before scores are published." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">The 4-Step Pipeline</h2>
                    <p className="text-gray-600 text-lg">Designed to fit seamlessly into your existing operations.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className={`flex flex-col md:flex-row items-start md:items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className={`md:w-1/2 ${i % 2 !== 0 ? 'md:pl-16' : 'md:pr-16'} mb-4 md:mb-0 pl-16 md:pl-0`}>
                                    <div className={`bg-gray-50 p-6 md:p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all ${i % 2 !== 0 ? 'text-left' : 'md:text-right text-left'}`}>
                                        <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                                    <div className="w-14 h-14 bg-[#01696f] rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg">
                                        {React.cloneElement(step.icon, { className: 'w-6 h-6' })}
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

const TrustBanner = () => (
    <section className="bg-[#111210] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <ShieldCheck className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                    <h4 className="font-display text-white text-xl font-bold mb-2">96% Benchmarked Accuracy</h4>
                    <p className="text-gray-400 text-sm">Tested against double-blind manual grading by senior board examiners.</p>
                </div>
                <div className="p-6 md:border-l md:border-r border-white/10">
                    <FileEdit className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                    <h4 className="font-display text-white text-xl font-bold mb-2">Zero Fatigue</h4>
                    <p className="text-gray-400 text-sm">Paper #100 gets the exact same attention to detail as Paper #1.</p>
                </div>
                <div className="p-6">
                    <CheckCircle2 className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                    <h4 className="font-display text-white text-xl font-bold mb-2">Eliminate Bias</h4>
                    <p className="text-gray-400 text-sm">Standardized rubrics mean every student is graded on a perfectly level playing field.</p>
                </div>
            </div>
        </div>
    </section>
);

export default function AIEvaluationMarketingPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <SEO
                title="CoachOne AI Evaluation | Automated Grading for Better Insights"
                description="Experience the future of assessment with CoachOne's AI-powered evaluation workflow. Save time, reduce bias, and gain valuable insights into student performance."
                canonicalUrl="https://solviq.in/ai-evaluation"
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