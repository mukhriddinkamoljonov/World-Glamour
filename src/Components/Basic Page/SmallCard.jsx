import React from "react";
import { Link } from "react-router-dom";
import NoImage from "../../img/no-image.jpg";

function smallCard({ item }) {
  return (
    <div className="col-sm-6 col-md-3 p0 card-image1">
      <div className="box-two proerty-item">
        <div className="item-thumb">
          <a href="property-1.html">
            <img
              src={item.images.length ? item.images[0].file : NoImage}
              alt={""}
            />
          </a>
        </div>
        <div className="item-entry overflow">
          <h5>
            <a href="property-1.html">{item.name} </a>
          </h5>
          <div className="dot-hr"></div>
          <span className="pull-left">
            <Link to={`/places/${item.id}`} className="btn-grad">
              Batafsil
            </Link>{" "}
          </span>
          <span className="proerty-price pull-right">{item.price1} so'm</span>
        </div>
      </div>
    </div>
  );
}

export default smallCard;
