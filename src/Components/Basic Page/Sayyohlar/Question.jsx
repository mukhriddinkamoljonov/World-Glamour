import React, { useState } from "react";
import "./Sayyoh.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info, icon, img }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question">
      <header>
        <div style={{ display: "flex" }}>
          <h4 onClick={() => setExpanded(!expanded)} className="question-title">
            <span style={{ color: "#DD2C00", fontSize: "30px" }}> {icon}</span>{" "}
            {title}
          </h4>
          <button className="btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        <hr />
      </header>
      {expanded && (
        <div className="question-container" style={{ marginBottom: 53 }}>
          <p style={{ alignItems: "justify" }}>{info}</p>
          <img
            src={img}
            alt=""
            style={{
              width: 400,
              height: 300,
              display: "flex",
              borderRadius: 15,
              marginLeft: "auto",
            }}
          />
        </div>
      )}
    </article>
  );
};

export default Question;
