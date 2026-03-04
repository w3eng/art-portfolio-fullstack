import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export const HeroTitle = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 50, scale: 0.8 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="w-full py-32 bg-white flex justify-center items-center text-center">
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-extrabold text-gray-700 leading-tight"
      >
        Zasługujesz na piękno
      </h1>
    </section>
  );
};