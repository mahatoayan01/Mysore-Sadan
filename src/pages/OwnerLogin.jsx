import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Key, User, Lock, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { restaurantData } from '../data/restaurant';
import { PureVegBadge } from '../components/PureVegBadge';

export const OwnerLogin = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const creds = restaurantData.ownerCredentials;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/owner', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const res = login(username, password);
    if (res.success) {
      navigate('/owner');
    } else {
      setError(res.message);
    }
  };

  const autofillDemo = () => {
    setUsername(creds.username);
    setPassword(creds.password);
    setError('');
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-md mx-auto pb-32">
      <div className="bg-white rounded-3xl border border-warmbg-300 shadow-warm-lg overflow-hidden">
        
        {/* Header */}
        <div className="bg-charcoal-950 text-white p-6 sm:p-8 text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center mx-auto shadow-md">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h1 className="font-serif text-2xl font-bold">Owner & Staff Portal</h1>
          <p className="text-xs text-zinc-400">
            Mysore Sadan Pure Veg Management
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Mandatory Demo Credentials Banner (Step 4 Requirement) */}
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 text-xs text-amber-900 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-amber-800">
              <Key className="w-4 h-4 text-amber-600" />
              <span>{creds.badge}</span>
            </div>
            <div className="space-y-1 font-mono bg-white/70 p-2.5 rounded-lg border border-amber-200">
              <div className="flex justify-between">
                <span className="text-zinc-500">Username:</span>
                <span className="font-bold text-charcoal-900">{creds.username}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Password:</span>
                <span className="font-bold text-charcoal-900">{creds.password}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={autofillDemo}
              className="w-full py-1.5 px-3 rounded-lg bg-amber-200 hover:bg-amber-300 text-amber-950 font-bold text-[11px] transition-colors"
            >
              Click here to Auto-Fill Demo Credentials
            </button>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="login-username" className="block text-xs font-bold text-zinc-700 mb-1">
                Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="login-username"
                  type="text"
                  required
                  placeholder="Enter owner username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-warmbg-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="login-password" className="block text-xs font-bold text-zinc-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="login-password"
                  type="password"
                  required
                  placeholder="Enter owner password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-warmbg-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Sign In to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </div>
  );
};
