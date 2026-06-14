import React, { useState } from 'react';
import { Shield, Smartphone, Building2 } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';

const PREPONE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.solviq.prepone';

export default function PrivacyPolicy() {
    const [activeTab, setActiveTab] = useState('prepone');

    return (
        <div className="min-h-screen bg-[#F8F9FC] font-body selection:bg-[#4F46E5] selection:text-white">
            <SEO
                title="Privacy Policy | SolvIQ India Pvt. Ltd."
                description="Learn how SolvIQ protects your data across the PrepOne student app and CoachOne institute platform."
                canonicalUrl="https://solviq.in/privacy"
            />
            <Navbar />

            {/* Header */}
            <div className="bg-[#0F172A] pt-32 pb-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/20 text-indigo-400 mb-6">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-gray-400 text-lg">SolvIQ India Pvt. Ltd. • Last Updated: June 14, 2026</p>
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
                    {/* PREPONE PRIVACY */}
                    {/* --------------------------------------------------------- */}
                    {activeTab === 'prepone' && (
                        <div className="space-y-10 animate-fade-in">
                            <div className="mb-10">
                                <h2 className="font-display text-3xl font-bold text-[#0F172A] mb-2">Privacy Policy — PrepOne</h2>
                                <p className="text-gray-600"><strong>Company:</strong> SolvIQ India Pvt. Ltd.</p>
                                <p className="text-gray-600"><strong>Product:</strong> PrepOne (<a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Mobile Application</a>)</p>
                                <p className="text-gray-600"><strong>Effective Date:</strong> June 14, 2026</p>
                                <p className="text-gray-600"><strong>Last Updated:</strong> June 14, 2026</p>
                            </div>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">1. Introduction</h3>
                                <p className="mb-3">SolvIQ India Pvt. Ltd. ("Company," "we," "us," or "our"), a company incorporated under the Companies Act, 2013, with its registered office in Gandhinagar, Gujarat, India, operates <strong>PrepOne</strong> — an AI-powered adaptive mock test and exam preparation platform for students.</p>
                                <p className="mb-3">This Privacy Policy explains how we collect, use, store, share, and protect your personal information when you use the <a href={PREPONE_PLAY_STORE_URL} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">PrepOne mobile application</a> ("App"). By accessing or using PrepOne, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of the App immediately.</p>
                                <p>This policy complies with the <strong>Information Technology Act, 2000</strong>, the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>, and the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">2. Information We Collect</h3>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">2.1 Personal Information You Provide</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li><strong>Account Registration:</strong> Full name, email address, mobile number, date of birth, gender</li>
                                    <li><strong>Academic Profile:</strong> Class/grade, target examination (e.g., JEE, NEET, UPSC), preferred subjects, institution name (if applicable)</li>
                                    <li><strong>Profile Picture:</strong> Optionally uploaded by the user</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">2.2 Test & Performance Data</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li>Mock test responses, selected answers, subjective answer text or images</li>
                                    <li>AI-evaluated scores, partial marks, and detailed feedback generated by our Gemini API-powered evaluator</li>
                                    <li>Time spent per question, skipped questions, and attempt history</li>
                                    <li>Adaptive learning data generated by our IRT (Item Response Theory) algorithm, including estimated ability levels (θ scores) and item difficulty calibrations</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">2.3 Usage & Behavioral Data</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li>App navigation events, features accessed, and session duration</li>
                                    <li>Device information: device model, OS version, unique device identifiers</li>
                                    <li>App version and crash/error reports</li>
                                    <li>Push notification interaction logs</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">2.4 Payment Information</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li>Subscription plan details (Free/Pro/Premium)</li>
                                    <li>Payment transaction IDs processed through third-party gateways (Razorpay/PhonePe)</li>
                                    <li><strong>We do not store full card numbers, UPI PINs, or banking credentials.</strong> All payment processing is handled by PCI-DSS compliant third-party processors.</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">2.5 Content You Submit</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li>Subjective answer text, images of handwritten answers uploaded for AI grading</li>
                                    <li>Doubt queries submitted to the platform</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">2.6 Automatically Collected Data</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>IP address, approximate location (city/state level only, via IP)</li>
                                    <li>Firebase Analytics events and crash reports (Crashlytics)</li>
                                    <li>Session timestamps and app lifecycle data</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">3. How We Use Your Information</h3>
                                <div className="overflow-x-auto mb-4">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-100 text-gray-700 border-b-2 border-gray-200">
                                                <th className="p-3 font-bold">Purpose</th>
                                                <th className="p-3 font-bold">Data Used</th>
                                                <th className="p-3 font-bold">Legal Basis (DPDPA)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600">
                                            <tr className="border-b border-gray-100"><td className="p-3">Account creation and authentication</td><td className="p-3">Name, email, phone</td><td className="p-3">Consent</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">Delivering adaptive tests and personalized question recommendations</td><td className="p-3">Test history, IRT ability scores</td><td className="p-3">Consent / Legitimate Interest</td></tr>
                                            <tr className="border-b border-gray-100"><td className="p-3">AI-powered answer evaluation and feedback</td><td className="p-3">Submitted answers, images</td><td className="p-3">Consent</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">Subscription management and billing</td><td className="p-3">Payment transaction IDs</td><td className="p-3">Contract Performance</td></tr>
                                            <tr className="border-b border-gray-100"><td className="p-3">App performance monitoring and bug fixing</td><td className="p-3">Device info, crash logs</td><td className="p-3">Legitimate Interest</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">Sending notifications about tests, results, and new features</td><td className="p-3">Email, phone, device tokens</td><td className="p-3">Consent</td></tr>
                                            <tr className="border-b border-gray-100"><td className="p-3">Improving our AI models and question bank quality</td><td className="p-3">Aggregated, anonymized test data</td><td className="p-3">Legitimate Interest</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">Customer support</td><td className="p-3">All relevant account data</td><td className="p-3">Consent / Contract</td></tr>
                                            <tr className="border-b border-gray-100"><td className="p-3">Compliance with legal obligations</td><td className="p-3">As required by law</td><td className="p-3">Legal Obligation</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>We <strong>do not</strong> use your personal data for targeted third-party advertising.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">4. Data Sharing and Disclosure</h3>
                                <p className="mb-3">We do not sell your personal data. We may share data with:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-4">
                                    <li><strong>Cloud Infrastructure Providers:</strong> Microsoft Azure, Google Firebase, Cloudflare R2 — for hosting, storage, and CDN delivery</li>
                                    <li><strong>AI Services:</strong> Google Gemini API — for processing and evaluating subjective answers; responses are not retained by Google for model training under our enterprise agreement</li>
                                    <li><strong>Payment Processors:</strong> Razorpay / PhonePe — solely for payment processing</li>
                                    <li><strong>Analytics Services:</strong> Firebase Analytics, Google Crashlytics — for app performance and crash analysis</li>
                                    <li><strong>Legal Authorities:</strong> Law enforcement or government authorities when required by applicable Indian law, court order, or to protect the safety of users</li>
                                </ul>
                                <p>All third-party service providers are contractually bound to process data only as instructed and to maintain appropriate security standards.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">5. Data Retention</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-100 text-gray-700 border-b-2 border-gray-200">
                                                <th className="p-3 font-bold">Data Type</th>
                                                <th className="p-3 font-bold">Retention Period</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600">
                                            <tr className="border-b border-gray-100"><td className="p-3">Account & profile data</td><td className="p-3">Until account deletion + 90 days</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">Test attempt history and scores</td><td className="p-3">3 years from last activity</td></tr>
                                            <tr className="border-b border-gray-100"><td className="p-3">Payment transaction records</td><td className="p-3">7 years (as per GST/tax requirements)</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">AI-submitted answer images</td><td className="p-3">30 days after evaluation, then deleted</td></tr>
                                            <tr className="border-b border-gray-100"><td className="p-3">Anonymized performance analytics</td><td className="p-3">Indefinitely (no PII)</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">Crash logs and error reports</td><td className="p-3">90 days</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">6. Your Rights Under DPDPA 2023</h3>
                                <p className="mb-3">As a data principal under the Digital Personal Data Protection Act, 2023, you have the right to:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-4">
                                    <li><strong>Access:</strong> Request a summary of the personal data we hold about you</li>
                                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                                    <li><strong>Erasure:</strong> Request deletion of your personal data (subject to legal retention obligations)</li>
                                    <li><strong>Grievance Redressal:</strong> File a complaint with our Data Protection Officer (DPO)</li>
                                    <li><strong>Nomination:</strong> Nominate another individual to exercise your rights in case of death or incapacity</li>
                                    <li><strong>Withdraw Consent:</strong> Withdraw consent for any processing activity at any time; withdrawal will not affect prior lawful processing</li>
                                </ul>
                                <p>To exercise any of these rights, contact us at: <strong>privacy@solviq.in</strong></p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">7. Children's Privacy</h3>
                                <p>PrepOne is intended for users aged <strong>13 years and above</strong>. For users under 18, we require verifiable parental or guardian consent before account creation, in compliance with DPDPA 2023. We do not knowingly collect data from children under 13. If we discover such data has been collected, it will be deleted immediately.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">8. Data Security</h3>
                                <p className="mb-3">We implement industry-standard security measures including:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-4">
                                    <li>AES-256 encryption for data at rest on cloud storage</li>
                                    <li>TLS 1.3 for all data in transit</li>
                                    <li>Firebase Authentication with secure token management</li>
                                    <li>Role-based access controls for internal systems</li>
                                    <li>Regular security audits and vulnerability assessments</li>
                                </ul>
                                <p>Despite these measures, no system is 100% secure. Users are responsible for keeping their login credentials confidential.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">9. Cross-Border Data Transfers</h3>
                                <p>Your data may be processed on servers located outside India (e.g., Google and Microsoft cloud infrastructure). All such transfers are subject to Standard Contractual Clauses or equivalent protections as required by DPDPA 2023.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">10. Changes to This Policy</h3>
                                <p>We may update this Privacy Policy from time to time. Material changes will be notified via in-app notification or email at least 15 days before taking effect. Continued use of PrepOne after the effective date constitutes acceptance of the revised policy.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">11. Grievance Officer</h3>
                                <p className="mb-3">In accordance with the Information Technology Act, 2000 and DPDPA 2023, the details of the Grievance Officer are:</p>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <p className="text-gray-600"><strong>Name:</strong>Anmol Kumar</p>
                                    <p className="text-gray-600"><strong>Designation:</strong> Data Protection Officer</p>
                                    <p className="text-gray-600"><strong>Company:</strong> SolvIQ India Pvt. Ltd.</p>
                                    <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:privacy@solviq.in" className="text-indigo-600 hover:underline">privacy@solviq.in</a></p>
                                    <p className="text-gray-600"><strong>Address:</strong> Gandhinagar, Gujarat, India</p>
                                    <p className="text-gray-600"><strong>Response Time:</strong> Within 72 hours of receipt of complaint</p>
                                </div>
                            </section>

                            <p className="text-sm text-gray-400 mt-8 text-center italic">© 2026 SolvIQ India Pvt. Ltd. All rights reserved.</p>
                        </div>
                    )}

                    {/* --------------------------------------------------------- */}
                    {/* COACHONE PRIVACY */}
                    {/* --------------------------------------------------------- */}
                    {activeTab === 'coachone' && (
                        <div className="space-y-10 animate-fade-in">
                            <div className="mb-10">
                                <h2 className="font-display text-3xl font-bold text-[#0F172A] mb-2">Privacy Policy — CoachOne</h2>
                                <p className="text-gray-600"><strong>Company:</strong> SolvIQ India Pvt. Ltd.</p>
                                <p className="text-gray-600"><strong>Product:</strong> CoachOne (Coaching Institute Management Platform)</p>
                                <p className="text-gray-600"><strong>Effective Date:</strong> June 14, 2026</p>
                                <p className="text-gray-600"><strong>Last Updated:</strong> June 14, 2026</p>
                            </div>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">1. Introduction</h3>
                                <p className="mb-3">SolvIQ India Pvt. Ltd. ("Company," "we," "us," or "our"), incorporated under the Companies Act, 2013 with its registered office in Gandhinagar, Gujarat, India, operates <strong>CoachOne</strong> — a B2B Coaching Operating System (OS) designed for coaching institutes to manage students, conduct tests, generate AI-powered question papers, and manage fees and staff.</p>
                                <p className="mb-3">This Privacy Policy governs how we collect, process, store, and protect data relating to:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-4">
                                    <li><strong>Coaching Institute Administrators and Staff</strong> (Business Customers)</li>
                                    <li><strong>Students</strong> of enrolled coaching institutes (End Users)</li>
                                    <li><strong>Parents/Guardians</strong> of enrolled students</li>
                                </ul>
                                <p>This policy complies with the <strong>Information Technology Act, 2000</strong>, the <strong>IT (SPDI) Rules, 2011</strong>, the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>, and applicable data processing obligations under B2B contracts.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">2. Data Controller and Processor Relationship</h3>
                                <p className="mb-3">CoachOne operates under a <strong>dual data relationship</strong>:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li><strong>SolvIQ India Pvt. Ltd.</strong> acts as a <strong>Data Processor</strong> for student personal data entered by coaching institutes.</li>
                                    <li><strong>Coaching Institutes</strong> act as independent <strong>Data Controllers/Fiduciaries</strong> for the student and parent data they collect and enter into CoachOne.</li>
                                    <li>Coaching institutes are solely responsible for obtaining valid consent from students, parents/guardians, and staff before entering their data into CoachOne.</li>
                                    <li>SolvIQ India Pvt. Ltd. acts as the primary <strong>Data Fiduciary</strong> for institute administrator and staff account data.</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">3. Data We Collect</h3>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">3.1 Coaching Institute (Business Account) Data</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li><strong>Admin/Owner Account:</strong> Name, business email, phone number, institute name, GSTIN, registered address</li>
                                    <li><strong>Staff Accounts:</strong> Staff name, role (teacher/coordinator/admin), contact email and phone</li>
                                    <li><strong>Billing & Subscription:</strong> Payment transaction IDs, subscription plan details, GST-compliant invoices</li>
                                    <li><strong>Institute Configuration:</strong> Batch structure, subjects, exam calendars, branding assets (logo)</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">3.2 Student Data (Entered by Coaching Institute)</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li><strong>Identity Data:</strong> Student name, date of birth, gender, student enrollment ID</li>
                                    <li><strong>Contact Data:</strong> Student phone number, email address, parent/guardian contact details, home address</li>
                                    <li><strong>Academic Data:</strong> Class/grade, target exam, batch enrolled, academic performance history</li>
                                    <li><strong>Attendance Records:</strong> Class attendance marked by teachers through CoachOne</li>
                                    <li><strong>Test & Exam Data:</strong> Test scores, subject-wise performance, rank within batch, AI-evaluated subjective answer scores</li>
                                    <li><strong>Fee Records:</strong> Fee amount, due dates, payment receipts, outstanding dues (no full card/bank details stored)</li>
                                    <li><strong>Behavioral Analytics:</strong> Engagement with study material, test attempt frequency, performance trends</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">3.3 Data Generated by CoachOne Platform</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li>AI-generated question papers and test content (owned by the institute)</li>
                                    <li>Automated progress reports and performance analytics</li>
                                    <li>System-generated alerts (fee reminders, test schedules, result notifications)</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">3.4 Technical & Usage Data</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>Platform login events, IP addresses, browser/device information (for web dashboard)</li>
                                    <li>API usage logs for integrations</li>
                                    <li>Error logs and system performance data</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">4. How We Use Data</h3>
                                <div className="overflow-x-auto mb-4">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-100 text-gray-700 border-b-2 border-gray-200">
                                                <th className="p-3 font-bold">Purpose</th>
                                                <th className="p-3 font-bold">Data Used</th>
                                                <th className="p-3 font-bold">Processed On Behalf Of</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600">
                                            <tr className="border-b border-gray-100"><td className="p-3">Providing institute management dashboard</td><td className="p-3">Admin & staff account data</td><td className="p-3">SolvIQ (Controller)</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">Student enrollment and batch management</td><td className="p-3">Student identity & academic data</td><td className="p-3">Coaching Institute (Controller)</td></tr>
                                            <tr className="border-b border-gray-100"><td className="p-3">Test generation and AI question paper creation</td><td className="p-3">Syllabus config, past performance data</td><td className="p-3">Coaching Institute (Controller)</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">AI answer evaluation and result generation</td><td className="p-3">Student answer submissions</td><td className="p-3">Coaching Institute (Controller)</td></tr>
                                            <tr className="border-b border-gray-100"><td className="p-3">Fee management and payment reminders</td><td className="p-3">Fee records, student contact</td><td className="p-3">Coaching Institute (Controller)</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">Attendance tracking and reporting</td><td className="p-3">Attendance records</td><td className="p-3">Coaching Institute (Controller)</td></tr>
                                            <tr className="border-b border-gray-100"><td className="p-3">Platform performance analytics</td><td className="p-3">Anonymized aggregate usage data</td><td className="p-3">SolvIQ (Controller)</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">Billing and subscription management</td><td className="p-3">Institute billing data</td><td className="p-3">SolvIQ (Controller)</td></tr>
                                            <tr className="border-b border-gray-100"><td className="p-3">Customer support and onboarding</td><td className="p-3">Account and configuration data</td><td className="p-3">SolvIQ (Controller)</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">Security monitoring and fraud prevention</td><td className="p-3">Login events, IP logs</td><td className="p-3">SolvIQ (Controller)</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>We <strong>do not</strong> use student data entered by coaching institutes for training our AI models without explicit, separate written consent from the institute.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">5. Data Sharing</h3>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">5.1 Within Platform Operations</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li>Data entered by institutes is accessible only to authorized users of that institute's CoachOne account (role-based access control).</li>
                                    <li>SolvIQ's internal engineering and support teams may access data under confidentiality obligations strictly for support and maintenance purposes.</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">5.2 Third-Party Service Providers</h4>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-6">
                                    <li><strong>Cloud Infrastructure:</strong> Microsoft Azure, Google Firebase, Cloudflare R2 (hosting and storage)</li>
                                    <li><strong>AI Processing:</strong> Google Gemini API (for AI question generation and answer evaluation)</li>
                                    <li><strong>Communication Services:</strong> SMS/WhatsApp gateway providers (for fee reminders, result notifications)</li>
                                    <li><strong>Payment Processors:</strong> Razorpay (for institute subscription billing)</li>
                                    <li><strong>Analytics:</strong> Internal dashboards only; no student data shared with external analytics tools</li>
                                </ul>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">5.3 Legal Disclosure</h4>
                                <p className="mb-6">Data may be disclosed to law enforcement or government authorities as required by applicable Indian law, valid court orders, or to prevent fraud and protect user safety.</p>

                                <h4 className="font-bold text-[#0F172A] text-lg mb-2">5.4 No Sale of Data</h4>
                                <p>SolvIQ India Pvt. Ltd. does not sell, rent, or commercially exploit student or institute data to any third party.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4">6. Data Retention</h3>
                                <div className="overflow-x-auto mb-4">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-100 text-gray-700 border-b-2 border-gray-200">
                                                <th className="p-3 font-bold">Data Category</th>
                                                <th className="p-3 font-bold">Retention Period</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600">
                                            <tr className="border-b border-gray-100"><td className="p-3">Institute admin and staff account data</td><td className="p-3">Duration of subscription + 1 year</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">Student enrollment and academic records</td><td className="p-3">Duration of institute subscription + 3 years</td></tr>
                                            <tr className="border-b border-gray-100"><td className="p-3">Test papers and answer submissions</td><td className="p-3">3 years from test date</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">Fee payment records</td><td className="p-3">7 years (GST/income tax compliance)</td></tr>
                                            <tr className="border-b border-gray-100"><td className="p-3">Attendance records</td><td className="p-3">3 years</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">AI-generated question papers</td><td className="p-3">As long as institute account is active</td></tr>
                                            <tr className="border-b border-gray-100"><td className="p-3">Technical logs and error reports</td><td className="p-3">90 days</td></tr>
                                            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-3">Anonymized aggregate analytics</td><td className="p-3">Indefinitely</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>Upon termination of an institute's subscription, the institute administrator may request a <strong>data export</strong> (JSON/CSV format) within 30 days of termination. After this window, data will be securely deleted from production systems.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">7. Coaching Institute Responsibilities</h3>
                                <p className="mb-3">By using CoachOne, coaching institutes agree to:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li>Obtain valid and documented consent from students, parents/guardians, and staff before entering their data into CoachOne</li>
                                    <li>Provide students and parents with a copy of this Privacy Policy or their own privacy disclosure that accurately describes data processing through CoachOne</li>
                                    <li>Ensure accuracy of data entered into the platform</li>
                                    <li>Immediately notify SolvIQ at <strong>privacy@solviq.in</strong> upon becoming aware of any data breach involving student records</li>
                                    <li>Comply with all applicable local and national data protection laws in their jurisdiction</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">8. Rights of Students and Parents</h3>
                                <p className="mb-3">Students and parents whose data is processed via CoachOne may exercise the following rights under DPDPA 2023 by contacting their <strong>coaching institute administrator</strong> (as Data Controller) or directly contacting SolvIQ at <strong>privacy@solviq.in</strong>:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700">
                                    <li><strong>Right to Access:</strong> Obtain a copy of personal data held</li>
                                    <li><strong>Right to Correction:</strong> Request rectification of inaccurate data</li>
                                    <li><strong>Right to Erasure:</strong> Request deletion of personal data (subject to institute and legal retention obligations)</li>
                                    <li><strong>Right to Grievance Redressal:</strong> File a complaint with the DPO</li>
                                </ul>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">9. Data Security</h3>
                                <p className="mb-3">CoachOne implements enterprise-grade security measures:</p>
                                <ul className="space-y-2 pl-5 list-disc text-gray-700 mb-4">
                                    <li>AES-256 encryption for all data at rest</li>
                                    <li>TLS 1.3 for all data in transit</li>
                                    <li>Role-based access control (RBAC) with granular permissions for Admin, Teacher, and Staff roles</li>
                                    <li>Multi-factor authentication (MFA) for institute administrator accounts</li>
                                    <li>Regular automated backups with geo-redundant storage</li>
                                    <li>Penetration testing and vulnerability assessments conducted periodically</li>
                                    <li>Audit logs for all data access and modification events</li>
                                </ul>
                                <p>In the event of a data breach, affected institutes will be notified within <strong>72 hours</strong> of discovery, along with a description of the breach, data involved, and remediation steps, in compliance with DPDPA 2023.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">10. Children's Data (Students Under 18)</h3>
                                <p>A significant portion of students managed through CoachOne may be minors. Coaching institutes (as Data Controllers) are solely responsible for obtaining verifiable parental or guardian consent for all students under 18. SolvIQ will process such data only on the lawful instructions of the institute.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">11. Cross-Border Data Transfers</h3>
                                <p>Data may be processed on cloud infrastructure outside India. All such transfers are governed by data processing agreements with standard contractual clauses, ensuring equivalent protections to those required under DPDPA 2023.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">12. Changes to This Policy</h3>
                                <p>Material changes to this Privacy Policy will be communicated to registered institute administrators via email at least 15 days before taking effect. Continued use of CoachOne constitutes acceptance of the revised policy.</p>
                            </section>

                            <hr className="border-gray-200" />

                            <section>
                                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">13. Grievance Officer</h3>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <p className="text-gray-600"><strong>Name:</strong> Anmol Kumar</p>
                                    <p className="text-gray-600"><strong>Designation:</strong> Data Protection Officer</p>
                                    <p className="text-gray-600"><strong>Company:</strong> SolvIQ India Pvt. Ltd.</p>
                                    <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:privacy@solviq.in" className="text-indigo-600 hover:underline">privacy@solviq.in</a></p>
                                    <p className="text-gray-600"><strong>Address:</strong> Gandhinagar, Gujarat, India</p>
                                    <p className="text-gray-600"><strong>Response Time:</strong> Within 72 hours of receipt</p>
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
