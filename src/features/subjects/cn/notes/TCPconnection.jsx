import React from "react";
import "../../../../CSS/CN.css";

function TCPconnection() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">TCP: Connection Establishment, Data Transfer, Termination, and Congestion Control</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">1. TCP Connection Establishment</h2>
          <p className="cn-example">
            **TCP Connection Establishment** follows a process called **Three-Way Handshake**, which is essential to establish a reliable connection between the client and the server before data transfer begins.
            <br />
            **Steps for TCP Three-Way Handshake**:
            <ol>
              <li>
                <strong>SYN</strong> - The client sends a TCP packet with the SYN flag set to 1. This packet contains an initial sequence number (ISN) for the connection.
              </li>
              <li>
                <strong>SYN-ACK</strong> - The server responds with a TCP packet with both SYN and ACK flags set to 1. The ACK number is set to the ISN of the client + 1. This acknowledges the client’s request.
              </li>
              <li>
                <strong>ACK</strong> - Finally, the client sends an ACK packet with the ACK flag set to 1. The ACK number is set to the server’s ISN + 1. Now, both sides are synchronized, and the connection is established.
              </li>
            </ol>
            This entire process ensures both sides are synchronized, and data can be sent reliably.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: TCP Three-Way Handshake</h2>
          <pre className="cn-example">
            {`
Client                      Server
  |                            |
  |---- SYN, Seq = x --------->|
  |                            |
  |<---- SYN+ACK, Seq = y, Ack = x + 1 -----|
  |                            |
  |---- ACK, Ack = y + 1 ----->|
  |                            |
Connection Established        |
            `}
          </pre>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">2. TCP Data Transfer</h2>
          <p className="cn-example">
            Once the connection is established, TCP supports reliable data transfer by ensuring that data is delivered correctly and in order. This is achieved by using **Sequence Numbers**, **Acknowledgment Numbers**, and **Flow Control**.
            <br />
            The steps for **TCP Data Transfer** are:
            <ol>
              <li>
                The sender breaks the data into smaller segments, each with a **Sequence Number** indicating the position of that segment within the overall data stream.
              </li>
              <li>
                Each segment is sent to the receiver. Upon receiving the segments, the receiver sends back an **Acknowledgment Number**, which indicates the next expected byte.
              </li>
              <li>
                The sender waits for the acknowledgment for each segment. If the acknowledgment does not arrive within a timeout period, the sender retransmits the data (this is part of **Error Control**).
              </li>
              <li>
                The receiver can also send **Window Size** information, controlling the amount of data the sender is allowed to send at once. This is part of **Flow Control**.
              </li>
            </ol>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: TCP Data Transfer</h2>
          <pre className="cn-example">
            {`
Sender                      Receiver
  |                            |
  |---- Seq = x -------------->|
  |                            |
  |<--- Ack = x + length ------|
  |                            |
  |---- Seq = x + length ----->|
  |                            |
  |<--- Ack = x + 2 * length --|
  |                            |
            `}
          </pre>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">3. TCP Connection Termination</h2>
          <p className="cn-example">
            **TCP Connection Termination** involves a **Four-Way Handshake**, where both the client and server agree to close the connection in a reliable manner.
            <br />
            **Steps for TCP Four-Way Handshake**:
            <ol>
              <li>
                The client sends a **FIN** packet to the server, indicating that it wants to terminate the connection. The client cannot send any more data.
              </li>
              <li>
                The server responds with an **ACK** packet, confirming that the FIN packet was received.
              </li>
              <li>
                The server sends a **FIN** packet to the client, indicating that it also wants to terminate the connection.
              </li>
              <li>
                The client responds with an **ACK** packet, confirming the server’s termination request.
              </li>
            </ol>
            After this, the connection is closed, and both the client and server free up resources.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: TCP Four-Way Handshake</h2>
          <pre className="cn-example">
            {`
Client                      Server
  |                            |
  |---- FIN ------------------>|
  |                            |
  |<--- ACK -------------------|
  |                            |
  |---- FIN ------------------>|
  |                            |
  |<--- ACK -------------------|
Connection Terminated         |
            `}
          </pre>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">4. TCP Congestion Control</h2>
          <p className="cn-example">
            **TCP Congestion Control** ensures that data is sent at an optimal rate without causing congestion on the network. It uses the following key algorithms:
            <ol>
              <li>
                <strong>Slow Start</strong>: Initially, the sender starts with a small congestion window. The window size grows exponentially until it reaches a threshold (ssthresh).
              </li>
              <li>
                <strong>Congestion Avoidance</strong>: After the slow start threshold is reached, the congestion window grows linearly to avoid congestion.
              </li>
              <li>
                <strong>AIMD (Additive Increase Multiplicative Decrease)</strong>: When congestion is detected (through packet loss), the window size is reduced multiplicatively, and then grows additively.
              </li>
              <li>
                <strong>Fast Retransmit</strong>: When the sender receives multiple duplicate ACKs, it immediately retransmits the missing segment without waiting for a timeout.
              </li>
              <li>
                <strong>Fast Recovery</strong>: After a fast retransmit, the congestion window is reduced, but not to the initial size. It is adjusted to prevent further congestion.
              </li>
            </ol>
            These algorithms help to adapt the transmission rate to the current network conditions, ensuring a balance between efficient data transfer and avoiding congestion.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Mathematical Concepts in TCP Congestion Control</h2>
          <p className="cn-example">
            The key mathematical concepts in TCP Congestion Control are:
            <ul>
              <li>
                **Window Size Calculation**: The sender adjusts its **congestion window (cwnd)** to control how much data it can send. During **Slow Start**, the window size increases exponentially, and during **Congestion Avoidance**, it increases linearly. The calculation is based on the following:
                <br />
                <code>cwnd = cwnd + 1 MSS</code> (for Slow Start)
                <br />
                <code>cwnd = cwnd + 1 MSS / cwnd</code> (for Congestion Avoidance)
              </li>
              <li>
                **Threshold Calculation**: The **slow start threshold (ssthresh)** determines when TCP switches from Slow Start to Congestion Avoidance. It is typically calculated as:
                <br />
                <code>ssthresh = cwnd / 2</code> (after detecting packet loss)
              </li>
            </ul>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: TCP Congestion Control Algorithms</h2>
          <pre className="cn-example">
            {`
Slow Start        +-------------------------------------------+
                   |             cwnd grows exponentially     |
                   |                (exponentially)          |
                   +-------------------------------------------+

Congestion Avoidance +-------------------------------------------+
                       |    cwnd grows linearly after slow start |
                       |         (additive increase)             |
                       +-------------------------------------------+
            `}
          </pre>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Conclusion</h2>
          <p className="cn-example">
            TCP is a reliable, connection-oriented protocol that ensures data is transmitted correctly, efficiently, and in order. Its robust mechanisms for connection establishment, data transfer, termination, and congestion control ensure reliable communication even in the presence of network issues like congestion and packet loss.
          </p>
        </div>

        <img className="smallImg" src="https://media.geeksforgeeks.org/wp-content/uploads/net.png" alt="" />
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/tcp-connection-establishment/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default TCPconnection;
