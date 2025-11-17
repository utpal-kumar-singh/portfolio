import React, { useEffect, useState } from "react";

export default function Landing({ onEnter }) {
  const [offsetY, setOffsetY] = useState(0);

  // Track scroll to create parallax effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="h-screen w-full relative overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-300"
        style={{
          backgroundImage: "url('/public/landscape-photo.jpg.JPG')",
          transform: `translateY(${offsetY * 0.3}px)`,
        }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex flex-col justify-center items-center text-center p-6">
        <h4 className="text-4xl md:text-6xl font-extrabold text-white mb-6 opacity-0 animate-fade-in">
          Welcome to <span className="text-blue-400">My Portfolio</span>
        </h4>

        <p className="text-white/90 max-w-xl mb-8 opacity-0 animate-fade-in-delay text-lg md:text-xl">
          I’m <span className="font-semibold text-blue-300">Utpal Singh</span>, a Full Stack Java Developer. Explore my projects, skills, and experience.
        </p>

        <button
          onClick={onEnter}
          className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-delay-2"
        >
          Enter Website
        </button>
      </div>

      {/* Optional slow pulse effect */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none animate-pulse-slow"></div>

      {/* Tailwind custom animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 1s forwards; }
        .animate-fade-in-delay { animation: fadeIn 1s 0.5s forwards; }
        .animate-fade-in-delay-2 { animation: fadeIn 1s 1s forwards; }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-slow { animation: pulseSlow 5s infinite; }
      `}</style>
    </section>
  );
}
