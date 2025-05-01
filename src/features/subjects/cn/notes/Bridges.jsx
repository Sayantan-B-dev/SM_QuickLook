import React from 'react';
import '../../../../CSS/CN.css';

function Bridges() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Bridges in Computer Networks</h1>

        {/* Definition */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is a Bridge?</h2>
          <p className="cn-example">
            A <strong>bridge</strong> is a networking device used to connect and filter traffic between two or more LAN segments. It operates at the <strong>Data Link Layer (Layer 2)</strong> of the OSI model and uses <strong>MAC addresses</strong> to determine whether to forward or filter data. Bridges help in dividing large networks into smaller, manageable segments.
          </p>
        </div>

        {/* Purpose and Function */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Purpose and Working of a Bridge</h2>
          <p className="cn-example">
            Bridges are used to:
          </p>
          <ul className="cn-example list-disc list-inside">
            <li>Reduce traffic by dividing collision domains</li>
            <li>Filter and forward data based on MAC addresses</li>
            <li>Connect different LAN segments (possibly using different physical media)</li>
          </ul>
          <p className="cn-example">
            When a bridge receives a data frame, it checks the destination MAC address. If the destination is on the same segment as the source, it filters the frame; otherwise, it forwards it to the appropriate segment.
          </p>
        </div>

        {/* Types of Bridges */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Types of Bridges</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">1. Transparent Bridge</h3>
              <p className="cn-example">
                Also called a learning bridge, it builds a table of MAC addresses to determine which port leads to which device. It filters or forwards data based on this table without requiring configuration.
              </p>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">2. Source Routing Bridge</h3>
              <p className="cn-example">
                Common in Token Ring networks. Instead of the bridge deciding the path, the sending device includes the full route to the destination in the frame.
              </p>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">3. Translational Bridge</h3>
              <p className="cn-example">
                Used to connect two different types of LANs (e.g., Ethernet and Token Ring) and convert one frame format into another.
              </p>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">4. Static Bridge</h3>
              <p className="cn-example">
                Static bridges are manually configured with fixed MAC address forwarding rules. These do not change unless updated by an administrator.
                <br/><strong>Advantages:</strong> High control, predictable behavior<br/>
                <strong>Disadvantages:</strong> Not scalable, requires manual updates<br/>
                <strong>Use Case:</strong> Small, stable networks where control is more important than flexibility.
              </p>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">5. Dynamic Bridge</h3>
              <p className="cn-example">
                Dynamic bridges learn MAC addresses over time by observing traffic. They automatically update their bridge table based on traffic patterns.
                <br/><strong>Advantages:</strong> Easy to manage, adapts to changes<br/>
                <strong>Disadvantages:</strong> Initial learning phase may lead to slight inefficiencies<br/>
                <strong>Use Case:</strong> Medium to large networks where automatic adaptation is essential.
              </p>
            </div>
          </div>
        </div>

        {/* Bridge Table */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Bridge Table (Forwarding Table)</h2>
          <p className="cn-example">
            Bridges maintain a MAC address table that maps MAC addresses to their corresponding ports. This table helps in efficient frame forwarding.
          </p>
          <table className="example-table">
            <thead>
              <tr>
                <th>MAC Address</th>
                <th>Port</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>00:14:22:01:23:45</td>
                <td>Port 1</td>
              </tr>
              <tr>
                <td>00:25:96:FF:FE:12</td>
                <td>Port 2</td>
              </tr>
              <tr>
                <td>00:0C:29:AE:89:67</td>
                <td>Port 3</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Features */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Features of Bridges</h2>
          <ul className="cn-example list-disc list-inside">
            <li>Works at Data Link Layer</li>
            <li>Uses MAC address for filtering</li>
            <li>Reduces network congestion</li>
            <li>Creates separate collision domains for each segment</li>
            <li>Does not affect broadcast domains</li>
          </ul>
        </div>

        {/* Limitations */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Limitations of Bridges</h2>
          <ul className="cn-example list-disc list-inside">
            <li>Cannot filter broadcast traffic</li>
            <li>Less effective in very large networks</li>
            <li>Limited scalability compared to routers or switches</li>
            <li>Learning table can be overloaded if too many devices are present</li>
          </ul>
        </div>

        {/* Applications */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Applications of Bridges</h2>
          <ul className="cn-example list-disc list-inside">
            <li>Segmenting large LANs to reduce traffic</li>
            <li>Connecting dissimilar LAN technologies (e.g., Token Ring to Ethernet)</li>
            <li>Isolating network problems to specific segments</li>
          </ul>
        </div>

        {/* Comparison */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Comparison: Bridge vs Hub vs Switch</h2>
          <table className="example-table">
            <thead>
              <tr>
                <th>Device</th>
                <th>OSI Layer</th>
                <th>Collision Domain</th>
                <th>Broadcast Domain</th>
                <th>Intelligent Forwarding</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hub</td>
                <td>Layer 1</td>
                <td>1 (shared)</td>
                <td>1</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Bridge</td>
                <td>Layer 2</td>
                <td>1 per port</td>
                <td>1</td>
                <td>Yes (MAC-based)</td>
              </tr>
              <tr>
                <td>Switch</td>
                <td>Layer 2</td>
                <td>1 per port</td>
                <td>1</td>
                <td>Yes (faster and more ports than bridge)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Bridge in a Network</h2>
          <img
            src="https://www.tutorialspoint.com/data_communication_computer_network/images/bridge.jpg"
            alt="Bridge Diagram"
          />
        </div>
      </div>
    </div>
  );
}

export default Bridges;
