// hooks/useAuth.ts
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, LoginResponse } from '@/types';
import { setAuthToken, getAuthToken, removeAuthToken, setCurrentUser, getCurrentUser } from '@/lib/auth';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (data: LoginResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getAuthToken();
    const savedUser = getCurrentUser();

    if (token && savedUser) {
      setUser(savedUser);
    }
    setIsLoading(false);
  }, []);

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
    setUser(userData);
  };

  const logout = () => {
    removeAuthToken();
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        isLoading, 
        login, 
        logout 
      }}
    >
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