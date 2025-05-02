import React from "react";
import "../../../../CSS/CN.css";

function TokenRing() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Token Ring Network</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">What is Token Ring?</h2>
          <p className="cn-example">
            Token Ring is a **LAN protocol** standardized as **IEEE 802.5**. It uses a **ring topology** where data flows in a **unidirectional loop** (typically clockwise). A special frame called a **"token"** circulates around the network to control access and avoid collisions.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Key Characteristics</h2>
          <ul className="cn-example">
            <li><strong>Access Control:</strong> Token Passing (only the device with the token can transmit).</li>
            <li><strong>Topology:</strong> Logical Ring, physical Star (via Multi-Station Access Unit or MSAU).</li>
            <li><strong>Direction:</strong> Unidirectional (clockwise data flow).</li>
            <li><strong>Framing:</strong> Variable-size frame (up to 4,500 bytes of data).</li>
            <li><strong>Encoding:</strong> Differential Manchester Encoding (clock recovery + no DC component).</li>
            <li><strong>Speed:</strong> Originally 4 Mbps, later 16 Mbps and up to 100 Mbps.</li>
          </ul>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Token Ring Frame Format (IEEE 802.5)</h2>
          <pre>
{`| SD | AC | FC | DA | SA | DATA | FCS | ED | FS |
| 8  | 8  | 8  |48  |48  |varies| 32  | 8  | 8  | (Bits)
`}
          </pre>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Field Descriptions</h2>
          <div className="cn-grid">
              <div className="cn-grid-item unstructured">
                <p><strong>1. SD (Start Delimiter):</strong> 8 bits. Marks the beginning of the frame. Contains unique pattern for recognition.</p>
                <p><strong>2. AC (Access Control):</strong> 8 bits. Contains token bit and priority/reservation bits to manage access.</p>
                <p><strong>3. FC (Frame Control):</strong> 8 bits. Indicates frame type: data or control frame (e.g., token, maintenance).</p>
                <p><strong>4. DA (Destination Address):</strong> 48 bits. MAC address of the intended receiver.</p>
                <p><strong>5. SA (Source Address):</strong> 48 bits. MAC address of the sender.</p>
                <p><strong>6. DATA:</strong> Variable. Actual payload being transmitted (max ~4500 bytes).</p>
                <p><strong>7. FCS (Frame Check Sequence):</strong> 32 bits. CRC used for error detection.</p>
                <p><strong>8. ED (End Delimiter):</strong> 8 bits. Marks the end of the frame.</p>
                <p><strong>9. FS (Frame Status):</strong> 8 bits. Indicates whether the frame was recognized and copied by the destination.</p>
            </div>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Exam-Oriented Insights</h2>
          <ul className="cn-example">
            <li><strong>Q1. Why is token passing better than CSMA/CD?</strong><br />➤ It avoids collisions completely by giving exclusive access to one node.</li>
            <li><strong>Q2. Is token ring deterministic?</strong><br />➤ Yes. Every node gets a chance to transmit in order, unlike Ethernet.</li>
            <li><strong>Q3. Can token be lost?</strong><br />➤ Yes, and in that case, a new token is generated after timeout (monitoring station detects loss).</li>
            <li><strong>Q4. How does Differential Manchester Encoding help?</strong><br />➤ Ensures clock synchronization and detects bit transitions (used in 802.5).</li>
          </ul>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Token Ring Frame Format</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/tok-3.png"
            alt="Token Ring Frame Format"
          />
          <button
            className="infoBtn"
            onClick={() =>
              window.open("https://www.geeksforgeeks.org/token-ring-frame-format/")
            }
          >
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}

export default TokenRing;
