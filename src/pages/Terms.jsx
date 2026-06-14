import React, { useState } from 'react';
import { Scale, Smartphone, Building2, AlertCircle } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';

const PREPONE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.solviq.prepone';

export default function TermsOfService() {
    const [activeTab, setActiveTab] = useState('prepone');

    return (
        <div className="min-h-screen bg-[#F8F9FC] font-body selection:bg-[#4F46E5] selection:text-white">
            <SEO
                title="Terms of Service | SolvIQ India Pvt. Ltd."
                description="Read the terms and conditions for using SolvIQ platforms including PrepOne and CoachOne."
                canonicalUrl="https://solviq.in/terms"
            />
            <Navbar />

            {/* Header */}
            <div className="bg-[#0F172A] pt-32 pb-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 mb-6">
                        <Scale className="w-8 h-8" />
                    </div>
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
                    <p className="text-gray-400 text-lg">SolvIQ India Pvt. Ltd.</p>
                </div>
            </div>

            {/* Content Body */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 -mt-16 relative z-10">

                {/* Tab Switcher */}
                <div className="flex bg-white rounded-2xl p-2 shadow-lg mb-8 border border-gray-100 max-w-md mx-auto">
                    <button
                        onClick={() => setActiveTab('prepone')}
                        className={`flex-1 flex items-center justify-center py-3 px-4 rounded-xl font-bold transition-all ${activeTab === 'prepone' ? 'bg-[#4F46E5] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <Smartphone className="w-5 h-5 mr-2" /> PrepOne
                    </button>
                    <button
                        onClick={() => setActiveTab('coachone')}
                        className={`flex-1 flex items-center justify-center py-3 px-4 rounded-xl font-bold transition-all ${activeTab === 'coachone' ? 'bg-[#F59E0B] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <Building2 className="w-5 h-5 mr-2" /> CoachOne
                    </button>
                </div>

                <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-12 text-[#334155] leading-relaxed">

                    {/* --------------------------------------------------------- */}
                    {/* PREPONE TERMS */}
                    {/* --------------------------------------------------------- */}
                    {activeTab === 'prepone' && (
                        <div className="space-y-10 animate-fade-in">
                            <div className="mb-10">
                                <h2 className="font-display text-3xl font-bold text-[#0F172A] mb-2">Terms of Service — PrepOne</h2>
                                <p className="text-gray-600"><strong>Company:</strong> SolvIQ India Pvt. Ltd.</p>
                                <p className="text-gray-600"><strong>Product:</strong> PrepOne (<a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Mobile Application</a>)</p>
                                <p className="text-gray-600"><strong>Effective Date:</strong> June 14, 2026</p>
                                <p className="text-gray-600"><strong>Last Updated:</strong> June 14, 2026</p>
                            </div>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">1. Acceptance of Terms</h3>
                                <p className="mb-3">These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you") and <strong>SolvIQ India Pvt. Ltd.</strong> ("Company," "we," "us"), a private limited company incorporated under the Companies Act, 2013, with its registered office in Gandhinagar, Gujarat, India.</p>
                                <p>By downloading, installing, registering, or using the <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline"><strong>PrepOne</strong> mobile application</a>, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the App.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">2. Eligibility</h3>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>You must be at least <strong>13 years of age</strong> to use PrepOne.</li>
                                    <li>Users between 13–17 years must have verified parental or guardian consent.</li>
                                    <li>By using PrepOne, you represent that you meet these requirements and have the legal capacity to enter into this agreement.</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">3. Account Registration</h3>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>You must create an account to access most features of PrepOne.</li>
                                    <li>You agree to provide accurate, current, and complete registration information.</li>
                                    <li>You are solely responsible for maintaining the confidentiality of your credentials and for all activities under your account.</li>
                                    <li>You must notify us immediately at <strong>support@prepone.in</strong> if you suspect unauthorized access to your account.</li>
                                    <li>One individual may not maintain multiple accounts. Duplicate accounts may be terminated.</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">4. Subscription Plans and Payments</h3>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">4.1 Plans</h4>
                                <p className="mb-4">PrepOne offers the following access tiers (subject to change):</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li><strong>Free Plan:</strong> Limited access to question bank and basic mock tests</li>
                                    <li><strong>Pro Plan:</strong> Full adaptive testing, AI evaluation, and performance analytics</li>
                                    <li><strong>Premium Plan:</strong> All Pro features plus live doubt sessions and personalized mentoring</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">4.2 Billing</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li>Subscriptions are billed in advance on a monthly or annual basis.</li>
                                    <li>Payments are processed securely through third-party gateways (Razorpay/PhonePe). By making a payment, you also agree to the respective gateway's terms.</li>
                                    <li>All prices are inclusive of applicable GST unless stated otherwise.</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">4.3 Refund Policy</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li><strong>Monthly Plans:</strong> No refund once the billing cycle has started.</li>
                                    <li><strong>Annual Plans:</strong> Pro-rated refund may be issued within 7 days of purchase if you have not attempted more than 2 mock tests. After 7 days or 2 attempts, no refund is applicable.</li>
                                    <li>Refund requests must be submitted to <strong>support@prepone.in</strong> with your transaction ID.</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">4.4 Auto-Renewal</h4>
                                <p>Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date through your in-app account settings.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">5. Permitted Use</h3>
                                <p className="mb-2">You may use PrepOne solely for:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>Personal, non-commercial exam preparation and academic learning</li>
                                    <li>Completing mock tests, reviewing answers, and accessing study materials provided on the platform</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">6. Prohibited Conduct</h3>
                                <p className="mb-4">You must not:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-4">
                                    <li>Copy, scrape, or extract any content, questions, or AI feedback from PrepOne for redistribution</li>
                                    <li>Attempt to reverse-engineer, decompile, or tamper with the App or its backend systems</li>
                                    <li>Share login credentials or access with others (each subscription is for individual use only)</li>
                                    <li>Use automated bots or scripts to interact with the platform</li>
                                    <li>Submit harmful, offensive, or misleading content as answer inputs</li>
                                    <li>Attempt to manipulate AI evaluation outputs or adaptive algorithm scoring</li>
                                    <li>Impersonate another user or misrepresent your identity</li>
                                    <li>Violate any applicable Indian or international laws while using the App</li>
                                </ul>
                                <p>Violation of these terms may result in immediate account suspension or termination without refund.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">7. Intellectual Property</h3>
                                <p className="mb-3">All content on PrepOne — including but not limited to question banks, AI-generated feedback, adaptive algorithms, UI/UX design, logos, and study materials — is the exclusive intellectual property of <strong>SolvIQ India Pvt. Ltd.</strong> and is protected under the Copyright Act, 1957 and other applicable laws.</p>
                                <p>You are granted a <strong>limited, non-exclusive, non-transferable, revocable license</strong> to access and use PrepOne content solely for personal exam preparation during your active subscription period. No other rights are granted.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">8. User-Submitted Content</h3>
                                <p className="mb-2">When you submit answer text, images, or queries to PrepOne:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>You retain ownership of your original content.</li>
                                    <li>You grant SolvIQ India Pvt. Ltd. a non-exclusive, royalty-free license to process, store, and use such content solely to provide evaluation services and improve platform functionality.</li>
                                    <li>You must not submit copyrighted material belonging to others without authorization.</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">9. AI Evaluation Disclaimer</h3>
                                <p className="mb-2">PrepOne uses AI (powered by Google Gemini API) for evaluating subjective answers. You acknowledge that:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>AI evaluation is intended as a learning aid and may not be 100% accurate</li>
                                    <li>AI-generated scores and feedback <strong>do not constitute official examination results</strong> or academic credentials</li>
                                    <li>The Company is not liable for any decisions made based on AI evaluation outputs</li>
                                    <li>Users should consult qualified educators for official assessment</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">10. Service Availability</h3>
                                <p>We strive for high availability but do not guarantee uninterrupted service. Planned maintenance will be communicated in advance. We are not liable for losses arising from downtime, data delays, or technical failures beyond our reasonable control.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">11. Termination</h3>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>You may delete your account at any time through the App settings.</li>
                                    <li>We may suspend or terminate your account for violations of these Terms, fraudulent activity, or as required by law.</li>
                                    <li>Upon termination, your right to use PrepOne ceases immediately. Data deletion will follow our Privacy Policy retention schedule.</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">12. Limitation of Liability</h3>
                                <p className="mb-2">To the maximum extent permitted by applicable law:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>The Company's total liability to you for any claim arising from your use of PrepOne shall not exceed the <strong>total subscription fees paid by you in the 3 months preceding the claim</strong>.</li>
                                    <li>The Company is not liable for indirect, incidental, consequential, or punitive damages including loss of data, loss of exam performance outcomes, or loss of opportunity.</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">13. Indemnification</h3>
                                <p>You agree to indemnify and hold harmless SolvIQ India Pvt. Ltd., its directors, employees, and partners from any claims, damages, or expenses (including legal fees) arising from: (a) your use of PrepOne; (b) your violation of these Terms; or (c) your violation of any third-party rights.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">14. Governing Law and Dispute Resolution</h3>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>These Terms are governed by the laws of India.</li>
                                    <li>Any disputes shall first be attempted to be resolved through mutual negotiation within 30 days.</li>
                                    <li>If unresolved, disputes shall be subject to <strong>binding arbitration</strong> under the Arbitration and Conciliation Act, 1996, with the seat of arbitration in <strong>Ahmedabad, Gujarat</strong>.</li>
                                    <li>Courts in <strong>Gandhinagar/Ahmedabad, Gujarat</strong> shall have exclusive jurisdiction for matters not subject to arbitration.</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">15. Changes to Terms</h3>
                                <p>We may update these Terms at any time. Material changes will be notified via in-app notification or email at least 15 days before taking effect. Continued use after the effective date constitutes acceptance.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">16. Contact Us</h3>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <p className="font-bold text-[#0F172A]">SolvIQ India Pvt. Ltd.</p>
                                    <p className="text-gray-600 mb-4">Gandhinagar, Gujarat, India</p>
                                    <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:support@prepone.in" className="text-indigo-600 hover:underline">support@prepone.in</a> | <a href="mailto:legal@solviq.in" className="text-indigo-600 hover:underline">legal@solviq.in</a></p>
                                    <p className="text-gray-600"><strong>Grievance Officer Email:</strong> <a href="mailto:privacy@solviq.in" className="text-indigo-600 hover:underline">privacy@solviq.in</a></p>
                                </div>
                            </section>

                            <p className="text-sm text-gray-400 mt-8 text-center italic">© 2026 SolvIQ India Pvt. Ltd. All rights reserved.</p>
                        </div>
                    )}

                    {/* --------------------------------------------------------- */}
                    {/* COACHONE TERMS */}
                    {/* --------------------------------------------------------- */}
                    {activeTab === 'coachone' && (
                        <div className="space-y-10 animate-fade-in">
                            <div className="mb-10">
                                <h2 className="font-display text-3xl font-bold text-[#0F172A] mb-2">Terms of Service — CoachOne</h2>
                                <p className="text-gray-600"><strong>Company:</strong> SolvIQ India Pvt. Ltd.</p>
                                <p className="text-gray-600"><strong>Product:</strong> CoachOne (Coaching Institute Management Platform)</p>
                                <p className="text-gray-600"><strong>Effective Date:</strong> June 14, 2026</p>
                                <p className="text-gray-600"><strong>Last Updated:</strong> June 14, 2026</p>
                            </div>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">1. Acceptance of Terms</h3>
                                <p className="mb-3">These Terms of Service ("Terms") form a legally binding agreement between <strong>SolvIQ India Pvt. Ltd.</strong> ("Company," "we," "us") and the coaching institute, its authorized representatives, and any staff accessing the CoachOne platform ("Institute," "Client," "you").</p>
                                <p>By registering for, accessing, or using <strong>CoachOne</strong>, you represent that you are authorized to bind your organization to these Terms and that your organization agrees to comply with them in full.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">2. Nature of Service</h3>
                                <p className="mb-2">CoachOne is a <strong>B2B SaaS platform</strong> (Software as a Service) providing:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-4">
                                    <li>Student enrollment and batch management tools</li>
                                    <li>AI-powered test and question paper generation</li>
                                    <li>Subjective answer evaluation using AI (Gemini API)</li>
                                    <li>Fee management, payment tracking, and GST invoice generation</li>
                                    <li>Attendance tracking and reporting</li>
                                    <li>Staff and teacher management</li>
                                    <li>Performance analytics dashboards for institutes and students</li>
                                    <li>Automated notifications via SMS/WhatsApp/email</li>
                                </ul>
                                <p>CoachOne is a <strong>technology platform</strong> and does not provide educational content, academic instruction, or financial advice.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">3. Account Registration and Authorization</h3>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>The <strong>Primary Admin Account</strong> must be registered by an authorized representative of the institute (owner, principal, or designated manager).</li>
                                    <li>You agree to provide accurate and complete institute information including legal name, GSTIN (if applicable), and contact details.</li>
                                    <li>You are responsible for all sub-accounts (teacher/staff) created under your institute's CoachOne account.</li>
                                    <li>You must ensure that all users accessing CoachOne under your account comply with these Terms.</li>
                                    <li>Account credentials must not be shared outside authorized personnel. Institutes are liable for all activity under their account.</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">4. Subscription Plans and Payments</h3>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">4.1 Pricing</h4>
                                <p className="mb-2">CoachOne is offered on a subscription basis, priced per:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-4">
                                    <li>Number of active students enrolled</li>
                                    <li>Feature tier (Basic / Professional / Enterprise)</li>
                                </ul>
                                <p className="mb-6">Current pricing is available at <strong>coachone.solviq.in/pricing</strong> and may change with 30 days' advance notice to existing subscribers.</p>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">4.2 Billing</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li>Subscriptions are billed monthly or annually in advance.</li>
                                    <li>All prices are exclusive of GST; applicable GST will be added at checkout.</li>
                                    <li>GST-compliant invoices are generated automatically and available in your dashboard.</li>
                                    <li>Payments are processed via Razorpay. By making payments, you also agree to Razorpay's terms of service.</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">4.3 Refund Policy</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li><strong>Monthly Plans:</strong> No refund once the billing cycle begins.</li>
                                    <li><strong>Annual Plans:</strong> Pro-rated refund within 14 days of initial purchase if fewer than 5 student records have been created and fewer than 3 tests have been conducted. No refund after this window.</li>
                                    <li>Custom Enterprise plans are governed by their respective signed Service Agreements.</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">4.4 Late Payment and Suspension</h4>
                                <p>Failure to make timely payments may result in service suspension after 7 days' notice. Data access will be restored upon payment clearance. Accounts suspended for more than 60 days due to non-payment may be terminated.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">5. Institute Obligations</h3>
                                <p className="mb-3">By using CoachOne, your institute agrees to:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li><strong>Obtain Consent:</strong> Collect valid, documented consent from students, parents/guardians, and staff before enrolling their data into CoachOne</li>
                                    <li><strong>Data Accuracy:</strong> Ensure all data entered is accurate and up-to-date</li>
                                    <li><strong>Lawful Use Only:</strong> Use CoachOne exclusively for legitimate institute management and educational purposes</li>
                                    <li><strong>Compliance:</strong> Comply with all applicable laws including DPDPA 2023, the RTE Act, and any state-level regulations governing educational institutions</li>
                                    <li><strong>Security:</strong> Maintain strong passwords, enable MFA, and restrict platform access to authorized personnel only</li>
                                    <li><strong>Breach Notification:</strong> Notify SolvIQ immediately at <strong>privacy@solviq.in</strong> if you suspect unauthorized access to your CoachOne account or student data</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">6. Prohibited Use</h3>
                                <p className="mb-3">Coaching institutes must not use CoachOne to:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>Process data of individuals who have not given their consent</li>
                                    <li>Conduct fraudulent examinations or manipulate student performance records</li>
                                    <li>Reverse-engineer, scrape, or extract the platform's source code, algorithms, or proprietary AI question generation logic</li>
                                    <li>Resell, white-label, or sublicense access to CoachOne without a written Enterprise Reseller Agreement</li>
                                    <li>Use the platform to harass, discriminate against, or harm students or staff</li>
                                    <li>Violate any applicable law or regulation</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">7. Intellectual Property</h3>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">7.1 Platform IP</h4>
                                <p className="mb-6">All platform technology, software, AI models, UI/UX, brand assets, and documentation are the exclusive intellectual property of <strong>SolvIQ India Pvt. Ltd.</strong> You are granted a limited, non-exclusive, non-transferable license to use CoachOne during your active subscription period.</p>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">7.2 Institute Content</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>Question papers created using CoachOne's tools remain the intellectual property of the <strong>institute</strong>, subject to the following:
                                        <ul className="list-disc pl-5 mt-2">
                                            <li>SolvIQ may use anonymized, aggregated patterns from generated questions to improve platform AI features, unless the institute opts out in writing.</li>
                                        </ul>
                                    </li>
                                    <li>Student academic data entered into the platform belongs to the <strong>institute and respective students</strong>.</li>
                                    <li>Institute branding (logos, names) remains the property of the institute.</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">8. AI Features and Disclaimers</h3>
                                <p className="mb-2">CoachOne uses AI for question paper generation and subjective answer evaluation. You acknowledge that:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>AI-generated question papers must be reviewed by qualified teachers before use in official examinations</li>
                                    <li>AI evaluation scores are a <strong>decision-support tool</strong>, not a replacement for human grading in high-stakes assessments</li>
                                    <li>The Company makes no warranty that AI outputs are error-free or suitable for official academic certification</li>
                                    <li>The institute is solely responsible for the accuracy and fairness of assessments conducted using CoachOne</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">9. Data Processing Agreement</h3>
                                <p className="mb-2">By accepting these Terms, the institute also enters into a <strong>Data Processing Agreement (DPA)</strong> with SolvIQ India Pvt. Ltd., under which:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>SolvIQ acts as a Data Processor for student and staff personal data</li>
                                    <li>The institute acts as the Data Controller/Fiduciary</li>
                                    <li>SolvIQ shall process personal data only as instructed by the institute and as described in the CoachOne Privacy Policy</li>
                                    <li>Full DPA terms are available at <strong>coachone.solviq.in/dpa</strong></li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">10. Service Level Agreement (SLA)</h3>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-4">
                                    <li><strong>Target Uptime:</strong> 99.5% monthly uptime for core platform features</li>
                                    <li><strong>Planned Maintenance:</strong> Communicated 48 hours in advance; scheduled during off-peak hours (midnight–4 AM IST)</li>
                                    <li><strong>Support Response Times:</strong>
                                        <ul className="list-disc pl-5 mt-2 space-y-1">
                                            <li>Critical issues (platform down): 4-hour response</li>
                                            <li>High priority (core feature unavailable): 12-hour response</li>
                                            <li>Normal queries: 48-hour response</li>
                                        </ul>
                                    </li>
                                    <li>Support channels: <strong>support@solviq.in</strong> | In-app chat</li>
                                </ul>
                                <p>SLA credits for downtime exceeding 99.5% target will be issued as account credits per the SLA Policy document, not cash refunds.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">11. Confidentiality</h3>
                                <p>Both parties agree to maintain strict confidentiality of each other's proprietary information. The institute agrees not to disclose SolvIQ's proprietary technology details, pricing structures, or unreleased feature information. SolvIQ agrees not to disclose institute business data or student records to unauthorized parties.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">12. Termination</h3>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">12.1 By the Institute</h4>
                                <p className="mb-4">You may terminate your subscription at any time by providing 30 days' written notice to <strong>support@solviq.in</strong>. You may request a data export within the notice period.</p>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">12.2 By SolvIQ</h4>
                                <p className="mb-4">SolvIQ may terminate or suspend your account:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-4">
                                    <li>Immediately for material violations of these Terms, fraudulent activity, or legal non-compliance</li>
                                    <li>With 30 days' notice for any other reason</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">12.3 Effect of Termination</h4>
                                <p>Upon termination, institute access to CoachOne ceases. A 30-day data export window is provided. After 30 days, all institute and student data will be securely deleted in accordance with the Privacy Policy.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">13. Limitation of Liability</h3>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>SolvIQ's aggregate liability to the institute for any claim arising from use of CoachOne shall not exceed the <strong>total fees paid by the institute in the 6 months preceding the claim</strong>.</li>
                                    <li>SolvIQ is not liable for: loss of student data due to institute-side security failures, incorrect AI evaluations used for official certification decisions, or business losses resulting from platform downtime within the agreed SLA.</li>
                                    <li>Neither party is liable for indirect, special, or consequential damages.</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">14. Indemnification</h3>
                                <p className="mb-3">Each party shall indemnify and hold harmless the other from claims arising from: (a) its own breach of these Terms; (b) its violation of applicable law; or (c) its negligence or willful misconduct.</p>
                                <p>The institute specifically indemnifies SolvIQ against claims arising from the institute's failure to obtain proper consent from students or parents before entering their data into CoachOne.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">15. Governing Law and Dispute Resolution</h3>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>These Terms are governed by the laws of India.</li>
                                    <li>Disputes shall first be escalated to senior management of both parties for resolution within 30 days.</li>
                                    <li>If unresolved, disputes shall be referred to <strong>binding arbitration</strong> under the Arbitration and Conciliation Act, 1996, with seat of arbitration in <strong>Ahmedabad, Gujarat</strong>.</li>
                                    <li>Courts of <strong>Gandhinagar/Ahmedabad, Gujarat</strong> shall have exclusive jurisdiction for matters not subject to arbitration.</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">16. Amendments</h3>
                                <p>SolvIQ may amend these Terms at any time with 30 days' advance notice to institute administrators via email. Continued use after the effective date constitutes acceptance. For Enterprise clients with signed MSAs, contractual terms in the MSA shall prevail over these general Terms.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">17. Contact Us</h3>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <p className="font-bold text-[#0F172A]">SolvIQ India Pvt. Ltd.</p>
                                    <p className="text-gray-600 mb-4">Gandhinagar, Gujarat, India</p>
                                    <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:support@solviq.in" className="text-amber-600 hover:underline">support@solviq.in</a> | <a href="mailto:legal@solviq.in" className="text-amber-600 hover:underline">legal@solviq.in</a></p>
                                    <p className="text-gray-600"><strong>Grievance Officer:</strong> <a href="mailto:privacy@solviq.in" className="text-amber-600 hover:underline">privacy@solviq.in</a></p>
                                </div>
                            </section>

                            <p className="text-sm text-gray-400 mt-8 text-center italic">© 2026 SolvIQ India Pvt. Ltd. All rights reserved.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
