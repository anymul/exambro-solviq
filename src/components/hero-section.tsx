import { Button } from "./ui/button"
import { MoveRight, Clock, CheckCircle2, ChevronRight, ChevronLeft, AlertCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-16">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-violet-500/5 blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur px-3 py-1 text-sm font-medium text-foreground mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t('hero.badge')}
            </div>

            <div className="relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-foreground leading-[1.1]">
                {t('hero.title_start')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-600">{t('hero.title_middle')}</span><br></br>
                {t('hero.title_middle_2')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-600">{t('hero.title_end')}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 font-body leading-relaxed mt-6">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2 h-14 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                {t('hero.cta_primary')} <MoveRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base hover:bg-muted transition-all duration-300">
                {t('hero.cta_secondary')}
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-foreground">4.8</p>
                <p className="text-sm text-muted-foreground">App Rating</p>
              </div>
              <div className="h-8 w-[1px] bg-border"></div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Questions Bank</p>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block animate-fade-in delay-200">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"></div>

            {/* Main Interface Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[auto] rounded-2xl bg-card border border-border/50 shadow-2xl overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/0 dark:from-black/0 dark:to-black/0 pointer-events-none"></div>

              {/* Header */}
              <div className="relative h-14 bg-muted/50 border-b border-border px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-background/50 px-3 py-1 rounded-full border border-border/50">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-mono">00:45:30</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 flex-1 bg-card/80 backdrop-blur-sm">

                {/* Progress & Subject Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-semibold dark:bg-blue-900/30 dark:text-blue-300">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {t('hero.mock_title')}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">Q. 5 / 20</span>
                </div>

                {/* Question */}
                <div className="mb-6">
                  <h3 className="text-lg font-heading font-semibold text-foreground leading-snug">
                    {t('hero.mock_question')}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {[
                    { id: 'A', text: t('hero.mock_options.A'), bg: 'bg-card', border: 'border-border', icon: null },
                    { id: 'B', text: t('hero.mock_options.B'), bg: 'bg-primary/10', border: 'border-primary', icon: <CheckCircle2 className="w-5 h-5 text-primary" /> },
                    { id: 'C', text: t('hero.mock_options.C'), bg: 'bg-card', border: 'border-border', icon: null },
                    { id: 'D', text: t('hero.mock_options.D'), bg: 'bg-card', border: 'border-border', icon: null },
                  ].map((option) => (
                    <div key={option.id} className={`flex items-center justify-between p-3 rounded-xl border ${option.border} ${option.bg} hover:border-primary/50 transition-colors cursor-pointer group`}>
                      <div className="flex items-center gap-3">
                        <span className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold ${option.id === 'B' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground group-hover:bg-muted/80'}`}>
                          {option.id}
                        </span>
                        <span className={`text-sm font-medium ${option.id === 'B' ? 'text-primary' : 'text-foreground'}`}>
                          {option.text}
                        </span>
                      </div>
                      {option.icon}
                    </div>
                  ))}
                </div>

                {/* Footer / Actions */}
                <div className="mt-8 flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Previous
                  </Button>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Next <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>

              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-[20%] right-[5%] z-20 bg-background/90 backdrop-blur border border-border p-3 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{t('hero.mock_badge_title')}</p>
                  <p className="text-lg font-bold text-foreground">{t('hero.mock_badge_value')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}