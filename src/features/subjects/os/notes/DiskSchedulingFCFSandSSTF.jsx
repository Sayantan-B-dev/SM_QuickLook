import React from "react";
import "../../../../CSS/OS.css";
import FCFS from "./DiskScheduling/FCFS";
import SSTF from "./DiskScheduling/SSTF";

function DiskSchedulingFCFSandSSTF() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title"></h1>
        <FCFS />
        <SSTF />
      </div>
    </div>
  );
}

export default DiskSchedulingFCFSandSSTF;
