import React from "react";
import "../../../../CSS/CN.css";

function LineConfiguration() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Line Configuration</h1>

        {/* Line Configuration Overview Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Line Configuration?</h2>
          <p className="cn-example">
            Line configuration refers to the physical and logical setup of communication channels between devices in a network. It defines how devices are connected and how they communicate over the network.
          </p>
          <p className="cn-example">
            It can be of two types: <strong>Point-to-Point</strong> and <strong>Multipoint</strong>.
          </p>
        </div>

        {/* Point-to-Point Configuration Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Point-to-Point Line Configuration</h2>
          <p className="cn-example">
            A point-to-point line configuration involves a direct connection between two devices, where data flows directly from one device to another. It is commonly used in simple network setups, such as connecting two routers or devices over a dedicated link.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Device A ----- Line ----- Device B
`}
          </pre>
          <p className="cn-example">
            This configuration provides a simple, direct communication channel with minimal interference.
          </p>
        </div>

        {/* Multipoint Configuration Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Multipoint Line Configuration</h2>
          <p className="cn-example">
            A multipoint configuration, also known as a shared line, connects multiple devices over a single communication channel. In this setup, all connected devices share the same line for data transmission.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Device A ----- Line ----- Device B
                |
            Device C
`}
          </pre>
          <p className="cn-example">
            In a multipoint configuration, the communication channel is shared, meaning that all devices on the network can send and receive data, though not simultaneously.
          </p>
        </div>

        {/* Line Configuration Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Point-to-Point vs Multipoint Configuration</h2>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Point-to-Point Configuration:

Device A ----- Line ----- Device B

Multipoint Configuration:

Device A ----- Line ----- Device B
                |
            Device C
`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default LineConfiguration;
