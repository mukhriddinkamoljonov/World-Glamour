import React, { useEffect, useState } from "react";
import axios from "axios";
import NoImage from "../../img/no-image.jpg";
import { Link } from "react-router-dom";

const Tavsiya = ({ title, count }) => {
  const [items, setItems] = useState([]);
  const [isReady, setIsReady] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://wgtour.pythonanywhere.com/api/places/shuffle?count=${count}`
      )
      .then((res) => {
        setItems(res.data);
        setIsReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="panel panel-default sidebar-menu similar-property-wdg wow fadeInRight animated">
      <div className="panel-heading">
        <h3 className="panel-title">{title}</h3>
      </div>
      {isReady ? (
        <div className="panel-body recent-property-widget">
          {items.map((item) => (
            <ul>
              <li>
                <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                  <Link to={`/places/${item.id}`}>
                    <img
                      src={item.images.length ? item.images[0].file : NoImage}
                      alt={""}
                    />
                  </Link>
                </div>
                <div
                  className="col-md-8 col-sm-8 col-xs-8 blg-entry"
                  style={{ marginLeft: "10px" }}
                >
                  <h6>
                    <Link to={`/places/${item.id}`}>{item.name} </Link>
                  </h6>
                  <span className="property-price">{item.price1}</span> so'm
                </div>
              </li>
            </ul>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Tavsiya;
