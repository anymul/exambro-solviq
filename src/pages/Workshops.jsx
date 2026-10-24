import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, BookOpen, CalendarSearch, LayoutGrid, CalendarDays, PenLine, Smartphone, Trophy } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import { DownloadLink, Hl, Chips, Tick } from '../componenets/prepone/ui';
import { primaryButton } from '../componenets/prepone/tokens';
import WorkshopCalendar, { MonthNav, StatusLegend } from '../componenets/workshops/WorkshopCalendar';
import WorkshopCard from '../componenets/workshops/WorkshopCard';
import WorkshopDialog from '../componenets/workshops/WorkshopDialog';
import WorkshopFilters from '../componenets/workshops/WorkshopFilters';
import { DEFAULT_FILTERS, matchesFilters } from '../componenets/workshops/filters';
import PastWorkshops from '../componenets/workshops/PastWorkshops';
import { SectionTitle } from '../componenets/workshops/parts';
import { buttonSecondary } from '../componenets/workshops/tokens';
import { SCHEDULE_AS_OF, WORKSHOPS, formatMonth, getStatus, monthKey, sortByDateTime, todayISO } from '../data/workshops';

const monthOf = (iso) => ({ year: Number(iso.slice(0, 4)), month: Number(iso.slice(5, 7)) - 1 });
const shiftMonth = ({ year, month }, delta) => {
    const next = new Date(Date.UTC(year, month + delta, 1));
    return { year: next.getUTCFullYear(), month: next.getUTCMonth() };
};

const goToSchedule = (e) => {
    const target = document.getElementById('schedule');
    if (!target) return;
    e.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    target.focus({ preventScroll: true });
};

// Hero artwork: one wrong step, crossed out and fixed, which is the whole idea of the sessions.
const MistakeCard = () => (
    <div className="relative pb-10 pr-4 sm:pr-8">
        <div
            role="img"
            aria-label="Example from a Physics session: the wrong lens formula 1/v + 1/u = 1/f is crossed out and corrected to 1/v − 1/u = 1/f"
            className="sticker -rotate-2 bg-white p-5 text-ink sm:p-6"
        >
            <p className="border-b-2 border-dashed border-ink/30 pb-3 text-xs font-extrabold">Physics, Ray Optics. Live session</p>
            <p className="mt-3 text-sm font-medium text-ink/80">Convex lens, f = 20 cm, object at 30 cm. Find the image distance.</p>

            <div className="mt-4 rounded-lg border-2 border-ink bg-blush p-3.5">
                <p className="text-[11px] font-extrabold uppercase tracking-wide text-ink">The classic mistake</p>
                <p className="mt-1 font-hand text-[22px] leading-9 text-[#2438B5]">
                    <span className="relative inline-block">
                        1/v + 1/u = 1/f
                        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">
                            <path className="pen-draw" style={{ '--d': '0.6s' }} pathLength="300" d="M0 10 L100 10" fill="none" stroke="#E5383B" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                        </svg>
                    </span>
                </p>
            </div>

            <div className="mt-3 rounded-lg border-2 border-ink bg-mintwash p-3.5">
                <p className="text-[11px] font-extrabold uppercase tracking-wide text-ink">Fixed in class</p>
                <p className="mt-1 flex items-center gap-2 font-hand text-[22px] leading-9 text-[#2438B5]">
                    1/v − 1/u = 1/f
                    <span className="pen-mark text-mint" style={{ '--d': '1.2s' }}><Tick /></span>
                </p>
            </div>

            <p className="pen-mark mt-4 font-hand text-xl leading-7 text-pen" style={{ '--d': '1.6s' }}>
                Now you know. Not in the exam.
            </p>
        </div>

        <div className="sticker absolute -right-1 -top-8 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full bg-coral text-center text-ink sm:-right-4">
            <span className="text-lg font-extrabold leading-none">Live</span>
            <span className="text-[11px] font-extrabold leading-tight">+ Q&amp;A</span>
        </div>
        <span className="sticker-sm absolute -bottom-1 right-2 rotate-3 bg-sun px-3 py-1.5 text-sm font-extrabold text-ink">
            Taught by IITians
        </span>
    </div>
);

