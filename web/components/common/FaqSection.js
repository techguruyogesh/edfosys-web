"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FaqPageSchema } from "@/components/seo/JsonLd";

export default function FaqSection({
  badge = "Frequently Asked Questions",
  title = "Got Questions? We Have Answers.",
  subtitle = "Clear, straightforward answers about our software, architecture, and deployment process.",
  faqs = [],
  className = "",
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={`py-20 bg-slate-50/60 border-t border-slate-200/70 relative overflow-hidden ${className}`}>
      {/* JSON-LD Schema for Google Rich Snippets & AEO */}
      <FaqPageSchema faqs={faqs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {badge && (
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100/80 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-4 border border-orange-200/50">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? "border-orange-300/80 shadow-md shadow-orange-500/5 ring-1 ring-orange-200/50"
                    : "border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D]"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </h3>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                      isOpen
                        ? "bg-orange-100 text-[#F7941D] rotate-180"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-100/80 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in-50 duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
