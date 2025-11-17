import React from "react";

const GitHubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.787 8.205 11.387.6.111.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.388-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.302-5.467-1.333-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.521.117-3.168 0 0 1.008-.322 3.301 1.23a11.47 11.47 0 013.004-.403c1.02.005 2.047.137 3.004.403 2.291-1.552 3.297-1.23 3.297-1.23.654 1.647.243 2.865.12 3.168.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.431.371.815 1.102.815 2.222v3.293c0 .319.216.694.825.576C20.565 22.285 24 17.79 24 12.5 24 5.87 18.627.5 12 .5z"/>
  </svg>
);

const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.804-1.75-1.732s.784-1.732 1.75-1.732 1.75.804 1.75 1.732-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.604c0-3.367-4-3.117-4 0v5.604h-3v-10h3v1.457c1.396-2.586 7-2.777 7 2.476v6.067z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="fixed left-0 right-0 bottom-6 mx-auto max-w-6xl px-6">
      <div className="bg-gray-900 text-white py-3 px-6 rounded-2xl shadow-2xl border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 transform transition-all hover:-translate-y-1 hover:shadow-3xl">
        
        <div className="text-xs text-gray-300 text-center sm:text-left">
          &copy; 2025 Utpal Singh
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/utpal-kumar-singh" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/utpal-singh-b71a79330/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <LinkedInIcon />
          </a>
          <a href="/public/utpal_resume-1.pdf" download className="text-blue-300 hover:text-white text-sm ml-4 transition">
            Resume
          </a>
        </div>
        
      </div>
    </footer>
  );
}
