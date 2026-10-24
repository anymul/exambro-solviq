import { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { CLASS_OPTIONS, formatClasses, formatDateShort } from '../../data/workshops';
import { RegistrationError, registerForWorkshop } from '../../services/workshops';

const BOARDS = [
    ['CBSE', 'CBSE'],
    ['BSEB', 'Bihar Board (BSEB)'],
    ['OTHER', 'Other board']
];

const EMPTY = { workshopId: '', name: '', phone: '', email: '', classNum: '', board: '', school: '', consent: false, website: '' };

const normalizePhone = (raw) => {
    let digits = raw.replace(/\D/g, '');
    if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
    else if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
    return /^[6-9]\d{9}$/.test(digits) ? digits : null;
};

// Same rules as the server (routes/workshops.js), so most mistakes are caught before a request is sent.
function validate(values) {
    const errors = {};
    if (!values.workshopId) errors.workshopId = 'Choose a session to register for';
    if (values.name.trim().length < 2) errors.name = 'Enter your full name';
    if (!normalizePhone(values.phone)) errors.phone = 'Enter a valid 10-digit mobile number';
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address';
    if (!values.classNum) errors.classNum = 'Choose your class';
    if (!values.board) errors.board = 'Choose your board';
    if (!values.consent) errors.consent = 'Please agree to be contacted about this session';
    return errors;
}

const FIELD_ORDER = ['workshopId', 'name', 'phone', 'email', 'classNum', 'board', 'school', 'consent'];
// The server names the class field studentClass.
const SERVER_FIELD = { studentClass: 'classNum' };

const inputClass = (invalid) =>
    `block w-full rounded-xl border-2 bg-white px-4 py-3 text-base font-medium text-ink placeholder:text-ink/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
        invalid ? 'border-pen' : 'border-ink'
    }`;

function Field({ id, label, optional, error, hint, children }) {
    return (
        <div>
            <label htmlFor={id} className="mb-1.5 block text-sm font-extrabold text-ink">
                {label} {optional && <span className="font-medium text-ink/60">(optional)</span>}
            </label>
            {children}
            {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-xs font-medium text-ink/60">{hint}</p>}
            {error && (
                <p id={`${id}-error`} className="mt-1.5 text-sm font-bold text-pen">
                    {error}
                </p>
            )}
        </div>
    );
}

// Registration form for one Board Pe Charcha session. `openWorkshops` are the sessions that can still be registered for.
export default function RegistrationForm({ openWorkshops, initialWorkshopId, source, onSelectWorkshop, onRegistered }) {
    const [values, setValues] = useState(() => {
        const workshop = openWorkshops.find((w) => w.id === initialWorkshopId);
        return { ...EMPTY, workshopId: workshop ? workshop.id : '', classNum: workshop?.classes.length === 1 ? String(workshop.classes[0]) : '' };
    });
    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [focusTick, setFocusTick] = useState(0);
    const formRef = useRef(null);

    // After a failed submit, move focus to the first field with a problem.
    useEffect(() => {
        if (!focusTick) return;
        const first = FIELD_ORDER.find((key) => errors[key]);
        if (first) formRef.current?.querySelector(`#reg-${first}`)?.focus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [focusTick]);

    const set = (key) => (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setValues((prev) => ({ ...prev, [key]: value }));
        if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
        if (key === 'workshopId') {
            onSelectWorkshop(value);
            const workshop = openWorkshops.find((w) => w.id === value);
            if (workshop?.classes.length === 1 && !values.classNum) setValues((prev) => ({ ...prev, workshopId: value, classNum: String(workshop.classes[0]) }));
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (submitting) return;
        setFormError('');
        const found = validate(values);
        if (Object.keys(found).length) {
            setErrors(found);
            setFocusTick((n) => n + 1);
            return;
        }

        setSubmitting(true);
        try {
            const data = await registerForWorkshop({
                workshopId: values.workshopId,
                name: values.name.trim(),
                phone: values.phone.trim(),
                email: values.email.trim(),
                studentClass: Number(values.classNum),
                board: values.board,
                school: values.school.trim(),
                consent: values.consent,
                website: values.website,
                source
            });
            onRegistered({ workshopId: values.workshopId, name: values.name.trim(), alreadyRegistered: Boolean(data?.alreadyRegistered) });
        } catch (err) {
            const serverErrors = {};
            if (err instanceof RegistrationError) {
                Object.entries(err.fieldErrors).forEach(([key, message]) => {
                    serverErrors[SERVER_FIELD[key] || key] = message;
                });
            }
            if (Object.keys(serverErrors).length) {
                setErrors(serverErrors);
                setFocusTick((n) => n + 1);
            } else {
                setFormError(err.message);
            }
        } finally {
            setSubmitting(false);
        }
    };

    const describe = (id, key, hasHint) => (errors[key] ? `${id}-error` : hasHint ? `${id}-hint` : undefined);

    return (
        <form ref={formRef} onSubmit={onSubmit} noValidate className="sticker space-y-5 bg-white p-5 sm:p-8" aria-label="Workshop registration">
            <Field id="reg-workshopId" label="Session" error={errors.workshopId}>
                <select
                    id="reg-workshopId"
                    value={values.workshopId}
                    onChange={set('workshopId')}
                    aria-invalid={Boolean(errors.workshopId)}
                    aria-describedby={describe('reg-workshopId', 'workshopId')}
                    className={inputClass(errors.workshopId)}
                >
                    <option value="">Choose a session</option>
                    {openWorkshops.map((w) => (
                        <option key={w.id} value={w.id}>
                            {formatDateShort(w.date)} · {w.title} ({formatClasses(w.classes)})
                        </option>
                    ))}
                </select>
            </Field>

            <Field id="reg-name" label="Your name" error={errors.name}>
                <input
                    id="reg-name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={set('name')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={describe('reg-name', 'name')}
                    className={inputClass(errors.name)}
                />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
                <Field id="reg-phone" label="Mobile number" error={errors.phone} hint="Joining details and reminders go to this number.">
                    <input
                        id="reg-phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="98765 43210"
                        value={values.phone}
                        onChange={set('phone')}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={describe('reg-phone', 'phone', true)}
                        className={inputClass(errors.phone)}
                    />
                </Field>
                <Field id="reg-email" label="Email" optional error={errors.email}>
                    <input
                        id="reg-email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={set('email')}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={describe('reg-email', 'email')}
                        className={inputClass(errors.email)}
                    />
                </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <Field id="reg-classNum" label="Class" error={errors.classNum}>
                    <select
                        id="reg-classNum"
                        value={values.classNum}
                        onChange={set('classNum')}
                        aria-invalid={Boolean(errors.classNum)}
                        aria-describedby={describe('reg-classNum', 'classNum')}
                        className={inputClass(errors.classNum)}
                    >
                        <option value="">Choose class</option>
                        {CLASS_OPTIONS.map((c) => (
                            <option key={c} value={c}>
                                Class {c}
                            </option>
                        ))}
                    </select>
                </Field>
                <Field id="reg-board" label="Board" error={errors.board}>
                    <select
                        id="reg-board"
                        value={values.board}
                        onChange={set('board')}
                        aria-invalid={Boolean(errors.board)}
                        aria-describedby={describe('reg-board', 'board')}
                        className={inputClass(errors.board)}
                    >
                        <option value="">Choose board</option>
                        {BOARDS.map(([value, label]) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </Field>
            </div>

            <Field id="reg-school" label="School" optional error={errors.school}>
                <input id="reg-school" type="text" autoComplete="organization" value={values.school} onChange={set('school')} className={inputClass(false)} />
            </Field>

            {/* Honeypot: people never see or reach this field. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                    Website
                    <input type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
                </label>
            </div>

            <div>
                <label className="flex cursor-pointer items-start gap-3 text-sm font-medium leading-snug text-ink/85">
                    <input
                        id="reg-consent"
                        type="checkbox"
                        checked={values.consent}
                        onChange={set('consent')}
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={describe('reg-consent', 'consent')}
                        className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-brand"
                    />
                    <span>I agree that PrepOne may contact me on this number about this session (joining link and reminders).</span>
                </label>
                {errors.consent && (
                    <p id="reg-consent-error" className="mt-1.5 text-sm font-bold text-pen">
                        {errors.consent}
                    </p>
                )}
            </div>

            <div role="alert" aria-live="assertive">
                {formError && <p className="rounded-xl border-2 border-pen bg-blush px-4 py-3 text-sm font-bold text-ink">{formError}</p>}
            </div>

            <button
                type="submit"
                disabled={submitting}
                className="sticker inline-flex w-full items-center justify-center gap-2 bg-sun px-7 py-3.5 text-base font-extrabold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
                {submitting && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />}
                {submitting ? 'Registering...' : 'Reserve my seat'}
            </button>
        </form>
    );
}
