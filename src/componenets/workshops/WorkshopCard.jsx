import { Check, Clock, UserRound } from 'lucide-react';
import { formatTime, weekdayShort } from '../../data/workshops';
import { SUBJECT_STYLE, buttonSecondary } from './tokens';
import { ClassTag, StatusBadge, SubjectTag, WorkshopActions } from './parts';

const MONTH_FORMAT = new Intl.DateTimeFormat('en-IN', { month: 'short', timeZone: 'UTC' });

// Calendar-leaf date block: weekday, day number, month.
export const DateBlock = ({ iso }) => {
    const date = new Date(`${iso}T00:00:00Z`);
    return (
        <time dateTime={iso} className="sticker-sm flex h-[72px] w-16 shrink-0 flex-col items-center justify-center bg-white text-ink">
            <span className="text-[11px] font-extrabold uppercase leading-none text-ink/60">{weekdayShort(iso)}</span>
            <span className="font-extrabold leading-none text-3xl lining-nums">{date.getUTCDate()}</span>
            <span className="text-[11px] font-extrabold uppercase leading-none">{MONTH_FORMAT.format(date)}</span>
        </time>
    );
};

// One session as a card. `variant="past"` also lists the key takeaways.
export default function WorkshopCard({ workshop, status, onSelect, variant = 'schedule' }) {
    const isPast = variant === 'past';
    const headingId = `workshop-${variant}-${workshop.id}`;

    return (
        <article
            aria-labelledby={headingId}
            className={`sticker flex h-full flex-col p-5 sm:p-6 ${SUBJECT_STYLE[workshop.subject].card}`}
        >
            <div className="flex items-start gap-4">
                <DateBlock iso={workshop.date} />
                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <StatusBadge status={status} />
                        <ClassTag classes={workshop.classes} />
                        <SubjectTag subject={workshop.subject} />
                    </div>
                    <h3 id={headingId} className="mt-3 text-balance text-lg font-extrabold leading-snug text-ink sm:text-xl">
                        {workshop.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-ink/70">{workshop.topic}</p>
                </div>
            </div>

            <ul className="mt-4 space-y-1.5 text-sm font-medium text-ink/80">
                <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0 text-ink/60" aria-hidden="true" />
                    {formatTime(workshop.start)} to {formatTime(workshop.end)} IST
                </li>
                <li className="flex items-center gap-2">
                    <UserRound className="h-4 w-4 shrink-0 text-ink/60" aria-hidden="true" />
                    {workshop.instructor.name}, {workshop.instructor.credential}
                </li>
            </ul>

            {isPast && (
                <div className="mt-5 rounded-xl border-2 border-ink bg-white p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-brand">Key takeaways</p>
                    <ul className="mt-2.5 space-y-2">
                        {workshop.takeaways.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm leading-snug text-ink/85">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={3.5} aria-hidden="true" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
                <button type="button" onClick={() => onSelect(workshop.id)} className={buttonSecondary} aria-label={`View details of ${workshop.title}`}>
                    View details
                </button>
                <WorkshopActions workshop={workshop} status={status} />
            </div>
        </article>
    );
}
