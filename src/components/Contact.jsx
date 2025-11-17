import React from "react";

export default function Contact() {
  return (
    <section className="fade-animation py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Contact Me
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto text-center mb-8">
        Have a project, idea, or opportunity in mind? Reach out — I respond quickly and love collaborating on meaningful projects.
      </p>

      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="mailto:utpalsingh2002@gmail.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-md transition"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/utpal-singh-b71a79330/"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-5 py-3 rounded-full shadow-md transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/utpal-kumar-singh"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-5 py-3 rounded-full shadow-md transition"
        >
          GitHub
        </a>
      </div>

      <p className="text-gray-400 text-sm text-center mt-6">
        Or download my resume to see more details about my work and experience.
      </p>

      <div className="text-center mt-2">
        <a
          href="/public/utpal_resume-1.pdf"
          download
          className="text-blue-500 hover:underline"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
