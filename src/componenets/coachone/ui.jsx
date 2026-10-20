import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { trackCta, BTN_ON_TEAL, BTN_GHOST_ON_TEAL } from './tokens';

// Shared design system for the CoachOne pages (/coachone and the institute-suite pages):
// answer-sheet teal bands, real product screenshots, tracked demo links.

// Real screenshot of the CoachOne dashboard, shown as captured.
export const AppScreenshot = ({ src, alt, width, height, priority }) => (
    <figure className="rounded-xl overflow-hidden border border-[#053f43]/15 bg-white shadow-xl shadow-[#032b2e]/25">
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
            decoding="async"
            className="block w-full h-auto"
        />
    </figure>
);

// Real screenshot from the PrepOne student app, in a phone frame.
export const PhoneScreenshot = ({ src, alt, className = '' }) => (
    <figure className={`mx-auto w-full max-w-[250px] overflow-hidden rounded-[2rem] border-[6px] border-[#032b2e] bg-white shadow-xl shadow-[#032b2e]/25 ${className}`}>
        <img src={src} alt={alt} width="540" height="1200" loading="lazy" decoding="async" className="block h-auto w-full" />
    </figure>
);

export const DemoLink = ({ location, className, children, ...rest }) => (
    <Link to="/book-demo" onClick={() => trackCta(location)} className={className} {...rest}>
        {children}
    </Link>
);

export const SectionHead = ({ title, children, light, center }) => (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
        <h2 className={`font-display text-3xl md:text-5xl leading-[1.08] ${light ? 'text-white' : 'text-[#032b2e]'}`}>
            {title}
        </h2>
        {children && (
            <p className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-teal-50/85' : 'text-gray-600'}`}>
                {children}
            </p>
        )}
    </div>
);

// Teal ruled-sheet hero. `visual` is the right-hand real screenshot.
export const PageHero = ({ eyebrow, title, sub, cta = 'Book a 20-minute demo', location, secondary, note, visual }) => (
    <section className="co-sheet text-white overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            <div className="lg:col-span-5">
                <p className="co-note text-xl text-[#ffd84d] mb-3 inline-block co-fade">{eyebrow}</p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] co-fade" style={{ '--d': '100ms' }}>
                    {title}
                </h1>
                <p className="font-body text-lg text-teal-50/90 mt-6 max-w-md leading-relaxed co-fade" style={{ '--d': '250ms' }}>
                    {sub}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 co-fade" style={{ '--d': '400ms' }}>
                    <DemoLink location={location} className={BTN_ON_TEAL}>
                        <Calendar className="w-5 h-5 mr-3" />
                        {cta}
                    </DemoLink>
                    {secondary && (
                        <a href={secondary.href} className={BTN_GHOST_ON_TEAL}>
                            {secondary.label}
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    )}
                </div>
                {note && <p className="mt-4 text-sm text-teal-100/70 co-fade" style={{ '--d': '550ms' }}>{note}</p>}
            </div>
            <div className="lg:col-span-7 relative co-rise">{visual}</div>
        </div>
    </section>
);

// Heading + copy + ticked points on one side, a real screen on the other.
export const FeatureSplit = ({ id, bg = 'bg-white', title, children, points = [], link, visual, flip = false }) => (
    <section id={id} className={`${bg} py-20 lg:py-28 scroll-mt-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
                <h2 className="font-display text-3xl md:text-4xl leading-[1.1] text-[#032b2e]">{title}</h2>
                {children && <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">{children}</p>}
                {points.length > 0 && (
                    <ul className="mt-6 space-y-3 text-sm text-gray-700">
                        {points.map(([head, body]) => (
                            <li key={head} className="flex items-start">
                                <CheckCircle2 className="w-4 h-4 text-[#01696f] mr-2.5 mt-0.5 flex-shrink-0" />
                                <span><strong>{head}:</strong> {body}</span>
                            </li>
                        ))}
                    </ul>
                )}
                {link && (
                    <Link to={link.to} className="mt-6 inline-flex items-center text-sm font-bold text-[#01696f] hover:text-[#015257]">
                        {link.text} <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                )}
            </div>
            <div className={`lg:col-span-7 min-w-0 ${flip ? 'lg:order-1' : ''}`}>{visual}</div>
        </div>
    </section>
);

// Numbered steps in a row; each item is [title, text].
export const StepRow = ({ id, bg = 'bg-[#eef6f5]', title, intro, steps }) => (
    <section id={id} className={`${bg} py-20 lg:py-28 scroll-mt-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHead title={title}>{intro}</SectionHead>
            <ol className={`mt-14 grid gap-y-10 md:gap-x-8 md:grid-cols-2 ${steps.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} relative`}>
                {steps.map(([head, text], i) => (
                    <li key={head} className="relative">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-9 h-9 rounded-full bg-[#01696f] text-white font-bold flex items-center justify-center">{i + 1}</span>
                            <span className="hidden md:block flex-1 h-0.5 bg-[#01696f]/25" aria-hidden="true"></span>
                        </div>
                        <h3 className="font-bold text-lg text-[#032b2e] mb-2">{head}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

// Icon grid; items are { icon, title, text }.
export const IconGrid = ({ bg = 'bg-white', title, intro, items, cols = 'lg:grid-cols-3' }) => (
    <section className={`${bg} py-20 lg:py-28`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHead title={title}>{intro}</SectionHead>
            <ul className={`mt-12 grid sm:grid-cols-2 ${cols} gap-x-8 gap-y-10`}>
                {items.map(({ icon: Icon, title: t, text }) => (
                    <li key={t}>
                        <span className="w-10 h-10 rounded-lg bg-[#eef6f5] text-[#01696f] flex items-center justify-center mb-3">
                            <Icon className="w-5 h-5" />
                        </span>
                        <h3 className="font-bold text-[#032b2e]">{t}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mt-1">{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

// Closing teal band with the demo button.
export const CtaBand = ({ title, body, location }) => (
    <section className="co-sheet text-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
                <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">{title}</h2>
                <p className="mt-6 text-lg text-teal-50/90 leading-relaxed max-w-2xl">{body}</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
                <DemoLink location={location} className={`${BTN_ON_TEAL} text-lg`}>
                    <Calendar className="w-5 h-5 mr-3" />
                    Book a 20-minute demo
                </DemoLink>
                <p className="mt-4 text-sm text-teal-100/75">We reply within 24 hours.</p>
            </div>
        </div>
    </section>
);
