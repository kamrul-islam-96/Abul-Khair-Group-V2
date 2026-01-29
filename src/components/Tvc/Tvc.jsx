import React, { useState } from "react";
import cameraRole from "../../assets/videos/camera-role.mp4";
import { Play, X } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Shah Cement TVC",
    url: "https://www.youtube.com/watch?v=eUj72_Lp3eE",
  },
  {
    id: 2,
    title: "Seylon Tea Commercial",
    url: "https://www.youtube.com/watch?v=8gSYKzntUew",
  },
  {
    id: 3,
    title: "Marks Milk Powder",
    url: "https://www.youtube.com/watch?v=jf8YjaqT3ug",
  },
  {
    id: 4,
    title: "AKS TMT Steel",
    url: "https://www.youtube.com/watch?v=Rc6p3c6b260",
  },
  {
    id: 5,
    title: "Starship Condensed Milk",
    url: "https://www.youtube.com/watch?v=sW5hi_NJfRE",
  },
  {
    id: 6,
    title: "Seylon Coffee TVC",
    url: "https://www.youtube.com/watch?v=toJhvEYKrOQ",
  },
];

const getYouTubeID = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export const Tvc = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="bg-slate-950 min-h-screen font-sans">
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px] brightness-[0.4]"
          src={cameraRole}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Abstract Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-blue-500 font-bold tracking-[0.5em] uppercase text-xs mb-4 animate-pulse">
            Media & Productions
          </span>
          <h1 className="text-white text-6xl md:text-9xl font-black tracking-tighter leading-none mb-4">
            TV{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              GALLERY
            </span>
          </h1>
          <p className="text-slate-400 max-w-lg text-sm md:text-base font-light tracking-widest uppercase">
            Capturing the essence of trust through motion.
          </p>
          <div className="h-1 w-24 bg-blue-600 mt-8 rounded-full"></div>
        </div>
      </section>

      {/* 2. Video Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video.url)}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900 border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-blue-500/50 group-hover:-translate-y-2">
                {/* YouTube Thumbnail Image */}
                <img
                  src={`https://img.youtube.com/vi/${getYouTubeID(video.url)}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 to-transparent">
                  <p className="text-white font-bold tracking-tight text-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    {video.title}
                  </p>
                  <div className="h-1 w-0 bg-blue-600 group-hover:w-12 transition-all duration-500 mt-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Video Modal (Popup) */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 md:p-10">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-white hover:text-blue-500 transition-colors"
          >
            <X size={40} />
          </button>

          <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${getYouTubeID(selectedVideo)}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};
