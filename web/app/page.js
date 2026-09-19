import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Code2,
  Smartphone,
  Palette,
  Megaphone,
  TrendingUp,
  Building2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Zap,
  ShieldCheck,
  Users,
  MessageSquare,
  BarChart3,
} from "lucide-react";

export default function HomePage() {
  const itServices = [
    {
      title: "Web & Cloud Architecture",
      desc: "Enterprise Next.js, Node.js, Laravel & AWS cloud systems built for ultra-fast performance and infinite scale.",
      href: "/services/web-development",
      icon: Code2,
      tags: ["Next.js", "Laravel", "AWS", "Microservices"],
    },
    {
      title: "Mobile App Engineering",
      desc: "Cross-platform iOS and Android mobile applications developed with Flutter and React Native with native fluidity.",
      href: "/services/mobile-apps",
      icon: Smartphone,
      tags: ["iOS", "Android", "Flutter", "React Native"],
    },
    {
      title: "UI/UX Product Design",
      desc: "Pixel-perfect, conversion-driven design systems, user journeys, and interactive prototypes built in Figma.",
      href: "/services/ui-ux-design",
      icon: Palette,
      tags: ["Design Systems", "Prototyping", "Design Audit"],
    },
    {
      title: "Performance Digital Marketing",
      desc: "Data-driven Meta Ads, Google Ads funnels, and organic SEO strategies that deliver verified ROI and customer acquisition.",
      href: "/services/digital-marketing",
      icon: Megaphone,
      tags: ["Meta Ads", "Google Ads", "SEO", "Lead Funnels"],
    },
  ];

  const businessServices = [
    {
      title: "Business Growth Planner",
      desc: "Custom growth frameworks, financial forecasting, unit economics modeling, and actionable go-to-market strategies.",
      href: "/business/growth-planner",
      icon: TrendingUp,
      highlight: "High ROI Roadmap",
    },
    {
      title: "Business Setup & Incorporation",
      desc: "Turnkey company registration (Pvt Ltd, LLP), GST, MSME, banking setup, and corporate compliance made painless.",
      href: "/business/setup",
      icon: Building2,
      highlight: "100% Compliant",
    },
    {
      title: "Free Business Consulting",
      desc: "A dedicated 45-minute strategy session with senior tech architects and startup advisors to review your business roadmap.",
      href: "/free-consulting",
      icon: Sparkles,
      highlight: "Free 45-Min Session",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-24">
        {/* ================================================================= */}
        {/* 1. HERO SECTION                                                   */}
        {/* ================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F2] via-white to-slate-50/50 pt-16 pb-24 lg:pt-24 lg:pb-32">
          {/* Subtle Ambient Orbs */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-orange-400/15 to-amber-300/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#e57a0b] text-xs sm:text-sm font-semibold mb-8 animate-in fade-in slide-in-from-top-3 duration-500">
              <Sparkles className="w-4 h-4 text-[#F7941D]" />
              <span>Technology Studio, Business Growth & SaaS Products</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-5xl mx-auto mb-6">
              Engineering Modern Technology.{" "}
              <span className="text-[#F7941D]">Accelerating Business Growth.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
              From enterprise web & cloud engineering to complete company setup, business consulting, and our flagship <strong>Edfosys CRM</strong>, we provide the full engine for ambitious modern businesses to scale.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/crm"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <span>Explore Edfosys CRM</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/free-consulting"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 shadow-sm transition-all duration-200 hover:border-slate-300 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-5 h-5 text-[#F7941D]" />
                <span>Book Free 45-Min Strategy</span>
              </Link>
            </div>

            {/* Quick Proof Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-slate-200/80">
              <div>
                <div className="text-3xl font-extrabold text-slate-900">1,200+</div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">Businesses Empowered</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#F7941D]">₹15 Cr+</div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">Transactions Handled</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-slate-900">99.9%</div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">System Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#F7941D]">100%</div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">IP & Code Ownership</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. FLAGSHIP SPOTLIGHT: EDFOSYS CRM                                */}
        {/* ================================================================= */}
        <section className="py-20 lg:py-28 bg-[#0C3246] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold uppercase tracking-wider mb-6">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Flagship SaaS Product</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
                  Edfosys CRM: <span className="text-[#F7941D]">Stop Losing Leads.</span> Close Deals Faster.
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                  Built specifically for high-growth teams in Real Estate, Education, Immigration, and Professional Consulting. Centralize Facebook, Google Ads, and website enquiries with automated WhatsApp follow-ups.
                </p>

                <div className="space-y-3.5 mb-10">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm sm:text-base">
                      <strong>Multi-Tenant Architecture</strong>: Dedicated database isolation and custom domain support.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm sm:text-base">
                      <strong>Official WhatsApp Business API</strong>: Instant trigger messages, templates & reminders.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm sm:text-base">
                      <strong>Visual Sales Pipeline</strong>: Drag-and-drop Kanban tracking with role-based team permissions.
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/crm"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>View CRM Features & Pricing</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://app.edfosys.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all text-center"
                  >
                    Start 14-Day Free Trial
                  </a>
                </div>
              </div>

              {/* Interactive Product Feature Card Showcase */}
              <div className="bg-slate-900/60 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs text-slate-400 font-mono ml-2">app.edfosys.com</span>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-semibold">
                    Live Pipeline
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 my-6">
                  <div className="bg-slate-800/80 border border-slate-700/70 p-4 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400">Total Leads Today</span>
                      <Users className="w-4 h-4 text-[#F7941D]" />
                    </div>
                    <div className="text-2xl font-bold text-white">128</div>
                    <span className="text-[11px] text-emerald-400">+24% vs yesterday</span>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/70 p-4 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400">WhatsApp Sent</span>
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">412</div>
                    <span className="text-[11px] text-slate-400">98% open rate</span>
                  </div>
                </div>

                {/* Pipeline visual rows */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className="flex items-center space-x-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                      <span className="text-sm font-semibold text-white">New Enquiry: Rahul Mehta</span>
                    </div>
                    <span className="text-xs text-[#F7941D] font-bold">₹4.5L Deal</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className="flex items-center space-x-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="text-sm font-semibold text-white">Demo Scheduled: Apex Study</span>
                    </div>
                    <span className="text-xs text-emerald-400 font-bold">Meeting 3:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className="flex items-center space-x-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      <span className="text-sm font-semibold text-white">Closed Won: Skyline Realty</span>
                    </div>
                    <span className="text-xs text-emerald-400 font-bold">Payment Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. PILLAR A: DIGITAL & IT ENGINEERING SERVICES                    */}
        {/* ================================================================= */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-4">
                <span>Pillar 1: Technology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Enterprise Digital & IT Engineering
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                We design and build bulletproof digital products, cloud backends, and mobile systems tailored to your exact business specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {itServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="p-8 rounded-3xl border border-slate-200/90 bg-slate-50/40 hover:bg-[#FFF9F2] hover:border-orange-200 transition-all duration-300 hover:shadow-xl group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-[#F7941D] transition-colors">
                      <Icon className="w-7 h-7 text-[#F7941D] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#F7941D] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-sm font-bold text-[#F7941D] hover:text-[#e57a0b] transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. PILLAR B: BUSINESS GROWTH & SETUP SERVICES                     */}
        {/* ================================================================= */}
        <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                <span>Pillar 2: Growth & Scaling</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Business Growth, Setup & Advisory
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Technology is only half the battle. We help you incorporate, plan revenue trajectories, set up corporate banking, and build predictable client acquisition engines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {businessServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-[#F7941D] transition-colors">
                          <Icon className="w-6 h-6 text-[#F7941D] group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                          {service.highlight}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F7941D] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {service.desc}
                      </p>
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center text-sm font-bold text-[#F7941D] hover:underline"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* High-Impact Free Consulting Banner */}
            <div className="bg-gradient-to-r from-[#F7941D] to-[#e57a0b] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-extrabold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
                  Zero Commitment Strategy Call
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mt-4 mb-2">
                  Get Free 45-Min Business Setup & Tech Architecture Consulting
                </h3>
                <p className="text-orange-100 text-sm sm:text-base leading-relaxed">
                  Sit down with our senior advisors. We will audit your tech stack, outline your incorporation roadmap, and design a custom customer acquisition plan.
                </p>
              </div>
              <Link
                href="/free-consulting"
                className="flex-shrink-0 px-8 py-4 rounded-xl font-bold bg-white text-slate-900 hover:bg-slate-100 shadow-xl transition-all hover:scale-105"
              >
                Claim Free Session →
              </Link>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. FINAL HIGH-CONVERSION CTA                                      */}
        {/* ================================================================= */}
        <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Ready to Build Your Next Scalable Breakthrough?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Partner with Edfosys for elite engineering, company growth architecture, and our game-changing Edfosys CRM platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-consulting"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl shadow-orange-500/25 transition-all"
              >
                Book Free Consulting Session
              </Link>
              <Link
                href="/crm"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
              >
                View Edfosys CRM Platform
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
