import React from "react";
import "../../../../CSS/CN.css";
import Repeaters from "./networkdevices/Repeaters2"
import Hubs from "./networkdevices/Hubs2"
import Switches from "./networkdevices/Switches2"
import Routers from "./networkdevices/Routers2"
import AccessPoints from "./networkdevices/AccessPoints2"
import Gateways from "./networkdevices/Gateways2"
import Bridges from "./networkdevices/Bridges2"

function NetworkDevices2() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Network Devices:</h1>
        <Repeaters />
<Hubs />
<Switches/>
<Routers />
<AccessPoints />
<Gateways />
<Bridges />




      </div>
    </div>
  );
}

export default NetworkDevices2;
