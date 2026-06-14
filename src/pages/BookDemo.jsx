import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';

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

        setStatus('sending');
        setMessage('');

        try {
            const formData = new FormData(formRef.current);
            formRef.current.elements.message.value = [
                'New CoachOne demo request',
                `Name: ${formData.get('from_name')}`,
                `Email: ${formData.get('reply_to')}`,
                `Institute: ${formData.get('institute_name')}`,
                `Active students: ${formData.get('active_students')}`,
            ].join('\n');

            await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
                publicKey: EMAILJS_PUBLIC_KEY,
            });

            formRef.current.reset();
            setStatus('success');
            setMessage('Thanks. Your demo request has been sent.');
        } catch (error) {
            setStatus('error');
            setMessage(error?.text || 'Something went wrong while sending your request. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-[#111210] font-body selection:bg-[#01696f] selection:text-white relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#01696f] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

            <Navbar />

            <section className="pt-32 pb-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Card Wrapper - Dark Mode Adjustments */}
                    <div className="bg-[#161715] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/10 relative">

                        {/* Left Side: Value Prop & Trust */}
                        <div className="lg:w-5/12 bg-black/40 p-10 md:p-16 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#01696f] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>

                            <div className="relative z-10">
                                <h2 className="font-display text-4xl text-white font-bold mb-6">See CoachOne in action.</h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    In this 20-minute tailored walkthrough, we'll show you how to automate your test workflow and boost parent retention.
                                </p>

                                <ul className="space-y-5 mb-12">
                                    {[
                                        'Live demo of AI Subjective Grading',
                                        'Sample WhatsApp Parent Reports',
                                        'Custom pricing based on your batch size',
                                        'Q&A with our implementation experts'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-300">
                                            <CheckCircle2 className="w-6 h-6 text-teal-400 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative z-10 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <p className="italic text-gray-300 text-sm mb-4 leading-relaxed">
                                    "It replaced three tools we were paying for separately. The ROI was immediate within the first test cycle."
                                </p>
                                <div className="flex items-center space-x-2 text-white text-sm font-bold">
                                    <ShieldCheck className="w-5 h-5 text-teal-400" />
                                    <span>Trusted by 450+ Institutes</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:w-7/12 p-10 md:p-16 bg-[#161715]">
                            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">Tell us about your institute</h3>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <input type="hidden" name="form_name" value="CoachOne demo request" />
                                <input type="hidden" name="to_name" value="Anmol" />
                                <input type="hidden" name="message" value="" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="from_name" className="block text-sm font-bold text-gray-400 mb-2">Full Name</label>
                                        <input
                                            id="from_name"
                                            name="from_name"
                                            type="text"
                                            required
                                            className="w-full bg-black/40 border border-white/10 px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all text-white placeholder-gray-600"
                                            placeholder="Anmol Kumar"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="reply_to" className="block text-sm font-bold text-gray-400 mb-2">Work Email</label>
                                        <input
                                            id="reply_to"
                                            name="reply_to"
                                            type="email"
                                            required
                                            className="w-full bg-black/40 border border-white/10 px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all text-white placeholder-gray-600"
                                            placeholder="director@institute.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="institute_name" className="block text-sm font-bold text-gray-400 mb-2">Institute Name</label>
                                    <input
                                        id="institute_name"
                                        name="institute_name"
                                        type="text"
                                        required
                                        className="w-full bg-black/40 border border-white/10 px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all text-white placeholder-gray-600"
                                        placeholder="e.g. Apex Academy"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="active_students" className="block text-sm font-bold text-gray-400 mb-2">Number of Active Students</label>
                                    <select
                                        id="active_students"
                                        name="active_students"
                                        required
                                        className="w-full bg-black/40 border border-white/10 px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all text-white appearance-none"
                                    >
                                        <option value="Under 100" className="bg-[#111210] text-white">Under 100</option>
                                        <option value="100 - 500" className="bg-[#111210] text-white">100 - 500</option>
                                        <option value="500 - 2,000" className="bg-[#111210] text-white">500 - 2,000</option>
                                        <option value="2,000+" className="bg-[#111210] text-white">2,000+</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full bg-[#01696f] hover:bg-[#015257] disabled:bg-[#014448] disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl flex items-center justify-center transition-all font-bold text-lg mt-8 shadow-[0_0_20px_rgba(1,105,111,0.3)] hover:-translate-y-0.5 disabled:hover:translate-y-0"
                                >
                                    <Calendar className="w-5 h-5 mr-3" />
                                    {status === 'sending' ? 'Sending...' : 'Schedule Demo'}
                                </button>

                                {message && (
                                    <p
                                        className={`text-center text-sm font-medium ${status === 'success' ? 'text-teal-300' : 'text-red-300'}`}
                                        role="status"
                                    >
                                        {message}
                                    </p>
                                )}

                                <p className="text-center text-xs text-gray-500 mt-4">
                                    By booking, you agree to our Terms of Service & Privacy Policy.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
