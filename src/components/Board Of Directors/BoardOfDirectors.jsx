import React from "react";
import boardOfDirector from "../../assets/Board-Of-Directors.jpg";
import abulHashem from "../../assets/board-of-directors/abul-hashem.jpg";
import abulKashem from "../../assets/board-of-directors/abul-kashem.jpg";
import abuSayed from "../../assets/board-of-directors/abu-sayed.jpg";
import shahShafiqul from "../../assets/board-of-directors/shah-shafiqul.jpg";

const directors = [
  {
    name: "Mr. Abul Kashem",
    position: "Group Chairman",
    image: abulKashem,
    bio: "deciding long term strategic and business direction",
    description:
      "Mr. Abul Kashem is the Chairman of the Group. Eldest son of the Founder, he joined in 1978. Under his leadership, AKG became one of the largest industrial conglomerates in Bangladesh. He is a pioneer of large-scale industrial complexes and a founder life member of North South University.",
  },
  {
    name: "Mr. Abul Hashem",
    position: "Group Managing Director",
    image: abulHashem,
    bio: "administration, development and CSR activities",
    description:
      "The second son of the Founder, Mr. Hashem holds MD positions across almost all group companies. Beyond corporate leadership, he personally oversees group administration and the extensive CSR initiatives that define the group's social commitment.",
  },
  {
    name: "Mr. Abu Syed Chowdhury",
    position: "Group Deputy Managing Director",
    image: abuSayed,
    bio: "manufacturing, sales and support functions",
    description:
      "An MBA from University of Chittagong, Mr. Chowdhury drives the core business operations. His focus on manufacturing excellence and sales strategy ensures the group's market leadership. He also leads the Chittagong University MBA Association.",
  },
  {
    name: "Mr. Shah Shafiqul Islam",
    position: "Group Director",
    image: shahShafiqul,
    bio: "Steel, Transport and Baby Food business",
    description:
      "A Master of Commerce from the University of Chittagong, Mr. Islam manages the critical Steel Long and Flat Marketing operations, alongside the Group's Transport logistics and Consumer Baby Food divisions.",
  },
];

export const BoardOfDirectors = () => {
  return (
    <div className="bg-white">
      {/* 1. Ultra Modern Hero Banner */}
      <section className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <img
          src={boardOfDirector}
          alt="Board Of Directors"
          className="w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-36 left-0 w-full text-center">
          <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter uppercase italic opacity-90">
            The Leadership
          </h1>
          <div className="h-2 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* 2. Directors Section - Editorial Layout */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-20">
          <p className="text-blue-600 font-bold tracking-[0.3em] uppercase text-sm mb-4">
            Board of Directors
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight max-w-3xl">
            Visionaries driving the{" "}
            <span className="text-slate-400">future of industry.</span>
          </h2>
        </div>

        <div className="space-y-40 lg:space-y-56">
          {directors.map((person, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section - Minimalist & Fixed Ratio */}
              <div className="relative w-full lg:w-1/2 flex justify-center">
                <div className="relative group max-w-95 w-full">
                  {/* Decorative Back Elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-blue-600/30 rounded-tl-3xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-slate-200 rounded-br-3xl"></div>

                  {/* Main Image Container - Fixed Aspect Ratio to handle low res */}
                  <div className="relative aspect-3/4 overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] bg-slate-50 border-8 border-white">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Soft Overlay on Hover */}
                    <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Floating Badge - Glassmorphism Style */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] backdrop-blur-xl bg-white/80 p-6 rounded-2xl shadow-xl border border-white/50 text-center">
                    <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-1">
                      Strategy Focus
                    </p>
                    <p className="text-slate-800 text-sm font-bold leading-tight line-clamp-2">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Content - Elegant Editorial Look */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="relative">
                  {/* Large Background Number */}
                  <span className="absolute -top-20 left-0 text-[12rem] font-black text-slate-100/60 -z-10 select-none leading-none">
                    0{index + 1}
                  </span>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-0.5 w-8 bg-blue-600"></div>
                      <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em]">
                        Leadership
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
                      {person.name}
                    </h3>
                    <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide uppercase italic">
                      {person.position}
                    </p>
                  </div>

                  <div className="mt-10 relative">
                    {/* Quote Mark Icon */}
                    <div className="absolute -left-8 -top-4 opacity-10">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017V21H5.017Z" />
                      </svg>
                    </div>

                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed text-justify font-light border-l-4 border-slate-50 pl-6">
                      {person.description}
                    </p>
                  </div>

                  {/* Signature Placeholder / Bottom Branding */}
                  <div className="pt-12 flex items-center gap-6">
                    <div className="px-6 py-2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                      AKG Executive Board
                    </div>
                    <div className="flex-1 h-px bg-slate-100"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
