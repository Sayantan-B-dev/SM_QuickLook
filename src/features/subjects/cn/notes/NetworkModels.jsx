import React from "react";
import "../../../../CSS/CN.css";

function NetworkModels() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Network Models & Protocols</h1>

        {/* OSI Model */}
        <div className="cn-section">
          <h2 className="cn-subtitle">OSI Model & Functions of Each Layer</h2>
          <p className="cn-example">
            The **OSI (Open Systems Interconnection) Model** is a conceptual framework used to understand and describe network communication. It consists of seven layers, each responsible for different aspects of the communication process. These layers provide a modular approach to networking and help in troubleshooting, design, and management of networks.
          </p>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Function</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Layer 7: Application</strong></td>
                <td>Handles end-user services and application protocols. Facilitates communication between end users and applications.</td>
                <td>HTTP, FTP, SMTP, DNS</td>
              </tr>
              <tr>
                <td><strong>Layer 6: Presentation</strong></td>
                <td>Transforms data to ensure it is readable by the application layer. Data compression, encryption, and encoding take place.</td>
                <td>JPEG, SSL, TLS</td>
              </tr>
              <tr>
                <td><strong>Layer 5: Session</strong></td>
                <td>Establishes, manages, and terminates communication sessions between two devices. Ensures data is properly synchronized.</td>
                <td>NetBIOS, RPC</td>
              </tr>
              <tr>
                <td><strong>Layer 4: Transport</strong></td>
                <td>Provides end-to-end communication and error handling. Ensures data is delivered reliably with flow control.</td>
                <td>TCP, UDP</td>
              </tr>
              <tr>
                <td><strong>Layer 3: Network</strong></td>
                <td>Determines the path for data transmission and routes packets between devices across networks.</td>
                <td>IP, ICMP, Router</td>
              </tr>
              <tr>
                <td><strong>Layer 2: Data Link</strong></td>
                <td>Provides error detection and correction, manages data frames, and establishes link control.</td>
                <td>Ethernet, Switches</td>
              </tr>
              <tr>
                <td><strong>Layer 1: Physical</strong></td>
                <td>Transmits raw bit stream over a physical medium (e.g., cables, radio waves). Defines hardware specifications.</td>
                <td>Ethernet cables, Optical fibers</td>
              </tr>
            </tbody>
          </table>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of OSI Model:

  +-----------------------------+
  | Layer 7: Application        | <- End-user applications
  +-----------------------------+
  | Layer 6: Presentation       | <- Data translation and encoding
  +-----------------------------+
  | Layer 5: Session            | <- Session management
  +-----------------------------+
  | Layer 4: Transport          | <- End-to-end communication
  +-----------------------------+
  | Layer 3: Network            | <- Routing packets across networks
  +-----------------------------+
  | Layer 2: Data Link          | <- Data framing and error detection
  +-----------------------------+
  | Layer 1: Physical           | <- Physical transmission of bits
  +-----------------------------+
