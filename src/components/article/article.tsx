import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export const Article = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-4xl mx-auto px-6 py-20 text-center"
    >
      {/* Tytuł */}
      <h1 className="text-6xl md:text-8xl text-gray-800 font-bold mb-6">
        Pablo's Art
      </h1>

      {/* Podtytuł */}
      <p className="italic text-2xl md:text-4xl text-gray-500 mb-12">
        Starannie wykonane dzieła sztuki.
      </p>

      {/* Przyciski */}
      <div className="flex justify-center gap-6 mb-12">
        <Link
          to="/galeria"
          className="px-6 py-3 bg-gray-600 text-white rounded-lg 
                     hover:bg-gray-700 transition-all duration-300"
        >
          Zobacz portfolio
        </Link>

        <Link
          to="/kontakt"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg 
                     hover:bg-gray-300 transition-all duration-300"
        >
          Kontakt
        </Link>
      </div>

      {/* Zdjęcie */}
      <img
        src="./src/img/p/12.jpg"
        alt="Obraz"
        className="w-full max-h-[500px] object-cover rounded-2xl mx-auto shadow-lg"
      />
    </section>
  );
};