import React from "react";
import "../../../../CSS/OS.css";

function SemaphoreConcept() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">🔐 Semaphore in Operating Systems</h1>

        {/* What is Semaphore */}
        <div className="os-section">
          <h2 className="os-subtitle">What is a Semaphore?</h2>
          <p className="os-example">
            A <strong>semaphore</strong> is a synchronization primitive used to control access to shared resources in concurrent systems. It avoids race conditions and ensures mutual exclusion.
            It is essentially a variable (usually an integer) that is modified using two atomic operations: <code>P()</code> (also called wait/down) and <code>V()</code> (also called signal/up).
          </p>
        </div>

        {/* Types of Semaphore */}
        <div className="os-section">
          <h2 className="os-subtitle">Types of Semaphores</h2>
          <p className="os-example">
            <strong>1. Binary Semaphore:</strong> Takes values 0 or 1. Works like a mutex. Used to ensure mutual exclusion.
          </p>
          <p className="os-example">
            <strong>2. Counting Semaphore:</strong> Can take any non-negative value. Useful when multiple instances of a resource are available.
          </p>
        </div>

        {/* P() and V() */}
        <div className="os-section">
          <h2 className="os-subtitle">P() and V() Operations</h2>
          <p className="os-example">
            <strong>P() / wait() / down():</strong> Decreases the semaphore value by 1. If the value becomes negative, the process is blocked.
          </p>
          <p className="os-example">
            <strong>V() / signal() / up() / post() / release():</strong> Increases the semaphore value by 1. If any process was waiting, it is unblocked.
          </p>

          <pre>{`P(S):
  S = S - 1
  if S < 0:
    block the process

V(S):
  S = S + 1
  if S <= 0:
    unblock a waiting process`}</pre>
        </div>

        {/* Entry and Exit Section Terms */}
        <div className="os-section">
          <h2 className="os-subtitle">Terms in Entry and Exit Section</h2>
          <p className="os-example">
            <strong>Entry Section:</strong> Part where a process tries to enter the critical section using P().
          </p>
          <p className="os-example">
            <strong>Critical Section:</strong> Code that accesses shared resources.
          </p>
          <p className="os-example">
            <strong>Exit Section:</strong> Part where a process exits the critical section using V().
          </p>
          <p className="os-example">
            <strong>Remainder Section:</strong> The rest of the code that doesn't involve the shared resource.
          </p>
        </div>

        {/* Example */}
        <div className="os-section">
          <h2 className="os-subtitle">Example: Using Semaphore in Pseudocode</h2>
          <pre>{`semaphore S = 1; // Binary Semaphore

Process A:
  P(S)
  // Critical Section
  V(S)

Process B:
  P(S)
  // Critical Section
  V(S)`}</pre>
        </div>

          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20250106165446247852/semaphores.webp" alt="Semaphore Diagram" />
          <button
            className="infoBtn"
            onClick={() => window.open("https://www.geeksforgeeks.org/semaphores-in-process-synchronization/")}
          >
            Know more
          </button>
      </div>
    </div>
  );
}

export default SemaphoreConcept;
