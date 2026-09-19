import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Palette, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "UI/UX Product Design & Design Systems",
  description:
    "Conversion-first UI/UX design, interactive Figma prototypes, and modular design systems that reduce churn and elevate SaaS user engagement.",
};

export default function UIUXDesignPage() {
  const capabilities = [
    {
      title: "Interactive Prototyping & Wireframing",
      desc: "High-fidelity Figma prototypes modeling user journeys, onboarding flows, and micro-interactions before code is written.",
    },
    {
      title: "Scalable Design Systems",
      desc: "Standardized tokenized color palettes, typography scales, components, and auto-layout patterns for effortless engineering handoff.",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      desc: "Heatmap analysis, friction point elimination, and psychological CTA positioning that drive higher form submissions and sales.",
    },
    {
      title: "Usability Audits & Redesigns",
      desc: "Revitalizing legacy enterprise software into clean, modern, intuitive user interfaces that customers genuinely love using.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <section className="bg-gradient-to-b from-[#FFF9F2] to-white py-16 lg:py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-6">
                <Palette className="w-4 h-4 text-[#F7941D]" />
                <span>Product Design Studio</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                UI/UX Design That Turns Complex Workflows into{" "}
                <span className="text-[#F7941D]">Effortless Growth</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We combine human psychology, modern typography, and clean layouts to craft web & mobile interfaces that convert visitors and retain power users.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/free-consulting"
                  className="px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25 transition-all"
                >
                  Request Design Audit
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-all"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-12">
              Design Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-[#FFF9F2] hover:border-orange-200 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-[#F7941D]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0C3246] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Need a UI/UX Refresh on an Existing Platform?
              </h3>
              <p className="text-slate-300 text-sm">
                Get an actionable 45-minute UX teardown from our lead product designer.
              </p>
            </div>
            <Link
              href="/free-consulting"
              className="px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl flex-shrink-0"
            >
              Book UX Audit →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
