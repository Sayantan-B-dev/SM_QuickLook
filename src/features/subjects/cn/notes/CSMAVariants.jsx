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
                 <strong>Advantage:</strong> Simple and ensures quick transmission.
                <br /><strong>Disadvantage:</strong> High collision chance if multiple
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
                <br />
                - <strong>Advantage:</strong> Reduces chances of collision.
                <br />- <strong>Disadvantage:</strong> Increases delay and idle time.
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
                <strong>Advantage:</strong> Balances collision risk and delay using tunable
                probability.
                <br />**<strong>Disadvantage:</strong> More complex and less optimal if p is
                not well chosen.
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
          <table className="example-table">
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
