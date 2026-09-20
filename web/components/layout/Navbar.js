"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
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
    setIndustriesDropdown(false);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
              alt="Edfosys"
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

            {/* Edfosys CRM Product Link */}
            <Link
              href="/crm"
              className="text-sm font-semibold text-slate-700 hover:text-[#F7941D] transition-colors flex items-center space-x-1.5"
            >
              <span>Edfosys CRM</span>
              <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-orange-100 text-[#e57a0b]">
                SaaS
              </span>
            </Link>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesDropdown(true)}
              onMouseLeave={() => setIndustriesDropdown(false)}
            >
              <button
                className="flex items-center space-x-1.5 text-sm font-semibold text-slate-700 hover:text-[#F7941D] transition-colors py-2"
                onClick={() => setIndustriesDropdown(!industriesDropdown)}
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    industriesDropdown ? "rotate-180 text-[#F7941D]" : ""
                  }`}
                />
              </button>

              {/* Industries Dropdown Menu */}
              {industriesDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  {industryList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-[#FFF9F2] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F7941D] transition-colors">
                          <Icon className="w-4 h-4 text-[#F7941D] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#F7941D] transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-snug">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="col-span-2 pt-3 mt-1 border-t border-slate-100 flex items-center justify-between text-xs">
                    <Link
                      href="/crm/industries"
                      className="font-bold text-[#F7941D] hover:underline flex items-center space-x-1"
                    >
                      <span>Explore All Industries Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-slate-400 text-[11px]">6 Pre-configured Editions</span>
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

            {/* About */}
            <Link
              href="/about"
              className="text-sm font-semibold text-slate-700 hover:text-[#F7941D] transition-colors"
            >
              About
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className="text-sm font-semibold text-slate-700 hover:text-[#F7941D] transition-colors"
            >
              Blog
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-700 hover:text-[#F7941D] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://app.edfosys.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-700 hover:text-[#F7941D] transition-colors px-3 py-2"
            >
              Start Free Trial
            </a>
            <Link
              href="/free-consulting"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#F7941D] hover:bg-[#e57a0b] text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
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
            <Link
              href="/crm"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-900 hover:bg-[#FFF9F2]"
            >
              Edfosys CRM
            </Link>
            <div className="px-3 py-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                <span>Industry Solutions</span>
                <Link href="/crm/industries" className="text-[#F7941D] text-[11px] lowercase tracking-normal">
                  view all →
                </Link>
              </div>
              <div className="space-y-2 pl-2">
                {industryList.map((ind) => (
                  <Link
                    key={ind.href}
                    href={ind.href}
                    className="block text-sm text-slate-700 hover:text-[#F7941D]"
                  >
                    {ind.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/free-consulting"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#F7941D] hover:bg-[#FFF9F2]"
            >
              Free 45-Min Strategy Session
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-900 hover:bg-[#FFF9F2]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-900 hover:bg-[#FFF9F2]"
            >
              Contact
            </Link>
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
                className="w-full text-center py-2.5 text-sm font-semibold border border-slate-200 text-slate-800 rounded-xl hover:bg-slate-50"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
