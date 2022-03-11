import axios from "axios";
import NoImage from "../../img/no-image.jpg";
import React, { useEffect, useState } from "react";
import logo from "../icons/logo.png";
import "./Main.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [items, setItems] = useState([]);
  const [isReady, setIsReady] = useState(null);

  useEffect(() => {
    axios
      .get("https://wgtour.pythonanywhere.com/api/places/shuffle?count=3")
      .then((res) => {
        setItems(res.data);
        setIsReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  console.log(date);
  return (
    <div className="footer-area">
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
              <div className="single-footer">
                <h4>Biz haqimizda</h4>
                <div className="footer-title-line"></div>
                <img
                  src={logo}
                  alt="logo"
                  className="wow pulse"
                  data-wow-delay="1s"
                />
                <h6 style={{ color: "#000", fontWeight: 400 }}>
                  World Glamour Tour
                </h6>
                <ul className="footer-adress">
                  <li>
                    <i className="pe-7s-map-marker strong"> </i> Farg'ona
                    shahar, Al-Marg'iloniy 12 uy.
                  </li>
                  <li>
                    <i className="pe-7s-mail strong"> </i> rnj-787@mail.ru
                  </li>
                  <li>
                    <i className="pe-7s-call strong"> </i> (998) 97 214 44 01
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
              <div className="single-footer">
                <h4>Bo'limlar</h4>
                <div className="footer-title-line"></div>
                <ul className="footer-menu">
                  <li>
                    <a
                      target="_blank"
                      href="https://data.gov.uz/uz/sphere/authority/45"
                    >
                      Turizm va sport vazirligi
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://uzbekistan.travel/uz/turizm-qonunlari/"
                    >
                      Turizm-qonunlari
                    </a>
                  </li>
                  <li>
                    <a href="https://uzbektourism.uz/committee/spisokgostin">
                      Mehmonxonalar ro'yxati
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://kun.uz/">
                      Yangiliklar
                    </a>
                  </li>
                  <li>
                    <a href="faq.html">Biz bilan bog'lanish</a>
                  </li>
                  <li>
                    <a href="faq.html">Bosh sahifa</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
              <div className="single-footer">
                <h4>Hududlar</h4>
                <div className="footer-title-line"></div>
                {items.map((item) => (
                  <ul className="footer-blog">
                    <li>
                      <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                        <Link to={`/places/${item.id}`}>
                          <img
                            src={
                              item.images.length ? item.images[0].file : NoImage
                            }
                            alt={""}
                          />
                        </Link>
                        <span className="blg-date">{date}</span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <Link to={`/places/${item.id}`}>{item.name} </Link>
                        </h6>
                        <p
                          style={{ lineHeight: "17px", padding: "8px 2px" }}
                          dangerouslySetInnerHTML={{
                            __html: item.direction,
                          }}
                        ></p>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
              <div className="single-footer news-letter">
                <h4>Biz bilan aloqa</h4>
                <div className="footer-title-line"></div>
                <p>Barcha xuquqlar himoyalangan. Batafsil ma'lumot uchun:</p>

                <p>(998) 93 643-93-11</p>

                <form>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="E-mail ... "
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-primary subscribe"
                        type="button"
                      >
                        <i className="pe-7s-paper-plane pe-2x"></i>
                      </button>
                    </span>
                  </div>
                </form>

                <div className="social pull-right">
                  <ul>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://twitter.com/kimarotec"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://www.facebook.com/kimarotec"
                        data-wow-delay="0.2s"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://plus.google.com/kimarotec"
                        data-wow-delay="0.3s"
                      >
                        <i className="fa-brands fa-google"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://instagram.com/kimarotec"
                        data-wow-delay="0.4s"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://instagram.com/kimarotec"
                        data-wow-delay="0.6s"
                      >
                        <i className="fa-solid fa-car-crash"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copy text-center">
        <div className="container">
          <div className="row">
            <div className="pull-left">
              <span>
                (C) <Link to="/">Bosh sahifa</Link>
              </span>
            </div>
            {/*<div className="bottom-menu pull-right">*/}
            {/*  <ul>*/}
            {/*    <li>*/}
            {/*      <a*/}
            {/*        className="wow fadeInUp animated"*/}
            {/*        href="/"*/}
            {/*        data-wow-delay="0.2s"*/}
            {/*      >*/}
            {/*        Home*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <a*/}
            {/*        className="wow fadeInUp animated"*/}
            {/*        href="/"*/}
            {/*        data-wow-delay="0.3s"*/}
            {/*      >*/}
            {/*        Property*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <a*/}
            {/*        className="wow fadeInUp animated"*/}
            {/*        href="/"*/}
            {/*        data-wow-delay="0.4s"*/}
            {/*      >*/}
            {/*        Faq*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <a*/}
            {/*        className="wow fadeInUp animated"*/}
            {/*        href="/"*/}
            {/*        data-wow-delay="0.6s"*/}
            {/*      >*/}
            {/*        Contact*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
