import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  Megaphone,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  BarChart,
  Layers,
  Sparkles,
  HelpCircle,
  Share2,
} from "lucide-react";

export const metadata = {
  title: "Performance Marketing & SEO Growth Services | Edfosys",
  description:
    "Data-driven customer acquisition, Meta & Google Lead Ads, Server-Side CAPI tracking, and programmatic SEO designed for profitable customer acquisition.",
};

export default function DigitalMarketingPage() {
  const capabilities = [
    {
      title: "Meta Ads & Lead Gen Funnels (FB & IG)",
      desc: "High-converting paid acquisition campaigns across Facebook and Instagram. Instant on-platform lead forms connected to real-time CRM webhooks within 0.4 seconds.",
      icon: Target,
      bullets: [
        "Hyper-targeted lookalike and custom interest audience segmentation",
        "Multi-variant dynamic creative testing (video hooks, carousels, copy)",
        "Direct webhook lead routing to sales reps with zero manual delays",
      ],
    },
    {
      title: "Google Search & Performance Max Campaigns",
      desc: "Capture high-intent commercial buyers actively searching for your solutions. Rigorous negative keyword grooming, single-keyword ad groups, and smart bidding.",
      icon: Megaphone,
      bullets: [
        "High-intent bottom-of-funnel keyword bidding strategies",
        "Performance Max assets optimized for offline CRM deal settlements",
        "Target CPA and Target ROAS algorithmic bid management",
      ],
    },
    {
      title: "Server-Side Tracking & Meta CAPI",
      desc: "Bypass iOS 14+ tracking restrictions and ad-blockers with server-to-server Conversions API (CAPI) and Google Tag Manager Server Containers for 100% data fidelity.",
      icon: Layers,
      bullets: [
        "Direct server-side Meta Conversions API (CAPI) event ingestion",
        "First-party cookie architecture with complete offline conversion sync",
        "Accurate source attribution eliminating duplicate conversion reporting",
      ],
    },
    {
      title: "Technical SEO & Programmatic Scaling",
      desc: "Dominate search engine results pages with sub-second Core Web Vitals, semantic JSON-LD schema markup, programmatic landing pages, and topical authority clusters.",
      icon: TrendingUp,
      bullets: [
        "Core Web Vitals optimization achieving green score percentiles",
        "Programmatic SEO frameworks generating targeted vertical pages",
        "High-authority contextual backlink acquisition and digital PR",
      ],
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      desc: "Scientific split testing of landing page headlines, form fields, social proof badges, and CTAs to turn existing traffic into qualified enterprise sales pipeline.",
      icon: BarChart,
      bullets: [
        "A/B multivariate split testing across messaging and offer hooks",
        "Hotjar session recording analysis to pinpoint drop-off friction",
        "Form completion optimization cutting field abandonment by 35%",
      ],
    },
    {
      title: "WhatsApp & Omnichannel Retargeting",
      desc: "Re-engage cold prospects and abandoned inquiries across WhatsApp, SMS, and programmatic display ads with personalized discount cadences and social proof.",
      icon: Share2,
      bullets: [
        "Automated WhatsApp re-engagement flows for non-responsive leads",
        "Dynamic remarketing ads customized by specific viewed products",
        "High-retention customer win-back email sequences",
      ],
    },
  ];

  const marketingTools = [
    { name: "Meta Ads Manager", category: "Paid Social" },
    { name: "Google Ads", category: "Search & PMax" },
    { name: "Google Analytics 4", category: "Web Analytics" },
    { name: "Google Tag Manager", category: "Tagging & CAPI" },
    { name: "Meta Conversions API", category: "Server-Side" },
    { name: "SEMrush", category: "SEO & Competitor Intel" },
    { name: "Ahrefs", category: "Backlinks & Keywords" },
    { name: "Hotjar", category: "Heatmaps & CRO" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Growth Audit & Unit Economics",
      desc: "We analyze your historical CAC, customer LTV, sales closing rates, and competitor ad creatives to establish profitable unit targets.",
    },
    {
      step: "02",
      title: "Tracking & Conversion Infrastructure",
      desc: "Flawless implementation of GA4, Google Tag Manager, Meta CAPI server-side tracking, and CRM webhook ingestion.",
    },
    {
      step: "03",
      title: "Creative Production & Offer Hooks",
      desc: "High-converting video ads, banner carousels, and dedicated landing pages tailored to specific buyer pain points.",
    },
    {
      step: "04",
      title: "Launch & Algorithmic Scaling",
      desc: "Careful ad spend ramp-up with rapid budget allocation toward winning audience segments and high-ROAS creative angles.",
    },
    {
      step: "05",
      title: "Continuous CRO & Lead Quality Review",
      desc: "Weekly feedback loop with your sales team to eliminate bogus leads and feed qualified deal data back to ad algorithms.",
    },
  ];

  const faqs = [
    {
      q: "How fast will we see qualified leads after launching campaigns?",
      a: "For paid search and Meta lead ads, incoming inquiries typically begin flowing within 24 to 48 hours of campaign activation. Algorithmic optimization and cost-per-lead stabilization typically occur over the first 14 days as conversion data accumulates.",
    },
    {
      q: "How do you ensure lead quality rather than just low-cost spam leads?",
      a: "We implement multi-step qualifying questions inside the ad forms (e.g. budget, timeframe, city) and utilize offline conversion tracking: when your sales team marks a deal as 'Qualified' or 'Closed' in the CRM, our server-side integration signals Meta and Google to optimize exclusively for similar high-intent buyers.",
    },
    {
      q: "What ad budget do you recommend starting with?",
      a: "We typically advise a minimum monthly ad spend of ₹40,000 to ₹1,00,000 ($500 to $1,500) for testing and algorithm calibration across 2-3 target channels, scaling spend aggressively as profitable CAC and ROAS benchmarks are proven.",
    },
    {
      q: "Do we retain full ownership of our ad accounts and data?",
      a: "Yes, 100%. All campaigns run inside your own Meta Business Manager and Google Ads accounts. You retain complete ownership of all historical data, pixel pixels, audiences, and creative assets.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-28">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#FFF9F2] via-white to-slate-50 py-16 lg:py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-6">
                <Megaphone className="w-4 h-4 text-[#F7941D]" />
                <span>Performance Marketing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Data-Driven Customer Acquisition Engineered for{" "}
                <span className="text-[#F7941D]">Profitable ROAS</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
                We scale ambitious businesses with full-funnel Meta Ads, Google Ads, server-side CAPI telemetry, and technical SEO that turns clicks into verified pipeline revenue.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/free-consulting"
                  className="px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25 transition-all"
                >
                  Request Growth Audit
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-all"
                >
                  Discuss Ad Strategy
                </Link>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">4.2x</div>
                  <div className="text-xs text-slate-500 font-medium">Average Client ROAS</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">-38%</div>
                  <div className="text-xs text-slate-500 font-medium">Lower Cost Per Lead</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Server-Side CAPI Verified</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Full-Funnel Acquisition Capabilities
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Every marketing rupee is tracked through offline CRM settlements to optimize purely for revenue, not vanity impressions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-[#FFF9F2] hover:border-orange-200 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-[#F7941D] transition-colors">
                        <Icon className="w-6 h-6 text-[#F7941D] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F7941D] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-slate-200/60 text-xs text-slate-700">
                      {cap.bullets.map((b, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Marketing Stack */}
        <section className="py-16 bg-slate-50 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F7941D]">Ad & Analytics Stack</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Platforms We Master & Manage
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {marketingTools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center hover:border-orange-300 transition-all"
                >
                  <div className="text-sm font-bold text-slate-900">{tool.name}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold mt-1">
                    {tool.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Our 5-Stage Growth Acceleration Cadence
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                A scientific, experiment-driven methodology ensuring predictable pipeline growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((s) => (
                <div key={s.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="text-2xl font-extrabold text-[#F7941D] mb-2">{s.step}</div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">{s.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                Frequently Asked Marketing Questions
              </h3>
              <p className="text-sm text-slate-600">
                Honest answers on budget allocation, attribution, and expected returns.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="text-base font-bold text-slate-900 mb-2 flex items-start">
                    <HelpCircle className="w-5 h-5 text-[#F7941D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>{f.q}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0C3246] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-extrabold mb-4">
              Ready to Accelerate Your Customer Acquisition?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Get an honest audit of your current ad campaigns, tracking infrastructure, and conversion funnel with our senior growth strategists.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-consulting"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl"
              >
                Book Free Growth Audit
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20"
              >
                Request Retainer Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
