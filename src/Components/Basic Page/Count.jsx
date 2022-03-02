import React, { useEffect, useState } from "react";
import dollar from "../icons/dollar.png";
import ruble from "../icons/ruble.png";
import evro from "../icons/evro.png";
import lira from "../icons/lira.png";
import "./Main.css";
import axios from "axios";

const Count = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.fastforex.io/fetch-all?api_key=7289af5f01-81ed14a04f-r7p8u5"
      )
      .then((res) => {
        setItems(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="count-area">
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
                      {items.UZS}
                    </h2>
                    <h5>1 AQSh dollari , USD</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-6">
                <div className="count-item">
                  <div className="count-item-circle">
                    <img src={ruble} alt="ruble" className="count-img" />
                  </div>
                  <div className="chart" data-percent="12000">
                    <h2 className="percent" id="">
                      {items.RUB}
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
                      {items.EUR}
                    </h2>
                    <h5>1 Yevro, EUR</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-6">
                <div className="count-item">
                  <div className="count-item-circle">
                    <img src={lira} alt="lira" className="count-img" />
                  </div>
                  <div className="chart" data-percent="5000">
                    <h2 className="percent" id="">
                      {items.TRY}
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
  );
};

export default Count;
