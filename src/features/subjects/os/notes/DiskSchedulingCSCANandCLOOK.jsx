import React from "react";
import "../../../../CSS/OS.css";
import CSCAN from "./DiskScheduling/CSCAN";
import CLOOK from "./DiskScheduling/CLOOK";

function DiskSchedulingCSCANandCLOOK() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title"></h1>
        <CSCAN />
        <CLOOK />
      </div>
    </div>
  );
}

export default DiskSchedulingCSCANandCLOOK;
