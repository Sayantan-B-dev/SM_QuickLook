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
import SchedulingAlgorithms from "../features/subjects/os/notes/SchedulingAlgorithms"
import SchedulingMetricsExplanatio from "../features/subjects/os/notes/SchedulingMetricsExplanatio"
import FCFSExplanation from "../features/subjects/os/notes/FCFSExplanation"
import SJFNonPreemptiveExplanation from "../features/subjects/os/notes/SJFNonPreemptiveExplanation"
import SRTFExplanation from "../features/subjects/os/notes/SRTFExplanation"
import RoundRobin from "../features/subjects/os/notes/RoundRobin"
import PrioritySchedulingExplanation from "../features/subjects/os/notes/PrioritySchedulingExplanation"
import MixedBurstTimeExample from "../features/subjects/os/notes/MixedBurstTimeExample"
import SchedulingExplanation from "../features/subjects/os/notes/SchedulingExplanation"
import ProcessSynchronizationExplanation from "../features/subjects/os/notes/ProcessSynchronizationExplanation"
import ProducerConsumerCriticalSection from "../features/subjects/os/notes/ProducerConsumerCriticalSection"
import LockMechanisms from "../features/subjects/os/notes/LockMechanisms"
import SemaphoreConcept from "../features/subjects/os/notes/SemaphoreConcept"
import BinarySemaphore from "../features/subjects/os/notes/BinarySemaphore"
import {ProducerConsumer,ReaderWriter,DiningPhilosophers} from "../features/subjects/os/notes/SynchronizationProblems"
import Deadlock from "../features/subjects/os/notes/Deadlock"
import ResourceAllocationGraph from "../features/subjects/os/notes/ResourceAllocationGraph"
import DeadlockHandling from "../features/subjects/os/notes/DeadlockHandling"
import BankersAlgorithm from "../features/subjects/os/notes/BankersAlgorithm"
import OSMemoryManagement from "../features/subjects/os/notes/OSMemoryManagement"
import MemoryManagementTechniques from "../features/subjects/os/notes/MemoryManagementTechniques"
import MemoryManagementPartitions from "../features/subjects/os/notes/MemoryManagementPartitions"
import ProcessAllocation from "../features/subjects/os/notes/ProcessAllocation"
import Paging from "../features/subjects/os/notes/Paging"
import PageTableEntries from "../features/subjects/os/notes/PageTableEntries"
import ThrashingAndMultiprogramming from "../features/subjects/os/notes/ThrashingAndMultiprogramming"
import SegmentationAndPaging from "../features/subjects/os/notes/SegmentationAndPaging"
import Overlay from "../features/subjects/os/notes/Overlay"
import VirtualMemory from "../features/subjects/os/notes/VirtualMemory"
import TLBComponent from "../features/subjects/os/notes/TLBComponent"
import PageReplacementAlgorithms from "../features/subjects/os/notes/PageReplacementAlgorithms"
import DiskArchitecture from "../features/subjects/os/notes/DiskArchitecture"
import DiskAccessTime from "../features/subjects/os/notes/DiskAccessTime"
import DiskScheduling from "../features/subjects/os/notes/DiskScheduling"
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
            <SchedulingAlgorithms/>,
            <SchedulingMetricsExplanatio/>,
            <FCFSExplanation/>,
            <SJFNonPreemptiveExplanation/>,
            <SRTFExplanation/>,
            <RoundRobin/>,
            <PrioritySchedulingExplanation/>,
            <MixedBurstTimeExample/>,
            <SchedulingExplanation/>,
            <ProcessSynchronizationExplanation/>,
            <ProducerConsumerCriticalSection/>,
            <LockMechanisms/>,
            <SemaphoreConcept/>,
            <BinarySemaphore/>,
            <ProducerConsumer/>,
            <ReaderWriter/>,
            <DiningPhilosophers/>,
            <Deadlock/>,
            <ResourceAllocationGraph/>,
            <DeadlockHandling/>,
            <BankersAlgorithm/>,
            <OSMemoryManagement/>,
            <MemoryManagementTechniques/>,
            <MemoryManagementPartitions/>,
            <ProcessAllocation/>,
            <Paging/>,
            <PageTableEntries/>,
            <ThrashingAndMultiprogramming/>,
            <SegmentationAndPaging/>,
            <Overlay/>,
            <VirtualMemory/>,
            <TLBComponent/>,
            <PageReplacementAlgorithms/>,
            <DiskArchitecture/>,
            <DiskAccessTime/>,
            <DiskScheduling/>,
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
