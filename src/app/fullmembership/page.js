import React from "react";
import Link from "next/link";

export default function MembershipSection() {
  const plans = [
    {
      id: "basic",
      name: "BASIC",
      price: "$29",
      period: "/month",
      features: ["Gym Access", "Basic Equipment", "Locker Room"],
    },
    {
      id: "standard",
      name: "STANDARD",
      price: "$49",
      period: "/month",
      features: ["Gym Access", "All Equipment", "Group Classes", "Diet Plan"],
    },
    {
      id: "premium",
      name: "PREMIUM",
      price: "$79",
      period: "/month",
      features: ["Gym Access", "All Equipment", "Group Classes", "Personal Trainer", "Diet Plan"],
    },
    {
      id: "vip",
      name: "VIP",
      price: "$129",
      period: "/month",
      features: ["Gym Access", "All Equipment", "All Classes", "Personal Trainer", "Diet Plan", "Sauna", "Locker"],
    },
  ];

  const faqs = [
    { question: "Can I cancel my membership anytime?", answer: "Yes, you can cancel your membership at any time with no extra cancellation fees." },
    { question: "Do you provide personal training?", answer: "Yes! Standard, Premium, and VIP plans include personalized training sessions." },
    { question: "Is diet planning included?", answer: "Custom diet and nutrition plans start from the Standard membership tier onwards." },
    { question: "Do you have group classes?", answer: "We offer HIIT, CrossFit, Yoga, and Spinning group fitness classes." },
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section 
        className="relative py-24 px-6 text-left border-b border-zinc-800 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">
            Choose Your <br />
            <span className="text-yellow-500">Membership</span>
          </h1>
          <p className="text-zinc-300 text-sm md:text-base max-w-md">
            Select the plan that fits your goals.
          </p>
        </div>
      </section>

      {/* 2. Pricing Plans */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 pt-8 text-center flex flex-col justify-between hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              {/* Top Card Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-800 group-hover:bg-yellow-500 group-hover:text-black text-zinc-300 font-extrabold text-xs px-4 py-1 rounded-full uppercase transition duration-300 shadow-md">
                {plan.name}
              </div>

              <div>
                <div className="text-center mb-6 mt-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-xs text-zinc-400 font-bold">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 border-t border-zinc-800 pt-6 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs font-semibold text-zinc-300">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs py-3 rounded-lg uppercase tracking-wider transition">
                  Join Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-black uppercase text-center tracking-wider mb-8 text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-zinc-900 text-white rounded-lg border border-zinc-800 overflow-hidden shadow-sm group hover:border-yellow-500 transition-colors"
            >
              <summary className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-xs md:text-sm uppercase tracking-wide cursor-pointer select-none list-none">
                <span>{faq.question}</span>
                <span className="text-lg font-black group-open:rotate-45 transition-transform text-yellow-500">+</span>
              </summary>
              <div className="px-6 pb-4 text-xs md:text-sm text-zinc-400 border-t border-zinc-800 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="bg-yellow-500 py-10 px-6 text-black mt-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide">
            Start Your Journey Today!
          </h3>
          <Link href="/contact">
            <button className="bg-black text-white hover:bg-zinc-800 font-extrabold text-xs px-8 py-3.5 rounded-lg uppercase tracking-wider transition">
              Join Now
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}