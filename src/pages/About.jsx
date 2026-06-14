import React, { useState, useEffect, useRef } from 'react';
import { Target, BrainCircuit, Rocket, MapPin, Users, Lightbulb, Code } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer'; 
import founder from '../assets/founder.png'; 
import growth from '../assets/growth.png';
import SEO from '../componenets/SEO';

// --- CUSTOM HOOKS ---
const Reveal = ({ children, delay = 0, className = "", threshold = 0.1 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- COMPONENTS ---

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <section className="relative bg-[#111210] pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMHptMzkuNSAwVjBoLjV2NDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9zdmc+')]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4F46E5] rounded-full mix-blend-multiply filter blur-[150px] opacity-20 animate-pulse"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping"></span>
            <span className="font-body text-sm text-gray-300 tracking-wide uppercase font-bold">Our Story</span>
          </div>
        </div>
        
        <h1 className={`font-display text-5xl md:text-7xl text-white font-bold leading-tight mb-8 transition-all duration-1000 delay-150 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          We don't just teach.
          <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] to-[#FCD34D]">We engineer outcomes.</span>
        </h1>
        
        <p className={`font-body text-lg md:text-xl text-gray-400 mb-10 leading-relaxed transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          SolvIQ India Pvt Ltd is an educational technology company building the intelligence layer for student evaluation and institute management. 
        </p>
      </div>
    </section>
  );
};

const TheOrigin = () => (
  <section className="bg-white py-24 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#EEF2FF] to-[#f7f6f2] rounded-[3rem] transform -rotate-3 z-0"></div>
            <img 
              src={growth} 
              alt="Founder" 
              className="relative z-10 rounded-[2rem] shadow-xl border border-gray-100 object-cover aspect-[4/3]"
            />
            {/* Location Tag */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#4F46E5]" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Born in</p>
                <p className="font-display font-bold text-[#0F172A]">IIT Gandhinagar</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div>
            <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6">From Siwan to the entire nation.</h2>
            <div className="space-y-6 text-gray-600 font-body text-lg leading-relaxed">
              <p>
                The seed for SolvIQ was planted by observing a stark reality in Siwan, Bihar: students possessed immense drive and worked incredibly hard, but lacked the precise, data-driven feedback needed to convert that hard work into top-tier results. Preparation felt like a gamble.
              </p>
              <p>
                Founded from the dorms of IIT Gandhinagar, SolvIQ was built on an engineering mindset. We realized that if we could analyze subjective answers the way an examiner does, we could pinpoint the exact micro-concepts costing students their marks. 
              </p>
              <p>
                Today, what started as a solution for the Bihar Board is evolving rapidly. We are actively stepping into the CBSE ecosystem, expanding our AI models to serve millions of students and thousands of coaching institutes across the country.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  </section>
);

const CoreValues = () => {
  const values = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-[#4F46E5]" />,
      title: "AI as a tool, not a crutch.",
      desc: "We don't use AI to write answers for students. We use it to evaluate them, providing the rigorous, personalized feedback that human teachers want to give but lack the time for."
    },
    {
      icon: <Target className="w-6 h-6 text-[#F59E0B]" />,
      title: "Precision over volume.",
      desc: "Solving 1,000 random questions is inefficient. We focus on identifying the 50 specific questions a student needs to solve to fix their unique conceptual gaps."
    },
    {
      icon: <Users className="w-6 h-6 text-[#01696f]" />,
      title: "Empowering the ecosystem.",
      desc: "We don't bypass teachers. CoachOne equips coaching institutes with the infrastructure they need to scale their quality of education seamlessly."
    }
  ];

  return (
    <section className="bg-[#f7f6f2] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-4">Our Core Philosophy</h2>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">The principles that dictate how we write our code and build our products.</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mb-3">{val.title}</h3>
                <p className="font-body text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FounderSection = () => (
  <section className="bg-white py-24 border-t border-gray-100">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="bg-[#0F172A] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        <div className="md:w-5/12 bg-gray-800 relative min-h-[450px] md:min-h-full">
          {/* Placeholder for founder image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent z-10 md:hidden"></div>
          <img 
            src={founder} 
            alt="Founder" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
        </div>
        
        <div className="md:w-7/12 p-10 md:p-16 flex flex-col justify-center relative z-20 bg-[#0F172A]">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 mb-6 w-max">
            <Code className="w-4 h-4 text-indigo-400" />
            <span className="font-body text-xs text-gray-300 font-bold uppercase tracking-wider">Leadership</span>
          </div>
          
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">Anmol Kumar</h3>
          <p className="text-indigo-400 font-bold font-body mb-6">Founder & CEO</p>
          
          <div className="space-y-4 text-gray-400 font-body leading-relaxed mb-8">
            <p>
              As a Mechanical Engineering student at IIT Gandhinagar, Anmol experienced firsthand the gap between raw effort and measurable outcomes in the Indian education system. 
            </p>
            <p>
              Combining his technical background in full-stack development and AI engineering, he founded SolvIQ to build the robust infrastructure needed to make subjective evaluation instant, accurate, and actionable.
            </p>
          </div>

          <div className="flex space-x-4">
             <a href="https://www.linkedin.com/in/anmolkumariitgn/" className="text-white hover:text-indigo-400 transition-colors text-sm font-bold flex items-center">LinkedIn Profile &rarr;</a>
          </div>
        </div>

      </Reveal>
    </div>
  </section>
);

const Roadmap = () => (
  <section className="bg-[#111210] py-24 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Reveal className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold text-white mb-4">The Road Ahead</h2>
        <p className="font-body text-xl text-gray-400">Where we are and where we're going.</p>
      </Reveal>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        
        {/* Milestone 1 */}
        <Reveal delay={100} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#111210] bg-[#4F46E5] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
             <Rocket className="w-4 h-4" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-display font-bold text-white text-xl">PrepOne Launch</h4>
              <span className="text-xs font-bold text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded">Live</span>
            </div>
            <p className="text-gray-400 text-sm">Deploying our subjective AI evaluation engine for the Bihar Board, allowing students to check their handwritten answers instantly.</p>
          </div>
        </Reveal>

        {/* Milestone 2 */}
        <Reveal delay={300} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#111210] bg-[#01696f] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
             <Users className="w-4 h-4" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-display font-bold text-white text-xl">CoachOne Release</h4>
              <span className="text-xs font-bold text-teal-400 bg-teal-400/10 px-2 py-1 rounded">Live</span>
            </div>
            <p className="text-gray-400 text-sm">Providing B2B infrastructure for coaching institutes to manage batch analytics and automate mass test checking.</p>
          </div>
        </Reveal>

        {/* Milestone 3 */}
        <Reveal delay={500} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#111210] bg-gray-700 text-gray-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
             <Lightbulb className="w-4 h-4" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm opacity-60">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-display font-bold text-white text-xl">CBSE Expansion</h4>
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-1 rounded">In Progress</span>
            </div>
            <p className="text-gray-400 text-sm">Scaling our data sets and NLP models to fully support the CBSE curriculum across all major subjects.</p>
          </div>
        </Reveal>

      </div>
    </div>
  </section>
);

export default function About() {
  return (
    <div className="min-h-screen bg-white font-body selection:bg-[#4F46E5] selection:text-white">
      
      <SEO
        title="About SolvIQ India | Transforming Education with AI"
        description="Learn about SolvIQ's mission to revolutionize educational assessment and analytics through cutting-edge AI technology."
        canonicalUrl="https://solviq.in/about"
      />
      <Navbar />
      <Hero />
      <TheOrigin />
      <CoreValues />
      <FounderSection />
      <Roadmap />
      <Footer />
    </div>
  );
}