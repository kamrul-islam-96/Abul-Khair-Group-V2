import React from "react";
import videoFrame from "../../assets/videos/video-frame.mp4";

export const MissionAndValues = () => {
  const values = [
    {
      title: "Trust",
      text: "Long-term relationship with customers",
      color: "from-amber-400 to-orange-600",
      icon: "🤝",
    },
    {
      title: "Sustainability",
      text: "Environmental preservation & care",
      color: "from-emerald-400 to-teal-600",
      icon: "🌱",
    },
    {
      title: "Bonding",
      text: "Commitment to employees & families",
      color: "from-blue-400 to-indigo-600",
      icon: "👨‍👩-👧",
    },
    {
      title: "Community",
      text: "Care for business partners & society",
      color: "from-rose-400 to-red-600",
      icon: "🌍",
    },
    {
      title: "Integrity",
      text: "Professionalism in business conduct",
      color: "from-slate-600 to-slate-800",
      icon: "⚖️",
    },
  ];

  return (
    <section className="w-full bg-slate-50 font-sans overflow-hidden">
      {/* 1. Cinematic Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-105"
        >
          <source src={videoFrame} type="video/mp4" />
        </video>

        {/* Glassmorphism Overlay Card */}
        <div className="relative z-10 px-6 py-12 md:px-20 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl text-center max-w-4xl mx-4">
          <span className="text-amber-400 text-xs md:text-sm font-bold tracking-[0.5em] uppercase mb-4 block">
            Our Purpose
          </span>
          <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">
            MISSION{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
              &
            </span>{" "}
            VALUES
          </h1>
          <div className="h-1.5 w-32 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-slate-50"></div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* 2. Mission Card - Modern Minimalism */}
          <div className="w-full lg:w-5/12">
            <div className="sticky top-24 bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-500">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-8 shadow-lg shadow-blue-200">
                🎯
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg text-justify space-y-4 font-light">
                To enrich lives by providing{" "}
                <span className="font-bold text-blue-600">
                  healthy nutritious food
                </span>{" "}
                and{" "}
                <span className="font-bold text-blue-600">
                  home building solutions
                </span>
                .
                <br />
                <br />
                We pioneer advanced construction technologies in line with
                developed economies, contributing to the nation's infrastructure
                development with world-class materials.
              </p>
            </div>
          </div>

          {/* 3. Core Values - Dynamic Grid Layout */}
          <div className="w-full lg:w-7/12">
            <div className="mb-10 lg:pl-10">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-2">
                The Heart of AKG
              </h2>
              <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">
                Our Five Core Pillars
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:pl-10">
              {values.map((v, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 bg-white border border-slate-100 shadow-sm hover:shadow-2xl`}
                >
                  {/* Decorative Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center text-2xl mb-6 shadow-lg`}
                  >
                    {v.icon}
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {v.title}
                  </h4>
                  <p className="text-slate-500 group-hover:text-slate-700 transition-colors leading-relaxed">
                    {v.text}
                  </p>

                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${v.color} group-hover:w-full transition-all duration-500`}
                  ></div>
                </div>
              ))}

              {/* Central Branding Card */}
              <div className="md:col-span-2 bg-slate-900 p-8 rounded-3xl flex items-center justify-between group overflow-hidden relative">
                <div className="z-10">
                  <h4 className="text-white text-2xl font-black">
                    Building Trust Since 1953
                  </h4>
                  <p className="text-slate-400 mt-2">
                    Driven by values, powered by people.
                  </p>
                </div>
                <div className="text-6xl grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-125 opacity-20 group-hover:opacity-100">
                  🇧🇩
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
