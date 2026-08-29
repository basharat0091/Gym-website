export default function Aboutsection() {
  return (
    <section className="bg-gray-100 text-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Content: Image + Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side: Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600"
              alt="Gym Interior"
              className="rounded-lg shadow-md w-full object-cover h-[300px]"
            />
          </div>

          {/* Right Side: Text Details */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              ABOUT US
            </span>
            
            <h2 className="text-3xl font-extrabold tracking-tight mt-1 mb-3">
              WE ARE MORE THAN <br /> JUST A GYM
            </h2>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              At IronFit, we believe fitness is a lifestyle. Our mission is to help
              you become the best version of yourself.
            </p>

            <button className="bg-black text-white px-5 py-2.5 text-xs font-bold rounded flex items-center gap-2 hover:bg-gray-800 transition">
             <a href="/fullabout"> LEARN MORE</a> 
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-300 text-center">
          
          {/* Stat 1 */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">👤</span>
            <div className="text-left">
              <h3 className="text-xl font-bold">1500+</h3>
              <p className="text-xs text-gray-500">Happy Members</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">🏋️</span>
            <div className="text-left">
              <h3 className="text-xl font-bold">50+</h3>
              <p className="text-xs text-gray-500">Expert Trainers</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">🏆</span>
            <div className="text-left">
              <h3 className="text-xl font-bold">10+</h3>
              <p className="text-xs text-gray-500">Years Experience</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">⭐</span>
            <div className="text-left">
              <h3 className="text-xl font-bold">20+</h3>
              <p className="text-xs text-gray-500">Workout Programs</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}