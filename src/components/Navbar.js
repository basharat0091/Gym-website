"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-zinc-800 text-white px-4 md:px-8 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-yellow-500 text-2xl">🏋️</span>
          <div>
            <h3 className="font-extrabold text-lg leading-none tracking-wider text-white">
              BASHARAT <span className="text-yellow-500">Fit</span>
            </h3>
            <p className="text-[10px] text-zinc-400 tracking-widest uppercase text-center mt-0.5">GYM & FITNESS</p>
          </div>
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wide">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">Home</Link>
          <Link href="/fullabout" className="hover:text-yellow-500 transition">About</Link>
          <Link href="/fullprogram" className="hover:text-yellow-500 transition">Programs</Link>
          <Link href="/fulltrainer" className="hover:text-yellow-500 transition">Trainers</Link>
          <Link href="/fullmembership" className="hover:text-yellow-500 transition">Membership</Link>
          <Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link>
        </div>

        {/* Right Side Actions (Join Button + Hamburger) for Mobile & Desktop */}
        <div className="flex items-center gap-3">
          {/* Join Now Button */}
          <Link 
            href="/contact" 
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-[10px] md:text-xs px-3.5 md:px-5 py-2 md:py-2.5 rounded uppercase tracking-wider transition inline-block text-center"
          >
            Join Now
          </Link>

          {/* Hamburger / Close Button Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-yellow-500 text-2xl cursor-pointer p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown (Har link par click karne se setIsOpen(false) chalega aur menu band ho jayega) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-zinc-800 px-6 py-5 flex flex-col gap-4 text-sm font-semibold uppercase tracking-wide md:hidden shadow-xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-yellow-500 hover:text-yellow-400">Home</Link>
          <Link href="/fullabout" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition">About</Link>
          <Link href="/fullprogram" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition">Programs</Link>
          <Link href="/fulltrainer" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition">Trainers</Link>
          <Link href="/fullmembership" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition">Membership</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}