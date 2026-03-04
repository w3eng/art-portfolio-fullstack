import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export const Kontakt = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".fade-contact");

    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Wiadomość wysłana!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert(data.message);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen max-w-4xl mx-auto px-6 py-32"
    >
      <h1 className="fade-contact text-4xl md:text-5xl font-bold mb-12 text-center">
        Kontakt
      </h1>

      {/* FORMULARZ */}
      <form onSubmit={handleSubmit} className="fade-contact flex flex-col gap-6 mb-12">
        <input
          type="text"
          placeholder="Imię"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        />

        <textarea
          placeholder="Wiadomość"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        />

        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all duration-300"
        >
          Wyślij wiadomość
        </button>
      </form>

      <div className="fade-contact text-center">
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition-all duration-300"
        >
          Powrót na stronę główną
        </Link>
      </div>
    </section>
  );
};