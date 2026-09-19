import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C3246] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Edfosys"
                width={150}
                height={35}
                className="h-9 w-auto brightness-0 invert object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Edfosys is a premier technology studio and business growth accelerator. We engineer modern cloud architectures, custom software, and AI-driven CRM platforms for ambitious enterprises.
            </p>
            <div className="pt-2 space-y-2 text-sm text-slate-400">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#F7941D] flex-shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#F7941D] flex-shrink-0" />
                <a href="tel:+919099699965" className="hover:text-white transition-colors">
                  +91 90996 99965
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#F7941D] flex-shrink-0" />
                <a href="mailto:info@edfosys.com" className="hover:text-white transition-colors">
                  info@edfosys.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Digital & IT Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Digital & IT
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/web-development" className="hover:text-[#F7941D] transition-colors">
                  Web & Cloud Architecture
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="hover:text-[#F7941D] transition-colors">
                  Mobile App Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="hover:text-[#F7941D] transition-colors">
                  UI/UX Product Design
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-[#F7941D] transition-colors">
                  Performance Marketing & SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business Setup & Growth */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Business Growth
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/business/growth-planner" className="hover:text-[#F7941D] transition-colors">
                  Business Growth Planner
                </Link>
              </li>
              <li>
                <Link href="/business/setup" className="hover:text-[#F7941D] transition-colors">
                  Company Setup & GST
                </Link>
              </li>
              <li>
                <Link href="/free-consulting" className="hover:text-[#F7941D] transition-colors flex items-center space-x-1 font-semibold text-orange-400">
                  <span>Free Consulting</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: SaaS Products */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              SaaS Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/crm" className="hover:text-[#F7941D] transition-colors flex items-center space-x-1.5">
                  <span className="font-semibold text-white">Edfosys CRM</span>
                  <span className="text-[10px] bg-[#F7941D] text-white px-1.5 py-0.5 rounded font-bold">
                    Flagship
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/crm/features" className="hover:text-[#F7941D] transition-colors">
                  CRM Features
                </Link>
              </li>
              <li>
                <Link href="/crm/pricing" className="hover:text-[#F7941D] transition-colors">
                  CRM Pricing & Plans
                </Link>
              </li>
              <li>
                <a href="https://app.edfosys.com/register" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7941D] transition-colors">
                  Start Free CRM Trial
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Edfosys. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Contact Support
            </Link>
            <span>Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
