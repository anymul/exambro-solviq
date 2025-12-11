import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { useScrollTo } from "@/hooks/use-scroll-to"

export function Footer() {
  const { scrollToSection } = useScrollTo()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <footer className="bg-slate-950 text-slate-200 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold font-heading text-white">Prep<span className="text-primary">One</span></span>
              <span className="text-xs text-slate-400">by Solviq.in</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed font-body">
              Your friendly mock test buddy for Bihar Board students. Making exam preparation smart, accessible, and stress-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-slate-400 hover:text-primary transition-colors block hover:translate-x-1 duration-200"
                  onClick={(e) => handleNavClick(e, "features")}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-slate-400 hover:text-primary transition-colors block hover:translate-x-1 duration-200"
                  onClick={(e) => handleNavClick(e, "benefits")}
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-primary transition-colors block hover:translate-x-1 duration-200"
                  onClick={(e) => handleNavClick(e, "about")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-400 hover:text-primary transition-colors block hover:translate-x-1 duration-200"
                  onClick={(e) => handleNavClick(e, "faq")}
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors block hover:translate-x-1 duration-200">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors block hover:translate-x-1 duration-200">Study Tips</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors block hover:translate-x-1 duration-200">Bihar Board Updates</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors block hover:translate-x-1 duration-200">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span> Solviq.in
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span> Bihar, India
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span> support@solviq.in
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Solviq.in. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-500">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}