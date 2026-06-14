import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, X, ChevronDown, CheckCircle2, Target, BrainCircuit,
  BarChart3, Smartphone, Laptop, Apple, PlayCircle, Calendar,
  ArrowRight, Quote, ShieldCheck, Zap
} from 'lucide-react';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';
import ProblemStatement from './componenets/ProblemStatement';
import LetterReveal from './componenets/LetterReveal';
import FadeIn from './componenets/FadeIn';
import SEO from './componenets/SEO';

// --- CUSTOM HOOKS ---

// Hook for counting up numbers smoothly
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Ease out quad
      const easeOut = progress * (2 - progress);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">


        <h1 className="font-display text-6xl md:text-7xl lg:text-7xl text-white font-bold leading-[1.1] mb-8 tracking-tight">
          {/* India's students deserve to know <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#818CF8]">exactly</span> where they stand. */}

          <LetterReveal text="India's students deserve to know " className="inline-block"
            delay={100} />
          <span className=" text-indigo-400 inline-block">
            <LetterReveal text="exactly" className="inline-block" delay={500} />
          </span>
          <LetterReveal text=" where they stand." className="inline-block" delay={800} />
        </h1>
        <FadeIn delay={1000} direction='up'>

          <p className="font-body text-lg md:text-xl text-[#94A3B8] max-w-3xl mb-12 leading-relaxed">
            SolvIQ builds AI-powered tools that make learning measurable, exam preparation precise, and outcomes predictable. Stop guessing. Start engineering your success.
          </p>
        </FadeIn>
        <FadeIn delay={1200} direction='up'>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
            <a href="/prepone" className="w-full sm:w-auto bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl font-body font-semibold text-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] flex items-center justify-center group">
              I'm a Student
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a href='/coachone' className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-xl font-body font-semibold text-lg transition-all backdrop-blur-sm flex items-center justify-center group">
              I Run a Coaching
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
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
    <section className="bg-[#0a0a0f] py-32 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Abstract dark tech background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d19900] rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4F46E5] rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <Quote className="w-16 h-16 text-[#d19900] opacity-50 mx-auto mb-8 transform -scale-x-100" />
        <h2 className="font-display text-4xl md:text-6xl text-white leading-tight font-bold tracking-tight">
          We believe exam preparation should feel less like a <span className="text-[#d19900] italic">Black Box</span>  and more like a <span className="text-[#7c75ff]">Learning experience</span>
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

            <div className="inline-block bg-[#4F46E5] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              For Students
            </div>
            <h3 className="font-display text-4xl font-bold text-[#0F172A] mb-6">Score higher.<br />Stress less.</h3>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#16A34A] mr-3 flex-shrink-0" />
                <span className="font-body text-[#0F172A]">AI pinpoints exactly which concepts you're weak in.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#16A34A] mr-3 flex-shrink-0" />
                <span className="font-body text-[#0F172A]">Instant subjective answer evaluation.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#16A34A] mr-3 flex-shrink-0" />
                <span className="font-body text-[#0F172A]">Personalized revision notes based on mistakes.</span>
              </li>
            </ul>

            <button onClick={() => window.location.href = '/prepone'} className="bg-[#0F172A] hover:bg-black text-white px-6 py-3 rounded-xl font-body font-semibold transition-all flex items-center group/btn mb-12">
              Explore PrepOne
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>

            {/* Phone Mockup */}
            <div className="relative mx-auto w-64 h-80 bg-white border-[8px] border-[#0F172A] rounded-t-[2.5rem] shadow-2xl overflow-hidden translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-[#0F172A] rounded-full z-20"></div>
              {/* UI Content */}
              <div className="pt-10 px-4">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full"></div>
                  <div className="w-20 h-4 bg-gray-200 rounded-full"></div>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#4F46E5] to-[#818CF8] rounded-2xl mb-4 p-4 text-white">
                  <div className="text-sm opacity-80">Mock Test Score</div>
                  <div className="text-3xl font-bold font-display mt-1">94%</div>
                  <div className="mt-4 text-xs bg-white/20 inline-block px-2 py-1 rounded">Top 5% in State</div>
                </div>
                <div className="w-full h-12 bg-gray-50 rounded-xl mb-3 border border-gray-100"></div>
                <div className="w-full h-12 bg-gray-50 rounded-xl border border-gray-100"></div>
              </div>
            </div>
          </div>

          {/* Card B: CoachOne */}
          <div className="bg-[#f7f6f2] rounded-[2rem] p-8 md:p-12 border border-[rgba(30,30,60,0.05)] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>

            <div className="inline-block bg-[#01696f] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              For Coaching Institutes
            </div>
            <h3 className="font-display text-4xl font-bold text-[#0F172A] mb-6">Run like a<br />data-driven machine.</h3>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#01696f] mr-3 flex-shrink-0" />
                <span className="font-body text-[#0F172A]">Automate checking for 500+ tests in minutes.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#01696f] mr-3 flex-shrink-0" />
                <span className="font-body text-[#0F172A]">Batch-wise analytics and predictive performance.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#01696f] mr-3 flex-shrink-0" />
                <span className="font-body text-[#0F172A]">Branded parent reports on WhatsApp instantly.</span>
              </li>
            </ul>

            <button onClick={() => window.location.href = '/coachone'} className="bg-[#0F172A] hover:bg-black text-white px-6 py-3 rounded-xl font-body font-semibold transition-all flex items-center group/btn mb-12">
              Explore CoachOne
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>

            {/* Dashboard Mockup */}
            <div className="relative mx-auto w-full h-80 bg-white border-[6px] border-[#0F172A] rounded-t-xl shadow-2xl overflow-hidden translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
              {/* Top bar */}
              <div className="w-full h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              {/* UI Content */}
              <div className="p-4 flex h-full">
                {/* Sidebar */}
                <div className="w-16 border-r border-gray-100 h-full flex flex-col space-y-4 pr-4">
                  <div className="w-8 h-8 rounded bg-teal-100 mb-4"></div>
                  <div className="w-full h-3 bg-gray-200 rounded"></div>
                  <div className="w-full h-3 bg-gray-200 rounded"></div>
                  <div className="w-full h-3 bg-gray-200 rounded"></div>
                </div>
                {/* Main Content */}
                <div className="flex-1 pl-4">
                  <div className="flex justify-between mb-4">
                    <div className="w-32 h-6 bg-gray-200 rounded"></div>
                    <div className="w-20 h-6 bg-teal-600 rounded"></div>
                  </div>
                  {/* Charts */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="h-16 bg-gray-50 rounded border border-gray-100"></div>
                    <div className="h-16 bg-gray-50 rounded border border-gray-100"></div>
                    <div className="h-16 bg-gray-50 rounded border border-gray-100"></div>
                  </div>
                  {/* Table */}
                  <div className="w-full h-32 bg-gray-50 rounded border border-gray-100 p-2">
                    <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
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

// 6. Stats Section
const StatCard = ({ end, suffix, label }) => {
  const { count, countRef } = useCountUp(end);

  return (
    <div ref={countRef} className="flex flex-col items-center justify-center p-6">
      <div className="font-display text-5xl md:text-6xl font-bold text-[#01696f] mb-2 flex items-baseline">
        {count.toLocaleString('en-IN')}
        <span className="text-3xl ml-1">{suffix}</span>
      </div>
      <div className="font-body text-sm font-medium text-[#64748B] uppercase tracking-wider text-center">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          <StatCard end={150000} suffix="+" label="Students on PrepOne" />
          <StatCard end={2500000} suffix="+" label="Mock Tests Evaluated" />
          <StatCard end={32} suffix="%" label="Avg. Score Improvement" />
          <StatCard end={450} suffix="+" label="Institutes using CoachOne" />
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
      detail: 'Class 12, CBSE Board',
      city: 'Patna',
      quote: 'PrepOne changed everything. I was stuck at 70% in Physics. The AI pointed out my exact derivation flaws. Scored 92% in pre-boards.',
      avatar: 'https://i.pravatar.cc/150?img=11'
    },
    {
      type: 'institute',
      name: 'Vidya Classes',
      detail: 'Director: Amit Kumar',
      city: 'Delhi',
      quote: 'We cut our evaluation time from 5 days to 2 hours. Our teachers now focus on teaching, not checking papers. Parents love the instant analytics.',
      avatar: 'https://i.pravatar.cc/150?img=14'
    },
    {
      type: 'student',
      name: 'Priya Desai',
      detail: 'NEET Aspirant',
      city: 'Kota',
      quote: 'The revision notes generated after every mock test are gold. It only shows me formulas I got wrong. Increased my mock score by 140 points.',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      type: 'institute',
      name: 'Apex Academy',
      detail: 'Founder: Dr. S. Rao',
      city: 'Hyderabad',
      quote: 'CoachOne gave us a massive competitive edge. We market ourselves as an AI-powered institute now. Enrollments are up 40% this year.',
      avatar: 'https://i.pravatar.cc/150?img=8'
    }
  ];

  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">Proof in the numbers.</h2>
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
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-gray-50 shadow-sm" />
                <div className="ml-4">
                  <h4 className="font-display font-bold text-[#0F172A]">{review.name}</h4>
                  <p className="font-body text-sm text-[#64748B]">{review.detail} • {review.city}</p>
                </div>
                {/* Badge based on type */}
                <div className={`ml-auto px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${review.type === 'student' ? 'bg-indigo-50 text-[#4F46E5]' : 'bg-teal-50 text-[#01696f]'}`}>
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

// 8. AI Deep-Dive
const AIDeepDive = () => {
  return (
    <section className="bg-[#111210] py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#01696f]/20 border border-[#01696f]/50 rounded-full px-4 py-1.5 mb-6">
              <BrainCircuit className="w-4 h-4 text-[#01696f] animate-pulse" />
              <span className="font-body text-sm text-teal-100 font-medium">Evaluation Engine v2.0</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Subjective grading that actually understands meaning.
            </h2>

            <p className="font-body text-lg text-gray-400 mb-8">
              Forget basic keyword matching. Our proprietary NLP models are trained on millions of checked answer sheets. We read for conceptual clarity, logical flow, and mathematical steps.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-[#01696f]/20 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <ShieldCheck className="w-4 h-4 text-[#01696f]" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-body text-lg">Step-by-step marking</h4>
                  <p className="text-gray-400 font-body text-sm mt-1">Awards partial marks for correct formulas even if final answer is wrong.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-[#01696f]/20 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-[#01696f]" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-body text-lg">Handwriting OCR</h4>
                  <p className="text-gray-400 font-body text-sm mt-1">Digitizes scribbles, cursive, and messy diagrams with 98% accuracy.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Mockup UI */}
          <div className="relative w-full aspect-square md:aspect-[4/3] bg-[#1a1b18] rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
              <div className="text-gray-300 font-mono text-sm">Student ID: 4892</div>
              <div className="flex space-x-2">
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold">Checked in 0.8s</span>
                <span className="bg-[#01696f]/20 text-[#01696f] px-2 py-1 rounded text-xs font-bold border border-[#01696f]/50">3/5 Marks</span>
              </div>
            </div>

            {/* Simulated handwritten answer with highlights */}
            <div className="space-y-4 font-mono text-gray-300 leading-loose relative">
              <p>Q2: Explain Newton's Second Law.</p>

              <div className="relative mt-4 p-4 bg-white/5 rounded-lg border border-white/5 font-sans italic text-lg text-gray-400">
                "The force acting on an object is equal to the mass of that object multiplied by its <span className="bg-green-500/20 border-b-2 border-green-500 text-green-300 px-1 relative group cursor-pointer">acceleration
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-900 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Concept matched</span>
                </span>.
                Formula is <span className="bg-red-500/20 border-b-2 border-red-500 text-red-300 px-1 relative group cursor-pointer">F = m/a
                  {/* Tooltip */}
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max bg-red-900 text-xs text-white px-2 py-1 rounded shadow-lg opacity-100 transition-opacity flex items-center z-10">
                    <X className="w-3 h-3 mr-1" /> Incorrect formula. Should be F = m * a
                  </span>
                </span>."
              </div>

              {/* AI Suggestion block appearing */}
              <div className="absolute top-50 right-4 left-4 bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-xl transform animate-fade-in-up">
                <div className="flex items-start">
                  <BrainCircuit className="w-5 h-5 text-[#01696f] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h5 className="text-white text-sm font-bold">AI Note</h5>
                    <p className="text-gray-400 text-xs mt-1">Student understands the definition but failed the mathematical representation. Add to revision queue: <span className="text-[#01696f]">Basic Kinematics Formulas</span>.</p>
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


const FooterCTA = () => {
  return (
    <footer className="bg-[#0F172A] relative overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Left: Students */}
        <div className="bg-[#0F172A] p-16 md:p-24 flex flex-col items-center text-center relative border-b md:border-b-0 md:border-r border-white/10 group">
          <div className="absolute inset-0 bg-[#4F46E5] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <Smartphone className="w-12 h-12 text-[#4F46E5] mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Students — Start Free Today</h2>
          <p className="font-body text-gray-400 mb-8 max-w-sm">Download PrepOne and evaluate your first 3 mock tests on us.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://play.google.com/store/apps/details?id=com.solviq.prepone" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 hover:scale-[1.02] hover:-translate-y-0.5 text-white px-6 py-3 rounded-xl flex items-center transition-all duration-300 border border-white/10 shadow-sm hover:shadow-lg">
              <PlayCircle className="w-5 h-5 mr-2" />
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none opacity-70">GET IT ON</div>
                <div className="font-bold text-sm leading-none mt-1">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Institutes */}
        <div className="bg-[#151e32] p-16 md:p-24 flex flex-col items-center text-center relative group">
          <div className="absolute inset-0 bg-[#01696f] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <Laptop className="w-12 h-12 text-[#01696f] mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Institutes — <Link to="/book-demo" className="hover:text-teal-200 transition-colors">Book a Demo</Link>
          </h2>
          <p className="font-body text-gray-400 mb-8 max-w-sm">See how CoachOne can automate your evaluation and delight parents.</p>
          <Link to="/book-demo" className="bg-[#01696f] hover:bg-[#015257] text-white px-8 py-4 rounded-xl font-body font-bold transition-all flex items-center shadow-lg transform hover:-translate-y-1">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule 20-Min Demo
          </Link>
        </div>
      </div>


    </footer>
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
        keywords="PrepOne app, AI exam prep, board exam mock tests, Bihar board class 12, CBSE preparation app, AI subjective grading"
        canonicalUrl="https://solviq.in"
      />

      <Navbar />
      <Hero />
      <ProblemStatement />
      <Philosophy />
      <DualGateway />
      {/* <Stats />
      <Testimonials /> */}
      <AIDeepDive />
      <FooterCTA />
      <Footer />
    </div>
  );
}
