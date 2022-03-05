import React, { useState } from "react";
import Button from "./button";

const Form = () => {
  const [count, setCount] = useState(1);

  let incrementCount = () => {
    setCount(count + 1);
  };
  let decrementCount = () => {
    setCount(count - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
              <h3>Summa:</h3>
            </div>
            <div className="form-flex">
              <h1>{count}</h1>
              <div className="buttons">
                <Button title={"-"} action={decrementCount} /> <br />
                <Button title={"+"} action={incrementCount} />
              </div>
            </div>
          </div>
          {/* <div className="col-half">
            <div className="input-group input-group-icon">
              <input type="text" placeholder="Card CVC" />
              <div className="input-icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
          </div> */}
          <div className="col-half">
            <div className="input-group">
              <select>
                <option>01 Jan</option>
                <option>02 Jan</option>
              </select>
              <select>
                <option>2015</option>
                <option>2016</option>
              </select>
            </div>
          </div>{" "}
        </div>
        <div className="row">
          <h4>Ushbu turni bron qiling!</h4>
          <div className="input-group">
            <input id="terms" type="checkbox" />
            <label for="terms">
              I accept the terms and conditions for signing up to this service,
              and hereby confirm I have read the privacy policy.
            </label>
          </div>
        </div>{" "}
        <button class="button-48" role="button">
          <span class="texta">To'lov</span>
        </button>
      </form>
    </div>
  );
};

export default Form;
