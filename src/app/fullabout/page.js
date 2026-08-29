import React from "react";
import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      
      {/* 1. Hero Section with Background Image */}
      <section className="relative py-24 px-6 text-center text-white bg-zinc-950 border-b border-zinc-800 overflow-hidden">
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop')` 
          }}
        />
        
        {/* Gradient Overlay for Dark Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-zinc-950" />

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-4">
            About <span className="text-yellow-500">Basharat Fitness</span>
          </h1>
          <p className="text-zinc-300 text-sm md:text-base max-w-2xl mx-auto">
            More than a gym. A community built for strength, health, and confidence.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="h-72 rounded-xl overflow-hidden shadow-lg border border-zinc-800">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" 
              alt="Gym Workout" 
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-black uppercase tracking-wide mb-4 text-zinc-900">
              Our Story
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Founded in 2015, Basharat Fitness was created with a simple goal: 
              to help people achieve their fitness goals in a supportive and 
              motivating environment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Mission & Vision */}
      <section className="max-w-6xl mx-auto pb-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-100 p-8 rounded-xl border border-zinc-200">
            <h3 className="text-xl font-black uppercase text-zinc-900 mb-3">Our Mission</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              To help people build stronger bodies and healthier lifestyles through quality training and guidance.
            </p>
          </div>

          <div className="bg-zinc-100 p-8 rounded-xl border border-zinc-200">
            <h3 className="text-xl font-black uppercase text-zinc-900 mb-3">Our Vision</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              To create a fitness community where everyone feels motivated, confident, and supported.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Stats Banner */}
      <section className="bg-black text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <h4 className="text-3xl font-black text-yellow-500">1500+</h4>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Happy Members</p>
          </div>
          <div className="p-4">
            <h4 className="text-3xl font-black text-yellow-500">50+</h4>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Expert Trainers</p>
          </div>
          <div className="p-4">
            <h4 className="text-3xl font-black text-yellow-500">10+</h4>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Years Experience</p>
          </div>
          <div className="p-4">
            <h4 className="text-3xl font-black text-yellow-500">20+</h4>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Workout Programs</p>
          </div>
        </div>
      </section>

      {/* 5. Facilities Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-black uppercase text-center mb-10 text-zinc-900">
          Our Facilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="relative h-48 rounded-xl overflow-hidden group border border-zinc-200 shadow">
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=500&auto=format&fit=crop" 
              alt="Equipment" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/60 flex items-end p-4">
              <span className="text-white font-bold text-sm uppercase">Modern Equipment</span>
            </div>
          </div>

          <div className="relative h-48 rounded-xl overflow-hidden group border border-zinc-200 shadow">
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=500&auto=format&fit=crop" 
              alt="Workout Area" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/60 flex items-end p-4">
              <span className="text-white font-bold text-sm uppercase">Spacious Workout Area</span>
            </div>
          </div>

          <div className="relative h-48 rounded-xl overflow-hidden group border border-zinc-200 shadow">
            <img 
              src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=500&auto=format&fit=crop" 
              alt="Lockers" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/60 flex items-end p-4">
              <span className="text-white font-bold text-sm uppercase">Locker Rooms</span>
            </div>
          </div>

          <div className="relative h-48 rounded-xl overflow-hidden group border border-zinc-200 shadow">
            <img 
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500&auto=format&fit=crop" 
              alt="Cardio Zone" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/60 flex items-end p-4">
              <span className="text-white font-bold text-sm uppercase">Cardio Zone</span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CTA Bar */}
      <section className="bg-yellow-500 py-8 px-6 text-black">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide">
            Become a part of Basharat Fitness today!
          </h3>
          <Link href='/contact'>
          <button className="bg-black text-white hover:bg-zinc-800 font-extrabold text-xs px-6 py-3 rounded uppercase tracking-wider transition">
            Join Now
          </button>
          </Link>
        </div>
      </section>

    </div>
  );
}