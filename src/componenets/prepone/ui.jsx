import { Check, PlayCircle } from 'lucide-react';
import homescreen from '../../assets/UI_Home_Feed.png';
import { primaryButton } from './tokens';

// Shared design system for the PrepOne marketing pages (/prepone and /prepone/*):
// sticker cards, tracked install links, hero and closing-CTA bands, the marked answer sheet and phone frames.

// Install buttons go straight to Google Play. The referrer carries the utm_* tags, so Play Console attributes website and ad installs.
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.solviq.prepone';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

function newClickId() {
    try {
        return crypto.randomUUID().replace(/-/g, '').slice(0, 24);
    } catch {
        return Math.random().toString(36).slice(2, 14) + Date.now().toString(36);
    }
}

const playUrl = (referrer) => `${PLAY_STORE_URL}&referrer=${encodeURIComponent(referrer.toString())}`;

// Beacon to nginx (/t) plus GA. The page unloads on the Play hand-off, so sendBeacon/keepalive is required.
function trackPlayClick(data) {
    const url = `/t?${new URLSearchParams({ e: 'site_play_click', v: 'site', ...data })}`;
    try {
        const sent = typeof navigator.sendBeacon === 'function' && navigator.sendBeacon(url);
        if (!sent) fetch(url, { method: 'POST', keepalive: true }).catch(() => {});
    } catch {
        // tracking must never block the install link
    }
    try {
        window.gtag?.('event', 'prepone_dl_site_play_click', data);
    } catch {
        // gtag may be blocked
    }
}

export function DownloadLink({ placement, className = primaryButton, children }) {
    const defaults = new URLSearchParams({
        utm_source: 'website',
        utm_medium: 'prepone_page',
        utm_content: placement
    });

    // A visitor who arrived from an ad keeps the ad's own campaign tags instead of being relabelled "website".
    const onClick = (e) => {
        const incoming = new URLSearchParams(window.location.search);
        const referrer = new URLSearchParams(defaults);
        if (incoming.has('fbclid') && !incoming.has('utm_source')) {
            referrer.set('utm_source', 'meta');
            referrer.set('utm_medium', 'paid');
        }
        UTM_KEYS.forEach((key) => {
            if (incoming.get(key)) referrer.set(key, incoming.get(key).slice(0, 100));
        });
        const clickId = newClickId();
        referrer.set('click_id', clickId);
        e.currentTarget.href = playUrl(referrer);
        trackPlayClick({ cid: clickId, pos: placement, page: window.location.pathname, camp: referrer.get('utm_campaign') || '' });
    };

    return (
        <a href={playUrl(defaults)} onClick={onClick} rel="noopener" className={className}>
            {children}
        </a>
    );
}

