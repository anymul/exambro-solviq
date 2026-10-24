import { CalendarClock, CheckCircle2, Radio } from 'lucide-react';

// Subject colours: `card` tints a card or chip, `dot` is the saturated swatch.
export const SUBJECT_STYLE = {
    Physics: { card: 'bg-skywash', dot: 'bg-sky' },
    Chemistry: { card: 'bg-mintwash', dot: 'bg-aqua' },
    Mathematics: { card: 'bg-butter', dot: 'bg-sun' },
    Biology: { card: 'bg-blush', dot: 'bg-coral' },
    Science: { card: 'bg-lilac', dot: 'bg-grape' },
    'Exam Strategy': { card: 'bg-white', dot: 'bg-ink' }
};

// Status is never colour alone: each one has its own icon and label.
export const STATUS_META = {
    upcoming: { label: 'Upcoming', Icon: CalendarClock, badge: 'bg-brand text-white', swatch: 'bg-brand' },
    today: { label: 'Today', Icon: Radio, badge: 'bg-sun text-ink', swatch: 'bg-sun' },
    completed: { label: 'Completed', Icon: CheckCircle2, badge: 'bg-white text-ink/70', swatch: 'bg-ink/25' }
};

export const REGISTRATION_META = {
    open: { label: 'Registration open', tone: 'bg-mintwash text-ink' },
    'filling-fast': { label: 'Filling fast', tone: 'bg-blush text-ink' },
    closed: { label: 'Registration closed', tone: 'bg-white text-ink/70' }
};

export const registrationFor = (workshop, status) =>
    REGISTRATION_META[status === 'completed' ? 'closed' : workshop.registration];

export const REGISTER_PATH = '/workshops/register';

const BUTTON =
    'sticker inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2.5 text-sm font-extrabold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand';
export const buttonPrimary = `${BUTTON} bg-sun`;
export const buttonSecondary = `${BUTTON} bg-white`;
