"use client";

import CalendlyShowcase from "@/components/crm/CalendlyShowcase";
import CalendlyWorkflowGrid from "@/components/crm/CalendlyWorkflowGrid";
import {
  GraduationCap,
  Users,
  MessageSquare,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  FileCheck,
} from "lucide-react";

export default function EducationShowcase() {
  const showcaseTabs = [
    {
      id: "inquiry-sync",
      label: "Lead Ingestion",
      badge: "Multi-Channel Capture",
      icon: GraduationCap,
      headline: "Capture Every Student Inquiry Across Ads, Portals & Website",
      desc: "Connect Facebook Lead Ads, Shiksha, Justdial, and your website forms directly into a unified counselor queue. Deduplicate duplicate inquiries automatically and notify counselors in under 10 seconds.",
      bullets: [
        "Real-time webhook ingestion with zero inquiry leakage",
        "Automated de-duplication by phone number and course interest",
        "Instant WhatsApp acknowledgment sent to student within 5 seconds",
      ],
      secondaryLink: "/crm/features",
      secondaryLabel: "Explore lead capture specs →",
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-slate-800">Live Inbound Inquiries</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              4 New Today
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-orange-50/50 border border-orange-100 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0C3246] text-white flex items-center justify-center font-bold text-xs">
                  AP
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Aarav Patel</div>
                  <div className="text-[10px] text-slate-500">+91 98765 43210 • Ahmedabad</div>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-[#F7941D] text-white px-2 py-0.5 rounded-md">
                JEE Advanced 2027
              </span>
            </div>

            <div className="flex items-center justify-between pt-1 text-[11px] text-slate-600">
              <span>Source: <strong className="text-slate-800">Meta Lead Ad</strong></span>
              <span className="text-emerald-700 font-semibold">Allocated: Counselor Sneha</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>Response Time Target:</span>
            </div>
            <span className="font-extrabold text-[#0C3246]">2.4 Mins (Avg)</span>
          </div>
        </div>
      ),
    },
    {
      id: "counselor-routing",
      label: "Counselor Allocation",
      badge: "Smart Round-Robin",
      icon: Users,
      headline: "Distribute Inquiries Fairly by Course, Language & Center",
      desc: "Eliminate counselor favoritism. Route medical aspirants to NEET specialists, engineering leads to JEE mentors, and overseas inquiries to study-abroad counselors automatically.",
      bullets: [
        "Round-robin distribution with counselor shift & leave awareness",
        "Automated re-assignment if an inquiry is uncalled after 15 minutes",
        "One-click click-to-call with call duration & disposition logging",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
            <span className="font-bold text-slate-800">Counselor Availability Queue</span>
            <span className="text-[10px] text-slate-400">Shift Active</span>
          </div>

          <div className="space-y-2">
            {[
              { name: "Pooja Sharma", role: "NEET Medical Lead", leads: 14, status: "On Call", color: "bg-amber-500" },
              { name: "Rahul Verma", role: "JEE Engineering", leads: 18, status: "Available", color: "bg-emerald-500" },
              { name: "Sneha Dave", role: "Foundation 9th-10th", leads: 12, status: "Available", color: "bg-emerald-500" },
            ].map((c, i) => (
              <div key={i} className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-2.5">
                  <span className={`w-2 h-2 rounded-full ${c.color}`} />
                  <div>
                    <div className="text-xs font-bold text-slate-800">{c.name}</div>
                    <div className="text-[10px] text-slate-500">{c.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-extrabold text-slate-900">{c.leads} leads</div>
                  <div className="text-[10px] font-semibold text-slate-500">{c.status}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded-lg bg-orange-50/70 text-[11px] text-orange-800 font-medium flex items-center justify-between">
            <span>Next Round-Robin: <strong>Rahul Verma</strong></span>
            <CheckCircle2 className="w-4 h-4 text-[#F7941D]" />
          </div>
        </div>
      ),
    },
    {
      id: "whatsapp-engagement",
      label: "WhatsApp Cloud Alerts",
      badge: "Official Meta API",
      icon: MessageSquare,
      headline: "Automate Entrance Exam Reminders & Diagnostic Test Slots",
      desc: "98% of students ignore emails. Send instant mock test dates, hall ticket downloads, scholarship results, and webinar links directly to WhatsApp with verified business trust.",
      bullets: [
        "Pre-approved Meta templates for scholarship & admission alerts",
        "Two-way counselor chat directly from the CRM inbox",
        "Automated 24h and 1h countdown reminders before diagnostic tests",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-[#EFEAE2] rounded-2xl shadow-xl p-4 space-y-3 font-sans">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-300/60">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
              E
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 flex items-center">
                Apex Academy <CheckCircle2 className="w-3 h-3 text-blue-500 ml-1 fill-blue-500 text-white" />
              </div>
              <div className="text-[9px] text-slate-500">Official WhatsApp Business Account</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm space-y-2 text-xs text-slate-800">
            <p className="font-semibold text-[#0C3246]">
              Hi Aarav! 👋 Your Scholarship Diagnostic Test for JEE 2027 is confirmed.
            </p>
            <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 text-[11px] space-y-1">
              <div>📅 <strong>Date:</strong> Sunday, 24th Sept 2026</div>
              <div>⏰ <strong>Slot:</strong> 10:00 AM - 12:00 PM</div>
              <div>📍 <strong>Venue:</strong> Apex Drive-In Center, Room 302</div>
            </div>
            <p className="text-[10px] text-slate-500">
              Please carry your Hall Ticket & Aadhar Card.
            </p>
            <div className="pt-1 flex gap-2">
              <button className="flex-1 py-1.5 bg-emerald-600 text-white font-bold rounded-lg text-[10px] text-center">
                Download Hall Ticket PDF
              </button>
            </div>
            <div className="text-[9px] text-right text-slate-400">10:42 AM ✓✓</div>
          </div>
        </div>
      ),
    },
    {
      id: "admission-pipeline",
      label: "Admission Pipeline",
      badge: "Stage Qualification",
      icon: BookOpen,
      headline: "Visual Stages from Counseling to Fee Settlement",
      desc: "Stop tracking admissions on messy paper registers. Move students through clear qualification stages: Counseling -> Demo Class -> Documents Pending -> Seat Advance -> Enrolled with automated GST fee receipts.",
      bullets: [
        "Stage qualification: Inquired → Counseling → Documents → Enrolled",
        "1-click GST invoice & fee receipt generation with company branding",
        "Document collection tracker: Marksheets, ID proofs & certificates",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 space-y-3">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-900">Academic Intake Pipeline</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Intake Active
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Priya Nair</div>
                <div className="text-[10px] text-slate-500">Stage: Admission Fee Invoice Paid</div>
              </div>
              <span className="text-xs font-extrabold text-emerald-600">₹25,000 Paid ✓</span>
            </div>

            <div className="p-2.5 rounded-xl bg-orange-50/50 border border-orange-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Kavya Shah</div>
                <div className="text-[10px] text-slate-500">Stage: Demo Class Attended</div>
              </div>
              <span className="text-xs font-bold text-[#F7941D]">Documents Pending</span>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex justify-between text-[11px] text-slate-500 mb-1">
              <span>Intake Pipeline Progress</span>
              <span>28 Confirmed Enrollments</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#F7941D] h-full rounded-full w-[75%]" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const workflowSteps = [
    {
      title: "Capture",
      timing: "Instant",
      desc: "Ingest student inquiries from Meta Ads, Google search, Justdial, and school seminars automatically into your centralized CRM.",
      bullets: [
        { text: "De-duplicate repeated mobile numbers", icon: CheckCircle2 },
        { text: "Capture preferred stream & course interest", icon: CheckCircle2 },
        { text: "Instant welcome WhatsApp template", icon: MessageSquare },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-800">
            <span>Meta Ad Lead: NEET 2027</span>
            <span className="text-emerald-600">Just Now</span>
          </div>
          <div className="text-[10px] text-slate-500">Student: Riya Deshmukh (+91 98234...)</div>
          <div className="inline-block text-[9px] font-bold bg-orange-100 text-[#e57a0b] px-2 py-0.5 rounded">
            Tag: High Intent
          </div>
        </div>
      ),
    },
    {
      title: "Route & Call",
      timing: "Sub-5 Mins",
      desc: "Assign to counselors via smart round-robin rules based on academic subjects, branches, and active shifts.",
      bullets: [
        { text: "Round-robin distribution with shift awareness", icon: Users },
        { text: "Counselor disposition & follow-up logging", icon: Clock },
        { text: "Scheduled follow-up reminders & alarms", icon: Calendar },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
              PS
            </div>
            <div className="text-[11px] font-bold text-slate-800">Counselor Pooja</div>
          </div>
          <div className="text-[10px] text-slate-600">Call Outcome: "Scheduled Center Visit"</div>
          <div className="text-[9px] text-slate-400">Scheduled: Tomorrow at 4:30 PM</div>
        </div>
      ),
    },
    {
      title: "Engage",
      timing: "Automated",
      desc: "Trigger pre-approved WhatsApp messages with diagnostic test reminders, fee schedules, and course brochures.",
      bullets: [
        { text: "Official Meta WhatsApp Cloud API", icon: MessageSquare },
        { text: "Automated test date & counseling reminders", icon: Clock },
        { text: "98% read rate within 15 minutes", icon: Sparkles },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">WhatsApp Alert: Diagnostic Test</div>
          <div className="text-slate-600">"Hi Riya, your Sunday counseling slot at Center B is reserved..."</div>
          <div className="text-emerald-600 font-bold text-[9px]">Delivered & Read ✓✓</div>
        </div>
      ),
    },
    {
      title: "Enroll & Settle",
      timing: "Conversion",
      desc: "Generate GST-compliant fee invoices, track token deposits, and attach student documents directly in the cloud.",
      bullets: [
        { text: "1-Click GST admission invoice & receipt", icon: CheckCircle2 },
        { text: "Google Drive document vault for certificates", icon: FileCheck },
        { text: "Official enrollment confirmation dispatch", icon: GraduationCap },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-900">
            <span>Admission Confirmed</span>
            <span className="text-emerald-600 font-extrabold">Tax Invoice Generated ✓</span>
          </div>
          <div className="text-[10px] text-slate-500">Student ID: APX-2026-084 • Documents Verified</div>
          <div className="w-full bg-emerald-500 h-1.5 rounded-full" />
        </div>
      ),
    },
  ];

  return (
    <>
      <CalendlyShowcase
        badge="Interactive Workflow Tour"
        title="Experience the Student Journey Built for Admissions"
        subtitle="Click through each tab below to see how top coaching institutes automate their admissions pipeline with Edfosys CRM."
        tabs={showcaseTabs}
        signupSlug="education"
      />

      <CalendlyWorkflowGrid
        badge="End-to-End Admission Funnel"
        title="From First Ad Click to Classroom Enrollment"
        subtitle="Every touchpoint in the student journey is synchronized across your counselors, directors, and finance desks."
        steps={workflowSteps}
        signupSlug="education"
      />
    </>
  );
}
