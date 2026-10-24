import { ChevronLeft, ChevronRight } from 'lucide-react';
import { buildMonthGrid, formatClasses, formatMonth, formatTime } from '../../data/workshops';
import { STATUS_META, SUBJECT_STYLE } from './tokens';

const WEEKDAYS = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday']
];

const navButton =
    'sticker-sm flex h-10 w-10 items-center justify-center bg-white text-ink transition-colors hover:bg-sun focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';

// Month heading with previous / next / jump-to-today. Shared by the calendar and the card list.
export function MonthNav({ year, month, onPrev, onNext, onToday, atToday }) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-2xl font-extrabold text-ink sm:text-3xl" aria-live="polite" aria-atomic="true">
                {formatMonth(year, month)}
            </h3>
            <div className="flex items-center gap-2">
                <button type="button" onClick={onToday} disabled={atToday} className="sticker-sm bg-white px-3.5 py-2 text-sm font-extrabold text-ink transition-colors hover:bg-sun focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-default disabled:opacity-50 disabled:hover:bg-white">
                    This month
                </button>
                <button type="button" onClick={onPrev} className={navButton} aria-label="Previous month">
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button type="button" onClick={onNext} className={navButton} aria-label="Next month">
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}

export const StatusLegend = () => (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-ink/75" aria-label="Calendar key">
        {Object.entries(STATUS_META).map(([key, { label, Icon, swatch }]) => (
            <li key={key} className="flex items-center gap-1.5">
                <span className={`flex h-5 w-5 items-center justify-center rounded-full border-2 border-ink ${swatch}`}>
                    <Icon className={`h-3 w-3 ${key === 'upcoming' ? 'text-white' : 'text-ink'}`} aria-hidden="true" />
                </span>
                {label}
            </li>
        ))}
    </ul>
);

function SessionChip({ workshop, status, onSelect }) {
    const { Icon } = STATUS_META[status];
    const label = `${workshop.title}, ${formatClasses(workshop.classes)} ${workshop.subject}, ${formatTime(workshop.start)}, ${STATUS_META[status].label}`;
    return (
        <button
            type="button"
            onClick={() => onSelect(workshop.id)}
            aria-label={label}
            className={`flex w-full items-start gap-1 rounded-md border-2 border-ink px-1.5 py-1 text-left text-[11px] font-bold leading-tight text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${SUBJECT_STYLE[workshop.subject].card} ${
                status === 'completed' ? 'opacity-70 hover:opacity-100' : ''
            } ${status === 'today' ? 'ring-2 ring-sun ring-offset-1' : ''}`}
        >
            <Icon className={`mt-px h-3 w-3 shrink-0 ${status === 'upcoming' ? 'text-brand' : 'text-ink'}`} aria-hidden="true" />
            <span className="min-w-0">
                <span className="block text-ink/70">{formatTime(workshop.start)}</span>
                <span className="line-clamp-2 break-words">{workshop.title}</span>
            </span>
        </button>
    );
}

// Sunday-first month grid. Each session is a button that opens its details.
export default function WorkshopCalendar({ year, month, byDate, today, statusOf, onSelect }) {
    const cells = buildMonthGrid(year, month);
    const weeks = Array.from({ length: cells.length / 7 }, (_, i) => cells.slice(i * 7, i * 7 + 7));

    return (
        <div className="sticker overflow-hidden bg-white">
            <table className="w-full table-fixed border-collapse">
                <caption className="sr-only">Workshops in {formatMonth(year, month)}</caption>
                <thead>
                    <tr className="bg-ink text-white">
                        {WEEKDAYS.map(([short, full]) => (
                            <th key={full} scope="col" className="py-2.5 text-xs font-extrabold uppercase tracking-wide">
                                <abbr title={full} className="no-underline">{short}</abbr>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week) => (
                        <tr key={week[0].iso}>
                            {week.map((cell) => {
                                const sessions = cell.inMonth ? byDate.get(cell.iso) || [] : [];
                                const isToday = cell.iso === today;
                                return (
                                    <td
                                        key={cell.iso}
                                        aria-current={isToday ? 'date' : undefined}
                                        className={`h-[8.5rem] border-l-2 border-t-2 border-ink/15 p-1.5 align-top first:border-l-0 ${
                                            cell.inMonth ? (isToday ? 'bg-butter' : 'bg-white') : 'bg-wash'
                                        }`}
                                    >
                                        {cell.inMonth && (
                                            <>
                                                <time
                                                    dateTime={cell.iso}
                                                    className={`mb-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1 text-xs font-extrabold ${
                                                        isToday ? 'border-2 border-ink bg-sun text-ink' : 'text-ink/70'
                                                    }`}
                                                >
                                                    {cell.day}
                                                    {isToday && <span className="sr-only"> (today)</span>}
                                                </time>
                                                <div className="space-y-1">
                                                    {sessions.map((w) => (
                                                        <SessionChip key={w.id} workshop={w} status={statusOf(w)} onSelect={onSelect} />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
