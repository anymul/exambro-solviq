import { useState } from 'react';
import { Scan, Upload, Play, RotateCw } from 'lucide-react';
import { InlineMath } from './Latex';
import api from '../services/api';
import scannerEvaluationImg from '../assets/scanner_evaluation.png';

const SAMPLES = [
  {
    id: 'lens-maker',
    title: "Lens Maker's Formula (CBSE Class 12)",
    subject: "Physics",
    question: "Derive Lens Maker's Formula for a thin convex lens of radii of curvature R₁ and R₂.",
    previewImg: scannerEvaluationImg,
    badge: "Sample 1 • Optics"
  },
  {
    id: 'gauss-law',
    title: "Gauss's Law on Charged Wire (Bihar Board 12)",
    subject: "Physics",
    question: "Using Gauss's Law, find the electric field at distance r from an infinitely long straight wire.",
    previewImg: scannerEvaluationImg,
    badge: "Sample 2 • Electrostatics"
  },
  {
    id: 'nernst-equation',
    title: "Nernst Equation EMF (CBSE Class 12)",
    subject: "Chemistry",
    question: "Calculate the EMF of a Daniel cell at 298 K with given ion concentrations using the Nernst equation.",
    previewImg: scannerEvaluationImg,
    badge: "Sample 3 • Physical Chemistry"
  }
];

