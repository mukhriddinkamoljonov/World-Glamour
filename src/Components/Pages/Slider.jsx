import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import property from "../property-1/property1.jpg"
import property1 from "../property-1/property2.jpg"

const Slider = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={property} alt="title"/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={property1} alt="title"/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={property1} alt="title"/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
