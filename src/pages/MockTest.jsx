import {
    Timer, FileEdit, Smartphone, BrainCircuit,
    PlayCircle, CheckCircle2, BookOpen, UploadCloud,
    Download
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import { LatexText } from '../componenets/Latex';
import { DownloadLink, SectionHeading, PhoneShot, PageHero, CtaBand, Hl } from '../componenets/prepone/ui';
import { CARD_BG } from '../componenets/prepone/tokens';
import mockTestLibraryImg from '../assets/mock_test_library.png';
import postTestAnalysisImg from '../assets/post_test_analysis.png';

const PAPER_SECTIONS = [
    ['Section A', '16 MCQs'],
    ['Section B', 'Short Answer (2M)'],
    ['Section C', 'Short Answer (3M)'],
    ['Section D', 'Case Studies (4M)'],
    ['Section E', 'Long Answer (5M)']
];

// Hero artwork: a printed board-style paper with a stopwatch sticker and the app library screen.
const PaperVisual = () => (
    <div className="relative pb-10 pr-4 sm:pr-8">
        <div className="sticker -rotate-2 bg-white p-5 text-ink sm:p-6">
            <p className="border-b-2 border-dashed border-ink/30 pb-3 text-center text-xs font-extrabold">
                CBSE 2026 Full Syllabus Pre-Board #3
            </p>
            <div className="mt-3 flex justify-between text-xs font-bold text-ink/70">
                <span>Class 12, Physics</span>
                <span>3 Hours, 70 Marks</span>
            </div>
            <ul className="mt-4 space-y-2.5">
                {PAPER_SECTIONS.map(([name, detail]) => (
                    <li key={name} className="flex items-baseline gap-2 text-sm">
                        <span className="font-extrabold">{name}</span>
                        <span className="flex-1 border-b-2 border-dotted border-ink/25" />
                        <span className="font-medium text-ink/75">{detail}</span>
                    </li>
                ))}
            </ul>
            <p className="mt-5 text-[11px] text-ink/45">Example paper layout. Fresh papers are generated in the app.</p>
        </div>

        <div className="sticker absolute -right-1 -top-8 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full bg-coral text-ink sm:-right-4">
            <span className="font-display lining-nums text-2xl font-bold leading-none">3:00:00</span>
            <span className="text-[11px] font-extrabold">timer</span>
        </div>
        <span className="sticker-sm absolute -bottom-1 right-2 rotate-3 bg-sun px-3 py-1.5 text-sm font-extrabold text-ink">
            Printable PDF + OMR
        </span>
    </div>
);

const AppUISimulation = () => (
    <section className="bg-butter py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={<>Your personal <span className="marker">mock test studio</span></>}>
                Full-length exam series calibrated strictly to the latest 2026 blueprint, section divisions, and step rubrics.
            </SectionHeading>

            <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
                <PhoneShot src={mockTestLibraryImg} alt="PrepOne mock test library screen" />

                <div className="space-y-6">
                    <div className="sticker relative bg-white p-6 sm:p-7">
                        <span className="sticker-sm absolute -top-4 right-5 rotate-3 bg-sun px-3 py-1 text-xs font-extrabold text-ink">
                            Recommended next
                        </span>
                        <div className="flex items-start gap-4">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-skywash text-ink">
                                <FileEdit className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <div>
                                <p className="text-xs font-extrabold text-brand">Class 12, Physics. 3 Hours, 70 Marks</p>
                                <h3 className="mt-1 text-xl font-extrabold text-ink">CBSE 2026 Full Syllabus Pre-Board #3</h3>
                            </div>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-ink/75">
                            Includes Section A (16 MCQs), Section B (Short Answer 2M), Section C (Short Answer 3M), Section D (Case Studies 4M), and Section E (Long Answer 5M).
                        </p>
                        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <DownloadLink
                                placement="mock_paper_card"
                                className="sticker inline-flex items-center justify-center gap-2 bg-sun px-5 py-3 text-sm font-extrabold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                            >
                                <Download className="h-4 w-4" /> Download Printable PDF &amp; OMR
                            </DownloadLink>
                            <span className="text-xs text-ink/65">Free with instantaneous step evaluation</span>
                        </div>
                    </div>

                    <div className="sticker relative bg-mintwash p-6 sm:p-7">
                        <span className="sticker-sm absolute -top-4 right-5 -rotate-3 bg-white px-3 py-1 text-xs font-extrabold text-ink">
                            Example result
                        </span>
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-aqua text-ink">
                                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-xs font-extrabold text-ink/70">Completed and AI graded. BSEB Class 12 Chemistry</p>
                                    <h3 className="mt-1 text-lg font-extrabold text-ink">Electrochemistry &amp; Kinetics Block Test</h3>
                                </div>
                            </div>
                            <div className="shrink-0 text-right">
                                <span className="block text-[10px] font-extrabold text-ink/60">Official score</span>
                                <span className="font-display lining-nums text-3xl font-bold text-ink">
                                    62<span className="text-sm font-medium text-ink/60">/70</span>
                                </span>
                            </div>
                        </div>
                        <p className="mt-4 rounded-lg border-2 border-ink bg-white p-3.5 text-xs leading-relaxed text-ink/80">
                            Step deductions: -4M calculation slip, -4M omitted SI unit in Nernst equation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const STEPS = [
    { icon: BookOpen, title: 'Download the Paper', desc: 'Select your syllabus. We generate a fresh, 3-hour PDF paper based on past year trends.' },
    { icon: Timer, title: 'Write on Paper', desc: 'Put your phone away. Sit at your desk with blank paper. Practice real handwriting speed.' },
    { icon: UploadCloud, title: 'Snap & Upload', desc: 'Once time is up, use the PrepOne app to scan your handwritten sheets.' },
    { icon: BrainCircuit, title: 'Instant AI Score', desc: 'Our AI reads your cursive, applies step-marking, and returns your score in 60 seconds.' }
];

const Workflow = () => (
    <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={<>The <span className="marker">physical-to-digital</span> workflow</>}>
                Because you can&apos;t type your board exams.
            </SectionHeading>

            <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {STEPS.map((step, i) => {
                    const Icon = step.icon;
                    return (
                        <li key={step.title} className={`sticker sticker-hover relative p-6 pt-9 ${CARD_BG[i]} ${i % 2 ? 'lg:rotate-1' : 'lg:-rotate-1'}`}>
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

const PostTestAnalytics = () => (
    <section className="bg-lilac py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
                <SectionHeading title={<>Know exactly <span className="marker">why you lost</span> every single mark.</>}>
                    Don&apos;t just see a red cross. PrepOne&apos;s vision engine breaks down your handwriting by category: conceptual gap, arithmetic slip, omitted intermediate derivation step, or missing unit.
                </SectionHeading>
                <ul className="mt-8 space-y-3">
                    {[
                        [FileEdit, 'Line-by-Line Examiner Rubric Matching', 'See notes directly on your scanned handwriting showing where you skipped crucial board steps.'],
                        [BrainCircuit, 'ABHYAS+ Adaptive Remediation', 'Our engine automatically feeds identified weak micro-topics into your daily targeted practice queue.']
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

            <div className="space-y-6">
                <div className="sticker bg-white p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-3 border-b-2 border-dashed border-rule pb-4">
                        <div>
                            <p className="text-xs font-extrabold text-brand">Examiner rubric audit (example)</p>
                            <p className="mt-0.5 text-base font-extrabold text-ink">CBSE Class 12, Physics Q4 (Derivation)</p>
                        </div>
                        <span className="shrink-0 rounded-md border-2 border-ink bg-blush px-2.5 py-1 text-xs font-extrabold text-pen">
                            -2 Marks deducted
                        </span>
                    </div>
                    <p className="mt-4 rounded-lg border-2 border-ink bg-butter p-4 text-xs leading-relaxed text-ink sm:text-sm">
                        <LatexText text="Student applied the first law of thermodynamics (\(\Delta U = Q - W\)) correctly (+1M), but failed to account for work done BY the gas during isobaric expansion (\(W = P\Delta V\)) (-2M)." />
                    </p>
                    <p className="mt-4 flex items-center justify-between gap-3 rounded-lg border-2 border-ink bg-skywash p-3.5 text-xs text-ink">
                        <span>Remedial practice queued: <strong>Work &amp; Energy in Gases</strong></span>
                        <span className="shrink-0 font-extrabold">5-min drill</span>
                    </p>
                </div>

                <div className="sticker overflow-hidden bg-white">
                    <img
                        src={postTestAnalysisImg}
                        alt="PrepOne post-test analysis screen"
                        width="1080"
                        height="2400"
                        loading="lazy"
                        decoding="async"
                        className="h-44 w-full object-cover object-top"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default function MockTestsPage() {
    return (
        <div className="min-h-screen bg-white font-body text-ink selection:bg-hilite selection:text-ink">
            <SEO
                title="PrepOne Mock Tests | AI-Evaluated, Board-Aligned Practice Papers"
                description="Experience the future of exam prep with PrepOne's AI-evaluated mock tests. Download full-length, board-aligned papers, practice on physical paper, and get instant AI feedback to boost your performance."
                canonicalUrl="https://solviq.in/prepone/mock-tests"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'PrepOne', url: '/prepone' },
                        { name: 'Mock Tests', url: '/prepone/mock-tests' }
                    ])
                ]}
            />
            <Navbar />
            <PageHero
                badge="PrepOne Mock Tests, built by IITians"
                headline={<>Practice like it&apos;s the <Hl>Real Board Exam.</Hl></>}
                sub="Stop practicing with random MCQs on your phone. Take full-length, board-aligned mock tests on physical paper, and let our AI evaluate your subjective answers instantly."
                cta={{ label: 'Start Your First Free Mock', icon: PlayCircle, placement: 'mock_hero' }}
                chips={[
                    ['3-Hour Timed PDF Papers', 'bg-white', '-rotate-1'],
                    ['CBSE 10/12 & BSEB 10/12', 'bg-aqua', 'rotate-1'],
                    ['60-Sec Step Evaluation', 'bg-coral', '-rotate-1']
                ]}
                visual={<PaperVisual />}
            />
            <AppUISimulation />
            <Workflow />
            <PostTestAnalytics />
            <CtaBand
                title={<>Stop guessing. <Hl>Start testing.</Hl></>}
                body="Get your first 3 full-length Mock Tests evaluated by AI absolutely free."
                label="Download PrepOne App"
                icon={Smartphone}
                placement="mock_footer"
            />
            <Footer />
        </div>
    );
}
