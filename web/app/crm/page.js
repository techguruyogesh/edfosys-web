import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Users,
  Target,
  BarChart3,
  ShieldCheck,
  Building2,
  GraduationCap,
  Plane,
  Gavel,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Edfosys CRM | Multi-Industry Lead Management & WhatsApp Automation",
  description:
    "Capture, track, and convert leads with Edfosys CRM. Purpose-built for Education, Real Estate, Immigration, and Consulting teams with native WhatsApp Cloud API integration.",
};

export default function CrmOverviewPage() {
  const industries = [
    {
      title: "Education & Institutes",
      desc: "Track student inquiries, counselor follow-ups, and admission conversion pipelines.",
      icon: GraduationCap,
      href: "/crm/industries#education",
    },
    {
      title: "Real Estate & Builders",
      desc: "Manage property site visits, broker commissions, and automated WhatsApp inventory alerts.",
      icon: Building2,
      href: "/crm/industries#real-estate",
    },
    {
      title: "Immigration & Visa",
      desc: "Case milestone tracking, document verification checklists, and automated status alerts.",
      icon: Plane,
      href: "/crm/industries#immigration",
    },
    {
      title: "Auctions & High-Value Deals",
      desc: "Consignor lot inventory, bidder registrations, premium calculations, and settlements.",
      icon: Gavel,
      href: "/crm/industries#auction",
    },
  ];

  const keyFeatures = [
    {
      title: "Official WhatsApp Cloud API",
      desc: "Send instant templated notifications, follow-up sequences, and document reminders directly to your leads' WhatsApp with 98% open rates.",
      icon: MessageSquare,
    },
    {
      title: "Multi-Source Lead Capture",
      desc: "Connect Facebook Lead Ads, Google Ads webhooks, landing pages, and walk-ins into a unified, de-duplicated inbox in real time.",
      icon: Target,
    },
    {
      title: "Visual Kanban Sales Pipeline",
      desc: "Drag-and-drop deals across custom qualification stages. Spot pipeline bottlenecks and revenue opportunities instantly.",
      icon: BarChart3,
    },
    {
      title: "Strict Multi-Tenant Database Isolation",
      desc: "Your data is physically segregated in dedicated tenant databases. Enterprise-grade encryption at rest and in transit.",
      icon: ShieldCheck,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* CRM Hero */}
        <section className="bg-gradient-to-b from-[#FFF9F2] via-white to-slate-50 py-16 lg:py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-3.5 h-3.5" />
              <span>Flagship SaaS Product</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6">
              Stop Losing Leads. Start Closing Deals with{" "}
              <span className="text-[#F7941D]">Edfosys CRM</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
              The modern CRM engineered for high-velocity teams. Capture Meta & Google Ads leads instantly, automate WhatsApp follow-up workflows, and close 40% more deals without manual data entry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://app.edfosys.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl shadow-orange-500/25 transition-all hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/crm/pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-white text-slate-800 border-2 border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center space-x-2"
              >
                <span>View Pricing Plans</span>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-6 text-xs text-slate-500">
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> No credit card required
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> 2-minute self-serve setup
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> Cancel anytime
              </span>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Engineered for Sales Performance
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Everything your team needs to capture, nurture, and close leads without complexity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-[#FFF9F2] hover:border-orange-200 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-[#F7941D] transition-colors">
                      <Icon className="w-6 h-6 text-[#F7941D] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F7941D] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Verticals */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Tailored for Your Industry Workflow
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Pre-configured pipeline stages and document checklists customized for your specific market.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.title}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#F7941D]" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">
                        {ind.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {ind.desc}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#F7941D]">
                      Optimized Pipeline →
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0C3246] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-extrabold mb-4">
              Ready to Accelerate Your Sales Pipeline?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Get set up in 2 minutes. Experience why 1,200+ businesses trust Edfosys CRM.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.edfosys.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl"
              >
                Create Free Account
              </a>
              <Link
                href="/free-consulting"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20"
              >
                Schedule Custom Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
