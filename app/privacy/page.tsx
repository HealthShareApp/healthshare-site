import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — HealthShare",
  description:
    "How HealthShare handles your health data: nothing is stored on our servers. Reports are written to cloud storage you own.",
};

const EFFECTIVE_DATE = "June 28, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6 bg-white dark:bg-gray-950">
        <article className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-12">
            Effective {EFFECTIVE_DATE}
          </p>

          <Section title="Summary">
            <p>
              HealthShare is designed so that we never hold your health data. Your data
              flows directly from Apple Health on your device into cloud storage you own and
              authorize. We do not operate a server that retains your health data, we do not
              sell or share it, and we do not run third-party analytics on it.
            </p>
          </Section>

          <Section title="1. Health Data (Apple HealthKit)">
            <p>
              With your explicit permission, the App reads health and fitness data from
              Apple HealthKit on your device. This data is processed locally on your device
              and written into a report file that is uploaded to the cloud storage
              destination you choose (for example, your Google Drive).
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>HealthKit data is never transmitted to HealthShare servers.</li>
              <li>HealthKit data is never used for advertising, marketing, or other use-based data mining.</li>
              <li>HealthKit data is never shared with or sold to third parties.</li>
              <li>
                You can revoke the App&rsquo;s access to HealthKit at any time in
                Settings &rsaquo; Privacy &amp; Security &rsaquo; Health.
              </li>
            </ul>
          </Section>

          <Section title="2. Cloud Storage You Authorize">
            <p>
              When you connect a cloud storage provider (such as Google Drive), the App uses
              the provider&rsquo;s OAuth flow to obtain a token scoped to a dedicated
              HealthShare folder. The token is stored in the iOS Keychain on your device.
              Generated reports are uploaded directly from your device to that folder.
            </p>
            <p>
              Your relationship with the storage provider is governed by that
              provider&rsquo;s privacy policy. You can revoke the App&rsquo;s access in your
              storage provider&rsquo;s account settings at any time.
            </p>
          </Section>

          <Section title="3. Account and Subscription Data">
            <p>
              In-app purchases and subscriptions are processed by Apple. Apple shares with
              us only the information needed to confirm and validate your purchase (such as
              an anonymized transaction identifier). We do not receive your name, email,
              billing address, or payment method. Payment processing is governed by{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00B5A3] hover:underline"
              >
                Apple&rsquo;s Privacy Policy
              </a>
              .
            </p>
          </Section>

          <Section title="4. Diagnostics">
            <p>
              The App may use Apple&rsquo;s standard crash reporting if you have opted in to
              share analytics with app developers in your iOS settings. Reports contain
              technical information (such as device model, OS version, and stack traces) but
              no health data and no personal identifiers we can tie back to you. You can
              disable this at any time in Settings &rsaquo; Privacy &amp; Security &rsaquo;
              Analytics &amp; Improvements.
            </p>
          </Section>

          <Section title="5. What We Do Not Do">
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not maintain a server-side store of your health data.</li>
              <li>We do not run third-party analytics SDKs over your health data.</li>
              <li>We do not sell, rent, or trade personal data.</li>
              <li>We do not use your health data for advertising or marketing.</li>
              <li>We do not share your data with data brokers.</li>
            </ul>
          </Section>

          <Section title="6. Children">
            <p>
              The App is not directed to children under 13, and we do not knowingly collect
              data from children under 13. If you believe a child has provided data through
              the App, please contact us so we can take appropriate action.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>
              Because we do not retain your health data, requests to access, correct,
              export, or delete that data are handled directly through Apple Health and your
              chosen cloud storage provider. For any other privacy question or request,
              contact us at the address below.
            </p>
          </Section>

          <Section title="8. Security">
            <p>
              Data in transit between your device and your cloud storage provider is
              protected by TLS. OAuth tokens are stored in the iOS Keychain. We follow
              reasonable security practices appropriate to the nature of the App; no method
              of transmission or storage is completely secure.
            </p>
          </Section>

          <Section title="9. Changes">
            <p>
              We may update this Privacy Policy from time to time. If changes are material,
              we will provide reasonable notice through the App or by updating the effective
              date above.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              For privacy questions or requests, contact us at{" "}
              <a
                href="mailto:alexander.kaigorodow@gmail.com"
                className="text-[#00B5A3] hover:underline"
              >
                alexander.kaigorodow@gmail.com
              </a>
              .
            </p>
          </Section>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