export default function AutoScorePlayground() {
  const [selectedSample, setSelectedSample] = useState(SAMPLES[0]);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evalStage, setEvalStage] = useState('');
  const [result, setResult] = useState(null);

  const handleRunEvaluation = async () => {
    setIsEvaluating(true);
    setResult(null);

    // Realistic scanning phase progression
    setEvalStage('1. Vision OCR reading handwriting...');
    await new Promise((r) => setTimeout(r, 600));

    setEvalStage('2. Matching against Board step-marking rubrics...');
    await new Promise((r) => setTimeout(r, 700));

    setEvalStage('3. Generating line-by-line feedback & partial marks...');
    const response = await api.evaluateAnswer({
      questionText: selectedSample.question,
      subjectHint: selectedSample.subject,
      maxMarks: 5,
      sampleId: selectedSample.id,
    });

    await new Promise((r) => setTimeout(r, 400));
    setResult(response.data);
    setIsEvaluating(false);
    setEvalStage('');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedSample({
        id: 'custom',
        title: file.name,
        subject: 'General Science',
        question: 'Custom Handwritten Answer Sheet Upload',
        previewImg: URL.createObjectURL(file),
        badge: 'Custom Upload'
      });
      setResult(null);
    }
  };

  return (
    <div className="sticker bg-white p-6 text-ink md:p-10">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b-2 border-dashed border-rule pb-6 lg:flex-row lg:items-center">
        <div>
          <div className="sticker-sm mb-3 inline-flex -rotate-1 items-center gap-2 bg-aqua px-3 py-1 text-xs font-extrabold text-ink">
            <Scan className="h-3.5 w-3.5" /> <span>Interactive AI Evaluator Playground</span>
          </div>
          <h3 className="text-2xl font-extrabold text-ink">Test AutoScore AI Live</h3>
        </div>

        {/* Sample Selector */}
        <div className="flex flex-wrap gap-2">
          {SAMPLES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => {
                setSelectedSample(sample);
                setResult(null);
              }}
              className={`sticker-sm cursor-pointer px-3.5 py-1.5 text-xs font-extrabold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                selectedSample.id === sample.id ? 'translate-x-px translate-y-px bg-brand text-white' : 'bg-white text-ink hover:bg-butter'
              }`}
            >
              {sample.badge}
            </button>
          ))}
          <label className="sticker-sm flex cursor-pointer items-center gap-1.5 bg-white px-3.5 py-1.5 text-xs font-extrabold text-ink hover:bg-butter focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand">
            <Upload className="h-3.5 w-3.5 text-brand" />
            <span>Upload Photo</span>
            <input type="file" accept="image/*" onChange={handleFileUpload} className="sr-only" />
          </label>
        </div>
      </div>

      <div className="grid items-stretch gap-8 lg:grid-cols-2">
        {/* Left: Answer Preview & Trigger */}
        <div className="flex flex-col justify-between rounded-xl border-2 border-ink bg-lilac p-6">
          <div>
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand">{selectedSample.subject}</span>
              <span className="rounded-md border-2 border-ink bg-white px-2.5 py-0.5 text-xs font-bold text-ink">{selectedSample.title}</span>
            </div>
            <p className="mb-4 text-xs font-medium italic text-ink/75">
              "{selectedSample.question}"
            </p>

            <div className="relative mb-4 flex h-[220px] items-center justify-center overflow-hidden rounded-lg border-2 border-ink bg-white">
              <img
                src={selectedSample.previewImg}
                alt="Student Answer Preview"
                className="h-full w-full object-cover object-top"
              />
              {isEvaluating && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/85 p-4 text-center text-white backdrop-blur-sm">
                  <RotateCw className="mb-3 h-8 w-8 animate-spin text-sun" />
                  <p className="mb-1 text-sm font-extrabold text-white">Evaluating with Vision AI...</p>
                  <p className="text-xs font-medium text-white/80">{evalStage}</p>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleRunEvaluation}
            disabled={isEvaluating}
            className="sticker flex w-full cursor-pointer items-center justify-center gap-2 bg-sun py-3 text-sm font-extrabold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isEvaluating ? (
              <>Evaluating Answer Sheet...</>
            ) : (
              <>
                <Play className="h-4 w-4 fill-current" /> Run AI Board-Rubric Evaluation
              </>
            )}
          </button>
        </div>

        {/* Right: AI Output Panel */}
        <div className="flex min-h-[380px] flex-col justify-between rounded-xl border-2 border-ink bg-butter p-6">
          {result ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3 border-b-2 border-dashed border-ink/30 pb-3">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink/60">Official Board Grade</span>
                  <h4 className="text-base font-extrabold text-ink">{result.questionTitle}</h4>
                </div>
                <div className="font-display lining-nums text-3xl font-bold text-mint">
                  {result.obtainedMarks} <span className="text-xs font-medium text-ink/60">/ {result.maxMarks} M</span>
                </div>
              </div>

              {/* Step breakdown */}
              <div className="max-h-[220px] space-y-2.5 overflow-y-auto pr-1">
                {result.stepBreakdown?.map((step, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg border-2 border-ink p-3 text-xs text-ink ${
                      step.marksAwarded === step.maxMarks ? 'bg-mintwash' : 'bg-blush'
                    }`}
                  >
                    <div className="mb-1 flex items-center justify-between font-extrabold">
                      <span>{step.stepName}</span>
                      <span className={step.marksAwarded === step.maxMarks ? 'text-mint' : 'text-pen'}>
                        +{step.marksAwarded} / {step.maxMarks} M
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-ink/75">{step.reason}</p>
                    {step.formula && (
                      <div className="mt-1.5 text-[11px] font-semibold text-brand">
                        <InlineMath math={step.formula} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Hinglish Commentary */}
              <div className="rounded-lg border-2 border-ink bg-white p-3.5 text-xs">
                <p className="mb-1 font-extrabold text-ink">Hinglish Examiner Commentary:</p>
                <p className="text-[11px] italic leading-relaxed text-ink/80">
                  "{result.feedbackHinglish}"
                </p>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <Scan className="mb-3 h-12 w-12 text-ink/30" />
              <h4 className="mb-1 text-base font-extrabold text-ink">Ready for Instant Evaluation</h4>
              <p className="mb-4 max-w-xs text-xs leading-relaxed text-ink/70">
                Click "Run AI Board-Rubric Evaluation" to see line-by-line partial step marking, formula checks, and Hinglish examiner feedback.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
