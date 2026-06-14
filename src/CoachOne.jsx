import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    CheckCircle2, Calendar, ArrowRight, BrainCircuit,
    PieChart, FileText, Send, TrendingUp, Users,
    ChevronDown, Building2, PlayCircle, ShieldCheck
} from 'lucide-react';
import Navbar from './componenets/Navbar'; // Reusing your shared Navbar!
import LetterReveal from './componenets/LetterReveal';
import Footer from './componenets/Footer';
import FadeIn from './componenets/FadeIn';
import SEO from './componenets/SEO'; // Importing the SEO component


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

// --- COMPONENTS ---

const Hero = () => (
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
                    <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl flex items-center justify-center transition-all backdrop-blur-md hover:-translate-y-1 font-bold text-lg">
                        Explore Features
                    </button>
                </div>
            </FadeIn>
        </div>
    </section>
);

const ProblemStatement = () => (
    <section className="bg-[#f7f6f2] py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#28251d] mb-6 leading-tight">
                Your students are paying you. <br />
                <span className="italic text-[#01696f]">But. <br></br> Are you measuring their growth?</span>
            </h2>
            <p className="font-body text-lg md:text-xl text-gray-600 leading-relaxed">
                Most institutes rely on gut feeling, scattered Excel sheets, and manual test checking that takes weeks. By the time you realize a batch is falling behind in a specific concept, it's too late. It's time to run your institute on data.
            </p>
        </div>
    </section>
);

