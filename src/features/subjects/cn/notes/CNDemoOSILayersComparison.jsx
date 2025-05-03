import React from "react";
import "../../../../CSS/CN.css";

function CNDemoOSILayersComparison() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Detailed Comparison of OSI Model Layers</h1>

        {/* Comparison Table */}
        <div className="cn-section">
          <h2 className="cn-subtitle">OSI 7 Layers – Full Comparison Table</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Layer No</th>
                <th>Layer Name</th>
                <th>Data Unit</th>
                <th>Main Functions / Services</th>
                <th>Protocols</th>
                <th>Devices / Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7</td>
                <td>Application</td>
                <td>Data</td>
                <td>
                  User interface, email, file transfers, remote login, web browsing, data representation to user
                </td>
                <td>
                  HTTP, FTP, SMTP, POP3, IMAP, DNS, Telnet, SNMP
                </td>
                <td>
                  Browsers, Mail clients, Web Servers, Apps
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Presentation</td>
                <td>Data</td>
                <td>
                  Data translation, encryption, compression, serialization (Syntax layer)
                </td>
                <td>
                  SSL/TLS, JPEG, MPEG, ASCII, EBCDIC, GIF, PNG
                </td>
                <td>
                  SSL Libraries, Codecs, Formatters
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Session</td>
                <td>Data</td>
                <td>
                  Session control, synchronization, dialog control (starting, maintaining, and ending sessions)
                </td>
                <td>
                  NetBIOS, RPC, PPTP, SQL sessions, APIs
                </td>
                <td>
                  APIs, Authentication layers, Remote apps
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Transport</td>
                <td>Segments</td>
                <td>
                  Reliable transmission, flow control, error detection, retransmission, segmentation
                </td>
                <td>
                  TCP, UDP, SCTP, DCCP
                </td>
                <td>
                  Gateways, OS Kernel Transport Layer
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Network</td>
                <td>Packets</td>
                <td>
                  Logical addressing (IP), routing, path determination, packet forwarding
                </td>
                <td>
                  IP, ICMP, IPsec, IGMP, RIP, OSPF, BGP
                </td>
                <td>
                  Routers, Layer 3 switches
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Data Link</td>
                <td>Frames</td>
                <td>
                  Physical addressing (MAC), error detection/correction, framing, flow control, switches
                </td>
                <td>
                  Ethernet, ARP, PPP, HDLC, STP, VLAN
                </td>
                <td>
                  Switches, NICs, Bridges
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Physical</td>
                <td>Bits</td>
                <td>
                  Transmission media, bit-level transmission, electrical signals, cable types
                </td>
                <td>
                  USB, Bluetooth, RS232, DSL, IEEE 802.11
                </td>
                <td>
                  Cables, Hubs, Repeaters, Modems
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Detailed Explanation */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Layer-wise In-depth Details</h2>

          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Application Layer (Layer 7)</h3>
              <div className="cn-grid-item unstructured">
                Closest to the end-user. It enables services like web browsing (HTTP), file transfer (FTP), and email (SMTP). It interacts directly with applications to provide networking services.
              </div>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Presentation Layer (Layer 6)</h3>
              <div className="cn-grid-item unstructured">
                Responsible for translating data between application and network formats. It performs encryption (SSL/TLS), compression (MPEG), and encoding (ASCII, Unicode).
              </div>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Session Layer (Layer 5)</h3>
              <div className="cn-grid-item unstructured">
                Manages sessions between applications. For example, login sessions on websites or database sessions. Also handles token management and dialog control.
              </div>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Transport Layer (Layer 4)</h3>
              <div className="cn-grid-item unstructured">
                Ensures reliable or unreliable delivery of data using TCP (reliable) or UDP (unreliable). Includes flow control, error checking, segmentation, and reassembly.
              </div>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Network Layer (Layer 3)</h3>
              <div className="cn-grid-item unstructured">
                Handles routing and addressing using IP addresses. It chooses the best path to send data through the network and fragments packets for transport.
              </div>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Data Link Layer (Layer 2)</h3>
              <div className="cn-grid-item unstructured">
                Uses MAC addresses for node-to-node delivery. Handles error detection via CRC and formats data into frames. Provides flow control and access to physical media.
              </div>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Physical Layer (Layer 1)</h3>
              <div className="cn-grid-item unstructured">
                Deals with physical transmission of bits over a medium. Defines cables, voltage levels, timing, connectors, and types of transmission (serial, parallel, etc.).
              </div>
            </div>
          </div>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: OSI Model from Top to Bottom</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250117112545142665/OSI-Model-.webp"
            alt="OSI Model Diagram"
          />
        </div>

        {/* Button */}
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/open-systems-interconnection-model-osi/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default CNDemoOSILayersComparison;
