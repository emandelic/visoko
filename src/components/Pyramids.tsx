"use client";

import { Mountain, ArrowRight } from "lucide-react";

const pyramids = [
  {
    name: "Pyramid of the Sun",
    bosnian: "Piramida Sunca",
    height: "220m",
    color: "from-yellow-900/40 to-pyramid-900/40",
    border: "border-yellow-700/30",
    accent: "text-yellow-400",
    description:
      "The largest and most impressive pyramid, with perfect geometric sides oriented toward the cardinal points. Its base covers an area of 360,000 m² — larger than the Great Pyramid of Giza.",
    facts: ["220m tall", "Oriented N/S/E/W", "Oldest in complex"],
    image: "🌞",
  },
  {
    name: "Pyramid of the Moon",
    bosnian: "Piramida Mjeseca",
    height: "190m",
    color: "from-blue-900/40 to-stone-900/40",
    border: "border-blue-700/30",
    accent: "text-blue-300",
    description:
      "Located northwest of the Sun pyramid, this structure has three triangular sides and a flat top. Ancient paved terraces have been uncovered on its slopes.",
    facts: ["190m tall", "3 triangular sides", "Flat summit"],
    image: "🌙",
  },
  {
    name: "Pyramid of the Dragon",
    bosnian: "Piramida Zmaja",
    height: "90m",
    color: "from-red-900/40 to-stone-900/40",
    border: "border-red-700/30",
    accent: "text-red-400",
    description:
      "Smaller but equally mysterious, this pyramid stands between the Sun and Moon pyramids. Its name comes from the dragon-like silhouette it forms against the sky.",
    facts: ["90m tall", "Central position", "Unique silhouette"],
    image: "🐉",
  },
  {
    name: "Temple of Mother Earth",
    bosnian: "Hram Majke Zemlje",
    height: "213m",
    color: "from-green-900/40 to-stone-900/40",
    border: "border-green-700/30",
    accent: "text-green-400",
    description:
      "A flat-topped pyramid (step pyramid) with the longest plateau on the hilltop. Ancient stone blocks and paved areas have been discovered on its surface.",
    facts: ["213m tall", "Flat top plateau", "Step structure"],
    image: "🌍",
  },
  {
    name: "Pyramid of Love",
    bosnian: "Piramida Ljubavi",
    height: "100m",
    color: "from-pink-900/40 to-stone-900/40",
    border: "border-pink-700/30",
    accent: "text-pink-400",
    description:
      "The most recently identified structure in the complex. Its near-perfect cone shape and position within the valley complete the sacred geometric arrangement.",
    facts: ["100m tall", "Cone shape", "Newest identified"],
    image: "❤️",
  },
];

export default function Pyramids() {
  return (
    <section
      id="pyramids"
      className="py-24 bg-gradient-to-b from-stone-950 via-stone-900/50 to-stone-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pyramid-400 text-sm font-semibold tracking-widest uppercase">
            The Complex
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">
            Five Pyramid Structures
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            The Bosnian Pyramid Valley contains five interconnected pyramid
            structures, forming the world&apos;s largest and most complex
            archaeological site of its kind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pyramids.map((p, i) => (
            <div
              key={p.name}
              className={`card-hover p-6 bg-gradient-to-br ${p.color} border ${p.border} rounded-2xl flex flex-col ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="text-4xl mb-4">{p.image}</div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <p className={`text-sm ${p.accent} italic`}>{p.bosnian}</p>
                </div>
                <div className="flex items-center gap-1 bg-black/30 px-3 py-1.5 rounded-lg">
                  <Mountain className="w-3.5 h-3.5 text-stone-400" />
                  <span className={`text-sm font-bold ${p.accent}`}>
                    {p.height}
                  </span>
                </div>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.facts.map((fact) => (
                  <span
                    key={fact}
                    className="text-xs px-2.5 py-1 bg-black/30 border border-white/10 rounded-full text-stone-300"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tunnels section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-stone-900 to-pyramid-950/30 border border-pyramid-800/30 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-6xl">🕳️</div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                The Underground Tunnels (Ravne)
              </h3>
              <p className="text-stone-400 leading-relaxed">
                Beneath the pyramids lies an extensive network of tunnels called
                Ravne. Stretching over 2.4 km, these ancient passageways contain
                mysterious stone monoliths with inscriptions, healing ionized air,
                and elevated levels of negative ions proven to have health benefits.
              </p>
            </div>
            <a
              href="#visit"
              className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-pyramid-600 hover:bg-pyramid-500 text-white font-medium rounded-xl transition-colors"
            >
              Explore Tunnels
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
