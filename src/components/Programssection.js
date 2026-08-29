import React from 'react'

export default function Programssection() {
  return (
    
      <section className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* SECTION 1: OUR PROGRAMS */}
        <div className="text-center mb-8">
          <p className="text-yellow-500 font-bold uppercase text-xs">
            OUR PROGRAMS
          </p>
          <h2 className="text-3xl font-extrabold uppercase mt-1">
            CHOOSE YOUR WORKOUT
          </h2>
        </div>

        {/* Programs Grid (5 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Card 1 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
            <img 
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400" 
              alt="Body Building" 
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold text-sm uppercase">BODY BUILDING</h3>
            <p className="text-zinc-400 text-xs mt-1">Build strength and muscle mass.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
            <img 
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400" 
              alt="Weight Loss" 
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold text-sm uppercase">WEIGHT LOSS</h3>
            <p className="text-zinc-400 text-xs mt-1">Burn fat and improve your fitness.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
            <img 
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=400" 
              alt="Yoga" 
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold text-sm uppercase">YOGA</h3>
            <p className="text-zinc-400 text-xs mt-1">Improve flexibility and balance.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
            <img 
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400" 
              alt="Crossfit" 
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold text-sm uppercase">CROSSFIT</h3>
            <p className="text-zinc-400 text-xs mt-1">High intensity training for real results.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
            <img 
              src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=400" 
              alt="Functional Training" 
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold text-sm uppercase">FUNCTIONAL TRAINING</h3>
            <p className="text-zinc-400 text-xs mt-1">Improve everyday strength and mobility.</p>
          </div>

        </div>

        {/* View Button */}
        <div className="text-center mt-6 ">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-extrabold text-xs px-6 py-2.5 rounded uppercase ">
           <a href='/fullprogram'>VIEW ALL PROGRAMS </a> 
          </button>
        </div>
      </div>
    </section>
  )
}
