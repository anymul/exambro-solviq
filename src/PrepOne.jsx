import { useEffect, useRef, useState } from 'react';
import {
    Check,
    PlayCircle,
    Scan,
    Target,
    BookOpen,
    BrainCircuit,
    ChevronDown,
    TrendingUp,
    FileText,
    Clock,
    RotateCw,
    Star,
    X
} from 'lucide-react';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';
import SEO from './componenets/SEO';
import { DownloadLink, SectionHeading, AnswerSheet, PhoneShot, CtaBand, Hl } from './componenets/prepone/ui';
import { CARD_BG, primaryButton } from './componenets/prepone/tokens';
import BackendStatusBadge from './componenets/BackendStatusBadge';
import {
    buildPrepOneAppSchema,
    buildFaqSchema,
    buildBreadcrumbSchema
} from './componenets/Schema';

import homescreen from './assets/UI_Home_Feed.png';
import scannerEvaluationImg from './assets/scanner_evaluation.png';
import mockTestLibraryImg from './assets/mock_test_library.png';
import postTestAnalysisImg from './assets/post_test_analysis.png';
import pyqAnalyticsImg from './assets/pyq_analytics.png';

// =========================================================================
// 1. HERO: a handwritten answer being marked
// =========================================================================
const Hero = () => (
    <section data-scrub="hero" className="graph-paper relative overflow-hidden bg-brand pb-20 pt-28 text-white lg:flex lg:min-h-[100svh] lg:items-center lg:pb-16 lg:pt-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:px-8">
            <div>
                <span className="sticker-sm mb-6 inline-block -rotate-2 bg-white px-3 py-1.5 text-xs font-extrabold text-ink">
                    Built by IIT Gandhinagar alumni
                </span>
                <h1 className="font-display lining-nums text-balance text-[2.6rem] font-bold leading-[1.08] tracking-tight sm:text-6xl">
                    Write the answer by hand. Get it{' '}
                    <span className="bg-sun px-2 text-ink [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
                        marked in 60 seconds.
                    </span>
                </h1>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                    PrepOne reads your handwritten board answers, gives step marks the way an examiner would, and picks your next questions from the topics where you lost marks.
                </p>

                <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                    <DownloadLink placement="hero" className={`${primaryButton} w-full sm:w-auto`}>
                        <PlayCircle className="h-5 w-5" />
                        Get PrepOne on Google Play
                    </DownloadLink>
                    <a href="#how" className="text-sm font-bold text-white underline decoration-sun decoration-2 underline-offset-4 hover:text-sun">
                        See how an answer gets marked
                    </a>
                </div>
                <p className="mt-3 text-sm text-white/75">Free to download. Android only for now.</p>

                <ul className="mt-9 flex flex-wrap gap-3">
                    {[
                        ['CBSE Class 12', 'bg-white', '-rotate-1'],
                        ['Bihar Board Class 10 and 12', 'bg-aqua', 'rotate-1'],
                        ['Hindi and English medium', 'bg-coral', '-rotate-1']
                    ].map(([label, bg, rot]) => (
                        <li key={label} className={`sticker-sm px-3.5 py-1.5 text-xs font-extrabold text-ink ${bg} ${rot}`}>
                            {label}
                        </li>
                    ))}
                </ul>
                <p data-scrub="hint" className="mt-8 hidden items-center gap-2 text-sm font-extrabold text-sun lg:flex">
                    <ChevronDown className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                    Scroll to mark the answer
                </p>
            </div>

            <div className="relative mx-auto w-full max-w-[400px] lg:max-w-[520px] lg:pb-6">
                <AnswerSheet />
                <div data-speed="-130" className="sticker absolute -right-1 -top-8 flex h-20 w-20 rotate-12 flex-col items-center justify-center rounded-full bg-sun text-ink sm:-right-6 sm:h-24 sm:w-24">
                    <span className="font-display lining-nums text-3xl font-bold leading-none sm:text-4xl">60</span>
                    <span className="text-[11px] font-extrabold">seconds</span>
                </div>
                <span data-speed="-50" className="sticker-sm absolute -bottom-11 left-3 -rotate-3 bg-coral px-3 py-1.5 text-sm font-extrabold text-ink sm:-left-2">
                    Step marks, like an examiner
                </span>
                <div data-speed="-100" className="absolute -bottom-8 -right-4 hidden w-[150px] rotate-6 overflow-hidden rounded-[1.75rem] border-[5px] border-ink bg-white shadow-[6px_6px_0_0_#16193A] sm:block lg:-right-10 lg:w-[170px]">
                    <img src={homescreen} alt="PrepOne app home screen" width="1080" height="2400" loading="eager" decoding="async" className="block h-auto w-full" />
                </div>
            </div>
        </div>
    </section>
);

// =========================================================================
// 1b. SUBJECT TICKER + NUMBERS
// =========================================================================
const TICKER = [
    'Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'गणित', 'विज्ञान', 'हिंदी', 'इतिहास',
    'CBSE Class 12', 'BSEB Class 10', 'BSEB Class 12', 'Mock tests', 'Past papers', 'Handwritten marking'
];

