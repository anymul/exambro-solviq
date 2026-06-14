import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Smartphone, Laptop } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const studentLinks = [
        { name: 'PrepOne Overview', path: '/prepone' },
        { name: 'Mock Tests', path: '/prepone/mock-tests' },
        { name: 'PYQs', path: '/prepone/pyqs' },
        { name: 'AI Evaluation', path: '/prepone/ai-evaluation-students' },
        { name: 'Revision Notes', path: '/prepone/revision-notes' }
    ];

    const instituteLinks = [
        { name: 'CoachOne Overview', path: '/coachone' },
        { name: 'Test Management', path: '/test-management' },
        { name: 'Student Analytics', path: '/student-analytics' },
        { name: 'AI Evaluation Workflow', path: '/ai-evaluation' },
        { name: 'Book a Demo', path: '/book-demo' }
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3 text-[#0F172A]' : 'bg-transparent py-5 text-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center relative">

                        {/* Logo - Navigates to Home */}
                        <Link
                            to="/"
                            className={`flex-shrink-0 flex items-center cursor-pointer relative z-10 transition-colors duration-300 ${isScrolled ? 'text-[#333a2f]' : 'text-white'}`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 1077 335.249999"
                                preserveAspectRatio="xMidYMid meet"
                                version="1.0"
                                className="h-8 md:h-10 w-auto"
                            >
                                <defs>
                                    <g />
                                    <clipPath id="24dccf62b6">
                                        <path d="M 567.242188 85.539062 L 730.378906 85.539062 L 730.378906 248.671875 L 567.242188 248.671875 Z M 567.242188 85.539062 " clipRule="nonzero" />
                                    </clipPath>
                                    <clipPath id="abe96b574f">
                                        <path d="M 525.773438 77.007812 L 557.203125 77.007812 L 557.203125 108.4375 L 525.773438 108.4375 Z M 525.773438 77.007812 " clipRule="nonzero" />
                                    </clipPath>
                                </defs>

                                <g fill="currentColor" fillOpacity="1">
                                    <g transform="translate(172.70069, 235.78516)">
                                        <path d="M 54.5 0.1875 C 46.375 0.1875 39.226562 -0.984375 33.0625 -3.328125 C 28.144531 -5.296875 23.097656 -8.5625 17.921875 -13.125 C 12.003906 -18.539062 8.25 -25.25 6.65625 -33.25 C 6.039062 -35.84375 5.734375 -38.429688 5.734375 -41.015625 C 5.609375 -41.878906 5.609375 -42.738281 5.734375 -43.59375 L 5.734375 -44.890625 L 31.03125 -44.53125 L 31.03125 -44.703125 C 31.03125 -40.148438 32.019531 -36.394531 34 -33.4375 C 37.6875 -27.894531 44.519531 -25.125 54.5 -25.125 C 70.507812 -25.125 78.515625 -28.878906 78.515625 -36.390625 C 78.515625 -43.660156 70.265625 -48.21875 53.765625 -50.0625 C 44.273438 -51.175781 36.144531 -53.148438 29.375 -55.984375 C 23.09375 -58.566406 17.984375 -62.015625 14.046875 -66.328125 C 8.503906 -72.484375 5.734375 -79.625 5.734375 -87.75 C 5.734375 -92.800781 6.65625 -97.546875 8.5 -101.984375 C 9.851562 -105.304688 11.703125 -108.320312 14.046875 -111.03125 C 22.660156 -120.757812 36.332031 -125.625 55.0625 -125.625 C 66.269531 -125.625 75.75 -123.410156 83.5 -118.984375 C 89.414062 -115.648438 94.222656 -111.210938 97.921875 -105.671875 C 100.628906 -101.484375 102.535156 -96.679688 103.640625 -91.265625 C 104.015625 -89.421875 104.265625 -87.570312 104.390625 -85.71875 C 104.503906 -85.101562 104.5625 -84.488281 104.5625 -83.875 L 104.5625 -82.765625 L 79.25 -82.765625 L 79.25 -82.578125 C 79.375 -86.273438 78.453125 -89.414062 76.484375 -92 C 72.546875 -97.539062 65.40625 -100.3125 55.0625 -100.3125 C 48.78125 -100.3125 43.601562 -99.515625 39.53125 -97.921875 C 34.488281 -95.953125 31.96875 -93.117188 31.96875 -89.421875 C 31.96875 -81.785156 40.15625 -77.039062 56.53125 -75.1875 C 75.007812 -73.09375 88.3125 -67.367188 96.4375 -58.015625 C 101.851562 -51.609375 104.5625 -44.398438 104.5625 -36.390625 L 104.5625 -34.734375 C 104.5625 -33.992188 104.503906 -33.253906 104.390625 -32.515625 C 104.265625 -30.546875 104.015625 -28.695312 103.640625 -26.96875 C 102.410156 -22.039062 100.070312 -17.671875 96.625 -13.859375 C 92.5625 -9.296875 87.082031 -5.785156 80.1875 -3.328125 C 73.28125 -0.984375 64.71875 0.1875 54.5 0.1875 Z M 54.5 0.1875 " />
                                    </g>
                                </g>
                                <g fill="currentColor" fillOpacity="1">
                                    <g transform="translate(279.112579, 235.78516)">
                                        <path d="M 49.328125 -95.140625 C 62.503906 -95.265625 73.710938 -90.707031 82.953125 -81.46875 C 92.316406 -72.113281 97 -60.90625 97 -47.84375 C 97.113281 -34.664062 92.554688 -23.457031 83.328125 -14.21875 C 74.085938 -4.863281 62.9375 -0.125 49.875 0 C 36.695312 0.125 25.429688 -4.429688 16.078125 -13.671875 C 6.710938 -22.910156 2.03125 -34.117188 2.03125 -47.296875 C 1.90625 -60.472656 6.460938 -71.679688 15.703125 -80.921875 C 24.941406 -90.285156 36.148438 -95.023438 49.328125 -95.140625 Z M 66.140625 -31.03125 C 70.691406 -35.59375 72.96875 -41.140625 72.96875 -47.671875 C 72.96875 -54.066406 70.628906 -59.609375 65.953125 -64.296875 C 61.273438 -68.722656 55.734375 -70.9375 49.328125 -70.9375 C 42.921875 -70.9375 37.441406 -68.660156 32.890625 -64.109375 C 28.328125 -59.304688 26.046875 -53.765625 26.046875 -47.484375 C 26.046875 -41.078125 28.382812 -35.535156 33.0625 -30.859375 C 37.625 -26.296875 43.171875 -24.015625 49.703125 -24.015625 C 56.347656 -24.265625 61.828125 -26.601562 66.140625 -31.03125 Z M 66.140625 -31.03125 " />
                                    </g>
                                </g>
                                <g fill="currentColor" fillOpacity="1">
                                    <g transform="translate(374.439892, 235.78516)">
                                        <path d="M 31.40625 -128.40625 L 31.40625 0 L 5.546875 0 L 5.546875 -128.40625 Z M 31.40625 -128.40625 " />
                                    </g>
                                </g>
                                <g fill="currentColor" fillOpacity="1">
                                    <g transform="translate(407.693553, 235.78516)">
                                        <path d="M 115.46875 -95.140625 L 71.3125 0 L 51.734375 0 L 5.546875 -95.140625 L 35.65625 -95.140625 L 61.515625 -41.9375 L 85.546875 -95.140625 Z M 115.46875 -95.140625 " />
                                    </g>
                                </g>
                                <g fill="#9400ad" fillOpacity="1">
                                    <g transform="translate(525.010169, 235.78516)">
                                        <path d="M 2.765625 -120.09375 L 31.59375 -120.09375 L 31.59375 0 L 2.765625 0 Z M 2.765625 -120.09375 " />
                                    </g>
                                </g>
                                <g fill="#9400ad" fillOpacity="1"><g transform="translate(555.679833, 235.78516)" /></g>
                                <g fill="#9400ad" fillOpacity="1"><g transform="translate(600.018083, 235.78516)" /></g>
                                <g fill="#9400ad" fillOpacity="1"><g transform="translate(644.356334, 235.78516)" /></g>
                                <g fill="#9400ad" fillOpacity="1"><g transform="translate(688.694584, 235.78516)" /></g>
                                <g fill="currentColor" fillOpacity="1">
                                    <g transform="translate(733.033062, 235.78516)">
                                        <path d="M 31.40625 0 L 5.546875 0 L 5.546875 -25.859375 L 31.40625 -25.859375 Z M 31.40625 0 " />
                                    </g>
                                </g>
                                <g fill="currentColor" fillOpacity="1">
                                    <g transform="translate(766.286735, 235.78516)">
                                        <path d="M 31.21875 -128.765625 L 31.21875 -106.96875 L 5.546875 -106.96875 L 5.546875 -128.765625 Z M 31.40625 -94.96875 L 31.40625 0 L 5.546875 0 L 5.546875 -94.96875 Z M 31.40625 -94.96875 " />
                                    </g>
                                </g>
                                <g fill="currentColor" fillOpacity="1">
                                    <g transform="translate(799.540408, 235.78516)">
                                        <path d="M 52.84375 -94.78125 C 66.382812 -95.882812 77.59375 -92.375 86.46875 -84.25 C 95.945312 -75.5 100.6875 -63.242188 100.6875 -47.484375 L 100.6875 0 L 76.671875 0 L 76.671875 -46.921875 L 76.484375 -46.921875 L 76.484375 -47.296875 C 76.484375 -53.828125 74.207031 -59.367188 69.65625 -63.921875 C 65.09375 -68.484375 59.546875 -70.765625 53.015625 -70.765625 C 46.367188 -70.515625 40.828125 -68.171875 36.390625 -63.734375 C 31.710938 -59.054688 29.5 -53.515625 29.75 -47.109375 L 29.75 -46.921875 L 29.5625 -46.921875 L 29.5625 0 L 3.6875 0 L 3.6875 -95.515625 L 29.5625 -95.515625 L 29.5625 -83.140625 C 35.351562 -90.035156 43.113281 -93.914062 52.84375 -94.78125 Z M 52.84375 -94.78125 " />
                                    </g>
                                </g>
                                <g clipPath="url(#24dccf62b6)">
                                    <path fill="#9400ad" d="M 648.976562 167.058594 L 648.976562 223.09375 C 648.902344 223.09375 648.828125 223.097656 648.753906 223.097656 C 617.855469 223.097656 592.714844 197.957031 592.714844 167.058594 C 592.714844 136.160156 617.855469 111.019531 648.753906 111.019531 C 679.652344 111.019531 704.792969 136.160156 704.792969 167.058594 C 704.792969 177.097656 702.136719 186.527344 697.492188 194.6875 L 715.976562 213.171875 C 719.070312 208.671875 721.707031 203.867188 723.855469 198.789062 C 728.109375 188.734375 730.265625 178.058594 730.265625 167.058594 C 730.265625 156.058594 728.109375 145.382812 723.855469 135.328125 C 719.75 125.621094 713.875 116.902344 706.390625 109.421875 C 698.910156 101.941406 690.191406 96.0625 680.484375 91.957031 C 670.429688 87.703125 659.753906 85.546875 648.753906 85.546875 C 637.753906 85.546875 627.078125 87.703125 617.023438 91.957031 C 607.316406 96.0625 598.597656 101.941406 591.117188 109.421875 C 583.636719 116.902344 577.761719 125.621094 573.652344 135.328125 C 569.398438 145.382812 567.242188 156.058594 567.242188 167.058594 C 567.242188 178.058594 569.398438 188.734375 573.652344 198.789062 C 577.761719 208.496094 583.636719 217.214844 591.117188 224.695312 C 598.597656 232.175781 607.316406 238.050781 617.023438 242.160156 C 627.078125 246.414062 637.753906 248.570312 648.753906 248.570312 C 657.578125 248.570312 666.191406 247.175781 674.449219 244.433594 L 674.449219 228.554688 L 694.464844 248.570312 L 730.488281 248.570312 L 648.976562 167.058594 " fillOpacity="1" fillRule="nonzero" />
                                </g>
                                <g clipPath="url(#abe96b574f)">
                                    <path fill="#9400ad" d="M 557.132812 92.6875 C 557.132812 93.71875 557.035156 94.738281 556.832031 95.75 C 556.632812 96.757812 556.335938 97.738281 555.941406 98.691406 C 555.546875 99.640625 555.0625 100.542969 554.492188 101.402344 C 553.917969 102.257812 553.269531 103.046875 552.542969 103.777344 C 551.8125 104.503906 551.023438 105.15625 550.164062 105.726562 C 549.308594 106.296875 548.40625 106.78125 547.453125 107.175781 C 546.503906 107.570312 545.523438 107.867188 544.511719 108.066406 C 543.503906 108.269531 542.484375 108.371094 541.453125 108.371094 C 540.425781 108.371094 539.40625 108.269531 538.394531 108.066406 C 537.386719 107.867188 536.40625 107.570312 535.453125 107.175781 C 534.503906 106.78125 533.597656 106.296875 532.742188 105.726562 C 531.886719 105.15625 531.09375 104.503906 530.367188 103.777344 C 529.640625 103.046875 528.988281 102.257812 528.417969 101.402344 C 527.84375 100.542969 527.363281 99.640625 526.96875 98.691406 C 526.574219 97.738281 526.277344 96.757812 526.074219 95.75 C 525.875 94.738281 525.773438 93.71875 525.773438 92.6875 C 525.773438 91.660156 525.875 90.640625 526.074219 89.628906 C 526.277344 88.621094 526.574219 87.640625 526.96875 86.6875 C 527.363281 85.738281 527.84375 84.835938 528.417969 83.976562 C 528.988281 83.121094 529.640625 82.332031 530.367188 81.601562 C 531.09375 80.875 531.886719 80.222656 532.742188 79.652344 C 533.597656 79.082031 534.503906 78.597656 535.453125 78.203125 C 536.40625 77.808594 537.386719 77.511719 538.394531 77.3125 C 539.40625 77.109375 540.425781 77.007812 541.453125 77.007812 C 542.484375 77.007812 543.503906 77.109375 544.511719 77.3125 C 545.523438 77.511719 546.503906 77.808594 547.453125 78.203125 C 548.40625 78.597656 549.308594 79.082031 550.164062 79.652344 C 551.023438 80.222656 551.8125 80.875 552.542969 81.601562 C 553.269531 82.332031 553.917969 83.121094 554.492188 83.976562 C 555.0625 84.835938 555.546875 85.738281 555.941406 86.6875 C 556.335938 87.640625 556.632812 88.621094 556.832031 89.628906 C 557.035156 90.640625 557.132812 91.660156 557.132812 92.6875 Z M 557.132812 92.6875 " fillOpacity="1" fillRule="nonzero" />
                                </g>
                            </svg>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-8">
                            <div className="relative group">
                                <button className="flex items-center space-x-1 font-body font-medium hover:text-[#4F46E5] transition-colors py-2">
                                    <span>For Students</span>
                                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 pointer-events-none" />
                                </button>
                                <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-xl border border-[rgba(30,30,60,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="py-2">
                                        {studentLinks.map((link) => (
                                            <Link key={link.name} to={link.path} className="block px-4 py-2.5 text-sm text-[#0F172A] hover:bg-[#EEF2FF] hover:text-[#4F46E5] font-body transition-colors">
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <button className="flex items-center space-x-1 font-body font-medium hover:text-[#4F46E5] transition-colors py-2">
                                    <span>For Institutes</span>
                                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 pointer-events-none" />
                                </button>
                                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-xl border border-[rgba(30,30,60,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="py-2">
                                        {instituteLinks.map((link) => (
                                            <Link key={link.name} to={link.path} className="block px-4 py-2.5 text-sm text-[#0F172A] hover:bg-[#EEF2FF] hover:text-[#4F46E5] font-body transition-colors">
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link to="/blog" className="font-body font-medium hover:text-[#4F46E5] transition-colors">Blog</Link>
                            <Link to="/about" className="font-body font-medium hover:text-[#4F46E5] transition-colors">About</Link>
                        </div>

                        {/* CTAs */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link to="/book-demo" className={`px-5 py-2.5 rounded-lg font-body font-semibold text-sm transition-all border ${isScrolled ? 'border-[#0F172A] text-[#0F172A] hover:bg-gray-50' : 'border-white/30 text-white hover:bg-white/10'}`}>
                                Book a Demo
                            </Link>
                            <Link to="/prepone" className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-5 py-2.5 rounded-lg font-body font-semibold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-block">
                                Get PrepOne — Free
                            </Link>
                        </div>

                        {/* Mobile Menu Button - FIXED */}
                        <div className="md:hidden flex items-center relative z-[100]">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setMobileMenuOpen(true);
                                }}
                                /* Added bg-black/0 and touch-manipulation to force a solid hit-box for mobile taps */
                                className={`p-3 -mr-3 rounded-lg focus:outline-none bg-black/0 cursor-pointer touch-manipulation ${isScrolled ? 'text-[#0F172A] active:bg-gray-100' : 'text-white active:bg-white/10'}`}
                                aria-label="Open Menu"
                            >
                                <Menu className="w-7 h-7 pointer-events-none" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-[100] transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-display font-bold text-2xl tracking-tight text-[#0F172A]">Solviq</Link>

                    {/* Close Button - FIXED */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setMobileMenuOpen(false);
                        }}
                        className="p-3 -mr-3 rounded-lg text-[#0F172A] bg-black/0 hover:bg-gray-100 active:bg-gray-200 focus:outline-none cursor-pointer touch-manipulation"
                        aria-label="Close Menu"
                    >
                        <X className="w-7 h-7 pointer-events-none" />
                    </button>
                </div>

                <div className="px-6 flex flex-col h-[calc(100vh-80px)] justify-center space-y-6">
                    <Link to="/prepone" onClick={() => setMobileMenuOpen(false)} className="w-full bg-[#EEF2FF] text-[#4F46E5] p-8 rounded-2xl flex flex-col items-center justify-center space-y-3 group hover:bg-[#4F46E5] transition-colors shadow-sm">
                        <Smartphone className="w-10 h-10 group-hover:text-white transition-colors" />
                        <span className="font-display font-bold text-2xl group-hover:text-white transition-colors">I'm a Student</span>
                        <span className="font-body text-sm text-[#4F46E5] group-hover:text-indigo-100">Get PrepOne Free &rarr;</span>
                    </Link>
                    <Link to="/coachone" onClick={() => setMobileMenuOpen(false)} className="w-full bg-[#f7f6f2] text-[#28251d] p-8 rounded-2xl flex flex-col items-center justify-center space-y-3 group hover:bg-[#28251d] transition-colors shadow-sm">
                        <Laptop className="w-10 h-10 group-hover:text-white transition-colors" />
                        <span className="font-display font-bold text-2xl group-hover:text-white transition-colors">I Run a Coaching</span>
                        <span className="font-body text-sm text-[#64748B] group-hover:text-gray-300">Explore CoachOne &rarr;</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
