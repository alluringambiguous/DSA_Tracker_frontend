import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <>
      <ul className="List-items-1">
        <span className="btn-1">
          <Link to="/" style={{ textDecoration: "none" }}>
            <strong>Dash</strong>board
          </Link>
        </span>
        <span className="btn-2">
          <strong>{props.username}</strong> 
        </span>
      </ul>
    </>
  );
}
