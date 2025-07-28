import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is ExamBro only for Bihar Board students?",
    answer: "Yes, currently ExamBro is specifically designed for Bihar Board Class 10 and 12 students, with content tailored to their syllabus and exam patterns. We plan to expand to other boards in the future."
  },
  {
    question: "How often is the content updated?",
    answer: "We update our question bank and mock tests regularly to reflect the latest Bihar Board exam patterns and syllabus changes. Major updates happen before the start of each academic year, with minor updates throughout the year."
  },
  {
    question: "Can I use ExamBro without internet access?",
    answer: "Yes, once you download the app and the required content, most features work offline. Performance data will sync when you reconnect to the internet."
  },
  {
    question: "How do performance analytics work?",
    answer: "ExamBro tracks various metrics including accuracy, time spent per question, topic-wise strengths and weaknesses, and improvement over time. This data is presented in easy-to-understand charts and insights."
  },
  {
    question: "Is there a free version available?",
    answer: "Yes, ExamBro offers a free version with limited access to practice questions and tests. The premium version unlocks the full content library, performance analytics, and personalized recommendations."
  },
  {
    question: "How can teachers or schools use ExamBro?",
    answer: "We offer special school packages that allow teachers to assign tests, monitor student progress, and identify class-wide areas for improvement. Contact us for more information on institutional plans."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Have questions about ExamBro? We've got answers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}