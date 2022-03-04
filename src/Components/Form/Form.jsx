import React, { useState } from "react";

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
    <div class="container2">
      <form onChange={handleSubmit} onSubmit={(e) => e.preventDefault()}>
        <div class="row">
          <h4>Buyurtma qilish</h4>
          <div class="input-group input-group-icon">
            <input type="text" placeholder="F.I.O" />
            <div class="input-icon">
              <i class="fa fa-user"></i>
            </div>
          </div>
          <div class="input-group input-group-icon">
            <input type="email" placeholder="Pasport seriya raqam" />
            <div class="input-icon">
              <i class="fa fa-envelope"></i>
            </div>
          </div>
          <div class="input-group input-group-icon">
            <input type="password" placeholder="Telefon raqam" />
            <div class="input-icon">
              <i class="fa fa-key"></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div>
            <div class="count">
              <span>Count:</span>
              <span>{count}</span>
            </div>
            <div class="buttons">
              <button title={"-"} action={decrementCount}>
                -
              </button>
              <button title={"+"} action={incrementCount}>
                +
              </button>
            </div>
          </div>
          <div class="col-half">
            <div class="input-group input-group-icon">
              <input type="text" placeholder="Card CVC" />
              <div class="input-icon">
                <i class="fa fa-user"></i>
              </div>
            </div>
          </div>
          <div class="col-half">
            <div class="input-group">
              <select>
                <option>01 Jan</option>
                <option>02 Jan</option>
              </select>
              <select>
                <option>2015</option>
                <option>2016</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <h4>Ushbu turni bron qiling!</h4>
          <div class="input-group">
            <input id="terms" type="checkbox" />
            <label for="terms">
              I accept the terms and conditions for signing up to this service,
              and hereby confirm I have read the privacy policy.
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
