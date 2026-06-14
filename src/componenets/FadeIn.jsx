import { useState, useEffect } from 'react';

const FadeIn = ({ children, delay = 0, direction = 'up', className = "" }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Small timeout ensures the browser renders the initial state before animating
        const timer = setTimeout(() => setIsMounted(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const getTransform = () => {
        if (direction === 'up') return 'translate-y-12';
        if (direction === 'down') return '-translate-y-12';
        if (direction === 'left') return 'translate-x-12';
        if (direction === 'right') return '-translate-x-12';
        return '';
    };

    return (
        <div
            className={`transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${getTransform()}`
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default FadeIn;