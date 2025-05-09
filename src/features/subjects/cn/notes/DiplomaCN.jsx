import React, { useState } from "react";
import "../../../../CSS/CN.css";
import { title } from "framer-motion/client";

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
      title: "UNIT 1 : Basics of Computer Network",
      topics: [
        {
          title: "Definition & History of Networks",
          links: [
            { title: "Early Network Developments", url: "https://en.wikipedia.org/wiki/History_of_the_Internet" },
            { title: "Evolution of Networking Technologies", url: "https://www.geeksforgeeks.org/evolution-of-networks/?ref=rp" },
            { title: "Key Milestones in Networking History", url: "https://www.networkcomputing.com/network-infrastructure/6-key-milestones-in-computer-networking-history" },
          ],
        },
        {
          title: "Usage of Computer Networks",
          links: [
            {title:"Personal Networks", url: "https://en.wikipedia.org/wiki/Personal_network" },
            {title:"Business Networks", url: "https://en.wikipedia.org/wiki/Business_network" },
            {title:"Internet and Social Media", url: "https://www.apa.org/topics/social-media-internet" },
          ],
        },
        {
          title: "Standard Organizations and Protocols",
          links: [
            {title:"ISO", url: "https://en.wikipedia.org/wiki/International_Organization_for_Standardization" }, 
            {title:"IEEE", url: "https://en.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers" }, 
            {title:"ITU", url: "https://en.wikipedia.org/wiki/International_Telecommunication_Union" }, 
            {title:"IETF", url: "https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force" }, 
            {title:"W3C", url: "https://en.wikipedia.org/wiki/World_Wide_Web_Consortium" }],
        },
        {
          title: "Line Configuration",
          links: [
            {title:"Point-to-Point", url: "https://en.wikipedia.org/wiki/Point-to-Point_Protocol" },
            {title:"Multipoint", url: "https://www.geeksforgeeks.org/differences-between-point-to-point-and-multi-point-communication/" },
            {title:"Full-Duplex, Half-Duplex, Simplex", url: "https://www.geeksforgeeks.org/transmission-modes-computer-networks/" },
          ],
        },
        {
          title: "Network Topology",
          links: [
            {title:"Star Topology", url: "https://www.geeksforgeeks.org/advantages-and-disadvantages-of-star-topology/" },
            {title:"Bus Topology", url: "https://www.geeksforgeeks.org/advantages-and-disadvantages-of-bus-topology/" },
            {title:"Ring Topology", url: "https://www.geeksforgeeks.org/advantages-and-disadvantages-of-ring-topology/" },
            {title:"Mesh Topology", url: "https://www.geeksforgeeks.org/advantage-and-disadvantage-of-mesh-topology/" },
            {title:"Hybrid Topology", url: "https://www.geeksforgeeks.org/what-is-hybrid-topology/" },
            {title:"Tree Topology", url: "https://www.geeksforgeeks.org/advantages-and-disadvantages-of-tree-topology/" },
          ],
        },
        {
          title: "Periodic Analog Signals",
          links: [
            {title:"Sine Wave", url: "https://en.wikipedia.org/wiki/Sine_wave#:~:text=A%20sine%20wave%2C%20sinusoidal%20wave,corresponds%20to%20uniform%20circular%20motion." },
            {title:"Frequency", url: "https://en.wikipedia.org/wiki/Frequency" },
            {title:"Amplitude", url: "https://en.wikipedia.org/wiki/Amplitude" },
            {title:"Period", url: "https://www.geeksforgeeks.org/periodic-signals/" },
            {title:"Phase", url: "https://www.geeksforgeeks.org/phase-modulation/" },
            {title:"Wavelength", url: "https://energyeducation.ca/encyclopedia/Wavelength" },
            {title:"Time Domain", url: "http://en.wikipedia.org/wiki/Time_domain" },
            {title:"Frequency Domain", url: "https://en.wikipedia.org/wiki/Frequency_domain" },
            {title:"Composite Signals", url: "https://www.uoanbar.edu.iq/eStoreImages/Bank/5667.pdf" },
            {title:"Bandwidth", url: "https://www.geeksforgeeks.org/what-is-bandwidth-definition-working-importance-uses/" },
          ],
        },
        {
          title: "Categories of Network",
          links: [
            {title:"PAN (Personal Area Network)", url: "https://www.geeksforgeeks.org/overview-of-personal-area-network-pan/" },
            {title:"LAN (Local Area Network)", url: "https://www.geeksforgeeks.org/lan-full-form/" },
            {title:"MAN (Metropolitan Area Network)", url: "https://www.geeksforgeeks.org/man-full-form-in-computer-networking/" },
            {title:"WAN (Wide Area Network)", url: "http://geeksforgeeks.org/wan-full-form/" },
            {title:"Circuit-Switched Network", url: "https://www.geeksforgeeks.org/circuit-switching-in-computer-network/" },
            {title:"Packet-Switched Network", url: "https://www.geeksforgeeks.org/packet-switched-network-psn-in-networking/" },
          ],
        },
        {
          title: "Performance",
          links: [
            {title:"Bandwidth", url: "https://www.geeksforgeeks.org/what-is-bandwidth-definition-working-importance-uses/" },
            {title:"Throughput", url: "https://www.geeksforgeeks.org/difference-between-bandwidth-and-throughput/" },
            {title:"Latency (Delay)", url: "https://www.geeksforgeeks.org/what-is-latency/" },
            {title:"Bandwidth-Delay Product", url: "https://en.wikipedia.org/wiki/Bandwidth-delay_product" },
            {title:"Jitter", url: "https://www.geeksforgeeks.org/latency-vs-jitter-in-computer-networks/" },
          ],
        },
      ],
    },
    {
      title: "UNIT 2 : The Reference Model for Network Communication",
      topics: [
        {
          title: "OSI Model & Function of Each Layer",
          links: [
            { title: "Physical Layer", url: "https://www.geeksforgeeks.org/physical-layer-in-osi-model/" },
            { title: "Data Link Layer", url: "https://www.geeksforgeeks.org/data-link-layer/" },
            { title: "Network Layer", url: "https://www.geeksforgeeks.org/network-layer-in-osi-model/" },
            { title: "Transport Layer", url: "https://www.geeksforgeeks.org/transport-layer-responsibilities/" },
            { title: "Session Layer", url: "http://geeksforgeeks.org/session-layer-in-osi-model/" },
            { title: "Presentation Layer", url: "https://www.geeksforgeeks.org/presentation-layer-in-osi-model/" },
            { title: "Application Layer", url: "https://www.geeksforgeeks.org/application-layer-in-osi-model/" },
          ],
        },
        {
          title: "TCP/IP Model",
          links: [
            {title:"Network Access Layer", url: "https://www.geeksforgeeks.org/tcp-ip-model/" },
            {title:"Internet Layer", url: "https://www.geeksforgeeks.org/tcp-ip-model/" },
            {title:"Transport Layer", url: "https://www.geeksforgeeks.org/tcp-ip-model/" },
            {title:"Application Layer", url: "https://www.geeksforgeeks.org/tcp-ip-model/" },
          ],
        },
        {
          title: "Connection-Oriented vs Connectionless Approach",
          links: [
            {title:"Connection-Oriented Protocols", url: "https://www.geeksforgeeks.org/connection-oriented-service/" },
            {title:"Connectionless Protocols", url: "https://www.geeksforgeeks.org/connection-less-service/" },
            {title:"Comparison of OSI & TCP/IP Models", url: "https://www.geeksforgeeks.org/difference-between-osi-model-and-tcp-ip-model/" },
          ],
        },
      ],
    },
    {
      title: "UNIT 3 : Transmission Media",
      topics: [
        {
          title: "Types of Transmission Media",
          links: [
            {title:"Guided Media", url: "https://www.geeksforgeeks.org/types-transmission-media/" },
            {title:"Twisted Pair", url: "https://www.geeksforgeeks.org/twisted-pair-cable/" },
            {title:"Coaxial Cable", url: "https://www.geeksforgeeks.org/what-is-coaxial-cable/" },
            {title:"Fiber Optic Cable", url: "https://www.geeksforgeeks.org/fiber-optics-and-types/" },
            {title:"Unguided Media", url: "https://www.geeksforgeeks.org/unguided-media/" },
            {title:"Electromagnetic Spectrum", url: "https://en.wikipedia.org/wiki/Electromagnetic_spectrum" },
            {title:"Radio Transmission", url: "https://www.geeksforgeeks.org/advantages-and-disadvantages-of-radio-transmission/" },
            {title:"Microwave Transmission", url: "https://www.geeksforgeeks.org/microwave-transmission/" },
            {title:"Infrared Transmission", url: "https://www.geeksforgeeks.org/infrared-light-for-transmission/" },
            {title:"Satellite Communication", url: "https://www.geeksforgeeks.org/advantages-and-disadvantages-of-satellite-communication/" },
          ],
        },
        {
          title: "Guided Media",
          links: [
            {title:"Advantages and Disadvantages", url: "https://www.ccbp.in/blog/articles/guided-transmission-media-in-computer-networks" },
            {title:"Applications of Guided Media", url: "https://www.ccbp.in/blog/articles/guided-transmission-media-in-computer-networks" },
            {title:"Fiber Optics in Networks", url: "https://corporate.enelx.com/en/question-and-answers/advantages-of-fiber-optic" },
          ],
        },
        {
          title: "Un-Guided Media",
          links: [
            {title:"Advantages and Disadvantages", url: "https://www.theinfozones.com/2022/06/advantages-and-disadvantages-of.html" },
            {title:"Applications of Unguided Media", url: "https://www.sanfoundry.com/computer-network-unguided-media/" },
            {title:"Role of Satellite Communication", url: "https://byjus.com/physics/satellite-communication/" },
          ],
        },
      ],
    },
    {
      title: "UNIT 4 : Multiplexing and Switching",
      topics: [
        {
          title: "Multiplexing",
          links: [
            {title:"Frequency Division Multiplexing (FDM)", url: "https://www.geeksforgeeks.org/frequency-division-and-time-division-multiplexing/" },
            {title:"Wavelength Division Multiplexing (WDM)", url: "https://www.geeksforgeeks.org/difference-between-wdm-and-dwdm/" },
            {title:"Time Division Multiplexing (TDM)", url: "https://www.sciencedirect.com/topics/engineering/time-division-multiplexing" },
          ],
        },
        {
          title: "Introduction to Switching",
          links: [
            {title:"Circuit Switching", url: "https://www.geeksforgeeks.org/circuit-switching-in-computer-network/" },
            {title:"Packet Switching", url: "https://www.geeksforgeeks.org/packet-switching-and-delays-in-computer-network/" },
            {title:"Message Switching", url: "https://www.geeksforgeeks.org/message-switching-techniques/" },
          ],
        },
      ],
    },
    {
      title: "UNIT 5 : Data Link Layer",
      topics: [
        {
          title: "Design Issues, Example Protocols",
          links: [
            {title:"Ethernet", url: "https://www.geeksforgeeks.org/what-is-ethernet/" },
            {title:"WLAN", url: "https://www.geeksforgeeks.org/wlan-full-form/" }, 
            {title:"Bluetooth", url: "https://www.geeksforgeeks.org/bluetooth/" }
        ],
        },
        {
          title: "Link-Layer Addressing",
          links: [
            {title:"MAC Addresses", url: "https://www.geeksforgeeks.org/mac-address-in-computer-network/" },
            {title:"ARP", url: "https://www.geeksforgeeks.org/arp-protocol/" },
            {title:"IPv6 Address Resolution Protocol (NDP)", url: "https://www.networkacademy.io/ccna/ipv6/neighbor-discovery-protocol" },
          ],
        },
        {
          title: "Error Detection and Correction",
          links: [
            {title:"Block Coding", url: "https://www.geeksforgeeks.org/block-coding-in-digital-electronics/" },
            {title:"Cyclic Redundancy Check (CRC)", url: "https://www.geeksforgeeks.org/modulo-2-binary-division/" },
            {title:"Checksum", url: "https://www.geeksforgeeks.org/error-detection-code-checksum/" },
            {title:"Forward Error Correction", url: "https://www.sciencedirect.com/topics/engineering/forward-error-correction" },
          ],
        },
        {
          title: "Data Link Protocols",
          links: [
            {title:"Simple Protocols", url: "https://www.scaler.in/simplest-protocol/#:~:text=the%20sender%20immediately.-,The%20simplest%20protocol%20is%20a%20unidirectional%20protocol%20in%20which%20the,need%20for%20data%20re%2Dtransmission." },
            {title:"Stop-and-Wait Protocol", url: "https://www.geeksforgeeks.org/stop-and-wait-arq/" },
            {title:"Piggybacking", url: "https://www.geeksforgeeks.org/piggybacking-in-computer-networks/" }
        ],
        },
        {
          title: "Media Access Control",
          links: [
            {title:"Random Access", url: "https://www.geeksforgeeks.org/multiple-access-protocols-in-computer-network/" },
            {title:"Controlled Access", url: "https://www.geeksforgeeks.org/controlled-access-protocols-in-computer-network/" },
            {title:"Channelization", url: "https://www.baeldung.com/cs/channelization-protocols" }
        ],
        },
      ],
    },
    {
      title: "UNIT 6 : Transport Layer",
      topics: [
        {
          title: "Transport Layer Services",
          links: [
            {title:"Data Segmentation", url: "https://www.geeksforgeeks.org/what-is-network-segmentation/" },
            {title:"Flow Control", url: "https://www.geeksforgeeks.org/flow-control-in-data-link-layer/" },
            {title:"Error Control", url: "https://www.geeksforgeeks.org/error-control-in-data-link-layer/" },
            {title:"Reliability", url: "https://www.geeksforgeeks.org/considerations-for-a-reliable-network/" },
          ],
        },
        {
          title: "Connectionless and Connection-Oriented Protocols",
          links: [
            {title:"UDP (User Datagram Protocol)", url: "https://www.geeksforgeeks.org/user-datagram-protocol-udp/" },
            {title:"TCP (Transmission Control Protocol)", url: "https://www.geeksforgeeks.org/what-is-transmission-control-protocol-tcp/" },
          ],
        },
        {
          title: "Transport Layer Protocols",
          links: [
            {title:"Simple Protocol", url: "https://www.studytonight.com/computer-networks/simplest-protocol" },
            {title:"Stop-and-Wait Protocol", url: "https://www.tutorialspoint.com/data_communication_computer_network/stop_and_wait_protocol.htm" },
            {title:"Go-Back-N Protocol", url: "https://www.geeksforgeeks.org/sliding-window-protocol-set-2-receiver-side/" },
            {title:"Selective-Repeat Protocol", url: "https://www.geeksforgeeks.org/sliding-window-protocol-set-3-selective-repeat/" },
          ],
        },
      ],
    },
    {
      title: "UNIT 7 : Network Devices",
      topics: [
        {
          title: "Repeaters",
          links: [
            {title:"Signal Regeneration", url: "https://www.geeksforgeeks.org/repeaters-in-computer-network/" },
            {title:"Extending Network Distance", url: "https://www.tutorchase.com/answers/ib/computer-science/how-does-a-repeater-extend-a-wireless-network" },
            {title:"Noise Elimination", url: "https://electronicscoach.com/difference-between-amplifier-and-repeater.html" },
          ],
        },
        {
          title: "Hubs",
          links: [
            {title:"Broadcasting", url: "https://www.geeksforgeeks.org/what-is-network-hub-and-how-it-works/" },
            {title:"Types of Hubs", url: "https://www.tutorialspoint.com/what-are-the-types-of-hubs-in-the-computer-network" },
            {title:"Passive vs Active Hubs", url: "https://www.rfwireless-world.com/terminology/networking-basics/active-vs-passive-hubs" }
        ],
        },
        {
          title: "Switches",
          links: [
            {title:"Switches",url:"https://en.wikipedia.org/wiki/Network_switch"},
            {title:"MAC Address Learning", url: "https://www.geeksforgeeks.org/mac-learning-in-ccna/" },
            {title:"Frame Forwarding", url: "https://www.geeksforgeeks.org/frame-forwarding-methods-on-switches/" },
            {title:"Switching Table", url: "https://www.routeralley.com/guides/switching_tables.pdf" },
            {title:"Store and Forward", url: "https://www.geeksforgeeks.org/difference-between-store%E2%80%91and%E2%80%91forward-switching-and-cut%E2%80%91through-switching/" },
          ],
        },
        {
          title: "Routers",
          links: [
            {title:"Routers",url:"https://www.geeksforgeeks.org/introduction-of-a-router/"},
            {title:"Routing Tables", url: "https://www.geeksforgeeks.org/routing-tables-in-computer-network/" },
            {title:"Packet Forwarding", url: "https://www.geeksforgeeks.org/what-is-packet-forwarding/" },
            {title:"Routing Algorithms", url: "https://www.geeksforgeeks.org/classification-of-routing-algorithms/" },
            {title:"Routing Algorithms 2", url: "https://www.tutorialspoint.com/data_communication_computer_network/routing_algorithm.htm" },
            {title:"Inter-Network Communication", url: "https://www.geeksforgeeks.org/introduction-of-internetworking/" },
          ],
        },
        {
          title: "Access Points",
          links: [
            {title:"Access Points",url:"https://www.geeksforgeeks.org/what-is-a-wireless-access-point/"},
            {title:"Wireless Connectivity", url: "https://www.geeksforgeeks.org/modes-of-wireless-connectivity/" },
            {title:"SSID Broadcasting", url: "https://nordvpn.com/blog/how-to-disable-ssid-broadcast/" },
            {title:"Wi-Fi Standards", url: "https://www.geeksforgeeks.org/wi-fi-standards-explained/" },
          ],
        },
        {
          title: "Gateways",
          links: [
            {title:"Gateways",url:"https://www.geeksforgeeks.org/introduction-of-gateways/"},
            {title:"Protocol Conversion", url: "https://nordvpn.com/cybersecurity/glossary/protocol-conversion/#:~:text=Protocol%20conversion%20refers%20to%20the,systems%20that%20use%20different%20protocols." },
            {title:"Application Layer Gateways", url: "https://www.f5.com/glossary/application-layer-gateway" },
            {title:"Inter-Network Communication", url: "https://www.geeksforgeeks.org/introduction-of-internetworking/" },
          ],
        },
        {
          title: "Bridges",
          links: [
            {title:"Bridges",url:"https://www.geeksforgeeks.org/what-is-bridge-in-computer-network-types-uses-functions-differences/"},
            {title:"LAN Segment Connection", url: "https://networkencyclopedia.com/lan-segment/#:~:text=Local%20Area%20Networks%20(LANs)%20form,and%20enhancing%20overall%20network%20performance." },
            {title:"MAC Filtering", url: "https://www.geeksforgeeks.org/mac-filtering-in-computer-network/" },
            {title:"Collision Domain Separation", url: "https://www.geeksforgeeks.org/collision-domain-and-broadcast-domain-in-computer-network/" },
          ],
        },
        {
          title: "Difference Between Layer 2 and Layer 3 Switches",
          links: [
            {title:"Data Link vs Network Layer", url: "https://www.google.com/search?q=data+link+vs+network+layer&oq=Data+Link+vs+Network+Layer&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYQDIICAIQABgWGB4yCAgDEAAYFhgeMg0IBBAAGIYDGIAEGIoFMg0IBRAAGIYDGIAEGIoFMg0IBhAAGIYDGIAEGIoFMgoIBxAAGIAEGKIE0gEHNDM4ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8" },
            {title:"MAC vs IP Forwarding", url: "https://www.geeksforgeeks.org/difference-between-mac-address-and-ip-address/" },
            {title:"Switching vs Routing", url: "https://www.geeksforgeeks.org/difference-between-router-and-switch/" },
          ],
        },
        {
          title: "Introduction to Network Management Software",
          links: [
            {title:"Network Monitoring", url: "https://www.geeksforgeeks.org/network-monitoring-and-packet-capture-techniques/" },
            {title:"SNMP", url: "https://www.geeksforgeeks.org/simple-network-management-protocol-snmp/" },
            {title:"Configuration Management", url: "https://www.cisco.com/site/us/en/learn/topics/networking/what-is-configuration-management.html" },
            {title:"Examples: Wireshark, SolarWinds", url: "" },
          ],
        },
      ],
    },
    {
      title: "UNIT 8 : Application Layer",
      topics: [
        {
          title: "Principles of Network Application",
          links: [
            {title:"Client-Server Architecture", url: "https://www.geeksforgeeks.org/client-server-model/" },
            {title:"Peer-to-Peer Architecture", url: "https://www.geeksforgeeks.org/what-is-p2p-peer-to-peer-process/" },
            {title:"Process Communication", url: "https://www.geeksforgeeks.org/inter-process-communication-ipc/" },
          ],
        },
        {
          title: "The Web and HTTP",
          links: [
            {title:"HTTP Methods (GET, POST, etc.)", url: "https://www.geeksforgeeks.org/different-kinds-of-http-requests/" },
            {title:"HTTP Response Codes", url: "https://www.geeksforgeeks.org/http-status-codes-client-error-responses/" },
            {title:"HTTP Request/Response Model", url: "https://www.geeksforgeeks.org/state-the-core-components-of-an-http-response/" },
          ],
        },
        {
          title: "File Transfer: FTP",
          links: [
            {title:"FTP Commands and Responses", url: "https://www.geeksforgeeks.org/file-transfer-protocol-ftp-in-application-layer/" },
            {title:"Active vs Passive Mode", url: "https://www.geeksforgeeks.org/difference-between-active-and-passive-ftp/" },
            {title:"FTP File Operations", url: "https://www.tutorialspoint.com/what-are-the-ftp-operations" },
          ],
        },
        {
          title: "Electronic Mail in the Internet",
          links: [
            {title:"SMTP (Simple Mail Transfer Protocol)", url: "https://www.geeksforgeeks.org/simple-mail-transfer-protocol-smtp/" },
            {title:"Mail Message Format", url: "https://www.geeksforgeeks.org/e-mail-format/" },
            {title:"SMTP vs HTTP", url: "https://www.geeksforgeeks.org/difference-between-smtp-and-http/" },
            {title:"Mail Access Protocols (IMAP, POP3)", url: "https://www.geeksforgeeks.org/differences-between-pop3-and-imap/" },
          ],
        },
        {
          title: "DNS (Domain Name System)",
          links: [
            {title:"DNS Structure", url: "https://www.geeksforgeeks.org/domain-name-system-dns-in-application-layer/" },
            {title:"DNS Resolution Process", url: "https://www.geeksforgeeks.org/address-resolution-in-dns-domain-name-server/" },
            {title:"DNS Records", url: "https://www.ibm.com/think/topics/dns-records" },
            {title:"Types of DNS Servers", url: "https://www.cloudflare.com/learning/dns/dns-server-types/" },
          ],
        },
        {
          title: "Peer-to-Peer Applications",
          links: [
            {title:"File Sharing Protocols", url: "https://www.geeksforgeeks.org/file-transfer-protocol-ftp-in-application-layer/" },
            {title:"BitTorrent Protocol", url: "https://medium.com/@abhinavcv007/bittorrent-part-1-the-engineering-behind-the-bittorrent-protocol-04e70ee01d58" },
            {title:"P2P Network Topology", url: "https://www.shiksha.com/online-courses/articles/what-is-point-to-point-topology-blogId-156937#:~:text=P2P%20topology%20offers%20increased%20security,to%20cause%20delays%20or%20congestion." },
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
                              <a href={link.url} className="cn-imgLink" target="_blank">
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
