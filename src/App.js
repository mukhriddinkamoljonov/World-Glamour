import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sayyohlar from "./Components/Basic Page/Sayyohlar/Sayyohlar.jsx";
import Navbar from "./Components/Basic Page/Navbar";
import Home from "./Components/Basic Page/Home";
import AboutWe from "./Components/Pages/About/AboutWe";
import AllCart from "./Components/Pages/AllCart";
import Footer from "./Components/Basic Page/Footer";
import Shaharlar from "./Components/Pages/Shaharlar";
import React, { useState } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "localStorage", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "./assets/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });

function App() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  return (
    <div>
      <Navbar setQuery={setQuery} />
      <h2>{t("welcome_to_react")}</h2>;
      <Routes>
        <Route path="/" element={<Home query={query} />} />
        <Route path="/sayyohlar" element={<Sayyohlar />} />
        <Route path="/about" element={<AboutWe />} />
        <Route path="/places/:id" element={<AllCart />} />
        <Route path="/amirsoy" element={<AllCart />} />
        <Route path="/chimyon" element={<AllCart />} />
        <Route path="/bostonliq" element={<AllCart />} />
        <Route
          path="/shaharlar"
          element={<Shaharlar setQuery={setQuery} query={query} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
