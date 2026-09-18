import { useState } from 'react';
import { Zap, CheckCircle2, XCircle, ArrowRight, RotateCw, Sparkles, Flame, AlertTriangle, BookOpen } from 'lucide-react';
import { BlockMath, InlineMath } from './Latex';

const CONCEPTS = [
  {
    id: 'lens-maker',
    name: "Lens Maker's Sign Convention",
    subject: "Physics",
    subtopic: "Ray Optics • Class 12",
    formula: "\\frac{1}{f} = (\\mu - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)",
    question: "A biconvex glass lens (refractive index μ = 1.5) has radii of curvature R₁ = +20 cm and R₂ = -30 cm. Calculate its focal length f in air.",
    options: [
      { id: "A", text: "+24 cm", isCorrect: true },
      { id: "B", text: "-24 cm", isCorrect: false },
      { id: "C", text: "+12 cm", isCorrect: false },
      { id: "D", text: "+120 cm", isCorrect: false }
    ],
    explanation: {
      step1: "For a biconvex lens in air: R₁ = +20 cm (convex surface), R₂ = -30 cm (concave surface).",
      step2Formula: "\\frac{1}{f} = (1.5 - 1)\\left(\\frac{1}{20} - \\left(-\\frac{1}{30}\\right)\\right)",
      step2Calc: "= 0.5 \\times \\left(\\frac{3 + 2}{60}\\right) = 0.5 \\times \\frac{5}{60} = \\frac{1}{24}",
      finalResult: "f = +24\\text{ cm}",
      trap: "Common Trap: Forgetting that R₂ is negative (-30 cm) yields f = +120 cm (Option D)."
    }
  },
  {
    id: 'nernst',
    name: "Nernst Equation Cell EMF",
    subject: "Chemistry",
    subtopic: "Electrochemistry • Class 12",
    formula: "E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n}\\log Q",
    question: "For a Daniel cell Zn | Zn²⁺(0.01 M) || Cu²⁺(0.1 M) | Cu with standard EMF E° = 1.10 V, what is the net cell potential E_cell at 298 K?",
    options: [
      { id: "A", text: "1.13 V", isCorrect: true },
      { id: "B", text: "1.07 V", isCorrect: false },
      { id: "C", text: "1.10 V", isCorrect: false },
      { id: "D", text: "1.25 V", isCorrect: false }
    ],
    explanation: {
      step1: "Electrons transferred n = 2. Reaction quotient Q = [Zn²⁺]/[Cu²⁺] = 0.01 / 0.1 = 10⁻¹.",
      step2Formula: "E_{\\text{cell}} = 1.10 - \\frac{0.0591}{2}\\log(10^{-1})",
      step2Calc: "= 1.10 - (0.02955)(-1) = 1.10 + 0.02955",
      finalResult: "E_{\\text{cell}} \\approx 1.13\\text{ V}",
      trap: "Common Trap: Inverting Q as [Cu²⁺]/[Zn²⁺] yields 1.07 V (Option B)."
    }
  }
];

