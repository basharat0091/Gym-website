import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        
        {/* Column 1: Logo & Social Icons */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500 text-2xl font-black">🏋️</span>
            <div>
              <h3 className="font-extrabold text-lg leading-none tracking-wider">
                BASHARAT <span className="text-yellow-500">FIT</span>
              </h3>
              <p className="text-[10px] text-zinc-400 tracking-widest uppercase text-center mt-0.5">GYM & FITNESS</p>
            </div>
          </div>
          <div className="flex gap-3 text-zinc-400 mt-4">
            <a href="https://www.facebook.com/"target='_blank' className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center hover:text-yellow-500 hover:border-yellow-500 transition">f</a>
            <a href="https://www.instagram.com/accounts/login/?hl=en"target='_blank' className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center hover:text-yellow-500 hover:border-yellow-500 transition">I</a>
            <a href="https://www.youtube.com/"target='_blank' className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center hover:text-yellow-500 hover:border-yellow-500 transition">yt</a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-extrabold text-sm uppercase tracking-wider mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-xs text-zinc-400">
            <li><a href="#" className="hover:text-yellow-500 transition">Home</a></li>
            <li><a href="/fullabout" className="hover:text-yellow-500 transition">About</a></li>
            <li><a href="/fullprograms" className="hover:text-yellow-500 transition">Programs</a></li>
            <li><a href="/fulltrainers" className="hover:text-yellow-500 transition">Trainers</a></li>
            <li><a href="fullmembership" className="hover:text-yellow-500 transition">Membership</a></li>
          </ul>
        </div>

        {/* Column 3: Programs */}
        <div>
          <h4 className="font-extrabold text-sm uppercase tracking-wider mb-4">PROGRAMS</h4>
          <ul className="space-y-2 text-xs text-zinc-400">
            <li><a href="/bookingnow/1" className="hover:text-yellow-500 transition">Body Building</a></li>
            <li><a href="/bookingnow/5" className="hover:text-yellow-500 transition">Weight Loss</a></li>
            <li><a href="/bookingnow/3" className="hover:text-yellow-500 transition">Yoga</a></li>
            <li><a href="/bookingnow/4" className="hover:text-yellow-500 transition">CrossFit</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h4 className="font-extrabold text-sm uppercase tracking-wider mb-4">CONTACT US</h4>
          <ul className="space-y-3 text-xs text-zinc-400">
            <li className="flex items-start gap-2">📍 123 Fitness Street, Lahore</li>
            <li className="flex items-center gap-2">📞 +92 300 1234567</li>
            <li className="flex items-center gap-2">✉️ info@Basharatfit.com</li>
          </ul>
        </div>

        {/* Column 5: Gym Timing (Newsletter ki jagah simple text) */}
        <div>
          <h4 className="font-extrabold text-sm uppercase tracking-wider mb-4 text-yellow-500">OPENING HOURS</h4>
          <ul className="space-y-2 text-xs text-zinc-400">
            <li className="flex justify-between border-b border-zinc-800 pb-1">
              <span>Mon - Fri:</span>
              <span className="text-white">6:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-zinc-800 pb-1">
              <span>Saturday:</span>
              <span className="text-white">8:00 AM - 8:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday:</span>
              <span className="text-yellow-500">Closed</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="border-t border-zinc-900 pt-6 text-center text-xs text-zinc-600">
        © 2026 Basharat Fit Gym. All Rights Reserved.
      </div>
    </footer>
  );
}