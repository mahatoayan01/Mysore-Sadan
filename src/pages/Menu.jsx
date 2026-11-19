import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles, Flame, ShoppingBag, ArrowRight, X } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menu';
import { DishCard } from '../components/DishCard';
import { PureVegBadge } from '../components/PureVegBadge';
import { useCart } from '../context/CartContext';

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyPopular, setOnlyPopular] = useState(false);
  const [onlySpicy, setOnlySpicy] = useState(false);

  const { totalCount, subtotal } = useCart();

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Popular filter
      if (onlyPopular && !item.isPopular) {
        return false;
      }
      // Spicy filter
      if (onlySpicy && !item.isSpicy) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery, onlyPopular, onlySpicy]);

  return (
    <div className="py-8 sm:py-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-2xs">
            <PureVegBadge size="sm" showText={true} />
            <span>• FRESHLY PREPARED IN PURE GHEE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal-950 tracking-tight">
            Our Pure Veg Menu
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Authentic Mysore-style tiffins, paper-thin ghee roasts, fluffy steamed idlis, and traditional sweets.
          </p>
        </div>

        {/* Search & Quick Filter Chips */}
        <div className="bg-white rounded-2xl border border-warmbg-300 p-4 shadow-warm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Dosa, Idli, Upma, Filter Coffee)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-warmbg-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm placeholder:text-zinc-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-charcoal-800"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <button
              type="button"
              onClick={() => setOnlyPopular(!onlyPopular)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 ${
                onlyPopular
                  ? 'bg-turmeric-500 text-charcoal-950 shadow-sm'
                  : 'bg-warmbg-100 text-zinc-600 hover:bg-warmbg-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Popular Only
            </button>

            <button
              type="button"
              onClick={() => setOnlySpicy(!onlySpicy)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 ${
                onlySpicy
                  ? 'bg-red-500 text-white shadow-sm'
                  : 'bg-warmbg-100 text-zinc-600 hover:bg-warmbg-200'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              Spicy Specialties
            </button>

            {(onlyPopular || onlySpicy || searchQuery || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setOnlyPopular(false);
                  setOnlySpicy(false);
                }}
                className="text-xs text-brand-700 hover:underline px-2 py-1 shrink-0 font-semibold"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Sticky Category Tabs */}
        <div className="sticky top-20 z-30 bg-warmbg-50/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-warmbg-200">
          <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
            {menuCategories.map((cat) => {
              const count = cat.id === 'all'
                ? menuItems.length
                : menuItems.filter(i => i.category === cat.id).length;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-white text-charcoal-700 hover:bg-warmbg-200 border border-warmbg-300'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${
                    isActive ? 'bg-brand-800 text-brand-100' : 'bg-warmbg-100 text-zinc-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div>
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((dish) => (
                <DishCard key={dish.id} item={dish} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-warmbg-300 p-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-warmbg-100 text-zinc-400 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal-900">
                No matching dishes found
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 max-w-sm mx-auto">
                Try clearing your search query or switching categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setOnlyPopular(false);
                  setOnlySpicy(false);
                }}
                className="px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold"
              >
                Show All Dishes
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Floating Bottom Cart Pill (Mobile & Desktop) */}
      {totalCount > 0 && (
        <aside aria-label="Cart Notification" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-md animate-slideUp">
          <div className="bg-charcoal-950 text-white rounded-2xl p-3.5 shadow-2xl border border-charcoal-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">
                  {totalCount} {totalCount === 1 ? 'item' : 'items'} added
                </div>
                <div className="text-xs text-turmeric-300 font-semibold">
                  Subtotal: ₹{subtotal}
                </div>
              </div>
            </div>

            <Link
              to="/cart"
              className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
            >
              <span>View Cart & Checkout</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </aside>
      )}
    </div>
  );
};
