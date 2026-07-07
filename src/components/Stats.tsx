"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5,      suffix: "",    label: "Pyramid-Shaped Hills",    sub: "identified in the valley" },
  { value: 2005,   suffix: "",    label: "Year of Discovery",       sub: "announced by Dr. Osmanagić" },
  { value: 2400,   suffix: "m",   label: "Tunnel Network",          sub: "Ravne tunnels, accessible" },
  { value: 200000, suffix: "+",   label: "Annual Visitors",         sub: "from around the world" },
  { value: 19,     suffix: "+",   label: "Years of Research",       sub: "excavations ongoing" },
  { value: 30,     suffix: " km", label: "From Sarajevo",           sub: "easy day trip" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display = count >= 1000 ? count.toLocaleString() : String(count);

  return (
    <div ref={ref} className="font-display font-bold text-4xl sm:text-5xl text-stone-50 tracking-tight">
      <span className="text-gold-gradient">{display}</span>
      <span className="text-gold-500 text-2xl">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden"
             style={{ background: "linear-gradient(135deg, rgba(42,33,24,0.8) 0%, rgba(26,22,18,1) 50%, rgba(30,45,26,0.4) 100%)" }}>
      <div className="absolute top-0 inset-x-0 section-divider" />

      {/* Gold glow */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="space-y-1">
              <Counter target={s.value} suffix={s.suffix} />
              <div className="text-stone-200 text-sm font-semibold mt-2">{s.label}</div>
              <div className="text-stone-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
