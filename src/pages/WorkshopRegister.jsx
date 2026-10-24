import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, CalendarPlus, CheckCircle2, Clock, MonitorPlay, Smartphone, UserRound } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { DownloadLink } from '../componenets/prepone/ui';
import RegistrationForm from '../componenets/workshops/RegistrationForm';
import { SubjectTag, ClassTag } from '../componenets/workshops/parts';
import { buttonPrimary, buttonSecondary } from '../componenets/workshops/tokens';
import { SCHEDULE_AS_OF, WORKSHOPS, formatDate, formatTimeRange, getStatus, googleCalendarUrl, sortByDateTime, todayISO } from '../data/workshops';

const SummaryRow = ({ icon: Icon, children }) => (
    <li className="flex items-start gap-3 text-sm font-bold leading-snug text-ink">
        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-ink/60" aria-hidden="true" />
        <span>{children}</span>
    </li>
);

// Card showing the session the form is currently set to. It comes first in the page so phones see the session before the form.
const SessionSummary = ({ workshop, className = '' }) => (
    <aside aria-label="Selected session" className={`sticker bg-skywash p-5 sm:p-6 lg:sticky lg:top-6 ${className}`}>
        {workshop ? (
            <>
                <div className="flex flex-wrap gap-2">
                    <ClassTag classes={workshop.classes} />
                    <SubjectTag subject={workshop.subject} />
                </div>
                <h2 className="mt-4 text-balance text-xl font-extrabold leading-snug text-ink">{workshop.title}</h2>
                <p className="mt-1 text-sm font-medium text-ink/70">{workshop.topic}</p>
                <ul className="mt-5 space-y-3">
                    <SummaryRow icon={CalendarDays}>{formatDate(workshop.date)}</SummaryRow>
                    <SummaryRow icon={Clock}>{formatTimeRange(workshop)}</SummaryRow>
                    <SummaryRow icon={UserRound}>
                        {workshop.instructor.name}, {workshop.instructor.credential}
                    </SummaryRow>
                    <SummaryRow icon={MonitorPlay}>{workshop.format}</SummaryRow>
                </ul>
            </>
        ) : (
            <p className="text-sm font-bold text-ink/75">Pick a session in the form to see its date, time and instructor here.</p>
        )}
    </aside>
);

function Confirmation({ workshop, result }) {
    const headingRef = useRef(null);
    useEffect(() => {
        headingRef.current?.focus();
    }, []);

    return (
        <div className="sticker bg-mintwash p-6 sm:p-8" role="status">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-ink bg-white text-ink">
                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 ref={headingRef} tabIndex={-1} className="mt-5 text-balance text-2xl font-extrabold text-ink outline-none sm:text-3xl">
                {result.alreadyRegistered ? 'You are already registered' : `You are in, ${result.name.split(' ')[0]}!`}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/85">
                {result.alreadyRegistered
                    ? 'This mobile number already has a seat for this session, so nothing more is needed.'
                    : 'Your seat is reserved. We will use the number you gave to send the joining details and a reminder before the session.'}
            </p>
            {workshop && (
                <div className="mt-5 rounded-xl border-2 border-ink bg-white p-4">
                    <p className="text-base font-extrabold text-ink">{workshop.title}</p>
                    <p className="mt-1 text-sm font-medium text-ink/80">
                        {formatDate(workshop.date)}, {formatTimeRange(workshop)}
                    </p>
                </div>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-3">
                {workshop && (
                    <a href={googleCalendarUrl(workshop)} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
                        <CalendarPlus className="h-4 w-4" aria-hidden="true" /> Add to Google Calendar
                        <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                )}
                <Link to="/workshops" className={buttonSecondary}>
                    See more sessions
                </Link>
                <DownloadLink placement="workshops_registered" className={buttonSecondary}>
                    <Smartphone className="h-4 w-4" aria-hidden="true" /> Get the PrepOne app
                </DownloadLink>
            </div>
        </div>
    );
}

export default function WorkshopRegisterPage() {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    // The Register Now buttons pass the session in router state; a shared link can use ?workshop=<id> instead.
    const requestedId = location.state?.workshopId || searchParams.get('workshop') || '';
    const source = (searchParams.get('utm_source') || '').slice(0, 100) || 'website';

    const [today, setToday] = useState(SCHEDULE_AS_OF);
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setToday(todayISO());
    }, []);

    const openWorkshops = useMemo(
        () => sortByDateTime(WORKSHOPS).filter((w) => getStatus(w, today) !== 'completed' && w.registration !== 'closed'),
        [today]
    );

    const [selectedId, setSelectedId] = useState(requestedId);
    const [result, setResult] = useState(null);
    const selected = openWorkshops.find((w) => w.id === selectedId) || null;
    const registered = result ? WORKSHOPS.find((w) => w.id === result.workshopId) : null;
    const requestedIsClosed = Boolean(requestedId) && !WORKSHOPS.some((w) => w.id === requestedId && openWorkshops.includes(w));

    return (
        <div className="min-h-screen bg-white font-body text-ink selection:bg-hilite selection:text-ink">
            <SEO
                title="Register for Board Pe Charcha | PrepOne"
                description="Reserve your seat in a Board Pe Charcha live workshop by PrepOne."
                canonicalUrl="https://solviq.in/workshops/register"
                robots="noindex, follow"
            />
            <Navbar />

            <section className="graph-paper bg-brand pb-14 pt-28 text-white lg:pb-16 lg:pt-36">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <Link to="/workshops" className="inline-flex items-center gap-1.5 text-sm font-bold text-white underline decoration-sun decoration-2 underline-offset-4 hover:text-sun">
                        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All sessions
                    </Link>
                    <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                        Reserve your seat at <span className="bg-sun px-2 text-ink [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">Board Pe Charcha</span>
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                        Registration is free and takes a minute. Tell us who you are and which session you are joining.
                    </p>
                </div>
            </section>

            <section className="bg-wash py-14 lg:py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    {openWorkshops.length === 0 ? (
                        <div className="sticker mx-auto max-w-xl bg-white p-8 text-center">
                            <p className="text-lg font-extrabold text-ink">No sessions are open for registration right now.</p>
                            <p className="mt-2 text-sm font-medium text-ink/70">New sessions are added regularly. Check the schedule again soon.</p>
                            <Link to="/workshops" className={`${buttonPrimary} mt-6`}>
                                Back to the schedule
                            </Link>
                        </div>
                    ) : (
                        <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
                            <SessionSummary
                                workshop={result ? registered : selected}
                                className={`lg:col-start-2 lg:row-start-1 ${result ? 'hidden lg:block' : ''}`}
                            />
                            <div className="lg:col-start-1 lg:row-start-1">
                                {requestedIsClosed && !result && (
                                    <p role="status" className="mb-5 rounded-xl border-2 border-ink bg-butter px-4 py-3 text-sm font-bold text-ink">
                                        That session is not open for registration. Pick another session below.
                                    </p>
                                )}
                                {result ? (
                                    <Confirmation workshop={registered} result={result} />
                                ) : (
                                    <RegistrationForm
                                        openWorkshops={openWorkshops}
                                        initialWorkshopId={requestedId}
                                        source={source}
                                        onSelectWorkshop={setSelectedId}
                                        onRegistered={setResult}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
