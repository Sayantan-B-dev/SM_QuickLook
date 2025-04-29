
import React from "react";
import "../../../../CSS/CN.css";

function NetworkTopologies() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h2 className="cn-title">Network Topologies</h2>

        {/* Mesh Topology */}
        <div className="cn-section">
          <h3 className="cn-subtitle">Mesh Topology</h3>
          <p className="cn-example">
            Every device is connected to every other device.
          </p>
          <div className="cn-example">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241021160145691259/Mesh-Topology-768.png" alt="Mesh Topology Diagram" className="w-full max-w-md mx-auto" />
          </div>
          <table className="example-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Number of Cables</td><td>n(n-1)/2</td></tr>
              <tr><td>Number of Ports</td><td>n-1 per device</td></tr>
              <tr><td>Reliability</td><td>Very High</td></tr>
              <tr><td>Cost</td><td>Very High</td></tr>
              <tr><td>Security</td><td>High</td></tr>
              <tr><td>P2P</td><td>Yes</td></tr>
              <tr><td>Advantage</td><td>Robust and fault-tolerant</td></tr>
              <tr><td>Disadvantage</td><td>Expensive and difficult to install</td></tr>
            </tbody>
          </table>
        </div>

        {/* Star Topology */}
        <div className="cn-section">
          <h3 className="cn-subtitle">Star Topology</h3>
          <p className="cn-example">
            All devices are connected to a central hub or switch.
          </p>
          <div className="cn-example">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241021160035921565/Star-Topology-768.png" alt="Star Topology Diagram" className="w-full max-w-md mx-auto" />
          </div>
          <table className="example-table">
            <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>Number of Cables</td><td>n</td></tr>
              <tr><td>Number of Ports</td><td>1 per device, hub requires n ports</td></tr>
              <tr><td>Reliability</td><td>Moderate</td></tr>
              <tr><td>Cost</td><td>Moderate</td></tr>
              <tr><td>Security</td><td>Moderate</td></tr>
              <tr><td>P2P</td><td>No (through hub)</td></tr>
              <tr><td>Advantage</td><td>Easy to install and manage</td></tr>
              <tr><td>Disadvantage</td><td>Failure of hub disables entire network</td></tr>
            </tbody>
          </table>
        </div>

        {/* Bus Topology */}
        <div className="cn-section">
          <h3 className="cn-subtitle">Bus Topology</h3>
          <p className="cn-example">
            All devices are connected to a single backbone cable.
          </p>
          <div className="cn-example">
            <img src="https://images.shiksha.com/mediadata/images/articles/1710318630phpnDrx27.jpeg" alt="Bus Topology Diagram" className="w-full max-w-md mx-auto" />
          </div>
          <table className="example-table">
            <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>Number of Cables</td><td>1 backbone</td></tr>
              <tr><td>Number of Ports</td><td>1 per device</td></tr>
              <tr><td>Reliability</td><td>Low</td></tr>
              <tr><td>Cost</td><td>Low</td></tr>
              <tr><td>Security</td><td>Low</td></tr>
              <tr><td>P2P</td><td>No (shared medium)</td></tr>
              <tr><td>Advantage</td><td>Easy and cheap to install</td></tr>
              <tr><td>Disadvantage</td><td>Collision and performance issues</td></tr>
            </tbody>
          </table>
        </div>

        {/* Ring Topology */}
        <div className="cn-section">
          <h3 className="cn-subtitle">Ring Topology</h3>
          <p className="cn-example">
            Each device has exactly two neighbors, forming a ring.
          </p>
          <div className="cn-example">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgySniLgy0f93lM0-cknXzFZosfnqSn8byoA&s" alt="Ring Topology Diagram" className="w-full max-w-md mx-auto" />
          </div>
          <table className="example-table">
            <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>Number of Cables</td><td>n</td></tr>
              <tr><td>Number of Ports</td><td>2 per device</td></tr>
              <tr><td>Reliability</td><td>Low to Moderate</td></tr>
              <tr><td>Cost</td><td>Moderate</td></tr>
              <tr><td>Security</td><td>Moderate</td></tr>
              <tr><td>P2P</td><td>No</td></tr>
              <tr><td>Advantage</td><td>Easy fault location</td></tr>
              <tr><td>Disadvantage</td><td>Single failure affects whole network</td></tr>
            </tbody>
          </table>
        </div>

        {/* Hybrid Topology */}
        <div className="cn-section">
          <h3 className="cn-subtitle">Hybrid Topology</h3>
          <p className="cn-example">
            A combination of two or more topologies, e.g., star-bus or star-ring.
          </p>
          <div className="cn-example">
            <img src="https://www.researchgate.net/publication/376982562/figure/fig1/AS:11431281220916199@1706645569475/Combination-of-Bus-and-Star-Network-Topologies-This-hybrid-topology-is-commonly-used-in.png" alt="Hybrid Topology Diagram" className="w-full max-w-md mx-auto" />
          </div>
          <table className="example-table">
            <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>Number of Cables</td><td>Depends on configuration</td></tr>
              <tr><td>Number of Ports</td><td>Depends on design</td></tr>
              <tr><td>Reliability</td><td>High</td></tr>
              <tr><td>Cost</td><td>High</td></tr>
              <tr><td>Security</td><td>High</td></tr>
              <tr><td>P2P</td><td>Yes (possible)</td></tr>
              <tr><td>Advantage</td><td>Flexible and scalable</td></tr>
              <tr><td>Disadvantage</td><td>Complex and expensive</td></tr>
            </tbody>
          </table>
        </div>

        {/* Tree Topology */}
        <div className="cn-section">
          <h3 className="cn-subtitle">Tree Topology</h3>
          <p className="cn-example">
            Hierarchical structure combining characteristics of star and bus topologies.
          </p>
          <div className="cn-example">
            <img src="https://images.shiksha.com/mediadata/images/articles/1708679217phpSH3SVs.jpeg" alt="Tree Topology Diagram" className="w-full max-w-md mx-auto" />
          </div>
          <table className="example-table">
            <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>Number of Cables</td><td>n (depends on branching)</td></tr>
              <tr><td>Number of Ports</td><td>1 or more per device</td></tr>
              <tr><td>Reliability</td><td>Moderate</td></tr>
              <tr><td>Cost</td><td>Moderate to High</td></tr>
              <tr><td>Security</td><td>Moderate</td></tr>
              <tr><td>P2P</td><td>No</td></tr>
              <tr><td>Advantage</td><td>Supports expansion well</td></tr>
              <tr><td>Disadvantage</td><td>Failure at root affects network</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default NetworkTopologies;
