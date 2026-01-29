import React from "react";
import { Award, Layers } from "lucide-react";

// Assets Import
import aks from "../../assets/top-brands/AKS.png";
import cowBrand from "../../assets/top-brands/Cow-Brand.png";
import marks from "../../assets/top-brands/Marks.png";
import seylon from "../../assets/top-brands/Seylon.png";
import Shahcement from "../../assets/top-brands/Shahcement.png";

import aks2 from "../../assets/all-brands/AKS-2.png";
import ama from "../../assets/all-brands/Ama-2.png";
import ceareal from "../../assets/all-brands/Ceareal.png";
import coffebite from "../../assets/all-brands/Coffeebite-1.png";
import growup from "../../assets/all-brands/Growup.png";
import kids from "../../assets/all-brands/Kids-1.png";
import kurmure from "../../assets/all-brands/Kurmure.png";
import marise from "../../assets/all-brands/marise.png";
import profom from "../../assets/all-brands/Profom.png";
import relly from "../../assets/all-brands/Rally.png";
import stella from "../../assets/all-brands/Stella.png";

export const AllBrands = () => {
  // Top Brands - Details 
  const topBrands = [
    { img: Shahcement, name: "Shah Cement", desc: "World Record Holder" },
    { img: aks, name: "AKS TMT", desc: "Premium Long Steel" },
    { img: marks, name: "Marks", desc: "Leading Dairy Brand" },
    { img: seylon, name: "Seylon", desc: "Premium Tea Experience" },
    { img: cowBrand, name: "Cow Brand", desc: "Legacy of 20+ Years" },
  ];

  // All Brands 
  const allLogos = [
    Shahcement,
    aks,
    marks,
    seylon,
    cowBrand,
    aks2,
    ama,
    ceareal,
    coffebite,
    growup,
    kids,
    kurmure,
    marise,
    profom,
    relly,
    stella,
  ];

  return (
    <div className="bg-white py-24 overflow-hidden">
      {/* 1. TOP BRANDS SECTION - Spotlight UI */}
      <section className="container mx-auto px-6 mb-40 bg-slate-50">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            <Award size={14} /> The Elite Selection
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase">
            Top{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-400">
              Brands
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {topBrands.map((brand, i) => (
            <div
              key={i}
              className="relative group p-10 rounded-[3rem] bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 flex flex-col items-center justify-center hover:-translate-y-2"
            >
              <div className="h-32 w-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-slate-900 font-black text-sm uppercase tracking-tight">
                  {brand.name}
                </p>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {brand.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ALL BRANDS SECTION - Clean Infinite Flow */}
      <section className="relative">
        <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-900 text-white rounded-2xl">
              <Layers size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                All Brands
              </h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                Our Global Portfolio
              </p>
            </div>
          </div>
          <div className="hidden md:block h-px flex-1 bg-slate-100 mx-10"></div>
          <p className="text-slate-400 text-sm font-medium">
            Over 50+ Products across 8 Industries
          </p>
        </div>

        {/* The Marquee Loop */}
        <div className="relative flex overflow-x-hidden py-10">
          <div className="animate-marquee flex items-center gap-20 whitespace-nowrap">
            {[...allLogos, ...allLogos].map((brand, i) => (
              <div
                key={i}
                className="w-48 h-24 flex items-center justify-center px-4 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={brand}
                  alt="brand logo"
                  className="max-h-full max-w-full object-contain pointer-events-none"
                  style={{ filter: "drop-shadow(0 5px 15px rgba(0,0,0,0.05))" }}
                />
              </div>
            ))}
          </div>

          {/* Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10"></div>
        </div>
      </section>
    </div>
  );
};
