"use client";

import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export default function CrmIntegrationsEcosystem() {
  const integrations = [
    {
      name: "Official Meta Cloud API",
      category: "Messaging & WhatsApp",
      badge: "Native Official",
      desc: "Direct integration with Meta's official WhatsApp Business Cloud API. 98% open rates, zero phone bans.",
      iconBg: "bg-emerald-50 text-emerald-600",
      tag: "WhatsApp",
    },
    {
      name: "Meta Lead Ads (FB & IG)",
      category: "Ad Platforms",
      badge: "0.4s Webhook",
      desc: "Real-time webhook capture directly from Facebook & Instagram Lead Ad forms with zero latency.",
      iconBg: "bg-blue-50 text-blue-600",
      tag: "Facebook",
    },
    {
      name: "Google Search Ads & Forms",
      category: "Ad Platforms",
      badge: "Live Ingest",
      desc: "Connect Google Lead Form extensions and search campaign webhooks directly to your sales pipeline.",
      iconBg: "bg-red-50 text-red-600",
      tag: "Google",
    },
    {
      name: "Google Sheets 2-Way Sync",
      category: "Spreadsheets",
      badge: "Real-Time Polling",
      desc: "Live bi-directional synchronization between your marketing spreadsheets and CRM database.",
      iconBg: "bg-green-50 text-green-600",
      tag: "Sheets",
    },
    {
      name: "Razorpay & UPI Payments",
      category: "Payment Gateways",
      badge: "Instant Webhook",
      desc: "Auto-generate payment links directly in WhatsApp, capture UPI payments, and issue receipts.",
      iconBg: "bg-sky-50 text-sky-600",
      tag: "Razorpay",
    },
    {
      name: "Zapier & Pabbly Connect",
      category: "Workflow Automation",
      badge: "5000+ Apps",
      desc: "Connect your CRM with thousands of business tools, landing page builders, and ERP systems.",
      iconBg: "bg-orange-50 text-orange-600",
      tag: "Zapier",
    },
    {
      name: "Amazon SES & SendGrid",
      category: "Transactional Email",
      badge: "SMTP & API",
      desc: "High-deliverability transactional email pipelines for quotations, invoices, and password resets.",
      iconBg: "bg-indigo-50 text-indigo-600",
      tag: "Email",
    },
    {
      name: "Twilio & MSG91 SMS",
      category: "SMS Gateways",
      badge: "DLT-Approved",
      desc: "DLT-compliant promotional and transactional SMS delivery across Indian and global telecom networks.",
      iconBg: "bg-purple-50 text-purple-600",
      tag: "SMS",
    },
    {
      name: "Custom Webhooks & REST API",
      category: "Developer APIs",
      badge: "Swagger Docs",
      desc: "Full bi-directional REST API and configurable outbound webhooks to sync with proprietary ERPs.",
      iconBg: "bg-slate-100 text-slate-800",
      tag: "API",
    },
  ];

  return (
    <section className="py-20 bg-slate-50/80 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Connected Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Connects with Your <span className="text-[#F7941D]">Existing Tech Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate copy-pasting between disconnected spreadsheets, ad managers, and payment portals.
            Edfosys CRM connects natively with the marketing and finance tools you already use every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-bold text-[#F7941D] bg-orange-50 px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#F7941D] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="flex items-center text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  Pre-configured
                </span>
                <span className="text-slate-400">Zero Code</span>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0C3246] via-[#103e56] to-[#0C3246] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
              Custom Enterprise Integrations
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Need custom integration with your in-house ERP or legacy database?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Our engineering team provides dedicated webhook pipelines, two-way database ETL sync, and on-premise connector scripts.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center space-x-4">
            <Link
              href="/free-consulting"
              className="px-6 py-3 rounded-xl bg-[#F7941D] hover:bg-[#e57a0b] text-white font-bold text-sm shadow-lg transition-all flex items-center space-x-2"
            >
              <span>Talk to Integration Architect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
