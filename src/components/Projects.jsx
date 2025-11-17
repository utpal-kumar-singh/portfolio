import React from "react";

const projects = [
  { 
    title: "Employee Manager (Spring MVC)", 
    desc: "End-to-end Employee Management system with CRUD operations, MySQL, MVC architecture and clean UI.",
    tag: "Spring MVC + MySQL",
    link: "#" 
  },
  { 
    title: "To-Do App (React)", 
    desc: "A simple and fast To-Do manager built with React, Tailwind CSS and Local Storage persistence.",
    tag: "React + Tailwind",
    link: "#" 
  },
  { 
    title: "Portfolio Website", 
    desc: "This portfolio website developed using React, Tailwind, reusable components and smooth animations.",
    tag: "React + Tailwind",
    link: "#" 
  },
  { 
    title: "E-commerce Website", 
    desc: "Full-stack e-commerce app using Spring Boot, REST APIs, MySQL and React frontend.",
    tag: "Spring Boot + React",
    link: "#" 
  },
  { 
    title: "DSA Java Implementations", 
    desc: "Core Java DSA programs including arrays, linked lists, stacks, queues, trees and sorting algorithms.",
    tag: "Java + DSA",
    link: "#" 
  }
];

export default function Projects(){
  return (
    <section className="fade-animation py-14">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article 
            key={i}
            className="project-card bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 transition-all border border-white/40"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{p.title}</h3>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">{p.desc}</p>

            <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
              {p.tag}
            </span>

            <div className="mt-4">
              <a 
                className="text-blue-600 hover:underline text-sm font-medium"
                href={p.link}
              >
                View Project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
