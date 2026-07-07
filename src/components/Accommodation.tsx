"use client";

import { useState } from "react";
import { Star, MapPin, Wifi, Car, Coffee, UtensilsCrossed, ExternalLink, Waves, Trees } from "lucide-react";

/*
 * LEGAL NOTE:
 * All Booking.com links are outbound affiliate-style links only.
 * No Booking.com images are copied or hosted here.
 * Images used are royalty-free from Wikimedia Commons (CC / Public Domain).
 * Do not scrape Booking.com. Do not copy their proprietary images.
 */

type AccomType = "All" | "Hotels" | "Apartments" | "Guest Houses";
type SortType  = "default" | "closest" | "best-rated";

interface Accom {
  name: string;
  type: Exclude<AccomType, "All">;
  rating: number;
  ratingLabel: string;
  reviewCount: number;
  distanceKm: number;
  distanceLabel: string;
  address: string;
  description: string;
  amenities: string[];
  priceRange: string;
  bookingUrl: string;
  photos: [string, string, string, string];
  badge?: string;
  badgeColor?: string;
}

const accommodations: Accom[] = [
  {
    name: "Apartments Pyramid of the Sun",
    type: "Apartments",
    rating: 9.6,
    ratingLabel: "Exceptional",
    reviewCount: 9,
    distanceKm: 0.3,
    distanceLabel: "0.3 km from Pyramid of the Sun",
    address: "Grad, 71300 Visoko",
    description: "Apartments right next to the Pyramid of the Sun. Private bathrooms, balconies with mountain or city views, garden and terrace. Free WiFi. Exceptional location rated 9.5/10.",
    amenities: ["Free WiFi", "Balcony", "Garden", "Terrace", "Mountain view"],
    priceRange: "€30–€55 / night",
    bookingUrl: "https://www.booking.com/hotel/ba/rooms-pyramid-of-sun.html",
    photos: ["/images/pyramids/pyramid-sun.jpg", "/images/pyramids/pyramid-hill.jpg", "/images/pyramids/ravne-tunnel-k2.jpg", "/images/pyramids/visoko-town.jpg"],
    badge: "Exceptional 9.6",
    badgeColor: "#4a9aca",
  },
  {
    name: "AA – LUX Residence, Pyramid View",
    type: "Apartments",
    rating: 9.2,
    ratingLabel: "Exceptional",
    reviewCount: 21,
    distanceKm: 0.4,
    distanceLabel: "Very near the Pyramids",
    address: "71300 Visoko",
    description: "Luxury apartment with direct pyramid views and free private parking. Spacious terrace, free WiFi throughout. One of the highest-rated stays near the Bosnian Pyramids.",
    amenities: ["Free WiFi", "Terrace", "Parking", "Pyramid view", "Air conditioning"],
    priceRange: "€40–€75 / night",
    bookingUrl: "https://www.booking.com/hotel/ba/vi-apartments-bih-visoko.html",
    photos: ["/images/pyramids/pyramid-from-love.jpg", "/images/pyramids/pyramid-sun.jpg", "/images/pyramids/pyramid-stones.jpg", "/images/pyramids/pyramid-hill.jpg"],
    badge: "Pyramid View",
    badgeColor: "#C9A84C",
  },
  {
    name: "Luxury Pyramid Apartment Visoko",
    type: "Apartments",
    rating: 9.4,
    ratingLabel: "Exceptional",
    reviewCount: 15,
    distanceKm: 0.5,
    distanceLabel: "Walking distance to pyramids",
    address: "Donna Zimca, 71300 Visoko",
    description: "Spacious luxury apartment near the pyramid complex. Supermarket and restaurants downstairs. Host provides guided info on all pyramid sites, tunnels, and Visoko attractions.",
    amenities: ["Free WiFi", "Parking", "Air conditioning", "Kitchen", "Supermarket nearby"],
    priceRange: "€40–€70 / night",
    bookingUrl: "https://www.booking.com/hotel/ba/luxury-pyramid-apartments-visoko.html",
    photos: ["/images/pyramids/pyramid-hill.jpg", "/images/pyramids/ravne-interior.jpg", "/images/pyramids/pyramid-from-love.jpg", "/images/pyramids/visoko-town.jpg"],
    badge: "Exceptional 9.4",
    badgeColor: "#4a9aca",
  },
  {
    name: "Pyramid Villa — Garden & Fireplace",
    type: "Apartments",
    rating: 8.8,
    ratingLabel: "Fabulous",
    reviewCount: 12,
    distanceKm: 1.0,
    distanceLabel: "1 km from Pyramid of the Sun",
    address: "71300 Visoko",
    description: "Charming villa with 2 bedrooms, outdoor fireplace, private pool, and mountain views. Free private parking, terrace, 24-hour front desk. Sarajevo Airport 34 km away.",
    amenities: ["Free WiFi", "Private pool", "Fireplace", "Parking", "Mountain view"],
    priceRange: "€50–€90 / night",
    bookingUrl: "https://www.booking.com/hotel/ba/pyramid.html",
    photos: ["/images/pyramids/pyramid-stones.jpg", "/images/pyramids/ravne-passage.jpg", "/images/pyramids/pyramid-sun.jpg", "/images/pyramids/pyramid-from-love.jpg"],
    badge: "Private Pool",
    badgeColor: "#a86ca8",
  },
];

