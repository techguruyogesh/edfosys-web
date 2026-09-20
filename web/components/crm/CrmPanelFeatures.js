"use client";

import { useState } from "react";
import {
  Target,
  MessageSquare,
  BarChart3,
  Receipt,
  CreditCard,
  Users,
  ShieldCheck,
  TrendingUp,
  Clock,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Lock,
  Zap,
} from "lucide-react";

export default function CrmPanelFeatures() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Panel Features" },
    { id: "lead-capture", label: "Lead Ingestion & WhatsApp" },
    { id: "pipeline", label: "Sales Stages & Workflows" },
    { id: "finance", label: "Quotations & Invoicing" },
    { id: "security", label: "RBAC & Security" },
  ];

  const features = [
    {
      id: "ingestion",
      category: "lead-capture",
      title: "Omni-Channel Lead Ingestion",
      badge: "Real-Time 0.4s",
      icon: Target,
      iconColor: "text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white",
      description:
        "Instantly capture leads from Meta Ads (Facebook/Instagram), Google Search Ads, custom website forms, walk-ins, and Excel/CSV bulk uploads.",
      bullets: [
        "Instant webhook ingestion with 0.4s response latency",
        "E.164 phone & email deduplication to prevent duplicate leads",
        "Source attribution (Campaign, AdSet, Keyword, UTM tags)",
        "Automated counselor/sales rep round-robin assignment",
      ],
    },
    {
      id: "whatsapp",
      category: "lead-capture",
      title: "Official WhatsApp Cloud API",
      badge: "Meta-Verified",
      icon: MessageSquare,
      iconColor: "text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white",
      description:
        "Direct Meta WhatsApp Cloud integration. Send instant welcome brochures, automated follow-up sequences, and verified notifications with 98% open rates.",
      bullets: [
        "Pre-approved Meta HSM message templates with dynamic variables",
        "Automated welcome & brochure dispatch within 5 seconds",
        "Outbound message logs and template dispatch history per lead",
        "No third-party ban risk — 100% compliant Official Cloud API",
      ],
    },
    {
      id: "kanban",
      category: "pipeline",
      title: "Visual Sales Pipeline & Stages",
      badge: "Stage Qualification",
      icon: BarChart3,
      iconColor: "text-purple-600 bg-purple-50 group-hover:bg-purple-600 group-hover:text-white",
      description:
        "Track deals visually through customizable qualification stages. Gain complete pipeline visibility and identify revenue bottlenecks in real time.",
      bullets: [
        "Customizable stages tailored to your exact industry",
        "Deal values, estimated close dates & priority tagging",
        "Aging alerts for stagnant leads with zero team activity",
        "Loss reason categorization with actionable sales intelligence",
      ],
    },
    {
      id: "activity",
      category: "pipeline",
      title: "Follow-ups, Notes & Timeline",
      badge: "Zero Dropped Leads",
      icon: Clock,
      iconColor: "text-orange-600 bg-orange-50 group-hover:bg-orange-600 group-hover:text-white",
      description:
        "Keep your sales team disciplined with scheduled callback reminders, meeting logs, internal text notes, and complete immutable history.",
      bullets: [
        "Automated scheduled follow-up notifications & alarms",
        "Internal team notes and call recap logging",
        "Complete chronological activity audit trail per lead",
        "Manager activity reviews and daily telecaller logs",
      ],
    },
    {
      id: "invoicing",
      category: "finance",
      title: "Quotations & GST Invoicing",
      badge: "1-Click PDF",
      icon: Receipt,
      iconColor: "text-teal-600 bg-teal-50 group-hover:bg-teal-600 group-hover:text-white",
      description:
        "Generate professional PDF quotations and GST-compliant tax invoices with company branding, multi-item line pricing, and instant WhatsApp delivery.",
      bullets: [
        "Item catalog with custom pricing, discounts & HSN/SAC codes",
        "Automated Indian GST calculation (CGST/SGST and IGST)",
        "Direct 1-tap WhatsApp and Email PDF dispatch to client",
        "Proforma invoice to final tax invoice conversion in 1 click",
      ],
    },
    {
      id: "workflows",
      category: "pipeline",
      title: "Automated Workflows & Triggers",
      badge: "Event-Driven Engine",
      icon: Zap,
      iconColor: "text-indigo-600 bg-indigo-50 group-hover:bg-indigo-600 group-hover:text-white",
      description:
        "Build visual automation rules. Trigger automated WhatsApp templates, assign reps, update lead stages, and schedule delayed follow-up actions automatically.",
      bullets: [
        "Event triggers: Lead Created, Status Changed, Source Tagged",
        "Automated counselor & sales rep assignment",
        "Delayed action queue for automated follow-up sequences",
        "Execution audit logs for every workflow run",
      ],
    },
    {
      id: "sheets",
      category: "lead-capture",
      title: "Google Sheets Live 2-Way Sync",
      badge: "Background Polling",
      icon: FileSpreadsheet,
      iconColor: "text-green-600 bg-green-50 group-hover:bg-green-600 group-hover:text-white",
      description:
        "Connect marketing spreadsheets to the CRM. Leads added to Google Sheets automatically sync to your panel, and stage updates reflect in your sheet.",
      bullets: [
        "Automated bi-directional sync every 60 seconds",
        "Map arbitrary spreadsheet columns to custom CRM fields",
        "Status back-propagation to your marketing sheet",
        "Zero data loss with built-in retry and validation queue",
      ],
    },
    {
      id: "rbac",
      category: "security",
      title: "Granular Roles & Permissions",
      badge: "Multi-Tier Access",
      icon: Users,
      iconColor: "text-amber-600 bg-amber-50 group-hover:bg-amber-600 group-hover:text-white",
      description:
        "Control exactly what each team member can view, edit, or export. Pre-built roles for Super Admins, Branch Managers, Executives, and Telecallers.",
      bullets: [
        "Granular module permissions (Leads, Invoices, Master, Reports)",
        "Phone number masking to protect customer privacy",
        "Branch-level data segregation for multi-location teams",
        "Comprehensive user login & modification audit logs",
      ],
    },
    {
      id: "isolation",
      category: "security",
      title: "Dedicated Tenant Database",
      badge: "Physical Isolation",
      icon: ShieldCheck,
      iconColor: "text-rose-600 bg-rose-50 group-hover:bg-rose-600 group-hover:text-white",
      description:
        "Enterprise-grade physical database isolation per tenant. Your client records, financials, and leads are never co-mingled in shared tables.",
      bullets: [
        "Physical database schema segregation per organization",
        "Zero risk of cross-tenant data leaks or query bleeding",
        "Encrypted at rest (AES-256) and in transit (TLS 1.3)",
        "Daily automated off-site backups with point-in-time recovery",
      ],
    },
  ];

  const filteredFeatures =
    activeCategory === "all"
      ? features
      : features.filter((f) => f.category === activeCategory);

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Operations Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything Inside Your <span className="text-[#F7941D]">CRM Panel</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            No messy plugins or hidden add-ons. From the second a lead clicks your ad to the moment GST invoice payment is settled, manage the entire lifecycle in one unified dashboard.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#0C3246] text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3x3 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="group p-7 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${feat.iconColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#F7941D] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {feat.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    {feat.bullets.map((b, i) => (
                      <div key={i} className="flex items-start text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">Included in All Tiers</span>
                  <a
                    href="https://app.edfosys.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-[#F7941D] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Try Feature</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
