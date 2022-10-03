import { useState, createContext } from "react";
import MainNav from "./components/Navbar";
import "./scss/App.scss";
import json from "./content";

export const languageSetting = createContext(null);
function App() {
  const savedLang = localStorage.getItem("lang");
  const [content, setContent] = useState(savedLang ? json[savedLang] : json.EN);

  function languageSetter(e) {
    e.preventDefault();
    const value = e.target.id;
    setContent(function (prevState) {
      return prevState, json[value];
    });

    // saved to localstorage
    localStorage.setItem("lang", value);
  }

  return (
    <languageSetting.Provider value={content}>
      <div className="App">
        <header>
          <MainNav languageSetter={languageSetter} />
        </header>
        <h1>{content.title}</h1>
      </div>
    </languageSetting.Provider>
  );
}

export default App;
