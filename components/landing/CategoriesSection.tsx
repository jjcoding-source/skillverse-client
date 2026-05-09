
import Link from 'next/link';
import { Wrench, Zap, Home, Palette, Fan, Bug } from 'lucide-react';

const categories = [
  { icon: Wrench, name: "Plumbing", count: "245 Pros" },
  { icon: Zap, name: "Electrical", count: "189 Pros" },
  { icon: Home, name: "Cleaning", count: "312 Pros" },
  { icon: Palette, name: "Painting", count: "98 Pros" },
  { icon: Fan, name: "AC Repair", count: "134 Pros" },
  { icon: Bug, name: "Pest Control", count: "76 Pros" },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-bold">Browse by Expertise</h2>
          <Link href="/search" className="text-primary font-medium hover:underline flex items-center gap-2">
            View All <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              href={`/search?category=${cat.name.toLowerCase()}`}
              className="card p-8 hover:scale-105 transition-transform group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <cat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-1">{cat.name}</h3>
              <p className="text-gray-500 text-sm">{cat.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}