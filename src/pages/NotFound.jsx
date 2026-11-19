import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Home, ArrowLeft } from 'lucide-react';
import { PureVegBadge } from '../components/PureVegBadge';

export const NotFound = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-md mx-auto text-center space-y-6 pb-36">
      <div className="w-20 h-20 rounded-3xl bg-brand-50 text-brand-700 flex items-center justify-center mx-auto border border-brand-200 shadow-sm">
        <Utensils className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-warmbg-100 text-zinc-600 text-xs font-bold">
          <PureVegBadge size="sm" />
          <span>Page Not Found • Error 404</span>
        </div>
        <h1 className="font-serif text-3xl font-extrabold text-charcoal-950">
          Looks Like This Dish Isn't on the Table
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          The page you requested does not exist or has been moved. You can return to our homepage or browse our pure-veg South Indian menu.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <Link
          to="/"
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/menu"
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-warmbg-100 hover:bg-warmbg-200 text-charcoal-900 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-warmbg-300"
        >
          <span>View Menu</span>
        </Link>
      </div>
    </div>
  );
};
