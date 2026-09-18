import { useMemo } from 'react';
import katex from 'katex';

/**
 * Render inline LaTeX equation
 */
export const InlineMath = ({ math, className = '' }) => {
    const html = useMemo(() => {
        try {
            return katex.renderToString(math, { displayMode: false, throwOnError: false });
        } catch {
            return math;
        }
    }, [math]);

    return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
};

/**
 * Render display/block LaTeX equation
 */
export const BlockMath = ({ math, className = '' }) => {
    const html = useMemo(() => {
        try {
            return katex.renderToString(math, { displayMode: true, throwOnError: false });
        } catch {
            return math;
        }
    }, [math]);

    return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
};

/**
 * Render mixed text containing \( ... \) or $ ... $ or \[ ... \] equations
 */
export const LatexText = ({ children, text, className = '' }) => {
    const raw = children || text || '';
    
    const html = useMemo(() => {
        if (typeof raw !== 'string') return '';
        try {
            // 1. Replace display math \[ ... \] and $$ ... $$
            let res = raw.replace(/\$\$([\s\S]+?)\$\$/g, (_, eq) => {
                return katex.renderToString(eq.trim(), { displayMode: true, throwOnError: false });
            }).replace(/\\\[([\s\S]+?)\\\]/g, (_, eq) => {
                return katex.renderToString(eq.trim(), { displayMode: true, throwOnError: false });
            });

            // 2. Replace inline math \( ... \) and $ ... $
            res = res.replace(/\\\(([\s\S]+?)\\\)/g, (_, eq) => {
                return katex.renderToString(eq.trim(), { displayMode: false, throwOnError: false });
            }).replace(/\$([^$\n]+?)\$/g, (_, eq) => {
                return katex.renderToString(eq.trim(), { displayMode: false, throwOnError: false });
            });

            return res;
        } catch {
            return raw;
        }
    }, [raw]);

    return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default LatexText;
