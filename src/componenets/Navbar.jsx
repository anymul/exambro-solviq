import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Smartphone, Laptop, ChevronRight, ArrowUpRight } from 'lucide-react';
import Logo, { DARK_BG_ACCENT, LIGHT_BG_ACCENT } from './Logo';

// One chrome for every page; the accent follows the product you are reading about.
const PRODUCT = {
    prepone: { name: 'PrepOne', tagline: 'Exam practice for students', accent: '#4F46E5', tint: '#EEF2FF' },
    coachone: { name: 'CoachOne', tagline: 'Software for coaching institutes', accent: '#01696f', tint: '#eef6f5' }
};
const COACHONE_PATHS = ['/coachone', '/test-management', '/ai-evaluation', '/student-analytics', '/institute-operations', '/book-demo'];
const DASHBOARD_URL = 'https://coachone.solviq.in';

const detectProduct = (pathname) => {
    if (pathname.startsWith('/prepone')) return 'prepone';
    if (COACHONE_PATHS.some((path) => pathname.startsWith(path))) return 'coachone';
    return null;
};

const BTN = 'px-5 py-2.5 rounded-xl font-body font-bold text-sm transition-all whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
const BTN_YELLOW = `${BTN} bg-[#ffd84d] hover:bg-[#ffe27a] text-[#1a1a2e] shadow-sm focus-visible:outline-white`;

