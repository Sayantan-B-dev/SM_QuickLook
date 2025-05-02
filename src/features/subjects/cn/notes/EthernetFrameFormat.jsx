import React from "react";
import "../../../../CSS/CN.css";

function EthernetFrameFormat() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Ethernet Frame Format (IEEE 802.3)</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">Overview</h2>
          <p className="cn-example">
            Ethernet is the most widely used LAN technology. It uses the IEEE 802.3 standard. The Ethernet frame is the basic unit of data transmission in Ethernet networks. It contains fields required for addressing, error detection, and data delivery.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Ethernet Frame Format (Diagram Structure)</h2>
          <pre>
{`| Preamble | Start Frame Delimiter | Destination MAC | Source MAC | Type/Length | Payload (Data) | CRC |
|  7 Bytes |        1 Byte         |     6 Bytes     |   6 Bytes  |   2 Bytes   | 46 - 1500 Bytes| 4 B |

`}
          </pre>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Field-wise Explanation</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <div className="cn-grid-item unstructured">
                <p><strong>1. Preamble (7 Bytes):</strong> Used for synchronization between sender and receiver. Consists of alternating 1s and 0s.</p>
                <p><strong>2. Start Frame Delimiter (1 Byte):</strong> Marks the end of preamble and beginning of frame. Fixed value: 10101011.</p>
                <p><strong>3. Destination MAC Address (6 Bytes):</strong> Identifies intended receiver. A unique hardware address.</p>
                <p><strong>4. Source MAC Address (6 Bytes):</strong> Identifies the sender's NIC.</p>
                <p><strong>5. Type/Length (2 Bytes):</strong> Indicates either the type of payload (if &gt; 1536) or length of data field.</p>
                <p><strong>6. Data / Payload (46-1500 Bytes):</strong> Contains actual data or higher layer packet. If data is less than 46 bytes, padding is added.</p>
                <p><strong>7. CRC (4 Bytes):</strong> Cyclic Redundancy Check. Used for error detection at receiver.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Exam-Oriented Q&A</h2>
          <ul className="cn-example">
            <li><strong>Q1. What is the minimum and maximum size of an Ethernet frame?</strong><br />
              ➤ Minimum: 64 bytes, Maximum: 1518 bytes (including headers and CRC).
            </li>
            <li><strong>Q2. Why is padding added in Ethernet frames?</strong><br />
              ➤ If the data is less than 46 bytes, padding is added to meet the minimum size of 64 bytes (to avoid collisions going undetected).
            </li>
            <li><strong>Q3. What is the role of CRC in Ethernet?</strong><br />
              ➤ CRC detects errors by calculating a checksum at sender and comparing it at receiver.
            </li>
            <li><strong>Q4. What differentiates Ethernet II from IEEE 802.3?</strong><br />
              ➤ Ethernet II uses the Type field; IEEE 802.3 uses Length and follows with Logical Link Control (LLC) for identifying upper-layer protocol.
            </li>
            <li><strong>Q5. Is MAC address globally unique?</strong><br />
              ➤ Yes. The first 3 bytes (OUI) are manufacturer-assigned, and the last 3 bytes are device-specific.
            </li>
          </ul>
        </div>
        <div className="cn-section">
        <h2 className="cn-subtitle">Diagram: Ethernet Frame Structure</h2>
        <img
        className="bg-amber-50 smallImg"
          src="https://media.geeksforgeeks.org/wp-content/uploads/IEEE-802.3-Ethernet-Frame-Format.png"
          alt="Ethernet Frame Diagram"
        />
      </div>
      <button
        className="infoBtn"
        onClick={() =>
          window.open("https://www.geeksforgeeks.org/ethernet-frame-format/")
        }
      >
        Know more
      </button>
      </div>
    </div>
  );
}

export default EthernetFrameFormat;
