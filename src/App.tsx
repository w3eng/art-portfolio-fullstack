import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Article } from "./components/article/article";
import { HeroTitle } from "./components/HeroTitle/herotitle";
import { ArtSection } from "./components/artsections/artsection1";
import { ArtSection2 } from "./components/artsections/artsection2";
import { Kontakt } from "./pages/Kontakt.tsx"; 
import { O_mnie } from "./pages/O_mnie.tsx";
import { Gallery } from "./pages/Gallery.tsx"; 
import { gsap } from "gsap";
import { React } from "react";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="pt-20 flex-grow">
        <Routes>
          <Route path="/" element={<><Article /><HeroTitle /><ArtSection /><ArtSection2 /></>} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/o_mnie" element={<O_mnie />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;