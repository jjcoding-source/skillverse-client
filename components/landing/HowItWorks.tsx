
import { Search, Calendar, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Search Experts",
    desc: "Browse through thousands of verified professionals based on skills, ratings, and location."
  },
  {
    icon: Calendar,
    number: "02",
    title: "Pick a Slot",
    desc: "Select a time that fits your schedule. Instant confirmation from the expert."
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Get it Done",
    desc: "Expert arrives, completes the job. Pay securely only after satisfaction."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Simple Three-Step Booking</h2>
          <p className="text-xl text-gray-600">Your journey from problem to solution in minutes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow flex items-center justify-center mb-6">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="text-primary font-mono text-sm mb-3">STEP {step.number}</div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}