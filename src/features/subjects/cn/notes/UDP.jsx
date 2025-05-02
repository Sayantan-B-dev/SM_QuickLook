import React from "react";
import "../../../../CSS/CN.css";

function UDP() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">UDP: User Datagram Protocol</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">1. Overview of UDP</h2>
          <p className="cn-example">
            UDP (User Datagram Protocol) is a connectionless, unreliable transport protocol
            in the TCP/IP model. It does not guarantee delivery, ordering, or duplicate protection,
            making it faster and more efficient for certain applications like video streaming, gaming, and DNS.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">2. UDP Header Format</h2>
          <p className="cn-example">
            The UDP header is 8 bytes long and contains the following fields:
            <ul>
              <li><strong>Source Port (16 bits)</strong>: Port number of the sender.</li>
              <li><strong>Destination Port (16 bits)</strong>: Port number of the receiver.</li>
              <li><strong>Length (16 bits)</strong>: Total length of the UDP packet (header + data).</li>
              <li><strong>Checksum (16 bits)</strong>: Used for error-checking the header and data.</li>
            </ul>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: UDP Header Structure</h2>
          <pre className="cn-example">
{` 0      7 8     15 16    23 24    31
+--------+--------+--------+--------+
| Source Port     | Destination Port|
+--------+--------+--------+--------+
| Length          | Checksum        |
+--------+--------+--------+--------+`}
          </pre>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">3. UDP Checksum</h2>
          <p className="cn-example">
            The UDP checksum is optional in IPv4 but mandatory in IPv6. It verifies the integrity of the packet.
            It includes a pseudo header from IP, the UDP header, and the data. If the checksum fails, the packet is discarded.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">4. Packet Loss in UDP</h2>
          <p className="cn-example">
            Since UDP does not provide acknowledgment, retransmission, or ordering, any lost packet is not recovered.
            Applications using UDP must implement their own recovery methods if needed. In real-time applications,
            slight packet loss is often acceptable.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">5. Advantages of UDP over TCP</h2>
          <p className="cn-example">
            <ul>
              <li>Faster data transmission (no connection setup/teardown)</li>
              <li>Low overhead</li>
              <li>Ideal for real-time applications like VoIP, online games</li>
              <li>No congestion control allows for burst traffic</li>
              <li>Stateless – supports broadcasting/multicasting</li>
            </ul>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">6. Application Layer Protocols Using UDP</h2>
          <p className="cn-example">
            <strong>DNS (Domain Name System):</strong> Resolves human-readable domain names (like google.com) to IP addresses.
            It often uses UDP on port 53 for quick responses.
            <br /><br />
            <strong>DHCP (Dynamic Host Configuration Protocol):</strong> Automatically assigns IP addresses and network configuration to devices.
            Operates over UDP ports 67 (server) and 68 (client).
            <br /><br />
            <strong>RIP (Routing Information Protocol):</strong> A distance-vector routing protocol using UDP port 520. It helps routers share routing information.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">7. Comparison: TCP vs UDP</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>TCP</th>
                <th>UDP</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Connection-oriented</td><td>Connectionless</td></tr>
              <tr><td>Reliable (ACK, retransmission)</td><td>Unreliable (no ACK)</td></tr>
              <tr><td>Sequencing supported</td><td>No sequencing</td></tr>
              <tr><td>Flow control using windowing</td><td>No flow control</td></tr>
              <tr><td>Congestion control present</td><td>No congestion control</td></tr>
              <tr><td>Header size: 20 bytes minimum</td><td>Header size: 8 bytes</td></tr>
              <tr><td>Slower but reliable</td><td>Faster but less reliable</td></tr>
              <tr><td>Supports streaming with control</td><td>Best for real-time streaming</td></tr>
              <tr><td>Used by HTTP, FTP, SMTP</td><td>Used by DNS, DHCP, RIP</td></tr>
              <tr><td>More overhead</td><td>Low overhead</td></tr>
              <tr><td>Cannot multicast/broadcast</td><td>Supports multicast/broadcast</td></tr>
              <tr><td>Ensures complete delivery</td><td>No delivery guarantee</td></tr>
              <tr><td>Retransmits lost packets</td><td>Drops lost packets silently</td></tr>
              <tr><td>Needs more resources</td><td>Lightweight, fewer resources</td></tr>
              <tr><td>Full-duplex communication</td><td>Not explicitly full-duplex</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: UDP in a Network</h2>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240226104348/UDP-gif.gif" alt="UDP Diagram" />
          <button className='infoBtn' onClick={()=>window.open("https://www.geeksforgeeks.org/user-datagram-protocol-udp/")}>Know more</button>
        </div>

      </div>
    </div>
  );
}

export default UDP;