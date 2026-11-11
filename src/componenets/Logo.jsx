import markSrc from '../assets/enevor-mark.png';
import markDarkSrc from '../assets/enevor-mark-dark.png';

// ENEVOR LABS logo: the "e" ribbon mark plus a live-text wordmark that follows currentColor.
// `onDark` swaps in a brightened mark, since the original's navy ribbons sink into the dark bands.
export default function Logo({ onDark = false, className = 'h-8 md:h-10 w-auto' }) {
    return (
        <span className="inline-flex items-center gap-3" role="img" aria-label="ENEVOR LABS">
            <img src={onDark ? markDarkSrc : markSrc} alt="" aria-hidden="true" width="40" height="43" className={className} draggable="false" />
            <span className="flex flex-col font-body leading-none" aria-hidden="true">
                <span className="font-bold leading-none tracking-[0.14em] text-lg md:text-[22px]">ENEVOR</span>
                <span className="mt-1 font-semibold leading-none tracking-[0.62em] text-[8px] md:text-[9px] opacity-80">LABS</span>
            </span>
        </span>
    );
}
