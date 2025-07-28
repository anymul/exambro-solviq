import { 
  BookOpen, 
  BarChart3, 
  Sparkles, 
  FileCheck, 
  Trophy, 
  Brain 
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-blue-500" />,
    title: "Chapter-wise Practice",
    description: "Master concepts with targeted questions from each chapter. Perfect for focused revision and concept strengthening."
  },
  {
    icon: <FileCheck className="h-8 w-8 text-blue-500" />,
    title: "Full Syllabus Tests",
    description: "Simulate real exam experience with comprehensive tests based on the latest Bihar Board patterns."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
    title: "Performance Insights",
    description: "Track your progress with detailed analytics that pinpoint strengths and areas needing improvement."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-blue-500" />,
    title: "Latest Exam Patterns",
    description: "Always updated with the most current Bihar Board exam patterns to ensure relevant preparation."
  },
  {
    icon: <Trophy className="h-8 w-8 text-blue-500" />,
    title: "Achievement System",
    description: "Stay motivated with badges and rewards as you complete practice tests and improve scores."
  },
  {
    icon: <Brain className="h-8 w-8 text-blue-500" />,
    title: "Smart Recommendations",
    description: "Get personalized suggestions on what to study next based on your performance data."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything You Need to Excel</h2>
          <p className="text-lg text-muted-foreground">
            ExamBro provides all the tools Bihar Board students need for effective exam preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-muted bg-background/60 backdrop-blur-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-3">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}