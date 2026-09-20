import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, MessageSquare } from "lucide-react";

export default function IndustryHero({
  badge = "Industry Edition",
  title,
  highlightText,
  subtitle,
  industrySlug = "general",
  metrics = [],
}) {
  return (
    <section className="bg-gradient-to-b from-[#FFF9F2] via-white to-slate-50/60 pt-16 pb-16 lg:pt-24 lg:pb-20 border-b border-slate-100 relative overflow-hidden">
      {/* Soft atmospheric gradient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-6">
          <Zap className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
          {title}{" "}
          {highlightText && (
            <span className="text-[#F7941D] block sm:inline">
              {highlightText}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
          {subtitle}
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={`https://app.edfosys.com/signup?industry=${industrySlug}`}
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
            <span>Schedule Live 1-on-1 Demo</span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs text-slate-500 mb-14">
          <span className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> No credit card required
          </span>
          <span className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> 2-minute instant tenant activation
          </span>
          <span className="flex items-center">
            <MessageSquare className="w-4 h-4 text-emerald-500 mr-1.5" /> Official Meta WhatsApp Cloud API
          </span>
          <span className="flex items-center">
            <ShieldCheck className="w-4 h-4 text-emerald-500 mr-1.5" /> Isolated tenant database
          </span>
        </div>

        {/* Quick KPI Stat Highlights */}
        {metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto pt-6 border-t border-slate-200/70">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0C3246] mb-1">
                  {m.value}
                </div>
                <div className="text-xs text-slate-500 font-medium leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
