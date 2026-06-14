import React, { useState, useEffect, useRef } from 'react';
import {
    CheckCircle2, PlayCircle, Apple, Smartphone, BrainCircuit,
    Target, BarChart3, BookOpen, ChevronDown, Sparkles,
    ArrowRight, ShieldCheck, Zap, X
} from 'lucide-react';
import Navbar from './componenets/Navbar';
import LetterReveal from './componenets/LetterReveal';
import Footer from './componenets/Footer';
import FadeIn from './componenets/FadeIn';
import SEO from './componenets/SEO';

const PREPONE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.solviq.prepone';

// --- CUSTOM HOOKS ---
const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.5 }
        );
        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOut = progress * (2 - progress);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return { count, countRef };
};

const Hero = () => (
    <section className="relative bg-[#0F172A] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4F46E5] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">




                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
                    <LetterReveal
                        text="Meet PrepOne"
                        delay={200}
                    />
                    <br /></h1>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-6">
                    <LetterReveal
                        text="Your personal AI"
                        delay={600}
                    />

                    <br />
                    <LetterReveal
                        text="exam strategist."
                        delay={600}
                        stagger={35}
                        className="text-[#87fc4d]"
                    />
                </h2>



                <FadeIn delay={1200}>
                    <p className="font-body text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">
                        Upload your handwritten answers. Get instant marks, line-by-line feedback, and personalized revision notes. Stop guessing what the examiner wants.
                    </p>
                </FadeIn>

                <FadeIn delay={1400}>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl flex items-center justify-center transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:-translate-y-1">
                            <PlayCircle className="w-6 h-6 mr-3" />
                            <div className="text-left">
                                <div className="text-[10px] uppercase leading-none opacity-80">Get it on</div>
                                <div className="font-bold text-base leading-none mt-1">Google Play</div>
                            </div>
                        </a>

                    </div>
                </FadeIn>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <FadeIn delay={800} direction="right">
                    <div className="relative w-72 md:w-80 h-[600px] bg-white border-[8px] border-gray-900 rounded-[3rem] shadow-2xl overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-20"></div>
                        <img src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=400&h=800" alt="App Interface" className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#4F46E5]/90 to-gray-900/95 flex flex-col p-6 pt-16 text-white">
                            <div className="text-sm font-body opacity-80 mb-1">Recent Mock Test</div>
                            <div className="text-2xl font-display font-bold mb-6">Physics Class 12</div>
                            <div className="bg-white/10 rounded-2xl p-4 mb-4 backdrop-blur-sm border border-white/10">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-sm">Score</span>
                                    <span className="text-3xl font-bold text-[#FCD34D]">68/70</span>
                                </div>
                                <div className="w-full bg-black/30 rounded-full h-2"><div className="bg-[#16A34A] h-2 rounded-full w-[95%]"></div></div>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-white/5 p-3 rounded-xl flex items-center"><BrainCircuit className="w-5 h-5 mr-3 text-indigo-300" /><span className="text-sm">Derivation logic improved</span></div>
                                <div className="bg-white/5 p-3 rounded-xl flex items-center"><Target className="w-5 h-5 mr-3 text-red-400" /><span className="text-sm">Review Optics formulas</span></div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);

const StatBlock = ({ end, suffix, label }) => {
    const { count, countRef } = useCountUp(end);
    return (
        <div ref={countRef} className="text-center px-4">
            <div className="font-display text-4xl md:text-5xl font-bold text-[#4F46E5] mb-2 flex justify-center items-baseline">
                {count.toLocaleString('en-IN')}<span className="text-2xl ml-1">{suffix}</span>
            </div>
            <div className="font-body text-sm text-[#64748B] font-medium uppercase tracking-wider">{label}</div>
        </div>
    );
};

const ProblemSolution = () => (
    <section className="bg-[#f7f6f2] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-8 leading-tight">
                    Studying hard isn't enough. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#F59E0B]">Studying smart is.</span>
                </h2>
                <p className="font-body text-lg md:text-xl text-[#64748B] leading-relaxed">
                    Most students lose marks not because they don't know the answer, but because they don't know exactly how to structure it. PrepOne's AI reads your actual handwriting and shows you the micro-mistakes costing you your dream score.
                </p>
            </div>
        </div>
    </section>
);

