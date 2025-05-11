import React from "react";
import { useState } from "react";

import AnimateOnScroll from "../components/Animations/AnimateOnScroll";
import SectionHead from "../components/SectionHead";
import "../CSS/SE.css";
import "../CSS/Button.css";


import SoftwareEngineeringDefinitionEvolution from "../features/subjects/se/notes/SoftwareEngineeringDefinitionEvolution"
import SDLC from "../features/subjects/se/notes/SDLC"
import ClassicalWaterfallModel from "../features/subjects/se/notes/ClassicalWaterfallModel"
import IterativeWaterfallMode from "../features/subjects/se/notes/IterativeWaterfallMode"
import VShapedModel from "../features/subjects/se/notes/VShapedModel"
import PrototypingModel from "../features/subjects/se/notes/PrototypingModel"
import IncrementalModel from "../features/subjects/se/notes/IncrementalModel"
import EvolutionaryModel from "../features/subjects/se/notes/EvolutionaryModel"
import SpiralModel from "../features/subjects/se/notes/SpiralModel"
import RADModel from "../features/subjects/se/notes/RADModel"
import AgileModel from "../features/subjects/se/notes/AgileModel"
import SDLCComparison from "../features/subjects/se/notes/SDLCComparison"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"
//import  from "../features/subjects/se/notes/"





import DiplomaSE from "../features/subjects/se/notes/DiplomaSE"

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
          {[
            <SoftwareEngineeringDefinitionEvolution/>,
            <SDLC/>,
            <ClassicalWaterfallModel/>,
            <IterativeWaterfallMode/>,
            <VShapedModel/>,
            <PrototypingModel/>,
            <IncrementalModel/>,
            <EvolutionaryModel/>,
            <SpiralModel/>,
            <RADModel/>,
            <AgileModel/>,
            <SDLCComparison/>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
            //</>,
          ].map((Component, index) => (
            <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
          ))}
        </div>
      )}

      {activeTab === "diploma" && (
        <div className="diplomaOs">
          {[
            <DiplomaSE/>,
          ].map((Component, index) => (
            <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
          ))}
        </div>
      )}
    </>
  );
}

export default OperatingSystem;
