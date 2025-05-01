import React from 'react';
import '../../../../CSS/CN.css';

function CollisionVsBroadcast() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Collision Domain vs Broadcast Domain</h1>

        {/* Definition */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is a Collision Domain?</h2>
          <p className="cn-example">
            A <strong>collision domain</strong> is a network segment where data packets from multiple devices may collide with each other while being transmitted over the same shared medium. It typically occurs in networks where devices share bandwidth, such as in hubs or coaxial cable-based Ethernet.
          </p>
          <p className="cn-example">
            Collisions occur when two devices transmit data at the same time, causing their signals to interfere with each other, thus corrupting the data. Network devices like bridges, switches, and routers help break up collision domains.
          </p>
        </div>

        {/* Broadcast Domain */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is a Broadcast Domain?</h2>
          <p className="cn-example">
            A <strong>broadcast domain</strong> is a logical division of a network in which any broadcast packet sent by a device is received by all other devices in the same domain. A broadcast domain exists within a Layer 2 (Data Link Layer) network and is typically bounded by devices like routers.
          </p>
          <p className="cn-example">
            Routers do not forward broadcast packets, meaning they break up broadcast domains. On the other hand, switches and hubs do not break broadcast domains — they forward broadcast packets to all devices within the same domain.
          </p>
        </div>

        {/* Difference Table */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Collision Domain vs Broadcast Domain</h2>
          <table className="example-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Collision Domain</th>
                <th>Broadcast Domain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>Network segment where data packets can collide due to shared medium.</td>
                <td>Network segment where broadcast packets are forwarded to all devices.</td>
              </tr>
              <tr>
                <td>Layer</td>
                <td>Data Link Layer (Layer 2)</td>
                <td>Data Link Layer (Layer 2)</td>
              </tr>
              <tr>
                <td>Devices Breaking Domain</td>
                <td>Switches, Bridges, Routers</td>
                <td>Routers</td>
              </tr>
              <tr>
                <td>Effect of Collision</td>
                <td>Data is corrupted; retransmissions occur.</td>
                <td>Every device receives the broadcast message.</td>
              </tr>
              <tr>
                <td>Used to Segment</td>
                <td>Large networks with many devices to avoid data collisions.</td>
                <td>Networks to limit the scope of broadcast traffic.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Advantages and Disadvantages */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Advantages & Disadvantages</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Collision Domain</h3>
              <ul className="cn-example list-disc list-inside">
                <li><strong>Advantages:</strong> Reduces network congestion by segmenting the network, better performance with fewer devices in each collision domain.</li>
                <li><strong>Disadvantages:</strong> Collisions can still happen in hubs or poorly segmented networks, leading to wasted bandwidth.</li>
              </ul>
            </div>
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Broadcast Domain</h3>
              <ul className="cn-example list-disc list-inside">
                <li><strong>Advantages:</strong> Easier management of broadcast traffic in large networks, reduces unnecessary network traffic in certain segments.</li>
                <li><strong>Disadvantages:</strong> Broadcast storms can overwhelm devices if broadcast domains are too large.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Applications and Use Cases</h2>
          <ul className="cn-example list-disc list-inside">
            <li><strong>Collision Domain:</strong> Used to prevent excessive collisions in networks, especially in Ethernet environments with shared bandwidth, such as hubs.</li>
            <li><strong>Broadcast Domain:</strong> Used to manage broadcast traffic, reducing the risk of broadcast storms by segmenting large networks.</li>
            <li>In large enterprise networks, it’s essential to segment both collision and broadcast domains for optimal performance and scalability.</li>
          </ul>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Collision and Broadcast Domain</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/Computer-Network-Broadcast-Domain-Collision.png"
            alt="Collision and Broadcast Domain Diagram"
          />
        </div>
        <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/collision-domain-and-broadcast-domain-in-computer-network/")}>Know more</button>
      </div>
    </div>
  );
}

export default CollisionVsBroadcast;
