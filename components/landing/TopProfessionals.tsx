
import { Star, MapPin } from 'lucide-react';

const professionals = [
  {
    name: "Marcus Chen",
    role: "Master Electrician",
    rating: 4.9,
    jobs: 142,
    rate: 75,
    location: "Kochi",
    image: "/images/pro1.jpg"
  },
  {
    name: "Sarah Jenkins",
    role: "Professional Cleaner",
    rating: 5.0,
    jobs: 89,
    rate: 55,
    location: "Kochi",
    image: "/images/pro2.jpg"
  },
  {
    name: "David Miller",
    role: "Licensed Plumber",
    rating: 4.8,
    jobs: 203,
    rate: 65,
    location: "Kochi",
    image: "/images/pro3.jpg"
  }
];

export default function TopProfessionals() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold">Top-Rated Professionals</h2>
            <p className="text-gray-600 mt-2">Work with the best in your area</p>
          </div>
          <a href="/search" className="text-primary font-medium hover:underline">See All Professionals →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {professionals.map((pro, index) => (
            <div key={index} className="card p-8 hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl"></div>
                <div>
                  <h3 className="font-semibold text-xl">{pro.name}</h3>
                  <p className="text-gray-600 text-sm">{pro.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <span className="font-semibold">{pro.rating}</span>
                <span className="text-gray-500">({pro.jobs}+ jobs)</span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">From</p>
                  <p className="text-2xl font-bold">₹{pro.rate}/hr</p>
                </div>
                <button className="btn-primary px-8 py-3 text-sm">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}