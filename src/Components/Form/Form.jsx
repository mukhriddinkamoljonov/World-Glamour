import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Button from "./button";
import payme from "../../img/payme_01.png";
import "./Form.css";
import { Link } from "react-router-dom";

const Form = ({ item }) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = (event) => {
    setActive(event.target.value);
    setActive(isActive ? true : false);
  };
  const button = () => {
    setActive(false);
  };
  const [fullname, setFullName] = useState([]);
  const [passport, setPassport] = useState([]);
  const [number, setNumber] = useState([]);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(100);
  const [activePrice, setActivePrice] = useState(100);

  let selectPrice = useRef(item.price1);

  useEffect(() => {
    createPriceList();
  }, []);

  const createPriceList = () => {
    let price = Number(item.price1);
    setPrice(price);
    setActivePrice(price);
  };

  let incrementCount = () => {
    if (count < 5) {
      setCount(count + 1);
      setActivePrice(activePrice + price);
    }
  };

  let decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setActivePrice(activePrice - price);
    }
  };

  const payButton = (e) => {
    e.preventDefault();
    alert(`Hurmatli ${fullname} Sizning soro'vingiz amalga oshirilmoqda...`);
    const data = {
      amount: activePrice,
      number_of_people: count,
      place_id: item.id,
      place_name: item.name,
      customer_full_name: fullname,
      customer_passport: passport,
      customer_phone_number: number,
    };

    const createOrderUrl = `https://paymewgtour.pythonanywhere.com/api/order/create/`;
    const paymentCheckoutUrl = `https://paymewgtour.pythonanywhere.com/api/payment/checkout/`;
    function getCheckoutUrl(data) {
      axios
        .post(paymentCheckoutUrl, data)
        .then((response) => window.location.assign(response.data.url));
    }

    axios.post(createOrderUrl, data).then(
      (response) => {
        if (response.status === 201) {
          const data = {
            id: response.data.id,
            amount: response.data.amount_for_payme,
            return_url: `https://worldglamour.uz/places/${item.id}`,
          };
          getCheckoutUrl(data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const select = () => {
    const newPrice = Number(selectPrice.current.value);
    setPrice(newPrice);
    setActivePrice(newPrice * count);
  };

  return (
    <div className="container2">
      <form onSubmit={(e) => payButton(e)}>
        <div className="row">
          <h4>Buyurtma qilish</h4>

          <div className="input-group input-group-icon">
            <input
              required
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
              required
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
              required
              type="number"
              placeholder="Telefon raqam"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <div style={{ top: "5px" }} className="input-icon">
              +998
            </div>
          </div>
        </div>
        <div className="row">
          <div>
            <div className="count">
              <h3>
                <span>Qiymat: </span>
                {activePrice} so'm
              </h3>
            </div>{" "}
            <div>
              <div className="input-group">
                <select
                  style={{ width: "auto" }}
                  ref={selectPrice}
                  onChange={select}
                >
                  {item.price1 ? (
                    <option value={item.price1}>
                      {item.price1_description} {item.price1} so'm
                    </option>
                  ) : (
                    ""
                  )}
                  {item.price2 ? (
                    <option value={item.price2}>
                      {item.price2_description} {item.price2}so'm
                    </option>
                  ) : (
                    ""
                  )}
                  {item.price3 ? (
                    <option value={item.price3}>
                      {item.price3_description} {item.price3}so'm
                    </option>
                  ) : (
                    ""
                  )}
                </select>
              </div>
            </div>
            <div className="form-flex">
              <div className="buttons">
                <Button title={"-"} action={decrementCount} />
                <span style={{ marginLeft: "10px", marginRight: "-15px" }}>
                  Odam soni:
                </span>
                <h2>{count}</h2>
                <Button title={"+"} action={incrementCount} />
              </div>
            </div>
            <div className="form_flex">
              <img className="payme" src={payme} alt="" />
              <button
                className={`button_payme ${
                  isActive ? "button_payme" : "payment"
                }`}
                disabled={isActive}
                type="submit"
                onClick={(toggleClass, button)}
              >
                <span className="texta payment">To'lov</span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <button>
        <Link to="/payment">Xalqaro Tolovlar uchun</Link>
      </button>
    </div>
  );
};

export default Form;
