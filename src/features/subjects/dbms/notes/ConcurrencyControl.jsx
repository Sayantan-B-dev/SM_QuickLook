import React from "react";

function ConcurrencyControl() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🧑‍💻 Concurrency Control in DBMS</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔍 Introduction to Concurrency Control</h2>
          <p>
            Concurrency control in DBMS ensures that database transactions are executed in a safe, efficient, and correct manner. It deals with the management of concurrent transactions to avoid conflicts and maintain data consistency. Key aspects include the use of locks, protocols, and ordering mechanisms.
          </p>
          <p>
            This component covers shared/exclusive locking, concurrency control protocols, two-phase locking (2PL), and timestamp ordering protocols. We'll explore each of these concepts in detail, with a focus on their importance and challenges.
          </p>
        </div>

        {/* Shared and Exclusive Locking */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔐 Shared and Exclusive Locking</h2>
          <p>
            Locking is a mechanism to control access to database objects. The two common types of locks are:
          </p>
          <ul>
            <li>
              <strong>Shared Lock (S-lock)</strong>: A shared lock allows a transaction to read a data item but not modify it. Multiple transactions can hold a shared lock on the same data item simultaneously.
            </li>
            <li>
              <strong>Exclusive Lock (X-lock)</strong>: An exclusive lock allows a transaction to both read and modify a data item. Only one transaction can hold an exclusive lock on a data item at a time.
            </li>
          </ul>
          <h3>Problems with Shared-Exclusive Locking:</h3>
          <p>
            Shared locks can coexist on the same data item, but when an exclusive lock is required, no other transaction can hold any lock (shared or exclusive) on the same data item. This can lead to:
          </p>
          <ul>
            <li>Transaction blocking and deadlock issues</li>
            <li>Reduced concurrency and performance degradation</li>
          </ul>
        </div>

        {/* Concurrency Control Protocols */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔄 Concurrency Control Protocols</h2>
          <p>
            Concurrency control protocols define the rules for transaction execution to ensure consistency while allowing for multiple transactions to run concurrently. The main protocols include:
          </p>
          <ul>
            <li>
              <strong>Two-Phase Locking (2PL)</strong>: This protocol ensures that all locks are acquired in the growing phase and released in the shrinking phase.
            </li>
            <li>
              <strong>Timestamp Ordering Protocol</strong>: This protocol orders transactions based on timestamps and ensures that transactions are executed in the order of their timestamps.
            </li>
          </ul>
        </div>

        {/* Two-Phase Locking (2PL) */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔒 Two-Phase Locking (2PL)</h2>
          <p>
            <strong>Two-Phase Locking (2PL)</strong> is a concurrency control protocol that ensures serializability by dividing the execution of a transaction into two distinct phases:
          </p>
          <ul>
            <li>
              <strong>Growing Phase</strong>: The transaction can acquire locks but cannot release any locks.
            </li>
            <li>
              <strong>Shrinking Phase</strong>: The transaction can release locks but cannot acquire any new locks.
            </li>
          </ul>
          <p>
            This ensures that once a transaction starts releasing locks, it cannot acquire any more, thus preventing conflicts and ensuring serializability.
          </p>
          <h3>Example of 2PL:</h3>
          <pre>
{`Transaction 1:  Growing Phase - Acquires lock on A;
Transaction 1:  Shrinking Phase - Releases lock on A;
Transaction 2:  Growing Phase - Acquires lock on B;
Transaction 2:  Shrinking Phase - Releases lock on B;
`}
          </pre>
        </div>

        {/* Drawbacks of 2PL */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">⚠️ Drawbacks of 2PL</h2>
          <p>
            While 2PL ensures serializability, it can have the following drawbacks:
          </p>
          <ul>
            <li>It may lead to deadlocks, as transactions may wait for each other to release locks.</li>
            <li>It can reduce concurrency by forcing transactions to acquire and release locks in strict sequences.</li>
          </ul>
        </div>

        {/* Strict 2PL */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔐 Strict Two-Phase Locking (Strict 2PL)</h2>
          <p>
            <strong>Strict Two-Phase Locking (Strict 2PL)</strong> is a stricter version of 2PL. It ensures that a transaction holds all its locks until it commits or rolls back. This guarantees that no other transaction can access the data while a transaction is in progress.
          </p>
          <p>
            Strict 2PL prevents cascading rollbacks, which are an issue in regular 2PL, but it still can lead to deadlocks.
          </p>
        </div>

        {/* Rigorous 2PL */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔒 Rigorous Two-Phase Locking (Rigorous 2PL)</h2>
          <p>
            <strong>Rigorous Two-Phase Locking (Rigorous 2PL)</strong> is the most restrictive form of 2PL. In rigorous 2PL, a transaction cannot release any locks until it has committed or aborted, even if the transaction has finished all its operations. This provides the highest level of isolation and guarantees serializability.
          </p>
          <p>
            However, it may lead to poor concurrency since transactions have to hold onto all locks until the end of the transaction, which can cause significant delays and blocking.
          </p>
        </div>

        {/* Basic Timestamp Ordering Protocol */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🕒 Basic Timestamp Ordering Protocol</h2>
          <p>
            The <strong>Timestamp Ordering Protocol</strong> uses timestamps to order transactions and ensure serializability. Each transaction is given a unique timestamp when it starts. The protocol enforces that a transaction can only access data that was modified by a transaction with an earlier timestamp.
          </p>
          <p>
            The main goal of this protocol is to ensure that the transactions are executed in the same order as their timestamps, ensuring serializability without using locks.
          </p>
          <h3>Example of Timestamp Ordering Protocol:</h3>
          <pre>
{`Transaction 1:  Timestamp = 10, WRITE(A);
Transaction 2:  Timestamp = 15, READ(A);
// Transaction 2 must wait until Transaction 1 commits if they have conflicting timestamps.
`}
          </pre>
        </div>

        {/* Conclusion */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">⚖️ Conclusion</h2>
          <p>
            Concurrency control is a crucial component in ensuring the correctness and performance of database systems. Understanding the locking mechanisms, such as shared/exclusive locks, as well as protocols like 2PL, Strict 2PL, and Timestamp Ordering, is essential for handling concurrent transactions efficiently. Each protocol has its strengths and weaknesses, and the choice of protocol often depends on the specific requirements of the application.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConcurrencyControl;
