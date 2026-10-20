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
    <div className="sticker bg-white p-6 text-ink md:p-10">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b-2 border-dashed border-rule pb-6 sm:flex-row sm:items-center">
        <div>
          <div className="sticker-sm mb-3 inline-flex -rotate-1 items-center gap-2 bg-coral px-3 py-1 text-xs font-extrabold text-ink">
            <RotateCw className="h-3.5 w-3.5" /> <span>Active Recall & Spaced Repetition (SRS)</span>
          </div>
          <h3 className="text-2xl font-extrabold text-ink">Interactive Memory Deck</h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-ink/60">Memory Health</p>
            <p className="text-base font-extrabold text-brand">{memoryHealth}% Retention</p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-sun text-xs font-extrabold text-ink">
            {currentIndex + 1}/{cards.length || 3}
          </div>
        </div>
      </div>

      <div className="grid items-stretch gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Flashcard 3D Flip Container */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="group min-h-[340px] cursor-pointer select-none [perspective:1000px]"
        >
          <div
            className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
              isFlipped ? '[transform:rotateY(180deg)]' : ''
            }`}
          >
            {/* Front Side */}
            <div className="sticker absolute inset-0 flex flex-col justify-between bg-butter p-6 [backface-visibility:hidden] sm:p-8">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-brand">{currentCard.topic}</span>
                  <span className="text-xs font-bold text-ink/60">Tap to flip ↻</span>
                </div>

                <div className="py-6 text-center">
                  <h4 className="mb-4 text-xl font-extrabold text-ink">{currentCard.title}</h4>
                  <div className="inline-block max-w-full overflow-x-auto rounded-xl border-2 border-ink bg-white p-4 text-base text-ink">
                    <BlockMath math={currentCard.formula} />
                  </div>
                  <p className="mt-4 text-xs text-ink/65">Tap to reveal memory notes & examiner traps</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t-2 border-dashed border-ink/30 pt-4 text-xs text-ink/60">
                <span>SRS Algorithm: SuperMemo-2</span>
                <span className="font-extrabold text-brand">Review Interval: {currentCard.nextReviewDays} Days</span>
              </div>
            </div>

            {/* Back Side */}
            <div className="sticker absolute inset-0 flex flex-col justify-between bg-white p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-8">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-brand">Examiner Trap Notes</span>
                  <span className="text-xs font-bold text-ink/60">Tap to flip back ↻</span>
                </div>

                <div className="space-y-4 py-2">
                  <div>
                    <h4 className="mb-1 text-base font-extrabold text-ink">Key Revision Synthesis:</h4>
                    <p className="text-xs leading-relaxed text-ink/80 sm:text-sm">{currentCard.note}</p>
                  </div>
                  <div className="rounded-lg border-2 border-ink bg-blush p-3.5 text-xs font-medium leading-relaxed text-ink">
                    <strong className="mb-0.5 block text-pen">Examiner Deduction Trap:</strong>
                    {currentCard.trap}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t-2 border-dashed border-ink/30 pt-4 text-xs text-ink/60">
                <span className="font-extrabold text-mint">Active Recall Prompt</span>
                <span>Rate difficulty on right panel →</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rating & SRS Controls */}
        <div className="sticker flex flex-col justify-between bg-brand p-6 text-white md:p-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-white/75">Spaced Recall Rating</span>
            <h4 className="mb-3 mt-1 text-lg font-extrabold text-white">How well did you remember this?</h4>
            <p className="mb-6 text-xs leading-relaxed text-white/90">
              Rating your recall recalibrates your next review date using spaced repetition, preventing the Ebbinghaus forgetting curve.
            </p>

            <div className="mb-6 grid grid-cols-2 gap-2.5">
              {[
                ['1 Day', -10, 'Again', 'Review in 1d', 'bg-coral'],
                ['3 Days', -2, 'Hard', 'Review in 3d', 'bg-sun'],
                ['6 Days', 6, 'Good', 'Review in 6d', 'bg-sky'],
                ['14 Days', 12, 'Easy', 'Review in 14d', 'bg-aqua']
              ].map(([interval, delta, label, hint, bg]) => (
                <button
                  key={label}
                  onClick={() => handleRate(interval, delta, label)}
                  className={`sticker-sm cursor-pointer p-3 text-left text-ink transition-[translate] hover:-translate-x-px hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${bg}`}
                >
                  <p className="text-xs font-extrabold">{label}</p>
                  <p className="text-[10px] font-medium text-ink/70">{hint}</p>
                </button>
              ))}
            </div>
          </div>

          {recentRating && (
            <div className="flex items-center justify-center gap-1.5 rounded-lg border-2 border-white/40 bg-white/10 p-3 text-center text-xs font-extrabold text-white">
              <Check className="h-3.5 w-3.5 text-sun" /> {recentRating}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
