"use client";

import CalendlyShowcase from "@/components/crm/CalendlyShowcase";
import {
  GraduationCap,
  Building2,
  Plane,
  Stethoscope,
  Briefcase,
  Gavel,
} from "lucide-react";

export default function HubShowcase() {
  const hubShowcaseTabs = [
    {
      id: "hub-edu",
      label: "Education",
      badge: "Admissions Edition",
      icon: GraduationCap,
      headline: "Student Inquiry Ingestion to Enrollment ID in Under 48 Hours",
      desc: "Eliminate counselor phone tag. Route leads from Meta Ads, Shiksha, and Google to counselors within 5 seconds, followed by automated WhatsApp diagnostic test booking.",
      bullets: [
        "Zero inquiry leakage across marketing campaigns",
        "Round-robin counselor queue with click-to-call",
        "Automated WhatsApp test admit card delivery",
      ],
      secondaryLink: "/crm/industries/education",
      secondaryLabel: "Explore Education Edition →",
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3">
          <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-800">Education Admission Pipeline</span>
            <span className="text-[10px] font-bold text-[#F7941D] bg-orange-50 px-2 py-0.5 rounded">
              Pre-Configured
            </span>
          </div>
          <div className="p-3 bg-orange-50/50 rounded-xl border border-orange-100 space-y-1">
            <div className="text-xs font-bold text-slate-900">Student: Aarav Patel (JEE 2027)</div>
            <div className="text-[11px] text-slate-600">Counselor Sneha assigned via round-robin (2.1 mins ago)</div>
            <div className="text-[10px] text-emerald-700 font-semibold">WhatsApp Hall Ticket Sent ✓✓</div>
          </div>
        </div>
      ),
    },
    {
      id: "hub-re",
      label: "Real Estate",
      badge: "Property Edition",
      icon: Building2,
      headline: "Multi-Tower Unit Grid & Automated Guided Site Tours",
      desc: "Stop double-selling flats. Give sales reps real-time inventory visibility and allow high-intent property buyers to schedule weekend site tours in 3 clicks.",
      bullets: [
        "Live color-coded floor plate matrix (Avail / Hold / Sold)",
        "Driver pick-up dispatch & WhatsApp location pins",
        "Protected 90-day channel partner lead registry",
      ],
      secondaryLink: "/crm/industries/real-estate",
      secondaryLabel: "Explore Real Estate Edition →",
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3">
          <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-800">Skyline Heights — Unit 1401</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              Available
            </span>
          </div>
          <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 space-y-1">
            <div className="text-xs font-bold text-slate-900">Site Visit: Saturday 11:00 AM</div>
            <div className="text-[11px] text-slate-600">Buyer: Vikram Malhotra (Cab Pickup: SG Highway)</div>
            <div className="text-[10px] text-blue-700 font-semibold">WhatsApp 3D Brochure Opened (4 mins)</div>
          </div>
        </div>
      ),
    },
    {
      id: "hub-immig",
      label: "Immigration",
      badge: "Visa Edition",
      icon: Plane,
      headline: "Automate Document Checklists & Slash Applicant Status Calls",
      desc: "Keep applicants updated automatically via WhatsApp on every milestone: File Lodged, Biometrics Booked, and Visa Approved.",
      bullets: [
        "Checklist templates for Canada, UK, Australia & USA",
        "Document expiry alerts 30 days in advance",
        "Case officer SLA timers preventing missed deadlines",
      ],
      secondaryLink: "/crm/industries/immigration",
      secondaryLabel: "Explore Immigration Edition →",
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3">
          <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-800">Canada PR — Express Entry</span>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              CRS: 488
            </span>
          </div>
          <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 space-y-1">
            <div className="text-xs font-bold text-slate-900">Applicant: Rohan Kapur</div>
            <div className="text-[11px] text-slate-600">8 of 9 Required Documents Verified</div>
            <div className="text-[10px] text-emerald-700 font-semibold">WhatsApp Lodgement Alert Dispatched ✓</div>
          </div>
        </div>
      ),
    },
    {
      id: "hub-health",
      label: "Healthcare",
      badge: "Clinic Edition",
      icon: Stethoscope,
      headline: "Doctor Chamber Booking & WhatsApp Pre-Consultation Care",
      desc: "Eliminate patient no-shows with automated WhatsApp fasting & GPS directions, and retain patients with automated 30-day care cadences.",
      bullets: [
        "Multi-doctor chamber queue synchronization",
        "24h & 2h WhatsApp countdown reminder alerts",
        "Patient summary records with prominent allergy flags",
      ],
      secondaryLink: "/crm/industries/healthcare",
      secondaryLabel: "Explore Healthcare Edition →",
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3">
          <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-800">Dr. Priya Patel (Dermatology)</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              Token #18
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
            <div className="text-xs font-bold text-slate-900">Patient: Sunita Rao (Today 05:15 PM)</div>
            <div className="text-[11px] text-slate-600">WhatsApp Reminder: Patient Confirmed Attendance ✓</div>
            <div className="text-[10px] text-rose-600 font-semibold">Flag: Penicillin Allergy</div>
          </div>
        </div>
      ),
    },
    {
      id: "hub-b2b",
      label: "B2B Services",
      badge: "Agency Edition",
      icon: Briefcase,
      headline: "High-Ticket B2B Deals & Real-Time Proposal Open Alerts",
      desc: "Close high-ticket contracts with multi-stakeholder stage tracking, live proposal viewing heatmaps, and automated sprint milestone invoicing.",
      bullets: [
        "6-figure consultative sales pipeline stages",
        "Live alerts when prospective clients view pricing",
        "Milestone billing tied to sprint acceptance",
      ],
      secondaryLink: "/crm/industries/b2b-services",
      secondaryLabel: "Explore B2B Services Edition →",
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3">
          <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-800">Acme Cloud Migration (₹45,00,000)</span>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              80% Probability
            </span>
          </div>
          <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-100 space-y-1">
            <div className="text-xs font-bold text-slate-900">Proposal Viewed 3 Times Today</div>
            <div className="text-[11px] text-slate-600">Client spent 4m 12s on Engineering Rates table</div>
            <div className="text-[10px] text-purple-700 font-semibold">Next: Security Sign-off Call (Thursday)</div>
          </div>
        </div>
      ),
    },
    {
      id: "hub-auc",
      label: "Auctions",
      badge: "Auction Edition",
      icon: Gavel,
      headline: "KYC Bidder Verification, Outbid Bots & Instant Settlements",
      desc: "Protect live auctions from defaulted bids with escrow deposits and paddle numbers, and drive bidding momentum with sub-second WhatsApp outbid pings.",
      bullets: [
        "Confidential reserve price & provenance registry",
        "PAN / Passport KYC with pre-authorized deposit holds",
        "Instant buyer's premium and hammer tax calculation",
      ],
      secondaryLink: "/crm/industries/auctions",
      secondaryLabel: "Explore Auctions Edition →",
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3">
          <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-800">Lot #408 — Patek Philippe 1974</span>
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
              Live Floor
            </span>
          </div>
          <div className="p-3 bg-amber-50/40 rounded-xl border border-amber-100 space-y-1">
            <div className="text-xs font-bold text-slate-900">Current High Bid: ₹19,00,000 (Paddle #42)</div>
            <div className="text-[11px] text-slate-600">Reserve Met • Outbid notification triggered</div>
            <div className="text-[10px] text-emerald-700 font-semibold">KYC Deposit: ₹5,00,000 Verified in Escrow</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <CalendlyShowcase
      badge="Live Workflow Switcher"
      title="Click an Industry to Preview Its Dedicated Engine"
      subtitle="See how each Edfosys vertical edition solves the specific bottlenecks of that industry."
      tabs={hubShowcaseTabs}
      signupSlug="general"
    />
  );
}
