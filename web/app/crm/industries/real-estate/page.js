import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryHero from "@/components/crm/IndustryHero";
import RealEstateShowcase from "./RealEstateShowcase";
import IndustryCtaBanner from "@/components/crm/IndustryCtaBanner";

export const metadata = {
  title: "Real Estate & Builders CRM | Edfosys CRM",
  description:
    "Sell properties faster. Automate site visit scheduling, instant WhatsApp brochure broadcasts, unit inventory tracking, and broker commission payouts with Edfosys Real Estate CRM.",
};

export default function RealEstateCrmPage() {
  const metrics = [
    { value: "60%", label: "Higher Site Visit Attendance" },
    { value: "0", label: "Double-Sold Unit Conflicts" },
    { value: "5 Sec", label: "WhatsApp Brochure Delivery" },
    { value: "100%", label: "Channel Partner Lead Protection" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <IndustryHero
          badge="Real Estate & Property Developers"
          title="Sell Properties Faster."
          highlightText="Automate Site Visits & Inventory."
          subtitle="The modern CRM built for property developers, builders, and channel partners. Ingest leads from Facebook & portals, schedule site visits effortlessly, and broadcast WhatsApp brochures with 1 click."
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
                Generic CRMs lack floor plate inventory grids, site visit geo-tracking, and broker attribution rules.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Broker Attribution Disputes</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Two different brokers bring the same buyer. Without timestamped QR-lead registration, commissions turn into legal and relationship disputes.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xl mb-6">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">The Edfosys Fix</h3>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Automated WhatsApp location pins and cab dispatch alerts boost visit attendance to 85%+, while our 90-day RERA broker ledger eliminates disputes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <IndustryCtaBanner
          industryName="Real Estate & Builders"
          industrySlug="real-estate"
          headline="Ready to Accelerate Your Project Sales?"
          subhead="Start your 14-day free trial. Upload your unit inventory and connect your Meta Lead Ads in minutes."
        />
      </main>

      <Footer />
    </>
  );
}