const DashboardDemo = () => (
    <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full rounded-[2rem] bg-[#111210] p-4 md:p-8 shadow-2xl border border-gray-100 overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-900 rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>

                {/* Mock Browser/Dashboard Header */}
                <div className="flex items-center space-x-2 mb-6 border-b border-white/10 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 font-body text-sm text-gray-400 flex items-center">
                        <ShieldCheck className="w-4 h-4 mr-2" />
                        CoachOne Admin Portal
                    </div>
                </div>

                {/* Dashboard UI Simulation */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <div className="hidden md:flex flex-col space-y-4 border-r border-white/10 pr-6">
                        <div className="bg-white/10 p-3 rounded-lg text-white font-medium flex items-center"><PieChart className="w-4 h-4 mr-3 text-teal-400" /> Analytics</div>
                        <div className="p-3 text-gray-400 hover:text-white transition-colors flex items-center"><Users className="w-4 h-4 mr-3" /> Batches</div>
                        <div className="p-3 text-gray-400 hover:text-white transition-colors flex items-center"><FileText className="w-4 h-4 mr-3" /> Test Center</div>
                        <div className="p-3 text-gray-400 hover:text-white transition-colors flex items-center"><BrainCircuit className="w-4 h-4 mr-3" /> AI Engine</div>
                    </div>

                    {/* Main Area */}
                    <div className="md:col-span-3 space-y-6">
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="text-white font-display text-2xl font-bold">Class 12 - Target Batch Overview</h3>
                                <p className="text-gray-400 text-sm">Last updated: 2 mins ago</p>
                            </div>
                            <button className="bg-[#01696f] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center">
                                Generate Reports <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>

                        {/* Metric Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Avg. Batch Score', val: '78.4%', trend: '+2.1%' },
                                { label: 'Tests Evaluated', val: '1,240', trend: 'This week' },
                                { label: 'Weakest Concept', val: 'Optics', trend: 'Needs review' },
                                { label: 'Parent Engagement', val: '92%', trend: '+5%' }
                            ].map((m, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                    <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">{m.label}</div>
                                    <div className="text-white text-2xl font-bold font-display">{m.val}</div>
                                    <div className="text-teal-400 text-xs mt-1">{m.trend}</div>
                                </div>
                            ))}
                        </div>

                        {/* Chart Area Simulation */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-64 flex items-end space-x-2">
                            {[40, 55, 45, 70, 65, 80, 85, 75, 90].map((h, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-[#01696f] to-teal-400 rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FeatureGrid = () => {
    const features = [
        {
            icon: <FileText className="w-8 h-8 text-[#01696f]" />,
            title: "Smart Test Creation",
            desc: "Generate full-length subjective and objective mock tests in minutes. Pull from our master database of 50,000+ verified questions aligned with board patterns."
        },
        {
            icon: <BrainCircuit className="w-8 h-8 text-[#01696f]" />,
            title: "Bulk AI Evaluation",
            desc: "Scan and upload 100+ answer sheets at once. Our AI evaluates handwriting, applies step-marking, and returns detailed scores in minutes, not days."
        },
        {
            icon: <PieChart className="w-8 h-8 text-[#01696f]" />,
            title: "Deep Student Analytics",
            desc: "Go beyond simple marks. See exactly which micro-concepts a batch is failing at. Predict board exam outcomes with 94% accuracy."
        },
        {
            icon: <Send className="w-8 h-8 text-[#01696f]" />,
            title: "Automated Parent Reports",
            desc: "Send beautiful, branded performance reports directly to parents' WhatsApp. Build trust, justify your fees, and increase retention effortlessly."
        }
    ];

    return (
        <section className="bg-[#F8F9FC] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-bold text-[#0F172A]">

                        <LetterReveal
                            text="Everything you need to scale quality."
                            delay={100}
                            threshold={0.2}
                        />
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:border-teal-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#01696f] transition-colors">
                                {React.cloneElement(f.icon, { className: 'w-8 h-8 text-[#01696f] group-hover:text-white transition-colors' })}
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

const ROIStrip = () => (
    <section className="bg-[#01696f] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')]"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                Replace 3 scattered tools and 10 hours/week of administrative headache with <span className="text-teal-200">one unified dashboard.</span>
            </h2>
        </div>
    </section>
);

const CaseStudy = () => (
    <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111210] rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
                <div className="md:w-1/2 relative min-h-[300px]">
                    <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" alt="Students in class" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111210]/80 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                        <div className="flex items-center space-x-2 text-white mb-2">
                            <Building2 className="w-5 h-5 text-teal-400" />
                            <span className="font-bold tracking-wide">Apex Academy, Patna</span>
                        </div>
                        <div className="text-gray-300 text-sm">500+ Active Students</div>
                    </div>
                </div>

                <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-[#111210]">
                    <div className="mb-8">
                        <h3 className="font-display text-3xl text-white font-bold mb-4">"We grew our student base by 40% without hiring new evaluators."</h3>
                        <p className="font-body text-gray-400">"Before CoachOne, our teachers spent weekends checking mock tests. Now, the AI handles it. Parents love the detailed analytics reports, which has become our biggest marketing USP."</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                        <div>
                            <div className="text-3xl font-display font-bold text-teal-400">90%</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Faster Evaluation</div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-teal-400">40%</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Increase in Admissions</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Pricing = () => (
    <section className="bg-[#f7f6f2] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">Simple, student-based pricing.</h2>
                <p className="font-body text-gray-600">No setup fees. No hidden charges. Scale as you grow.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Starter */}
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                    <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2">Starter</h3>
                    <p className="text-[#64748B] text-sm mb-6">For boutique coaching centers.</p>
                    <div className="text-4xl font-display font-bold text-[#0F172A] mb-6">₹1,200<span className="text-sm font-body font-normal text-[#64748B]">/mo</span></div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-gray-300 mr-2" /> Up to 100 Students</li>
                        <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-gray-300 mr-2" /> Basic Analytics</li>
                        <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-gray-300 mr-2" /> Objective Test Checking</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl font-bold text-[#0F172A] border border-gray-200 hover:bg-gray-50 transition-colors">Start Free Trial</button>
                </div>

                {/* Growth - Highlighted */}
                <div className="bg-[#01696f] p-8 rounded-[2rem] shadow-xl relative transform md:-translate-y-4">
                    <div className="absolute top-0 right-0 bg-teal-400 text-[#01696f] text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Most Popular</div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">Growth</h3>
                    <p className="text-teal-100 text-sm mb-6">The sweet spot for growing institutes.</p>
                    <div className="text-4xl font-display font-bold text-white mb-6">₹3,999<span className="text-sm font-body font-normal text-teal-200">/mo</span></div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm text-white"><CheckCircle2 className="w-4 h-4 text-teal-400 mr-2" /> Up to 500 Students</li>
                        <li className="flex items-center text-sm text-white"><CheckCircle2 className="w-4 h-4 text-teal-400 mr-2" /> Advanced Predictive Analytics</li>
                        <li className="flex items-center text-sm text-white"><CheckCircle2 className="w-4 h-4 text-teal-400 mr-2" /> AI Subjective Evaluation</li>
                        <li className="flex items-center text-sm text-white"><CheckCircle2 className="w-4 h-4 text-teal-400 mr-2" /> WhatsApp Parent Reports</li>
                    </ul>
                    <Link to="/book-demo" className="block w-full py-3 rounded-xl font-bold text-[#01696f] bg-white hover:bg-gray-100 transition-colors text-center">Book a Demo</Link>
                </div>

                {/* Enterprise */}
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                    <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2">Enterprise</h3>
                    <p className="text-[#64748B] text-sm mb-6">For large multi-branch networks.</p>
                    <div className="text-4xl font-display font-bold text-[#0F172A] mb-6">Custom</div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-gray-300 mr-2" /> Unlimited Students</li>
                        <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-gray-300 mr-2" /> Multi-branch Dashboard</li>
                        <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-gray-300 mr-2" /> White-labeled App</li>
                        <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-gray-300 mr-2" /> Dedicated Account Manager</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl font-bold text-[#0F172A] border border-gray-200 hover:bg-gray-50 transition-colors">Contact Sales</button>
                </div>
            </div>
        </div>
    </section>
);

const StatBlock = ({ end, suffix, label }) => {
    const { count, countRef } = useCountUp(end);
    return (
        <div ref={countRef} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-bold text-[#01696f] mb-2 flex justify-center items-baseline">
                {count.toLocaleString('en-IN')}<span className="text-2xl ml-1">{suffix}</span>
            </div>
            <div className="font-body text-sm text-[#64748B] font-bold uppercase tracking-wider">{label}</div>
        </div>
    );
};

const TrustSignals = () => (
    <section className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <StatBlock end={450} suffix="+" label="Institutes Trusted" />
                <StatBlock end={120} suffix="k+" label="Students Managed" />
                <StatBlock end={2.5} suffix="M+" label="Tests Checked" />
                <StatBlock end={98} suffix="%" label="Retention Rate" />
            </div>

            {/* Mini Testimonial Row */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-[#f7f6f2] p-6 rounded-2xl border border-gray-200 text-center">
                    <p className="italic text-gray-700 mb-4">"The batch-wise analytics dashboard helped us identify a critical flaw in how we were teaching Thermodynamics. Fixed it instantly."</p>
                    <p className="font-bold text-[#0F172A] text-sm">- Director, Target PMT Classes</p>
                </div>
                <div className="bg-[#f7f6f2] p-6 rounded-2xl border border-gray-200 text-center">
                    <p className="italic text-gray-700 mb-4">"Sending automated WhatsApp reports with our logo on it made us look incredibly professional to the parents. Worth every penny."</p>
                    <p className="font-bold text-[#0F172A] text-sm">- Founder, Genesis Tutorials</p>
                </div>
            </div>
        </div>
    </section>
);

const FAQ = () => {
    const [open, setOpen] = useState(0);
    const faqs = [
        { q: "How accurate is the AI subjective evaluation?", a: "Our AI is trained on millions of real board paper evaluations. It uses OCR to read handwriting and NLP to check for concepts, formulas, and steps—just like a human evaluator. Accuracy is benchmarked at 96%." },
        { q: "Do students need to download a separate app?", a: "Yes, students download the free PrepOne app where they can view their results, detailed analytics, and revision notes generated by CoachOne." },
        { q: "Is my data secure?", a: "Absolutely. We use bank-level encryption. Your student data, test papers, and analytics are strictly isolated and never shared or sold to third parties." },
        { q: "Can we use our own questions for tests?", a: "Yes. You can upload your own question papers via PDF, use our question bank, or mix both to create custom tests for your batches." }
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

const DualCTA = () => (
    <section className="bg-[#111210] py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#01696f] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Upgrade your institute today.</h2>
            <p className="font-body text-xl text-gray-400 mb-12">Join 450+ institutes running on CoachOne.</p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="w-full sm:w-auto bg-[#01696f] text-white px-8 py-4 rounded-xl flex items-center justify-center transition-all hover:bg-[#015257] hover:shadow-[0_0_20px_rgba(1,105,111,0.4)] font-bold text-lg">
                    <Calendar className="w-5 h-5 mr-3" />
                    Book a 20-Min Demo
                </button>
                <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl flex items-center justify-center transition-all hover:bg-white/10 font-bold text-lg">
                    Start 14-Day Free Trial
                </button>
            </div>
        </div>
    </section>
);

export default function CoachOne() {
    return (

        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
                <SEO
                    title="CoachOne | AI Coaching Institute Management Software"
                    description="Automate test evaluation, generate batch-wise predictive analytics, and send branded WhatsApp reports to parents instantly with CoachOne OS."
                    keywords="coaching institute software, AI test evaluation, subjective answer checking AI, edtech B2B India, automated parent reports, IRT grading"
                    canonicalUrl="https://yourwebsite.com/coachone"
                />
                <Navbar />
                <Hero />
                <ProblemStatement />
                <DashboardDemo />
                <FeatureGrid />
                <ROIStrip />
                {/* <CaseStudy /> */}
                <Pricing />
                {/* <TrustSignals /> */}
                <FAQ />
                <DualCTA />
                <Footer />
            </div>
            );
}
