import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  Truck,
  Store,
  CreditCard,
  QrCode,
  Banknote,
  Shield,
  Utensils
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { PureVegBadge } from '../components/PureVegBadge';

export const Cart = () => {
  const {
    items,
    orderType,
    setOrderType,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    deliveryFee,
    taxes,
    grandTotal
  } = useCart();

  const { addOrder } = useOrders();

  // Customer details form state
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    instructions: ''
  });

  // Demo payment choice
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [upiApp, setUpiApp] = useState('Google Pay');

  // Checkout submission state
  const [submittedOrder, setSubmittedOrder] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    if (!customer.name.trim() || !customer.phone.trim()) {
      alert('Please provide your name and contact phone number.');
      return;
    }
    if (orderType === 'delivery' && !customer.address.trim()) {
      alert('Please provide your delivery address in Pune.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const result = addOrder({
        customer,
        orderType,
        items,
        subtotal,
        deliveryFee,
        taxes,
        total: grandTotal,
        paymentMethod: paymentMethod === 'UPI' ? `UPI (${upiApp})` : paymentMethod
      });

      setSubmittedOrder({
        orderId: result.orderId,
        paymentId: result.paymentId,
        customer,
        orderType,
        items: [...items],
        total: grandTotal,
        method: paymentMethod === 'UPI' ? `UPI (${upiApp})` : paymentMethod,
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      clearCart();
      setIsSubmitting(false);
    }, 400);
  };

  // SUCCESS SCREEN
  if (submittedOrder) {
    return (
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto pb-24">
        <div className="bg-white rounded-3xl border border-warmbg-300 shadow-warm-lg p-6 sm:p-10 text-center space-y-6 animate-fadeIn">
          
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              Demo Order Confirmed!
            </span>
            <h1 className="font-serif text-3xl font-bold text-charcoal-950">
              Order #{submittedOrder.orderId}
            </h1>
            <p className="text-xs text-zinc-500">
              Placed at {submittedOrder.date} • Saved to LocalStorage
            </p>
          </div>

          {/* Demo Notice Banner */}
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-3.5 text-xs text-amber-900 flex items-center justify-center gap-2 font-medium">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Demo only - no real payment was processed or charged.</span>
          </div>

          {/* Order Details Receipt */}
          <div className="bg-warmbg-50 rounded-2xl p-5 text-left border border-warmbg-200 text-xs space-y-3">
            <div className="flex justify-between pb-2 border-b border-warmbg-200">
              <span className="text-zinc-500">Customer:</span>
              <span className="font-bold text-charcoal-900">{submittedOrder.customer.name} ({submittedOrder.customer.phone})</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-warmbg-200">
              <span className="text-zinc-500">Service:</span>
              <span className="font-bold text-charcoal-900 uppercase">{submittedOrder.orderType}</span>
            </div>
            {submittedOrder.orderType === 'delivery' && (
              <div className="flex justify-between pb-2 border-b border-warmbg-200">
                <span className="text-zinc-500">Delivery Address:</span>
                <span className="font-medium text-charcoal-800 text-right max-w-xs">{submittedOrder.customer.address}</span>
              </div>
            )}
            <div className="flex justify-between pb-2 border-b border-warmbg-200">
              <span className="text-zinc-500">Payment Method:</span>
              <span className="font-bold text-charcoal-900">{submittedOrder.method}</span>
            </div>
            <div className="pt-1">
              <span className="text-zinc-500 font-bold block mb-2">Ordered Items:</span>
              <div className="space-y-1.5">
                {submittedOrder.items.map((i, idx) => (
                  <div key={idx} className="flex justify-between text-charcoal-800">
                    <span>{i.item.name} × {i.quantity}</span>
                    <span className="font-bold">₹{i.item.price * i.quantity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-2 border-t border-warmbg-300 flex justify-between text-sm font-bold text-brand-900">
              <span>Total Amount:</span>
              <span>₹{submittedOrder.total}</span>
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/owner"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-charcoal-900 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Shield className="w-4 h-4 text-turmeric-400" />
              <span>View in Owner Dashboard</span>
            </Link>
            <Link
              to="/menu"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Utensils className="w-4 h-4" />
              <span>Back to Menu</span>
            </Link>
          </div>

        </div>
      </div>
    );
  }

  // EMPTY CART SCREEN
  if (items.length === 0) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-lg mx-auto text-center space-y-6 pb-32">
        <div className="w-20 h-20 rounded-full bg-warmbg-100 text-zinc-400 flex items-center justify-center mx-auto border border-warmbg-300">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <div className="space-y-1">
          <h1 className="font-serif text-3xl font-bold text-charcoal-950">Your Cart is Empty</h1>
          <p className="text-sm text-zinc-500">
            You haven't added any authentic South Indian dishes to your order yet.
          </p>
        </div>
        <div className="pt-2">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-600/25 transition-all"
          >
            <span>Explore Menu & Order</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // ACTIVE CART / CHECKOUT FORM
  return (
    <div className="py-8 sm:py-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title */}
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-950 tracking-tight">
            Review Cart & Checkout
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Complete your order for fresh pure vegetarian South Indian delicacies.
          </p>
        </div>

        {/* DEMO BANNER (Mandatory Step 4 Requirement) */}
        <div className="bg-amber-500/10 border-2 border-amber-500/50 rounded-2xl p-4 flex items-center gap-3 text-amber-900 text-sm shadow-xs">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
          <div>
            <strong className="block font-bold">Demo only - no real payment is processed</strong>
            <span className="text-xs text-amber-800">
              This is a demonstration ordering system for Mysore Sadan Pure Veg Restaurant. Orders placed here are safely saved to demo session state and visible in the Owner Portal.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Cart Items Review */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white rounded-3xl border border-warmbg-300 p-6 shadow-warm">
              <div className="flex items-center justify-between pb-4 border-b border-warmbg-200 mb-4">
                <h2 className="font-serif text-xl font-bold text-charcoal-950">
                  Cart Items ({items.length})
                </h2>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-red-600 hover:underline font-semibold"
                >
                  Clear Cart
                </button>
              </div>

              {/* Items List */}
              <div className="divide-y divide-warmbg-200">
                {items.map(({ item, quantity }) => (
                  <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        loading="lazy"
                        className="w-16 h-16 rounded-xl object-cover shrink-0 border border-warmbg-200"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <PureVegBadge size="sm" />
                          <h3 className="font-serif font-bold text-sm text-charcoal-900 truncate">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-xs text-zinc-500 mt-0.5 font-medium">
                          ₹{item.price} each
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {/* Quantity Modifier */}
                      <div className="inline-flex items-center rounded-xl bg-warmbg-100 p-1 border border-warmbg-300">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, quantity - 1)}
                          className="w-7 h-7 rounded-lg bg-white hover:bg-warmbg-200 text-charcoal-900 flex items-center justify-center font-bold text-xs"
                          aria-label={`Decrease ${item.name}`}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-charcoal-900">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, quantity + 1)}
                          className="w-7 h-7 rounded-lg bg-white hover:bg-warmbg-200 text-charcoal-900 flex items-center justify-center font-bold text-xs"
                          aria-label={`Increase ${item.name}`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-bold text-sm text-brand-900 w-16 text-right">
                        ₹{item.price * quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-zinc-400 hover:text-red-600 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-warmbg-200 flex justify-between items-center text-xs text-zinc-500">
                <Link to="/menu" className="text-brand-700 hover:underline font-bold flex items-center gap-1">
                  <span>+ Add more dishes from menu</span>
                </Link>
                <span>Items freshly prepared to order</span>
              </div>
            </div>

          </div>

          {/* Right Column: Customer Details, Order Mode & Demo Payment */}
          <div className="lg:col-span-5 space-y-6">
            
            <form onSubmit={handleCheckout} className="space-y-6">
              
              {/* Delivery vs Pickup Choice */}
              <div className="bg-white rounded-3xl border border-warmbg-300 p-6 shadow-warm space-y-4">
                <h3 className="font-serif font-bold text-base text-charcoal-950">
                  Select Order Type
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                      orderType === 'delivery'
                        ? 'border-brand-600 bg-brand-50/70 text-brand-900 ring-2 ring-brand-500/20'
                        : 'border-warmbg-300 hover:bg-warmbg-50 text-charcoal-800'
                    }`}
                  >
                    <Truck className="w-5 h-5 text-brand-600 shrink-0" />
                    <div>
                      <span className="text-xs font-bold block">Delivery</span>
                      <span className="text-[10px] text-zinc-500">Sadashiv Peth & Pune</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                      orderType === 'pickup'
                        ? 'border-brand-600 bg-brand-50/70 text-brand-900 ring-2 ring-brand-500/20'
                        : 'border-warmbg-300 hover:bg-warmbg-50 text-charcoal-800'
                    }`}
                  >
                    <Store className="w-5 h-5 text-brand-600 shrink-0" />
                    <div>
                      <span className="text-xs font-bold block">Takeaway / Pickup</span>
                      <span className="text-[10px] text-zinc-500">Pick up at counter</span>
                    </div>
                  </button>
                </div>

                {/* Customer Details */}
                <div className="space-y-3 pt-2">
                  <div>
                    <label htmlFor="cust-name" className="block text-xs font-bold text-zinc-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="cust-name"
                      type="text"
                      required
                      placeholder="e.g. Shruti Dandekar"
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="cust-phone" className="block text-xs font-bold text-zinc-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      id="cust-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98220 12345"
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div>
                      <label htmlFor="cust-addr" className="block text-xs font-bold text-zinc-700 mb-1">
                        Delivery Address in Pune *
                      </label>
                      <textarea
                        id="cust-addr"
                        required
                        rows={2}
                        placeholder="House / Flat No, Street, Landmark in Sadashiv Peth or nearby"
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="cust-notes" className="block text-xs font-bold text-zinc-700 mb-1">
                      Preparation Note (Optional)
                    </label>
                    <input
                      id="cust-notes"
                      type="text"
                      placeholder="e.g. Extra coconut chutney, less spicy sambar"
                      value={customer.instructions}
                      onChange={(e) => setCustomer({ ...customer, instructions: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-warmbg-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>
              </div>

              {/* DEMO Payment Step */}
              <div className="bg-white rounded-3xl border border-warmbg-300 p-6 shadow-warm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-base text-charcoal-950">
                    Payment Method (Demo Mode)
                  </h3>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Simulated Payment
                  </span>
                </div>

                <div className="space-y-2.5">
                  {/* UPI Option */}
                  <label className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'UPI' ? 'border-brand-600 bg-brand-50/50 ring-2 ring-brand-500/10' : 'border-warmbg-300'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="UPI"
                        checked={paymentMethod === 'UPI'}
                        onChange={() => setPaymentMethod('UPI')}
                        className="text-brand-600 focus:ring-brand-500"
                      />
                      <div className="flex items-center gap-2">
                        <QrCode className="w-4 h-4 text-brand-600" />
                        <span className="text-xs font-bold text-charcoal-900">UPI Instant Demo (GPay, PhonePe, Paytm)</span>
                      </div>
                    </div>
                  </label>

                  {/* Card Option */}
                  <label className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'Card' ? 'border-brand-600 bg-brand-50/50 ring-2 ring-brand-500/10' : 'border-warmbg-300'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="Card"
                        checked={paymentMethod === 'Card'}
                        onChange={() => setPaymentMethod('Card')}
                        className="text-brand-600 focus:ring-brand-500"
                      />
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-brand-600" />
                        <span className="text-xs font-bold text-charcoal-900">Credit / Debit Card (Simulated)</span>
                      </div>
                    </div>
                  </label>

                  {/* Cash Option */}
                  <label className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'Cash on Delivery' ? 'border-brand-600 bg-brand-50/50 ring-2 ring-brand-500/10' : 'border-warmbg-300'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="Cash on Delivery"
                        checked={paymentMethod === 'Cash on Delivery'}
                        onChange={() => setPaymentMethod('Cash on Delivery')}
                        className="text-brand-600 focus:ring-brand-500"
                      />
                      <div className="flex items-center gap-2">
                        <Banknote className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-bold text-charcoal-900">Cash on Delivery / Pay at Counter</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Order Summary & Pay Button */}
              <div className="bg-warmbg-50 rounded-3xl border border-warmbg-300 p-6 space-y-4">
                <h3 className="font-serif font-bold text-base text-charcoal-950">
                  Bill Summary
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-zinc-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-charcoal-900">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-zinc-600">
                    <span>Delivery Fee {subtotal >= 400 && orderType === 'delivery' && '(Free over ₹400)'}</span>
                    <span className="font-semibold text-charcoal-900">
                      {orderType === 'pickup' ? 'Free (Pickup)' : (deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`)}
                    </span>
                  </div>
                  <div className="flex justify-between text-zinc-600">
                    <span>Taxes & GST (5%)</span>
                    <span className="font-semibold text-charcoal-900">₹{taxes}</span>
                  </div>
                  <div className="pt-3 border-t border-warmbg-200 flex justify-between text-base font-bold text-brand-900">
                    <span>Grand Total</span>
                    <span>₹{grandTotal}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm tracking-wide shadow-md shadow-brand-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Demo Order...</span>
                  ) : (
                    <>
                      <span>Place Demo Order (₹{grandTotal})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-zinc-400 text-center">
                  Instant demo confirmation saved to local storage.
                </p>
              </div>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
};
