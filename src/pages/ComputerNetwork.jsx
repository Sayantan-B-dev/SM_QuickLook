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
import NetworkCables from "../features/subjects/cn/notes/NetworkCables";
import Repeaters from "../features/subjects/cn/notes/Repeaters";
import Hubs from "../features/subjects/cn/notes/Hubs.jsx";
import Bridges  from "../features/subjects/cn/notes/Bridges";
import Switches from "../features/subjects/cn/notes/Switches";
import Routers from "../features/subjects/cn/notes/Routers";
import CollisionVsBroadcast from "../features/subjects/cn/notes/CollisionVsBroadcast";
import CircuitSwitching from "../features/subjects/cn/notes/CircuitSwitching";
import PacketSwitching from "../features/subjects/cn/notes/PacketSwitching";
import DatagramVsVirtualCircuitAndMessageSwitching from "../features/subjects/cn/notes/DatagramVsVirtualCircuitAndMessageSwitching";
import DatalinkLayerDetails from "../features/subjects/cn/notes/DatalinkLayerDetails";
import DataLinkLayerProtocols from "../features/subjects/cn/notes/DataLinkLayerProtocols";
import FramingAndErrorControl from "../features/subjects/cn/notes/FramingAndErrorControl";
import CrcProtocol  from "../features/subjects/cn/notes/CrcProtocol";
import HammingCode from "../features/subjects/cn/notes/HammingCode.jsx";
import MediumAccessProtocols from "../features/subjects/cn/notes/MediumAccessProtocols.jsx";
import CSMAVariants from "../features/subjects/cn/notes/CSMAVariants.jsx";








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
            <NetworkCables />,
            <Repeaters />,
            <Hubs />,
            <Bridges />,
            <Switches />,
            <Routers />,
            <CollisionVsBroadcast />,
            <CircuitSwitching />,
            <PacketSwitching />,
            <DatagramVsVirtualCircuitAndMessageSwitching />,
            <DatalinkLayerDetails />,
            <DataLinkLayerProtocols />,
            <FramingAndErrorControl />,
            <CrcProtocol />,
            <HammingCode />,
            <MediumAccessProtocols />,
            <CSMAVariants />,
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
