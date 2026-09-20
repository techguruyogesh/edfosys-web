import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FreeConsultingForm from "./FreeConsultingForm";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Calendar,
  Users,
  Building2,
  Code2,
} from "lucide-react";
import FaqSection from "@/components/common/FaqSection";

export const metadata = {
  title: "Free 45-Min Business Setup & Tech Strategy Consulting | Edfosys",
  description:
    "Schedule a complimentary 45-minute 1-on-1 strategy session with Edfosys senior architects and business advisors. Get your tailored setup and tech scaling roadmap.",
  alternates: {
    canonical: "https://edfosys.com/free-consulting",
  },
};

export default function FreeConsultingPage() {
  const deliverableItems = [
    {
      title: "Business Incorporation & Compliance Audit",
      desc: "Complete step-by-step guidance on entity structuring (Pvt Ltd vs LLP), GST, trademark, MSME, and banking setups.",
      icon: Building2,
    },
    {
      title: "Custom Technology & Cloud Architecture",
      desc: "Expert audit of your proposed tech stack, cloud scalability blueprint (AWS, Next.js, Laravel), and development cost estimation.",
      icon: Code2,
    },
    {
      title: "Customer Acquisition & CRM Funnel",
      desc: "Proven customer acquisition workflows, Meta & Google ads funnels, and automated lead management via Edfosys CRM.",
      icon: Users,
    },
    {
      title: "Actionable 90-Day Execution Roadmap",
      desc: "A concrete milestone-driven plan you can execute immediately with zero fluff or generic theory.",
      icon: Calendar,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-28 pb-20 bg-gradient-to-b from-[#FFF9F2] via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#e57a0b] text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-[#F7941D]" />
              <span>Zero-Cost • 100% Confidential • High Impact</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Claim Your Free 45-Minute{" "}
              <span className="text-[#F7941D]">Business Setup & Tech Strategy</span> Session
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Sit down with our senior technology architects and business growth consultants. Walk away with a tailored execution roadmap designed to save you months of trial-and-error.
            </p>
          </div>

          {/* Grid Layout: What you get vs Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: What's Included */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#F7941D]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      What Happens in the 45 Minutes?
                    </h3>
                    <p className="text-xs text-slate-500">
                      Actionable, high-value consulting with zero sales pressure.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {deliverableItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3">
                          <Icon className="w-4 h-4 text-[#F7941D]" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Trust Callout */}
              <div className="p-6 rounded-2xl bg-[#0C3246] text-white flex items-center space-x-4">
                <ShieldCheck className="w-10 h-10 text-[#F7941D] flex-shrink-0" />
                <div>
                  <h4 className="text-base font-bold">100% Non-Disclosure Guaranteed</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Your business concepts, intellectual property, and numbers are treated with strict confidentiality.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Intake Booking Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 border-2 border-orange-200/80 shadow-2xl relative">
                <div className="absolute -top-3.5 right-6 bg-[#F7941D] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow">
                  Limited Sessions / Week
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Reserve Your Strategy Call
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Fill in your details and our senior partner will contact you within 2 business hours to confirm your slot.
                </p>

                <FreeConsultingForm />
              </div>
            </div>
          </div>
        </div>

        {/* Consulting FAQs */}
        <FaqSection
          badge="Advisory FAQ"
          title="Frequently Asked Questions About the Strategy Session"
          subtitle="Everything you need to know about our complimentary 45-minute executive consultation."
          faqs={[
            {
              q: "Is the 45-minute strategy session truly 100% free with no hidden obligation?",
              a: "Yes, completely. There are no pitch decks, no aggressive sales follow-ups, and no payment required. We provide genuine technical and business advisory because serious enterprises frequently choose to partner with us once they experience our execution clarity.",
            },
            {
              q: "What should I prepare before our consultation call?",
              a: "Come prepared with an outline of your business model, current or projected sales volumes, customer acquisition channels, and any specific technical bottlenecks or compliance questions you want answered.",
            },
            {
              q: "Are our business concepts and financials kept confidential?",
              a: "Yes. We operate under strict mutual confidentiality protocols and routinely sign mutual Non-Disclosure Agreements (NDAs) prior to sensitive technical or financial discussions.",
            },
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
