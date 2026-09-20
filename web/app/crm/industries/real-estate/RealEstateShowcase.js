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
      badge: "Calendly-Style Booking",
      icon: Calendar,
      headline: "Book & Confirm Site Tours with Zero Phone Tag",
      desc: "Give high-intent buyers an interactive site visit calendar. Coordinate driver pick-ups, send Google Maps directions via WhatsApp, and assign sales reps on the ground automatically.",
      bullets: [
        "Self-serve weekend site visit booking link for Facebook Ads",
        "Automated cab/driver dispatch notification with car details",
        "Geo-fenced mobile check-in for sales reps at the property site",
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
                <div className="text-[10px] text-slate-500">Opted for: Cab Pickup from SG Highway</div>
              </div>
            </div>
            <span className="text-[10px] font-extrabold text-emerald-700">Confirmed</span>
          </div>
        </div>
      ),
    },
    {
      id: "unit-inventory",
      label: "Unit Inventory Tracker",
      badge: "Real-Time Availability",
      icon: Building2,
      headline: "Live Multi-Tower Unit Grid: Never Double-Sell a Flat",
      desc: "Track every flat, duplex, and penthouse in real time. Know instantly which units are Available, Blocked with Token, or Sold across all marketing channels and channel partners.",
      bullets: [
        "Color-coded floor plate matrix (Available, Hold, Sold)",
        "Instant lock/hold mechanism with 48-hour token countdown timer",
        "Dynamic cost-sheet calculator with stamp duty & GST breakdowns",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
            <span className="font-bold text-slate-800">Tower B — Floor 14</span>
            <div className="flex items-center space-x-3 text-[10px]">
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-1" /> Avail</span>
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-amber-500 mr-1" /> Hold</span>
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-slate-400 mr-1" /> Sold</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/40">
              <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                <span>Unit 1401</span>
                <span className="text-[10px] text-emerald-600 font-extrabold">Available</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-1">3BHK • 1,920 sq.ft</div>
              <div className="text-xs font-bold text-slate-800 mt-0.5">₹1.48 Cr</div>
            </div>

            <div className="p-2.5 rounded-xl border border-amber-200 bg-amber-50/40">
              <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                <span>Unit 1402</span>
                <span className="text-[10px] text-amber-600 font-extrabold">Hold (24h)</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-1">3BHK Luxury • 2,150 sq.ft</div>
              <div className="text-xs font-bold text-slate-800 mt-0.5">₹1.65 Cr</div>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[10px] text-slate-600 flex justify-between items-center">
            <span>Overall Tower Occupancy: <strong>78% Sold</strong></span>
            <span className="text-[#F7941D] font-bold">12 Units Left</span>
          </div>
        </div>
      ),
    },
    {
      id: "whatsapp-brochure",
      label: "WhatsApp Brochure Bot",
      badge: "Instant Engagement",
      icon: MessageSquare,
      headline: "Broadcast 3D Walkthroughs & Layouts in 5 Seconds",
      desc: "When a buyer clicks your Instagram Ad or walks by the hoardings, send them high-resolution floor plans, price breakdowns, and YouTube video tours directly on WhatsApp.",
      bullets: [
        "Deliver 20MB+ PDFs and high-res layout images seamlessly",
        "Track when the buyer opens the brochure and clicks the site visit link",
        "Direct chat connection to the property sales manager",
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
                Book Guided Site Visit
              </button>
            </div>
            <div className="text-[9px] text-right text-slate-400">11:15 AM ✓✓</div>
          </div>
        </div>
      ),
    },
    {
      id: "broker-network",
      label: "Broker & CP Network",
      badge: "Channel Partner Ledger",
      icon: Users,
      headline: "Manage Channel Partners, RERA Tags & Commission Payouts",
      desc: "Centralize all your external real estate agents. Track which broker registered which client, protect leads from commission disputes, and calculate payout milestones automatically.",
      bullets: [
        "Unique QR code & link for each channel partner to register clients",
        "90-day lead tagging rule protecting broker attribution",
        "Automated commission milestone calculations (Token, Agreement, Registry)",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 space-y-3">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-900">Channel Partner Ledger</span>
            <span className="text-[10px] font-bold text-slate-500">RERA: PR/GJ/AHM/2026</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Apex Realty Partners</div>
                <div className="text-[10px] text-slate-500">Buyer: Vikram Malhotra (Unit 1401)</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-extrabold text-slate-900">2.0% Comm.</div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  ₹2,96,000 Approved
                </span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-orange-50/50 border border-orange-100 text-[11px] text-orange-900 flex justify-between items-center">
            <span>Lead Registration Protected: <strong>82 Days Left</strong></span>
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
      desc: "Pull leads from 99acres, MagicBricks, Meta Ads, and walk-in desks into a single unified inventory CRM.",
      bullets: [
        { text: "De-duplicate repeated buyer phone numbers", icon: CheckCircle2 },
        { text: "Tag budget & unit preference (2BHK, 3BHK, Penthouse)", icon: Home },
        { text: "Instant WhatsApp brochure broadcast", icon: MessageSquare },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-800">
            <span>99acres Portal Lead</span>
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
      desc: "Assign sales managers and schedule geo-tagged site visits with automated driver pick-up reminders.",
      bullets: [
        { text: "Automated rep assignment by project tower", icon: Users },
        { text: "Interactive site visit slot booking", icon: Calendar },
        { text: "Geo-fenced mobile visit check-in", icon: MapPin },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-800">
            <span>Site Visit Scheduled</span>
            <span className="text-orange-600 font-bold">Saturday 11 AM</span>
          </div>
          <div className="text-[10px] text-slate-500">Driver Pick-up: Assigned (MH-02-CD-4421)</div>
          <div className="text-[9px] text-emerald-600 font-semibold">Location Pin Sent to WhatsApp ✓</div>
        </div>
      ),
    },
    {
      title: "Quote & Hold",
      timing: "48-Hour Lock",
      desc: "Generate professional cost sheets with GST & stamp duty. Place temporary holds on units with token verification.",
      bullets: [
        { text: "One-click dynamic cost sheet PDF", icon: FileCheck },
        { text: "48-hour temporary unit lock timer", icon: Clock },
        { text: "Channel partner commission attribution", icon: Users },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">Cost Sheet Generated: Unit 1401</div>
          <div className="text-slate-600">Base Price: ₹1,48,00,000 + ₹8,88,000 Stamp Duty</div>
          <div className="text-amber-600 font-bold">Unit Locked: 47h 12m Remaining</div>
        </div>
      ),
    },
    {
      title: "Close & Settle",
      timing: "Booking Form",
      desc: "Collect token payments via payment gateways, generate RERA-compliant booking forms, and mark inventory as Sold.",
      bullets: [
        { text: "Instant token payment verification", icon: CheckCircle2 },
        { text: "Automated digital booking agreement", icon: FileCheck },
        { text: "Broker payout milestone release", icon: Sparkles },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-900">
            <span>Booking Confirmed</span>
            <span className="text-emerald-600 font-extrabold">₹5,00,000 Token ✓</span>
          </div>
          <div className="text-[10px] text-slate-500">Unit 1401 Status: Marked as SOLD in Live Grid</div>
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
