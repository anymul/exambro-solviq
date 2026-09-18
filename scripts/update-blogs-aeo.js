// scripts/update-blogs-aeo.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogsPath = path.resolve(__dirname, '../src/data/blogs.json');

const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));

const quickAnswers = {
  'cbse-class-12-pyq-pdf': {
    summary: '<strong>Direct Answer & Key Summary:</strong> CBSE Class 12 Previous Year Question Papers (2015–2025) for Physics, Chemistry, Maths, and Biology can be downloaded in chapter-wise PDF formats with official marking schemes. Practicing the last 10 years of PYQs covers over 60% of recurring question patterns and marking rubrics for the 2026 board examinations.',
    internalLinks: 'Explore full digital practice on the <a href="/prepone/pyqs" class="text-indigo-600 font-bold underline">PrepOne PYQ Practice Engine</a> and attempt <a href="/prepone/mock-tests" class="text-indigo-600 font-bold underline">CBSE Class 12 Full Mock Tests</a> with 60-second AI subjective evaluation.'
  },
  'bihar-board-important-questions-2026': {
    summary: '<strong>Direct Answer & Key Summary:</strong> The Bihar School Examination Board (BSEB) Class 12 exam 2026 features a 50% objective MCQ weightage and 50% subjective short/long answer questions. Scoring high requires mastering high-yield chapters in Physics (Electrostatics, Optics), Chemistry (Solutions, Kinetics), and Mathematics (Calculus).',
    internalLinks: 'Practice official BSEB papers on <a href="/prepone/pyqs" class="text-indigo-600 font-bold underline">PrepOne Bihar Board PYQs</a> and get your subjective handwriting checked with <a href="/prepone/ai-evaluation-students" class="text-indigo-600 font-bold underline">AutoScore AI</a>.'
  },
  'jee-mains-mock-test-free-2026': {
    summary: '<strong>Direct Answer & Key Summary:</strong> Free full-length JEE Mains 2026 mock tests follow the latest NTA Computer-Based Test (CBT) pattern with 90 questions (75 to attempt) across Physics, Chemistry, and Maths. Practicing 15+ full mocks with AI performance telemetry boosts JEE scores by an average of 22 marks.',
    internalLinks: 'Take free AI-analyzed papers via <a href="/prepone/mock-tests" class="text-indigo-600 font-bold underline">PrepOne Mock Test Studio</a> and review formula gaps with <a href="/prepone/revision-notes" class="text-indigo-600 font-bold underline">Spaced Revision Flashcards</a>.'
  },
  'cbse-class-10-science-important-questions-2026': {
    summary: '<strong>Direct Answer & Key Summary:</strong> In CBSE Class 10 Science 2026, 8 core chapters (Electricity, Life Processes, Carbon & Compounds, Chemical Reactions, Light, Magnetic Effects, Acids & Bases, Heredity) account for over 70% of total board marks. Preparation should focus on 3-mark and 5-mark numericals and diagrams.',
    internalLinks: 'Solve these questions with instant step evaluation on <a href="/prepone" class="text-indigo-600 font-bold underline">PrepOne App</a> and access <a href="/prepone/revision-notes" class="text-indigo-600 font-bold underline">Class 10 Science Revision Notes</a>.'
  },
  'cbse-class-12-chemistry-pyq-analysis': {
    summary: '<strong>Direct Answer & Key Summary:</strong> CBSE Class 12 Chemistry consistently allocates 28 marks to Organic Chemistry, 23 marks to Physical, and 19 marks to Inorganic. High-priority areas include Electrochemistry numericals, Chemical Kinetics rate laws, Coordination Compounds nomenclature, and Named Reactions.',
    internalLinks: 'Test your Chemistry derivations with <a href="/prepone/ai-evaluation-students" class="text-indigo-600 font-bold underline">AutoScore AI Handwritten Grading</a> and download <a href="/prepone/pyqs" class="text-indigo-600 font-bold underline">CBSE Chemistry Chapter PYQs</a>.'
  },
  'cbse-class-12-maths-pyq-analysis-2026': {
    summary: '<strong>Direct Answer & Key Summary:</strong> Calculus (Integrals, Differential Equations, Application of Derivatives) commands 35 out of 80 marks in CBSE Class 12 Mathematics. Vectors and 3D Geometry contribute another 14 marks, making step-by-step presentation and sign accuracy critical for 95+ scores.',
    internalLinks: 'Check step-marking accuracy with <a href="/prepone/ai-evaluation-students" class="text-indigo-600 font-bold underline">PrepOne Step Grader</a> and attempt <a href="/prepone/mock-tests" class="text-indigo-600 font-bold underline">Full-Length Maths Mocks</a>.'
  },
  'bseb-class-12-pyq-pdf-download': {
    summary: '<strong>Direct Answer & Key Summary:</strong> BSEB Class 12 Previous Year Question Papers (2016–2026) for Science, Arts, and Commerce streams provide official Bihar Board marking keys and OMR-style objective question formats. Practicing past papers is the single fastest way to secure distinction.',
    internalLinks: 'Practice real BSEB questions on <a href="/prepone/pyqs" class="text-indigo-600 font-bold underline">PrepOne BSEB Exam Engine</a> or evaluate coaching batch papers with <a href="/coachone" class="text-teal-600 font-bold underline">CoachOne for Institutes</a>.'
  },
  'cbse-class-10-maths-important-questions-2026': {
    summary: '<strong>Direct Answer & Key Summary:</strong> CBSE Class 10 Mathematics 2026 prioritizes Quadratic Equations, Arithmetic Progressions, Triangles (BPT theorem), Trigonometry identities, and Surface Areas & Volumes. Mastering standard NCERT exemplar and PYQ models guarantees 90%+ scores.',
    internalLinks: 'Strengthen Class 10 Maths formulas using <a href="/prepone/revision-notes" class="text-indigo-600 font-bold underline">PrepOne Spaced Repetition</a> and download <a href="/prepone/pyqs" class="text-indigo-600 font-bold underline">CBSE 10th Maths PYQs</a>.'
  },
  'bseb-class-10-matric-important-questions-2026': {
    summary: '<strong>Direct Answer & Key Summary:</strong> Bihar Board Class 10 (Matric) 2026 requires strong accuracy on 50 objective MCQs and structured answers in Science (Physics, Chemistry, Biology) and Mathematics. Key focus areas include Ohm\'s law, Prakash ka Paravartan, Quadratic Equations, and Mensuration.',
    internalLinks: 'Start free Hindi and English practice on <a href="/prepone" class="text-indigo-600 font-bold underline">PrepOne App</a> and check your paper presentation with <a href="/prepone/ai-evaluation-students" class="text-indigo-600 font-bold underline">AutoScore AI</a>.'
  }
};

let updatedCount = 0;
blogs.forEach(b => {
  if (quickAnswers[b.slug]) {
    const qa = quickAnswers[b.slug];
    const callout = `<div class="bg-indigo-50/90 border-l-4 border-[#4F46E5] rounded-2xl p-5 mb-8 text-gray-800 shadow-sm"><p class="text-sm md:text-base leading-relaxed text-[#0F172A] mb-3">${qa.summary}</p><p class="text-xs text-indigo-700 font-medium">💡 <strong>Take Action:</strong> ${qa.internalLinks}</p></div>`;
    
    if (!b.content.includes('Direct Answer & Key Summary:')) {
      b.content = callout + b.content;
      updatedCount++;
    }
  }
});

fs.writeFileSync(blogsPath, JSON.stringify(blogs, null, 4));
console.log(`Successfully updated ${updatedCount} blog posts with AEO featured snippet callout boxes and internal links.`);
