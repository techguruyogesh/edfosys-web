"use client";

import { Sparkles, MessageSquare, Target, BarChart3, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function CalendlyPillarsGrid({
  badge = "The Modern CRM Suite",
  title = "More than lead tracking — An automated revenue engine",
  subtitle = "Everything your sales team needs to capture, nurture, and close deals without juggling 5 disconnected tools.",
}) {
  const pillars = [
    {
      id: "lead-capture",
      title: "Multi-Source Lead Sync",
      tag: "Instant Capture",
      tagIcon: Target,
      tagBg: "bg-blue-50 text-blue-700",
      gradient: "from-sky-400/90 via-blue-600 to-indigo-700",
      pillText: "Inbound Lead Captured",
      pillIcon: Zap,
      pillColor: "bg-blue-600 text-white shadow-lg shadow-blue-500/30",
      mockup: (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/80 p-5 space-y-3 text-slate-800">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-slate-900">Meta Lead Ad Ingest</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              0.4s Latency
            </span>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="font-bold text-slate-900">Rohan Mehta (VP Technology)</div>
            <div className="text-[11px] text-slate-500">+91 98765 43210 • Mumbai</div>
            <div className="text-[10px] text-blue-700 font-semibold bg-blue-50/80 p-1.5 rounded-lg">
              Campaign: Q4 Enterprise Tech Modernization
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500">
            <span>De-duplicated: Phone & Email</span>
            <span className="text-emerald-600 font-bold">Allocated ✓</span>
          </div>
        </div>
      ),
      headline: "Zero-latency lead capture",
      caption: "trusted by 1,200+ fast-growing sales teams across India & GCC.",
    },
    {
      id: "whatsapp-automation",
      title: "Official WhatsApp Cloud",
      badgeText: "Official API",
      tag: "WhatsApp Automation",
      tagIcon: MessageSquare,
      tagBg: "bg-emerald-50 text-emerald-700",
      gradient: "from-emerald-400/90 via-teal-600 to-cyan-700",
      pillText: "Delivered via Meta Cloud",
      pillIcon: Sparkles,
      pillColor: "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30",
      mockup: (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/80 p-5 space-y-3 text-slate-800">
          <div className="space-y-1 text-xs border-b border-slate-100 pb-2.5">
            <div className="text-[11px] text-slate-500">
              To: <strong className="text-slate-800">Rohan Mehta</strong>
            </div>
            <div className="text-[10px] text-slate-400">
              Trigger: <span className="text-emerald-600 font-semibold">Immediate Form Submission</span>
            </div>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1.5">
            <p className="font-semibold text-slate-900 leading-snug">
              Hi Rohan! 👋 Thanks for requesting our Enterprise CRM brochure.
            </p>
            <p className="text-[11px] text-slate-600">
              Here is your custom demo link & pricing breakdown.
            </p>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
              ✨ Auto-Triggered in 3 Sec
            </span>
            <span className="text-[10px] text-slate-400 font-medium">98% Open Rate ✓✓</span>
          </div>
        </div>
      ),
      headline: "A 24/7 WhatsApp sales engine",
      caption: "that engages inbound prospects before they look at competitors.",
    },
    {
      id: "pipeline-kanban",
      title: "Visual Sales Pipeline",
      tag: "Deal Velocity",
      tagIcon: BarChart3,
      tagBg: "bg-purple-50 text-purple-700",
      gradient: "from-purple-500/90 via-indigo-600 to-slate-900",
      pillText: "Deal Won & Settled",
      pillIcon: CheckCircle2,
      pillColor: "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30",
      mockup: (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/80 p-5 space-y-3 text-slate-800">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div>
              <div className="text-xs font-bold text-slate-900">Enterprise Cloud Deal</div>
              <div className="text-[10px] text-slate-500">Acme Corp • Annual License</div>
            </div>
            <span className="text-xs font-extrabold text-emerald-600">₹24,00,000</span>
          </div>

          {/* Pipeline stage tracker */}
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>Stage: Proposal & Contract Sign-off</span>
              <span className="font-bold text-indigo-600">100% Won</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-full rounded-full w-full" />
            </div>
          </div>

          <div className="p-2 bg-indigo-50/60 rounded-xl border border-indigo-100 text-[10px] text-indigo-900 flex justify-between items-center font-medium">
            <span>Invoice & Receipt Dispatched</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
          </div>
        </div>
      ),
      headline: "A visual sales pipeline",
      caption: "that forecasts revenue accurately and stops deals from slipping.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 3-Pillar Cards Grid (Directly modeled after Calendly Reference media_1789882719397.png) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {pillars.map((item) => {
            const TagIcon = item.tagIcon;
            const PillIcon = item.pillIcon;
            return (
              <div key={item.id} className="flex flex-col justify-between group">
                <div>
                  {/* Top Category Tag */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className={`p-1.5 rounded-lg ${item.tagBg}`}>
                      <TagIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-slate-900">
                      {item.title}
                    </span>
                    {item.badgeText && (
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                        {item.badgeText}
                      </span>
                    )}
                  </div>

                  {/* Visual Mockup Box with Gradient Backdrop & Floating UI Card */}
                  <div
                    className={`relative rounded-3xl bg-gradient-to-br ${item.gradient} p-6 sm:p-7 pt-10 sm:pt-12 shadow-xl shadow-slate-900/10 transition-transform duration-300 group-hover:scale-[1.01]`}
                  >
                    {/* Floating Overlapping Action Pill Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                      <div
                        className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold ${item.pillColor} transition-transform group-hover:scale-105`}
                      >
                        <PillIcon className="w-3.5 h-3.5" />
                        <span>{item.pillText}</span>
                      </div>
                    </div>

                    {/* Nested White Micro-UI Widget */}
                    <div className="mt-2 relative z-0">
                      {item.mockup}
                    </div>
                  </div>
                </div>

                {/* Caption / Narrative under the visual card */}
                <div className="mt-6">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    <strong className="text-slate-950 font-bold">{item.headline}</strong>{" "}
                    <span className="text-slate-500 font-normal">{item.caption}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-14 text-center">
          <Link
            href="/crm/features"
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#F7941D] hover:text-[#e57a0b] group"
          >
            <span>Explore all enterprise platform features</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
