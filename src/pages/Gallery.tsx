import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

// Import obrazów
import img1 from "../img/p/4.jpg";
import img2 from "../img/p/4.jpg";
import img3 from "../img/p/4.jpg";
import img4 from "../img/p/3.jpg";
import img5 from "../img/p/2.jpg";
import img6 from "../img/p/1.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Lightbox = ({
  image,
  onClose,
}: {
  image: string;
  onClose: () => void;
}) => {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".lightbox-image",
      { scale: 0.8, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.4, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
      onClick={onClose}
    >
      <img
        src={image}
        alt="Powiększone dzieło"
        className="lightbox-image max-h-[90%] max-w-[90%] object-contain rounded-lg shadow-2xl cursor-auto"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".fade-gallery");

    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, stagger: 0.15, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen max-w-6xl mx-auto px-6 py-32"
    >
      <h1 className="fade-gallery text-4xl md:text-5xl font-bold mb-16 text-center">
        Galeria
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="fade-gallery overflow-hidden rounded-2xl shadow-lg group"
          >
            <img
              src={src}
              alt={`Obraz ${index + 1}`}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              onClick={() => setLightboxImage(src)}
            />
          </div>
        ))}
      </div>

      {/* Przycisk powrotu */}
      <div className="mt-20 text-center fade-gallery">
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gray-800 text-white rounded-xl 
                     hover:bg-gray-700 transition-all duration-300"
        >
          Powrót na stronę główną
        </Link>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </section>
  );
};