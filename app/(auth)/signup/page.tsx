
'use client';

import Link from 'next/link';
import { useState } from 'react';
import api from '@/lib/axios';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    roleID: 2, 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await api.post('/Auth/register', formData);
      
      if (response.data.success) {
        setSuccess("Account created successfully! Redirecting to login...");
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      
      <div className="w-full lg:w-5/12 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Join SkillVerse</h1>
            <p className="text-gray-600 mt-2">Find work or hire skilled professionals</p>
          </div>

          <div className="flex gap-4 mb-8 bg-gray-100 p-1 rounded-2xl">
            <button
              onClick={() => setFormData({ ...formData, roleID: 2 })}
              className={`flex-1 py-3 rounded-xl font-medium transition ${formData.roleID === 2 ? 'bg-white shadow' : 'hover:bg-white/50'}`}
            >
              I'm a Customer
            </button>
            <button
              onClick={() => setFormData({ ...formData, roleID: 3 })}
              className={`flex-1 py-3 rounded-xl font-medium transition ${formData.roleID === 3 ? 'bg-white shadow' : 'hover:bg-white/50'}`}
            >
              I'm a Provider
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="input"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="input"
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
            {success && <p className="text-green-600 text-sm">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-4 text-lg font-semibold"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-primary font-medium hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

    
      <div className="hidden lg:flex w-7/12 bg-gradient-to-br from-blue-600 to-blue-800 relative items-center justify-center overflow-hidden">
        <div className="text-white text-center z-10 px-12">
          <h2 className="text-5xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-xl text-blue-100 max-w-md mx-auto">
            Whether you're looking for help or looking to earn, SkillVerse connects you with the right people.
          </p>
        </div>
      </div>
    </div>
  );
}