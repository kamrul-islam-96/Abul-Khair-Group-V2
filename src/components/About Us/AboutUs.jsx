import React from "react";
import { Factory, ShieldCheck, Users, Globe, ArrowUpRight } from "lucide-react";

export const AboutUs = () => {
  const sectors = [
    "Steel & Cold-rolled products",
    "Dairy & Baby Food",
    "Branded Tea & Beverages",
    "Shah Cement",
    "Ceramics & RMC",
    "Tobacco (Seed to Smoke)",
    "Matches & Logistics",
    "Shipping Line",
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-lg border-l-4">
              Since 1953
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
              Leading the Nations <br />
              <span className="text-blue-600">Industrial Evolution.</span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Abul Khair Group is one of the largest conglomerates in
                Bangladesh, maintaining a dominant market position across
                <span className="font-bold text-slate-900">
                  {" "}
                  Steel, Cement, and FMCG{" "}
                </span>{" "}
                sectors.
              </p>
              <p>
                What started as a single-product company in 1953 has now evolved
                into a global force, blending tradition with cutting-edge
                innovation to serve millions of loyal customers.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Users size={20} />
                  <span className="font-bold">Workforce</span>
                </div>
                <div className="text-3xl font-black text-slate-900">
                  45,000+
                </div>
                <p className="text-sm text-slate-500 uppercase tracking-tighter">
                  Empowered People
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Globe size={20} />
                  <span className="font-bold">Market Position</span>
                </div>
                <div className="text-3xl font-black text-slate-900">
                  #1 Leader
                </div>
                <p className="text-sm text-slate-500 uppercase tracking-tighter">
                  In Multiple Sectors
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Product Profile Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Factory size={22} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  {sector}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all"
                  />
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-widest">
                  Leading Quality Division
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
