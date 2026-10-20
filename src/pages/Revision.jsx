import {
    Sparkles, BrainCircuit, Target,
    Zap, Bookmark, Download,
    Highlighter
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import FlashcardDeck from '../componenets/FlashcardDeck';
import BackendStatusBadge from '../componenets/BackendStatusBadge';
import { SectionHeading, PageHero, CtaBand, Hl } from '../componenets/prepone/ui';
import { CARD_BG } from '../componenets/prepone/tokens';
import flashcardImg from '../assets/flashcard_ui.png';

// Hero artwork: a fanned flashcard stack beside the app's flashcard screen.
const CardsVisual = () => (
    <div className="relative min-h-[400px] py-6">
        <div className="sticker absolute bottom-16 left-0 w-[62%] -rotate-6 bg-blush p-5 text-ink">
            <p className="text-xs font-extrabold text-pen">Examiner trap</p>
            <p className="mt-2 text-sm font-bold leading-snug">Balance the redox coefficients before writing powers in Q.</p>
        </div>
        <div className="sticker absolute left-4 top-4 w-[62%] rotate-3 bg-white p-5 text-ink">
            <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-brand">Chemistry</span>
                <span className="text-xs font-bold text-ink/50">Tap to flip</span>
            </div>
            <p className="mt-3 font-display text-xl font-bold leading-tight">Nernst Equation (Electrochemistry)</p>
            <p className="mt-3 text-xs text-ink/65">Tap to reveal memory notes and examiner traps</p>
        </div>
        <div className="absolute -right-1 top-0 hidden w-32 rotate-6 overflow-hidden rounded-[1.75rem] border-[5px] border-ink bg-white shadow-[6px_6px_0_0_#16193A] sm:block lg:-right-2">
            <img src={flashcardImg} alt="PrepOne flashcard screen" width="1080" height="2400" loading="eager" decoding="async" className="block h-auto w-full" />
        </div>
        <span className="sticker-sm absolute bottom-6 right-0 rotate-3 bg-sun px-3 py-1.5 text-sm font-extrabold text-ink">
            Next review in 6 days
        </span>
        <span className="sticker-sm absolute -bottom-1 left-6 -rotate-3 bg-aqua px-3 py-1.5 text-sm font-extrabold text-ink">
            Spaced repetition
        </span>
    </div>
);

const TheProblem = () => (
    <section className="bg-lilac py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
            <div>
                <SectionHeading title={<>Beat the <span className="marker">forgetting curve.</span></>}>
                    Science proves students forget over 70% of new material within 48 hours without active recall. The night before a board exam, leafing through a 500-page textbook produces panic, not retention. PrepOne replaces passive reading with targeted high-yield synthesis.
                </SectionHeading>
                <ul className="mt-8 space-y-3">
                    {[
                        [Target, 'bg-sun', 'Hyper-Targeted Snippets', 'Notes are built strictly around the concepts where your diagnostic test confidence is lowest.'],
                        [Zap, 'bg-aqua', '5-Minute Revision Sheets', 'Strictly core formulas, verified examiner keywords, and "common trap" warnings. Zero filler.']
                    ].map(([Icon, bg, term, desc]) => (
                        <li key={term} className="sticker-sm flex gap-3 bg-white p-4">
                            <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-ink ${bg}`}>
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

            <div className="relative pb-24 sm:pb-16">
                <div className="sticker bg-white p-6">
                    <div className="flex items-center justify-between border-b-2 border-dashed border-rule pb-3">
                        <span className="text-sm font-extrabold text-ink">Traditional bulky notes</span>
                        <span className="text-xs text-ink/50">Page 1 of 40</span>
                    </div>
                    <div className="mt-4 space-y-2">
                        <div className="h-2 w-full rounded bg-ink/10" />
                        <div className="h-2 w-full rounded bg-ink/10" />
                        <div className="h-2 w-3/4 rounded bg-ink/10" />
                        <div className="flex h-20 w-full items-center justify-center rounded border-2 border-dashed border-ink/20 text-xs text-ink/40">Generic uncondensed diagram</div>
                        <div className="h-2 w-full rounded bg-ink/10" />
                        <div className="h-2 w-2/3 rounded bg-ink/10" />
                    </div>
                </div>

                <div className="sticker absolute -bottom-2 right-0 w-[86%] -rotate-2 bg-butter p-5 sm:-right-4 sm:w-72">
                    <p className="flex items-center gap-2 text-xs font-extrabold text-brand">
                        <Sparkles className="h-4 w-4" aria-hidden="true" /> PrepOne high-yield note (example)
                    </p>
                    <p className="mt-2 text-sm font-extrabold text-ink">Gauss&apos;s Law Core Trap!</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink/80">
                        You lost 2 marks here on yesterday&apos;s test. Remember: Flux strictly depends on charge <strong className="text-brand">enclosed inside</strong> the Gaussian surface, never external charges.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const FEATURES = [
    {
        icon: Highlighter,
        title: 'Examiner Keywords',
        desc: 'Board examiners look for specific keywords when grading subjective answers. Our notes highlight exactly which words you must include to secure full marks.'
    },
    {
        icon: BrainCircuit,
        title: 'Abhyas+ Synergized',
        desc: 'The notes engine talks directly to your mock test performance. If you fail an Optics numerical, the relevant Optics formula sheet instantly pins to your dashboard.'
    },
    {
        icon: Bookmark,
        title: 'Flashcard Mode',
        desc: "Convert any revision note into an active-recall flashcard. Swipe right if you know it, swipe left if you forgot it. We'll show it to you again tomorrow."
    },
    {
        icon: Download,
        title: 'Offline Ready',
        desc: "Download your personalized 'Exam Eve' PDF. It compiles all your weak spots into one printable document so you can study without screen distractions."
    }
];

const FeatureGrid = () => (
    <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={<>Your ultimate <span className="marker">cheat sheet.</span></>}>
                Legally, of course.
            </SectionHeading>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {FEATURES.map((f, i) => {
                    const Icon = f.icon;
                    return (
                        <div key={f.title} className={`sticker sticker-hover p-6 ${CARD_BG[i]} ${i % 2 ? 'lg:rotate-1' : 'lg:-rotate-1'}`}>
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-ink bg-white">
                                <Icon className="h-6 w-6 text-ink" aria-hidden="true" />
                            </span>
                            <h3 className="mt-5 text-xl font-extrabold text-ink">{f.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-ink/80">{f.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

const UIPreview = () => (
    <section className="bg-butter py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={<>Interactive <span className="marker">spaced repetition</span> deck</>}>
                Test your active recall on high-yield board formulas, rate your retention, and track live Memory Health % in real time.
            </SectionHeading>
            <div className="mt-12">
                <FlashcardDeck />
            </div>
        </div>
    </section>
);

export default function RevisionNotesPage() {
    return (
        <div className="min-h-screen bg-white font-body text-ink selection:bg-hilite selection:text-ink">
            <SEO
                title="PrepOne Revision Notes | Spaced Repetition Flashcards & Memory Health"
                description="Access personalized revision notes generated by AI. Track your Memory Health % and revise right before you forget with active recall flashcards."
                keywords="spaced repetition revision, board exam flashcards, active recall study app, formula revision notes, memory health gauge"
                canonicalUrl="https://solviq.in/prepone/revision-notes"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'PrepOne', url: '/prepone' },
                        { name: 'Revision Notes & Flashcards', url: '/prepone/revision-notes' }
                    ])
                ]}
            />
            <Navbar />
            <PageHero
                badge="Smart revision, built by IITians"
                headline={<>Stop re-reading the <Hl>whole textbook.</Hl></>}
                sub="Why revise what you already know? PrepOne generates bite-sized, personalized revision notes based on the exact mistakes you made in your mock tests."
                cta={{ label: 'Generate My Revision Notes', icon: Sparkles, placement: 'revision_hero' }}
                chips={[
                    ['Active Recall Flashcards', 'bg-white', '-rotate-1'],
                    ['SM-2 Spaced Repetition', 'bg-aqua', 'rotate-1'],
                    ["Offline 'Exam Eve' PDF", 'bg-coral', '-rotate-1']
                ]}
                visual={<CardsVisual />}
            />
            <TheProblem />
            <FeatureGrid />
            <UIPreview />
            <CtaBand
                title={<>Master CBSE &amp; BSEB revision with <Hl>PrepOne.</Hl></>}
                body="Turn mock test mistakes in Physics, Chemistry, and Math into targeted active recall flashcards. Review formula sheets, catch examiner traps, and retain high-yield board concepts."
                placement="revision_footer"
                points={['Free to download', 'CBSE & BSEB aligned (Class 10 & 12)']}
            />
            <BackendStatusBadge />
            <Footer />
        </div>
    );
}
