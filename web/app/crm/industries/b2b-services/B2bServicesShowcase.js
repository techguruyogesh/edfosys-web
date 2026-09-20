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
      label: "Proposal Engagement Bot",
      badge: "Real-Time Telemetry",
      icon: FileCheck,
      headline: "Know Exactly When the Client Opens Your Proposal",
      desc: "Stop wondering if the prospective client reviewed your estimate. Receive instant push notifications the second they open your proposal link, and track which pages they spend the most time reading.",
      bullets: [
        "Live alerts: 'Client opened proposal from London (Desktop)'",
        "Page heatmaps showing time spent on Pricing vs Architecture",
        "Automated WhatsApp follow-up triggered 2 hours after document review",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
            <span className="font-bold text-slate-800">Proposal Activity Live Log</span>
            <span className="text-[10px] font-bold text-emerald-600 flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" /> Live Now
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl border border-blue-200 bg-blue-50/40 text-xs">
              <div className="flex justify-between font-bold text-slate-900">
                <span>Acme Corp viewed Page 4 (Commercials)</span>
                <span className="text-blue-700">4m 12s spent</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Opened 3 times today by 2 distinct IP addresses
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50 text-xs">
              <div className="flex justify-between font-bold text-slate-800">
                <span>Architecture Blueprint Downloaded</span>
                <span className="text-slate-400 font-normal">2:15 PM</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                File: AWS_Microservices_Architecture_v2.pdf
              </div>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-orange-50 border border-orange-100 text-[10px] text-orange-900 flex justify-between items-center font-semibold">
            <span>Recommended Call Window: Within 30 Mins</span>
            <Clock className="w-3.5 h-3.5 text-[#F7941D]" />
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
                Edfosys Engineering <CheckCircle2 className="w-3 h-3 text-blue-500 ml-1 fill-blue-500 text-white" />
              </div>
              <div className="text-[9px] text-slate-500">Enterprise Solutions Desk</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm space-y-2 text-xs text-slate-800">
            <p className="font-semibold text-slate-900">
              Hi Rajesh! 🚀 Here is the revised SOW for the Cloud Migration.
            </p>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[11px] space-y-1">
              <div>📄 <strong>Scope:</strong> Phase 1 AWS Kubernetes Migration</div>
              <div>📅 <strong>Sprint Start:</strong> 1st October 2026</div>
              <div>💼 <strong>Deliverables:</strong> CI/CD + Zero-Downtime DB Cutover</div>
            </div>
            <div className="pt-1 flex gap-2">
              <button className="flex-1 py-1.5 bg-[#0C3246] text-white font-bold rounded-lg text-[10px] text-center">
                Sign Digital SOW
              </button>
            </div>
            <div className="text-[9px] text-right text-slate-400">01:20 PM ✓✓</div>
          </div>
        </div>
      ),
    },
    {
      id: "milestone-invoicing",
      label: "Milestones & Invoices",
      badge: "Cash Flow Engine",
      icon: DollarSign,
      headline: "Link Project Deliverables to Automated Invoicing Triggers",
      desc: "Never let completed sprint work sit unbilled. When a technical milestone is signed off, the CRM automatically generates a GST-compliant invoice and triggers automated payment collection reminders.",
      bullets: [
        "Milestone billing tied to sprint acceptance",
        "Integrated Razorpay & Stripe international payment links",
        "Automated overdue invoice follow-up sequences",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 space-y-3">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-900">Project Milestone Ledger</span>
            <span className="text-[10px] font-bold text-slate-500">PO: PO-2026-881</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Milestone 1: Architecture & Setup</div>
                <div className="text-[10px] text-slate-500">Sign-off: Complete</div>
              </div>
              <span className="text-xs font-extrabold text-emerald-600">₹15,00,000 Paid ✓</span>
            </div>

            <div className="p-2.5 rounded-xl bg-blue-50/40 border border-blue-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Milestone 2: Database Migration</div>
                <div className="text-[10px] text-slate-500">Sprint 4 Demo Scheduled</div>
              </div>
              <span className="text-xs font-bold text-blue-700">₹18,00,000 Due Oct 15</span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100 text-[10px] text-emerald-800 flex justify-between items-center font-medium">
            <span>Client Payment Health Score: <strong>100% On-Time</strong></span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
        </div>
      ),
    },
  ];

  const workflowSteps = [
    {
      title: "Discover & Enrich",
      timing: "Qualification",
      desc: "Ingest inbound agency leads from website forms, LinkedIn ads, or referrals. Enrich with company size, funding, and tech stack.",
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
      desc: "Share interactive scope documents and proposals. Get notified the exact moment client stakeholders review your rates.",
      bullets: [
        { text: "Real-time proposal open telemetry", icon: FileCheck },
        { text: "Page-by-page viewing duration heatmaps", icon: BarChart3 },
        { text: "1-click Calendly review call scheduler", icon: Calendar },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">Proposal Opened: 4 Mins Ago</div>
          <div className="text-slate-600">Client reviewing Section 3: Engineering Team Rates</div>
          <div className="text-emerald-600 font-bold">Notification Dispatched to Rep ✓</div>
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
