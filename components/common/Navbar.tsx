
'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { LogOut, User } from 'lucide-react';

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-primary">
            SkillVerse
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/search" className="hover:text-primary transition-colors">Find Services</Link>
            <Link href="/workers" className="hover:text-primary transition-colors">Browse Professionals</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2 text-sm">
                <User size={18} />
                <span className="font-medium">{user?.fullName.split(' ')[0]}</span>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-2 text-red-600 hover:text-red-700 text-sm font-medium"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="px-5 py-2 text-sm font-medium hover:bg-gray-100 rounded-xl transition">
                Login
              </Link>
              <Link href="/signup" className="btn-primary text-sm">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}