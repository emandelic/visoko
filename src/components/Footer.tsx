"use client";

import Logo from "./Logo";
import { Facebook, Youtube, Instagram, ExternalLink } from "lucide-react";

const footerLinks = {
  Discover: [
    { label: "About the Site",    href: "#about" },
    { label: "Discoveries",       href: "#discoveries" },
    { label: "Attractions",       href: "#attractions" },
    { label: "Photo Gallery",     href: "#gallery" },
  ],
  Plan: [
    { label: "Accommodation",     href: "#accommodation" },
    { label: "Interactive Map",   href: "#map" },
    { label: "Guided Tours",      href: "#tours" },
    { label: "FAQ",               href: "#faq" },
  ],
  Connect: [
    { label: "Contact Us",        href: "#contact" },
    { label: "Official Foundation", href: "https://www.piramidasunca.ba", external: true },
    { label: "Volunteer Programme", href: "#contact" },
    { label: "Media & Press",     href: "#contact" },
  ],
};

const socials = [
  { icon: Facebook,  href: "https://www.facebook.com/BosnianPyramidsFoundation", label: "Facebook" },
  { icon: Youtube,   href: "https://www.youtube.com/@BosnianPyramids",           label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/bosnianpyramids/",         label: "Instagram" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "rgba(8,6,4,1)", borderTop: "1px solid rgba(201,168,76,0.12)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-5 w-fit group">
              <Logo size={36} />
              <div className="leading-tight">
                <div className="font-display font-bold text-base text-stone-50">
                  Bosnian <span className="text-gold-gradient">Pyramids</span>
                </div>
                <div className="text-[10px] text-stone-500 tracking-widest uppercase">Visoko · Bosnia</div>
              </div>
            </a>
            <p className="text-stone-500 text-sm leading-relaxed mb-6 max-w-sm">
              A remarkable archaeological destination in Visoko, Bosnia &amp; Herzegovina.
              Explore pyramid-shaped hills, ancient tunnels, and centuries of history.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   aria-label={s.label}
                   className="w-9 h-9 rounded-xl flex items-center justify-center text-stone-500 hover:text-gold-400 transition-all"
                   style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-stone-200 font-semibold text-sm mb-4 tracking-wide">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="text-stone-500 hover:text-gold-400 text-sm transition-colors flex items-center gap-1.5 group"
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
             style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-stone-600 text-xs">
            © {year} Bosnian Pyramids Visoko. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-stone-600">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Use</a>
            <span>·</span>
            <span>Made with <span className="text-gold-600">♥</span> for Bosnia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
