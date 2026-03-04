import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Pablo's", to: "/" },
  { label: "O mnie", to: "/O_mnie" },
  { label: "Galeria", to: "/Galeria" },
  { label: "Kontakt", to: "/kontakt" },
];

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useLayoutEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full bg-white shadow-md fixed top-0 left-0 z-50 px-6"
    >
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Pablo's
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-gray-700 font-medium transition-all duration-300 
                         hover:text-gray-600 
                         relative
                         after:absolute after:left-0 after:-bottom-1 
                         after:h-[2px] after:w-0 
                         after:bg-gray-600 
                         after:transition-all after:duration-300
                         hover:after:w-full 
                         px-6 py-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-700 mb-1 transition-transform duration-300"
                style={{ transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "" }} />
          <span className="block w-6 h-0.5 bg-gray-700 mb-1 opacity-100 transition-opacity duration-300"
                style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-gray-700 transition-transform duration-300"
                style={{ transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMobileOpen(false)} // zamyka menu po kliknięciu
              className="text-gray-700 font-medium px-4 py-2 rounded hover:bg-gray-100 transition-all duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};