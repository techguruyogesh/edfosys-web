"use client";

import CalendlyShowcase from "@/components/crm/CalendlyShowcase";
import CalendlyWorkflowGrid from "@/components/crm/CalendlyWorkflowGrid";
import {
  Plane,
  FileCheck,
  Globe,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Clock,
  ShieldCheck,
  UserCheck,
  FileText,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export default function ImmigrationShowcase() {
  const showcaseTabs = [
    {
      id: "document-vault",
      label: "Document Vault & Checklists",
      badge: "Zero Missing Papers",
      icon: FileCheck,
      headline: "Automate Document Checklists with WhatsApp Expiry Alerts",
      desc: "Never let an expired passport, delayed WES credential evaluation, or missing bank letter stall an application. Send automated WhatsApp checklists and allow applicants to upload documents straight from their smartphone.",
      bullets: [
        "Country-specific document templates (Canada Express Entry, Australia Subclass 189, UK Student)",
        "Automated WhatsApp reminders 30 days before document expiry",
        "Direct PDF and image review with Approved / Resubmit feedback badges",
      ],
      secondaryLink: "/crm/features",
      secondaryLabel: "Explore document tools →",
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold text-slate-800">Canada PR — Express Entry</div>
              <div className="text-[10px] text-slate-500">Applicant: Rohan Kapur (CRS: 488)</div>
            </div>
            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">
              ITA Received
            </span>
          </div>

          <div className="space-y-2">
            {[
              { title: "IELTS General (L8.5, R8.0, W7.5, S7.5)", status: "Verified", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
              { title: "WES Credential Assessment (ECA)", status: "Verified", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
              { title: "Proof of Funds — 6M Bank Statement", status: "Review Needed", color: "text-amber-700 bg-amber-50 border-amber-200" },
              { title: "Police Clearance Certificate (PCC)", status: "Pending Upload", color: "text-rose-700 bg-rose-50 border-rose-200" },
            ].map((doc, idx) => (
              <div key={idx} className={`flex items-center justify-between p-2 rounded-xl border text-xs ${doc.color}`}>
                <span className="font-medium truncate mr-2">{doc.title}</span>
                <span className="font-bold text-[10px] whitespace-nowrap">{doc.status}</span>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
            <span>Overall Readiness: <strong>75% Completed</strong></span>
            <span className="text-[#F7941D] font-bold">1 Action Required</span>
          </div>
        </div>
      ),
    },
    {
      id: "intake-roadmap",
      label: "Country & Intake Roadmap",
      badge: "Multi-Destination Tracking",
      icon: Globe,
      headline: "Track Fall, Spring & Rolling Deadlines Across 8+ Nations",
      desc: "Manage candidate pipelines across Canada, UK, Australia, USA, Germany, Ireland, and New Zealand. Filter by academic intakes, study permits, PR categories, or work visas without confusing spreadsheets.",
      bullets: [
        "Pre-built intake calendars for major global universities",
        "Automated alerts when university application deadlines are 14 days away",
        "Multi-country options tagged per candidate profile",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
            <span className="font-bold text-slate-800">Target Country Applications</span>
            <span className="text-[10px] text-slate-400">Intake: Fall 2026</span>
          </div>

          <div className="space-y-2">
            {[
              { country: "🇨🇦 Canada", prog: "Univ of Toronto — M.Eng CS", deadline: "15 Oct 2026", status: "Offer Received", badge: "bg-emerald-100 text-emerald-800" },
              { country: "🇬🇧 United Kingdom", prog: "Imperial College — MSc AI", deadline: "30 Nov 2026", status: "SOP Review", badge: "bg-blue-100 text-blue-800" },
              { country: "🇦🇺 Australia", prog: "Univ of Melbourne — IT", deadline: "15 Dec 2026", status: "Docs Incomplete", badge: "bg-amber-100 text-amber-800" },
            ].map((item, idx) => (
              <div key={idx} className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{item.country}</div>
                  <div className="text-[10px] text-slate-500">{item.prog}</div>
                </div>
                <div className="text-right">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${item.badge}`}>
                    {item.status}
                  </span>
                  <div className="text-[9px] text-slate-400 mt-0.5">Due: {item.deadline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "whatsapp-status",
      label: "Automated WhatsApp Alerts",
      badge: "Zero Status Inquiry Calls",
      icon: MessageSquare,
      headline: "Cut 80% of Support Calls with Automated File Status Pushes",
      desc: "Stop answering repetitive 'Has my file been lodged?' calls. Whenever a case officer updates a milestone in Edfosys CRM, the applicant and their sponsor get an instant, personalized WhatsApp notification.",
      bullets: [
        "Milestone triggers: File Lodged, Biometrics Booked, Visa Stamped",
        "Official Meta Verified green badge prevents applicant anxiety",
        "Direct PDF visa grant letter attachment delivery",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-[#EFEAE2] rounded-2xl shadow-xl p-4 space-y-3 font-sans">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-300/60">
            <div className="w-7 h-7 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-[10px]">
              V
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 flex items-center">
                Global Gateway Immigration <CheckCircle2 className="w-3 h-3 text-blue-500 ml-1 fill-blue-500 text-white" />
              </div>
              <div className="text-[9px] text-slate-500">Official Immigration Partner</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm space-y-2 text-xs text-slate-800">
            <p className="font-semibold text-emerald-800">
              🎉 Great news Rohan! Your Canada Study Permit has been submitted to IRCC.
            </p>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[11px] space-y-1">
              <div>📄 <strong>Application Number:</strong> S309948210</div>
              <div>📅 <strong>Submission Date:</strong> 18 Sept 2026</div>
              <div>🛂 <strong>Next Step:</strong> Biometrics Appointment (Letter Attached)</div>
            </div>
            <div className="pt-1 flex gap-2">
              <button className="flex-1 py-1.5 bg-[#0C3246] text-white font-bold rounded-lg text-[10px] text-center">
                View VFS Biometrics Slip
              </button>
            </div>
            <div className="text-[9px] text-right text-slate-400">03:45 PM ✓✓</div>
          </div>
        </div>
      ),
    },
    {
      id: "case-pipeline",
      label: "Case Officer Pipeline",
      badge: "Stage Kanban",
      icon: UserCheck,
      headline: "Track Files from Initial Profile Assessment to Visa Approval",
      desc: "Give case managers a visual Kanban board with strict SLA tracking. Know exactly which files are waiting on SOP reviews, which are stuck at document verification, and which are ready for embassy lodgement.",
      bullets: [
        "Color-coded case risk flags (e.g. low IELTS score, gap year)",
        "Automated reassignment when a case officer is on annual leave",
        "Complete audit trail of every document version and comment",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 space-y-3">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-900">Case Officer: Meera Joshi</span>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              22 Active Files
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Ananya Sen (AUS 500)</div>
                <div className="text-[10px] text-slate-500">Stage: GTE / SOP Polish</div>
              </div>
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                SLA: 2 Days Left
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Karan Mehta (CAN PR)</div>
                <div className="text-[10px] text-slate-500">Stage: Embassy Lodged</div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                Biometrics Done ✓
              </span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[10px] text-slate-600 flex justify-between items-center">
            <span>Visa Approval Ratio (YTD): <strong>98.4%</strong></span>
            <span className="text-emerald-600 font-bold">Industry Benchmark</span>
          </div>
        </div>
      ),
    },
  ];

  const workflowSteps = [
    {
      title: "Intake & Profile",
      timing: "Discovery",
      desc: "Capture applicant education, work experience, IELTS/PTE scores, and target immigration destinations.",
      bullets: [
        { text: "Automated CRS & PR point calculator", icon: CheckCircle2 },
        { text: "De-duplicate repeated passport queries", icon: ShieldCheck },
        { text: "Route to country-specialist advisor", icon: Plane },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-800">
            <span>Assessment: Canada PR</span>
            <span className="text-emerald-600">CRS: 492</span>
          </div>
          <div className="text-[10px] text-slate-500">Applicant: Siddharth Nair • Age: 29</div>
          <div className="text-[9px] text-blue-600 font-semibold">Eligible: Express Entry OINP</div>
        </div>
      ),
    },
    {
      title: "Document Vault",
      timing: "Checklist",
      desc: "Generate tailor-made document checklists and collect PDFs with automated WhatsApp deadline alerts.",
      bullets: [
        { text: "Country-specific checklist templates", icon: FileText },
        { text: "WhatsApp upload links for applicants", icon: MessageSquare },
        { text: "Document expiry warnings (Passports/ECA)", icon: AlertCircle },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">Checklist: Australia Subclass 189</div>
          <div className="text-slate-600">8 of 10 Required Documents Verified</div>
          <div className="text-emerald-600 font-bold">WES & IELTS Approved ✓</div>
        </div>
      ),
    },
    {
      title: "Embassy Filing",
      timing: "Lodgement",
      desc: "Lodge visa files with embassies and track biometrics, medicals, and procedural fairness letters.",
      bullets: [
        { text: "Embassy application tracking numbers", icon: ShieldCheck },
        { text: "Biometrics appointment scheduling", icon: Calendar },
        { text: "Case manager review checklist", icon: CheckCircle2 },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">File Lodged: UK Student Visa</div>
          <div className="text-slate-600">GWF Reference: GWF078992144</div>
          <div className="text-blue-600 font-semibold">VFS Slot: Tuesday 10:00 AM</div>
        </div>
      ),
    },
    {
      title: "Visa Stamping",
      timing: "Celebration",
      desc: "Record final visa grants, trigger celebratory WhatsApp greetings, and initiate post-landing services.",
      bullets: [
        { text: "Instant WhatsApp visa grant notification", icon: Sparkles },
        { text: "Automated student forex & flight referrals", icon: Globe },
        { text: "Google 5-star review automated request", icon: CheckCircle2 },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-900">
            <span>Visa Approved 🎉</span>
            <span className="text-emerald-600 font-bold">CAN-STU-2026</span>
          </div>
          <div className="text-[10px] text-slate-500">Student: Siddharth Nair • Univ of Waterloo</div>
          <div className="w-full bg-emerald-500 h-1.5 rounded-full" />
        </div>
      ),
    },
  ];

  return (
    <>
      <CalendlyShowcase
        badge="Visa Case Engine"
        title="Automate Every Milestone in the Applicant Journey"
        subtitle="Explore the purpose-built modules designed to handle high-stakes immigration workflows with zero errors."
        tabs={showcaseTabs}
        signupSlug="immigration"
      />

      <CalendlyWorkflowGrid
        badge="Immigration Roadmap"
        title="From Initial Assessment to Landing Abroad"
        subtitle="Give your case officers, branch managers, and clients transparent milestone tracking at every step."
        steps={workflowSteps}
        signupSlug="immigration"
      />
    </>
  );
}
