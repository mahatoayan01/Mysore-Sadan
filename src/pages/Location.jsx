import React from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, Car, Compass, CheckCircle } from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { PureVegBadge } from '../components/PureVegBadge';

export const Location = () => {
  return (
    <div className="py-8 sm:py-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turmeric-100 text-turmeric-900 text-xs font-bold">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            <span>Sadashiv Peth, Pune</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal-950 tracking-tight">
            Location & Directions
          </h1>
          <p className="text-sm sm:text-base text-zinc-600">
            Find us near Nagnath Par in historic Sadashiv Peth, serving fresh pure-veg South Indian tiffins daily.
          </p>
        </div>

        {/* Map & Address Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Direct Actions */}
            <div className="bg-white rounded-3xl border border-warmbg-300 p-6 sm:p-8 shadow-warm space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="font-serif text-2xl font-bold text-charcoal-950">
                    {restaurantData.name}
                  </h2>
                  <PureVegBadge size="sm" />
                </div>
                <p className="text-xs text-brand-700 font-bold uppercase tracking-wider">
                  Pure Vegetarian South Indian Restaurant
                </p>
              </div>

              <div className="space-y-4 text-sm text-zinc-700 pt-2 border-t border-warmbg-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-charcoal-900 block mb-0.5">Full Address:</span>
                    <span className="leading-relaxed text-zinc-600 text-xs sm:text-sm">
                      {restaurantData.address.full}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-charcoal-900 block mb-0.5">Landmark:</span>
                    <span className="text-zinc-600 text-xs sm:text-sm">
                      {restaurantData.address.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-charcoal-900 block mb-0.5">Parking & Access:</span>
                    <span className="text-zinc-600 text-xs leading-relaxed block">
                      Dedicated two-wheeler street parking available along Bhopatkar Road. For four-wheelers, nearby municipal pay-and-park slots are recommended due to the vibrant traditional Peth street width.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-charcoal-900 block mb-0.5">Phone for Directions:</span>
                    <a
                      href={`tel:${restaurantData.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm text-brand-700 font-bold hover:underline"
                    >
                      {restaurantData.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Get Directions CTA */}
              <div className="pt-2">
                <a
                  href={restaurantData.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm tracking-wide shadow-md shadow-brand-600/25 flex items-center justify-center gap-2 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="bg-warmbg-50 rounded-3xl border border-warmbg-300 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-charcoal-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-600" />
                  Visiting Hours
                </h3>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  Open 7 Days
                </span>
              </div>
              <div className="divide-y divide-warmbg-200 text-xs">
                {restaurantData.openingHours.map((h) => (
                  <div key={h.day} className="py-2 flex items-center justify-between">
                    <span className="font-medium text-zinc-600">{h.day}</span>
                    <span className="font-bold text-brand-900">{h.open} – {h.close}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-warmbg-300 shadow-warm overflow-hidden flex flex-col h-[600px]">
            <div className="p-4 bg-warmbg-100 border-b border-warmbg-200 flex items-center justify-between text-xs">
              <span className="font-semibold text-charcoal-900 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-600" />
                Interactive Map View
              </span>
              <span className="text-zinc-500">Google Place ID: {restaurantData.googleMaps.placeId}</span>
            </div>

            <div className="flex-grow w-full h-full relative">
              <iframe
                title="Mysore Sadan Pure Veg Restaurant Location Map"
                src={restaurantData.googleMaps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="p-4 bg-white border-t border-warmbg-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-zinc-600">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Verified Google Maps Listing</span>
              </div>
              <a
                href={restaurantData.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-700 hover:text-brand-800 font-bold flex items-center gap-1"
              >
                <span>Open Full Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
