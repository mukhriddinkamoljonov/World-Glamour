import React, { useEffect, useState } from "react";
import "./AllCart.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";
import { useParams } from "react-router-dom";
import Tavsiya from "./Tavsiya";
import Form from "../Form/Form";

const AllCart = () => {
  let { id } = useParams();
  const [item, setItem] = useState([]);
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://wgtour.pythonanywhere.com/api/places/${id}`)
      .then((res) => {
        setItemData(res.data.images);
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <div class="page-head">
        <div class="container">
          <div class="row">
            <div class="page-head-content">
              <h2
                dangerouslySetInnerHTML={{
                  __html: item.hashtags,
                }}
              ></h2>
            </div>
          </div>
        </div>
      </div>

      <div
        class="content-area single-property"
        style={{ backgroundColor: "#fcfcfc" }}
      >
        &nbsp;
        <div class="container">
          <div class="clearfix padding-top-40">
            <div class="col-md-8 single-property-content prp-style-1">
              <div class="row">
                <div class="light-slide-item">
                  <div className="slider-courusel">
                    <Carousel autoPlay={"	boolean"}>
                      {itemData.map((img) => (
                        <div className="box1">
                          <img src={img?.file} alt="title" />
                          <p className="legend">Chorvoq</p>
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
              <div class="single-property-wrapper">
                <div class="single-property-header">
                  <h1 class="property-title pull-left">{item.address}</h1>
                  <span class="property-price pull-right">
                    {item.price1} so'm
                  </span>
                </div>
                <div class="section additional-details">
                  <h4 class="s-property-title">Eng yaxshi shartnoma</h4>

                  <ul class="additional-details-list clearfix">
                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        Sayohat yo'nalishi:
                      </span>
                      <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.direction,
                          }}
                        ></div>
                      </span>
                    </li>
                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        Dvomiyligi:
                      </span>
                      <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        {item.duration}
                      </span>
                    </li>
                    <h4 className="s-property-title">Takliflar</h4>
                    <li>
                      {item.price1_description ? (
                        <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                          {item.price1_description}
                        </span>
                      ) : (
                        ""
                      )}
                      {item.price1 ? (
                        <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                          {item.price1} so'm
                        </span>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      {item.price2_description ? (
                        <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                          {item.price2_description}
                        </span>
                      ) : (
                        ""
                      )}
                      {item.price2 ? (
                        <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                          {item.price2} so'm
                        </span>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      {item.price3_description ? (
                        <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                          {item.price3_description}
                        </span>
                      ) : (
                        ""
                      )}
                      {item.price3 ? (
                        <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                          {item.price3}
                        </span>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        Imtiyozlar
                      </span>
                      {item.benefits ? (
                        <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                          {item.benefits}
                        </span>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </div>
                <div class="section">
                  <h4 class="s-property-title">To'liq ma'lumot</h4>
                  <div class="s-property-content">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    ></div>
                  </div>
                </div>

                <div class="section additional-details ">
                  <h4 class="s-property-title">Narxga quyidagilar kiradi:</h4>
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.about_prices,
                      }}
                    ></div>
                  </div>
                </div>
                <div class="section property-video">
                  <h4 class="s-property-title"> Video</h4>
                  <div class="video-thumb">
                    <div
                      class="video-popup"
                      href="yout"
                      title="Virtual Tour"
                      style={{ width: "300px" }}
                      dangerouslySetInnerHTML={{
                        __html: item.video_link,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 p0">
              <aside class="sidebar sidebar-property blog-asside-right">
                <div class="dealer-widget">
                  <div class="dealer-content">
                    <div class="inner-wrapper">
                      <div class="clear">
                        <div class="col-xs-4 col-sm-4 dealer-face">
                          <a href="/">
                            <img
                              src="assets/img/client-face1.png"
                              class="img-circle"
                              alt="title"
                            />
                          </a>
                        </div>
                        <div class="col-xs-8 col-sm-8">
                          <h3 class="dealer-name">
                            <a href="/">Nathan James</a>
                            <span>Real Estate Agent</span>
                          </h3>
                          <div class="dealer-social-media">
                            <a class="twitter" target="_blank" href="/">
                              <i class="fa fa-twitter"></i>
                            </a>
                            <a class="facebook" target="_blank" href="/">
                              <i class="fa fa-facebook"></i>
                            </a>
                            <a class="gplus" target="_blank" href="/">
                              <i class="fa fa-google-plus"></i>
                            </a>
                            <a class="linkedin" target="_blank" href="/">
                              <i class="fa fa-linkedin"></i>
                            </a>
                            <a class="instagram" target="_blank" href="/">
                              <i class="fa fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="clear">
                        <ul class="dealer-contacts">
                          <li>
                            <i class="pe-7s-map-marker strong"> </i> Toshkent
                            viloyati Bo'stonliq tumani.
                          </li>
                          <li>
                            <i class="pe-7s-mail strong"> </i>
                            exemple@gmail.com
                          </li>
                          <li>
                            <i class="pe-7s-call strong"> </i> +998916587841
                          </li>
                        </ul>
                        <p>
                          Bizning mijozlarimiz biz bilan o'sib boradi. Sizning
                          muvaffaqiyatingiz bizning ustuvorligimizdir!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {item.id ? <Form item={item} /> : ""}
                <div class="panel panel-default sidebar-menu wow fadeInRight animated">
                  <div class="panel-heading">
                    <h3 class="panel-title">Biz sizga</h3>
                  </div>
                  
                </div>
                <Tavsiya title="Tavsiya Etamiz!" count="4" />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCart;
