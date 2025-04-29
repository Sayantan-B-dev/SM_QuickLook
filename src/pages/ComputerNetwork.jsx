import React from "react";
import { useState } from "react";

import AnimateOnScroll from "../components/Animations/AnimateOnScroll";
import SectionHead from "../components/SectionHead";
import "../CSS/CN.css";



function DatabaseManagementSystem() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className="CategoryCn justify-center flex flex-col gap-2 top-0 z-10">
        <button className="allBtn dbmsBtn" onClick={() => setActiveTab("all")}>
          All
        </button>
        <button className="diplomaBtn dbmsBtn" onClick={() => setActiveTab("diploma")}>
          Diploma
        </button>
      </div>


      {activeTab === "all" && (
        <div className="allDbms dbmsBox">
          {[
           
          ].map((Component, index) => (
            <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
          ))}
        </div>
      )}

      {activeTab === "diploma" && (
        <div className="diplomaDbms dbmsBox">
          {[
            <SectionHead text="" />,
          ].map((Component, index) => (
            <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
          ))}
        </div>
      )}
    </>
  );
}

export default DatabaseManagementSystem;
