import React, { useEffect, useState } from "react";
import axios from "axios";
import NoImage from "../../img/no-image.jpg";

const AllCatsRight = () => {
  const [items, setItems] = useState([]);
  const [isReady, setIsReady] = useState(null);

  useEffect(() => {
    axios
      .get("https://wgtour.pythonanywhere.com/api/places/shuffle?count=7")
      .then((res) => {
        setItems(res.data);
        setIsReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(setItems);
  return (
    <div class="panel panel-default sidebar-menu similar-property-wdg wow fadeInRight animated">
      <div class="panel-heading">
        <h3 class="panel-title">TAVSYA ETAMIZ !</h3>
      </div>
      {isReady ? (
        <div class="panel-body recent-property-widget">
          {items.map((item) => (
            <ul>
              <li>
                <div class="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                  <a href="single.html">
                    <img
                      src={item.images.length ? item.images[0].file : NoImage}
                      alt={""}
                    />
                  </a>
                  <span class="property-seeker">
                    <b class="b-1">A</b>
                    <b class="b-2">S</b>
                  </span>
                </div>
                <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                  <h6>
                    <a href="single.html">{item.name} </a>
                  </h6>
                  <span class="property-price">{item.price1}</span>
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

export default AllCatsRight;
