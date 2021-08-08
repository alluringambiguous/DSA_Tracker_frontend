import React from "react";
import CaardStyle from "./CaardStyle/CaardStyle";
import "./Caards.css";

export default function Caards(props) {
  const items = props.listDetails.map((c) => {
    return (
      <CaardStyle
        name={c.author}
        total={c.totalQuestions}
        done={c.solvedQuestions}
        date={c.date}
      />
    );
  });
  return <>{items}</>;
}
