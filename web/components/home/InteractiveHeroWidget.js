"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Zap,
  TrendingUp,
  User,
} from "lucide-react";
import Link from "next/link";

export default function InteractiveHeroWidget() {
  const [activeTab, setActiveTab] = useState("calendar"); // "calendar" | "crm"
  
  // Calendar interactive state
  const dates = [
    { day: "Mon", date: "22", full: "Monday, Sep 22" },
    { day: "Tue", date: "23", full: "Tuesday, Sep 23" },
    { day: "Wed", date: "24", full: "Wednesday, Sep 24" },
    { day: "Thu", date: "25", full: "Thursday, Sep 25" },
  ];
  const [selectedDate, setSelectedDate] = useState(dates[1]);
  const times = ["11:00 AM", "02:30 PM", "04:15 PM", "06:00 PM"];
  const [selectedTime, setSelectedTime] = useState("02:30 PM");
  const [isBookedPreview, setIsBookedPreview] = useState(false);

  // CRM interactive state
  const [crmStep, setCrmStep] = useState(2); // 1: Inbound, 2: WhatsApp sent, 3: Won

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Decorative ambient glowing backdrops */}
      <div className="absolute -top-6 -left-6 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -right-6 w-48 h-48 bg-[#0C3246]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glassmorphic Container */}
      <div className="relative bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_20px_50px_rgba(12,50,70,0.12)] p-6 sm:p-7 overflow-hidden">
        
        {/* Top Interactive Mode Switcher (Calendly vs CRM) */}
        <div className="flex items-center justify-between p-1 bg-slate-100/90 rounded-2xl mb-6">
          <button
            onClick={() => {
              setActiveTab("calendar");
              setIsBookedPreview(false);
            }}
            className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === "calendar"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <CalendarIcon className="w-3.5 h-3.5 text-[#F7941D]" />
            <span>Interactive Scheduler</span>
          </button>

          <button
            onClick={() => setActiveTab("crm")}
            className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === "crm"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-emerald-500" />
            <span>Live CRM Pipeline</span>
          </button>
        </div>

        {/* Tab 1: Calendly-Style Interactive Strategy Scheduler */}
        <AnimatePresence mode="wait">
          {activeTab === "calendar" && (
            <motion.div
              key="calendar-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Host & Meeting Metadata Card */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center space-x-3.5">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#0C3246] to-[#18455D] flex items-center justify-center text-white font-bold text-sm shadow-md">
                      ED
                    </div>
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-sm font-bold text-slate-900">
                        Senior Advisory Team
                      </span>
                      <span className="text-[10px] bg-orange-100 text-[#e57a0b] font-bold px-2 py-0.5 rounded-full">
                        Free Session
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 flex items-center mt-0.5 space-x-2">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1 text-slate-400" /> 45 Mins
                      </span>
                      <span>•</span>
                      <span className="flex items-center text-slate-600">
                        <Video className="w-3 h-3 mr-1 text-[#F7941D]" /> Google Meet
                      </span>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center justify-end">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1.5" />
                    3 slots open
                  </span>
                  <span className="text-[10px] text-slate-400">Timezone: IST (UTC+5:30)</span>
                </div>
              </div>

              {!isBookedPreview ? (
                <div className="pt-5 space-y-5">
                  {/* Interactive Date Selector */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                      Select Strategy Date
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {dates.map((d) => {
                        const isSelected = selectedDate.date === d.date;
                        return (
                          <button
                            key={d.date}
                            type="button"
                            onClick={() => setSelectedDate(d)}
                            className={`p-2.5 rounded-2xl text-center border transition-all ${
                              isSelected
                                ? "bg-[#0C3246] text-white border-[#0C3246] shadow-md scale-[1.02]"
                                : "bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300"
                            }`}
                          >
                            <span className="block text-[10px] uppercase font-semibold opacity-70">
                              {d.day}
                            </span>
                            <span className="block text-base font-extrabold mt-0.5">
                              {d.date}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Interactive Time Selector */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                      Select Available Time Slot
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {times.map((t) => {
                        const isSelected = selectedTime === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all flex items-center justify-center space-x-1.5 ${
                              isSelected
                                ? "bg-[#FFF9F2] text-[#e57a0b] border-[#F7941D] font-bold shadow-sm"
                                : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            <Clock className={`w-3.5 h-3.5 ${isSelected ? "text-[#F7941D]" : "text-slate-400"}`} />
                            <span>{t}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setIsBookedPreview(true)}
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center space-x-2 hover:scale-[1.01]"
                    >
                      <span>Reserve Slot for {selectedDate.day} at {selectedTime}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-2">
                      ⚡ Instant confirmation with tailored setup roadmap.
                    </p>
                  </div>
                </div>
              ) : (
                /* Booked Success Preview */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      Slot Ready on {selectedDate.full} at {selectedTime}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto leading-relaxed">
                      Your 45-minute roadmap consultation is tentatively held. Click below to complete your business profile.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-col gap-2">
                    <Link
                      href="/free-consulting"
                      className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow"
                    >
                      Finalize 45-Min Booking Details →
                    </Link>
                    <button
                      onClick={() => setIsBookedPreview(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 font-medium"
                    >
                      Choose different time
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Tab 2: Lattice/Linear-Style Live CRM Pipeline Simulator */}
          {activeTab === "crm" && (
            <motion.div
              key="crm-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Top Pipeline Stepper */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { step: 1, label: "1. Meta Ad Lead" },
                  { step: 2, label: "2. Auto WhatsApp" },
                  { step: 3, label: "3. Deal Closed" },
                ].map((s) => (
                  <button
                    key={s.step}
                    onClick={() => setCrmStep(s.step)}
                    className={`py-2 px-2 rounded-xl text-center text-[11px] font-bold border transition-all ${
                      crmStep === s.step
                        ? "bg-[#0C3246] text-white border-[#0C3246] shadow-sm"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-white"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Lead Card Representation */}
              <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[#F7941D] font-bold text-xs">
                      PS
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">
                        Priya Sharma • EduGlobal
                      </h5>
                      <span className="text-[10px] text-slate-500">
                        Inbound from Meta Ads • 4 mins ago
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-extrabold text-[#e57a0b] bg-orange-100/70 px-2 py-0.5 rounded-full">
                    ₹6.2 Lakhs
                  </span>
                </div>

                {/* Simulated WhatsApp Auto-Message */}
                <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-3 text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-emerald-800 font-bold text-[10px]">
                    <span className="flex items-center">
                      <MessageSquare className="w-3 h-3 mr-1 text-emerald-600" />
                      Official WhatsApp Cloud API Triggered
                    </span>
                    <span className="text-[9px] text-emerald-600 font-normal">Delivered ✓✓</span>
                  </div>
                  <p className="text-slate-700 text-[11px] leading-relaxed italic bg-white p-2.5 rounded-lg border border-emerald-100">
                    &quot;Hello Priya! Thank you for inquiring about Canada Student Visa counseling. Here is your preliminary course checklist. When can we speak?&quot;
                  </p>
                </div>
              </div>

              {/* Real-Time Live Status Row */}
              <div className="p-3 bg-white rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-slate-600 font-medium">Auto-assigned to: <strong>Counsellor Amit</strong></span>
                </div>
                <span className="text-[11px] font-bold text-slate-900">Score: 94/100</span>
              </div>

              {/* CRM CTA */}
              <div className="pt-2">
                <Link
                  href="/crm"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Explore Full Edfosys CRM Platform →</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Micro-Social Proof Card (Lattice style) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3.5 shadow-lg flex items-center justify-between"
      >
        <div className="flex items-center space-x-3">
          <div className="flex -space-x-2 overflow-hidden">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
              VK
            </div>
            <div className="w-7 h-7 rounded-full bg-[#F7941D] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
              RN
            </div>
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
              SP
            </div>
          </div>
          <span className="text-xs text-slate-700 font-semibold">
            1,200+ teams scaling with Edfosys
          </span>
        </div>

        <div className="flex items-center space-x-1 text-xs text-amber-500 font-bold">
          <span>★★★★★</span>
          <span className="text-slate-500 font-medium text-[11px] ml-1">4.9/5</span>
        </div>
      </motion.div>
    </div>
  );
}
