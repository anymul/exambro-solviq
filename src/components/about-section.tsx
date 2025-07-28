import { Card, CardContent, CardFooter } from "./ui/card"
import { Lightbulb, Heart, Target, BadgePlus } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Our Story</h3>
              <h2 className="text-3xl font-bold mb-4">Meet Solviq.in</h2>
              <p className="text-lg text-muted-foreground">
                The EdTech company behind ExamBro, building smarter learning tools for India's students.
              </p>
            </div>
            
            <div className="space-y-4">
              <p>
                Solviq.in was founded with a simple vision — to make exam preparation smart, accessible, and stress-free. 
                We believe that learning should be intuitive and assessments should empower, not overwhelm.
              </p>
              
              <p>
                Our mission is to create data-driven, student-first platforms that solve real problems 
                faced by school and college students across India.
              </p>
              
              <p>
                With a team of passionate developers, educators, and designers, Solviq.in is committed to 
                delivering clean, focused, and effective digital learning tools — starting with our flagship product, ExamBro.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-blue-700" />
                    </div>
                  </div>
                  <h3 className="text-center font-medium mb-2">Innovation</h3>
                </CardContent>
                <CardFooter className="text-center text-sm text-muted-foreground pt-0">
                  Rethinking how students learn and practice
                </CardFooter>
              </Card>
              
              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-blue-700" />
                    </div>
                  </div>
                  <h3 className="text-center font-medium mb-2">Student-First</h3>
                </CardContent>
                <CardFooter className="text-center text-sm text-muted-foreground pt-0">
                  Designing with the learner at the center
                </CardFooter>
              </Card>
              
              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Target className="h-6 w-6 text-blue-700" />
                    </div>
                  </div>
                  <h3 className="text-center font-medium mb-2">Focus</h3>
                </CardContent>
                <CardFooter className="text-center text-sm text-muted-foreground pt-0">
                  Clear, distraction-free learning experiences
                </CardFooter>
              </Card>
              
              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <BadgePlus className="h-6 w-6 text-blue-700" />
                    </div>
                  </div>
                  <h3 className="text-center font-medium mb-2">Quality</h3>
                </CardContent>
                <CardFooter className="text-center text-sm text-muted-foreground pt-0">
                  Excellence in content and technology
                </CardFooter>
              </Card>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 -ml-16 -mb-16"></div>
            
            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Our Vision for Education</h3>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                  "We're building tools that make learning less about memorization and more about understanding. 
                  When students truly grasp concepts and see their progress, they gain the confidence to excel."
                </blockquote>
                <p className="text-right text-sm mt-2">— Solviq.in Founder</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-4xl text-blue-700">10,000+</h4>
                  <p className="text-sm text-muted-foreground mt-1">Students Helped</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-4xl text-blue-700">50+</h4>
                  <p className="text-sm text-muted-foreground mt-1">Schools Reached</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-4xl text-blue-700">5K+</h4>
                  <p className="text-sm text-muted-foreground mt-1">Tests Completed</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-4xl text-blue-700">93%</h4>
                  <p className="text-sm text-muted-foreground mt-1">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}