const Hero = () => (
    <section className="graph-paper relative overflow-hidden bg-brand pb-20 pt-28 text-white lg:pb-24 lg:pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8">
            <div>
                <span className="sticker-sm mb-6 inline-block -rotate-2 bg-white px-3 py-1.5 text-xs font-extrabold text-ink">
                    PrepOne live workshops
                </span>
                <h1 className="text-balance text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                    <span className="block">Board Pe Charcha:</span>
                    Learn It. Practise It. <Hl>Crack It.</Hl>
                </h1>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                    Learning and practice sessions on specific topics, taught by IITians. From mastering concepts to solving questions and discovering exam hacks, PrepOne brings the complete preparation package.
                </p>

                <blockquote className="sticker mt-8 max-w-xl -rotate-1 bg-sun px-5 py-4 text-ink">
                    <p className="text-xl font-extrabold leading-snug sm:text-2xl">
                        &ldquo;Learn how to get it wrong, so you don&apos;t in the exam.&rdquo;
                    </p>
                </blockquote>

                <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <a href="#schedule" onClick={goToSchedule} className={`${primaryButton} w-full sm:w-auto`}>
                        Explore Upcoming Sessions
                        <ArrowDown className="h-5 w-5" aria-hidden="true" />
                    </a>
                </div>
                <Chips
                    items={[
                        ['Concepts', 'bg-white', '-rotate-1'],
                        ['Question practice', 'bg-aqua', 'rotate-1'],
                        ['Exam hacks', 'bg-coral', '-rotate-1']
                    ]}
                />
            </div>

            <div className="relative mx-auto w-full max-w-[440px] lg:max-w-[480px]">
                <MistakeCard />
            </div>
        </div>
    </section>
);

const STEPS = [
    { icon: BookOpen, bg: 'bg-butter', title: 'Learn it', body: 'One topic, taught from the ground up by an IITian, with the reason behind every formula.' },
    { icon: PenLine, bg: 'bg-mintwash', title: 'Practise it', body: 'Solve board-pattern questions live and see exactly where marks slip away.' },
    { icon: Trophy, bg: 'bg-blush', title: 'Crack it', body: 'Leave with exam hacks and a checklist of the mistakes to avoid in the paper.' }
];

