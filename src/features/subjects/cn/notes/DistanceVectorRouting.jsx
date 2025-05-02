import React from "react";
import "../../../../CSS/CN.css";

function DistanceVectorRouting() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">
          Distance Vector Routing Algorithm & Count-to-Infinity Problem
        </h1>

        {/* What is Distance Vector? */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Distance Vector Routing?</h2>
          <p className="cn-example">
            Distance Vector is a dynamic routing algorithm where each router
            maintains a routing table containing the best known distance (hop
            count) to every destination and the direction (next hop) to reach
            it.
          </p>
        </div>

        {/* How it Works */}
        <div className="cn-section">
          <h2 className="cn-subtitle">How it Works</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
                {`✔ Each router shares its routing table with immediate neighbors periodically.
✔ The "distance" is usually measured in hop count (number of routers passed).
✔ Routers update their table using the Bellman-Ford algorithm:
  D[X][Y] = min over all neighbors Z { cost(X,Z) + D[Z][Y] }
✔ Slow convergence and loops are possible.`}
              </pre>
            </div>
          </div>
        </div>

        {/* Example */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Example</h2>
          <p className="cn-example">
            Suppose Router A is connected to B and C.
            <br />
            <pre>
              {`Initial table at A:
Dest | Hop | Cost
B    | B   | 1
C    | C   | 1

If C sends a table:
Dest | Hop | Cost
D    | D   | 2

Then A updates:
Dest | Hop | Cost
D    | C   | 3 (1 to C + 2 from C to D)`}
            </pre>
          </p>
        </div>

        {/* Count to Infinity */}
        <div className="cn-section">
          <h2 className="cn-subtitle">
            What is the Count-to-Infinity Problem?
          </h2>
          <p className="cn-example">
            A major flaw in Distance Vector Routing: when a route becomes
            invalid (e.g., link goes down), routers may continue to believe the
            route exists with ever-increasing cost, leading to slow convergence
            and routing loops.
          </p>
        </div>

        {/* Count to Infinity Example */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Example of Count-to-Infinity</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
                {`Network: A -- B -- C

1. B is connected to destination X with cost 1.
2. C believes it can reach X via B with cost 2.
3. Link B-X fails.
4. B tells C: "I don’t know X"
5. But C says: "I can reach X via you!"
6. B thinks X is now 3 hops away (via C)
7. C hears this and updates X to 4 hops via B.
→ Continues indefinitely until max hop limit.`}
              </pre>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Solutions to Count-to-Infinity</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
                {`✔ Split Horizon
→ Don’t advertise a route back to the neighbor it was learned from.

✔ Split Horizon with Poisoned Reverse
→ Advertise the failed route with infinite cost to prevent loops.

✔ Maximum Hop Count
→ RIP limits hop count to 15. Anything more = unreachable.

✔ Triggered Updates
→ Send updates immediately when a change is detected.`}
              </pre>
            </div>
          </div>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">
            Diagram: Count-to-Infinity in a Network
          </h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/DVP1.jpg"
            alt="Count-to-Infinity Diagram"
          />
        </div>
        <div className="flex gap-10">
          <button
            className="infoBtn"
            onClick={() =>
              window.open(
                "https://www.geeksforgeeks.org/distance-vector-routing-dvr-protocol/"
              )
            }
          >
            DVR
          </button>
          <button
            className="infoBtn"
            onClick={() =>
              window.open(
                "https://www.geeksforgeeks.org/route-poisoning-and-count-to-infinity-problem-in-routing/"
              )
            }
          >
            Count to infinity
          </button>
        </div>
      </div>
    </div>
  );
}

export default DistanceVectorRouting;
