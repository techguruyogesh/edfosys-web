import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Simple, Transparent CRM Pricing Plans | Edfosys CRM",
  description:
    "Transparent pricing for growing sales teams. 14-day unlimited free trial. Includes lead management, automated WhatsApp follow-ups, and pipeline tracking.",
};

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      desc: "For solo entrepreneurs & small consulting teams getting started.",
      price: "₹1,499",
      period: "/month",
      users: "Up to 3 Users",
      features: [
        "1,000 Active Leads",
        "Meta Lead Ads Webhook",
        "Manual WhatsApp Messaging",
        "Standard Sales Pipeline",
        "Email & In-App Support",
      ],
      popular: false,
      ctaText: "Start Free Trial",
      ctaLink: "https://app.edfosys.com/register?plan=starter",
    },
    {
      name: "Growth",
      desc: "For growing teams that need automated WhatsApp workflows.",
      price: "₹3,999",
      period: "/month",
      users: "Up to 10 Users",
      features: [
        "10,000 Active Leads",
        "Official WhatsApp Cloud API Automation",
        "Automatic Lead Distribution Rules",
        "Multi-Stage Kanban Pipelines",
        "Google Sheets & Webhook Integrations",
        "Priority Support & Onboarding Call",
      ],
      popular: true,
      ctaText: "Start 14-Day Trial",
      ctaLink: "https://app.edfosys.com/register?plan=growth",
    },
    {
      name: "Enterprise",
      desc: "For large agencies and organizations with custom requirements.",
      price: "₹8,999",
      period: "/month",
      users: "Unlimited Users",
      features: [
        "Unlimited Leads & Pipelines",
        "Dedicated Database Instance",
        "Custom Domain Whitelabeling",
        "Custom WhatsApp Template Approvals",
        "Dedicated Account Manager",
        "99.9% Uptime SLA & Custom SLA",
      ],
      popular: false,
      ctaText: "Contact Sales",
      ctaLink: "/free-consulting",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="bg-gradient-to-b from-[#FFF9F2] to-white py-16 text-center border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              Simple, Predictable <span className="text-[#F7941D]">CRM Pricing</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              No hidden fees. Every plan includes a 14-day risk-free trial. Upgrade, downgrade, or cancel anytime.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {plans.map((p) => (
                <div
                  key={p.name}
                  className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                    p.popular
                      ? "border-2 border-[#F7941D] shadow-2xl bg-[#FFF9F2]/30 relative scale-105"
                      : "border border-slate-200 bg-white shadow-sm hover:shadow-lg"
                  }`}
                >
                  {p.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F7941D] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular Plan
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{p.name}</h3>
                    <p className="text-xs text-slate-500 mb-6">{p.desc}</p>
                    <div className="flex items-baseline space-x-1 mb-2">
                      <span className="text-4xl font-extrabold text-slate-900">{p.price}</span>
                      <span className="text-xs text-slate-500">{p.period}</span>
                    </div>
                    <div className="text-xs font-semibold text-[#e57a0b] mb-6">
                      {p.users}
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-200/80 mb-8">
                      {p.features.map((feat) => (
                        <div key={feat} className="flex items-start space-x-2.5 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={p.ctaLink}
                    target={p.ctaLink.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all ${
                      p.popular
                        ? "bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    {p.ctaText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
