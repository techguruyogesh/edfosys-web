import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Smartphone, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Cross-Platform Mobile App Engineering | iOS & Android",
  description:
    "Native-performance iOS and Android mobile applications engineered with Flutter and React Native. Smooth 60fps animations and offline synchronization.",
};

export default function MobileAppsPage() {
  const capabilities = [
    {
      title: "Flutter & React Native Cross-Platform",
      desc: "One high-performance codebase delivering authentic native iOS and Android apps with 40% faster time-to-market.",
    },
    {
      title: "Offline-First Synchronization",
      desc: "Local SQLite/WatermelonDB storage with automatic background synchronization when internet connectivity returns.",
    },
    {
      title: "Real-Time Push Notifications",
      desc: "FCM & Apple APNs integration for contextual user engagement, transaction alerts, and promotional campaigns.",
    },
    {
      title: "App Store & Play Store Deployment",
      desc: "Full submission, compliance management, privacy disclosures, and continuous OTA updates.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <section className="bg-gradient-to-b from-[#FFF9F2] to-white py-16 lg:py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-6">
                <Smartphone className="w-4 h-4 text-[#F7941D]" />
                <span>Mobile Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Native & Cross-Platform Mobile Apps with{" "}
                <span className="text-[#F7941D]">Uncompromised Fluidity</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We craft beautiful, high-retention mobile experiences that turn first-time app installs into loyal, repeat customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/free-consulting"
                  className="px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25 transition-all"
                >
                  Consult Mobile Architect
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-all"
                >
                  Get Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-12">
              Mobile App Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-[#FFF9F2] hover:border-orange-200 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-[#F7941D]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0C3246] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Ready to Turn Your Idea into an App Store Hit?
              </h3>
              <p className="text-slate-300 text-sm">
                Book a free session to discuss architecture, timeline, and development costs.
              </p>
            </div>
            <Link
              href="/free-consulting"
              className="px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl flex-shrink-0"
            >
              Book Strategy Call →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
