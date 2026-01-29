import React, { useState } from "react";
import businessPortfolio from "../../assets/videos/BUSINESS-PORTFOLIO.mp4";
import {
  ArrowUpRight,
  Factory,
  HardHat,
  Coffee,
  Droplets,
  Building2,
  Flame,
} from "lucide-react";

const sectors = [
  {
    id: "flat-steel",
    title: "Flat Steel",
    icon: <Factory size={24} />,
    link: "http://www.abulkhairsteel.com",
    content:
      "Abul Khair Group entered in Flat Steel manufacturing during 1993. Products include CI Sheet, GP Sheet, and CR Coil. With a capacity of 640,000 MT p.a., our 'Cow Brand' has been the market leader for over 20 years, exporting to 34+ countries.",
  },
  {
    id: "long-steel",
    title: "Long Steel",
    icon: <HardHat size={24} />,
    link: "http://www.abulkhairsteel.com",
    content:
      "Commissioned in 2009, AKS introduced advanced EAF technology for 100% refined steel. Our integrated plant has an annual capacity of 1.4 million tons, featuring the country's largest oxygen plant and eco-friendly rain-water harvesting.",
  },
  {
    id: "cement",
    title: "Cement",
    icon: <Building2 size={24} />,
    link: "http://www.shahcement.com",
    content:
      "Shah Cement is the largest producing plant in Bangladesh with 10 million metric ton capacity. Home to the world's largest Vertical Roller Mill (VRM), recognized by Guinness World Records. We also lead in Ready-Mix Concrete.",
  },
  {
    id: "fmcg",
    title: "Consumer Goods",
    icon: <Coffee size={24} />,
    link: "http://www.abulkhaircgd.com",
    content:
      "From Marks Milk Powder to Seylon Tea and Starship Condensed Milk, AKG dominates the FMCG sector. Our portfolio also covers non-carbonated juices, snacks, candy, and a growing baby food business.",
  },
  {
    id: "ceramics",
    title: "Ceramics & Marble",
    icon: <Droplets size={24} />,
    link: "http://www.stellasanitary.com",
    content:
      "In collaboration with Italian giant Sacmi, our brand 'Stella' leads the ceramic market. We also specialize in high-quality imported marble and granite, cut and polished with precision in our local facilities.",
  },
  {
    id: "tobacco",
    title: "Tobacco",
    icon: <Flame size={24} />,
    link: "https://www.abulkhairgroup.com/tobacco",
    content:
      "Started in 1953, we now produce 30 billion cigarettes per annum. Our operation is fully integrated with tobacco processing and matchbox manufacturing facilities since 2008.",
  },
];

export const BusinessPortfolio = () => {
  const [activeTab, setActiveTab] = useState(sectors[0]);

  return (
    <div className="w-full bg-white pb-24">
      <div className="text-center space-y-4 pt-20 pb-4">
        <h1 className="text-black text-5xl md:text-8xl font-black tracking-tighter uppercase italic">
          Portfolio
        </h1>
        <p className="text-blue-400 font-bold tracking-[0.4em] uppercase text-xs md:text-sm">
          Driving the National Economy
        </p>
      </div>
      {/* 1. Cinematic Video Header */}
      <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-50 scale-105"
        >
          <source src={businessPortfolio} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-black/20"></div>
      </section>

      {/* 2. Interactive Navigation Section */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        {/* Mobile Grid / Desktop Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setActiveTab(sector)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-bold text-sm uppercase tracking-wider shadow-sm border cursor-pointer ${
                activeTab.id === sector.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-blue-200 scale-105"
                  : "bg-white text-slate-500 border-slate-100 hover:bg-slate-50"
              }`}
            >
              {sector.icon}
              <span className="hidden md:inline">{sector.title}</span>
            </button>
          ))}
        </div>

        {/* 3. Dynamic Content Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-50 rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 transition-all duration-500">
            {/* Visual Part */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square md:aspect-video lg:aspect-square bg-white rounded-3xl shadow-inner flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors"></div>
                <div className="text-blue-600 scale-[3] md:scale-[5] opacity-20 group-hover:opacity-40 transition-all duration-700 rotate-12 group-hover:rotate-0">
                  {activeTab.icon}
                </div>
                <h2 className="absolute text-slate-900/10 text-6xl md:text-8xl font-black uppercase pointer-events-none">
                  {activeTab.title.split(" ")[0]}
                </h2>
              </div>
            </div>

            {/* Description Part */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Strategic Sector
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                {activeTab.title}
              </h3>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed text-justify font-light">
                {activeTab.content}
              </p>

              <div className="pt-6">
                <a
                  href={activeTab.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all group"
                >
                  Explore Industry
                  <ArrowUpRight
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Statistics Ribbon */}
      <section className="mt-24 border-y border-slate-100 py-12 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-black text-slate-900">34+</p>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">
              Countries Exported
            </p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900">1.4M</p>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">
              Tons Steel Capacity
            </p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900">10M</p>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">
              Tons Cement Capacity
            </p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900">#1</p>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">
              Market Leadership
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
