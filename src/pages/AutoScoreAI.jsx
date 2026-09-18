import { cloneElement } from 'react';
import { 
    BrainCircuit, Scan, CheckCircle2, 
    Zap, Target,
    SearchCode, Sparkles, MessageSquareWarning
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import AutoScorePlayground from '../componenets/AutoScorePlayground';
import BackendStatusBadge from '../componenets/BackendStatusBadge';

const PREPONE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.solviq.prepone';

const Hero = () => (
    <section className="relative pt-32 pb-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#5046E5] rounded-full mix-blend-screen filter blur-[150px] opacity-25"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#3B82F6] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-1.5 mb-8 border border-white/10 shadow-sm backdrop-blur-md">
                <BrainCircuit className="w-4 h-4 text-[#818CF8]" />
                <span className="text-[#818CF8] text-xs font-bold tracking-wider uppercase">AutoScore AI</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-300 text-xs font-medium">Built by IITians</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-white font-bold mb-6 leading-tight">
                <LetterReveal text="Your personal AI" delay={100} /><br />
                <span className="bg-gradient-to-r from-[#818CF8] via-[#A5B4FC] to-[#93C5FD] bg-clip-text text-transparent">
                    <LetterReveal text="Board Examiner." delay={300} />
                </span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Don't wait 14 days for your coaching center to return your test. Upload your handwritten subjective answers and get step-by-step evaluation, partial marks, and feedback in 60 seconds.
            </p>
            <a
                href={PREPONE_PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-[#5046E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl inline-flex items-center transition-all shadow-[0_0_24px_rgba(80,70,229,0.35)] hover:-translate-y-0.5 font-bold text-base sm:text-lg group"
            >
                <Scan className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Scan Your First Answer
            </a>
        </div>
    </section>
);

const StepMarkingMagic = () => (
    <section className="py-20 bg-[#F8F9FC] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">Live Step-Marking Sandbox</h2>
                <p className="text-[#64748B] text-lg">In board exams, a wrong final answer doesn't mean zero marks. Test our vision AI on real student derivations and see partial credits and Hinglish feedback awarded live.</p>
            </div>

            <AutoScorePlayground />
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
                                {cloneElement(f.icon, { className: 'w-6 h-6 text-[#5046E5]' })}
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-3">{f.title}</h3>
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5046E5] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                    <h2 className="font-display text-4xl font-bold text-white mb-6">
                        Stop memorizing.<br/> <span className="bg-gradient-to-r from-[#818CF8] via-[#A5B4FC] to-[#93C5FD] bg-clip-text text-transparent">Start understanding.</span>
                    </h2>
                    <p className="font-body text-gray-300 text-lg mb-8 leading-relaxed">
                        Knowing you got a question wrong is the first step. Knowing *why* you got it wrong is how you top the board. Every scanned paper feeds directly into your Abhyas+ revision queue.
                    </p>
                    <ul className="space-y-5">
                        {[
                            "Highlight missing key definitions",
                            "Identify recurring calculation errors",
                            "Track time spent per section"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-gray-300">
                                <CheckCircle2 className="w-5 h-5 text-[#818CF8] mr-3" />
                                <span className="font-bold text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="lg:w-5/12 w-full">
                    <div className="bg-[#1E293B] border border-gray-700 p-8 rounded-[2rem] shadow-2xl relative">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#5046E5] rounded-xl flex items-center justify-center transform -rotate-12 shadow-lg">
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
        <div className="min-h-screen bg-white font-body selection:bg-[#5046E5] selection:text-white">
            
            <SEO
                title="AutoScore AI | 60-Second Handwritten Answer Evaluation | PrepOne"
                description="Get instant feedback on your handwritten answers with PrepOne's AutoScore AI. Step-by-step grading against official CBSE & Bihar Board rubrics in 60 seconds."
                keywords="AI grading, handwritten answer evaluation, CBSE step marking, Bihar board answer checker, student performance tracking"
                canonicalUrl="https://solviq.in/prepone/ai-evaluation-students"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'PrepOne', url: '/prepone' },
                        { name: 'AutoScore AI Evaluation', url: '/prepone/ai-evaluation-students' }
                    ])
                ]}
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
                <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="bg-[#5046E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl inline-flex items-center justify-center mx-auto transition-all shadow-[0_0_24px_rgba(80,70,229,0.35)] hover:-translate-y-0.5 font-bold">
                    <Scan className="w-5 h-5 mr-3 text-indigo-300" />
                    Download PrepOne App
                </a>
            </section>
            <BackendStatusBadge />
            <Footer />
        </div>
    );
}
