import React from "react";
import biz_haqimizda from "../../../img/biz_haqimizda.jpg";
import "./About.css";

function AboutWe() {
  return (
    <div className="">
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
                        By <a href="/">John Snow</a> in
                        <a href="blog.html">Webdesign</a>
                      </p>
                    </div>
                    <div className="col-sm-6 right">
                      <p className="date-comments">
                        <a href="single.html">
                          <i className="fa fa-calendar-o"></i> June 20, 2013
                        </a>
                        <a href="single.html">
                          <i className="fa fa-comment-o"></i> 8 Comments
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
                  <div className="textinfo" >
                    <p >
                      ✔️ <strong>WORLD GLAMOUR TOUR</strong> MChJ kompaniyasi
                      O‘zbekiston sayyohlik xizmatlari bozorida yangi hisoblanadi.
                    </p>
                    <p>
                      ✔️ <strong>WORLD GLAMOUR TOUR</strong> kompaniyasining
                      asosiy yo‘nalishlari mamlakatimizning tarixiy joylari, eng
                      maftunkor go‘shalariga va bir qancha chet el davlatlariga maroqli sayohat uyushtirishingiz mumkin..
                    </p>
                    <p>✔️ Kompaniyaning rivojlanishi bilan sayyohlik yo'nalishlari
                      geografiyasi kengayadi. Bizning arsenalimiz ham guruh, ham
                      individual ekskursiyalar o'z ichiga oladi.
                    </p>
                    <p>
                      ✔️ Har bir mehmon bizning do'stimiz va hamkorimiz!
                      Biz mehmonlarimizga ularning talablari va ehtiyojlariga to'liq javob beradigan yuqori sifatli turistik mahsulotni taklif etamiz.
                    </p>
                  </div>
                  <div className="date-change">
                    <span className="date1">24/7/365</span>
                    <span className="date2">Xizmatingizda</span>
                  </div>

                  <ol>
                    <li>
                      Xizmatlarimiz sifatli bo'lishiga qaramasdan, narxlar ham albatta hamyonbop.
                    </li>
                    <li>Aliquam tincidunt mauris eu risus.</li>
                  </ol>

                  <blockquote>
                    <p>
                      Biz bilan bog'lansangiz, o'zingizni kuttirib qo'ymaysiz.
                      Bizning turoperatorlarimiz har qanday so'rovingizga tez va
                      samarali javob beradi.
                    </p>
                  </blockquote>

                  <h3 >Qiziqarli sayohatlar olamida bizning mehmonimiz bo'ling!</h3>

                 <div >
                   <p>
                     Sayohat - bu hayotingizning eng yaxshi vaqti! Shuning uchun biz hayotni sevadigan odamlar tomonidan ataylab tanlanganmiz. Ular uchun sayohat - bu yangi bilimlarni izlash, yangi hayot tajribasi, yangi his-tuyg'ularni o'zlashtirish.
                   </p>
                   <p>
                     Sizning sayohatingizni muhokama qilishdan xursandmiz. Istalgan vaqtda biz bilan bog'laning. Bizni tanlaganingiz uchun tashakkur.
                     Biz har doim sizga qulay narxlardagi qulay mehmonxonalarni topishda yordam berishdan mamnunmiz.
                   </p>
                 </div>
                </div>

              </section>
            </div>
            <div className="blog-asside-right col-md-3">
              <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                <div className="panel-heading">
                  <h3 className="panel-title">Turizm Agentligi</h3>
                </div>
                <div className="panel-body text-widget">
                  <p >
                    Bizning kompaniyamiz ichki va tashqi turizm kompanyasi
                    hisoblanadi. O'zbekiston bo'ylab barcha shaharlarga va
                    ko'plab xalqaro mamlakatlarga sayohatingizni  uyushtirib
                    beradi.
                  </p>
                </div>
              </div>
              <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                <div className="panel-heading">
                  <h3 className="panel-title">SIZGA HAM YOQISHI MUMKIN</h3>
                </div>
                <div className="panel-body recent-property-widget">
                  <ul>
                    <li>
                      <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-2.jpg" alt="title"/>
                        </a>
                        <span className="property-seeker">
                          <b className="b-1">A</b>
                          <b className="b-2">S</b>
                        </span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span className="property-price">3000000$</span>
                      </div>
                    </li>
                    <li>
                      <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-1.jpg" alt="title"/>
                        </a>
                        <span className="property-seeker">
                          <b className="b-1">A</b>
                          <b className="b-2">S</b>
                        </span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span className="property-price">3000000$</span>
                      </div>
                    </li>
                    <li>
                      <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-3.jpg" alt="title"/>
                        </a>
                        <span className="property-seeker">
                          <b className="b-1">A</b>
                          <b className="b-2">S</b>
                        </span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span className="property-price">3000000$</span>
                      </div>
                    </li>

                    <li>
                      <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-2.jpg" alt="title"/>
                        </a>
                        <span className="property-seeker">
                          <b className="b-1">A</b>
                          <b className="b-2">S</b>
                        </span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span className="property-price">3000000$</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="panel sidebar-menu wow fadeInRight animated">
              <div className="panel-heading">
                <h3 className="panel-title">Tags</h3>
              </div>
              <div className="panel-body">
                {/*<ul className="tag-cloud">*/}
                {/*  <li>*/}
                {/*    <a href="/">*/}
                {/*      <i className="fa fa-tags"></i> html5*/}
                {/*    </a>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <a href="/">*/}
                {/*      <i className="fa fa-tags"></i> css3*/}
                {/*    </a>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <a href="/">*/}
                {/*      <i className="fa fa-tags"></i> jquery*/}
                {/*    </a>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <a href="/">*/}
                {/*      <i className="fa fa-tags"></i> ajax*/}
                {/*    </a>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <a href="/">*/}
                {/*      <i className="fa fa-tags"></i> php*/}
                {/*    </a>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <a href="/">*/}
                {/*      <i className="fa fa-tags"></i> responsive*/}
                {/*    </a>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <a href="/">*/}
                {/*      <i className="fa fa-tags"></i> visio*/}
                {/*    </a>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <a href="/">*/}
                {/*      <i className="fa fa-tags"></i> bootstrap*/}
                {/*    </a>*/}
                {/*  </li>*/}
                {/*</ul>*/}
              </div>
            </div>{" "}
            <hr />
            <div className="map">
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
            </div>
            <hr />
            <div className="row">
              <div class="col-sm-4">
                <h3>
                  <i class="fa fa-map-marker"></i> Address
                </h3>
                <p>
                  13/25 shibuia <br />
                  Fergana <br />
                  Festival kochasi
                  <br />
                  <strong>Uzbekistan</strong>
                </p>
              </div>
              <div class="col-sm-4">
                <h3>
                  <i class="fa fa-phone"></i> Qo'ng'iroqlar markazi
                </h3>
                <p class="text-muted">
                  Agar Uzbekistandan qo'ng'iroq qilsangiz, bu raqam bepul, aks
                  holda elektron aloqa shaklidan foydalanishni maslahat beramiz.
                </p>
                <p>
                  <strong>+998(91) 658 78 41</strong>
                </p>
              </div>
              <div class="col-sm-4">
                <h3>
                  <i class="fa fa-envelope"></i> Elektron pochta
                </h3>
                <p class="text-muted">
                  Iltimos, bizga elektron pochta xabarini yozing yoki elektron
                  chiptalar tizimimizdan foydalaning.
                </p>
                <ul>
                  <li>
                    <strong>
                      <a href="mailto:">raymjonovbobur@gmail.com</a>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <a href="https://e-visa.gov.uz/application">
                        Uzbekistan Viza
                      </a>
                    </strong>
                    - bizning chiptalarni qo'llab-quvvatlash platformamiz
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWe;
