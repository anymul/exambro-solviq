import React from 'react';
import { 
    BrainCircuit, Scan, FileEdit, CheckCircle2, 
    Zap, Eye, Target, ArrowRight,
    Smartphone, SearchCode, Sparkles, MessageSquareWarning
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import FadeIn from '../componenets/FadeIn';
import SEO from '../componenets/SEO';

const PREPONE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.solviq.prepone';

const Hero = () => (
    <section className="relative pt-32 pb-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#4F46E5] rounded-full mix-blend-screen filter blur-[150px] opacity-30 animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#16A34A] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-8 border border-white/10 shadow-lg">
                <BrainCircuit className="w-4 h-4 text-[#87fc4d]" />
                <span className="text-white text-sm font-bold tracking-wide uppercase">AutoScore AI</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
                <LetterReveal text="Your personal" delay={100} /><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87fc4d] to-[#16A34A]">Board Examiner.</span>
            </h1>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Don't wait 14 days for your coaching center to return your test. Upload your handwritten subjective answers and get step-by-step evaluation, partial marks, and feedback in 60 seconds.
            </p>
            <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl inline-flex items-center transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] font-bold text-lg group">
                <Scan className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Scan Your First Answer
            </a>
        </div>
    </section>
);

const StepMarkingMagic = () => (
    <section className="py-24 bg-[#F8F9FC] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">Yes, it gives step-marks.</h2>
                <p className="text-[#64748B] text-lg">In board exams, a wrong final answer doesn't mean zero marks. Our AI reads your methodology and awards partial credit just like the official marking scheme.</p>
            </div>

            <div className="bg-white rounded-[3rem] shadow-xl border border-gray-200 overflow-hidden flex flex-col lg:flex-row max-w-5xl mx-auto">
                
                {/* Simulated Camera View */}
                <div className="lg:w-1/2 bg-[#0F172A] relative p-8 flex flex-col items-center justify-center border-r border-gray-200 min-h-[400px]">
                    <div className="absolute top-4 left-4 flex items-center space-x-2 text-white/50 text-xs font-bold uppercase tracking-wider">
                        <Smartphone className="w-4 h-4" /> <span>PrepOne Scanner</span>
                    </div>
                    
                    {/* Bounding Box Animation Overlay */}
                    <div className="relative w-full max-w-sm">
                        <img 
                            src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800" 
                            alt="Student Handwriting" 
                            className="w-full h-auto rounded-lg opacity-80"
                        />
                        {/* Scanning Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#87fc4d] shadow-[0_0_15px_#87fc4d] animate-[scan_3s_ease-in-out_infinite]"></div>
                        
                        {/* Concept Highlights */}
                        <div className="absolute top-[25%] left-[10%] w-[70%] h-[15%] border-2 border-[#87fc4d] bg-[#87fc4d]/10 rounded"></div>
                        <div className="absolute top-[60%] left-[10%] w-[40%] h-[15%] border-2 border-red-500 bg-red-500/10 rounded"></div>
                    </div>
                </div>

                {/* AI Output View */}
                <div className="lg:w-1/2 p-8 md:p-12 bg-white">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                        <h3 className="font-display text-2xl font-bold text-[#0F172A]">AI Grading Output</h3>
                        <div className="text-[#16A34A] font-bold text-3xl">3<span className="text-xl text-gray-400">/5</span></div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-start p-4 bg-green-50 border border-green-100 rounded-xl">
                            <div>
                                <p className="text-green-800 font-bold text-sm">Step 1: Formula Selection</p>
                                <p className="text-green-600 text-xs mt-1">Correctly applied Lens Maker's Formula.</p>
                            </div>
                            <span className="text-green-700 font-bold">+1.5</span>
                        </div>

                        <div className="flex justify-between items-start p-4 bg-green-50 border border-green-100 rounded-xl">
                            <div>
                                <p className="text-green-800 font-bold text-sm">Step 2: Sign Convention</p>
                                <p className="text-green-600 text-xs mt-1">Properly assigned negative value to 'u'.</p>
                            </div>
                            <span className="text-green-700 font-bold">+1.5</span>
                        </div>

                        <div className="flex justify-between items-start p-4 bg-red-50 border border-red-100 rounded-xl">
                            <div>
                                <p className="text-red-800 font-bold text-sm">Step 3: Final Calculation</p>
                                <p className="text-red-600 text-xs mt-1">Arithmetic error resolving the fractions. Final focal length incorrect.</p>
                            </div>
                            <span className="text-red-700 font-bold">0.0</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Quick inline style for the scan animation */}
            <style dangerouslySetContent={{__html: `
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}} />
        </div>
    </section>
);

const FeaturesGrid = () => {
    const features = [
        {
            icon: <SearchCode />,
            title: "Messy Handwriting? No Problem.",
            desc: "Our vision models are trained on millions of real student papers. It reads cursive, struck-out words, and complex mathematical symbols effortlessly."
        },
        {
            icon: <Target />,
            title: "Board-Specific Rubrics",
            desc: "The AI grades a CBSE paper differently than a Bihar Board paper. It follows the exact official marking scheme of your chosen syllabus."
        },
        {
            icon: <MessageSquareWarning />,
            title: "Examiner Commentary",
            desc: "Get personalized tips on your answer presentation. Example: 'You missed drawing the circuit diagram, which carries 1 mandatory mark.'"
        },
        {
            icon: <Zap />,
            title: "Instant Turnaround",
            desc: "No more waiting until next week to see where you went wrong. Review your mistakes while the concepts are still fresh in your memory."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">Smarter than a standard answer key.</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-[#F8F9FC] border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all group">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {React.cloneElement(f.icon, { className: 'w-6 h-6 text-[#4F46E5]' })}
                            </div>
                            <h3 className="font-display text-xl font-bold text-[#0F172A] mb-3">{f.title}</h3>
                            <p className="font-body text-[#64748B] text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProofSection = () => (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4F46E5] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                    <h2 className="font-display text-4xl font-bold text-white mb-6">
                        Stop memorizing.<br/> <span className="text-[#F59E0B]">Start understanding.</span>
                    </h2>
                    <p className="font-body text-gray-400 text-lg mb-8 leading-relaxed">
                        Knowing you got a question wrong is the first step. Knowing *why* you got it wrong is how you top the board. Every scanned paper feeds directly into your Abhyas+ revision queue.
                    </p>
                    <ul className="space-y-5">
                        {[
                            "Highlight missing key definitions",
                            "Identify recurring calculation errors",
                            "Track time spent per section"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-gray-300">
                                <CheckCircle2 className="w-5 h-5 text-[#87fc4d] mr-3" />
                                <span className="font-bold text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="lg:w-5/12 w-full">
                    <div className="bg-[#1E293B] border border-gray-700 p-8 rounded-[2rem] shadow-2xl relative">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#F59E0B] rounded-xl flex items-center justify-center transform -rotate-12 shadow-lg">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-6">AI Performance Insight</h4>
                        <div className="space-y-4">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <p className="text-sm text-gray-300">"You have lost an average of 4 marks across your last 3 tests simply by forgetting SI units at the end of physics derivations. I have added a custom SI Unit matching quiz to your revision queue today."</p>
                            </div>
                            <button className="w-full bg-white/10 text-white py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors border border-white/20">
                                View Full Analysis Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default function AIEvaluationStudentPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#4F46E5] selection:text-white">
            
            <SEO
                title="AutoScore AI | Instant AI Grading for Students | PrepOne"
                description="Get instant feedback on your handwritten answers with our AI-powered grading system. Improve your performance with personalized insights."
                keywords="AI grading, instant feedback, handwritten answer evaluation, student performance tracking"
                canonicalUrl="https://yourwebsite.com/autoscoreai"
            />
            <Navbar />
            <Hero />
            <StepMarkingMagic />
            <FeaturesGrid />
            <ProofSection />
            
            {/* Final CTA */}
            <section className="bg-[#F8F9FC] py-20 text-center border-t border-gray-200">
                <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6">Test the AI yourself.</h2>
                <p className="text-[#64748B] mb-8 max-w-xl mx-auto text-lg">Upload an old answer sheet right now and see the magic happen. Your first 3 evaluations are free.</p>
                <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl flex items-center justify-center mx-auto transition-all shadow-xl font-bold">
                    <Scan className="w-5 h-5 mr-3 text-indigo-300" />
                    Download PrepOne App
                </a>
            </section>
            
            <Footer />
        </div>
    );
}
