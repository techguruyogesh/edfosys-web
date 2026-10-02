import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Shield, Lock, Eye, Server, RefreshCw, FileText, Mail, Building2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Edfosys CRM & Cloud Platform",
  description:
    "Edfosys Privacy Policy. Learn how we collect, process, protect, and handle your data across our CRM platform, Meta Lead Ads, WhatsApp Cloud API, and web services.",
  alternates: {
    canonical: "https://edfosys.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2, 2026";

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-28 pb-20 bg-slate-50 min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#FFF9F2] to-white py-14 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-4">
              <Shield className="w-4 h-4 text-[#F7941D]" />
              <span>Legal & Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Last updated: <span className="font-semibold text-slate-800">{lastUpdated}</span>. We are committed to transparency, data minimization, and the strict protection of your information across all Edfosys platforms.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200/80 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
            
            {/* 1. Introduction */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <span>1. Introduction & Scope</span>
              </h2>
              <p>
                Edfosys (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the <strong>Edfosys CRM</strong> software-as-a-service platform, accessible via <strong>edfosys.com</strong>, <strong>*.edfosys.com</strong>, and related digital services. This Privacy Policy details our practices regarding the collection, storage, processing, and disclosure of personal data when you interact with our website, our multi-tenant CRM application, our Meta (Facebook & Instagram) integrations, and our WhatsApp Business Cloud API tools.
              </p>
              <p className="mt-2">
                By accessing or using our services, you consent to the data practices described in this policy. If you do not agree with any terms, please discontinue the use of our services immediately.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <span>2. Information We Collect</span>
              </h2>
              <p>We collect information in three categories:</p>
              
              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">A. Information You Directly Provide</h3>
                  <p className="text-sm text-slate-600">
                    When registering for an account, subscribing to a plan, or submitting contact inquiries: full name, corporate email address, contact phone number, company name, GST/Tax identification, billing address, and authorized user credentials.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">B. Customer Data Processed on Behalf of CRM Tenants</h3>
                  <p className="text-sm text-slate-600">
                    As a multi-tenant CRM provider, our business customers (&quot;Tenants&quot;) ingest and store customer prospect data (&quot;Leads&quot;). This may include prospect names, contact numbers, email addresses, course/service interests, deal values, and communication notes. <strong>Tenants remain the data controllers of their own lead databases; Edfosys acts solely as a secure data processor under strict tenant isolation.</strong>
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">C. Automatically Collected Technical Data</h3>
                  <p className="text-sm text-slate-600">
                    Browser type, operating system, IP address, device identifiers, session timestamps, and page interaction analytics collected via strictly necessary session cookies.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Meta Platform & Lead Ads Data Processing */}
            <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <Lock className="w-5 h-5 text-[#F7941D]" />
                <span>3. Meta (Facebook & Instagram) Platform Data</span>
              </h2>
              <p>
                Edfosys provides authorized integrations with Meta Technologies, Inc. (&quot;Meta&quot;), including <strong>Facebook Login for Business</strong>, <strong>Meta Lead Ads</strong>, and <strong>WhatsApp Business Cloud API</strong>.
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <strong>Lead Ads Ingestion:</strong> When a tenant connects their Facebook Page via Facebook Login, Edfosys receives a scoped Page Access Token to fetch leads submitted via that tenant&apos;s lead ad forms. Data retrieved typically includes prospect name, phone, email, and custom ad form fields.
                </li>
                <li>
                  <strong>Zero Data Sale or External Advertising:</strong> We never sell, rent, monetize, or use Meta user data or Lead Ads data for our own advertising, audience profiling, or cross-service tracking.
                </li>
                <li>
                  <strong>Tenant Scoping & Isolation:</strong> Lead data from a tenant&apos;s Facebook Page is deposited solely and strictly into that specific tenant&apos;s isolated CRM schema. No other tenant or third party can access it.
                </li>
                <li>
                  <strong>WhatsApp Messaging:</strong> Messages dispatched and received via WhatsApp Business Cloud API are transmitted via official TLS-encrypted Meta endpoints directly to the recipient.
                </li>
              </ul>
            </div>

            {/* 4. How We Use Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <span>4. Purpose of Data Processing</span>
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provisioning and maintaining your CRM tenant workspace and branch architectures.</li>
                <li>Synchronizing leads from connected channels (Facebook Lead Ads, Website Widgets, WhatsApp).</li>
                <li>Executing automated workflows, appointment reminders, and team notification routing.</li>
                <li>Processing SaaS subscription billing and invoicing through PCI-DSS compliant gateways (Razorpay).</li>
                <li>Ensuring security, diagnosing application performance bottlenecks, and preventing unauthorized account breaches.</li>
              </ul>
            </div>

            {/* 5. Data Retention & Deletion */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <span>5. Data Retention & Deletion Rights</span>
              </h2>
              <p>
                We retain personal and CRM lead data only for as long as necessary to fulfill the operational purposes outlined in this policy or as required by applicable legal, fiscal, or regulatory standards.
              </p>
              <p className="mt-2">
                <strong>User Data Deletion:</strong> Any individual whose data was captured via Facebook Lead Ads, WhatsApp, or CRM forms has the right to request the complete erasure of their personal information. For step-by-step instructions on requesting removal or submitting a Meta Data Deletion request, please visit our dedicated <Link href="/data-deletion" className="text-[#F7941D] font-bold hover:underline">User Data Deletion Instructions Page</Link>.
              </p>
            </div>

            {/* 6. Security Standards */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <span>6. Information Security & Encryption</span>
              </h2>
              <p>
                We implement industry-grade technical and organizational safeguards:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-sm">
                <li>End-to-end Transport Layer Security (TLS 1.3 / HTTPS) on all web requests and API webhooks.</li>
                <li>AES-256 encryption at rest for sensitive integration access tokens and database connection secrets.</li>
                <li>Multi-tenant logical database isolation preventing cross-tenant data leakage.</li>
                <li>Role-based access control (RBAC) permitting staff access strictly on a need-to-know basis.</li>
              </ul>
            </div>

            {/* 7. Contact Us */}
            <div className="pt-6 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">7. Contact Data Privacy Officer</h2>
              <p>
                If you have questions, feedback, or data privacy requests regarding this Privacy Policy or our Meta integrations, please contact our Data Protection Office:
              </p>
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
                <p><strong>Entity:</strong> Edfosys Technologies</p>
                <p><strong>Email:</strong> <a href="mailto:privacy@edfosys.com" className="text-[#F7941D] font-semibold hover:underline">privacy@edfosys.com</a> (or info@edfosys.com)</p>
                <p><strong>Location:</strong> Ahmedabad, Gujarat, India</p>
                <p><strong>Phone:</strong> +91 74056 72371</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
