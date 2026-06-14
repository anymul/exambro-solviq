import { Target, BarChart3 } from 'lucide-react';

const ProblemStatement = () => {
  return (
    <section className="bg-[#f7f6f2] py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Adjusted gap: 16 on mobile (stacking), 12 on tablet, 24 on desktop */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-12 lg:gap-24 relative">
          
          {/* Divider line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

          {/* Left Col */}
          <div className="relative pr-0 md:pr-8">
            <div className="w-12 h-12 bg-[#EEF2FF] rounded-2xl flex items-center justify-center mb-5 md:mb-6 border border-[#4F46E5]/20">
              <Target className="w-6 h-6 text-[#4F46E5]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#28251d] mb-4">The Student's World</h2>
            <p className="font-body text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              Preparation feels like throwing darts in the dark. You write tests, wait weeks for results, and get a single number that tells you nothing about <b>"why"</b> you lost marks.
            </p>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="font-body text-lg md:text-xl font-medium text-[#28251d] italic">
                "Bihar Board has 28 lakh+ students. Most study without knowing which chapters will cost them the most marks."
              </p>
            </div>
          </div>

          {/* Right Col */}
          {/* Removed mt-12 here because the grid gap handles vertical spacing on mobile automatically */}
          <div className="relative pl-0 md:pl-8">
            <div className="w-12 h-12 bg-[#FEE2E2] rounded-2xl flex items-center justify-center mb-5 md:mb-6 border border-[#DC2626]/20">
              <BarChart3 className="w-6 h-6 text-[#DC2626]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#28251d] mb-4">The Institute's World</h2>
            <p className="font-body text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              You want to provide personalized attention, but you're drowning in operational chaos. Scaling quality education is bottlenecked by manual evaluation and tracking.
            </p>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="font-body text-lg md:text-xl font-medium text-[#28251d] italic">
                "Most coaching institutes manage 500+ students on paper, WhatsApp, and endless Excel sheets."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;