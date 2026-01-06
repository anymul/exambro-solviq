import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: " Is PrepOne content based on the new 2026 Syllabus?",
    answer: "Yes! We update our Model Papers and Objective Questions weekly to match the latest notifications from Bihar School Examination Board (BSEB)."
  },
  {
    question: "Is this app free for Matric and Inter students?",
    answer: "PrepOne offers a Free Plan with daily practice sets. We also have a Premium plan for unlimited full-length mock tests, which is currently free for all til March 2026."
  },
  {
    question: "Can I use PrepOne without internet access?",
    answer: "Yes, once you download the app and the required content, most features work offline. Performance data will sync when you reconnect to the internet."
  },
  {
    question: "Can I use PrepOne in Hindi Medium?",
    answer: "Absolutely. The entire app is optimized for Hindi Medium students, including Science and Social Studies subjects."
  },
  {
    question: "Is there a free version available?",
    answer: "Yes, PrepOne offers a free version with limited access to practice questions and tests. The premium version unlocks the full content library, performance analytics, and personalized recommendations."
  },
  {
    question: "How can teachers or schools use PrepOne?",
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
            Have questions about PrepOne? We've got answers.
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