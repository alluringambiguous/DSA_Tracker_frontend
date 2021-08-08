import React from "react";
import "./CompletionStatus.css";
import { Circle } from "./Circle/Circle";
import StarRating from "../../Caards/CaardStyle/StarRating/StarRating";
export const CompletionStatus = () => {
  return (
    <div className="mainBox1">
      <div className="main1">
        <span className="heading">Completion Status</span>
        <div className="score">
          <Circle num="113" nam="Total" />
          <Circle num="97" nam="Answered" />
          <Circle num="14" nam="Left" />
          <div className="stars1">
            <StarRating currentValue="4" />
          </div>
        </div>
      </div>
    </div>
  );
};
