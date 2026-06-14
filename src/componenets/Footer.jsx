import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react'; // Removed the brand imports!

// --- Custom Brand SVGs ---
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.961h-1.96z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
);


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0F1117] text-white pt-20 pb-10 border-t border-white/10 font-body">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section: Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="inline-flex items-center cursor-pointer mb-6">
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
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                            We build AI-powered tools that make learning measurable, exam preparation precise, and educational outcomes predictable. Stop guessing. Start engineering your success.
                        </p>

                        {/* Social Icons using Custom SVGs */}
                        <div className="flex items-center space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4F46E5] hover:border-[#4F46E5] transition-all">
                                <TwitterIcon />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4F46E5] hover:border-[#4F46E5] transition-all">
                                <LinkedinIcon />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4F46E5] hover:border-[#4F46E5] transition-all">
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>

                    {/* Products Column */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="font-display font-bold text-lg mb-6 text-white">Products</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/prepone" className="text-gray-400 hover:text-[#818CF8] text-sm transition-colors flex items-center group">
                                    PrepOne <span className="text-[10px] bg-indigo-500/20 text-indigo-300 ml-2 px-2 py-0.5 rounded-full border border-indigo-500/30">Students</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/coachone" className="text-gray-400 hover:text-[#5EEAD4] text-sm transition-colors flex items-center group">
                                    CoachOne <span className="text-[10px] bg-teal-500/20 text-teal-300 ml-2 px-2 py-0.5 rounded-full border border-teal-500/30">Institutes</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Pricing</Link>
                            </li>
                            <li>
                                <Link to="/book-demo" className="text-gray-400 hover:text-white text-sm transition-colors block">Book a Demo</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="lg:col-span-3">
                        <h4 className="font-display font-bold text-lg mb-6 text-white">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Bihar Board PYQs</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors block">CBSE Mock Tests</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors block">AI Evaluation Guide</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors block">The SolvIQ Blog</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="lg:col-span-2">
                        <h4 className="font-display font-bold text-lg mb-6 text-white">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors block">About Us</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Careers</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Privacy Policy</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Terms of Service</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Newsletter / Contact Strip */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between mb-12">
                    <div className="mb-6 md:mb-0">
                        <h4 className="font-bold text-white mb-1 flex items-center">
                            <Mail className="w-5 h-5 mr-2 text-[#4F46E5]" />
                            Stay ahead of the curve.
                        </h4>
                        <p className="text-gray-400 text-sm">Get educational insights and product updates delivered to your inbox.</p>
                    </div>
                    <div className="flex w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-[#0F1117] border border-white/20 text-white px-4 py-2.5 rounded-l-lg focus:outline-none focus:border-[#4F46E5] w-full md:w-64 text-sm"
                        />
                        <button className="bg-[#4F46E5] hover:bg-[#4338CA] px-5 py-2.5 rounded-r-lg text-sm font-bold transition-colors flex items-center">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm">
                    <p>&copy; {currentYear} SolvIQ India Pvt Ltd. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex items-center space-x-2">
                        <span>Made with</span>
                        <span className="text-red-500">♥</span>
                        <span>in India.</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
