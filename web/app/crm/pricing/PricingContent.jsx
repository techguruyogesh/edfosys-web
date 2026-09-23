"use client";

import { useState, useEffect } from "react";
import {
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  ShieldCheck,
  Calculator,
  Plus,
  Minus,
} from "lucide-react";

const DEFAULT_PLANS = [
  {
    id: "trial",
    name: "14-Day Free Trial",
    slug: "free-trial",
    plan_type: "trial",
    duration_days: 14,
    price_inr: 0,
    price_usd: 0,
    is_trial: true,
    is_per_user: false,
    badge: "Risk-Free Evaluation",
    tagline: "Explore every CRM feature for your team without any commitment.",
    highlight_features: [
      "14 Days full unrestricted CRM access",
      "1 Workspace Admin account",
      "Automated WhatsApp & Email drip funnels",
      "Meta Lead Ads & Website Form sync",
      "GST-compliant invoicing & items master",
      "No credit card required to start",
    ],
    cta_label: "Start 14-Day Free Trial",
    cta_url: "https://app.edfosys.com/signup",
  },
  {
    id: "monthly",
    name: "Monthly Plan",
    slug: "monthly",
    plan_type: "monthly",
    duration_days: 30,
    price_inr: 250,
    price_usd: 3,
    is_trial: false,
    is_per_user: true,
    badge: "Flexible Pay-As-You-Grow",
    tagline: "Pay only for active users with complete freedom to scale seats anytime.",
    highlight_features: [
      "Full access to all CRM feature modules",
      "Pay per user, cancel or adjust seats anytime",
      "Multi-step WhatsApp Cloud API & Email drips",
      "Meta Lead Ads webhook & website integration",
      "Counselor role permissions & round-robin",
      "Monthly GST-compliant invoices & receipts",
    ],
    cta_label: "Choose Monthly",
    cta_url: "https://app.edfosys.com/signup?plan=monthly",
  },
  {
    id: "yearly",
    name: "Yearly Plan",
    slug: "yearly",
    plan_type: "yearly",
    duration_days: 365,
    price_inr: 2500,
    price_usd: 30,
    is_trial: false,
    is_per_user: true,
    badge: "Best Value · 2 Months Free",
    savings_text: "Save ~17% Annually",
    tagline: "Commit annually to lock in maximum savings with priority onboarding.",
    highlight_features: [
      "Everything in Monthly Plan",
      "2 Months completely FREE (~17% savings)",
      "Pay-per-user, scale team seats anytime",
      "Automated multi-step drip funnel builder",
      "Multi-branch scope & counselor roles",
      "Dedicated workspace setup & priority support",
    ],
    cta_label: "Choose Yearly",
    cta_url: "https://app.edfosys.com/signup?plan=yearly",
  },
];

const DEFAULT_COMMON_FEATURES = [
  {
    category: "Lead Management & Capture",
    features: [
      "Meta (Facebook & Instagram) Lead Ads Real-Time Sync",
      "Embeddable Website Enquiry & Contact Forms",
      "Manual Lead Creation & Bulk CSV Import",
      "Intelligent Duplicate Detection & Prevention",
      "Customizable Lead Stages, Qualities & Sources",
    ],
  },
  {
    category: "Automation & Visual Drip Funnels",
    features: [
      "Interactive Visual Workflow Canvas Builder",
      "Multi-Step Automated Drip Sequences",
      "Smart Time Delay & Wait Nodes (Hours & Days)",
      "Condition Logic & Field Evaluation (If/Else)",
      "AI Drip Funnel Generator (1-Click Presets)",
    ],
  },
  {
    category: "Omnichannel Communication",
    features: [
      "Official Meta WhatsApp Cloud API Direct Integration",
      "Pre-Approved WhatsApp Template Delivery",
      "Automated & Manual Transactional Emails (SMTP)",
      "Rich Text Email Templates with Dynamic Merge Tags",
    ],
  },
  {
    category: "Team Collaboration & Branch Scope",
    features: [
      "Multi-Branch Organization Architecture",
      "Granular Role-Based Access (Admin, Manager, Counselor)",
      "Automated Lead Round-Robin Distribution",
      "Team Attendance Tracking, Calendar & Leave Management",
    ],
  },
  {
    category: "Invoicing & Accounting",
    features: [
      "GST-Compliant Professional PDF Invoices",
      "Services & Products Master Catalog with Tax Rules",
      "Payment Status Tracking (Paid, Partial, Overdue)",
      "Instant Download & Printable Client Invoices",
    ],
  },
  {
    category: "Analytics & Performance Reports",
    features: [
      "Lead Source ROI & Conversion Ratio Reports",
      "Counselor & Sales Executive Performance Metrics",
      "Overdue Tasks, Scheduled Calls & Follow-Up Tracking",
      "Instant Export of Reports to Excel & CSV",
    ],
  },
];

