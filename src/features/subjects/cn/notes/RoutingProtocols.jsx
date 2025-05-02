import React from "react";
import "../../../../CSS/CN.css";

function RoutingProtocols() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Routing Protocols</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">What are Routing Protocols?</h2>
          <p className="cn-example">
            Routing protocols determine how routers communicate to forward data packets between networks. They help routers choose the most efficient path.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Main Categories of Routing Protocols</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`1. Intra-domain Routing Protocols
→ Used within a single autonomous system (AS)
→ Eg: inside an organization or campus

2. Inter-domain Routing Protocols
→ Used between different autonomous systems
→ Eg: between ISPs or large networks`}
              </pre>
            </div>
          </div>
        </div>

        {/* Intra-domain Details */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Intra-domain Routing Protocols</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`These are further classified into:

✔ Distance Vector Protocols
→ Use hop count as metric
→ Share entire routing table
→ Example: RIP (Routing Information Protocol)

✔ Link State Protocols
→ Routers share topology info
→ Use Dijkstra's algorithm
→ Example: OSPF (Open Shortest Path First), IS-IS`}
              </pre>
            </div>
          </div>
        </div>

        {/* Inter-domain Details */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Inter-domain Routing Protocols</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`✔ Path Vector Protocols
→ Used between different autonomous systems (AS)
→ Example: BGP (Border Gateway Protocol)

✔ Key concept:
  - AS = group of IP prefixes managed by one entity
  - BGP advertises path info (AS numbers)`}
              </pre>
            </div>
          </div>
        </div>

        {/* Summary Table (optional) */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Comparison Table</h2>
          <table className="example-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Sub-Type</th>
                <th>Protocol</th>
                <th>Metric</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Intra-domain</td>
                <td>Distance Vector</td>
                <td>RIP</td>
                <td>Hop Count</td>
              </tr>
              <tr>
                <td>Intra-domain</td>
                <td>Link State</td>
                <td>OSPF</td>
                <td>Cost / Bandwidth</td>
              </tr>
              <tr>
                <td>Inter-domain</td>
                <td>Path Vector</td>
                <td>BGP</td>
                <td>AS Path Length</td>
              </tr>
            </tbody>
          </table>
        </div>


        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/classes-of-routing-protocols/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default RoutingProtocols;
