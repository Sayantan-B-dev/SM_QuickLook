import React from "react";
import "../../../../CSS/OS.css";

function BankersAlgorithm() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Banker's Algorithm</h1>

        {/* Introduction */}
        <div className="os-section">
          <h2 className="os-subtitle">Introduction</h2>
          <p className="os-example">
            The Banker's Algorithm is a **deadlock avoidance** algorithm used in operating systems. It checks whether allocating requested resources will leave the system in a safe state.  
            <br /><br />
            💡 It was developed by Edsger Dijkstra and is named because it's similar to how a banker decides whether to grant loans.
          </p>
        </div>

        {/* Assumptions */}
        <div className="os-section">
          <h2 className="os-subtitle">Assumptions</h2>
          <p className="os-example">
            🧩 The system must know in advance:
            <ul>
              <li>Maximum resources each process may request</li>
              <li>Current allocation to each process</li>
              <li>Total resources available</li>
            </ul>
            🔒 It works only if the system does not enter an unsafe state.
          </p>
        </div>

        {/* Key Data Structures */}
        <div className="os-section">
          <h2 className="os-subtitle">Data Structures Used</h2>
          <pre>{`
Let:
n = number of processes
m = number of resource types

Available[m]     // Vector of available instances
Max[n][m]        // Max demand of each process
Allocation[n][m] // Current allocated resources
Need[n][m]       // Remaining needs = Max - Allocation
          `}</pre>
        </div>

        {/* Safe State Check Logic */}
        <div className="os-section">
          <h2 className="os-subtitle">Safe State Check (Algorithm Steps)</h2>
          <p className="os-example">
            ✅ Step-by-step to determine if a system is in safe state:
          </p>
          <pre>{`
1. Let Work = Available
2. Finish[i] = false for all i
3. Find i such that:
   Finish[i] == false && Need[i] <= Work
4. If such i exists:
   Work = Work + Allocation[i]
   Finish[i] = true
   Go to step 3
5. If all Finish[i] == true → Safe State
          `}</pre>
        </div>

        {/* Example */}
        <div className="os-section">
          <h2 className="os-subtitle">Numerical Example</h2>
          <pre>{`
Processes: P0, P1, P2
Resource Types: A, B
Total Resources: A=10, B=5

Allocation Matrix:
    A B
P0  1 2
P1  2 0
P2  3 1

Max Matrix:
    A B
P0  7 5
P1  3 2
P2  9 2

Available = [10 - (1+2+3), 5 - (2+0+1)] = [4, 2]

Need = Max - Allocation:
    A B
P0  6 3
P1  1 2
P2  6 1

Now check safe sequence:
- P1: Need (1,2) <= Available (4,2) ✅
  → Work = (4+2, 2+0) = (6,2), Finish[P1]=true
- P0: Need (6,3) > (6,2) ❌
- P2: Need (6,1) <= (6,2) ✅
  → Work = (6+3, 2+1) = (9,3), Finish[P2]=true
- P0: Need (6,3) <= (9,3) ✅
  → Work = (9+1, 3+2) = (10,5), Finish[P0]=true

✅ Safe Sequence = [P1, P2, P0]
          `}</pre>
        </div>

        {/* Diagram */}
        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Banker's Algorithm Flow</h2>
          <pre>{`
+----------------------+
|   Start              |
+----------+-----------+
           |
           v
+----------------------+
|  Input data          |
|  Max, Allocation,    |
|  Available           |
+----------+-----------+
           |
           v
+----------------------+
|  Calculate Need =    |
|  Max - Allocation    |
+----------+-----------+
           |
           v
+----------------------+
|  Try to find process |
|  whose Need <= Work  |
+----------+-----------+
           |
           v
+----------------------+
|  If found, add to    |
|  safe sequence       |
+----------+-----------+
           |
           v
+----------------------+
|  All Finished?       |
+----------+-----------+
     | Yes             | No
     v                 v
+--------+      +----------------+
| Safe   |      | Unsafe State  |
| State  |      | Allocation     |
+--------+      +----------------+
          `}</pre>
        </div>

        {/* Conclusion */}
        <div className="os-section">
          <h2 className="os-subtitle">Conclusion</h2>
          <p className="os-example">
            The Banker's Algorithm ensures system safety before resource allocation. Although it requires prior knowledge of maximum needs and has some overhead, it is effective in **preventing deadlocks** in systems where resource requirements are predictable.
          </p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/7gMLNiEz3nw?si=jMXhVt7JN22JV73y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button
        className="infoBtn"
        onClick={() =>
          window.open("https://www.geeksforgeeks.org/bankers-algorithm-in-operating-system/")
        }
      >
        Know more
      </button>
      </div>
    </div>
  );
}

export default BankersAlgorithm;
