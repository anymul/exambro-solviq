import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import PrepOne from './PrepOne.jsx'
import './index.css'
import CoachOne from './CoachOne.jsx'
import ScrollToTop from './componenets/ScrollToTop.js'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import Blog from './pages/Blog.jsx'
import TestManagement from './pages/TestManagement.jsx'
import StudentAnalytics from './pages/StudentAnalytics.jsx'
import AIEvaluation from './pages/AIEvaluationWorkflow.jsx'
import BookDemo from './pages/BookDemo.jsx'
// import AppAdsTxt from './pages/AppAdsTxt.jsx'
import MockTest from './pages/MockTest.jsx'
import PYQsMarketingPage from './pages/pyq.jsx'
import AutoScoreAI from './pages/AutoScoreAI.jsx'
import RevisionNotes from './pages/Revision.jsx'
import { HelmetProvider } from 'react-helmet-async';
import ArticlePage from './pages/ArticlePage.jsx';
import TermsOfService from './pages/Terms.jsx';
import PrivacyPolicy from './pages/Privacy.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Main Solviq Landing Page */}
          <Route path="/" element={<App />} />

          {/* PrepOne Specific Landing Page */}
          <Route path="/prepone" element={<PrepOne />} />
          <Route path="/coachone" element={<CoachOne />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/test-management" element={<TestManagement />} />
          <Route path="/student-analytics" element={<StudentAnalytics />} />
          <Route path="/ai-evaluation" element={<AIEvaluation />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/prepone/mock-tests" element={<MockTest />} />
          {/* <Route path="/app-ads.txt" element={<AppAdsTxt />} /> */}
          <Route path="/prepone/pyqs" element={<PYQsMarketingPage />} />
          <Route path="/prepone/ai-evaluation-students" element={<AutoScoreAI />} />
          <Route path="/prepone/revision-notes" element={<RevisionNotes />} />
          <Route path="/study-material/:slug" element={<ArticlePage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </HelmetProvider>,
)