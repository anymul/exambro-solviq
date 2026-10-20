import { ShieldCheck, FileEdit, Scale } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import {
    AppScreenshot, PhoneScreenshot, PageHero, FeatureSplit, StepRow, IconGrid, CtaBand
} from '../componenets/coachone/ui';
import autoscoreImg from '../assets/home/prepone-autoscore.webp';
import testPaperImg from '../assets/coachone/test-paper-marking-scheme.webp';

const PIPELINE = [
    ['Collect the copies', 'Students write on plain paper and upload photos in the app, or your office scans the stack into a single PDF.'],
    ['Read the handwriting', 'CoachOne reads the handwriting, including equations and formulas, and shows you exactly what it read.'],
    ['Mark step by step', 'Each answer is checked against your marking scheme, with marks for the law, the formula, the working and the final answer.'],
    ['Teacher reviews', 'Unclear handwriting is flagged for a quick look. Teachers can change any mark before reports go to parents.']
];

export default function AIEvaluationMarketingPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <SEO
                title="AI Handwritten Copy Checking Software for Coaching Institutes | CoachOne"
                description="Check 100+ handwritten subjective test papers in minutes. Step-by-step board marking, teacher review mode, and instant WhatsApp parent report cards."
                keywords="AI copy checking, handwritten answer checking software, coaching test evaluation, CBSE step marking software, paper checker for institutes"
                canonicalUrl="https://solviq.in/ai-evaluation"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'CoachOne', url: '/coachone' },
                        { name: 'AI Subjective Evaluation', url: '/ai-evaluation' }
                    ])
                ]}
            />
            <Navbar />
            <main className="coachone">
                <PageHero
                    eyebrow="Subjective copy checking"
                    title="Check 100 handwritten copies while you finish your tea."
                    sub="Objective tests are easy to score. Board exams depend on derivations and explanations. CoachOne reads the handwriting, awards step marks, and shows where each mark was lost."
                    location="ai_evaluation_hero"
                    secondary={{ href: '#pipeline', label: 'See how it works' }}
                    note="₹1.50 per answer page checked. Blank pages and question sheets are never billed."
                    visual={
                        <div className="flex flex-col items-center gap-4">
                            <PhoneScreenshot
                                src={autoscoreImg}
                                alt="AutoScore AI result for a handwritten Physics answer, showing what the AI read and step-by-step marks"
                                className="-rotate-2 max-w-[280px]"
                            />
                            <p className="co-note text-xl text-[#ffd84d]">What it read, and the marks it gave</p>
                        </div>
                    }
                />

                <FeatureSplit
                    bg="bg-white"
                    title="It marks the way a board examiner does"
                    points={[
                        ['Shows what it read', 'Every result opens with the text CoachOne read from the page, so a wrong reading is easy to spot.'],
                        ['Partial credit', 'A student who has the right formula and substitution keeps those marks even if the last step slips.'],
                        ['Your marking scheme', 'Marks follow the scheme attached to the question, the same one printed in the test paper.'],
                        ['Reasons, not just totals', 'Each step carries a one-line reason, so students and parents can see why a mark was lost.']
                    ]}
                    visual={
                        <AppScreenshot
                            src={testPaperImg}
                            alt="A subjective test in the CoachOne library with its step-wise marking scheme and solutions, which the copy checker marks against"
                            width={1800}
                            height={1125}
                        />
                    }
                >
                    CoachOne checks the answer against the marking scheme and gives step marks for the right formula and working, even if the final calculation has a small error.
                </FeatureSplit>

                <StepRow
                    id="pipeline"
                    title="How your centre checks a stack of copies"
                    intro="It fits the routine you already have. Students keep writing on paper, and nothing about the test day changes."
                    steps={PIPELINE}
                />

                <IconGrid
                    bg="bg-white"
                    title="Fair on the hundredth copy, too"
                    items={[
                        { icon: Scale, title: 'The same rules for everyone', text: 'Every student is scored against the same step marks, which makes results easier to defend to parents.' },
                        { icon: FileEdit, title: 'Teachers stay in control', text: 'Review, adjust any mark or add a comment in one click. CoachOne assists the teacher and does not replace them.' },
                        { icon: ShieldCheck, title: 'Pay for what is checked', text: 'Billed per answer page evaluated at ₹1.50, on every plan. MCQ tests and DPPs carry no evaluation fee.' }
                    ]}
                />

                <CtaBand
                    location="ai_evaluation_final"
                    title="See it check your own students' copies."
                    body="In 20 minutes we run a real handwritten answer sheet through the evaluation and show the batch report it produces."
                />
            </main>
            <Footer />
        </div>
    );
}
