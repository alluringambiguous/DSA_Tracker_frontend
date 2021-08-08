import React from "react";
import "./CaardStyle.css";
import StarRating from "./StarRating/StarRating";
import { Link } from "react-router-dom";

const CaardStyle = (props) => {
  return (
    <Link to="/LandingPage" style={{ textDecoration: "none" }}>
      <div className="Card">
        <div className="Upper-part">
          <button className="Plus-btn">+</button>
          <span className="Author-name">{props.name}</span>
        
            <span className="Rating-star">
              <StarRating currentValue="4" />
            </span>
         
        </div>
        <div className="Lower-part">
          <span className="Total-quetions">
            Number of questions : {props.total}{" "}
          </span>
          <span className="Solve-quetions">
            Questions Solved : {props.done}
          </span>
          <span>|||||||||||||||||||</span>
          <div className="Bottom-most">
            <span> Added on</span>
            <div> {props.date}</div>
          </div>
        </div>
        <div></div>
      </div>
    </Link>
  );
};
export default CaardStyle;
