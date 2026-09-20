/**
 * Structured Data (JSON-LD) Schemas for Edfosys Website
 * Compliant with Schema.org specifications for Google Rich Results,
 * Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO).
 */

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://edfosys.com/#organization",
    name: "Edfosys",
    legalName: "Edfosys Technologies",
    url: "https://edfosys.com",
    logo: "https://edfosys.com/logo.png",
    image: "https://edfosys.com/og-image.png",
    description:
      "Premier technology studio, turnkey business growth accelerator, and creator of the multi-tenant Edfosys CRM platform.",
    foundingDate: "2024",
    telephone: "+91-7405672371",
    email: "contact@edfosys.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Gujarat",
      addressLocality: "Ahmedabad",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7405672371",
        contactType: "customer support",
        areaServed: ["IN", "AE", "US", "CA", "GB"],
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-7405672371",
        contactType: "sales",
        areaServed: ["IN", "AE", "US", "CA", "GB"],
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      "https://linkedin.com/company/edfosys",
      "https://twitter.com/edfosys",
      "https://facebook.com/edfosys",
      "https://instagram.com/edfosys",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://edfosys.com/crm#software",
    name: "Edfosys CRM",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Customer Relationship Management & WhatsApp Automation",
    operatingSystem: "Cloud, Web-based, Cross-Platform (Chrome, Safari, Edge, Firefox)",
    url: "https://edfosys.com/crm",
    image: "https://edfosys.com/og-image.png",
    description:
      "Enterprise multi-tenant CRM engineered for Education, Real Estate, Immigration, Healthcare, and B2B Services. Features 0.4s Meta Ads lead ingestion, official Meta WhatsApp Cloud API automation, dedicated tenant database isolation, and automated GST billing.",
    author: {
      "@id": "https://edfosys.com/#organization",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "999",
      highPrice: "4999",
      offerCount: "3",
      offers: [
        {
          "@type": "Offer",
          name: "Solo Starter",
          price: "999",
          priceCurrency: "INR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "999",
            priceCurrency: "INR",
            unitText: "MONTH",
          },
          url: "https://edfosys.com/crm/pricing",
        },
        {
          "@type": "Offer",
          name: "Growth Team",
          price: "2499",
          priceCurrency: "INR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "2499",
            priceCurrency: "INR",
            unitText: "MONTH",
          },
          url: "https://edfosys.com/crm/pricing",
        },
        {
          "@type": "Offer",
          name: "Enterprise Multi-Branch",
          price: "4999",
          priceCurrency: "INR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "4999",
            priceCurrency: "INR",
            unitText: "MONTH",
          },
          url: "https://edfosys.com/crm/pricing",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "128",
      reviewCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Meta Ads 0.4s Real-Time Webhook Lead Ingestion",
      "Official Meta WhatsApp Cloud API Template Automation",
      "Multi-Branch & Shift-Aware Round-Robin Lead Distribution",
      "Dedicated Tenant Database Schema Physical Isolation",
      "Automated Multi-Item GST Invoicing & Quotations",
      "Google Drive Cloud Document Vault",
      "Google Sheets 2-Way Sync & Outbound Zapier Webhooks",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqPageSchema({ faqs = [] }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
