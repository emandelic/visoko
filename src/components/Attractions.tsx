"use client";

import { MapPin, Clock, ArrowUpRight } from "lucide-react";

const attractions = [
  {
    name: "Ravne Tunnel Complex",
    category: "Archaeological",
    distance: "On-site",
    duration: "1–2 hrs",
    description: "Walk through 2.4 km of ancient underground passages. The air inside is notably ionized and cool. Monolith stones with carved symbols line the tunnels.",
    image: "/images/pyramids/ravne-tunnel-k2.jpg",
    mapUrl: "https://maps.google.com/?q=Ravne+Tunnel+Visoko",
    tag: "Must See",
    tagColor: "#C9A84C",
  },
  {
    name: "Archaeological Park Ravne 2",
    category: "Park",
    distance: "0.5 km",
    duration: "1–3 hrs",
    description: "A beautifully landscaped outdoor park near the tunnel entrance. Features walking paths, energy spots, meditation zones, and stone labyrinths.",
    image: "/images/pyramids/ravne-interior.jpg",
    mapUrl: "https://maps.google.com/?q=Ravne+2+Park+Visoko",
    tag: "Family Friendly",
    tagColor: "#6aaa6a",
  },
  {
    name: "Visočica Hill (Pyramid of the Sun)",
    category: "Hiking",
    distance: "1 km",
    duration: "2–4 hrs",
    description: "Hike to the top of Visočica hill for panoramic views of the Bosna River valley. Medieval ruins of the royal Bosnian city of Visoki crown the summit.",
    image: "/images/pyramids/pyramid-sun.jpg",
    mapUrl: "https://maps.google.com/?q=Visocica+Hill+Visoko",
    tag: "Panoramic Views",
    tagColor: "#4a9aca",
  },
  {
    name: "Visoko Old Town",
    category: "Culture",
    distance: "2 km",
    duration: "1–2 hrs",
    description: "Explore the charming old town with its Ottoman-era architecture, artisan shops, local markets, traditional restaurants, and the historic White Mosque (Bijela Džamija).",
    image: "/images/pyramids/visoko-town.jpg",
    mapUrl: "https://maps.google.com/?q=Visoko+Old+Town",
    tag: "Cultural Heritage",
    tagColor: "#a86ca8",
  },
  {
    name: "Stećci — Medieval Tombstones",
    category: "History",
    distance: "Various",
    duration: "30–60 min",
    description: "UNESCO-listed medieval Bosnian tombstones found across the Visoko area. These monolithic carved stones are among the most remarkable medieval monuments in Europe.",
    image: "/images/pyramids/pyramid-stones.jpg",
    mapUrl: "https://maps.google.com/?q=Stecci+Visoko",
    tag: "UNESCO",
    tagColor: "#ca8a2a",
  },
  {
    name: "Bosna River Valley Walks",
    category: "Nature",
    distance: "From town",
    duration: "1–3 hrs",
    description: "Enjoy scenic walks along the Bosna River and through green meadows surrounding Visoko. The valley offers beautiful views of the pyramid-shaped hills from multiple vantage points.",
    image: "/images/pyramids/pyramid-from-love.jpg",
    mapUrl: "https://maps.google.com/?q=Visoko+Bosnia",
    tag: "Nature Walk",
    tagColor: "#5aaa5a",
  },
];

export default function Attractions() {
  return (
    <section id="attractions" className="relative py-28 bg-stone-900 overflow-hidden">
      <div className="absolute top-0 inset-x-0 section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Explore</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-50 mt-3 mb-5">
            Attractions &amp; Activities
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Beyond the pyramids, Visoko offers a rich variety of experiences for every type of traveller.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((a) => (
            <article key={a.name} className="card-premium rounded-2xl overflow-hidden group">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${a.image}')` }}
                />
                <div className="absolute inset-0 img-overlay" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="glass-tag">{a.category}</span>
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${a.tagColor}22`, border: `1px solid ${a.tagColor}55`, color: a.tagColor }}
                  >
                    {a.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-semibold text-stone-100 text-base">{a.name}</h3>
                  <a
                    href={a.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-500 hover:text-gold-400 transition-colors"
                    aria-label={`Open ${a.name} in Maps`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center gap-1 text-stone-500 text-xs">
                    <MapPin className="w-3 h-3" />{a.distance}
                  </span>
                  <span className="text-stone-700">·</span>
                  <span className="flex items-center gap-1 text-stone-500 text-xs">
                    <Clock className="w-3 h-3" />{a.duration}
                  </span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed">{a.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
