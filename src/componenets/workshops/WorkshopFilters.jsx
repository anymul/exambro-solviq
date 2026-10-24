import { RotateCcw } from 'lucide-react';
import { CLASS_OPTIONS, SUBJECT_OPTIONS } from '../../data/workshops';
import { DEFAULT_FILTERS } from './filters';

const CLASS_CHOICES = [{ value: 'all', label: 'All classes' }, ...CLASS_OPTIONS.map((c) => ({ value: c, label: `Class ${c}` }))];
const SUBJECT_CHOICES = [{ value: 'all', label: 'All subjects' }, ...SUBJECT_OPTIONS.map((s) => ({ value: s, label: s }))];
const STATUS_CHOICES = [
    { value: 'all', label: 'All sessions' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'completed', label: 'Completed' }
];

function FilterGroup({ legend, choices, value, onChange, className = '' }) {
    return (
        <fieldset className={`min-w-0 ${className}`}>
            <legend className="mb-2 text-xs font-extrabold uppercase tracking-wide text-ink/60">{legend}</legend>
            <div className="flex flex-wrap gap-2">
                {choices.map((choice) => {
                    const active = choice.value === value;
                    return (
                        <button
                            key={choice.value}
                            type="button"
                            aria-pressed={active}
                            onClick={() => onChange(choice.value)}
                            className={`rounded-full border-2 border-ink px-3.5 py-1.5 text-sm font-extrabold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                                active ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-sun/60'
                            }`}
                        >
                            {choice.label}
                        </button>
                    );
                })}
            </div>
        </fieldset>
    );
}

export default function WorkshopFilters({ filters, onChange, resultCount }) {
    const set = (key) => (value) => onChange({ ...filters, [key]: value });
    const isDefault = Object.keys(DEFAULT_FILTERS).every((key) => filters[key] === DEFAULT_FILTERS[key]);

    return (
        <form className="sticker bg-white p-5 sm:p-6" aria-label="Filter workshops" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 md:grid-cols-2 md:gap-x-8">
                <FilterGroup legend="Class" choices={CLASS_CHOICES} value={filters.classNum} onChange={set('classNum')} />
                <FilterGroup legend="Status" choices={STATUS_CHOICES} value={filters.status} onChange={set('status')} />
                <FilterGroup legend="Subject" choices={SUBJECT_CHOICES} value={filters.subject} onChange={set('subject')} className="md:col-span-2" />
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-rule pt-4">
                <p className="text-sm font-bold text-ink/75" role="status" aria-live="polite">
                    {resultCount} {resultCount === 1 ? 'session matches' : 'sessions match'} your filters
                </p>
                {!isDefault && (
                    <button
                        type="button"
                        onClick={() => onChange(DEFAULT_FILTERS)}
                        className="inline-flex items-center gap-1.5 text-sm font-extrabold text-brand underline decoration-2 underline-offset-4 hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Reset filters
                    </button>
                )}
            </div>
        </form>
    );
}
