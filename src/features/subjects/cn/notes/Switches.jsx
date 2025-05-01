import React from 'react';
import '../../../../CSS/CN.css';

function Switches() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Switches in Computer Networks</h1>

        {/* Definition */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is a Switch?</h2>
          <p className="cn-example">
            A <strong>switch</strong> is a high-performance networking device that operates at the <strong>Data Link Layer (Layer 2)</strong> of the OSI model. It connects multiple devices within a local area network (LAN) and uses <strong>MAC addresses</strong> to forward data only to the intended recipient, thereby improving the network efficiency and reducing traffic.
          </p>
        </div>

        {/* Working */}
        <div className="cn-section">
          <h2 className="cn-subtitle">How Does a Switch Work?</h2>
          <p className="cn-example">
            When a frame arrives at a port, the switch reads the source MAC address and stores it in a MAC address table with the associated port. It then checks the destination MAC address:
          </p>
          <ul className="cn-example list-disc list-inside">
            <li>If the destination MAC is known, it forwards the frame to the correct port.</li>
            <li>If unknown, it floods the frame to all ports (except the one it came from).</li>
          </ul>
        </div>

        {/* Types of Switches */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Types of Switches</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">1. Unmanaged Switch</h3>
              <p className="cn-example">
                Plug-and-play switches with no configuration options. Used in small or home networks.
                <br/><strong>Use Case:</strong> Simple LAN setups
              </p>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">2. Managed Switch</h3>
              <p className="cn-example">
                Provides control over LAN traffic via VLANs, QoS, SNMP, etc. Suitable for enterprise networks.
                <br/><strong>Use Case:</strong> Large organizations needing traffic management
              </p>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">3. Layer 3 Switch</h3>
              <p className="cn-example">
                Operates at Layer 3 (Network Layer) and performs routing in addition to switching.
                <br/><strong>Use Case:</strong> Inter-VLAN routing in large LANs
              </p>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">4. PoE Switch (Power over Ethernet)</h3>
              <p className="cn-example">
                Delivers both data and power over Ethernet cables. Ideal for powering IP cameras, VoIP phones.
                <br/><strong>Use Case:</strong> Smart devices and IoT setups
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Features of Switches</h2>
          <ul className="cn-example list-disc list-inside">
            <li>Operates at Layer 2, some at Layer 3</li>
            <li>Uses MAC address to forward data</li>
            <li>Full-duplex communication</li>
            <li>Each port has its own collision domain</li>
            <li>Reduces unnecessary traffic and increases bandwidth</li>
          </ul>
        </div>

        {/* Advantages */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Advantages of Switches</h2>
          <ul className="cn-example list-disc list-inside">
            <li>Efficient and intelligent data forwarding</li>
            <li>Improves overall network performance</li>
            <li>Supports VLAN segmentation</li>
            <li>Minimizes collisions and supports more users</li>
          </ul>
        </div>

        {/* Disadvantages */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Disadvantages of Switches</h2>
          <ul className="cn-example list-disc list-inside">
            <li>More expensive than hubs and bridges</li>
            <li>May require configuration and management (for managed switches)</li>
            <li>Cannot filter broadcast traffic</li>
          </ul>
        </div>

        {/* Applications */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Applications of Switches</h2>
          <ul className="cn-example list-disc list-inside">
            <li>Home and enterprise LANs</li>
            <li>Data centers and server farms</li>
            <li>Campus networks with VLANs</li>
            <li>Backbone for large network infrastructures</li>
          </ul>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Switch in a Network</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230511171149/Network-Switch-01-copy.webp"
            alt="Switch Diagram"
          />
        </div>
        <button className='infoBtn' onClick={()=>window.open("https://www.geeksforgeeks.org/what-is-a-network-switch-and-how-does-it-work/")}>Know more</button>

      </div>
    </div>
  );
}

export default Switches;