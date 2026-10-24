import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import PrepOne from './PrepOne.jsx';
import CoachOne from './CoachOne.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import TestManagement from './pages/TestManagement.jsx';
import StudentAnalytics from './pages/StudentAnalytics.jsx';
import AIEvaluation from './pages/AIEvaluationWorkflow.jsx';
import InstituteOperations from './pages/InstituteOperations.jsx';
import BookDemo from './pages/BookDemo.jsx';
import MockTest from './pages/MockTest.jsx';
import PYQsMarketingPage from './pages/pyq.jsx';
import AutoScoreAI from './pages/AutoScoreAI.jsx';
import RevisionNotes from './pages/Revision.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import TermsOfService from './pages/Terms.jsx';
import PrivacyPolicy from './pages/Privacy.jsx';
import Workshops from './pages/Workshops.jsx';
import WorkshopRegister from './pages/WorkshopRegister.jsx';
import NotFound from './pages/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Main SolvIQ Landing Page */}
      <Route path="/" element={<App />} />

      {/* Flagship Product Pages */}
      <Route path="/prepone" element={<PrepOne />} />
      <Route path="/coachone" element={<CoachOne />} />
      <Route path="/about" element={<About />} />

      {/* Blogs & Study Material Hub */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/study-material" element={<Blog />} />

      {/* CoachOne Institute Suite */}
      <Route path="/test-management" element={<TestManagement />} />
      <Route path="/student-analytics" element={<StudentAnalytics />} />
      <Route path="/ai-evaluation" element={<AIEvaluation />} />
      <Route path="/institute-operations" element={<InstituteOperations />} />
      <Route path="/book-demo" element={<BookDemo />} />

      {/* PrepOne Student Modules */}
      <Route path="/prepone/mock-tests" element={<MockTest />} />
      <Route path="/prepone/pyqs" element={<PYQsMarketingPage />} />
      <Route path="/prepone/ai-evaluation-students" element={<AutoScoreAI />} />
      <Route path="/prepone/revision-notes" element={<RevisionNotes />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/workshops/register" element={<WorkshopRegister />} />

      {/* Dynamic Programmatic Articles */}
      <Route path="/study-material/:slug" element={<ArticlePage />} />
      <Route path="/blogs/:slug" element={<ArticlePage />} />

      {/* Legal Pages */}
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      {/* 404 Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
