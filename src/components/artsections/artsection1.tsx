import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import ArtImage from "/img/p/1.jpg"; // ✅ wmontowany obraz

export const ArtSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const text = el.querySelectorAll(".fade-text");
    const image = el.querySelector(".fade-image");

    gsap.fromTo(
      text,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(
      image,
      { autoAlpha: 0, x: 60 },
      { autoAlpha: 1, x: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEWA STRONA */}
        <div>
          <h2 className="fade-text text-3xl md:text-4xl text-gray-700 font-bold mb-6">
            Wybierz idealne dzieło sztuki
          </h2>

          <Link
            to="/galeria"
            className="fade-text inline-block px-6 py-3 bg-gray-800 text-white rounded-xl 
                       hover:bg-gray-700 transition-all duration-300"
          >
            Zobacz kolekcję
          </Link>
        </div>

        {/* PRAWA STRONA */}
        <div>
          <img
            src={ArtImage}
            alt="Dzieło sztuki"
            className="fade-image w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};