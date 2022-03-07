import axios from "axios";
import React, { useEffect, useState } from "react";
import Tavsiya from "./Tavsiya";
import NoImage from "../../img/no-image.jpg";
import "./AllCart.css";
import { Link } from "react-router-dom";

function Shaharlar({ query, setQuery }) {
  const [isReady, setIsReady] = useState(null);
  const [places, setPlaces] = useState([]);
  const [filtedData, setFiltedData] = useState([]);
  const [checkboxPrime, setCheckboxPrime] = useState(false);
  const [checkboxUzbekistan, setCheckboxUzbekistan] = useState(false);
  const [checkboxAsia, setCheckboxAsia] = useState(false);
  const [checkboxEurope, setCheckboxEurope] = useState(false);

  useEffect(() => {
    axios
      .get(`https://wgtour.pythonanywhere.com/api/places`)
      .then((res) => {
        setPlaces(res.data);
        setFiltedData(res.data);
        setIsReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const checkCheckbox = () => {
    console.log(checkboxPrime);
    console.log(checkboxUzbekistan);
    console.log(checkboxAsia);
    console.log(checkboxEurope);
    // if (checkboxPrime || checkboxUzbekistan || checkboxAsia || checkboxEurope) {
    //   setFiltedData(places);
    // } else {
    //   let data = [];
    //   places.forEach((place) => {
    //     if (place.type === "prime" && checkboxPrime) data.push(place);
    //     if (place.type === "uzbekistan" && checkboxUzbekistan) data.push(place);
    //     if (place.type === "asia" && checkboxAsia) data.push(place);
    //     if (place.type === "europe" && checkboxEurope) data.push(place);
    //   });
    //   console.log(data);
    //   setFiltedData(data);
    // }
  };

  return (
    <div>
      <div className="page-head">
        <div className="container">
          <div className="row">
            <div className="page-head-content">
              <h1 className="page-title">Dunyo bo'ylab sayohat qiling!</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="properties-area recent-property"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 p0 padding-top-40">
              <div className="blog-asside-right pr0">
                <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                  <div className="panel-heading">
                    <h3 className="panel-title">Shahar nomi</h3>
                  </div>
                  <div className="panel-body search-widget">
                    <form action="" className="form-inline">
                      <fieldset>
                        <div className="row">
                          <div className="col-xs-12">
                            <input
                              className="form-control"
                              placeholder="izlash..."
                              type="text"
                              onChange={(e) => setQuery(e.target.value)}
                            />
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <div className="row">
                          <div className="col-xs-12">
                            <button
                              className="button btn largesearch-btn"
                              type="submit"
                            >
                              Izlash...
                            </button>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                    <div className="checkbox-container">
                      <input
                        type="checkbox"
                        id="prime"
                        value={checkboxPrime}
                        onChange={(e) => console.log(e.target.value)}
                      />
                      <label htmlFor="prime">Ormgohlar</label>
                    </div>
                    <div className="checkbox-container">
                      <input
                        type="checkbox"
                        id="uzbekistan"
                        value={checkboxUzbekistan}
                        onChange={(e) => {
                          setCheckboxUzbekistan(e.target.value);
                          checkCheckbox();
                        }}
                      />

                      <label htmlFor="uzbekistan">O'zbekiston Shaharlari</label>
                    </div>
                    <div className="checkbox-container">
                      <input
                        type="checkbox"
                        id="asia"
                        value={checkboxAsia}
                        onChange={(e) => {
                          setCheckboxAsia(e.target.value);
                          checkCheckbox();
                        }}
                      />
                      <label htmlFor="asia">Osiyo Shaharlari</label>
                    </div>
                    <div className="checkbox-container">
                      <input
                        type="checkbox"
                        id="europe"
                        value={checkboxEurope}
                        onChange={
                          ((e) => setCheckboxEurope(e.target.value),
                          checkCheckbox())
                        }
                      />
                      <label htmlFor="europe">Yevropa Shaharlari</label>
                    </div>{" "}
                  </div>
                </div>
                <Tavsiya />
              </div>
            </div>

            <div className="col-md-9 pr0 padding-top-40 properties-page">
              <div className="col-md-12 clear">
                <div className="col-xs-2 layout-switcher">
                  <a className="layout-list" href="javascript:void(0)">
                    <i className="fa fa-th-list"></i>
                  </a>
                  <a className="layout-grid active" href="javascript:void(0);">
                    <i className="fa fa-th"></i>
                  </a>
                </div>
              </div>
              {isReady ? (
                <div className="col-md-12 clear">
                  <div className="proerty-th" id="list-type">
                    {filtedData
                      .filter((item) => item.name.toLowerCase().includes(query))
                      .map((item) => (
                        <div className="col-sm-6 col-md-4 p0">
                          <div className="box-two proerty-item">
                            <div className="item-thumb">
                              <img
                                src={
                                  item.images.length
                                    ? item.images[0].file
                                    : NoImage
                                }
                                alt={""}
                              />
                            </div>

                            <div className="item-entry overflow">
                              <h5>
                                <Link to={`/places/${item.id}`}>
                                  {" "}
                                  {item.name}
                                </Link>
                              </h5>
                              <div className="dot-hr"></div>
                              <span className="pull-left">
                                <b> Umumiy summa :</b>
                              </span>
                              <span className="proerty-price pull-right">
                                {item.price1} so'm
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shaharlar;
