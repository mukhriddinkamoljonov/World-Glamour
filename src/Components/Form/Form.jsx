import axios from "axios";
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

  const payButton = () => {
    const data = {
      amount: price,
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
        .then((response) => console.log(response.data));
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
            <div className="input-icon">+998</div>
          </div>
        </div>
        <div className="row">
          <div>
            <div className="count">
              <h3>Summa: {activePrice} so'm</h3>
            </div>
            <div className="form-flex">
              <div className="buttons">
                <Button title={"-"} action={decrementCount} /> <h1>{count}</h1>
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
