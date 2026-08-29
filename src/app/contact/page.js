import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans">
      
      {/* 1. Hero Banner Section */}
      <section 
        className="relative py-24 px-6 text-left border-b border-zinc-800 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">
            Get In <span className="text-yellow-500">Touch</span>
          </h1>
          <p className="text-zinc-300 text-sm md:text-base max-w-md">
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* 2. Contact Form & Info Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="bg-white text-black rounded-3xl p-8 md:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-black uppercase tracking-wider border-b border-zinc-200 pb-4">
              Contact Us
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-zinc-100 p-3 rounded-xl text-yellow-600 font-bold">📍</div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-zinc-500 tracking-wider">Address</h4>
                  <p className="text-sm font-semibold text-zinc-800">123 Fitness Street, Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-zinc-100 p-3 rounded-xl text-yellow-600 font-bold">📞</div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-zinc-500 tracking-wider">Phone</h4>
                  <p className="text-sm font-semibold text-zinc-800">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-zinc-100 p-3 rounded-xl text-yellow-600 font-bold">✉️</div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-zinc-500 tracking-wider">Email</h4>
                  <p className="text-sm font-semibold text-zinc-800">info@ironfitfit.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-zinc-100 p-3 rounded-xl text-yellow-600 font-bold">⏰</div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-zinc-500 tracking-wider">Working Hours</h4>
                  <p className="text-sm font-semibold text-zinc-800">Monday - Sunday<br />6:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us A Message Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-wider border-b border-zinc-200 pb-4">
              Send Us A Message
            </h2>

            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition"
                />
              </div>
              <div>
                <select 
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-600 focus:outline-none focus:border-yellow-500 transition"
                >
                  <option value="">Select Program</option>
                  <option value="basic">Basic Fitness</option>
                  <option value="standard">Standard Training</option>
                  <option value="premium">Premium Personal Training</option>
                  <option value="vip">VIP Elite Package</option>
                </select>
              </div>
              <div>
                <textarea 
                  rows="4" 
                  placeholder="Your Message" 
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs py-3.5 rounded-lg uppercase tracking-wider transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 3. Find Us / Map Section */}
      <section className="max-w-6xl mx-auto pb-20 px-6">
        <div className="bg-white text-black rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-black uppercase tracking-wider mb-6">
            Find Us
          </h2>
          <div className="w-full h-80 rounded-2xl overflow-hidden border border-zinc-300 bg-zinc-100">
            <iframe 
              title="Gym Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.8821952543085!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjEnMzEuNCJF!5e0!3m2!1sen!2spk!4v1620000000000!5m2!1sen!2spk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Bar */}
      <section className="bg-yellow-500 py-10 px-6 text-black">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide">
            Start Your Journey Today!
          </h3>
          <Link href="/membership">
            <button className="bg-black text-white hover:bg-zinc-800 font-extrabold text-xs px-8 py-3.5 rounded-lg uppercase tracking-wider transition">
              Join Now
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}