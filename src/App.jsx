import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';

// Code-split routes with React.lazy for high performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Menu = lazy(() => import('./pages/Menu').then(m => ({ default: m.Menu })));
const Location = lazy(() => import('./pages/Location').then(m => ({ default: m.Location })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Cart = lazy(() => import('./pages/Cart').then(m => ({ default: m.Cart })));
const OwnerLogin = lazy(() => import('./pages/OwnerLogin').then(m => ({ default: m.OwnerLogin })));
const OwnerDashboard = lazy(() => import('./pages/OwnerDashboard').then(m => ({ default: m.OwnerDashboard })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Loading Spinner Component
const PageLoader = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3">
    <div className="w-10 h-10 border-4 border-warmbg-300 border-t-brand-600 rounded-full animate-spin" />
    <span className="text-xs font-semibold text-zinc-500 tracking-wide">
      Loading Mysore Sadan Pure Veg...
    </span>
  </div>
);

export function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col bg-warmbg-50 text-charcoal-900 selection:bg-brand-500 selection:text-white">
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/owner-login" element={<OwnerLogin />} />
                    <Route path="/owner" element={<OwnerDashboard />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <FloatingActions />
            </div>
          </BrowserRouter>
        </CartProvider>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;
