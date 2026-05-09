
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-5xl font-bold mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl mb-10 text-blue-100">
          Join SkillVerse today and experience the easiest way to book professionals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup" className="bg-white text-primary px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition">
            Find a Professional
          </Link>
          <Link href="/signup?role=worker" className="border border-white/70 hover:bg-white/10 px-10 py-4 rounded-2xl font-semibold text-lg transition">
            Become a Service Provider
          </Link>
        </div>
      </div>
    </section>
  );
}