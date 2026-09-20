import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export default function CalendlyWorkflowGrid({
  badge = "End-to-End Workflow",
  title = "How Your Team Wins at Every Stage",
  subtitle = "From first anonymous ad click to closed deal and retention — fully automated.",
  steps = [],
  signupSlug = "general",
}) {
  if (!steps.length) return null;

  return (
    <section className="py-20 bg-slate-50/80 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* 4-Stage Progressive Workflow Cards (Calendly Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number + Title */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-[#F7941D] bg-orange-50 px-2.5 py-1 rounded-lg">
                      Stage 0{idx + 1}
                    </span>
                    {step.timing && (
                      <span className="text-[11px] font-semibold text-slate-400">
                        {step.timing}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2.5 tracking-tight group-hover:text-[#F7941D] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  {/* Bullet points with icon badges */}
                  {step.bullets && (
                    <div className="space-y-3 mb-6">
                      {step.bullets.map((b, bIdx) => {
                        const Icon = b.icon || CheckCircle2;
                        return (
                          <div
                            key={bIdx}
                            className="flex items-start space-x-2.5 text-xs text-slate-700"
                          >
                            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-orange-100 transition-colors">
                              <Icon className="w-3 h-3 text-[#F7941D]" />
                            </div>
                            <span className="leading-snug">{b.text || b}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Micro-UI Preview Widget nested at the bottom of the card */}
                {step.preview && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 p-3.5 border border-slate-200/70 shadow-sm">
                      {step.preview}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Track CTA */}
        <div className="mt-12 text-center">
          <a
            href={`https://app.edfosys.com/signup?industry=${signupSlug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#F7941D] hover:text-[#e57a0b] group"
          >
            <span>Launch this automated pipeline for your team today</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
