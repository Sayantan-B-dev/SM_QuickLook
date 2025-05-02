import React from "react";
import "../../../../CSS/CN.css";

function TransportLayer() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Transport Layer: Responsibilities & Mechanisms</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">What is the Transport Layer?</h2>
          <p className="cn-example">
            The **Transport Layer** is the fourth layer in the OSI model, responsible for ensuring end-to-end communication and reliable data transfer between devices in a network. This layer handles error correction, flow control, segmentation, and multiplexing.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Responsibilities of the Transport Layer</h2>
          <p className="cn-example">
            The Transport Layer performs the following core functions:
            <ul>
              <li><strong>Reliable Data Transfer</strong>: Ensures data is delivered without loss, duplication, or errors.</li>
              <li><strong>Error Control</strong>: Detects and corrects errors in the transmitted data.</li>
              <li><strong>Flow Control</strong>: Regulates the data flow between sender and receiver to avoid congestion.</li>
              <li><strong>Segmentation</strong>: Breaks large data into smaller chunks called segments for efficient transmission.</li>
              <li><strong>Multiplexing</strong>: Allows multiple data streams to share the same transmission medium.</li>
              <li><strong>Demultiplexing</strong>: Separates incoming data from different sources and sends it to the correct destination process.</li>
            </ul>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Types of Transport Layer Protocols</h2>
          <p className="cn-example">
            The two main Transport Layer protocols are:
            <ul>
              <li><strong>Transmission Control Protocol (TCP)</strong>: A connection-oriented protocol that ensures reliable, in-order delivery of data.</li>
              <li><strong>User Datagram Protocol (UDP)</strong>: A connectionless protocol that sends data without ensuring reliability or order.</li>
            </ul>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Error Control and Flow Control Mechanisms</h2>
          <p className="cn-example">
            Error and flow control are key to maintaining the integrity of communication:
            <ul>
              <li><strong>Flow Control</strong> ensures that the receiver is not overwhelmed by too much data at once. Common mechanisms include:
                <ul>
                  <li><strong>Stop-and-Wait (SW)</strong>: The sender waits for an acknowledgment after each frame before sending the next one.</li>
                  <li><strong>Go-Back-N (GBN)</strong>: The sender can send multiple frames but must wait for an acknowledgment before sending the next set.</li>
                  <li><strong>Selective Repeat (SR)</strong>: Allows the sender to send multiple frames without waiting for the acknowledgment of each frame, but only re-sends lost frames.</li>
                </ul>
              </li>
              <li><strong>Error Control</strong> ensures that any lost, corrupted, or duplicate data is properly handled. This is done using checksums and sequence numbers to identify errors and re-transmit lost data.</li>
            </ul>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Congestion Control: AIMD</h2>
          <p className="cn-example">
            Congestion control ensures that the network remains stable and efficient by preventing network overload. One common mechanism is:
            <ul>
              <li><strong>AIMD (Additive Increase Multiplicative Decrease)</strong>: This mechanism increases the data transmission rate gradually (additive increase) until network congestion occurs, after which the rate is dramatically reduced (multiplicative decrease).</li>
            </ul>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Segmentation and Multiplexing</h2>
          <p className="cn-example">
            <strong>Segmentation</strong> refers to the process of dividing large application data into smaller segments, which are then transmitted over the network. Each segment contains a header with necessary control information, such as sequence numbers and checksums.
            <br />
            <strong>Multiplexing</strong> allows multiple communication streams to share the same network resources. It achieves this by combining data from multiple sources into a single stream, which is then sent over the network. At the receiving end, this stream is demultiplexed into separate data streams based on port numbers.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Transport Layer Segmentation</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230502004748/image-289.png"
            alt="Transport Layer Segmentation Diagram"
          />
        </div>

        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/transport-layer-responsibilities/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default TransportLayer;