`}
          </pre>
        </div>

        {/* TCP/IP Model */}
        <div className="cn-section">
          <h2 className="cn-subtitle">TCP/IP Model</h2>
          <p className="cn-example">
            The **TCP/IP Model** (Transmission Control Protocol/Internet Protocol) is a more simplified model compared to OSI. It has four layers instead of seven, and it is the foundation of the modern Internet. The TCP/IP model primarily focuses on defining protocols and standards for data transmission across diverse networks.
          </p>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Function</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Layer 4: Application</strong></td>
                <td>Handles end-user services and application protocols (similar to OSI's Application, Presentation, and Session layers).</td>
                <td>HTTP, FTP, SMTP, DNS</td>
              </tr>
              <tr>
                <td><strong>Layer 3: Transport</strong></td>
                <td>Responsible for end-to-end communication and error recovery. Ensures reliable data transmission.</td>
                <td>TCP, UDP</td>
              </tr>
              <tr>
                <td><strong>Layer 2: Internet</strong></td>
                <td>Manages packet forwarding and routing between devices. Determines the optimal path for data transmission.</td>
                <td>IP, ICMP, Routing protocols</td>
              </tr>
              <tr>
                <td><strong>Layer 1: Network Access</strong></td>
                <td>Handles the transmission of data over physical media and ensures correct framing of data.</td>
                <td>Ethernet, Wi-Fi</td>
              </tr>
            </tbody>
          </table>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of TCP/IP Model:

  +-----------------------------+
  | Layer 4: Application        | <- User services
  +-----------------------------+
  | Layer 3: Transport          | <- End-to-end communication
  +-----------------------------+
  | Layer 2: Internet           | <- Routing and addressing
  +-----------------------------+
  | Layer 1: Network Access     | <- Physical media transmission
  +-----------------------------+
`}
          </pre>
        </div>

        {/* Connection-Oriented vs Connectionless Approach */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Connection-Oriented vs Connectionless Approach</h2>
          <p className="cn-example">
            A **Connection-Oriented** approach (e.g., TCP) requires establishing a connection between the sender and receiver before data transfer can begin. The connection is maintained throughout the communication session, ensuring reliable delivery of data.
          </p>
          <p className="cn-example">
            A **Connectionless** approach (e.g., UDP) does not establish a connection before transmitting data. Each packet is treated independently, and there is no guarantee of delivery, order, or error correction.
          </p>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Connection-Oriented</th>
                <th>Connectionless</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Reliability</strong></td>
                <td>Reliable delivery with acknowledgment of receipt.</td>
                <td>Unreliable; no acknowledgment of receipt.</td>
              </tr>
              <tr>
                <td><strong>Data Transfer</strong></td>
                <td>Data is transferred in a continuous stream.</td>
                <td>Data is sent in independent packets.</td>
              </tr>
              <tr>
                <td><strong>Examples</strong></td>
                <td>TCP, SCTP</td>
                <td>UDP, IP</td>
              </tr>
              <tr>
                <td><strong>Overhead</strong></td>
                <td>Higher due to connection setup and maintenance.</td>
                <td>Lower as there is no connection establishment.</td>
              </tr>
            </tbody>
          </table>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of Connection-Oriented vs Connectionless:

  |-------------------------|
  |   Connection-Oriented    | <- Establish connection, reliable delivery, acknowledgment
  |-------------------------|
  |   Connectionless         | <- No connection, independent packets, unreliable
  |-------------------------|
`}
          </pre>
        </div>

        {/* OSI vs TCP/IP Comparison */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Comparison of OSI & TCP/IP Models</h2>
          <p className="cn-example">
            The **OSI** model is a theoretical model designed for standardization and troubleshooting, while the **TCP/IP** model is more practical and implementation-focused, used in the Internet. Here's a comparison of both models.
          </p>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>OSI Model</th>
                <th>TCP/IP Model</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Number of Layers</strong></td>
                <td>7 layers</td>
                <td>4 layers</td>
              </tr>
              <tr>
                <td><strong>Layered Model</strong></td>
                <td>Purely theoretical; each layer has distinct functions.</td>
                <td>Practical; focuses on implementation and real-world protocols.</td>
              </tr>
              <tr>
                <td><strong>Layer Names</strong></td>
                <td>Application, Presentation, Session, Transport, Network, Data Link, Physical</td>
                <td>Application, Transport, Internet, Network Access</td>
              </tr>
              <tr>
                <td><strong>Example Protocols</strong></td>
                <td>HTTP, SMTP, TCP, IP</td>
                <td>HTTP, FTP, IP, TCP</td>
              </tr>
              <tr>
                <td><strong>Use Case</strong></td>
                <td>Used as a reference model for network communication.</td>
                <td>Used in real-world networking protocols (Internet protocols).</td>
              </tr>
            </tbody>
          </table>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram for OSI vs TCP/IP Comparison:

  OSI Model            | TCP/IP Model
  +---------------------+---------------+
  | 7 Layers            | 4 Layers      |
  | Application         | Application   |
  | Presentation        | Transport     |
  | Session             | Internet      |
  | Transport           | Network Access|
  | Network             |               |
  | Data Link          |               |
  | Physical            |               |
`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default NetworkModels;
