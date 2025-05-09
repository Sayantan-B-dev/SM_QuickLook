import React from "react";
import "../../../../CSS/OS.css";
import SCAN from "./DiskScheduling/SCAN";
import LOOK from "./DiskScheduling/LOOK";

function DiskSchedulingSCANandLOOK() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title"></h1>
        <SCAN />
        <LOOK />
      </div>
    </div>
  );
}

export default DiskSchedulingSCANandLOOK;
