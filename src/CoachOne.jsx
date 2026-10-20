import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    CheckCircle2,
    Calendar,
    ArrowRight,
    BrainCircuit,
    Sparkles,
    ArrowLeft,
    PieChart,
    FileText,
    Send,
    ChevronDown,
    Check,
    CreditCard,
    GitBranch,
    Target,
    Minus,
    Globe,
    Users,
    Star,
    Search,
    TrendingUp
} from 'lucide-react';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';
import SEO from './componenets/SEO';
import { 
    buildCoachOneSaasSchema, 
    buildFaqSchema, 
    buildBreadcrumbSchema 
} from './componenets/Schema';
import { LatexText } from './componenets/Latex';
import BackendStatusBadge from './componenets/BackendStatusBadge';
import insightsOverviewImg from './assets/coachone/insights-prerequisite-overview.webp';
import tracerImg from './assets/coachone/insights-prerequisite-tracer.webp';
import testPaperImg from './assets/coachone/test-paper-marking-scheme.webp';
import dashboardHomeImg from './assets/coachone/dashboard-home.webp';
import feeManagementImg from './assets/coachone/fee-management.webp';
import reviewBoosterImg from './assets/coachone/google-review-booster.webp';
import micrositeImg from './assets/coachone/microsite-preview.webp';
import aiStudioImg from './assets/coachone/ai-question-studio.webp';
import { AppScreenshot, DemoLink, SectionHead } from './componenets/coachone/ui';
import { trackCta, BTN_ON_TEAL } from './componenets/coachone/tokens';

// Marks a card whose figures are an example, not read from a live account.
const SampleTag = () => (
    <div className="text-[11px] font-semibold text-gray-500 px-1 mb-2">
        Sample with illustrative data
    </div>
);

// --- HERO: AN ANSWER SHEET, WITH THE REAL PRODUCT ON IT ---
const HERO_WORDS = "Your teachers teach. CoachOne checks the copies.".split(' ');

const Hero = () => (
    <section className="co-sheet text-white overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            <div className="lg:col-span-5">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.04]">
                    {HERO_WORDS.map((word, i) => (
                        <React.Fragment key={i}>
                            <span className="co-word"><span style={{ '--i': i }}>{word}</span></span>{' '}
                        </React.Fragment>
                    ))}
                </h1>
                <p className="font-body text-lg text-teal-50/90 mt-6 max-w-md leading-relaxed co-fade" style={{ '--d': '650ms' }}>
                    It reads handwritten answer sheets and awards step marks, shows where each batch loses marks, and sends every parent a WhatsApp report the same evening.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 co-fade" style={{ '--d': '800ms' }}>
                    <DemoLink location="hero" className={BTN_ON_TEAL}>
                        <Calendar className="w-5 h-5 mr-3" />
                        Book a 20-minute demo
                    </DemoLink>
                    <a
                        href="https://coachone.solviq.in"
                        onClick={() => trackCta('hero_dashboard')}
                        className="text-white border border-white/35 hover:bg-white/10 px-6 py-4 rounded-xl inline-flex items-center justify-center whitespace-nowrap transition-colors font-bold text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Go to dashboard
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </div>
                <p className="mt-4 text-sm text-teal-100/70 co-fade" style={{ '--d': '950ms' }}>
                    A live walkthrough with your subjects and batch size. No sales pressure.
                </p>
            </div>

            <div className="lg:col-span-7 relative co-rise">
                <AppScreenshot
                    src={dashboardHomeImg}
                    alt="CoachOne dashboard for an institute showing collected fees, pending fees, active students, running batches, and alerts"
                    width={2000}
                    height={1250}
                    priority
                />
            </div>
        </div>
    </section>
);

