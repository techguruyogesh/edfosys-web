"use client";

import { useState } from "react";
import Link from "next/link";
import { Megaphone, ArrowRight, X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#70B4FF] text-slate-900 border-b border-[#5aa5fb] py-2 px-3 sm:px-4 relative z-50 transition-all duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        {/* Main Content */}
        <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1 text-xs sm:text-[13px] font-medium text-center pr-6 sm:pr-0">
          <div className="flex items-center space-x-1.5 flex-shrink-0">
            <Megaphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900 fill-slate-900/10 flex-shrink-0" />
            <span className="font-bold tracking-tight">Special Offer:</span>
          </div>

          <span className="text-slate-900">
            Get 3 Months Free on Annual Plans + New WhatsApp Cloud Automation & 0.4s Meta Lead Sync.
          </span>

          <Link
            href="/crm"
            className="inline-flex items-center space-x-1 bg-white/85 hover:bg-white text-slate-900 px-2.5 py-0.5 rounded-md text-[11px] sm:text-xs font-semibold transition-all hover:scale-[1.02] border border-white/60 shadow-xs ml-1 flex-shrink-0"
          >
            <span>Learn more</span>
            <ArrowRight className="w-3 h-3 text-slate-700" />
          </Link>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-800/70 hover:text-slate-950 p-1 rounded-md hover:bg-black/5 transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
