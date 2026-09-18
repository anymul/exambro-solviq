import { Link } from 'react-router-dom';
import {
    School, CreditCard, Users, Calendar, CheckCircle2,
    Smartphone, Globe, Clock, UserCheck, Check
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';

const Hero = () => (
    <section className="relative pt-32 pb-20 bg-[#111210] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#01696f] rounded-full mix-blend-screen filter blur-[140px] opacity-25 animate-pulse"></div>
            <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-teal-900 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiLz48L3N2Zz4=')]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 text-teal-400 text-xs font-semibold tracking-wider uppercase mb-4">
                <School className="w-4 h-4 text-teal-400" />
                <span>Institute Operations &amp; Management</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 tracking-tight leading-snug">
                <LetterReveal text="The single dashboard to run your" delay={100} /><br />
                <span className="text-teal-400">
                    <LetterReveal text="Entire Coaching Business." delay={600} />
                </span>
            </h1>
            <p className="font-body text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Handle admissions, track fee installments with automated WhatsApp receipts, record daily batch attendance in 30 seconds, and give your coaching center a modern digital presence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link to="/book-demo" className="w-full sm:w-auto bg-[#01696f] hover:bg-[#015257] text-white px-6 py-3.5 rounded-xl inline-flex items-center justify-center transition-all shadow-md font-bold text-base">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book an Operations Demo
                </Link>
                <a href="#features" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl inline-flex items-center justify-center transition-all font-semibold text-base">
                    Explore Daily Tools
                </a>
            </div>
        </div>
    </section>
);

// --- 6 CORE OPERATIONAL PILLARS ---
const OperationalPillars = () => {
    const tools = [
        {
            icon: <Users className="w-6 h-6 text-[#01696f]" />,
            title: "1. Admissions & Enrollment",
            desc: "Simple student registration, document records, target exam selection (JEE, NEET, Board), and clean batch allocation."
        },
        {
            icon: <CreditCard className="w-6 h-6 text-[#01696f]" />,
            title: "2. Fee Invoicing & WhatsApp Receipts",
            desc: "Structured installment plans, overdue reminders, payment logs (Cash, UPI, Bank), and instant branded WhatsApp receipts."
        },
        {
            icon: <UserCheck className="w-6 h-6 text-[#01696f]" />,
            title: "3. Daily Attendance & Absentee Alerts",
            desc: "Mark a full batch in 30 seconds from your phone, with automatic WhatsApp alerts sent to parents if a student misses class."
        },
        {
            icon: <Clock className="w-6 h-6 text-[#01696f]" />,
            title: "4. Faculty & Batch Timetables",
            desc: "Organize teacher assignments, classroom schedules, and test schedules without timetable clashes."
        },
        {
            icon: <Globe className="w-6 h-6 text-[#01696f]" />,
            title: "5. White-Labeled Microsite",
            desc: "A clean, mobile-ready public page for your institute showcasing courses, faculty, results, and student inquiry forms."
        },
        {
            icon: <Smartphone className="w-6 h-6 text-[#01696f]" />,
            title: "6. Student App Companion",
            desc: "Share batch access codes so enrolled students can practice digital mocks, past papers, and quick revision notes on mobile."
        }
    ];

    return (
        <section id="features" className="py-20 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider block mb-3">
                        Day-to-Day Operations
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                        Everything needed to manage your academy
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Replace paper registers and disconnected spreadsheets with a straightforward, unified system built for Indian coaching institutes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool, i) => (
                        <div key={i} className="bg-gray-50/80 p-6 rounded-2xl border border-gray-200 hover:border-[#01696f]/30 hover:shadow-sm transition-all flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                                    {tool.icon}
                                </div>
                                <h3 className="text-base font-bold text-gray-900 mb-2">{tool.title}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{tool.desc}</p>
                            </div>
                            <div className="mt-5 pt-3 border-t border-gray-200/80 flex items-center text-xs font-semibold text-[#01696f]">
                                Included in CoachOne <Check className="w-3.5 h-3.5 ml-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- SPOTLIGHT 1: FEE MANAGEMENT & INVOICING ---
const FeeManagementSection = () => (
    <section className="py-20 bg-[#f7f6f2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider block mb-3">
                        Fee Management
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        Keep fees organized. <br />
                        <span className="text-[#01696f]">Automate receipts and polite reminders.</span>
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        Keeping track of installments across multiple spreadsheets often leads to missed dues and awkward follow-up calls. CoachOne tracks each payment stage clearly and sends professional digital receipts automatically.
                    </p>

                    <div className="space-y-3.5">
                        {[
                            "Custom installment structures (Lump-sum, Quarterly, or Monthly).",
                            "Record payments across UPI, Cash, Cheque, and Net Banking.",
                            "Automated WhatsApp fee receipts with payment reference and PDF invoices.",
                            "1-Click gentle WhatsApp reminders sent to parents when an installment is due."
                        ].map((point, i) => (
                            <div key={i} className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0 mt-0.5" />
                                <span className="font-medium text-gray-700 text-sm">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Visual Card */}
                <div className="bg-white p-6 md:p-7 rounded-2xl border border-gray-200 text-gray-900 shadow-sm">
                    <div className="flex justify-between items-center mb-5 pb-4 border-b border-gray-100">
                        <div>
                            <span className="text-xs font-semibold text-[#01696f] uppercase tracking-wider block">Collections Overview</span>
                            <h4 className="text-lg font-bold text-gray-900 mt-0.5">August Fee Collections</h4>
                        </div>
                        <span className="text-xs bg-emerald-50 text-emerald-800 font-semibold px-2.5 py-1 rounded-md border border-emerald-200">92% Collected</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5 mb-5">
                        <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                            <span className="text-xs text-gray-500 block mb-0.5">Total Invoiced</span>
                            <span className="text-xl font-bold text-gray-900">₹4,85,000</span>
                        </div>
                        <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                            <span className="text-xs text-gray-500 block mb-0.5">Pending Dues</span>
                            <span className="text-xl font-bold text-amber-600">₹38,000</span>
                        </div>
                    </div>

                    {/* Defaulter alert sample */}
                    <div className="bg-amber-50/80 border border-amber-200/80 p-3.5 rounded-xl mb-4 text-xs space-y-2 text-amber-950">
                        <div className="flex justify-between font-bold">
                            <span>Payment Due: Roll #18 (Karan Mehta)</span>
                            <span className="text-amber-700">₹12,500</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">Installment #2 due on 15th Aug. Gentle reminder scheduled for tomorrow morning.</p>
                        <button className="bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold px-3 py-1.5 rounded-lg text-xs transition-colors border border-amber-300">
                            Send Friendly WhatsApp Reminder
                        </button>
                    </div>

                    <div className="p-3 bg-teal-50/80 border border-teal-200/80 rounded-xl flex items-center justify-between text-xs text-teal-950">
                        <span className="font-semibold text-[#01696f]">Instant WhatsApp Receipts</span>
                        <span className="text-gray-600 flex items-center gap-1">Enabled for all modes <Check className="w-3.5 h-3.5 text-emerald-600 inline" /></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- SPOTLIGHT 2: ATTENDANCE & ABSENTEE NOTICES ---
const AttendanceSection = () => (
    <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse lg:flex-row-reverse">
                <div>
                    <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider block mb-3">
                        Attendance &amp; Safety
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        30-Second Batch Attendance. <br />
                        <span className="text-[#01696f]">Instant parent absentee notices.</span>
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        Roll call shouldn't take up 10 minutes of teaching time. Teachers can mark an entire batch of 50 students in 30 seconds on their phone, while parents stay assured with automatic absence updates.
                    </p>

                    <div className="space-y-3.5">
                        {[
                            "Fast mobile-first toggle interface (Present, Absent, or Late).",
                            "Automatic WhatsApp notices sent to parents if a student is absent.",
                            "Monthly attendance percentages viewable alongside test scores.",
                            "Zero paper roll books or manual register maintenance."
                        ].map((point, i) => (
                            <div key={i} className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0 mt-0.5" />
                                <span className="font-medium text-gray-700 text-sm">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left Visual Card */}
                <div className="bg-white p-6 md:p-7 rounded-2xl border border-gray-200 text-gray-900 shadow-sm">
                    <div className="flex justify-between items-center mb-5 pb-4 border-b border-gray-100">
                        <div>
                            <span className="text-xs font-semibold text-[#01696f] uppercase tracking-wider block">Daily Roll Call</span>
                            <h4 className="text-lg font-bold text-gray-900 mt-0.5">Class 12 Morning Batch</h4>
                        </div>
                        <span className="text-xs bg-teal-50 text-[#01696f] font-semibold px-2.5 py-1 rounded-md border border-teal-100">46/48 Present (95.8%)</span>
                    </div>

                    <div className="space-y-2 mb-5 text-xs">
                        {[
                            { name: "Aarav Verma (#STU-4821)", status: "Present", color: "bg-emerald-50/70 text-emerald-800 border-emerald-200" },
                            { name: "Divya Sharma (#STU-4822)", status: "Present", color: "bg-emerald-50/70 text-emerald-800 border-emerald-200" },
                            { name: "Karan Mehta (#STU-4823)", status: "Absent (Parent Alert Sent)", color: "bg-rose-50 text-rose-800 border-rose-200" },
                            { name: "Pooja Patel (#STU-4824)", status: "Present", color: "bg-emerald-50/70 text-emerald-800 border-emerald-200" }
                        ].map((stu, i) => (
                            <div key={i} className={`p-2.5 rounded-xl border ${stu.color} flex justify-between items-center font-medium`}>
                                <span className="text-gray-800">{stu.name}</span>
                                <span className="font-semibold">{stu.status}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-xs text-gray-600 flex justify-between items-center">
                        <span>Absentee WhatsApp Notice</span>
                        <span className="text-emerald-700 font-semibold flex items-center gap-1">Sent at 08:35 AM <Check className="w-3.5 h-3.5 inline" /></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- SPOTLIGHT 3: WHITE-LABELED MICROSITE & PREPONE SYNC ---
const MicrositeSection = () => (
    <section className="py-20 bg-[#f7f6f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider block mb-3">
                        Online Presence
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        Launch your branded website. <br />
                        <span className="text-[#01696f]">Connect to the PrepOne student app.</span>
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        Give prospective parents and students confidence from day one. CoachOne provides a fast, branded website for your institute, along with companion mobile access for enrolled students.
                    </p>

                    <div className="space-y-3.5 mb-7">
                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Instant Institute Web Page</h4>
                            <p className="text-xs text-gray-600">Showcase courses, batch timings, faculty credentials, and capture direct student admission inquiries online.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                            <h4 className="font-bold text-gray-900 text-sm mb-1">PrepOne Batch Access</h4>
                            <p className="text-xs text-gray-600">Share batch access codes so students can practice digital mock tests and revision notes directly on their phones.</p>
                        </div>
                    </div>

                    <Link to="/book-demo" className="bg-[#01696f] hover:bg-[#015257] text-white px-6 py-3.5 rounded-xl inline-flex items-center font-bold text-base transition-all shadow-md">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book an Operations Walkthrough
                    </Link>
                </div>

                {/* Right Visual Phone & Web Mockup */}
                <div className="bg-slate-100 p-5 rounded-3xl border border-slate-200 shadow-sm max-w-md mx-auto w-full">
                    <div className="flex justify-between items-center mb-3.5 px-1 text-xs">
                        <span className="text-[#01696f] font-semibold">yourcoaching.solviq.in</span>
                        <span className="text-gray-500 text-[11px]">Custom Domain Ready</span>
                    </div>

                    <div className="bg-white text-gray-900 p-5 rounded-2xl shadow-sm text-xs space-y-3 border border-gray-100">
                        <div className="flex justify-between items-center border-b border-gray-100 pb-2.5">
                            <span className="font-bold text-sm text-[#01696f]">Apex Academy</span>
                            <span className="bg-teal-50 text-teal-800 text-[11px] font-semibold px-2 py-0.5 rounded border border-teal-100">Admissions Open 2026</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900">Target JEE &amp; CBSE Class 12 Intensive</h4>
                        <p className="text-gray-600 text-xs leading-relaxed">1-year focused classroom coaching with weekly test series, step-by-step doubt resolution, and regular parent reports.</p>
                        <div className="bg-[#01696f] text-white p-2.5 rounded-xl font-semibold text-center text-xs shadow-sm">
                            Apply for Admission Online
                        </div>
                    </div>
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
                Run your coaching institute without the admin headaches.
            </h2>
            <p className="font-body text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                Join institutes across India managing admissions, fees, attendance, and tests smoothly with CoachOne.
            </p>
            <Link to="/book-demo" className="bg-[#01696f] hover:bg-[#015257] text-white px-6 py-3.5 rounded-xl inline-flex items-center justify-center transition-all font-bold text-base shadow-md">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a 20-Min Demo
            </Link>
        </div>
    </section>
);

export default function InstituteOperationsMarketingPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <SEO
                title="Coaching Institute Operations & Management | CoachOne"
                description="Manage admissions, automate fee collection with WhatsApp receipts, track daily attendance, and launch your institute website with CoachOne."
                keywords="coaching institute management, coaching fee collection, student attendance tracker, coaching admissions software, institute website builder"
                canonicalUrl="https://solviq.in/institute-operations"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'CoachOne', url: '/coachone' },
                        { name: 'Institute Operations', url: '/institute-operations' }
                    ])
                ]}
            />
            <Navbar />
            <Hero />
            <OperationalPillars />
            <FeeManagementSection />
            <AttendanceSection />
            <MicrositeSection />
            <BottomCTA />
            <Footer />
        </div>
    );
}
