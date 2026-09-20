import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  Palette,
  CheckCircle2,
  ArrowRight,
  Layout,
  MousePointerClick,
  Eye,
  Layers,
  Sparkles,
  HelpCircle,
  Component,
} from "lucide-react";

export const metadata = {
  title: "UI/UX Product Design & Design Systems | Edfosys",
  description:
    "Data-driven product design, SaaS interfaces, and scalable design systems engineered for high conversion rates and effortless usability.",
};

export default function UiUxDesignPage() {
  const capabilities = [
    {
      title: "Scalable Enterprise Design Systems",
      desc: "Complete Figma design token libraries with semantic color palettes, modular typography scales, responsive grids, and reusable interactive component states.",
      icon: Component,
      bullets: [
        "Figma Variables & Auto-Layout 5.0 master component tokens",
        "Seamless Dark & Light mode theme tokenization",
        "Direct code export aligned with Tailwind CSS & React",
      ],
    },
    {
      title: "Conversion-Centric SaaS Dashboards",
      desc: "Ergonomic information hierarchy designed for high-frequency SaaS users. High-density data tables, visual analytics, and frictionless modal workflows.",
      icon: Layout,
      bullets: [
        "Zero-clutter cognitive load architecture for daily power users",
        "High-density data tables with custom sorting and filters",
        "Visual analytics charts with intuitive tooltip interactions",
      ],
    },
    {
      title: "User Journey & Funnel Optimization",
      desc: "Quantitative drop-off audits and qualitative user testing to identify UX friction points in signup, checkout, and onboarding funnels.",
      icon: MousePointerClick,
      bullets: [
        "Heuristic evaluations and comprehensive UX debt audits",
        "Frictionless 3-step self-serve onboarding flows",
        "Measurable lift in funnel completion and trial activation",
      ],
    },
    {
      title: "High-Fidelity Interactive Prototypes",
      desc: "Clickable prototypes engineered in Figma and Framer with realistic micro-animations, transitions, and conditional logic for user testing and stakeholder buy-in.",
      icon: Sparkles,
      bullets: [
        "Dynamic components with realistic hover, focus & press states",
        "Simulated live data inputs and branching user journeys",
        "Rapid user testing before writing a single line of code",
      ],
    },
    {
      title: "WCAG 2.1 AA Accessibility Standards",
      desc: "Inclusive product design with verified 4.5:1 color contrast ratios, ergonomic touch targets, screen reader semantic structure, and accessible focus outlines.",
      icon: Eye,
      bullets: [
        "Verified WCAG 2.1 AA & Section 508 legal compliance",
        "Color-blind friendly palette selection and status cues",
        "44x44px minimum touch targets for flawless mobile tap accuracy",
      ],
    },
    {
      title: "Developer Handoff & Storybook Alignment",
      desc: "Zero-friction developer collaboration with annotated component specs, responsive breakpoint guidelines, SVG icon systems, and Storybook token mapping.",
      icon: Layers,
      bullets: [
        "Clear spacing, margin, and padding token annotations",
        "Asset exports in optimized WebP and clean SVG code",
        "Direct pairing with frontend engineers during sprint cycles",
      ],
    },
  ];

  const designTools = [
    { name: "Figma", category: "Design & Auto-Layout" },
    { name: "FigJam", category: "User Flows & Sitemaps" },
    { name: "Framer", category: "Motion & Prototyping" },
    { name: "Storybook", category: "Component Specs" },
    { name: "Lottie / After Effects", category: "Micro-Animations" },
    { name: "Maze", category: "Unmoderated Testing" },
    { name: "Hotjar", category: "Heatmaps & Recordings" },
    { name: "Tailwind CSS", category: "Token Architecture" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Research & Persona Architecture",
      desc: "In-depth competitor benchmarking, user interviews, and behavioral archetype modeling to anchor design decisions in data.",
    },
    {
      step: "02",
      title: "Information Architecture & Wireframes",
      desc: "Low-fidelity structural wireframes establishing navigation patterns, visual priority, and ergonomic screen layout.",
    },
    {
      step: "03",
      title: "Design System & High-Fi Screens",
      desc: "Pixel-perfect visual design incorporating typography, iconography, elevation shadows, and modular UI components.",
    },
    {
      step: "04",
      title: "Interactive Prototyping & Testing",
      desc: "Clickable prototypes subjected to usability testing sessions to eliminate UX friction before engineering begins.",
    },
    {
      step: "05",
      title: "Engineering Handoff & QA Review",
      desc: "Comprehensive Figma design specs delivered with ongoing design review during frontend implementation sprints.",
    },
  ];

  const faqs = [
    {
      q: "What deliverables will we receive at the end of the UI/UX engagement?",
      a: "You receive the complete master Figma project containing: the atomic Design System (typography, colors, tokens, components), full responsive screen designs (Desktop, Tablet, Mobile), interactive clickable prototypes, and all exported SVG/vector graphic assets.",
    },
    {
      q: "How does UI/UX design directly impact our SaaS revenue and conversion rate?",
      a: "Clean, intuitive UI directly cuts time-to-value for new users, dramatically improving trial-to-paid conversion. Eliminating confusing navigation reduces user drop-off and lowers customer support ticket volume by up to 60%.",
    },
    {
      q: "Can you redesign our existing application without breaking our current frontend?",
      a: "Yes. We frequently conduct modular design overhauls. We establish an incremental design system that your development team can adopt page-by-page or component-by-component, avoiding risky all-at-once releases.",
    },
    {
      q: "Do you collaborate directly with our in-house development team?",
      a: "Absolutely. Our designers are well-versed in HTML, CSS, React, and Tailwind CSS. We speak the language of engineers and provide clean component specs that map directly to code props and responsive breakpoints.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-28">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#FFF9F2] via-white to-slate-50 py-16 lg:py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-6">
                <Palette className="w-4 h-4 text-[#F7941D]" />
                <span>Product Design Studio</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Conversion-First UI/UX & Design Systems Built for{" "}
                <span className="text-[#F7941D]">Effortless Scale</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
                We craft intuitive digital interfaces, enterprise SaaS dashboards, and scalable design systems that reduce user churn and transform complex software into delightful daily habits.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/free-consulting"
                  className="px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25 transition-all"
                >
                  Book Design Audit
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-all"
                >
                  Explore Design Portfolio
                </Link>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">+48%</div>
                  <div className="text-xs text-slate-500 font-medium">Avg Onboarding Completion</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Auto-Layout & Tokenized</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">WCAG AA</div>
                  <div className="text-xs text-slate-500 font-medium">Accessible Color Contrast</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                UI/UX Design Capabilities
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Every design decision is rooted in cognitive psychology, usability benchmarks, and technical feasibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-[#FFF9F2] hover:border-orange-200 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-[#F7941D] transition-colors">
                        <Icon className="w-6 h-6 text-[#F7941D] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F7941D] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-slate-200/60 text-xs text-slate-700">
                      {cap.bullets.map((b, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Design Tooling */}
        <section className="py-16 bg-slate-50 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F7941D]">Tooling & Standards</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Industry-Standard Design Ecosystem
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {designTools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center hover:border-orange-300 transition-all"
                >
                  <div className="text-sm font-bold text-slate-900">{tool.name}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold mt-1">
                    {tool.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Our 5-Stage Human-Centered Design Cadence
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                A disciplined creative process balancing rapid iteration with rigorous design fidelity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((s) => (
                <div key={s.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="text-2xl font-extrabold text-[#F7941D] mb-2">{s.step}</div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">{s.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                Frequently Asked Design Questions
              </h3>
              <p className="text-sm text-slate-600">
                Everything you need to know about our design deliverables and collaboration.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="text-base font-bold text-slate-900 mb-2 flex items-start">
                    <HelpCircle className="w-5 h-5 text-[#F7941D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>{f.q}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0C3246] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-extrabold mb-4">
              Elevate Your Product Experience
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Get an expert UX audit of your existing interface or discuss building a comprehensive design system from scratch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-consulting"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-xl"
              >
                Book Free UX Audit
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20"
              >
                Discuss Custom Scope
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
