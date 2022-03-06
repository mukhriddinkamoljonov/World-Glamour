import axios from "axios";
import React, { useEffect, useState } from "react";
import Tavsiya from "./Tavsiya";
import NoImage from "../../img/no-image.jpg";

function Shaharlar({ query, setQuery }) {
  const [type, setType] = useState([]);
  const [isReady, setIsReady] = useState(null);
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`https://wgtour.pythonanywhere.com/api/places/shuffle?count=7`)
      .then((res) => {
        setItem(res.data);
        setIsReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const addType = async (uzbekistan) => {
  //   axios
  //     .get(`https://wgtour.pythonanywhere.com/api/places?${uzbekistan}`)
  //     .then((res) => {
  //       setItem(res.data);
  //       setIsReady(true);
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   setType(false);
  //   const response = `https://wgtour.pythonanywhere.com/api/places?type=${Uzbekistan}`;
  // };
  console.log(item);
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
                      <input type="checkbox" />
                      <span>Ormgohlar</span>
                    </div>
                    <div className="checkbox-container1">
                      <input type="checkbox" />
                      <span>O'zbekiston Shaharlari</span>
                    </div>
                    <div className="checkbox-container2">
                      <input type="checkbox" />
                      <span>Osiyo Shaharlari</span>
                    </div>
                    <div className="checkbox-container3">
                      <input type="checkbox" style={{}} />
                      <span>Yevropa Shaharlari</span>
                    </div>{" "}
                  </div>
                </div>
                <Tavsiya />
              </div>
            </div>

            <div className="col-md-9 pr0 padding-top-40 properties-page">
              <div className="col-md-12 clear">
                <div className="col-xs-2 layout-switcher">
                  <a className="layout-list" href="javascript:void(0);">
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
                    {item
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
                                <a href="property-1.html"> {item.name}</a>
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
