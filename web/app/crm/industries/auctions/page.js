import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryHero from "@/components/crm/IndustryHero";
import AuctionsShowcase from "./AuctionsShowcase";
import IndustryCtaBanner from "@/components/crm/IndustryCtaBanner";

export const metadata = {
  title: "Auctions & High-Value Deals CRM | Edfosys CRM",
  description:
    "Manage consignor lots, KYC-verified bidders, live floor paddles, and automated winning bid settlements with Edfosys Auction CRM.",
};

export default function AuctionsCrmPage() {
  const metrics = [
    { value: "0", label: "Fraudulent / Defaulted Bids" },
    { value: "5 Sec", label: "WhatsApp Outbid Notification" },
    { value: "100%", label: "Automated Buyer's Premium Calc" },
    { value: "₹50Cr+", label: "Auction Lots Handled" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <IndustryHero
          badge="Auctions & High-Value Deals"
          title="Manage Bidders & Lots."
          highlightText="In One High-Security System."
          subtitle="The high-stakes CRM engineered for fine art, luxury watches, antique machinery, and real estate auctions. Register KYC-verified bidders, prevent fraud with deposit holds, and automate post-hammer settlements."
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
                Why Standard Software Fails Auction Houses
              </h2>
              <p className="text-slate-600 text-base">
                Standard CRMs cannot handle paddle number registrations, escrow deposit holds, or complex sliding buyer's premium calculations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Bidder Defaults & Fraud</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Unverified bidders place high bids and vanish after the auction, leaving auctioneers with unsold lots and furious consignors.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Post-Auction Settlement Chaos</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Calculating hammer price + tiered buyer's premium + GST on paper spreadsheets takes 48+ hours, creating invoice errors and delaying consignor payouts.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xl mb-6">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">The Edfosys Fix</h3>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Strict biometric/ID verification with deposit escrow prevents defaults, while our automated settlement engine generates compliant invoices in 3 seconds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <IndustryCtaBanner
          industryName="Auctions & High-Value Deals"
          industrySlug="auctions"
          headline="Ready to Power Your Next Auction with Confidence?"
          subhead="Start your 14-day free trial. Upload your lot catalog and configure bidder KYC verification in minutes."
        />
      </main>

      <Footer />
    </>
  );
}