export default function PricingContent() {
  const [plans, setPlans] = useState(DEFAULT_PLANS);
  const [commonFeatures, setCommonFeatures] = useState(DEFAULT_COMMON_FEATURES);
  const [currency, setCurrency] = useState("INR");
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [teamSize, setTeamSize] = useState(5);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch("https://app.edfosys.com/api/plans");
        if (res.ok) {
          const json = await res.json();
          if (json?.data?.plans && json.data.plans.length > 0) {
            // Map plans and normalize attributes
            const mapped = json.data.plans.map((p) => {
              let badge = p.badge;
              let cta_url = p.cta_url || `https://app.edfosys.com/signup?plan=${p.slug}`;
              if (!cta_url.startsWith("http")) {
                cta_url = `https://app.edfosys.com${cta_url}`;
              }
              if (p.plan_type === "yearly") {
                badge = "Best Value · 2 Months Free";
              } else if (p.plan_type === "monthly") {
                badge = "Flexible Pay-As-You-Grow";
              } else {
                badge = "Risk-Free Evaluation";
              }
              return {
                ...p,
                badge,
                cta_url,
              };
            });
            setPlans(mapped);
          }
          if (json?.data?.common_features && json.data.common_features.length > 0) {
            setCommonFeatures(json.data.common_features);
          }
        }
      } catch (err) {
        console.warn("Using default pricing data:", err);
      }
    };
    fetchPlans();
  }, []);

  const formatPrice = (amount) => {
    if (!amount || Number(amount) === 0) return "Free";
    return new Intl.NumberFormat(currency === "USD" ? "en-US" : "en-IN", {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number(amount));
  };

  const monthlyPlan = plans.find((p) => p.plan_type === "monthly") || plans[1] || DEFAULT_PLANS[1];
  const yearlyPlan = plans.find((p) => p.plan_type === "yearly") || plans[2] || DEFAULT_PLANS[2];

  const monthlyPricePerUser =
    currency === "USD" ? Number(monthlyPlan?.price_usd || 3) : Number(monthlyPlan?.price_inr || 250);
  const yearlyPricePerUser =
    currency === "USD" ? Number(yearlyPlan?.price_usd || 30) : Number(yearlyPlan?.price_inr || 2500);

  const calcMonthlyTotal = teamSize * monthlyPricePerUser;
  const calcYearlyTotal = teamSize * yearlyPricePerUser;
  const calcYearlySavings = teamSize * monthlyPricePerUser * 12 - calcYearlyTotal;

  return (
    <div>
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#FFF9F2] via-orange-50/20 to-white py-16 text-center border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-4 border border-orange-200">
            <Sparkles className="w-3.5 h-3.5 text-[#F7941D]" />
            <span>Transparent Per-User Pricing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Scale Your Sales Team. <span className="text-[#F7941D]">Pay As You Grow.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Full, unrestricted access to the entire CRM suite across every tier. No artificial paywalls.
            Start your 14-day free trial without a credit card.
          </p>

          {/* Dual Controls: Billing Cycle Switch & Currency Switch */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Billing Cycle Toggle */}
            <div className="inline-flex items-center p-1.5 rounded-full bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  billingCycle === "monthly"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Billed Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
                  billingCycle === "yearly"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>Billed Yearly</span>
                <span className="bg-emerald-100 text-emerald-700 text-[11px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                  Save ~17% (2 Mo. Free)
                </span>
              </button>
            </div>

            {/* Currency Switcher */}
            <div className="inline-flex items-center p-1.5 rounded-full bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  currency === "INR"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                ₹ INR
              </button>
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  currency === "USD"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                $ USD
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => {
              const isTrial = plan.is_trial;
              const isYearly = plan.plan_type === "yearly";
              const price = currency === "USD" ? plan.price_usd : plan.price_inr;
              const monthlyEquivalent = isYearly ? Math.round(price / 12) : price;

              return (
                <div
                  key={plan.id || plan.slug}
                  className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    isYearly
                      ? "border-2 border-[#F7941D] shadow-2xl bg-gradient-to-b from-[#FFF9F2]/60 to-white scale-100 lg:scale-105 z-10"
                      : "border border-slate-200 bg-white shadow-sm hover:shadow-lg"
                  }`}
                >
                  {/* Top Ribbon */}
                  {isYearly && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F7941D] to-[#ea580c] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                      🌟 Best Value (2 Mo. Free)
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-orange-50 text-[#F7941D] border border-orange-100">
                        {isTrial ? (
                          <Zap className="w-6 h-6" />
                        ) : isYearly ? (
                          <Sparkles className="w-6 h-6" />
                        ) : (
                          <Users className="w-6 h-6" />
                        )}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {plan.badge || (isTrial ? "Trial" : isYearly ? "Annual" : "Monthly")}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mb-6 min-h-[32px]">
                      {plan.tagline ||
                        (isTrial
                          ? "Risk-free trial with full access to test with your real workflows."
                          : isYearly
                          ? "Commit annually to get 2 full months free and maximize team productivity."
                          : "Flexible monthly billing. Add or remove seats as your team expands.")}
                    </p>

                    {/* Price Block */}
                    <div className="mb-4">
                      <div className="flex items-baseline space-x-1.5">
                        <span className="text-4xl font-extrabold text-slate-900">
                          {formatPrice(price)}
                        </span>
                        {!isTrial && (
                          <span className="text-xs font-semibold text-slate-500">
                            / user / {isYearly ? "year" : "month"}
                          </span>
                        )}
                      </div>

                      {isYearly && !isTrial && (
                        <div className="text-xs font-semibold text-[#e57a0b] mt-1.5">
                          Effective {formatPrice(monthlyEquivalent)} / user / month
                        </div>
                      )}

                      {isTrial && (
                        <div className="text-xs font-semibold text-emerald-600 mt-1.5">
                          Full 14 Days · 1 Admin Seat · No Credit Card Required
                        </div>
                      )}
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 pt-6 border-t border-slate-100 mb-8">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Plan Highlights:
                      </div>
                      {(plan.highlight_features || []).map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Link */}
                  <a
                    href={plan.cta_url || `https://app.edfosys.com/signup?plan=${plan.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center space-x-2 ${
                      isYearly
                        ? "bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>{plan.cta_label || "Get Started"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Team Seat ROI Calculator */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl shadow-slate-900/5">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Cost & ROI Calculator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                Calculate Exact Investment for Your Team
              </h2>
              <p className="text-sm text-slate-600">
                Slide to adjust your team size and see your monthly vs yearly costs with instant savings calculation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Controls */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-800">
                    Team Members / Counselors:
                  </span>
                  <div className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1">
                    <button
                      type="button"
                      onClick={() => setTeamSize((prev) => Math.max(1, prev - 1))}
                      disabled={teamSize <= 1}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed shadow-xs transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-20 text-center font-extrabold text-slate-900 text-sm">
                      {teamSize} {teamSize === 1 ? "User" : "Users"}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTeamSize((prev) => Math.min(100, prev + 1))}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-slate-700 hover:bg-slate-100 shadow-xs transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#F7941D]"
                  />
                  <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                    <span>1 user</span>
                    <span>10 users</span>
                    <span>25 users</span>
                    <span>50+ users</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-orange-50/60 p-4 border border-orange-100 text-xs text-slate-600 leading-relaxed">
                  💡 <strong>Pro Tip:</strong> Each user gets their own dedicated login, activity tracking,
                  role-based access, and automated round-robin lead allocation queue.
                </div>
              </div>

              {/* Result Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className={`rounded-2xl p-5 border transition-all ${
                    billingCycle === "monthly"
                      ? "border-slate-400 bg-white shadow-md ring-1 ring-slate-300"
                      : "border-slate-200 bg-slate-50/80"
                  }`}
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Monthly Plan
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 mb-1">
                    {formatPrice(calcMonthlyTotal)}
                  </div>
                  <div className="text-xs text-slate-500">
                    Billed {formatPrice(monthlyPricePerUser)}/user monthly
                  </div>
                </div>

                <div
                  className={`rounded-2xl p-5 border relative transition-all ${
                    billingCycle === "yearly"
                      ? "border-[#F7941D] bg-gradient-to-b from-[#FFF9F2] to-white shadow-lg ring-1 ring-orange-200"
                      : "border-orange-200 bg-orange-50/40"
                  }`}
                >
                  <div className="absolute -top-2.5 right-4 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Save 17%
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Yearly Plan
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 mb-1">
                    {formatPrice(calcYearlyTotal)}
                  </div>
                  <div className="text-xs text-slate-500">
                    Billed {formatPrice(yearlyPricePerUser)}/user annually
                  </div>
                  <div className="mt-3 inline-block w-full text-center text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-200">
                    🎉 You save {formatPrice(calcYearlySavings)} per year!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Features Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              All Features Included in Every Tier
            </h2>
            <p className="text-base text-slate-600">
              We never handicap your operations with feature paywalls. Every account gets full access to our
              entire CRM and automation infrastructure.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-4 px-6 text-sm font-bold text-slate-900 w-2/5">
                      CRM Capability & Module
                    </th>
                    <th className="py-4 px-4 text-center text-sm font-bold text-slate-900 w-1/5">
                      ⚡ 14-Day Trial
                    </th>
                    <th className="py-4 px-4 text-center text-sm font-bold text-slate-900 w-1/5">
                      🚀 Monthly Plan
                    </th>
                    <th className="py-4 px-4 text-center text-sm font-bold text-[#e57a0b] bg-orange-50/60 w-1/5">
                      💎 Yearly Plan
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {commonFeatures.map((group, gIdx) => (
                    <div key={gIdx} style={{ display: "contents" }}>
                      <tr className="bg-slate-100/70">
                        <td
                          colSpan={4}
                          className="py-3 px-6 text-xs font-bold text-slate-700 uppercase tracking-wider"
                        >
                          {group.category}
                        </td>
                      </tr>
                      {group.features.map((feat, fIdx) => (
                        <tr key={fIdx} className="hover:bg-slate-50/50 transition">
                          <td className="py-3.5 px-6 text-xs sm:text-sm text-slate-700 font-medium">
                            {feat}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                              <Check className="w-3.5 h-3.5" />
                              <span>Included</span>
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                              <Check className="w-3.5 h-3.5" />
                              <span>Included</span>
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center bg-orange-50/30">
                            <span className="inline-flex items-center space-x-1 text-xs font-bold text-[#e57a0b] bg-orange-100/80 px-2.5 py-1 rounded-md">
                              <Check className="w-3.5 h-3.5" />
                              <span>Included</span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </div>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
