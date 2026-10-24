import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

// --- Custom Brand SVGs ---
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.961h-1.96z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setIsSubscribed(true);
            setEmail('');
        }
    };

    const linkClass = 'text-gray-400 hover:text-white text-sm transition-colors block py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white';
    const columns = [
        {
            title: 'Products',
            links: [
                { name: 'PrepOne for students', to: '/prepone' },
                { name: 'CoachOne for institutes', to: '/coachone' },
                { name: 'AI answer evaluation', to: '/prepone/ai-evaluation-students' },
                { name: 'Book a demo', to: '/book-demo' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Previous year questions', to: '/prepone/pyqs' },
                { name: 'Board mock tests', to: '/prepone/mock-tests' },
                { name: 'Revision notes', to: '/prepone/revision-notes' },
                { name: 'Board Pe Charcha workshops', to: '/workshops' },
                { name: 'Study material and blog', to: '/blog' }
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About us', to: '/about' },
                { name: 'Download the app', to: '/prepone/download', hardLink: true },
                { name: 'Privacy policy', to: '/privacy-policy' },
                { name: 'Terms of service', to: '/terms-of-service' }
            ]
        }
    ];
    const socials = [
        { label: 'SolvIQ on X', href: 'https://x.com/solviq_in', Icon: TwitterIcon },
        { label: 'SolvIQ on LinkedIn', href: 'https://www.linkedin.com/company/solviq', Icon: LinkedinIcon },
        { label: 'SolvIQ on Instagram', href: 'https://www.instagram.com/solviq.in', Icon: InstagramIcon }
    ];

    return (
        <footer className="sheet-ink text-white font-body overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* The two products */}
                <div className="grid md:grid-cols-2 gap-4 pt-16">
                    <Link to="/prepone" className="group rounded-2xl bg-[#4F46E5] p-7 flex items-start justify-between gap-6 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                        <div>
                            <div className="text-xl font-extrabold">PrepOne</div>
                            <p className="mt-1.5 text-sm text-white/80 leading-relaxed max-w-xs">
                                Write board answers by hand and get step marks from your own handwriting.
                            </p>
                        </div>
                        <ArrowUpRight className="w-6 h-6 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <Link to="/coachone" className="group rounded-2xl bg-[#01696f] p-7 flex items-start justify-between gap-6 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                        <div>
                            <div className="text-xl font-extrabold">CoachOne</div>
                            <p className="mt-1.5 text-sm text-white/80 leading-relaxed max-w-xs">
                                Copy checking, mistake reports, fees and parent updates for coaching institutes.
                            </p>
                        </div>
                        <ArrowUpRight className="w-6 h-6 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>

                {/* Brand and links */}
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 py-14">
                    <div className="col-span-2 lg:col-span-5">
                        <Link to="/" className="inline-block mb-4 text-white hover:text-gray-200 transition-colors" aria-label="SolvIQ home">
                            <Logo className="h-8 md:h-9 w-auto" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                            AI-powered exam preparation and automated subjective evaluation for CBSE &amp; BSEB students, paired with test operations for coaching institutes.
                        </p>
                        <div className="flex items-center gap-2.5">
                            {socials.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {columns.map((col, i) => (
                        <div key={col.title} className={i === 0 ? 'col-span-2 sm:col-span-1 lg:col-span-3 lg:col-start-6' : 'lg:col-span-2 col-span-1'}>
                            <h4 className="font-bold text-sm text-white mb-3">{col.title}</h4>
                            <ul>
                                {col.links.map((link) => (
                                    <li key={link.to}>
                                        {link.hardLink
                                            ? <a href={link.to} className={linkClass}>{link.name}</a>
                                            : <Link to={link.to} className={linkClass}>{link.name}</Link>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter and legal */}
                <div className="border-t border-white/10 py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <p className="text-gray-400 text-sm max-w-md">
                        <span className="text-white font-bold">Stay updated.</span> Exam pattern changes, syllabus updates and product news.
                    </p>
                    {isSubscribed ? (
                        <div className="flex items-center gap-2 text-gray-200 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-[#ffd84d]" />
                            <span>Thank you for subscribing!</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubscribe} className="flex w-full lg:w-auto gap-2">
                            <label htmlFor="footer-email" className="sr-only">Email address</label>
                            <input
                                id="footer-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="bg-transparent border border-white/20 text-white placeholder-gray-500 px-4 py-2.5 rounded-xl focus:outline-none focus:border-[#ffd84d] w-full lg:w-72 text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-[#ffd84d] hover:bg-[#ffe27a] text-[#1a1a2e] px-5 py-2.5 rounded-xl text-sm font-bold transition-colors cursor-pointer shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Subscribe
                            </button>
                        </form>
                    )}
                </div>

                <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-xs sm:text-sm">
                    <p>&copy; {currentYear} SolvIQ India Pvt Ltd. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
