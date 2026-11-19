import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Shield, Heart } from 'lucide-react';
import { PureVegBadge } from './PureVegBadge';
import { restaurantData } from '../data/restaurant';

export const Footer = () => {
  return (
    <footer className="bg-charcoal-950 text-warmbg-200 pt-16 pb-8 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-charcoal-800">
          
          {/* Brand & Pure Veg Pledge */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-serif text-xl font-bold shadow-md">
                MS
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                Mysore Sadan
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Authentic South Indian pure vegetarian delicacies in Sadashiv Peth, Pune. Freshly griddled dosas in pure desi ghee, steamed idlis, and filter coffee.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-semibold">
              <PureVegBadge size="sm" />
              <span>100% Pure Vegetarian Restaurant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4 tracking-wide">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link to="/" className="hover:text-brand-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-brand-400 transition-colors">Full Menu & Ordering</Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-brand-400 transition-colors">Location & Directions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">Contact & Table Reservation</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-brand-400 transition-colors">Review Cart & Checkout</Link>
              </li>
              <li>
                <Link to="/owner-login" className="hover:text-turmeric-400 transition-colors flex items-center gap-1.5 text-xs text-zinc-400">
                  <Shield className="w-3.5 h-3.5 text-turmeric-400" />
                  Owner Portal (Staff Only)
                </Link>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4 tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4 text-turmeric-400" />
              Opening Hours
            </h3>
            <p className="text-xs text-zinc-400 mb-3">Serving breakfast, tiffins, and dinner 7 days a week:</p>
            <div className="space-y-1.5 text-xs text-zinc-300">
              {restaurantData.openingHours.map((h) => (
                <div key={h.day} className="flex justify-between py-0.5 border-b border-charcoal-900">
                  <span className="font-medium text-zinc-400">{h.day}</span>
                  <span className="text-turmeric-300 font-semibold">{h.open} – {h.close}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4 tracking-wide">
              Find & Contact Us
            </h3>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span className="leading-snug text-xs">
                  {restaurantData.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <a
                  href={`tel:${restaurantData.phone.replace(/\s+/g, '')}`}
                  className="text-xs hover:text-white transition-colors"
                >
                  {restaurantData.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href={`https://wa.me/${restaurantData.whatsappNumber}?text=Hello%20Mysore%20Sadan,%20I%20would%20like%20to%20inquire%20about%20your%20menu`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp Inquiries
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={restaurantData.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-900 hover:bg-charcoal-800 text-xs text-warmbg-200 border border-charcoal-700 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-turmeric-400" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom / Demo Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            © {new Date().getFullYear()} Mysore Sadan Pure Veg Restaurant. All rights reserved.
          </p>

          {/* Mandatory Demo Website Note */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-charcoal-700 text-zinc-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-turmeric-400 animate-pulse" />
            <span>Demo website</span>
          </div>

          <p className="flex items-center gap-1 text-[11px] text-zinc-400">
            Authentic South Indian Cuisine <Heart className="w-3 h-3 text-red-500 fill-red-500" /> Sadashiv Peth
          </p>
        </div>
      </div>
    </footer>
  );
};
