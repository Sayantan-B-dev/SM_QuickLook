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
import EthernetFrameFormat    from "../features/subjects/cn/notes/EthernetFrameFormat.jsx"; 
import TokenRing from "../features/subjects/cn/notes/TokenRing.jsx";
import NetworkLayer from "../features/subjects/cn/notes/NetworkLayer.jsx";
import IPv4ClassInfo        from "../features/subjects/cn/notes/IPv4ClassInfo.jsx";
import ClassfulVsClasslessIP from "../features/subjects/cn/notes/ClassfulVsClasslessIP.jsx";
import ClassfulSubnettingAndVLSM from "../features/subjects/cn/notes/ClassfulSubnettingAndVLSM"
import ClasslessSubnettingAndVLSM from "../features/subjects/cn/notes/ClasslessSubnettingAndVLSM"
import IPv4HeaderFormat from "../features/subjects/cn/notes/IPv4HeaderFormat"
import IPv6Header from "../features/subjects/cn/notes/IPv6Header"
import RoutingProtocols from "../features/subjects/cn/notes/RoutingProtocols"
import DistanceVectorRouting from "../features/subjects/cn/notes/DistanceVectorRouting"
import LinkStateRouting from "../features/subjects/cn/notes/LinkStateRouting"
import ARP from "../features/subjects/cn/notes/ARP"
import NAT from "../features/subjects/cn/notes/NAT"
import TransportLayer from "../features/subjects/cn/notes/TransportLayer"
import TCP from "../features/subjects/cn/notes/TCP"
import TCPconnection from "../features/subjects/cn/notes/TCPconnection"
import UDP from "../features/subjects/cn/notes/UDP"
import SessionLayerDetails from "../features/subjects/cn/notes/SessionLayerDetails"
import PresentationLayer from "../features/subjects/cn/notes/PresentationLayer"
import ApplicationLayer from "../features/subjects/cn/notes/ApplicationLayer"
import DNSLayer from "../features/subjects/cn/notes/DNSLayer"
import ApplicationLayerProtocols from "../features/subjects/cn/notes/ApplicationLayerProtocols"
import FtpSmtpHttpComponent from "../features/subjects/cn/notes/FtpSmtpHttpComponent"
import CryptographyComponent from "../features/subjects/cn/notes/CryptographyComponent"
import RSAAlgorithm from "../features/subjects/cn/notes/RSAAlgorithm"
import CNDemoFirewall from "../features/subjects/cn/notes/CNDemoFirewall"
import CNDemoOSILayersComparison from "../features/subjects/cn/notes/CNDemoOSILayersComparison"
import LinuxNetworkingCommands from "../features/subjects/cn/notes/LinuxNetworkingCommands"
import LatencyThroughputBandwidth from "../features/subjects/cn/notes/LatencyThroughputBandwidth"
import FastVsGigabitEthernet from "../features/subjects/cn/notes/FastVsGigabitEthernet"
import PingVsLoopback from "../features/subjects/cn/notes/PingVsLoopback"
import HttpVsHttps from "../features/subjects/cn/notes/HttpVsHttps"
import NetworkSecurityProtocols from "../features/subjects/cn/notes/NetworkSecurityProtocols"
import VPNComponent from "../features/subjects/cn/notes/VPNComponent"
import CIDRComponent from "../features/subjects/cn/notes/CIDRComponent"




