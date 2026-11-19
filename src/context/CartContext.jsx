import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('mysore_cart_items');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Failed to parse cart items from localStorage', e);
      return [];
    }
  });

  const [orderType, setOrderType] = useState(() => {
    try {
      return localStorage.getItem('mysore_order_type') || 'delivery';
    } catch {
      return 'delivery';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mysore_cart_items', JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem('mysore_order_type', orderType);
    } catch (e) {
      console.warn('Failed to save order type to localStorage', e);
    }
  }, [orderType]);

  const addToCart = (item, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.item.id === item.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { item, quantity }];
    });
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setItems(prev =>
      prev.map(i => (i.item.id === itemId ? { ...i, quantity } : i))
    );
  };

  const removeFromCart = (itemId) => {
    setItems(prev => prev.filter(i => i.item.id !== itemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.item.price * i.quantity, 0);
  const deliveryFee = orderType === 'delivery' && subtotal > 0 ? (subtotal >= 400 ? 0 : 30) : 0;
  const taxes = Number((subtotal * 0.05).toFixed(2));
  const grandTotal = Number((subtotal + deliveryFee + taxes).toFixed(2));

  return (
    <CartContext.Provider
      value={{
        items,
        orderType,
        setOrderType,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalCount,
        subtotal,
        deliveryFee,
        taxes,
        grandTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
