// Board Pe Charcha workshop schedule and the date helpers the /workshops page uses.
//
// SAMPLE DATA: titles, instructors and dates below are placeholders until the real schedule is confirmed.
// - recordingUrl: leave null until a recording is actually published; the "View Recording" button only renders when it is set.
// - resource: an internal page that supports the session, shown as "Explore Resources" once the session is completed.
// - registration: 'open' | 'filling-fast' | 'closed'. The Register Now button always goes to /workshops/register.

// The prerendered HTML and the first client render both treat this as "today", so hydration matches.
// The page swaps in the visitor's real date right after mount.
export const SCHEDULE_AS_OF = '2026-10-25';

export const CLASS_OPTIONS = [10, 11, 12];
export const SUBJECT_OPTIONS = ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Science', 'Exam Strategy'];

const RESOURCES = {
    notes: { label: 'Chapter revision notes', to: '/prepone/revision-notes' },
    pyqs: { label: 'Previous year questions', to: '/prepone/pyqs' },
    mock: { label: 'Board mock tests', to: '/prepone/mock-tests' }
};

const FORMAT_LIVE = 'Live online session';
const FORMAT_CLINIC = 'Live online question clinic';
const FORMAT_HACKS = 'Live online concept and exam hacks';

export const WORKSHOPS = [
    // First workshop
    {
        id: 'calculus-problem-solving',
        title: 'Calculus Problem Solving Session',
        topic: 'Calculus',
        subject: 'Mathematics',
        classes: [11, 12],
        instructor: { name: 'Malhar Karade', credential: 'IIT Gandhinagar' },
        date: '2026-10-25',
        start: '13:00',
        end: '14:30',
        format: FORMAT_LIVE,
        description: 'A live problem-solving session on calculus. Work through board-style questions step by step with an IITian and see where marks are easily lost.',
        takeaways: [
            'Break a calculus question into clear, markable steps',
            'Choose the right method before starting to calculate',
            'Avoid the common slips that cost marks'
        ],
        registration: 'open',
        recordingUrl: null,
        resource: RESOURCES.pyqs
    },

    // Upcoming
    {
        id: 'organic-name-reactions',
        title: 'Organic Name Reactions on One Page',
        topic: 'Aldehydes, Ketones and Carboxylic Acids',
        subject: 'Chemistry',
        classes: [12],
        instructor: { name: 'Aditya Rao', credential: 'IIT Bombay' },
        date: '2026-11-01',
        start: '18:00',
        end: '19:30',
        format: FORMAT_HACKS,
        description: 'Aldol, Cannizzaro, Clemmensen, Wolff-Kishner and more: reagents, products and the conversion chains that board papers love. You leave with a one-page map.',
        takeaways: [
            'Link every name reaction to its reagent in a single glance',
            'Solve conversion questions by working backwards',
            'Avoid the reagent mix-ups that cost full marks'
        ],
        registration: 'open',
        recordingUrl: null,
        resource: RESOURCES.notes
    },
    {
        id: 'light-reflection-refraction',
        title: 'Light: Ray Diagrams and Numericals in Half the Time',
        topic: 'Light: Reflection and Refraction',
        subject: 'Science',
        classes: [10],
        instructor: { name: 'Meera Nair', credential: 'IIT Roorkee' },
        date: '2026-11-07',
        start: '17:00',
        end: '18:15',
        format: FORMAT_LIVE,
        description: 'Draw any ray diagram for mirrors and lenses without memorising ten cases, then practise the numericals that follow.',
        takeaways: [
            'Use three rays and one rule to place every image',
            'Apply sign convention to mirror and lens formulas',
            'Write the nature, size and position of the image in board format'
        ],
        registration: 'open',
        recordingUrl: null,
        resource: RESOURCES.pyqs
    },
    {
        id: 'bayes-theorem-probability',
        title: 'Probability and Bayes Theorem Without the Confusion',
        topic: 'Probability',
        subject: 'Mathematics',
        classes: [12],
        instructor: { name: 'Karan Singh', credential: 'IIT Delhi' },
        date: '2026-11-08',
        start: '10:00',
        end: '11:30',
        format: FORMAT_CLINIC,
        description: 'Conditional probability, total probability and Bayes theorem with tree diagrams. A calm walk through the case-study style questions now appearing in boards.',
        takeaways: [
            'Draw a tree diagram before writing any formula',
            'Decide when a question is asking for Bayes theorem',
            'Present the final answer as a fraction, as the marking scheme expects'
        ],
        registration: 'filling-fast',
        recordingUrl: null,
        resource: RESOURCES.pyqs
    },
    {
        id: 'human-reproduction-diagrams',
        title: 'Human Reproduction: Diagrams That Score',
        topic: 'Human Reproduction',
        subject: 'Biology',
        classes: [12],
        instructor: { name: 'Ishita Das', credential: 'IIT Madras' },
        date: '2026-11-08',
        start: '16:00',
        end: '17:15',
        format: FORMAT_HACKS,
        description: 'Label-by-label practice on the diagrams that carry marks: reproductive systems, gametogenesis and the menstrual cycle, plus how to word the explanation beside each.',
        takeaways: [
            'Draw and label fast with a repeatable order',
            'Link each hormone to the stage it controls',
            'Know the diagram questions that repeat across years'
        ],
        registration: 'open',
        recordingUrl: null,
        resource: RESOURCES.notes
    },
    {
        id: 'mole-concept-practice',
        title: 'Mole Concept: From Fear to Full Marks',
        topic: 'Some Basic Concepts of Chemistry',
        subject: 'Chemistry',
        classes: [11],
        instructor: { name: 'Aditya Rao', credential: 'IIT Bombay' },
        date: '2026-11-14',
        start: '17:00',
        end: '18:30',
        format: FORMAT_CLINIC,
        description: 'Moles, molarity and stoichiometry from first principles, with a graded set of questions from easy to exam-hard.',
        takeaways: [
            'Convert between grams, moles and particles with one habit',
            'Handle limiting reagent questions step by step',
            'Keep units consistent from the first line to the last'
        ],
        registration: 'open',
        recordingUrl: null,
        resource: RESOURCES.notes
    },
    {
        id: 'electrostatics-gauss',
        title: 'Electrostatics: Gauss Law and Field Shortcuts',
        topic: 'Electric Charges and Fields',
        subject: 'Physics',
        classes: [12],
        instructor: { name: 'Rohan Mehta', credential: 'IIT Gandhinagar' },
        date: '2026-11-21',
        start: '18:00',
        end: '19:30',
        format: FORMAT_LIVE,
        description: 'Use symmetry to pick the right Gaussian surface and finish field calculations in two steps. We also revisit the dipole questions that show up in 3-mark slots.',
        takeaways: [
            'Choose the Gaussian surface from the symmetry, not from habit',
            'Write the derivation in the order the examiner looks for',
            'Cross-check direction and sign at the end'
        ],
        registration: 'open',
        recordingUrl: null,
        resource: RESOURCES.pyqs
    },
    {
        id: 'coordinate-geometry-circles',
        title: 'Coordinate Geometry and Circles, Step by Step',
        topic: 'Coordinate Geometry and Circles',
        subject: 'Mathematics',
        classes: [10],
        instructor: { name: 'Neha Verma', credential: 'IIT Kanpur' },
        date: '2026-11-22',
        start: '10:00',
        end: '11:15',
        format: FORMAT_CLINIC,
        description: 'Distance and section formulas, then tangent properties of circles. Practise proofs and numericals the way the board asks them.',
        takeaways: [
            'Memorise the section formula with a picture, not a string of symbols',
            'Write tangent proofs in the standard four-line format',
            'Cross-check answers using a quick sketch'
        ],
        registration: 'open',
        recordingUrl: null,
        resource: RESOURCES.pyqs
    },
    {
        id: 'straight-lines-intro',
        title: 'Straight Lines: Slope, Intercepts and Forms',
        topic: 'Straight Lines',
        subject: 'Mathematics',
        classes: [11],
        instructor: { name: 'Karan Singh', credential: 'IIT Delhi' },
        date: '2026-11-28',
        start: '17:00',
        end: '18:15',
        format: FORMAT_LIVE,
        description: 'Which form of the line equation to use and when. Solve distance, angle and family-of-lines questions with a consistent method.',
        takeaways: [
            'Choose between slope-intercept, two-point and intercept form quickly',
            'Compute the angle between lines without sign errors',
            'Use the distance formula for a point from a line'
        ],
        registration: 'open',
        recordingUrl: null,
        resource: RESOURCES.notes
    },
    {
        id: 'scoring-full-marks-answers',
        title: 'Writing Answers That Score Full Marks',
        topic: 'Board answer writing and time management',
        subject: 'Exam Strategy',
        classes: [10, 12],
        instructor: { name: 'Meera Nair', credential: 'IIT Roorkee' },
        date: '2026-12-05',
        start: '17:00',
        end: '18:30',
        format: FORMAT_HACKS,
        description: 'How examiners award marks, how to structure 2, 3 and 5-mark answers, and how to split three hours so every section gets its share. Built around real marking-scheme patterns.',
        takeaways: [
            'Structure answers to hit every step the marking scheme lists',
            'Plan the three hours section by section',
            'Check the paper in the last ten minutes without second-guessing'
        ],
        registration: 'open',
        recordingUrl: null,
        resource: RESOURCES.mock
    },
    {
        id: 'wave-optics-interference',
        title: 'Wave Optics: Interference and Diffraction Decoded',
        topic: 'Wave Optics',
        subject: 'Physics',
        classes: [12],
        instructor: { name: 'Rohan Mehta', credential: 'IIT Gandhinagar' },
        date: '2026-12-06',
        start: '18:00',
        end: '19:30',
        format: FORMAT_CLINIC,
        description: "Young's double slit, single slit diffraction and polarisation, with the derivations and the numericals that decide this chapter's marks.",
        takeaways: [
            'Derive fringe width in five clean lines',
            'Tell interference apart from diffraction in the question stem',
            'Handle the intensity and path-difference numericals'
        ],
        registration: 'open',
        recordingUrl: null,
        resource: RESOURCES.pyqs
    }
];

