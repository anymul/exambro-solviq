import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
        <div className="min-h-screen bg-[#faf8f4] font-body selection:bg-[#01696f] selection:text-white relative overflow-hidden flex flex-col justify-between">
            {/* Ambient Warm Sunny Glows */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-100/60 rounded-full mix-blend-multiply filter blur-[140px] pointer-events-none"></div>
            <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-teal-100/40 rounded-full mix-blend-multiply filter blur-[140px] pointer-events-none"></div>

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
            <Navbar theme="light" />

            <section className="pt-28 pb-20 relative z-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header intro */}
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="text-xs font-bold text-[#01696f] uppercase tracking-wider block mb-2.5">
                            Personalized Walkthrough
                        </span>
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3">
                            Experience CoachOne firsthand.
                        </h1>
                        <p className="text-base text-gray-600 leading-relaxed">
                            A friendly, 20-minute live session showing how CoachOne saves hours on paper evaluation, reassures parents, and simplifies batch operations.
                        </p>
                    </div>

                    {/* Main Card Wrapper - Bright & Warmer Aesthetic */}
                    <div className="bg-white rounded-3xl shadow-xl shadow-amber-950/5 overflow-hidden flex flex-col lg:flex-row border border-amber-100/80 relative">

                        {/* Left Side: Value Prop & Trust */}
                        <div className="lg:w-5/12 bg-gradient-to-br from-[#faf7ef] via-[#f8f5ee] to-teal-50/40 p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-amber-100/70 relative">
                            <div>
                                <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
                                    What to expect in your session
                                </h2>
                                <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                                    No high-pressure sales talk. We walk through your exact subjects, question paper styles, and batch sizes.
                                </p>

                                <ul className="space-y-4 mb-10">
                                    {[
                                        'Live demo: AI evaluating handwritten answer sheets',
                                        'Sample automated WhatsApp report cards for parents',
                                        'Transparent pricing tailored to your student strength',
                                        'Step-by-step rollout plan for your teachers in 1 day'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-700 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-[#01696f] mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="leading-relaxed font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Trust quote */}
                            <div className="bg-white p-5 rounded-2xl border border-amber-200/60 shadow-xs text-xs space-y-3">
                                <p className="italic text-gray-700 leading-relaxed">
                                    "CoachOne cut our evaluation time from 3 days down to an afternoon. Our faculty feels lighter, and parents appreciate the Sunday WhatsApp reports."
                                </p>
                                <div className="flex items-center justify-between pt-2.5 border-t border-gray-100">
                                    <div className="flex items-center space-x-2 text-[#01696f] font-bold text-xs">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span>Trusted by 450+ Academies</span>
                                    </div>
                                    <span className="text-[11px] text-gray-400 font-medium">CBSE &amp; JEE Batches</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:w-7/12 p-8 sm:p-10 lg:p-12 bg-white flex flex-col justify-center">
                            <div className="mb-6">
                                <h3 className="font-display text-2xl font-bold text-gray-900 mb-1">
                                    Tell us about your institute
                                </h3>
                                <p className="text-xs text-gray-500">
                                    We will tailor the demo to your target streams and batch schedule.
                                </p>
                            </div>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                <input type="hidden" name="form_name" value="CoachOne demo request" />
                                <input type="hidden" name="to_name" value="Anmol" />
                                <input type="hidden" name="message" value="" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="from_name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                            Full Name
                                        </label>
                                        <input
                                            id="from_name"
                                            name="from_name"
                                            type="text"
                                            required
                                            className="w-full bg-[#fbfaf7] border border-gray-200 px-3.5 py-3 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#01696f]/20 focus:border-[#01696f] transition-all text-gray-900 placeholder-gray-400 text-sm shadow-xs"
                                            placeholder="e.g. Ramesh Sharma"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="reply_to" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                            Work Email
                                        </label>
                                        <input
                                            id="reply_to"
                                            name="reply_to"
                                            type="email"
                                            required
                                            className="w-full bg-[#fbfaf7] border border-gray-200 px-3.5 py-3 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#01696f]/20 focus:border-[#01696f] transition-all text-gray-900 placeholder-gray-400 text-sm shadow-xs"
                                            placeholder="director@institute.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="institute_name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                        Institute Name
                                    </label>
                                    <input
                                        id="institute_name"
                                        name="institute_name"
                                        type="text"
                                        required
                                        className="w-full bg-[#fbfaf7] border border-gray-200 px-3.5 py-3 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#01696f]/20 focus:border-[#01696f] transition-all text-gray-900 placeholder-gray-400 text-sm shadow-xs"
                                        placeholder="e.g. Apex Classes"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="active_students" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                        Number of Active Students
                                    </label>
                                    <select
                                        id="active_students"
                                        name="active_students"
                                        required
                                        className="w-full bg-[#fbfaf7] border border-gray-200 px-3.5 py-3 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#01696f]/20 focus:border-[#01696f] transition-all text-gray-900 text-sm shadow-xs"
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
                                    className="w-full bg-[#01696f] hover:bg-[#015257] disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-xl flex items-center justify-center transition-all font-bold text-base mt-4 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:hover:translate-y-0"
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
                                    <span>✓ Response within 2-4 hours</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
