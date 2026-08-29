export default function MembershipSection() {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Title */}
        <h2 className="text-3xl font-extrabold text-center uppercase tracking-wider mb-12">
          CHOOSE YOUR MEMBERSHIP
        </h2>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          
          {/* CARD 1: BASIC */}
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center flex flex-col justify-between hover:border-yellow-500 transition-all duration-300 group">
            {/* Top Card Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-800 group-hover:bg-yellow-500 group-hover:text-black text-zinc-300 font-extrabold text-xs px-4 py-1 rounded-full uppercase transition duration-300">
              BASIC
            </div>

            <div>
              <p className="text-4xl font-extrabold mt-4 mb-6">
                $29 <span className="text-xs font-normal text-zinc-400">/month</span>
              </p>
              
              <ul className="text-zinc-300 text-sm space-y-3 mb-8 text-left inline-block">
                <li className="flex items-center gap-2">✓ Gym Access</li>
                <li className="flex items-center gap-2">✓ Basic Equipment</li>
                <li className="flex items-center gap-2">✓ Locker Room</li>
              </ul>
            </div>

            <button className="w-full bg-yellow-500 text-black font-extrabold text-sm py-3 rounded-lg uppercase hover:bg-yellow-400 transition">
              JOIN NOW
            </button>
          </div>

          {/* CARD 2: POPULAR */}
          <div className="relative relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center flex flex-col justify-between hover:border-yellow-500 transition-all duration-300 group">
            {/* Top Card Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-zinc-300 bg-zinc-800 group-hover:bg-yellow-500 group-hover:text-black  text-black font-extrabold text-xs px-4 py-1 rounded-full uppercase">
              POPULAR
            </div>

            <div>
              <p className="text-4xl font-extrabold mt-4 mb-6">
                $49 <span className="text-xs font-normal text-zinc-400">/month</span>
              </p>
              
              <ul className="text-zinc-300 text-sm space-y-3 mb-8 text-left inline-block">
                <li className="flex items-center gap-2">✓ Gym Access</li>
                <li className="flex items-center gap-2">✓ All Equipment</li>
                <li className="flex items-center gap-2">✓ Group Classes</li>
                <li className="flex items-center gap-2">✓ Diet Plan</li>
              </ul>
            </div>

            <button className="w-full bg-yellow-500 text-black font-extrabold text-sm py-3 rounded-lg uppercase hover:bg-yellow-400 transition">
              JOIN NOW
            </button>
          </div>

          {/* CARD 3: PREMIUM */}
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center flex flex-col justify-between hover:border-yellow-500 transition-all duration-300 group">
            {/* Top Card Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-800 group-hover:bg-yellow-500 group-hover:text-black text-zinc-300 font-extrabold text-xs px-4 py-1 rounded-full uppercase transition duration-300">
              PREMIUM
            </div>

            <div>
              <p className="text-4xl font-extrabold mt-4 mb-6">
                $79 <span className="text-xs font-normal text-zinc-400">/month</span>
              </p>
              
              <ul className="text-zinc-300 text-sm space-y-3 mb-8 text-left inline-block">
                <li className="flex items-center gap-2">✓ Gym Access</li>
                <li className="flex items-center gap-2">✓ All Equipment</li>
                <li className="flex items-center gap-2">✓ Group Classes</li>
                <li className="flex items-center gap-2">✓ Personal Trainer</li>
                <li className="flex items-center gap-2">✓ Diet Plan</li>
              </ul>
            </div>

            <button className="w-full bg-yellow-500 text-black font-extrabold text-sm py-3 rounded-lg uppercase hover:bg-yellow-400 transition">
              JOIN NOW
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}