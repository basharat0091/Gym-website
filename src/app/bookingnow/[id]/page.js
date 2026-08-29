import React from "react";
import Link from "next/link";

export const trainersData = {
  "1": {
    id: 1,
    name: "Ahmed Khan",
    role: "Head Fitness Trainer",
    degree: "MPhil in Sports Sciences, Certified IFBB Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=500&auto=format&fit=crop",
    reviews: "1,394",
    experience: "8 Yrs",
    satisfaction: "99%",
    specialty: "Bodybuilding & Muscle Building",
    bio: "Certified master trainer specializing in contest prep, body transformation, and hypertrophy.",
    videoFee: "Rs. 3,000",
    clinicFee: "Rs. 5,000",
    location: "IronFit Main Gym, Gulberg, Lahore"
  },
  "2": {
    id: 2,
    name: "Ali Raza",
    role: "Strength & Power Coach",
    degree: "Certified Powerlifting Specialist (USAPL)",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=500&auto=format&fit=crop",
    reviews: "980",
    experience: "6 Yrs",
    satisfaction: "97%",
    specialty: "Heavy Powerlifting & Core Strength",
    bio: "Focused on compound lifts, squat/deadlift mechanics, and structural posture alignment.",
    videoFee: "Rs. 2,500",
    clinicFee: "Rs. 4,000",
    location: "IronFit Arena, Model Town, Lahore"
  },
  "3": {
    id: 3,
    name: "Sara Khan",
    role: "Yoga & Flexibility Instructor",
    degree: "MSc Physical Education, 500-hr RYT Yoga Alliance",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop",
    reviews: "1,120",
    experience: "5 Yrs",
    satisfaction: "98%",
    specialty: "Flexibility, Mobility & Posture Correction",
    bio: "Specialist in functional joint mobility, stress reduction, and posture correction routines.",
    videoFee: "Rs. 2,000",
    clinicFee: "Rs. 3,500",
    location: "IronFit Studio, DHA Phase 5, Lahore"
  },
  "4": {
    id: 4,
    name: "Usman Ali",
    role: "CrossFit Coach",
    degree: "CrossFit Level 2 Trainer (CF-L2)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    reviews: "850",
    experience: "7 Yrs",
    satisfaction: "96%",
    specialty: "HIIT, Endurance & Functional Training",
    bio: "High-intensity conditioning coach dedicated to stamina, speed, and functional body control.",
    videoFee: "Rs. 2,500",
    clinicFee: "Rs. 4,500",
    location: "IronFit Box, Johar Town, Lahore"
  },
  "5": {
    id: 5,
    name: "Hamza Butt",
    role: "Bodybuilding Coach",
    degree: "Diploma in Sports Nutrition & Fitness",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
    reviews: "760",
    experience: "6 Yrs",
    satisfaction: "95%",
    specialty: "Fat Loss & Muscle Isolation",
    bio: "Teaches strict isolation form and customized macros for fast fat loss and lean body shape.",
    videoFee: "Rs. 2,500",
    clinicFee: "Rs. 4,000",
    location: "IronFit Main Gym, Gulberg, Lahore"
  },
  "6": {
    id: 6,
    name: "Imran Shah",
    role: "Fitness & Wellness Trainer",
    degree: "BSc Sports Sciences & Movement",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=500&auto=format&fit=crop",
    reviews: "640",
    experience: "5 Yrs",
    satisfaction: "94%",
    specialty: "Beginner Fitness & Habit Building",
    bio: "Helps total beginners build basic strength, safe gym habits, and long-term discipline.",
    videoFee: "Rs. 2,000",
    clinicFee: "Rs. 3,500",
    location: "IronFit Arena, Model Town, Lahore"
  },
  "7": {
    id: 7,
    name: "Maheen Fatima",
    role: "Women's Fitness Specialist",
    degree: "Certified Personal Trainer (ACE), Sports Nutritionist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
    reviews: "1,050",
    experience: "4 Yrs",
    satisfaction: "99%",
    specialty: "Female Toning, Weight Loss & Pilates",
    bio: "Specializes in women-focused workout routines, glute development, and post-natal fitness.",
    videoFee: "Rs. 2,500",
    clinicFee: "Rs. 4,000",
    location: "IronFit Women's Wing, DHA Phase 5, Lahore"
  },
  "8": {
    id: 8,
    name: "Waqas Ali",
    role: "Cardio & Stamina Coach",
    degree: "Athletic Performance & Endurance Certification",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop",
    reviews: "520",
    experience: "5 Yrs",
    satisfaction: "96%",
    specialty: "Marathon Prep & Cardiovascular Health",
    bio: "Focuses on treadmill programming, VO2 max improvement, and athletic speed work.",
    videoFee: "Rs. 2,000",
    clinicFee: "Rs. 3,500",
    location: "IronFit Box, Johar Town, Lahore"
  }
};

