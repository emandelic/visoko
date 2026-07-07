"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    alt: "Aerial view of pyramid-shaped hill",
    caption: "Pyramid of the Sun from above",
    category: "Aerial",
  },
  {
    src: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
    alt: "Ancient stone blocks",
    caption: "Excavated stone slabs on the pyramid surface",
    category: "Excavation",
  },
  {
    src: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80",
    alt: "Mountain landscape Bosnia",
    caption: "The Bosnian valley of Visoko",
    category: "Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80",
    alt: "Underground tunnel",
    caption: "Inside the Ravne tunnel network",
    category: "Tunnels",
  },
  {
    src: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=800&q=80",
    alt: "Archaeological dig site",
    caption: "Volunteer excavation work at the site",
    category: "Excavation",
  },
  {
    src: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800&q=80",
    alt: "Sunrise over hills",
    caption: "Dawn over the Pyramid of the Moon",
    category: "Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1585680478453-1a2d4d0fa3bf?w=800&q=80",
    alt: "Ancient stone inscription",
    caption: "Monolith with ancient symbols in the tunnels",
    category: "Tunnels",
  },
  {
    src: "https://images.unsplash.com/photo-1583515543840-9b20da0e3ce9?w=800&q=80",
    alt: "Bosnia town view",
    caption: "Historic town of Visoko",
    category: "Landscape",
  },
];

const categories = ["All", "Aerial", "Excavation", "Tunnels", "Landscape"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<(typeof images)[0] | null>(
    null
  );

  const filtered =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-stone-950 via-stone-900/30 to-stone-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-pyramid-400 text-sm font-semibold tracking-widest uppercase">
            Photo Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">
            See the Pyramids
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Visual journey through the Bosnian pyramid complex and the valley of
            Visoko.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat
                  ? "bg-pyramid-600 text-white"
                  : "bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="group relative cursor-pointer overflow-hidden rounded-xl aspect-square"
              onClick={() => setLightboxImg(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-xs p-3 font-medium">
                  {img.caption}
                </p>
              </div>
              <div className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
              <span className="absolute top-2 left-2 text-xs px-2 py-0.5 bg-pyramid-600/80 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {img.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setLightboxImg(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={lightboxImg.src}
                alt={lightboxImg.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <p className="text-center text-stone-300 mt-4 text-sm">
              {lightboxImg.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
