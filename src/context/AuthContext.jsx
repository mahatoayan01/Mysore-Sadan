import React, { createContext, useContext, useState } from 'react';
import { restaurantData } from '../data/restaurant';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem('mysore_owner_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem('mysore_owner_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const login = (username, password) => {
    const creds = restaurantData.ownerCredentials;
    if (username.trim() === creds.username && password === creds.password) {
      const user = {
        username: creds.username,
        role: creds.role,
        loginTime: new Date().toISOString()
      };
      setIsAuthenticated(true);
      setCurrentUser(user);
      try {
        localStorage.setItem('mysore_owner_auth', 'true');
        localStorage.setItem('mysore_owner_user', JSON.stringify(user));
      } catch (e) {
        console.warn('Failed to save auth to localStorage', e);
      }
      return { success: true };
    }
    return { success: false, message: 'Invalid username or password. Please use demo credentials shown below.' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    try {
      localStorage.removeItem('mysore_owner_auth');
      localStorage.removeItem('mysore_owner_user');
    } catch (e) {
      console.warn('Failed to remove auth from localStorage', e);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
