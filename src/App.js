import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainNav from "./components/Navbar";
import Footer from "./components/Footer";
import "./scss/App.scss";
import json from "./content";

const savedLang = localStorage.getItem("lang");
export const languageSetting = createContext(null);

const App = () => {
  const [content, setContent] = useState(savedLang ? json[savedLang] : json.EN);

  // set language
  function languageSetter(e) {
    e.preventDefault();
    const value = e.target.id;
    setContent(json[value]);
    localStorage.setItem("lang", value);
  }

  // Routes
  return (
    <BrowserRouter>
      <languageSetting.Provider value={content}>
        <MainNav languageSetter={languageSetter} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/services" element={<Services />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </languageSetting.Provider>
    </BrowserRouter>
  );
};

export default App;
