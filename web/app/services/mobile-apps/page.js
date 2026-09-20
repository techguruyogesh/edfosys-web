import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import CallToActionBanner from "@/components/layout/CallToActionBanner";
import {
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Zap,
  WifiOff,
  BellRing,
  ShieldCheck,
  Cpu,
  Layers,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Enterprise Mobile App Development | iOS & Android | Edfosys",
  description:
    "Native-grade iOS and Android mobile applications engineered with Flutter and React Native. Smooth 60fps animations, offline data synchronization, and enterprise security.",
};

export default function MobileAppsPage() {
  const capabilities = [
    {
      title: "Flutter & React Native Cross-Platform",
      desc: "One single performant codebase targeting both iOS and Android with authentic native UI widgets, reducing engineering time and budget by up to 40%.",
      icon: Smartphone,
      bullets: [
        "Pixel-perfect 60fps/120fps hardware-accelerated animations",
        "Single code base with native bridge modules for iOS & Android",
        "Consistent brand ergonomics across all mobile form factors",
      ],
    },
    {
      title: "Offline-First Synchronization Engine",
      desc: "Local SQLite and WatermelonDB storage architecture enabling complete offline app functionality with automated conflict-free background sync upon reconnection.",
      icon: WifiOff,
      bullets: [
        "Full local offline read/write data store",
        "Background differential delta sync to reduce mobile data usage",
        "Automatic conflict resolution rules for field operations",
      ],
    },
    {
      title: "Targeted Push Notifications & Telemetry",
      desc: "Deep integration with Firebase Cloud Messaging (FCM) and Apple Push Notification Service (APNs) for automated transaction alerts, deep linking, and campaigns.",
      icon: BellRing,
      bullets: [
        "Rich interactive push notifications with actions and media",
        "In-app contextual messaging and user onboarding carousels",
        "Segmented delivery based on user geography and behavior",
      ],
    },
    {
      title: "Device Hardware & Sensor Integration",
      desc: "Seamless integration with Bluetooth Low Energy (BLE), background GPS geofencing, camera scanners (QR/barcode), NFC, and biometric FaceID/TouchID.",
      icon: Cpu,
      bullets: [
        "Biometric authentication (TouchID, FaceID & Android Biometric)",
        "Background location tracking & geofencing triggers",
        "High-speed offline camera QR/barcode document scanner",
      ],
    },
    {
      title: "App Store & Play Store Compliance",
      desc: "End-to-end guidance through Apple App Store Review and Google Play Console requirements, privacy manifests, in-app purchases, and automated OTA updates.",
      icon: ShieldCheck,
      bullets: [
        "100% first-pass App Store review approval track record",
        "Apple In-App Purchase (IAP) & Google Play Billing integration",
        "Automated CI/CD Fastlane deployments for instant OTA updates",
      ],
    },
    {
      title: "Enterprise Mobile Security",
      desc: "Code obfuscation, SSL pinning, encrypted SQLite storage (SQLCipher), root/jailbreak detection, and secure keychain/keystore token storage.",
      icon: Layers,
      bullets: [
        "SSL/TLS public key pinning against man-in-the-middle attacks",
        "SQLCipher 256-bit AES encrypted local databases",
        "Hardware-backed secure enclave storage for JWT auth tokens",
      ],
    },
  ];

  const techStack = [
    { name: "Flutter", category: "Cross-Platform" },
    { name: "React Native", category: "Cross-Platform" },
    { name: "Dart", category: "Language" },
    { name: "TypeScript", category: "Language" },
    { name: "Swift", category: "Native iOS" },
    { name: "Kotlin", category: "Native Android" },
    { name: "Firebase / FCM", category: "Cloud & Push" },
    { name: "SQLite / Realm", category: "Local Storage" },
    { name: "Fastlane", category: "Mobile CI/CD" },
    { name: "WatermelonDB", category: "Offline Sync" },
    { name: "GraphQL / REST", category: "API Bridge" },
    { name: "Sentry Mobile", category: "APM Telemetry" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Product Scoping & User Flow",
      desc: "We define the mobile user journey, screen architecture, offline state handling, and backend API contracts.",
    },
    {
      step: "02",
      title: "Mobile UI/UX Design System",
      desc: "Platform-specific design complying with Apple Human Interface Guidelines and Google Material Design 3.",
    },
    {
      step: "03",
      title: "Native & Cross-Platform Sprints",
      desc: "Bi-weekly TestFlight and Google Play Internal testing releases allowing you to test real builds on your personal device.",
    },
    {
      step: "04",
      title: "Device Lab Testing",
      desc: "Automated test suites running across 20+ actual iOS and Android device screen sizes, OS versions, and network speeds.",
    },
    {
      step: "05",
      title: "Store Submission & Launch",
      desc: "Preparation of App Store metadata, screenshot assets, privacy compliance disclosures, and live submission monitoring.",
    },
  ];

  const faqs = [
    {
      q: "Should we build with Flutter/React Native or pure native (Swift/Kotlin)?",
      a: "For 95% of commercial and enterprise applications, Flutter and React Native provide identical 60fps native performance while reducing upfront development costs by 40% and cutting feature rollout time in half. We only recommend pure native when an app heavily relies on custom low-level C++ drivers or specialized ARKit/Metal shaders.",
    },
    {
      q: "How does the mobile app function when the user has no internet connection?",
      a: "We engineer offline-first architectures using local encrypted SQLite databases. Users can continue browsing catalogs, logging field data, or creating orders offline; once internet connectivity is restored, our differential sync engine pushes changes to the server automatically.",
    },
    {
      q: "Do you handle the Apple App Store and Google Play Store submission?",
      a: "Yes, 100%. We handle developer account setup, provisioning profiles, privacy declarations, screenshot asset generation, and in-app purchase compliance, ensuring smooth approval.",
    },
    {
      q: "Can we push app updates without requiring users to download a new version?",
      a: "For React Native applications, we configure Over-The-Air (OTA) updates via CodePush, enabling instant UI tweaks, copy revisions, and critical bug fixes to go live without waiting for App Store review cycles.",
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
                <Smartphone className="w-4 h-4 text-[#F7941D]" />
                <span>Mobile Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Native & Cross-Platform Mobile Apps with{" "}
                <span className="text-[#F7941D]">Uncompromised Fluidity</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
                We craft high-retention iOS and Android mobile experiences engineered with Flutter and React Native. Smooth 60fps animations, bulletproof offline sync, and sub-second backend interactions.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
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
                  Request App Estimate
                </Link>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">60 FPS</div>
                  <div className="text-xs text-slate-500 font-medium">Fluid Animation Standard</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">40%</div>
                  <div className="text-xs text-slate-500 font-medium">Faster Time-to-Market</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Store Approval Guarantee</div>
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
                Mobile Engineering Capabilities
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Engineered for maximum battery efficiency, zero memory leaks, and enterprise-grade hardware security.
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

        {/* Tech Stack */}
        <section className="py-16 bg-slate-50 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F7941D]">Mobile Stack</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Modern Frameworks & Native Tooling
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

        {/* 5-Step Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Structured Mobile Delivery Lifecycle
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                You test interactive weekly builds directly on your smartphone via Apple TestFlight and Google Play Internal testing.
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
                Frequently Asked Mobile Questions
              </h3>
              <p className="text-sm text-slate-600">
                Clear answers regarding architecture, timeline, and store publishing.
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
          badge="Native & Cross-Platform Mobile"
          title="Have a Mobile App Concept in Mind with"
          highlight="Edfosys?"
          subtitle="Get an interactive prototype and technical architecture breakdown in our free 45-minute discovery consultation with senior mobile architects."
          primaryCtaText="Schedule Mobile Discovery"
          primaryCtaLink="/free-consulting"
          secondaryCtaText="Request Cost Breakdown"
          secondaryCtaLink="/contact"
          trustBadges={[
            "60fps fluid performance guarantee",
            "100% App Store approval compliance",
            "Offline-first synchronization",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
