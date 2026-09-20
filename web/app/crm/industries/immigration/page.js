import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryHero from "@/components/crm/IndustryHero";
import ImmigrationShowcase from "./ImmigrationShowcase";
import IndustryCtaBanner from "@/components/crm/IndustryCtaBanner";

export const metadata = {
  title: "Immigration & Visa Consultancy CRM | Edfosys CRM",
  description:
    "Scale visa applications without paperwork chaos. Track country intakes, automate document checklists, and send automated applicant status alerts via WhatsApp Cloud API.",
};

export default function ImmigrationCrmPage() {
  const metrics = [
    { value: "80%", label: "Fewer Status Inquiry Calls" },
    { value: "99.8%", label: "On-Time Document Filings" },
    { value: "0", label: "Missed Intake Deadlines" },
    { value: "14+", label: "Country Workflows Supported" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <IndustryHero
          badge="Immigration & Visa Consultancies"
          title="Scale Visa Applications."
          highlightText="Without Paperwork Chaos."
          subtitle="The dedicated CRM for study-abroad and permanent residency consultancies. Track global intakes, automate document checklists, and keep applicants updated 24/7 via WhatsApp Cloud API."
          industrySlug="immigration"
          metrics={metrics}
        />

        {/* Interactive Calendly-Style Showcase & Workflow */}
        <ImmigrationShowcase />

        {/* Problem & Solution Deep Dive */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Why Immigration Firms Struggle with Generic Software
              </h2>
              <p className="text-slate-600 text-base">
                Standard CRMs don't understand intake cycles, visa subclasses, or document expiration risks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Endless Status Calls</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Anxious applicants call case officers 3 times a week asking for status updates, devouring hours that should be spent preparing applications.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-6">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Lost & Expired Documents</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Files get rejected at the embassy because a bank statement was older than 28 days or an English test expired during processing.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xl mb-6">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">The Edfosys Fix</h3>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Automated milestone updates via WhatsApp keep clients delighted, while our document audit vault prevents filing errors before embassy lodgement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <IndustryCtaBanner
          industryName="Immigration & Visa"
          industrySlug="immigration"
          headline="Ready to Streamline Your Visa Caseload?"
          subhead="Start your 14-day free trial. Set up your country pipelines and document checklists in under 10 minutes."
        />
      </main>

      <Footer />
    </>
  );
}
