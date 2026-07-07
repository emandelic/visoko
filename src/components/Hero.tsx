"use client";

import { ChevronDown, MapPin, Calendar, Users } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-transparent to-stone-950" />
      </div>

      {/* Pyramid SVG shape overlay */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-10 z-10">
        <svg viewBox="0 0 800 400" className="w-full">
          <polygon
            points="400,20 750,380 50,380"
            fill="none"
            stroke="#e5a04c"
            strokeWidth="1"
          />
          <polygon
            points="400,80 700,380 100,380"
            fill="none"
            stroke="#e5a04c"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pyramid-600/20 border border-pyramid-500/30 rounded-full text-pyramid-300 text-sm mb-6">
          <MapPin className="w-3.5 h-3.5" />
          <span>Visoko, Bosnia & Herzegovina</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-white">The</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pyramid-300 via-pyramid-400 to-pyramid-600">
            Bosnian Pyramids
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Beneath the hills of Visoko lie structures that challenge everything we
          know about ancient civilizations. Discover the world&apos;s largest
          pyramid complex — hidden in plain sight for thousands of years.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#about"
            className="px-8 py-3.5 bg-pyramid-600 hover:bg-pyramid-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-pyramid-600/30 text-base"
          >
            Explore the Pyramids
          </a>
          <a
            href="#visit"
            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all text-base"
          >
            Plan Your Visit
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { icon: MapPin, value: "5", label: "Pyramid Structures" },
            { icon: Calendar, value: "12,000+", label: "Years Old" },
            { icon: Users, value: "500K+", label: "Visitors / Year" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
            >
              <stat.icon className="w-5 h-5 text-pyramid-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-stone-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-stone-400 hover:text-pyramid-400 transition-colors"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </a>
    </section>
  );
}
