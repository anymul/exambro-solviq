"use client"

import { Button } from "./ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
// import { Link } from "react-router-dom" // Removing unused import if any, standardizing
import { Globe } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 lg:px-12",
      isScrolled ? "bg-background/80 shadow-md backdrop-blur-md border-b border-border/40" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - Text based for now */}
          <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-600 font-heading">
            PrepOne <span className="text-sm font-normal text-muted-foreground ml-1">by SolvIQ.in</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t('nav.features')}
          </a>
          <a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t('nav.benefits')}
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t('nav.about')}
          </a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t('nav.testimonials')}
          </a>
          <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t('nav.faq')}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="group">
                <Globe className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? "bg-accent" : ""}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('hi')} className={language === 'hi' ? "bg-accent" : ""}>
                हिंदी (Hindi)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button  onClick={() => window.open('https://prepone.solviq.in', '_blank')}
          className="font-medium px-6 shadow-lg hover:shadow-primary/25 transition-all duration-300">
            {t('nav.download')}
          </Button>
        </div>
      </div>
    </header>
  )
}