import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToActionBanner from "@/components/layout/CallToActionBanner";
import InteractiveHeroWidget from "@/components/home/InteractiveHeroWidget";
import InteractivePillarTabs from "@/components/home/InteractivePillarTabs";
import RoiCalculator from "@/components/home/RoiCalculator";
import TestimonialWall from "@/components/home/TestimonialWall";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Building2,
  GraduationCap,
  Plane,
  Gavel,
  ShieldCheck,
  Zap,
} from "lucide-react";
import FaqSection from "@/components/common/FaqSection";

export const metadata = {
  title: "Edfosys | Technology Studio, Business Growth & SaaS Solutions",
  description:
    "Empowering modern businesses with high-impact software engineering, turnkey company setup, growth advisory, and our flagship Edfosys CRM platform.",
  alternates: {
    canonical: "https://edfosys.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-24 overflow-x-hidden">
        {/* ================================================================= */}
        {/* 1. HERO SECTION (Calendly / Lattice Human Feel)                    */}
        {/* ================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F2] via-white to-[#FCFAF7] pt-14 pb-20 lg:pt-20 lg:pb-28">
          {/* Subtle warm ambient lighting */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#0C3246]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Human Narrative & CTAs */}
              <div className="lg:col-span-6 space-y-6 text-left">
                {/* Status Pill */}
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 border border-orange-200 text-[#e57a0b] text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-ping" />
                  <span>Senior Architects Available for 1-on-1 Strategy Calls</span>
                </div>

                {/* Primary Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  Stop wrestling with scattered tools. Meet the{" "}
                  <span className="text-[#F7941D] relative inline-block">
                    growth studio
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5.5C50 2 150 2 199 5.5" stroke="#F7941D" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </span>{" "}
                  built for scale.
                </h1>

                {/* Conversational Subtitle */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Whether you need custom web & cloud architecture, seamless company setup, or our flagship <strong>Edfosys CRM</strong> to automate your leads on WhatsApp—we bring engineering and business execution together under one roof.
                </p>

                {/* Dual Action CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    href="/free-consulting"
                    className="px-8 py-4 rounded-2xl font-extrabold text-sm sm:text-base bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Book Free 45-Min Strategy</span>
                  </Link>

                  <Link
                    href="/crm"
                    className="px-7 py-4 rounded-2xl font-bold text-sm sm:text-base bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center justify-center space-x-2"
                  >
                    <span>Explore Edfosys CRM</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
                  <span className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> 100% Free Initial Strategy
                  </span>
                  <span className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> Zero Sales Pressure
                  </span>
                  <span className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> Direct Partner Access
                  </span>
                </div>
              </div>

              {/* Right Column: Live Interactive Widget (Calendly / Lattice Experience) */}
              <div className="lg:col-span-6 w-full">
                <InteractiveHeroWidget />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. INDUSTRY RECOGNITION STRIP                                     */}
        {/* ================================================================= */}
        <section className="py-10 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
              Empowering High-Velocity Teams Across Key Sectors
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex items-center justify-center space-x-2 text-slate-700 font-bold text-sm">
                <GraduationCap className="w-5 h-5 text-[#F7941D]" />
                <span>Education & Institutes</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-slate-700 font-bold text-sm">
                <Building2 className="w-5 h-5 text-[#F7941D]" />
                <span>Real Estate & Builders</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-slate-700 font-bold text-sm">
                <Plane className="w-5 h-5 text-[#F7941D]" />
                <span>Immigration & Visas</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-slate-700 font-bold text-sm">
                <Gavel className="w-5 h-5 text-[#F7941D]" />
                <span>Auctions & Consulting</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. LATTICE-STYLE INTERACTIVE PILLAR SHOWCASE                      */}
        {/* ================================================================= */}
        <InteractivePillarTabs />

        {/* ================================================================= */}
        {/* 4. COMPARISON MATRIX: THE EDFOSYS WAY VS SCATTERED VENDORS        */}
        {/* ================================================================= */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F7941D] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                Why Edfosys is Different
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-3">
                One Cohesive Growth Engine. Zero Hand-Waving.
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Compare hiring multiple uncoordinated agencies versus partnering with our unified studio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Traditional Agency Way */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
                <div className="flex items-center space-x-2 text-rose-600 font-bold text-sm">
                  <XCircle className="w-5 h-5" />
                  <span>The Traditional Agency Nightmare</span>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start space-x-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Developers who build code but have no clue how sales funnels work.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Legal & CA consultants who know taxes but don&apos;t know tech or APIs.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Leads leaking between landing pages, spreadsheets, and personal phones.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Finger-pointing whenever something in production breaks.</span>
                  </li>
                </ul>
              </div>

              {/* The Edfosys Way */}
              <div className="bg-[#FFF9F2] rounded-3xl p-8 border-2 border-orange-300/80 shadow-xl space-y-4 relative">
                <div className="absolute -top-3 right-6 bg-[#F7941D] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                  Unified Partner
                </div>
                <div className="flex items-center space-x-2 text-[#e57a0b] font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#F7941D]" />
                  <span>The Edfosys Unified Growth Studio</span>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F7941D] flex-shrink-0 mt-0.5" />
                    <span>Engineers who obsess over both sub-second page speed and CAC/LTV metrics.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F7941D] flex-shrink-0 mt-0.5" />
                    <span>Turnkey incorporation, banking, and legal setup aligned directly with your app.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F7941D] flex-shrink-0 mt-0.5" />
                    <span>Native Edfosys CRM platform capturing and closing leads automatically.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F7941D] flex-shrink-0 mt-0.5" />
                    <span>Single accountable point of contact across engineering, design, and growth.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. INTERACTIVE ROI & GROWTH CALCULATOR                            */}
        {/* ================================================================= */}
        <RoiCalculator />

        {/* ================================================================= */}
        {/* 6. VERIFIED TESTIMONIAL WALL (Human Practitioner Quotes)          */}
        {/* ================================================================= */}
        <TestimonialWall />

        {/* ================================================================= */}
        {/* 7. FREQUENTLY ASKED QUESTIONS (AEO & GEO Optimization)            */}
        {/* ================================================================= */}
        <FaqSection
          badge="Got Questions?"
          title="Frequently Asked Questions About Edfosys"
          subtitle="Everything you need to know about our technology studio, services, and flagship CRM platform."
          faqs={[
            {
              q: "What does Edfosys do?",
              a: "Edfosys is a unified technology studio and business growth accelerator. We engineer custom web and mobile applications, provide turnkey company setup and corporate growth advisory, and provide our flagship multi-tenant Edfosys CRM platform with native WhatsApp automation.",
            },
            {
              q: "What is Edfosys CRM and how is it different from generic CRMs?",
              a: "Edfosys CRM is an industry-tailored SaaS platform built with dedicated tenant database schema isolation, 0.4-second Meta Ads lead ingestion, official Meta WhatsApp Cloud API automation, and automated GST billing. Unlike bloated generic tools, it requires zero third-party connector plugins and is pre-configured for fast conversion.",
            },
            {
              q: "How fast can we onboard and start using Edfosys CRM?",
              a: "You can sign up and launch your organization within 2 minutes via our self-serve 14-day free trial. If you require historical lead data migration or custom pipeline configuration, our engineering team completes full onboarding within 24 to 48 hours.",
            },
            {
              q: "What does the Free 45-Minute Strategy Session include?",
              a: "Our strategy session is a direct 1-on-1 consultation with a senior technology architect and growth partner. We analyze your current CAC, sales funnels, and tech stack architecture, providing an actionable 90-day execution roadmap with zero sales pressure.",
            },
            {
              q: "Which business sectors does Edfosys specialize in?",
              a: "We provide dedicated vertical solutions for Education & Institutes, Real Estate Developers & Builders, Immigration & Visa Consultants, Elective Healthcare & Aesthetic Clinics, B2B IT Services, and High-Value Auctions.",
            },
          ]}
        />

        {/* ================================================================= */}
        {/* 8. FINAL HIGH-IMPACT CALENDLY-STYLE BOOKING BANNER                */}
        {/* ================================================================= */}
        <CallToActionBanner
          badge="Zero Risk • Immediate Value"
          title="Ready to Architect Your Growth Engine with"
          highlight="Edfosys?"
          subtitle="Book a complimentary 45-minute roadmap session with our senior architects. Or test-drive Edfosys CRM free for 14 days with zero commitment."
          primaryCtaText="Claim Free 45-Min Strategy Session"
          primaryCtaLink="/free-consulting"
          secondaryCtaText="Explore Edfosys CRM"
          secondaryCtaLink="/crm"
          trustBadges={[
            "Strict Confidentiality",
            "No Credit Card Required",
            "Direct Partner Consultation",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
