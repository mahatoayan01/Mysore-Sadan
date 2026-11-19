import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { restaurantData } from '../data/restaurant';

export const FloatingActions = () => {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating Call Button */}
      <a
        href={`tel:${restaurantData.phone.replace(/\s+/g, '')}`}
        className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/30 hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-brand-400"
        title={`Call ${restaurantData.phoneDisplay}`}
        aria-label="Call Restaurant"
      >
        <Phone className="w-5 h-5 text-white animate-bounce-subtle" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold tracking-wide">
          Call {restaurantData.phoneDisplay}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${restaurantData.whatsappNumber}?text=Hello%20Mysore%20Sadan,%20I%20would%20like%20to%20place%20an%20order%20or%20inquire%20about%20your%20menu.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-emerald-400"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold tracking-wide">
          WhatsApp Chat
        </span>
      </a>
    </aside>
  );
};
