import React from "react";
import "./CaardStyle.css";
import StarRating from "./StarRating/StarRating";

const CaardStyle = (props) => {
  return (
    <div className="Card">
      <div className="Upper-part">
        <button className="Plus-btn">+</button>
        <span className="Author-name">{props.name}</span>
        <span className="Rating-star">
          <StarRating currentValue="3" />
        </span>
      </div>
      <div className="Lower-part">
        <span className="Total-quetions">
          Number of questions : {props.total}{" "}
        </span>
        <span className="Solve-quetions">Questions Solved : {props.done}</span>
        <span>|||||||||||||||||||</span>
        <div className="Bottom-most">
          <span> Added on</span>
          <div> {props.date}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default CaardStyle;
