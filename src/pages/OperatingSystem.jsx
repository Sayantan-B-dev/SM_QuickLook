import React from "react";
import { useState } from "react";

import AnimateOnScroll from "../components/Animations/AnimateOnScroll";
import SectionHead from "../components/SectionHead";
import "../CSS/OS.css";

// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"

function OperatingSystem() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className="parentHeader">
        <div className="CategoryOs justify-center flex flex-col gap-2 top-0 z-10">
          <button
            className="allBtn"
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className="diplomaBtn"
            onClick={() => setActiveTab("diploma")}
          >
            Diploma
          </button>
        </div>
        <div className="SectionName">Operating System</div>
      </div>

      {activeTab === "all" && (
        <div className="allOs">
          {[
            
          ].map((Component, index) => (
            <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
          ))}
        </div>
      )}

      {activeTab === "diploma" && (
        <div className="diplomaOs">
          {[
            
          ].map((Component, index) => (
            <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
          ))}
        </div>
      )}
    </>
  );
}

export default OperatingSystem;
