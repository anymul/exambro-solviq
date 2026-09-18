import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  X, CheckCircle2, BrainCircuit,
  Smartphone, Laptop, PlayCircle, Calendar,
  ArrowRight, Quote, ShieldCheck, Zap, FileText
} from 'lucide-react';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';
import ProblemStatement from './componenets/ProblemStatement';
import LetterReveal from './componenets/LetterReveal';
import FadeIn from './componenets/FadeIn';
import SEO from './componenets/SEO';
import { 
  SOLVIQ_ORGANIZATION_SCHEMA, 
  SOLVIQ_WEBSITE_SCHEMA, 
  buildPrepOneAppSchema, 
  buildCoachOneSaasSchema 
} from './componenets/Schema';

// --- CUSTOM HOOKS ---

// Hook for counting up numbers smoothly without starting from zero
const useCountUp = (end, start = 0, duration = 1000) => {
  const [count, setCount] = useState(start || end);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || start >= end) return;
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Ease out quad
      const easeOut = progress * (2 - progress);
      setCount(Math.floor(start + easeOut * (end - start)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, start, duration]);

  return { count, countRef };
};

// --- COMPONENTS ---

<Navbar />
// 2. Hero Section
const Hero = () => {
  return (
    <section className="relative bg-[#111210] min-h-[100vh] flex items-center overflow-hidden pt-20">
      {/* Animated Background SVG */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="w-full h-full object-cover opacity-60" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            {/* Subtle Graph Paper Grid Pattern */}
            <pattern id="dataGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.05)" />
            </pattern>

            {/* Glow Filter for Particles */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Grid */}
          <rect width="100%" height="100%" fill="url(#dataGrid)" />

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
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] text-white font-bold leading-[1.08] mb-8 tracking-tight">
          <LetterReveal text="India's students deserve to know " className="inline-block"
            delay={100} />
          <span className=" text-indigo-400 inline-block">
            <LetterReveal text="exactly" className="inline-block" delay={500} />
          </span>
          <LetterReveal text=" where they stand." className="inline-block" delay={800} />
        </h1>
        <FadeIn delay={1000} direction='up'>
          <p className="font-body text-lg sm:text-xl md:text-2xl text-[#94A3B8] max-w-3xl mb-10 sm:mb-12 leading-relaxed font-normal">
            Education shouldn't be an act of guessing in the dark. SolvIQ builds the intelligence layer that transforms subjective tests into clear, measurable understanding for every student and coaching institute in India.
          </p>
        </FadeIn>
        <FadeIn delay={1200} direction='up'>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 w-full sm:w-auto">
            <Link to="/prepone" className="w-full sm:w-auto bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-3 rounded-lg font-body font-semibold text-base transition-all shadow-[0_0_20px_rgba(79,70,229,0.25)] hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] flex items-center justify-center group">
              I'm a Student (PrepOne)
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/coachone" className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3 rounded-lg font-body font-semibold text-base transition-all backdrop-blur-sm flex items-center justify-center group">
              I Run a Coaching (CoachOne)
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// 3. Problem Statement
<ProblemStatement />
// 4. AI Philosophy
const Philosophy = () => {
  return (
    <section className="bg-[#0a0a0f] py-28 md:py-36 relative overflow-hidden flex items-center justify-center min-h-[55vh]">
      {/* Abstract dark tech background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d19900] rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4F46E5] rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <Quote className="w-16 h-16 text-[#d19900] opacity-60 mx-auto mb-8 transform -scale-x-100" />
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.2] font-bold tracking-tight">
          We believe an exam should never be a <span className="text-[#d19900] italic">black box</span>, but a mirror that reveals where understanding wavered and how to <span className="text-[#7c75ff]">build it back</span>.
        </h2>
      </div>
    </section>
  );
};

// 5. Dual Product Gateway
const DualGateway = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">Choose your path to excellence</h2>
          <p className="font-body text-xl text-[#64748B]">Purpose-built tools for the two pillars of education.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card A: PrepOne */}
          <div className="bg-[#f7f6f2] rounded-[2rem] p-8 md:p-12 border border-[rgba(30,30,60,0.05)] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>

            <div className="inline-block bg-[#4F46E5] text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-6">
              For Students
            </div>
            <h3 className="font-display text-4xl font-bold text-[#0F172A] mb-6">Score higher with<br />conceptual clarity.</h3>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#16A34A] mr-3 flex-shrink-0" />
                <span className="font-body text-[#0F172A]">AI pinpoints exactly which concepts and steps waver.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#16A34A] mr-3 flex-shrink-0" />
                <span className="font-body text-[#0F172A]">Instant subjective answer evaluation with authentic step-marking.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#16A34A] mr-3 flex-shrink-0" />
                <span className="font-body text-[#0F172A]">Targeted revision notes focused strictly on reasoning flaws.</span>
              </li>
            </ul>

            <Link to="/prepone" className="inline-flex bg-[#0F172A] hover:bg-black text-white px-5 py-2.5 rounded-lg font-body font-medium text-sm transition-all items-center group/btn mb-8">
              Explore PrepOne
              <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" />
            </Link>

            {/* Phone Mockup */}
            <div className="relative mx-auto w-64 h-80 bg-white border-[8px] border-[#0F172A] rounded-t-[2.5rem] shadow-2xl overflow-hidden translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-[#0F172A] rounded-full z-20"></div>
              {/* UI Content */}
              <div className="pt-10 px-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xs font-bold text-[#0F172A]">PrepOne Evaluation</div>
                  <div className="text-[10px] font-semibold text-[#4F46E5] bg-indigo-50 px-2 py-0.5 rounded">CBSE Class 12</div>
                </div>
                <div className="w-full bg-gradient-to-br from-[#4F46E5] to-[#818CF8] rounded-2xl mb-3 p-3.5 text-white">
                  <div className="text-xs opacity-85">Physics Pre-Board #03</div>
                  <div className="text-2xl font-bold font-display mt-0.5">68 / 70</div>
                  <div className="mt-2 text-[10px] bg-white/20 inline-block px-2 py-0.5 rounded font-medium">Top 2% in Batch</div>
                </div>
                <div className="w-full bg-slate-50 rounded-xl mb-2.5 p-2.5 border border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-[#0F172A]">Gauss's Law Proof</div>
                    <div className="text-[9px] text-[#64748B]">Step marking: 4.5 / 5.0</div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+90%</span>
                </div>
                <div className="w-full bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-[#0F172A]">Wave Optics Derivation</div>
                    <div className="text-[9px] text-[#64748B]">Fringe width formula intact</div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">5 / 5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card B: CoachOne */}
          <div className="bg-[#f7f6f2] rounded-[2rem] p-8 md:p-12 border border-[rgba(30,30,60,0.05)] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>

            <div className="inline-block bg-[#01696f] text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-6">
              For Coaching Institutes
            </div>
            <h3 className="font-display text-4xl font-bold text-[#0F172A] mb-6">Run your academy with<br />clarity and calm.</h3>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#01696f] mr-3 flex-shrink-0" />
                <span className="font-body text-[#0F172A]">Bulk AI subjective grading with authentic step-marking.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#01696f] mr-3 flex-shrink-0" />
                <span className="font-body text-[#0F172A]">Pedagogical telemetry: distractor traps &amp; root-cause analysis.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#01696f] mr-3 flex-shrink-0" />
                <span className="font-body text-[#0F172A]">Academic Test Studio with 50,000+ verified CBSE and State questions.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#01696f] mr-3 flex-shrink-0" />
                <span className="font-body text-[#0F172A]">Automated WhatsApp parent reports, fee invoicing, and student CRM.</span>
              </li>
            </ul>

            <Link to="/coachone" className="inline-flex bg-[#0F172A] hover:bg-black text-white px-5 py-2.5 rounded-lg font-body font-medium text-sm transition-all items-center group/btn mb-8">
              Explore CoachOne
              <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" />
            </Link>

            {/* Dashboard Mockup */}
            <div className="relative mx-auto w-full h-80 bg-white border-[6px] border-[#0F172A] rounded-t-xl shadow-2xl overflow-hidden translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
              {/* Top bar */}
              <div className="w-full h-8 bg-gray-100 border-b border-gray-200 flex items-center justify-between px-3">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="text-[11px] font-semibold text-gray-600">CoachOne Telemetry Console</div>
                <div className="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded font-medium">Batch A Active</div>
              </div>
              {/* UI Content */}
              <div className="p-4 flex h-full">
                {/* Sidebar */}
                <div className="w-24 border-r border-gray-100 h-full flex flex-col space-y-2 pr-3">
                  <div className="text-[10px] font-bold text-[#01696f] bg-teal-50 px-2 py-1 rounded">Evaluation</div>
                  <div className="text-[10px] text-gray-500 px-2 py-1">Telemetry</div>
                  <div className="text-[10px] text-gray-500 px-2 py-1">WhatsApp</div>
                  <div className="text-[10px] text-gray-500 px-2 py-1">Students</div>
                </div>
                {/* Main Content */}
                <div className="flex-1 pl-4">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="text-xs font-bold text-[#0F172A]">Class 12 JEE-Adv Mock #08</div>
                      <div className="text-[10px] text-gray-500">48 papers checked in 4m 12s</div>
                    </div>
                    <div className="text-[10px] font-bold text-white bg-[#01696f] px-2.5 py-1 rounded-md">48 Dispatched</div>
                  </div>
                  {/* KPI summary cards */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="text-[9px] text-gray-500 uppercase">Avg Score</div>
                      <div className="text-sm font-bold text-[#0F172A]">78.4%</div>
                    </div>
                    <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="text-[9px] text-gray-500 uppercase">Distractor Trap</div>
                      <div className="text-sm font-bold text-amber-600">Optics Q14</div>
                    </div>
                    <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="text-[9px] text-gray-500 uppercase">Parent Pings</div>
                      <div className="text-sm font-bold text-emerald-600">100% Sent</div>
                    </div>
                  </div>
                  {/* Student list snippet */}
                  <div className="w-full bg-gray-50 rounded-lg border border-gray-100 p-2 space-y-1.5">
                    <div className="flex justify-between text-[10px] font-semibold text-gray-700 pb-1 border-b border-gray-200">
                      <span>Student</span>
                      <span>Score</span>
                      <span>Diagnosis</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-600">
                      <span className="font-medium text-gray-900">Aarav Sen</span>
                      <span className="font-bold text-emerald-600">94%</span>
                      <span className="text-gray-500 truncate max-w-[120px]">Mastery in Mechanics</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-600">
                      <span className="font-medium text-gray-900">Meera Patel</span>
                      <span className="font-bold text-indigo-600">81%</span>
                      <span className="text-gray-500 truncate max-w-[120px]">Calculation slip Q4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 6. Stats Section - System & Pedagogical Benchmarks
const StatCard = ({ start, end, prefix = '', suffix = '', label, sublabel, isStatic = false, staticValue = '' }) => {
  const { count, countRef } = useCountUp(end || 0, start || 0, 900);

  return (
    <div ref={countRef} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#01696f] mb-2 flex items-baseline justify-center">
        {prefix && <span className="text-2xl sm:text-3xl md:text-4xl mr-1 text-[#01696f]/80 font-bold">{prefix}</span>}
        <span>{isStatic ? staticValue : count.toLocaleString('en-IN')}</span>
        {suffix && <span className="text-2xl sm:text-3xl ml-1">{suffix}</span>}
      </div>
      <div className="font-body text-sm sm:text-base font-bold text-[#0F172A] tracking-tight">{label}</div>
      {sublabel && <div className="font-body text-xs text-[#64748B] mt-1">{sublabel}</div>}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <StatCard 
            start={48500} 
            end={50000} 
            suffix="+" 
            label="Verified Questions" 
            sublabel="Curated CBSE & State repository" 
          />
          <StatCard 
            isStatic={true} 
            staticValue="< 3" 
            suffix="s" 
            label="Evaluation Latency" 
            sublabel="Per multi-page answer sheet" 
          />
          <StatCard 
            start={94} 
            end={98} 
            suffix="%" 
            label="Handwriting OCR" 
            sublabel="Math notations & diagrams" 
          />
          <StatCard 
            start={95} 
            end={100} 
            suffix="%" 
            label="Step-Marking Rubrics" 
            sublabel="Authentic board partial credit" 
          />
        </div>
      </div>
    </section>
  );
};

// 7. Social Proof
const Testimonials = () => {
  const reviews = [
    {
      type: 'student',
      name: 'Rohan Sharma',
      initials: 'RS',
      detail: 'Class 12, CBSE Board',
      city: 'Patna',
      quote: 'PrepOne changed everything. I was stuck at 70% in Physics. The AI pointed out my exact derivation flaws. Scored 92% in pre-boards.'
    },
    {
      type: 'institute',
      name: 'Vidya Classes',
      initials: 'VC',
      detail: 'Director: Amit Kumar',
      city: 'Delhi',
      quote: 'We cut our evaluation time from 5 days to 2 hours. Our teachers now focus on teaching, not checking papers. Parents love the instant analytics.'
    },
    {
      type: 'student',
      name: 'Priya Desai',
      initials: 'PD',
      detail: 'NEET Aspirant',
      city: 'Kota',
      quote: 'The revision notes generated after every mock test are gold. It only shows me formulas I got wrong. Increased my mock score by 140 points.'
    },
    {
      type: 'institute',
      name: 'Apex Academy',
      initials: 'AA',
      detail: 'Founder: Dr. S. Rao',
      city: 'Hyderabad',
      quote: 'CoachOne gave us a massive competitive edge. We market ourselves as an AI-powered institute now. Enrollments are up 40% this year.'
    }
  ];

  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">Proof in the outcomes.</h2>
          <p className="font-body text-lg text-[#64748B] max-w-2xl mx-auto">Real experiences from students finding their breakthrough and institutes reclaiming teaching time.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              <div>
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-[#F59E0B] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="font-body text-lg text-[#0F172A] font-medium leading-relaxed mb-8">"{review.quote}"</p>
              </div>
              <div className="flex items-center mt-auto">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-sm flex-shrink-0 ${review.type === 'student' ? 'bg-[#4F46E5]' : 'bg-[#01696f]'}`}>
                  {review.initials}
                </div>
                <div className="ml-4">
                  <h4 className="font-display font-bold text-[#0F172A]">{review.name}</h4>
                  <p className="font-body text-sm text-[#64748B]">{review.detail} • {review.city}</p>
                </div>
                {/* Badge based on type */}
                <div className={`ml-auto px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${review.type === 'student' ? 'bg-indigo-50 text-[#4F46E5]' : 'bg-teal-50 text-[#01696f]'}`}>
                  {review.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 8. AI Deep-Dive - Academic Evaluation Engine
const AIDeepDive = () => {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Pedagogical & Engineering Thesis */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200/80 rounded-md px-3.5 py-1.5 mb-6">
              <BrainCircuit className="w-4 h-4 text-[#01696f]" />
              <span className="font-body text-xs text-[#01696f] font-bold uppercase tracking-wider">Evaluation Engine v2.0</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6 tracking-tight">
              Subjective evaluation that understands mathematical and scientific meaning.
            </h2>

            <p className="font-body text-base sm:text-lg text-[#64748B] mb-8 leading-relaxed">
              Forget shallow keyword matching. SolvIQ parses the authentic integrity of student derivations: multi-step algebraic proofs, symmetry arguments, boundary conditions, and conceptual step logic.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#01696f]" />
                </div>
                <div>
                  <h3 className="text-[#0F172A] font-bold font-body text-base sm:text-lg">Board-Aligned Step Marking</h3>
                  <p className="text-[#64748B] font-body text-sm mt-1 leading-relaxed">
                    Awards authentic partial credit for intermediate steps and valid formulas, even if an arithmetic calculation slips in the final step.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-[#01696f]" />
                </div>
                <div>
                  <h3 className="text-[#0F172A] font-bold font-body text-base sm:text-lg">Neural Vision &amp; Handwriting OCR</h3>
                  <p className="text-[#64748B] font-body text-sm mt-1 leading-relaxed">
                    Trained on real Indian student exam scripts. Digitizes cursive handwriting, struck-out working, fractions, and hand-drawn diagrams with 98% accuracy.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <FileText className="w-4 h-4 text-[#01696f]" />
                </div>
                <div>
                  <h3 className="text-[#0F172A] font-bold font-body text-base sm:text-lg">Pedagogical Flaw Classification</h3>
                  <p className="text-[#64748B] font-body text-sm mt-1 leading-relaxed">
                    Distinguishes core conceptual misconceptions from mechanical algebra errors and notation omissions, routing exact revision notes directly to the student.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Authentic Examiner Marking Console */}
          <div className="bg-[#f7f6f2] rounded-2xl p-5 sm:p-7 md:p-8 border border-[rgba(30,30,60,0.08)] shadow-lg">
            {/* Console Header Bar */}
            <div className="flex flex-wrap justify-between items-center pb-4 mb-5 border-b border-gray-200/80 gap-2">
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#01696f] bg-teal-100/70 px-2.5 py-1 rounded">CBSE Class 12 Physics</span>
                <span className="text-xs text-gray-500 font-medium">• Section C (3 Marks)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200/80 px-2.5 py-1 rounded">
                  Score: 2.5 / 3.0 M
                </span>
              </div>
            </div>

            {/* Question Prompt */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 mb-4 shadow-sm">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Question 24 • Subjective Derivation</div>
              <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                State Gauss's theorem. Use it to derive the electric field due to an infinitely long uniform line charge of linear density λ.
              </p>
            </div>

            {/* Rubric Steps */}
            <div className="space-y-3">
              {/* Step 1 */}
              <div className="bg-white p-3.5 rounded-xl border border-gray-200/70 shadow-sm flex items-start justify-between gap-3">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Step 1: Statement &amp; Law</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">Criteria Met</span>
                  </div>
                  <div className="text-xs font-serif italic text-gray-800">
                    "Total electric flux ∮ E · dA = q_enclosed / ε₀"
                  </div>
                  <div className="text-[11px] text-gray-500">
                    Correct closed surface formulation and statement.
                  </div>
                </div>
                <div className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded flex-shrink-0">
                  +1.0 / 1.0 M
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-3.5 rounded-xl border border-gray-200/70 shadow-sm flex items-start justify-between gap-3">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Step 2: Gaussian Cylinder &amp; Symmetry</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">Criteria Met</span>
                  </div>
                  <div className="text-xs font-serif italic text-gray-800">
                    "Circular end-caps flux = 0 (E ⟂ dA); curved surface flux = E(2πrl)."
                  </div>
                  <div className="text-[11px] text-gray-500">
                    Symmetry argument and vector dot product intact.
                  </div>
                </div>
                <div className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded flex-shrink-0">
                  +1.0 / 1.0 M
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-3.5 rounded-xl border border-amber-200/80 shadow-sm flex items-start justify-between gap-3">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Step 3: Charge Enclosure &amp; Result</span>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">Partial Credit</span>
                  </div>
                  <div className="text-xs font-serif italic text-gray-800">
                    "E(2πrl) = (λl)/ε₀ ⟹ E = λ / (2πε₀r)"
                  </div>
                  <div className="text-[11px] text-amber-800 font-medium">
                    Partial deduction (-0.5M): Correct magnitude, but radial unit vector n̂ was omitted in final vector notation.
                  </div>
                </div>
                <div className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded flex-shrink-0">
                  +0.5 / 1.0 M
                </div>
              </div>
            </div>

            {/* Diagnostic Auto-Action */}
            <div className="mt-4 p-3.5 bg-teal-50/90 rounded-xl border border-teal-200/70 flex items-start space-x-3">
              <CheckCircle2 className="w-4 h-4 text-[#01696f] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[#01696f] leading-relaxed">
                <span className="font-bold">Pedagogical Diagnosis: </span>
                Conceptual understanding of cylindrical symmetry verified. Dispatched targeted revision micro-module on vector conventions in electrostatics.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


const FooterCTA = () => {
  return (
    <section className="bg-gradient-to-b from-[#0F172A] to-[#0F1117] py-20 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Start engineering your academic outcomes.
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-400">
            Whether you are a student striving for conceptual mastery or an institute scaling pedagogical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Card A: Students / PrepOne */}
          <div className="bg-white/5 border border-white/10 hover:border-indigo-500/40 rounded-2xl p-7 md:p-8 transition-all duration-300 relative group flex flex-col justify-between">
            <div className="absolute inset-0 bg-[#4F46E5] opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#4F46E5]/15 border border-[#4F46E5]/30 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-[#818CF8]" />
                </div>
                <span className="text-[11px] font-bold text-indigo-300 bg-indigo-500/15 border border-indigo-500/25 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  For Students
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">PrepOne</h3>
              <p className="font-body text-sm text-gray-400 mb-6 leading-relaxed">
                Scan your handwritten answers. Get board step-marking, pinpoint conceptual errors, and evaluate your first 3 tests free.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.solviq.prepone"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-white/20 hover:scale-[1.02] text-white px-5 py-2.5 rounded-lg flex items-center transition-all duration-300 border border-white/15 shadow-sm"
              >
                <PlayCircle className="w-4 h-4 mr-2 text-white/80" />
                <div className="text-left">
                  <div className="text-[9px] uppercase leading-none opacity-70">GET IT ON</div>
                  <div className="font-semibold text-xs leading-none mt-1">Google Play</div>
                </div>
              </a>
              <Link
                to="/prepone"
                className="text-xs font-semibold text-indigo-300 hover:text-white px-3 py-2 transition-colors flex items-center"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Card B: Institutes / CoachOne */}
          <div className="bg-white/5 border border-white/10 hover:border-teal-500/40 rounded-2xl p-7 md:p-8 transition-all duration-300 relative group flex flex-col justify-between">
            <div className="absolute inset-0 bg-[#01696f] opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#01696f]/20 border border-[#01696f]/40 flex items-center justify-center">
                  <Laptop className="w-6 h-6 text-[#5EEAD4]" />
                </div>
                <span className="text-[11px] font-bold text-teal-300 bg-teal-500/15 border border-teal-500/25 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  For Institutes
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">CoachOne</h3>
              <p className="font-body text-sm text-gray-400 mb-6 leading-relaxed">
                Automate bulk paper evaluations in minutes, track batch learning distractor traps, and delight parents with automated WhatsApp telemetry.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/book-demo"
                className="bg-[#01696f] hover:bg-[#015257] text-white px-5 py-2.5 rounded-lg font-body font-semibold text-sm transition-all flex items-center shadow-md transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule 20-Min Demo
              </Link>
              <Link
                to="/coachone"
                className="text-xs font-semibold text-teal-300 hover:text-white px-3 py-2 transition-colors flex items-center"
              >
                Explore Platform
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// MAIN APP COMPONENT
export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FC] font-body selection:bg-[#4F46E5] selection:text-white">
      {/* Injecting Fonts and custom CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
       

        @keyframes drawPath {
          0% { stroke-dashoffset: 3000; }
          100% { stroke-dashoffset: 0; }
        }
        
        .animate-draw-path {
          stroke-dasharray: 3000;
          stroke-dashoffset: 3000;
          animation: drawPath 8s ease-in-out forwards;
        }

        .animate-draw-path-slow {
          stroke-dasharray: 3000;
          stroke-dashoffset: 3000;
          animation: drawPath 12s ease-in-out forwards 1s;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: 2s; /* To show it after a delay in the mockup */
          opacity: 0;
        }
      `}} />

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
      <DualGateway />
      <Stats />
      <Testimonials />
      <AIDeepDive />
      <FooterCTA />
      <Footer />
    </div>
  );
}
