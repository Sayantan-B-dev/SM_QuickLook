import React from "react";
import { useState } from "react";

import AnimateOnScroll from "../components/Animations/AnimateOnScroll";
import SectionHead from "../components/SectionHead";
import "../CSS/JAVA.css";
import "../CSS/Button.css";


import DiplomaJAVA from "../features/subjects/java/notes/DiplomaJAVA"
import ONGOING from "../components/ONGOING"

function OperatingSystem() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className="parentHeader">
        <div className="CategoryOs justify-center flex flex-col gap-2 top-0 z-10">
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
      </div>


      {activeTab === "all" && (
        <div className="allOs">
          <ONGOING />
        </div>
      )}
      {/* {activeTab === "all" && (
        <div className="allOs">
          {[
          ].map((Component, index) => (
            <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
          ))}
        </div>
      )} */}

      {activeTab === "diploma" && (
          <div className="diplomaOs">
            {[
              <DiplomaJAVA />,
            ].map((Component, index) => (
              <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
            ))}

          </div>
      )}
    </>
  );
}

export default OperatingSystem;
