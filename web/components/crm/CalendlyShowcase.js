"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function CalendlyShowcase({
  badge = "Interactive Showcase",
  title,
  subtitle,
  tabs = [],
  signupSlug = "general",
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentTab = tabs[activeIdx] || tabs[0];

  if (!tabs.length) return null;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAF9F5] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Dreamy Gradient Backdrop Container (Calendly Style) */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-tr from-sky-200/60 via-blue-100/40 to-amber-100/40 p-4 sm:p-8 lg:p-12 border border-white/80 shadow-2xl shadow-blue-900/5">
          {/* Top Interactive Icon Bar with Pointer Indicator */}
          <div className="flex justify-center -mt-8 sm:-mt-12 mb-6 sm:mb-8 relative z-10">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-xl p-2 rounded-2xl sm:rounded-3xl border border-white/90 shadow-xl gap-2 sm:gap-3">
              {tabs.map((tab, idx) => {
                const isActive = activeIdx === idx;
                const Icon = tab.icon;
                return (
                  <div key={tab.id || idx} className="relative">
                    <button
                      onClick={() => setActiveIdx(idx)}
                      className={`relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-[#0C3246] text-white shadow-lg shadow-slate-900/25 scale-105"
                          : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
                      }`}
                      aria-label={tab.label || tab.badge}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Connecting Pointer Teardrop when active (matching Calendly's tab indicator) */}
                    {isActive && (
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-[#0C3246] transition-all" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Pure White Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-10 lg:p-12 min-h-[460px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id || activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Column: Feature Narrative */}
                <div className="lg:col-span-6 space-y-5">
                  {/* Category Pill */}
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-orange-50 text-[#F7941D] text-xs font-bold uppercase tracking-wider">
                    {currentTab.icon && <currentTab.icon className="w-3.5 h-3.5" />}
                    <span>{currentTab.badge || currentTab.label}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    {currentTab.headline}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {currentTab.desc}
                  </p>

                  {/* Bullet points if provided */}
                  {currentTab.bullets && (
                    <ul className="space-y-2.5 pt-1">
                      {currentTab.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTAs */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <a
                      href={`https://app.edfosys.com/signup?industry=${signupSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl font-bold text-sm bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/20 transition-all flex items-center space-x-2 hover:scale-[1.02]"
                    >
                      <span>Try This Workflow Free</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    {currentTab.secondaryLink && (
                      <Link
                        href={currentTab.secondaryLink}
                        className="text-sm font-bold text-slate-700 hover:text-[#0C3246] underline decoration-slate-300 underline-offset-4"
                      >
                        {currentTab.secondaryLabel || "Learn more →"}
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Column: Custom Interactive Micro-UI Widget */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100/80 p-4 sm:p-7 border border-slate-200/80 shadow-inner flex items-center justify-center">
                    {currentTab.widgetContent}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
