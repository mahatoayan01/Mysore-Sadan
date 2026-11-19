import React from 'react';
import { Plus, Minus, Clock, Sparkles } from 'lucide-react';
import { PureVegBadge } from './PureVegBadge';
import { SampleBadge } from './SampleBadge';
import { useCart } from '../context/CartContext';

export const DishCard = ({ item }) => {
  const { items, addToCart, updateQuantity } = useCart();
  const cartItem = items.find(i => i.item.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-warmbg-300/70 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col h-full">
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-warmbg-100">
        <img
          src={item.image}
          alt={item.alt || item.name}
          width={600}
          height={450}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
          <span className="bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-emerald-100">
            <PureVegBadge size="sm" showText={true} />
          </span>
          {item.isPopular && (
            <span className="inline-flex items-center gap-1 bg-turmeric-500 text-charcoal-950 font-semibold text-[11px] px-2.5 py-1 rounded-md shadow-sm">
              <Sparkles className="w-3 h-3" />
              Popular
            </span>
          )}
        </div>

        {item.isSample && (
          <div className="absolute bottom-3 right-3">
            <SampleBadge text="Sample image" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-serif font-bold text-charcoal-900 leading-snug group-hover:text-brand-600 transition-colors">
            {item.name}
          </h3>
          <div className="text-right shrink-0">
            <span className="text-lg font-bold text-brand-700">₹{item.price}</span>
            {item.priceNote && (
              <span className="block text-[10px] text-zinc-400 font-normal uppercase tracking-wider">
                {item.priceNote}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-zinc-600 line-clamp-2 leading-relaxed mb-4 flex-grow">
          {item.description}
        </p>

        {/* Footer info & Actions */}
        <div className="pt-3 border-t border-warmbg-200/80 flex items-center justify-between gap-3 mt-auto">
          {item.prepTime && (
            <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              {item.prepTime}
            </span>
          )}

          <div className="ml-auto">
            {quantity > 0 ? (
              <div className="inline-flex items-center rounded-xl bg-brand-50 border border-brand-200 p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, quantity - 1)}
                  className="w-7 h-7 rounded-lg bg-white text-brand-700 hover:bg-brand-600 hover:text-white transition-colors flex items-center justify-center font-bold text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-sm font-bold text-brand-900" aria-live="polite">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, quantity + 1)}
                  className="w-7 h-7 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition-colors flex items-center justify-center font-bold text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => addToCart(item, 1)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label={`Add ${item.name} to cart`}
              >
                <Plus className="w-3.5 h-3.5" />
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
