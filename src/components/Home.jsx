import React, { useEffect, useState } from "react";

export default function Home() {
  // Detect mobile screen to switch background
  const [bgImage, setBgImage] = useState("/home_page_backgroundImage.jpeg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage("/home_mobile_backgroundImage.jpeg"); // your mobile image
      } else {
        setBgImage("/home_page_backgroundImage.jpeg"); // your desktop image
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="fade-animation bg-cover bg-center rounded-xl relative overflow-hidden"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="bg-black/50 p-12 rounded-xl flex flex-col items-center justify-center">

        {/* Profile Image */}
        <img
          src="/profile.jpg.jpg"
          alt="profile"
          className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg mb-6"
        />

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          Hello, I'm <span className="text-blue-300">Utpal Singh</span>
        </h1>

        {/* Subtext */}
        <p className="text-white/90 max-w-2xl text-center">
          Full Stack Java Developer — building clean, scalable applications using
          <span className="text-blue-300 font-semibold"> Java</span>,{" "}
          <span className="text-blue-300 font-semibold">Spring Boot</span>, and{" "}
          <span className="text-blue-300 font-semibold">React.js</span>.  
          Passionate about writing clean code, solving complex problems, and delivering smooth user experiences.
        </p>

        {/* Quick Highlights */}
        <div className="mt-4 text-white/80 text-sm flex flex-col items-center gap-1">
          <p>• 50+ LeetCode Problems Solved</p>
          <p>• Hands-on Spring MVC + Spring Boot + MySQL</p>
          <p>• Built multiple projects including Employee Manager & E-commerce App</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full btn-hover"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("main")?.querySelector("*")?.scrollIntoView?.();
            }}
          >
            View Projects
          </a>

          <a
            href="/utpal_resume-1.pdf"
            download
            className="text-white/90 underline px-4 py-2"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
