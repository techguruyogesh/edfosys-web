import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://edfosys.com"),
  title: {
    default: "Edfosys | Technology Studio, Business Growth & SaaS Solutions",
    template: "%s | Edfosys",
  },
  description:
    "Empowering modern enterprises with cutting-edge IT engineering, custom cloud software, business setup consulting, and our flagship Edfosys CRM platform.",
  keywords: [
    "Edfosys",
    "Edfosys CRM",
    "IT Services",
    "Software Development",
    "Business Setup",
    "Business Growth Planner",
    "Free Business Consulting",
    "Web Development",
    "Mobile Apps",
    "Lead Management",
  ],
  authors: [{ name: "Edfosys" }],
  creator: "Edfosys",
  publisher: "Edfosys",
  icons: {
    icon: [
      { url: "/favicon.png?v=edfosys-s2", type: "image/png" },
      { url: "/favicon.ico?v=edfosys-s2", sizes: "any" },
      { url: "/favicon.svg?v=edfosys-s2", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://edfosys.com",
    title: "Edfosys | Technology Studio, Business Growth & SaaS Solutions",
    description:
      "Empowering modern enterprises with cutting-edge IT engineering, custom cloud software, business setup consulting, and our flagship Edfosys CRM platform.",
    siteName: "Edfosys",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Edfosys - Technology Studio & SaaS Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edfosys | Technology Studio, Business Growth & SaaS Solutions",
    description:
      "Empowering modern enterprises with cutting-edge IT engineering, custom cloud software, business setup consulting, and our flagship Edfosys CRM platform.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} font-sans antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
