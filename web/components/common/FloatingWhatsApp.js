"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function FloatingWhatsApp({
  phoneNumber = "919099699965",
  message = "Hi Edfosys team, I would like to know more about your CRM platform and services.",
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show gentle prompt bubble after 2.5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Speech Bubble / Prompt Tooltip */}
      <AnimatePresence>
        {showTooltip && !hasInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-3 max-w-[260px] sm:max-w-[300px] bg-white text-slate-800 p-3.5 rounded-2xl shadow-2xl border border-slate-200/80 relative"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
                setHasInteracted(true);
              }}
              className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-500 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              onClick={() => setHasInteracted(true)}
            >
              <div className="flex items-center space-x-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                  Senior Consultant Online
                </span>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-snug group-hover:text-emerald-700 transition-colors">
                Need help picking the right CRM edition or software scope?{" "}
                <span className="font-bold text-emerald-600 underline decoration-emerald-300">
                  Chat with us on WhatsApp →
                </span>
              </p>
            </a>

            {/* Downward connecting speech caret */}
            <div className="absolute -bottom-2 right-6 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating WhatsApp Button */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute -inset-1.5 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#20ba5a] via-[#25D366] to-[#128C7E] text-white shadow-2xl shadow-emerald-600/40 border-2 border-white/80 transition-shadow duration-300 group"
          onClick={() => setHasInteracted(true)}
        >
          {/* Authentic WhatsApp SVG Logo */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md group-hover:rotate-6 transition-transform duration-300"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>

          {/* Unread Alert Dot Badge */}
          <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shadow">
            1
          </span>
        </a>
      </motion.div>
    </div>
  );
}
