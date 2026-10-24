import { useEffect, useRef } from 'react';
import { CalendarDays, Check, Clock, GraduationCap, MonitorPlay, UserRound, X } from 'lucide-react';
import { formatClasses, formatDate, formatTimeRange } from '../../data/workshops';
import { SUBJECT_STYLE, buttonSecondary } from './tokens';
import { ClassTag, RegistrationBadge, StatusBadge, SubjectTag, WorkshopActions } from './parts';

const Fact = ({ icon: Icon, label, children }) => (
    <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-white text-ink">
            <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
            <dt className="text-xs font-extrabold uppercase tracking-wide text-ink/60">{label}</dt>
            <dd className="mt-0.5 text-sm font-bold leading-snug text-ink">{children}</dd>
        </div>
    </div>
);

// Modal details for one session. The native <dialog> gives focus trapping, Escape to close and focus return for free.
export default function WorkshopDialog({ workshop, status, onClose }) {
    const ref = useRef(null);

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return undefined;
        if (workshop && !dialog.open) dialog.showModal();
        if (!workshop && dialog.open) dialog.close();
        return undefined;
    }, [workshop]);

    // Keep the page behind the dialog from scrolling.
    useEffect(() => {
        if (!workshop) return undefined;
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previous;
        };
    }, [workshop]);

    return (
        <dialog
            ref={ref}
            aria-labelledby="workshop-dialog-title"
            onClose={onClose}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
            className="m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-2xl overflow-y-auto rounded-2xl border-2 border-ink bg-white p-0 text-ink shadow-[6px_6px_0_0_#16193A] backdrop:bg-ink/70"
        >
            {workshop && (
                <div>
                    <div className={`border-b-2 border-ink p-5 sm:p-7 ${SUBJECT_STYLE[workshop.subject].card}`}>
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <StatusBadge status={status} />
                                <ClassTag classes={workshop.classes} />
                                <SubjectTag subject={workshop.subject} />
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close workshop details"
                                className="sticker-sm flex h-10 w-10 shrink-0 items-center justify-center bg-white text-ink transition-colors hover:bg-sun focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                            >
                                <X className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                        <h2 id="workshop-dialog-title" className="mt-4 text-balance text-2xl font-extrabold leading-tight sm:text-3xl">
                            {workshop.title}
                        </h2>
                        <p className="mt-1.5 text-sm font-semibold text-ink/70">Topic: {workshop.topic}</p>
                    </div>

                    <div className="p-5 sm:p-7">
                        <dl className="grid gap-4 sm:grid-cols-2">
                            <Fact icon={CalendarDays} label="Date">{formatDate(workshop.date)}</Fact>
                            <Fact icon={Clock} label="Time">{formatTimeRange(workshop)}</Fact>
                            <Fact icon={UserRound} label="Instructor">
                                {workshop.instructor.name}
                                <span className="block font-medium text-ink/70">{workshop.instructor.credential}</span>
                            </Fact>
                            <Fact icon={MonitorPlay} label="Format">{workshop.format}</Fact>
                            <Fact icon={GraduationCap} label="Class">{formatClasses(workshop.classes)}</Fact>
                            <Fact icon={Check} label="Registration">
                                <RegistrationBadge workshop={workshop} status={status} />
                            </Fact>
                        </dl>

                        <p className="mt-6 text-base leading-relaxed text-ink/85">{workshop.description}</p>

                        <div className="mt-5 rounded-xl border-2 border-ink bg-wash p-4">
                            <p className="text-xs font-extrabold uppercase tracking-wide text-brand">
                                {status === 'completed' ? 'Key takeaways' : 'What you will take away'}
                            </p>
                            <ul className="mt-2.5 space-y-2">
                                {workshop.takeaways.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm leading-snug text-ink/85">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={3.5} aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <WorkshopActions workshop={workshop} status={status} />
                            {status === 'completed' && !workshop.recordingUrl && (
                                <span className="text-sm font-medium text-ink/70">Recording has not been published yet.</span>
                            )}
                            <button type="button" onClick={onClose} className={buttonSecondary}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </dialog>
    );
}
