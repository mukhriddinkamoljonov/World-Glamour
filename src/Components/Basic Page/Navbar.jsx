import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import i18n from "i18next";

const languages = [
  {
    code: "ru",
    name: "Русский",
    country_code: "ru",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "عربي",
    country_code: "sa",
  },
];

const GlobeIcon = ({ width = 33, height = 35, marginTop = 3, left = 20 }) => (
  <div style={{ marginTop: marginTop, marginLeft: left }}>
    <select style={{ height: 45, textAlign: "center" }}>
      {languages.map(({ code, name, country_code }) => (
        <option key={country_code} onChange={() => i18n.changeLanguage(code)}>
          {name}
        </option>
      ))}
    </select>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className="bi bi-globe"
      viewBox="0 0 16 16"
      style={{ marginLeft: "10px", color: "blue" }}
    >
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
    </svg>
  </div>
);

const Navbar = ({ setQuery }) => {
  const [clas, setClass] = useState([]);

  const addClass = () => {};
  return (
    <header id="header" class="header-scrolled ">
      <nav className="navbar navbar-default main-menu">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">
              <img src="assets/img/logo.png" className="main-logo" alt="" />
              <div className="world">
                <span className="header-title-per">World Glamour Tour</span>
              </div>
            </Link>
          </div>

          <div className="collapse navbar-collapse yamm" id="navigation">
            <div className="button navbar-right">
              <div className="" style={{ display: "flex" }}>
                <div className="search">
                  <input
                    type="text"
                    placeholder="search"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <div className="symbol">
                    <svg className="cloud">
                      <use xlink="ture" href="#cloud" />
                    </svg>
                    <svg className="lens">
                      <use xlink="ture" href="#lens" />
                    </svg>
                  </div>
                </div>
                <GlobeIcon />
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "none" }}
              >
                <symbol
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  id="cloud"
                >
                  <path
                    d="M31.714,25.543c3.335-2.17,4.27-6.612,2.084-9.922c-1.247-1.884-3.31-3.077-5.575-3.223h-0.021
	C27.148,6.68,21.624,2.89,15.862,3.931c-3.308,0.597-6.134,2.715-7.618,5.708c-4.763,0.2-8.46,4.194-8.257,8.919
	c0.202,4.726,4.227,8.392,8.991,8.192h4.873h13.934C27.784,26.751,30.252,26.54,31.714,25.543z"
                  />
                </symbol>
                <symbol
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="lens"
                >
                  <path
                    d="M15.656,13.692l-3.257-3.229c2.087-3.079,1.261-7.252-1.845-9.321c-3.106-2.068-7.315-1.25-9.402,1.83
	s-1.261,7.252,1.845,9.32c1.123,0.748,2.446,1.146,3.799,1.142c1.273-0.016,2.515-0.39,3.583-1.076l3.257,3.229
	c0.531,0.541,1.404,0.553,1.95,0.025c0.009-0.008,0.018-0.017,0.026-0.025C16.112,15.059,16.131,14.242,15.656,13.692z M2.845,6.631
	c0.023-2.188,1.832-3.942,4.039-3.918c2.206,0.024,3.976,1.816,3.951,4.004c-0.023,2.171-1.805,3.918-3.995,3.918
	C4.622,10.623,2.833,8.831,2.845,6.631L2.845,6.631z"
                  />
                </symbol>
              </svg>
            </div>
            <ul className="main-nav nav navbar-nav navbar-right">
              <li className="dropdown ymm-sw" data-wow-delay="0.1s">
                <Link
                  to="/shaharlar"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                >
                  Dam olish maskanlari
                </Link>
              </li>

              <li
                className="wow fadeInDown collapse"
                onClick={addClass}
                data-wow-delay="0.2s"
              >
                <Link to="/Sayyohlar" aria-expanded="false">
                  Sayohlar uchun
                </Link>
              </li>
              <li className="wow fadeInDown" data-wow-delay="0.3s">
                <Link to="/about">Biz haqimizda</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
