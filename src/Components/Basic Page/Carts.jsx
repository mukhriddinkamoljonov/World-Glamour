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
    </div>
  );
};

export default Carts;
