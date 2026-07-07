"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bosanska_piramida_sunca_01.jpg/800px-Bosanska_piramida_sunca_01.jpg",
    alt: "Bosnian Pyramid of the Sun - Visočica hill",
    caption: "Pyramid of the Sun — Visočica hill, Visoko",
    category: "Aerial",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Bosnian_Pyramid.jpg/800px-Bosnian_Pyramid.jpg",
    alt: "Visočica hill - the alleged Bosnian Pyramid",
    caption: "Visočica hill from the valley",
    category: "Aerial",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bosnian_Pyramids_Ravne_Tunnels.JPG/800px-Bosnian_Pyramids_Ravne_Tunnels.JPG",
    alt: "Megalith K2 inside Ravne Tunnels",
    caption: "Megalith K2 inside the Ravne tunnel network",
    category: "Tunnels",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bosnian_Pyramids_Tunnels.JPG/800px-Bosnian_Pyramids_Tunnels.JPG",
    alt: "Ravne underground tunnel passage",
    caption: "Ravne tunnels — underground passages",
    category: "Tunnels",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Bosanska_piramida_sunca_14.jpg/800px-Bosanska_piramida_sunca_14.jpg",
    alt: "Stone blocks on Bosnian Pyramid of the Sun surface",
    caption: "Stone terraces on Visočica hillside",
    category: "Excavation",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Bosnian_Pyramids_tunnels.JPG/800px-Bosnian_Pyramids_tunnels.JPG",
    alt: "Interior of Ravne tunnels Bosnian Pyramids",
    caption: "Inside the Ravne tunnel complex",
    category: "Tunnels",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Visoko_Bosna_Pyramid.jpg/800px-Visoko_Bosna_Pyramid.jpg",
    alt: "Visoko and Bosnian Pyramid landscape view",
    caption: "Town of Visoko with pyramid hill",
    category: "Landscape",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bosanska_dolina_piramida_029.jpg/800px-Bosanska_dolina_piramida_029.jpg",
    alt: "Pyramid of the Sun top from Pyramid of Love",
    caption: "Summit of Visočica from Pyramid of Love",
    category: "Aerial",
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
