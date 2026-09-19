import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Code2, CheckCircle2, ArrowRight, Server, Zap, ShieldCheck, Database } from "lucide-react";

export const metadata = {
  title: "Enterprise Web & Cloud Architecture Services",
  description:
    "High-performance custom web applications, SaaS platforms, and cloud backends engineered with Next.js, Laravel, Node.js, and AWS.",
};

export default function WebDevelopmentPage() {
  const capabilities = [
    {
      title: "SaaS & Multi-Tenant Platforms",
      desc: "Robust multi-tenant database isolation, subscription billing, and role-based permissions modeled for rapid enterprise scaling.",
    },
    {
      title: "Modern Next.js & React Frontends",
      desc: "Instant page transitions, SSR, SSG, and sub-second Core Web Vitals to maximize search visibility and conversion rates.",
    },
    {
      title: "High-Throughput APIs & Microservices",
      desc: "Clean RESTful and GraphQL APIs engineered in Laravel and Node.js with automated queues, caching, and background workers.",
    },
    {
      title: "AWS Cloud & DevOps Infrastructure",
      desc: "Auto-scaling EC2, RDS, Docker containers, CI/CD automated deployment pipelines, and zero-downtime release engineering.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#FFF9F2] to-white py-16 lg:py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-6">
                <Code2 className="w-4 h-4 text-[#F7941D]" />
                <span>Enterprise Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Custom Web Platforms & Cloud Architecture Built to{" "}
                <span className="text-[#F7941D]">Dominate at Scale</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We design and engineer resilient web applications, multi-tenant SaaS engines, and cloud infrastructures that power mission-critical operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/free-consulting"
                  className="px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25 transition-all"
                >
                  Consult an Architect
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-all"
                >
                  Request Proposal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-12">
              Engineering Capabilities
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

        {/* CTA Banner */}
        <section className="py-16 bg-[#0C3246] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Have a Complex Web or Cloud Architecture in Mind?
              </h3>
              <p className="text-slate-300 text-sm">
                Discuss your technical specs in a 1-on-1 strategy call with our principal engineer.
              </p>
            </div>
            <Link
              href="/free-consulting"
              className="px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl flex-shrink-0"
            >
              Book Strategy Session →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
