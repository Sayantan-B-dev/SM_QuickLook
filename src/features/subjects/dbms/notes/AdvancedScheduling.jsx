import React from "react";

function AdvancedScheduling() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🧑‍💻 Advanced Scheduling and Serializability in DBMS</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔍 Introduction to Schedules and Serializability</h2>
          <p>
            In transaction management, the term <strong>schedule</strong> refers to the sequence of operations (such as reads and writes) performed by a set of transactions. Schedules help determine the correctness and consistency of the database during concurrent transaction execution. The key concepts in this context are:
          </p>
          <ul>
            <li>Irrecoverable vs Recoverable Schedules</li>
            <li>Cascading vs Cascadeless Schedules</li>
            <li>Serializability</li>
            <li>Conflict Serializability</li>
            <li>View Serializability</li>
          </ul>
          <p>
            In this component, we will explore these topics in detail, providing examples and discussing the implications of each on transaction management and isolation.
          </p>
        </div>

        {/* Irrecoverable vs Recoverable Schedule */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">⚠️ Irrecoverable vs Recoverable Schedule</h2>
          <p>
            A <strong>recoverable schedule</strong> is one where, if a transaction reads a value written by another transaction, then the first transaction must commit before the second one commits. If this rule is not followed, it leads to an <strong>irrecoverable schedule</strong>.
          </p>
          <h3>Example:</h3>
          <pre>
{`
Transaction 1:  WRITE(A);  
Transaction 2:  READ(A);
Transaction 2:  COMMIT;
Transaction 1:  ROLLBACK;
// This is a recoverable schedule because Transaction 1 will not commit after Transaction 2.
`}
          </pre>
          <p>
            In contrast, if Transaction 1 writes data and Transaction 2 reads it before Transaction 1 commits, and then Transaction 1 rolls back, it causes an irrecoverable situation because Transaction 2 would have read invalid data.
          </p>
        </div>

        {/* Cascading vs Cascadeless Schedule */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔗 Cascading vs Cascadeless Schedule</h2>
          <p>
            A <strong>cascading schedule</strong> occurs when a transaction reads data written by another transaction, and if the first transaction rolls back, all transactions that have read its data must also roll back. This leads to a chain of rollbacks, which is undesirable.
          </p>
          <h3>Example of Cascading Schedule:</h3>
          <pre>
{`
Transaction 1:  WRITE(A);
Transaction 2:  READ(A);
Transaction 3:  READ(A);
Transaction 1:  ROLLBACK;  // Both Transaction 2 and 3 must also ROLLBACK
`}
          </pre>
          <p>
            A <strong>cascadeless schedule</strong> prevents cascading rollbacks. It ensures that transactions only read committed data. In other words, a transaction will not read uncommitted data from another transaction.
          </p>
          <h3>Example of Cascadeless Schedule:</h3>
          <pre>
{`
Transaction 1:  WRITE(A);
Transaction 2:  COMMIT;
Transaction 3:  READ(A);
// No rollback cascade occurs here, as Transaction 2 commits before Transaction 3 reads data.
`}
          </pre>
        </div>

        {/* Serializability */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔑 Serializability</h2>
          <p>
            <strong>Serializability</strong> is a correctness criterion that ensures that the execution of a schedule of concurrent transactions is equivalent to some serial execution of those transactions. In other words, the final result of executing a schedule should be the same as if the transactions were executed one after another, without overlapping.
          </p>
          <p>
            Serializability can be achieved through two main approaches: <strong>conflict serializability</strong> and <strong>view serializability</strong>.
          </p>
        </div>

        {/* Conflict Serializability */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔄 Conflict Serializability</h2>
          <p>
            A schedule is <strong>conflict serializable</strong> if it can be transformed into a serial schedule by swapping non-conflicting operations. Two operations are considered <strong>conflicting</strong> if they access the same data and at least one of them is a write.
          </p>
          <h3>Example of Conflict Serializability:</h3>
          <pre>
{`
Transaction 1:  WRITE(A);  // Operation 1
Transaction 2:  WRITE(B);  // Operation 2
Transaction 1:  READ(B);   // Operation 3
Transaction 2:  READ(A);   // Operation 4
// Operations 1 and 2 do not conflict, but Operations 3 and 4 conflict.
// The schedule is conflict serializable if we swap the order of the conflicting operations.
`}
          </pre>
          <p>
            Conflict serializability is usually tested using a <strong>precedence graph</strong>, where the nodes represent transactions and edges represent conflicts between transactions.
          </p>
        </div>

        {/* View Serializability */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">👁️ View Serializability</h2>
          <p>
            A schedule is <strong>view serializable</strong> if it is equivalent to some serial schedule in terms of the final database state and the visibility of data. In other words, if each transaction in the schedule can be viewed as operating on the same set of data as in a serial schedule, then the schedule is view serializable.
          </p>
          <h3>Example of View Serializability:</h3>
          <pre>
{`
Transaction 1:  READ(A);
Transaction 2:  WRITE(A);
// If the final effect of these transactions is the same as in
//  some serial schedule, the schedule is view serializable.
`}
          </pre>
          <p>
            View serializability is a more relaxed condition compared to conflict serializability, but it is harder to test and verify.
          </p>
        </div>

        {/* Comparison: Serializability vs Cascading */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">⚖️ Serializability vs Cascading</h2>
          <p>
            The difference between serializability and cascading schedules is significant:
          </p>
          <ul>
            <li><strong>Serializability</strong> ensures correctness by guaranteeing that concurrent transactions can be transformed into some serial schedule.</li>
            <li><strong>Cascading</strong> schedules refer to the dependency of transactions on each other, which can result in undesirable rollbacks when one transaction fails.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">⚖️ Conclusion</h2>
          <p>
            Understanding the types of schedules and serializability is essential for designing efficient and reliable transaction management systems. By ensuring schedules are recoverable, cascadeless, and serializable, we can prevent many common concurrency issues and ensure the integrity of our database systems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdvancedScheduling;