const amenityIcons: Record<string, React.ElementType> = {
  "Free WiFi":     Wifi,
  "Parking":       Car,
  "Parking (garage)": Car,
  "Private parking": Car,
  "Kitchen":       UtensilsCrossed,
  "Restaurant":    Coffee,
  "Bar":           Coffee,
  "Breakfast":     Coffee,
  "Hot tub":       Waves,
  "Garden":        Trees,
  "Terrace":       Trees,
};

const filterTabs: { id: AccomType | SortType; label: string }[] = [
  { id: "All",        label: "All Apartments" },
  { id: "closest",    label: "Closest to Pyramids" },
  { id: "best-rated", label: "Best Rated" },
];

function RatingBadge({ score, label }: { score: number; label: string }) {
  const color = score >= 9 ? "#4a9aca" : score >= 8.5 ? "#6aaa6a" : "#C9A84C";
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-sm font-bold px-2 py-0.5 rounded-lg text-white"
            style={{ background: color }}>{score.toFixed(1)}</span>
      <span className="text-stone-400 text-xs">{label}</span>
    </div>
  );
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3 h-3 text-gold-400 fill-gold-400" />
      ))}
    </div>
  );
}

export default function Accommodation() {
  const [active, setActive] = useState<AccomType | SortType>("All");

  const filtered = (() => {
    let list = [...accommodations];
    if (active === "Hotels" || active === "Apartments" || active === "Guest Houses") {
      list = list.filter((a) => a.type === active);
    }
    if (active === "closest")    list = [...list].sort((a, b) => a.distanceKm - b.distanceKm);
    if (active === "best-rated") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  })();

  return (
    <section id="accommodation" className="relative py-28 bg-stone-950 overflow-hidden">
      <div className="absolute top-0 inset-x-0 section-divider" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">Where to Stay</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-50 mt-3 mb-5">
            Book Your Stay in Visoko
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Handpicked hotels, apartments, and guest houses near the Bosnian Pyramids.
            All properties link directly to{" "}
            <span className="text-gold-400 font-medium">Booking.com</span> for secure reservations.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id as AccomType | SortType)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                active === f.id ? "btn-gold" : "btn-outline-gold"
              }`}
            >
              {active === f.id ? <span>{f.label}</span> : f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((a) => (
            <article
              key={a.name}
              className="card-premium rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* 2×2 photo collage — each photo links to Booking.com */}
              <a
                href={a.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden"
                style={{ aspectRatio: "16/10" }}
                aria-label={`View ${a.name} on Booking.com`}
              >
                <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-0.5">
                  {a.photos.map((src, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden bg-stone-800 transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url('${src}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                    />
                  ))}
                </div>

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/20 transition-all duration-300 pointer-events-none" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
                  {a.badge && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                          style={{ background: `${a.badgeColor}28`, border: `1px solid ${a.badgeColor}60`, color: a.badgeColor, backdropFilter: "blur(8px)" }}>
                      {a.badge}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="absolute bottom-3 right-3 pointer-events-none">
                  <span className="text-xs font-semibold px-2.5 py-1.5 rounded-full"
                        style={{ background: "rgba(201,168,76,0.22)", border: "1px solid rgba(201,168,76,0.45)", color: "#E8C97A", backdropFilter: "blur(8px)" }}>
                    {a.priceRange}
                  </span>
                </div>

                {/* "See photos" hint */}
                <div className="absolute top-3 right-3 pointer-events-none">
                  <span className="text-[10px] font-medium px-2 py-1 rounded-lg flex items-center gap-1"
                        style={{ background: "rgba(0,0,0,0.55)", color: "#d1ccc5", backdropFilter: "blur(8px)" }}>
                    <ExternalLink className="w-2.5 h-2.5" /> Booking.com
                  </span>
                </div>
              </a>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-stone-100 text-base leading-snug">{a.name}</h3>
                  <RatingBadge score={a.rating} label={a.ratingLabel} />
                </div>

                <div className="flex items-center gap-3 mb-1">
                  <StarRow count={a.rating >= 9 ? 5 : a.rating >= 8.5 ? 4 : 3} />
                  <span className="text-stone-600 text-xs">({a.reviewCount} reviews)</span>
                </div>

                <div className="flex items-center gap-1.5 text-stone-500 text-xs mb-3">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span>{a.distanceLabel} · {a.address}</span>
                </div>

                <p className="text-stone-400 text-sm leading-relaxed mb-4 flex-1">{a.description}</p>

                {/* Amenity chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {a.amenities.slice(0, 5).map((am) => {
                    const Icon = amenityIcons[am];
                    return (
                      <span key={am}
                            className="flex items-center gap-1 text-[11px] text-stone-400 px-2 py-1 rounded-lg"
                            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        {Icon && <Icon className="w-3 h-3" />}
                        {am}
                      </span>
                    );
                  })}
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={a.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#d1ccc5" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                  >
                    <ExternalLink className="w-3 h-3" />
                    View on Booking.com
                  </a>
                  <a
                    href={a.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold"
                  >
                    <span>Reserve Now</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl"
             style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-stone-500 text-sm text-center sm:text-left">
            💡 <strong className="text-stone-400">Book early</strong> — June–September is peak season in Visoko.
            All bookings go directly to Booking.com for secure payment.
          </p>
          <a
            href="https://www.booking.com/searchresults.html?ss=Visoko%2C+Bosnia+and+Herzegovina&checkin=&checkout=&group_adults=2&no_rooms=1&group_children=0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm flex-shrink-0"
          >
            <span>See All on Booking.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
