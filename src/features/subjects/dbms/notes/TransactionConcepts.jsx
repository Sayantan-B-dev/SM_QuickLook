import React from "react";

function TransactionConcepts() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🧑‍💻 Transaction Concepts: ACID, Transaction States, and Schedules</h1>

        {/* ACID Properties */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔐 ACID Properties</h2>
          <p>
            The <strong>ACID properties</strong> are a set of properties that guarantee that database transactions are processed reliably. These properties ensure data integrity even in the event of power outages, crashes, or other unforeseen issues.
          </p>
          <ul>
            <li>
              <strong>Atomicity</strong>: 
              <p>
                Atomicity means that each transaction is treated as a single "unit", which either completes entirely or not at all. If any part of the transaction fails, the entire transaction is rolled back.
              </p>
            </li>
            <li>
              <strong>Consistency</strong>: 
              <p>
                Consistency ensures that a transaction takes the database from one valid state to another. All data rules, constraints, and triggers must be satisfied during a transaction.
              </p>
            </li>
            <li>
              <strong>Isolation</strong>: 
              <p>
                Isolation ensures that the operations of one transaction are isolated from others. Even if multiple transactions are happening at once, their intermediate states are hidden from other transactions.
              </p>
            </li>
            <li>
              <strong>Durability</strong>: 
              <p>
                Durability guarantees that once a transaction is committed, its effects are permanent, even in the case of a system crash or failure.
              </p>
            </li>
          </ul>
        </div>

        {/* Transaction States */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🛠 Transaction States</h2>
          <p>
            A <strong>transaction</strong> can be in different states during its life cycle. These states define the progress and final outcome of a transaction.
          </p>
          <ul>
            <li>
              <strong>Active</strong>: 
              <p>The transaction is ongoing and has not yet been committed or aborted.</p>
            </li>
            <li>
              <strong>Partially Committed</strong>: 
              <p>The transaction has completed execution, but changes have not yet been made permanent.</p>
            </li>
            <li>
              <strong>Committed</strong>: 
              <p>The transaction has been successfully completed, and all its changes are saved permanently.</p>
            </li>
            <li>
              <strong>Failed</strong>: 
              <p>The transaction cannot proceed, usually due to an error or failure.</p>
            </li>
            <li>
              <strong>Aborted</strong>: 
              <p>The transaction has been rolled back due to failure, and all changes have been undone.</p>
            </li>
          </ul>
        </div>

        {/* Visual Representation of Transaction States */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📊 Visual Representation of Transaction States</h2>
          <p>
            The following diagram represents the states of a transaction and the transitions between them:
          </p>
          <pre>
            {`
              +-----------------+       +-------------------+       +-----------------+
              |    Active       | ---> | Partially Committed| ---> |    Committed   |
              +-----------------+       +-------------------+       +-----------------+
                  |                             ^                        ^
                  v                             |                        |
               +--------+                     +--------+                |
               | Failed | <-------------------| Aborted|----------------+
               +--------+                     +--------+
            `}
          </pre>
          <p>
            In this diagram, a transaction starts in the <strong>Active</strong> state. If it completes successfully, it transitions to the <strong>Partially Committed</strong> state and then to <strong>Committed</strong>. If any failure occurs, the transaction can transition to either the <strong>Failed</strong> or <strong>Aborted</strong> state.
          </p>
        </div>

        {/* Schedules */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📝 Schedule</h2>
          <p>
            A <strong>schedule</strong> is a sequence of transactions, where each transaction executes its operations in some order. The order of execution matters to maintain the integrity and consistency of the database.
          </p>
          <ul>
            <li>
              A <strong>serial schedule</strong> is one in which transactions are executed sequentially, one after the other, without any interleaving.
            </li>
            <li>
              A <strong>parallel schedule</strong> is one in which transactions are interleaved, meaning the operations of multiple transactions may be executed at the same time.
            </li>
          </ul>
        </div>

        {/* Serial vs Parallel Schedules */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔄 Serial vs Parallel Schedules</h2>
          <p>
            The main difference between <strong>serial</strong> and <strong>parallel</strong> schedules lies in how transactions are executed. In a serial schedule, one transaction finishes before the next starts, ensuring no interference between transactions. In a parallel schedule, transactions are interleaved, which can lead to faster execution but may risk conflicts between transactions.
          </p>

          <h3>Serial Schedule</h3>
          <pre>
            {`
              Transaction 1:    Read(A);
              Transaction 1:    Write(A);
              Transaction 2:    Read(B);
              Transaction 2:    Write(B);
            `}
          </pre>
          <p>
            In a serial schedule, there are no overlapping operations between transactions. Each transaction runs to completion before the next one begins.
          </p>

          <h3>Parallel Schedule</h3>
          <pre>
            {`
              Transaction 1:    Read(A);
              Transaction 2:    Read(B);
              Transaction 1:    Write(A);
              Transaction 2:    Write(B);
            `}
          </pre>
          <p>
            In a parallel schedule, operations from both transactions can interleave. This can result in more efficient use of resources but requires careful management to avoid conflicts like dirty reads or lost updates.
          </p>

          <h3>Key Differences:</h3>
          <ul>
            <li><strong>Serial Schedule:</strong> No interleaving of transactions; easy to ensure consistency.</li>
            <li><strong>Parallel Schedule:</strong> Interleaved transactions; requires careful control to ensure ACID properties are maintained.</li>
          </ul>
        </div>

        {/* When to Use Serial vs Parallel */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">⚖️ When to Use Serial vs Parallel Schedules</h2>
          <p>
            <strong>Serial schedules</strong> are generally preferred when consistency and isolation are critical, and the system can afford the performance overhead of executing transactions one at a time.
          </p>
          <p>
            On the other hand, <strong>parallel schedules</strong> are used in high-performance systems where the goal is to maximize throughput and resource utilization. However, it requires careful management of concurrency and isolation levels to avoid issues like race conditions or lost updates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TransactionConcepts;
