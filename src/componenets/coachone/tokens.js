// Class tokens and analytics shared by the CoachOne marketing pages.
export const trackCta = (location) => {
    try {
        window.gtag?.('event', 'coachone_demo_cta', { location });
    } catch {
        // analytics may be blocked
    }
};

// Yellow on teal fields.
export const BTN_ON_TEAL = 'bg-[#ffd84d] hover:bg-[#ffe27a] text-[#032b2e] px-6 py-4 rounded-xl inline-flex items-center justify-center whitespace-nowrap transition-colors font-bold text-base shadow-lg shadow-black/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';
export const BTN_TEAL = 'bg-[#01696f] hover:bg-[#015257] text-white px-6 py-4 rounded-xl inline-flex items-center justify-center whitespace-nowrap transition-colors font-bold text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#01696f]';
export const BTN_GHOST_ON_TEAL = 'text-white border border-white/35 hover:bg-white/10 px-6 py-4 rounded-xl inline-flex items-center justify-center whitespace-nowrap transition-colors font-bold text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';
