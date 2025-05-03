import React from "react";
import "../../../../CSS/CN.css";

function MultiplexingAndSwitching() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Multiplexing & Switching</h1>

        {/* Multiplexing Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Multiplexing</h2>
          <p className="cn-example">
            **Multiplexing** refers to the process of combining multiple signals into one signal for transmission over a single communication channel. It allows for more efficient use of the available bandwidth, thereby reducing the cost and enhancing the capacity of communication networks.
          </p>

          {/* Frequency Division Multiplexing (FDM) */}
          <div className="cn-subsection">
            <h3>Frequency Division Multiplexing (FDM)</h3>
            <p className="cn-example">
              **Frequency Division Multiplexing (FDM)** divides the available bandwidth into distinct frequency channels. Each signal is transmitted simultaneously on a separate frequency band within the total bandwidth.
            </p>
            <table className="cn-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bandwidth</strong></td>
                  <td>Divided into multiple frequency bands</td>
                </tr>
                <tr>
                  <td><strong>Applications</strong></td>
                  <td>Radio broadcasting, TV channels</td>
                </tr>
              </tbody>
            </table>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of Frequency Division Multiplexing (FDM):

    +-----------------------------------+
    | Signal 1 (Frequency Band 1)       |
    +-----------------------------------+
    | Signal 2 (Frequency Band 2)       |
    +-----------------------------------+
    | Signal 3 (Frequency Band 3)       |
    +-----------------------------------+
`}
            </pre>
          </div>

          {/* Wavelength Division Multiplexing (WDM) */}
          <div className="cn-subsection">
            <h3>Wavelength Division Multiplexing (WDM)</h3>
            <p className="cn-example">
              **Wavelength Division Multiplexing (WDM)** is a technology used in fiber optic networks. It combines multiple optical signals at different wavelengths (or light frequencies) into one optical signal for transmission over a single fiber.
            </p>
            <table className="cn-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bandwidth</strong></td>
                  <td>Uses multiple optical signals of different wavelengths</td>
                </tr>
                <tr>
                  <td><strong>Applications</strong></td>
                  <td>High-speed fiber optic networks</td>
                </tr>
              </tbody>
            </table>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of Wavelength Division Multiplexing (WDM):

    +-----------------------------------+
    | Signal 1 (Wavelength 1)           |
    +-----------------------------------+
    | Signal 2 (Wavelength 2)           |
    +-----------------------------------+
    | Signal 3 (Wavelength 3)           |
    +-----------------------------------+
`}
            </pre>
          </div>

          {/* Time Division Multiplexing (TDM) */}
          <div className="cn-subsection">
            <h3>Time Division Multiplexing (TDM)</h3>
            <p className="cn-example">
              **Time Division Multiplexing (TDM)** divides the available time into slots, with each signal occupying its time slot in a round-robin manner. It allows multiple signals to share the same transmission channel by switching between them rapidly.
            </p>
            <table className="cn-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bandwidth</strong></td>
                  <td>Shared time slots</td>
                </tr>
                <tr>
                  <td><strong>Applications</strong></td>
                  <td>Telephone systems, digital communications</td>
                </tr>
              </tbody>
            </table>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of Time Division Multiplexing (TDM):

    +-----------------------------------+
    | Time Slot 1: Signal 1             |
    +-----------------------------------+
    | Time Slot 2: Signal 2             |
    +-----------------------------------+
    | Time Slot 3: Signal 3             |
    +-----------------------------------+
`}
            </pre>
          </div>
        </div>

        {/* Switching Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Introduction to Switching</h2>
          <p className="cn-example">
            **Switching** is the process of routing signals between different paths or circuits in a network. There are three primary types of switching: Circuit Switching, Packet Switching, and Message Switching.
          </p>

          {/* Three Methods of Switching */}
          <div className="cn-subsection">
            <h3>Three Methods of Switching</h3>
            <p className="cn-example">
              There are three primary types of switching methods used in communication networks:
            </p>
            <ul>
              <li><strong>Circuit Switching:</strong> Establishes a dedicated communication path between the sender and receiver. It is commonly used in traditional telephone systems. Once the circuit is established, the entire bandwidth is reserved for the communication.</li>
              <li><strong>Packet Switching:</strong> Data is broken into packets, and each packet is transmitted independently. The packets may take different paths to reach the destination, and the receiver reassembles them. This method is more efficient and widely used in data networks like the internet.</li>
              <li><strong>Message Switching:</strong> Similar to packet switching, but instead of packets, entire messages are routed through intermediate stations. Each station stores the message and forwards it when the next link is available. This method is less efficient than packet switching due to the larger size of the data being routed.</li>
            </ul>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of Switching Methods:

    +--------------------------------------+
    | Circuit Switching  | Packet Switching |
    +--------------------------------------+
    | Establish Path     | Break into Packets|
    +--------------------------------------+
    | Dedicated Path     | Independent Routing|
    +--------------------------------------+
`}
            </pre>
          </div>

          {/* Switching and TCP/IP Layers */}
          <div className="cn-subsection">
            <h3>Switching and TCP/IP Layers</h3>
            <p className="cn-example">
              In the **TCP/IP** model, switching occurs at various layers to route data across the network:
            </p>
            <ul>
              <li><strong>Network Layer (Layer 3):</strong> Routing and packet switching occur at this layer. The packets are forwarded through intermediate routers to the destination network.</li>
              <li><strong>Data Link Layer (Layer 2):</strong> Switching at this layer involves the use of MAC addresses for routing data between network devices within the same local area network (LAN).</li>
              <li><strong>Physical Layer (Layer 1):</strong> The physical connection is made between network devices, with switching occurring through physical links such as cables or fiber optics.</li>
            </ul>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of TCP/IP Layers and Switching:

    +-----------------------------------+
    | Layer 3: Network (Routing)        |
    +-----------------------------------+
    | Layer 2: Data Link (MAC Address)  |
    +-----------------------------------+
    | Layer 1: Physical (Wires, Cables) |
    +-----------------------------------+
`}
            </pre>
          </div>
        </div>
        <div className="flex gap-5">
        <button className="infoBtn" onClick={()=>window.open("https://www.geeksforgeeks.org/types-of-multiplexing-in-data-communications/")}>Multiplexing</button>
        <button className="infoBtn" onClick={()=>window.open("https://www.geeksforgeeks.org/what-is-switching/")}>Switching</button>

        </div>
      </div>
    </div>
  );
}

export default MultiplexingAndSwitching;