const HowItWorks = () => (
    <section aria-labelledby="how-heading" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="how-heading" title={<>One topic. One session. <span className="marker">Zero guesswork.</span></>} />
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
                {STEPS.map(({ icon: Icon, bg, title, body }, i) => (
                    <li key={title} className={`sticker sticker-hover p-6 ${bg}`}>
                        <div className="flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-ink bg-white text-ink">
                                <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <span className="text-sm font-extrabold text-ink/60">Step {i + 1}</span>
                        </div>
                        <h3 className="mt-4 text-xl font-extrabold text-ink">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink/75 sm:text-base">{body}</p>
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

const ViewToggle = ({ view, onChange }) => (
    <div className="hidden items-center gap-2 lg:flex" role="group" aria-label="Schedule view">
        {[
            ['calendar', 'Calendar', CalendarDays],
            ['list', 'Cards', LayoutGrid]
        ].map(([value, label, Icon]) => (
            <button
                key={value}
                type="button"
                aria-pressed={view === value}
                onClick={() => onChange(value)}
                className={`inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-3.5 py-1.5 text-sm font-extrabold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                    view === value ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-sun/60'
                }`}
            >
                <Icon className="h-4 w-4" aria-hidden="true" /> {label}
            </button>
        ))}
    </div>
);

const EmptyMonth = ({ monthLabel, jumpTo, onJump }) => (
    <div className="sticker flex flex-col items-center gap-3 bg-white p-8 text-center">
        <CalendarSearch className="h-8 w-8 text-brand" aria-hidden="true" />
        <p className="text-lg font-extrabold text-ink">No sessions in {monthLabel} match these filters.</p>
        {jumpTo && (
            <button type="button" onClick={onJump} className={buttonSecondary}>
                Jump to {formatMonth(jumpTo.year, jumpTo.month)}
            </button>
        )}
    </div>
);

export default function WorkshopsPage() {
    // The server render and first client render both use SCHEDULE_AS_OF, then the visitor's real date takes over.
    const [today, setToday] = useState(SCHEDULE_AS_OF);
    const [cursor, setCursor] = useState(() => monthOf(SCHEDULE_AS_OF));
    const [filters, setFilters] = useState(DEFAULT_FILTERS);
    const [view, setView] = useState('calendar');
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const actual = todayISO();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setToday(actual);
        setCursor(monthOf(actual));
    }, []);

    const sorted = useMemo(() => sortByDateTime(WORKSHOPS), []);
    const statusOf = (workshop) => getStatus(workshop, today);

    const filtered = sorted.filter((w) => matchesFilters(w, statusOf(w), filters));
    const key = monthKey(cursor.year, cursor.month);
    const monthItems = filtered.filter((w) => w.date.startsWith(key));
    const byDate = new Map();
    monthItems.forEach((w) => byDate.set(w.date, [...(byDate.get(w.date) || []), w]));

    const past = sorted.filter((w) => statusOf(w) === 'completed').reverse();
    const selected = sorted.find((w) => w.id === selectedId) || null;

    // When the month is empty, point at the closest month that has a matching session.
    const monthLabel = formatMonth(cursor.year, cursor.month);
    const nearest = filtered.find((w) => w.date.slice(0, 7) > key) || [...filtered].reverse().find((w) => w.date.slice(0, 7) < key);
    const jumpTo = nearest ? monthOf(nearest.date) : null;

    const atToday = key === today.slice(0, 7);
    const cards = (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {monthItems.map((w) => (
                <WorkshopCard key={w.id} workshop={w} status={statusOf(w)} onSelect={setSelectedId} />
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-white font-body text-ink selection:bg-hilite selection:text-ink">
            <SEO
                title="Board Pe Charcha | Live Board Exam Workshops by IITians | PrepOne"
                description="Board Pe Charcha is PrepOne's series of live learning and practice workshops for CBSE and Bihar Board students in Classes 10 to 12, taught by IITians. Concepts, question practice and exam hacks on one topic at a time."
                keywords="board exam workshops, CBSE class 10 workshop, CBSE class 12 workshop, live classes by IITians, board exam preparation, PrepOne workshops, Board Pe Charcha"
                canonicalUrl="https://solviq.in/workshops"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'PrepOne', url: '/prepone' },
                        { name: 'Board Pe Charcha', url: '/workshops' }
                    ])
                ]}
            />
            <Navbar />
            <Hero />
            <HowItWorks />

            <section id="schedule" tabIndex={-1} aria-labelledby="schedule-heading" className="scroll-mt-6 bg-wash py-20 outline-none lg:py-28">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <SectionTitle id="schedule-heading" title={<>Pick your <span className="marker">next session</span></>}>
                        Filter by class and subject, then open any session for the topic, instructor, timing and registration.
                    </SectionTitle>

                    <div className="mt-10 space-y-8">
                        <WorkshopFilters filters={filters} onChange={setFilters} resultCount={filtered.length} />

                        <div className="space-y-4">
                            <MonthNav
                                year={cursor.year}
                                month={cursor.month}
                                atToday={atToday}
                                onPrev={() => setCursor((c) => shiftMonth(c, -1))}
                                onNext={() => setCursor((c) => shiftMonth(c, 1))}
                                onToday={() => setCursor(monthOf(today))}
                            />
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <StatusLegend />
                                <ViewToggle view={view} onChange={setView} />
                            </div>
                        </div>

                        {monthItems.length === 0 ? (
                            <EmptyMonth monthLabel={monthLabel} jumpTo={jumpTo} onJump={() => jumpTo && setCursor(jumpTo)} />
                        ) : view === 'calendar' ? (
                            <>
                                <div className="hidden lg:block">
                                    <WorkshopCalendar year={cursor.year} month={cursor.month} byDate={byDate} today={today} statusOf={statusOf} onSelect={setSelectedId} />
                                </div>
                                <div className="lg:hidden">{cards}</div>
                            </>
                        ) : (
                            cards
                        )}
                    </div>
                </div>
            </section>

            <PastWorkshops workshops={past} onSelect={setSelectedId} />

            <section aria-labelledby="cta-heading" className="graph-paper overflow-hidden bg-brand py-20 text-white lg:py-28">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 id="cta-heading" className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                        Your Next Board <Hl>Breakthrough</Hl> Starts Here.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                        Pick a topic, show up live and walk out knowing exactly what to do differently in the exam.
                    </p>
                    <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                        <a href="#schedule" onClick={goToSchedule} className={primaryButton}>
                            Explore Upcoming Sessions
                            <ArrowDown className="h-5 w-5" aria-hidden="true" />
                        </a>
                        <DownloadLink
                            placement="workshops_cta"
                            className="sticker inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white px-7 py-3.5 text-base font-extrabold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sun"
                        >
                            <Smartphone className="h-5 w-5" aria-hidden="true" />
                            Get PrepOne on Google Play
                        </DownloadLink>
                    </div>
                </div>
            </section>

            <Footer />
            <WorkshopDialog workshop={selected} status={selected ? statusOf(selected) : 'upcoming'} onClose={() => setSelectedId(null)} />
        </div>
    );
}