const Ticker = () => (
    <div className="marquee border-y-2 border-ink bg-sun py-3" aria-hidden="true">
        <div className="marquee-track">
            {[...TICKER, ...TICKER].map((item, i) => (
                <span key={i} className="flex items-center gap-6 pr-6 font-display text-xl font-bold text-ink sm:text-2xl">
                    {item}
                    <Star className="h-4 w-4 fill-ink" />
                </span>
            ))}
        </div>
    </div>
);

const STATS = [
    { value: '60 sec', label: 'to mark a handwritten answer', bg: 'bg-butter', rot: 'md:-rotate-1' },
    { value: '10+ years', label: 'of CBSE and Bihar Board papers', bg: 'bg-blush', rot: 'md:rotate-1' },
    { value: '50,000+', label: 'exam questions and PYQs', bg: 'bg-mintwash', rot: 'md:-rotate-1' },
    { value: '2 languages', label: 'Hindi and English explanations', bg: 'bg-skywash', rot: 'md:rotate-1' }
];

const Stats = () => (
    <section className="bg-white pb-6 pt-16 lg:pt-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:px-8">
            {STATS.map((stat) => (
                <div key={stat.value} className={`sticker sticker-hover p-4 sm:p-6 ${stat.bg} ${stat.rot}`}>
                    <div className="font-display lining-nums text-2xl font-bold leading-tight text-ink sm:text-4xl">{stat.value}</div>
                    <div className="mt-1 text-sm font-medium text-ink/75">{stat.label}</div>
                </div>
            ))}
        </div>
    </section>
);

// =========================================================================
// 2. HOW IT WORKS (a real sequence, so numbered)
// =========================================================================
const STEPS = [
    {
        icon: Target,
        title: 'Pick a question',
        desc: 'Practise questions matched to your CBSE or Bihar Board syllabus and chapter weightage.',
        bg: 'bg-butter'
    },
    {
        icon: FileText,
        title: 'Write it by hand',
        desc: 'Answer on paper with a pen, the way you will in the 3-hour board exam hall.',
        bg: 'bg-blush'
    },
    {
        icon: Scan,
        title: 'Snap a photo',
        desc: 'PrepOne checks it in about 60 seconds, awards step marks and flags missing formulas, units and diagrams.',
        bg: 'bg-mintwash'
    },
    {
        icon: RotateCw,
        title: 'Fix what you lost',
        desc: 'Weak topics come back as targeted questions and spaced revision, so they stay with you until exam day.',
        bg: 'bg-skywash'
    }
];

