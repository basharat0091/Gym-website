import React from "react";
import Link from "next/link";

export default function TrainersPage() {
  // Detailed Trainers Data Array (Added 'id' property)
  const trainers = [
    {
      id: "1",
      name: "Ahmed Khan",
      role: "Head Fitness Trainer",
      experience: "8 Years Exp.",
      specialty: "Hypertrophy & Prep",
      bio: "Certified master trainer specializing in contest prep and elite muscle transformation.",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: "2",
      name: "Ali Raza",
      role: "Strength Coach",
      experience: "6 Years Exp.",
      specialty: "Powerlifting & Core",
      bio: "Focused on heavy compound lifting, posture correction, and raw athletic power.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: "3",
      name: "Sara Khan",
      role: "Yoga Instructor",
      experience: "5 Years Exp.",
      specialty: "Flexibility & Mindset",
      bio: "Expert in mobility restoration, breathing techniques, and mental wellness.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: "4",
      name: "Usman Ali",
      role: "CrossFit Coach",
      experience: "7 Years Exp.",
      specialty: "HIIT & Endurance",
      bio: "High-intensity functional fitness specialist helping athletes break plateaus.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: "5",
      name: "Hamza Butt",
      role: "Bodybuilding Coach",
      experience: "6 Years Exp.",
      specialty: "Fat Loss & Sculpting",
      bio: "Personalized nutrition planning and target muscle isolation routines.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: "6",
      name: "Imran Shah",
      role: "Fitness Trainer",
      experience: "5 Years Exp.",
      specialty: "Functional Fitness",
      bio: "Helping beginners build strong foundations and sustainable fitness habits.",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: "7",
      name: "Maheen Fatima",
      role: "Women Fitness Coach",
      experience: "4 Years Exp.",
      specialty: "Toning & Wellness",
      bio: "Specialized fitness programs designed specifically for women's health and strength.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: "8",
      name: "Waqas Ali",
      role: "Cardio Coach",
      experience: "5 Years Exp.",
      specialty: "Stamina & Speed",
      bio: "Focuses on cardiovascular conditioning, marathon prep, and agility.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      
      {/* 1. Interactive Hero Banner with Background Image */}
      <section className="relative py-28 px-6 text-center border-b border-zinc-800 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop')" }}>
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4 drop-shadow-md">
            Meet Our <span className="text-yellow-500">Coaches</span>
          </h1>
          <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto drop-shadow">
            Hover over any trainer card to reveal their detailed profile, specialties, and background experience.
          </p>
        </div>
      </section>

      {/* 2. Interactive Hover Profile Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((item) => (
            <div 
              key={item.id} 
              className="relative group h-96 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl cursor-pointer"
            >
              {/* Background Trainer Image */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Default Name Tag (Visible when not hovering) */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 text-center group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-black uppercase text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-yellow-500 font-bold text-xs uppercase">
                  {item.role}
                </p>
              </div>

              {/* Hover Overlay Profile Details */}
              <div className="absolute inset-0 bg-black/90 p-6 flex flex-col justify-between text-left opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                
                <div>
                  <span className="bg-yellow-500 text-black text-[10px] font-black px-2 py-1 rounded uppercase tracking-wide">
                    {item.experience}
                  </span>
                  
                  <h3 className="text-2xl font-black uppercase text-white mt-3 mb-1">
                    {item.name}
                  </h3>
                  
                  <p className="text-yellow-500 text-xs font-bold uppercase mb-4">
                    {item.role}
                  </p>

                  <div className="border-t border-zinc-800 pt-3">
                    <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">Specialty</p>
                    <p className="text-zinc-200 text-xs font-semibold mb-3">{item.specialty}</p>

                    <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">About</p>
                    <p className="text-zinc-300 text-xs leading-relaxed">{item.bio}</p>
                  </div>
                </div>

                {/* Card Action Button with Dynamic Route Link */}
                <Link href={`/bookingnow/${item.id}`} className="w-full block">
                  <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs py-2.5 rounded uppercase tracking-wider transition">
                    Book Session
                  </button>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Bottom CTA Bar */}
      <section className="bg-yellow-500 py-8 px-6 text-black">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <h3 className="text-2xl font-black uppercase tracking-wide">
            Want Personal Guidance?
          </h3>
          <button className="bg-black text-white hover:bg-zinc-800 font-extrabold text-xs px-8 py-3.5 rounded-lg uppercase tracking-wider transition">
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
}