import React, { useEffect, useState } from "react";
import "./AllCart.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";
import { useParams } from "react-router-dom";
import Tavsiya from "./Tavsiya";
import Form from "../Form/Form";
import user from "../../img/user.png";

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
    <div style={{ backgroundColor: "#fff" }}>
      . <br />
      <div className="page-ago">.</div>
      <div className="page-head">
        <div className="container">
          <div className="row">
            <div className="page-head-content">
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
        className="content-area single-property"
        style={{ backgroundColor: "#fcfcfc" }}
      >
        &nbsp;
        <div className="container ">
          <div className="clearfix">
            <div className="col-md-8 single-property-content prp-style-1">
              <div className="row" style={{ marginLeft: "3px" }}>
                <div className="light-slide-item">
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
              <div className="single-property-wrapper">
                <div className="single-property-header">
                  <h1 className="property-title pull-left">{item.address}</h1>
                  <span className="property-price pull-right">
                    {item.price1} so'm
                  </span>
                </div>
                <div className="section additional-details">
                  <h4 className="s-property-title">Eng yaxshi shartnoma</h4>

                  <ul className="additional-details-list clearfix">
                    <li>
                      <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        Sayohat yo'nalishi:
                      </span>
                      <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.direction,
                          }}
                        ></div>
                      </span>
                    </li>
                    <li>
                      <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        Dvomiyligi:
                      </span>
                      <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        {item.duration}
                      </span>
                    </li>
                    <h4 className="s-property-title">Takliflar</h4>
                    <li>
                      {item.price1_description ? (
                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                          {item.price1_description}
                        </span>
                      ) : (
                        ""
                      )}
                      {item.price1 ? (
                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                          {item.price1} so'm
                        </span>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      {item.price2_description ? (
                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                          {item.price2_description}
                        </span>
                      ) : (
                        ""
                      )}
                      {item.price2 ? (
                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                          {item.price2} so'm
                        </span>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      {item.price3_description ? (
                        <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                          {item.price3_description}
                        </span>
                      ) : (
                        ""
                      )}
                      {item.price3 ? (
                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                          {item.price3} so'm
                        </span>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        Imtiyozlar
                      </span>
                      {item.benefits ? (
                        <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                          {item.benefits}
                        </span>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </div>
                <div className="section">
                  <h4 className="s-property-title">To'liq ma'lumot</h4>
                  <div className="s-property-content">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="section additional-details ">
                  <h4 className="s-property-title">
                    Narxga quyidagilar kiradi:
                  </h4>
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.about_prices,
                      }}
                      style={{ fontWeight: 700 }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p0">
              <aside className="sidebar sidebar-property blog-asside-right">
                <div className="dealer-widget">
                  <div className="dealer-content">
                    <div className="inner-wrapper">
                      <div className="clear">
                        <div
                          className="col-xs-4 col-sm-4 dealer-face"
                          style={{ marginTop: "17px " }}
                        ></div>
                      </div>

                      <div className="clear">
                        <ul className="dealer-contacts">
                          <li>
                            <i className="pe-7s-map-marker strong"> </i>{" "}
                            Farg'ona shahar, Al-Marg'iloniy 12 uy.
                          </li>
                          <li>
                            <i className="pe-7s-mail strong"> </i>
                            rnj-787@mail.ru
                          </li>
                          <li>
                            <i className="pe-7s-call strong"> </i> +99897 214 44
                            01
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
                <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                  <div className="panel-heading">
                    <h3 className="panel-title"></h3>
                  </div>
                </div>
                <Tavsiya title="Tavsiya Etamiz!" count="4" />{" "}
                <div className="section property-video">
                  <h4 className="s-property-title"> Video</h4>
                  <div className="video-thumb">
                    <div
                      className="video-popup"
                      href="yout"
                      title="Virtual Tour"
                      style={{ width: "300px" }}
                      dangerouslySetInnerHTML={{
                        __html: item.video_link,
                      }}
                    ></div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCart;
