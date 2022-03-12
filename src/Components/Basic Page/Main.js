import axios from "axios";
import React, { useState, useEffect } from "react";
import plane from "../icons/plane.png";
import car from "../icons/car.png";
import hotel from "../icons/hotel.png";
import globe from "../icons/phone.png";
import dollar from "../icons/dollar.png";
import rubl from "../icons/ruble.png";
import evro from "../icons/evro.png";
import lir from "../icons/lira.png";
import agreed from "../icons/agreed.png";
import visa from "../icons/visa.png";
import SmallCard from "./SmallCard";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ru", "ar"],
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "localStorage", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: `/assets/locales/{{lng}}/translation.json`,
    },
    react: { useSuspense: false },
  });

const Main = ({ query }) => {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const [isReady, setIsReady] = useState(null);
  const [ruble, setRuble] = useState([]);
  const [yevro, setYevro] = useState([]);
  const [lira, setLira] = useState([]);

  useEffect(() => {
    axios
      .get(`https://wgtour.pythonanywhere.com/api/places/shuffle?count=7`)
      .then((res) => {
        setItems(res.data);
        setIsReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* SLIDER AREA START */}
      <div className="slider-area">
        <div className="slider-content">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
              <h2 className="header-title-per">
                {t("Sayohatni biz bilan mazmunli o'tkazing!")}
              </h2>
              <h4 className="header-title-simple">
                {t(
                  "Eʼtiborga molik joylarni, insonlar hayoti va hodisalar to‘g‘risida eng qiziqarli maʼlumotlarni biz orqali topishingiz mumkin!"
                )}
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* SLIDER AREA END*/}
      {/* CARDS AREA START */}
      <div
        className="content-area home-area-1 recent-property"
        style={{
          backgroundColor: "#fcfcfc",
          paddingBottom: " 55px",
          marginTop: "-30px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
              <h2>Mashhur manzillarga maxsus takliflar!</h2>
              <p>
                Eʼtiborga molik joylarni,{" "}
                <span style={{ color: "orange" }}>World Glamour Tour</span> da
                topishingiz mumkin!
              </p>
            </div>
          </div>
          {isReady ? (
            <div className="row">
              <div className="proerty-th">
                {items
                  .filter((item) => item.name.toLowerCase().includes(query))
                  .map((item) => (
                    <SmallCard item={item} id={item.id} />
                  ))}

                <div className="col-sm-6 col-md-3 p0 card-image1">
                  <div className="box-tree more-proerty text-center">
                    <div className="item-tree-icon">
                      <i className="fa fa-th"></i>
                    </div>
                    <div className="more-entry overflow">
                      <h5>
                        <a href="/">Covid-2019 </a>
                      </h5>
                      <h5 className="tree-sub-ttl">
                        Muhim ma'lumotlar va jadval
                      </h5>
                      <a
                        target="_blank"
                        href="https://www.worldometers.info/coronavirus/"
                      >
                        <button
                          className="btn1 border-btn more-black"
                          value="All properties"
                        >
                          Batafsil
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>{" "}
      {/* CARTS AREA END */}
      {/* WELCOME AREA START */}
      <div className="Welcome-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 Welcome-entry col-sm-12">
              <div className="col-md-5 col-md-offset-2 col-sm-6 col-xs-12">
                <div
                  className="welcome_text wow fadeInLeft"
                  data-wow-delay="0.3s"
                  data-wow-offset="100"
                >
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                      <h2 className="brand">World Glamour Tour</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-6 col-xs-12">
                <div
                  className="welcome_services wow fadeInRight"
                  data-wow-delay="0.3s"
                  data-wow-offset="100"
                >
                  <div className="row">
                    <div className="col-xs-6 m-padding">
                      <div className="welcome-estate">
                        <div className="welcome-icon">
                          <a
                            target="_blank"
                            href="https://www.uzairways.com/uz"
                          >
                            <img src={plane} alt="plane img" />
                          </a>
                        </div>
                        <h3>Avia parvoz</h3>
                      </div>
                    </div>
                    <div className="col-xs-6 m-padding">
                      <div className="welcome-estate">
                        <div className="welcome-icon">
                          <a target="_blank" href="https://taxi.yandex.ru/">
                            <img src={car} alt="car img" />
                          </a>
                        </div>
                        <h3>Mashina xizmati</h3>
                      </div>
                    </div>

                    <div className="col-xs-12 text-center">
                      <i className="welcome-circle"></i>
                    </div>

                    <div className="col-xs-6 m-padding">
                      <div className="welcome-estate">
                        <div className="welcome-icon">
                          <a
                            target="_blank"
                            href="https://uzbektourism.uz/committee/spisokgostin"
                          >
                            <img src={hotel} alt="" />
                          </a>
                        </div>
                        <h3>Mehmonxona xizmati</h3>
                      </div>
                    </div>
                    <div className="col-xs-6 m-padding">
                      <div className="welcome-estate">
                        <div className="welcome-icon">
                          <a target="_blank" href="/">
                            {" "}
                            <img src={globe} alt="" />
                          </a>
                        </div>
                        <h3>Aloqa xizmati</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WELCOME AREA END */}
      {/* COUNT START */}
      <div className="count-area api-area">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
              <h2>Bizga ishonishingiz mumkin !</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 col-xs-12 percent-blocks m-main"
              data-waypoint-scroll="true"
            >
              <div className="row">
                <div className="col-sm-3 col-xs-6">
                  <div className="count-item">
                    <div className="count-item-circle">
                      <img src={dollar} alt="dollar" className="count-img" />
                    </div>
                    <div className="chart" data-percent="5000">
                      <h2 className="percent" id="">
                        {items.value}
                      </h2>
                      <h5>1 AQSh dollari , USD</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="count-item">
                    <div className="count-item-circle">
                      <img src={rubl} alt="ruble" className="count-img" />
                    </div>
                    <div className="chart" data-percent="12000">
                      <h2 className="percent" id="">
                        {ruble.value}
                      </h2>
                      <h5>1 Rossiya rubli, RUB</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="count-item">
                    <div className="count-item-circle">
                      <img src={evro} alt="evro" className="count-img" />
                    </div>
                    <div className="chart" data-percent="120">
                      <h2 className="percent" id="">
                        {yevro.value}
                      </h2>
                      <h5>1 Yevro, EUR</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="count-item">
                    <div className="count-item-circle">
                      <img src={lir} alt="lira" className="count-img" />
                    </div>
                    <div className="chart" data-percent="5000">
                      <h2 className="percent" id="">
                        {lira.value}
                      </h2>
                      <h5>1 Turkiya lirasi , TRY</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COUNT END */}
      {/* SALE AREA START */}
      <div className="boy-sale-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12">
              <div className="asks-first">
                <div className="asks-first-circle">
                  <img src={agreed} alt="agreed" className="sale-img" />
                </div>
                <div className="asks-first-info">
                  <h2>Diplomatik vakolatxonalar</h2>
                  <p>
                    Bugungi kunda O‘zbekistonning 50 dan ortiq mamlakatlarda
                    diplomatik vakolatxonalari bor{" "}
                    <span style={{ color: "red", fontWeight: 600 }}>
                      uzairways.uz.
                    </span>
                    xorijdagi-vakolatxonalar.
                  </p>
                </div>
                <div className="asks-first-arrow">
                  <a
                    target="_blank"
                    href="https://www.uzairways.com/uz/xorijdagi-vakolatxonalar"
                  >
                    <span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-10 col-sm-offset-1 col-xs-12 col-md-offset-0">
              <div className="asks-first">
                <div className="asks-first-circle">
                  <img src={visa} alt="visa" className="sale-img" />
                </div>
                <div className="asks-first-info">
                  <h2>E-Visa uchun murojat etish</h2>
                  <p>
                    O‘zbekistonga viza olishni xohlaysizmi? Bu endi ancha
                    osonlashdi.Sizga kerak bo‘lgan yagona narsa – internet va
                    pasport xolos,{" "}
                    <span style={{ color: "red", fontWeight: 600 }}>
                      {" "}
                      e-visa.gov.uz{" "}
                    </span>{" "}
                    murojaat eting.
                  </p>
                </div>
                <div className="asks-first-arrow">
                  <a target="_blank" href="https://e-visa.gov.uz/application">
                    <span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12">
              <p className="asks-call">
                SAVOLLAR? MUROJAT UCHUN:
                <span className="strong"> +998 97 214 44 01</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SALE AREA END */}
    </div>
  );
};

export default Main;
