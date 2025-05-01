import React from "react";
import "../../../../CSS/Cn.css";

function DatalinkLayerProtocols() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Protocols in Data Link Layer</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">Tree View: Datalink Layer Protocols</h2>
          <pre className="text-grey-400">
            {`Datalink Layer Protocols
├── Noiseless Channels
│   ├── Simplest Protocol
│   └── Stop-and-Wait Protocol
├── Noisy Channels
│   ├── Stop-and-Wait ARQ
│   ├── Go-Back-N ARQ
│   └── Selective Repeat ARQ
└── Concepts Involved
    ├── Flow Control
    ├── Error Control
    └── Acknowledgment & Retransmission`}
          </pre>
        </div>
        <br />
        <hr />
        <br />
        <div className="cn-section">
          <h2 className="cn-subtitle">Noiseless Channel Protocols</h2>
          <p className="text-grey-400">
            Assume an ideal transmission medium without any data loss or
            corruption. These are theoretical models used for simplicity.
          </p>
          <div className="flex gap-1.5">
            <div>
              <h3 className="cn-subtitle">1. Simplest Protocol</h3>
              <p className="text-grey-400">
                - No flow control or error control. <br />
                - Sender and receiver are perfectly synchronized. <br />- Works
                in perfect environment but impractical in real life.
              </p>
            </div>
            <img
              className="w-4"
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210305182628/gfg-300x199.png"
              alt=""
            />
          </div>

          <div className="flex gap-1.5">
            <div>
              <h3 className="cn-subtitle">2. Stop-and-Wait Protocol</h3>
              <p className="text-grey-400">
                - Sender sends one frame at a time and waits for an ACK. <br />
                - Prevents frame overlap. <br />- Suitable when processing time
                is significant.
              </p>
            </div>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210226210431/UntitledDiagram.png"
              alt=""
            />
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="cn-section">
          <h2 className="cn-subtitle">Noisy Channel Protocols (ARQ)</h2>
          <p className="text-grey-400">
            Noisy channels suffer from frame loss, duplication or corruption.
            Automatic Repeat reQuest (ARQ) handles it using acknowledgments and
            retransmissions.
          </p>

          <div className="flex gap-1.5">
            <div>
              <h3 className="cn-subtitle">1. Stop-and-Wait ARQ</h3>
              <p className="text-grey-400">
                - Sender sends one frame and waits for ACK before sending the
                next.
                <br />
                - If ACK is not received within timeout, the frame is resent.
                <br />- Simple but inefficient over long-delay or high-speed
                networks.
              </p>
            </div>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/Stop-and-Wait-ARQ.png"
              alt="Stop-and-Wait ARQ Diagram"
            />
          </div>
          <br />
          <br />
          <div className="flex gap-1.5">
            <div>
              <h3 className="cn-subtitle">2. Go-Back-N ARQ</h3>
              <p className="text-grey-400">
                - Sender sends several frames before needing ACKs (based on
                window size).
                <br />
                - If a frame is lost or erroneous, all subsequent frames are
                resent.
                <br />- Easier implementation, but leads to unnecessary
                retransmissions.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <img
                className="smallImg"
                src="https://www.geeksforgeeks.org/wp-content/uploads/Sliding_SET_2-1.jpg"
                alt="Go-Back-N ARQ Diagram"
              />
              <img
                className="smallImg"
                src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/tutorials/uploads/pictures/1611231194-71449.png"
                alt=""
              />
            </div>
          </div>
          <br />
          <br />
          <div className="flex gap-1.5">
            <div>
              <h3 className="cn-subtitle">3. Selective Repeat ARQ</h3>
              <p className="text-grey-400">
                - Sender retransmits only the erroneous or lost frames.
                <br />
                - Receiver must buffer out-of-order frames and reorder before
                delivery.
                <br />- Efficient but more complex to implement.
              </p>
            </div>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/Sliding-Window-Protocol.jpg"
              alt="Selective Repeat ARQ Diagram"
            />
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Flow Control & Error Control</h2>
          <p className="text-grey-400">
            <strong>Flow Control</strong> prevents overwhelming the receiver:
            <br />
            - Stop-and-Wait: One frame at a time. <br />- Sliding Window:
            Multiple frames in a "window" (Go-Back-N and Selective Repeat).
          </p>
          <p className="text-grey-400">
            <strong>Error Control</strong> ensures frame delivery without
            errors:
            <br />
            - Use of parity, CRC, Hamming code. <br />- Acknowledgments
            (ACK/NACK) and retransmission on failure.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Comparison Table</h2>
          <table className="example-table">
            <thead>
              <tr>
                <th>Protocol</th>
                <th>Type</th>
                <th>Flow Control</th>
                <th>Error Control</th>
                <th>Efficiency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Simplest</td>
                <td>Noiseless</td>
                <td>No</td>
                <td>No</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Stop-and-Wait</td>
                <td>Noiseless</td>
                <td>Yes</td>
                <td>No</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Stop-and-Wait ARQ</td>
                <td>Noisy</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Go-Back-N ARQ</td>
                <td>Noisy</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Selective Repeat ARQ</td>
                <td>Noisy</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Advantages & Disadvantages</h2>
          <ul className="text-grey-400 list-disc ml-4">
            <li>
              <strong>Stop-and-Wait:</strong> Simple, but low throughput.
            </li>
            <li>
              <strong>Go-Back-N:</strong> Better performance but wasteful
              retransmissions.
            </li>
            <li>
              <strong>Selective Repeat:</strong> High efficiency, but complex.
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <button
            className="infoBtn"
            onClick={() =>
              window.open(
                "https://www.geeksforgeeks.org/noiseless-channel-protocol/"
              )
            }
          >
            Noiseless
          </button>
          <button
            className="infoBtn"
            onClick={() =>
              window.open(
                "https://www.geeksforgeeks.org/noisy-channels-protocols/"
              )
            }
          >
            Noisy
          </button>
        </div>
      </div>
    </div>
  );
}

export default DatalinkLayerProtocols;
