import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/common/FaqSection";
import CallToActionBanner from "@/components/layout/CallToActionBanner";
import PricingContent from "./PricingContent";

export const metadata = {
  title: "Simple, Transparent Per-User CRM Pricing | Edfosys CRM",
  description:
    "Predictable per-user pricing for high-performing sales teams. 14-day free trial. Full access to automated WhatsApp drip funnels, Meta lead ads sync, invoicing, and reporting.",
  alternates: {
    canonical: "https://edfosys.com/crm/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-28">
        {/* Dynamic Pricing Content with Live Backend Sync */}
        <PricingContent />

        {/* Pricing FAQs */}
        <FaqSection
          badge="Pricing Details"
          title="Frequently Asked Questions About CRM Pricing"
          subtitle="Everything you need to know about per-user billing, subscription plans, seat allocation, and trial terms."
          faqs={[
            {
              q: "How does per-user pricing work?",
              a: "You only pay for the team members who actively use the CRM. Each user gets their own dedicated login, activity log, role permissions, and lead assignment queue. You can add or remove users at any time directly from your Admin Billing Hub.",
            },
            {
              q: "Are all features included in every plan?",
              a: "Yes! We do not believe in artificial feature paywalls. The 14-day Free Trial, Monthly, and Yearly plans all include the complete CRM suite—including Meta Ads sync, WhatsApp & Email workflows, and Invoicing.",
            },
            {
              q: "What is the savings on the Yearly Plan?",
              a: "When you choose the Yearly Plan, you pay for 10 months and get 2 full months completely free (~17% discount). For example, at ₹250/mo, 1 year would be ₹3,000, but with annual billing it is just ₹2,500 per user.",
            },
            {
              q: "What happens when my 14-day free trial ends?",
              a: "All your leads, templates, workflows, and settings remain 100% safe. You will be prompted to choose either the Monthly or Yearly plan to keep your workspace active. No data is lost and you are never charged without explicit consent.",
            },
            {
              q: "Does Edfosys charge an additional markup on WhatsApp messages?",
              a: "No. Edfosys connects directly to the official Meta WhatsApp Cloud API without per-message platform commissions. You pay Meta directly for conversation fees, and Meta provides 1,000 free service conversations every month.",
            },
            {
              q: "What payment methods are supported for subscription billing?",
              a: "We support UPI, Net Banking, Debit/Credit cards (Visa, Mastercard, RuPay, Amex), and corporate invoice bank transfers with automated GST invoices.",
            },
          ]}
        />

        {/* Call to Action */}
        <CallToActionBanner
          badge="Start Free Today"
          title="Supercharge Your Sales Team with"
          highlight="Edfosys CRM"
          subtitle="Join ambitious businesses closing deals faster. Create your workspace in under 2 minutes."
          primaryCtaText="Start 14-Day Free Trial"
          primaryCtaLink="https://app.edfosys.com/signup"
          secondaryCtaText="Schedule 1-on-1 Consultation"
          secondaryCtaLink="/free-consulting"
          trustBadges={[
            "No credit card required",
            "Instant onboarding",
            "Cancel anytime",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
