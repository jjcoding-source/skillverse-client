
'use client';

import { createContext, useContext, useSyncExternalStore, type ReactNode } from 'react';
import { User, LoginResponse } from '@/types';
import { setAuthToken, removeAuthToken, setCurrentUser } from '@/lib/auth';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (data: LoginResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_EVENT = 'auth-storage';

const getAuthSnapshot = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  return token && user ? user : '';
};

const getServerAuthSnapshot = () => null;

const subscribeToAuth = (callback: () => void) => {
  window.addEventListener('storage', callback);
  window.addEventListener(AUTH_STORAGE_EVENT, callback);

  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(AUTH_STORAGE_EVENT, callback);
  };
};

const dispatchAuthChange = () => {
  window.dispatchEvent(new Event(AUTH_STORAGE_EVENT));
};

const parseUser = (userSnapshot: string | null): User | null => {
  if (!userSnapshot) return null;

  try {
    return JSON.parse(userSnapshot) as User;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const userSnapshot = useSyncExternalStore(subscribeToAuth, getAuthSnapshot, getServerAuthSnapshot);
  const user = parseUser(userSnapshot);
  const isLoading = userSnapshot === null;

  const login = (response: LoginResponse) => {
    setAuthToken(response.token);
    const userData: User = {
      userID: response.userID,
      fullName: response.fullName,
      email: response.email,
      phone: '',
      roleName: response.roleName,
    };
    setCurrentUser(userData);
    dispatchAuthChange();
  };

  const logout = () => {
    removeAuthToken();
    localStorage.removeItem('user');
    dispatchAuthChange();
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
