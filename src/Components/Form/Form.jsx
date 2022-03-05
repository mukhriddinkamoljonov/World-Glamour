import React, { useState, useEffect } from "react";
import Button from "./button";

const Form = ({ item }) => {
  const [count, setCount] = useState(1);
  const [prices, setPrices] = useState([]);
  const [priceItem, setPriceItem] = useState(0);

  useEffect(() => createPriceList());

  const createPriceList = () => {
    let pricesList = [
      {
        price: item.price1,
        about: item.price1_description,
      },
    ];
    if (item.price2) {
      prices.push({
        price: item.price2,
        about: item.price2_description,
      });
    }
    if (item.price3) {
      prices.push({
        price: item.price3,
        about: item.price3_description,
      });
    }
    setPrices(pricesList);
    setPriceItem(prices[0]);
    console.log(pricesList);
  };

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(prices, "salom");

  const payButton = () => {};

  return (
    <div className="container2">
      <form onChange={handleSubmit} onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <h4>Buyurtma qilish</h4>
          <div className="input-group input-group-icon">
            <input type="text" placeholder="F.I.O" />
            <div className="input-icon">
              <i className="fa fa-user"></i>
            </div>
          </div>
          <div className="input-group input-group-icon">
            <input type="email" placeholder="Pasport seriya raqam" />
            <div className="input-icon">
              <i className="fa-solid fa-passport"></i>{" "}
            </div>
          </div>
          <div className="input-group input-group-icon">
            <input type="password" placeholder="Telefon raqam" />
            <div className="input-icon">
              <i className="fa-solid fa-square-phone-flip"></i>{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <div>
            <div className="count">
              <h3>Summa: {priceItem.price} so'm</h3>
            </div>
            <div className="form-flex">
              <h1>{count}</h1>
              <div className="buttons">
                <Button title={"-"} action={decrementCount} /> <br />
                <Button title={"+"} action={incrementCount} />
              </div>
            </div>
          </div>
          <div className="col-half">
            <div className="input-group">
              <select>
                <option>01 Jan</option>
                <option>02 Jan</option>
              </select>
            </div>
          </div>{" "}
        </div>
        <button class="button-48">
          <span class="texta">To'lov</span>
        </button>
      </form>
    </div>
  );
};

export default Form;
