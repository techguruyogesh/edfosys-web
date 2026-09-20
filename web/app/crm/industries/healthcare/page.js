import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryHero from "@/components/crm/IndustryHero";
import HealthcareShowcase from "./HealthcareShowcase";
import IndustryCtaBanner from "@/components/crm/IndustryCtaBanner";

export const metadata = {
  title: "Healthcare & Clinic CRM | Edfosys CRM",
  description:
    "Automate patient appointments, multi-doctor queue scheduling, WhatsApp pre-consultation reminders, and post-care follow-up cadences with Edfosys Healthcare CRM.",
};

export default function HealthcareCrmPage() {
  const metrics = [
    { value: "70%", label: "Reduction in No-Show Rates" },
    { value: "4.8★", label: "Average Patient Review Score" },
    { value: "3x", label: "Repeat Consultation Retention" },
    { value: "100%", label: "HIPAA Compliant Isolation" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <IndustryHero
          badge="Healthcare & Wellness Clinics"
          title="Automate Patient Appointments."
          highlightText="Deliver Continuous Care."
          subtitle="The modern CRM built for multi-specialty clinics, dental practices, and diagnostic centers. Eliminate no-shows with WhatsApp reminders, streamline doctor schedules, and foster lifelong patient retention."
          industrySlug="healthcare"
          metrics={metrics}
        />

        {/* Interactive Calendly-Style Showcase & Workflow */}
        <HealthcareShowcase />

        {/* Problem & Solution Deep Dive */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Why Standard Software Fails Healthcare Clinics
              </h2>
              <p className="text-slate-600 text-base">
                Outdated desktop software or complex hospital enterprise tools frustrate front desk staff and fail to communicate on modern channels like WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Costly Patient No-Shows</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  When patients forget their slots, doctors sit idle while other waiting patients are turned away, costing clinics thousands in lost daily revenue.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Zero Post-Care Retention</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Once the patient leaves the clinic, there is zero communication. Follow-ups, medication refills, and chronic condition tests fall through the cracks.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xl mb-6">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">The Edfosys Fix</h3>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Automated WhatsApp reminders with 1-click confirmation slash no-shows to under 8%, while automated care cadences boost repeat patient retention 3-fold.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <IndustryCtaBanner
          industryName="Healthcare & Clinics"
          industrySlug="healthcare"
          headline="Ready to Modernize Your Clinic's Patient Experience?"
          subhead="Start your 14-day free trial. Set up doctor chambers and WhatsApp reminders in under 10 minutes."
        />
      </main>

      <Footer />
    </>
  );
}
