import { Quote, Star, CheckCircle2 } from "lucide-react";

export default function TestimonialWall() {
  const testimonials = [
    {
      quote:
        "Before Edfosys, our 14 counselors were losing 35% of student leads because follow-ups were handled on personal WhatsApp phones. Edfosys CRM centralized our Meta ad leads and automated document reminders in 48 hours. Our admission conversion jumped by 42%.",
      author: "Vikram Rathore",
      role: "Managing Director",
      company: "Apex Overseas Study Consultants",
      city: "Ahmedabad, Gujarat",
      metric: "+42% Admission Rate",
      tag: "Edfosys CRM & WhatsApp",
      avatarInitials: "VR",
      bgGradient: "from-orange-500/10 to-transparent",
    },
    {
      quote:
        "They didn’t just engineer our Next.js and Laravel cloud platform; they guided our Pvt Ltd incorporation, drafted director resolutions, and configured our Razorpay gateway. We went from a napkin sketch to our first ₹10 Lakhs in MRR in under 4 months.",
      author: "Ananya Desai",
      role: "Co-Founder & CEO",
      company: "PropTech Horizon Realty",
      city: "Mumbai & Ahmedabad",
      metric: "0 to ₹10L MRR in 4 Months",
      tag: "Custom Tech + Business Setup",
      avatarInitials: "AD",
      bgGradient: "from-blue-500/10 to-transparent",
    },
    {
      quote:
        "The free 45-minute strategy session alone gave us more clarity on our CAC and unit economics than two months with our previous advisory agency. No sales pressure—just two senior architects mapping out a realistic 90-day sprint.",
      author: "Karan Mehta",
      role: "Principal Director",
      company: "Sterling Heritage Auctioneers",
      city: "Delhi NCR",
      metric: "32% Reduction in CAC",
      tag: "Growth Planning & Advisory",
      avatarInitials: "KM",
      bgGradient: "from-emerald-500/10 to-transparent",
    },
  ];

  return (
    <section className="py-24 bg-[#FCFAF7] border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#e57a0b] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Verified Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Trusted by Founders Who Value{" "}
            <span className="text-[#F7941D]">Execution Over Hype</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Read how ambitious leaders use our engineering studio, business advisory, and CRM platform to outpace their competitors.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Metric Pill & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-orange-50 text-[#e57a0b] border border-orange-100">
                    {t.metric}
                  </span>
                  <div className="flex text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote Body */}
                <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-slate-100 flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-full bg-[#0C3246] text-[#F7941D] font-extrabold text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {t.role}, {t.company}
                  </p>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {t.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
