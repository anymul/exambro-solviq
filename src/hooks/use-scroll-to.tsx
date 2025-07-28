export function useScrollTo() {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    
    if (element) {
      // Prevent default anchor link behavior
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: 'smooth'
      });
    }
  };

  return { scrollToSection };
}