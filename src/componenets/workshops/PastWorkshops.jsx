import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { buttonSecondary } from './tokens';
import { SectionTitle } from './parts';
import WorkshopCard from './WorkshopCard';

const INITIAL_COUNT = 4;

// Completed sessions, newest first, with key takeaways and the recording or resources link when there is one.
export default function PastWorkshops({ workshops, onSelect }) {
    const [expanded, setExpanded] = useState(false);
    const visible = expanded ? workshops : workshops.slice(0, INITIAL_COUNT);
    const hidden = workshops.length - INITIAL_COUNT;

    return (
        <section id="past-workshops" aria-labelledby="past-heading" className="bg-butter py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <SectionTitle id="past-heading" title={<>Missed one? <span className="marker">Catch up</span> here</>}>
                    Every session leaves behind takeaways you can use tonight. Recordings and matching resources are linked as they are published.
                </SectionTitle>

                {workshops.length === 0 ? (
                    <p className="sticker mt-12 bg-white p-6 text-base font-bold text-ink/80">Past sessions will appear here after the first workshop.</p>
                ) : (
                    <>
                        <div className="mt-12 grid gap-6 md:grid-cols-2">
                            {visible.map((workshop) => (
                                <WorkshopCard key={workshop.id} workshop={workshop} status="completed" variant="past" onSelect={onSelect} />
                            ))}
                        </div>

                        {hidden > 0 && (
                            <div className="mt-10 flex justify-center">
                                <button
                                    type="button"
                                    aria-expanded={expanded}
                                    aria-controls="past-workshops"
                                    onClick={() => setExpanded((open) => !open)}
                                    className={`${buttonSecondary} px-6 py-3 text-base`}
                                >
                                    {expanded ? 'Show fewer sessions' : `Show ${hidden} earlier ${hidden === 1 ? 'session' : 'sessions'}`}
                                    <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
