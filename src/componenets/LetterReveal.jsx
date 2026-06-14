import React, { useState, useEffect, useRef } from 'react';

const LetterReveal = ({ text, delay = 0, stagger = 25, className = "", threshold = 0.5 }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // 1. Detect when the element enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect once visible so it only animates the first time
          if (containerRef.current) observer.unobserve(containerRef.current);
        }
      },
      { threshold } // 0.5 means 50% of the element must be visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  // 2. Trigger the stagger animation only AFTER it becomes visible
  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => setIsMounted(true), delay);
    return () => clearTimeout(timer);
  }, [isVisible, delay]);

  // Split text while preserving whitespace
  const words = text.split(/(\s+)/);
  let globalCharIndex = 0; // Keeps the stagger continuous across multiple words

  return (
    <span ref={containerRef} className="inline-block">
      {words.map((word, wordIndex) => {
        // Handle spaces/whitespace to maintain normal sentence structure
        if (/\s+/.test(word)) {
          return (
            <span key={`space-${wordIndex}`} className="inline-block whitespace-pre">
              {word}
            </span>
          );
        }

        // Handle actual words
        return (
          // The whitespace-nowrap and inline-block prevent the word from breaking in the middle
          <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIndex) => {
              const currentStaggerIndex = globalCharIndex++;
              
              return (
                <span
                  key={`char-${charIndex}`}
                  className={`inline-block transition-all duration-700 ease-out ${className} ${
                    isMounted 
                      ? 'opacity-100 translate-y-0 blur-none' 
                      : 'opacity-0 translate-y-3 blur-[4px]'
                  }`}
                  style={{ 
                    transitionDelay: `${currentStaggerIndex * stagger}ms`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};

export default LetterReveal;