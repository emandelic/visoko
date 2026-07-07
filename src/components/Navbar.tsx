"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home",          href: "#home" },
  { label: "About",         href: "#about" },
  { label: "Discoveries",   href: "#discoveries" },
  { label: "Attractions",   href: "#attractions" },
  { label: "Accommodation", href: "#accommodation" },
  { label: "Map",           href: "#map" },
  { label: "Tours",         href: "#tours" },
  { label: "Gallery",       href: "#gallery" },
  { label: "FAQ",           href: "#faq" },
  { label: "Contact",       href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass shadow-2xl shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-3 group flex-shrink-0"
            aria-label="Bosnian Pyramids — Home"
          >
            <Logo size={38} className="transition-transform duration-300 group-hover:scale-105" />
            <div className="leading-tight">
              <div className="font-display font-bold text-base text-stone-50 tracking-wide">
                Bosnian <span className="text-gold-gradient">Pyramids</span>
              </div>
              <div className="text-[10px] text-stone-400 tracking-[0.18em] uppercase font-medium">
                Visoko · Bosnia
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`px-3 py-2 text-[13px] font-medium rounded-md transition-all duration-200 ${
                    active === id
                      ? "text-gold-400"
                      : "text-stone-300 hover:text-stone-50"
                  }`}
                >
                  {link.label}
                  {active === id && (
                    <span className="block h-0.5 mt-0.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600" />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="#tours"
            onClick={(e) => { e.preventDefault(); handleNav("#tours"); }}
            className="hidden lg:inline-flex btn-gold items-center px-5 py-2.5 rounded-xl text-sm"
          >
            <span>Book a Tour</span>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-stone-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(10,8,6,0.98)", borderTop: "1px solid rgba(201,168,76,0.15)" }}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="flex items-center px-4 py-3 text-sm text-stone-300 hover:text-gold-300 hover:bg-white/5 rounded-xl transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#tours"
              onClick={(e) => { e.preventDefault(); handleNav("#tours"); }}
              className="btn-gold flex items-center justify-center w-full py-3 rounded-xl text-sm"
            >
              <span>Book a Tour</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
