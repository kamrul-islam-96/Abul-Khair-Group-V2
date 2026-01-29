import React from "react";
import logo from "../../assets/cropped-abul-khair-group-logo.png";

export const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://www.abulkhairgroup.com/wp-content/uploads/2020/11/akg-2.jpg')",
        }}
      >
        {/* Shadow Overlay - Just for the image */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Layer */}
      <div>
        <div className="relative z-10 container mx-auto px-6 flex items-center justify-between min-h-screen">
          <div className="flex flex-col">
            {/* Badge */}
            <div className="mb-6 w-fit flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 backdrop-blur-md border border-blue-500/30">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                Legacy of Excellence Since 1953
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white md:text-7xl leading-tight">
              Building the <br />
              <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Future of Bangladesh
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
              From the steel that shapes our skyline to the daily essentials
              that nourish millions. Abul Khair Group—redefining industries and
              empowering a nation.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/40 active:scale-95">
                Explore Divisions
              </button>
              <button className="rounded-lg border border-slate-400 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white active:scale-95">
                Our Legacy
              </button>
            </div>
          </div>

          <div>
            <img src={logo} alt="" className="w-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};
