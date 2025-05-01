import React from 'react';
import '../../../../CSS/CN.css';

function DatalinkLayerDetails() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Data Link Layer - In-Depth Overview</h1>

        {/* Summary */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Summary of Data Link Layer</h2>
          <p className="cn-example">
            The <strong>Data Link Layer</strong> is the 2nd layer in the OSI model. It is responsible for reliable data transfer between directly connected nodes (hop-to-hop delivery), framing, addressing, error detection/correction, and flow control. It acts as a bridge between the physical layer and the network layer, ensuring that raw bits from the physical layer are packaged into frames for reliable transmission.
          </p>
        </div>

        {/* Hop-to-Hop Delivery */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Hop-to-Hop Delivery</h2>
          <p className="cn-example">
            Data link layer provides <strong>hop-to-hop</strong> delivery, which means it ensures that data is successfully delivered from one directly connected node to the next. This is different from the network layer which handles end-to-end delivery.
          </p>
        </div>

        {/* Flow Control */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Flow Control</h2>
          <p className="cn-example">
            Flow control prevents a fast sender from overwhelming a slow receiver. It ensures that data is transmitted at a rate that the receiver can handle.
          </p>
          <ul className="cn-example">
            <li><strong>Stop-and-Wait:</strong> Sender sends one frame at a time and waits for an acknowledgment.</li>
            <li><strong>Sliding Window:</strong> Allows multiple frames to be sent before needing acknowledgment. Uses a window size to manage frame transmission and acknowledgment.</li>
          </ul>
        </div>

        {/* Access Control */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Access Control (Medium Access Control - MAC)</h2>
          <p className="cn-example">
            When multiple devices share the same communication medium, access control decides which device can use the channel.
          </p>
          <ul className="cn-example">
            <li><strong>Random Access:</strong>
              <ul>
                <li><strong>ALOHA:</strong> Pure and slotted ALOHA for random transmission.</li>
                <li><strong>CSMA/CD:</strong> Carrier Sense Multiple Access with Collision Detection (used in wired LANs).</li>
                <li><strong>CSMA/CA:</strong> Collision Avoidance (used in wireless networks).</li>
              </ul>
            </li>
            <li><strong>Controlled Access:</strong>
              <ul>
                <li>Polling, Token Passing (avoids collision by scheduling turns).</li>
              </ul>
            </li>
            <li><strong>Channelization:</strong>
              <ul>
                <li>FDMA, TDMA, CDMA – divides channel into frequencies, time slots, or codes.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Error Control */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Error Control</h2>
          <p className="cn-example">
            Error control ensures error-free delivery of data through detection and correction.
          </p>
          <ul className="cn-example">
            <li><strong>Error Detection:</strong>
              <ul>
                <li><strong>Parity Bit:</strong> Adds an extra bit to detect single-bit errors.</li>
                <li><strong>Checksum:</strong> Simple method for detecting errors using arithmetic sum.</li>
                <li><strong>CRC (Cyclic Redundancy Check):</strong> Polynomial-based robust error detection method.</li>
              </ul>
            </li>
            <li><strong>Error Correction:</strong>
              <ul>
                <li><strong>Hamming Code:</strong> Can detect and correct single-bit errors.</li>
                <li><strong>ARQ (Automatic Repeat Request):</strong> Retransmission-based technique using Stop-and-Wait, Go-Back-N, Selective Repeat protocols.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Physical Address */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Physical Address</h2>
          <p className="cn-example">
            A <strong>physical address</strong> (also called MAC address) is a unique identifier assigned to a network interface card (NIC) for communication on the data link layer. It is a 48-bit address (e.g., 00:1A:2B:3C:4D:5E) and is used for delivering frames to the correct device on a local network.
          </p>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Data Link Layer Functions</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250128105440836652/30.webp"
            alt="Data Link Layer Diagram"
          />
        </div>
        <button className='infoBtn' onClick={()=>window.open("https://www.geeksforgeeks.org/data-link-layer/")}>Know more</button>
      </div>
    </div>
  );
}

export default DatalinkLayerDetails;
