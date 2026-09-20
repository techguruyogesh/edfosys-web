"use client";

import CalendlyShowcase from "@/components/crm/CalendlyShowcase";
import CalendlyWorkflowGrid from "@/components/crm/CalendlyWorkflowGrid";
import {
  Briefcase,
  FileCheck,
  TrendingUp,
  MessageSquare,
  CheckCircle2,
  Clock,
  DollarSign,
  BarChart3,
  Calendar,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function B2bServicesShowcase() {
  const showcaseTabs = [
    {
      id: "b2b-pipeline",
      label: "High-Ticket Kanban",
      badge: "Deal Velocity",
      icon: Briefcase,
      headline: "Track Multi-Stakeholder Deals from Scoping to Signature",
      desc: "Manage 6-figure enterprise deals without letting key conversations slip. Map decision makers, track technical evaluation criteria, and monitor deal probability at every pipeline stage.",
      bullets: [
        "Stage probabilities tied to executive sign-offs (SOW, Legal, Finance)",
        "Decision-maker mapping (Champion, Economic Buyer, Technical Gatekeeper)",
        "Stale deal alerts when no interaction has occurred in 7 days",
      ],
      secondaryLink: "/crm/features",
      secondaryLabel: "Explore B2B pipeline tools →",
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold text-slate-800">Acme Fintech — Cloud Migration</div>
              <div className="text-[10px] text-slate-500">Enterprise Deal • Stage: Proposal Review</div>
            </div>
            <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              ₹45,00,000
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-slate-800">Economic Buyer: Rajesh Menon (VP Tech)</div>
                <div className="text-[10px] text-slate-500">Champion: Tech Lead (Pooja Rao)</div>
              </div>
              <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                80% Win Prob
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-orange-50/50 border border-orange-200 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-slate-900">Next Action: Security Review Call</div>
                <div className="text-[10px] text-slate-500">Scheduled for Thursday at 3:00 PM</div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-[#F7941D]" />
            </div>
          </div>

          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[10px] text-slate-600 flex justify-between items-center">
            <span>Sales Cycle Time: <strong>18 Days</strong></span>
            <span className="text-emerald-600 font-bold">35% Faster Than Avg</span>
          </div>
        </div>
      ),
    },
    {
      id: "proposal-tracking",
      label: "Quotations & Estimates",
      badge: "Branded PDF Export",
      icon: FileCheck,
      headline: "Generate Professional Proposals & Scope Estimates in 60 Seconds",
      desc: "Stop manually assembling Word documents. Build multi-line item proposals with custom milestones, item discounts, and tax breakdowns. Dispatch directly via WhatsApp or email with one click.",
      bullets: [
        "Item catalog with custom service pricing and HSN/SAC codes",
        "Automated Indian GST & multi-currency quotation calculations",
        "One-click PDF dispatch via WhatsApp or SMTP email",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
            <span className="font-bold text-slate-800">Proposal & Estimate Generator</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Ready to Dispatch
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl border border-blue-200 bg-blue-50/40 text-xs">
              <div className="flex justify-between font-bold text-slate-900">
                <span>Acme Corp — Cloud Migration SOW</span>
                <span className="text-blue-700">₹45,00,000</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Milestones: Architecture Audit • Core Migration • DevOps Handover
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50 text-xs">
              <div className="flex justify-between font-bold text-slate-800">
                <span>GST Tax Breakdown</span>
                <span className="text-slate-600 font-normal">18% IGST (₹8,10,000)</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                HSN/SAC: 998313 (IT Consulting) • Total: ₹53,10,000
              </div>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-orange-50 border border-orange-100 text-[10px] text-orange-900 flex justify-between items-center font-semibold">
            <span>One-Click Dispatch: PDF via WhatsApp & Email</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F7941D]" />
          </div>
        </div>
      ),
    },
    {
      id: "whatsapp-cadence",
      label: "Executive WhatsApp Cadence",
      badge: "High-Touch Messaging",
      icon: MessageSquare,
      headline: "Cut Meeting Scheduling Delays with 1-Tap Calendly Links",
      desc: "Executives rarely answer cold emails, but they check WhatsApp within 5 minutes. Share discovery session calendars, sprint deliverables, and contract sign-off links directly on WhatsApp.",
      bullets: [
        "1-click Calendly-style meeting selector embedded in WhatsApp",
        "Automated 1-hour pre-meeting agenda reminders",
        "Two-way team chat sync between web CRM and mobile reps",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-[#EFEAE2] rounded-2xl shadow-xl p-4 space-y-3 font-sans">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-300/60">
            <div className="w-7 h-7 rounded-full bg-[#0C3246] text-white flex items-center justify-center font-bold text-[10px]">
              E
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 flex items-center">
                Edfosys Consulting <CheckCircle2 className="w-3 h-3 text-blue-500 ml-1 fill-blue-500 text-white" />
              </div>
              <div className="text-[9px] text-slate-500">Official Business Account</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm space-y-2 text-xs text-slate-800">
            <p className="font-semibold text-slate-900">
              Hi Rajesh! 👋 Here is the formal technical proposal for Acme Corp.
            </p>
            <div className="p-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                PDF
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold text-slate-800">Acme_Cloud_Migration_Proposal.pdf</div>
                <div className="text-[9px] text-slate-400">Formal SOW & Commercials</div>
              </div>
            </div>
            <div className="pt-1 flex gap-2">
              <button className="flex-1 py-1.5 bg-[#0C3246] text-white font-bold rounded-lg text-[10px] text-center">
                Schedule Review Call
              </button>
            </div>
            <div className="text-[9px] text-right text-slate-400">03:45 PM ✓✓</div>
          </div>
        </div>
      ),
    },
    {
      id: "billing-milestones",
      label: "Milestone GST Invoicing",
      badge: "Cash Flow Visibility",
      icon: DollarSign,
      headline: "Automate Milestone Retainers & Advance Deposits",
      desc: "Stop billing leaks in long-running services engagements. Tie invoices directly to project milestones, calculate GST automatically, and track unpaid balances across your entire client roster.",
      bullets: [
        "Milestone-linked tax invoicing (Advance, Sprint 1, Final Handover)",
        "Indian GST compliance with HSN/SAC code mapping and CGST/SGST/IGST splits",
        "Instant WhatsApp & email PDF invoice delivery",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 space-y-3">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-900">Contract Invoicing Milestones</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              SOW Active
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">M1: Architecture Review</div>
                <div className="text-[10px] text-slate-500">Invoice #EDF-402 • Settled</div>
              </div>
              <span className="text-xs font-extrabold text-emerald-600">₹10,00,000 Paid ✓</span>
            </div>

            <div className="p-2.5 rounded-xl bg-blue-50/40 border border-blue-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">M2: Core Sprint Migration</div>
                <div className="text-[10px] text-slate-500">Invoice #EDF-403 • Due in 5 Days</div>
              </div>
              <span className="text-xs font-bold text-blue-700">₹20,00,000 Pending</span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[10px] text-slate-600 flex justify-between items-center">
            <span>Realized Contract Value: <strong>₹30L of ₹45L</strong></span>
            <span className="text-emerald-600 font-bold">66% Collected</span>
          </div>
        </div>
      ),
    },
  ];

  const workflowSteps = [
    {
      title: "Qualify & Assign",
      timing: "Sub-Second",
      desc: "Capture high-intent inbound inquiries from Google Ads, LinkedIn campaigns, and referrals into a unified high-ticket pipeline.",
      bullets: [
        { text: "Enrich domain & company size", icon: Briefcase },
        { text: "Deduplicate multi-touch buyer contacts", icon: CheckCircle2 },
        { text: "Route to senior account executive", icon: Sparkles },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-800">
            <span>Inbound: Enterprise Lead</span>
            <span className="text-emerald-600 font-semibold">Enriched</span>
          </div>
          <div className="text-[10px] text-slate-500">Company: FinTech SaaS (Series B, 180 Emp)</div>
          <div className="text-[9px] text-blue-600 font-semibold">Budget: ₹30L - ₹50L</div>
        </div>
      ),
    },
    {
      title: "Scope & Pitch",
      timing: "Proposal",
      desc: "Generate professional scope estimates and GST proposals. Send directly to stakeholders with automated WhatsApp reminders.",
      bullets: [
        { text: "1-Click PDF proposal & quotation generation", icon: FileCheck },
        { text: "Item catalog with custom milestone pricing", icon: BarChart3 },
        { text: "Automated WhatsApp and email dispatch", icon: MessageSquare },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">Proposal Generated: 3 Mins Ago</div>
          <div className="text-slate-600">Acme Corp — Cloud Migration Proposal (₹45,00,000 + GST)</div>
          <div className="text-emerald-600 font-bold">Sent via WhatsApp & Email ✓</div>
        </div>
      ),
    },
    {
      title: "Close & SOW",
      timing: "Execution",
      desc: "Execute digital SOW agreements, map technical milestones, and record purchase order numbers.",
      bullets: [
        { text: "Digital signature milestone tracking", icon: FileCheck },
        { text: "Legal and compliance checklist gate", icon: ShieldCheck },
        { text: "Automated advance invoice dispatch", icon: DollarSign },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">SOW Executed Digitally</div>
          <div className="text-slate-600">Advance Retainer: ₹10,00,000 Received</div>
          <div className="text-blue-600 font-semibold">Status: Project Onboarded</div>
        </div>
      ),
    },
    {
      title: "Deliver & Retain",
      timing: "Milestones",
      desc: "Deliver high-quality work, issue milestone invoices, and automate recurring monthly retainer renewals.",
      bullets: [
        { text: "Automated recurring retainer invoices", icon: DollarSign },
        { text: "Sprint review WhatsApp updates", icon: MessageSquare },
        { text: "Upsell & contract expansion tracking", icon: TrendingUp },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-900">
            <span>Retainer Renewed</span>
            <span className="text-emerald-600 font-bold">Quarter 4 Confirmed</span>
          </div>
          <div className="text-[10px] text-slate-500">ARR Expansion: +25% Added DevOps Scope</div>
          <div className="w-full bg-emerald-500 h-1.5 rounded-full" />
        </div>
      ),
    },
  ];

  return (
    <>
      <CalendlyShowcase
        badge="Enterprise Deal Engine"
        title="Designed for Complex, Consultative Sales"
        subtitle="Explore the purpose-built tools that help top digital agencies and B2B consultancies close 6-figure contracts."
        tabs={showcaseTabs}
        signupSlug="b2b-services"
      />

      <CalendlyWorkflowGrid
        badge="B2B Sales Blueprint"
        title="From Inbound Discovery to Recurring Retainer"
        subtitle="Keep your sales engineers, account executives, project managers, and finance teams in lockstep."
        steps={workflowSteps}
        signupSlug="b2b-services"
      />
    </>
  );
}
