import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryHero from "@/components/crm/IndustryHero";
import RealEstateShowcase from "./RealEstateShowcase";
import IndustryCtaBanner from "@/components/crm/IndustryCtaBanner";
import FaqSection from "@/components/common/FaqSection";

export const metadata = {
  title: "Real Estate & Builders CRM | Edfosys CRM",
  description:
    "Sell properties faster. Automate site visit follow-ups, instant WhatsApp brochure broadcasts, buyer qualification pipelines, and source attribution with Edfosys Real Estate CRM.",
  alternates: {
    canonical: "https://edfosys.com/crm/industries/real-estate",
  },
};

export default function RealEstateCrmPage() {
  const metrics = [
    { value: "60%", label: "Higher Site Visit Attendance" },
    { value: "0", label: "Lost Buyer Inquiries" },
    { value: "5 Sec", label: "WhatsApp Brochure Delivery" },
    { value: "100%", label: "Lead Source Attribution" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <IndustryHero
          badge="Real Estate & Property Developers"
          title="Sell Properties Faster."
          highlightText="Automate Site Visits & Buyer Pipeline."
          subtitle="The modern CRM built for property developers, builders, and sales teams. Ingest leads from Facebook & portals, schedule site visit follow-ups, and broadcast WhatsApp project brochures with 1 click."
          industrySlug="real-estate"
          metrics={metrics}
        />

        {/* Interactive Calendly-Style Showcase & Workflow */}
        <RealEstateShowcase />

        {/* Problem & Solution Deep Dive */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Why Standard CRMs Fail Real Estate Developers
              </h2>
              <p className="text-slate-600 text-base">
                Generic CRMs lack instant WhatsApp follow-up cadences, automated sales rep distribution, and site visit tracking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Missed Site Visits</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Buyers book visits on Sunday but forget because reps only send an email or make a single call. No-show rates routinely exceed 50%.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Unclear Lead Attribution</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Without automated phone number deduplication and source tracking, multiple campaigns or marketing channels claim the same buyer inquiry.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xl mb-6">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">The Edfosys Fix</h3>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Instant sub-second lead capture, automated round-robin sales rep allocation, and verified WhatsApp reminders ensure 85%+ site visit attendance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Estate FAQs */}
        <FaqSection
          badge="Real Estate FAQ"
          title="Frequently Asked Questions: Real Estate CRM"
          subtitle="How Edfosys CRM helps property developers, builders, and agencies maximize site visits and sales velocity."
          faqs={[
            {
              q: "How does WhatsApp automation improve real estate site visit attendance?",
              a: "When a buyer schedules a site visit, Edfosys CRM triggers an automated WhatsApp confirmation with project location pins, parking guidance, and digital brochures. Automated reminders sent 24 hours and 2 hours prior reduce no-shows by up to 60%.",
            },
            {
              q: "Can we track lead attribution for channel partners and external brokers?",
              a: "Yes. Edfosys CRM provides source attribution across digital ad campaigns, property portals, and channel partner networks. Automated phone and email deduplication prevents commission conflicts between internal sales reps and external brokers.",
            },
            {
              q: "How do project managers prevent buyer inquiry leakage during weekend campaigns?",
              a: "Our automated round-robin engine distributes incoming weekend leads immediately to active on-duty sales executives. If an executive does not log an activity or update stage within a specified SLA, the lead is automatically escalated to a team lead.",
            },
          ]}
        />

        {/* Bottom CTA Banner */}
        <IndustryCtaBanner
          industryName="Real Estate & Builders"
          industrySlug="real-estate"
          headline="Ready to Accelerate Your Project Sales?"
          subhead="Start your 14-day free trial. Connect your Meta Lead Ads and configure your project pipeline in minutes."
        />
      </main>

      <Footer />
    </>
  );
}
