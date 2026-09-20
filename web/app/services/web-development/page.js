import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import CallToActionBanner from "@/components/layout/CallToActionBanner";
import {
  Code2,
  CheckCircle2,
  ArrowRight,
  Server,
  Zap,
  ShieldCheck,
  Database,
  Cpu,
  Layers,
  GitBranch,
  Terminal,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Enterprise Web & Cloud Architecture Services | Edfosys",
  description:
    "High-performance custom web applications, SaaS multi-tenant platforms, and resilient cloud backends engineered with Next.js, Laravel, Node.js, and AWS.",
};

export default function WebDevelopmentPage() {
  const capabilities = [
    {
      title: "SaaS & Multi-Tenant Platforms",
      desc: "Robust multi-tenant database isolation, automated workspace provisioning, subscription billing, and role-based permissions modeled for rapid enterprise scaling.",
      icon: Layers,
      bullets: [
        "Physical database segregation per tenant organization",
        "Automated subdomain and custom domain SSL mapping",
        "Subscription lifecycle, seat licensing & automated invoicing",
      ],
    },
    {
      title: "Modern Next.js & React Frontends",
      desc: "Instant page transitions, React Server Components (RSC), SSR, and sub-second Core Web Vitals to maximize search visibility and conversion rates.",
      icon: Zap,
      bullets: [
        "Next.js App Router with Turbopack optimization",
        "Tailwind CSS design systems with dark/light themes",
        "Fluid 60fps micro-interactions and responsive layouts",
      ],
    },
    {
      title: "High-Throughput APIs & Microservices",
      desc: "Clean RESTful and GraphQL APIs engineered in Laravel and Node.js with automated queues, Redis caching, and asynchronous background workers.",
      icon: Server,
      bullets: [
        "Sub-50ms API response times with Redis caching",
        "Robust webhook pipelines with automated retry logic",
        "Strict input validation, rate limiting & OpenAPI documentation",
      ],
    },
    {
      title: "AWS Cloud & DevOps Infrastructure",
      desc: "Auto-scaling EC2, RDS Aurora, Docker containers, automated CI/CD deployment pipelines, and zero-downtime blue-green release engineering.",
      icon: Terminal,
      bullets: [
        "Infrastructure as Code (Terraform / CloudFormation)",
        "Automated GitHub Actions CI/CD deployment pipelines",
        "CloudWatch, Datadog & Sentry telemetry monitoring",
      ],
    },
    {
      title: "Database Architecture & Optimization",
      desc: "Complex schema modeling in PostgreSQL and MySQL, query index optimization, sharding strategies, and point-in-time encrypted automated backups.",
      icon: Database,
      bullets: [
        "Query execution optimization & indexing strategies",
        "Read-replica routing for heavy reporting workloads",
        "Automated daily encrypted off-site backups",
      ],
    },
    {
      title: "Enterprise Security & Compliance",
      desc: "End-to-end encryption at rest and in transit, OWASP Top-10 defense, JWT/OAuth2 authentication, and strict multi-tier audit logging.",
      icon: ShieldCheck,
      bullets: [
        "AES-256 encryption at rest and TLS 1.3 in transit",
        "Role-Based Access Control (RBAC) with column masking",
        "Automated vulnerability scanning & penetration testing",
      ],
    },
  ];

  const techStack = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "Laravel", category: "Backend" },
    { name: "Python", category: "Backend / AI" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Redis", category: "Caching" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS EC2 / RDS", category: "Cloud" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Architecture & Blueprinting",
      desc: "We analyze your business model, data flow, user personas, and scaling requirements to construct an immutable architectural blueprint.",
    },
    {
      step: "02",
      title: "UI/UX & Interactive Prototyping",
      desc: "High-fidelity Figma prototypes and clickable wireframes verified for ergonomic efficiency, conversion optimization, and brand consistency.",
    },
    {
      step: "03",
      title: "Agile Sprint Engineering",
      desc: "Two-week bi-weekly sprints with automated CI/CD staging deployments, live code reviews, and transparent sprint demo reviews.",
    },
    {
      step: "04",
      title: "Rigorous QA & Security Audits",
      desc: "End-to-end automated testing, load testing for concurrency spikes, and penetration testing against OWASP vulnerability standards.",
    },
    {
      step: "05",
      title: "Zero-Downtime Deployment & DevOps",
      desc: "Production release on AWS with DNS failover, automated SSL provisioning, real-time APM telemetry, and 24/7 SLA maintenance.",
    },
  ];

  const faqs = [
    {
      q: "Do I own 100% of the source code and intellectual property?",
      a: "Yes, absolutely. Upon project completion and milestone settlement, 100% of the proprietary source code, database schemas, repository access, and infrastructure credentials are transferred to your organization with zero licensing locks.",
    },
    {
      q: "How do you ensure web application security and multi-tenant data isolation?",
      a: "We architect multi-tenant SaaS applications with physical database segregation (separate databases or separate schemas per tenant) rather than basic shared-table row filtering. All data is encrypted with AES-256 at rest and TLS 1.3 in transit.",
    },
    {
      q: "What is your typical development timeline for custom web applications?",
      a: "An enterprise MVP typically launches within 6 to 10 weeks, structured in bi-weekly agile sprints. More complex multi-tenant enterprise platforms take 12 to 16 weeks with staging previews deployed every Friday.",
    },
    {
      q: "Can you modernize or rebuild our existing legacy system without business disruption?",
      a: "Yes. We frequently execute strangler-fig pattern migrations — incrementally carving out legacy modules into modern microservices or Next.js frontends while keeping the legacy database and user sessions uninterrupted.",
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
                <Code2 className="w-4 h-4 text-[#F7941D]" />
                <span>Enterprise Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Custom Web Platforms & Cloud Architecture Built to{" "}
                <span className="text-[#F7941D]">Dominate at Scale</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
                We design and engineer resilient web applications, multi-tenant SaaS engines, and cloud infrastructures that power mission-critical operations with sub-second performance.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
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

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">99.98%</div>
                  <div className="text-xs text-slate-500 font-medium">Production SLA Uptime</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">&lt;400ms</div>
                  <div className="text-xs text-slate-500 font-medium">Avg API & Core Web Vitals</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 font-medium">IP & Source Code Ownership</div>
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
                Enterprise Engineering Capabilities
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Architected from the ground up for high concurrency, bulletproof data isolation, and effortless developer operations.
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

        {/* Technology Stack Grid */}
        <section className="py-16 bg-slate-50 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F7941D]">Modern Stack</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Technologies We Master & Deploy
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center hover:border-orange-300 transition-all"
                >
                  <div className="text-sm font-bold text-slate-900">{tech.name}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold mt-1">
                    {tech.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5-Step Delivery Lifecycle */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Our Battle-Tested Engineering Lifecycle
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                From napkin sketches to enterprise cloud releases, our structured engineering cadence ensures zero surprises and timely delivery.
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

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                Frequently Asked Technical Questions
              </h3>
              <p className="text-sm text-slate-600">
                Key questions enterprise leaders ask before partnering with us.
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

        {/* Floating CTA Banner */}
        <CallToActionBanner
          badge="Enterprise Cloud Architecture"
          title="Ready to Architect Your Next Web Platform with"
          highlight="Edfosys?"
          subtitle="Book a complimentary 45-minute technical session with our lead architects. We will audit your architecture and provide actionable scaling recommendations."
          primaryCtaText="Schedule Technical Audit"
          primaryCtaLink="/free-consulting"
          secondaryCtaText="Request Cost Estimate"
          secondaryCtaLink="/contact"
          trustBadges={[
            "100% IP & source code ownership",
            "Production-grade security audit",
            "Zero vendor lock-in",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
