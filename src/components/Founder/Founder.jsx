import React from "react";
import mombatiVideo from "../../assets/videos/mombatti.mp4";
import chairmanSir from "../../assets/chairman-sir.jpg";

export const Founder = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover scale-110" // হালকা জুম দিলে লুক বেটার হয়
          src={mombatiVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* মডার্ন গ্রেডিয়েন্ট ওভারলে */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 border border-amber-500/50 text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 rounded-full backdrop-blur-sm">
            Tribute to the Visionary
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 opacity-90">
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              GUIDING
            </span>{" "}
            LIGHT
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Founder Image with Aesthetic Frame */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-4 bg-amber-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 p-2 bg-white/5 backdrop-blur-md">
              <img
                src={chairmanSir}
                alt="Late Mr. Abul Khair"
                className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-xl filter grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 text-center lg:text-left">
              <h3 className="text-xl font-black text-white tracking-widest uppercase">
                Late Mr. Abul Khair
              </h3>
              <p className="text-amber-500 text-xs font-bold tracking-widest mt-1">
                FOUNDER, ABUL KHAIR GROUP
              </p>
            </div>
          </div>

          {/* Biography Content with Modern Typography */}
          <div className="flex-1 space-y-8">
            <div className="relative">
              {/* বড় কোটেশন মার্ক */}
              <span className="absolute -top-10 -left-6 text-9xl text-white/5 font-serif inline-block">
                “
              </span>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light italic border-l-2 border-amber-500/50 pl-6">
                In 1948, a young man left his home in Noakhali with a big dream
                and little money. Today, that dream is the foundation of one of
                the nation's largest conglomerates.
              </p>
            </div>

            <div className="columns-1 md:columns-2 gap-8 text-sm md:text-base text-gray-400 leading-relaxed font-light space-y-6">
              <p className="first-letter:text-5xl first-letter:font-black first-letter:text-amber-500 first-letter:mr-3 first-letter:float-left">
                After arriving in Chittagong, he started with a small retail
                outlet. In 1953, the seed of AKG was sown with a small cottage
                tobacco business. Personally supervising every detail, our
                Founder turned determination into a legacy.
              </p>

              <p>
                By 1964, he expanded into construction and imports. After
                independence, he became a major force in steel, cement, and
                milk. His 25-year journey was a masterclass in entrepreneurship
                before his premature passing in 1978.
              </p>

              <p className="bg-white/5 p-4 rounded-xl border border-white/10 text-gray-300 italic">
                His legacy lives on in AKG's entrepreneurial spirit and the
                courage to venture into the unknown. A true inspiration for
                dreamers everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </div>
    </section>
  );
};
