"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What are the opening hours?",
    a: "The Ravne Tunnel entrance and Visitor Centre are open daily from 08:00 to 18:00 (summer) and 09:00 to 16:00 (winter). Visočica hill is accessible year-round during daylight hours.",
  },
  {
    q: "How much do tickets cost?",
    a: "Ravne Tunnel entrance: approx. €5–€8 per adult, reduced rates for children and seniors. Guided tours are priced separately — see our Tours section. Visočica hill itself is free to hike.",
  },
  {
    q: "Is there parking available?",
    a: "Yes. Free parking is available near the Ravne tunnel entrance. Additional parking is available in central Visoko, approximately 1–2 km from the main sites.",
  },
  {
    q: "How do I get to Visoko from Sarajevo?",
    a: "By car it's about 30 minutes via the M17 road. By bus, regular services depart from Sarajevo Bus Station every 30–60 minutes (journey ~40 min, cost ~€3). Taxis and rideshares are also available.",
  },
  {
    q: "Are the pyramids safe to visit?",
    a: "Yes, all public areas including the tunnels and hillside paths are safe and well-maintained. Comfortable walking shoes are recommended. The tunnels are cool year-round (~12°C), so bring a light jacket.",
  },
  {
    q: "Can I visit with children?",
    a: "Absolutely. The site is family-friendly. Children love the tunnels and the outdoor Ravne 2 park. We recommend the Family Adventure Tour, which is designed specifically for families.",
  },
  {
    q: "Is photography allowed?",
    a: "Yes, photography is welcome throughout the site, including inside the tunnels. Tripods may require permission. Drone photography requires prior authorisation from the Foundation.",
  },
  {
    q: "Are guided tours available in English?",
    a: "Yes. All tours listed on this website are offered in English. Tours in German, French, and other languages may be arranged on request — please contact us in advance.",
  },
  {
    q: "What is the best time of year to visit?",
    a: "May through September offers the best weather and the most open excavation zones. July and August host the annual volunteer programme and summer conferences. The tunnels are pleasant year-round.",
  },
  {
    q: "Is the site accessible for visitors with reduced mobility?",
    a: "The Ravne 2 outdoor park is largely accessible. The tunnel entrance has limited steps. Visočica hill involves a steep hike and is not suitable for wheelchairs. Please contact us to discuss your needs.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 bg-stone-900 overflow-hidden">
      <div className="absolute top-0 inset-x-0 section-divider" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">FAQ</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-50 mt-3 mb-5">
            Frequently Asked Questions
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
            Everything you need to know before your visit to the Bosnian Pyramids.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card-premium rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-stone-100 text-sm sm:text-base leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  open === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-stone-400 text-sm leading-relaxed border-t border-stone-700/40 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-500 text-sm mt-10">
          Still have questions?{" "}
          <a href="#contact" className="text-gold-400 hover:text-gold-300 underline underline-offset-2">
            Contact us
          </a>{" "}
          — we&apos;re happy to help.
        </p>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
