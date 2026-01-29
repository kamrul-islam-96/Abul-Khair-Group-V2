import React, { useState } from "react";
import { X, Maximize2, Camera, Share2 } from "lucide-react";
import galleryVideo from "../../assets/videos/gallery-video.mp4";

// images imports
import img1 from "../../assets/gallery/Actress-Bijori-Barkatullah-handing-over-gift-to-lucky-Al-rounder-Grihini.jpg";
import img2 from "../../assets/gallery/Taking-the-award-for-becoming-one-of-the-top-stalls-at-International-Trade-Fair.jpg";
import img3 from "../../assets/gallery/A-Seminar-on-Earthquake-Awareness-3.jpg";
import img4 from "../../assets/gallery/A-Seminar-on-Earthquake-Awareness-2.jpg";
import img5 from "../../assets/gallery/A-Seminar-on-Earthquake-Awareness-1.jpg";
import img6 from "../../assets/gallery/General-Officer-Commanding-Chittagong-GOC-handing-over-the-crest-to-Executive-Director-of-Abul-Khair-Group.jpg";
import img7 from "../../assets/gallery/Prize-Giving-Ceremony-of-7th-Shah-Cement-AKS-Golf-Tournament.jpg";
import img8 from "../../assets/gallery/Seminar-on-design-and-construction-of-earthquake.jpg";
import img9 from "../../assets/gallery/Seminar-on-green-integration-in-city-planning-urban-architecture.jpg";
import img10 from "../../assets/gallery/Shah-Cement-Nirmaner-Taroka.jpg";
import img11 from "../../assets/gallery/Shah-Cement-Power-Wheel-Celebration.jpg";
import img12 from "../../assets/gallery/Shah-Cement-training-for-the-development-of-Rajmistri.jpg";
import img13 from "../../assets/gallery/Shah-Cement-World-Environment-Day-Celebration.jpg";
import img14 from "../../assets/gallery/Life-Style-Expo-2018.jpg";
import img15 from "../../assets/gallery/Rehab-Winter-Fair-2017.jpg";

const galleryItems = [
  {
    image: img1,
    title:
      "Actress Bijori Barkatullah handing over gift to lucky Al-rounder Grihini",
    category: "Events",
  },
  {
    image: img2,
    title: "Taking the award for top stalls at International Trade Fair",
    category: "Awards",
  },
  {
    image: img3,
    title: "A Seminar on Earthquake Awareness 3",
    category: "Seminar",
  },
  {
    image: img4,
    title: "A Seminar on Earthquake Awareness 2",
    category: "Seminar",
  },
  {
    image: img5,
    title: "A Seminar on Earthquake Awareness",
    category: "Seminar",
  },
  {
    image: img6,
    title: "GOC handing over crest to Executive Director of AKG",
    category: "Awards",
  },
  {
    image: img7,
    title: "Prize Giving Ceremony of 7th Shah Cement-AKS Golf Tournament",
    category: "Events",
  },
  {
    image: img8,
    title: "Seminar on design and construction of earthquake",
    category: "Education",
  },
  {
    image: img9,
    title: "Seminar on green integration in city planning & urban architecture",
    category: "Education",
  },
  { image: img10, title: "Shah Cement Nirmaner Taroka", category: "Programs" },
  {
    image: img11,
    title: "Shah Cement Power Wheel Celebration",
    category: "Events",
  },
  {
    image: img12,
    title: "Shah Cement training for the development of Rajmistri",
    category: "Training",
  },
  {
    image: img13,
    title: "Shah Cement World Environment Day Celebration",
    category: "CSR",
  },
  { image: img14, title: "Life Style Expo 2018", category: "Exhibition" },
  { image: img15, title: "Rehab Winter Fair 2017", category: "Exhibition" },
];

export const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans">
      {/* 1. Cinematic Hero Header */}
      <section className="relative h-[55vh] md:h-[70vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover brightness-[0.4] scale-105 transition-all duration-700"
        >
          <source src={galleryVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="space-y-4 animate-in fade-in zoom-in duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-400 font-bold text-[10px] uppercase tracking-[0.4em]">
              <Camera size={14} /> Our Visual Legacy
            </div>
            <h1 className="text-white text-6xl md:text-9xl font-black tracking-tighter italic uppercase leading-none">
              Gall<span className="text-blue-600">e</span>ry
            </h1>
            <p className="text-white/60 max-w-lg mx-auto text-xs md:text-sm uppercase tracking-[0.2em] font-medium pt-4">
              Moments that define our commitment to the nation
            </p>
          </div>
        </div>

        {/* Modern Bottom Wave/Fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fcfcfc] to-transparent"></div>
      </section>

      {/* 2. Masonry Gallery Grid */}
      <section className="max-w-[1600px] mx-auto px-6 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-[2rem] cursor-pointer break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 bg-white"
              onClick={() => setSelectedImg(item)}
            >
              {/* Image with smooth zoom */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-65 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Minimalist Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-blue-500 text-[10px] font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full mb-3 inline-block">
                    {item.category}
                  </span>
                  <p className="text-white text-sm md:text-base font-bold leading-tight mb-4">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-4 text-white/50">
                    <Maximize2
                      size={18}
                      className="hover:text-blue-500 transition-colors"
                    />
                    <Share2
                      size={18}
                      className="hover:text-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile View - Visible Title below image */}
              <div className="md:hidden p-5 border-t border-slate-50">
                <p className="text-slate-900 text-xs font-bold leading-snug line-clamp-2 uppercase tracking-tighter">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Immersive Fullscreen Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors bg-white/10 p-3 rounded-full z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
            }}
          >
            <X size={32} />
          </button>

          <div
            className="relative max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImg.image}
              alt={selectedImg.title}
              className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl animate-in zoom-in duration-500"
            />

            <div className="mt-8 text-center space-y-2 px-4">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">
                {selectedImg.category}
              </span>
              <h2 className="text-white text-xl md:text-3xl font-black tracking-tight max-w-3xl leading-snug">
                {selectedImg.title}
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
