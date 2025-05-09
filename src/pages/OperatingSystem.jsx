import React from "react";
import { useState } from "react";

import AnimateOnScroll from "../components/Animations/AnimateOnScroll";
import SectionHead from "../components/SectionHead";
import "../CSS/OS.css";
import "../CSS/Button.css"

import OSFunctionsOverview from "../features/subjects/os/notes/OSFunctionsOverview"
import OSTypesOverview from "../features/subjects/os/notes/OSTypesOverview"
import PreemptiveVsNonPreemptive from "../features/subjects/os/notes/PreemptiveVsNonPreemptive"
import ProcessStatesAndScheduling from "../features/subjects/os/notes/ProcessStatesAndScheduling"
import FilePermissionsAndChmod from "../features/subjects/os/notes/FilePermissionsAndChmod"
import LseekExplanation from "../features/subjects/os/notes/LseekExplanation"
import SystemCallsOS from "../features/subjects/os/notes/SystemCallsOS"
import ForkSystemCall from "../features/subjects/os/notes/ForkSystemCall"
import UserVsKernelMode from "../features/subjects/os/notes/UserVsKernelMode"
import ProcessVsThread from "../features/subjects/os/notes/ProcessVsThread"
import UserVsKernelLevelThreads from "../features/subjects/os/notes/UserVsKernelLevelThreads"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
// import  from "../features/subjects/os/notes/"
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
        <div className="SectionName">Operating System</div>
      </div>

      {activeTab === "all" && (
        <div className="allOs">
          {[
            <OSFunctionsOverview/>,
            <OSTypesOverview/>,
            <PreemptiveVsNonPreemptive/>,
            <ProcessStatesAndScheduling/>,
            <FilePermissionsAndChmod/>,
            <LseekExplanation/>,
            <SystemCallsOS/>,
            <ForkSystemCall/>,
            <UserVsKernelMode/>,
            <ProcessVsThread/>,
            <UserVsKernelLevelThreads/>,
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
