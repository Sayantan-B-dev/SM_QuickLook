import React, { useState } from "react";
import "../../../../CSS/CN.css";

function DiplomaCN() {
  const [openUnits, setOpenUnits] = useState({});
  const [openTopics, setOpenTopics] = useState({});

  function toggleUnit(index) {
    setOpenUnits((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  function toggleTopic(index) {
    setOpenTopics((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  // Example content grouped per unit
  const units = [
    {
      title: "UNIT: Basics of Computer Network",
      topics: [
        {
          title: "Definition & History of Networks",
          links: [
            { title: "Early Network Developments", url: "" },
            { title: "Evolution of Networking Technologies", url: "" },
            { title: "Key Milestones in Networking History", url: "" },
          ],
        },
        {
          title: "Usage of Computer Networks",
          links: [
            {title:"Personal Networks", url: "" },
            {title:"Business Networks", url: "" },
            {title:"Internet and Social Media", url: "" },
          ],
        },
        {
          title: "Standard Organizations and Protocols",
          links: [
            {title:"ISO", url: "" }, 
            {title:"IEEE", url: "" }, 
            {title:"ITU", url: "" }, 
            {title:"IETF", url: "" }, 
            {title:"W3C", url: "" }],
        },
        {
          title: "Line Configuration",
          links: [
            {title:"Point-to-Point", url: "" },
            {title:"Multipoint", url: "" },
            {title:"Full-Duplex, Half-Duplex, Simplex", url: "" },
          ],
        },
        {
          title: "Network Topology",
          links: [
            {title:"Star Topology", url: "" },
            {title:"Bus Topology", url: "" },
            {title:"Ring Topology", url: "" },
            {title:"Mesh Topology", url: "" },
            {title:"Hybrid Topology", url: "" },
            {title:"Tree Topology", url: "" },
          ],
        },
        {
          title: "Periodic Analog Signals",
          links: [
            {title:"Sine Wave", url: "" },
            {title:"Frequency", url: "" },
            {title:"Amplitude", url: "" },
            {title:"Period", url: "" },
            {title:"Phase", url: "" },
            {title:"Wavelength", url: "" },
            {title:"Time Domain", url: "" },
            {title:"Frequency Domain", url: "" },
            {title:"Composite Signals", url: "" },
            {title:"Bandwidth", url: "" },
          ],
        },
        {
          title: "Categories of Network",
          links: [
            {title:"PAN (Personal Area Network)", url: "" },
            {title:"LAN (Local Area Network)", url: "" },
            {title:"MAN (Metropolitan Area Network)", url: "" },
            {title:"WAN (Wide Area Network)", url: "" },
            {title:"Circuit-Switched Network", url: "" },
            {title:"Packet-Switched Network", url: "" },
          ],
        },
        {
          title: "Performance",
          links: [
            {title:"Bandwidth", url: "" },
            {title:"Throughput", url: "" },
            {title:"Latency (Delay)", url: "" },
            {title:"Bandwidth-Delay Product", url: "" },
            {title:"Jitter", url: "" },
          ],
        },
      ],
    },
    {
      title: "UNIT: The Reference Model for Network Communication",
      topics: [
        {
          title: "OSI Model & Function of Each Layer",
          links: [
            { title: "Physical Layer", url: "" },
            { title: "Data Link Layer", url: "" },
            { title: "Network Layer", url: "" },
            { title: "Transport Layer", url: "" },
            { title: "Session Layer", url: "" },
            { title: "Presentation Layer", url: "" },
            { title: "Application Layer", url: "" },
          ],
        },
        {
          title: "TCP/IP Model",
          links: [
            {title:"Network Access Layer", url: "" },
            {title:"Internet Layer", url: "" },
            {title:"Transport Layer", url: "" },
            {title:"Application Layer", url: "" },
          ],
        },
        {
          title: "Connection-Oriented vs Connectionless Approach",
          links: [
            {title:"Connection-Oriented Protocols", url: "" },
            {title:"Connectionless Protocols", url: "" },
            {title:"Comparison of OSI & TCP/IP Models", url: "" },
          ],
        },
      ],
    },
    {
      title: "UNIT: Transmission Media",
      topics: [
        {
          title: "Types of Transmission Media",
          links: [
            {title:"Guided Media", url: "" },
            {title:"Twisted Pair", url: "" },
            {title:"Coaxial Cable", url: "" },
            {title:"Fiber Optic Cable", url: "" },
            {title:"Unguided Media", url: "" },
            {title:"Electromagnetic Spectrum", url: "" },
            {title:"Radio Transmission", url: "" },
            {title:"Microwave Transmission", url: "" },
            {title:"Infrared Transmission", url: "" },
            {title:"Satellite Communication", url: "" },
          ],
        },
        {
          title: "Guided Media",
          links: [
            {title:"Advantages and Disadvantages", url: "" },
            {title:"Applications of Guided Media", url: "" },
            {title:"Fiber Optics in Networks", url: "" },
          ],
        },
        {
          title: "Un-Guided Media",
          links: [
            {title:"Advantages and Disadvantages", url: "" },
            {title:"Applications of Unguided Media", url: "" },
            {title:"Role of Satellite Communication", url: "" },
          ],
        },
      ],
    },
    {
      title: "UNIT: Multiplexing and Switching",
      topics: [
        {
          title: "Multiplexing",
          links: [
            {title:"Frequency Division Multiplexing (FDM)", url: "" },
            {title:"Wavelength Division Multiplexing (WDM)", url: "" },
            {title:"Time Division Multiplexing (TDM)", url: "" },
          ],
        },
        {
          title: "Introduction to Switching",
          links: [
            {title:"Circuit Switching", url: "" },
            {title:"Packet Switching", url: "" },
            {title:"Message Switching", url: "" },
            {title:"Switching and TCP/IP Layers", url: "" },
          ],
        },
      ],
    },
    {
      title: "UNIT: Data Link Layer",
      topics: [
        {
          title: "Design Issues, Example Protocols",
          links: [
            {title:"Ethernet", url: "" },
            {title:"WLAN", url: "" }, 
            {title:"Bluetooth", url: "" }
        ],
        },
        {
          title: "Link-Layer Addressing",
          links: [
            {title:"MAC Addresses", url: "" },
            {title:"ARP", url: "" },
            {title:"IPv6 Address Resolution Protocol (NDP)", url: "" },
          ],
        },
        {
          title: "Error Detection and Correction",
          links: [
            {title:"Block Coding", url: "" },
            {title:"Cyclic Redundancy Check (CRC)", url: "" },
            {title:"Checksum", url: "" },
            {title:"Forward Error Correction", url: "" },
          ],
        },
        {
          title: "Data Link Protocols",
          links: [
            {title:"Simple Protocols", url: "" },
            {title:"Stop-and-Wait Protocol", url: "" },
            {title:"Piggybacking", url: "" }
        ],
        },
        {
          title: "Media Access Control",
          links: [
            {title:"Random Access", url: "" },
            {title:"Controlled Access", url: "" },
            {title:"Channelization", url: "" }
        ],
        },
      ],
    },
    {
      title: "UNIT: Transport Layer",
      topics: [
        {
          title: "Transport Layer Services",
          links: [
            {title:"Data Segmentation", url: "" },
            {title:"Flow Control", url: "" },
            {title:"Error Control", url: "" },
            {title:"Reliability", url: "" },
          ],
        },
        {
          title: "Connectionless and Connection-Oriented Protocols",
          links: [
            {title:"UDP (User Datagram Protocol)", url: "" },
            {title:"TCP (Transmission Control Protocol)", url: "" },
          ],
        },
        {
          title: "Transport Layer Protocols",
          links: [
            {title:"Simple Protocol", url: "" },
            {title:"Stop-and-Wait Protocol", url: "" },
            {title:"Go-Back-N Protocol", url: "" },
            {title:"Selective-Repeat Protocol", url: "" },
          ],
        },
      ],
    },
    {
      title: "UNIT: Network Devices",
      topics: [
        {
          title: "Repeaters",
          links: [
            {title:"Signal Regeneration", url: "" },
            {title:"Extending Network Distance", url: "" },
            {title:"Noise Elimination", url: "" },
          ],
        },
        {
          title: "Hubs",
          links: [
            {title:"Broadcasting", url: "" },
            {title:"Types of Hubs", url: "" },
            {title:"Passive vs Active Hubs", url: "" }
        ],
        },
        {
          title: "Switches",
          links: [
            {title:"MAC Address Learning", url: "" },
            {title:"Frame Forwarding", url: "" },
            {title:"Switching Table", url: "" },
            {title:"Store and Forward", url: "" },
          ],
        },
        {
          title: "Routers",
          links: [
            {title:"Routing Tables", url: "" },
            {title:"Packet Forwarding", url: "" },
            {title:"Routing Algorithms", url: "" },
            {title:"Inter-Network Communication", url: "" },
          ],
        },
        {
          title: "Access Points",
          links: [
            {title:"Wireless Connectivity", url: "" },
            {title:"SSID Broadcasting", url: "" },
            {title:"Wi-Fi Standards", url: "" },
          ],
        },
        {
          title: "Gateways",
          links: [
            {title:"Protocol Conversion", url: "" },
            {title:"Application Layer Gateways", url: "" },
            {title:"Inter-Network Communication", url: "" },
          ],
        },
        {
          title: "Bridges",
          links: [
            {title:"LAN Segment Connection", url: "" },
            {title:"MAC Filtering", url: "" },
            {title:"Collision Domain Separation", url: "" },
          ],
        },
        {
          title: "Difference Between Layer 2 and Layer 3 Switches",
          links: [
            {title:"Data Link vs Network Layer", url: "" },
            {title:"MAC vs IP Forwarding", url: "" },
            {title:"Switching vs Routing", url: "" },
          ],
        },
        {
          title: "Introduction to Network Management Software",
          links: [
            {title:"Network Monitoring", url: "" },
            {title:"SNMP", url: "" },
            {title:"Configuration Management", url: "" },
            {title:"Examples: Wireshark, SolarWinds", url: "" },
          ],
        },
      ],
    },
    {
      title: "UNIT: Application Layer",
      topics: [
        {
          title: "Principles of Network Application",
          links: [
            {title:"Client-Server Architecture", url: "" },
            {title:"Peer-to-Peer Architecture", url: "" },
            {title:"Process Communication", url: "" },
          ],
        },
        {
          title: "The Web and HTTP",
          links: [
            {title:"HTTP Methods (GET, POST, etc.)", url: "" },
            {title:"HTTP Response Codes", url: "" },
            {title:"HTTP Request/Response Model", url: "" },
          ],
        },
        {
          title: "File Transfer: FTP",
          links: [
            {title:"FTP Commands and Responses", url: "" },
            {title:"Active vs Passive Mode", url: "" },
            {title:"FTP File Operations", url: "" },
          ],
        },
        {
          title: "Electronic Mail in the Internet",
          links: [
            {title:"SMTP (Simple Mail Transfer Protocol)", url: "" },
            {title:"Mail Message Format", url: "" },
            {title:"Comparison with HTTP", url: "" },
            {title:"Mail Access Protocols (IMAP, POP3)", url: "" },
          ],
        },
        {
          title: "DNS (Domain Name System)",
          links: [
            {title:"DNS Structure", url: "" },
            {title:"DNS Resolution Process", url: "" },
            {title:"DNS Records", url: "" },
            {title:"Types of DNS Servers", url: "" },
          ],
        },
        {
          title: "Peer-to-Peer Applications",
          links: [
            {title:"File Sharing Protocols", url: "" },
            {title:"BitTorrent Protocol", url: "" },
            {title:"P2P Network Topology", url: "" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <div className="cn-title">Diploma CN</div>

        {units.map((unit, uIndex) => (
          <div key={uIndex} className="cn-section cursor-pointer">
            <h2 className="cn-subtitle" onClick={() => toggleUnit(uIndex)}>
              {unit.title}
            </h2>
            {openUnits[uIndex] && (
              <div className="cn-grid">
                {unit.topics.map((topic, tIndex) => {
                  const topicKey = `${uIndex}-${tIndex}`;
                  return (
                    <div className="cn-grid-item structured" key={topicKey}>
                      <h3 onClick={() => toggleTopic(topicKey)}>
                        {topic.title}
                      </h3>
                      {openTopics[topicKey] && (
                        <ul>
                          {topic.links.map((link, i) => (
                            <div className="rounded-2xl shadow-lg" key={i}>
                              <a href={link.url} className="cn-imgLink">
                                {link.title}
                              </a>
                            </div>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiplomaCN;
