import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Aditya Kumar",
    role: "Class 12 Science Student",
    quote: "PrepOne helped me understand which topics I was struggling with, and the chapter-wise tests were perfect for targeting my weak areas. I improved my marks by 15% in just two months!",
    avatar: "AK",
    rating: 5
  },
  {
    name: "Priya Singh",
    role: "Class 10 Student",
    quote: "I was always nervous before exams, but practicing with PrepOne's mock tests made me confident. The detailed explanations for each answer really helped me understand concepts better.",
    avatar: "PS",
    rating: 5
  },
  {
    name: "Rahul Sharma",
    role: "Class 12 Commerce Student",
    quote: "The performance tracking feature is amazing! I could see my progress over time and focus on improving specific subjects. The app is so easy to use and has everything I need for exam prep.",
    avatar: "RS",
    rating: 4
  },
  {
    name: "Meera Patel",
    role: "Class 10 Student",
    quote: "My parents got me PrepOne after I struggled in mid-terms. The practice questions are exactly like what comes in Bihar Board exams, and the explanations are clear and easy to understand.",
    avatar: "MP",
    rating: 5
  },
  {
    name: "Vikram Jha",
    role: "Class 12 Arts Student",
    quote: "I love how I can practice anywhere, anytime. The app works even with spotty internet connection, and the full syllabus tests really prepared me for the actual exam environment.",
    avatar: "VJ",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What Students Say</h2>
          <p className="text-lg text-muted-foreground">
            Hear from students who have transformed their exam preparation with PrepOne.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border border-blue-100 h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                  <CardFooter className="flex items-center gap-4 border-t pt-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2" />
          <CarouselNext className="right-0 translate-x-1/2" />
        </Carousel>
      </div>
    </section>
  )
}