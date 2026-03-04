import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".fade-footer");

    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-400 text-white mt-32">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* OPIS – DO UZUPEŁNIENIA */}
        <div className="fade-footer max-w-3xl">
          <h3 className="text-2xl md:text-3xl mb-4">
            {/* Podtytuł – wpisz swój */}
            Autorskie dzieła sztuki, wykonane starannie, specjalnie dla Twojego wnętrza.
          </h3>

          <p className="text-gray-100 italic leading-relaxed">
            {/* Tu wpisz swój własny opis procesu tworzenia obrazów */}
            Każde pociągnięcie pędzla wykonuję z uwagą, ma ono w sobie ogromną pasję i serce które wkładam w tworzone przez siebie obrazy. Inspiruje mnie piękno przyrody, rośliny, kwiaty, drzewa. To wszystko co zawsze jest i było cudem.
          </p>
        </div>

        {/* Dolna linia */}
        <div className="border-t border-gray-100 mt-16 pt-6 text-gray-100 text-sm">
          © {new Date().getFullYear()} Pablo's Wszelkie prawa zastrzeżone.
        </div>

      </div>
    </footer>
  );
};