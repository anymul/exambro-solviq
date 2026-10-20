import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, BrainCircuit, Rocket, MapPin, Users, Lightbulb, ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import anmol from '../assets/anmol.webp';
import abhinav from '../assets/abhinav.webp';
import growth from '../assets/growth.png';
import SEO from '../componenets/SEO';
import { DownloadLink } from '../componenets/prepone/ui';
import { DemoLink } from '../componenets/coachone/ui';
import { BTN_ON_TEAL, BTN_GHOST_ON_TEAL } from '../componenets/coachone/tokens';
import { SOLVIQ_ORGANIZATION_SCHEMA, buildBreadcrumbSchema } from '../componenets/Schema';

// Scroll-scrubbed choreography (GSAP ScrollTrigger), used only where it adds impact: key text coming from faded to
// full as you read it, the learning loop building step by step, and the timeline drawing itself. Opacity is the only
// thing that moves, apart from the two drawn lines. Every tween's progress is bound to the scroll position,
// so scrolling back rewinds it. It runs in the browser after hydration and never with reduced motion,
// so the server-rendered page stays fully visible without it.
function useScrollChoreography(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    let cancelled = false;
    let teardown = null;

    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: '(prefers-reduced-motion: no-preference)',
          desk: '(min-width: 1024px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)'
        },
        (context) => {
          const { motion, desk } = context.conditions;
          if (!motion) return undefined;

          const $ = (name) => [...root.querySelectorAll(`[data-scrub="${name}"]`)];
          const restores = [];

          // High-impact text: each word comes from faded to full as the scroll passes it. Words are split in the
          // browser only, so the server-rendered text stays whole, and the original nodes are put back on cleanup.
          $('words').forEach((el) => {
            const original = [...el.childNodes];
            const words = el.textContent.trim().split(/\s+/);
            el.textContent = '';
            const spans = words.map((word, i) => {
              const span = document.createElement('span');
              span.textContent = word;
              el.appendChild(span);
              if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
              return span;
            });
            restores.push(() => {
              el.textContent = '';
              original.forEach((node) => el.appendChild(node));
            });
            gsap.fromTo(
              spans,
              { opacity: 0.16 },
              { opacity: 1, ease: 'none', duration: 0.2, stagger: { each: 0.06 }, scrollTrigger: { trigger: el, start: 'top 88%', end: 'bottom 50%', scrub: true } }
            );
          });

          // Faded to full for a single block, nothing else moves.
          const fade = (el, start = 'top 90%', end = 'top 62%') =>
            gsap.fromTo(el, { opacity: 0.15 }, { opacity: 1, ease: 'none', scrollTrigger: { trigger: el, start, end, scrub: true } });

          // The learning loop: pinned on desktop, the five steps come up one by one and the red pen circles step three.
          const loop = $('loop')[0];
          const cards = $('loop-card');
          const pen = $('loop-pen')[0];
          const line = $('loop-line')[0];
          const note = $('loop-note')[0];
          if (loop && cards.length) {
            if (desk) {
              const tl = gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: { trigger: loop, start: 'top top', end: '+=150%', pin: true, scrub: 0.6, anticipatePin: 1 }
              });
              tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.82 }, 0.04);
              cards.forEach((card, i) => {
                tl.fromTo(card, { opacity: 0.12 }, { opacity: 1, duration: 0.1 }, 0.04 + i * 0.155);
              });
              tl.fromTo(pen, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.12 }, 0.4);
              tl.fromTo(note, { opacity: 0.12 }, { opacity: 1, duration: 0.1 }, 0.84);
              tl.to({}, { duration: 0.06 }, 0.94);
            } else {
              cards.forEach((card) => fade(card));
              gsap.fromTo(pen, { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: pen.closest('li'), start: 'top 70%', end: 'top 40%', scrub: 0.5 } });
              fade(note);
            }
          }

          // Timeline: the line draws down the page and each milestone comes from faded to full as it is reached.
          const roadLine = $('road-line')[0];
          const road = $('road')[0];
          if (roadLine && road) {
            gsap.fromTo(roadLine, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: road, start: 'top 70%', end: 'bottom 65%', scrub: true } });
          }
          $('road-item').forEach((el) => fade(el, 'top 90%', 'top 65%'));
          $('road-node').forEach((el) => fade(el, 'top 90%', 'top 70%'));

          return () => restores.forEach((restore) => restore());
        },
        root
      );

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener('load', refresh);
      if (document.fonts?.ready) document.fonts.ready.then(refresh);

      teardown = () => {
        window.removeEventListener('load', refresh);
        mm.revert();
      };
    });

    return () => {
      cancelled = true;
      if (teardown) teardown();
    };
  }, [rootRef]);
}

