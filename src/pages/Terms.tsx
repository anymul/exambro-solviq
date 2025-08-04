import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardContent className="space-y-4 pt-6">
          <h1 className="text-3xl font-bold">Terms of Service – ExamBro by SolvIQ.in</h1>
          <p className="text-sm text-muted-foreground">Effective Date: August 4, 2025</p>

          <Separator />

          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By creating an account, downloading, or using the ExamBro app, you agree to comply with and be legally
            bound by these Terms. If you do not agree to any part, you should not use the app.
          </p>

          <h2 className="text-xl font-semibold">2. Eligibility</h2>
          <p>You must be at least 13 years old to use ExamBro. Users below this age must have parental or guardian consent.</p>

          <h2 className="text-xl font-semibold">3. User Account</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You must provide accurate and complete information while creating your account.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>You agree not to share your account with others or impersonate someone else.</li>
          </ul>

          <h2 className="text-xl font-semibold">4. Use of the App</h2>
          <p>You agree to use the app only for lawful purposes, specifically for your academic learning and test preparation.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>No fraudulent or malicious activity</li>
            <li>No attempts to gain unauthorized access</li>
            <li>No disruption to the service</li>
            <li>No upload of viruses or harmful content</li>
          </ul>

          <h2 className="text-xl font-semibold">5. Content and Intellectual Property</h2>
          <p>
            All content in the app—including text, graphics, logos, mock tests, and question banks—is the property of
            SolvIQ.in or its partners. You may use the content only for personal, non-commercial purposes.
          </p>

          <h2 className="text-xl font-semibold">6. Advertisements and Third-Party Links</h2>
          <p>
            ExamBro may display ads and link to external services. We are not responsible for content or privacy
            practices of third-party sites.
          </p>

          <h2 className="text-xl font-semibold">7. Data and Privacy</h2>
          <p>
            Your data is collected and processed as outlined in our{" "}
            <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>. By using ExamBro,
            you consent to these practices.
          </p>

          <h2 className="text-xl font-semibold">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access at any time, with or without notice,
            if you violate these Terms or harm the service or other users.
          </p>

          <h2 className="text-xl font-semibold">9. Disclaimer of Warranty</h2>
          <p>
            The app is provided "as is" and "as available". We do not guarantee uninterrupted service or error-free performance.
          </p>

          <h2 className="text-xl font-semibold">10. Limitation of Liability</h2>
          <p>
            SolvIQ.in shall not be liable for indirect or incidental damages arising from the use or inability to use the app.
          </p>

          <h2 className="text-xl font-semibold">11. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. You will be notified of major changes. Continued use of the app implies acceptance.
          </p>

          <h2 className="text-xl font-semibold">12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Disputes will be subject to the jurisdiction of courts in Siwan, Bihar.
          </p>

          <h2 className="text-xl font-semibold">13. Contact Us</h2>
          <p>For any questions or issues, please contact us at: <strong>anmol4979199@gmail.com</strong></p>
        </CardContent>
      </Card>
    </div>
  )
}
