import { useState, useEffect } from 'react';
import { RotateCw, Check } from 'lucide-react';
import { BlockMath } from './Latex';
import api from '../services/api';

export default function FlashcardDeck() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [memoryHealth, setMemoryHealth] = useState(78);
  const [recentRating, setRecentRating] = useState('');

  useEffect(() => {
    let isMounted = true;
    api.getFlashcardDeck('Chemistry').then((res) => {
      if (isMounted && res.data) {
        setCards(res.data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const currentCard = cards[currentIndex] || {
    title: "Nernst Equation (Electrochemistry)",
    topic: "Chemistry",
    formula: "E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n}\\log Q",
    note: "Where n = moles of e⁻ transferred, Q = [Products]/[Reactants].",
    trap: "Always balance redox reaction coefficients before writing powers in Q.",
    memoryHealth: 88,
    nextReviewDays: 6
  };

  const handleRate = (interval, healthDelta, ratingLabel) => {
    setRecentRating(`Rated: ${ratingLabel} (Interval set to ${interval})`);
    setMemoryHealth((prev) => Math.min(100, Math.max(20, prev + healthDelta)));
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % (cards.length || 1));
  };

  return (
    <div className="bg-[#F8F9FC] rounded-[2.5rem] p-6 md:p-10 border border-gray-200 shadow-lg text-[#0F172A]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-200 mb-8">
        <div>
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 px-3 py-1 rounded-md text-xs font-bold text-[#B45309] mb-2">
            <RotateCw className="w-3.5 h-3.5" /> <span>Active Recall & Spaced Repetition (SRS)</span>
          </div>
          <h3 className="text-2xl font-bold text-[#0F172A]">Interactive Memory Deck</h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Memory Health</p>
            <p className="text-base font-bold text-[#5046E5]">{memoryHealth}% Retention</p>
          </div>
          <div className="w-10 h-10 rounded-full border-4 border-[#5046E5] flex items-center justify-center font-bold text-xs bg-white text-[#5046E5]">
            {currentIndex + 1}/{cards.length || 3}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
        {/* Flashcard 3D Flip Container */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="cursor-pointer min-h-[340px] select-none [perspective:1000px] group"
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
              isFlipped ? '[transform:rotateY(180deg)]' : ''
            }`}
          >
            {/* Front Side */}
            <div className="absolute inset-0 bg-white rounded-3xl p-6 sm:p-8 border-2 border-dashed border-[#C7D2FE] group-hover:border-[#5046E5] transition-colors shadow-md flex flex-col justify-between [backface-visibility:hidden]">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5046E5]">{currentCard.topic}</span>
                  <span className="text-xs text-gray-400 font-medium group-hover:text-[#5046E5] transition-colors">Tap to flip ↻</span>
                </div>

                <div className="py-6 text-center">
                  <h4 className="text-xl font-bold text-[#0F172A] mb-4">{currentCard.title}</h4>
                  <div className="p-4 bg-[#F8F9FC] rounded-2xl border border-gray-100 text-base text-indigo-950 inline-block shadow-sm">
                    <BlockMath math={currentCard.formula} />
                  </div>
                  <p className="text-xs text-gray-500 mt-4">Tap to reveal memory notes & examiner traps</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
                <span>SRS Algorithm: SuperMemo-2</span>
                <span className="text-[#5046E5] font-semibold">Review Interval: {currentCard.nextReviewDays} Days</span>
              </div>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#5046E5] shadow-lg flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5046E5]">Examiner Trap Notes</span>
                  <span className="text-xs text-gray-400 font-medium group-hover:text-[#5046E5] transition-colors">Tap to flip back ↻</span>
                </div>

                <div className="py-2 space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-[#0F172A] mb-1">Key Revision Synthesis:</h4>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{currentCard.note}</p>
                  </div>
                  <div className="p-3.5 bg-red-50/80 border border-red-200 rounded-xl text-xs text-red-900 leading-relaxed font-medium">
                    <strong className="text-red-700 block mb-0.5">⚠️ Examiner Deduction Trap:</strong>
                    {currentCard.trap}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
                <span className="text-emerald-700 font-semibold">Active Recall Prompt</span>
                <span className="text-gray-500">Rate difficulty on right panel →</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rating & SRS Controls */}
        <div className="bg-[#0F172A] text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Spaced Recall Rating</span>
            <h4 className="text-lg font-bold text-white mt-1 mb-3">How well did you remember this?</h4>
            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              Rating your recall recalibrates your next review date using spaced repetition, preventing the Ebbinghaus forgetting curve.
            </p>

            <div className="grid grid-cols-2 gap-2.5 mb-6">
              <button
                onClick={() => handleRate('1 Day', -10, 'Again')}
                className="p-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 rounded-xl text-left transition-colors"
              >
                <p className="text-xs font-bold text-red-300">Again</p>
                <p className="text-[10px] text-gray-400">Review in 1d</p>
              </button>

              <button
                onClick={() => handleRate('3 Days', -2, 'Hard')}
                className="p-3 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 rounded-xl text-left transition-colors"
              >
                <p className="text-xs font-bold text-amber-300">Hard</p>
                <p className="text-[10px] text-gray-400">Review in 3d</p>
              </button>

              <button
                onClick={() => handleRate('6 Days', 6, 'Good')}
                className="p-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 rounded-xl text-left transition-colors"
              >
                <p className="text-xs font-bold text-blue-300">Good</p>
                <p className="text-[10px] text-gray-400">Review in 6d</p>
              </button>

              <button
                onClick={() => handleRate('14 Days', 12, 'Easy')}
                className="p-3 bg-green-500/20 hover:bg-green-500/30 border border-green-500/40 rounded-xl text-left transition-colors"
              >
                <p className="text-xs font-bold text-green-300">Easy</p>
                <p className="text-[10px] text-gray-400">Review in 14d</p>
              </button>
            </div>
          </div>

          {recentRating && (
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-green-400 font-semibold text-center flex items-center justify-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> {recentRating}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