const Hero = () => (
  <section className="co-sheet text-white overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-28">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <p className="co-note text-xl text-[#ffd84d] mb-3 inline-block co-fade">About SolvIQ</p>
      <h1 className="font-display text-5xl md:text-7xl leading-[1.04] co-fade" style={{ '--d': '100ms' }}>
        Students work hard. Almost no one tells them what to fix.
      </h1>
      <p className="font-body text-lg md:text-xl text-teal-50/90 mt-8 max-w-2xl leading-relaxed co-fade" style={{ '--d': '250ms' }}>
        SolvIQ builds PrepOne for students and CoachOne for coaching institutes. Both close the loop between practice and feedback, the part of learning that classrooms rarely have time for.
      </p>
    </div>
  </section>
);

const Story = () => (
  <section className="bg-white py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <figure>
            <div className="overflow-hidden rounded-xl border border-[#053f43]/15 shadow-xl shadow-[#032b2e]/20 aspect-[4/3]">
              <img
                src={growth}
                alt="Illustration of a student reading beside a growth arrow rising across the map of India"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-center gap-2 text-sm font-bold text-[#032b2e]">
              <MapPin className="w-4 h-4 text-[#01696f]" /> Started in Bihar. Built for India.
            </figcaption>
          </figure>
        </div>

        <div className="lg:col-span-6">
          <h2 data-scrub="words" className="font-display text-3xl md:text-5xl leading-[1.08] text-[#032b2e] mb-6">
            It started with students who did everything right.
          </h2>
          <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
            <p>
              We are two friends from Bihar who met at IIT Gandhinagar. Around us we kept seeing students who attended school, went to coaching, took extra tuition, and still came out of exams with marks that did not match their effort.
            </p>
            <p>
              They were not short of teaching. What they lacked was a learning loop: practise, find out exactly what went wrong, fix it, and try again. A coaching class of a hundred cannot give each student that kind of one-to-one attention, however good the teacher is.
            </p>
            <p>
              So we started SolvIQ to build it: tools that check a student's actual work, explain where the marks went, and say what to practise next. We began in Bihar, and we are building for all of India.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LOOP = [
  ['Learn', 'Study the concept, from a teacher, a book or a video.'],
  ['Practise', 'Apply it straight away on real exam-style questions.'],
  ['Make mistakes', 'Find the exact points where the answer goes wrong.', true],
  ['Understand and retry', 'Read the feedback, fix the gap and attempt it again.'],
  ['Test and track', 'Sit a full test and watch the score move over time.']
];

const TheLoop = () => (
  <section data-scrub="loop" className="bg-[#eef6f5] py-20 lg:py-0 lg:min-h-[100svh] lg:flex lg:items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h2 data-scrub="words" className="font-display text-3xl md:text-5xl leading-[1.08] text-[#032b2e] max-w-3xl">
        Studying is not the same as being exam-ready
      </h2>
      <p data-scrub="words" className="mt-5 text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
        Hours of videos and textbooks can create a false sense of security. To prepare properly, a student needs to know what they can solve, where they are weak, why they keep getting a concept wrong, and what to practise next. Today the middle of this loop is missing.
      </p>

      <div data-scrub="loop-line" className="hidden lg:block mt-12 h-1 rounded-full bg-[#01696f] origin-left" aria-hidden="true"></div>
      <ol className="mt-5 lg:mt-5 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {LOOP.map(([title, text, key], i) => (
          <li
            key={title}
            data-scrub="loop-card"
            className={`rounded-2xl p-6 bg-white ${key ? 'border-2 border-[#d8432f]' : 'border border-[#cfe3e1]'}`}
          >
            <span className={`w-9 h-9 rounded-full font-bold flex items-center justify-center mb-4 text-white ${key ? 'bg-[#d8432f]' : 'bg-[#01696f]'}`}>
              {i + 1}
            </span>
            <h3 className={`font-bold text-lg mb-2 ${key ? 'text-[#d8432f]' : 'text-[#032b2e]'}`}>
              {key ? (
                <span className="relative inline-block px-1">
                  {title}
                  <svg className="absolute -inset-x-2 -inset-y-1.5 h-[calc(100%+12px)] w-[calc(100%+16px)] pointer-events-none" viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden="true">
                    <ellipse data-scrub="loop-pen" cx="60" cy="20" rx="57" ry="17" fill="none" stroke="#d8432f" strokeWidth="2.5" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset="0" />
                  </svg>
                </span>
              ) : title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
          </li>
        ))}
      </ol>
      <p data-scrub="loop-note" className="mt-8 text-sm md:text-base text-[#032b2e] font-semibold">
        PrepOne and CoachOne exist to make steps three and four happen for every student, not only the ones a teacher has time for.
      </p>
    </div>
  </section>
);

