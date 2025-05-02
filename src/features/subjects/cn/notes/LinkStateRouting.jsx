import React from "react";
import "../../../../CSS/CN.css";

function LinkStateRouting() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Link State Routing Protocol</h1>

        {/* Overview */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Link State Routing?</h2>
          <p className="cn-example">
            Link State Routing is a dynamic routing protocol where every router builds a complete map of the network topology. Routers share information about their links (not entire routing tables) and calculate the shortest path using **Dijkstra’s algorithm**.
          </p>
        </div>

        {/* Comparison with Distance Vector */}
        <div className="cn-section">
          <h2 className="cn-subtitle">How it Differs from Distance Vector</h2>
          <pre>
{`Distance Vector:
✔ Routers send entire routing tables to neighbors
✔ Based on Bellman-Ford algorithm
✔ Slower convergence, count-to-infinity possible

Link State:
✔ Routers send only link-state info
✔ Each router builds full topology (LSDB)
✔ Faster convergence, loop-free`}
          </pre>
        </div>

        {/* Key Concepts */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Key Components of Link State Routing</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`✔ Link-State Advertisements (LSA)
  → Small packets shared by routers containing info about neighbors & link cost.

✔ Link-State Database (LSDB)
  → A collection of all received LSAs; forms the full topology map.

✔ Dijkstra’s Algorithm
  → Used to calculate the shortest path to every node.
  → Builds the routing table from the LSDB.`}
              </pre>
            </div>
          </div>
        </div>

        {/* Working Steps */}
        <div className="cn-section">
          <h2 className="cn-subtitle">How Link State Routing Works</h2>
          <pre>
{`1. Each router identifies its neighbors and measures link cost.
2. It generates an LSA describing this info.
3. LSA is flooded to all routers (not just neighbors).
4. Each router builds LSDB from all LSAs.
5. Dijkstra’s algorithm is run on LSDB to build shortest path routing table.`}
          </pre>
        </div>

        {/* Example */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Example</h2>
          <p className="cn-example">
            Consider a network: A - B - C - D, where each link has cost 1.
            <br />
            If router A receives LSAs from all nodes, its LSDB looks like:
            <pre>
{`A: B (1)
B: A (1), C (1)
C: B (1), D (1)
D: C (1)

Dijkstra's result at A:
Dest | Next Hop | Cost
B    | B        | 1
C    | B        | 2
D    | B        | 3`}
            </pre>
          </p>
        </div>

        {/* Flooding Mechanism */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Flooding in LSR?</h2>
          <p className="cn-example">
            Flooding means every router sends received LSA to all other interfaces **except the one it came from**. This ensures all routers eventually receive all LSAs.
            <br />
            Sequence numbers and age fields in LSAs help avoid duplication or loops.
          </p>
        </div>

        {/* Tricky Terms Explained */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Tricky Terms Explained</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`✔ Sequence Number:
  Prevents old LSAs from replacing newer ones.

✔ Aging Timer:
  LSAs expire after a time unless refreshed.

✔ OSPF (Open Shortest Path First):
  Most popular link-state protocol.
  Areas & hierarchy used for scalability.
  Supports load balancing & authentication.

✔ Hello Protocol:
  Used to detect neighbors and form adjacency before sending LSAs.`}
              </pre>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Advantages and Disadvantages</h2>
          <pre>
{`✔ Pros:
✓ Fast convergence
✓ Loop-free
✓ Full network view for intelligent decisions

✘ Cons:
✗ Requires more memory & CPU
✗ More complex than distance vector
✗ LSA flooding can cause initial overhead`}
          </pre>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Link State Routing Flow</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230327175419/Unicast-routing-1.png"
            alt="Link State Routing Diagram"
          />
        </div>
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/unicast-routing-link-state-routing/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default LinkStateRouting;
