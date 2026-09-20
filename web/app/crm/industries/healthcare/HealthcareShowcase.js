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
      label: "Doctor Slot Scheduler",
      badge: "Calendly-Style Triage",
      icon: Calendar,
      headline: "Book Doctor Appointments with Real-Time Chamber Availability",
      desc: "Allow patients to book consultations online or via receptionist intake. Prevent double-booking across multi-specialist doctors, diagnostic labs, and treatment rooms with live slot synchronization.",
      bullets: [
        "Specialist doctor profiles with chamber operating hours",
        "Configurable slot durations (15-min follow-up, 45-min detailed consultation)",
        "Instant WhatsApp booking voucher with clinic directions",
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
                <div className="text-[10px] text-slate-500">Chief Dermatologist • Chamber 4</div>
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
            <span className="text-xs font-bold text-emerald-600">Token #18 ✓</span>
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
      desc: "Patients routinely forget appointments or arrive unprepared. Send automated 24-hour and 2-hour WhatsApp notifications with fasting instructions, clinic location pin, and 1-tap reschedule buttons.",
      bullets: [
        "Fasting instructions for diagnostic & blood panel tests",
        "Interactive 'Confirm' or 'Reschedule' quick-reply buttons",
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
              <div>⚠️ <strong>Preparation:</strong> Bring previous prescription records</div>
            </div>
            <div className="pt-1 flex gap-2">
              <button className="flex-1 py-1.5 bg-emerald-600 text-white font-bold rounded-lg text-[10px] text-center">
                ✓ Confirm Appointment
              </button>
              <button className="py-1.5 px-3 bg-slate-100 text-slate-700 font-bold rounded-lg text-[10px]">
                Reschedule
              </button>
            </div>
            <div className="text-[9px] text-right text-slate-400">06:12 PM ✓✓</div>
          </div>
        </div>
      ),
    },
    {
      id: "patient-record",
      label: "Patient Summary Card",
      badge: "Clinical Triage",
      icon: HeartPulse,
      headline: "View Patient History, Prescriptions & Notes at a Glance",
      desc: "Give doctors and receptionists a 360-degree patient view. Track past visits, chief complaints, ongoing medications, and allergies in one clean, privacy-compliant interface.",
      bullets: [
        "Chronological consultation & prescription history",
        "Prominent allergy and chronic condition warnings",
        "HIPAA/NDHM compliant data segregation",
      ],
      widgetContent: (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold text-slate-900">Patient: Sunita Rao (Age 34)</div>
              <div className="text-[10px] text-slate-500">UHID: HC-99820 • Blood Group: B+</div>
            </div>
            <span className="text-[10px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded">
              Allergy: Penicillin
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex justify-between font-bold text-slate-800">
                <span>Last Consultation: 12 Aug 2026</span>
                <span className="text-slate-400 font-normal">Dr. Priya Patel</span>
              </div>
              <div className="text-[11px] text-slate-600 mt-1">
                Diagnosis: Acute Contact Dermatitis
              </div>
              <div className="text-[10px] text-emerald-700 font-medium mt-0.5">
                Prescription: Topical Cream 1% (14-Day Cycle)
              </div>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100 text-[11px] text-emerald-800 flex justify-between items-center font-medium">
            <span>Next Recommended Checkup: Due This Week</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
        </div>
      ),
    },
    {
      id: "post-care",
      label: "Retention & Care Cadence",
      badge: "Post-Care Retention",
      icon: Activity,
      headline: "Automate Prescription Refill & Preventive Checkup Reminders",
      desc: "Turn one-time clinic visits into lifelong patient loyalty. Automatically trigger 30-day, 90-day, and annual preventive health checkup reminders via WhatsApp.",
      bullets: [
        "Automated post-treatment wellness check-ins at 48 hours",
        "Refill alerts for chronic condition medications",
        "Automated Google Reviews feedback booster",
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
                <div className="text-[10px] text-slate-500">One-click slot re-booking link</div>
              </div>
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                +42% Retention
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
      desc: "Patients book appointments via website, Google Business, or clinic call desk into a unified doctor schedule.",
      bullets: [
        { text: "Specialist & chamber routing", icon: Stethoscope },
        { text: "Prevent double-booking clashes", icon: CheckCircle2 },
        { text: "Instant WhatsApp confirmation voucher", icon: MessageSquare },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-800">
            <span>Online Booking: Cardiology</span>
            <span className="text-emerald-600">Confirmed</span>
          </div>
          <div className="text-[10px] text-slate-500">Patient: Rajesh Gupta • Tomorrow 11:30 AM</div>
          <div className="text-[9px] text-blue-600 font-semibold">Chamber: Room 102</div>
        </div>
      ),
    },
    {
      title: "Remind & Prep",
      timing: "Automated",
      desc: "Send automated WhatsApp reminders with fasting guidelines, medication pauses, and GPS clinic map pins.",
      bullets: [
        { text: "24h and 2h countdown reminders", icon: Clock },
        { text: "1-tap confirm or reschedule buttons", icon: CheckCircle2 },
        { text: "Fasting & test preparation rules", icon: Activity },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">WhatsApp Reminder Dispatched</div>
          <div className="text-slate-600">"Appointment in 2 Hours. Fasting required for lipid profile."</div>
          <div className="text-emerald-600 font-bold">Patient Confirmed Attendance ✓</div>
        </div>
      ),
    },
    {
      title: "Consult & Record",
      timing: "In-Clinic",
      desc: "Doctors view patient history, record prescription summaries, and flag follow-up intervals in 30 seconds.",
      bullets: [
        { text: "Unified past visit history", icon: FileHeart },
        { text: "Allergy & chronic condition flags", icon: ShieldCheck },
        { text: "Digital prescription slip generation", icon: Stethoscope },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1 text-[10px]">
          <div className="font-bold text-slate-900">Consultation Completed</div>
          <div className="text-slate-600">Prescription dispatched to patient's WhatsApp</div>
          <div className="text-blue-600 font-semibold">Follow-up set: 14 Days</div>
        </div>
      ),
    },
    {
      title: "Retain & Care",
      timing: "Long-Term",
      desc: "Trigger automated wellness check-ins, medication refill reminders, and annual preventive health packages.",
      bullets: [
        { text: "Day 2 recovery check-in message", icon: Sparkles },
        { text: "Prescription refill reminder rules", icon: Clock },
        { text: "Google 5-star review automated request", icon: CheckCircle2 },
      ],
      preview: (
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-900">
            <span>Care Cadence Triggered</span>
            <span className="text-emerald-600">Active</span>
          </div>
          <div className="text-[10px] text-slate-500">Patient rated care 5/5 on Google Reviews ★★★★★</div>
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
