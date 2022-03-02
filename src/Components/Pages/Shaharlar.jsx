import axios from "axios";
import React, { useEffect, useState } from "react";
import AllCatsRight from "./Tavsiya";

function Shaharlar() {
  const [type, setType] = useState([]);
  const [isReady, setIsReady] = useState(null);
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`https://wgtour.pythonanywhere.com/api/places?${addType}`)
      .then((res) => {
        setItem(res.data);
        setIsReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addType = async (Uzbekistan) => {
    setType(false);
    const response = `https://wgtour.pythonanywhere.com/api/places?type=${Uzbekistan}`;
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
                      <input type="checkbox" onClick={addType} />
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
                      <input type="checkbox" />
                      <span>Yevropa Shaharlari</span>
                      <input type="checkbox" />
                      <span>Oromgohlar</span>
                    </div>{" "}
                    <div className="checkbox-container1">
                      <input type="checkbox" />
                      <span>O'zbekiston Shaharlari</span>
                    </div>{" "}
                    <div className="checkbox-container2">
                      <input type="checkbox" />
                      <span>Oromgohlar</span>
                    </div>{" "}
                    <div className="checkbox-container3">
                      <input type="checkbox" />
                      <span>Oromgohlar</span>
                    </div>
                  </div>
                </div>
                <AllCatsRight />
              </div>
            </div>

            {/* {isReady ? ( */}
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

              <div className="col-md-12 clear">
                <div className="proerty-th" id="list-type">
                  <div className="col-sm-6 col-md-4 p0">
                    {/* {item.map((item) => {
                        const { name, price } = item;
                        return ( */}
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img
                            src="assets/img/demo/property-3.jpg"
                            alt="title"
                          />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html">{/* {name} */}</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          {/* {price} */}
                          so'm
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{ color: "orange" }}>
                            {" "}
                            Toshkent shahri
                          </span>{" "}
                          – O‘zbekistonning poytaxti va shu bilan birga Markaziy
                          Osiyodagi eng yirik shahardir.
                        </p>
                      </div>
                    </div>
                    {/* )
                       })} */}
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-2.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Samarqand shahri</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{ color: "orange" }}>Samarqand</span> -
                          Jahon sivilizatsiyasining qadimiy o‘choqlaridan biri,
                          yer yuzining sayqali nomini olgan Samarqand mustaqil
                          O‘zbekistonning yirik iqtisodiy va ilmiy-madaniy
                          markazlaridan biri hisoblanadi.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-1.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html">Buxoro shahri</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{ color: "orange" }}>Buxoro</span> -
                          O'zbekistonning sayyohlik durdonalaridan biridir.
                          Tarixiy shahar markazi YUNESKOning Butunjahon merosi
                          ro'yxatiga kiritilgan.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-3.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html">Xiva shahri</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{ color: "orange" }}> Xiva</span> -
                          qadimiy devorlar, minoralar va loydan qurilgan
                          betakror binolar shahri.Sharqning haqiqiy go‘zalligini
                          ko‘rishni istasangiz, Xivaga tashrif buyuring.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-1.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Qoqon shahri </a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{ color: "orange" }}>Qo'qon</span> -
                          Shahar hashamatli yodgorliklarga va ulug‘vor
                          madrasalarga boy va bu ajablanarli emas, chunki Qo‘qon
                          ilm-fan rivojlanishining markazi edi.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-2.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Qarshi shahri</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{ color: "orange" }}>Qarshi</span> -
                          Qadimiy Qarshi shahri 2006 yilda YUNESKO shafeligida
                          2700 yillik yubileyini nishonladi. Buyuk Aleksandr
                          Makedonskiy bu yerda bo‘lgan.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-3.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html">Andijon shahri</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{ color: "orange" }}> Andijon </span> -
                          Bir vaqtlar Buyuk Ipak yo‘li bo‘ylab joylashgan,
                          arxeologik yodgorliklar va tarixiy obidalarga boy
                          bo‘lgan shahar.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-2.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html">Mo'ynoq shahri</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{ color: "orange" }}>Mo‘ynoq</span> -
                          O‘rta Osiyodagi eng yirik baliq ovlash shaharlaridan
                          biri edi.Bu yerda toza suv bilan daryo baliqlari,
                          ko‘plab dam olish joylari bo‘lgan ajoyib plyajlar bor
                          edi.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-1.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html">Zomin shaharchasi</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{ color: "orange" }}>Zomin</span> -
                          Ajoyib landshaftlar va toza tog‘ havosi, flora va
                          faunaning xilma-xilligi, qadimiy ziyoratgohlar va
                          noyob milliy sihatgoh - bularning barchasi Zomin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="pull-right">
                  <div className="pagination">
                    <ul>
                      <li>
                        <a href="#">Prev</a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* ) : (
              ""
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shaharlar;
