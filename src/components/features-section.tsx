import {
  BookOpen,
  BarChart3,
  Sparkles,
  FileCheck,
  Trophy,
  Brain
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { useLanguage } from "@/context/LanguageContext"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: t('features.cards.0.title'),
      description: t('features.cards.0.description'),
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: t('features.cards.1.title'),
      description: t('features.cards.1.description'),
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t('features.cards.2.title'),
      description: t('features.cards.2.description'),
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: t('features.cards.3.title'),
      description: t('features.cards.3.description'),
      color: "text-amber-600",
      bgColor: "bg-amber-100 dark:bg-amber-900/20"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: t('features.cards.4.title'),
      description: t('features.cards.4.description'),
      color: "text-rose-600",
      bgColor: "bg-rose-100 dark:bg-rose-900/20"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: t('features.cards.5.title'),
      description: t('features.cards.5.description'),
      color: "text-indigo-600",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/20"
    }
  ]

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">{t('features.title')}</h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            {t('features.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border/50 bg-card hover:bg-card/80 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className={`mb-4 w-fit p-3 rounded-xl transition-colors ${feature.bgColor}`}>
                  {/* Clone the icon element to add the specific color class */}
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-heading text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}