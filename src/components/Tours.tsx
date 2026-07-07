"use client";

import { Clock, Users, Star, CheckCircle, ArrowRight } from "lucide-react";

const tours = [
  {
    name: "Classic Pyramid Tour",
    type: "Guided Tour",
    duration: "4 hours",
    groupSize: "Up to 15",
    difficulty: "Easy",
    price: "€25",
    priceNote: "per person",
    rating: 4.8,
    reviews: 312,
    description: "The complete introduction to the Bosnian Pyramids. Walk Visočica hill, explore excavation zones, and finish with a visit to the Ravne tunnel entrance.",
    includes: ["English-speaking guide", "Tunnel entrance fee", "Panoramic hill walk", "Historical commentary"],
    highlight: true,
    badge: "Most Popular",
    badgeColor: "#C9A84C",
    image: "/images/pyramids/pyramid-sun.jpg",
  },
  {
    name: "Tunnel Deep Dive",
    type: "Archaeological Tour",
    duration: "3 hours",
    groupSize: "Up to 10",
    difficulty: "Easy",
    price: "€20",
    priceNote: "per person",
    rating: 4.9,
    reviews: 198,
    description: "A focused exploration of the Ravne underground tunnel network. Learn about the geological and archaeological context of these fascinating passages.",
    includes: ["Expert guide", "Full tunnel access", "Monolith explanations", "Water & headlamp"],
    highlight: false,
    badge: "Expert-Led",
    badgeColor: "#6aaa6a",
    image: "/images/pyramids/ravne-passage.jpg",
  },
  {
    name: "Family Adventure",
    type: "Family Tour",
    duration: "5 hours",
    groupSize: "Families",
    difficulty: "Easy",
    price: "€60",
    priceNote: "family (2+2)",
    rating: 4.7,
    reviews: 144,
    description: "Designed for families with children. Combines a fun pyramid hill walk, storytelling at the tunnels, and free time at Archaeological Park Ravne 2.",
    includes: ["Family-friendly guide", "Tunnel access", "Park Ravne 2 visit", "Kids activity pack"],
    highlight: false,
    badge: "Kid Friendly",
    badgeColor: "#4a9aca",
    image: "/images/pyramids/pyramid-hill.jpg",
  },
  {
    name: "Full Day Discovery",
    type: "Nature & Archaeology",
    duration: "8 hours",
    groupSize: "Up to 12",
    difficulty: "Moderate",
    price: "€45",
    priceNote: "per person",
    rating: 4.9,
    reviews: 87,
    description: "The most complete Visoko experience. All pyramid hills, Ravne tunnels, Ravne 2 park, Visoko old town, and a traditional Bosnian lunch included.",
    includes: ["All sites included", "Traditional lunch", "Old town walking tour", "Small group", "Transport between sites"],
    highlight: false,
    badge: "Best Value",
    badgeColor: "#a86ca8",
    image: "/images/pyramids/pyramid-from-love.jpg",
  },
];

export default function Tours() {
  return (
    <section id="tours" className="relative py-28 bg-stone-950 overflow-hidden">
      <div className="absolute top-0 inset-x-0 section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Tours</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-50 mt-3 mb-5">
            Book a Guided Tour
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Expert local guides bring the site to life. Choose the tour that fits your time and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tours.map((tour) => (
            <article
              key={tour.name}
              className={`card-premium rounded-2xl overflow-hidden flex flex-col group ${
                tour.highlight ? "ring-1 ring-gold-500/40" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${tour.image}')` }}
                />
                <div className="absolute inset-0 img-overlay" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="glass-tag">{tour.type}</span>
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${tour.badgeColor}22`, border: `1px solid ${tour.badgeColor}55`, color: tour.badgeColor }}
                  >
                    {tour.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 px-2.5 py-1.5 rounded-full">
                  <Star className="w-3 h-3 star fill-current" />
                  <span className="text-white text-xs font-semibold">{tour.rating}</span>
                  <span className="text-stone-400 text-[10px]">({tour.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-stone-50 text-xl">{tour.name}</h3>
                  <div className="text-right flex-shrink-0 ml-3">
                    <div className="font-display font-bold text-gold-400 text-2xl">{tour.price}</div>
                    <div className="text-stone-500 text-[11px]">{tour.priceNote}</div>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1.5 text-stone-400 text-xs">
                    <Clock className="w-3.5 h-3.5 text-gold-600" />{tour.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-stone-400 text-xs">
                    <Users className="w-3.5 h-3.5 text-gold-600" />{tour.groupSize}
                  </span>
                  <span className="glass-tag text-[10px]">{tour.difficulty}</span>
                </div>

                <p className="text-stone-400 text-sm leading-relaxed mb-4 flex-1">{tour.description}</p>

                {/* Includes */}
                <ul className="space-y-1.5 mb-5">
                  {tour.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-stone-300 text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="btn-gold flex items-center justify-center gap-2 py-3 rounded-xl text-sm"
                >
                  <span>Book This Tour</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-stone-500 text-sm mt-8">
          All tours depart from the Visitor Centre near the Ravne tunnel entrance.
          Private and custom tours available — contact us for details.
        </p>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
