import React from "react";
import logo from "../icons/logo.png";
import "./Main.css";

const Footer = () => {
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
                    <i className="pe-7s-map-marker strong"> </i> Farg'ona shahar, Birodarlik 28 uy

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
                    <a target="_blank" href="https://data.gov.uz/uz/sphere/authority/45">Turizm va sport vazirligi</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://uzbekistan.travel/uz/turizm-qonunlari/">Turizm-qonunlari</a>
                  </li>
                  <li>

                    <a  href="https://uzbektourism.uz/committee/spisokgostin">Mehmonxonalar ro'yxati</a>
                  </li>
                  <li>
                    <a target="_blank"  href="https://kun.uz/">Yangiliklar</a>
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
                <ul className="footer-blog">
                  <li>
                    <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                      <a href="single.html">
                        <img
                          src="assets/img/demo/small-proerty-2.jpg"
                          alt="title"
                        />
                      </a>
                      <span className="blg-date">5-01-2021</span>
                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                      <h6>
                        <a href="single.html">Chorvoq </a>
                      </h6>
                      <p style={{ lineHeight: "17px", padding: "8px 2px" }}>
                        Lorem ipsum dolor sit amet, nulla ...
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                      <a href="single.html">
                        <img
                          src="assets/img/demo/small-proerty-2.jpg"
                          alt="title"
                        />
                      </a>
                      <span className="blg-date">12-01-2022</span>
                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                      <h6>
                        <a href="single.html">Shohimardon</a>
                      </h6>
                      <p style={{ lineHeight: "17px", padding: "8px 2px" }}>
                        Lorem ipsum dolor sit amet, nulla ...
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                      <a href="single.html">
                        <img
                          src="assets/img/demo/small-proerty-2.jpg"
                          alt="title"
                        />
                      </a>
                      <span className="blg-date">12-12-2016</span>
                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                      <h6>
                        <a href="single.html">Amirsoy</a>
                      </h6>
                      <p style={{ lineHeight: "17px", padding: "8px 2px" }}>
                        Lorem ipsum dolor sit amet, nulla ...
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
              <div className="single-footer news-letter">
                <h4>Biz bilan aloqa</h4>
                <div className="footer-title-line"></div>
                <p>Barcha xuquqlar himoyalangan. Batafsil ma'lumot uchun:</p>

                <p>
                  (998) 90 353-01-04
                </p>

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
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://www.facebook.com/kimarotec"
                        data-wow-delay="0.2s"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://plus.google.com/kimarotec"
                        data-wow-delay="0.3s"
                      >
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://instagram.com/kimarotec"
                        data-wow-delay="0.4s"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="https://instagram.com/kimarotec"
                        data-wow-delay="0.6s"
                      >
                        <i className="fa fa-dribbble"></i>
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
                (C) <a href="http://www.KimaroTec.com">Bosh sahifa</a>

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
