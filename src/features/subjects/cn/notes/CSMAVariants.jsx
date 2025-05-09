import React from "react";
import "../../../../CSS/CN.css";

function CSMAVariants() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Carrier Sense Multiple Access (CSMA)</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">Overview of CSMA</h2>
          <p className="text-grey-400">
            CSMA stands for <strong>Carrier Sense Multiple Access</strong>. It
            is a network protocol that listens to a channel before transmitting.
            The sender senses the medium to detect if it's idle or busy. If
            idle, the data is transmitted; otherwise, it waits. It reduces
            collisions compared to ALOHA but doesn’t eliminate them.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Types of CSMA</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">1. 1-Persistent CSMA</h3>
              <p className="text-grey-400">
                - If the channel is idle, the station transmits immediately with
                100% probability (p=1).
                <br />
                - If the channel is busy, the station continuously senses until
                it becomes idle, then transmits.
                <br />
                <strong>Advantage:</strong> Simple and ensures quick
                transmission.
                <br />
                <strong>Disadvantage:</strong> High collision chance if multiple
                nodes wait for the channel to become free.
              </p>
              <img
                className="tooSmallImg"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20200704091849/UntitledDiagram4.png"
                alt=""
              />
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">
                2. Non-Persistent (0-Persistent) CSMA
              </h3>
              <p className="text-grey-400">
                - If the channel is busy, the station waits for a random time
                and checks again.
                <br />
                - If idle, it transmits immediately.
                <br />- <strong>Advantage:</strong> Reduces chances of
                collision.
                <br />- <strong>Disadvantage:</strong> Increases delay and idle
                time.
              </p>
              <img
                className="tooSmallImg"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20200704091935/nonpersistent-660x251.png"
                alt=""
              />
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">
                3. p-Persistent CSMA (Used in slotted channels)
              </h3>
              <p className="text-grey-400">
                - Applicable only in slotted channels.
                <br />
                - When the channel is idle, the station transmits with
                probability p, and waits for the next slot with probability
                (1-p).
                <br />
                - If the channel is busy, it defers until idle again.
                <br />
                <strong>Advantage:</strong> Balances collision risk and delay
                using tunable probability.
                <br />
                **<strong>Disadvantage:</strong> More complex and less optimal
                if p is not well chosen.
              </p>
              <img
                className="tooSmallImg"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20200705141247/ppersitent-660x400.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Comparison Table</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>When Idle</th>
                <th>When Busy</th>
                <th>Collision Risk</th>
                <th>Delay</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-Persistent</td>
                <td>Transmit Immediately</td>
                <td>Senses until idle</td>
                <td>High</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>0-Persistent</td>
                <td>Transmit Immediately</td>
                <td>Wait Random Time</td>
                <td>Low</td>
                <td>High</td>
              </tr>
              <tr>
                <td>p-Persistent</td>
                <td>Transmit with Probability p</td>
                <td>Defer</td>
                <td>Medium</td>
                <td>Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      <div className="cn-section">
                <table className="cn-table">
          <thead>
            <tr className="cn-table-header">
              <th>Aspect</th>
              <th>
                CSMA/CD (Carrier Sense Multiple Access with Collision Detection)
              </th>
              <th>
                CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic Principle</td>
              <td>
                Listens to the channel and transmits if idle. Detects collision
                *during* transmission.
              </td>
              <td>
                Listens to the channel and waits if busy. Tries to avoid
                collision *before* transmission.
              </td>
            </tr>
            <tr>
              <td>Collision Handling</td>
              <td>
                Allows collisions to occur, then detects them and retransmits
                after random delay.
              </td>
              <td>
                Aims to avoid collisions by waiting and using acknowledgments;
                doesn't allow collision to occur.
              </td>
            </tr>
            <tr>
              <td>Collision Detection</td>
              <td>
                Yes, it detects collisions using voltage level monitoring.
              </td>
              <td>No, as it avoids collisions; detection is not required.</td>
            </tr>
            <tr>
              <td>Used In</td>
              <td>Wired networks like Ethernet (especially half-duplex).</td>
              <td>Wireless networks like Wi-Fi (IEEE 802.11).</td>
            </tr>
            <tr>
              <td>Channel Access Mechanism</td>
              <td>
                Senses the medium and transmits; if a collision occurs, it
                aborts and retries.
              </td>
              <td>
                Senses the medium, then waits (backoff), and uses RTS/CTS
                handshake to avoid collision.
              </td>
            </tr>
            <tr>
              <td>Efficiency</td>
              <td>
                High in low traffic, but decreases with network load due to
                collisions.
              </td>
              <td>
                Better in high-traffic wireless environments; reduces
                retransmissions.
              </td>
            </tr>
            <tr>
              <td>Acknowledgement Usage</td>
              <td>
                Does not require ACK; assumes transmission success unless a
                collision is detected.
              </td>
              <td>
                Uses ACK to confirm successful data reception (mandatory in
                wireless).
              </td>
            </tr>
            <tr>
              <td>Overhead</td>
              <td>Lower overhead since no handshaking.</td>
              <td>Higher overhead due to RTS/CTS and ACK control frames.</td>
            </tr>
            <tr>
              <td>Media Type</td>
              <td>
                Wired only (electrical signals allow collision detection).
              </td>
              <td>
                Wireless only (signal interference makes collision detection
                impractical).
              </td>
            </tr>
            <tr>
              <td>Real-world Example</td>
              <td>
                Traditional Ethernet (IEEE 802.3) using coaxial cable or
                hub-based systems.
              </td>
              <td>
                Wi-Fi connections (IEEE 802.11b/g/n/ac) in home or public
                wireless networks.
              </td>
            </tr>
            <tr>
              <td>Performance in High Traffic</td>
              <td>Degrades significantly due to increased collisions.</td>
              <td>Maintains performance better due to collision avoidance.</td>
            </tr>
            <tr>
              <td>Implementation Complexity</td>
              <td>Less complex; straightforward to implement.</td>
              <td>More complex due to additional control frames and logic.</td>
            </tr>
            <tr>
              <td>Latency</td>
              <td>Higher latency due to collision detection and retries.</td>
              <td>Lower latency in high traffic due to collision avoidance.</td>
            </tr>
            <tr>
              <td>Scalability</td>
              <td>Less scalable; performance degrades with more nodes.</td>
              <td>More scalable; better performance with more nodes.</td>
            </tr>
          </tbody>
        </table>
      </div>
              <div className="structured">
                <img className="" src="https://ecomputernotes.com/images/CSMA-CA-Procedure.jpg" alt="" />
              </div>
              <div className="structured">
                <img className="" src="https://media.geeksforgeeks.org/wp-content/uploads/22-8.png" alt="" />
              </div>
        <button
          className="infoBtn"
          onClick={() =>
            window.open(
              "https://www.geeksforgeeks.org/difference-between-1-persistent-p-persistent-and-non-persistent-csma/"
            )
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default CSMAVariants;
