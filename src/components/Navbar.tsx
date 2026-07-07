"use client";

import { useState, useEffect } from "react";
import { Menu, X, Triangle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Pyramids", href: "#pyramids" },
  { label: "Research", href: "#research" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
        scrolled
          ? "bg-stone-950/90 border-b border-pyramid-800/30 shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <Triangle
              className="w-6 h-6 text-pyramid-500 fill-pyramid-500/30 group-hover:fill-pyramid-500/60 transition-all"
              strokeWidth={1.5}
            />
            <span className="font-bold text-lg tracking-wide text-white">
              <span className="text-pyramid-400">Bosnian</span> Pyramids
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-stone-300 hover:text-pyramid-400 transition-colors rounded-md hover:bg-pyramid-950/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#visit"
            className="hidden md:inline-flex items-center px-4 py-2 bg-pyramid-600 hover:bg-pyramid-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Plan Your Visit
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-white"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-stone-950/95 border-t border-pyramid-800/30">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 text-stone-300 hover:text-pyramid-400 hover:bg-pyramid-950/40 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#visit"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 px-3 py-2 bg-pyramid-600 text-white text-center rounded-lg font-medium"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
