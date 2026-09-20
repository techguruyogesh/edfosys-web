"use client";

import CalendlyPillarsGrid from "@/components/crm/CalendlyPillarsGrid";
import CalendlyShowcase from "@/components/crm/CalendlyShowcase";
import CalendlyWorkflowGrid from "@/components/crm/CalendlyWorkflowGrid";
import {
  Target,
  MessageSquare,
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  BarChart3,
  Send,
  Lock,
} from "lucide-react";

export default function CrmMainShowcase() {
  // Tabs for the interactive CalendlyShowcase component
  const showcaseTabs = [
    {
      id: "capture-engine",
      label: "Lead Ingestion",
      badge: "Zero-Latency Webhook",
      icon: Target,
      headline: "De-Duplicate & Ingest Inbound Leads in Under 500 Milliseconds",
      desc: "Connect Facebook Lead Ads, Google Ads webhooks, landing pages, and walk-in inquiries into a unified, high-speed inbox. Normalize phone numbers, check for previous deals, and trigger assignment instantly.",
      bullets: [
        "Real-time webhook ingestion with automatic payload sanitization",
        "Phone number normalization & cross-campaign de-duplication",
        "Source attribution tagging across Meta, Google, Organic, and Referrals",
      ],
      secondaryLink: "/crm/pricing",
      secondaryLabel: "View plan limits →",
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-slate-800">Inbound Lead Stream</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Live Webhook Active
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-orange-50/50 border border-orange-100 space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-slate-900">Rohan Mehta (VP Tech)</div>
              <span className="text-[10px] font-bold bg-[#F7941D] text-white px-2 py-0.5 rounded-md">
                High Intent
              </span>
            </div>
            <div className="text-[10px] text-slate-500">Source: Meta Lead Form • +91 98765 43210</div>
            <div className="text-[11px] text-emerald-700 font-semibold pt-1">
              De-duplicated: New Account Created in 0.38s ✓
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
            <span>Allocated Rep: <strong>Karan Verma</strong></span>
            <span className="text-[#0C3246] font-bold">Round-Robin Queue</span>
          </div>
        </div>
      ),
    },
    {
      id: "whatsapp-cloud",
      label: "WhatsApp Cloud",
      badge: "Official Meta API",
      icon: MessageSquare,
      headline: "Broadcast High-Converting Templates with 98% Read Rates",
      desc: "Stop relying on emails that end up in spam. Engage prospects on WhatsApp within 5 seconds of their form submission with personalized brochures, calendar links, and payment reminders.",
      bullets: [
        "Pre-approved Meta business templates with zero phone ban risk",
        "Automated WhatsApp template dispatch & real-time trigger logs",
        "Automated media delivery: PDFs, product brochures & location pins",
      ],
      secondaryLink: "/crm/features",
      secondaryLabel: "See WhatsApp specs →",
      widgetContent: (
        <div className="w-full max-w-md bg-[#EFEAE2] rounded-2xl shadow-xl p-4 space-y-3 font-sans">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-300/60">
            <div className="w-7 h-7 rounded-full bg-[#0C3246] text-white flex items-center justify-center font-bold text-[10px]">
              E
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 flex items-center">
                Edfosys CRM <CheckCircle2 className="w-3 h-3 text-blue-500 ml-1 fill-blue-500 text-white" />
              </div>
              <div className="text-[9px] text-slate-500">Official Meta WhatsApp Partner</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm space-y-2 text-xs text-slate-800">
            <p className="font-semibold text-slate-900">
              Hi Rohan! 👋 Thanks for inquiring about Edfosys CRM.
            </p>
            <p className="text-[11px] text-slate-600">
              Your 14-day free trial workspace is ready. Click below to book your 1-on-1 strategy walkthrough.
            </p>
            <div className="pt-1 flex gap-2">
              <button className="flex-1 py-1.5 bg-[#F7941D] text-white font-bold rounded-lg text-[10px] text-center">
                Pick Strategy Call Slot
              </button>
            </div>
            <div className="text-[9px] text-right text-slate-400">11:02 AM ✓✓</div>
          </div>
        </div>
      ),
    },
    {
      id: "smart-distribution",
      label: "Round-Robin Routing",
      badge: "Automated Allocation",
      icon: Users,
      headline: "Eliminate Sales Rep Favoritism with Smart Round-Robin Queues",
      desc: "Distribute inbound inquiries evenly across sales reps based on shifts, subject expertise, and city geography. Reassign leads automatically if a rep hasn't called within 15 minutes.",
      bullets: [
        "Shift-aware distribution (excludes reps who are on leave or offline)",
        "Subject & course-based specialty routing algorithms",
        "SLA timeout auto-escalation to prevent neglected leads",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
            <span className="font-bold text-slate-800">Sales Rep Capacity Roster</span>
            <span className="text-[10px] text-slate-400">Active Shift</span>
          </div>

          <div className="space-y-2">
            {[
              { name: "Karan Verma", leads: 18, status: "Available", color: "bg-emerald-500" },
              { name: "Sneha Patel", leads: 17, status: "On Call", color: "bg-amber-500" },
              { name: "Amit Shah", leads: 19, status: "Available", color: "bg-emerald-500" },
            ].map((rep, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 text-xs">
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${rep.color}`} />
                  <span className="font-bold text-slate-800">{rep.name}</span>
                </div>
                <div className="text-right">
                  <span className="font-extrabold text-slate-900">{rep.leads} deals</span>
                  <span className="text-[10px] text-slate-400 ml-2">({rep.status})</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2 rounded-lg bg-orange-50/80 border border-orange-100 text-[10px] text-orange-900 flex justify-between items-center font-semibold">
            <span>Next Inbound Assigned To: <strong>Sneha Patel</strong></span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F7941D]" />
          </div>
        </div>
      ),
    },
    {
      id: "database-isolation",
      label: "Tenant DB Isolation",
      badge: "Enterprise Security",
      icon: ShieldCheck,
      headline: "Physically Isolated MySQL Databases for Every Organization",
      desc: "Unlike shared-table CRMs where one bad query exposes other companies' client lists, Edfosys provisions a physically distinct database for each tenant with automated daily encrypted backups.",
      bullets: [
        "Zero cross-tenant data leak vulnerability by architecture",
        "Stancl/Tenancy dynamic connection switching",
        "GDPR & SOC2 readiness with client-owned database export",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-800 p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400 text-[11px]">
            <span className="flex items-center space-x-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>tenant-isolation.conf</span>
            </span>
            <span className="text-emerald-400 font-bold">● Isolated</span>
          </div>

          <div className="space-y-1 text-slate-300 text-[11px] leading-relaxed">
            <div><span className="text-slate-500">// Tenant Database Mapping</span></div>
            <div><span className="text-orange-400">tenant_id</span>: <span className="text-emerald-300">"tnt_enterprise_99"</span></div>
            <div><span className="text-orange-400">database</span>: <span className="text-emerald-300">"crm_tenant_enterprise"</span></div>
            <div><span className="text-orange-400">isolation</span>: <span className="text-blue-300">STRICT_PHYSICAL_SCHEMA</span></div>
            <div><span className="text-orange-400">encryption</span>: <span className="text-blue-300">AES-256-GCM</span></div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400 font-sans">
            <span>Automated Daily Backups: Active</span>
            <span className="text-emerald-400 font-bold">100% Secure</span>
          </div>
        </div>
      ),
    },
  ];

  // 4-Stage Progressive Workflow for main CRM
  const workflowSteps = [
    {
      title: "Capture Inbound",
      timing: "Sub-Second",
      desc: "Ingest leads from Facebook Lead Ads, Google Search, landing pages, and walk-ins directly into your unified workspace.",
      bullets: [
        { text: "De-duplicate repeated mobile numbers", icon: CheckCircle2 },
        { text: "Enrich UTM campaign and source tags", icon: Target },
        { text: "Instant welcome notification trigger", icon: MessageSquare },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-800">
            <span>Meta Lead Form Ingest</span>
            <span className="text-emerald-600 font-semibold">0.4s</span>
          </div>
          <div className="text-[10px] text-slate-500">Lead: Rajiv Bansal (+91 99012...)</div>
          <div className="text-[9px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded inline-block">
            Intent: Enterprise CRM
          </div>
        </div>
      ),
    },
    {
      title: "Route & Qualify",
      timing: "Under 5 Mins",
      desc: "Assign to the best-suited sales rep via round-robin rules and log call outcomes with one-click dispositions.",
      bullets: [
        { text: "Shift-aware round-robin allocation", icon: Users },
        { text: "Click-to-call with call logging", icon: Clock },
        { text: "Auto-reassignment on response delay", icon: Sparkles },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-800">
            <span>Assigned Rep: Sneha Patel</span>
            <span className="text-orange-600 font-bold">First Call</span>
          </div>
          <div className="text-[10px] text-slate-500">Outcome: "Demo Scheduled for Tomorrow"</div>
          <div className="text-[9px] text-emerald-600 font-semibold">Calendar Invite Dispatched ✓</div>
        </div>
      ),
    },
    {
      title: "Automate WhatsApp",
      timing: "Automated",
      desc: "Deliver high-impact WhatsApp brochures, demo links, and personalized proposals directly to the prospect's chat.",
      bullets: [
        { text: "Official Meta WhatsApp Cloud API", icon: MessageSquare },
        { text: "98% open rate within 15 minutes", icon: Sparkles },
        { text: "Pre-approved templates for compliance", icon: CheckCircle2 },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">WhatsApp Brochure Delivered</div>
          <div className="text-slate-600">"Hi Rajiv, here is your tailored proposal..."</div>
          <div className="text-emerald-600 font-bold">Read by Prospect in 4 Mins ✓✓</div>
        </div>
      ),
    },
    {
      title: "Convert & Close",
      timing: "Revenue",
      desc: "Drag deals into Won on your Kanban board, generate GST-compliant invoices, and collect advance payments.",
      bullets: [
        { text: "Visual drag-and-drop Kanban stages", icon: BarChart3 },
        { text: "Instant payment link settlement", icon: CheckCircle2 },
        { text: "Automated onboarding handover", icon: Sparkles },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-900">
            <span>Deal Closed & Settled</span>
            <span className="text-emerald-600 font-extrabold">₹3,50,000 ✓</span>
          </div>
          <div className="text-[10px] text-slate-500">Customer: Bansal Logistics • Growth Plan</div>
          <div className="w-full bg-emerald-500 h-1.5 rounded-full" />
        </div>
      ),
    },
  ];

  return (
    <>
      {/* 1. Calendly 3-Pillar Product Feature Grid (Matching Screenshot 3) */}
      <CalendlyPillarsGrid />

      {/* 2. Calendly Interactive Showcase with Indicator Pointer (Matching Screenshot 1) */}
      <CalendlyShowcase
        badge="Platform Deep Dive"
        title="Experience the Core Engine Behind High-Growth Sales Teams"
        subtitle="Explore the four architectural pillars that give Edfosys CRM unmatched speed, security, and conversion rates."
        tabs={showcaseTabs}
        signupSlug="general"
      />

      {/* 3. Calendly 4-Stage Progressive Workflow Stepper (Matching Screenshot 2) */}
      <CalendlyWorkflowGrid
        badge="The Complete Revenue Journey"
        title="From First Anonymous Ad Click to Closed Deal"
        subtitle="Eliminate pipeline leaks, hold sales reps accountable, and delight buyers across every touchpoint."
        steps={workflowSteps}
        signupSlug="general"
      />
    </>
  );
}
