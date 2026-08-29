import React from "react";
import Link from "next/link";
export default function ProgramsPage() {
  // Programs data array taake code bilkul simple aur saaf rahe
  const programs = [
    {
      title: "Body Building",
      desc: "Build strength and muscle mass.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Weight Loss",
      desc: "Burn fat and improve your fitness.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Crossfit",
      desc: "High-intensity training for real results.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Yoga",
      desc: "Improve flexibility and balance.",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Cardio",
      desc: "Improve heart health and endurance.",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Strength Training",
      desc: "Increase strength and power.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Functional Training",
      desc: "Improve everyday movements.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Personal Training",
      desc: "One-on-one training with experts.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      
      {/* 1. Dark Hero Section with Female Fitness Model Image */}
      <section className="relative bg-zinc-950 text-white py-20 px-6 border-b border-zinc-800 overflow-hidden">
        {/* Background Overlay Image */}
        <div 
          className="absolute inset-0 bg-cover bg-right opacity-30"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col justify-center min-h-[220px]">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-4">
            Our Fitness <span className="text-yellow-500">Programs</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg">
            Find the right training program for your fitness goals.
          </p>
        </div>
      </section>

      {/* 2. Programs Grid (8 Cards) */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((item, index) => (
            <div 
              key={index} 
              className="bg-black text-white rounded-2xl overflow-hidden border border-zinc-800 flex flex-col justify-between hover:scale-105 transition duration-300 shadow-xl"
            >
              {/* Card Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Text Content */}
              <div className="p-5 text-center flex flex-col items-center justify-center flex-1">
                <h3 className="text-lg font-black uppercase text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Bottom Yellow CTA Bar */}
      <section className="bg-yellow-500 py-8 px-6 text-black">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <h3 className="text-2xl font-black uppercase tracking-wide">
            Ready To Start?
          </h3>
        <Link href="/contact" >
          <button className="bg-black text-white hover:bg-zinc-800 font-extrabold text-xs px-8 py-3.5 rounded-lg uppercase tracking-wider transition">
            Join Now
          </button>
          </Link>
        </div>
      </section>

    </div>
  );
}