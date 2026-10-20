import {
    TrendingUp, BookOpen, Smartphone,
    BrainCircuit, Target, CheckCircle2,
    Calendar, Search, Filter
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import { InlineMath } from '../componenets/Latex';
import PYQExplorer from '../componenets/PYQExplorer';
import BackendStatusBadge from '../componenets/BackendStatusBadge';
import { SectionHeading, PhoneShot, PageHero, CtaBand, Hl } from '../componenets/prepone/ui';
import pyqAnalyticsImg from '../assets/pyq_analytics.png';

// Hero artwork: the PYQ analytics screen surrounded by the numbers that matter.
const PyqVisual = () => (
    <div className="relative py-8">
        <PhoneShot src={pyqAnalyticsImg} alt="PrepOne PYQ analytics screen" />
        <div className="sticker absolute -left-1 top-2 flex h-24 w-24 -rotate-12 flex-col items-center justify-center rounded-full bg-sun text-ink sm:left-2">
            <span className="font-display lining-nums text-3xl font-bold leading-none">10+</span>
            <span className="text-[11px] font-extrabold">years</span>
        </div>
        <span className="sticker-sm absolute -right-1 top-24 rotate-3 bg-white px-3 py-1.5 text-xs font-extrabold text-ink sm:right-0">
            2014-2025 solved archive
        </span>
        <span className="sticker-sm absolute bottom-16 left-0 -rotate-3 bg-aqua px-3 py-1.5 text-xs font-extrabold text-ink sm:left-4">
            Chapter-wise weightage
        </span>
        <span className="sticker-sm absolute -right-1 bottom-2 rotate-2 bg-coral px-3 py-1.5 text-xs font-extrabold text-ink sm:right-2">
            94% recurrence
        </span>
    </div>
);

const FREQUENCY = [4, 6, 3, 7, 5, 8, 4, 9, 6, 8];

const TrendAnalysis = () => (
    <section className="bg-lilac py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
                <SectionHeading title={<>Know exactly <span className="marker">what the examiner</span> will ask.</>}>
                    We fed 5,000+ past year board questions into our AI engine to map the historical DNA of CBSE and Bihar Board exams. PrepOne highlights recurring micro-concepts that statistically carry up to 60% of paper weightage.
                </SectionHeading>

                <ul className="mt-8 space-y-3">
                    {[
                        [TrendingUp, 'Predictive Weightage Engine', '"Ray Optics and Wave Optics have appeared in 9 out of the last 10 board exam sessions, carrying an average of 14 marks."'],
                        [Filter, 'One-Tap Smart Filtering', "Filter 10+ years of papers by chapter, difficulty, bloom's taxonomy, or format (Objective vs Derivations)."]
                    ].map(([Icon, term, desc]) => (
                        <li key={term} className="sticker-sm flex gap-3 bg-white p-4">
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-sun">
                                <Icon className="h-4 w-4 text-ink" aria-hidden="true" />
                            </span>
                            <div>
                                <p className="text-sm font-extrabold text-ink">{term}</p>
                                <p className="mt-0.5 text-sm leading-relaxed text-ink/70">{desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sticker bg-white p-6 sm:p-8">
                <div className="flex items-start justify-between gap-3 border-b-2 border-dashed border-rule pb-4">
                    <div>
                        <p className="text-xs font-extrabold text-brand">Concept frequency tracker (example)</p>
                        <p className="mt-0.5 font-display text-xl font-bold text-ink">Class 12: Moving Charges &amp; Magnetism</p>
                    </div>
                    <span className="shrink-0 rounded-md border-2 border-ink bg-sun px-2.5 py-1 text-xs font-extrabold text-ink">94% Recurrence</span>
                </div>

                <div className="mb-3 mt-6 flex h-44 items-end justify-between gap-2 border-b-2 border-ink pb-2">
                    {FREQUENCY.map((height, idx) => (
                        <div key={idx} className="group flex h-full w-full flex-col items-center justify-end">
                            <span className="mb-1 text-[10px] font-extrabold text-brand opacity-0 transition-opacity group-hover:opacity-100">{height}M</span>
                            <div
                                className={`w-full rounded-t-md border-2 border-ink ${height >= 7 ? 'bg-coral' : 'bg-skywash'}`}
                                style={{ height: `${height * 10}%`, minHeight: '6px' }}
                            />
                            <span className="mt-2 text-[10px] font-extrabold text-ink/60">{String(2015 + idx).slice(-2)}&apos;</span>
                        </div>
                    ))}
                </div>
                <p className="text-center text-xs text-ink/60">Historical marks distribution across CBSE Main &amp; Compartment papers (2015-2024)</p>
            </div>
        </div>
    </section>
);

const MODES = [
    {
        icon: BookOpen,
        title: 'Chapter-wise Deep Dive',
        desc: "Focus on one chapter at a time. Master all questions ever asked from 'Electrostatics' or 'Optics' across the last 10 years.",
        bg: 'bg-butter'
    },
    {
        icon: Calendar,
        title: 'Year-wise Full Papers',
        desc: 'Ready for the real deal? Sit down for 3 hours and attempt the exact past year paper under timed exam conditions.',
        bg: 'bg-skywash'
    }
];

const PracticeModes = () => (
    <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={<>Practice <span className="marker">your way.</span></>}>
                Switch between revision mode and full exam mode effortlessly.
            </SectionHeading>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
                {MODES.map((mode, i) => {
                    const Icon = mode.icon;
                    return (
                        <div key={mode.title} className={`sticker sticker-hover p-8 sm:p-10 ${mode.bg} ${i ? 'md:rotate-1' : 'md:-rotate-1'}`}>
                            <span className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-ink bg-white">
                                <Icon className="h-7 w-7 text-ink" aria-hidden="true" />
                            </span>
                            <h3 className="mt-6 font-display text-2xl font-bold text-ink">{mode.title}</h3>
                            <p className="mt-3 text-base leading-relaxed text-ink/80">{mode.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

const OfficialRubricGrading = () => (
    <section className="bg-skywash py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
            <div>
                <span className="sticker-sm mb-6 inline-flex -rotate-2 items-center gap-2 bg-white px-3 py-1.5 text-xs font-extrabold text-ink">
                    <BrainCircuit className="h-4 w-4" aria-hidden="true" /> AutoScore integration
                </span>
                <h2 className="font-display lining-nums text-balance text-4xl font-bold leading-[1.1] sm:text-5xl">
                    Graded by the <Hl>official marking scheme.</Hl>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
                    If you write the 2022 board paper, our AI doesn&apos;t just guess your marks. It evaluates your handwritten answers against the exact step-marking rubric released by the board for that specific year.
                </p>
                <ul className="mt-7 space-y-3 text-base font-medium">
                    {[
                        'Real board rubrics trained into the LLM',
                        'Step-marking for partial derivations',
                        'Detailed examiner commentary on your mistakes'
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-mint" aria-hidden="true" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sticker bg-white p-6 text-ink">
                <div className="flex items-center justify-between border-b-2 border-dashed border-rule pb-4">
                    <span className="text-sm font-extrabold">2022 Physics Paper (example)</span>
                    <span className="flex items-center text-sm font-extrabold text-brand">
                        <Target className="mr-1 h-4 w-4" aria-hidden="true" /> Rubric match
                    </span>
                </div>
                <div className="mt-5 space-y-3">
                    <div className="flex justify-between gap-3 rounded-lg border-2 border-ink bg-mintwash p-4">
                        <div>
                            <p className="text-sm font-extrabold">1. Gauss&apos;s Law Statement</p>
                            <p className="mt-1 text-xs text-ink/75">
                                Matched official formula: <InlineMath math="\oint \mathbf{E} \cdot d\mathbf{A} = \frac{q_{\text{enclosed}}}{\varepsilon_0}" />
                            </p>
                        </div>
                        <span className="shrink-0 font-extrabold text-mint">+1 Mark</span>
                    </div>
                    <div className="flex justify-between gap-3 rounded-lg border-2 border-ink bg-blush p-4">
                        <div>
                            <p className="text-sm font-extrabold">2. Mathematical Derivation</p>
                            <p className="mt-1 text-xs text-ink/75">
                                Missed integration limits <InlineMath math="\int_{0}^{R}" /> as per 2022 guidelines.
                            </p>
                        </div>
                        <span className="shrink-0 font-extrabold text-pen">0 Marks</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default function PYQsMarketingPage() {
    return (
        <div className="min-h-screen bg-white font-body text-ink selection:bg-hilite selection:text-ink">
            <SEO
                title="10+ Years Board Exam PYQs Decoded by AI | PrepOne"
                description="Practice chapter-wise Past Year Questions (PYQs) for CBSE and Bihar Board. Get your handwritten answers graded against official board marking schemes."
                keywords="board exam PYQs, previous year question papers solved, chapter-wise PYQs class 12, AI PYQ evaluation, CBSE 10 year papers"
                canonicalUrl="https://solviq.in/prepone/pyqs"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'PrepOne', url: '/prepone' },
                        { name: 'Previous Year Questions (PYQs)', url: '/prepone/pyqs' }
                    ])
                ]}
            />
            <Navbar />
            <PageHero
                badge="PrepOne PYQ engine, built by IITians"
                headline={<>10+ Years of Board Papers. <Hl>Decoded by AI.</Hl></>}
                sub="Don't just read the solutions. See which topics repeat every year, practice chapter-wise, and get your handwritten PYQ answers graded against the official board rubrics."
                cta={{ label: 'Explore the PYQ Library', icon: Search, placement: 'pyq_hero' }}
                chips={[
                    ['2014-2025 Solved Archive', 'bg-white', '-rotate-1'],
                    ['Chapter-wise Weightage', 'bg-aqua', 'rotate-1'],
                    ['Official Marking Rubrics', 'bg-coral', '-rotate-1']
                ]}
                visual={<PyqVisual />}
            />
            <TrendAnalysis />
            <section className="bg-white py-20 lg:py-28">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading title={<>Interactive <span className="marker">PYQ solver</span></>}>
                        Browse official board questions by subject and view predicted recurrences alongside marking schemes.
                    </SectionHeading>
                    <div className="mt-12">
                        <PYQExplorer />
                    </div>
                </div>
            </section>
            <PracticeModes />
            <OfficialRubricGrading />
            <CtaBand
                title={<>Unlock <Hl>10+ years</Hl> of mastery.</>}
                body="Stop searching the internet for blurry PDFs. Get fully evaluated PYQs right in your pocket."
                label="Download PrepOne App"
                icon={Smartphone}
                placement="pyq_footer"
            />
            <BackendStatusBadge />
            <Footer />
        </div>
    );
}
