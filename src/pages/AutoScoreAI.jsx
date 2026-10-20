import {
    Scan, CheckCircle2, Zap, Target,
    SearchCode, Sparkles, MessageSquareWarning
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import AutoScorePlayground from '../componenets/AutoScorePlayground';
import BackendStatusBadge from '../componenets/BackendStatusBadge';
import { SectionHeading, AnswerSheet, PageHero, CtaBand, Hl } from '../componenets/prepone/ui';
import { CARD_BG } from '../componenets/prepone/tokens';

// Hero artwork: the product itself, a handwritten answer being marked.
const SheetVisual = () => (
    <div className="relative pb-12">
        <AnswerSheet />
        <div className="sticker absolute -right-1 -top-8 flex h-20 w-20 rotate-12 flex-col items-center justify-center rounded-full bg-sun text-ink sm:-right-6 sm:h-24 sm:w-24">
            <span className="font-display lining-nums text-3xl font-bold leading-none sm:text-4xl">60</span>
            <span className="text-[11px] font-extrabold">seconds</span>
        </div>
        <span className="sticker-sm absolute -bottom-1 left-3 -rotate-3 bg-coral px-3 py-1.5 text-sm font-extrabold text-ink sm:-left-2">
            Partial marks, like an examiner
        </span>
    </div>
);

const StepMarkingMagic = () => (
    <section className="bg-lilac py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={<>Live <span className="marker">step-marking</span> sandbox</>}>
                In board exams, a wrong final answer doesn&apos;t mean zero marks. Test our vision AI on real student derivations and see partial credits and Hinglish feedback awarded live.
            </SectionHeading>

            <div className="mt-12">
                <AutoScorePlayground />
            </div>
        </div>
    </section>
);

const FEATURES = [
    {
        icon: SearchCode,
        title: 'Messy Handwriting? No Problem.',
        desc: 'Our vision models are trained on millions of real student papers. It reads cursive, struck-out words, and complex mathematical symbols effortlessly.'
    },
    {
        icon: Target,
        title: 'Board-Specific Rubrics',
        desc: 'The AI grades a CBSE paper differently than a Bihar Board paper. It follows the exact official marking scheme of your chosen syllabus.'
    },
    {
        icon: MessageSquareWarning,
        title: 'Examiner Commentary',
        desc: "Get personalized tips on your answer presentation. Example: 'You missed drawing the circuit diagram, which carries 1 mandatory mark.'"
    },
    {
        icon: Zap,
        title: 'Instant Turnaround',
        desc: 'No more waiting until next week to see where you went wrong. Review your mistakes while the concepts are still fresh in your memory.'
    }
];

const FeaturesGrid = () => (
    <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={<>Smarter than a <span className="marker">standard answer key.</span></>} />

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

const ProofSection = () => (
    <section className="bg-butter py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
            <div>
                <h2 className="font-display lining-nums text-balance text-4xl font-bold leading-[1.1] sm:text-5xl">
                    Stop memorizing. <Hl>Start understanding.</Hl>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
                    Knowing you got a question wrong is the first step. Knowing <em>why</em> you got it wrong is how you top the board. Every scanned paper feeds directly into your Abhyas+ revision queue.
                </p>
                <ul className="mt-7 space-y-3 text-base font-bold">
                    {[
                        'Highlight missing key definitions',
                        'Identify recurring calculation errors',
                        'Track time spent per section'
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-mint" aria-hidden="true" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sticker relative bg-white p-7 text-ink">
                <span className="sticker-sm absolute -left-3 -top-4 flex h-11 w-11 -rotate-12 items-center justify-center bg-sun">
                    <Sparkles className="h-5 w-5 text-ink" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-extrabold">AI performance insight (example)</h3>
                <p className="mt-5 rounded-lg border-2 border-ink bg-lilac p-4 text-sm leading-relaxed">
                    &quot;You have lost an average of 4 marks across your last 3 tests simply by forgetting SI units at the end of physics derivations. I have added a custom SI Unit matching quiz to your revision queue today.&quot;
                </p>
                <p className="mt-4 rounded-lg border-2 border-ink bg-skywash p-3.5 text-center text-sm font-extrabold">
                    Full analysis report in the app
                </p>
            </div>
        </div>
    </section>
);

export default function AIEvaluationStudentPage() {
    return (
        <div className="min-h-screen bg-white font-body text-ink selection:bg-hilite selection:text-ink">
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
            <PageHero
                badge="AutoScore AI, built by IITians"
                headline={<>Your personal AI <Hl>Board Examiner.</Hl></>}
                sub="Don't wait 14 days for your coaching center to return your test. Upload your handwritten subjective answers and get step-by-step evaluation, partial marks, and feedback in 60 seconds."
                cta={{ label: 'Scan Your First Answer', icon: Scan, placement: 'ai_hero' }}
                chips={[
                    ['Partial step marks', 'bg-white', '-rotate-1'],
                    ['Hinglish feedback', 'bg-aqua', 'rotate-1'],
                    ['CBSE and Bihar Board rubrics', 'bg-coral', '-rotate-1']
                ]}
                visual={<SheetVisual />}
            />
            <StepMarkingMagic />
            <FeaturesGrid />
            <ProofSection />
            <CtaBand
                title={<>Test the AI <Hl>yourself.</Hl></>}
                body="Upload an old answer sheet right now and see the magic happen. Your first 3 evaluations are free."
                label="Download PrepOne App"
                icon={Scan}
                placement="ai_footer"
            />
            <BackendStatusBadge />
            <Footer />
        </div>
    );
}
