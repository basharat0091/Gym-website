import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-black text-white">
      {/* Main Hero Section with Background Image */}
      <div className="relative bg-zinc-950">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600&auto=format&fit=crop"
            alt="Gym Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36 flex flex-col items-center text-center">
          
          {/* Content */}
          <div className="w-full max-w-3xl flex flex-col items-center gap-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight">
              Build Your Body <br />
              <span className="text-yellow-500">Build Your Confidence</span>
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base max-w-lg leading-relaxed">
              Join Basharat Fit Gym and start your journey towards a stronger, healthier you.
            </p>

            <div className="flex gap-4 mt-2">
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-extrabold text-xs px-6 py-3 rounded uppercase tracking-wider transition"
              >
                Join Now
              </Link>
              <Link
                href="/fullprogram"
                className="bg-transparent hover:bg-zinc-900/80 text-white border border-zinc-700 font-extrabold text-xs px-6 py-3 rounded uppercase tracking-wider transition backdrop-blur-sm"
              >
                View Programs
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Feature Strip */}
      <div className="bg-zinc-900 border-t border-b border-zinc-800 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="flex items-center gap-4">
            <span className="text-3xl text-yellow-500">🏋️</span>
            <div>
              <h4 className="font-bold text-sm uppercase">Modern Equipment</h4>
              <p className="text-zinc-400 text-xs">Train with the latest professional equipment.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl text-yellow-500">👤</span>
            <div>
              <h4 className="font-bold text-sm uppercase">Expert Trainers</h4>
              <p className="text-zinc-400 text-xs">Get guidance from certified trainers.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl text-yellow-500">📅</span>
            <div>
              <h4 className="font-bold text-sm uppercase">Flexible Schedule</h4>
              <p className="text-zinc-400 text-xs">Choose timings that fit your routine.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl text-yellow-500">💛</span>
            <div>
              <h4 className="font-bold text-sm uppercase">Healthy Community</h4>
              <p className="text-zinc-400 text-xs">Be part of a supportive fitness community.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}