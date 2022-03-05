import React, { useState, useEffect } from "react";
import Button from "./button";

const Form = ({ item }) => {
  const [fullname, setFullName] = useState([]);
  const [passport, setPassport] = useState([]);
  const [number, setNumber] = useState([]);
  const [count, setCount] = useState(1);
  const [prices, setPrices] = useState([]);
  const [price, setPrice] = useState(100);
  const [activePrice, setActivePrice] = useState(100);

  console.log(item);

  useEffect(() => {
    createPriceList();
  }, []);

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
    setPrice(Number(pricesList[0].price));
    setActivePrice(Number(pricesList[0].price));
  };

  console.log(prices);
  console.log(price);

  let incrementCount = () => {
    setCount(count + 1);
    setActivePrice(activePrice + price);
  };

  let decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setActivePrice(activePrice - price);
    }
  };

  const payButton = () => {
    console.log();
    const data = {
      amount: price,
      number_of_people: count,
      place_id: item.id,
      place_name: item.name,
      customer_full_name: fullname,
      customer_passport: passport,
      customer_phone_number: number,
    };
    console.log(data);
  };

  return (
    <div className="container2">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <h4>Buyurtma qilish</h4>
          <div className="input-group input-group-icon">
            <input
              type="text"
              placeholder="F.I.O"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
            <div className="input-icon">
              <i className="fa fa-user"></i>
            </div>
          </div>
          <div className="input-group input-group-icon">
            <input
              type="text"
              placeholder="Pasport seriya raqam"
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
            />
            <div className="input-icon">
              <i className="fa-solid fa-passport"></i>{" "}
            </div>
          </div>
          <div className="input-group input-group-icon">
            <input
              type="number"
              placeholder="Telefon raqam"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <div className="input-icon">
              <i className="fa-solid fa-square-phone-flip"></i>{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <div>
            <div className="count">
              <h3>Summa: {activePrice} so'm</h3>
            </div>
            <div className="form-flex">
              <h1>{count}</h1>
              <div className="buttons">
                <Button title={"-"} action={decrementCount} /> <br />
                <Button title={"+"} action={incrementCount} />
              </div>
            </div>
            <button class="button-48" onClick={payButton}>
              <span class="texta">To'lov</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
