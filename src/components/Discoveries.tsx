"use client";

import { User, Calendar, Mountain, Layers, AlertCircle } from "lucide-react";

const timeline = [
  {
    year: "2005",
    title: "The Announcement",
    body: "Bosnian-American author and researcher Dr. Semir Osmanagić announces that the hills around Visoko are man-made pyramids, sparking global media attention and scientific debate.",
    icon: User,
    type: "event",
  },
  {
    year: "2006",
    title: "Excavations Begin",
    body: "The first excavations on Visočica hill begin, uncovering large stone slabs and what appear to be paved surfaces. The Archaeological Park: Bosnian Pyramid of the Sun Foundation is established.",
    icon: Mountain,
    type: "event",
  },
  {
    year: "2007–2008",
    title: "Ravne Tunnel Network Discovered",
    body: "An extensive network of ancient underground tunnels called Ravne is found beneath the valley. Portions are cleared and opened to the public, extending over 2.4 km of accessible passages.",
    icon: Layers,
    type: "discovery",
  },
  {
    year: "2010",
    title: "International Conferences",
    body: "The Foundation hosts the first international scientific conference on the Bosnian Pyramids, attracting researchers from various countries. Annual volunteer programs begin attracting participants worldwide.",
    icon: Calendar,
    type: "event",
  },
  {
    year: "2013",
    title: "UNESCO Context",
    body: "The medieval royal city of Visoki (located on Visočica hill) has documented historical significance as the seat of the Bosnian Kingdom in the 14th–15th centuries, predating the pyramid claims.",
    icon: AlertCircle,
    type: "historical",
  },
  {
    year: "2016–present",
    title: "Ongoing Research",
    body: "Excavations continue each summer. The park reports ongoing analysis of tunnel materials and stone slabs. Mainstream archaeologists continue to dispute the pyramid interpretation of the formations.",
    icon: Mountain,
    type: "ongoing",
  },
];

const pyramids = [
  { name: "Pyramid of the Sun", bosnian: "Piramida Sunca", height: "~220m", color: "#E8C97A", note: "The largest hill, pyramid-shaped from multiple angles" },
  { name: "Pyramid of the Moon", bosnian: "Piramida Mjeseca", height: "~190m", color: "#B8C8E8", note: "Three triangular faces visible from the valley" },
  { name: "Pyramid of the Dragon", bosnian: "Piramida Zmaja", height: "~90m",  color: "#C8A880", note: "Between the Sun and Moon pyramids" },
  { name: "Temple of Mother Earth", bosnian: "Hram Majke Zemlje", height: "~213m", color: "#A8C8A0", note: "Flat-topped; step-pyramid shape" },
  { name: "Pyramid of Love", bosnian: "Piramida Ljubavi", height: "~100m", color: "#D8A8B8", note: "Cone-shaped hill, newest identified" },
];

const typeStyle: Record<string, string> = {
  event:      "border-gold-600/40 bg-gold-950/30",
  discovery:  "border-blue-600/30 bg-blue-950/20",
  historical: "border-green-600/30 bg-green-950/20",
  ongoing:    "border-stone-600/40 bg-stone-800/30",
};

export default function Discoveries() {
  return (
    <section id="discoveries" className="relative py-28 bg-stone-950 overflow-hidden">
      <div className="absolute top-0 inset-x-0 section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-label">Discoveries</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-50 mt-3 mb-5">
            History of the Site
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            From the initial announcement to ongoing excavations — a timeline of key events
            at the Bosnian Pyramid archaeological park.
          </p>

          {/* Disclaimer */}
          <div className="mt-6 max-w-2xl mx-auto flex items-start gap-3 p-4 rounded-xl text-left"
               style={{ background: "rgba(234,179,8,0.06)", border: "1px solid rgba(234,179,8,0.2)" }}>
            <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
            <p className="text-yellow-200/70 text-xs leading-relaxed">
              <strong className="text-yellow-200/90">Note:</strong> The pyramid hypothesis is not accepted by mainstream archaeology.
              The hills are considered natural formations by most geologists and archaeologists.
              The site remains a popular tourist destination regardless of the scientific debate.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto mb-24">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line hidden sm:block" />

          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="relative sm:pl-20">
                {/* Icon circle */}
                <div className="hidden sm:flex absolute left-0 w-12 h-12 rounded-full items-center justify-center flex-shrink-0 z-10"
                     style={{ background: "rgba(42,33,24,1)", border: "2px solid rgba(201,168,76,0.4)" }}>
                  <item.icon className="w-4.5 h-4.5 text-gold-400" />
                </div>

                <div className={`card-premium rounded-2xl p-5 border ${typeStyle[item.type]}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="glass-tag">{item.year}</span>
                    <h3 className="font-display font-semibold text-stone-100 text-base">{item.title}</h3>
                  </div>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 5 pyramids */}
        <div>
          <div className="text-center mb-10">
            <span className="section-label">The Five Structures</span>
            <h3 className="font-display text-3xl font-bold text-stone-50 mt-3">
              Identified Pyramid-Shaped Hills
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {pyramids.map((p) => (
              <div key={p.name} className="card-premium rounded-2xl p-5 text-center">
                {/* Mini pyramid SVG */}
                <div className="w-16 h-12 mx-auto mb-3">
                  <svg viewBox="0 0 64 48" fill="none" className="w-full h-full">
                    <polygon points="32,4 60,44 4,44" fill={p.color} fillOpacity="0.2" stroke={p.color} strokeWidth="1.5" />
                    <polygon points="32,4 60,44 32,44" fill={p.color} fillOpacity="0.08" />
                  </svg>
                </div>
                <div className="text-xs font-bold mb-1" style={{ color: p.color }}>{p.height}</div>
                <h4 className="font-display font-semibold text-stone-100 text-sm mb-1">{p.name}</h4>
                <p className="text-stone-500 text-[11px] italic mb-2">{p.bosnian}</p>
                <p className="text-stone-400 text-[11px] leading-relaxed">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
