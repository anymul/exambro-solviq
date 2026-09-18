import { useState } from 'react';
import { History } from 'lucide-react';
import { InlineMath, BlockMath } from './Latex';

const PYQ_DATA = [
  {
    id: "pyq-1",
    year: "2024 CBSE",
    subject: "Physics",
    chapter: "Ray Optics",
    question: "A convex lens of focal length 20 cm is placed coaxially with a concave lens of focal length 10 cm at a distance of 10 cm. Find the position of the final image for an object at infinity.",
    marks: "5 Marks",
    recurrence: "94% High Recurrence",
    solution: {
      formula: "\\frac{1}{v_1} - \\frac{1}{u_1} = \\frac{1}{f_1} \\implies v_1 = +20\\,\\text{cm}",
      step2: "Distance to concave lens = 20 - 10 = +10 cm (virtual object for 2nd lens).",
      step3: "\\frac{1}{v_2} - \\frac{1}{+10} = -\\frac{1}{10} \\implies \\frac{1}{v_2} = 0 \\implies v_2 = \\infty",
      examinerRubric: "1M for ray diagram + 2M for lens 1 image + 2M for final infinite position."
    }
  },
  {
    id: "pyq-2",
    year: "2023 BSEB",
    subject: "Physics",
    chapter: "Electrostatics",
    question: "State Gauss's Theorem in electrostatics. Apply it to calculate the electric field due to an infinite plane sheet of uniform surface charge density \\sigma.",
    marks: "5 Marks",
    recurrence: "98% Guaranteed Core",
    solution: {
      formula: "\\oint \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}",
      step2: "Cylindrical pillbox cross-sectional area A: 2EA = \\frac{\\sigma A}{\\varepsilon_0}.",
      step3: "E = \\frac{\\sigma}{2\\varepsilon_0} \\quad (\\text{independent of distance } r).",
      examinerRubric: "1M statement + 1.5M pillbox diagram + 2.5M step derivation."
    }
  },
  {
    id: "pyq-3",
    year: "2024 CBSE",
    subject: "Chemistry",
    chapter: "Electrochemistry",
    question: "Derive the relation between standard cell potential \\(E^\\circ_{\\text{cell}}\\) and equilibrium constant \\(K_c\\). Calculate \\(K_c\\) for Daniel cell at 298 K.",
    marks: "3 Marks",
    recurrence: "91% High Recurrence",
    solution: {
      formula: "\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}} = -2.303 RT \\log K_c",
      step2: "E^\\circ_{\\text{cell}} = \\frac{0.0591}{n}\\log K_c \\implies \\log K_c = \\frac{2 \\times 1.10}{0.0591} \\approx 37.22",
      step3: "K_c \\approx 1.66 \\times 10^{37}",
      examinerRubric: "1M Gibbs free energy linkage + 1M substitution + 1M final exponent value."
    }
  }
];

export default function PYQExplorer() {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedPYQ, setSelectedPYQ] = useState(PYQ_DATA[0]);

  const filtered = selectedSubject === 'All' ? PYQ_DATA : PYQ_DATA.filter((p) => p.subject === selectedSubject);

  return (
    <div className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-gray-200 shadow-xl text-[#0F172A]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-200 mb-8">
        <div>
          <div className="inline-flex items-center space-x-2 bg-[#EEF2FF] border border-[#C7D2FE] px-3 py-1 rounded-md text-xs font-bold text-[#4338CA] mb-2">
            <History className="w-3.5 h-3.5" /> <span>10+ Years PYQ Predictive Engine</span>
          </div>
          <h3 className="text-2xl font-bold text-[#0F172A]">Interactive Past Year Question Bank</h3>
        </div>

        <div className="flex gap-2">
          {['All', 'Physics', 'Chemistry'].map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedSubject === sub
                  ? 'bg-[#0F172A] text-white shadow-md'
                  : 'bg-[#F8F9FC] text-[#64748B] hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 items-start">
        {/* Left: Question List */}
        <div className="space-y-3">
          {filtered.map((pyq) => (
            <div
              key={pyq.id}
              onClick={() => setSelectedPYQ(pyq)}
              className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                selectedPYQ.id === pyq.id
                  ? 'bg-[#EEF2FF]/70 border-[#5046E5] shadow-sm'
                  : 'bg-[#F8F9FC] hover:bg-gray-50 border-gray-100'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-[#5046E5]">{pyq.year} • {pyq.subject}</span>
                <span className="text-[11px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">
                  {pyq.marks}
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#0F172A] mb-1">{pyq.chapter}</h4>
              <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed font-medium">
                {pyq.question}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Solved Step Rubric & KaTeX derivation */}
        <div className="bg-[#0F172A] text-white rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex justify-between items-center pb-4 border-b border-gray-800 mb-6">
            <div>
              <span className="text-xs text-gray-400 uppercase font-semibold">{selectedPYQ.year} • {selectedPYQ.chapter}</span>
              <h4 className="text-lg font-bold text-white mt-0.5">Board Solution & Step Rubric</h4>
            </div>
            <span className="text-xs bg-green-500/20 text-green-400 font-bold px-3 py-1 rounded-md border border-green-500/30">
              {selectedPYQ.recurrence}
            </span>
          </div>

          <p className="text-xs text-gray-300 mb-6 font-medium italic leading-relaxed">
            "{selectedPYQ.question}"
          </p>

          <div className="space-y-3.5 mb-6">
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs">
              <span className="text-xs text-indigo-300 font-bold block mb-1">Key Derivation / Formula:</span>
              <div className="text-center text-sm py-1">
                <BlockMath math={selectedPYQ.solution.formula} />
              </div>
            </div>

            <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs space-y-1">
              <span className="text-xs text-gray-400 font-bold block">Intermediate Step:</span>
              <p className="text-gray-300 text-[11px] leading-relaxed">
                <InlineMath math={selectedPYQ.solution.step2} />
              </p>
            </div>

            <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs space-y-1">
              <span className="text-xs text-green-400 font-bold block">Final Result:</span>
              <div className="text-center text-sm text-green-300 py-1">
                <BlockMath math={selectedPYQ.solution.step3} />
              </div>
            </div>
          </div>

          <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-xs text-indigo-200">
            <strong className="text-white block mb-0.5">Official Board Examiner Rubric:</strong>
            {selectedPYQ.solution.examinerRubric}
          </div>
        </div>
      </div>
    </div>
  );
}
