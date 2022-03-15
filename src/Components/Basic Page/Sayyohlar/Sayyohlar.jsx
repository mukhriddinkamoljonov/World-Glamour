import React, { useState } from "react";
import Question from "./Question";
import "./Sayyoh.css";
import { BsFillInfoCircleFill, BsFillGiftFill } from "react-icons/bs";
import { FaCloudSun, FaCcVisa, FaBriefcase } from "react-icons/fa";
import globus from "./img/globus.jpg";
import fasl from "./img/fasl.jpg";
import bayram from "./img/bayram.jpg";
import diplomat from "./img/diplomat.jpg";
import viza from "./img/viza.jpg";
import { useTranslation } from "react-i18next";

const Sayyohlar = () => {
  const { t } = useTranslation();
  const SayyohData = [
    {
      id: 1,
      title: "Umumiy ma'lumotlar",
      info: (
        <div>
          <strong>{t("useful")} </strong> {t("useful1")} <br />{" "}
          <strong> {t("useful2")} </strong> {t("useful3")}
          <br /> <strong> {t("useful4")} </strong> {t("useful5")}
          <br /> <strong> {t("useful6")} </strong>
          {t("useful7")}
          <br /> <strong>{t("useful8")} </strong> {t("useful9")}
          <br /> <strong> {t("useful10")} </strong> {t("useful11")}
          <br /> <strong> {t("useful12")} </strong>
          {t("useful13")}
          <br /> <strong> {t("useful14")}</strong>
          {t("useful15")}
          <br /> <strong> {t("useful16")} </strong> {t("useful17")}
          <br /> <strong> {t("useful18")} </strong> {t("useful19")}
          <br /> <strong> {t("useful20")} </strong> {t("useful21")} <br />{" "}
          <strong>{t("useful22")} </strong> {t("useful23")} <br />{" "}
          <strong> {t("useful24")} </strong> {t("useful25")} <br />{" "}
          <strong> {t("useful26")} </strong> {t("useful27")}
        </div>
      ),
      icon: <BsFillInfoCircleFill />,
      img: globus,
    },
    {
      id: 2,
      title: "4 fasl",
      info: <div>{t("useful28")}</div>,
      icon: <FaCloudSun />,
      img: fasl,
    },
    {
      id: 3,
      title: "Bayramlar",
      info: (
        <div>
          <strong> {t("useful29")}</strong> {t("useful30")}
          <br /> <strong>{t("useful31")}</strong>
          {t("useful32")} <br /> <strong>{t("useful33")}</strong>{" "}
          {t("useful34")} <br /> <strong>{t("useful35")}</strong>{" "}
          {t("useful36")}
          <br /> <strong>{t("useful37")}</strong>
          {t("useful38")}
          <br />
          <strong> {t("useful39")}</strong> {t("useful40")}
          <br />
          <strong> {t("useful41")} </strong>
          {t("useful42")} <br /> <strong>{t("useful43")} </strong>
          {t("useful44")}
          <br />
          <strong> {t("useful45")} </strong>
          {t("useful46")}
          <br />
          <strong>{t("useful47")} </strong> {t("useful48")}
        </div>
      ),
      icon: <BsFillGiftFill />,
      img: bayram,
    },
    {
      id: 4,
      title: "Diplomatik vakolatxonalar",
      info: (
        <div>
          <strong>{t("useful49")} </strong>
        </div>
      ),
      icon: <FaBriefcase />,
      img: diplomat,
    },
    {
      id: 5,
      title: "Viza",
      info: (
        <div>
          <strong>{t("useful50")} </strong>{" "}
          <a href="https://e-visa.gov.uz/main">"e-visa.gov.uz</a>{" "}
          <strong>{t("useful51")}</strong>{" "}
          <a href="https://e-visa.gov.uz/main"> {t("useful52")}</a>{" "}
        </div>
      ),
      icon: <FaCcVisa />,
      img: viza,
    },
  ];

  return (
    <div style={{ backgroundColor: "#fff" }}>
      . <br />
      <div className="page-ago">.</div>
      <div className="page-head">
        <div className="container">
          <div className="row">
            <div className="page-head-content">
              <h1 className="page-title">{t("turist_title")}</h1>
              <h4>
                {t("turist_title1")} <br /> {t("turist_title3")}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>{t("turist_title2")}</h2>
      </div>
      <div className="container accartion">
        <section className="">
          {SayyohData.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Sayyohlar;
