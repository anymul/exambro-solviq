import { Button } from "./ui/button"
import { Download, ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Exam Preparation?</h2>
          
          <p className="text-lg text-blue-100">
            Join thousands of Bihar Board students who are preparing smarter, not harder, with ExamBro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              <Download className="h-5 w-5" /> 
              Download ExamBro
            </Button>
            
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700 gap-2">
              Contact Us 
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="pt-4">
            <p className="text-blue-100 text-sm">
              Available on Android and iOS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}