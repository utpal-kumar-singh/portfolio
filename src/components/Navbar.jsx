import React, { useEffect, useState } from "react";

export default function Navbar({ section, onNav }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  // Highlight section on scroll
  const [active, setActive] = useState("home");

  useEffect(() => {
  const handleScroll = () => {
    let current = "home";
    navItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) {
        const top = el.offsetTop - 120; // offset for navbar height
        const bottom = top + el.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          current = item.id;
        }
      }
    });
    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // initialize active on page load
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const handleClick = (id) => {
    onNav(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/80 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-2xl md:text-3xl font-extrabold text-gray-900">
          <span className="text-blue-500">Utpal</span> Singh
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4">
          {navItems.map(n => (
            <button
              key={n.id}
              onClick={() => handleClick(n.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300
                ${active === n.id ? "bg-blue-600 text-white shadow-lg" : "text-gray-700 hover:bg-gray-100 hover:scale-105"}
              `}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <MobileNav active={active} onNav={handleClick} />
      </div>
    </header>
  );
}

function MobileNav({ active, onNav }) {
  const [open, setOpen] = React.useState(false);
  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(s => !s)}
        aria-label="Toggle menu"
        className="p-2 rounded-md hover:bg-gray-100 transition"
      >
        <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg animate-slide-down">
          <div className="flex flex-col p-2">
            {items.map(it => (
              <button
                key={it.id}
                onClick={() => { onNav(it.id); setOpen(false); }}
                className={`text-left px-4 py-2 rounded-md transition duration-300
                  ${active === it.id ? "bg-blue-600 text-white" : "hover:bg-gray-100"}
                `}
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slideDown 0.25s ease-out forwards; }
      `}</style>
    </div>
  );
}
