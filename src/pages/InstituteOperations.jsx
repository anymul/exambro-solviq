import { Users, CreditCard, UserCheck, Clock, Globe, Smartphone } from 'lucide-react';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import SEO from '../componenets/SEO';
import { buildBreadcrumbSchema } from '../componenets/Schema';
import {
    AppScreenshot, PageHero, FeatureSplit, IconGrid, CtaBand
} from '../componenets/coachone/ui';
import dashboardHomeImg from '../assets/coachone/dashboard-home.webp';
import feeManagementImg from '../assets/coachone/fee-management.webp';
import micrositeImg from '../assets/coachone/microsite-preview.webp';
import reviewBoosterImg from '../assets/coachone/google-review-booster.webp';

const PILLARS = [
    { icon: Users, title: 'Admissions and enrolment', text: 'Student registration, target exam and batch allocation, with an enquiry pipeline from first call to admitted.' },
    { icon: CreditCard, title: 'Fees and receipts', text: 'Fee structures, payments by cash, UPI or bank, printed receipts and a defaulter list with WhatsApp reminders.' },
    { icon: UserCheck, title: 'Attendance and absence alerts', text: 'Mark a batch from your phone and notify the parents of absent students on WhatsApp.' },
    { icon: Clock, title: 'Batches and faculty', text: 'Classes, batches and teacher assignments in one register.' },
    { icon: Globe, title: 'Institute website', text: 'A mobile-ready public page with your courses, faculty and a form for admission enquiries.' },
    { icon: Smartphone, title: 'Student app access', text: 'Share a batch code so enrolled students can practise tests and past papers on the PrepOne app.' }
];

export default function InstituteOperationsMarketingPage() {
    return (
        <div className="min-h-screen bg-white font-body selection:bg-[#01696f] selection:text-white">
            <SEO
                title="Coaching Institute Operations & Management | CoachOne"
                description="Manage admissions, automate fee collection with WhatsApp receipts, track daily attendance, and launch your institute website with CoachOne."
                keywords="coaching institute management, coaching fee collection, student attendance tracker, coaching admissions software, institute website builder"
                canonicalUrl="https://solviq.in/institute-operations"
                schema={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'CoachOne', url: '/coachone' },
                        { name: 'Institute Operations', url: '/institute-operations' }
                    ])
                ]}
            />
            <Navbar />
            <main className="coachone">
                <PageHero
                    eyebrow="Institute operations"
                    title="One dashboard to run the whole institute."
                    sub="Admissions, fees, attendance, batches and your public website, in the same place as your tests and results. No paper registers, no scattered spreadsheets."
                    location="operations_hero"
                    secondary={{ href: '#fees', label: 'See fee management' }}
                    note="Every screen on this page is the live product."
                    visual={
                        <AppScreenshot
                            src={dashboardHomeImg}
                            alt="CoachOne dashboard for an institute showing collected fees, pending fees, active students, running batches, and alerts"
                            width={2000}
                            height={1250}
                            priority
                        />
                    }
                />

                <IconGrid
                    bg="bg-white"
                    title="Everything needed to manage the academy"
                    intro="Built for Indian coaching institutes, in place of paper registers and disconnected sheets."
                    items={PILLARS}
                />

                <FeatureSplit
                    id="fees"
                    bg="bg-[#eef6f5]"
                    title="Keep fees organised, and stop chasing parents by phone"
                    points={[
                        ['Collection at a glance', 'Monthly collection progress, recent transactions and pending payments on one screen.'],
                        ['Every payment mode', 'Record cash, UPI, cheque and bank payments, with printed receipts.'],
                        ['Defaulter list', 'See who has not paid and send a WhatsApp reminder in one click.']
                    ]}
                    visual={
                        <AppScreenshot
                            src={feeManagementImg}
                            alt="CoachOne Fee Management screen showing monthly collection progress, recent transactions, pending payments and payment methods"
                            width={1800}
                            height={1125}
                        />
                    }
                >
                    Installments tracked across several spreadsheets lead to missed dues and awkward calls. CoachOne keeps each payment stage in one place.
                </FeatureSplit>

                <FeatureSplit
                    bg="bg-white"
                    flip
                    title="A website that takes admission enquiries"
                    points={[
                        ['No web developer', 'Add courses, faculty, topper ranks and fee structure from the dashboard.'],
                        ['Enquiries go to your pipeline', 'Every demo-class request lands in the admissions tracker, ready to follow up.'],
                        ['Included in every plan', 'The microsite builder comes with Starter, Growth, Scale and Enterprise.']
                    ]}
                    visual={
                        <AppScreenshot
                            src={micrositeImg}
                            alt="An institute website built with CoachOne Microsite Studio, with an admissions badge, a book-a-demo-class form and WhatsApp button"
                            width={1075}
                            height={767}
                        />
                    }
                >
                    Parents look an institute up before they call. Give them a clean, mobile-ready page with a form for a demo-class request.
                </FeatureSplit>

                <FeatureSplit
                    bg="bg-[#eef6f5]"
                    title="Collect genuine Google reviews"
                    points={[
                        ['Ask on WhatsApp', 'Send happy parents a request for a Google review after a good result.'],
                        ['Private feedback', 'Unhappy parents write to you directly instead of posting publicly.'],
                        ['Honest about rankings', 'Reviews help local discovery, but we cannot guarantee a Google rank.']
                    ]}
                    visual={
                        <AppScreenshot
                            src={reviewBoosterImg}
                            alt="CoachOne Google Review Booster showing a parent rating, star breakdown and the ask-for-reviews WhatsApp flow"
                            width={1800}
                            height={1045}
                        />
                    }
                >
                    Reviews are how new parents decide. CoachOne makes asking for them a routine part of your week.
                </FeatureSplit>

                <CtaBand
                    location="operations_final"
                    title="Run the institute without the admin headaches."
                    body="In 20 minutes we walk through fees, admissions and your website, and quote a price for your student count."
                />
            </main>
            <Footer />
        </div>
    );
}