export const SectionHeading = ({ title, children }) => (
    <div className="max-w-2xl">
        <h2 className="font-display lining-nums text-balance text-3xl font-bold leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
            {title}
        </h2>
        {children && <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink/70">{children}</p>}
    </div>
);


export const Tick = () => (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11l4.5 4.5L17 5" />
    </svg>
);

export const PenMark = ({ delay, children }) => (
    <span
        className="pen-mark absolute right-3 top-0 inline-flex items-center gap-1 font-hand text-xl font-bold leading-9 text-pen"
        style={{ '--d': delay }}
    >
        {children}
    </span>
);

export const AnswerSheet = () => (
    <div
        role="img"
        aria-label="Example of a handwritten physics answer marked by PrepOne: 2.5 out of 3, with a note to write the unit"
        data-scrub="sheet"
        className="relative w-full max-w-[400px]"
    >
        <span aria-hidden="true" className="absolute -top-3 left-12 z-10 h-7 w-24 -rotate-3 border-2 border-ink bg-sun" />
        <div className="answer-sheet relative -rotate-2 overflow-hidden rounded-md border-2 border-ink pl-14 shadow-[7px_7px_0_0_#16193A]">
            <div className="h-9 text-xs font-bold leading-9 text-ink/50">Physics, Q4 (3 marks)</div>
            <div className="h-9 whitespace-nowrap text-[12.5px] leading-9 text-ink">Convex lens, f = 20 cm. Object at 30 cm.</div>
            <div className="h-9 whitespace-nowrap text-[12.5px] leading-9 text-ink">Find the image distance.</div>

            <div className="relative h-9 font-hand text-[19px] leading-9 text-[#2438B5] sm:text-[21px]">
                1/v − 1/u = 1/f
                <PenMark delay="1s"><Tick />+1</PenMark>
            </div>
            <div className="relative h-9 font-hand text-[19px] leading-9 text-[#2438B5] sm:text-[21px]">
                u = −30, f = +20
                <PenMark delay="1.5s"><Tick />+1</PenMark>
            </div>
            <div className="h-9 whitespace-nowrap font-hand text-[19px] leading-9 text-[#2438B5] sm:text-[21px]">
                1/v = 1/20 − 1/30 = 1/60
            </div>
            <div className="relative h-9 font-hand text-[19px] leading-9 text-[#2438B5] sm:text-[21px]">
                <span className="relative inline-block">
                    v = 60
                    <svg className="absolute -bottom-0.5 left-0 h-2 w-full" viewBox="0 0 60 8" preserveAspectRatio="none" aria-hidden="true">
                        <path
                            className="pen-draw"
                            style={{ '--d': '2s' }}
                            pathLength="300"
                            d="M1 5 Q 8 0 15 5 T 30 5 T 45 5 T 59 5"
                            fill="none"
                            stroke="#E5383B"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>
                <PenMark delay="2.4s">unit? −½</PenMark>
            </div>
            <div className="pen-mark h-9 font-hand text-lg leading-9 text-pen" style={{ '--d': '2.9s' }}>
                Write the unit (cm) every time.
            </div>

            <div className="flex h-[72px] items-center justify-end pr-6 sm:justify-between">
                <span className="hidden text-xs font-bold text-ink/50 sm:inline">Marked in 60 seconds</span>
                <span className="relative inline-block px-3 font-hand text-4xl font-bold text-pen">
                    <span className="pen-mark inline-block" style={{ '--d': '3.4s' }}>2½ / 3</span>
                    <svg className="absolute -inset-x-1 -inset-y-0.5 h-[calc(100%+4px)] w-[calc(100%+8px)]" viewBox="0 0 120 56" preserveAspectRatio="none" aria-hidden="true">
                        <ellipse className="pen-draw" style={{ '--d': '3.6s' }} pathLength="300" cx="60" cy="28" rx="57" ry="24" fill="none" stroke="#E5383B" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                </span>
            </div>
            <div className="h-9 text-[11px] leading-9 text-ink/45">Example answer. Your own photo is marked the same way.</div>
        </div>
    </div>
);


export const PhoneShot = ({ src, alt }) => (
    <div className="mx-auto w-full max-w-[240px] rotate-2 overflow-hidden rounded-[2rem] border-[5px] border-ink bg-white shadow-[7px_7px_0_0_#16193A] sm:max-w-[260px]">
        <img src={src} alt={alt} width="1080" height="2400" loading="lazy" decoding="async" className="block h-auto w-full" />
    </div>
);


// Yellow highlighter block for the key phrase of a headline on an indigo band.
export const Hl = ({ children }) => (
    <span className="bg-sun px-2 text-ink [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">{children}</span>
);

// Tilted label chips: items are [label, bgClass, rotateClass].
export const Chips = ({ items }) => (
    <ul className="mt-9 flex flex-wrap gap-3">
        {items.map(([label, bg, rot]) => (
            <li key={label} className={`sticker-sm px-3.5 py-1.5 text-xs font-extrabold text-ink ${bg} ${rot}`}>
                {label}
            </li>
        ))}
    </ul>
);

// Indigo hero band shared by the /prepone/* pages. `visual` is the right-hand artwork.
export const PageHero = ({ badge, headline, sub, cta, secondary, note, chips, visual }) => {
    const Icon = cta.icon || PlayCircle;
    return (
        <section className="graph-paper relative overflow-hidden bg-brand pb-20 pt-28 text-white lg:pb-24 lg:pt-36">
            <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
                <div>
                    <span className="sticker-sm mb-6 inline-block -rotate-2 bg-white px-3 py-1.5 text-xs font-extrabold text-ink">
                        {badge}
                    </span>
                    <h1 className="font-display lining-nums text-balance text-[2.6rem] font-bold leading-[1.08] tracking-tight sm:text-6xl">
                        {headline}
                    </h1>
                    <p className="mt-7 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">{sub}</p>

                    <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                        <DownloadLink placement={cta.placement} className={`${primaryButton} w-full sm:w-auto`}>
                            <Icon className="h-5 w-5" />
                            {cta.label}
                        </DownloadLink>
                        {secondary && (
                            <a href={secondary.href} className="text-sm font-bold text-white underline decoration-sun decoration-2 underline-offset-4 hover:text-sun">
                                {secondary.label}
                            </a>
                        )}
                    </div>
                    {note && <p className="mt-3 text-sm text-white/75">{note}</p>}
                    {chips && <Chips items={chips} />}
                </div>

                <div className="relative mx-auto w-full max-w-[440px] lg:max-w-[520px]">{visual}</div>
            </div>
        </section>
    );
};

// Closing indigo band with the install button and the app screen rising from the bottom.
export const CtaBand = ({ title, body, placement, label = 'Get PrepOne on Google Play', icon, points = [], scrub = false, phone = homescreen }) => {
    const Icon = icon || PlayCircle;
    return (
        <section className="graph-paper overflow-hidden bg-brand pt-16 text-white lg:pt-20">
            <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
                <div className="pb-4 lg:pb-20">
                    <h2 className="font-display lining-nums text-balance text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h2>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">{body}</p>
                    <div className="mt-8">
                        <DownloadLink placement={placement} className={`${primaryButton} w-full sm:w-auto`}>
                            <Icon className="h-5 w-5" />
                            {label}
                        </DownloadLink>
                    </div>
                    {points.length > 0 && (
                        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/90">
                            {points.map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-sun" strokeWidth={3.5} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div
                    {...(scrub ? { 'data-scrub': 'rise' } : {})}
                    className="relative mx-auto h-[300px] w-[230px] overflow-hidden rounded-t-[2rem] border-[5px] border-b-0 border-ink bg-white sm:h-[380px] sm:w-[260px] lg:rotate-3"
                >
                    <img src={phone} alt="PrepOne app home screen" width="1080" height="2400" loading="lazy" decoding="async" className="block h-auto w-full" />
                </div>
            </div>
        </section>
    );
};
