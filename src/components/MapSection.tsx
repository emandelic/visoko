"use client";

import { MapPin, ExternalLink } from "lucide-react";

const markers = [
  { name: "Pyramid of the Sun (Visočica)",   lat: 43.9930, lng: 18.1740, color: "#E8C97A", desc: "The main pyramid-shaped hill, 220m tall" },
  { name: "Pyramid of the Moon",              lat: 43.9960, lng: 18.1690, color: "#B8C8E8", desc: "Second largest pyramid-shaped hill" },
  { name: "Pyramid of the Dragon",            lat: 43.9950, lng: 18.1760, color: "#C8A880", desc: "Located between Sun and Moon hills" },
  { name: "Temple of Mother Earth",           lat: 43.9900, lng: 18.1800, color: "#A8C8A0", desc: "Flat-topped pyramid-shaped hill" },
  { name: "Pyramid of Love",                  lat: 43.9920, lng: 18.1720, color: "#D8A8B8", desc: "Cone-shaped hill" },
  { name: "Ravne Tunnel Entrance",            lat: 44.0020, lng: 18.1760, color: "#F0A060", desc: "Main entrance to the tunnel network" },
  { name: "Archaeological Park Ravne 2",      lat: 44.0030, lng: 18.1780, color: "#80C8A0", desc: "Outdoor park with walking trails" },
  { name: "Visitor Centre",                   lat: 44.0010, lng: 18.1770, color: "#A8A8D0", desc: "Tickets, information, guided tours" },
];

export default function MapSection() {
  return (
    <section id="map" className="relative py-28 bg-stone-900 overflow-hidden">
      <div className="absolute top-0 inset-x-0 section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">Interactive Map</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-50 mt-3 mb-5">
            Find the Pyramids
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            All pyramid sites, tunnels, and visitor facilities are located within a 2 km radius in Visoko.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map embed */}
          <div className="lg:col-span-2 map-container rounded-2xl overflow-hidden border border-stone-700/40"
               style={{ minHeight: "460px" }}>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.155%2C43.982%2C18.198%2C44.010&layer=mapnik&marker=43.9951%2C18.1787"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "460px", display: "block" }}
              loading="lazy"
              title="Bosnian Pyramids location map — Visoko"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Location cards */}
          <div className="flex flex-col gap-3 overflow-y-auto max-h-[460px] pr-1" style={{ scrollbarWidth: "thin" }}>
            {markers.map((m) => (
              <div key={m.name} className="card-premium rounded-xl p-4 flex items-start gap-3">
                <div className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                     style={{ background: `${m.color}22`, border: `1px solid ${m.color}55` }}>
                  <MapPin className="w-3.5 h-3.5" style={{ color: m.color }} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-stone-100 text-sm font-semibold leading-tight">{m.name}</h4>
                  <p className="text-stone-500 text-xs mt-0.5">{m.desc}</p>
                </div>
              </div>
            ))}

            {/* Open in Google Maps button */}
            <a
              href="https://maps.google.com/?q=Bosnian+Pyramid+Sun+Visoko+Bosnia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2 py-3 rounded-xl text-sm mt-1"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Getting there */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "✈️", title: "By Air", desc: "Sarajevo International Airport (SJJ) is 30 km away. Taxis and shuttles available." },
            { icon: "🚗", title: "By Car",  desc: "30 min from Sarajevo via the M17 road. Free parking near Ravne tunnel entrance. GPS: 44.0020° N, 18.1760° E" },
            { icon: "🚌", title: "By Bus",  desc: "Regular buses from Sarajevo Bus Station every 30–60 minutes. Journey ~40 min. Cost ~€3." },
          ].map((item) => (
            <div key={item.title} className="card-premium rounded-xl p-5 flex gap-4 items-start">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-stone-100 text-sm mb-1">{item.title}</h4>
                <p className="text-stone-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