// --- Date helpers (all dates are 'YYYY-MM-DD' strings in IST, compared as strings) ---

const pad = (n) => String(n).padStart(2, '0');

export const toISO = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

export const todayISO = () => toISO(new Date());

export const monthKey = (year, month) => `${year}-${pad(month + 1)}`;

export const getStatus = (workshop, today) => {
    if (workshop.date < today) return 'completed';
    if (workshop.date === today) return 'today';
    return 'upcoming';
};

const toUTC = (iso) => new Date(`${iso}T00:00:00Z`);

export const formatDate = (iso) =>
    new Intl.DateTimeFormat('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(toUTC(iso));

export const formatDateShort = (iso) =>
    new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(toUTC(iso));

export const formatMonth = (year, month) =>
    new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(year, month, 1)));

export const weekdayShort = (iso) => new Intl.DateTimeFormat('en-IN', { weekday: 'short', timeZone: 'UTC' }).format(toUTC(iso));

export const formatTime = (hhmm) => {
    const [h, m] = hhmm.split(':').map(Number);
    return `${h % 12 || 12}:${pad(m)} ${h < 12 ? 'AM' : 'PM'}`;
};

export const formatTimeRange = (w) => `${formatTime(w.start)} to ${formatTime(w.end)} IST`;

export const formatClasses = (classes) => (classes.length === 1 ? `Class ${classes[0]}` : `Class ${classes.join(' and ')}`);

