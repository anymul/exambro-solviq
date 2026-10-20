import { PieChart, GitBranch, Target, Send, BookOpen, Users, Dumbbell, Calculator, Brain, Ruler } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import {
    AppScreenshot, PhoneScreenshot, PageHero, FeatureSplit, IconGrid, CtaBand
} from '../componenets/coachone/ui';
import insightsOverviewImg from '../assets/coachone/insights-prerequisite-overview.webp';
import tracerImg from '../assets/coachone/insights-prerequisite-tracer.webp';
import autoscoreImg from '../assets/home/prepone-autoscore.webp';
import reportCardImg from '../assets/home/prepone-report-card.webp';

const MISTAKE_TYPES = [
    { icon: Target, title: 'Sign convention slips', text: 'A forgotten negative sign in Lenz\'s law, or mirrored coordinates in ray optics.' },
    { icon: Calculator, title: 'Formula input errors', text: 'Diameter used for radius, or peak voltage confused with RMS.' },
    { icon: Brain, title: 'Concept confusion', text: 'Adiabatic treated as isothermal, or series capacitors mixed up with parallel.' },
    { icon: Ruler, title: 'Unit and magnitude slips', text: 'A missed cm to m conversion, or energy left in eV instead of joules.' }
];

export default function StudentAnalyticsMarketingPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <SEO
                title="Student Analytics & Learning Gaps | CoachOne"
                description="Understand where students struggle, trace gaps back to earlier classes, and keep parents updated with automated WhatsApp reports."
                keywords="student analytics, coaching institute analytics, mistake analysis, CBSE marking schemes, prerequisite learning gaps, parent updates"
                canonicalUrl="https://solviq.in/student-analytics"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'CoachOne', url: '/coachone' },
                        { name: 'Student Analytics', url: '/student-analytics' }
                    ])
                ]}
            />
            <Navbar />
            <main className="coachone">
                <PageHero
                    eyebrow="Student mistake & performance insights"
                    title="Marks don't tell the whole story."
                    sub="Instead of 'work harder in Physics', CoachOne shows teachers where students stumble, finds gaps from earlier classes, and suggests the revision to run in tomorrow's lecture."
                    location="student_analytics_hero"
                    secondary={{ href: '#mistakes', label: 'See the mistake types' }}
                    note="Every screen on this page is the live product."
                    visual={
                        <AppScreenshot
                            src={insightsOverviewImg}
                            alt="CoachOne Batch and Student Insights dashboard showing prerequisite foundation health and the root-cause tracer for a Class 12 batch"
                            width={1800}
                            height={1188}
                            priority
                        />
                    }
                />

                <IconGrid
                    bg="bg-white"
                    title="Pinpoint batch weaknesses before the final exam"
                    intro="A score of 52 out of 100 doesn't tell a teacher what to re-teach. CoachOne maps performance across chapters and question types so the next lecture starts where the batch is weakest."
                    cols="lg:grid-cols-4"
                    items={[
                        { icon: PieChart, title: 'Updated after every test', text: 'The batch summary refreshes automatically when a test is evaluated.' },
                        { icon: BookOpen, title: 'Chapter by chapter', text: 'See which topics and question types the whole batch is losing marks on.' },
                        { icon: Users, title: 'Strong and struggling together', text: 'Spot top contenders and students who need support in one view.' },
                        { icon: Dumbbell, title: 'Practice for the gap', text: 'Generate focused practice from the exact topic a batch got wrong.' }
                    ]}
                />

                <IconGrid
                    bg="bg-[#eef6f5]"
                    title="Why students pick the wrong option"
                    intro="A wrong answer is rarely random. CoachOne sorts MCQ mistakes by cause, so a teacher can tell a sign slip from a concept gap."
                    items={MISTAKE_TYPES}
                    cols="lg:grid-cols-4"
                />

                <FeatureSplit
                    id="mistakes"
                    bg="bg-white"
                    flip
                    title="Find the root cause in earlier classes"
                    points={[
                        ['Prerequisite tracing', 'Links a Class 12 chapter to the Class 11 topic it depends on.'],
                        ['Foundation health', 'Shows which earlier topics are weak across the batch.'],
                        ['A 10-minute refresher', 'Sends a short revision for the weak prerequisite, before the chapter is re-taught.']
                    ]}
                    visual={
                        <AppScreenshot
                            src={tracerImg}
                            alt="CoachOne prerequisite root-cause tracer tracing a Class 12 Physics chapter back to weak Class 11 foundation topics with a 10-minute refresher action"
                            width={1800}
                            height={1159}
                        />
                    }
                >
                    When a Class 12 student struggles with alternating current, the gap is often in Class 11 oscillations. The tracer follows the chain back so teachers fix the real problem.
                </FeatureSplit>

                <section className="bg-[#eef6f5] py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6 grid grid-cols-2 gap-6 sm:gap-10">
                            <PhoneScreenshot
                                src={autoscoreImg}
                                alt="PrepOne AutoScore AI result showing what the AI read from a handwritten answer, with step-by-step marks"
                                className="mt-0"
                            />
                            <PhoneScreenshot
                                src={reportCardImg}
                                alt="PrepOne report card for a CBSE Physics full exam showing average score, correct and wrong counts, behavioural scores and strong topics"
                                className="mt-10"
                            />
                        </div>
                        <div className="lg:col-span-6">
                            <h2 className="font-display text-3xl md:text-4xl leading-[1.1] text-[#032b2e]">
                                Students see where each mark went, too
                            </h2>
                            <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
                                The same engine that marks your batch's answer sheets gives every student a step-by-step breakdown and a report card on their phone in the PrepOne app, so feedback reaches them without a teacher writing it.
                            </p>
                            <ul className="mt-6 space-y-3 text-sm text-gray-700">
                                <li><strong>Step marks:</strong> marks for the law, the formula, the working and the final answer, each explained.</li>
                                <li><strong>Report card:</strong> correct, wrong and skipped counts, performance by difficulty, and strong and weak topics.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <IconGrid
                    bg="bg-white"
                    title="Parents hear from you the same evening"
                    intro="After a test is checked, CoachOne can send each parent the score, batch rank and weak topics on WhatsApp, with a PDF report card attached. Parent reports are on the Growth plan and above."
                    items={[
                        { icon: Send, title: 'WhatsApp report cards', text: 'Branded with your institute name, with marks, rank and a topic breakdown.' },
                        { icon: PieChart, title: 'Student profiles', text: 'Each student\'s test history and recurring error patterns in one place.' },
                        { icon: GitBranch, title: 'Remedial practice', text: 'A short practice set for the weak topic, assigned on the PrepOne app.' }
                    ]}
                />

                <CtaBand
                    location="student_analytics_final"
                    title="Give your teachers clearer insight."
                    body="In 20 minutes we walk through the insights on a sample batch and show how reports reach parents."
                />
            </main>
            <Footer />
        </div>
    );
}
