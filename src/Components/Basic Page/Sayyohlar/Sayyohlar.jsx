import React, { useState } from "react";
import Question from "./Question";
import "./Sayyoh.css";
import SayyohData from "./SayyohData";

const Sayyohlar = () => {
  const [questions, setQuestions] = useState(SayyohData);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {" "}
      . <br />
      <div className="page-ago">.</div>
      <div className="page-head">
        <div className="container">
          <div className="row">
            <div className="page-head-content">
              <h1 className="page-title">Sayyohlar uchun!</h1>
              <h4>
                O‘zbekistonga sayohat haqida bilishingiz <br /> kerak bo‘lgan
                barcha narsalar bitta sahifada
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Foydali ma'lumotlar</h2>
      </div>
      <div className="container accartion">
        <section className="info">
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Sayyohlar;
