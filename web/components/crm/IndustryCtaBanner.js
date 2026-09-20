import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function IndustryCtaBanner({
  industryName = "Your Industry",
  industrySlug = "general",
  headline = "Ready to Transform Your Sales Pipeline?",
  subhead = "Join 1,200+ high-growth teams closing more deals with Edfosys CRM.",
}) {
  return (
    <section className="py-20 bg-[#0C3246] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-orange-500/20 via-blue-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-[#F7941D]" />
          <span>Tailored for {industryName}</span>
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          {headline}
        </h3>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {subhead}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={`https://app.edfosys.com/signup?industry=${industrySlug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl shadow-orange-500/30 transition-all hover:scale-[1.02] flex items-center justify-center space-x-2 text-base"
          >
            <span>Start 14-Day Free Trial</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <Link
            href="/free-consulting"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/25 transition-all text-base"
          >
            Talk to an Industry Specialist
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1.5" /> No credit card required
          </span>
          <span className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1.5" /> Free migration from spreadsheets
          </span>
          <span className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1.5" /> Full WhatsApp template onboarding
          </span>
        </div>
      </div>
    </section>
  );
}
