
import { User } from '@/types';

export const setAuthToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem('token');
};

export const removeAuthToken = () => {
  localStorage.removeItem('token');
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const setCurrentUser = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const logout = () => {
  removeAuthToken();
  localStorage.removeItem('user');
  window.location.href = '/login';
};