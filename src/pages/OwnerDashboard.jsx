import React, { useState, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import {
  Shield,
  LogOut,
  ShoppingBag,
  TrendingUp,
  Clock,
  CheckCircle2,
  Search,
  Filter,
  CreditCard,
  RotateCcw,
  AlertTriangle,
  User,
  Phone,
  Truck,
  Store
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';

export const OwnerDashboard = () => {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const { orders, payments, updateOrderStatus, resetToSampleData } = useOrders();

  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'payments'
  const [orderSearch, setOrderSearch] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState('All');
  const [paymentSearch, setPaymentSearch] = useState('');

  // Redirect if not authenticated (Step 4 Requirement)
  if (!isAuthenticated) {
    return <Navigate to="/owner-login" replace />;
  }

  // Summary Metrics calculations
  const totalOrdersCount = orders.length;
  const pendingOrdersCount = orders.filter(o => o.status === 'Pending').length;
  const preparingOrdersCount = orders.filter(o => o.status === 'Preparing').length;
  const liveDemoOrdersCount = orders.filter(o => !o.isSample).length;
  const totalRevenue = orders
    .filter(o => o.status !== 'Cancelled')
    .reduce((sum, o) => sum + Number(o.total), 0);

  // Filtered Orders
  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      if (orderStatusFilter !== 'All' && order.status !== orderStatusFilter) {
        return false;
      }
      if (orderSearch.trim()) {
        const q = orderSearch.toLowerCase();
        const matchId = order.id.toLowerCase().includes(q);
        const matchCust = order.customer.name.toLowerCase().includes(q);
        const matchPhone = order.customer.phone.toLowerCase().includes(q);
        if (!matchId && !matchCust && !matchPhone) return false;
      }
      return true;
    });
  }, [orders, orderStatusFilter, orderSearch]);

  // Filtered Payments
  const filteredPayments = useMemo(() => {
    return payments.filter(pay => {
      if (paymentSearch.trim()) {
        const q = paymentSearch.toLowerCase();
        const matchPayId = pay.id.toLowerCase().includes(q);
        const matchOrdId = pay.orderId.toLowerCase().includes(q);
        const matchMethod = pay.method.toLowerCase().includes(q);
        if (!matchPayId && !matchOrdId && !matchMethod) return false;
      }
      return true;
    });
  }, [payments, paymentSearch]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Preparing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Ready':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Delivered':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-zinc-100 text-zinc-800 border-zinc-200';
    }
  };

  return (
    <div className="py-8 sm:py-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header & Session Bar */}
        <div className="bg-white rounded-3xl border border-warmbg-300 p-6 shadow-warm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-charcoal-950 text-turmeric-400 flex items-center justify-center font-bold shadow-md">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl font-bold text-charcoal-950">
                  Owner Management Dashboard
                </h1>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  Demo Environment
                </span>
              </div>
              <p className="text-xs text-zinc-500">
                Logged in as <strong>{currentUser?.username || 'Owner'}</strong> ({currentUser?.role || 'Administrator'})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <button
              type="button"
              onClick={resetToSampleData}
              className="px-3.5 py-2 rounded-xl border border-warmbg-300 text-xs font-bold text-zinc-700 hover:bg-warmbg-100 transition-colors flex items-center gap-1.5"
              title="Reset orders to 16 initial sample orders"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Sample Data</span>
            </button>

            <button
              type="button"
              onClick={logout}
              className="px-4 py-2 rounded-xl bg-charcoal-900 hover:bg-black text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm ml-auto md:ml-0"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* SUMMARY CARDS (Step 4 Requirement: today's orders, revenue, pending orders) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Total Orders Card */}
          <div className="bg-white rounded-2xl border border-warmbg-300 p-5 shadow-warm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block">Total Orders</span>
              <span className="text-2xl font-serif font-bold text-charcoal-950">{totalOrdersCount}</span>
              <span className="text-[11px] text-zinc-400 block mt-0.5">
                {liveDemoOrdersCount} live demo + {totalOrdersCount - liveDemoOrdersCount} sample
              </span>
            </div>
          </div>

          {/* Revenue Card */}
          <div className="bg-white rounded-2xl border border-warmbg-300 p-5 shadow-warm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block">Total Revenue</span>
              <span className="text-2xl font-serif font-bold text-charcoal-950">₹{totalRevenue.toFixed(0)}</span>
              <span className="text-[11px] text-emerald-700 font-medium block mt-0.5">Calculated from demo orders</span>
            </div>
          </div>

          {/* Pending Orders Card */}
          <div className="bg-white rounded-2xl border border-warmbg-300 p-5 shadow-warm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block">Pending Kitchen</span>
              <span className="text-2xl font-serif font-bold text-amber-700">{pendingOrdersCount}</span>
              <span className="text-[11px] text-zinc-400 block mt-0.5">Requires immediate attention</span>
            </div>
          </div>

          {/* Preparing Orders Card */}
          <div className="bg-white rounded-2xl border border-warmbg-300 p-5 shadow-warm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block">On Tawa / Preparing</span>
              <span className="text-2xl font-serif font-bold text-purple-700">{preparingOrdersCount}</span>
              <span className="text-[11px] text-zinc-400 block mt-0.5">Cooking in progress</span>
            </div>
          </div>

        </div>

        {/* View Switcher Tabs (Orders vs Payments) */}
        <div className="flex border-b border-warmbg-300 gap-4">
          <button
            type="button"
            onClick={() => setActiveTab('orders')}
            className={`pb-3 px-2 font-serif font-bold text-base transition-all border-b-2 ${
              activeTab === 'orders'
                ? 'border-brand-600 text-brand-700'
                : 'border-transparent text-zinc-500 hover:text-charcoal-900'
            }`}
          >
            Online Orders Table ({orders.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('payments')}
            className={`pb-3 px-2 font-serif font-bold text-base transition-all border-b-2 ${
              activeTab === 'payments'
                ? 'border-brand-600 text-brand-700'
                : 'border-transparent text-zinc-500 hover:text-charcoal-900'
            }`}
          >
            Payment History Table ({payments.length})
          </button>
        </div>

        {/* TAB 1: ONLINE ORDERS TABLE */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl border border-warmbg-300 shadow-warm overflow-hidden space-y-4 p-6">
            
            {/* Search and Filter Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:max-w-xs">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search order ID, customer name or phone..."
                  value={orderSearch}
                  onChange={(e) => setOrderSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-warmbg-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                <span className="text-xs text-zinc-500 font-bold shrink-0">Status:</span>
                {['All', 'Pending', 'Preparing', 'Ready', 'Delivered', 'Cancelled'].map(st => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setOrderStatusFilter(st)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all shrink-0 ${
                      orderStatusFilter === st
                        ? 'bg-charcoal-900 text-white shadow-xs'
                        : 'bg-warmbg-100 text-zinc-600 hover:bg-warmbg-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto border border-warmbg-200 rounded-2xl">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-warmbg-100 text-zinc-600 uppercase font-semibold text-[10px] tracking-wider border-b border-warmbg-200">
                    <th className="py-3 px-4">Order ID & Type</th>
                    <th className="py-3 px-4">Customer Details</th>
                    <th className="py-3 px-4">Items Ordered</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4">Status & Action</th>
                    <th className="py-3 px-4">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warmbg-200">
                  {filteredOrders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-warmbg-50/80 transition-colors">
                      {/* Order ID */}
                      <td className="py-3 px-4 align-top">
                        <div className="font-mono font-bold text-charcoal-950">{ord.id}</div>
                        <div className="flex items-center gap-1.5 mt-1">
                          {ord.customer.type === 'Pickup' ? (
                            <span className="inline-flex items-center gap-1 text-[10px] text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded font-semibold">
                              <Store className="w-3 h-3" /> Pickup
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-semibold">
                              <Truck className="w-3 h-3" /> Delivery
                            </span>
                          )}
                          {ord.isSample && (
                            <span className="text-[10px] text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded">
                              Sample
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Customer */}
                      <td className="py-3 px-4 align-top">
                        <div className="font-bold text-charcoal-900">{ord.customer.name}</div>
                        <div className="text-zinc-500 text-[11px] mt-0.5">{ord.customer.phone}</div>
                        <div className="text-zinc-400 text-[10px] max-w-xs truncate mt-0.5" title={ord.customer.address}>
                          {ord.customer.address}
                        </div>
                      </td>

                      {/* Items */}
                      <td className="py-3 px-4 align-top">
                        <div className="space-y-0.5 max-w-xs">
                          {ord.items.map((it, idx) => (
                            <div key={idx} className="text-charcoal-800 flex justify-between gap-2">
                              <span className="truncate">{it.name} × {it.quantity}</span>
                              <span className="font-medium text-zinc-500 shrink-0">₹{it.price * it.quantity}</span>
                            </div>
                          ))}
                        </div>
                      </td>

                      {/* Total */}
                      <td className="py-3 px-4 align-top">
                        <span className="font-bold text-sm text-brand-900 block">₹{ord.total}</span>
                        <span className="text-[10px] text-zinc-400 block">{ord.paymentMethod}</span>
                      </td>

                      {/* Status Dropdown */}
                      <td className="py-3 px-4 align-top">
                        <div className="space-y-1">
                          <span className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-bold border ${getStatusBadge(ord.status)}`}>
                            {ord.status}
                          </span>
                          <select
                            value={ord.status}
                            onChange={(e) => updateOrderStatus(ord.id, e.target.value)}
                            className="block w-full text-[11px] py-1 px-1.5 rounded-md border border-warmbg-300 bg-white font-medium text-charcoal-800 focus:outline-none focus:ring-1 focus:ring-brand-500"
                            aria-label={`Update status for ${ord.id}`}
                          >
                            <option value="Pending">Mark Pending</option>
                            <option value="Preparing">Mark Preparing</option>
                            <option value="Ready">Mark Ready</option>
                            <option value="Delivered">Mark Delivered</option>
                            <option value="Cancelled">Mark Cancelled</option>
                          </select>
                        </div>
                      </td>

                      {/* Time */}
                      <td className="py-3 px-4 align-top text-zinc-500 text-[11px] whitespace-nowrap">
                        {ord.formattedTime}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-[11px] text-zinc-400 pt-2 flex justify-between">
              <span>Showing {filteredOrders.length} of {orders.length} orders</span>
              <span>All changes automatically synchronized to localStorage</span>
            </div>

          </div>
        )}

        {/* TAB 2: PAYMENT HISTORY TABLE */}
        {activeTab === 'payments' && (
          <div className="bg-white rounded-3xl border border-warmbg-300 shadow-warm overflow-hidden space-y-4 p-6">
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:max-w-xs">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search payment ID, order ID, or method..."
                  value={paymentSearch}
                  onChange={(e) => setPaymentSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-warmbg-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
              <span className="text-xs text-zinc-500 font-medium">
                {filteredPayments.length} transactions recorded
              </span>
            </div>

            <div className="overflow-x-auto border border-warmbg-200 rounded-2xl">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-warmbg-100 text-zinc-600 uppercase font-semibold text-[10px] tracking-wider border-b border-warmbg-200">
                    <th className="py-3 px-4">Payment ID</th>
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">Method</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Date & Time</th>
                    <th className="py-3 px-4">Transaction Ref</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warmbg-200">
                  {filteredPayments.map((pay) => (
                    <tr key={pay.id} className="hover:bg-warmbg-50/80 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-charcoal-950">
                        {pay.id}
                        {pay.isSample && (
                          <span className="ml-1 text-[9px] text-zinc-400 bg-zinc-100 px-1 py-0.5 rounded">
                            sample
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-mono font-semibold text-brand-800">
                        {pay.orderId}
                      </td>
                      <td className="py-3 px-4 font-medium text-charcoal-900">
                        {pay.method}
                      </td>
                      <td className="py-3 px-4 font-bold text-sm text-charcoal-900">
                        ₹{pay.amount}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                          pay.status === 'Success' || pay.status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                            : 'bg-amber-100 text-amber-800 border-amber-200'
                        }`}>
                          {pay.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-zinc-500 whitespace-nowrap">
                        {pay.date}
                      </td>
                      <td className="py-3 px-4 font-mono text-[10px] text-zinc-400">
                        {pay.transactionRef}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
