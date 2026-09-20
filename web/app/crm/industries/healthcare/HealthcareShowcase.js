"use client";

import CalendlyShowcase from "@/components/crm/CalendlyShowcase";
import CalendlyWorkflowGrid from "@/components/crm/CalendlyWorkflowGrid";
import {
  Calendar,
  MessageSquare,
  Activity,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  FileHeart,
  Sparkles,
} from "lucide-react";

export default function HealthcareShowcase() {
  const showcaseTabs = [
    {
      id: "doctor-booking",
      label: "Consultation Scheduling",
      badge: "Organized Slots",
      icon: Calendar,
      headline: "Schedule Specialist Consultations with Clean Time Slots",
      desc: "Allow patients to book consultations online or via front-desk intake. Organize time slots across consultants and treatment centers without double-booking or scheduling chaos.",
      bullets: [
        "Configurable time slots and clinic center hours",
        "Scheduled follow-up reminder alarms for front-desk staff",
        "Instant WhatsApp booking confirmation with Google Maps pin",
      ],
      secondaryLink: "/crm/features",
      secondaryLabel: "See clinic scheduling specs →",
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Dr. Priya Patel, MD</div>
                <div className="text-[10px] text-slate-500">Chief Dermatologist • Vastrapur Center</div>
              </div>
            </div>
            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
              Available Today
            </span>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] font-semibold text-slate-600">Available Evening Slots:</div>
            <div className="grid grid-cols-3 gap-2">
              {["04:30 PM", "05:15 PM", "06:00 PM"].map((time, idx) => (
                <div
                  key={idx}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all ${
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

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-900">Patient: Sunita Rao</div>
              <div className="text-[10px] text-slate-500">Service: Follow-up Skin Consultation</div>
            </div>
            <span className="text-xs font-bold text-emerald-600">Slot Confirmed ✓</span>
          </div>
        </div>
      ),
    },
    {
      id: "whatsapp-reminder",
      label: "No-Show Eliminator",
      badge: "WhatsApp Cloud API",
      icon: MessageSquare,
      headline: "Cut No-Show Rates by 70% with WhatsApp Prep Directions",
      desc: "Patients routinely forget appointments or arrive unprepared. Send automated 24-hour and 2-hour WhatsApp notifications with instructions, clinic location pin, and confirmation buttons.",
      bullets: [
        "Pre-consultation preparation and clinic guidelines",
        "Official Meta Verified WhatsApp message delivery",
        "Google Maps GPS clinic link for effortless navigation",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-[#EFEAE2] rounded-2xl shadow-xl p-4 space-y-3 font-sans">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-300/60">
            <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[10px]">
              +
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 flex items-center">
                Apollo Wellness Clinic <CheckCircle2 className="w-3 h-3 text-blue-500 ml-1 fill-blue-500 text-white" />
              </div>
              <div className="text-[9px] text-slate-500">Verified Healthcare Provider</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm space-y-2 text-xs text-slate-800">
            <p className="font-semibold text-slate-900">
              Hi Sunita! 🏥 This is a reminder for your appointment with Dr. Priya Patel tomorrow.
            </p>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[11px] space-y-1">
              <div>⏰ <strong>Time:</strong> Tomorrow at 05:15 PM</div>
              <div>📍 <strong>Clinic:</strong> Apollo Clinic, 2nd Floor, Vastrapur</div>
              <div>⚠️ <strong>Preparation:</strong> Bring previous treatment records</div>
            </div>
            <div className="pt-1 flex gap-2">
              <button className="flex-1 py-1.5 bg-emerald-600 text-white font-bold rounded-lg text-[10px] text-center">
                ✓ Confirm Attendance
              </button>
            </div>
            <div className="text-[9px] text-right text-slate-400">06:12 PM ✓✓</div>
          </div>
        </div>
      ),
    },
    {
      id: "patient-record",
      label: "Patient Inquiry Profile",
      badge: "Inquiry History",
      icon: HeartPulse,
      headline: "Track Patient Inquiries, Treatment Notes & Follow-ups",
      desc: "Give clinic counselors and receptionists a complete view of every patient. Track consultation stages, treatment packages, internal notes, and scheduled callback reminders in one clean, privacy-compliant interface.",
      bullets: [
        "Chronological inquiry & consultation follow-up logs",
        "Treatment interest and package preference tracking",
        "Dedicated physical database isolation for patient privacy",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
            <span className="font-bold text-slate-800">Patient Treatment Profile</span>
            <span className="text-[10px] font-bold text-emerald-600">Active Patient</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50 text-xs space-y-1">
              <div className="flex justify-between font-bold text-slate-900">
                <span>Sunita Rao (Age 34)</span>
                <span className="text-emerald-700">Package: Laser Rejuvenation</span>
              </div>
              <div className="text-[10px] text-slate-500">Contact: +91 99250 81234 • Ahmedabad</div>
            </div>

            <div className="p-2.5 rounded-xl border border-emerald-100 bg-emerald-50/50 text-xs">
              <div className="font-bold text-emerald-950">Treatment Package Quote</div>
              <div className="text-[10px] text-emerald-800">3 Sessions • ₹18,000 + GST (Invoice #MED-104)</div>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[10px] text-slate-600 flex justify-between items-center">
            <span>Next Follow-up Call: <strong>In 5 Days</strong></span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          </div>
        </div>
      ),
    },
    {
      id: "care-retention",
      label: "Care Cadence Engine",
      badge: "Patient Retention",
      icon: Activity,
      headline: "Automate Routine Check-Ins & Package Follow-ups",
      desc: "Retain patients effortlessly. Automate post-procedure check-ins, periodic treatment reminders, and feedback requests directly through official WhatsApp templates.",
      bullets: [
        "Automated post-treatment wellness check-ins at 48 hours",
        "Follow-up appointment reminder alerts",
        "Treatment package renewal and session reminders",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 space-y-3">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-900">Post-Consultation Automations</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              4 Cadences Active
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Day 2: Recovery Check-In</div>
                <div className="text-[10px] text-slate-500">"How are you feeling after treatment?"</div>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                94% Reply Rate
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-blue-50/40 border border-blue-100 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Day 30: Follow-up Reminder</div>
                <div className="text-[10px] text-slate-500">Session 2 of 3 scheduled</div>
              </div>
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                Active Cadence
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const workflowSteps = [
    {
      title: "Book & Triage",
      timing: "Instant",
      desc: "Inquiries from ad campaigns, website forms, or receptionist intake flow into a unified patient pipeline.",
      bullets: [
        { text: "Specialist & center routing", icon: Stethoscope },
        { text: "Prevent double-booking clashes", icon: CheckCircle2 },
        { text: "Instant WhatsApp confirmation voucher", icon: MessageSquare },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-800">
            <span>Inquiry Captured: Dermatology</span>
            <span className="text-emerald-600">Confirmed</span>
          </div>
          <div className="text-[10px] text-slate-500">Patient: Sunita Rao • Tomorrow 05:15 PM</div>
          <div className="text-[9px] text-blue-600 font-semibold">Center: Vastrapur Branch</div>
        </div>
      ),
    },
    {
      title: "Remind & Prep",
      timing: "Automated",
      desc: "Send automated WhatsApp reminders with appointment details, clinic timings, and GPS map pins.",
      bullets: [
        { text: "24h and 2h countdown reminders", icon: Clock },
        { text: "Appointment attendance confirmation", icon: CheckCircle2 },
        { text: "Google Maps directions link", icon: Activity },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">WhatsApp Reminder Dispatched</div>
          <div className="text-slate-600">"Appointment tomorrow at 5:15 PM at Vastrapur Center."</div>
          <div className="text-emerald-600 font-bold">Delivered via Meta Cloud ✓</div>
        </div>
      ),
    },
    {
      title: "Consult & Quote",
      timing: "In-Clinic",
      desc: "Staff log follow-up notes, record treatment recommendations, and generate professional GST invoices.",
      bullets: [
        { text: "Unified patient follow-up history", icon: FileHeart },
        { text: "Treatment package quotation generator", icon: ShieldCheck },
        { text: "GST tax invoice with 1-click PDF", icon: Stethoscope },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">Treatment Package Quoted</div>
          <div className="text-slate-600">GST Invoice #MED-104 Dispatched to WhatsApp</div>
          <div className="text-blue-600 font-semibold">Follow-up set: 14 Days</div>
        </div>
      ),
    },
    {
      title: "Retain & Care",
      timing: "Long-Term",
      desc: "Trigger automated wellness check-ins, package session reminders, and annual follow-up alerts.",
      bullets: [
        { text: "Day 2 recovery check-in message", icon: Sparkles },
        { text: "Package session follow-up cadences", icon: Clock },
        { text: "Automated Google Reviews feedback request", icon: CheckCircle2 },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-900">
            <span>Care Cadence Triggered</span>
            <span className="text-emerald-600">Active</span>
          </div>
          <div className="text-[10px] text-slate-500">Patient completed session 2 • Follow-up logged</div>
          <div className="w-full bg-emerald-500 h-1.5 rounded-full" />
        </div>
      ),
    },
  ];

  return (
    <>
      <CalendlyShowcase
        badge="Clinical Workflow Tour"
        title="Designed for Doctors, Loved by Patients"
        subtitle="Explore the intuitive interfaces that give clinics effortless scheduling and patients a modern healthcare experience."
        tabs={showcaseTabs}
        signupSlug="healthcare"
      />

      <CalendlyWorkflowGrid
        badge="Care Lifecycle Blueprint"
        title="From Appointment Booking to Ongoing Wellness"
        subtitle="Keep receptionists, nursing staff, doctors, and patients synchronized with zero administrative friction."
        steps={workflowSteps}
        signupSlug="healthcare"
      />
    </>
  );
}
