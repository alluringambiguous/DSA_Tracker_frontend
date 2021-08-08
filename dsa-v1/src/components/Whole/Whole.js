import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";
import Caards from "../Caards/Caards";
import "./Whole.css";
import api from "../../config/axios";
export default function Whole() {
  const [user, setUser] = useState({
    codeforcesId: 0,
    username: null,
    listDetails: [],
  });
  const hello = () => {
    api.get("/user/user/60fc470820f0124cb79793d0").then((res) => {
      setUser({
        codeforcesId: res.data.codeforcesId,
        username: res.data.username,
        listDetails: res.data.listDetails,
      });
      console.log(res);
    });
  };

  return (
    <div className="Whole">
      {hello()}
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="Right">
        <div className="Nav">
          <Nav username={user.username} />
        </div>

        <div className="Cards">
          <Caards listDetails={user.listDetails} />
        </div>
      </div>
    </div>
  );
}
