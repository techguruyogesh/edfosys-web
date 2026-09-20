import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import CrmMainShowcase from "@/components/crm/CrmMainShowcase";
import CrmPanelFeatures from "@/components/crm/CrmPanelFeatures";
import CrmIntegrationsEcosystem from "@/components/crm/CrmIntegrationsEcosystem";
import CallToActionBanner from "@/components/layout/CallToActionBanner";
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  Building2,
  GraduationCap,
  Plane,
  Gavel,
  Stethoscope,
  Briefcase,
} from "lucide-react";
import FaqSection from "@/components/common/FaqSection";

export const metadata = {
  title: "Edfosys CRM | Multi-Industry Lead Management & WhatsApp Automation",
  description:
    "Capture, track, and convert leads with Edfosys CRM. Purpose-built for Education, Real Estate, Immigration, Healthcare, B2B Services, and Auctions with native WhatsApp Cloud API integration.",
  alternates: {
    canonical: "https://edfosys.com/crm",
  },
};

export default function CrmOverviewPage() {
  const industries = [
    {
      title: "Education & Institutes",
      desc: "Track student inquiries, counselor follow-ups, and admission conversion pipelines.",
      icon: GraduationCap,
      href: "/crm/industries/education",
      badge: "EdTech",
    },
    {
      title: "Real Estate & Builders",
      desc: "Manage property site visits, broker commissions, and automated WhatsApp inventory alerts.",
      icon: Building2,
      href: "/crm/industries/real-estate",
      badge: "Real Estate",
    },
    {
      title: "Immigration & Visa",
      desc: "Case milestone tracking, document verification checklists, and automated status alerts.",
      icon: Plane,
      href: "/crm/industries/immigration",
      badge: "Visa",
    },
    {
      title: "Healthcare & Clinics",
      desc: "Doctor queue scheduling, automated WhatsApp reminder directions, and post-care cadences.",
      icon: Stethoscope,
      href: "/crm/industries/healthcare",
      badge: "Healthcare",
    },
    {
      title: "IT & B2B Services",
      desc: "Consultative high-ticket deal stages, proposal view alerts, and milestone billing.",
      icon: Briefcase,
      href: "/crm/industries/b2b-services",
      badge: "Agencies",
    },
    {
      title: "Auctions & High-Value Deals",
      desc: "Consignor lot inventory, bidder registrations, premium calculations, and settlements.",
      icon: Gavel,
      href: "/crm/industries/auctions",
      badge: "Auctions",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-28">
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
                href="https://app.edfosys.com/signup"
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

        {/* Calendly-Style Product Pillars, Interactive Showcase & Workflow Stepper */}
        <CrmMainShowcase />

        {/* Complete Operations Suite: All Panel Capabilities */}
        <CrmPanelFeatures />

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <Link
                    key={ind.title}
                    href={ind.href}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-[#F7941D] transition-colors">
                          <Icon className="w-6 h-6 text-[#F7941D] group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                          {ind.badge}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#F7941D] transition-colors">
                        {ind.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {ind.desc}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 text-xs font-bold text-[#F7941D]">
                      <span>Explore Dedicated Edition</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center">
              <Link
                href="/crm/industries"
                className="inline-flex items-center space-x-2 text-sm font-bold text-[#0C3246] hover:text-[#F7941D] transition-colors"
              >
                <span>View all industry editions and vertical comparison →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Connected Integrations Ecosystem */}
        <CrmIntegrationsEcosystem />

        {/* Frequently Asked Questions */}
        <FaqSection
          badge="Product FAQs"
          title="Frequently Asked Questions About Edfosys CRM"
          subtitle="Clear answers on Meta Ads ingestion, WhatsApp Cloud API, tenant database isolation, and security."
          faqs={[
            {
              q: "How does Edfosys CRM capture leads from Facebook and Instagram?",
              a: "Edfosys CRM connects directly to Meta Lead Ads via instant webhooks. When a prospect submits a lead form on Facebook or Instagram, the data is ingested into your CRM pipeline in approximately 0.4 seconds, automatically deduplicated, and assigned to an active sales representative.",
            },
            {
              q: "Does Edfosys CRM use the official Meta WhatsApp Cloud API?",
              a: "Yes. Edfosys CRM integrates directly with the official Meta WhatsApp Cloud API. This allows verified business message dispatch, pre-approved rich media template broadcasts, and dynamic variable insertion with delivery logs and 98% open rates.",
            },
            {
              q: "How does database isolation work in Edfosys CRM?",
              a: "Unlike multi-tenant CRMs that store all customer data in shared tables with tenant ID filters, Edfosys CRM provisions physically isolated database schemas for each organization using stancl/tenancy. Your customer records, financials, and leads are entirely sequestered.",
            },
            {
              q: "Can Edfosys CRM handle multi-branch sales teams and counselor shifts?",
              a: "Yes. Edfosys CRM supports granular multi-branch hierarchies, role-based access control (RBAC), and shift-aware round-robin lead distribution that automatically skips team members who are offline or on approved leave.",
            },
            {
              q: "How does billing and invoicing work within the CRM?",
              a: "Edfosys CRM includes a native GST quotation and invoicing engine. You can create line-item quotations with CGST, SGST, and IGST breakdowns, convert them to tax invoices with one click, and download branded printable PDFs.",
            },
          ]}
        />

        {/* Floating CTA Banner */}
        <CallToActionBanner
          badge="14-Day Risk-Free Trial"
          title="Ready to Accelerate Your Sales Pipeline with"
          highlight="Edfosys CRM?"
          subtitle="Get set up in 2 minutes. Experience why 1,200+ fast-growing businesses trust Edfosys CRM to capture leads and close deals."
          primaryCtaText="Create Free Account"
          primaryCtaLink="https://app.edfosys.com/signup"
          secondaryCtaText="Schedule Custom Demo"
          secondaryCtaLink="/free-consulting"
          trustBadges={[
            "No credit card required",
            "2-minute self-serve setup",
            "Cancel anytime",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
