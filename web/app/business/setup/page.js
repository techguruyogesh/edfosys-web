import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Building2, CheckCircle2, ArrowRight, ShieldCheck, FileText, Landmark, Award } from "lucide-react";

export const metadata = {
  title: "Turnkey Company & Business Setup Services",
  description:
    "End-to-end company incorporation (Pvt Ltd, LLP), GST registration, corporate banking, MSME, trademark filing, and legal compliance advisory.",
};

export default function BusinessSetupPage() {
  const steps = [
    {
      title: "Company Incorporation (Pvt Ltd / LLP)",
      desc: "Digital signature certificates (DSC), DIN registration, Name Approval with MCA, MoA/AoA drafting, and certificate of incorporation.",
      icon: Building2,
    },
    {
      title: "Tax & Compliance Registrations",
      desc: "GST registration, PAN/TAN issuance, MSME/Udyam certification, and Professional Tax compliance setup.",
      icon: FileText,
    },
    {
      title: "Corporate Banking & Financial Onboarding",
      desc: "Fast-tracked current account opening with top private/digital banks, payment gateway integration (Razorpay, Stripe), and accounting tools.",
      icon: Landmark,
    },
    {
      title: "Intellectual Property & Trademark Protection",
      desc: "Comprehensive brand name search, trademark application filing under appropriate classes, and copyright registration guidance.",
      icon: Award,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28">
        <section className="bg-gradient-to-b from-[#FFF9F2] to-white py-16 lg:py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-6">
                <Building2 className="w-4 h-4 text-[#F7941D]" />
                <span>Turnkey Business Setup</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Painless Company Setup, Legal Incorporation &{" "}
                <span className="text-[#F7941D]">100% Compliance</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                From drafting company bylaws to GST registration, corporate banking, and trademark filing—we handle the bureaucratic heavy-lifting so you can focus entirely on selling and building.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/free-consulting"
                  className="px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25 transition-all"
                >
                  Start Incorporation
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-all"
                >
                  Download Checklist
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-12">
              Complete Setup Package
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-[#FFF9F2] hover:border-orange-200 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#F7941D]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0C3246] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Need Guidance on Which Business Structure to Choose?
              </h3>
              <p className="text-slate-300 text-sm">
                Get free 1-on-1 advisory comparing Private Limited vs LLP vs Sole Proprietorship.
              </p>
            </div>
            <Link
              href="/free-consulting"
              className="px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl flex-shrink-0"
            >
              Get Free Setup Advisory →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
