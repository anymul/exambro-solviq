import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { useScrollTo } from "@/hooks/use-scroll-to"

export function Footer() {
  const { scrollToSection } = useScrollTo()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }
  
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">Exam<span className="text-blue-400">Bro</span></span>
              <span className="text-xs text-gray-400">by Solviq.in</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your friendly mock test buddy for Bihar Board students. Making exam preparation smart, accessible, and stress-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, "features")}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#benefits" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, "benefits")}
                >
                  Benefits
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, "about")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, "faq")}
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Study Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bihar Board Updates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Solviq.in</li>
              <li>Bihar, India</li>
              <li>support@solviq.in</li>
              <li>+91 XXXXX XXXXX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Solviq.in. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}