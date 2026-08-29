export default function TrainersSection() {
  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold uppercase">
            MEET OUR TRAINERS
          </h2>
        </div>

        {/* Trainers Grid (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Trainer 1 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center hover:border-yellow-500 transition duration-300">
            <img 
              src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400" 
              alt="Ahmed Khan" 
              className="w-full h-44 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold text-sm uppercase">AHMED KHAN</h3>
            <p className="text-zinc-400 text-xs mt-1">Body Building Coach</p>
          </div>

          {/* Trainer 2 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center  ">
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=500&auto=format&fit=crop" 
              alt="Ali Raza" 
              className="w-full h-44 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold text-sm uppercase">ALI RAZA</h3>
            <p className="text-zinc-400 text-xs mt-1">Fitness Trainer</p>
          </div>

          {/* Trainer 3 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center ">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" 
              alt="Sara Khan" 
              className="w-full h-44 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold text-sm uppercase">SARA KHAN</h3>
            <p className="text-zinc-400 text-xs mt-1">Yoga Instructor</p>
          </div>

          {/* Trainer 4 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center ">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" 
              alt="Usman Ali" 
              className="w-full h-44 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold text-sm uppercase">USMAN ALI</h3>
            <p className="text-zinc-400 text-xs mt-1">CrossFit Coach</p>
          </div>

        </div>

        {/* Centered Button (Grid Ke Bahar) */}
        <div className="flex justify-center mt-6">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-extrabold text-xs px-6 py-2.5 rounded uppercase  ">
           <a href="/fulltrainer">  VIEW ALL TRAINERS</a>
          </button>
        </div>

      </div>
    </div>
  );
}