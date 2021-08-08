import React from "react";
import "./Circle.css";

export const Circle = (props) => {
  return (
    <div className="total">
      <span className="num">{props.num}</span>
      <span className="nam">{props.nam}</span>
    </div>
  );
};
