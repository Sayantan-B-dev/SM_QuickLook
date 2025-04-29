import React from "react";
import { useState } from "react";

import AnimateOnScroll from "../components/Animations/AnimateOnScroll";
import SectionHead from "../components/SectionHead";
import "../CSS/CN.css";

import WhatIsComputerNetwork from "../features/subjects/cn/notes/WhatIsComputerNetwork";
import NetworkTypesAndModels from "../features/subjects/cn/notes/NetworkTypesAndModels";
import PhysicalLayer from "../features/subjects/cn/notes/PhysicalLayer";
import NetworkTopologies  from "../features/subjects/cn/notes/NetworkTopologies";
import ManchesterEncoding from "../features/subjects/cn/notes/ManchesterEncoding";
import NetworkDevices from "../features/subjects/cn/notes/NetworkDevices";







function DatabaseManagementSystem() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className="parentHeader">
        <div className="CategoryCn justify-center flex flex-col gap-2 top-0 z-10">
          <button
            className="allBtn dbmsBtn"
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className="diplomaBtn dbmsBtn"
            onClick={() => setActiveTab("diploma")}
          >
            Diploma
          </button>
        </div>
        <div className="SectionName">Computer Network</div>
      </div>

      {activeTab === "all" && (
        <div className="allDbms dbmsBox">
          {[
            <WhatIsComputerNetwork />, 
            <NetworkTypesAndModels />,
            <PhysicalLayer />,
            <NetworkTopologies  />,
            <ManchesterEncoding />,
            <NetworkDevices />,
          ].map(
            (Component, index) => (
              <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
            )
          )}
        </div>
      )}

      {activeTab === "diploma" && (
        <div className="diplomaDbms dbmsBox">
          {[<SectionHead text="" />].map((Component, index) => (
            <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
          ))}
        </div>
      )}
    </>
  );
}

export default DatabaseManagementSystem;