export default function Navbar({ theme = 'dark' }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isLight = theme === 'light';
    const { pathname } = useLocation();
    const product = detectProduct(pathname);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const studentLinks = [
        { name: 'PrepOne Overview', path: '/prepone' },
        { name: 'Mock Tests', path: '/prepone/mock-tests' },
        { name: 'PYQs', path: '/prepone/pyqs' },
        { name: 'AI Evaluation', path: '/prepone/ai-evaluation-students' },
        { name: 'Revision Notes', path: '/prepone/revision-notes' }
    ];

    const instituteLinks = [
        { name: 'CoachOne Overview', path: '/coachone' },
        { name: 'Academic Test Studio', path: '/test-management' },
        { name: 'AI Subjective Evaluation', path: '/ai-evaluation' },
        { name: 'Pedagogical Telemetry', path: '/student-analytics' },
        { name: 'Institute Operations CRM', path: '/institute-operations' },
        { name: 'Book a Demo', path: '/book-demo' }
    ];

    const linkBase = isLight ? 'text-[#0F172A]/80 hover:text-[#0F172A]' : 'text-white/80 hover:text-white';

    return (
        <>
            {/* Not sticky: sits at the top of the page and scrolls away with it. */}
            <nav aria-label="Main" className={`co-nav-in absolute inset-x-0 top-0 z-[100] border-b ${isLight ? 'border-gray-200/70 text-[#0F172A]' : 'border-white/10 text-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center relative">

                        {/* Logo */}
                        <Link
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex-shrink-0 flex items-center cursor-pointer relative z-10 transition-colors duration-300 ${isLight ? 'text-[#1f2a2a]' : 'text-white'}`}
                        >
                            <Logo accent={isLight ? LIGHT_BG_ACCENT : DARK_BG_ACCENT} />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {[
                                { key: 'prepone', label: 'For Students', links: studentLinks, panelWidth: 'w-64' },
                                { key: 'coachone', label: 'For Institutes', links: instituteLinks, panelWidth: 'w-72' }
                            ].map((menu) => {
                                const meta = PRODUCT[menu.key];
                                return (
                                    <div key={menu.key} className="relative group">
                                        <button
                                            className={`flex items-center gap-1 px-3 py-2 rounded-lg font-body font-semibold text-sm transition-colors ${linkBase}`}
                                            aria-haspopup="true"
                                        >
                                            <span>{menu.label}</span>
                                            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180 pointer-events-none" />
                                        </button>
                                        <div className={`absolute top-full left-0 pt-3 ${menu.panelWidth} opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0`}>
                                            <div className="bg-white text-[#0F172A] rounded-2xl border border-gray-200 shadow-2xl shadow-black/20 overflow-hidden">
                                                <div className="px-4 py-3 border-b border-gray-100" style={{ background: meta.tint }}>
                                                    <div className="font-body font-extrabold text-sm" style={{ color: meta.accent }}>{meta.name}</div>
                                                    <div className="text-xs text-gray-600">{meta.tagline}</div>
                                                </div>
                                                <div className="py-2">
                                                    {menu.links.map((link) => (
                                                        <Link
                                                            key={link.name}
                                                            to={link.path}
                                                            className="block px-4 py-2.5 text-sm font-body font-medium text-[#0F172A] transition-colors hover:bg-gray-50"
                                                            style={pathname === link.path ? { color: meta.accent } : undefined}
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            <Link to="/blog" className={`px-3 py-2 rounded-lg font-body font-semibold text-sm transition-colors ${linkBase}`}>Blog</Link>
                            <Link to="/about" className={`px-3 py-2 rounded-lg font-body font-semibold text-sm transition-colors ${linkBase}`}>About</Link>
                        </div>

                        {/* Desktop CTAs: each button wears its product's colour; the page's own action is the yellow one. */}
                        <div className="hidden md:flex items-center gap-2">
                            {product === 'coachone' && (
                                <>
                                    <a
                                        href={DASHBOARD_URL}
                                        className={`${BTN} border ${isLight ? 'border-gray-300 text-[#0F172A] hover:bg-gray-50' : 'border-white/25 text-white hover:bg-white/10'} focus-visible:outline-white`}
                                    >
                                        Log in
                                    </a>
                                    <Link to="/book-demo" className={BTN_YELLOW}>Book a Demo</Link>
                                </>
                            )}
                            {product === 'prepone' && (
                                <>
                                    <Link to="/coachone" className={`${BTN} border border-white/25 text-white hover:bg-white/10 focus-visible:outline-white`}>
                                        For Institutes
                                    </Link>
                                    <Link to="/prepone" className={BTN_YELLOW}>Get PrepOne Free</Link>
                                </>
                            )}
                            {product === null && (
                                <>
                                    <Link to="/book-demo" className={`${BTN} text-white bg-[#01696f] hover:bg-[#015257] focus-visible:outline-white`}>
                                        Book a Demo
                                    </Link>
                                    <Link to="/prepone" className={`${BTN} text-white bg-[#4F46E5] hover:bg-[#4338CA] focus-visible:outline-white`}>
                                        Get PrepOne Free
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button - FIXED */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className={`p-2 rounded-lg focus:outline-none transition-colors ${isLight ? 'text-[#0F172A] hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                                aria-label="Open Menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                aria-hidden={!mobileMenuOpen}
                inert={!mobileMenuOpen}
                className={`md:hidden fixed inset-0 bg-[#0b1413] text-white z-[110] transform transition-transform duration-300 ease-in-out flex flex-col ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-body font-extrabold text-2xl tracking-tight">
                        SolvIQ
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
                        aria-label="Close Menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-6 pb-28 space-y-8">
                    <div className="grid grid-cols-2 gap-3">
                        <Link to="/prepone" onClick={() => setMobileMenuOpen(false)} className="bg-[#4F46E5] text-white p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 active:opacity-90 transition-opacity">
                            <Smartphone className="w-6 h-6" />
                            <span className="font-body font-bold text-sm">For Students</span>
                            <span className="text-[11px] text-white/75">PrepOne</span>
                        </Link>
                        <Link to="/coachone" onClick={() => setMobileMenuOpen(false)} className="bg-[#01696f] text-white p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 active:opacity-90 transition-opacity">
                            <Laptop className="w-6 h-6" />
                            <span className="font-body font-bold text-sm">For Institutes</span>
                            <span className="text-[11px] text-white/75">CoachOne</span>
                        </Link>
                    </div>

                    {[
                        { title: 'PrepOne for students', links: studentLinks },
                        { title: 'CoachOne for institutes', links: instituteLinks },
                        { title: 'Company', links: [{ name: 'Blog', path: '/blog' }, { name: 'About Us', path: '/about' }] }
                    ].map((group) => (
                        <div key={group.title}>
                            <h3 className="text-sm font-bold text-white/55 mb-3 px-1">{group.title}</h3>
                            <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                                {group.links.map((link, idx) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center justify-between px-4 py-4 active:bg-white/10 transition-colors ${idx !== group.links.length - 1 ? 'border-b border-white/10' : ''}`}
                                    >
                                        <span className="font-medium text-sm">{link.name}</span>
                                        <ChevronRight className="w-4 h-4 text-white/40" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                    <a href={DASHBOARD_URL} className="flex items-center justify-between px-4 py-4 rounded-2xl border border-white/15 font-medium text-sm">
                        CoachOne dashboard login
                        <ArrowUpRight className="w-4 h-4 text-white/60" />
                    </a>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 bg-[#0b1413]/95 backdrop-blur border-t border-white/10">
                    {product === 'prepone' ? (
                        <Link to="/prepone" onClick={() => setMobileMenuOpen(false)} className={`${BTN_YELLOW} w-full flex justify-center py-3.5`}>Get PrepOne Free</Link>
                    ) : (
                        <Link to="/book-demo" onClick={() => setMobileMenuOpen(false)} className={`${BTN_YELLOW} w-full flex justify-center py-3.5`}>Book a Demo</Link>
                    )}
                </div>
            </div>
        </>
    );
}
