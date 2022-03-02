import React from "react";

const Slider = () => {
  return (
    <>
      <div className="slider-area">
        <div className="slider">
          <div id="bg-slider" className="owl-carousel owl-theme">
            <div className="item">
              <img src="assets/img/slide1/rasm 1.jpg" alt="GTA V" />
            </div>
            <div className="item">
              <img
                src="assets/img/slide1/slider-image-2.jpg"
                alt="The Last of"
              />
            </div>
            <div className="item">
              <img src="assets/img/slide1/slider-image-4.jpg" alt="GTA V" />
            </div>
          </div>
        </div>
        <div className="slider-content">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
              <h2 className="header-title-per">
                Sayoxatni biz bilan mazmunli o'tkazing!
              </h2>
              <h5 className="header-title-simple">
                Eʼtiborga molik joylarni, insonlar hayoti va hodisalar
                to‘g‘risida eng qiziqarli maʼlumotlarni siz biz orqali
                topishingiz mumkin!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
