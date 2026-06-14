import React from 'react';
import { 
    PieChart, TrendingUp, Target, Send, 
    Smartphone, BarChart3, BrainCircuit, Activity,
    CheckCircle2, ArrowRight, LineChart
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import FadeIn from '../componenets/FadeIn';

const Hero = () => (
    <section className="relative pt-32 pb-24 bg-[#111210] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-teal-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-8 border border-white/10">
                <PieChart className="w-4 h-4 text-teal-400" />
                <span className="text-white text-sm font-bold tracking-wide uppercase">Student Analytics</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
                <LetterReveal text="Marks don't tell the" delay={100} /><br />
                    <LetterReveal text="Whole Story." delay={500} className="text-teal-400" />
            </h1>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Stop telling parents "he needs to work harder in Physics." Show them exactly which micro-concepts their child is failing, predict their final board scores, and prove your institute's value every single week.
            </p>
            <button className="bg-[#01696f] hover:bg-[#015257] text-white px-8 py-4 rounded-xl inline-flex items-center transition-all shadow-[0_0_20px_rgba(1,105,111,0.4)] font-bold text-lg">
                Explore The Analytics Engine <ArrowRight className="w-5 h-5 ml-3" />
            </button>
        </div>
    </section>
);

const MicroConceptSection = () => (
    <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Visual Side */}
                <div className="relative">
                    <div className="absolute inset-0 bg-[#01696f] rounded-[3rem] transform -rotate-3 opacity-5"></div>
                    <div className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-2xl relative z-10">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                            <div>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A]">Physics Mastery</h3>
                                <p className="text-gray-500 text-sm">Batch: Class 12 Target</p>
                            </div>
                            <div className="bg-teal-50 p-3 rounded-xl text-teal-600">
                                <Target className="w-6 h-6" />
                            </div>
                        </div>
                        
                        {/* Mock Heatmap/Bars */}
                        <div className="space-y-6">
                            {[
                                { concept: 'Kinematics', score: 92, color: 'bg-green-500', bg: 'bg-green-100' },
                                { concept: 'Thermodynamics', score: 78, color: 'bg-yellow-500', bg: 'bg-yellow-100' },
                                { concept: 'Rotational Dynamics', score: 45, color: 'bg-red-500', bg: 'bg-red-100' },
                                { concept: 'Electrostatics', score: 85, color: 'bg-green-500', bg: 'bg-green-100' },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span className="text-gray-700">{item.concept}</span>
                                        <span className="text-[#0F172A]">{item.score}%</span>
                                    </div>
                                    <div className={`h-3 ${item.bg} rounded-full overflow-hidden`}>
                                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.score}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div>
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
                        Pinpoint weaknesses before the final exam.
                    </h2>
                    <p className="font-body text-gray-600 text-lg mb-8 leading-relaxed">
                        A score of 60/100 doesn't help a teacher adapt their lesson plan. CoachOne's IRT (Item Response Theory) algorithms break down every paper into micro-concepts. 
                    </p>
                    <ul className="space-y-5">
                        {[
                            "Identify the exact sub-topic where the entire batch is lagging.",
                            "Generate remedial practice sheets instantly for weak students.",
                            "Track historical growth trajectories over months, not just days."
                        ].map((point, i) => (
                            <li key={i} className="flex items-start">
                                <CheckCircle2 className="w-6 h-6 text-[#01696f] mr-3 flex-shrink-0 mt-0.5" />
                                <span className="font-bold text-gray-700">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

const ParentReportingSection = () => (
    <section className="py-24 bg-[#f7f6f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
                
                {/* Text Side */}
                <div>
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
                        Your best marketing tool? <br/>
                        <span className="text-[#01696f] italic">A highly informed parent.</span>
                    </h2>
                    <p className="font-body text-gray-600 text-lg mb-8 leading-relaxed">
                        Parents pay premium fees for visibility into their child's future. Replace manual Excel printouts with automated, beautifully branded WhatsApp reports sent within minutes of test evaluation.
                    </p>
                    
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-6">
                        <div className="flex items-center mb-4">
                            <Send className="w-6 h-6 text-teal-600 mr-3" />
                            <h4 className="font-bold text-[#0F172A] text-lg">1-Click WhatsApp Dispatch</h4>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Once the AI evaluates the papers, hit publish. CoachOne automatically generates personalized PDFs and sends them directly to parents' WhatsApp numbers via our official API.
                        </p>
                    </div>
                </div>

                {/* Visual Side (Mock Phone) */}
                <div className="flex justify-center">
                    <div className="relative w-[300px] h-[600px] bg-[#111210] rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden flex flex-col">
                        {/* Phone Header */}
                        <div className="bg-[#075E54] pt-12 pb-4 px-4 text-white flex items-center">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=100" alt="Logo" className="w-full h-full object-cover"/>
                            </div>
                            <div>
                                <div className="font-bold text-sm">Apex Academy</div>
                                <div className="text-xs text-green-100">Official Business Account</div>
                            </div>
                        </div>
                        {/* Phone Body (Chat) */}
                        <div className="flex-1 bg-[#E5DDD5] p-4 flex flex-col justify-end space-y-4 pb-8">
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[90%]">
                                <p className="text-sm text-gray-800 mb-2">
                                    Hello Mr. Sharma, here is the detailed performance report for Rahul's latest Physics Mock Test. 📊
                                </p>
                                <div className="bg-gray-100 p-3 rounded-xl flex items-center border border-gray-200">
                                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 text-red-500">
                                        <BarChart3 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-800">Rahul_Report.pdf</div>
                                        <div className="text-xs text-gray-500">2 pages • 1.2 MB</div>
                                    </div>
                                </div>
                                <div className="text-[10px] text-gray-400 text-right mt-1">10:42 AM</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

const FeatureGrid = () => (
    <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold text-[#0F172A]">Data that drives admission.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: <Activity />, title: "IRT-Based Grading", desc: "We use Item Response Theory to grade students not just on right/wrong, but on the statistical difficulty of the question." },
                    { icon: <LineChart />, title: "Rank Predictor", desc: "Map current performance to historical data to predict estimated JEE percentiles or Board exam percentages." },
                    { icon: <Smartphone />, title: "Student App Sync", desc: "All data instantly syncs to the PrepOne student app, where they can review their mistakes and access AI-generated hints." }
                ].map((f, i) => (
                    <div key={i} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            {React.cloneElement(f.icon, { className: 'w-7 h-7 text-[#01696f]' })}
                        </div>
                        <h3 className="font-display text-xl font-bold text-[#0F172A] mb-3">{f.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const BottomCTA = () => (
    <section className="bg-[#111210] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#01696f] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="font-display text-4xl font-bold text-white mb-6">Ready to run your institute on data?</h2>
            <p className="font-body text-xl text-gray-400 mb-10">
                Join top-tier institutes using CoachOne to double their student retention and justify premium fees.
            </p>
            <button className="bg-[#01696f] hover:bg-[#015257] text-white px-8 py-4 rounded-xl flex items-center justify-center mx-auto transition-all font-bold text-lg shadow-[0_0_20px_rgba(1,105,111,0.3)]">
                <BarChart3 className="w-5 h-5 mr-3" />
                See a Live Analytics Demo
            </button>
        </div>
    </section>
);

export default function StudentAnalyticsMarketingPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <Navbar />
            <Hero />
            <MicroConceptSection />
            <ParentReportingSection />
            <FeatureGrid />
            <BottomCTA />
            <Footer />
        </div>
    );
}