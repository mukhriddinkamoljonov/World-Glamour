import React from "react";
import "./Form.css";

export default function Button(props) {
  let { action, title } = props;
  return (
    <div className="btn-form" onClick={action}>
      {title}
    </div>
  );
}
