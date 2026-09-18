import { Link } from 'react-router-dom';
import {
    Calendar, ArrowRight, FileText,
    Printer, Smartphone, Check
} from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import LetterReveal from '../componenets/LetterReveal';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import { InlineMath, BlockMath, LatexText } from '../componenets/Latex';

const Hero = () => (
    <section className="relative pt-32 pb-24 bg-[#111210] overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01696f] rounded-full mix-blend-multiply filter blur-[140px] opacity-25"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-4">
                Academic Test Studio
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-6 leading-tight">
                <LetterReveal text="From syllabus to print-ready exam" delay={100} /><br />
                <span className="text-teal-400">
                    <LetterReveal text="in under 10 minutes." delay={700} />
                </span>
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                Stop spending late nights hunting for questions and fixing broken MS Word equations. Build balanced CBSE, State Board, JEE, and NEET test papers complete with marking schemes and your coaching watermark.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/book-demo" className="w-full sm:w-auto bg-[#01696f] hover:bg-[#015257] text-white px-8 py-4 rounded-xl inline-flex items-center justify-center transition-all shadow-[0_0_20px_rgba(1,105,111,0.4)] font-bold text-lg">
                    <Calendar className="w-5 h-5 mr-3" />
                    Book a Quick Demo
                </Link>
                <a href="#wizard" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl inline-flex items-center justify-center transition-all font-bold text-lg">
                    See How It Works
                </a>
            </div>
        </div>
    </section>
);

// --- 4-STEP WIZARD BREAKDOWN ---
const StudioWizardSection = () => {
    const steps = [
        {
            num: "01",
            title: "Pick Your Class & Syllabus",
            desc: "Choose your target class (Class 9 to 12 or Droppers), board or exam pattern, subject, and specific chapters. Select which batches should take the test."
        },
        {
            num: "02",
            title: "Set Your Marks & Section Balance",
            desc: "Decide the exact question mix: 1-mark MCQs, short answers, numericals, and 5-mark derivations. Set test duration and negative marking in seconds."
        },
        {
            num: "03",
            title: "Review Questions & Answer Keys",
            desc: "Every math formula and chemical structure is neatly formatted and verified. Swap any question with one click or add your own custom problem."
        },
        {
            num: "04",
            title: "Download PDF or Send to Phones",
            desc: "Export clean question papers with your coaching center logo and watermarks for physical printing, or push the test directly to students on the PrepOne app."
        }
    ];

    return (
        <section id="wizard" className="py-24 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                        Simple Test Creation
                    </div>
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">
                        How teachers create test papers in 4 steps
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Built for coaching faculty and academic directors. No typing formulas manually. No wrestling with printer alignments.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all flex flex-col justify-between">
                            <div>
                                <div className="text-3xl font-bold text-[#01696f] mb-4">{step.num}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-bold text-[#01696f] flex items-center">
                                Step {step.num} of 04 <ArrowRight className="w-3.5 h-3.5 ml-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- CBSE BLUEPRINT DISTRIBUTION ---
const BlueprintDistributionSection = () => (
    <section className="py-24 bg-[#f7f6f2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                        True Exam Standards
                    </div>
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
                        Real board blueprints. <br />
                        <span className="text-[#01696f]">No random question piles.</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Good test series match the real exam pattern so students feel confident on exam day. CoachOne organizes questions by official board weightage:
                    </p>

                    <div className="space-y-4">
                        {[
                            { name: "Multiple Choice Questions (MCQ)", mark: "1 Mark Each", desc: "Includes common student mistake options tagged with sign and formula traps." },
                            { name: "Very Short Answer (VSA)", mark: "2 Marks Each", desc: "Clear 2-step definitions, laws, and direct formula applications." },
                            { name: "Short Answer (SA)", mark: "3 Marks Each", desc: "3-step conceptual explanations, short derivations, and numericals." },
                            { name: "Case-Based Questions (CBQ)", mark: "4 Marks Each", desc: "Real-world passages with 3 sub-questions testing concept understanding." },
                            { name: "Long Answer (LA)", mark: "5 Marks Each", desc: "Detailed derivations with step-by-step marking rubrics and internal choice." }
                        ].map((q, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">{q.name}</div>
                                    <div className="text-xs text-gray-500">{q.desc}</div>
                                </div>
                                <span className="bg-teal-50 text-[#01696f] px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap ml-4">
                                    {q.mark}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Visual Blueprint Card */}
                <div className="bg-[#111210] p-6 md:p-8 rounded-2xl border border-white/10 text-white shadow-2xl">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                        <div>
                            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Blueprint Scoring Matrix</span>
                            <h4 className="text-xl font-bold text-white mt-1">CBSE Class 12 Physics (70 Marks)</h4>
                        </div>
                        <span className="text-xs bg-teal-500/20 text-teal-300 px-3 py-1 rounded-md font-semibold">3 Hours • 33 Qs</span>
                    </div>

                    <div className="space-y-3 text-xs mb-6">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                            <span>Section A: 16 MCQs (1M)</span>
                            <span className="text-teal-400 font-bold">16 Marks</span>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                            <span>Section B: 5 VSA (2M)</span>
                            <span className="text-teal-400 font-bold">10 Marks</span>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                            <span>Section C: 7 SA (3M)</span>
                            <span className="text-teal-400 font-bold">21 Marks</span>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                            <span>Section D: 2 Case Studies (4M)</span>
                            <span className="text-teal-400 font-bold">8 Marks</span>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                            <span>Section E: 3 Long Answers (5M)</span>
                            <span className="text-teal-400 font-bold">15 Marks</span>
                        </div>
                    </div>

                    <div className="p-4 bg-teal-500/10 border border-teal-500/30 rounded-xl flex items-center justify-between">
                        <div>
                            <span className="text-xs font-bold text-teal-300 block">Total Marks: 70 / 70</span>
                            <span className="text-[11px] text-gray-400">Strictly follows current CBSE pattern</span>
                        </div>
                        <span className="text-xs bg-teal-500 text-gray-900 font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Ready to Generate
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- LATEX & 50,000+ QUESTION BANK ---
const QuestionBankSection = () => (
    <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                    50,000+ Verified Question Bank
                </div>
                <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">
                    Clean formulas, accurate diagrams, zero formatting stress
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Every physics derivation, organic reaction mechanism, and calculus equation renders crisply on printouts just like an official board exam paper.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* LaTeX Question Card 1 */}
                <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center text-xs text-gray-500 mb-4 pb-2 border-b border-gray-200">
                            <span className="font-bold text-[#01696f]">Physics • Class 12 (Electromagnetic Induction)</span>
                            <span className="bg-teal-100 text-teal-800 px-2.5 py-0.5 rounded font-bold">SA (3 Marks)</span>
                        </div>
                        <h4 className="font-bold text-gray-900 text-base mb-3">Q: Mutual Inductance of Two Coaxial Solenoids</h4>
                        <p className="text-sm text-gray-700 leading-relaxed mb-4">
                            <LatexText text="Derive an expression for the mutual inductance \(M\) of two long coaxial solenoids \(S_1\) and \(S_2\) of radii \(r_1\) and \(r_2\) (\(r_1 < r_2\)) having \(n_1\) and \(n_2\) turns per unit length." />
                        </p>
                        <div className="bg-white p-4 rounded-xl border border-gray-200 text-xs text-gray-800 space-y-2 mb-4">
                            <div className="text-[#01696f] font-bold">Official Step-Marking Scheme:</div>
                            <div><InlineMath math="B_1 = \mu_0 n_1 I_1" /></div>
                            <div><InlineMath math="\Phi_2 = n_2 l \cdot (\mu_0 n_1 I_1) \cdot (\pi r_1^2)" /></div>
                            <div><InlineMath math="M_{21} = \mu_0 n_1 n_2 \pi r_1^2 l" /></div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500 pt-3 border-t border-gray-200">
                        <span>CBSE Step-Marking Scheme Included</span>
                        <span className="text-teal-600 font-bold flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Verified Question</span>
                    </div>
                </div>

                {/* LaTeX Question Card 2 */}
                <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center text-xs text-gray-500 mb-4 pb-2 border-b border-gray-200">
                            <span className="font-bold text-[#01696f]">Chemistry • Class 12 (Electrochemistry)</span>
                            <span className="bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded font-bold">LA (5 Marks)</span>
                        </div>
                        <h4 className="font-bold text-gray-900 text-base mb-3">Q: Nernst Equation &amp; Equilibrium Constant</h4>
                        <p className="text-sm text-gray-700 leading-relaxed mb-4">
                            <LatexText text="Calculate the EMF of the cell at \(298\,\text{K}\) for: \(\text{Mg}(s) \mid \text{Mg}^{2+}(0.001\,\text{M}) \parallel \text{Cu}^{2+}(0.0001\,\text{M}) \mid \text{Cu}(s)\). Given \(E^\circ_{\text{Mg}^{2+}/\text{Mg}} = -2.37\,\text{V}\) and \(E^\circ_{\text{Cu}^{2+}/\text{Cu}} = +0.34\,\text{V}\)." />
                        </p>
                        <div className="bg-white p-4 rounded-xl border border-gray-200 text-xs text-gray-800 space-y-2 mb-4">
                            <div className="text-[#01696f] font-bold">Official Step-Marking Scheme:</div>
                            <div><InlineMath math="E^\circ_{\text{cell}} = 0.34 - (-2.37) = 2.71\,\text{V}" /></div>
                            <div className="overflow-x-auto"><BlockMath math="E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0591}{2} \log \frac{[\text{Mg}^{2+}]}{[\text{Cu}^{2+}]} = 2.71 - 0.0295 = 2.68\,\text{V}" /></div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500 pt-3 border-t border-gray-200">
                        <span>Internal Choice Option Available</span>
                        <span className="text-purple-600 font-bold flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Verified Question</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- WATERMARKED PRINT EXPORT & PREPONE SYNC ---
const PrintAndSyncSection = () => (
    <section className="py-24 bg-[#f7f6f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="text-xs font-bold text-[#01696f] uppercase tracking-wider mb-3">
                        Two Ways to Deliver
                    </div>
                    <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
                        Print for the classroom, <br />
                        <span className="text-[#01696f]">or send directly to student phones.</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Whether you conduct weekly pen-and-paper tests at your coaching center or assign digital practice for homework, CoachOne handles both without extra work.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                            <Printer className="w-6 h-6 text-[#01696f] mb-3" />
                            <h4 className="font-bold text-gray-900 mb-1">Branded Print PDFs</h4>
                            <p className="text-xs text-gray-600">Export clean question papers featuring your coaching institute logo, header instructions, and separate answer key sheets.</p>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                            <Smartphone className="w-6 h-6 text-[#01696f] mb-3" />
                            <h4 className="font-bold text-gray-900 mb-1">PrepOne App Delivery</h4>
                            <p className="text-xs text-gray-600">Assign tests to specific batches with timed test windows and instant automated checking.</p>
                        </div>
                    </div>

                    <Link to="/book-demo" className="bg-[#01696f] hover:bg-[#015257] text-white px-8 py-4 rounded-xl inline-flex items-center font-bold text-lg transition-all shadow-md">
                        <Calendar className="w-5 h-5 mr-3" />
                        See Test Studio in Action
                    </Link>
                </div>

                {/* Right Phone & PDF Graphic */}
                <div className="bg-[#111210] p-6 md:p-8 rounded-2xl border border-white/10 text-white shadow-2xl relative">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                        <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Institute Print &amp; Digital Pack</span>
                        <span className="text-xs bg-green-500/20 text-green-300 px-2.5 py-1 rounded-md font-semibold">Ready in 2 Seconds</span>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-white text-gray-900 p-5 rounded-xl font-serif text-xs border border-gray-300 shadow-md relative">
                            <div className="text-center font-bold text-sm tracking-wider uppercase mb-1">Apex Academy, Patna</div>
                            <div className="text-center text-[10px] text-gray-500 mb-3">All India Pre-Board Examination • Physics (Class 12)</div>
                            <div className="border-t border-b border-gray-300 py-1 flex justify-between text-[10px] font-sans font-bold mb-3">
                                <span>Time Allowed: 3 Hours</span>
                                <span>Max. Marks: 70</span>
                            </div>
                            <p className="text-[11px] leading-relaxed text-gray-800">
                                <strong>General Instructions:</strong> (1) Section A contains 16 MCQs of 1 mark each. (2) Section B contains 5 VSAs of 2 marks each. (3) Section C contains 7 SAs of 3 marks each...
                            </p>
                        </div>

                        <div className="bg-teal-500/10 p-4 rounded-xl border border-teal-500/30 flex items-center justify-between text-xs">
                            <div>
                                <span className="text-teal-300 font-bold block">1-Click Mobile App Assignment</span>
                                <span className="text-gray-400 text-[11px]">Synced to 48 students in Class 12 Morning Batch</span>
                            </div>
                            <span className="bg-teal-500 text-gray-900 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> Assigned
                            </span>
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
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="font-display text-4xl font-bold text-white mb-6">Stop spending your weekends setting test papers.</h2>
            <p className="font-body text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let CoachOne handle the question selection and paper formatting so your teachers can focus on teaching and guiding students.
            </p>
            <Link to="/book-demo" className="bg-[#01696f] hover:bg-[#015257] text-white px-8 py-4 rounded-xl inline-flex items-center justify-center transition-all font-bold text-lg shadow-[0_0_20px_rgba(1,105,111,0.4)]">
                <Calendar className="w-5 h-5 mr-3" />
                Book a 20-Minute Demo
            </Link>
        </div>
    </section>
);

export default function TestManagementMarketingPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <SEO
                title="Academic Test Studio & Question Bank | CoachOne"
                description="Create balanced CBSE, State Board, JEE, and NEET test papers in minutes. Pull from 50,000+ verified questions with formatted LaTeX math and watermarked PDF exports."
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
            <Hero />
            <StudioWizardSection />
            <BlueprintDistributionSection />
            <QuestionBankSection />
            <PrintAndSyncSection />
            <BottomCTA />
            <Footer />
        </div>
    );
}