import { Button } from "./ui/button"
import { MoveRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-32 pb-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                For Bihar Board Class 10 & 12 Students
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Your <span className="text-primary">Friendly</span> Mock Test Buddy
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Practice, track progress, and conquer exams with confidence. ExamBro makes learning stress-free.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                Download Now
                <MoveRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[10px] text-white">
                      {String.fromCodePoint(0x1F60A + i)}
                    </div>
                  ))}
                </div>
                <span className="text-muted-foreground">Trusted by 10,000+ students</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-amber-500">★★★★★</span>
                <span className="text-muted-foreground">4.8/5 rating</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[85%] rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl">
              <div className="absolute inset-1 bg-white rounded-xl overflow-hidden">
                <div className="h-10 bg-gray-100 border-b flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="rounded-lg bg-blue-50 p-4 mb-4">
                    <h3 className="font-medium text-blue-700">Science - Chapter 5</h3>
                    <p className="text-sm text-muted-foreground">Practice Test • 20 Questions</p>
                    <div className="mt-3 h-2 bg-blue-100 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-100 h-8 rounded-lg w-full"></div>
                    <div className="bg-gray-100 h-24 rounded-lg w-full"></div>
                    <div className="flex space-x-2">
                      <div className="bg-gray-100 h-10 rounded-lg w-1/2"></div>
                      <div className="bg-gray-100 h-10 rounded-lg w-1/2"></div>
                    </div>
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