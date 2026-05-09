
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import api from '@/lib/axios';
import { LoginDto } from '@/types/auth';

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginDto>({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/Auth/login', formData);
      
      if (response.data.success) {
        login(response.data.data);
        window.location.href = '/dashboard'; 
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      
      <div className="w-full lg:w-5/12 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Login to manage your bookings and find skilled workers</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email or Phone Number</label>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input"
                placeholder="athul@gmail.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="input"
                required
              />
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-4 text-lg font-semibold"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

   
      <div className="hidden lg:flex w-7/12 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 p-12 flex flex-col justify-center text-white">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Reliable Help,<br />Just a Click Away
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-md">
            Join thousands of happy customers who get quality services at their doorstep.
          </p>

          <div className="space-y-6">
            {[
              "Verified & Trusted Professionals",
              "Quick Booking & Real-time Tracking",
              "Secure Payments & 24/7 Support",
              "Satisfaction Guaranteed"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[url('/images/worker-hero.jpg')] bg-cover bg-center opacity-20" />
      </div>
    </div>
  );
}