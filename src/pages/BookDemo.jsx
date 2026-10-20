import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Calendar, CheckCircle2 } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'A4vZc8WfHhQoTWGyoYVXZ';

export default function BookDemo() {
    const formRef = useRef(null);
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
            setStatus('error');
            setMessage('Email service is not configured yet. Please add the EmailJS service and template IDs.');
            return;
        }

        setStatus('submitting');
        setMessage('');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            setMessage('Your demo request has been received! Our team will reach out within 24 hours.');
            formRef.current.reset();
        } catch (error) {
            console.error('Email sending failed:', error);
            setStatus('error');
            setMessage('Failed to send request. Please try again or email us directly.');
        }
    };

    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <SEO
                title="Book a Demo | CoachOne by SolvIQ"
                description="Schedule a 20-minute personalized walkthrough of CoachOne's AI-powered bulk evaluation, pedagogical telemetry, and academic test studio for your institute."
                canonicalUrl="https://solviq.in/book-demo"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'CoachOne', url: '/coachone' },
                        { name: 'Book a Demo', url: '/book-demo' }
                    ])
                ]}
            />
            <Navbar />

            <main className="coachone">
                <section className="co-sheet text-white overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 min-h-[80vh]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
                        <div className="lg:col-span-5">
                            <p className="co-note text-xl text-[#ffd84d] mb-3 inline-block co-fade">Book a demo</p>
                            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] co-fade" style={{ '--d': '100ms' }}>
                                See CoachOne on your own question papers.
                            </h1>
                            <p className="font-body text-lg text-teal-50/90 mt-6 max-w-md leading-relaxed co-fade" style={{ '--d': '250ms' }}>
                                A 20-minute live session with your subjects, your board and your batch size. No sales pressure.
                            </p>

                            <ul className="mt-9 space-y-4 co-fade" style={{ '--d': '400ms' }}>
                                {[
                                    'A real handwritten answer sheet, checked live',
                                    'The batch report and WhatsApp report card it produces',
                                    'A price for your student count: Starter is ₹999 a month for up to 75 students',
                                    'A rollout plan for your teachers, if you want to go ahead'
                                ].map((item) => (
                                    <li key={item} className="flex items-start text-teal-50/95">
                                        <CheckCircle2 className="w-5 h-5 text-[#ffd84d] mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-8 text-sm text-teal-100/75 co-fade" style={{ '--d': '550ms' }}>
                                Prefer to test first? Ask us for a free pilot on your own batch papers.
                            </p>
                        </div>

                        <div className="lg:col-span-7 co-rise">
                            <div className="rounded-2xl bg-white text-gray-900 p-7 sm:p-10 shadow-xl shadow-[#032b2e]/30 max-w-2xl lg:ml-auto">
                                <h2 className="font-display text-2xl sm:text-3xl text-[#032b2e] mb-1">Tell us about your institute</h2>
                                <p className="text-sm text-gray-600 mb-6">We will tailor the demo to your streams and batch schedule.</p>

                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                    <input type="hidden" name="form_name" value="CoachOne demo request" />
                                    <input type="hidden" name="to_name" value="Anmol" />
                                    <input type="hidden" name="message" value="" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="from_name" className="block text-sm font-bold text-[#032b2e] mb-1.5">
                                                Full Name
                                            </label>
                                            <input
                                                id="from_name"
                                                name="from_name"
                                                type="text"
                                                required
                                                className="w-full bg-white border border-gray-300 px-3.5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696f]/30 focus:border-[#01696f] transition-colors text-gray-900 placeholder-gray-400 text-sm"
                                                placeholder="e.g. Ramesh Sharma"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="reply_to" className="block text-sm font-bold text-[#032b2e] mb-1.5">
                                                Work Email
                                            </label>
                                            <input
                                                id="reply_to"
                                                name="reply_to"
                                                type="email"
                                                required
                                                className="w-full bg-white border border-gray-300 px-3.5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696f]/30 focus:border-[#01696f] transition-colors text-gray-900 placeholder-gray-400 text-sm"
                                                placeholder="director@institute.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="institute_name" className="block text-sm font-bold text-[#032b2e] mb-1.5">
                                            Institute Name
                                        </label>
                                        <input
                                            id="institute_name"
                                            name="institute_name"
                                            type="text"
                                            required
                                            className="w-full bg-white border border-gray-300 px-3.5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696f]/30 focus:border-[#01696f] transition-colors text-gray-900 placeholder-gray-400 text-sm"
                                            placeholder="e.g. Apex Classes"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="active_students" className="block text-sm font-bold text-[#032b2e] mb-1.5">
                                            Number of Active Students
                                        </label>
                                        <select
                                            id="active_students"
                                            name="active_students"
                                            required
                                            className="w-full bg-white border border-gray-300 px-3.5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696f]/30 focus:border-[#01696f] transition-colors text-gray-900 text-sm"
                                        >
                                            <option value="Under 75 (Starter)">Up to 75 Students (Starter)</option>
                                            <option value="75 - 200 (Growth)">75 - 200 Students (Growth)</option>
                                            <option value="200 - 500 (Scale)">200 - 500 Students (Scale)</option>
                                            <option value="500+ (Enterprise)">500+ Students (Enterprise)</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-[#01696f] hover:bg-[#015257] disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl flex items-center justify-center transition-colors font-bold text-base mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#01696f]"
                                    >
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {status === 'submitting' ? 'Booking your session...' : 'Schedule Live Walkthrough'}
                                    </button>

                                    {message && (
                                        <div
                                            className={`p-3 rounded-xl text-center text-xs font-semibold ${status === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'}`}
                                            role="status"
                                        >
                                            {message}
                                        </div>
                                    )}

                                    <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-500 text-center">
                                        <span>✓ Free 20-min session</span>
                                        <span>✓ Over Zoom or Google Meet</span>
                                        <span>✓ We reply within 24 hours</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
