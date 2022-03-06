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
import React, { useEffect, useState } from "react";
import { ClapSpinner } from "react-spinners-kit";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading">
          <ClapSpinner size={30} color="#686769" loading={loading} />
        </div>
      ) : (
        <div>
          <Navbar setQuery={setQuery} />
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
      )}
    </div>
  );
}

export default App;
