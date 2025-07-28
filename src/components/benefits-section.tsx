import { CheckCircle2 } from "lucide-react"

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 relative overflow-hidden border border-blue-100">
              <div className="absolute -right-8 -top-8 w-36 h-36 bg-blue-100 rounded-full opacity-60"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-700">10</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Class 10 Special</h3>
                    <p className="text-sm text-muted-foreground">Science • Math • Social Studies • English • Hindi</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    "500+ Practice Questions",
                    "25+ Full-length Mock Tests",
                    "Last 5 Years' Papers",
                    "Exam Pattern Analysis",
                    "Personalized Study Plan"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="h-[1px] bg-gray-200 my-6"></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-indigo-100 h-10 w-10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-indigo-700">12</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Class 12 Advanced</h3>
                    <p className="text-sm text-muted-foreground">Science • Commerce • Arts Streams</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    "700+ Practice Questions",
                    "30+ Full-length Mock Tests",
                    "Subject-wise Performance Tracking",
                    "Detailed Solutions with Explanations",
                    "Topic Mastery Reports"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl font-bold">Why Students Love ExamBro</h2>
              
              <p className="text-lg text-muted-foreground">
                ExamBro transforms how Bihar Board students prepare for their exams, making the process 
                more effective and less stressful.
              </p>
              
              <div className="space-y-6">
                <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
                  <div className="bg-blue-100 text-blue-700 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Stress-Free Learning</h3>
                    <p className="text-muted-foreground">
                      Our approach breaks down complex topics into manageable chunks, reducing overwhelm and building confidence.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
                  <div className="bg-blue-100 text-blue-700 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Data-Driven Progress</h3>
                    <p className="text-muted-foreground">
                      Real-time analytics show exactly where you stand and what needs improvement, optimizing your study time.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
                  <div className="bg-blue-100 text-blue-700 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Exam-Focused Content</h3>
                    <p className="text-muted-foreground">
                      All content is tailored specifically to Bihar Board exams, ensuring you're practicing what matters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}