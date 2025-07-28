"use client"

import { Button } from "./ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useScrollTo } from "@/hooks/use-scroll-to"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollToSection } = useScrollTo()

  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 lg:px-12",
      isScrolled ? "bg-white shadow-md backdrop-blur-sm bg-opacity-80" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Exam<span className="text-blue-700">Bro</span></span>
          <span className="text-xs text-muted-foreground hidden md:inline-block">by Solviq.in</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "features")}
          >
            Features
          </a>
          <a 
            href="#benefits" 
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "benefits")}
          >
            Benefits
          </a>
          <a 
            href="#about" 
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "about")}
          >
            About Us
          </a>
          <a 
            href="#faq" 
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "faq")}
          >
            FAQs
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex">Login</Button>
          <Button>Download App</Button>
        </div>
      </div>
    </header>
  )
}