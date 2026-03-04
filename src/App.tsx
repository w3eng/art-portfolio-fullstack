import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Article } from "./components/article/article";
import { HeroTitle } from "./components/HeroTitle/herotitle";
import { ArtSection } from "./components/artsections/artsection1";
import { ArtSection2 } from "./components/artsections/artsection2";
import { Kontakt } from "./pages/Kontakt.tsx"; 
import { O_mnie } from "./pages/O_mnie.tsx";
import { Gallery } from "./pages/Gallery.tsx"; 

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      <main className="pt-20 flex-grow">
        <Routes>
          <Route path="/" element={<><Article /><HeroTitle /><ArtSection /><ArtSection2 /></>} />
          <Route path="/Galeria" element={<Gallery />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/O_mnie" element={<O_mnie />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;