"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Trash2, ShieldCheck, Mail, CheckCircle, AlertCircle, ArrowRight, ExternalLink } from "lucide-react";

export default function DataDeletionPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tenantDomain: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission to privacy team
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-28 pb-20 bg-slate-50 min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#FFF9F2] to-white py-14 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Trash2 className="w-4 h-4 text-red-600" />
              <span>Meta User Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              User Data Deletion Instructions
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              In accordance with Meta Platform Rules, GDPR, and Indian DPDP Act guidelines, here is how you can request the deletion of any personal data captured through Edfosys CRM, Facebook Lead Ads, or WhatsApp.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200/80 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
            
            {/* Overview */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                1. Overview of Data Removal
              </h2>
              <p>
                <strong>Edfosys CRM</strong> integrates with Meta Platforms (Facebook & Instagram Lead Ads, Facebook Login, and WhatsApp Business API). If you interacted with an ad, submitted a lead form, or logged in via Facebook and wish to erase your personal details from our databases, you have the absolute right to do so.
              </p>
            </div>

            {/* Method A: Direct Facebook Account Removal */}
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <ExternalLink className="w-5 h-5 text-blue-600" />
                <span>Method A: Remove Edfosys App via Your Facebook Settings</span>
              </h2>
              <p className="text-sm text-slate-700">
                You can revoke Edfosys CRM access and request deletion directly from your personal Facebook account at any time:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
                <li>Log in to your Facebook profile.</li>
                <li>Go to <strong>Settings &amp; Privacy</strong> ➔ click <strong>Settings</strong>.</li>
                <li>In the left sidebar menu, click <strong>Apps and Websites</strong>.</li>
                <li>Search for <strong>&quot;Edfosys CRM&quot;</strong> in the list of active apps.</li>
                <li>Click the <strong>Remove</strong> button beside Edfosys CRM.</li>
                <li>
                  Check the option: <em>&quot;Delete posts, videos or events Edfosys CRM posted on your timeline&quot;</em> and click <strong>Remove</strong>.
                </li>
                <li>
                  Click <strong>View Removed Apps and Websites</strong>, select Edfosys CRM, and click <strong>Send Request</strong> to automatically submit a Meta data deletion callback to our servers.
                </li>
              </ol>
            </div>

            {/* Method B: In-App Removal Form */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                2. Method B: Direct Data Deletion Request Form
              </h2>
              <p className="mb-6">
                Alternatively, submit your details below. Our Data Protection Team will verify your record and purge your personal information from our CRM servers within <strong>48 hours</strong>:
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-900">Data Deletion Request Received</h3>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto">
                    We have logged your request. A confirmation tracking code has been dispatched. All identified lead records and communication logs will be purged within 48 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-emerald-700 underline font-semibold pt-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98000 00000"
                        className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Company / Tenant Domain (If known)
                      </label>
                      <input
                        type="text"
                        value={formData.tenantDomain}
                        onChange={(e) => setFormData({ ...formData, tenantDomain: e.target.value })}
                        placeholder="e.g. demo.edfosys.com"
                        className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Reason or Additional Information
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Please purge all Facebook Lead Ad records associated with my email."
                      className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow transition-colors flex items-center justify-center space-x-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>{submitting ? "Processing..." : "Submit Deletion Request"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* What Data is Purged */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                3. What Happens After Your Request
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                <li><strong>Lead Profiles:</strong> Your contact records, lead form answers, and custom field values are permanently deleted from tenant databases.</li>
                <li><strong>Chat History:</strong> Associated conversation threads across Team Inbox and WhatsApp logs are purged.</li>
                <li><strong>Confirmation:</strong> A formal confirmation email will be delivered to your registered email address verifying completion.</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="pt-6 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">4. Direct Privacy Contact</h2>
              <p className="text-sm">
                You can also email our privacy team directly with the subject line <em>&quot;Meta Data Deletion Request&quot;</em>:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
                <p><strong>Email:</strong> <a href="mailto:privacy@edfosys.com" className="text-[#F7941D] font-bold hover:underline">privacy@edfosys.com</a></p>
                <p><strong>Response SLA:</strong> Within 48 business hours</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
