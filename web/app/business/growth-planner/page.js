import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { TrendingUp, CheckCircle2, ArrowRight, Target, DollarSign, Users2, BarChart } from "lucide-react";
import FaqSection from "@/components/common/FaqSection";

export const metadata = {
  title: "Business Growth Planner & Strategic Advisory | Edfosys",
  description:
    "Data-backed financial forecasting, unit economics modeling, customer acquisition frameworks, and 90-day milestone execution plans for growing enterprises with Edfosys.",
  alternates: {
    canonical: "https://edfosys.com/business/growth-planner",
  },
};

export default function GrowthPlannerPage() {
  const pillars = [
    {
      title: "Revenue Modeling & Unit Economics",
      desc: "Stress-testing your CAC (Customer Acquisition Cost), LTV (Lifetime Value), gross margins, and payback periods to ensure profitable scaling.",
      icon: DollarSign,
    },
    {
      title: "Go-To-Market (GTM) Strategy",
      desc: "Identifying high-yield market segments, channel-product fit, positioning differentiation, and pricing power strategy.",
      icon: Target,
    },
    {
      title: "Sales Pipeline Architecture",
      desc: "Designing predictable inbound and outbound sales motions, qualification criteria (BANT/MEDDIC), and CRM automation stages.",
      icon: BarChart,
    },
    {
      title: "Quarterly OKR & Milestone Roadmaps",
      desc: "Translating annual revenue goals into sprint-based OKRs and operational KPIs that keep your leadership team accountable.",
      icon: Users2,
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
                <TrendingUp className="w-4 h-4 text-[#F7941D]" />
                <span>Strategic Growth Studio</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Business Growth Planning Built on{" "}
                <span className="text-[#F7941D]">Data, Economics & Execution</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Stop guessing your next quarter. We build scientific revenue projections, unit economic frameworks, and customer acquisition engines that turn ambitious targets into mathematical certainty.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/free-consulting"
                  className="px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25 transition-all"
                >
                  Request Growth Blueprint
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-all"
                >
                  Speak with an Advisor
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-12">
              Growth Planning Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((item) => {
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

        {/* Growth Planner FAQs */}
        <FaqSection
          badge="Growth Advisory FAQ"
          title="Frequently Asked Questions: Growth Planning"
          subtitle="How our data-driven growth advisory helps founders scale revenue profitably."
          faqs={[
            {
              q: "What is the difference between Edfosys Growth Planning and standard business coaching?",
              a: "Traditional business coaching focuses on generic motivational advice. Edfosys Growth Planning is an architectural advisory sprint led by practitioners who analyze your concrete unit economics (CAC, LTV, payback period, churn rate) and engineer actionable sales pipelines with CRM automation.",
            },
            {
              q: "Who participates in the Growth Planning sessions?",
              a: "Sessions are conducted directly with our senior technology and business architects. We engage with founders, managing directors, and sales heads to align tech, marketing, and financial goals.",
            },
            {
              q: "How quickly do companies see measurable results from the 90-day sprint?",
              a: "Most client organizations identify and plug high-leakage pipeline bottlenecks within the first 14 days, with sales conversion increases and CAC reductions typically registering within 30 to 60 days.",
            },
          ]}
        />

        <section className="py-16 bg-[#0C3246] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Need a Concrete 90-Day Scaling Plan?
              </h2>
              <p className="text-slate-300 text-sm">
                Book a complimentary 45-minute growth consultation to examine your revenue model.
              </p>
            </div>
            <Link
              href="/free-consulting"
              className="px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl flex-shrink-0"
            >
              Get Growth Consultation →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
