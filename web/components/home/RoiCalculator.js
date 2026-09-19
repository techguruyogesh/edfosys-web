"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Clock, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

export default function RoiCalculator() {
  const [leadsPerMonth, setLeadsPerMonth] = useState(500);

  // Formulas for realistic tangible SaaS calculations
  // Average rep spends ~10 mins manually copying, messaging, following up per lead
  const hoursSaved = Math.round((leadsPerMonth * 12) / 60);
  
  // Average 15% of leads are dropped or forgotten without instant WhatsApp automation
  // Assuming modest ₹2,500 gross value per converted deal with 4% average close rate
  const recoveredDeals = Math.max(1, Math.round(leadsPerMonth * 0.15 * 0.05));
  const recoveredRevenue = (recoveredDeals * 45000).toLocaleString("en-IN");

  return (
    <section className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0C3246] to-[#071f2c] rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left side: Interactive Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Growth & Efficiency Calculator</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                How Much Time & Revenue Are You Losing to Manual Work?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Adjust the slider below to see how our engineering architecture and Edfosys CRM automation impact your bottom line.
              </p>

              {/* Slider Box */}
              <div className="pt-4 space-y-3 bg-slate-800/60 p-6 rounded-2xl border border-slate-700/70">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-slate-300 tracking-wider">
                    Inbound Leads / Enquiries Per Month:
                  </span>
                  <span className="text-2xl font-extrabold text-[#F7941D]">
                    {leadsPerMonth.toLocaleString("en-IN")}
                  </span>
                </div>

                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={leadsPerMonth}
                  onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#F7941D]"
                />

                <div className="flex justify-between text-[11px] text-slate-400 pt-1 font-mono">
                  <span>100 leads</span>
                  <span>1,000</span>
                  <span>2,500</span>
                  <span>5,000+ leads</span>
                </div>
              </div>
            </div>

            {/* Right side: Real-time Calculated ROI Output (Calendly/Lattice style) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Metric 1 */}
                <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center mb-3 text-[#F7941D]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">
                    {hoursSaved} hrs
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    Rep Time Saved Monthly
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                    Eliminated manual WhatsApp messaging & status updates.
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3 text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="text-3xl font-extrabold text-emerald-400 mb-1">
                    ₹{recoveredRevenue}
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    Est. Recovered Revenue
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                    Closed from leads that usually drop off after 30+ mins.
                  </p>
                </div>
              </div>

              {/* Bottom Result & CTA Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-500/15 via-orange-500/5 to-transparent border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-orange-300 uppercase tracking-wider">
                    Recommended Roadmap:
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {leadsPerMonth > 1500 ? "Enterprise Architecture + Edfosys CRM" : "Edfosys CRM Growth Plan + Ad Funnels"}
                  </div>
                </div>
                <Link
                  href="/free-consulting"
                  className="px-6 py-3 rounded-xl text-xs font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg transition-all flex items-center space-x-1.5 flex-shrink-0"
                >
                  <span>Claim Strategy Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
