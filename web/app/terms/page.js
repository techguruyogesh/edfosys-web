import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { FileText, Shield, CheckCircle, AlertCircle, Scale } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Edfosys CRM & Cloud Platform",
  description:
    "Edfosys Terms of Service and Conditions. Understand your rights, acceptable use policies, SaaS subscriptions, and compliance requirements.",
  alternates: {
    canonical: "https://edfosys.com/terms",
  },
};

export default function TermsPage() {
  const lastUpdated = "October 2, 2026";

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-28 pb-20 bg-slate-50 min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#FFF9F2] to-white py-14 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-4">
              <Scale className="w-4 h-4 text-[#F7941D]" />
              <span>User Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Last updated: <span className="font-semibold text-slate-800">{lastUpdated}</span>. Please review these terms governing your subscription and usage of Edfosys software and digital integrations.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200/80 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
            
            {/* 1. Agreement */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">1. Agreement to Terms</h2>
              <p>
                These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between <strong>Edfosys Technologies</strong> (&quot;Edfosys&quot;, &quot;we&quot;, &quot;our&quot;) and the organization or individual (&quot;Subscriber&quot;, &quot;Tenant&quot;, &quot;you&quot;) subscribing to or accessing our multi-tenant CRM, websites, APIs, or integration services.
              </p>
              <p className="mt-2">
                By registering an account, subscribing to a SaaS plan, or authorizing third-party integrations (such as Meta Lead Ads or WhatsApp Cloud API), you certify that you possess the legal authority to bind your organization to these Terms.
              </p>
            </div>

            {/* 2. SaaS License & Tenant Workspace */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">2. SaaS License & Workspace Access</h2>
              <p>
                Subject to timely payment of applicable subscription fees and continuous compliance with these Terms, Edfosys grants you a non-exclusive, non-transferable, revocable license to access and use the Edfosys CRM platform across your designated branch offices and authorized team members.
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-slate-600">
                <li>You are solely responsible for safeguarding the credentials of all user accounts created under your tenant workspace.</li>
                <li>You must not reverse engineer, decompile, resell, or distribute the platform source code without express written authorization.</li>
                <li>Workspaces are provisioned under logical tenant isolation; attempting to compromise adjacent tenant boundaries is strictly prohibited.</li>
              </ul>
            </div>

            {/* 3. Acceptable Use & Meta/WhatsApp Compliance */}
            <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-[#F7941D]" />
                <span>3. Acceptable Use & Third-Party Platform Policies</span>
              </h2>
              <p>
                When utilizing connected communication channels, including Meta Lead Ads and WhatsApp Business Cloud API, you strictly agree:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <strong>Anti-Spam & Consent:</strong> You may only dispatch broadcast campaigns or outbound communications to prospects who have explicitly provided opt-in consent to receive business messages from your organization.
                </li>
                <li>
                  <strong>Meta Developer & WhatsApp Business Policies:</strong> You agree to abide fully by Meta&apos;s Commercial Terms, WhatsApp Business Messaging Policies, and Content Guidelines. You will not transmit fraudulent, abusive, hateful, or prohibited products/services.
                </li>
                <li>
                  <strong>Account Revocation:</strong> Violations resulting in Meta account bans or phone number quality downgrades are the sole responsibility of the Subscriber. Edfosys reserves the right to suspend integration access if abusive messaging patterns threaten platform-wide deliverability.
                </li>
              </ul>
            </div>

            {/* 4. Data Ownership & Intellectual Property */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">4. Customer Data Ownership</h2>
              <p>
                <strong>You retain 100% full and exclusive ownership of all lead records, contact lists, financial milestones, and communication logs stored within your tenant workspace.</strong>
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Edfosys does not claim any intellectual property rights over your customer data. We process and store your data solely to execute the features of the CRM on your behalf. You may export your records at any time via CSV or REST APIs.
              </p>
            </div>

            {/* 5. Subscriptions, Invoicing & Billing */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">5. Subscriptions, Fees & Payment Terms</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Recurring Billing:</strong> SaaS subscription plans are billed on a recurring monthly or annual basis as selected during registration or upgrade.
                </li>
                <li>
                  <strong>Meta API Usage Costs:</strong> Conversation fees, marketing broadcast template charges, and utility messaging rates charged by Meta Platforms for WhatsApp messages are billed directly to your Meta Payment Method or pass-through account.
                </li>
                <li>
                  <strong>Taxes:</strong> All fees are exclusive of applicable Indian Goods and Services Tax (GST) or international taxes, which will be invoiced in accordance with statutory regulations.
                </li>
                <li>
                  <strong>Refunds:</strong> SaaS subscriptions are non-refundable once the billing cycle commences, except where mandated by statutory law.
                </li>
              </ul>
            </div>

            {/* 6. Availability & Service Levels */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">6. Service Availability & Maintenance</h2>
              <p>
                We strive to maintain 99.9% uptime across our production infrastructure. Scheduled maintenance windows will be communicated in advance whenever feasible. Edfosys is not liable for disruptions resulting from upstream cloud providers, Meta API outages, or internet connectivity issues outside our direct control.
              </p>
            </div>

            {/* 7. Limitation of Liability */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">7. Limitation of Liability</h2>
              <p className="text-sm text-slate-600">
                To the maximum extent permitted by applicable law, in no event shall Edfosys Technologies, its directors, or its affiliates be liable for indirect, incidental, punitive, or consequential damages, including loss of profits, data corruption, or business interruption arising out of the use or inability to use our services.
              </p>
            </div>

            {/* 8. Governing Law & Jurisdiction */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">8. Governing Law & Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the substantive laws of the Republic of India. Any legal dispute or controversy arising out of these Terms shall be subject to the exclusive jurisdiction of the competent commercial courts in <strong>Ahmedabad, Gujarat, India</strong>.
              </p>
            </div>

            {/* 9. Contact */}
            <div className="pt-6 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">9. Legal Questions</h2>
              <p>For inquiries regarding these Terms & Conditions, please contact:</p>
              <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
                <p><strong>Legal Department:</strong> Edfosys Technologies</p>
                <p><strong>Email:</strong> <a href="mailto:info@edfosys.com" className="text-[#F7941D] font-semibold hover:underline">info@edfosys.com</a></p>
                <p><strong>Jurisdiction:</strong> Ahmedabad, Gujarat, India</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
