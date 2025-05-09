import React from "react";
import "../../../../CSS/OS.css";

function ProcessSynchronizationExplanation() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Process Synchronization</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Overview</h2>
          <p className="os-example">
            <strong>Process Synchronization</strong> is a mechanism to ensure correct execution of processes that share resources like memory, files, or CPU. It prevents race conditions, data inconsistency, and ensures orderly execution when processes are running concurrently.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Why Synchronization?</h2>
          <ul className="os-example">
            <li>To prevent <strong>race conditions</strong> (when multiple processes access shared data at the same time).</li>
            <li>To maintain <strong>data consistency</strong>.</li>
            <li>To coordinate <strong>resource sharing</strong> (memory, I/O devices).</li>
            <li>To enforce execution <strong>order and mutual exclusion</strong>.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Parallelism vs Synchronization</h2>
          <ul className="os-example">
            <li>
              <strong>Parallelism</strong> means multiple processes or threads execute at the same time to improve performance (multi-core processors).
            </li>
            <li>
              <strong>Synchronization</strong> ensures that concurrently executing processes do not interfere with each other while accessing shared resources.
            </li>
            <li>
              Parallel systems need synchronization to maintain consistency and avoid errors during simultaneous access.
            </li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Types of Processes</h2>
          <ul className="os-example">
            <li>
              <strong>Independent Processes:</strong> Execution of one process does not affect the execution of other processes.
              <br />E.g., A media player and a word processor running simultaneously.
            </li>
            <li>
              <strong>Cooperating Processes:</strong> Processes that share data or resources. They must be synchronized to avoid conflicts.
              <br />E.g., A producer-consumer setup sharing a buffer.
            </li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Synchronization Problems</h2>
          <ul className="os-example">
            <li><strong>Critical Section Problem:</strong> Only one process at a time should access the critical section (shared data).</li>
            <li><strong>Race Condition:</strong> Two processes accessing and modifying data simultaneously leading to incorrect results.</li>
            <li><strong>Deadlock:</strong> Two or more processes waiting for each other indefinitely.</li>
            <li><strong>Starvation:</strong> A process never gets access to the resource.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Mechanisms for Synchronization</h2>
          <ul className="os-example">
            <li><strong>Mutex (Mutual Exclusion Object):</strong> Allows only one process in the critical section.</li>
            <li><strong>Semaphore:</strong> A signaling mechanism to manage concurrent access using counters.</li>
            <li><strong>Monitor:</strong> High-level synchronization abstraction that encapsulates shared variables, operations, and synchronization.</li>
            <li><strong>Locks:</strong> Used to protect access to critical sections.</li>
            <li><strong>Atomic Operations:</strong> Operations that execute as a single step without interruption.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Example: Critical Section Problem</h2>
          <pre>{`
Process P1:                         Process P2:
while(true) {                      while(true) {
  wait(mutex);                       wait(mutex);
  // critical section                // critical section
  signal(mutex);                     signal(mutex);
  // remainder section               // remainder section
}                                  }
          `}</pre>
          <p className="os-example">
            This uses a <strong>semaphore</strong> named `mutex`. Only one process can access the critical section at a time.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Synchronization between Processes</h2>
          <img
          className="smallImg"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250106145117057425/imgk.png"
            alt="Synchronization Diagram"
          />
          
          <img className="smallImg" src="https://www.geeksforgeeks.org/wp-content/uploads/gq/2015/06/critical-section-problem.png" alt="" />
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Key Points to Remember</h2>
          <ul className="os-example">
            <li>Synchronization ensures correct shared data access in concurrent systems.</li>
            <li>Use critical section code carefully to avoid deadlocks.</li>
            <li>Synchronization can degrade performance if overused—balance is key.</li>
            <li>Processes can be independent or cooperative depending on resource sharing.</li>
            <li>Always avoid starvation by ensuring fair access (e.g., using semaphores with fairness). </li>
          </ul>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/introduction-of-process-synchronization/", "_blank")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default ProcessSynchronizationExplanation;
