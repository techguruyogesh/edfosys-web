import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FreeConsultingForm from "@/app/free-consulting/FreeConsultingForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Edfosys | Get in Touch with Our Team",
  description:
    "Contact Edfosys for custom software engineering inquiries, business setup consulting, or Edfosys CRM platform support.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-28 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Get in Touch with <span className="text-[#F7941D]">Edfosys</span>
            </h1>
            <p className="text-lg text-slate-600">
              Have questions about our IT services, business setup advisory, or Edfosys CRM? Our team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Direct Contact</h3>

                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Headquarters:</strong>
                      <span>Ahmedabad, Gujarat, India</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Phone className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Phone & WhatsApp:</strong>
                      <a href="tel:+919099699965" className="hover:text-[#F7941D] transition-colors">
                        +91 90996 99965
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Mail className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Email Inquiries:</strong>
                      <a href="mailto:info@edfosys.com" className="hover:text-[#F7941D] transition-colors">
                        info@edfosys.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Clock className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Working Hours:</strong>
                      <span>Monday – Saturday: 9:00 AM – 7:00 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Fill out the form below and an Edfosys specialist will get back to you promptly.
                </p>
                <FreeConsultingForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
