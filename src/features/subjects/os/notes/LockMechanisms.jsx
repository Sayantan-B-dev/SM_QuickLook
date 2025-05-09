import React from "react";
import "../../../../CSS/OS.css";

function LockMechanisms() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Lock Mechanisms in Process Synchronization</h1>

        {/* Lock Variable */}
        <div className="os-section">
          <h2 className="os-subtitle">🔒 Lock Variable</h2>
          <p className="os-example">
            A **lock variable** is a software solution to prevent multiple processes from entering the critical section simultaneously. A shared Boolean variable (`locked`) is used. If `locked = false`, the process can enter the critical section; otherwise, it waits.
          </p>
          <pre>{`// Lock variable implementation
boolean locked = false;

do {
  while (locked); // Wait
  locked = true;  // Acquire lock

  // Critical Section

  locked = false; // Release lock
  // Remainder Section
} while (true);`}</pre>
          <p className="os-example">
            ❗ **Problem**: This solution is not atomic. Two processes could read `locked = false` at the same time and both enter the critical section.
          </p>
        </div>

        {/* Test-and-Set Instruction */}
        <div className="os-section">
          <h2 className="os-subtitle">🛠️ Test-and-Set Instruction (Hardware Solution)</h2>
          <p className="os-example">
            **Test-and-Set** is an atomic machine-level instruction used to implement locking. It returns the old value and sets the lock to true.
          </p>
          <pre>{`boolean test_and_set(boolean *target) {
  boolean old = *target;
  *target = true;
  return old;
}

boolean locked = false;

do {
  while (test_and_set(&locked)); // Wait
  // Critical Section
  locked = false;               // Release lock
  // Remainder Section
} while (true);`}</pre>
          <p className="os-example">
            ✅ **Advantages**:
            <ul>
              <li>Atomic operation – no two processes can pass the test at the same time.</li>
              <li>Solves race conditions.</li>
            </ul>
            ❌ **Drawback**: May lead to **busy waiting** (CPU cycles wasted).
          </p>
        </div>

        {/* Turn Variable / Strict Alternation */}
        <div className="os-section">
          <h2 className="os-subtitle">🔄 Turn Variable / Strict Alternation</h2>
          <p className="os-example">
            This is a **two-process** solution that uses a shared variable `turn`. If `turn == i`, then process `i` can enter the critical section.
          </p>
          <pre>{`int turn = 0; // 0 for P0, 1 for P1

// For Process P0
do {
  while (turn != 0);  // Wait
  // Critical Section
  turn = 1;
  // Remainder Section
} while (true);

// For Process P1
do {
  while (turn != 1);  // Wait
  // Critical Section
  turn = 0;
  // Remainder Section
} while (true);`}</pre>
          <p className="os-example">
            ✅ **Good**: Simple and ensures mutual exclusion.  
            ❌ **Bad**: Not efficient — process may wait unnecessarily (not truly concurrent). Doesn’t scale beyond 2 processes.
          </p>
        </div>

        {/* Summary Comparison */}
        <div className="os-section">
          <h2 className="os-subtitle">📊 Summary: Comparison Table</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Mechanism</th>
                <th>Type</th>
                <th>Atomic?</th>
                <th>Busy Wait?</th>
                <th>Multi-process Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lock Variable</td>
                <td>Software</td>
                <td>❌</td>
                <td>✅</td>
                <td>Limited</td>
              </tr>
              <tr>
                <td>Test-and-Set</td>
                <td>Hardware</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Turn Variable</td>
                <td>Software</td>
                <td>✅</td>
                <td>✅</td>
                <td>❌ (only 2 processes)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/lock-variable-synchronization-mechanism/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default LockMechanisms;
