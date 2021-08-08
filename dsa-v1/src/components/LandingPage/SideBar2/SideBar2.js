import React from "react";
import "./SideBar2.css";
import { BiHomeAlt, BiUser, BiLogOut } from "react-icons/bi";
import { CgBrowse } from "react-icons/cg";
import { FaClipboardList } from "react-icons/fa";
// import { Sidebardata } from './Sidebardata'

export default function Sidebar2() {
  return (
    <div className="kuchbhi">
      <div className="Logo-1">
        <FaClipboardList size="45px" color="#945ad1" />
        <span>
          <strong>
            DSA <br></br>TRACKER
          </strong>
        </span>
      </div>
      <div className="ca">
        <div className="Menu">
          <span>Menu</span>
        </div>

        <div className="Items">
          <ul className="List-items">
            <li className="list">
              <BiHomeAlt size="24px" />
              <strong>
                <span className="dashboard">Dashboard</span>
              </strong>
            </li>
            <li className="list">
              <BiUser size="24px" />
              User Profile
            </li>
            <li className="list">
              <CgBrowse size="24px" />
              Browse
            </li>
          </ul>
        </div>
      </div>
      <div></div>
      <div className="Logout">
        <BiLogOut size="20px" />
        Logout
      </div>
    </div>
  );
}
