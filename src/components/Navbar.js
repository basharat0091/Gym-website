import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-zinc-800 text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Updated Gym Logo */}
      <Link href="/" className="flex items-center gap-2">
        <span className="text-yellow-500 text-2xl">🏋️</span>
        <div>
          <h3 className="font-extrabold text-lg leading-none tracking-wider text-white">
            BASHARAT <span className="text-yellow-500">Fit</span>
          </h3>
          <p className="text-[10px] text-zinc-400 tracking-widest uppercase text-center mt-0.5">GYM & FITNESS</p>
        </div>
      </Link>
      
      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wide">
        <Link href="/" className="text-yellow-500 hover:text-yellow-400">Home</Link>
        <Link href="/fullabout" className="hover:text-yellow-500 transition">About</Link>
        <Link href="/fullprogram" className="hover:text-yellow-500 transition">Programs</Link>
        <Link href="/fulltrainer" className="hover:text-yellow-500 transition">Trainers</Link>
        <Link href="/fullmembership" className="hover:text-yellow-500 transition">Membership</Link>
        <Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link>
      </div>

      {/* CTA Button */}
      <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs px-5 py-2.5 rounded uppercase tracking-wider transition">
       <a href="/contact">Join Now </a> 
      </button>
    </nav>
  );
}