import NetworkHistoryComponent from "../features/subjects/cn/notes/NetworkHistoryComponent"
import NetworkUsageComponent from "../features/subjects/cn/notes/NetworkUsageComponent"
import NetworkProtocolsAndOrganizations from "../features/subjects/cn/notes/NetworkProtocolsAndOrganizations"
import LineConfiguration from "../features/subjects/cn/notes/LineConfiguration"
import NetworkTopology from "../features/subjects/cn/notes/NetworkTopology"
import PeriodicAnalogSignals from "../features/subjects/cn/notes/PeriodicAnalogSignals"
import NetworkCategories from "../features/subjects/cn/notes/NetworkCategories"
import NetworkPerformance  from "../features/subjects/cn/notes/NetworkPerformance"
import NetworkModels from "../features/subjects/cn/notes/NetworkModels"
import TransmissionMedia from "../features/subjects/cn/notes/TransmissionMedia"
import MultiplexingAndSwitching from "../features/subjects/cn/notes/MultiplexingAndSwitching"
import DataLinkLayerDeepDive from "../features/subjects/cn/notes/DataLinkLayerDeepDive"
import TransportLayerProtocols from "../features/subjects/cn/notes/TransportLayerProtocols"
// import  from "../features/subjects/cn/notes/"
// import  from "../features/subjects/cn/notes/"
// import  from "../features/subjects/cn/notes/"
// import  from "../features/subjects/cn/notes/"
// import  from "../features/subjects/cn/notes/"
// import  from "../features/subjects/cn/notes/"
// import  from "../features/subjects/cn/notes/"
// import  from "../features/subjects/cn/notes/"
// import  from "../features/subjects/cn/notes/"
// import  from "../features/subjects/cn/notes/"
// import  from "../features/subjects/cn/notes/"































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
            <EthernetFrameFormat />,
            <TokenRing />,
            <NetworkLayer />,
            <IPv4ClassInfo />,
            <ClassfulVsClasslessIP />,
            <ClassfulSubnettingAndVLSM/>,
            <ClasslessSubnettingAndVLSM/>,
            <IPv4HeaderFormat/>,
            <IPv6Header/>,
            <RoutingProtocols/>,
            <DistanceVectorRouting/>,
            <LinkStateRouting/>,
            <ARP/>,
            <NAT/>,
            <TransportLayer/>,
            <TCP/>,
            <TCPconnection/>,
            <UDP/>,
            <SessionLayerDetails/>,
            <PresentationLayer/>,
            <ApplicationLayer/>,
            <DNSLayer/>,
            <ApplicationLayerProtocols/>,
            <FtpSmtpHttpComponent/>,
            <CryptographyComponent/>,
            <RSAAlgorithm/>,
            <CNDemoFirewall/>,
            <CNDemoOSILayersComparison/>,
            <LinuxNetworkingCommands/>,
            <LatencyThroughputBandwidth/>,
            <FastVsGigabitEthernet/>,
            <PingVsLoopback/>,
            <HttpVsHttps/>,
            <NetworkSecurityProtocols/>,
            <VPNComponent/>,
            <CIDRComponent/>,
          ].map(
            (Component, index) => (
              <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
            )
          )}
        </div>
      )}

      {activeTab === "diploma" && (
        <div className="diplomaDbms dbmsBox">
          {[
            <WhatIsComputerNetwork />,
            <NetworkHistoryComponent/>,
            <NetworkUsageComponent/>,
            <NetworkTypesAndModels />,
            <NetworkProtocolsAndOrganizations/>,
            <LineConfiguration/>,
            <NetworkTopology/>,
            <NetworkCategories/>,
            <PeriodicAnalogSignals/>,
            <NetworkPerformance/>,
            <NetworkModels/>,
            <TransmissionMedia/>,
            <MultiplexingAndSwitching/>,
            <PhysicalLayer />,
            <NetworkTopologies />,
            <NetworkDevices />,
            <Repeaters />,
            <Hubs />,
            <Bridges />,
            <Switches />,
            <Routers />,
            <CircuitSwitching />,
            <PacketSwitching />,
            <DatagramVsVirtualCircuitAndMessageSwitching />,
            <DataLinkLayerDeepDive/>,
            <DatalinkLayerDetails />,
            <DataLinkLayerProtocols />,
            <FramingAndErrorControl />,
            <CrcProtocol />,
            <HammingCode />,
            <MediumAccessProtocols />,
            <CSMAVariants />,
            <EthernetFrameFormat />,
            <TokenRing />,
            <NetworkLayer />,
            <IPv4ClassInfo />,
            <ClassfulVsClasslessIP />,
            <ClassfulSubnettingAndVLSM />,
            <ClasslessSubnettingAndVLSM />,
            <IPv4HeaderFormat />,
            <IPv6Header />,
            <RoutingProtocols />,
            <DistanceVectorRouting />,
            <TransportLayerProtocols/>,
            <LinkStateRouting />,
            <ARP />,
            <NAT />,
            <TransportLayer />,
            <TCP />,
            <TCPconnection />,
            <UDP />,
            <ApplicationLayer />,
            <DNSLayer />,
            <ApplicationLayerProtocols />,
            <FtpSmtpHttpComponent />,
            <PingVsLoopback/>,
            <HttpVsHttps/>,
            <NetworkSecurityProtocols />,
            <VPNComponent />,
            <CIDRComponent />
            
          ].map((Component, index) => (
            <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
          ))}
        </div>
      )}
    </>
  );
}

export default DatabaseManagementSystem;