// --- FACTS: ONLY THINGS THE PRODUCT VERIFIABLY DOES OR COSTS ---
const FactStrip = () => {
    const facts = [
        { value: "₹999 / month", label: "Starter plan for up to 75 students" },
        { value: "₹1.50 per page", label: "AI evaluation, billed only for answer pages checked" },
        { value: "1 lakh+ questions", label: "Verified MCQ and subjective bank, included in every plan" },
        { value: "One batch code", label: "Students join your batch on the PrepOne app" }
    ];
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-7">
                    {facts.map((f) => (
                        <div key={f.value} className="border-l-4 border-[#01696f] pl-4">
                            <dt className="font-display text-2xl text-[#032b2e]">{f.value}</dt>
                            <dd className="text-sm text-gray-600 mt-1 leading-snug">{f.label}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

// --- WHAT CHANGES: MARKED PAPER, TODAY VS. WITH COACHONE ---
const ChangeSection = () => {
    const rows = [
        {
            today: "Teachers spend weekends checking 200+ answer copies. After the first 40, marking gets hurried and feedback stops.",
            now: "Students upload photos of their answer sheets. CoachOne reads the handwriting and awards step marks against your rubric. Teachers review and adjust."
        },
        {
            today: "A student scores 52/100 and nobody has time to find out why.",
            now: "Every test shows which step lost marks, which questions the whole batch got wrong, and which earlier-class topics are weak."
        },
        {
            today: "Parents wait weeks for results and bring their questions to the PTM.",
            now: "A report card with marks, rank and weak topics goes to each parent on WhatsApp the same evening."
        },
        {
            today: "Fee registers, and phone calls to parents who haven't paid.",
            now: "A defaulter list with one-click WhatsApp reminders, UPI collection and printed receipts."
        }
    ];
    return (
        <section className="bg-[#eef6f5] py-20 lg:py-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHead title="What changes when copy checking stops eating your week" />

                <div className="mt-12 grid md:grid-cols-2 rounded-2xl overflow-hidden border border-[#cfe3e1] shadow-sm">
                    <div className="hidden md:flex items-center bg-white px-7 py-4 border-b border-[#cfe3e1] font-bold text-[#d8432f]">
                        <span className="co-note text-2xl mr-3 inline-block">&#x2717;</span> Today
                    </div>
                    <div className="hidden md:flex items-center bg-[#01696f] px-7 py-4 font-bold text-white border-b border-white/15">
                        <span className="co-note text-2xl mr-3 text-[#ffd84d] inline-block">&#x2713;</span> With CoachOne
                    </div>
                    {rows.map((r, i) => (
                        <React.Fragment key={i}>
                            <div className="bg-white px-7 py-6 md:py-7 border-b border-[#e3eeed] md:border-b-[#e3eeed] text-gray-600 leading-relaxed">
                                <span className="md:hidden block text-xs font-bold text-[#d8432f] mb-1">Today</span>
                                {r.today}
                            </div>
                            <div className="bg-[#01696f] px-7 py-6 md:py-7 border-b border-white/15 text-white font-medium leading-relaxed">
                                <span className="md:hidden block text-xs font-bold text-[#ffd84d] mb-1">With CoachOne</span>
                                {r.now}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- PRODUCT TOUR: REAL SCREENS, ONE AT A TIME ---
const EvaluationSample = () => (
    <div className="rounded-xl border border-[#cfe3e1] bg-white p-5 space-y-3 text-xs shadow-sm max-w-2xl">
        <div className="flex justify-between items-center pb-2.5 border-b border-gray-200">
            <span className="font-bold text-gray-900">Student: Aarav Verma &bull; Q4 Lens Maker Derivation</span>
            <span className="text-[#01696f] bg-teal-50 border border-teal-200 px-2 py-0.5 rounded font-bold">5 Marks Question</span>
        </div>
        {[
            ["1. Formula for Surface 1 (1.5M)", "+1.5 / 1.5", false],
            ["2. Working for Surface 2 (1.5M)", "+1.5 / 1.5", false],
            ["3. Equation Addition & Focal Length (1.5M)", "+1.5 / 1.5", false],
            ["4. Sign Convention on Curvature Radius (0.5M)", "0.0 / 0.5 (Deducted 0.5M)", true]
        ].map(([step, mark, lost]) => (
            <div key={step} className={`flex justify-between items-center p-2.5 rounded-lg border ${lost ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'}`}>
                <span className={`font-medium ${lost ? 'text-red-900' : 'text-gray-800'}`}>{step}</span>
                <span className={`font-bold ${lost ? 'text-[#d8432f]' : 'text-[#01696f]'}`}>{mark}</span>
            </div>
        ))}
        <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
            <span className="text-gray-500">Total awarded: <strong className="text-xl text-gray-900 ml-1">4.5 / 5.0</strong></span>
            <span className="bg-[#01696f] text-white font-bold px-3 py-1.5 rounded-lg flex items-center">
                <Check className="w-3.5 h-3.5 mr-1" /> Verified by faculty
            </span>
        </div>
    </div>
);

// A parent's phone: the report arrives as a normal WhatsApp message with the PDF attached.
const WhatsAppSample = () => (
    <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-black/10 shadow-md bg-[#efeae2]" role="img" aria-label="Example WhatsApp message from a coaching institute to a parent, with a PDF report card attached">
        <div className="bg-[#008069] text-white px-3 py-2.5 flex items-center gap-3">
            <ArrowLeft className="w-5 h-5 flex-shrink-0" />
            <span className="w-9 h-9 rounded-full bg-[#01696f] ring-1 ring-white/40 flex items-center justify-center font-bold text-sm flex-shrink-0">YC</span>
            <div className="leading-tight min-w-0">
                <div className="font-semibold text-[15px] truncate">Your Coaching Academy</div>
                <div className="text-xs text-white/80">Business account</div>
            </div>
        </div>

        <div className="px-3 pt-3 pb-5 space-y-1.5">
            <div className="mx-auto w-fit rounded-md bg-white text-[#54656f] text-[11px] font-medium px-2.5 py-1 shadow-sm mb-2">TODAY</div>

            <div className="max-w-[88%] rounded-lg rounded-tl-none bg-white shadow-sm p-1.5">
                <div className="flex items-center gap-2.5 rounded-md bg-[#f5f6f6] p-2.5">
                    <span className="w-9 h-10 rounded bg-[#e53935] text-white text-[10px] font-bold flex items-end justify-center pb-1 flex-shrink-0">PDF</span>
                    <div className="min-w-0">
                        <div className="text-[13px] text-[#111b21] truncate">Aarav_Sharma_Report_Card.pdf</div>
                        <div className="text-[11px] text-[#667781]">PDF document</div>
                    </div>
                </div>
                <p className="text-[14px] leading-snug text-[#111b21] px-1.5 pt-2 pb-0.5">
                    Dear Parent, Aarav Sharma scored 68 / 70 (97.1%) in Physics Full Mock Test #4. Rank #3 in the batch. The chapter-wise diagnostic is attached.
                </p>
                <div className="text-[11px] text-[#667781] text-right px-1.5">6:15 pm</div>
            </div>

            <div className="max-w-[88%] rounded-lg bg-white shadow-sm px-2.5 pt-1.5 pb-1">
                <p className="text-[14px] leading-snug text-[#111b21]">
                    Faculty note: Strong conceptual understanding. 1 remedial worksheet assigned on the PrepOne app for Class 11 SHM formulas.
                </p>
                <div className="text-[11px] text-[#667781] text-right">6:15 pm</div>
            </div>
        </div>
    </div>
);

const TOUR_TABS = [
    {
        id: 'telemetry',
        label: 'Mistake reports',
        icon: PieChart,
        title: 'Catch where the entire batch loses marks before board exams.',
        desc: 'Instead of generic test totals, see exactly which formula step, calculation mistake, or Class 11 gap caused marks to drop.',
        bullets: [
            ['Pinpoint common traps', 'Flags questions where over 50% of the class made the same mistake.'],
            ['Class 11 foundation alerts', 'Traces Class 12 failures back to weak prerequisite concepts.'],
            ['1-click remedial practice', 'Generates targeted revision worksheets for weak students.']
        ],
        link: { to: '/student-analytics', text: 'See the analytics feature' },
        image: { src: insightsOverviewImg, w: 1800, h: 1188, alt: 'CoachOne Batch & Student Insights dashboard showing prerequisite foundation health and the root-cause tracer for a Class 12 batch' }
    },
    {
        id: 'evaluation',
        label: 'Copy checking',
        icon: BrainCircuit,
        title: 'Fair step-marking on handwritten answer sheets in seconds.',
        desc: 'The evaluation engine reads cursive handwriting, awards partial credit according to board rubrics, and lets teachers review everything on one screen.',
        bullets: [
            ['Official board rubrics', 'Awards partial marks for formula recall, substitutions, and units.'],
            ['Handles real handwriting', 'Evaluates messy handwriting, derivations, and math symbols.'],
            ['Teacher in full control', 'Review, adjust marks, or add comments with a single click.']
        ],
        link: { to: '/ai-evaluation', text: 'See how paper checking works' },
        sample: <EvaluationSample />
    },
    {
        id: 'studio',
        label: 'Test paper studio',
        icon: FileText,
        title: 'Build custom, print-ready test papers in under 5 minutes.',
        desc: 'Pick from 1 lakh+ verified CBSE, Bihar Board, JEE, and NEET questions, MCQ and subjective, or paste your own. Every plan includes the full bank. Generate balanced question papers with watermarks instantly.',
        bullets: [
            ['1 lakh+ verified questions', 'MCQ and subjective, chapter-wise for CBSE, state boards, JEE Mains, and NEET. In every plan.'],
            ['Full LaTeX equation support', 'Formatted formulas, diagrams, and official solutions.'],
            ['Institute-branded PDFs', 'Export with your center logo and custom header.']
        ],
        link: { to: '/test-management', text: 'Explore the test paper studio' },
        image: { src: testPaperImg, w: 1800, h: 1125, alt: 'CoachOne test library preview of a Class 12 Physics unit test with the marking scheme and solutions tab open and a Download PDF button' }
    },
    {
        id: 'aistudio',
        label: 'AI question studio',
        icon: Sparkles,
        title: 'Turn your PDF or notes into quizzes.',
        desc: 'Upload a PDF, text file or your own notes, choose the class, subject and chapter, and pick the question types. Review what CoachOne generates, then save it to your question bank or assign it as a test.',
        bullets: [
            ['Works from your material', 'Upload a PDF, TXT or MD file up to 15 MB, or paste your notes.'],
            ['Board-style question types', 'MCQ, assertion-reason, very short, short answer, long answer and case study questions, each with marks.'],
            ['You approve every question', 'Keep the good ones, discard the rest, and assign the set as a test.'],
            ['Growth plan and above', 'Included with the Growth, Scale and Enterprise plans.']
        ],
        link: { to: '/test-management', text: 'See the test studio' },
        image: { src: aiStudioImg, w: 2000, h: 1260, alt: 'CoachOne AI Question Studio with options to upload a PDF or paste text, choose class, subject and chapter, and select question types such as MCQ, short answer and case study' }
    },
    {
        id: 'operations',
        label: 'Fees & attendance',
        icon: CreditCard,
        title: 'Stop chasing fee defaulters and managing attendance registers.',
        desc: 'Automate recurring parent reminders with UPI payment links, track student attendance, and manage multiple batches effortlessly.',
        bullets: [
            ['WhatsApp fee reminders', 'Direct payment links sent to parents with 1 click.'],
            ['Attendance alerts', 'Notify parents when a student is absent.'],
            ['Coaching website included', 'Branded website to capture online admission enquiries.']
        ],
        link: { to: '/institute-operations', text: 'See the center management tools' },
        image: { src: feeManagementImg, w: 1800, h: 1125, alt: 'CoachOne Fee Management screen showing monthly collection progress, recent transactions, pending payments and payment methods' }
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp reports',
        icon: Send,
        title: 'Keep parents informed after every single test.',
        desc: "Send branded report cards with marks, rank, and topic weakness breakdowns straight to parents' phones the same evening.",
        bullets: [
            ['Instant WhatsApp delivery', 'No printing paper report cards or waiting for PTMs.'],
            ['White-labeled PDFs', 'Show your coaching logo, faculty feedback, and batch rank.'],
            ['Higher retention', 'Parents see continuous academic care, reducing student drop-offs.']
        ],
        link: { to: '/student-analytics', text: 'See the parent communication tools' },
        sample: <WhatsAppSample />
    }
];

const DashboardDemo = ({ demoRef }) => {
    const [activeId, setActiveId] = useState('telemetry');
    const tab = TOUR_TABS.find((t) => t.id === activeId);

    return (
        <section ref={demoRef} className="bg-white py-20 lg:py-28 scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHead title="See how your center runs with CoachOne">
                    Check answer copies, build question papers, spot mistake patterns and message parents from one dashboard. These are screens from the live product.
                </SectionHead>

                <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left: tabs + the active tab's explanation */}
                    <div className="lg:col-span-4 min-w-0">
                        <div role="tablist" aria-label="CoachOne features" className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
                            {TOUR_TABS.map((t) => {
                                const Icon = t.icon;
                                const active = t.id === activeId;
                                return (
                                    <button
                                        key={t.id}
                                        role="tab"
                                        aria-selected={active}
                                        onClick={() => setActiveId(t.id)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm whitespace-nowrap text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#01696f] ${
                                            active
                                                ? 'bg-[#01696f] text-white shadow-md'
                                                : 'bg-[#eef6f5] text-[#032b2e] hover:bg-[#dcecea]'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4 flex-shrink-0" />
                                        {t.label}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="mt-8" role="tabpanel">
                            <h3 className="font-display text-2xl text-[#032b2e] leading-snug">{tab.title}</h3>
                            <p className="mt-3 text-gray-600 leading-relaxed">{tab.desc}</p>
                            <ul className="mt-5 space-y-3 text-sm text-gray-700">
                                {tab.bullets.map(([head, body]) => (
                                    <li key={head} className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                        <span><strong>{head}:</strong> {body}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to={tab.link.to} className="mt-6 inline-flex items-center text-sm font-bold text-[#01696f] hover:text-[#015257]">
                                {tab.link.text} <ArrowRight className="w-4 h-4 ml-1.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right: the screen */}
                    <div className="lg:col-span-8 min-w-0">
                        {tab.image ? (
                            <AppScreenshot
                                src={tab.image.src}
                                alt={tab.image.alt}
                                width={tab.image.w}
                                height={tab.image.h}
                            />
                        ) : (
                            <div className="rounded-2xl bg-[#eef6f5] border border-[#cfe3e1] p-6 md:p-8">
                                <SampleTag />
                                {tab.sample}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- ONE DAY, START TO FINISH: A REAL SEQUENCE, SO IT GETS A TIMELINE ---
const WeeklyStorySection = () => {
    const steps = [
        { time: "9:00 AM", who: "Teacher", title: "Build and release the test", text: "Pick questions from the 1 lakh+ verified bank or add your own. Export a print-ready paper with your institute watermark in under 5 minutes." },
        { time: "2:00 PM", who: "Students", title: "Write and upload", text: "Students write on plain paper and upload photos of their sheets in the app. Nobody collects, counts or carries bundles." },
        { time: "4:00 PM", who: "CoachOne", title: "Step-wise checking", text: "The engine reads the handwriting, awards step marks for formulas and derivations against the rubric, and flags sign mistakes." },
        { time: "7:00 PM", who: "Parents", title: "Reports on WhatsApp", text: "Each parent gets the score, batch rank and weak topics on WhatsApp the same evening." }
    ];
    return (
        <section className="bg-[#eef6f5] py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHead title="From creating the test to informing parents, in one day">
                    No weekend pile of unchecked answer sheets. You publish the test, students upload their copies, and results reach parents by night.
                </SectionHead>

                <ol className="mt-14 grid md:grid-cols-4 gap-y-10 md:gap-x-8 relative">
                    <div className="hidden md:block absolute top-[11px] left-0 right-0 h-0.5 bg-[#01696f]/30" aria-hidden="true"></div>
                    {steps.map((s) => (
                        <li key={s.time} className="relative">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="relative z-10 w-6 h-6 rounded-full bg-[#01696f] ring-4 ring-[#eef6f5]"></span>
                                <span className="font-display text-xl text-[#01696f] bg-[#eef6f5] pr-3 relative z-10">{s.time}</span>
                            </div>
                            <div className="text-xs font-bold text-gray-500 mb-1">{s.who}</div>
                            <h3 className="font-bold text-lg text-[#032b2e] mb-2">{s.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

// --- REPEATED DEMO PROMPT AT DECISION POINTS ---
const DemoBand = ({ location, title, note }) => (
    <section className="bg-[#01696f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
                <p className="font-display text-2xl md:text-3xl text-white">{title}</p>
                <p className="text-teal-50/85 mt-1">{note}</p>
            </div>
            <DemoLink location={location} className={`${BTN_ON_TEAL} flex-shrink-0`}>
                <Calendar className="w-5 h-5 mr-3" />
                Book a 20-minute demo
            </DemoLink>
        </div>
    </section>
);

// --- STICKY MOBILE CTA ---
const StickyDemoBar = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setShow(window.scrollY > 700 && window.scrollY < max - 900);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            aria-hidden={!show}
            className={`md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-gray-200 px-4 py-3 transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`}
        >
            <DemoLink location="sticky_mobile" tabIndex={show ? 0 : -1} className="w-full bg-[#01696f] text-white py-3.5 rounded-xl flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5 mr-2.5" />
                Book a 20-minute demo
            </DemoLink>
        </div>
    );
};

// --- THE DIFFERENTIATOR: WHY STUDENTS LOSE MARKS ---
const TelemetrySpotlight = () => (
    <section className="co-sheet text-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-5">
                <h2 className="font-display text-3xl md:text-5xl leading-[1.08]">
                    Don't just give total marks. Show why students lose them.
                </h2>
                <p className="mt-5 text-lg text-teal-50/85 leading-relaxed">
                    A total only tells you right or wrong. CoachOne shows the reason: a calculation slip, a wrong formula, or a weak base from an earlier class.
                </p>

                <div className="mt-9 space-y-7">
                    <div className="flex items-start gap-4">
                        <Target className="w-6 h-6 text-[#ffd84d] flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-lg">Why students pick wrong options</h3>
                            <p className="text-sm text-teal-50/80 leading-relaxed mt-1">Sorts MCQ mistakes into clear types: plus/minus sign confusion, wrong formula applied, or calculation traps.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FileText className="w-6 h-6 text-[#ffd84d] flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-lg">Step-by-step board marking</h3>
                            <p className="text-sm text-teal-50/80 leading-relaxed mt-1">Follows board marking rules and gives step marks for formula, substitution and final answer, so students know where marks were lost.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <GitBranch className="w-6 h-6 text-[#ffd84d] flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-lg">Weak basics from earlier classes</h3>
                            <p className="text-sm text-teal-50/80 leading-relaxed mt-1">
                                <LatexText text="Finds when a Class 12 struggle comes from weak Class 11 fundamentals (e.g. \(\text{LC Oscillations} \implies \text{Simple Harmonic Motion}\)) and creates quick revision practice." />
                            </p>
                        </div>
                    </div>
                </div>

                <Link to="/student-analytics" className={`${BTN_ON_TEAL} mt-10`}>
                    See the student analysis guide <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>

            <div className="lg:col-span-7 relative">
                <div className="hidden lg:block absolute -top-12 right-4 text-[#ffd84d] z-20 text-right">
                    <span className="co-note text-xl inline-block">A Class 12 chapter traced to the Class 11 topic behind it</span>
                </div>
                <AppScreenshot
                    src={tracerImg}
                    alt="CoachOne prerequisite root-cause tracer tracing a Class 12 Physics chapter back to weak Class 11 foundation topics with a 10-minute refresher action"
                    width={1800}
                    height={1159}
                />
            </div>
        </div>
    </section>
);

// --- ADMISSIONS & GROWTH ---
const GrowthSuiteSection = () => {
    const items = [
        { icon: Globe, title: "Institute microsite", text: "A clean, mobile-ready website with faculty profiles, topper ranks and fee structures, without paying a web developer." },
        { icon: Users, title: "Admissions pipeline", text: "Track every enquiry from New to Contacted, Demo Class, Follow-up and Admitted, with staff assignment." },
        { icon: Star, title: "Google reviews booster", text: "Ask happy parents for a Google review on WhatsApp. Unhappy ones write to you privately instead." },
        { icon: Search, title: "Local search presence", text: "Built so parents searching \"Class 10 tuition near me\" can find your institute." }
    ];
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHead title="Fill your batches, not just run them">
                    CoachOne also gives your academy a website that takes demo-class requests, an enquiry tracker, and a way to collect genuine Google reviews.
                </SectionHead>

                <div className="mt-12 grid md:grid-cols-2 gap-6 items-start">
                    <AppScreenshot
                        src={micrositeImg}
                        alt="An institute website built with CoachOne Microsite Studio, with an admissions badge, a book-a-demo-class form and WhatsApp button"
                        width={1075}
                        height={767}
                    />
                    <AppScreenshot
                        src={reviewBoosterImg}
                        alt="CoachOne Google Review Booster showing a 4.3 parent rating, star breakdown and the ask-for-reviews WhatsApp flow"
                        width={1800}
                        height={1045}
                    />
                </div>

                <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
                    {items.map(({ icon: Icon, title, text }) => (
                        <li key={title}>
                            <span className="w-10 h-10 rounded-lg bg-[#eef6f5] text-[#01696f] flex items-center justify-center mb-3">
                                <Icon className="w-5 h-5" />
                            </span>
                            <h3 className="font-bold text-[#032b2e]">{title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mt-1">{text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

// --- ROI & COST COMPARISON CALCULATOR ---
const ROICalculatorSection = () => {
    const [studentCount, setStudentCount] = useState(250);
    const [testsPerMonth, setTestsPerMonth] = useState(2);
    const [pagesPerTest, setPagesPerTest] = useState(8);

    // Traditional Offline Cost Breakdown:
    // Printing question papers + answer sheets (~₹10) + DTP/typing (~₹5) + Manual evaluation (~₹12-15) = ~₹28/student/test
    const offlineCostPerStudentTest = 28;
    const totalStudentTests = studentCount * testsPerMonth;
    const totalOfflineCost = totalStudentTests * offlineCostPerStudentTest;

    // CoachOne Cost Breakdown:
    // AI Evaluation: ₹1.50 per evaluated page
    const totalEvaluatedPages = totalStudentTests * pagesPerTest;
    const aiEvaluationCost = totalEvaluatedPages * 1.5;
    
    // Base Subscription Tier selection based on studentCount
    const basePlanPrice = studentCount <= 75 ? 999 : studentCount <= 200 ? 1999 : 4499;
    const basePlanName = studentCount <= 75 ? "Starter" : studentCount <= 200 ? "Growth" : "Scale";
    
    const totalCoachOneCost = basePlanPrice + aiEvaluationCost;
    const netMonthlySavings = Math.max(0, totalOfflineCost - totalCoachOneCost);
    const estimatedTeacherHoursSaved = Math.round(totalStudentTests * 0.25); // ~15 mins per copy checked manually

    return (
        <section className="bg-[#f8fafc] py-24 relative overflow-hidden text-gray-900 border-y border-gray-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                        Interactive Cost &amp; ROI Calculator
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
                        Calculate your institute's savings.
                    </h2>
                    <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed">
                        Traditional offline test series cost <strong>₹25–₹30 per student per test</strong> in DTP typing, question printing, physical answer sheets, and manual teacher evaluation. See how CoachOne saves money while delivering reports in 1 day.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
                    {/* Left: Input Sliders */}
                    <div className="lg:col-span-6 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-[#01696f]" />
                                Your Institute Parameters
                            </h3>

                            {/* Slider 1: Students */}
                            <div className="mb-7">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-xs sm:text-sm font-semibold text-gray-700">
                                        Active Enrolled Students
                                    </label>
                                    <span className="text-base font-bold text-[#01696f] bg-teal-50 px-3 py-1 rounded-lg border border-teal-200">
                                        {studentCount} Students
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="30"
                                    max="500"
                                    step="10"
                                    value={studentCount}
                                    onChange={(e) => setStudentCount(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#01696f]"
                                />
                                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                                    <span>30 (Small Batch)</span>
                                    <span>200 (Medium)</span>
                                    <span>500 (Large Academy)</span>
                                </div>
                            </div>

                            {/* Slider 2: Subjective Tests */}
                            <div className="mb-7">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-xs sm:text-sm font-semibold text-gray-700">
                                        Subjective Tests / Month per Student
                                    </label>
                                    <span className="text-base font-bold text-[#01696f] bg-teal-50 px-3 py-1 rounded-lg border border-teal-200">
                                        {testsPerMonth} Tests / mo
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="6"
                                    step="1"
                                    value={testsPerMonth}
                                    onChange={(e) => setTestsPerMonth(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#01696f]"
                                />
                                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                                    <span>1 Monthly Test</span>
                                    <span>2 Fortnightly</span>
                                    <span>6 Weekly Full Mock</span>
                                </div>
                            </div>

                            {/* Slider 3: Answer Pages */}
                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-xs sm:text-sm font-semibold text-gray-700">
                                        Average Pages per Handwritten Copy
                                    </label>
                                    <span className="text-base font-bold text-[#01696f] bg-teal-50 px-3 py-1 rounded-lg border border-teal-200">
                                        {pagesPerTest} Pages
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="4"
                                    max="16"
                                    step="2"
                                    value={pagesPerTest}
                                    onChange={(e) => setPagesPerTest(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#01696f]"
                                />
                                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                                    <span>4 Pages (Unit Test)</span>
                                    <span>8 Pages (Standard)</span>
                                    <span>16 Pages (Full Board Mock)</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-100 text-xs text-gray-600 space-y-1">
                            <p>• <strong>{totalStudentTests.toLocaleString()}</strong> total tests conducted per month</p>
                            <p>• <strong>{totalEvaluatedPages.toLocaleString()}</strong> handwritten pages checked by AI</p>
                            <p className="text-[#01696f] font-semibold">• Unlimited MCQ tests and DPPs are included free with ₹0 evaluation charge</p>
                        </div>
                    </div>

                    {/* Right: Side-by-Side Financial Comparison */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                        {/* Comparison Card */}
                        <div className="grid sm:grid-cols-2 gap-4 h-full">
                            {/* Offline Method */}
                            <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm">
                                <div>
                                    <div className="text-[11px] font-bold text-rose-700 uppercase tracking-wider mb-1">
                                        Traditional Method
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Manual Paper Tests</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                        Includes question printing, physical copies, DTP formatting, and evaluator wages (~₹28/student test).
                                    </p>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Monthly Expense:</div>
                                    <div className="text-2xl sm:text-3xl font-bold text-rose-700">
                                        ₹{totalOfflineCost.toLocaleString()}
                                    </div>
                                    <div className="text-[11px] text-gray-500 mt-1">~1 to 2 weeks result delay</div>
                                </div>
                            </div>

                            {/* CoachOne Method */}
                            <div className="bg-teal-50/60 border-2 border-[#01696f]/40 rounded-2xl p-5 flex flex-col justify-between shadow-sm">
                                <div>
                                    <div className="text-[11px] font-bold text-[#01696f] uppercase tracking-wider mb-1">
                                        With CoachOne
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Digital Exam Hub</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                        {basePlanName} Plan (₹{basePlanPrice.toLocaleString()}) + {totalEvaluatedPages.toLocaleString()} pages @ ₹1.50/page.
                                    </p>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Total Monthly Cost:</div>
                                    <div className="text-2xl sm:text-3xl font-bold text-[#01696f]">
                                        ₹{Math.round(totalCoachOneCost).toLocaleString()}
                                    </div>
                                    <div className="text-[11px] text-[#01696f] font-semibold mt-1">✓ Same-day WhatsApp reports</div>
                                </div>
                            </div>
                        </div>

                        {/* Net Monthly Value Callout */}
                        <div className="bg-gradient-to-r from-[#01696f] via-[#015e63] to-[#014d52] border border-teal-600 rounded-2xl p-6 shadow-xl text-white">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <span className="text-xs text-teal-100 font-bold uppercase tracking-wider">
                                        Estimated Monthly ROI &amp; Time Saved
                                    </span>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                                        ₹{netMonthlySavings.toLocaleString()}
                                        <span className="text-sm font-normal text-teal-100 ml-2">saved / month</span>
                                    </div>
                                    <p className="text-xs text-teal-50 mt-1">
                                        Plus ~<strong>{estimatedTeacherHoursSaved} teacher hours</strong> saved from manual paper correction each month.
                                    </p>
                                </div>
                                <Link
                                    to="/book-demo"
                                    className="bg-white text-[#01696f] hover:bg-teal-50 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-center transition-all whitespace-nowrap shadow-md flex items-center justify-center gap-1.5 flex-shrink-0"
                                >
                                    <Calendar className="w-4 h-4 text-[#01696f]" />
                                    Book Free Pilot
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PRICING_COMPARISON_GROUPS = [
    {
        category: "Core Limits & Capacity",
        rows: [
            { feature: "Price", starter: "₹999/mo", growth: "₹1,999/mo", scale: "₹4,499/mo", enterprise: "Custom" },
            { feature: "Students", starter: "Up to 75", growth: "Up to 200", scale: "Up to 500", enterprise: "500+" },
            { feature: "Batches", starter: "Up to 5", growth: "Up to 15", scale: "Unlimited", enterprise: "Unlimited" },
            { feature: "Teachers/Admins", starter: "2", growth: "5", scale: "15", enterprise: "Custom" },
        ]
    },
    {
        category: "Coaching & Student Management",
        rows: [
            { feature: "Student Management", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Batch Management", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Attendance", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Student Portal", starter: true, growth: true, scale: true, enterprise: true },
        ]
    },
    {
        category: "Tests & Question Bank",
        rows: [
            { feature: "MCQ Tests", starter: "Unlimited", growth: "Unlimited", scale: "Unlimited", enterprise: "Unlimited" },
            { feature: "MCQ DPP", starter: "Unlimited", growth: "Unlimited", scale: "Unlimited", enterprise: "Unlimited" },
            { feature: "Question Bank", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Test Scheduling", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Subjective Tests", starter: true, growth: true, scale: true, enterprise: true },
        ]
    },
    {
        category: "AI Handwritten Evaluation",
        rows: [
            { feature: "AI Handwritten Evaluation", starter: "₹1.50/page", growth: "₹1.50/page", scale: "₹1.50/page", enterprise: "₹1.50/page" },
            { feature: "Step-wise Marking", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "AI Feedback", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Teacher Review/Override", starter: true, growth: true, scale: true, enterprise: true },
        ]
    },
    {
        category: "Analytics & Mistake Tracking",
        rows: [
            { feature: "Student Analytics", starter: "Basic", growth: "Advanced", scale: "Advanced+", enterprise: "Custom" },
            { feature: "Batch Analytics", starter: "Basic", growth: "Advanced", scale: "Advanced+", enterprise: "Custom" },
            { feature: "Chapter/Topic Analytics", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "Mistake Analysis", starter: "Basic", growth: true, scale: "Advanced", enterprise: "Advanced" },
            { feature: "At-risk Student Detection", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "Performance Trends", starter: "Basic", growth: true, scale: "Advanced", enterprise: "Advanced" },
        ]
    },
    {
        category: "Reports & Parent Communication",
        rows: [
            { feature: "Automated Student Reports", starter: "Basic", growth: true, scale: true, enterprise: true },
            { feature: "Automated Parent Reports", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "WhatsApp Reports", starter: false, growth: true, scale: true, enterprise: true },
        ]
    },
    {
        category: "Institute Website & Admissions (CRM)",
        rows: [
            { feature: "Institute Microsite", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Admission Enquiry Forms", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Lead Management / CRM", starter: "Basic", growth: true, scale: "Advanced", enterprise: "Custom" },
            { feature: "Follow-up Tracking", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "Admission Conversion Analytics", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "Google Reviews Booster", starter: true, growth: true, scale: true, enterprise: true },
            { feature: "Local SEO Booster", starter: "Basic", growth: true, scale: "Advanced", enterprise: "Advanced" },
            { feature: "SEO Analytics", starter: false, growth: true, scale: true, enterprise: true },
        ]
    },
    {
        category: "AI Smart Features",
        rows: [
            { feature: "AI Test Generation", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "Smart Practice Recommendations", starter: false, growth: true, scale: true, enterprise: true },
            { feature: "Automated Performance Insights", starter: false, growth: true, scale: "Advanced", enterprise: "Advanced" },
        ]
    },
    {
        category: "Scale, Branding & Support",
        rows: [
            { feature: "API Access", starter: false, growth: false, scale: "Limited", enterprise: true },
            { feature: "Custom Branding", starter: false, growth: false, scale: true, enterprise: true },
            { feature: "Multiple Branches", starter: false, growth: false, scale: true, enterprise: true },
            { feature: "Dedicated Onboarding", starter: false, growth: false, scale: true, enterprise: true },
            { feature: "Priority Support", starter: "Standard", growth: "Standard", scale: "Priority", enterprise: "Dedicated" },
        ]
    }
];

const renderCellValue = (val, isGrowth = false) => {
    if (val === true) {
        return (
            <div className="flex items-center justify-center">
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${isGrowth ? 'bg-teal-500/20 text-[#01696f]' : 'bg-teal-50 text-[#01696f]'}`}>
                    <Check className="w-3.5 h-3.5" />
                </span>
            </div>
        );
    }
    if (val === false) {
        return (
            <div className="flex items-center justify-center">
                <Minus className="w-4 h-4 text-gray-300" />
            </div>
        );
    }
    return (
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
            isGrowth 
                ? 'text-[#01696f] font-bold bg-teal-50' 
                : 'text-gray-700'
        }`}>
            {val}
        </span>
    );
};

// --- CHAPTER 7: TRANSPARENT PRICING ---
const Pricing = () => {
    return (
        <section id="pricing" className="bg-[#f7f6f2] py-24 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                        Clear &amp; Simple Pricing
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
                        Affordable plans for coaching institutes of all sizes.
                    </h2>
                    <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed">
                        Zero hidden fees. AI handwritten copy checking at just ₹1.50/page across all plans.
                    </p>
                </div>

                {/* 4 Plan Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch mb-20">
                    {/* Starter */}
                    <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-4">
                                Starter Plan
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Starter</h3>
                            <p className="text-[#64748B] text-xs mb-5 min-h-[32px] leading-relaxed">For individual teachers &amp; small single-branch coaching classes.</p>
                            <div className="text-4xl font-bold text-[#0F172A] mb-2">
                                ₹999<span className="text-sm font-normal text-[#64748B]">/mo</span>
                            </div>
                            <div className="text-xs text-[#01696f] font-semibold mb-6 bg-teal-50 px-2.5 py-1 rounded-md inline-block border border-teal-200/60">
                                Up to 75 Students • 5 Batches
                            </div>
                            <ul className="space-y-3 mb-8 text-xs text-gray-700">
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> <span>Up to <strong>75 Students</strong></span></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> <span>Up to <strong>5 Batches</strong> &amp; 2 Admins</span></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> <span><strong>Unlimited MCQ Tests &amp; DPP</strong></span></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> <span>AI Evaluation: <strong>₹1.50 / page</strong></span></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Student &amp; Batch Management</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Student Portal &amp; Attendance</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Institute Microsite &amp; Leads</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Standard Support</li>
                            </ul>
                        </div>
                        <Link to="/book-demo" className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-xl font-bold text-xs text-center transition-colors">
                            Choose Starter
                        </Link>
                    </div>

                    {/* Growth */}
                    <div className="bg-white p-7 rounded-2xl border-2 border-[#01696f] shadow-xl text-gray-900 flex flex-col justify-between relative">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#01696f] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded shadow-sm whitespace-nowrap">
                            Most Popular for Institutes
                        </div>
                        <div>
                            <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-4">
                                Growth Plan
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Growth</h3>
                            <p className="text-gray-600 text-xs mb-5 min-h-[32px] leading-relaxed">For expanding coaching centers with multiple batches &amp; teachers.</p>
                            <div className="text-4xl font-bold text-[#0F172A] mb-2">
                                ₹1,999<span className="text-sm font-normal text-gray-500">/mo</span>
                            </div>
                            <div className="text-xs text-[#01696f] font-semibold mb-6 bg-teal-50 px-2.5 py-1 rounded-md inline-block border border-teal-200">
                                Up to 200 Students • 15 Batches
                            </div>
                            <ul className="space-y-3 mb-8 text-xs text-gray-700">
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> <span>Up to <strong>200 Students</strong></span></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> <span>Up to <strong>15 Batches</strong> &amp; 5 Admins</span></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> <span><strong>WhatsApp Parent Reports</strong></span></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> Chapter &amp; Topic Mistake Analysis</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> At-risk Student Detection</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> AI Test Generation &amp; Practice</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> Lead CRM &amp; Local SEO Booster</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 flex-shrink-0" /> <span>AI Evaluation: <strong>₹1.50 / page</strong></span></li>
                            </ul>
                        </div>
                        <Link to="/book-demo" className="w-full bg-[#01696f] hover:bg-[#015257] text-white py-3 rounded-xl font-bold text-xs text-center transition-all shadow-md">
                            Get Started with Growth
                        </Link>
                    </div>

                    {/* Scale */}
                    <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-4">
                                Scale Plan
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Scale</h3>
                            <p className="text-[#64748B] text-xs mb-5 min-h-[32px] leading-relaxed">For established academies scaling across multiple batches &amp; branches.</p>
                            <div className="text-4xl font-bold text-[#0F172A] mb-2">
                                ₹4,499<span className="text-sm font-normal text-[#64748B]">/mo</span>
                            </div>
                            <div className="text-xs text-[#01696f] font-semibold mb-6 bg-teal-50 px-2.5 py-1 rounded-md inline-block border border-teal-200/60">
                                Up to 500 Students • Unlimited Batches
                            </div>
                            <ul className="space-y-3 mb-8 text-xs text-gray-700">
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> <span>Up to <strong>500 Students</strong></span></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> <span><strong>Unlimited Batches</strong> &amp; 15 Admins</span></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> <span><strong>Custom Branding &amp; Multi-Branch</strong></span></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Advanced+ Analytics &amp; Insights</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Automated Performance Insights</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Dedicated Onboarding</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> Priority Support &amp; Limited API</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-600 mr-2.5 flex-shrink-0" /> <span>AI Evaluation: <strong>₹1.50 / page</strong></span></li>
                            </ul>
                        </div>
                        <Link to="/book-demo" className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-xl font-bold text-xs text-center transition-colors">
                            Choose Scale
                        </Link>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-4">
                                Enterprise Tier
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Enterprise</h3>
                            <p className="text-[#64748B] text-xs mb-5 min-h-[32px] leading-relaxed">For premier coaching networks with 500+ students &amp; custom setups.</p>
                            <div className="text-4xl font-bold text-[#0F172A] mb-2">
                                Custom
                            </div>
                            <div className="text-xs text-purple-700 font-semibold mb-6 bg-purple-50 px-2.5 py-1 rounded-md inline-block border border-purple-200/60">
                                500+ Students • Unlimited Scale
                            </div>
                            <ul className="space-y-3 mb-8 text-xs text-gray-700">
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> <span><strong>500+ Students</strong></span></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> <span><strong>Unlimited Batches &amp; Custom Admins</strong></span></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> <span><strong>Full API Access</strong></span></li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> Custom Branding &amp; Multi-Branch</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> Dedicated Account Manager</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> 24/7 Dedicated Support</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> Dedicated Onboarding</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2.5 flex-shrink-0" /> <span>AI Evaluation: <strong>₹1.50 / page</strong></span></li>
                            </ul>
                        </div>
                        <Link to="/book-demo" className="w-full bg-[#0F172A] hover:bg-black text-white py-3 rounded-xl font-bold text-xs text-center transition-colors">
                            Contact Enterprise
                        </Link>
                    </div>
                </div>

                {/* Worked example: what a 300-student academy pays in a month */}
                <div className="max-w-5xl mx-auto mb-20 grid md:grid-cols-12 gap-5 items-stretch">
                    <div className="md:col-span-5 co-sheet rounded-2xl p-7 sm:p-9 text-white overflow-hidden shadow-xl shadow-[#032b2e]/20">
                        <div className="relative z-10 pl-3">
                            <h3 className="font-display text-2xl sm:text-3xl leading-tight">
                                What a 300-student academy pays in a month
                            </h3>
                            <dl className="mt-8 space-y-5">
                                <div>
                                    <dt className="font-display text-3xl">300 students</dt>
                                    <dd className="text-sm text-teal-50/80">enrolled across your batches</dd>
                                </div>
                                <div>
                                    <dt className="font-display text-3xl">2 subjective tests</dt>
                                    <dd className="text-sm text-teal-50/80">per student, every month</dd>
                                </div>
                                <div>
                                    <dt className="font-display text-3xl">8 handwritten pages</dt>
                                    <dd className="text-sm text-teal-50/80">in each answer paper</dd>
                                </div>
                            </dl>
                            <p className="mt-8 text-sm text-teal-50/80 leading-relaxed border-t border-white/15 pt-5">
                                <strong className="text-white">What is an evaluated page?</strong> One page of a student's handwritten answer sheet that CoachOne processes. Blank pages and question sheets are never charged.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-7 bg-white rounded-2xl border border-gray-200 shadow-md p-7 sm:p-9 flex flex-col">
                        <div className="text-sm font-bold text-[#01696f]">Monthly bill</div>

                        <dl className="mt-5 divide-y divide-gray-100">
                            {[
                                { name: 'Scale plan', detail: 'Covers up to 500 students', amount: '₹4,499' },
                                { name: 'AI evaluation', detail: '300 × 2 tests × 8 pages = 4,800 pages, at ₹1.50 each', amount: '₹7,200' },
                                { name: 'MCQ tests and DPPs', detail: 'Unlimited, no evaluation fee', amount: '₹0' }
                            ].map((row) => (
                                <div key={row.name} className="flex items-baseline justify-between gap-4 py-4">
                                    <div>
                                        <dt className="font-bold text-[#032b2e]">{row.name}</dt>
                                        <dd className="text-sm text-gray-500 mt-0.5">{row.detail}</dd>
                                    </div>
                                    <div className="font-display text-xl text-[#032b2e] whitespace-nowrap">{row.amount}</div>
                                </div>
                            ))}
                        </dl>

                        <div className="mt-auto pt-5 border-t-2 border-dashed border-[#01696f]/40">
                            <div className="flex items-end justify-between gap-4">
                                <div className="font-bold text-[#032b2e]">Total per month</div>
                                <div className="font-display text-4xl sm:text-5xl text-[#01696f] leading-none">₹11,699</div>
                            </div>
                            <p className="mt-3 text-sm text-gray-600 text-right">About ₹39 per student per month, everything included.</p>
                        </div>
                    </div>
                </div>

                {/* Ecosystem Advantage: PrepOne Premium for Institute Students (Writeup Section 9) */}
                <div className="max-w-5xl mx-auto mb-20 bg-gradient-to-br from-teal-50/70 via-white to-teal-50/30 text-gray-900 rounded-2xl p-7 sm:p-10 border border-teal-200 shadow-md relative overflow-hidden">
                    <div className="relative z-10 grid md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-8">
                            <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-2">
                                PrepOne Ecosystem Advantage
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3 leading-tight">
                                Give your students PrepOne Premium practice material.
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                                Participating CoachOne coaching institutes can give their enrolled batches access to PrepOne Premium. Students get verified board PYQs, chapter-wise adaptive practice, and step-by-step model solutions directly on their phones under your institute's batch umbrella.
                            </p>
                            <div className="flex flex-wrap gap-4 text-xs text-gray-700 font-medium">
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#01696f]" /> 10+ Years Board PYQs</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#01696f]" /> Auto-sync with Institute Batches</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#01696f]" /> Zero paper printing for homework</span>
                            </div>
                        </div>
                        <div className="md:col-span-4 bg-white border border-teal-200/80 rounded-2xl p-5 text-center shadow-sm">
                            <div className="text-xs text-[#01696f] uppercase tracking-wider font-bold mb-1">Student Pitch Advantage</div>
                            <div className="text-xl font-bold text-[#0F172A] mb-1">A Modern Edge</div>
                            <p className="text-[11px] text-gray-600 mb-4 leading-relaxed">
                                Tell prospective parents during admissions that your academy provides daily digital exam practice &amp; instant AI checks.
                            </p>
                            <Link to="/book-demo" className="inline-block w-full bg-[#01696f] hover:bg-[#015257] text-white py-2.5 rounded-xl font-bold text-xs transition-colors shadow-sm">
                                Ask About Student Access
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Complete Feature Comparison Table */}
                <div className="mt-20 max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0F172A]">
                            Detailed Feature Comparison
                        </h3>
                        <p className="text-gray-600 text-sm mt-2">
                            Compare all 42 features side-by-side across Starter, Growth, Scale, and Enterprise.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50/70">
                                        <th className="p-4 sm:p-5 text-sm font-bold text-gray-900 w-[32%] sticky left-0 bg-gray-50/90 backdrop-blur-sm z-10">
                                            Feature
                                        </th>
                                        <th className="p-4 sm:p-5 text-center text-sm font-bold text-gray-900 w-[17%]">
                                            <div>Starter</div>
                                            <div className="text-xs font-normal text-[#01696f] mt-0.5">₹999/mo</div>
                                        </th>
                                        <th className="p-4 sm:p-5 text-center text-sm font-bold text-[#01696f] w-[17%] bg-teal-50/50">
                                            <div className="inline-flex items-center gap-1">
                                                <span>Growth</span>
                                                <span className="text-[9px] bg-[#01696f] text-white px-1.5 py-0.5 rounded font-bold">Popular</span>
                                            </div>
                                            <div className="text-xs font-normal text-[#01696f] mt-0.5">₹1,999/mo</div>
                                        </th>
                                        <th className="p-4 sm:p-5 text-center text-sm font-bold text-gray-900 w-[17%]">
                                            <div>Scale</div>
                                            <div className="text-xs font-normal text-[#01696f] mt-0.5">₹4,499/mo</div>
                                        </th>
                                        <th className="p-4 sm:p-5 text-center text-sm font-bold text-gray-900 w-[17%]">
                                            <div>Enterprise</div>
                                            <div className="text-xs font-normal text-[#01696f] mt-0.5">Custom</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {PRICING_COMPARISON_GROUPS.map((group, gIdx) => (
                                        <React.Fragment key={gIdx}>
                                            <tr className="bg-gray-100/60 border-y border-gray-200">
                                                <td colSpan={5} className="py-2.5 px-4 sm:px-5 text-xs font-bold uppercase tracking-wider text-[#01696f]">
                                                    {group.category}
                                                </td>
                                            </tr>
                                            {group.rows.map((row, rIdx) => (
                                                <tr key={rIdx} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                                    <td className="p-3.5 sm:p-4 text-xs sm:text-sm font-medium text-gray-800 sticky left-0 bg-white z-10 border-r border-gray-100 sm:border-r-0">
                                                        {row.feature}
                                                    </td>
                                                    <td className="p-3.5 sm:p-4 text-center">
                                                        {renderCellValue(row.starter, false)}
                                                    </td>
                                                    <td className="p-3.5 sm:p-4 text-center bg-teal-50/30">
                                                        {renderCellValue(row.growth, true)}
                                                    </td>
                                                    <td className="p-3.5 sm:p-4 text-center">
                                                        {renderCellValue(row.scale, false)}
                                                    </td>
                                                    <td className="p-3.5 sm:p-4 text-center">
                                                        {renderCellValue(row.enterprise, false)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Bottom Assistance Callout */}
                <div className="mt-14 bg-white rounded-2xl p-6 border border-gray-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                    <div>
                        <h4 className="font-bold text-gray-900 text-base">Need help choosing the right plan for your institute?</h4>
                        <p className="text-gray-600 text-xs mt-0.5">Talk to our team for a personalized 20-minute walkthrough of CoachOne.</p>
                    </div>
                    <Link to="/book-demo" onClick={() => trackCta('pricing')} className="bg-[#0F172A] hover:bg-black text-white text-xs font-bold px-5 py-3 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" /> Book a Demo
                    </Link>
                </div>
            </div>
        </section>
    );
};

const COACHONE_FAQS = [
    {
        q: "What counts as an evaluated page?",
        a: "An evaluated page is counted only when CoachOne processes a student's handwritten answer-sheet page. Unused blank pages, instruction covers, and question paper sheets are never billed. You only pay ₹1.50 for actual answer pages evaluated."
    },
    {
        q: "Do I have to conduct my tests inside CoachOne, or can I keep using our existing paper-based tests?",
        a: "You can keep conducting your tests exactly as you do today! You do not need to change your physical classroom routines. Students can write on standard physical paper copies and upload photos via the PrepOne student app, or your office staff can batch scan papers into a single PDF. CoachOne handles the rest."
    },
    {
        q: "Does CoachOne replace our teachers?",
        a: "No, absolutely not. AI assists the teacher, it does not replace the teacher. CoachOne handles the repetitive, time-consuming mechanical tasks of checking hundreds of pages, verifying formula steps, and tabulating marks. Teachers retain full control to review, edit, or override any mark with 1 click, freeing their time for mentoring and actual classroom teaching."
    },
    {
        q: "Are MCQ tests and Daily Practice Problems (DPPs) included?",
        a: "Yes. Unlimited MCQ tests, online practice quizzes, and daily practice problem sheets (DPPs) are included free across all plans. There is zero per-page or evaluation fee for any objective/MCQ test."
    },
    {
        q: "How does AI evaluate cursive student handwriting and step-marking?",
        a: "Our vision model is specifically trained on Indian student handwriting across CBSE, ICSE, and state board patterns. It checks solutions against step-by-step marking rubrics, awarding partial credit for correct theorem recall, formula substitutions, and units, and highlights specific calculation slips."
    },
    {
        q: "Can I create an institute website and manage admission leads?",
        a: "Yes! Every CoachOne plan comes with an Institute Microsite builder. You can showcase faculty profiles, course schedules, and past topper ranks. Any prospective student or parent who fills out the enquiry form appears immediately in your built-in Admissions CRM pipeline to track through counselling to enrollment."
    },
    {
        q: "How does the Google Reviews Booster work, and do you guarantee rankings?",
        a: "The review booster prompts satisfied parents and students to leave 5-star ratings on your Google Business Profile after strong test scores or positive milestones. While we cannot guarantee exact Google search ranks (since local search algorithms factor in location, competition, and age of profile), consistent authentic 5-star reviews significantly improve your local discovery and parent trust."
    },
    {
        q: "Can our enrolled students access PrepOne Premium practice material?",
        a: "Yes. Institutes subscribed to CoachOne can grant their students access to PrepOne Premium. Students get access to 10+ years of solved board PYQs, adaptive smart practice, and model solutions directly inside their app linked to your institute batch code."
    },
    {
        q: "What happens if our institute grows beyond its current student limit?",
        a: "You can easily upgrade to the next tier at any point during your subscription with pro-rated billing. Your student history, batches, questions, and test archives remain completely intact."
    },
    {
        q: "Can we try CoachOne before subscribing?",
        a: "Yes. You can book a 20-minute live demonstration or start a guided free pilot with your actual batch papers to experience how the test builder, handwritten copy checking, and WhatsApp reports work firsthand."
    }
];

// --- FAQ ACCORDION ---
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="bg-white py-24 border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                        Frequently Asked Questions
                    </div>
                    <h2 className="font-display text-4xl font-bold text-[#0F172A]">
                        Everything you need to know.
                    </h2>
                </div>

                <div className="space-y-4">
                    {COACHONE_FAQS.map((faq, i) => (
                        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-6 text-left font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-base sm:text-lg pr-4">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform ${openIndex === i ? 'rotate-180 text-[#01696f]' : ''}`} />
                            </button>
                            {openIndex === i && (
                                <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- EPILOGUE: THE NEXT CHAPTER (FINAL CTA) ---
const BottomCTA = () => (
    <section className="co-sheet text-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
                <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
                    See CoachOne on your own question papers.
                </h2>
                <p className="mt-6 text-lg text-teal-50/90 leading-relaxed max-w-2xl">
                    In 20 minutes we run a real handwritten answer sheet through the evaluation, show the batch report it produces, and quote a price for your student count. Prefer to test first? Ask us for a free pilot with your own batch papers.
                </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
                <DemoLink location="final" className={`${BTN_ON_TEAL} text-lg`}>
                    <Calendar className="w-5 h-5 mr-3" />
                    Book a 20-minute demo
                </DemoLink>
                <p className="mt-4 text-sm text-teal-100/75">We reply within 24 hours.</p>
            </div>
        </div>
    </section>
);

export default function CoachOne() {
    const demoRef = useRef(null);

    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <SEO
                title="CoachOne | All-in-One Software for Coaching Institutes & Academies"
                description="Complete software for coaching institutes. AI handwritten copy checking with step marks, test paper generator with a 1 lakh+ verified question bank, student mistake analysis, and automated WhatsApp parent report cards."
                keywords="coaching institute software, AI copy checking, test paper generator, CBSE step marking software, coaching CRM, parent WhatsApp report cards, coaching ERP India"
                canonicalUrl="https://solviq.in/coachone"
                schema={[
                    buildCoachOneSaasSchema(),
                    buildFaqSchema(COACHONE_FAQS),
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'CoachOne', url: '/coachone' }
                    ])
                ]}
            />
            <Navbar />
            <main className="coachone">
                <Hero />
                <FactStrip />
                <ChangeSection />
                <DashboardDemo demoRef={demoRef} />
                <WeeklyStorySection />
                <DemoBand
                    location="after_tour"
                    title="Want to see this on your own question papers?"
                    note="A live walkthrough with your subjects, board and batch size."
                />
                <TelemetrySpotlight />
                <GrowthSuiteSection />
                <ROICalculatorSection />
                <Pricing />
                <FAQ />
                <BottomCTA />
            </main>
            <StickyDemoBar />
            <BackendStatusBadge />
            <Footer />
        </div>
    );
}
