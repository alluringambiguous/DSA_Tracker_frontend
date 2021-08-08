import React from "react";
import "./Landingpage.css";
import Nav from "../Nav/Nav";
import SideBar2 from "./SideBar2/SideBar2";
import { CompletionStatus } from "./CompletionStatus/CompletionStatus";
import { UnsolvedQuestions } from "./UnsolvedQuestions/UnsolvedQuestions";
import { SolvedQuestions } from "./SolvedQuestions/SolvedQuestions";
export const Landingpage = () => {
  return (
    <div className="Whole-2">
      <div className="Sidebar">
        <SideBar2 />
      </div>
      <div className="Right">
        <div>
          <Nav />
        </div>
        <div>
          <CompletionStatus />
        </div>
        <div>
          <UnsolvedQuestions />
        </div>
        <div>
          <SolvedQuestions />
        </div>
      </div>
    </div>
  );
};
