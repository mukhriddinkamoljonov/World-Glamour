import React from "react";
import plane from "../icons/plane.png";
import car from "../icons/car.png";
import hotel from "../icons/hotel.png";
import globe from "../icons/phone.png";
import "./Main.css";

const WelcomeArea = () => {
  return (
    <div className="Welcome-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 Welcome-entry col-sm-12">
            <div className="col-md-5 col-md-offset-2 col-sm-6 col-xs-12">
              <div
                className="welcome_text wow fadeInLeft"
                data-wow-delay="0.3s"
                data-wow-offset="100"
              >
                <div className="row">
                  <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                    <h2 className="brand">World Glamour Tour</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-6 col-xs-12">
              <div
                className="welcome_services wow fadeInRight"
                data-wow-delay="0.3s"
                data-wow-offset="100"
              >
                <div className="row">
                  <div className="col-xs-6 m-padding">
                    <div className="welcome-estate">
                      <div className="welcome-icon">
                        <a target="_blank" href="https://www.uzairways.com/uz"><img src={plane} alt="plane img" /></a>
                      </div>
                      <h3>Avia parvoz</h3>
                    </div>
                  </div>
                  <div className="col-xs-6 m-padding">
                    <div className="welcome-estate">
                      <div className="welcome-icon">
                        <a target="_blank" href="https://taxi.yandex.ru/">
                          <img src={car} alt="car img" />
                        </a>
                      </div>
                      <h3>Mashina xizmati</h3>
                    </div>
                  </div>

                  <div className="col-xs-12 text-center">
                    <i className="welcome-circle"></i>
                  </div>

                  <div className="col-xs-6 m-padding">
                    <div className="welcome-estate">
                      <div className="welcome-icon">
                       <a target="_blank" href="https://uzbektourism.uz/committee/spisokgostin">
                         <img src={hotel} alt="" />
                       </a>
                      </div>
                      <h3>Mehmonxona xizmati</h3>
                    </div>
                  </div>
                  <div className="col-xs-6 m-padding">
                    <div className="welcome-estate">
                      <div className="welcome-icon">
                       <a target="_blank" href="/" > <img src={globe} alt="" /></a>
                      </div>
                      <h3>Aloqa xizmati</h3>
                    </div>
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

export default WelcomeArea;
