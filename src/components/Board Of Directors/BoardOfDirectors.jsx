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
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-12 left-0 w-full text-center">
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

        <div className="space-y-32">
          {directors.map((person, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image with Decorative Frame */}
              <div className="relative w-full lg:w-5/12 group">
                <div className="absolute -inset-4 bg-slate-100 rounded-[2rem] -z-10 group-hover:bg-blue-50 transition-colors duration-500"></div>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 md:right-10 bg-blue-600 text-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block">
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-1">
                    Key Focus
                  </p>
                  <p className="text-sm font-semibold leading-tight">
                    {person.bio}
                  </p>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-7/12">
                <div className="relative">
                  <span className="text-8xl font-black text-slate-50 absolute -top-16 -left-4 -z-10 select-none">
                    0{index + 1}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-2">
                    {person.name}
                  </h3>
                  <p className="text-blue-600 text-lg font-bold tracking-widest uppercase mb-8">
                    {person.position}
                  </p>
                  <div className="w-20 h-1 bg-slate-200 mb-8"></div>
                  <p className="text-slate-600 text-lg md:text-xl leading-relaxed text-justify font-light italic lg:not-italic">
                    {person.description}
                  </p>

                  {/* Signature or Quote placeholder */}
                  <div className="mt-10 flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-slate-300"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-sans">
                      Abul Khair Group Leadership
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Bottom Call to Action */}
      <section className="bg-slate-950 py-20 text-center">
        <h3 className="text-white/20 text-6xl md:text-9xl font-black tracking-tighter uppercase">
          Legacy of Trust
        </h3>
      </section>
    </div>
  );
};
