import React, { createContext, useContext, useState, useEffect } from 'react';
import { sampleOrders, samplePayments } from '../data/orders';

const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('mysore_all_orders');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse orders from localStorage', e);
    }
    return sampleOrders;
  });

  const [payments, setPayments] = useState(() => {
    try {
      const saved = localStorage.getItem('mysore_all_payments');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse payments from localStorage', e);
    }
    return samplePayments;
  });

  useEffect(() => {
    try {
      localStorage.setItem('mysore_all_orders', JSON.stringify(orders));
    } catch (e) {
      console.warn('Failed to save orders to localStorage', e);
    }
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem('mysore_all_payments', JSON.stringify(payments));
    } catch (e) {
      console.warn('Failed to save payments to localStorage', e);
    }
  }, [payments]);

  const addOrder = (orderData) => {
    const timestamp = new Date();
    const orderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    const paymentId = `PAY-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrder = {
      id: orderId,
      isSample: false,
      badge: "Live Demo Order",
      customer: {
        name: orderData.customer.name,
        phone: orderData.customer.phone,
        address: orderData.orderType === 'pickup' ? 'Pickup at Restaurant Counter' : orderData.customer.address,
        type: orderData.orderType === 'pickup' ? 'Pickup' : 'Delivery'
      },
      items: orderData.items.map(i => ({
        name: i.item.name,
        quantity: i.quantity,
        price: i.item.price
      })),
      subtotal: orderData.subtotal,
      deliveryFee: orderData.deliveryFee,
      taxes: orderData.taxes,
      total: orderData.total,
      status: "Pending",
      paymentMethod: orderData.paymentMethod,
      paymentStatus: orderData.paymentMethod === 'Cash on Delivery' ? 'Pending' : 'Completed',
      createdAt: timestamp.toISOString(),
      formattedTime: "Just now (" + timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ")"
    };

    const newPayment = {
      id: paymentId,
      orderId: orderId,
      isSample: false,
      badge: "Live Demo Payment",
      method: orderData.paymentMethod,
      amount: orderData.total,
      status: orderData.paymentMethod === 'Cash on Delivery' ? 'Pending' : 'Success',
      date: timestamp.toLocaleDateString() + ' ' + timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      transactionRef: `DEMO/${paymentId}/${Date.now().toString().slice(-6)}`
    };

    setOrders(prev => [newOrder, ...prev]);
    setPayments(prev => [newPayment, ...prev]);

    return { orderId, paymentId };
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId
          ? {
              ...order,
              status: newStatus,
              paymentStatus: newStatus === 'Delivered' && order.paymentMethod === 'Cash on Delivery'
                ? 'Completed'
                : order.paymentStatus
            }
          : order
      )
    );
  };

  const resetToSampleData = () => {
    setOrders(sampleOrders);
    setPayments(samplePayments);
    try {
      localStorage.setItem('mysore_all_orders', JSON.stringify(sampleOrders));
      localStorage.setItem('mysore_all_payments', JSON.stringify(samplePayments));
    } catch (e) {
      console.warn('Failed to reset orders in localStorage', e);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        payments,
        addOrder,
        updateOrderStatus,
        resetToSampleData
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};
