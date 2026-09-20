import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HubShowcase from "./HubShowcase";
import IndustryCtaBanner from "@/components/crm/IndustryCtaBanner";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  Plane,
  Stethoscope,
  Briefcase,
  Gavel,
  Zap,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Users,
  Database,
  Layers,
} from "lucide-react";
import FaqSection from "@/components/common/FaqSection";

export const metadata = {
  title: "Industry-Specific CRM Solutions | Edfosys CRM",
  description:
    "Explore tailored CRM editions built for Education, Real Estate, Immigration, Healthcare, B2B Services, and Auctions. Pre-configured pipelines, WhatsApp Cloud API, and zero custom coding.",
  alternates: {
    canonical: "https://edfosys.com/crm/industries",
  },
};

export default function IndustriesHubPage() {
  const industries = [
    {
      id: "education",
      title: "Education & Coaching Institutes",
      slug: "education",
      href: "/crm/industries/education",
      icon: GraduationCap,
      badge: "EdTech & Academies",
      tagline: "Enroll More Students. Eliminate Admission Drop-offs.",
      desc: "Capture student inquiries from Meta Ads & Justdial, route to counselors in seconds, and automate entrance exam and fee alerts via WhatsApp Cloud API.",
      features: [
        "Automated counselor round-robin distribution",
        "Mock test & entrance exam WhatsApp alerts",
        "Batch quota & seat reservation pipeline",
        "Marksheet & KYC document collection",
      ],
      metric: "45% Faster Response",
      iconBg: "bg-orange-100 text-[#F7941D]",
    },
    {
      id: "real-estate",
      title: "Real Estate & Builders",
      slug: "real-estate",
      href: "/crm/industries/real-estate",
      icon: Building2,
      badge: "Developers & CP Networks",
      tagline: "Sell Properties Faster. Automate Site Visits & Inventory.",
      desc: "Live multi-tower unit inventory grid, automated geo-tagged site visit scheduling with driver dispatch, and instant WhatsApp floor plan broadcasts.",
      features: [
        "Live unit inventory grid (Available, Hold, Sold)",
        "Calendly-style site visit booking link",
        "Instant WhatsApp 3D walkthrough brochure bot",
        "Channel partner / broker commission ledger",
      ],
      metric: "60% Higher Attendance",
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      id: "immigration",
      title: "Immigration & Visa Consultancies",
      slug: "immigration",
      href: "/crm/industries/immigration",
      icon: Plane,
      badge: "Study Abroad & PR",
      tagline: "Scale Visa Applications Without Paperwork Chaos.",
      desc: "Manage multi-country intakes (Canada, UK, Australia), automate document checklists with expiry alerts, and cut 80% of applicant status calls with WhatsApp pushes.",
      features: [
        "Automated CRS & PR point calculator",
        "Document vault with WhatsApp expiry warnings",
        "Embassy lodgement & biometrics milestone tracker",
        "Multi-country intake roadmap (Fall/Spring)",
      ],
      metric: "80% Fewer Status Calls",
      iconBg: "bg-emerald-100 text-emerald-600",
    },
    {
      id: "healthcare",
      title: "Healthcare & Wellness Clinics",
      slug: "healthcare",
      href: "/crm/industries/healthcare",
      icon: Stethoscope,
      badge: "Clinics & Specialists",
      tagline: "Automate Patient Appointments. Deliver Continuous Care.",
      desc: "Multi-doctor chamber scheduling, automated WhatsApp fasting & GPS directions to slash no-shows, and automated 30-day post-consultation care cadences.",
      features: [
        "Doctor chamber queue & slot management",
        "24h & 2h WhatsApp countdown reminders",
        "Patient consultation history & allergy flags",
        "Automated medication refill & review triggers",
      ],
      metric: "70% Drop in No-Shows",
      iconBg: "bg-rose-100 text-rose-600",
    },
    {
      id: "b2b-services",
      title: "IT & B2B Service Agencies",
      slug: "b2b-services",
      href: "/crm/industries/b2b-services",
      icon: Briefcase,
      badge: "Agencies & Consultancies",
      tagline: "Close High-Ticket B2B Deals with Predictable Pipelines.",
      desc: "Manage 6-figure enterprise deals, track live proposal opens with page-by-page duration telemetry, and automate sprint milestone invoicing.",
      features: [
        "High-ticket consultative sales Kanban",
        "Real-time proposal open telemetry & heatmaps",
        "Executive WhatsApp meeting & sprint cadence",
        "Automated sprint milestone invoicing & receipts",
      ],
      metric: "35% Faster Sales Cycle",
      iconBg: "bg-purple-100 text-purple-600",
    },
    {
      id: "auctions",
      title: "Auctions & High-Value Deals",
      slug: "auctions",
      href: "/crm/industries/auctions",
      icon: Gavel,
      badge: "Fine Art & Luxury Assets",
      tagline: "Manage Bidders, Lots & Settlements in One Secure System.",
      desc: "Catalog consignor lots with reserve price locks, verify high-net-worth bidders with deposit escrow, and drive live bidding wars with WhatsApp outbid alerts.",
      features: [
        "Consignor lot registry & confidential reserve",
        "Bidder PAN / Passport KYC & paddle allocation",
        "5-second live WhatsApp outbid notifications",
        "Instant hammer settlement & buyer premium calc",
      ],
      metric: "0 Defaulted Bids",
      iconBg: "bg-amber-100 text-amber-700",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Hub Hero */}
        <section className="bg-gradient-to-b from-[#FFF9F2] via-white to-slate-50/70 py-16 lg:py-24 border-b border-slate-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-3.5 h-3.5" />
              <span>Purpose-Built SaaS Editions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
              CRMs Engineered for How Your Industry{" "}
              <span className="text-[#F7941D]">Actually Sells</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Generic CRMs take 6 months of expensive customization and still feel clunky. Edfosys delivers pre-configured sales pipelines, document vaults, and official WhatsApp Cloud API triggers built specifically for your vertical.
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
                href="/free-consulting"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-white text-slate-800 border-2 border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Book 1-on-1 Demo Call</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> No credit card required
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> 2-minute instant tenant setup
              </span>
              <span className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-emerald-500 mr-1.5" /> Isolated tenant databases
              </span>
            </div>
          </div>
        </section>

        {/* Interactive Calendly-Style Showcase on the Hub */}
        <HubShowcase />

        {/* 6-Card Industry Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Explore All 6 Industry Editions
              </h2>
              <p className="text-slate-600 text-base">
                Each edition comes with pre-configured pipeline stages, document checklists, and WhatsApp templates out of the box.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.id}
                    className="rounded-3xl border border-slate-200/90 bg-white hover:border-orange-300 hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl ${ind.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-extrabold text-[#0C3246] bg-slate-100 px-3 py-1 rounded-full">
                          {ind.metric}
                        </span>
                      </div>

                      <div className="text-xs font-bold uppercase tracking-wider text-[#F7941D] mb-1">
                        {ind.badge}
                      </div>

                      <h3 className="text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-[#F7941D] transition-colors">
                        {ind.title}
                      </h3>

                      <p className="text-sm font-semibold text-slate-700 mb-3">
                        {ind.tagline}
                      </p>

                      <p className="text-xs text-slate-600 leading-relaxed mb-6">
                        {ind.desc}
                      </p>

                      {/* Feature checklist */}
                      <div className="space-y-2.5 mb-8 pt-2 border-t border-slate-100">
                        {ind.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={ind.href}
                        className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#0C3246] group-hover:text-[#F7941D] transition-colors"
                      >
                        <span>View Edition Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <a
                        href={`https://app.edfosys.com/signup?industry=${ind.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-slate-500 hover:text-slate-900 underline"
                      >
                        Try Free
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enterprise Foundation Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enterprise Grade Security</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                The Enterprise Foundation Behind Every Edition
              </h2>
              <p className="text-slate-600 text-base">
                No matter which industry edition you choose, you get the full power of our enterprise multi-tenant cloud architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-[#F7941D]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Meta Cloud API</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Official WhatsApp Cloud API integration with 98% open rates and zero risk of phone number bans.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Database className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Tenant DB Isolation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every company gets its own physically segregated database. Your confidential client leads are never mixed.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Smart Round-Robin</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fair, automated lead distribution across your sales team with shift awareness and auto-reassignment timers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">Google Sheets Sync</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bi-directional background polling to keep marketing spreadsheets and CRM records automatically synchronized.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry FAQs */}
        <FaqSection
          badge="Industry FAQ"
          title="Frequently Asked Questions About Industry CRM Editions"
          subtitle="How our purpose-built vertical workflows give your sales and operational teams an unfair advantage."
          faqs={[
            {
              q: "Why should we choose an industry-tailored CRM instead of generic CRM software?",
              a: "Generic CRMs require months of expensive consultant setup, third-party middleware plugins, and ongoing maintenance to handle vertical workflows like site visits, counselor quotas, or patient consultations. Edfosys CRM delivers pre-configured pipeline stages, document checklists, and native WhatsApp automation out of the box.",
            },
            {
              q: "Can we customize pipeline stages and custom fields for our specific process?",
              a: "Yes. While every industry edition includes pre-tested stage workflows, administrators have full control to add, edit, or reorder pipeline stages, custom qualification attributes, and lead status tags.",
            },
            {
              q: "How does data migration work from our existing spreadsheets or legacy CRM?",
              a: "We provide an automated CSV/Excel import wizard with column auto-mapping and phone number normalization. For enterprise migrations with over 20,000 records, our engineering team handles end-to-end database migration with zero downtime.",
            },
            {
              q: "Can multi-branch operations be managed under a single organization account?",
              a: "Yes. Edfosys CRM includes built-in multi-branch isolation. Branch managers and sales reps only see their authorized territory data, while executive leadership enjoys real-time company-wide roll-up analytics.",
            },
          ]}
        />

        {/* Global CTA Banner */}
        <IndustryCtaBanner
          industryName="Your Industry"
          industrySlug="general"
          headline="Ready to Close More Deals with a Purpose-Built CRM?"
          subhead="Start your 14-day free trial. Experience the difference a dedicated industry workflow makes for your sales team."
        />
      </main>

      <Footer />
    </>
  );
}
