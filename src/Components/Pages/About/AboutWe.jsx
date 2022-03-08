import axios from "axios";
import React, { useEffect, useState } from "react";
import biz_haqimizda from "../../../img/biz_haqimizda1.jpg";
import "./About.css";
import globe from "../../../img/globe.png";
import calendar from "../../../img/calendar2.ico";
import chat from "../../../img/chat.png";
import heart from "../../../img/heart.png";
import Tavsiya from "../Tavsiya";
import Map from "../../Map/Map";

function AboutWe() {
  const [items, setItems] = useState([]);
  const [isReady, setIsReady] = useState(null);

  useEffect(() => {
    axios
      .get("https://wgtour.pythonanywhere.com/api/places/shuffle?count=4")
      .then((res) => {
        setItems(res.data);
        setIsReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "#fff" }}>
      {" "}
      . <br />
      <div className="page-ago">.</div>
      <div className="page-head">
        <div className="container">
          <div className="row">
            <div className="page-head-content">
              <h1 className="page-title">
                “WORLD GLAMOUR TOUR” sayyohlik kompaniyasining axborot saytiga
                xush kelibsiz!
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-area blog-page padding-top-40"
        style={{ backgroundColor: "#fcfcfc", paddingBottom: "55px" }}
      >
        <div className="container">
          <div className="row">
            <div className="blog-lst col-md-9 p0">
              <section id="id-100" className="post single">
                <div className="post-header single">
                  <div className="">
                    <h2
                      className="wow fadeInLeft animated "
                      style={{
                        backgroundColor: "orange",
                        textAlign: "center",
                        padding: 10,
                      }}
                    >
                      World Glamour Tour
                    </h2>
                    <div className="title-line wow fadeInRight animated"></div>
                  </div>
                  <div className="row wow fadeInRight animated">
                    <div className="col-sm-6">
                      <p className="author-category">
                        Biz <a href="/">Siz Bilan</a> doim
                        <a href="#">Birgamiz</a>
                      </p>
                    </div>
                    <div className="col-sm-6 right">
                      <p className="date-comments">
                        <a href="single.html">
                          <i className="fa fa-calendar-o"></i> Mart 8, 2022
                        </a>
                        <a href="single.html">
                          <i className="fa fa-comment-o"></i> 107 Comments
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="image wow fadeInRight animated">
                    <img
                      src={biz_haqimizda}
                      className="img"
                      alt="Example blog post alt"
                    />
                  </div>
                </div>

                <div
                  id="post-content"
                  className="post-body single wow fadeInLeft animated"
                >
                  <h2>Hurmatli mehmon!</h2>
                  <div className="textinfo">
                    <p>
                      ✔️ <strong>WORLD GLAMOUR TOUR</strong> MChJ kompaniyasi
                      O‘zbekiston sayyohlik xizmatlari bozorida yangi
                      hisoblanadi.
                    </p>
                    <p>
                      ✔️ <strong>WORLD GLAMOUR TOUR</strong> kompaniyasining
                      asosiy yo‘nalishlari mamlakatimizning tarixiy joylari, eng
                      maftunkor go‘shalariga va bir qancha chet el davlatlariga
                      maroqli sayohat uyushtirishingiz mumkin..
                    </p>
                    <p>
                      ✔️ Kompaniyaning rivojlanishi bilan sayyohlik
                      yo'nalishlari geografiyasi kengayadi. Bizning arsenalimiz
                      ham guruh, ham individual ekskursiyalar o'z ichiga oladi.
                    </p>
                    <p>
                      ✔️ Har bir mehmon bizning do'stimiz va hamkorimiz! Biz
                      mehmonlarimizga ularning talablari va ehtiyojlariga to'liq
                      javob beradigan yuqori sifatli turistik mahsulotni taklif
                      etamiz.
                    </p>
                  </div>
                  <div className="date-change">
                    <span className="date1">24/7/365</span>
                    <span className="date2">Xizmatingizda</span>
                  </div>

                  <h3>
                    Qiziqarli sayohatlar olamida bizning mehmonimiz bo'ling!
                  </h3>

                  <div>
                    <p>
                      Sayohat - bu hayotingizning eng yaxshi vaqti! Shuning
                      uchun biz hayotni sevadigan odamlar tomonidan ataylab
                      tanlanganmiz. Ular uchun sayohat - bu yangi bilimlarni
                      izlash, yangi hayot tajribasi, yangi his-tuyg'ularni
                      o'zlashtirish.
                    </p>
                    <p>
                      Sizning sayohatingizni muhokama qilishdan xursandmiz.
                      Istalgan vaqtda biz bilan bog'laning. Bizni tanlaganingiz
                      uchun tashakkur. Biz har doim sizga qulay narxlardagi
                      qulay mehmonxonalarni topishda yordam berishdan mamnunmiz.
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="blog-asside-right col-md-3">
              <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                <div className="panel-heading">
                  <h3 className="panel-title">Turizm Kompanyasi</h3>
                </div>
                <div className="panel-body text-widget">
                  <p>
                    Bizning kompaniyamiz ichki va tashqi turizm kompanyasi
                    hisoblanadi. O'zbekiston bo'ylab barcha shaharlarga va
                    ko'plab xalqaro mamlakatlarga sayohatingizni uyushtirib
                    beradi.
                  </p>
                </div>
              </div>
              <Tavsiya title="SIZGA HAM YOQISHI MUMKIN" count="4" />
            </div>
            <div className="count-area">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                    <h2>NIMA UCHUN 80% SAYYOHLAR BIZNI TANLAYDILAR?</h2>
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
                            <img src={globe} className="about-img" alt="" />
                          </div>
                          <div className="chart" data-percent="5000">
                            <h4 className="about-h4">Eng yaxshi turlar</h4>
                            <p>
                              Faqat eng qiziqarli va sinalgan turlarni taklif
                              etamiz.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 col-xs-6">
                        <div className="count-item">
                          <div className="count-item-circle">
                            <img src={calendar} className="about-img" alt="" />
                          </div>
                          <div className="chart" data-percent="12000">
                            <h4 className="about-h4">Tezkor bronlashtirish</h4>
                            <p>
                              Erta bronlashtirish 30 % gacha tejash imkonini
                              beradi.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 col-xs-6">
                        <div className="count-item">
                          <div
                            className="count-item-circle"
                            style={{ marginBottom: "7px" }}
                          >
                            <img src={chat} className="about-img" alt="" />
                          </div>
                          <div className="chart" data-percent="120">
                            <h4 className="about-h4">Qo‘llab-quvvatlash</h4>
                            <p>
                              Viza bilan bog‘liq eng murakkab muammolarni hal
                              qilishga yordam .
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 col-xs-6">
                        <div className="count-item">
                          <div className="count-item-circle">
                            <img src={heart} className="about-img" alt="" />
                          </div>
                          <div className="chart" data-percent="5000">
                            <h4 className="about-h4">Istalgan turlar</h4>
                            <p>
                              Sizning hamyon va qiziqishlaringizga mos turlarni
                              tanlab beramiz
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* <Map/> */}
            {/* <div className="map">
              <p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d537.2651725468306!2d71.78190299388464!3d40.38157763842583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb834e3d0e41df%3A0xde0b15447812c74f!2s%22Festival%22%20ko&#39;ngilochar%20markazi!5e0!3m2!1sru!2s!4v1645117370976!5m2!1sru!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </p>
            </div> */}
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWe;
