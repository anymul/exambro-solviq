const ProblemStatement = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-0 relative">

          {/* The coral margin line of a marked answer sheet */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#ff7a6b]/45 -translate-x-1/2" aria-hidden="true"></div>

          <div className="md:pr-14 lg:pr-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-5 leading-tight">The Student's Journey</h2>
            <p className="font-body text-lg text-[#475569] leading-relaxed mb-8">
              Preparation too often feels like studying in the dark. A student puts in months of genuine effort, writes full mock papers, and receives only a single aggregate number that explains nothing about <b>where</b> their reasoning faltered.
            </p>
            <blockquote className="co-hand text-2xl md:text-[1.7rem] leading-[1.45] text-[#1d3a8a]">
              "Millions of ambitious students study 12 to 14 hours a day, yet enter the exam hall never knowing which conceptual blind spots will cost them their rank."
            </blockquote>
          </div>

          <div className="md:pl-14 lg:pl-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-5 leading-tight">The Educator's Dilemma</h2>
            <p className="font-body text-lg text-[#475569] leading-relaxed mb-8">
              Every committed teacher longs to guide each learner individually. Yet their time is consumed by the administrative weight of grading hundreds of physical answer sheets, leaving little space for actual mentorship.
            </p>
            <blockquote className="co-hand text-2xl md:text-[1.7rem] leading-[1.45] text-[#d8432f]">
              "When educators spend entire evenings checking papers by hand, coaching becomes a test factory instead of a place of true mentorship."
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
