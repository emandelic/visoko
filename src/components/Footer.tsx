"use client";

import { Triangle, Facebook, Youtube, Instagram, ExternalLink } from "lucide-react";

const footerLinks = {
  Explore: [
    { label: "About the Pyramids", href: "#about" },
    { label: "Five Structures", href: "#pyramids" },
    { label: "Research Findings", href: "#research" },
    { label: "Photo Gallery", href: "#gallery" },
  ],
  Visit: [
    { label: "Plan Your Visit", href: "#visit" },
    { label: "Guided Tours", href: "#visit" },
    { label: "Volunteer Program", href: "#visit" },
    { label: "Contact Us", href: "#contact" },
  ],
  Resources: [
    { label: "Official Foundation", href: "https://www.piramidasunca.ba", external: true },
    { label: "Scientific Papers", href: "#research" },
    { label: "Press Kit", href: "#contact" },
    { label: "FAQ", href: "#about" },
  ],
};

const socials = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4 w-fit group">
              <Triangle
                className="w-6 h-6 text-pyramid-500 fill-pyramid-500/30"
                strokeWidth={1.5}
              />
              <span className="font-bold text-lg text-white">
                <span className="text-pyramid-400">Bosnian</span> Pyramids
              </span>
            </a>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-sm">
              The world&apos;s largest pyramid complex, hidden beneath the hills of
              Visoko, Bosnia & Herzegovina. Discover, explore, and uncover the
              ancient truth.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-stone-800 hover:bg-pyramid-700 border border-stone-700 hover:border-pyramid-600 rounded-lg flex items-center justify-center text-stone-400 hover:text-white transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="text-stone-400 hover:text-pyramid-400 text-sm transition-colors flex items-center gap-1.5 group"
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-xs">
            © {year} Bosnian Pyramids – Visoko. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-stone-500">
            <a href="#" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-stone-300 transition-colors">
              Terms of Use
            </a>
            <span>·</span>
            <span className="flex items-center gap-1">
              Built with{" "}
              <span className="text-pyramid-500">♥</span> for Bosnia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