export default function AbhyasPlayground() {
  const [selectedConcept, setSelectedConcept] = useState(CONCEPTS[0]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [masteryScore, setMasteryScore] = useState(76);
  const [streakCount, setStreakCount] = useState(4);

  const handleSelectOption = (optId) => {
    if (!isSubmitted) {
      setSelectedOption(optId);
    }
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    setIsSubmitted(true);
    const chosen = selectedConcept.options.find((o) => o.id === selectedOption);
    if (chosen?.isCorrect) {
      setMasteryScore((prev) => Math.min(100, prev + 8));
      setStreakCount((prev) => prev + 1);
    } else {
      setMasteryScore((prev) => Math.max(10, prev - 6));
    }
  };

  const handleReset = (concept) => {
    setSelectedConcept(concept);
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  return (
    <div className="bg-[#fcfbf9] rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden text-[#0F172A]">
      {/* Top Header Bar */}
      <div className="bg-white px-6 sm:px-8 py-5 border-b border-gray-200/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5 text-[#4F46E5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider">Abhyas+ Micro-Concept Arena</span>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-md border border-emerald-200">Live Calibration</span>
            </div>
            <h3 className="text-lg font-bold text-[#0F172A]">Targeted Board Step Practice</h3>
          </div>
        </div>

        {/* Concept selector pills */}
        <div className="flex items-center gap-2">
          {CONCEPTS.map((c) => (
            <button
              key={c.id}
              onClick={() => handleReset(c)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedConcept.id === c.id
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-gray-100 hover:bg-gray-200/80 text-gray-700 border border-gray-200/60'
              }`}
            >
              {c.subject}: {c.id === 'lens-maker' ? 'Ray Optics' : 'Electrochem'}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8 grid lg:grid-cols-[1.25fr_0.75fr] gap-8 items-start">
        {/* Left Column: Interactive Question Console */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-6">
          {/* Question Metadata */}
          <div className="flex flex-wrap justify-between items-center gap-2 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#4F46E5] bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                {selectedConcept.subtopic}
              </span>
              <span className="text-xs text-gray-500 font-medium">• 3 Marks Question</span>
            </div>
            <span className="text-xs bg-amber-50 text-[#B45309] font-bold px-2.5 py-1 rounded-md border border-amber-200/70">
              Difficulty: Medium (94% Recurrence)
            </span>
          </div>

          {/* Question Title & Prompt */}
          <div>
            <h4 className="text-lg font-bold text-[#0F172A] mb-2">{selectedConcept.name}</h4>
            <div className="p-4 bg-[#F8F9FC] rounded-xl border border-gray-100 mb-4">
              <p className="text-sm font-medium text-[#0F172A] leading-relaxed">
                {selectedConcept.question}
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-indigo-100/80 text-center shadow-sm">
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">Standard Board Formula</span>
              <div className="text-sm text-indigo-950 font-medium">
                <BlockMath math={selectedConcept.formula} />
              </div>
            </div>
          </div>

          {/* 4 Interactive Options */}
          <div className="grid sm:grid-cols-2 gap-3">
            {selectedConcept.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              let style = 'bg-white hover:bg-indigo-50/40 border-gray-200 text-[#0F172A]';
              if (isSubmitted) {
                if (opt.isCorrect) {
                  style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500';
                } else if (isSelected && !opt.isCorrect) {
                  style = 'bg-red-50 border-red-400 text-red-950 font-bold';
                }
              } else if (isSelected) {
                style = 'bg-indigo-50 border-[#4F46E5] text-[#0F172A] font-bold ring-1 ring-[#4F46E5]';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  disabled={isSubmitted}
                  className={`p-3.5 rounded-xl border text-left flex items-center justify-between text-sm transition-all shadow-sm ${style}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                      isSelected ? 'bg-[#4F46E5] text-white' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {opt.id}
                    </span>
                    <span className="font-semibold">{opt.text}</span>
                  </div>
                  {isSubmitted && opt.isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                  {isSubmitted && isSelected && !opt.isCorrect && <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3 pt-2">
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={!selectedOption}
                className="w-full bg-[#4F46E5] hover:bg-[#4338CA] disabled:opacity-40 text-white py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Submit Answer &amp; Verify Steps <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => handleReset(selectedConcept)}
                className="w-full bg-[#0F172A] hover:bg-black text-white py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <RotateCw className="w-4 h-4" /> Try Again / Switch Question
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Mastery Telemetry & Official Step Rubric */}
        <div className="space-y-4">
          {/* Live Mastery Gauge */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">Concept Ability Profile</span>
              <span className="text-xs text-amber-700 font-bold flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                <Flame className="w-3.5 h-3.5 text-amber-500" /> {streakCount} Day Streak
              </span>
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-[#0F172A]">Mastery Level:</span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${
                masteryScore >= 75
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
              }`}>
                {masteryScore >= 75 ? 'Mastered (Green)' : 'In Progress (Amber)'}
              </span>
            </div>

            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mb-4 border border-gray-200/60">
              <div
                className={`h-full transition-all duration-500 ${
                  masteryScore >= 75 ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
                style={{ width: `${masteryScore}%` }}
              />
            </div>

            <div className="p-3 bg-[#F8F9FC] rounded-xl border border-gray-200/80 text-xs text-gray-600 flex items-center justify-between">
              <span>Ability Score: <strong className="text-[#0F172A]">{masteryScore} / 100</strong></span>
              <span className="text-[#4F46E5] font-bold">+8 XP awarded</span>
            </div>
          </div>

          {/* KaTeX Step Rubric Solution */}
          {isSubmitted ? (
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#4F46E5]" />
                  <span className="font-bold text-[#0F172A] text-sm">Official CBSE Step Rubric</span>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Full 3/3 M
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-gray-700 block mb-1">Step 1: Sign Convention Identification (+1 M)</span>
                  <p className="text-gray-600 bg-gray-50 p-2.5 rounded-lg border border-gray-100 leading-relaxed font-medium">
                    {selectedConcept.explanation.step1}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-gray-700 block mb-1">Step 2: Formula Substitution (+1 M)</span>
                  <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-100 text-[#0F172A] text-center">
                    <BlockMath math={selectedConcept.explanation.step2Formula} />
                    <BlockMath math={selectedConcept.explanation.step2Calc} />
                  </div>
                </div>

                <div>
                  <span className="font-bold text-gray-700 block mb-1">Step 3: Final Answer with Units (+1 M)</span>
                  <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-950 font-bold text-center">
                    <InlineMath math={selectedConcept.explanation.finalResult} />
                  </div>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 leading-relaxed flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[11px] font-medium">{selectedConcept.explanation.trap}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm text-center py-10 text-gray-400">
              <BookOpen className="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <p className="text-xs font-bold text-gray-600">Select an option to test</p>
              <p className="text-[11px] text-gray-400 mt-1">Live step-marking and formula derivation will display here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
