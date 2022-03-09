import React, { useEffect, useState } from "react";
import dollar from "../icons/dollar.png";
import rubl from "../icons/ruble.png";
import evro from "../icons/evro.png";
import lir from "../icons/lira.png";
import "./Main.css";
import axios from "axios";

const Count = () => {
  const [items, setItems] = useState([]);
  const [ruble, setRuble] = useState([]);
  const [yevro, setYevro] = useState([]);
  const [lira, setLira] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.currencyapi.com/v3/latest?apikey=B5SGCSrgrT46RYe0gwI8HDp3qwnTSjYx7Pr5fCpt"
      )
      .then((res) => {
        setItems(res.data.data.USD);
        setRuble(res.data.data.RUB);
        setYevro(res.data.data.EUR);
        setLira(res.data.data.TRY);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(items.value);

  return (
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
  );
};

export default Count;
