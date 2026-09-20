"use client";

import CalendlyShowcase from "@/components/crm/CalendlyShowcase";
import CalendlyWorkflowGrid from "@/components/crm/CalendlyWorkflowGrid";
import {
  Gavel,
  ShieldCheck,
  Package,
  MessageSquare,
  DollarSign,
  CheckCircle2,
  Award,
  AlertTriangle,
  TrendingUp,
  Send,
  FileCheck,
} from "lucide-react";

export default function AuctionsShowcase() {
  const showcaseTabs = [
    {
      id: "lot-registry",
      label: "Asset & Consignor Pipeline",
      badge: "Asset Valuation",
      icon: Package,
      headline: "Track Consignor Inquiries, Valuations & Appraisal Records",
      desc: "Streamline high-value asset intake. Manage collector inquiries for luxury timepieces, fine art, capital equipment, and properties with documented appraisal history and agreed reserve estimates.",
      bullets: [
        "Document vault for authenticity certificates & provenance",
        "Confidential valuation and reserve price tracking",
        "Structured intake pipeline from inquiry to catalog approval",
      ],
      secondaryLink: "/crm/features",
      secondaryLabel: "See lot management tools →",
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold text-slate-800">Lot #408 — Patek Philippe 1974</div>
              <div className="text-[10px] text-slate-500">Consignor: Heritage Collectibles Ltd</div>
            </div>
            <span className="text-[10px] font-bold bg-amber-50 text-amber-800 px-2.5 py-1 rounded-full">
              Condition: Mint A+
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-slate-500 text-[10px]">Confidential Reserve:</span>
                <div className="font-bold text-slate-800">₹14,00,000</div>
              </div>
              <div className="text-right">
                <span className="text-slate-500 text-[10px]">Estimated Range:</span>
                <div className="font-extrabold text-[#0C3246]">₹18L - ₹22L</div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Provenance Verified: Original Papers</div>
                <div className="text-[10px] text-slate-500">Box, Guarantee Certificate & Service History</div>
              </div>
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[10px] text-slate-600 flex justify-between items-center">
            <span>Lot Status: <strong>Approved for Catalog</strong></span>
            <span className="text-emerald-600 font-bold">Catalog Ready</span>
          </div>
        </div>
      ),
    },
    {
      id: "bidder-kyc",
      label: "Buyer Verification & Records",
      badge: "Document Verification",
      icon: ShieldCheck,
      headline: "Verify High-Net-Worth Buyers & Maintain Confidential Records",
      desc: "Eliminate unqualified inquiries. Collect and verify identity documents, track buyer qualification stages, and store client records securely in your isolated tenant database.",
      bullets: [
        "Government ID and business verification document vault",
        "Physical tenant database isolation for complete client confidentiality",
        "Custom qualification tags for high-intent collector accounts",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
            <span className="font-bold text-slate-800">Approved Buyer Profile</span>
            <span className="text-[10px] font-bold text-emerald-600">KYC Verified</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/40 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0C3246] text-white flex items-center justify-center font-bold text-xs">
                  HS
                </div>
                <div>
                  <div className="font-bold text-slate-900">Harshavardhan Singhania</div>
                  <div className="text-[10px] text-slate-500">ID: PAN & Passport Verified</div>
                </div>
              </div>
              <span className="text-[10px] font-extrabold bg-emerald-600 text-white px-2 py-0.5 rounded">
                Tier 1 Collector
              </span>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                  PB
                </div>
                <div>
                  <div className="font-bold text-slate-800">International Collector (Zurich)</div>
                  <div className="text-[10px] text-slate-500">Interested in Vintage Timepieces</div>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-slate-600">Private Treaty</span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-orange-50 border border-orange-100 text-[10px] text-orange-900 flex justify-between items-center font-semibold">
            <span>Client Financial Data: <strong>Encrypted at Rest</strong></span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F7941D]" />
          </div>
        </div>
      ),
    },
    {
      id: "outbid-alerts",
      label: "WhatsApp Catalog Broadcast",
      badge: "Instant Engagement",
      icon: MessageSquare,
      headline: "Broadcast High-Resolution Catalogs & Price Alerts via WhatsApp",
      desc: "Engage top buyers on their preferred channel. Send high-resolution PDF catalogs, lot inspection schedules, and private treaty pricing directly via official Meta WhatsApp templates.",
      bullets: [
        "Instant PDF catalog and lot condition report delivery",
        "Pre-approved Meta WhatsApp templates with 98% open rates",
        "One-click callback and private viewing scheduler",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-[#EFEAE2] rounded-2xl shadow-xl p-4 space-y-3 font-sans">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-300/60">
            <div className="w-7 h-7 rounded-full bg-[#0C3246] text-white flex items-center justify-center font-bold text-[10px]">
              H
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 flex items-center">
                Heritage Auctions <CheckCircle2 className="w-3 h-3 text-blue-500 ml-1 fill-blue-500 text-white" />
              </div>
              <div className="text-[9px] text-slate-500">Verified Business Account</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm space-y-2 text-xs text-slate-800">
            <p className="font-semibold text-slate-900">
              Dear Collector, the Autumn Fine Art & Luxury Timepieces catalog is now live.
            </p>
            <div className="p-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                PDF
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold text-slate-800">Autumn_2026_Catalog.pdf</div>
                <div className="text-[9px] text-slate-400">18.5 MB • High-Resolution Lots</div>
              </div>
            </div>
            <div className="pt-1 flex gap-2">
              <button className="flex-1 py-1.5 bg-[#0C3246] text-white font-bold rounded-lg text-[10px] text-center">
                Schedule Private Viewing
              </button>
            </div>
            <div className="text-[9px] text-right text-slate-400">08:44 PM ✓✓</div>
          </div>
        </div>
      ),
    },
    {
      id: "settlement-engine",
      label: "Settlement & Buyer's Premium",
      badge: "Instant Invoicing",
      icon: DollarSign,
      headline: "Automate Buyer's Premium, GST & Consignor Payouts",
      desc: "Eliminate 48 hours of manual math after the auction hammer falls. Instantly calculate the hammer price, 12% buyer's premium, applicable GST, and generate compliant invoices for winning bidders.",
      bullets: [
        "Dynamic buyer's premium calculation (e.g. 10% to 15% sliding tier)",
        "Instant WhatsApp invoice delivery with wire transfer details",
        "Consignor settlement ledger with commission deduction statement",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 space-y-3">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-900">Hammer Settlement: Lot #408</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Winning Bid: ₹19,00,000
            </span>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Hammer Price</span>
              <span className="font-semibold text-slate-800">₹19,00,000</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Buyer's Premium (12%)</span>
              <span className="font-semibold text-slate-800">₹2,28,000</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>GST on Premium (18%)</span>
              <span className="font-semibold text-slate-800">₹41,040</span>
            </div>
            <div className="pt-2 border-t border-slate-100 flex justify-between font-extrabold text-slate-900">
              <span>Total Invoice Amount</span>
              <span className="text-[#0C3246]">₹21,69,040</span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100 text-[10px] text-emerald-800 flex justify-between items-center font-medium">
            <span>Settlement Dispatched via WhatsApp</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
        </div>
      ),
    },
  ];

  const workflowSteps = [
    {
      title: "Consign & Catalog",
      timing: "Curation",
      desc: "Intake luxury assets from sellers, record provenance history, establish confidential reserves, and produce auction catalogs.",
      bullets: [
        { text: "Detailed condition grade & provenance vault", icon: Award },
        { text: "Confidential reserve price protection", icon: ShieldCheck },
        { text: "Digital consignment contract generation", icon: FileCheck },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-800">
            <span>Consignment Approved</span>
            <span className="text-emerald-600">Cataloged</span>
          </div>
          <div className="text-[10px] text-slate-500">Asset: Vintage MF Husain Canvas (1984)</div>
          <div className="text-[9px] text-blue-600 font-semibold">Reserve: ₹85,00,000 Confirmed</div>
        </div>
      ),
    },
    {
      title: "KYC & Paddle",
      timing: "Registration",
      desc: "Register high-net-worth bidders, verify identity documents, hold security deposits, and assign digital paddle numbers.",
      bullets: [
        { text: "PAN / Passport biometric KYC", icon: ShieldCheck },
        { text: "Security deposit escrow hold", icon: DollarSign },
        { text: "Paddle issuance with credit ceiling", icon: CheckCircle2 },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">Paddle Issued: #88</div>
          <div className="text-slate-600">Deposit: ₹5,00,000 Verified in Escrow</div>
          <div className="text-emerald-600 font-bold">Approved for Live Floor & Online</div>
        </div>
      ),
    },
    {
      title: "Live Floor & Bids",
      timing: "Auction Day",
      desc: "Coordinate floor, phone, and online bidding in real time. Dispatch instant WhatsApp outbid notifications to maintain bid momentum.",
      bullets: [
        { text: "Instant WhatsApp outbid alerts", icon: MessageSquare },
        { text: "Real-time floor paddle synchronizer", icon: Gavel },
        { text: "1-tap increment bidding buttons", icon: TrendingUp },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">Live Bid Recorded: ₹92,00,000</div>
          <div className="text-slate-600">Lot #12: Reserve Surpassed</div>
          <div className="text-amber-600 font-semibold">Outbid Alerts Dispatched to 6 Bidders</div>
        </div>
      ),
    },
    {
      title: "Hammer & Settle",
      timing: "Settlement",
      desc: "Calculate buyer's premium and tax instantly. Dispatch invoices via WhatsApp and wire settlements to consignors upon collection.",
      bullets: [
        { text: "Dynamic buyer's premium calculation", icon: DollarSign },
        { text: "Instant WhatsApp settlement dispatch", icon: Send },
        { text: "Consignor payout ledger & release", icon: CheckCircle2 },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-900">
            <span>Lot Sold! Hammer Down</span>
            <span className="text-emerald-600 font-bold">Settled</span>
          </div>
          <div className="text-[10px] text-slate-500">Invoice: ₹1,05,24,000 Sent to Buyer #88</div>
          <div className="w-full bg-emerald-500 h-1.5 rounded-full" />
        </div>
      ),
    },
  ];

  return (
    <>
      <CalendlyShowcase
        badge="Auction Floor Engine"
        title="Engineered for Fast-Paced High-Stakes Bidding"
        subtitle="Experience the specialized auction tools that ensure seamless bidder onboarding, real-time engagement, and rapid settlements."
        tabs={showcaseTabs}
        signupSlug="auctions"
      />

      <CalendlyWorkflowGrid
        badge="Auction Lifecycle Blueprint"
        title="From Consignor Intake to Hammer Settlement"
        subtitle="Keep auctioneers, telephone bidding desks, consignors, and winning bidders completely synchronized."
        steps={workflowSteps}
        signupSlug="auctions"
      />
    </>
  );
}
