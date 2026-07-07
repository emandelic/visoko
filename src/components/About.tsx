"use client";

import { BookOpen, Zap, Globe, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Ancient Discovery",
    description:
      "In 2005, Dr. Semir Osmanagić announced the discovery of pyramid-shaped hills in Visoko. Since then, thousands of researchers and volunteers have excavated the site.",
  },
  {
    icon: Zap,
    title: "Energy Phenomena",
    description:
      "Instruments have recorded unusual electromagnetic and ultrasonic phenomena above the pyramids, including an energy beam rising from the Pyramid of the Sun.",
  },
  {
    icon: Globe,
    title: "World's Largest",
    description:
      "The Pyramid of the Sun stands 220 meters tall — 22% taller than Egypt's Great Pyramid of Giza — making it the world's largest pyramid by volume.",
  },
  {
    icon: Award,
    title: "Ongoing Research",
    description:
      "The Archaeological Park Foundation continues to organize international volunteer programs and scientific conferences each summer in Visoko.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pyramid-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-pyramid-400 text-sm font-semibold tracking-widest uppercase">
            The Discovery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">
            A Mystery Hidden for Millennia
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            The valley of Visoko holds secrets that may rewrite our understanding
            of ancient history and human civilization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-hover p-6 bg-stone-900/60 border border-stone-800 rounded-2xl flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-pyramid-900/50 border border-pyramid-700/40 rounded-xl flex items-center justify-center">
                <f.icon className="w-5 h-5 text-pyramid-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-br from-pyramid-950/60 to-stone-900/60 border border-pyramid-800/30 rounded-2xl">
          <p className="text-xl text-stone-300 italic leading-relaxed mb-4">
            &ldquo;The Bosnian Pyramid of the Sun is the largest pyramid on the
            planet, and the tunnels beneath it represent a unique underground
            world that has no equal in the world.&rdquo;
          </p>
          <p className="text-pyramid-400 font-semibold text-sm">
            — Dr. Semir Osmanagić, Archaeologist & Author
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
