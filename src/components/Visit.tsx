"use client";

import { Clock, MapPin, Car, Train, Plane, Euro, Sun, Ticket } from "lucide-react";

const tourOptions = [
  {
    name: "Self-Guided Visit",
    price: "€5",
    duration: "3-5 hours",
    includes: ["Pyramid trails access", "Ravne tunnel entrance", "Info boards"],
    color: "border-stone-700",
    badge: "Budget",
    badgeColor: "bg-stone-700",
  },
  {
    name: "Guided Tour",
    price: "€25",
    duration: "4-6 hours",
    includes: [
      "Expert English guide",
      "All pyramid sites",
      "Ravne tunnels",
      "Q&A session",
    ],
    color: "border-pyramid-600",
    badge: "Popular",
    badgeColor: "bg-pyramid-600",
  },
  {
    name: "Research Volunteer",
    price: "€150/week",
    duration: "1-4 weeks",
    includes: [
      "Full site access",
      "Excavation participation",
      "Accommodation",
      "Meals",
      "Certificate",
    ],
    color: "border-amber-600",
    badge: "Experience",
    badgeColor: "bg-amber-700",
  },
];

const gettingThere = [
  {
    icon: Plane,
    title: "By Air",
    desc: "Fly into Sarajevo International Airport (SJJ), 25 km from Visoko. Daily connections from major European cities.",
  },
  {
    icon: Car,
    title: "By Car",
    desc: "30 minutes from Sarajevo via A1/M17 motorway. Parking available near the pyramid sites. GPS: 44.0944° N, 18.1785° E",
  },
  {
    icon: Train,
    title: "By Train/Bus",
    desc: "Regular buses from Sarajevo Bus Terminal to Visoko every 30-60 minutes. Journey time: 45 minutes. Cost: ~€3.",
  },
];

const bestTime = [
  { season: "Spring", months: "Apr–May", icon: "🌸", desc: "Green hills, mild weather, fewer crowds" },
  { season: "Summer", months: "Jun–Sep", icon: "☀️", desc: "Peak season, volunteer programs active" },
  { season: "Autumn", months: "Oct–Nov", icon: "🍂", desc: "Golden colors, cool temperatures" },
  { season: "Winter", months: "Dec–Mar", icon: "❄️", desc: "Quiet, possible snow on pyramids" },
];

export default function Visit() {
  return (
    <section
      id="visit"
      className="py-24 bg-gradient-to-b from-stone-950 to-stone-900/30 relative"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pyramid-400 text-sm font-semibold tracking-widest uppercase">
            Tourism
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">
            Plan Your Visit
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            The Bosnian Pyramid Archaeological Park is open year-round. Here is
            everything you need to know to make the most of your trip.
          </p>
        </div>

        {/* Quick info bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Clock, label: "Opening Hours", value: "8:00 – 18:00" },
            { icon: Ticket, label: "Entry Fee", value: "From €5" },
            { icon: Sun, label: "Best Season", value: "Apr – Oct" },
            { icon: MapPin, label: "Location", value: "Visoko, BiH" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 bg-stone-900/60 border border-stone-800 rounded-xl text-center"
            >
              <item.icon className="w-5 h-5 text-pyramid-400 mx-auto mb-2" />
              <p className="text-xs text-stone-500 mb-1">{item.label}</p>
              <p className="text-white font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Tour options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tourOptions.map((tour) => (
            <div
              key={tour.name}
              className={`card-hover p-6 bg-stone-900/60 border-2 ${tour.color} rounded-2xl flex flex-col`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{tour.name}</h3>
                <span
                  className={`text-xs px-2.5 py-1 ${tour.badgeColor} rounded-full text-white font-medium`}
                >
                  {tour.badge}
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-pyramid-400">
                  {tour.price}
                </span>
              </div>
              <p className="text-stone-500 text-sm mb-4">
                <Clock className="w-3.5 h-3.5 inline mr-1" />
                {tour.duration}
              </p>
              <ul className="space-y-2 flex-1">
                {tour.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-stone-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-pyramid-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 w-full py-2.5 bg-pyramid-600 hover:bg-pyramid-500 text-white text-sm font-medium rounded-lg text-center transition-colors block"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* Getting there */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Getting There
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gettingThere.map((item) => (
              <div
                key={item.title}
                className="p-5 bg-stone-900/60 border border-stone-800 rounded-xl flex gap-4"
              >
                <div className="w-10 h-10 bg-pyramid-900/50 border border-pyramid-700/40 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4.5 h-4.5 text-pyramid-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-stone-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best time to visit */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Best Time to Visit
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bestTime.map((item) => (
              <div
                key={item.season}
                className="p-4 bg-stone-900/60 border border-stone-800 rounded-xl text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-white text-sm">{item.season}</p>
                <p className="text-pyramid-400 text-xs mb-2">{item.months}</p>
                <p className="text-stone-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
