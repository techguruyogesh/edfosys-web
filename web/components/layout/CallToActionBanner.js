"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function CallToActionBanner({
  badge = "Ready to Scale?",
  title = "Ready to Accelerate Your Sales Pipeline?",
  highlight = "Edfosys",
  subtitle = "Experience why 1,200+ ambitious businesses trust Edfosys to capture more leads, automate workflows, and close high-value deals.",
  primaryCtaText = "Start 14-Day Free Trial",
  primaryCtaLink = "https://app.edfosys.com/signup",
  secondaryCtaText = "Schedule Free Strategy Session",
  secondaryCtaLink = "/free-consulting",
  trustBadges = [
    "No credit card required",
    "2-minute self-serve setup",
    "Cancel anytime",
  ],
}) {
  const isPrimaryExternal = primaryCtaLink.startsWith("http");

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#092232] via-[#0C3246] to-[#061824] p-8 sm:p-14 lg:p-16 text-center text-white border border-slate-700/60 shadow-2xl shadow-slate-900/20">
          {/* Ambient luminous glow orbs */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#F7941D]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 text-orange-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/15 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F7941D]" />
              <span>{badge}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] mb-6">
              {title}{" "}
              {highlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] via-amber-400 to-orange-400">
                  {highlight}
                </span>
              )}
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
              {subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              {isPrimaryExternal ? (
                <a
                  href={primaryCtaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl shadow-orange-500/30 transition-all hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              ) : (
                <Link
                  href={primaryCtaLink}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl shadow-orange-500/30 transition-all hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}

              {secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all flex items-center justify-center space-x-2"
                >
                  <span>{secondaryCtaText}</span>
                </Link>
              )}
            </div>

            {/* Trust Badges */}
            {trustBadges && trustBadges.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                {trustBadges.map((badgeText, idx) => (
                  <span key={idx} className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1.5 flex-shrink-0" />
                    <span>{badgeText}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
