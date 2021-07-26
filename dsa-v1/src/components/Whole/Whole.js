import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";
import Caards from "../Caards/Caards";
import "./Whole.css";

export default function Whole() {
  return (
    <div className="Whole">
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="Right">
        <div className="Nav">
          <Nav />
        </div>

        <div className="Cards">
          <Caards />
        </div>
      </div>
    </div>
  );
}
