import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryHero from "@/components/crm/IndustryHero";
import B2bServicesShowcase from "./B2bServicesShowcase";
import IndustryCtaBanner from "@/components/crm/IndustryCtaBanner";
import FaqSection from "@/components/common/FaqSection";

export const metadata = {
  title: "IT & B2B Service Agency CRM | Edfosys CRM",
  description:
    "Close high-ticket B2B contracts with predictable pipelines. Track multi-stakeholder deals, proposal views, sprint milestones, and recurring retainer invoices with Edfosys CRM.",
  alternates: {
    canonical: "https://edfosys.com/crm/industries/b2b-services",
  },
};

export default function B2bServicesCrmPage() {
  const metrics = [
    { value: "35%", label: "Shorter B2B Sales Cycles" },
    { value: "4x", label: "Faster Proposal Follow-ups" },
    { value: "100%", label: "On-Time Milestone Invoicing" },
    { value: "₹0", label: "Forgotten Retainer Renewals" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <IndustryHero
          badge="IT & B2B Service Agencies"
          title="Close High-Ticket Deals."
          highlightText="With Predictable Sales Pipelines."
          subtitle="The enterprise CRM tailored for software consultancies, design studios, and corporate service providers. Manage complex multi-stakeholder deals, track live proposal opens, and automate milestone invoicing."
          industrySlug="b2b-services"
          metrics={metrics}
        />

        {/* Interactive Calendly-Style Showcase & Workflow */}
        <B2bServicesShowcase />

        {/* Problem & Solution Deep Dive */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Why Standard CRMs Fail B2B Service Agencies
              </h2>
              <p className="text-slate-600 text-base">
                Generic sales tools are built for high-volume, low-ticket transactions. They fail when deals take 6 weeks and involve 4 corporate decision-makers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Proposal Black Holes</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  You spend 10 hours drafting a custom technical proposal and email it as an attachment, only to be met with total silence and zero visibility.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Delayed Milestone Billing</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Engineering finishes the sprint, but finance doesn't find out until two weeks later. Unbilled milestone receivables crush your cash flow.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xl mb-6">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">The Edfosys Fix</h3>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Automated quotation generation and structured stage-gate qualification ensure deals progress swiftly, while automated milestone invoicing ensures immediate cash collection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* B2B Services FAQs */}
        <FaqSection
          badge="B2B Services FAQ"
          title="Frequently Asked Questions: B2B Services CRM"
          subtitle="How Edfosys CRM helps digital agencies, IT service firms, and consultancies scale their enterprise deal flow."
          faqs={[
            {
              q: "How does Edfosys CRM help IT agencies and B2B consultancies close deals faster?",
              a: "Edfosys CRM provides multi-stage deal tracking tailored for consultative B2B sales cycles. You can manage stakeholder notes, track proposal dispatch, schedule follow-up triggers, and convert accepted quotes into GST invoices with one click.",
            },
            {
              q: "Can we generate multi-item Statements of Work (SOW) and GST quotes?",
              a: "Yes. Edfosys CRM includes a native quotation builder that allows itemized scope deliverables, hourly or fixed pricing, CGST/SGST/IGST tax calculation, and 1-click export into branded client-ready PDFs.",
            },
            {
              q: "Can we track recurring retainer contracts and renewal deadlines?",
              a: "Yes. You can manage client billing accounts, track retainer terms, and receive automated reminders before contracts expire to ensure zero revenue leakage.",
            },
          ]}
        />

        {/* Bottom CTA Banner */}
        <IndustryCtaBanner
          industryName="IT & B2B Services"
          industrySlug="b2b-services"
          headline="Ready to Accelerate Your Enterprise Deal Pipeline?"
          subhead="Start your 14-day free trial. Set up your consultative sales stages and proposal tracking in minutes."
        />
      </main>

      <Footer />
    </>
  );
}
