import React from "react";
import "../../../../CSS/CN.css";

function DataLinkLayerDeepDive() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Data Link Layer: Deep Dive</h1>

        {/* DESIGN ISSUES & PROTOCOLS */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Design Issues and Example Protocols</h2>
          <p className="cn-example">
            The data link layer provides reliable transit of data across a
            physical network link. The major design issues involve framing,
            error control, flow control, and access control. These ensure data
            is delivered correctly, efficiently, and without collisions or
            duplication.
          </p>

          <h3>Ethernet</h3>
          <p className="cn-example">
            Ethernet is a family of networking technologies used in LANs. It
            uses MAC addresses for identifying devices and supports speeds up to
            100 Gbps. Frames are transmitted using CSMA/CD (Carrier Sense
            Multiple Access with Collision Detection).
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
            {`Diagram of Ethernet Frame:

+-------------------+--------+-----------+--------+-------------+
| Preamble | MAC Dest | MAC Src | Type  | Payload     |
+-------------------+--------+-----------+--------+-------------+`}
          </pre>

          <h3>WLAN (Wi-Fi)</h3>
          <p className="cn-example">
            WLAN allows wireless communication using the IEEE 802.11 standard.
            It uses CSMA/CA (Collision Avoidance), supports roaming, and
            provides encryption mechanisms like WPA2.
          </p>

          <h3>Bluetooth</h3>
          <p className="cn-example">
            Bluetooth is a short-range wireless protocol used for personal area
            networks (PAN). It uses frequency hopping and supports
            point-to-point and point-to-multipoint communication.
          </p>
        </div>

        {/* LINK-LAYER ADDRESSING */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Link-Layer Addressing</h2>
          <h3>Three Types of Addressing</h3>
          <ul>
            <li>
              <strong>Unicast:</strong> One-to-one communication
            </li>
            <li>
              <strong>Multicast:</strong> One-to-many communication
            </li>
            <li>
              <strong>Broadcast:</strong> One-to-all communication within a
              network
            </li>
          </ul>

          <h3>Address Resolution Protocol (ARP)</h3>
          <p className="cn-example">
            ARP maps an IP address to a MAC address. It broadcasts a request to
            find the hardware address of a host on the network.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
            {`Diagram of ARP Request/Reply:

Host A             Switch/Hub             Host B
  |--- ARP Req --->|                        |
  |<-- ARP Reply --|<------ Respond -------|`}
          </pre>
        </div>

        {/* ERROR DETECTION AND CORRECTION */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Error Detection and Correction</h2>

          <h3>Block Coding</h3>
          <p className="cn-example">
            Adds redundant bits to detect errors. Data is grouped into blocks
            and encoded with error detection codes.
          </p>

          <h3>Cyclic Redundancy Check (CRC)</h3>
          <p className="cn-example">
            Uses polynomial division to detect errors. A checksum (CRC code) is
            appended to the data frame.
          </p>

          <h3>Checksum</h3>
          <p className="cn-example">
            Adds the binary values of data units and appends the sum (checksum)
            to detect changes during transmission.
          </p>

          <h3>Forward Error Correction (FEC)</h3>
          <p className="cn-example">
            Allows the receiver to detect and correct errors without
            retransmission, using advanced coding like Hamming and Reed-Solomon
            codes.
          </p>
        </div>

        {/* DATA LINK PROTOCOLS */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Data Link Protocols</h2>
          <h3>Simple Protocol</h3>
          <p className="cn-example">
            Assumes no errors or flow control. Sender sends one frame at a time
            and waits for an acknowledgment.
          </p>

          <h3>Stop-and-Wait Protocol</h3>
          <p className="cn-example">
            After sending each frame, the sender stops and waits for an
            acknowledgment. If timeout occurs, it retransmits the frame.
          </p>

          <h3>Piggybacking</h3>
          <p className="cn-example">
            Combines data and acknowledgment in one frame to improve efficiency.
          </p>
        </div>

        {/* MEDIA ACCESS CONTROL */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Media Access Control (MAC)</h2>

          <h3>Random Access</h3>
          <p className="cn-example">
            Devices transmit without coordination. Includes ALOHA, CSMA,
            CSMA/CD, and CSMA/CA.
          </p>

          <h3>Controlled Access</h3>
          <p className="cn-example">
            Access is regulated via methods like polling, reservation, and token
            passing.
          </p>

          <h3>Channelization</h3>
          <p className="cn-example">
            Multiple users share the channel using Frequency Division, Time
            Division, or Code Division Multiplexing.
          </p>
        </div>

        {/* RESOURCE BUTTONS */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Know More</h2>
          <div className="cn-wrapper">
            {/* 5.1 Design Issues & Example Protocols */}
            <div>
              <h2 className="cn-title">
                5.1 Design Issues & Example Protocols
              </h2>
              <div className="flex flex-wrap gap-5">
                <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/what-is-ethernet/")}>
                  Ethernet
                </button>
                <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/wlan-full-form/")}>
                  WLAN
                </button>
                <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/bluetooth/")}>
                  Bluetooth
                </button>
              </div>
            </div>

            {/* 5.2 Link-Layer Addressing */}
            <div>
              <h2 className="cn-title">5.2 Link-Layer Addressing</h2>
              <div className="flex flex-wrap gap-5">
                <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/what-is-physical-address-and-logical-address-in-networking/")}>
                  Three Types of Address
                </button>
                <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/how-address-resolution-protocol-arp-works/")}>
                  Address Resolution Protocol (ARP)
                </button>
              </div>
            </div>

            {/* 5.3 Error Detection and Correction */}
            <div>
              <h2 className="cn-title">5.3 Error Detection and Correction</h2>
              <div className="flex flex-wrap gap-5">
                <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/block-coding-in-digital-electronics/")}>
                  Block Coding
                </button>
                <button className="infoBtn" onClick={() => window.open("https://www.myreadingroom.co.in/notes-and-studymaterial/68-dcn/803-cyclic-codes.html")}>
                  Cyclic Codes
                </button>
                <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/error-detection-code-checksum/")}>
                  Checksum
                </button>
                <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/forward-error-correction-in-computer-networks/")}>
                  Forward Error Correction
                </button>
              </div>
            </div>

            {/* 5.4 Data Link Protocols */}
            <div>
              <h2 className="cn-title">5.4 Data Link Protocols</h2>
              <div className="flex flex-wrap gap-5">
                <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/noiseless-channel-protocol/")}>
                  Simple Protocols
                </button>
                <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/noiseless-channel-protocol/")}>
                  Stop-and-Wait Protocol
                </button>
                <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/piggybacking-in-computer-networks/")}>
                  Piggybacking
                </button>
              </div>
            </div>

            {/* 5.6 Media Access Control */}
            <div>
              <h2 className="cn-title">5.6 Media Access Control</h2>
              <div className="flex flex-wrap gap-5">
                <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/multiple-access-protocols-in-computer-network/")}>
                  Random Access
                </button>
                <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/controlled-access-protocols-in-computer-network/")}>
                  Controlled Access
                </button>
                <button className="infoBtn" onClick={() => window.open("https://www.baeldung.com/cs/channelization-protocols")}>
                  Channelization
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataLinkLayerDeepDive;
