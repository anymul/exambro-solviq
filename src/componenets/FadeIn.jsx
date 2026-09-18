import { useState, useEffect, useRef } from 'react';

const FadeIn = ({
    children,
    delay = 0,
    direction = 'up',
    className = '',
    threshold = 0.15,
    triggerOnce = true
}) => {
    const [reducedMotion, setReducedMotion] = useState(() => 
        typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
    );
    const [isVisible, setIsVisible] = useState(() => 
        typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
    );
    const ref = useRef(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleChange = (event) => setReducedMotion(event.matches);

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange);
        } else {
            mediaQuery.addListener(handleChange);
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleChange);
            } else {
                mediaQuery.removeListener(handleChange);
            }
        };
    }, []);

    useEffect(() => {
        if (reducedMotion) {
            return;
        }

        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) observer.unobserve(node);
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [threshold, triggerOnce, reducedMotion]);

    const getTransform = () => {
        if (direction === 'up') return 'translateY(24px)';
        if (direction === 'down') return 'translateY(-24px)';
        if (direction === 'left') return 'translateX(24px)';
        if (direction === 'right') return 'translateX(-24px)';
        return 'translateY(24px)';
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : getTransform(),
                transitionProperty: 'opacity, transform',
                transitionDuration: reducedMotion ? '0ms' : '700ms',
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: reducedMotion ? '0ms' : `${delay}ms`,
                willChange: 'opacity, transform'
            }}
        >
            {children}
        </div>
    );
};

export default FadeIn;