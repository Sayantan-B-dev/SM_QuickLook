import React from "react";
import "../../../../CSS/CN.css";

function TCP() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">TCP (Transmission Control Protocol): Detailed Overview</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">What is TCP?</h2>
          <p className="cn-example">
            **TCP** (Transmission Control Protocol) is a connection-oriented, reliable, full-duplex communication protocol that operates at the Transport Layer of the OSI model. It ensures that data is delivered accurately and in the correct order between hosts in a network.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Key Features of TCP</h2>
          <p className="cn-example">
            TCP provides several essential features to ensure reliable data communication:
            <ul>
              <li><strong>Byte Streaming</strong>: Data is treated as a continuous stream of bytes, ensuring that application data is sent and received in the correct sequence without any segmentation issues.</li>
              <li><strong>Connection-Oriented</strong>: Before data transmission, a connection must be established between the sender and receiver, ensuring that both parties are ready to exchange data.</li>
              <li><strong>Full-Duplex Communication</strong>: TCP allows data to be sent and received simultaneously, which means both sender and receiver can transmit data at the same time.</li>
              <li><strong>Piggybacking</strong>: TCP can combine acknowledgment of received data with the data being sent. This helps to improve network efficiency by reducing the number of required packets.</li>
            </ul>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">TCP Header: Detailed Breakdown</h2>
          <p className="cn-example">
            The **TCP Header** is essential in ensuring reliable communication. It contains several fields that help in establishing and maintaining the connection, sequencing, error checking, and flow control. The **TCP Header** size is typically 20 bytes, but can increase due to options and padding.
          </p>

          <h3 className="cn-subtitle">TCP Header Format</h3>
          <p className="cn-example">
            The structure of the TCP header is as follows:
            <table className="cn-table">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Size (bits)</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Source Port</td>
                  <td>16 bits</td>
                  <td>Specifies the port of the sender.</td>
                </tr>
                <tr>
                  <td>Destination Port</td>
                  <td>16 bits</td>
                  <td>Specifies the port of the receiver.</td>
                </tr>
                <tr>
                  <td>Sequence Number</td>
                  <td>32 bits</td>
                  <td>Indicates the sequence number of the first byte of data in this segment.</td>
                </tr>
                <tr>
                  <td>Acknowledgment Number</td>
                  <td>32 bits</td>
                  <td>Indicates the next sequence number expected from the sender (used for acknowledgments).</td>
                </tr>
                <tr>
                  <td>Data Offset (HLEN)</td>
                  <td>4 bits</td>
                  <td>Indicates the size of the TCP header in 32-bit words. It is used to determine where the data begins in the segment.</td>
                </tr>
                <tr>
                  <td>Flags (URG, ACK, PSH, RST, SYN, FIN)</td>
                  <td>9 bits</td>
                  <td>Flags are control bits used for establishing connections, terminating connections, and managing data flow. Each flag has a specific purpose:
                    <ul>
                      <li><strong>URG</strong>: Urgent pointer field is valid.</li>
                      <li><strong>ACK</strong>: Acknowledgment field is valid.</li>
                      <li><strong>PSH</strong>: Push function - requests immediate delivery of data.</li>
                      <li><strong>RST</strong>: Resets the connection.</li>
                      <li><strong>SYN</strong>: Synchronizes sequence numbers (used during connection establishment).</li>
                      <li><strong>FIN</strong>: Indicates the sender has finished sending data.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Window Size</td>
                  <td>16 bits</td>
                  <td>Specifies the size of the sender’s receive window, which is used for flow control.</td>
                </tr>
                <tr>
                  <td>Checksum</td>
                  <td>16 bits</td>
                  <td>Used for error-checking the header and data. It helps detect any errors that may have occurred during transmission.</td>
                </tr>
                <tr>
                  <td>Urgent Pointer</td>
                  <td>16 bits</td>
                  <td>Indicates the offset from the sequence number where urgent data is located (if the URG flag is set).</td>
                </tr>
                <tr>
                  <td>Options and Padding</td>
                  <td>Variable (up to 40 bytes)</td>
                  <td>Additional options (such as maximum segment size) or padding used to ensure the header is a multiple of 32 bits.</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">TCP Segmentation and Flow Control</h2>
          <p className="cn-example">
            TCP segments large messages into smaller chunks called **segments**. This is done to accommodate the maximum transmission unit (MTU) of the network.
            <br />
            <strong>Flow control</strong> in TCP is done using a mechanism called **Sliding Window**. The receiver advertises a "window size," which determines how much data the sender can send before waiting for an acknowledgment.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Error Control in TCP</h2>
          <p className="cn-example">
            TCP uses checksums to detect errors in both the header and data segments. If an error is detected, the segment is discarded and the sender is notified to retransmit the data.
            <br />
            Additionally, the **Sequence Numbers** and **Acknowledgment Numbers** help ensure that all data is received correctly and in order.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Congestion Control in TCP</h2>
          <p className="cn-example">
            Congestion control in TCP prevents the network from becoming overloaded by controlling the amount of data being sent at any one time. The primary mechanisms for congestion control in TCP are:
            <ul>
              <li><strong>AIMD (Additive Increase Multiplicative Decrease)</strong>: Increases the transmission window size gradually and reduces it drastically when congestion is detected.</li>
              <li><strong>Slow Start</strong>: Initially, the sender starts with a small congestion window and increases it exponentially.</li>
              <li><strong>Congestion Avoidance</strong>: Once the sender detects congestion, it switches to a more conservative window size increase strategy.</li>
            </ul>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: TCP Header Format</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240226095336/TCP-Gif.gif"
            alt="TCP Header Diagram"
          />
        </div>

        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/what-is-transmission-control-protocol-tcp/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default TCP;
