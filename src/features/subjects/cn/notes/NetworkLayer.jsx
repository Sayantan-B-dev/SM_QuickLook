import React, { useState } from "react";
import "../../../../CSS/CN.css";

function NetworkLayer() {
  const [open, setOpen] = useState(false);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Network Layer (Layer 3) in OSI Model</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">What is the Network Layer?</h2>
          <p className="cn-example">
            The **Network Layer** (Layer 3) in the OSI model is responsible for the transmission of data packets between devices across different networks. It provides the means to transfer data from one host to another on a different network, typically using IP addresses.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Key Responsibilities of the Network Layer</h2>
          <ul className="cn-example">
            <li><strong>Logical Addressing (IP Addressing):</strong> The network layer assigns logical addresses (IP addresses) to devices on the network, ensuring that data is directed to the correct destination.</li>
            <li><strong>Routing:</strong> Determines the best path for data to travel from the source to the destination. This can involve using various algorithms and protocols like static, dynamic, link state, or distance vector routing.</li>
            <li><strong>Packet Forwarding:</strong> Once a path is determined, the network layer forwards data packets along that route until they reach the destination.</li>
            <li><strong>Fragmentation and Reassembly:</strong> The network layer can break large data packets into smaller fragments to accommodate the size limitations of the underlying physical network, then reassemble them at the destination.</li>
            <li><strong>Error Handling and Diagnostics:</strong> The network layer also handles error reporting through protocols like ICMP, which is used for diagnostic functions like ping and traceroute.</li>
          </ul>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Types of Routing</h2>
          <p className="cn-example">
            Routing refers to the process of determining the best path for data packets to travel from source to destination. There are two main types of routing:
          </p>
          <ul className="cn-example">
            <li><strong>Static Routing:</strong> The path for data transmission is manually configured by the network administrator and does not change unless manually altered.</li>
            <li><strong>Dynamic Routing:</strong> The path is automatically determined using algorithms and protocols, adapting to changes in the network. Common protocols include RIP, OSPF, and EIGRP.</li>
          </ul>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Routing Algorithms</h2>
          <p className="cn-example">
            The routing algorithm determines how routers decide the best path for data transmission. There are two primary types:
          </p>
          <ul className="cn-example">
            <li><strong>Link-State Routing:</strong> Routers use the state of links (connections between nodes) to determine the best path. Examples include OSPF and IS-IS.</li>
            <li><strong>Distance-Vector Routing:</strong> Routers share information about the distance to other routers in the network and calculate the best path based on this. Examples include RIP and BGP.</li>
          </ul>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">IP Addressing: Classful vs Classless</h2>
          <p className="cn-example">
            IP addressing defines the way in which devices on a network are identified using a unique identifier (IP address). There are two approaches:
          </p>
          <ul className="cn-example">
            <li><strong>Classful Addressing:</strong> Traditional method where IP addresses are divided into classes (A, B, C) based on the network size. This method has limited flexibility.</li>
            <li><strong>Classless Addressing:</strong> Introduced to overcome the limitations of classful addressing. It allows for more flexible subnetting, which is used in CIDR (Classless Inter-Domain Routing).</li>
          </ul>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Fragmentation</h2>
          <p className="cn-example">
            Fragmentation is the process of breaking down large data packets into smaller units to meet the size limitations of the network. Once fragments reach their destination, they are reassembled to form the original packet.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">ICMP: Internet Control Message Protocol</h2>
          <p className="cn-example">
            ICMP is used for error reporting and diagnostics in the network. It helps identify network issues, like unreachable hosts or network congestion. The **ping** and **traceroute** commands are examples of ICMP utilities.
          </p>
        </div>

        {/* Accordion Section for Exam-Oriented FAQs */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Exam-Oriented Questions</h2>
          <div className="accordion">
            <div className="cn-example">
              <button
                onClick={() => toggleAccordion(1)}
                className="text-lg font-semibold"
              >
                What is routing? 
              </button>
              {open === 1 && (
                <div className="cn-example">
                  Routing is the process of determining the optimal path for data packets to travel across a network. It is performed by routers using algorithms and protocols.
                </div>
              )}
            </div>
            <div className="cn-example">
              <button
                onClick={() => toggleAccordion(2)}
                className="text-lg font-semibold"
              >
                What are the types of routing algorithms?
              </button>
              {open === 2 && (
                <div className="cn-example">
                  The two main types of routing algorithms are <strong>Link-State</strong> (e.g., OSPF, IS-IS) and <strong>Distance-Vector</strong> (e.g., RIP, BGP).
                </div>
              )}
            </div>
            <div className="cn-example">
              <button
                onClick={() => toggleAccordion(3)}
                className="text-lg font-semibold"
              >
                Difference between static and dynamic routing?
              </button>
              {open === 3 && (
                <div className="cn-example">
                  <strong>Static routing</strong> requires manual configuration and does not adapt to network changes. <strong>Dynamic routing</strong> automatically adjusts the route based on network conditions using algorithms like RIP, OSPF, and EIGRP.
                </div>
              )}
            </div>
            <div className="cn-example">
              <button
                onClick={() => toggleAccordion(4)}
                className="text-lg font-semibold"
              >
                What is IP addressing? Classful vs Classless?
              </button>
              {open === 4 && (
                <div className="cn-example">
                  IP addressing is used to identify devices on a network. Classful addressing divides addresses into A, B, C classes. Classless addressing allows more flexible subnetting using CIDR (Classless Inter-Domain Routing).
                </div>
              )}
            </div>
            <div className="cn-example">
              <button
                onClick={() => toggleAccordion(5)}
                className="text-lg font-semibold"
              >
                What is fragmentation and reassembly?
              </button>
              {open === 5 && (
                <div className="cn-example">
                  Fragmentation is breaking large packets into smaller ones to fit the network's size limits. The network layer reassembles them at the destination.
                </div>
              )}
            </div>
            <div className="cn-example">
              <button
                onClick={() => toggleAccordion(6)}
                className="text-lg font-semibold"
              >
                What protocols operate at the network layer?
              </button>
              {open === 6 && (
                <div className="cn-example">
                  Protocols such as IP (IPv4, IPv6), ICMP, and ARP operate at the network layer to handle routing, addressing, and error reporting.
                </div>
              )}
            </div>
            <div className="cn-example">
              <button
                onClick={() => toggleAccordion(7)}
                className="text-lg font-semibold"
              >
                IPv4 vs IPv6
              </button>
              {open === 7 && (
                <div className="cn-example">
                  IPv4 uses 32-bit addresses and has limited address space. IPv6 uses 128-bit addresses, providing a much larger address space and improved features like better security.
                </div>
              )}
            </div>
            <div className="cn-example">
              <button
                onClick={() => toggleAccordion(8)}
                className="text-lg font-semibold"
              >
                What is the role of a router?
              </button>
              {open === 8 && (
                <div className="cn-example">
                  A router connects different networks and determines the best path for data packets to travel based on IP addressing and routing protocols.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Network Layer Responsibilities</h2>
          <img
            src="https://www.sitesbay.com/computer-network/images/network-layer.jpg"
            alt="OSI Model - Network Layer"
          />
          <button
            className="infoBtn"
            onClick={() =>
              window.open("https://www.geeksforgeeks.org/network-layer-in-osi-model/")
            }
          >
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}

export default NetworkLayer;
