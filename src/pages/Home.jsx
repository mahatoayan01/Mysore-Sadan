import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Phone,
  Utensils,
  Clock,
  MapPin,
  Star,
  ChevronDown,
  Instagram,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
  Flame,
  Award
} from 'lucide-react';
import { PureVegBadge } from '../components/PureVegBadge';
import { DishCard } from '../components/DishCard';
import { SampleBadge } from '../components/SampleBadge';
import { restaurantData } from '../data/restaurant';
import { menuItems } from '../data/menu';
import { reviewsData } from '../data/reviews';
import { galleryCategories, galleryData } from '../data/gallery';
import { faqsData } from '../data/faqs';
import { instagramData } from '../data/instagram';
import { offersData } from '../data/offers';

export const Home = () => {
  // Table booking state
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '12:30 PM',
    guests: '2',
    requests: ''
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Gallery active filter
  const [activeGalleryCat, setActiveGalleryCat] = useState('All');

  // FAQ open item
  const [openFaq, setOpenFaq] = useState(0);

  // Filter popular dishes for home showcase
  const popularDishes = menuItems.filter(item => item.isPopular).slice(0, 6);

  // Filter gallery
  const filteredGallery = activeGalleryCat === 'All'
    ? galleryData
    : galleryData.filter(g => g.category === activeGalleryCat);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone) return;
    setBookingSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-warmbg-100 via-warmbg-50 to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-warmbg-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide shadow-2xs">
                <PureVegBadge size="sm" />
                <span>100% PURE VEGETARIAN • AUTHENTIC MYSORE RECIPES</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-950 tracking-tight leading-[1.12]">
                Crispy Dosas, Steaming Idlis & <span className="text-brand-600 italic">Filter Coffee</span>
              </h1>

              {/* Tagline */}
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                {restaurantData.shortDescription}
              </p>

              {/* Rating & Location Snippet */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <div className="flex items-center gap-1.5 bg-turmeric-50 border border-turmeric-200 px-3 py-1.5 rounded-xl">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-sm text-charcoal-900">{restaurantData.rating}</span>
                  <span className="text-xs text-zinc-500">({restaurantData.reviewCount}+ Google reviews)</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                  <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Sadashiv Peth, Pune</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <Link
                  to="/menu"
                  className="px-6 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-600/25 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                >
                  <Utensils className="w-4 h-4" />
                  <span>Order Now / View Menu</span>
                </Link>

                <a
                  href={`tel:${restaurantData.phone.replace(/\s+/g, '')}`}
                  className="px-5 py-3.5 rounded-2xl bg-white hover:bg-warmbg-50 text-charcoal-900 border border-warmbg-300 font-bold text-sm shadow-2xs hover:border-brand-400 hover:text-brand-600 transition-all duration-200 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-600" />
                  <span>Call {restaurantData.phoneDisplay}</span>
                </a>

                <a
                  href="#table-booking"
                  className="px-5 py-3.5 rounded-2xl bg-turmeric-50 hover:bg-turmeric-100 text-turmeric-900 border border-turmeric-300 font-bold text-sm transition-all duration-200 flex items-center gap-1.5"
                >
                  <Calendar className="w-4 h-4 text-turmeric-700" />
                  <span>Reserve Table</span>
                </a>
              </div>

              {/* Value Props Row */}
              <div className="pt-6 border-t border-warmbg-200/80 grid grid-cols-3 gap-3 text-center sm:text-left">
                <div>
                  <div className="text-brand-700 font-serif font-bold text-lg sm:text-xl">Pure Desi Ghee</div>
                  <div className="text-xs text-zinc-500">Rich golden roasts</div>
                </div>
                <div>
                  <div className="text-brand-700 font-serif font-bold text-lg sm:text-xl">7:30 AM – 11:30 PM</div>
                  <div className="text-xs text-zinc-500">Open 7 days a week</div>
                </div>
                <div>
                  <div className="text-brand-700 font-serif font-bold text-lg sm:text-xl">100% Pure Veg</div>
                  <div className="text-xs text-zinc-500">Sacred hygiene standards</div>
                </div>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-warmbg-100 aspect-[4/3] lg:aspect-square">
                <img
                  src="/images/hero/hero-mysore-sadan.webp"
                  alt="Mysore Sadan pure vegetarian South Indian breakfast spread"
                  width={1400}
                  height={1050}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                
                {/* Floating Dish Highlights */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-warmbg-200 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <PureVegBadge size="sm" />
                      <span className="font-serif font-bold text-sm text-charcoal-950">
                        Signature Tiffin Feast
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Mysore Masala Dosa, Idli, Vada & Filter Coffee
                    </p>
                  </div>
                  <Link
                    to="/menu"
                    className="shrink-0 px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition-colors"
                  >
                    Order
                  </Link>
                </div>

                <div className="absolute top-4 right-4">
                  <SampleBadge text="Sample illustration" />
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-turmeric-400/20 rounded-full blur-2xl -z-10 pointer-events-none" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl -z-10 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROMOTIONAL OFFERS (Rule: only real ones, otherwise one editable placeholder) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-brand-900 via-brand-800 to-turmeric-900 text-white p-6 sm:p-8 lg:p-10 shadow-warm-lg relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-turmeric-500/20 border border-turmeric-400/30 text-turmeric-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-turmeric-400" />
                {offersData[0].tag}
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                {offersData[0].title}
              </h2>
              <p className="text-sm text-warmbg-200 max-w-xl">
                {offersData[0].description}
              </p>
              <div className="text-xs text-turmeric-200/80 pt-1">
                {offersData[0].validity}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <div className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                <span className="text-[10px] text-warmbg-300 uppercase tracking-widest block font-medium">Coupon Code</span>
                <span className="font-mono font-bold text-lg text-turmeric-300 tracking-wider">{offersData[0].code}</span>
              </div>
              <Link
                to="/menu"
                className="px-5 py-3 rounded-xl bg-turmeric-500 hover:bg-turmeric-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Apply On Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT & TRADITION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md border border-warmbg-300 bg-warmbg-100 relative">
                <img
                  src="/images/food/ghee-garlic-roast-dosa.webp"
                  alt="Crispy Ghee Garlic Roast Dosa"
                  width={600}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2">
                  <SampleBadge text="Sample image" />
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200">
                <h4 className="font-serif font-bold text-brand-900 text-base">Pure Cow Ghee</h4>
                <p className="text-xs text-brand-800 mt-1">Every dosa is generously roasted in fragrant cow ghee for golden crispness.</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-sm">
                  <PureVegBadge size="sm" />
                  <span>100% Pure Veg</span>
                </div>
                <p className="text-xs text-emerald-700 mt-1">Zero meat, eggs or non-veg contamination. Pure vegetarian kitchen.</p>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md border border-warmbg-300 bg-warmbg-100 relative">
                <img
                  src="/images/interior/dining-hall.webp"
                  alt="Mysore Sadan Dining Ambiance"
                  width={600}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2">
                  <SampleBadge text="Sample image" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 uppercase tracking-widest">
              <Award className="w-4 h-4 text-brand-600" />
              Our Culinary Heritage
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-950 tracking-tight leading-snug">
              Authentic South Indian Flavours Right in Sadashiv Peth
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {restaurantData.story}
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {restaurantData.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-charcoal-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 font-bold text-sm group"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-zinc-300">|</span>
              <Link
                to="/location"
                className="inline-flex items-center gap-2 text-zinc-600 hover:text-charcoal-900 font-bold text-sm"
              >
                <span>Visit Us in Pune</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. POPULAR DISHES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 uppercase tracking-widest mb-1">
              <Flame className="w-4 h-4 text-brand-600" />
              Customer Favorites
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-950 tracking-tight">
              Popular Dishes
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Signature tiffins and pure-ghee roasts praised by our patrons.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-warmbg-100 hover:bg-warmbg-200 text-brand-700 font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            <span>View Full Menu ({menuItems.length} items)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDishes.map((dish) => (
            <DishCard key={dish.id} item={dish} />
          ))}
        </div>
      </section>

      {/* 5. PHOTO GALLERY PREVIEW */}
      <section className="bg-warmbg-100/60 py-16 border-y border-warmbg-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-brand-700 uppercase tracking-widest">
              Visual Tour
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-950 mt-1">
              Food & Ambiance Gallery
            </h2>
            <p className="text-sm text-zinc-500 mt-2">
              From our live dosa counter to cozy dining spaces.
            </p>

            {/* Category tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveGalleryCat(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeGalleryCat === cat
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-white text-zinc-600 hover:bg-warmbg-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredGallery.slice(0, 8).map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-warmbg-200 shadow-sm border border-warmbg-300"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  width={600}
                  height={450}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <span className="text-xs font-semibold text-turmeric-300">{photo.category}</span>
                  <h4 className="text-sm font-serif font-bold text-white">{photo.title}</h4>
                </div>
                {photo.isSample && (
                  <div className="absolute top-2 right-2">
                    <SampleBadge text="Sample" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OPENING HOURS & VISIT INFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-warmbg-300 shadow-warm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 uppercase tracking-wider">
                <Clock className="w-4 h-4 text-brand-600" />
                Timings & Visiting Details
              </div>
              <h2 className="font-serif text-3xl font-bold text-charcoal-950">
                Open Daily: 7:30 AM to 11:30 PM
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Whether you are craving early morning filter coffee and steaming idlis on your way to work, an afternoon tiffin, or a late evening family dinner, Mysore Sadan welcomes you with warm South Indian hospitality.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span><strong>Address:</strong> {restaurantData.address.full}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                  <span><strong>Contact:</strong> {restaurantData.phoneDisplay}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/location"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-800"
                >
                  <span>View interactive map & parking tips</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Daily Hours Table Card */}
            <div className="lg:col-span-6 bg-warmbg-50 rounded-2xl p-5 border border-warmbg-300">
              <h3 className="text-sm font-bold text-charcoal-900 mb-3 flex items-center justify-between">
                <span>Weekly Schedule</span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Open Today
                </span>
              </h3>
              <div className="divide-y divide-warmbg-200 text-xs">
                {restaurantData.openingHours.map((item) => (
                  <div key={item.day} className="py-2 flex items-center justify-between">
                    <span className="font-medium text-zinc-700">{item.day}</span>
                    <span className="font-bold text-brand-800">{item.open} – {item.close}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. TABLE BOOKING FORM */}
      <section id="table-booking" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-warmbg-300 shadow-warm-lg overflow-hidden">
          <div className="bg-brand-700 text-white p-6 sm:p-8 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-turmeric-300">
              Reserve Your Table
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
              Table Reservation Request
            </h2>
            <p className="text-xs sm:text-sm text-warmbg-100 mt-1 max-w-md mx-auto">
              Planning to visit with family or a group? Let us know in advance to prepare your seating.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            {bookingSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                  Table Request Received!
                </h3>
                <p className="text-sm text-zinc-600 max-w-md mx-auto">
                  Thank you, <strong>{bookingForm.name}</strong>. Your reservation inquiry for <strong>{bookingForm.guests} guests</strong> on <strong>{bookingForm.date || 'today'}</strong> has been registered. Our staff will confirm with you shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setBookingSubmitted(false);
                      setBookingForm({ name: '', phone: '', date: '', time: '12:30 PM', guests: '2', requests: '' });
                    }}
                    className="px-5 py-2 rounded-xl bg-warmbg-200 text-xs font-bold text-charcoal-800 hover:bg-warmbg-300 transition-colors"
                  >
                    Make Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="book-name" className="block text-xs font-bold text-zinc-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="book-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kulkarni"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="book-phone" className="block text-xs font-bold text-zinc-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="book-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98230 00000"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="book-date" className="block text-xs font-bold text-zinc-700 mb-1">
                      Date
                    </label>
                    <input
                      id="book-date"
                      type="date"
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="book-time" className="block text-xs font-bold text-zinc-700 mb-1">
                      Preferred Time
                    </label>
                    <select
                      id="book-time"
                      value={bookingForm.time}
                      onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm bg-white"
                    >
                      <option>08:00 AM (Breakfast)</option>
                      <option>09:30 AM (Breakfast)</option>
                      <option>11:00 AM (Brunch)</option>
                      <option>12:30 PM (Lunch)</option>
                      <option>01:30 PM (Lunch)</option>
                      <option>05:00 PM (Evening Snacks)</option>
                      <option>07:00 PM (Dinner)</option>
                      <option>08:30 PM (Dinner)</option>
                      <option>10:00 PM (Late Tiffin)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="book-guests" className="block text-xs font-bold text-zinc-700 mb-1">
                      Number of Guests
                    </label>
                    <select
                      id="book-guests"
                      value={bookingForm.guests}
                      onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm bg-white"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8+">8+ Guests (Family table)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="book-requests" className="block text-xs font-bold text-zinc-700 mb-1">
                    Special Requests (Optional)
                  </label>
                  <input
                    id="book-requests"
                    type="text"
                    placeholder="e.g. High chair for baby, quiet corner, senior citizen seating"
                    value={bookingForm.requests}
                    onChange={(e) => setBookingForm({ ...bookingForm, requests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm tracking-wide shadow-md transition-all"
                  >
                    Confirm Table Request
                  </button>
                  <p className="text-[11px] text-zinc-400 text-center mt-2">
                    For instant reservations within 30 minutes, please call {restaurantData.phoneDisplay}.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER REVIEWS (Google Maps Real Reviews + Verified Badges) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turmeric-100 text-turmeric-900 text-xs font-bold mb-2">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Google Maps Customer Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-950">
            What Our Diners Say
          </h2>
          <p className="text-sm text-zinc-600 mt-2">
            Real guest experiences from our Sadashiv Peth restaurant.
          </p>
        </div>

        {/* Rating Breakdown Bar */}
        <div className="bg-white rounded-2xl border border-warmbg-300 p-6 mb-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-4xl font-serif font-extrabold text-charcoal-950">{reviewsData.rating}</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs text-zinc-500 mt-1">Based on {reviewsData.totalReviews} Google ratings</p>
          </div>

          <div className="flex-grow max-w-xs w-full space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-6 text-zinc-500">5★</span>
              <div className="flex-grow h-2 rounded-full bg-warmbg-200 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '70%' }} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 text-zinc-500">4★</span>
              <div className="flex-grow h-2 rounded-full bg-warmbg-200 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '20%' }} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 text-zinc-500">3★</span>
              <div className="flex-grow h-2 rounded-full bg-warmbg-200 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '6%' }} />
              </div>
            </div>
          </div>

          <a
            href={restaurantData.googleMaps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-xl bg-warmbg-100 hover:bg-warmbg-200 text-charcoal-900 text-xs font-bold transition-colors flex items-center gap-1.5"
          >
            <span>Write a Review</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.reviews.map((rev) => (
            <div
              key={rev.id}
              className={`rounded-2xl p-6 flex flex-col justify-between border ${
                rev.isSample
                  ? 'bg-warmbg-50/70 border-dashed border-warmbg-300'
                  : 'bg-white border-warmbg-300 shadow-warm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-800 font-bold text-xs flex items-center justify-center">
                      {rev.author[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-charcoal-900">{rev.author}</h4>
                      <span className="text-[11px] text-zinc-400">{rev.date}</span>
                    </div>
                  </div>
                  {rev.isSample ? (
                    <SampleBadge text="Sample review" />
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>

                <div className="flex text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {rev.dishMentioned && (
                <div className="mt-4 pt-3 border-t border-warmbg-200 text-[11px] text-brand-800 font-medium">
                  Dish mentioned: <span className="font-bold">{rev.dishMentioned}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. INSTAGRAM SECTION (Step 5: Grid of 6 post tiles using locally saved images) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 uppercase tracking-widest mb-1">
              <Instagram className="w-4 h-4 text-pink-600" />
              Social Moments
            </div>
            <h2 className="font-serif text-3xl font-bold text-charcoal-950">
              Follow Us on Instagram
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              {instagramData.tagline}
            </p>
          </div>

          <a
            href={instagramData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:opacity-95 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow {instagramData.handle}</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramData.posts.map((post) => (
            <a
              key={post.id}
              href={instagramData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-square bg-warmbg-200 border border-warmbg-300 block shadow-xs"
              title={post.caption}
            >
              <img
                src={post.image}
                alt={post.alt}
                width={400}
                height={400}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-charcoal-950/60 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white text-[11px]">
                <p className="line-clamp-2 leading-tight">{post.caption}</p>
                <div className="flex items-center gap-2 mt-1.5 text-[10px] text-pink-300 font-semibold">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-widest">Got Questions?</span>
          <h2 className="font-serif text-3xl font-bold text-charcoal-950 mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-warmbg-300 bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-serif font-bold text-charcoal-900 text-sm sm:text-base focus:outline-none focus:bg-warmbg-50"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-warmbg-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