export default async function DynamicBookingPage({ params }) {
  const resolvedParams = await params;
  const trainerId = resolvedParams?.id || "1";
  const trainer = trainersData[trainerId] || trainersData["1"];

  return (
    <div className="bg-zinc-950 text-white min-h-screen py-12 px-6 flex flex-col justify-center items-center">
      
      {/* Back Link */}
      <div className="max-w-3xl w-full mb-4">
        <Link href="/fulltrainer" className="text-xs text-yellow-500 hover:underline font-bold uppercase tracking-wider">
          ← Back to All Trainers
        </Link>
      </div>

      <div className="max-w-3xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-6 border-b border-zinc-800">
          <img 
            src={trainer.image} 
            alt={trainer.name} 
            className="w-28 h-28 rounded-full object-cover border-2 border-yellow-500 shadow-md"
          />
          
          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl md:text-3xl font-black uppercase text-white">
              {trainer.name}
            </h1>
            <p className="text-yellow-500 font-bold text-sm uppercase mt-0.5">
              {trainer.role}
            </p>
            <p className="text-zinc-400 text-xs mt-1">
              {trainer.degree}
            </p>

            <div className="mt-3 inline-block bg-zinc-800 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full border border-zinc-700">
              {trainer.specialty}
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-zinc-400 text-sm mt-4 italic text-center md:text-left">
          "{trainer.bio}"
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 text-center py-5 border-y border-zinc-800 bg-zinc-950/50 rounded-xl my-6">
          <div>
            <p className="text-zinc-400 text-[10px] md:text-xs uppercase font-semibold">Reviews</p>
            <p className="text-base md:text-lg font-black text-white mt-0.5">{trainer.reviews}</p>
          </div>
          <div className="border-x border-zinc-800">
            <p className="text-zinc-400 text-[10px] md:text-xs uppercase font-semibold">Experience</p>
            <p className="text-base md:text-lg font-black text-yellow-500 mt-0.5">{trainer.experience}</p>
          </div>
          <div>
            <p className="text-zinc-400 text-[10px] md:text-xs uppercase font-semibold">Satisfaction</p>
            <p className="text-base md:text-lg font-black text-emerald-400 mt-0.5">{trainer.satisfaction}</p>
          </div>
        </div>

        {/* Booking Options */}
        <h3 className="text-xs font-black uppercase text-zinc-400 tracking-wider mb-4">
          Select Appointment Type
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Video Booking */}
          <div className="border-2 border-emerald-500/40 bg-zinc-950 p-5 rounded-xl flex flex-col justify-between hover:border-emerald-500 transition">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-white text-sm">Video Consultation</h4>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                  Online
                </span>
              </div>
              <p className="text-zinc-400 text-xs">Available Tomorrow</p>
            </div>
            
            <div className="mt-6 flex justify-between items-end">
              <span className="text-xl font-black text-white">{trainer.videoFee}</span>
              <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs px-4 py-2 rounded uppercase transition">
                Book Video
              </button>
            </div>
          </div>

          {/* In-Person Booking */}
          <div className="border-2 border-zinc-800 bg-zinc-950 p-5 rounded-xl flex flex-col justify-between hover:border-yellow-500 transition">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-white text-xs leading-snug">
                  {trainer.location}
                </h4>
                <span className="bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded border border-yellow-500/30 whitespace-nowrap ml-2">
                  In-Gym
                </span>
              </div>
              <p className="text-zinc-400 text-xs">Available Tomorrow</p>
            </div>

            <div className="mt-6 flex justify-between items-end">
              <span className="text-xl font-black text-white">{trainer.clinicFee}</span>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs px-4 py-2 rounded uppercase transition">
                Book Visit
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}