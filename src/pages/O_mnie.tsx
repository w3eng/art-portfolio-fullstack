import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export const O_mnie = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".fade-about");

    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen max-w-6xl mx-auto px-6 py-32"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEWA STRONA – Tekst */}
        <div className="fade-about flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            O mnie
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Maluje od jakiegoś czasu, w swoją pracę wkładam serce i pasję. 
            Każde uderzenie pędzla wykonuję z uwagą i troską o piękno.
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-8">
            Każda praca jest dla mnie polem do ukazania piękna przyrody, 
            oddania jej w najcudowniejszej wersji. Inspiruje mnie natura, 
            drzewa, rośliny, a także światło, często wschodzącego słońca.
          </p>

          {/* PRZYCISKI */}
          <div className="fade-about flex gap-6 flex-wrap">
            <Link
              to="/Galeria"
              className="px-6 py-3 bg-gray-800 text-white rounded-xl 
                         hover:bg-gray-700 transition-all duration-300"
            >
              Zobacz portfolio
            </Link>

            <Link
              to="/kontakt"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl 
                         hover:bg-gray-300 transition-all duration-300"
            >
              Kontakt
            </Link>
          </div>
        </div>

        {/* PRAWA STRONA – Portret / obraz */}
        <div className="fade-about flex justify-center">
          <img
            src=".\src\img\p\image.png"
            alt="Portret artysty"
            className="w-full md:max-w-md h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};