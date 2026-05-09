
'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
         
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="text-green-600">★</span>
              <span className="text-sm font-medium">4.8/5 from 12,450+ customers</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-neutral-900">
              Get Reliable Skilled Workers <span className="text-primary">at Your Doorstep</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-lg">
              Book trusted plumbers, electricians, cleaners, painters & more in minutes. 
              Verified professionals • Fair pricing • 100% Satisfaction
            </p>

         
            <div className="bg-white p-2 rounded-2xl shadow-lg flex items-center gap-3 max-w-xl">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="What service do you need? (e.g. AC repair)"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary outline-none text-lg"
                />
              </div>
              <Link href="/search" className="btn-primary px-10 py-4 text-lg font-semibold whitespace-nowrap">
                Find Professionals
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">Plumbing</span>
              <span className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">Electrical</span>
              <span className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">Cleaning</span>
              <span className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">Painting</span>
              <span className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">AC Repair</span>
            </div>
          </div>


          <div className="relative hidden md:block">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src="/images/hero-worker.jpg" 
                alt="Professional Worker" 
                className="w-full h-full object-cover"
              />
            </div>
            

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-4">
                <div className="text-green-500 text-4xl">✓</div>
                <div>
                  <p className="font-semibold">Verified Professionals</p>
                  <p className="text-sm text-gray-500">Background checked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}