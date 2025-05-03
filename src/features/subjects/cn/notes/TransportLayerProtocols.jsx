import React from "react";
import "../../../../CSS/CN.css";

function TransportLayerProtocols() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Transport Layer: Services and Protocols</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">Transport Layer Services</h2>
          <p className="cn-example">
            The transport layer is responsible for logical communication between
            application processes running on different hosts. It provides:
            <ul>
              <li>Segmentation and Reassembly</li>
              <li>Connection Control</li>
              <li>Flow Control</li>
              <li>Error Control</li>
              <li>Multiplexing and Demultiplexing</li>
            </ul>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Connectionless vs Connection-Oriented Protocols</h2>
          <p className="cn-example">
            <strong>Connection-Oriented:</strong> Establishes connection before data transfer. E.g., TCP. Ensures reliability and sequencing.<br/>
            <strong>Connectionless:</strong> No connection setup required. E.g., UDP. Fast but unreliable.
          </p>
          <pre>{`
Diagram:
   Sender         Receiver
     |                |
 [Data Packets] --> [Data Packets] (UDP - Connectionless)
     |                |
 [SYN -> ACK -> Data] -> [ACK -> FIN] (TCP - Connection-Oriented)
          `}</pre>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Transport Layer Protocols</h2>

          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3>Simple Protocol</h3>
              <div className="cn-grid-item unstructured">
                A protocol with no flow or error control. Sends packets without feedback. Not used practically due to high risk of loss.
              </div>
            </div>

            <div className="cn-grid-item structured">
              <h3>Stop-and-Wait Protocol</h3>
              <div className="cn-grid-item unstructured">
                Sends one frame and waits for acknowledgment before sending the next. Simple but inefficient.
              </div>
            </div>

            <div className="cn-grid-item structured">
              <h3>Go-Back-N Protocol</h3>
              <div className="cn-grid-item unstructured">
                Allows multiple frames to be sent but requires retransmission of all frames after an error.
                Uses a sliding window for efficiency.
              </div>
            </div>

            <div className="cn-grid-item structured">
              <h3>Selective-Repeat Protocol</h3>
              <div className="cn-grid-item unstructured">
                More efficient than Go-Back-N. Only the erroneous frames are retransmitted. Requires complex acknowledgment and buffering.
              </div>
            </div>

            <div className="cn-grid-item structured">
              <h3>Bidirectional Protocol (Piggybacking)</h3>
              <div className="cn-grid-item unstructured">
                In bidirectional data transfer, acknowledgment is sent along with the data frame (piggybacked) to reduce overhead.
              </div>
            </div>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Stop-and-Wait vs Go-Back-N vs Selective Repeat</h2>
          <pre>{`
Stop-and-Wait:
   S ---> F1 ---> R
       <--- ACK ---

Go-Back-N:
   S ---> F1 F2 F3 F4 ---> R
       <--- NACK F2 ---
   S ---> F2 F3 F4

Selective Repeat:
   S ---> F1 F2 F3 F4 ---> R
       <--- ACK F1, NACK F3 ---
   S ---> F3
          `}</pre>
        </div>

      </div>
    </div>
  );
}

export default TransportLayerProtocols;
