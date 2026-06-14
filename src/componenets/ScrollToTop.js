import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly jump to the top
    window.scrollTo(0, 0);
    
    // Optional: If you want smooth scrolling instead, use this:
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}