// Cells for a Sunday-first month grid. Days outside the month are padded in so every row has 7 cells.
export function buildMonthGrid(year, month) {
    const first = new Date(Date.UTC(year, month, 1));
    const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    const lead = first.getUTCDay();
    const total = Math.ceil((lead + daysInMonth) / 7) * 7;
    return Array.from({ length: total }, (_, i) => {
        const day = i - lead + 1;
        const inMonth = day >= 1 && day <= daysInMonth;
        const iso = new Date(Date.UTC(year, month, day)).toISOString().slice(0, 10);
        return { iso, day: inMonth ? day : null, inMonth };
    });
}

export const sortByDateTime = (list) => [...list].sort((a, b) => (a.date + a.start).localeCompare(b.date + b.start));

// One-tap "Add to Google Calendar" link (Google's public event-template URL; nothing is sent to Google until the user saves).
// Times are written as IST wall-clock with ctz so they land correctly in any viewer's calendar.
// There is no joining link yet, so the event points back to the schedule page instead of inventing one.
export function googleCalendarUrl(workshop) {
    const stamp = (hhmm) => `${workshop.date.replaceAll('-', '')}T${hhmm.replace(':', '')}00`;
    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: `Board Pe Charcha: ${workshop.title}`,
        dates: `${stamp(workshop.start)}/${stamp(workshop.end)}`,
        ctz: 'Asia/Kolkata',
        details: `${workshop.topic}\n\nTaught by ${workshop.instructor.name}, ${workshop.instructor.credential}.\nJoining details will be sent to the mobile number you registered with.\n\nSchedule: https://solviq.in/workshops`,
        location: 'Online (joining details sent on registered mobile)'
    });
    return `https://calendar.google.com/calendar/render?${params}`;
}
