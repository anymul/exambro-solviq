import { Button } from "./ui/button"
import { Download, ArrowRight, Smartphone, Terminal } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">Ready to Transform Your Exam Preparation?</h2>

          <p className="text-lg md:text-xl text-primary-foreground/90 font-body max-w-2xl mx-auto leading-relaxed">
            Join thousands of Bihar Board students who are preparing smarter, not harder, with PrepOne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="gap-2 h-12 px-8 text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Download className="h-5 w-5" />
              Download PrepOne
            </Button>

            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2 h-12 px-8 text-base">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-primary-foreground/80 text-sm font-medium">
            <span className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Available on Android
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-primary-foreground/50"></span>
            <span className="flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              iOS Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}