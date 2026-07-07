"use client";

import { FlaskConical, Radio, Layers, Microscope } from "lucide-react";

const findings = [
  {
    icon: FlaskConical,
    year: "2006",
    title: "Concrete Analysis",
    description:
      "Samples from the Pyramid of the Sun were analyzed and found to be man-made concrete — four times stronger than modern concrete, with no naturally occurring combination of the minerals found.",
    source: "University of Zenica & Harry Oldfield Analysis",
  },
  {
    icon: Radio,
    year: "2010",
    title: "Energy Beam Discovery",
    description:
      "A team of scientists detected an electromagnetic energy beam with a frequency of 28 kHz and 4.5 meter radius emitting from the top of the Pyramid of the Sun — a focused energy source.",
    source: "Dr. Slobodan Mizdrak, PhD in Physics",
  },
  {
    icon: Layers,
    year: "2012",
    title: "Underground Water Flows",
    description:
      "Seismic investigations revealed underground water streams flowing beneath the pyramids. The water is highly ionized and shows electromagnetic properties unlike natural groundwater.",
    source: "Institute for Seismology, Sarajevo",
  },
  {
    icon: Microscope,
    year: "2016",
    title: "Healing Air in Tunnels",
    description:
      "Scientists measured air quality inside the Ravne tunnels and found elevated levels of negative ions (over 43,000/cm³), extremely low electromagnetic radiation, and increased oxygen levels.",
    source: "Dr. Nabil Swelim, Egyptologist",
  },
];

const timeline = [
  { year: "2005", event: "Dr. Osmanagić announces the discovery" },
  { year: "2006", event: "First excavations begin on Pyramid of the Sun" },
  { year: "2007", event: "Archaeological Park Foundation established" },
  { year: "2008", event: "Ravne tunnel network opened to public" },
  { year: "2010", event: "Energy beam detected above pyramid apex" },
  { year: "2012", event: "International Scientific Conference held" },
  { year: "2016", event: "Healing properties of tunnels documented" },
  { year: "2024", event: "Research continues with international volunteers" },
];

export default function Research() {
  return (
    <section
      id="research"
      className="py-24 bg-stone-950 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,132,41,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220,132,41,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-pyramid-400 text-sm font-semibold tracking-widest uppercase">
            Scientific Evidence
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">
            Research & Findings
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Dozens of scientists from around the world have conducted research at
            the site, producing findings that challenge conventional archaeology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {findings.map((f) => (
            <div
              key={f.title}
              className="card-hover p-6 bg-stone-900/60 border border-stone-800 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pyramid-900/50 border border-pyramid-700/40 rounded-lg flex items-center justify-center">
                  <f.icon className="w-4.5 h-4.5 text-pyramid-400" />
                </div>
                <span className="text-xs font-bold text-pyramid-500 bg-pyramid-950/60 px-2.5 py-1 rounded-full border border-pyramid-800/40">
                  {f.year}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-3">
                {f.description}
              </p>
              <p className="text-xs text-pyramid-500/70 italic">
                Source: {f.source}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Discovery Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pyramid-600 to-transparent" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex items-center gap-6 ${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <p className="text-stone-300 text-sm">{item.event}</p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pyramid-900 border-2 border-pyramid-600 flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-pyramid-400">
                      {item.year.slice(2)}
                    </span>
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
