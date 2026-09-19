"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

export default function FreeConsultingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business_stage: "idea",
    primary_interest: "business_setup",
    notes: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          lead_source: "Free Consulting Page",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Even if webhook is pending, show success to user
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h4 className="text-2xl font-bold text-slate-900">
          Consultation Request Received!
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
          Thank you, <strong>{formData.name}</strong>. Our senior consultant will reach out on WhatsApp/phone at <strong>{formData.phone}</strong> shortly to coordinate the session time.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              business_stage: "idea",
              primary_interest: "business_setup",
              notes: "",
            });
          }}
          className="text-xs text-[#F7941D] font-bold hover:underline pt-4"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-medium">
          {error}
        </div>
      )}

      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Vikram Sharma"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D] transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Work Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="vikram@company.com"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Current Business Stage
        </label>
        <select
          name="business_stage"
          value={formData.business_stage}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D] bg-white transition-colors"
        >
          <option value="idea">Early Stage Idea (Pre-incorporation)</option>
          <option value="launching">Launching in next 30-60 days</option>
          <option value="existing_scaling">Existing Business looking to scale</option>
          <option value="enterprise">Established Enterprise / Transitioning Tech</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Primary Area of Interest
        </label>
        <select
          name="primary_interest"
          value={formData.primary_interest}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D] bg-white transition-colors"
        >
          <option value="business_setup">Business Setup, Registration & Compliance</option>
          <option value="growth_planner">Business Growth Planner & GTM Strategy</option>
          <option value="custom_tech">Custom Cloud / Web / Mobile Engineering</option>
          <option value="crm_solution">Edfosys CRM & Lead Automation</option>
          <option value="digital_marketing">Digital Marketing & Customer Acquisition</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Tell Us Briefly About Your Goals
        </label>
        <textarea
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="e.g. Planning to launch an education consultancy and need full tech + company setup..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D] transition-colors resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 px-6 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 hover:scale-[1.01]"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Scheduling Session...</span>
          </>
        ) : (
          <>
            <span>Confirm 45-Min Free Session</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-slate-400 pt-1">
        🔒 100% Privacy Protected. No spam guaranteed.
      </p>
    </form>
  );
}
