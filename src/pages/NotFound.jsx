import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, ShieldAlert, Sparkles } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Subtle parallax effect on the "exam paper" based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#4d2c8f] font-body selection:bg-red-500 selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-32 px-4 relative overflow-hidden">
        
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-[80px]"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-[100px]"></div>
        </div>

        {/* The "Exam Paper" Container */}
        <div 
          className="relative max-w-2xl w-full bg-white rounded-sm shadow-2xl p-8 md:p-12 transition-transform duration-200 ease-out"
          style={{ 
            transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)',
            backgroundPosition: '0 1.5rem'
          }}
        >
          {/* Paper Holes */}
          <div className="absolute left-4 top-12 w-4 h-4 bg-[#f7f6f2] rounded-full shadow-inner border border-gray-200"></div>
          <div className="absolute left-4 top-1/2 w-4 h-4 bg-[#f7f6f2] rounded-full shadow-inner border border-gray-200 transform -translate-y-1/2"></div>
          <div className="absolute left-4 bottom-12 w-4 h-4 bg-[#f7f6f2] rounded-full shadow-inner border border-gray-200"></div>
          
          {/* Red Margin Line */}
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-red-200"></div>

          {/* Paper Content */}
          <div className="pl-10 relative z-10">
            
            {/* Mock Header */}
            <div className="flex justify-between items-start mb-12 border-b-2 border-gray-800 pb-4">
              <div className="font-mono text-gray-500 text-sm">
                <p>Subject: Web Navigation</p>
                <p>Topic: Finding the right URL</p>
              </div>
              <div className="text-right">
                <div className="inline-block border-4 border-red-500 text-red-500 rounded-full w-24 h-24 flex items-center justify-center transform rotate-12 relative opacity-80">
                  <span className="font-display font-bold text-4xl">404</span>
                  <div className="absolute top-1/2 left-1/2 w-full h-1 bg-red-500 transform -translate-x-1/2 -translate-y-1/2 -rotate-12"></div>
                </div>
              </div>
            </div>

            {/* Mock Question & Answer */}
            <div className="space-y-6 mb-12">
              <p className="font-bold text-gray-800 text-lg">Q1. Navigate to the requested page.</p>
              
              <div className="relative">
                <p className="font-mono text-gray-500 italic text-lg leading-[32px]">
                  "I tried looking everywhere on the server, but the file you requested seems to have vanished into the digital void."
                </p>
                
                {/* AI Red Pen Correction */}
                <div className="absolute -top-3 -right-4 transform rotate-3">
                  <div className="bg-red-50 border border-red-200 px-3 py-2 rounded-xl shadow-sm inline-flex items-start">
                    <ShieldAlert className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                    <div>
                      <p className="text-red-600 font-bold text-xs uppercase tracking-wider mb-1">AI Evaluation</p>
                      <p className="text-red-500 text-sm font-handwriting">Concept Error. URL does not exist in syllabus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Revision Plan (Navigation) */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 relative overflow-hidden">
              <Sparkles className="absolute top-4 right-4 w-6 h-6 text-indigo-200 opacity-50" />
              <h3 className="font-display font-bold text-xl text-[#0F172A] mb-4">Suggested Revision Plan:</h3>
              <p className="text-gray-600 mb-6 text-sm">Let's get you back on track. Choose a verified destination below.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/" className="flex-1 bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center transition-colors shadow-md">
                  <Home className="w-4 h-4 mr-2" />
                  Homepage
                </Link>
                <button 
                  onClick={() => window.history.back()} 
                  className="flex-1 bg-white hover:bg-gray-50 text-[#0F172A] border border-gray-200 px-6 py-3 rounded-lg font-bold flex items-center justify-center transition-colors shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}