const HowItWorks = () => (
    <section id="how" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={<>How one <span className="marker">answer gets marked</span></>}>
                Board exams are written by hand and marked step by step. Practice that skips the handwriting leaves marks on the table.
            </SectionHeading>

            <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {STEPS.map((step, i) => {
                    const Icon = step.icon;
                    return (
                        <li
                            key={step.title}
                            className={`sticker sticker-hover relative p-6 pt-9 ${step.bg} ${i % 2 ? 'lg:rotate-1' : 'lg:-rotate-1'}`}
                        >
                            <span className="absolute -top-5 left-5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-ink font-display text-2xl font-bold leading-none text-white">
                                {i + 1}
                            </span>
                            <Icon className="h-8 w-8 text-ink" strokeWidth={2.2} aria-hidden="true" />
                            <h3 className="mt-4 text-xl font-extrabold text-ink">{step.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-ink/80">{step.desc}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    </section>
);

// =========================================================================
// 3. FEATURES (tabbed, all panels stay in the DOM for crawlers)
// =========================================================================
const DiagnosticMock = () => (
    <div className="sticker w-full max-w-sm bg-white p-5">
        <div className="mb-4 flex items-start justify-between gap-3 border-b-2 border-dashed border-rule pb-4">
            <div>
                <p className="text-xs font-bold text-brand">ABHYAS+ diagnosis</p>
                <h4 className="text-base font-extrabold text-ink">Physics: Ray Optics</h4>
            </div>
            <span className="rounded-md border-2 border-ink bg-sun px-2.5 py-1 text-xs font-extrabold text-ink">Live path</span>
        </div>

        <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border-2 border-ink bg-mintwash p-3.5 text-xs">
                <div>
                    <span className="block font-bold text-ink">Lens Formula and Magnification</span>
                    <span className="text-[11px] text-ink/60">14 questions mastered</span>
                </div>
                <span className="font-extrabold text-mint">92% Strong</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border-2 border-ink bg-butter p-3.5 text-xs">
                <div>
                    <span className="block font-bold text-ink">Sign Convention Traps</span>
                    <span className="text-[11px] text-ink/60">Convex vs Concave mirror slips</span>
                </div>
                <span className="font-extrabold text-ink">58% Review</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border-2 border-ink bg-blush p-3.5 text-xs">
                <div>
                    <span className="block font-bold text-ink">Lens Maker&apos;s Derivation</span>
                    <span className="text-[11px] text-ink/60">Surface 2 refraction sign slips</span>
                </div>
                <span className="font-extrabold text-pen">34% Priority</span>
            </div>
        </div>

        <div className="mt-5 rounded-lg border-2 border-dashed border-ink/40 p-4 text-xs">
            <p className="mb-1 font-extrabold text-ink">Next in your queue</p>
            <p className="text-[11px] leading-relaxed text-ink/70">
                3 targeted questions on <strong>Thin Lens Surface Refraction</strong>. Finish them to lift your Board Readiness by 8%.
            </p>
        </div>
    </div>
);

const FEATURES = [
    {
        id: 'marking',
        tab: 'Handwritten marking',
        icon: Scan,
        accent: 'bg-sun',
        chips: ['+1 for every correct step', 'Missing unit: −½'],
        title: 'Marks and feedback on your handwriting in 60 seconds',
        intro: 'Board exams are written exams. Write your solution on paper, photograph it in the PrepOne app, and get step-by-step marking based on official CBSE and Bihar Board answer keys.',
        points: [
            ['Partial step marking', 'Earn marks for correct formulas and derivation steps even if your final arithmetic has a typo.'],
            ['Presentation and unit checks', 'Get alerts for missing SI units, omitted diagrams, or unclear step transitions.'],
            ['Hinglish and English feedback', 'Read the explanation in the language you are most comfortable with.']
        ],
        visual: <PhoneShot src={scannerEvaluationImg} alt="PrepOne AI handwritten answer scanner and evaluation screen" />
    },
    {
        id: 'practice',
        tab: 'Adaptive practice',
        icon: BrainCircuit,
        accent: 'bg-coral',
        chips: ['Weak topic found', 'Next: 3 questions'],
        title: 'Practise what you actually need',
        intro: 'No two students have the same gaps. ABHYAS+ tracks your speed, accuracy and mistake types, then builds a study path that turns weak concepts into scoring ones.',
        points: [
            ['Weak topic detection', 'Flags whether you are dropping marks to conceptual gaps, derivation steps, or arithmetic.'],
            ['Calibrated difficulty', 'Starts at your current mastery and levels up to board exam standard.']
        ],
        visual: <DiagnosticMock />
    },
    {
        id: 'mocks',
        tab: 'Mock tests',
        icon: Clock,
        accent: 'bg-aqua',
        chips: ['3-hour timer', 'Sections A to E'],
        title: 'Sit the 3-hour paper before the real one',
        intro: 'Chapter practice builds confidence; full-length mocks build exam readiness. Papers follow the latest CBSE and Bihar Board blueprints, Sections A through E.',
        points: [
            ['Latest exam patterns', 'Includes assertion-reasoning, case-based questions, and the 50% objective ratio for Bihar Board.'],
            ['Realistic countdown', 'A running timer teaches you to split time between long derivations and short questions.']
        ],
        visual: <PhoneShot src={mockTestLibraryImg} alt="PrepOne chapter and full syllabus mock test library" />
    },
    {
        id: 'pyqs',
        tab: 'Past papers',
        icon: BookOpen,
        accent: 'bg-sky',
        chips: ['10+ years of papers', 'Sorted by chapter'],
        title: 'See how your board really asks questions',
        intro: 'Ten years of CBSE and BSEB papers, sorted by chapter and weightage, so you know which topics carry the most marks.',
        points: [
            ['Chapter-wise PYQ drill', 'Solve every question that has appeared in your board for each chapter.'],
            ['Model handwritten solutions', 'Study topper-grade step presentation and diagram formatting.']
        ],
        visual: <PhoneShot src={pyqAnalyticsImg} alt="PrepOne previous year questions with chapter-wise analytics" />
    },
    {
        id: 'progress',
        tab: 'Progress and revision',
        icon: TrendingUp,
        accent: 'bg-grape',
        chips: ['Board Readiness Score', 'Spaced reminders'],
        title: 'Know where you stand, and keep formulas fresh',
        intro: 'Cramming 500 pages before the exam leads to panic. PrepOne uses recall flashcards and spaced reminders so concepts stay in memory.',
        points: [
            ['Board Readiness Score', 'One calibrated score that predicts your board percentage from real test performance.'],
            ['Revision reminders', 'Timely prompts to review formulas and reactions before they slip.']
        ],
        visual: <PhoneShot src={postTestAnalysisImg} alt="PrepOne post-test analysis and progress screen" />
    }
];

const FeaturesShowcase = () => {
    const [active, setActive] = useState(FEATURES[0].id);

    const onKeyDown = (e) => {
        const idx = FEATURES.findIndex((f) => f.id === active);
        if (e.key === 'ArrowRight') setActive(FEATURES[(idx + 1) % FEATURES.length].id);
        if (e.key === 'ArrowLeft') setActive(FEATURES[(idx - 1 + FEATURES.length) % FEATURES.length].id);
    };

    return (
        <section id="features" className="bg-lilac py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <SectionHeading title={<>Everything for board prep, <span className="marker">in one app</span></>}>
                    Built for CBSE and BSEB students. No video lectures to sit through. Just practice, marking and feedback.
                </SectionHeading>

                <div
                    role="tablist"
                    aria-label="PrepOne features"
                    onKeyDown={onKeyDown}
                    className="-mx-4 mt-10 flex gap-3 overflow-x-auto px-4 pb-3 pt-1 sm:mx-0 sm:flex-wrap sm:px-0"
                >
                    {FEATURES.map((f) => {
                        const Icon = f.icon;
                        const selected = active === f.id;
                        return (
                            <button
                                key={f.id}
                                id={`tab-${f.id}`}
                                role="tab"
                                type="button"
                                aria-selected={selected}
                                aria-controls={`panel-${f.id}`}
                                tabIndex={selected ? 0 : -1}
                                onClick={() => setActive(f.id)}
                                className={`sticker-sm flex shrink-0 cursor-pointer items-center gap-2 px-4 py-2.5 text-sm font-extrabold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                                    selected ? `${f.accent} translate-x-px translate-y-px` : 'bg-white hover:bg-butter'
                                }`}
                            >
                                <Icon className="h-4 w-4" aria-hidden="true" />
                                {f.tab}
                            </button>
                        );
                    })}
                </div>

                {FEATURES.map((f) => (
                    <div
                        key={f.id}
                        id={`panel-${f.id}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${f.id}`}
                        hidden={active !== f.id}
                        className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16"
                    >
                        <div>
                            <h3 className="font-display lining-nums text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl">{f.title}</h3>
                            <p className="mt-4 text-base leading-relaxed text-ink/75">{f.intro}</p>
                            <dl className="mt-7 space-y-3">
                                {f.points.map(([term, desc]) => (
                                    <div key={term} className="sticker-sm flex gap-3 bg-white p-4">
                                        <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink ${f.accent}`}>
                                            <Check className="h-3.5 w-3.5 text-ink" strokeWidth={3.5} aria-hidden="true" />
                                        </span>
                                        <div>
                                            <dt className="text-sm font-extrabold text-ink">{term}</dt>
                                            <dd className="mt-0.5 text-sm leading-relaxed text-ink/70">{desc}</dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className="relative flex justify-center py-8">
                            <span
                                aria-hidden="true"
                                className={`absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink sm:h-[400px] sm:w-[400px] ${f.accent}`}
                            />
                            <div className="relative z-10 flex w-full max-w-sm justify-center">{f.visual}</div>
                            <span className="sticker-sm absolute left-0 top-12 z-20 -rotate-6 bg-white px-3 py-1.5 text-xs font-extrabold text-ink sm:left-2">
                                {f.chips[0]}
                            </span>
                            <span className="sticker-sm absolute bottom-12 right-0 z-20 rotate-3 bg-white px-3 py-1.5 text-xs font-extrabold text-ink sm:right-2">
                                {f.chips[1]}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// =========================================================================
// 4. SUBJECT CATALOG
// =========================================================================
const CATALOGS = {
    cbse12: {
        label: 'CBSE Class 12 Science',
        title: 'CBSE Class 12 Science',
        subtitle: 'Board exam pattern and full NCERT curriculum',
        medium: 'English medium',
        subjects: [
            { name: 'Physics', desc: 'Derivations, Ray/Wave Optics, Electrostatics, Magnetism & Modern Physics' },
            { name: 'Chemistry', desc: 'Organic Mechanisms, Physical Numericals, Coordination & Biomolecules' },
            { name: 'Mathematics', desc: 'Calculus, Vectors & 3D Geometry, Linear Programming & Matrices' },
            { name: 'Biology', desc: 'Genetics, Human Physiology, Biotechnology & Ecology' },
            { name: 'English Core', desc: 'Reading Comprehension, Note Making, Notice/Report Writing & Literature' },
            { name: 'Computer Science', desc: 'Python Programming, SQL Queries, Computer Networks' }
        ]
    },
    bseb10: {
        label: 'Bihar Board Class 10',
        title: 'Bihar Board (BSEB) Class 10',
        subtitle: 'Matriculation exam, 50% objective + 50% subjective',
        medium: 'Hindi & English medium',
        subjects: [
            { name: 'Mathematics (गणित)', desc: 'Real Numbers, Quadratic Equations, Trigonometry & Geometry proofs' },
            { name: 'Science (विज्ञान)', desc: 'Physics (भौतिकी), Chemistry (रसायन) & Biology (जीव विज्ञान)' },
            { name: 'Social Science (सामाजिक विज्ञान)', desc: 'History (इतिहास), Civics (नागरिक शास्त्र), Geography (भूगोल) & Economics (अर्थशास्त्र)' },
            { name: 'Hindi (हिंदी)', desc: 'गोधूलि भाग 2, वर्णिका भाग 2, व्याकरण एवं निबंध लेखन' },
            { name: 'English', desc: 'Panorama Part 2, Reading, Writing Skills & Grammar' },
            { name: 'Sanskrit (संस्कृत)', desc: 'पीयूषम् भाग 2, व्याकरण, पत्र लेखन एवं अनुवाद' }
        ]
    },
    bseb12: {
        label: 'Bihar Board Class 12',
        title: 'Bihar Board (BSEB) Class 12',
        subtitle: 'Intermediate Science & Arts, bilingual evaluation',
        medium: 'Hindi & English medium',
        subjects: [
            { name: 'Physics (भौतिकी)', desc: 'Complete 70-Mark Theory + 35 Objective OMR format' },
            { name: 'Chemistry (रसायनशास्त्र)', desc: 'Physical, Inorganic, Organic mechanisms & equations' },
            { name: 'Mathematics (गणित)', desc: 'Integration, Differential Equations, Matrices & Determinants' },
            { name: 'Biology (जीव विज्ञान)', desc: 'Genetics, Ecology, Reproductive Biology with diagrams' },
            { name: 'Hindi 100 Marks (हिंदी)', desc: 'दिगंत भाग 2, गद्य खंड, पद्य खंड एवं व्याकरण' },
            { name: 'English 100 Marks', desc: 'Rainbow Part 2, Story of English, Essays & Grammar' },
            { name: 'History (इतिहास)', desc: 'Ancient, Medieval & Modern Indian History' },
            { name: 'Political Science (राजनीति शास्त्र)', desc: 'Contemporary World Politics & Politics in India Since Independence' }
        ]
    }
};

const SubjectCatalog = () => {
    const [activeTab, setActiveTab] = useState('cbse12');
    const current = CATALOGS[activeTab];

    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <SectionHeading title={<>Find your <span className="marker">board and subjects</span></>}>
                    Pick your board to see the courses, question banks and mock papers waiting for you.
                </SectionHeading>

                <div role="tablist" aria-label="Boards" className="-mx-4 mt-10 flex gap-3 overflow-x-auto px-4 pb-3 pt-1 sm:mx-0 sm:flex-wrap sm:px-0">
                    {Object.entries(CATALOGS).map(([key, c]) => (
                        <button
                            key={key}
                            role="tab"
                            type="button"
                            aria-selected={activeTab === key}
                            onClick={() => setActiveTab(key)}
                            className={`sticker-sm shrink-0 cursor-pointer px-5 py-2.5 text-sm font-extrabold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                                activeTab === key ? 'translate-x-px translate-y-px bg-brand text-white' : 'bg-white text-ink hover:bg-butter'
                            }`}
                        >
                            {c.label}
                        </button>
                    ))}
                </div>

                <div className="mt-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <h3 className="text-2xl font-extrabold text-ink">{current.title}</h3>
                        <p className="mt-1 text-sm text-ink/65">
                            {current.subtitle}. {current.medium}.
                        </p>
                    </div>
                    <DownloadLink
                        placement={`subjects_${activeTab}`}
                        className="sticker inline-flex shrink-0 items-center justify-center bg-sun px-5 py-2.5 text-sm font-extrabold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                        Start practice free
                    </DownloadLink>
                </div>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {current.subjects.map((sub, i) => (
                        <li key={sub.name} style={{ '--i': i }} className={`pop-in sticker-sm sticker-hover p-5 ${CARD_BG[i % CARD_BG.length]}`}>
                            <h4 className="text-base font-extrabold text-ink">{sub.name}</h4>
                            <p className="mt-1.5 text-sm leading-relaxed text-ink/75">{sub.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

// =========================================================================
// 5. BEFORE / AFTER
// =========================================================================
const COMPARE_ROWS = [
    {
        feature: 'Practice format',
        before: 'Tapping multiple-choice questions on apps',
        after: 'Real paper & pen handwriting under exam conditions'
    },
    {
        feature: 'Answer checking',
        before: 'Wait 14 days for coaching copies with just total marks',
        after: 'Instant 60-sec AI step-by-step scoring & partial credits'
    },
    {
        feature: 'Step mistakes and units',
        before: 'No feedback on missing SI units, diagrams, or formula slips',
        after: 'Line-by-line flags showing exactly where you drop marks'
    },
    {
        feature: 'Topic selection',
        before: 'Randomly re-reading chapters you already find easy',
        after: 'ABHYAS+ AI assigns questions tailored to your exact weak links'
    },
    {
        feature: 'Revision routine',
        before: 'Last-minute panic cramming through 500 pages',
        after: 'Spaced flashcards & formula reminders that stick'
    },
    {
        feature: 'Exam day confidence',
        before: 'Uncertainty about paper timing and derivation presentation',
        after: 'Mastered 5+ full-length 3-hour board mock simulations'
    }
];

const Compare = () => (
    <section className="bg-butter py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={<>Why students score <span className="marker">higher with PrepOne</span></>}>
                Same syllabus, same hours. A different way of preparing.
            </SectionHeading>

            <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
                <div data-scrub="slide-left" className="sticker bg-blush p-6 sm:p-8">
                    <h3 className="inline-block -rotate-1 rounded-md border-2 border-ink bg-white px-3 py-1 text-base font-extrabold text-ink">
                        Without PrepOne
                    </h3>
                    <ul className="mt-6 space-y-5">
                        {COMPARE_ROWS.map((row) => (
                            <li key={row.feature} className="flex gap-3">
                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-coral">
                                    <X className="h-3.5 w-3.5 text-ink" strokeWidth={3.5} aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-sm font-extrabold text-ink">{row.feature}</p>
                                    <p className="mt-0.5 text-sm leading-relaxed text-ink/75">{row.before}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div data-scrub="slide-right" className="sticker bg-mintwash p-6 sm:p-8">
                    <h3 className="inline-block rotate-1 rounded-md border-2 border-ink bg-sun px-3 py-1 text-base font-extrabold text-ink">
                        With PrepOne
                    </h3>
                    <ul className="mt-6 space-y-5">
                        {COMPARE_ROWS.map((row) => (
                            <li key={row.feature} className="flex gap-3">
                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-aqua">
                                    <Check className="h-3.5 w-3.5 text-ink" strokeWidth={3.5} aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-sm font-extrabold text-ink">{row.feature}</p>
                                    <p className="mt-0.5 text-sm font-medium leading-relaxed text-ink">{row.after}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// =========================================================================
// 6. PRICING
// =========================================================================
const PLANS = [
    {
        name: '1 Week',
        price: '₹49',
        period: 'for 7 days',
        desc: 'Ideal for quick weekly unit test prep or testing the AI scanner.',
        highlight: false,
        features: [
            'Full access to all subjects',
            'AI Handwritten Answer Scans',
            'Chapter-wise PYQs',
            'MCQ speed drills',
            'Hinglish & English explanations'
        ]
    },
    {
        name: '1 Month',
        price: '₹199',
        period: 'per month',
        desc: 'Perfect for mastering complex chapters and term exams.',
        highlight: false,
        features: [
            'Everything in 1 Week plan',
            'Unlimited AI Step Evaluations',
            'ABHYAS+ Adaptive Diagnostic Engine',
            'Spaced Revision Flashcards',
            'Progress Analytics & Weak Topic Tracker'
        ]
    },
    {
        name: '3 Months',
        price: '₹499',
        period: 'for 3 months',
        desc: 'Ideal for term exams and comprehensive pre-board revision.',
        highlight: false,
        features: [
            'Everything in 1 Month plan',
            'Full-Length 3-Hour Mock Test Series',
            'Predicted Board Readiness Score',
            '10+ Years Solved PYQ Archive',
            'Priority AI evaluation processing'
        ]
    },
    {
        name: 'Board Pass',
        price: '₹699',
        period: 'until board exam completion',
        desc: 'Complete all-in-one exam season companion until results.',
        highlight: true,
        badge: 'Best value',
        features: [
            'Valid until your final board exam',
            'Unlimited AI handwritten scans',
            'All chapter tests & full board mocks',
            'Complete formula & reaction revision sheets',
            'Dedicated examiner step-marking rubric',
            'Complete confidence for 95%+ score'
        ]
    }
];

const PricingSection = () => (
    <section id="pricing" className="bg-skywash py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={<>Affordable plans. <span className="marker">Maximum board marks.</span></>}>
                Less than the cost of a single textbook. Start free and upgrade when you want unlimited AI handwritten checking.
            </SectionHeading>

            <div className="mt-16 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {PLANS.map((plan) => (
                    <div
                        key={plan.name}
                        className={`sticker relative flex flex-col p-6 ${
                            plan.highlight ? 'bg-brand text-white lg:-translate-y-4 lg:pb-10' : 'bg-white text-ink'
                        }`}
                    >
                        {plan.badge && (
                            <span className="sticker-sm absolute -top-4 right-4 rotate-6 bg-sun px-3 py-1 text-xs font-extrabold text-ink">
                                {plan.badge}
                            </span>
                        )}
                        <h3 className="text-xl font-extrabold">{plan.name}</h3>
                        <p className={`mt-1 text-sm lg:min-h-[4.5rem] ${plan.highlight ? 'text-white/80' : 'text-ink/65'}`}>{plan.desc}</p>

                        <div className={`mt-6 border-b-2 border-dashed pb-6 ${plan.highlight ? 'border-white/40' : 'border-ink/25'}`}>
                            <div className="font-display lining-nums text-5xl font-bold">{plan.price}</div>
                            <div className={`mt-1 text-sm lg:min-h-10 ${plan.highlight ? 'text-white/80' : 'text-ink/65'}`}>{plan.period}</div>
                        </div>

                        <ul className="mt-6 flex-1 space-y-3">
                            {plan.features.map((feat) => (
                                <li key={feat} className="flex items-start gap-2.5 text-sm">
                                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlight ? 'text-sun' : 'text-mint'}`} strokeWidth={3.5} />
                                    <span className={`font-medium ${plan.highlight ? 'text-white' : 'text-ink/85'}`}>{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <DownloadLink
                            placement={`pricing_${plan.name.toLowerCase().replace(/\s+/g, '_')}`}
                            className="sticker mt-8 block bg-sun py-3 text-center text-sm font-extrabold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                        >
                            Get started in the app
                        </DownloadLink>
                    </div>
                ))}
            </div>

            <p className="mt-12 text-sm text-ink/70">
                Free version available with daily questions & sample scans. Secure in-app activation via UPI, Cards, & NetBanking.
            </p>
        </div>
    </section>
);

// =========================================================================
// 7. FAQ
// =========================================================================
const PREPONE_FAQS = [
    {
        q: 'How does AI handwritten answer evaluation work?',
        a: 'Write your answers on physical paper using your regular pen. Take a clear photo using the PrepOne scanner. The AI extracts your handwriting, checks your formulas, derivations, diagrams, and numerical steps against official board mark schemes, and awards partial marks within 60 seconds.'
    },
    {
        q: 'Can PrepOne evaluate subjective answers and derivations?',
        a: 'Yes! PrepOne is built specifically for subjective board exams. It evaluates derivations, chemical reaction mechanisms, physics formulas, and step-by-step mathematical proofs, giving feedback on structure, presentation, and missing steps.'
    },
    {
        q: 'Does PrepOne support Bihar Board (BSEB) in Hindi medium?',
        a: 'Yes, absolutely. PrepOne provides dedicated support for both Hindi and English mediums for Bihar Board Class 10 (Matric) and Class 12 (Intermediate Science & Arts), including the 50% objective OMR format.'
    },
    {
        q: 'Is PrepOne only for MCQs?',
        a: 'No. While PrepOne includes thousands of objective questions for Section A speed drills, its core superpower is subjective handwritten answer checking and 3-hour full syllabus board simulations.'
    },
    {
        q: 'What is ABHYAS+?',
        a: 'ABHYAS+ is PrepOne’s adaptive practice engine. It analyzes your mistakes, determines whether errors are conceptual, mathematical, or presentation-based, and serves customized questions to fix your specific weak links.'
    },
    {
        q: 'Are previous year questions (PYQs) solved?',
        a: 'Yes. PrepOne contains 10+ years of official solved CBSE and Bihar Board questions sorted chapter-wise, complete with topper-style step solutions.'
    },
    {
        q: 'Is PrepOne really built by IITians?',
        a: 'Yes. PrepOne was developed by alumni of IIT Gandhinagar, combining rigorous pedagogical frameworks with state-of-the-art multimodal vision AI.'
    },
    {
        q: 'Can I use PrepOne for free?',
        a: 'Yes. You can download PrepOne free from Google Play and start practicing daily questions, chapter flashcards, and test sample AI handwritten scans before choosing a paid pass.'
    },
    {
        q: 'What is the Board Readiness Score?',
        a: 'The Board Readiness Score is a predictive index from 0 to 100 calculated using your mock test accuracy, derivation step completeness, and time pacing, giving you an accurate estimate of your upcoming board result.'
    },
    {
        q: 'Can coaching institutes connect with PrepOne?',
        a: 'Yes. Coaching centers using SolvIQ CoachOne can assign tests directly to students on the PrepOne app, providing automated institute-level evaluation and parent reports.'
    }
];

const FAQ = () => {
    const [open, setOpen] = useState(0);

    return (
        <section id="faq" className="bg-white py-20 lg:py-28">
            <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
                <SectionHeading title={<>Questions students <span className="marker">ask us</span></>}>
                    Everything about PrepOne and how it fits your board preparation.
                </SectionHeading>

                <div className="space-y-3">
                    {PREPONE_FAQS.map((faq, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={faq.q} className={`sticker-sm transition-colors ${isOpen ? 'bg-butter' : 'bg-white'}`}>
                                <h3>
                                    <button
                                        type="button"
                                        id={`faq-q-${i}`}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-a-${i}`}
                                        onClick={() => setOpen(isOpen ? -1 : i)}
                                        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                                    >
                                        <span className="text-base font-extrabold text-ink">{faq.q}</span>
                                        <ChevronDown
                                            className={`h-5 w-5 shrink-0 text-ink transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                            aria-hidden="true"
                                        />
                                    </button>
                                </h3>
                                <div
                                    id={`faq-a-${i}`}
                                    role="region"
                                    aria-labelledby={`faq-q-${i}`}
                                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-5 pb-5 text-sm leading-relaxed text-ink/80">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// =========================================================================
// 8. CLOSING CTA
// =========================================================================
// =========================================================================
// MAIN PAGE EXPORT
// =========================================================================
// Scroll-scrubbed choreography (GSAP ScrollTrigger). Every tween's progress is bound to the scroll position,
// so scrolling back rewinds it. It only runs after hydration and never with reduced motion, so the
// server-rendered page stays fully visible without it.
function buildMarkSequence(tl, sheet) {
    const marks = sheet.querySelectorAll('.pen-mark');
    const draws = sheet.querySelectorAll('.pen-draw');
    const stamp = (el, at) =>
        tl.fromTo(el, { opacity: 0, scale: 1.8, rotate: -12 }, { opacity: 1, scale: 1, rotate: 0, duration: 0.08, ease: 'back.out(2)' }, at);
    const stroke = (el, at) => tl.fromTo(el, { strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: 0.12, ease: 'none' }, at);

    stamp(marks[0], 0.06);
    stamp(marks[1], 0.2);
    stroke(draws[0], 0.32);
    stamp(marks[2], 0.46);
    tl.fromTo(marks[3], { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.1, ease: 'power2.out' }, 0.6);
    stamp(marks[4], 0.72);
    stroke(draws[1], 0.8);
    tl.to({}, { duration: 0.08 }, 0.92); // pad so the timeline spans the whole scroll range
}

function useScrollChoreography(rootRef) {
    useEffect(() => {
        const root = rootRef.current;
        if (!root) return undefined;

        let cancelled = false;
        let teardown = null;

        // GSAP is loaded in the browser only: it needs the DOM, and this keeps it out of the prerender and the first bundle.
        Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
            if (cancelled) return;

            gsap.registerPlugin(ScrollTrigger);
            const mm = gsap.matchMedia();

            mm.add(
                {
                    motion: '(prefers-reduced-motion: no-preference)',
                    desk: '(min-width: 1024px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)'
                },
                (context) => {
                    const { motion, desk } = context.conditions;
                    if (!motion) return undefined;

                    const $ = (selector) => [...root.querySelectorAll(selector)];
                    root.classList.add('scrub-armed');

                    // Hero: the red pen marks the answer as you scroll. Pinned on desktop, scrubbed as it crosses the screen on mobile.
                    const hero = $('[data-scrub="hero"]')[0];
                    const sheet = $('[data-scrub="sheet"]')[0];
                    if (hero && sheet) {
                        if (desk) {
                            const tl = gsap.timeline({
                                defaults: { ease: 'none' },
                                scrollTrigger: { trigger: hero, start: 'top top', end: '+=110%', pin: true, scrub: 0.6, anticipatePin: 1 }
                            });
                            buildMarkSequence(tl, sheet);
                            $('[data-speed]').forEach((el) => tl.to(el, { y: Number(el.dataset.speed), duration: 1 }, 0));
                            tl.to($('[data-scrub="hint"]'), { opacity: 0, duration: 0.08 }, 0.04);
                        } else {
                            const tl = gsap.timeline({
                                scrollTrigger: { trigger: sheet, start: 'top 80%', end: 'bottom 40%', scrub: 0.5 }
                            });
                            buildMarkSequence(tl, sheet);
                        }
                    }

                    // Subject ticker slides with the scroll instead of looping on its own.
                    const track = $('.marquee-track')[0];
                    if (track) {
                        gsap.to(track, {
                            xPercent: -40,
                            ease: 'none',
                            scrollTrigger: { trigger: track.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.4 }
                        });
                    }

                    // Before / after: the two cards slide in from opposite sides and meet.
                    [['slide-left', -140, -4], ['slide-right', 140, 4]].forEach(([name, x, rotate]) => {
                        $(`[data-scrub="${name}"]`).forEach((el) => {
                            gsap.fromTo(
                                el,
                                { x, rotate, opacity: 0 },
                                { x: 0, rotate: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 50%', scrub: 0.6 } }
                            );
                        });
                    });

                    // Closing CTA: the app phone rises into place.
                    $('[data-scrub="rise"]').forEach((el) => {
                        gsap.fromTo(
                            el,
                            { y: 170 },
                            { y: 0, ease: 'none', scrollTrigger: { trigger: el, start: 'top 100%', end: 'top 55%', scrub: 0.6 } }
                        );
                    });

                    // Highlighter strokes sweep across as each heading scrolls in.
                    $('.marker').forEach((marker) => {
                        gsap.fromTo(
                            marker,
                            { '--w': '0%' },
                            { '--w': '100%', ease: 'none', scrollTrigger: { trigger: marker, start: 'top 90%', end: 'top 60%', scrub: true } }
                        );
                    });

                    return () => root.classList.remove('scrub-armed');
                },
                root
            );

            const refresh = () => ScrollTrigger.refresh();
            window.addEventListener('load', refresh);
            if (document.fonts?.ready) document.fonts.ready.then(refresh);

            teardown = () => {
                window.removeEventListener('load', refresh);
                mm.revert();
            };
        });

        return () => {
            cancelled = true;
            if (teardown) teardown();
        };
    }, [rootRef]);
}

export default function PrepOne() {
    const rootRef = useRef(null);
    useScrollChoreography(rootRef);

    return (
        <div ref={rootRef} className="min-h-screen bg-white font-body text-ink selection:bg-hilite selection:text-ink">
            <SEO
                title="PrepOne: CBSE & BSEB Exam Prep | Your Personal AI Exam Strategist"
                description="Prepare smarter for CBSE Class 12 and Bihar Board Class 10 & 12 with PrepOne. AI handwritten answer evaluation, ABHYAS+ personalized practice, chapter PYQs, and realistic board mock tests. Built by IITians."
                keywords="PrepOne, CBSE Class 12 Science preparation, Bihar Board Class 10 Matric, Bihar Board Class 12 Inter, BSEB exam prep, AI subjective answer evaluation, handwritten answer evaluation, board exam mock tests, chapter PYQ practice, ABHYAS adaptive practice, SolvIQ"
                canonicalUrl="https://solviq.in/prepone"
                schema={[
                    buildPrepOneAppSchema(),
                    buildFaqSchema(PREPONE_FAQS),
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'PrepOne', url: '/prepone' }
                    ])
                ]}
            />
            <Navbar />
            <Hero />
            <Ticker />
            <Stats />
            <HowItWorks />
            <FeaturesShowcase />
            <SubjectCatalog />
            <Compare />
            <PricingSection />
            <FAQ />
            <CtaBand
                title={<>Prep earlier. Prep better. <Hl>Score higher.</Hl></>}
                body="Don't wait for pre-boards to find your derivation and formula slips. Download PrepOne and get your first handwritten answer marked today."
                placement="footer_cta"
                points={['Free to download', 'Aligned to CBSE and Bihar Board syllabus', 'Built by IIT Gandhinagar alumni']}
                scrub
            />
            <BackendStatusBadge />
            <Footer />
        </div>
    );
}
