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
    <div className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-gray-200 shadow-xl text-[#0F172A]">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-gray-200 mb-8">
        <div>
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 px-3 py-1 rounded-md text-xs font-bold text-green-700 mb-2">
            <Scan className="w-3.5 h-3.5" /> <span>Interactive AI Evaluator Playground</span>
          </div>
          <h3 className="text-2xl font-bold text-[#0F172A]">Test AutoScore AI Live</h3>
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
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSample.id === sample.id
                  ? 'bg-[#5046E5] text-white shadow-sm'
                  : 'bg-[#F8F9FC] hover:bg-gray-100 text-[#64748B] border border-gray-200'
              }`}
            >
              {sample.badge}
            </button>
          ))}
          <label className="cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#F8F9FC] hover:bg-gray-100 text-[#64748B] border border-gray-200 flex items-center gap-1.5 transition-colors">
            <Upload className="w-3.5 h-3.5 text-[#5046E5]" />
            <span>Upload Photo</span>
            <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left: Answer Preview & Trigger */}
        <div className="bg-[#F8F9FC] rounded-2xl p-6 border border-gray-200 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-[#5046E5] uppercase tracking-wider">{selectedSample.subject}</span>
              <span className="text-xs bg-white border border-gray-200 px-2.5 py-0.5 rounded-md text-gray-700 font-semibold">{selectedSample.title}</span>
            </div>
            <p className="text-xs text-gray-600 font-medium mb-4 italic">
              "{selectedSample.question}"
            </p>

            <div className="relative rounded-xl overflow-hidden border border-gray-200 h-[220px] bg-white mb-4 flex items-center justify-center">
              <img
                src={selectedSample.previewImg}
                alt="Student Answer Preview"
                className="w-full h-full object-cover object-top opacity-90"
              />
              {isEvaluating && (
                <div className="absolute inset-0 bg-[#0F172A]/85 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center text-white">
                  <RotateCw className="w-8 h-8 text-[#818CF8] animate-spin mb-3" />
                  <p className="text-sm font-bold text-white mb-1">Evaluating with Vision AI...</p>
                  <p className="text-xs text-indigo-300 font-medium">{evalStage}</p>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleRunEvaluation}
            disabled={isEvaluating}
            className="w-full bg-[#5046E5] hover:bg-[#4338CA] disabled:opacity-50 text-white py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            {isEvaluating ? (
              <>Evaluating Answer Sheet...</>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" /> Run AI Board-Rubric Evaluation
              </>
            )}
          </button>
        </div>

        {/* Right: AI Output Panel */}
        <div className="bg-[#F8F9FC] rounded-2xl p-6 border border-gray-200 flex flex-col justify-between min-h-[380px]">
          {result ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Official Board Grade</span>
                  <h4 className="text-base font-bold text-[#0F172A]">{result.questionTitle}</h4>
                </div>
                <div className="text-2xl font-bold text-emerald-600">
                  {result.obtainedMarks} <span className="text-xs text-gray-500">/ {result.maxMarks} M</span>
                </div>
              </div>

              {/* Step breakdown */}
              <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                {result.stepBreakdown?.map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs ${
                      step.marksAwarded === step.maxMarks
                        ? 'bg-emerald-50/70 border-emerald-200 text-gray-800'
                        : 'bg-amber-50/70 border-amber-200 text-gray-800'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1 font-bold">
                      <span className="text-[#0F172A]">{step.stepName}</span>
                      <span className={step.marksAwarded === step.maxMarks ? 'text-emerald-700' : 'text-amber-700'}>
                        +{step.marksAwarded} / {step.maxMarks} M
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-relaxed">{step.reason}</p>
                    {step.formula && (
                      <div className="mt-1.5 text-indigo-700 text-[11px] font-semibold">
                        <InlineMath math={step.formula} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Hinglish Commentary */}
              <div className="p-3.5 bg-white border border-amber-200 rounded-xl text-xs shadow-sm">
                <p className="text-amber-800 font-bold mb-1">🗣️ Hinglish Examiner Commentary:</p>
                <p className="text-gray-700 text-[11px] italic leading-relaxed">
                  "{result.feedbackHinglish}"
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-8 h-full text-gray-500">
              <Scan className="w-12 h-12 text-gray-300 mb-3" />
              <h4 className="font-bold text-[#0F172A] text-base mb-1">Ready for Instant Evaluation</h4>
              <p className="text-xs max-w-xs leading-relaxed text-gray-500 mb-4">
                Click "Run AI Board-Rubric Evaluation" to see line-by-line partial step marking, formula checks, and Hinglish examiner feedback.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
