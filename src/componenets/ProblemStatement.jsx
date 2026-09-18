import { Target, BarChart3 } from 'lucide-react';

const ProblemStatement = () => {
  return (
    <section className="bg-[#f7f6f2] py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-16 md:gap-12 lg:gap-24 relative">
          
          {/* Divider line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

          {/* Left Col */}
          <div className="relative pr-0 md:pr-8">
            <div className="w-12 h-12 bg-[#EEF2FF] rounded-2xl flex items-center justify-center mb-5 md:mb-6 border border-[#4F46E5]/20">
              <Target className="w-6 h-6 text-[#4F46E5]" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#28251d] mb-4">The Student's Journey</h2>
            <p className="font-body text-base sm:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              Preparation too often feels like studying in the dark. A student puts in months of genuine effort, writes full mock papers, and receives only a single aggregate number that explains nothing about <b>where</b> their reasoning faltered.
            </p>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="font-body text-base md:text-lg font-medium text-[#28251d] italic leading-relaxed">
                "Millions of ambitious students study 12 to 14 hours a day, yet enter the exam hall never knowing which conceptual blind spots will cost them their rank."
              </p>
            </div>
          </div>

          {/* Right Col */}
          <div className="relative pl-0 md:pl-8">
            <div className="w-12 h-12 bg-[#FEE2E2] rounded-2xl flex items-center justify-center mb-5 md:mb-6 border border-[#DC2626]/20">
              <BarChart3 className="w-6 h-6 text-[#DC2626]" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#28251d] mb-4">The Educator's Dilemma</h2>
            <p className="font-body text-base sm:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              Every committed teacher longs to guide each learner individually. Yet their time is consumed by the administrative weight of grading hundreds of physical answer sheets, leaving little space for actual mentorship.
            </p>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="font-body text-base md:text-lg font-medium text-[#28251d] italic leading-relaxed">
                "When educators spend entire evenings checking papers by hand, coaching becomes a test factory instead of a place of true mentorship."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;