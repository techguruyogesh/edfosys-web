"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AnnouncementBar from "./AnnouncementBar";
import {
  ChevronDown,
  Menu,
  X,
  Code2,
  Smartphone,
  Palette,
  Megaphone,
  TrendingUp,
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Headphones,
  GraduationCap,
  Plane,
  Gavel,
  Stethoscope,
  Briefcase,
  Zap,
  MessageSquare,
  Receipt,
  BarChart3,
  CheckCircle2,
  Layers,
  CreditCard,
  BookOpen,
  HelpCircle,
  Award,
  Calendar,
  Info,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [crmDropdown, setCrmDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
    setCrmDropdown(false);
  }, [pathname]);

  const industryList = [
    {
      title: "Education & Coaching",
      desc: "Student inquiries, counselor round-robin & exam alerts.",
      href: "/crm/industries/education",
      icon: GraduationCap,
    },
    {
      title: "Real Estate & Builders",
      desc: "Site visit scheduling & live multi-tower inventory grid.",
      href: "/crm/industries/real-estate",
      icon: Building2,
    },
    {
      title: "Immigration & Visa",
      desc: "Country intakes, document vaults & status alerts.",
      href: "/crm/industries/immigration",
      icon: Plane,
    },
    {
      title: "Healthcare & Clinics",
      desc: "Doctor queues, no-show reminders & care retention.",
      href: "/crm/industries/healthcare",
      icon: Stethoscope,
    },
    {
      title: "IT & B2B Services",
      desc: "High-ticket deal pipeline & proposal view heatmaps.",
      href: "/crm/industries/b2b-services",
      icon: Briefcase,
    },
    {
      title: "Auctions & High-Value",
      desc: "Consignor lots, KYC paddles & outbid WhatsApp bots.",
      href: "/crm/industries/auctions",
      icon: Gavel,
    },
  ];

  const itServices = [
    {
      title: "Web & Cloud Architecture",
      desc: "Enterprise Next.js, Node, Laravel & AWS cloud solutions.",
      href: "/services/web-development",
      icon: Code2,
    },
    {
      title: "Mobile App Development",
      desc: "Scalable iOS & Android apps using Flutter & React Native.",
      href: "/services/mobile-apps",
      icon: Smartphone,
    },
    {
      title: "UI/UX Product Design",
      desc: "Conversion-first product interfaces and design systems.",
      href: "/services/ui-ux-design",
      icon: Palette,
    },
    {
      title: "Performance Marketing & SEO",
      desc: "ROI-driven Meta Ads, Google Ads & search visibility.",
      href: "/services/digital-marketing",
      icon: Megaphone,
    },
  ];

  const businessServices = [
    {
      title: "Business Growth Planner",
      desc: "Strategic revenue modeling & customer acquisition plan.",
      href: "/business/growth-planner",
      icon: TrendingUp,
    },
    {
      title: "Business Setup & Incorporation",
      desc: "End-to-end company setup, GST, MSME & legal advisory.",
      href: "/business/setup",
      icon: Building2,
    },
    {
      title: "Free Business Consulting",
      desc: "1-on-1 strategy session with senior tech architects.",
      href: "/free-consulting",
      icon: Sparkles,
      badge: "Free 45-Min",
    },
  ];

  const resourceMainItems = [
    {
      title: "About Us",
      desc: "Our story, engineering mission, and leadership team.",
      href: "/about",
      icon: Info,
      badge: null,
    },
    {
      title: "Blog & Insights",
      desc: "In-depth articles on software architecture and scaling.",
      href: "/blog",
      icon: BookOpen,
      badge: "Articles",
    },
    {
      title: "Contact & Support",
      desc: "Reach our software architects and customer support.",
      href: "/contact",
      icon: Mail,
      badge: null,
    },
  ];

  const resourceUpcomingItems = [
    {
      title: "Case Studies",
      desc: "Client success stories and ROI benchmarks.",
      icon: Award,
      badge: "Soon",
    },
    {
      title: "Help Center",
      desc: "Step-by-step guides, documentation & FAQs.",
      icon: HelpCircle,
      badge: "Soon",
    },
    {
      title: "Events & Webinars",
      desc: "Live workshops on growth and CRM automation.",
      icon: Calendar,
      badge: "Soon",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementBar />
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
            : "bg-white/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-2.5">
            <Image
              src="/logo.png"
              alt="Edfosys - Technology Studio & SaaS CRM Platform"
              width={160}
              height={38}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className="flex items-center space-x-1.5 text-sm font-semibold text-slate-700 hover:text-[#F7941D] transition-colors py-2"
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180 text-[#F7941D]" : ""
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Column 1: Tech & Digital */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
                      <span>Digital & IT Engineering</span>
                    </div>
                    <div className="space-y-3">
                      {itServices.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-[#FFF9F2] transition-colors"
                          >
                            <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F7941D] transition-colors">
                              <Icon className="w-4 h-4 text-[#F7941D] group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-[#F7941D] transition-colors">
                                {item.title}
                              </div>
                              <div className="text-xs text-slate-500 leading-relaxed">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Column 2: Business & Consulting */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
                      <span>Business Growth & Setup</span>
                    </div>
                    <div className="space-y-3">
                      {businessServices.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-[#FFF9F2] transition-colors"
                          >
                            <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F7941D] transition-colors">
                              <Icon className="w-4 h-4 text-[#F7941D] group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <div className="text-sm font-semibold text-slate-900 group-hover:text-[#F7941D] transition-colors">
                                  {item.title}
                                </div>
                                {item.badge && (
                                  <span className="text-[10px] font-bold bg-[#F7941D] text-white px-2 py-0.5 rounded-full">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-slate-500 leading-relaxed">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* CRM Banner inside Mega Menu */}
                    <div className="mt-4 p-3.5 bg-gradient-to-br from-[#0C3246] to-[#071f2c] rounded-xl text-white">
                      <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                        Flagship SaaS Product
                      </div>
                      <div className="text-sm font-bold mb-1">Edfosys CRM</div>
                      <p className="text-xs text-slate-300 mb-3">
                        Lead automation, WhatsApp integration & pipeline tracker.
                      </p>
                      <Link
                        href="/crm"
                        className="inline-flex items-center text-xs font-semibold text-[#F7941D] hover:underline"
                      >
                        Explore CRM Platform <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Edfosys CRM Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCrmDropdown(true)}
              onMouseLeave={() => setCrmDropdown(false)}
            >
              <button
                className="flex items-center space-x-1.5 text-sm font-semibold text-slate-700 hover:text-[#F7941D] transition-colors py-2"
                onClick={() => setCrmDropdown(!crmDropdown)}
              >
                <span>Edfosys CRM</span>
                <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-orange-100 text-[#e57a0b]">
                  SaaS
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    crmDropdown ? "rotate-180 text-[#F7941D]" : ""
                  }`}
                />
              </button>

              {/* CRM Mega Dropdown Menu */}
              {crmDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[820px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-12 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Left Column: Platform, Pricing & Key Features (5 cols) */}
                  <div className="col-span-5 border-r border-slate-100 pr-6 space-y-4">
                    <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100">
                      <span>CRM Platform & Panel</span>
                    </div>

                    <div className="space-y-2">
                      <Link
                        href="/crm"
                        className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-[#FFF9F2] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F7941D] transition-colors">
                          <Zap className="w-4 h-4 text-[#F7941D] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#F7941D] transition-colors">
                            CRM Platform Overview
                          </div>
                          <div className="text-[11px] text-slate-500 leading-snug">
                            Omni-channel lead capture & WhatsApp sales automation.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/crm/pricing"
                        className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-[#FFF9F2] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                          <CreditCard className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#F7941D] transition-colors">
                            Pricing & Plans
                          </div>
                          <div className="text-[11px] text-slate-500 leading-snug">
                            Transparent tiers from ₹1,499/mo with 14-day free trial.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/crm/industries"
                        className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-[#FFF9F2] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                          <Layers className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#F7941D] transition-colors">
                            All Industries Hub
                          </div>
                          <div className="text-[11px] text-slate-500 leading-snug">
                            Compare pre-configured workflows for all verticals.
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Highlights Box */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1.5">
                      <div className="font-bold text-slate-700 text-[10px] uppercase tracking-wide">
                        Core Panel Capabilities:
                      </div>
                      <div className="flex items-center text-slate-600 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-1.5 flex-shrink-0" />
                        <span>Official Meta WhatsApp Cloud API</span>
                      </div>
                      <div className="flex items-center text-slate-600 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-1.5 flex-shrink-0" />
                        <span>Visual Kanban & Follow-up Logs</span>
                      </div>
                      <div className="flex items-center text-slate-600 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-1.5 flex-shrink-0" />
                        <span>Quotation & GST Invoicing Engine</span>
                      </div>
                      <div className="flex items-center text-slate-600 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-1.5 flex-shrink-0" />
                        <span>100% Dedicated Database Isolation</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: 6 Industry Editions (7 cols) */}
                  <div className="col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100 mb-3">
                        <span>Industry-Specific Editions</span>
                        <Link
                          href="/crm/industries"
                          className="text-[#F7941D] hover:underline normal-case text-xs font-semibold"
                        >
                          View all 6 →
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {industryList.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group flex items-start space-x-2.5 p-2 rounded-xl hover:bg-[#FFF9F2] transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F7941D] transition-colors">
                                <Icon className="w-4 h-4 text-[#F7941D] group-hover:text-white transition-colors" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-900 group-hover:text-[#F7941D] transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-[10px] text-slate-500 line-clamp-1 leading-snug">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom CTA Card */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-[#0C3246] to-[#071f2c] rounded-xl text-white flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-bold text-orange-400">
                          Integrated with Meta Ads, Google Sheets, Razorpay & WhatsApp Cloud
                        </div>
                        <div className="text-[10px] text-slate-300">
                          Get full access to all features in 2 minutes.
                        </div>
                      </div>
                      <a
                        href="https://app.edfosys.com/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 bg-[#F7941D] hover:bg-[#e57a0b] text-white text-xs font-bold rounded-lg whitespace-nowrap transition-colors flex items-center space-x-1"
                      >
                        <span>Start Free</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Free Consulting Highlight */}
            <Link
              href="/free-consulting"
              className="text-sm font-semibold text-slate-700 hover:text-[#F7941D] transition-colors flex items-center space-x-1.5"
            >
              <span>Free Consulting</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesDropdown(true)}
              onMouseLeave={() => setResourcesDropdown(false)}
            >
              <button
                className="flex items-center space-x-1.5 text-sm font-semibold text-slate-700 hover:text-[#F7941D] transition-colors py-2"
                onClick={() => setResourcesDropdown(!resourcesDropdown)}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    resourcesDropdown ? "rotate-180 text-[#F7941D]" : ""
                  }`}
                />
              </button>

              {/* Resources Dropdown Menu */}
              {resourcesDropdown && (
                <div className="absolute top-full right-0 lg:left-1/2 lg:-translate-x-1/2 w-[540px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 grid grid-cols-2 gap-5 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Column 1: Active Core Pages */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 pb-1.5 border-b border-slate-100">
                      <span>Explore</span>
                    </div>
                    <div className="space-y-2">
                      {resourceMainItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-start space-x-3 p-2 rounded-xl hover:bg-[#FFF9F2] transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F7941D] transition-colors">
                              <Icon className="w-4 h-4 text-[#F7941D] group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-1.5">
                                <span className="text-xs font-bold text-slate-900 group-hover:text-[#F7941D] transition-colors">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="text-[9px] font-bold bg-orange-100 text-[#e57a0b] px-1.5 py-0.5 rounded">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-snug">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Column 2: Knowledge Hub (Future Expansion) */}
                  <div className="bg-slate-50/70 rounded-xl p-3.5 border border-slate-100/90">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 pb-1.5 border-b border-slate-200/60">
                      <span>Knowledge Hub</span>
                      <span className="text-[9px] text-slate-400 font-medium normal-case">coming soon</span>
                    </div>
                    <div className="space-y-2">
                      {resourceUpcomingItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.title}
                            className="flex items-start space-x-2.5 p-1.5 rounded-lg opacity-70 cursor-default"
                          >
                            <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-400">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-1.5">
                                <span className="text-xs font-semibold text-slate-700">
                                  {item.title}
                                </span>
                                <span className="text-[8px] font-bold bg-slate-200 text-slate-600 px-1.5 py-0.2 rounded uppercase">
                                  {item.badge}
                                </span>
                              </div>
                              <div className="text-[10px] text-slate-500 leading-tight">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://app.edfosys.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-bold text-slate-800 bg-white border-2 border-slate-200 hover:border-[#F7941D] hover:text-[#F7941D] hover:bg-[#FFF9F2] shadow-sm transition-all duration-200 active:scale-[0.98] flex items-center justify-center"
            >
              Start Free Trial
            </a>
            <Link
              href="/free-consulting"
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Free Strategy
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              href="/free-consulting"
              className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#F7941D] text-white"
            >
              Consulting
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-6 pt-2 border-t border-slate-100 space-y-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-900 hover:bg-[#FFF9F2]"
            >
              Home
            </Link>
            <div className="px-3 py-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Services
              </div>
              <div className="space-y-2 pl-2">
                {itServices.concat(businessServices).map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block text-sm text-slate-700 hover:text-[#F7941D]"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
            {/* Mobile Edfosys CRM Section */}
            <div className="px-3 py-2.5 rounded-xl bg-orange-50/40 border border-orange-100/70">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                <span className="text-[#F7941D]">Edfosys CRM SaaS</span>
                <Link href="/crm" className="text-[#0C3246] text-[11px] lowercase tracking-normal font-semibold">
                  explore crm →
                </Link>
              </div>
              <div className="space-y-1.5 pl-1">
                <Link
                  href="/crm"
                  className="block text-sm font-semibold text-slate-800 hover:text-[#F7941D]"
                >
                  ⚡ CRM Overview & Platform
                </Link>
                <Link
                  href="/crm/pricing"
                  className="block text-sm font-semibold text-slate-800 hover:text-[#F7941D]"
                >
                  💳 Pricing & ROI Plans
                </Link>
                <Link
                  href="/crm/industries"
                  className="block text-sm font-semibold text-slate-800 hover:text-[#F7941D]"
                >
                  🏢 All Industries Comparison Hub
                </Link>

                <div className="pt-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Pre-configured Vertical Editions
                </div>
                <div className="grid grid-cols-2 gap-1 pt-1">
                  {industryList.map((ind) => (
                    <Link
                      key={ind.href}
                      href={ind.href}
                      className="text-xs text-slate-600 hover:text-[#F7941D] py-1 px-1.5 rounded hover:bg-white"
                    >
                      • {ind.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/free-consulting"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#F7941D] hover:bg-[#FFF9F2]"
            >
              Free 45-Min Strategy Session
            </Link>
            {/* Mobile Resources Section */}
            <div className="px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Resources & Company
              </div>
              <div className="space-y-1.5 pl-1">
                <Link
                  href="/about"
                  className="block text-sm font-semibold text-slate-800 hover:text-[#F7941D]"
                >
                  📖 About Edfosys
                </Link>
                <Link
                  href="/blog"
                  className="block text-sm font-semibold text-slate-800 hover:text-[#F7941D]"
                >
                  ✍️ Blog & Growth Insights
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm font-semibold text-slate-800 hover:text-[#F7941D]"
                >
                  📞 Contact & Support
                </Link>
                <div className="pt-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Knowledge Hub (Coming Soon)
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="text-[11px] bg-white border border-slate-200 text-slate-500 px-2 py-0.5 rounded-md">
                    Case Studies
                  </span>
                  <span className="text-[11px] bg-white border border-slate-200 text-slate-500 px-2 py-0.5 rounded-md">
                    Help Center
                  </span>
                  <span className="text-[11px] bg-white border border-slate-200 text-slate-500 px-2 py-0.5 rounded-md">
                    Events & Webinars
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="/free-consulting"
                className="w-full text-center py-2.5 text-sm font-semibold bg-[#F7941D] text-white rounded-xl shadow"
              >
                Book Free Consultation
              </Link>
              <a
                href="https://app.edfosys.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 text-sm font-bold border-2 border-slate-200 text-slate-800 rounded-xl hover:border-[#F7941D] hover:text-[#F7941D] hover:bg-slate-50 transition-all"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </div>
      </div>
    </header>
  );
}
