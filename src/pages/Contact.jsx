import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, Clock, ExternalLink } from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { PureVegBadge } from '../components/PureVegBadge';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    // Build prefilled WhatsApp message
    const text = `*New Website Inquiry for Mysore Sadan Pure Veg*
*Name:* ${formData.name}
*Phone:* ${formData.phone || 'Not provided'}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${restaurantData.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-8 sm:py-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
            <PureVegBadge size="sm" />
            <span>We'd Love To Hear From You</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal-950 tracking-tight">
            Contact & Inquiries
          </h1>
          <p className="text-sm sm:text-base text-zinc-600">
            Reach out directly for catering, large group bookings, delivery queries, or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="bg-white rounded-3xl border border-warmbg-300 p-6 sm:p-8 shadow-warm space-y-6">
              <h2 className="font-serif text-xl font-bold text-charcoal-950">
                Direct Contact Points
              </h2>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-warmbg-50 border border-warmbg-200">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block">Direct Phone</span>
                    <a
                      href={`tel:${restaurantData.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-charcoal-900 hover:text-brand-600 transition-colors"
                    >
                      {restaurantData.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-zinc-400 block mt-0.5">Available 7:30 AM – 11:30 PM daily</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-800 font-semibold uppercase tracking-wider block">WhatsApp Chat</span>
                    <a
                      href={`https://wa.me/${restaurantData.whatsappNumber}?text=Hello%20Mysore%20Sadan,%20I%20have%20an%20inquiry.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-950 hover:underline flex items-center gap-1"
                    >
                      <span>Chat on {restaurantData.phoneDisplay}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[11px] text-emerald-700 block mt-0.5">Fast responses for orders & takeaway</span>
                  </div>
                </div>

                {/* Email Placeholder (Step 1 rule) */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-warmbg-50 border border-warmbg-200">
                  <div className="w-10 h-10 rounded-xl bg-zinc-200 text-zinc-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block">Official Email</span>
                    <span className="text-sm font-mono text-zinc-600 font-medium">
                      {restaurantData.email}
                    </span>
                    <span className="text-[10px] text-zinc-400 block mt-0.5">Placeholder - to be configured</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-warmbg-50 border border-warmbg-200">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block">Restaurant Address</span>
                    <p className="text-xs text-charcoal-900 leading-relaxed font-medium mt-0.5">
                      {restaurantData.address.full}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Times Box */}
            <div className="bg-warmbg-50 rounded-3xl border border-warmbg-300 p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-warmbg-300 flex items-center justify-center text-brand-600 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-charcoal-950">Timings</h3>
                <p className="text-xs text-zinc-600 mt-0.5">
                  Open every day from <strong>7:30 AM to 11:30 PM</strong> without afternoon closing breaks.
                </p>
              </div>
            </div>

          </div>

          {/* Right Form - Opens WhatsApp prefilled message */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-warmbg-300 p-6 sm:p-10 shadow-warm">
            <div className="mb-6">
              <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">
                Instant Messaging
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-950 mt-1">
                Send a Message via WhatsApp
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                Fill out the details below. Clicking send will open WhatsApp with your prefilled message ready to send directly to our restaurant staff.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-zinc-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Anand Deshpande"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-zinc-700 mb-1">
                    Your Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="e.g. +91 98230 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold text-zinc-700 mb-1">
                  Subject / Inquiry Type
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm bg-white"
                >
                  <option value="General Inquiry">General Question / Inquiry</option>
                  <option value="Catering & Party Order">Catering & Bulk Party Tiffin Order</option>
                  <option value="Table Reservation Inquiry">Table Reservation Inquiry</option>
                  <option value="Feedback / Compliment">Feedback & Review</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-zinc-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell us what you need (e.g. breakfast catering for 25 people on Sunday, or inquiry about pure-ghee dosas)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </button>
                <p className="text-[11px] text-zinc-400 text-center mt-2">
                  No sign-up or backend required. Opens WhatsApp app on mobile or WhatsApp Web on desktop.
                </p>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
