"use client";

import CalendlyShowcase from "@/components/crm/CalendlyShowcase";
import CalendlyWorkflowGrid from "@/components/crm/CalendlyWorkflowGrid";
import {
  Building2,
  Calendar,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Clock,
  Home,
  FileCheck,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";

export default function RealEstateShowcase() {
  const showcaseTabs = [
    {
      id: "site-visit-scheduler",
      label: "Site Visit Scheduling",
      badge: "Automated Scheduling",
      icon: Calendar,
      headline: "Schedule & Confirm Site Visits with Zero Phone Tag",
      desc: "Give high-intent buyers an organized site visit calendar. Coordinate scheduled tour slots, send Google Maps directions via WhatsApp, and assign property sales managers automatically.",
      bullets: [
        "Pre-scheduled weekend site visit booking slots for ad campaigns",
        "Automated WhatsApp directions and appointment reminders",
        "Instant sales manager notification & follow-up task logging",
      ],
      secondaryLink: "/crm/features",
      secondaryLabel: "See scheduling features →",
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold text-slate-800">Skyline Heights — Site Tour</div>
              <div className="text-[10px] text-slate-500">45-min guided unit walkthrough</div>
            </div>
            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">
              Weekend Special
            </span>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] font-semibold text-slate-600">Select Saturday Time Slot:</div>
            <div className="grid grid-cols-3 gap-2">
              {["10:30 AM", "02:00 PM", "04:30 PM"].map((time, idx) => (
                <div
                  key={idx}
                  className={`py-2 px-2 text-center rounded-xl text-xs font-bold border transition-all ${
                    idx === 1
                      ? "bg-[#0C3246] text-white border-[#0C3246] shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200"
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                ✓
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Vikram Malhotra</div>
                <div className="text-[10px] text-slate-500">Site Visit Confirmed • Vastrapur Site</div>
              </div>
            </div>
            <span className="text-[10px] font-extrabold text-emerald-700">Confirmed</span>
          </div>
        </div>
      ),
    },
    {
      id: "buyer-pipeline",
      label: "Buyer Pipeline",
      badge: "Stage Qualification",
      icon: Building2,
      headline: "Qualify Buyers Across Every Stage from Visit to Token",
      desc: "Track every prospective buyer across custom real estate stages. Know instantly who visited the site, who received the cost estimate, and who submitted a booking token.",
      bullets: [
        "Custom stages: Inquired → Site Visit → Quotation → Token → Booked",
        "Tag budget, preferred configuration (2BHK/3BHK), and location",
        "Aging alerts for leads without follow-up in 48 hours",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
            <span className="font-bold text-slate-800">Active Real Estate Deals</span>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              3 In Negotiation
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/40 flex justify-between items-center text-xs">
              <div>
                <div className="font-bold text-slate-900">Vikram Malhotra</div>
                <div className="text-[10px] text-slate-500">3BHK Luxury • Tower B • Budget: ₹1.65 Cr</div>
              </div>
              <span className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded">
                Token Received
              </span>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50 flex justify-between items-center text-xs">
              <div>
                <div className="font-bold text-slate-800">Amit Trivedi</div>
                <div className="text-[10px] text-slate-500">2BHK Premium • Budget: ₹95 Lakh</div>
              </div>
              <span className="text-[10px] font-semibold text-slate-600">
                Site Visit Done
              </span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[10px] text-slate-600 flex justify-between items-center">
            <span>Project Pipeline Value: <strong>₹8.4 Crore</strong></span>
            <span className="text-[#F7941D] font-bold">14 Active Leads</span>
          </div>
        </div>
      ),
    },
    {
      id: "whatsapp-brochure",
      label: "WhatsApp Brochure Bot",
      badge: "Instant Engagement",
      icon: MessageSquare,
      headline: "Broadcast High-Resolution Project Brochures in 5 Seconds",
      desc: "When a buyer submits a form on Facebook or Instagram, send them floor plans, location highlights, and pricing breakdowns directly on WhatsApp.",
      bullets: [
        "Deliver PDFs and high-res layout brochures directly to WhatsApp",
        "Official Meta Cloud API ensures zero phone number ban risks",
        "Direct callback scheduling and sales manager contact card",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-[#EFEAE2] rounded-2xl shadow-xl p-4 space-y-3 font-sans">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-300/60">
            <div className="w-7 h-7 rounded-full bg-[#0C3246] text-white flex items-center justify-center font-bold text-[10px]">
              S
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 flex items-center">
                Skyline Developers <CheckCircle2 className="w-3 h-3 text-blue-500 ml-1 fill-blue-500 text-white" />
              </div>
              <div className="text-[9px] text-slate-500">Verified Business Account</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm space-y-2 text-xs text-slate-800">
            <p className="font-semibold text-slate-900">
              Hello Vikram! 🏙️ Thank you for showing interest in Skyline Heights.
            </p>
            <div className="p-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">
                PDF
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold text-slate-800">Skyline_3BHK_Brochure.pdf</div>
                <div className="text-[9px] text-slate-400">14.2 MB • Interactive Layouts</div>
              </div>
            </div>
            <div className="pt-1 flex gap-2">
              <button className="flex-1 py-1.5 bg-[#0C3246] text-white font-bold rounded-lg text-[10px] text-center">
                Schedule Site Visit
              </button>
            </div>
            <div className="text-[9px] text-right text-slate-400">11:15 AM ✓✓</div>
          </div>
        </div>
      ),
    },
    {
      id: "broker-network",
      label: "Partner & Source Tracking",
      badge: "Attribution Protection",
      icon: Users,
      headline: "Track Channel Partners, Portals & Ad Sources Cleanly",
      desc: "Centralize all your external lead sources. Track which broker, portal, or Meta campaign registered which client, protect leads from duplicate conflicts, and maintain clean audit records.",
      bullets: [
        "Source tags: Channel Partner, Meta Ads, Google Ads, Portals",
        "Phone and email deduplication to prevent double-claiming",
        "Sales rep assignment with multi-branch segregation",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 space-y-3">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-900">Channel Partner & Source Log</span>
            <span className="text-[10px] font-bold text-slate-500">Branch: North Wing</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Apex Realty Partners</div>
                <div className="text-[10px] text-slate-500">Buyer: Vikram Malhotra (3BHK Interest)</div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  Source: Channel Partner
                </span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-orange-50/50 border border-orange-100 text-[11px] text-orange-900 flex justify-between items-center">
            <span>Deduplication Status: <strong>Unique Buyer Verified</strong></span>
            <ShieldCheck className="w-4 h-4 text-[#F7941D]" />
          </div>
        </div>
      ),
    },
  ];

  const workflowSteps = [
    {
      title: "Ingest Leads",
      timing: "Sub-Second",
      desc: "Pull leads from property portals, Meta Ads, and walk-in desks into a single unified real estate CRM.",
      bullets: [
        { text: "De-duplicate repeated buyer phone numbers", icon: CheckCircle2 },
        { text: "Tag budget & unit preference (2BHK, 3BHK, Penthouse)", icon: Home },
        { text: "Instant WhatsApp brochure broadcast", icon: MessageSquare },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-800">
            <span>Property Inquiry Ingest</span>
            <span className="text-emerald-600 font-semibold">Live Ingest</span>
          </div>
          <div className="text-[10px] text-slate-500">Buyer: Deepak Verma (Budget: ₹1.5 Cr+)</div>
          <div className="text-[9px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded inline-block">
            Pref: Ready to Move 3BHK
          </div>
        </div>
      ),
    },
    {
      title: "Route & Tour",
      timing: "Schedule",
      desc: "Assign sales managers and schedule site visits with automated WhatsApp reminders and location pins.",
      bullets: [
        { text: "Automated rep assignment by project branch", icon: Users },
        { text: "Organized site visit calendar follow-ups", icon: Calendar },
        { text: "Google Maps location link via WhatsApp", icon: MapPin },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-800">
            <span>Site Visit Scheduled</span>
            <span className="text-orange-600 font-bold">Saturday 11 AM</span>
          </div>
          <div className="text-[10px] text-slate-500">Rep Assigned: Karan Verma (North Wing)</div>
          <div className="text-[9px] text-emerald-600 font-semibold">Location Pin Sent to WhatsApp ✓</div>
        </div>
      ),
    },
    {
      title: "Quote & Follow-up",
      timing: "Quotation PDF",
      desc: "Generate professional cost sheets with GST calculations and maintain persistent follow-up records.",
      bullets: [
        { text: "One-click dynamic cost sheet / quotation PDF", icon: FileCheck },
        { text: "Automated task reminders for sales executives", icon: Clock },
        { text: "Channel partner attribution preserved", icon: Users },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">Cost Estimate Generated: 3BHK Unit</div>
          <div className="text-slate-600">Base Price: ₹1,48,00,000 + GST & Stamp Duty</div>
          <div className="text-emerald-600 font-bold">Quotation PDF Sent via WhatsApp ✓</div>
        </div>
      ),
    },
    {
      title: "Close & Settle",
      timing: "Booking Stage",
      desc: "Record booking advance receipts, generate GST tax invoices, and mark deals as Won in the pipeline.",
      bullets: [
        { text: "Booking advance invoice generation", icon: CheckCircle2 },
        { text: "GST tax invoice with company branding", icon: FileCheck },
        { text: "Clean stage transition to Won", icon: Sparkles },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-900">
            <span>Booking Confirmed</span>
            <span className="text-emerald-600 font-extrabold">₹5,00,000 Advance ✓</span>
          </div>
          <div className="text-[10px] text-slate-500">Status: Deal Won • Tax Invoice Generated</div>
          <div className="w-full bg-emerald-500 h-1.5 rounded-full" />
        </div>
      ),
    },
  ];

  return (
    <>
      <CalendlyShowcase
        badge="Property Sales Engine"
        title="Experience the High-Conversion Buyer Journey"
        subtitle="Explore the interactive modules built specifically for high-ticket residential and commercial property sales."
        tabs={showcaseTabs}
        signupSlug="real-estate"
      />

      <CalendlyWorkflowGrid
        badge="Sales Pipeline Blueprint"
        title="From Ad Impression to Final Unit Registry"
        subtitle="Keep your site sales reps, telecallers, and channel partners completely aligned on every deal."
        steps={workflowSteps}
        signupSlug="real-estate"
      />
    </>
  );
}
