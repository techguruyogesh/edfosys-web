"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Building2,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Server,
  Layers,
  Sparkles,
  BarChart3,
  MessageSquare,
  FileCheck,
} from "lucide-react";

export default function InteractivePillarTabs() {
  const tabs = [
    {
      id: "software",
      label: "Custom Software & Cloud",
      icon: Code2,
      badge: "Engineering",
      headline: "Scalable Web, Mobile & Cloud Systems That Never Crash",
      desc: "Stop wrestling with fragile agency code. We engineer high-throughput Next.js frontends, resilient Laravel APIs, and native-feel Flutter mobile apps built on robust AWS foundations.",
      bullets: [
        "Full IP & source code ownership transferred on day one",
        "Sub-second Core Web Vitals & automated CI/CD deployment",
        "Strict database isolation & automated backup schedules",
      ],
      ctaText: "Explore Engineering Services",
      ctaLink: "/services/web-development",
      previewType: "code",
    },
    {
      id: "setup",
      label: "Turnkey Business Setup",
      icon: Building2,
      badge: "Compliance",
      headline: "Incorporate, Register & Comply in Under 10 Business Days",
      desc: "Skip bureaucratic nightmares. We manage your full Pvt Ltd or LLP incorporation, GST registration, corporate banking onboarding, and trademark protections with zero friction.",
      bullets: [
        "End-to-end MCA filing, DIN registration & DSC issuance",
        "Fast-tracked digital current accounts with top banks",
        "100% legal compliance & startup tax exemption guidance",
      ],
      ctaText: "See Setup Packages",
      ctaLink: "/business/setup",
      previewType: "incorporation",
    },
    {
      id: "crm",
      label: "Edfosys CRM SaaS",
      icon: Zap,
      badge: "Flagship Product",
      headline: "Close 40% More Inbound Leads with Instant WhatsApp Triggers",
      desc: "Never let another inquiry go cold. Edfosys CRM ingests Meta, Google, and website leads in real time, fires automated WhatsApp follow-ups, and empowers sales reps with drag-and-drop pipelines.",
      bullets: [
        "Official Meta WhatsApp Cloud API integration with verified delivery",
        "Industry-specific pipeline stages (Real Estate, Education, Visa)",
        "Automated round-robin lead allocation & manager analytics",
      ],
      ctaText: "Explore Edfosys CRM",
      ctaLink: "/crm",
      previewType: "crm",
    },
    {
      id: "growth",
      label: "Growth Planner & Advisory",
      icon: TrendingUp,
      badge: "Strategy",
      headline: "Scientific Financial Modeling & 90-Day Scaling Roadmaps",
      desc: "Turn vague targets into mathematical certainty. We analyze your unit economics, audit your Customer Acquisition Cost (CAC), and craft a predictable customer acquisition flywheel.",
      bullets: [
        "Dynamic CAC-to-LTV financial modeling & cash flow projections",
        "High-intent paid ad funnels & conversion-rate optimization",
        "Quarterly OKRs with bi-weekly executive checkpoints",
      ],
      ctaText: "View Growth Advisory",
      ctaLink: "/business/growth-planner",
      previewType: "economics",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-24 bg-[#FCFAF7] border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Lattice-style empathetic editorial) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Unified Edfosys Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Everything Ambitious Companies Need to{" "}
            <span className="text-[#F7941D]">Launch & Scale</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Click across our core disciplines below to see how our engineering, business advisory, and CRM platform integrate seamlessly.
          </p>
        </div>

        {/* Interactive Tab Buttons (Lattice-style horizontal slider pills) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 scrollbar-none">
          {tabs.map((tab) => {
            const isSelected = activeTab.id === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 flex items-center space-x-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? "bg-[#0C3246] text-white shadow-lg shadow-slate-900/15 scale-[1.02]"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-[#F7941D]" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display with Framer Motion Transition */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left Column: Editorial Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F7941D] bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                  {activeTab.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
                  {activeTab.headline}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeTab.desc}
                </p>

                <div className="space-y-3 pt-2">
                  {activeTab.bullets.map((b) => (
                    <div key={b} className="flex items-start space-x-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center space-x-4">
                  <Link
                    href={activeTab.ctaLink}
                    className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/20 transition-all flex items-center space-x-2 hover:scale-[1.01]"
                  >
                    <span>{activeTab.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/free-consulting"
                    className="px-5 py-3.5 rounded-xl font-bold text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all"
                  >
                    Book Free Consultation
                  </Link>
                </div>
              </div>

              {/* Right Column: Custom Interactive Simulated UI Box */}
              <div className="lg:col-span-6">
                {activeTab.previewType === "code" && (
                  <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-2xl border border-slate-800 font-mono text-xs space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                      <span className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="ml-2">production-stack.json</span>
                      </span>
                      <span className="text-emerald-400 font-bold">● Healthy</span>
                    </div>
                    <pre className="text-slate-300 leading-relaxed overflow-x-auto text-[11px]">
{`{
  "framework": "Next.js 16 (App Router)",
  "api_engine": "Laravel 12 Multi-Tenant",
  "cloud": "AWS (Auto-Scaling + RDS PostgreSQL)",
  "telemetry": {
    "uptime_sla": "99.98%",
    "p95_latency": "64ms",
    "zero_downtime_deploys": true
  }
}`}
                    </pre>
                    <div className="p-3 bg-slate-800/80 rounded-xl flex items-center justify-between font-sans">
                      <span className="text-xs text-slate-300">Audited Architecture Score</span>
                      <span className="text-xs font-bold text-emerald-400">98 / 100</span>
                    </div>
                  </div>
                )}

                {activeTab.previewType === "incorporation" && (
                  <div className="bg-[#FFF9F2] rounded-2xl p-6 border border-orange-200/80 shadow-lg space-y-3.5">
                    <div className="flex items-center justify-between pb-3 border-b border-orange-200 text-xs">
                      <span className="font-bold text-slate-900">Entity Incorporation Tracker</span>
                      <span className="text-emerald-700 bg-emerald-100 font-bold px-2 py-0.5 rounded-full text-[10px]">
                        Day 6 of 10
                      </span>
                    </div>
                    <div className="space-y-2.5 text-xs">
                      {[
                        { title: "Digital Signature Certificates (DSC)", done: true },
                        { title: "Director Identification Numbers (DIN)", done: true },
                        { title: "Ministry of Corporate Affairs (MCA) Approval", done: true },
                        { title: "Certificate of Incorporation Issued", done: true },
                        { title: "Corporate Bank Current Account & GSTIN", done: false, active: true },
                      ].map((step, i) => (
                        <div
                          key={step.title}
                          className={`p-2.5 rounded-xl flex items-center justify-between border ${
                            step.done
                              ? "bg-white border-emerald-200 text-emerald-900 font-medium"
                              : step.active
                              ? "bg-white border-orange-300 text-orange-950 font-bold shadow-sm"
                              : "bg-slate-100/50 border-slate-200 text-slate-400"
                          }`}
                        >
                          <span className="flex items-center space-x-2">
                            <span className="text-[10px] opacity-60">0{i + 1}</span>
                            <span>{step.title}</span>
                          </span>
                          {step.done ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <span className="text-[10px] text-[#F7941D] animate-pulse font-extrabold">
                              In Progress
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab.previewType === "crm" && (
                  <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-2xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-[#F7941D]" />
                        <span className="font-bold">Real Estate Lead Flow</span>
                      </div>
                      <span className="text-emerald-400 text-[10px] font-bold">Auto-Sync On</span>
                    </div>
                    <div className="p-3 bg-slate-800/80 rounded-xl space-y-1 text-xs">
                      <div className="flex justify-between text-slate-400 text-[10px]">
                        <span>Lead: Amit Patel (WhatsApp)</span>
                        <span>Stage: Site Visit Scheduled</span>
                      </div>
                      <div className="text-white font-bold">Godrej Garden City • 3BHK Penthouse</div>
                      <div className="text-[11px] text-[#F7941D] font-medium">Deal Size: ₹1.45 Crore</div>
                    </div>
                    <div className="p-3 bg-emerald-950/60 border border-emerald-800/60 rounded-xl text-xs space-y-1">
                      <span className="text-emerald-400 font-bold text-[10px] block">
                        Automated WhatsApp Trigger Sent:
                      </span>
                      <p className="text-slate-300 italic text-[11px]">
                        &quot;Hi Amit! Site visit confirmed with Area Manager Rajesh for Saturday 11 AM. Floor plans attached.&quot;
                      </p>
                    </div>
                  </div>
                )}

                {activeTab.previewType === "economics" && (
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                      <span className="font-bold text-slate-900">Unit Economics & CAC Audit</span>
                      <span className="text-emerald-600 font-bold">LTV/CAC = 4.2x (Healthy)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-3 bg-orange-50/70 rounded-xl border border-orange-100">
                        <div className="text-slate-500 text-[10px] uppercase font-bold">Blended CAC</div>
                        <div className="text-xl font-extrabold text-slate-900 mt-0.5">₹420</div>
                        <span className="text-[10px] text-emerald-600 font-medium">↓ 32% vs industry</span>
                      </div>
                      <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100">
                        <div className="text-slate-500 text-[10px] uppercase font-bold">Customer LTV</div>
                        <div className="text-xl font-extrabold text-slate-900 mt-0.5">₹1,760</div>
                        <span className="text-[10px] text-emerald-600 font-medium">↑ 2.4x margin</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1">
                      <div className="flex justify-between text-slate-600 text-[11px]">
                        <span>Payback Period</span>
                        <strong className="text-slate-900">2.1 Months</strong>
                      </div>
                      <div className="flex justify-between text-slate-600 text-[11px]">
                        <span>Lead-to-Client Rate</span>
                        <strong className="text-emerald-600">8.4% (Top Tier)</strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
