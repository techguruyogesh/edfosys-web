import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryHero from "@/components/crm/IndustryHero";
import AuctionsShowcase from "./AuctionsShowcase";
import IndustryCtaBanner from "@/components/crm/IndustryCtaBanner";
import FaqSection from "@/components/common/FaqSection";

export const metadata = {
  title: "Auctions & High-Value Deals CRM | Edfosys CRM",
  description:
    "Manage consignor inquiries, buyer verification pipelines, private treaty negotiations, and settlement invoicing with Edfosys CRM.",
  alternates: {
    canonical: "https://edfosys.com/crm/industries/auctions",
  },
};

export default function AuctionsCrmPage() {
  const metrics = [
    { value: "0.4s", label: "Instant Buyer Ingestion" },
    { value: "5 Sec", label: "WhatsApp Catalog Delivery" },
    { value: "100%", label: "Automated GST Invoicing" },
    { value: "100%", label: "Tenant Database Isolation" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <IndustryHero
          badge="Auctions & High-Value Deals"
          title="Manage Deals & Inquiries."
          highlightText="In One High-Security System."
          subtitle="The high-stakes CRM engineered for luxury assets, fine art, capital equipment, and high-value deal brokerage. Ingest qualified buyer inquiries, track negotiation stages, and automate settlement invoicing with ease."
          industrySlug="auctions"
          metrics={metrics}
        />

        {/* Interactive Calendly-Style Showcase & Workflow Grid */}
        <AuctionsShowcase />

        {/* Problem & Solution Deep Dive */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Why Generic CRMs Fail High-Value Deal Brokers
              </h2>
              <p className="text-slate-600 text-base">
                Standard CRMs lack physical database isolation, customized high-ticket negotiation stages, and fast GST-compliant invoicing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Slow Inquiry Response</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  High-net-worth buyers lose interest when inquiry follow-ups take hours. Without instant WhatsApp dispatch, deals slip away.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Settlement & Invoicing Chaos</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Calculating commission rates, taxes, and advance receipts on disconnected spreadsheets creates accounting errors and payment delays.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xl mb-6">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">The Edfosys Fix</h3>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Instant sub-second lead capture, automated round-robin sales rep routing, and 1-click GST invoice generation keep transactions smooth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Auctions FAQs */}
        <FaqSection
          badge="Auctions FAQ"
          title="Frequently Asked Questions: Auctions & Deals CRM"
          subtitle="How Edfosys CRM powers high-value deal pipelines, consignor relationships, and settlement invoicing."
          faqs={[
            {
              q: "How does Edfosys CRM support auction houses and high-value asset dealers?",
              a: "Edfosys CRM streamlines consignor valuation tracking, bidder inquiry qualification, private treaty deal stages, and settlement invoicing. It maintains complete records of valuation notes, KYC proofs, and transaction milestones.",
            },
            {
              q: "Can we broadcast private catalog PDFs via WhatsApp to accredited buyers?",
              a: "Yes. Edfosys CRM connects with the official Meta WhatsApp Cloud API to deliver password-protected PDF lot catalogs and preview invitations directly to verified high-net-worth buyers with full delivery tracking.",
            },
            {
              q: "How are buyer KYC documents and buyer premium invoices managed?",
              a: "Buyer identity proofs and escrow documentation are stored in secure cloud document storage with role-based access. Once a transaction is agreed, our invoicing engine generates compliant tax invoices including hammer prices and buyer premium breakdowns.",
            },
          ]}
        />

        {/* Bottom CTA Banner */}
        <IndustryCtaBanner
          industryName="Auctions & High-Value Deals"
          industrySlug="auctions"
          headline="Ready to Power Your Deal Pipeline with Confidence?"
          subhead="Start your 14-day free trial. Configure your deal pipeline and automated WhatsApp follow-ups in minutes."
        />
      </main>

      <Footer />
    </>
  );
}
