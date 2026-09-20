import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import CallToActionBanner from "@/components/layout/CallToActionBanner";
import { Sparkles, ShieldCheck, Heart, Award, ArrowRight, Building2, Code2 } from "lucide-react";

export const metadata = {
  title: "About Edfosys | Technology Studio & Business Growth Accelerators",
  description:
    "Discover the story behind Edfosys. We combine elite software engineering, enterprise cloud architectures, and dedicated business setup consulting for growing modern firms.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Obsession with Code Quality",
      desc: "We write clean, documented, typed code built on resilient architectures that withstand production traffic spikes.",
      icon: Code2,
    },
    {
      title: "Real Business Value First",
      desc: "Technology is a tool to drive revenue. Every feature we engineer must directly improve retention, conversion, or operational efficiency.",
      icon: Sparkles,
    },
    {
      title: "100% Intellectual Property Ownership",
      desc: "You own every line of code, database schema, and design asset we produce. Zero vendor lock-in, forever.",
      icon: ShieldCheck,
    },
    {
      title: "Long-Term Partnership",
      desc: "We don't do fly-by-night gigs. We stand alongside founders from early incorporation through multi-crore enterprise scale.",
      icon: Heart,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-28">
        <section className="bg-gradient-to-b from-[#FFF9F2] to-white py-16 lg:py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 text-[#F7941D]" />
              <span>Our Story & Mission</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto mb-6">
              Bridging the Gap Between <span className="text-[#F7941D]">Elite Technology</span> and Real Business Scaling
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Founded in Ahmedabad, Gujarat, Edfosys was born to solve a critical problem: ambitious entrepreneurs were either stuck with non-technical business advisors or brilliant developers who didn&apos;t understand unit economics. We united both disciplines under one roof.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-16">
              Our Core Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-[#FFF9F2] hover:border-orange-200 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#F7941D]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Floating CTA Banner */}
        <CallToActionBanner
          badge="Partner with Edfosys"
          title="Want to Work with"
          highlight="Us?"
          subtitle="Whether you need enterprise software engineering, custom cloud architecture, or strategic business scaling guidance, our senior team is ready to accelerate your journey."
          primaryCtaText="Book 45-Min Strategy Session"
          primaryCtaLink="/free-consulting"
          secondaryCtaText="Contact Us Directly"
          secondaryCtaLink="/contact"
          trustBadges={[
            "Direct architect access",
            "Actionable tech roadmap",
            "100% confidential",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
