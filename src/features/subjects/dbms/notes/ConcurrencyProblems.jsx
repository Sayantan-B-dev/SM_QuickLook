import React from "react";

function ConcurrencyProblems() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🧑‍💻 Concurrency Problems in Database Systems</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔍 Introduction to Concurrency Problems</h2>
          <p>
            In database systems, <strong>concurrency</strong> refers to the simultaneous execution of multiple transactions. While concurrency improves performance by maximizing resource utilization, it can lead to various issues such as:
          </p>
          <ul>
            <li>Dirty Reads</li>
            <li>Incorrect Summaries</li>
            <li>Lost Updates</li>
            <li>Write-Read Conflicts</li>
            <li>Unrepeatable Reads</li>
            <li>Read-Write Problems</li>
          </ul>
          <p>
            These issues arise when transactions interfere with each other, violating the <strong>ACID</strong> properties, especially the <strong>Isolation</strong> property. In this component, we will explore these problems in detail.
          </p>
        </div>

        {/* Dirty Read */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">💀 Dirty Read</h2>
          <p>
            A <strong>dirty read</strong> occurs when a transaction reads data that has been written by another transaction but has not yet been committed. If the second transaction is rolled back, the data read by the first transaction is invalid.
          </p>
          <h3>Example:</h3>
          <pre>
{`
    Transaction 1:     UPDATE account SET balance = 100 WHERE user_id = 1;
    Transaction 2:     SELECT balance FROM account WHERE user_id = 1; // Reads the uncommitted balance of 100
    Transaction 1:     ROLLBACK;
    // Transaction 2 read invalid data
`}
          </pre>
          <p>
            In this example, Transaction 2 reads the uncommitted balance of 100, but Transaction 1 rolls back, so the data becomes invalid.
          </p>
        </div>

        {/* Incorrect Summary */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📊 Incorrect Summary</h2>
          <p>
            An <strong>incorrect summary</strong> happens when a transaction calculates a summary, such as a total or average, based on data that is in an intermediate or inconsistent state due to other transactions.
          </p>
          <h3>Example:</h3>
          <pre>
{`
    Transaction 1:     SELECT SUM(balance) FROM account; // Calculates the sum based on old balances
    Transaction 2:     UPDATE account SET balance = 150 WHERE user_id = 2;
    Transaction 1:     The sum includes outdated balance data, leading to an incorrect result.
`}
          </pre>
          <p>
            In this example, the sum calculated by Transaction 1 includes outdated data because Transaction 2 updated the balance of one of the accounts after the query was executed but before the sum was finalized.
          </p>
        </div>

        {/* Lost Update */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">❌ Lost Update</h2>
          <p>
            A <strong>lost update</strong> happens when two transactions simultaneously update the same data, and one of the updates is overwritten by the other, causing the first update to be lost.
          </p>
          <h3>Example:</h3>
          <pre>
{`
    Transaction 1:     UPDATE account SET balance = 500 WHERE user_id = 1;
    Transaction 2:     UPDATE account SET balance = 600 WHERE user_id = 1;
    // Transaction 2 overwrites Transaction 1's update, and the value 500 is lost.
`}
          </pre>
          <p>
            In this example, Transaction 1 updates the balance to 500, but Transaction 2 immediately overwrites this with a balance of 600, resulting in the loss of the update made by Transaction 1.
          </p>
        </div>

        {/* Write-Read Conflict */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📉 Write-Read Conflict</h2>
          <p>
            A <strong>write-read conflict</strong> occurs when one transaction writes data that is then read by another transaction before the first transaction is committed. This can lead to reading uncommitted or invalid data.
          </p>
          <h3>Example:</h3>
          <pre>
{`
    Transaction 1:     UPDATE account SET balance = 500 WHERE user_id = 1;
    Transaction 2:     SELECT balance FROM account WHERE user_id = 1; // Reads the uncommitted balance of 500
    Transaction 1:     ROLLBACK;
    // Transaction 2 reads an invalid balance
`}
          </pre>
          <p>
            In this case, Transaction 2 reads the uncommitted data from Transaction 1. When Transaction 1 rolls back, the balance read by Transaction 2 becomes invalid.
          </p>
        </div>

        {/* Unrepeatable Read */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔁 Unrepeatable Read</h2>
          <p>
            An <strong>unrepeatable read</strong> occurs when a transaction reads the same data twice, but the value has changed in the meantime due to another transaction's commit.
          </p>
          <h3>Example:</h3>
          <pre>
{`
    Transaction 1:     SELECT balance FROM account WHERE user_id = 1; // Reads balance of 100
    Transaction 2:     UPDATE account SET balance = 150 WHERE user_id = 1; // Commits the update
    Transaction 1:     SELECT balance FROM account WHERE user_id = 1; // Now reads balance of 150, different from the first read
`}
          </pre>
          <p>
            Here, Transaction 1 reads the balance as 100 but sees it as 150 when it reads again, since Transaction 2 updated the balance in between the two reads.
          </p>
        </div>

        {/* Read-Write Problem */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 Read-Write Problem</h2>
          <p>
            A <strong>read-write problem</strong> happens when one transaction reads data that is written by another transaction, and the second transaction commits or rolls back.
          </p>
          <h3>Example:</h3>
          <pre>
{`
    Transaction 1:     SELECT balance FROM account WHERE user_id = 1; // Reads balance of 100
    Transaction 2:     UPDATE account SET balance = 150 WHERE user_id = 1; // Commits the update
    Transaction 1:     UPDATE account SET balance = 200 WHERE user_id = 1; // Writes based on the old balance of 100
`}
          </pre>
          <p>
            In this example, Transaction 1 reads the balance of 100 but then writes 200 based on this stale value, ignoring the update made by Transaction 2.
          </p>
        </div>

        {/* Conclusion */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">⚖️ Conclusion</h2>
          <p>
            These concurrency problems can lead to inconsistencies in the database, which is why transaction management is critical. To handle these issues, techniques like locking, isolation levels, and proper transaction scheduling are used to ensure consistency, isolation, and reliability in the system.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConcurrencyProblems;