const Features = () => {
    const features = [
        {
            icon: <BrainCircuit className="w-8 h-8 text-[#4F46E5]" />,
            title: "Abhyas+ Adaptive Practice",
            desc: "Stop doing random MCQs. Our engine dynamically serves questions based on the exact concepts you failed in your last mock test."
        },
        {
            icon: <Sparkles className="w-8 h-8 text-[#F59E0B]" />,
            title: "AutoScore AI",
            desc: "Upload a photo of your handwritten long-form answers. Get line-by-line evaluation, partial marking, and examiner commentary in seconds."
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-[#16A34A]" />,
            title: "Personalized Analytics",
            desc: "Track your 'Confidence Score' chapter by chapter. Predict your final board exam score before you even step into the exam hall."
        },
        {
            icon: <BookOpen className="w-8 h-8 text-[#01696f]" />,
            title: "Targeted Content Delivery",
            desc: "Get instant micro-revision notes generated just for you, focusing only on the specific formulas and definitions you struggle to remember."
        }
    ];

    return (
        <section className="bg-[#F8F9FC] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 bg-[#EEF2FF] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">{f.title}</h3>
                            <p className="font-body text-[#64748B] leading-relaxed text-lg">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AIDemo = () => (
    <section className="bg-[#111210] py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-16">

                <LetterReveal
                    text="See AutoScore AI in action"
                    delay={100}
                    stagger={35}
                    threshold={0.2}
                />
            </h2>

            <div className="max-w-4xl mx-auto bg-[#1A1D2E] rounded-2xl border border-white/10 shadow-2xl overflow-hidden text-left flex flex-col md:flex-row">
                {/* Mock Image Side */}
                <div className="md:w-1/2 bg-[#0F1117] p-6 border-b md:border-b-0 md:border-r border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-xs text-white px-3 py-1 rounded-full border border-white/10">Scanned Answer</div>
                    <div className="font-mono text-gray-400 text-sm mt-8 space-y-4">
                        <p className="text-gray-200">Q: Define Ohm's Law.</p>
                        <p className="italic text-gray-500">"Ohm's law states that current is proportional to voltage. V = IR."</p>
                        <div className="h-0.5 w-12 bg-[#4F46E5] animate-pulse"></div>
                    </div>
                </div>

                {/* Mock AI Analysis Side */}
                <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-6">
                        <Sparkles className="w-5 h-5 text-[#FCD34D]" />
                        <span className="text-[#FCD34D] font-bold text-sm tracking-wide uppercase">AI Evaluation Complete</span>
                    </div>
                    <div className="text-4xl font-display font-bold text-white mb-2">1.5 / 2 Marks</div>
                    <p className="text-gray-400 text-sm mb-6">Partial credit awarded for correct formula.</p>

                    <div className="space-y-4">
                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
                            <p className="text-red-400 text-sm font-bold mb-1">Missing Condition</p>
                            <p className="text-gray-300 text-sm">You forgot to mention "provided temperature and other physical conditions remain constant." Examiners strictly look for this clause.</p>
                        </div>
                        <button className="text-[#818CF8] text-sm font-bold flex items-center hover:text-indigo-300 transition-colors">
                            Add to Abhyas+ Revision Queue <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const BoardSelector = () => {
    const [activeBoard, setActiveBoard] = useState('class10');

    return (
        <section className="bg-white py-24 border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-display text-3xl font-bold text-[#0F172A] mb-8">Tailored specifically for your syllabus.</h2>

                <div className="inline-flex bg-[#F8F9FC] p-1.5 rounded-full border border-gray-200 mb-12">
                    <button
                        onClick={() => setActiveBoard('class10')}
                        className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${activeBoard === 'class10' ? 'bg-[#4F46E5] text-white shadow-md' : 'text-[#64748B] hover:text-[#0F172A]'}`}
                    >
                        Bihar Board Class 10
                    </button>
                    <button
                        onClick={() => setActiveBoard('class12')}
                        className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${activeBoard === 'class12' ? 'bg-[#4F46E5] text-white shadow-md' : 'text-[#64748B] hover:text-[#0F172A]'}`}
                    >
                        Bihar Board Class 12
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {activeBoard === 'class10' ? (
                        <>
                            {['Mathematics', 'Science', 'Social Science', 'Hindi', 'English'].map(sub => (
                                <div key={sub} className="p-4 rounded-xl border border-gray-200 bg-white font-body font-medium text-[#0F172A]">{sub}</div>
                            ))}
                        </>
                    ) : (
                        <>
                            {['English', 'Hindi', 'Physics', 'Chemistry', 'Mathematics', 'Biology'].map(sub => (
                                <div key={sub} className="p-4 rounded-xl border border-gray-200 bg-white font-body font-medium text-[#0F172A]">{sub}</div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

const Pricing = () => (
    <section className="bg-[#F8F9FC] py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">Start for free. Upgrade when ready.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Free Tier */}
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border-2 border-transparent shadow-sm flex flex-col relative">
                    <div className="mb-8">
                        <h3 className="font-display text-2xl font-bold text-[#0F172A]">PrepOne Free</h3>
                        <p className="text-[#64748B] mt-2">Perfect to test the waters.</p>
                    </div>
                    {/* <div className="text-5xl font-display font-bold text-[#0F172A] mb-8">₹0<span className="text-lg text-[#64748B] font-body font-normal"> / forever</span></div> */}
                    <ul className="space-y-4 mb-10 flex-1">
                        <li className="flex items-center text-[#0F172A]"><CheckCircle2 className="w-5 h-5 text-gray-300 mr-3" /> 3 AI Mock Test Evaluations</li>
                        <li className="flex items-center text-[#0F172A]"><CheckCircle2 className="w-5 h-5 text-gray-300 mr-3" /> Basic Analytics Dashboard</li>
                        <li className="flex items-center text-[#0F172A]"><CheckCircle2 className="w-5 h-5 text-gray-300 mr-3" /> Access to PYQs</li>
                    </ul>
                    <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="block w-full py-4 rounded-xl font-bold text-[#0F172A] border border-gray-200 hover:bg-gray-50 transition-colors text-center">Download Free App</a>
                </div>

                {/* Pro Tier */}
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border-2 border-[#4F46E5] shadow-xl flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#4F46E5] text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">Most Popular</div>
                    <div className="mb-8">
                        <h3 className="font-display text-2xl font-bold text-[#4F46E5]">PrepOne Pro</h3>
                        <p className="text-[#64748B] mt-2">The complete exam armory.</p>
                    </div>
                    {/* <div className="text-5xl font-display font-bold text-[#0F172A] mb-8">₹499<span className="text-lg text-[#64748B] font-body font-normal"> / year</span></div> */}
                    <ul className="space-y-4 mb-10 flex-1">
                        <li className="flex items-center text-[#0F172A]"><CheckCircle2 className="w-5 h-5 text-[#4F46E5] mr-3" /> AutoScore AI - Unlimited AI Evaluations</li>
                        <li className="flex items-center text-[#0F172A]"><CheckCircle2 className="w-5 h-5 text-[#4F46E5] mr-3" /> Abhyas+ Adaptive Engine</li>
                        <li className="flex items-center text-[#0F172A]"><CheckCircle2 className="w-5 h-5 text-[#4F46E5] mr-3" /> Smart Revision - Never Forget Concepts</li>
                        <li className="flex items-center text-[#0F172A]"><CheckCircle2 className="w-5 h-5 text-[#4F46E5] mr-3" /> Custom Micro-Revision Notes</li>
                        <li className="flex items-center text-[#0F172A]"><CheckCircle2 className="w-5 h-5 text-[#4F46E5] mr-3" /> PrepGuide - Recommended for You </li>
                    </ul>
                    <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="block w-full py-4 rounded-xl font-bold text-white bg-[#4F46E5] hover:bg-[#4338CA] transition-colors shadow-lg text-center">Get Pro Plan</a>
                </div>
            </div>
        </div>
    </section>
);

const FAQ = () => {
    const [open, setOpen] = useState(0);
    const faqs = [
        { q: "Is the AI evaluation accurate for subjective answers?", a: "Yes. Our AI is trained on millions of real board exam answer sheets. It looks for keywords, step-by-step logic, and specific formulas, mimicking a real examiner's rubric." },
        { q: "Can I use it for Hindi medium?", a: "Yes Our AI is now available in Hindi medium as well." },
        {
            q: "Do I need to pay immediately?",
            a: <>No. You get 3 full mock tests evaluated absolutely free when you <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="text-[#4F46E5] font-bold hover:underline">download the app</a>. No credit card required.</>
        },
        { q: "How is Abhyas+ different from normal quizzes?", a: "Abhyas+ analyzes where you lost marks in your mock tests. If you failed an Optics question, it will automatically generate practice questions specifically targeting Optics formulas for you." }
    ];

    return (
        <section className="bg-white py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-display text-4xl font-bold text-center text-[#0F172A] mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
                            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none">
                                <span className="font-body font-bold text-lg text-[#0F172A] pr-4">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${open === i ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-48 py-4 border-t border-gray-100' : 'max-h-0 py-0'}`}>
                                <p className="text-[#64748B] font-body">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FinalCTA = () => (
    <section className="bg-[#4F46E5] py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Ready to engineer your success?</h2>
            <p className="font-body text-xl text-indigo-100 mb-12">Download Free - No payment required.</p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white text-[#0F172A] px-8 py-4 rounded-xl flex items-center justify-center transition-all hover:bg-gray-50 hover:shadow-lg font-bold">
                    <PlayCircle className="w-6 h-6 mr-3 text-[#4F46E5]" />
                    Google Play Store
                </a>
            </div>
        </div>
    </section>
);

export default function PrepOne() {
    return (
        <div className="min-h-screen bg-[#f7f6f2] font-body selection:bg-[#4F46E5] selection:text-white">
            <SEO
                title="PrepOne App | Your Personal AI Exam Strategist"
                description="Upload handwritten answers and get instant marks, line-by-line feedback, and personalized revision notes. Master Bihar Board and CBSE with PrepOne."
                keywords="PrepOne app, AI exam prep, board exam mock tests, Bihar board class 12, CBSE preparation app, AI subjective grading"
                canonicalUrl="https://yourwebsite.com/prepone"
            />
            <Navbar />

            <Hero />

            {/* Social Proof Strip */}
            {/* <section className="bg-white py-12 border-b border-gray-100 shadow-sm relative z-20 -mt-6 mx-4 md:mx-auto max-w-5xl rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <StatBlock end={150} suffix="k+" label="Active Students" />
          <StatBlock end={2.5} suffix="M+" label="Tests Evaluated" />
          <StatBlock end={32} suffix="%" label="Avg. Score Jump" />
        </div>
      </section> */}

            <ProblemSolution />
            <Features />
            <AIDemo />

            {/* Testimonials */}
            {/* <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-[#0F172A] mb-16">Stories of transformation.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "It showed me that my math steps were right, but I was failing to state the theorems properly. Fixed it, scored 95%.", author: "Rahul V.", tag: "Class 10" },
              { text: "Abhyas+ is literally magic. It generated 20 questions exactly on the organic chemistry topics I got wrong in my mock.", author: "Sneha M.", tag: "Class 12" },
              { text: "Getting my handwritten papers checked instantly saves me weeks of anxiety waiting for coaching results.", author: "Aman D.", tag: "Class 12" }
            ].map((t, i) => (
              <div key={i} className="bg-[#F8F9FC] p-8 rounded-2xl relative">
                <div className="absolute -top-4 -left-4 text-6xl text-[#4F46E5] opacity-20 font-serif">"</div>
                <p className="font-body text-[#0F172A] italic mb-6 relative z-10">"{t.text}"</p>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <span className="font-bold text-[#0F172A]">{t.author}</span>
                  <span className="text-xs font-bold bg-indigo-100 text-[#4F46E5] px-2 py-1 rounded">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

            <BoardSelector />
            <Pricing />
            <FAQ />
            <FinalCTA />
            <Footer />
        </div>
    );
}
