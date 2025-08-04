import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardContent className="space-y-4 pt-6">
          <h1 className="text-3xl font-bold">Privacy Policy for ExamBro by SolvIQ.in</h1>
          <p className="text-sm text-muted-foreground">Effective Date: August 4, 2025</p>

          <Separator />

          <p>
            At <strong>SolvIQ.in</strong>, we respect your privacy and are committed to protecting
            the personal information you provide while using our mobile application, <strong>ExamBro</strong>.
            This Privacy Policy outlines how we collect, use, store, and safeguard your data.
          </p>

          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Personal Information:</strong> Name, email address, and student class</li>
            <li><strong>Authentication Details:</strong> Login credentials (Google Sign-In or email/password)</li>
            <li><strong>Usage Data:</strong> App interactions and analytics for performance</li>
          </ul>

          <h2 className="text-xl font-semibold">2. How We Use Your Data</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Create and manage your user account</li>
            <li>Provide personalized learning content and track progress</li>
            <li>Enhance user experience and optimize performance</li>
            <li>Analyze trends to improve the app</li>
            <li>Serve relevant ads (with user consent, where required)</li>
          </ul>

          <h2 className="text-xl font-semibold">3. Third-Party Services</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Google Sign-In & Firebase Auth:</strong> Secure login</li>
            <li><strong>Firebase Analytics:</strong> App usage tracking</li>
            <li><strong>MongoDB Atlas:</strong> Secure data storage</li>
            <li><strong>Ad Services:</strong> For in-app ads</li>
          </ul>
          <p>These services may collect information as governed by their respective privacy policies.</p>

          <h2 className="text-xl font-semibold">4. Data Sharing and Disclosure</h2>
          <p>
            We <strong>do not sell or rent</strong> your personal data. Your data may be shared
            only with third-party services essential for app functionality or legal compliance.
          </p>

          <h2 className="text-xl font-semibold">5. Your Rights</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Access:</strong> You can view your data</li>
            <li><strong>Deletion:</strong> You may request account/data deletion</li>
            <li><strong>Support:</strong> Contact us at <strong>anmol4979199@gmail.com</strong></li>
          </ul>

          <h2 className="text-xl font-semibold">6. Data Security</h2>
          <p>
            We use industry-standard practices to protect your information.
            However, no online method is completely secure.
          </p>

          <h2 className="text-xl font-semibold">7. Children’s Privacy</h2>
          <p>
            ExamBro is designed for students in classes 10 to 12. We do not knowingly collect
            information from children under 13 without parental consent.
          </p>

          <h2 className="text-xl font-semibold">8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be communicated via the app or email.
          </p>

          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>
            For privacy-related inquiries, email us at: <strong>anmol4979199@gmail.com</strong>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
