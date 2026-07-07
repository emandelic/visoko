"use client";

import { MapPin, Mountain, Users, FlaskConical, Info, Globe } from "lucide-react";

const facts = [
  {
    icon: MapPin,
    title: "Location",
    body: "The Bosnian Pyramid site is located in and around Visoko, a town in central Bosnia and Herzegovina, approximately 30 km north-west of Sarajevo, in the Bosna River valley.",
  },
  {
    icon: Mountain,
    title: "What Are They?",
    body: "Visoko is surrounded by unusually geometric hills — most notably Visočica hill — that some researchers describe as having pyramid-like shapes with triangular faces oriented toward cardinal points.",
  },
  {
    icon: FlaskConical,
    title: "The Research Project",
    body: "Since 2005, the Archaeological Park: Bosnian Pyramid of the Sun Foundation has led excavations, uncovering stone slabs, paved terraces, and an extensive underground tunnel network called Ravne.",
  },
  {
    icon: Users,
    title: "International Interest",
    body: "The site attracts hundreds of thousands of visitors annually and has inspired international volunteer programs. Summer camps bring participants from dozens of countries to assist with excavations.",
  },
  {
    icon: Info,
    title: "Scientific Debate",
    body: "Mainstream archaeology regards the hills as natural geological formations shaped by tectonic forces. The pyramid hypothesis remains contested. Visitors can explore the site and form their own view.",
  },
  {
    icon: Globe,
    title: "Archaeological Park",
    body: "Regardless of the debate, the area contains genuine pre-medieval artefacts, medieval Bosnian tombstones (stećci), and a remarkable tunnel system open to the public year-round.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-stone-900 overflow-hidden">
      <div className="absolute top-0 inset-x-0 section-divider" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">About the Site</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-50 mt-3 mb-5">
            The Bosnian Pyramid Complex
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A remarkable archaeological destination in the heart of Bosnia — where ancient
            history, ongoing research, and stunning landscapes meet.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {facts.map((f) => (
            <article key={f.title} className="card-premium rounded-2xl p-6 flex gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                   style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
                <f.icon className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-stone-100 text-base mb-2">{f.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{f.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Two-column feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden aspect-video relative">
            <div className="absolute inset-0 bg-cover bg-center"
                 style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bosnian_Pyramids_Ravne_Tunnels.JPG/1280px-Bosnian_Pyramids_Ravne_Tunnels.JPG')" }} />
            <div className="absolute inset-0 img-overlay" />
            <div className="absolute bottom-4 left-4">
              <span className="glass-tag">Excavation site, Visočica Hill</span>
            </div>
          </div>

          <div className="space-y-5">
            <span className="section-label">Why Visit?</span>
            <h3 className="font-display text-3xl font-bold text-stone-50">
              A Unique Destination<br />Unlike Any Other
            </h3>
            <p className="text-stone-400 leading-relaxed">
              Whether you are a history enthusiast, a curious traveller, or a researcher, Visoko offers a
              one-of-a-kind experience. Walk the paved terraces of Visočica hill, explore the ancient
              Ravne tunnel network, and enjoy the beautiful Bosnian countryside.
            </p>
            <ul className="space-y-3">
              {[
                "Explore 2.4 km of accessible underground tunnels",
                "Visit ongoing archaeological excavation zones",
                "Enjoy panoramic views of the Bosna Valley",
                "Discover medieval Bosnian history and culture",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone-300 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#tours"
               className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm mt-2">
              <span>See Tour Options</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