const Products = () => (
  <section className="bg-white py-20 lg:py-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl md:text-5xl leading-[1.08] text-[#032b2e] max-w-3xl">Two products, one loop</h2>

      <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
        <div className="rounded-2xl bg-[#5046E5] text-white p-8 sm:p-10 flex flex-col">
          <p className="text-sm font-bold text-white/80">For students</p>
          <h3 className="font-display text-3xl mt-1">PrepOne</h3>
          <p className="mt-4 text-white/90 leading-relaxed flex-grow">
            Write a board answer on paper and click a photo. PrepOne reads it, gives step marks against the board scheme, and picks the next topics to practise from where you lost marks.
          </p>
          <Link to="/prepone" className="mt-8 inline-flex items-center font-bold underline decoration-[#ffd84d] decoration-2 underline-offset-4 hover:text-[#ffd84d]">
            See PrepOne <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
        <div className="rounded-2xl bg-[#01696f] text-white p-8 sm:p-10 flex flex-col">
          <p className="text-sm font-bold text-teal-50/80">For coaching institutes</p>
          <h3 className="font-display text-3xl mt-1">CoachOne</h3>
          <p className="mt-4 text-teal-50/90 leading-relaxed flex-grow">
            Gives teachers what one-to-one care needs but a full batch makes impossible: handwritten copies checked step by step, mistake patterns for each batch, and a WhatsApp report for every parent.
          </p>
          <Link to="/coachone" className="mt-8 inline-flex items-center font-bold underline decoration-[#ffd84d] decoration-2 underline-offset-4 hover:text-[#ffd84d]">
            See CoachOne <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const BELIEFS = [
  {
    icon: BrainCircuit,
    title: 'AI checks work. It does not write it.',
    desc: 'We use AI to evaluate what a student has written, and give the detailed feedback teachers want to give but cannot find the hours for. We do not use it to hand students answers.'
  },
  {
    icon: Target,
    title: 'Precision over volume.',
    desc: "Solving a thousand random questions is slow. We aim to find the few that fix a particular student's particular gap."
  },
  {
    icon: Users,
    title: 'Teachers stay in charge.',
    desc: 'CoachOne supports teachers, it does not replace them. Every mark can be reviewed and changed before it reaches a student or parent.'
  }
];

const Beliefs = () => (
  <section className="bg-[#eef6f5] py-20 lg:py-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl md:text-5xl leading-[1.08] text-[#032b2e] max-w-3xl">What we hold ourselves to</h2>

      <ul className="mt-12 grid md:grid-cols-3 gap-x-8 gap-y-10">
        {BELIEFS.map(({ icon: Icon, title, desc }) => (
          <li key={title}>
            <span className="w-10 h-10 rounded-lg bg-white text-[#01696f] flex items-center justify-center mb-4 border border-[#cfe3e1]">
              <Icon className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-lg text-[#032b2e] mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const FOUNDERS = [
  {
    name: 'Anmol Kumar',
    role: 'Co-founder & CEO',
    photo: anmol,
    alt: 'Anmol Kumar, co-founder and CEO of SolvIQ',
    bio: [
      'Anmol is an IIT Gandhinagar alumnus in Mechanical Engineering who saw first-hand the gap between raw effort and measurable results in the Indian education system.',
      'With a background in full-stack development and AI engineering, Anmol leads the product and the technology behind SolvIQ: evaluation that is instant, fair and tells a student what to do next.'
    ],
    link: 'https://www.linkedin.com/in/anmolkumariitgn/'
  },
  {
    name: 'Abhinav Kumar',
    role: 'Co-founder, Operations',
    photo: abhinav,
    alt: 'Abhinav Kumar, co-founder of SolvIQ',
    bio: [
      'Abhinav is an IIT Gandhinagar alumnus in Chemical Engineering. The problem that pulled Abhinav in is the root of it: students who never get a chance to fix their fundamentals, and so keep losing marks on things they should already know.',
      'Abhinav loves solving that kind of problem with technology, and runs operations at SolvIQ, from working with institutes to making sure what we build works for the students and teachers who use it.'
    ]
  }
];

const FounderSection = () => (
  <section className="bg-white py-20 lg:py-28 overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl md:text-5xl leading-[1.08] text-[#032b2e] max-w-3xl">The people behind SolvIQ</h2>
      <p className="mt-5 text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
        Two IIT Gandhinagar alumni from Bihar, who met on campus and kept coming back to the same problem.
      </p>

      <div className="mt-12 divide-y-2 divide-dashed divide-[#cfe3e1]">
        {FOUNDERS.map((f) => (
          <article key={f.name} className="py-10 first:pt-0 last:pb-0 grid sm:grid-cols-[10rem_1fr] gap-6 sm:gap-10 items-start">
            <img
              src={f.photo}
              alt={f.alt}
              loading="lazy"
              className="w-32 sm:w-full aspect-[4/5] object-cover object-[center_15%] rounded-xl border border-[#053f43]/15 shadow-lg shadow-[#032b2e]/15"
            />
            <div>
              <h3 className="font-display text-3xl text-[#032b2e] leading-tight">{f.name}</h3>
              <p className="text-[#01696f] font-bold mt-1 mb-4">{f.role}</p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {f.bio.map((para) => <p key={para}>{para}</p>)}
              </div>
              {f.link && (
                <a href={f.link} className="mt-5 inline-flex items-center text-sm font-bold text-[#01696f] hover:text-[#015257]">
                  LinkedIn profile <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const MILESTONES = [
  { date: 'Aug 2025', icon: Lightbulb, title: 'The idea', text: 'Two friends from Bihar start working on the missing learning loop: practice, feedback and a clear next step for every student.' },
  { date: 'Jan 2026', icon: Rocket, title: 'PrepOne launches', text: 'The student app goes live on Android, with handwritten answers marked step by step.' },
  { date: 'Apr 2026', icon: BookOpen, title: 'Bihar Board coverage', text: 'Questions, marking schemes and practice for the BSEB syllabus.' },
  { date: 'Aug 2026', icon: GraduationCap, title: 'Full CBSE coverage', text: 'Every major CBSE subject, with the same step-wise marking.' },
  { date: 'Nov 2026', icon: Users, title: 'CoachOne launch', text: 'Copy checking, batch insights, fees and parent reports for coaching institutes.' },
  { date: 'Next', icon: MapPin, title: 'The rest of India', text: 'More boards, more subjects and more states, taking the same loop from Bihar to every Tier-2 and Tier-3 town.', next: true }
];

const Roadmap = () => (
  <section className="bg-[#eef6f5] py-20 lg:py-28 overflow-x-clip">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.08] text-[#032b2e]">From Bihar to the rest of India</h2>
          <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed">
            One idea, one state at a time. This is how we are taking it from a conversation at IIT Gandhinagar to students across the country.
          </p>
        </div>
      </div>

      <ol data-scrub="road" className="lg:col-span-8 relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-[#01696f]/15" aria-hidden="true"></div>
        <div data-scrub="road-line" className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-[#01696f] origin-top" aria-hidden="true"></div>
        {MILESTONES.map(({ date, icon: Icon, title, text, next }) => (
          <li key={title} className="relative pl-14 pb-10 last:pb-0">
            <span
              data-scrub="road-node"
              className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-[#eef6f5] ${next ? 'bg-[#ffd84d] text-[#032b2e]' : 'bg-[#01696f] text-white'}`}
            >
              <Icon className="w-4 h-4" />
            </span>
            <div data-scrub="road-item" className={`rounded-2xl bg-white p-6 ${next ? 'border-2 border-dashed border-[#01696f]/50' : 'border border-[#cfe3e1]'}`}>
              <p className="co-note text-xl text-[#01696f] mb-2 inline-block">{date}</p>
              <h3 className="font-bold text-lg text-[#032b2e] mb-1.5">{title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const Closing = () => (
  <section className="co-sheet text-white py-20 lg:py-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-7">
        <h2 data-scrub="words" className="font-display text-4xl md:text-6xl leading-[1.05]">Every student deserves to know where they stand.</h2>
        <p data-scrub="words" className="mt-6 text-lg text-teal-50/90 leading-relaxed max-w-2xl">
          Whether you are preparing for boards or running a coaching institute, we would like to help you close the loop.
        </p>
      </div>
      <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
        <DownloadLink placement="about" className={BTN_ON_TEAL}>I am a student: get PrepOne</DownloadLink>
        <DemoLink location="about" className={BTN_GHOST_ON_TEAL}>I run an institute: book a demo</DemoLink>
      </div>
    </div>
  </section>
);

export default function About() {
  const rootRef = useRef(null);
  useScrollChoreography(rootRef);

  return (
    <div ref={rootRef} className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
      <SEO
        title="About SolvIQ | PrepOne and CoachOne, Learning Feedback for Bihar and India"
        description="SolvIQ builds PrepOne for students and CoachOne for coaching institutes, closing the practice and feedback loop that large classes cannot give. Started in Bihar, built for India."
        keywords="About SolvIQ, SolvIQ India, IIT Gandhinagar EdTech, AI exam prep India, Anmol Kumar SolvIQ"
        canonicalUrl="https://solviq.in/about"
        schema={[
          SOLVIQ_ORGANIZATION_SCHEMA,
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://solviq.in/about#webpage",
            "url": "https://solviq.in/about",
            "name": "About SolvIQ India",
            "description": "SolvIQ India is an educational technology company born out of IIT Gandhinagar, building the intelligence layer for student evaluation and coaching institute management.",
            "mainEntity": {
              "@id": "https://solviq.in/#organization"
            }
          },
          buildBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About SolvIQ', url: '/about' }
          ])
        ]}
      />
      <Navbar />
      <main className="coachone">
        <Hero />
        <Story />
        <TheLoop />
        <Products />
        <Beliefs />
        <FounderSection />
        <Roadmap />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}