
const testimonials = [
  {
    text: "SkillVerse helped me find an excellent electrician within 30 minutes. The service was professional and the pricing was transparent.",
    name: "Priya Menon",
    role: "Homeowner, Kochi"
  },
  {
    text: "As a property manager, SkillVerse has become my go-to platform. Reliable workers and excellent tracking system.",
    name: "Rahul Sharma",
    role: "Property Manager"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Loved by Thousands</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-10">
              <div className="flex mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}