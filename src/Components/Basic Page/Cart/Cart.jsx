import React from "react";
import "./Cart.css";
import visa from "./img/visa.jpg";
import paypal from "./img/payplay.jpg";

const Cart = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#fff" }}>
        . <br />
        <div className="page-ago">.</div>
        <div className="page-head">
          <div className="container">
            <div className="row">
              <div className="page-head-content">
                <h2>Xalqaro Tolovlar uchun</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container cart_container">
          <img className="cart1" src={visa} alt="visa" />
          <img  className="cart2"src={paypal} alt="payplay" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
