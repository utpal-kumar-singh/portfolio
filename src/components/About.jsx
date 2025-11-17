import React from "react";

const TechList = [
  { name: "Java", emoji: "☕" },
  { name: "Spring Boot", emoji: "🌿" },
  { name: "React", emoji: "⚛️" },
  { name: "MySQL", emoji: "🗄️" },
  { name: "Git", emoji: "🔧" },
  { name: "Tailwind", emoji: "💨" },
  { name: "JavaScript", emoji: "📜" }
];

export default function About(){
  return (
    <section className="fade-animation py-14">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        About Me
      </h2>

      <p className="text-gray-700 max-w-3xl mx-auto text-center leading-relaxed text-lg">
        Hey! I’m <span className="font-semibold text-indigo-600">Utpal Singh</span>,  
        a <span className="font-semibold">Java Full Stack Developer</span> who loves building clean,  
        scalable and user-focused applications.  
        I work with <span className="font-semibold">Spring Boot, React, MySQL</span>, and follow  
        real-world industry patterns like MVC, REST APIs and reusable UI components.
        <br /><br />
        I enjoy turning ideas into working products — whether it’s building backend logic,
        designing smooth frontend interfaces, or integrating both ends into a full system.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-12 mb-4 text-center">
        Technologies I Work With
      </h3>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {TechList.map(t => (
          <div 
            key={t.name}
            className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-md 
                       rounded-xl p-5 shadow-lg hover:scale-110 transition-all 
                       animate-floating border border-white/20"
          >
            <div className="text-4xl">{t.emoji}</div>
            <div className="text-sm font-medium text-gray-800">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
