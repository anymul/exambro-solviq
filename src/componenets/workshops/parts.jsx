import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, PlayCircle } from 'lucide-react';
import { formatClasses } from '../../data/workshops';
import { SUBJECT_STYLE, STATUS_META, REGISTER_PATH, registrationFor, buttonPrimary, buttonSecondary } from './tokens';

// Small pieces shared by the calendar, the cards, the past-session section and the details dialog.

export const StatusBadge = ({ status }) => {
    const { label, Icon, badge } = STATUS_META[status];
    return (
        <span className={`sticker-sm inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-extrabold ${badge}`}>
            {status === 'today' ? (
                <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-pen opacity-75 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-pen" />
                </span>
            ) : (
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            {label}
        </span>
    );
};

export const SubjectTag = ({ subject }) => (
    <span className={`inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-2.5 py-0.5 text-xs font-extrabold text-ink ${SUBJECT_STYLE[subject].card}`}>
        <span className={`h-2 w-2 rounded-full border border-ink ${SUBJECT_STYLE[subject].dot}`} aria-hidden="true" />
        {subject}
    </span>
);

export const ClassTag = ({ classes }) => (
    <span className="inline-flex items-center rounded-full border-2 border-ink bg-white px-2.5 py-0.5 text-xs font-extrabold text-ink">
        {formatClasses(classes)}
    </span>
);

export const RegistrationBadge = ({ workshop, status }) => {
    const { label, tone } = registrationFor(workshop, status);
    return <span className={`inline-flex rounded-md border-2 border-ink px-2 py-0.5 text-xs font-extrabold ${tone}`}>{label}</span>;
};

// The call to action for a session: register while it is ahead, recording and resources once it is done.
export function WorkshopActions({ workshop, status, className = '' }) {
    const wrap = `flex flex-wrap items-center gap-3 ${className}`;

    if (status === 'completed') {
        if (!workshop.recordingUrl && !workshop.resource) return null;
        return (
            <div className={wrap}>
                {workshop.recordingUrl && (
                    <a
                        href={workshop.recordingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonPrimary}
                        aria-label={`View recording of ${workshop.title} (opens in a new tab)`}
                    >
                        <PlayCircle className="h-4 w-4" aria-hidden="true" /> View Recording
                    </a>
                )}
                {workshop.resource && (
                    <Link
                        to={workshop.resource.to}
                        className={workshop.recordingUrl ? buttonSecondary : buttonPrimary}
                        aria-label={`Explore resources for ${workshop.title}: ${workshop.resource.label}`}
                    >
                        <BookOpen className="h-4 w-4" aria-hidden="true" /> Explore Resources
                    </Link>
                )}
            </div>
        );
    }

    if (workshop.registration === 'closed') return null;

    return (
        <div className={wrap}>
            <Link to={REGISTER_PATH} state={{ workshopId: workshop.id }} className={buttonPrimary} aria-label={`Register now for ${workshop.title}`}>
                Register Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
        </div>
    );
}

// Bold sans section heading used across the workshops page.
export const SectionTitle = ({ id, title, children }) => (
    <div className="max-w-2xl">
        <h2 id={id} className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {title}
        </h2>
        {children && <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">{children}</p>}
    </div>
);
