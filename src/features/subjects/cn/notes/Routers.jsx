import React from 'react';
import '../../../../CSS/CN.css';

function Routers() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Routers in Computer Networks</h1>

        {/* Definition */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is a Router?</h2>
          <p className="cn-example">
            A <strong>router</strong> is a network device that forwards data packets between computer networks. Routers operate at the <strong>Network Layer (Layer 3)</strong> of the OSI model and use <strong>IP addresses</strong> to determine the best path for forwarding packets.
          </p>
        </div>

        {/* How it works */}
        <div className="cn-section">
          <h2 className="cn-subtitle">How Does a Router Work?</h2>
          <p className="cn-example">
            Routers examine the destination IP address of each packet and consult a routing table to decide the best next hop. They can connect different networks (e.g., LAN to WAN) and determine efficient paths using routing algorithms and protocols.
          </p>
        </div>

        {/* Functions */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Key Functions of Routers</h2>
          <ul className="cn-example list-disc list-inside">
            <li><strong>Routing:</strong> Determines the optimal path using algorithms like RIP, OSPF, or BGP.</li>
            <li><strong>Forwarding:</strong> Transfers packets from one network interface to another based on routing decisions.</li>
            <li><strong>Filtering:</strong> Filters traffic using ACLs (Access Control Lists).</li>
            <li><strong>Flooding:</strong> Routers typically avoid flooding, unlike switches or hubs, as they use more intelligent routing mechanisms.</li>
            <li><strong>Collision Handling:</strong> Routers reduce collisions by segmenting networks into separate broadcast domains.</li>
          </ul>
        </div>

        {/* Routing Table */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Routing Table</h2>
          <p className="cn-example">
            A routing table contains information about the topology of the network. It includes:
          </p>
          <ul className="cn-example list-disc list-inside">
            <li>Destination IP address</li>
            <li>Subnet mask</li>
            <li>Next-hop IP address</li>
            <li>Interface to use</li>
            <li>Metric/cost</li>
          </ul>
        </div>

        {/* Types of Routers */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Types of Routers</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">1. Core Router</h3>
              <p className="cn-example">Works within the backbone of the network, handling high-speed, large-volume data transmission.</p>
            </div>
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">2. Edge Router</h3>
              <p className="cn-example">Sits at the edge of a network, connecting internal networks to external ones like the internet.</p>
            </div>
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">3. Wireless Router</h3>
              <p className="cn-example">Combines routing and wireless access point functionality, often used in homes and small offices.</p>
            </div>
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">4. Virtual Router</h3>
              <p className="cn-example">Runs as software within a virtualized environment, offering flexible routing solutions.</p>
            </div>
          </div>
        </div>

        {/* Advantages and Disadvantages */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Advantages of Routers</h2>
          <ul className="cn-example list-disc list-inside">
            <li>Efficient path selection using routing algorithms</li>
            <li>Reduces network congestion</li>
            <li>Enhances security with packet filtering</li>
            <li>Separates broadcast domains</li>
          </ul>

          <h2 className="cn-subtitle mt-4">Disadvantages of Routers</h2>
          <ul className="cn-example list-disc list-inside">
            <li>Higher cost compared to switches or hubs</li>
            <li>Slower than switches due to routing complexity</li>
            <li>Requires configuration and maintenance</li>
          </ul>
        </div>

        {/* Applications */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Applications of Routers</h2>
          <ul className="cn-example list-disc list-inside">
            <li>Connecting multiple networks (e.g., LAN to WAN)</li>
            <li>Managing traffic between different subnets</li>
            <li>Providing internet access in home and enterprise networks</li>
            <li>Creating secure VPN connections</li>
          </ul>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Router in a Network</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230912173936/Network_devices.jpg"
            alt="Router Diagram"
          />
        </div>
        <button className='infoBtn' onClick={()=>window.open("https://www.geeksforgeeks.org/introduction-of-a-router/")}>Know more</button>
      </div>
    </div>
  );
}

export default Routers;