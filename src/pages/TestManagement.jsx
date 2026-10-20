import { Link } from 'react-router-dom';
import { Printer, Smartphone, FileText, Sigma, Layers } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import {
    AppScreenshot, PageHero, FeatureSplit, StepRow, IconGrid, CtaBand, SectionHead
} from '../componenets/coachone/ui';
import { BTN_TEAL } from '../componenets/coachone/tokens';
import testPaperImg from '../assets/coachone/test-paper-marking-scheme.webp';
import aiStudioImg from '../assets/coachone/ai-question-studio.webp';

const STUDIO_STEPS = [
    ['Curriculum & Audience', 'Choose the class, the batch and one or more subjects, then name the test and pick the exam type.'],
    ['Blueprint & Scoring Matrix', 'Set the question mix, marks, duration and negative marking.'],
    ['Question Review Studio', 'Read every question with its solution. Swap any one, or add your own.'],
    ['Deploy & Export', 'Download a print-ready PDF with your institute branding, or assign the test to a batch on the PrepOne app.']
];

const QUESTION_TYPES = [
    ['Multiple choice', 'Options carry the common wrong answers, so mistakes can be grouped later.'],
    ['Very short answer', 'Definitions, laws and direct formula applications.'],
    ['Short answer', 'Short derivations and numericals, marked step by step.'],
    ['Case-based', 'A passage followed by sub-questions on the concept.'],
    ['Long answer', 'Full derivations with a marking scheme and internal choice.']
];

const DELIVERY = [
    { icon: Printer, title: 'Print for the classroom', text: 'Export the paper and a separate answer key with your institute logo and header, ready for the printer.' },
    { icon: Smartphone, title: 'Send to student phones', text: 'Assign the test to a batch on the PrepOne app, with a test window and automatic checking for objective questions.' },
    { icon: Sigma, title: 'Formulas that print properly', text: 'Equations, chemical formulas and units are typeset, so papers look like a board paper and not a pasted Word file.' },
    { icon: Layers, title: 'One bank, every board', text: 'More than 1 lakh verified MCQ and subjective questions for CBSE, state boards, JEE and NEET, in every plan.' },
    { icon: FileText, title: 'Marking scheme included', text: 'Each subjective question carries its step-wise marking scheme, which the copy checker uses later.' }
];

export default function TestManagementMarketingPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <SEO
                title="Academic Test Studio & Question Bank | CoachOne"
                description="Create balanced CBSE, State Board, JEE, and NEET test papers in minutes. Pull from 1 lakh+ verified MCQ and subjective questions, included in every plan, with formatted LaTeX math and watermarked PDF exports."
                keywords="coaching test paper maker, CBSE question bank, test paper creator, coaching institute test management, LaTeX question editor, pre-board test generator"
                canonicalUrl="https://solviq.in/test-management"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'CoachOne', url: '/coachone' },
                        { name: 'Academic Test Studio', url: '/test-management' }
                    ])
                ]}
            />
            <Navbar />
            <main className="coachone">
                <PageHero
                    eyebrow="Academic Test Studio"
                    title="From syllabus to print-ready paper in minutes."
                    sub="Pick the class and chapters, set the marks, and CoachOne builds the paper from a bank of 1 lakh+ verified questions, with the marking scheme and your institute's branding."
                    location="test_management_hero"
                    secondary={{ href: '#steps', label: 'See the four steps' }}
                    note="Every screen on this page is the live product."
                    visual={
                        <AppScreenshot
                            src={testPaperImg}
                            alt="CoachOne test library preview of a Class 12 Physics unit test with the marking scheme and solutions tab open and a Download PDF button"
                            width={1800}
                            height={1125}
                            priority
                        />
                    }
                />

                <StepRow
                    id="steps"
                    bg="bg-white"
                    title="Four steps from blank page to finished test"
                    intro="The studio walks a teacher through the same four stages every time, so a new faculty member can build a paper on day one."
                    steps={STUDIO_STEPS}
                />

                <section className="bg-[#eef6f5] py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
                        <div className="lg:col-span-5">
                            <SectionHead title="Real board patterns, not random question piles">
                                A good test series matches the exam students will sit. Choose the mix of question types and marks, and the studio keeps the paper balanced across your chosen chapters.
                            </SectionHead>
                        </div>
                        <dl className="lg:col-span-7 divide-y divide-[#cfe3e1] rounded-2xl border border-[#cfe3e1] bg-white">
                            {QUESTION_TYPES.map(([name, text]) => (
                                <div key={name} className="px-6 py-5">
                                    <dt className="font-bold text-[#032b2e]">{name}</dt>
                                    <dd className="mt-1 text-sm text-gray-600 leading-relaxed">{text}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <FeatureSplit
                    bg="bg-white"
                    flip
                    title="Turn your own PDF or notes into questions"
                    points={[
                        ['Works from your material', 'Upload a PDF, TXT or MD file up to 15 MB, or paste your notes.'],
                        ['Board-style question types', 'MCQ, assertion-reason, very short, short answer, long answer and case study.'],
                        ['You approve every question', 'Keep the good ones, discard the rest, then save to your bank or assign as a test.'],
                        ['Growth plan and above', 'AI Question Studio is included with Growth, Scale and Enterprise.']
                    ]}
                    visual={
                        <AppScreenshot
                            src={aiStudioImg}
                            alt="CoachOne AI Question Studio with options to upload a PDF or paste text, choose class, subject and chapter, and select question types"
                            width={2000}
                            height={1260}
                        />
                    }
                >
                    Teaching from a chapter your own teachers wrote? Upload it and let CoachOne draft the questions, then review them before they reach students.
                </FeatureSplit>

                <IconGrid
                    bg="bg-[#eef6f5]"
                    title="Print it, or send it to phones"
                    intro="Run a pen-and-paper test at the centre or assign digital practice for homework. Both start from the same paper."
                    items={DELIVERY}
                />

                <section className="bg-white py-16 text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <SectionHead center title="Included in every plan">
                            The 1 lakh+ question bank, the test studio and unlimited MCQ tests and DPPs come with Starter at ₹999 a month.
                        </SectionHead>
                        <Link to="/coachone#pricing" className={`${BTN_TEAL} mt-8`}>See plans and pricing</Link>
                    </div>
                </section>

                <CtaBand
                    location="test_management_final"
                    title="Stop spending weekends setting test papers."
                    body="In 20 minutes we build a paper for your class and subject, so you see the studio on your own syllabus."
                />
            </main>
            <Footer />
        </div>
    );
}
