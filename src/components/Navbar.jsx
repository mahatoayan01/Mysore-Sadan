import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Phone, Menu, X, Shield, MapPin } from 'lucide-react';
import { PureVegBadge } from './PureVegBadge';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { restaurantData } from '../data/restaurant';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount } = useCart();
  const { isAuthenticated } = useAuth();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Menu", to: "/menu" },
    { name: "Location", to: "/location" },
    { name: "Contact", to: "/contact" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-warmbg-300 shadow-xs">
      {/* Top Banner (Hours & Pure Veg Promise) */}
      <div className="bg-brand-900 text-warmbg-100 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-turmeric-300 font-medium">
              <PureVegBadge size="sm" />
              100% Pure Vegetarian South Indian Eatery
            </span>
            <span className="text-warmbg-400">•</span>
            <span className="text-warmbg-200">{restaurantData.hoursSummary}</span>
          </div>
          <div className="flex items-center gap-4 text-warmbg-300 text-xs">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-turmeric-400" />
              Sadashiv Peth, Pune
            </span>
            <span className="text-warmbg-400">•</span>
            <Link
              to={isAuthenticated ? "/owner" : "/owner-login"}
              className="hover:text-white transition-colors flex items-center gap-1 text-[11px]"
            >
              <Shield className="w-3 h-3 text-turmeric-400" />
              {isAuthenticated ? "Owner Dashboard" : "Owner Login"}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1"
        >
          <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md shadow-brand-600/20 group-hover:bg-brand-700 transition-colors">
            MS
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-bold text-charcoal-950 tracking-tight leading-none group-hover:text-brand-600 transition-colors">
                Mysore Sadan
              </span>
              <PureVegBadge size="sm" />
            </div>
            <span className="text-xs text-brand-700 font-medium tracking-wide mt-1">
              Pure Veg Restaurant • Sadashiv Peth
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-brand-700 bg-brand-50 shadow-xs'
                    : 'text-charcoal-800 hover:text-brand-600 hover:bg-warmbg-100'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to={isAuthenticated ? "/owner" : "/owner-login"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                isActive
                  ? 'text-brand-700 bg-brand-50 shadow-xs'
                  : 'text-zinc-500 hover:text-charcoal-900 hover:bg-warmbg-100'
              }`
            }
          >
            <Shield className="w-3.5 h-3.5" />
            {isAuthenticated ? "Dashboard" : "Owner"}
          </NavLink>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Quick Call Button */}
          <a
            href={`tel:${restaurantData.phone.replace(/\s+/g, '')}`}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-warmbg-300 hover:border-brand-300 hover:bg-brand-50 text-charcoal-800 hover:text-brand-700 text-xs font-bold transition-all shadow-2xs"
            title="Call Restaurant Directly"
          >
            <Phone className="w-3.5 h-3.5 text-brand-600" />
            <span>{restaurantData.phoneDisplay}</span>
          </a>

          {/* Cart Icon */}
          <Link
            to="/cart"
            onClick={closeMenu}
            className="relative p-2.5 rounded-xl bg-warmbg-100 hover:bg-warmbg-200 text-charcoal-900 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label={`View cart with ${totalCount} items`}
          >
            <ShoppingBag className="w-5 h-5 text-charcoal-900" />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-600 text-white text-[11px] font-bold flex items-center justify-center animate-scale shadow-sm">
                {totalCount}
              </span>
            )}
          </Link>

          {/* Order Now CTA (Desktop) */}
          <Link
            to="/menu"
            className="hidden lg:inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-600/20 hover:-translate-y-0.5"
          >
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-charcoal-800 hover:bg-warmbg-100 md:hidden focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-warmbg-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                    isActive
                      ? 'text-brand-700 bg-brand-50'
                      : 'text-charcoal-800 hover:bg-warmbg-100'
                  }`
                }
              >
                <span>{link.name}</span>
              </NavLink>
            ))}
            <NavLink
              to={isAuthenticated ? "/owner" : "/owner-login"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  isActive
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-zinc-600 hover:bg-warmbg-100'
                }`
              }
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-600" />
                {isAuthenticated ? "Owner Dashboard" : "Owner Login"}
              </span>
            </NavLink>
          </div>

          <div className="pt-3 border-t border-warmbg-200 flex flex-col gap-2">
            <a
              href={`tel:${restaurantData.phone.replace(/\s+/g, '')}`}
              className="w-full py-3 px-4 rounded-xl border border-warmbg-300 bg-warmbg-50 text-charcoal-900 font-bold text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              Call {restaurantData.phoneDisplay}
            </a>
            <Link
              to="/menu"
              onClick={closeMenu}
              className="w-full py-3 px-4 rounded-xl bg-brand-600 text-white font-bold text-sm flex items-center justify-center shadow-md text-center"
            >
              View Full Menu & Order
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
