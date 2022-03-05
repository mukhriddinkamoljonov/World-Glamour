import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Main.css";
import SmallCard from "./SmallCard";

const Carts = ({ query }) => {
  const [items, setItems] = useState([]);
  const [isReady, setIsReady] = useState(null);

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
    <div
      className="content-area home-area-1 recent-property"
      style={{ backgroundColor: "#fcfcfc", paddingBottom: " 55px" }}
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
                <div className="box-two proerty-item">
                  <div className="item-thumb">
                    <a href="property-2.html">
                      <img src="assets/img/demo/property-2.jpg" alt="title" />
                    </a>
                  </div>
                  <div className="item-entry overflow">
                    <h5>
                      <a href="property-2.html">Samarqand</a>
                    </h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left">
                      <button type="submit" className="btn-grad">
                        Batafsil
                      </button>{" "}
                    </span>
                    <span className="proerty-price pull-right">1 200,000</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 p0 card-image1">
                <div className="box-two proerty-item">
                  <div className="item-thumb">
                    <a href="property-3.html">
                      <img src="assets/img/demo/property-3.jpg" alt="title" />
                    </a>
                  </div>
                  <div className="item-entry overflow">
                    <h5>
                      <a href="property-3.html">Buxoro</a>
                    </h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left">
                      <button type="submit" className="btn-grad">
                        Batafsil
                      </button>{" "}
                    </span>
                    <span className="proerty-price pull-right">1 300,000</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 p0 card-image1">
                <div className="box-two proerty-item">
                  <div className="item-thumb">
                    <a href="property-1.html">
                      <img src="assets/img/demo/property-4.jpg" alt="title" />
                    </a>
                  </div>
                  <div className="item-entry overflow">
                    <h5>
                      <a href="property-1.html">Xiva</a>
                    </h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left">
                      <button type="submit" className="btn-grad">
                        Batafsil
                      </button>
                    </span>
                    <span className="proerty-price pull-right">1 000,000</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 p0 card-image1">
                <div className="box-two proerty-item">
                  <div className="item-thumb">
                    <a href="property-3.html">
                      <img src="assets/img/demo/property-2.jpg" alt="title" />
                    </a>
                  </div>
                  <div className="item-entry overflow">
                    <h5>
                      <a href="property-3.html">Qo'qon </a>
                    </h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left">
                      <button type="submit" className="btn-grad">
                        Batafsil
                      </button>{" "}
                    </span>
                    <span className="proerty-price pull-right">800,000</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 p0 card-image1">
                <div className="box-two proerty-item">
                  <div className="item-thumb">
                    <a href="property-2.html">
                      <img src="assets/img/demo/property-4.jpg" alt="title" />
                    </a>
                  </div>
                  <div className="item-entry overflow">
                    <h5>
                      <a href="property-2.html">Rishton </a>
                    </h5>
                    <div className="dot-hr"></div>
                    <span className="pull-left">
                      <button type="submit" className="btn-grad">
                        Batafsil
                      </button>{" "}
                    </span>
                    <span className="proerty-price pull-right"> 300,000</span>
                  </div>
                </div>
              </div>

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
                        className="btn border-btn more-black"
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
    </div>
  );
};

export default Carts;
