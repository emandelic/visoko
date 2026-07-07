"use client";

import { ChevronDown, MapPin, Calendar, Users, ArrowRight, BedDouble, Map } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('/images/pyramids/pyramid-sun.jpg')",
            willChange: "transform",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        {/* Warm colour cast */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950/40 via-transparent to-stone-900/60" />
      </div>

      {/* Decorative pyramid silhouette */}
      <div className="absolute bottom-0 inset-x-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 220" className="w-full" preserveAspectRatio="none">
          <polygon points="720,0 1440,220 0,220" fill="rgba(26,22,18,0.85)" />
          <polygon points="720,30 1380,220 60,220" fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="1" />
          <polygon points="200,80 420,220 0,220" fill="rgba(26,22,18,0.5)" />
          <polygon points="1240,80 1440,220 1020,220" fill="rgba(26,22,18,0.5)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto pt-28 pb-40">

        {/* Location badge */}
        <div className="inline-flex items-center gap-2 glass-tag mb-7 animate-fade-in">
          <MapPin className="w-3 h-3" />
          <span>Visoko · Bosnia &amp; Herzegovina</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold mb-6 leading-[1.08] tracking-tight">
          <span className="block text-stone-50 text-5xl sm:text-7xl lg:text-[88px]">
            The Ancient
          </span>
          <span className="block shimmer-text text-5xl sm:text-7xl lg:text-[88px]">
            Bosnian Pyramids
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-stone-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Remarkable pyramid-shaped hills rise above the medieval town of Visoko.
          An extraordinary archaeological site that has captivated researchers
          and visitors from around the world since 2005.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#about"
            className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[15px]"
          >
            <span>Explore the Site</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#accommodation"
            className="btn-outline-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[15px] backdrop-blur-sm"
          >
            <BedDouble className="w-4 h-4" />
            <span>Book Accommodation</span>
          </a>
          <a
            href="#map"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[15px] text-stone-300 hover:text-white bg-white/8 hover:bg-white/14 border border-white/15 backdrop-blur-sm transition-all"
          >
            <Map className="w-4 h-4" />
            <span>View Map</span>
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {[
            { icon: MapPin,    value: "5",      label: "Pyramid Structures",  sub: "identified" },
            { icon: Calendar,  value: "2005",   label: "Year of Discovery",   sub: "by Dr. Osmanagić" },
            { icon: Users,     value: "200K+",  label: "Annual Visitors",     sub: "and growing" },
            { icon: ArrowRight,value: "2.4 km", label: "Tunnel Network",      sub: "Ravne tunnels" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl text-center"
              style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <stat.icon className="w-4 h-4 text-gold-400 mx-auto mb-2" />
              <div className="font-display font-bold text-xl text-white">{stat.value}</div>
              <div className="text-[11px] text-stone-300 font-medium mt-0.5">{stat.label}</div>
              <div className="text-[10px] text-stone-500">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-stone-400 hover:text-gold-400 transition-colors group"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium opacity-60 group-hover:opacity-100">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
