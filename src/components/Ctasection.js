import Link from "next/link";

export default function CtaSection() {
  return (
    <div className="bg-black py-10 px-6">
      <div className="max-w-6xl mx-auto bg-yellow-500 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        {/* Left Text Side */}
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-black uppercase tracking-wide">
            READY TO START YOUR FITNESS JOURNEY?
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-zinc-800 mt-1">
            Don't wait for tomorrow, Start today!
          </p>
        </div>

        {/* Right Button Side */}
       <Link href='/contact'>
        <button className="border-2 border-black text-black font-extrabold text-xs px-6 py-2.5 rounded uppercase hover:bg-black hover:text-yellow-500 transition duration-300">
          JOIN NOW
        </button>
        </Link>

      </div>
    </div>
  );
}
