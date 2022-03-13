import React, { useState } from "react";
import Question from "./Question";
import "./Sayyoh.css";
import SayyohData from "./SayyohData";
import { useTranslation } from "react-i18next";

const Sayyohlar = () => {
  const { t } = useTranslation();
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
              <h1 className="page-title">{t("turist_title")}</h1>
              <h4>{t("turist_title1")} <br /> { t("turist_title3")}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>{t("turist_title2")}</h2>
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
