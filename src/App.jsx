import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2, PlayCircle, Calendar,
  ArrowRight, ShieldCheck, Zap, FileText
} from 'lucide-react';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';
import LetterReveal from './componenets/LetterReveal';
import prepHomeImg from './assets/home/prepone-home.webp';
import prepAutoscoreImg from './assets/home/prepone-autoscore.webp';
import prepReportImg from './assets/home/prepone-report-card.webp';
import coachDashboardImg from './assets/coachone/dashboard-home.webp';
import ProblemStatement from './componenets/ProblemStatement';
import SEO from './componenets/SEO';
import { 
  SOLVIQ_ORGANIZATION_SCHEMA, 
  SOLVIQ_WEBSITE_SCHEMA, 
  buildPrepOneAppSchema, 
  buildCoachOneSaasSchema 
} from './componenets/Schema';

// --- COMPONENTS ---

// 2. Hero Section
const Hero = () => {
  return (
    <section className="sheet-ink text-white min-h-screen flex items-center overflow-hidden pt-20 pb-10">
      {/* Animated Background SVG */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full opacity-60" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Gradients for Data Streams */}
            <linearGradient id="stream1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
              <stop offset="20%" stopColor="#4F46E5" stopOpacity="0.8" />
              <stop offset="80%" stopColor="#818CF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="stream2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#01696f" stopOpacity="0" />
              <stop offset="50%" stopColor="#01696f" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3730A3" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="stream3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FCD34D" stopOpacity="0" />
              <stop offset="50%" stopColor="#FCD34D" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
            </linearGradient>

            {/* Glow Filter for Particles */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ─── AI Evaluation Thread (Background, faint) ─── */}
          <path id="path3" d="M-100 850 C 300 400, 700 800, 1100 150 C 1300 -50, 1400 100, 1540 0"
            stroke="url(#stream3)" strokeWidth="1.5" fill="none"
            className="animate-draw-path opacity-50" style={{ animationDelay: '1s' }} />

          {/* ─── Predictive Analytics Stream (Dashed) ─── */}
          <path id="path2" d="M-100 400 C 200 400, 400 650, 900 550 C 1200 480, 1300 700, 1540 600"
            stroke="url(#stream2)" strokeWidth="2" fill="none" strokeDasharray="6 8"
            className="animate-draw-path-slow opacity-70" />

          {/* ─── Main Student Progress Curve (Solid & Glowing) ─── */}
          {/* Base Line */}
          <path id="path1" d="M-100 700 C 300 700, 400 200, 800 200 C 1100 200, 1300 300, 1540 100"
            stroke="url(#stream1)" strokeWidth="3" fill="none"
            className="animate-draw-path opacity-90" strokeLinecap="round" />

          {/* Blurred Glow behind Main Line */}
          <path d="M-100 700 C 300 700, 400 200, 800 200 C 1100 200, 1300 300, 1540 100"
            stroke="url(#stream1)" strokeWidth="12" fill="none"
            className="animate-draw-path opacity-30 blur-md" strokeLinecap="round" />


          {/* ─── Animated Traveling Data Particles ─── */}
          {/* Particle on Main Progress Line */}
          <g filter="url(#glow)">
            <circle r="4" fill="#FCD34D">
              <animateMotion dur="8s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1">
                <mpath href="#path1" />
              </animateMotion>
            </circle>
          </g>

          {/* Particle on Predictive Line (Offset timing) */}
          <g filter="url(#glow)">
            <circle r="3" fill="#01696f">
              <animateMotion dur="12s" begin="2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1">
                <mpath href="#path2" />
              </animateMotion>
            </circle>
          </g>

          {/* ─── Static Pulsating Data Nodes (Milestones) ─── */}
          <g className="animate-fade-in" style={{ animationDelay: '4s' }}>
            {/* Node 1 */}
            <circle cx="800" cy="200" r="5" fill="#F59E0B" className="animate-pulse" />
            <circle cx="800" cy="200" r="14" fill="#F59E0B" opacity="0.2" className="animate-pulse" />

            {/* Node 2 */}
            <circle cx="1100" cy="150" r="4" fill="#4F46E5" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="1100" cy="150" r="12" fill="#4F46E5" opacity="0.3" className="animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Node 3 */}
            <circle cx="900" cy="550" r="3" fill="#01696f" className="animate-pulse" style={{ animationDelay: '2s' }} />
          </g>
        </svg>
      </div>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.12] mb-6 tracking-tight">
          <LetterReveal text="India's students deserve to know " className="inline-block" delay={100} />
          <br className="hidden md:block" />
          <span className="relative inline-block text-[#a5b4fc]">
            <LetterReveal text="exactly" className="inline-block" delay={500} />
            <svg
              className="absolute pointer-events-none"
              style={{ left: '-0.26em', top: '-0.12em', width: 'calc(100% + 0.46em)', height: 'calc(100% + 0.32em)' }}
              viewBox="0 0 300 100"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                className="co-pen"
                pathLength="1"
                vectorEffect="non-scaling-stroke"
                d="M 30 58 C 10 22, 110 6, 175 8 C 255 10, 298 30, 288 58 C 278 88, 180 96, 112 92 C 44 88, 6 70, 18 42 C 24 30, 44 24, 62 20"
                stroke="#ff7a6b"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <LetterReveal text=" where they stand." className="inline-block" delay={800} />
        </h1>

        <p className="font-body text-base sm:text-lg text-[#a8b4c4] max-w-2xl mb-8 leading-relaxed co-fade" style={{ '--d': '1000ms' }}>
          Education shouldn't be an act of guessing in the dark. SolvIQ builds the intelligence layer that transforms subjective tests into clear, measurable understanding for every student and coaching institute in India.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto co-fade" style={{ '--d': '1200ms' }}>
          <Link to="/prepone" className="group w-full sm:w-auto bg-[#4F46E5] hover:bg-[#4338CA] text-white px-5 py-3 rounded-lg font-body font-bold text-sm transition-colors flex items-center justify-center whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            I'm a Student
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/coachone" className="group w-full sm:w-auto bg-[#01696f] hover:bg-[#015257] text-white px-5 py-3 rounded-lg font-body font-bold text-sm transition-colors flex items-center justify-center whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            I Run a Coaching
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// 4. Philosophy: the black box, set as one. Words come into focus as you scroll through the section.
const PHILOSOPHY = [
  { t: 'We' }, { t: 'believe' }, { t: 'an' }, { t: 'exam' }, { t: 'should' }, { t: 'never' }, { t: 'be' }, { t: 'a' },
  { t: 'black box', kind: 'box', after: ',' },
  { t: 'but' }, { t: 'a' }, { t: 'mirror' }, { t: 'that' }, { t: 'reveals' }, { t: 'where' }, { t: 'understanding' }, { t: 'wavered' },
  { t: 'and' }, { t: 'how' }, { t: 'to' },
  { t: 'build it back', kind: 'mark', after: '.' }
];
const FADED = 0.16;

const Philosophy = () => {
  const sectionRef = useRef(null);
  const wordRefs = useRef([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      // 0 when the section reaches the top of the screen, 1 when it is about to scroll away.
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      // Words finish by 85% of the way through, so the full sentence rests on screen before the section ends.
      const position = Math.min(1, progress / 0.85) * (PHILOSOPHY.length + 1);
      wordRefs.current.forEach((node, i) => {
        if (!node) return;
        const amount = Math.min(1, Math.max(0, position - i));
        node.style.opacity = String(FADED + (1 - FADED) * amount);
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="co-scroll-reveal bg-[#F8F9FC] border-y border-gray-200">
      <div className="co-scroll-reveal-pin">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-[#0F172A] leading-[1.3] font-bold tracking-tight max-w-5xl">
            {PHILOSOPHY.map((word, i) => {
              const cls = word.kind === 'box'
                ? 'bg-[#0b0b0f] text-white px-3 py-0.5 rounded-sm box-decoration-clone'
                : word.kind === 'mark'
                  ? 'bg-[#ffd84d] px-2 box-decoration-clone'
                  : '';
              return (
                <span key={i} ref={(node) => { wordRefs.current[i] = node; }}>
                  <span className={cls}>{word.t}</span>
                  {word.after}
                  {i < PHILOSOPHY.length - 1 ? ' ' : ''}
                </span>
              );
            })}
          </h2>
        </div>
      </div>
    </section>
  );
};

// 5. The two products, shown with their real screens
const PLAY_DOWNLOAD = '/prepone/download?utm_source=website&utm_medium=home_page&utm_content=products';

const PhoneShot = ({ src, alt, className = '' }) => (
  <figure className={`rounded-[1.6rem] overflow-hidden bg-white border border-[#1e1b4b]/15 shadow-2xl shadow-indigo-950/25 ${className}`}>
    <img src={src} alt={alt} width={540} height={1200} loading="lazy" decoding="async" className="block w-full h-auto" />
  </figure>
);

const PrepOneRow = () => (
  <section className="bg-[#eef0ff] py-20 lg:py-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
      <div className="lg:col-span-5">
        <p className="text-sm font-bold text-[#4F46E5] mb-4">PrepOne, for students</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1e1b4b] leading-[1.08]">
          Score higher with conceptual clarity.
        </h2>
        <p className="mt-5 text-lg text-[#3b3a63] leading-relaxed max-w-lg">
          Write your answer on paper, take a photo, and get step marks the way an examiner would give them. Then practise the exact steps you lost marks on.
        </p>
        <ul className="mt-7 space-y-3 text-[#1e1b4b]">
          {[
            'Finds exactly which concepts and steps waver',
            'Marks handwritten answers step by step in seconds',
            'Revision notes built only from your reasoning mistakes'
          ].map((t) => (
            <li key={t} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#4F46E5] mr-3 mt-0.5 flex-shrink-0" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-6 gap-y-4">
          <a
            href={PLAY_DOWNLOAD}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-3.5 rounded-xl font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5]"
          >
            <PlayCircle className="w-5 h-5" />
            Get PrepOne on Google Play
          </a>
          <Link to="/prepone" className="inline-flex items-center whitespace-nowrap font-bold text-[#4F46E5] hover:text-[#4338CA]">
            See how PrepOne works <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
        <p className="mt-3 text-sm text-[#3b3a63]">Free to download. Android only for now.</p>
      </div>

      <div className="lg:col-span-7">
        <div className="flex items-end justify-center gap-3 sm:gap-5">
          <PhoneShot src={prepHomeImg} alt="PrepOne home screen with an exam countdown, chapter progress and the AutoScore AI entry" className="w-[30%] max-w-[210px]" />
          <PhoneShot src={prepAutoscoreImg} alt="PrepOne AutoScore AI evaluation report with what the AI read and step-by-step marks" className="w-[34%] max-w-[240px] -translate-y-8" />
          <PhoneShot src={prepReportImg} alt="PrepOne report card for a CBSE Physics full exam with correct, wrong and skipped counts" className="w-[30%] max-w-[210px]" />
        </div>
      </div>
    </div>
  </section>
);

const CoachOneRow = () => (
  <section className="co-sheet text-white py-20 lg:py-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
      <div className="lg:col-span-7 order-2 lg:order-1">
        <figure className="rounded-xl overflow-hidden bg-white border border-white/10 shadow-2xl shadow-black/40">
          <img
            src={coachDashboardImg}
            alt="CoachOne dashboard for an institute showing collected fees, pending fees, active students, running batches, and alerts"
            width={2000}
            height={1250}
            loading="lazy"
            decoding="async"
            className="block w-full h-auto"
          />
        </figure>
      </div>

      <div className="lg:col-span-5 order-1 lg:order-2">
        <p className="text-sm font-bold text-teal-200 mb-4">CoachOne, for coaching institutes</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.08]">
          Run your academy with clarity and calm.
        </h2>
        <p className="mt-5 text-lg text-teal-50/85 leading-relaxed max-w-lg">
          Teachers stop spending evenings on answer copies. You see where every batch loses marks, and parents hear about it the same day.
        </p>
        <ul className="mt-7 space-y-3">
          {[
            'AI step-marking of handwritten answers, reviewed by your teachers',
            'Mistake reports for each batch, traced back to weak earlier-class topics',
            'A test studio with 1 lakh+ verified MCQ and subjective questions',
            'WhatsApp parent reports, fee reminders and an admissions tracker'
          ].map((t) => (
            <li key={t} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#ffd84d] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-teal-50/95">{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-6 gap-y-4">
          <Link
            to="/book-demo"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#ffd84d] hover:bg-[#ffe27a] text-[#032b2e] px-6 py-3.5 rounded-xl font-bold transition-colors shadow-lg shadow-black/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Calendar className="w-5 h-5" />
            Book a 20-minute demo
          </Link>
          <Link to="/coachone" className="inline-flex items-center whitespace-nowrap font-bold text-white hover:text-[#ffd84d]">
            See how CoachOne works <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// 6. How the evaluation engine reads an answer: a marked answer sheet
const MARKED_LINES = [
  { text: 'Gauss: total flux  ∮ E·dA = q / ε₀', mark: '+1.0' },
  { text: 'Cylinder of radius r, length l.', mark: '' },
  { text: 'Ends: E ⊥ dA, so flux = 0.', mark: '' },
  { text: 'Curved surface: flux = E (2πrl)', mark: '+1.0' },
  { text: 'E (2πrl) = λl / ε₀', mark: '' },
  { text: 'E = λ / (2π ε₀ r)', mark: '+0.5' }
];

const ENGINE_POINTS = [
  { icon: ShieldCheck, title: 'Marks it like the board does', text: 'Awards partial credit for the law, the working and the result, even when one calculation slips.' },
  { icon: Zap, title: 'Reads real handwriting', text: 'Works from a phone photo of cursive writing, crossed-out working, fractions and hand-drawn diagrams.' },
  { icon: FileText, title: 'Separates a concept gap from a slip', text: 'Tells a misunderstood concept apart from a missed sign or notation, so the revision note targets the right thing.' }
];

const EngineSection = () => (
  <section className="bg-white py-20 lg:py-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
      <div className="lg:col-span-5">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] leading-[1.08]">
          Subjective evaluation that understands the maths and the science.
        </h2>
        <p className="mt-5 text-lg text-[#64748B] leading-relaxed">
          It does not hunt for keywords. It follows the steps of a derivation, the symmetry argument and the reasoning, the way an examiner reads a copy.
        </p>
        <ul className="mt-9 space-y-7">
          {ENGINE_POINTS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-lg bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-bold text-[#0F172A]">{title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed mt-1">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-7">
        <div className="text-xs font-semibold text-[#64748B] mb-2 px-1">Example: CBSE Class 12 Physics, 3 marks. Illustrative, not a real student.</div>
        <div
          className="relative rounded-xl border border-[#d9d5c7] shadow-xl shadow-black/10 overflow-hidden"
          style={{
            backgroundColor: '#fdfcf7',
            backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0, transparent 35px, #c9d7e6 35px, #c9d7e6 36px)',
            backgroundPosition: '0 14px'
          }}
        >
          <div className="absolute top-0 bottom-0 left-[3.25rem] w-px bg-[#e8806f]/70" aria-hidden="true"></div>
          <div className="pl-[4.25rem] pr-5 sm:pr-8 pt-3.5 pb-6">
            <p className="co-hand text-[#1d3a8a] leading-[36px] text-[17px] sm:text-[19px]">
              Q24. State Gauss's theorem. Use it to find the electric field due to an infinitely long line charge λ.
            </p>
            {MARKED_LINES.map((line, i) => (
              <div key={i} className="relative">
                <p className="co-hand text-[#1d3a8a] leading-[36px] text-[17px] sm:text-[19px] pr-16">{line.text}</p>
                {line.mark && (
                  <span
                    className="co-hand absolute right-0 top-0 leading-[36px] text-xl font-bold -rotate-6 text-[#d8432f]"
                  >
                    {line.mark}
                  </span>
                )}
              </div>
            ))}
            <p className="co-hand text-[#d8432f] leading-[36px] text-[17px] sm:text-[19px] mt-[36px]">
              Direction missing: write E as a vector along r̂. (−0.5)
            </p>
            <div className="flex items-baseline justify-between gap-4 mt-[36px]">
              <p className="co-hand text-[#d8432f] leading-[36px] text-[17px] sm:text-[19px]">Revision note sent: vector form of E.</p>
              <span className="co-hand text-3xl font-bold text-[#d8432f] -rotate-3 border-2 border-[#d8432f] rounded-full px-4 leading-[44px] flex-shrink-0">2.5 / 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 7. Facts
const FACTS = [
  { value: '1 lakh+', label: 'verified MCQ and subjective questions for institutes on CoachOne' },
  { value: 'Hindi, English', label: 'medium, in PrepOne' },
  { value: 'CBSE, Bihar Board', label: 'CBSE Class 12, and Bihar Board Class 10 and 12' },
  { value: '₹1.50 a page', label: 'to evaluate handwritten answers on CoachOne, only for answer pages' }
];

const Facts = () => (
  <section className="bg-[#F8F9FC] border-y border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
        {FACTS.map((f) => (
          <div key={f.value} className="border-l-4 border-[#4F46E5] pl-4">
            <dt className="font-body text-2xl md:text-3xl font-extrabold tracking-tight text-[#0F172A] leading-tight">{f.value}</dt>
            <dd className="text-sm text-[#64748B] mt-1.5 leading-snug">{f.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FC] font-body selection:bg-[#4F46E5] selection:text-white">
      <SEO
        title="SolvIQ India | Building the Intelligence Layer for Student Evaluation"
        description="SolvIQ builds AI-powered tools that make learning measurable, exam preparation precise, and outcomes predictable. Stop guessing. Start engineering your success."
        keywords="SolvIQ, AI educational tools, student evaluation, exam preparation, learning analytics, EdTech India, CoachOne, PrepOne"
        canonicalUrl="https://solviq.in/"
        schema={[
          SOLVIQ_ORGANIZATION_SCHEMA,
          SOLVIQ_WEBSITE_SCHEMA,
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "SolvIQ Flagship EdTech Platforms",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "PrepOne - AI Board Exam Strategist",
                "item": buildPrepOneAppSchema()
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "CoachOne - Operating System for Coaching Institutes",
                "item": buildCoachOneSaasSchema()
              }
            ]
          }
        ]}
      />

      <Navbar />
      <Hero />
      <ProblemStatement />
      <Philosophy />
      <PrepOneRow />
      <CoachOneRow />
      <EngineSection />
      <Facts />
      <Footer />
    </div>
  );
}
