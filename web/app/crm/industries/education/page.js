import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryHero from "@/components/crm/IndustryHero";
import EducationShowcase from "./EducationShowcase";
import IndustryCtaBanner from "@/components/crm/IndustryCtaBanner";
import FaqSection from "@/components/common/FaqSection";

export const metadata = {
  title: "Education & Coaching Institute CRM | Edfosys CRM",
  description:
    "Stop admission drop-offs. Ingest student inquiries from Meta & Google Ads, route to counselors in seconds, and automate entrance exam & fee alerts via WhatsApp Cloud API.",
  alternates: {
    canonical: "https://edfosys.com/crm/industries/education",
  },
};

export default function EducationCrmPage() {
  const metrics = [
    { value: "45%", label: "Faster Counselor First Call" },
    { value: "3.2x", label: "Inquiry to Admission Ratio" },
    { value: "98%", label: "WhatsApp Read Rate" },
    { value: "0", label: "Lost or Leaked Inquiries" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <IndustryHero
          badge="Education & Coaching Institutes"
          title="Enroll More Students."
          highlightText="Eliminate Admission Drop-Offs."
          subtitle="The purpose-built CRM for coaching institutes, private academies, and universities. Capture inquiries in real time, auto-assign counselors, and automate WhatsApp entrance exam & fee reminders."
          industrySlug="education"
          metrics={metrics}
        />

        {/* Interactive Calendly-Style Showcase & Workflow */}
        <EducationShowcase />

        {/* Problem & Solution Deep Dive */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Why Generic CRMs Fail Coaching Institutes
              </h2>
              <p className="text-slate-600 text-base">
                Generic tools like Salesforce or Hubspot require months of custom coding. Edfosys Education CRM comes pre-configured for academic intakes on day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Slow Inquiry Response</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Parents inquire with 4 competing institutes simultaneously. If your counselors take 4 hours to call, the competitor has already booked the diagnostic demo.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Unread Email Reminders</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Admit cards and exam reminders sent via email end up in the spam or promotions tab. 40% of registered students fail to show up on exam day.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xl mb-6">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">The Edfosys Fix</h3>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Instant sub-minute WhatsApp welcome, automated counselor round-robin, and verified WhatsApp reminders ensure 85%+ diagnostic test attendance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education FAQs */}
        <FaqSection
          badge="Education FAQ"
          title="Frequently Asked Questions: Education CRM"
          subtitle="How Edfosys CRM streamlines student admissions, counselor productivity, and fee collection."
          faqs={[
            {
              q: "How does Edfosys CRM accelerate student inquiry response times?",
              a: "When an inquiry is captured from Meta Ads, Google Ads, or your website, Edfosys CRM assigns it within 0.4 seconds to an active counselor and triggers an instant WhatsApp greeting with course brochures and diagnostic test links.",
            },
            {
              q: "Can multi-branch coaching institutes manage student pipelines separately?",
              a: "Yes. Edfosys CRM supports complete multi-branch hierarchy with shift-aware counselor allocation. Branch administrators only see their local campus admissions, while central leadership monitors conversion rates across all centers.",
            },
            {
              q: "Does the platform support GST fee receipts and installment plans?",
              a: "Yes. Counselors can generate compliant GST quotations and fee receipts with automated CGST/SGST breakdowns, installment tracking, and 1-click printable PDF generation.",
            },
          ]}
        />

        {/* Bottom CTA Banner */}
        <IndustryCtaBanner
          industryName="Coaching & Education"
          industrySlug="education"
          headline="Ready to Fill Your Next Batch Faster?"
          subhead="Start your 14-day free trial. Ingest leads from Facebook, Justdial, and Google within 10 minutes."
        />
      </main>

      <Footer />
    </>
  );
}
