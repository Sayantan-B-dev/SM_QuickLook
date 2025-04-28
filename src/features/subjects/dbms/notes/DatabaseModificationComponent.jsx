import React from "react";

function DatabaseModificationComponent() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">📚 Immediate vs. Deferred Database Modification</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔍 Introduction to Database Modifications</h2>
          <p>
            In database systems, data modification refers to the process of changing or updating the data stored in a database. There are two primary types of modification strategies for handling transactions and data updates: **Immediate Database Modification** and **Deferred Database Modification**. Both strategies are important in transaction management and are evaluated based on the requirement for **recovery**, **consistency**, and **atomicity** of the transactions.
          </p>
        </div>

        {/* Immediate Database Modification */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">⚡ Immediate Database Modification</h2>
          <p>
            **Immediate Database Modification** refers to a strategy where any changes made to the database are immediately applied. Once a transaction updates the database, the changes are directly reflected in the database without waiting for a commit. In this approach, data modifications occur as soon as the operations are executed, regardless of whether the transaction eventually commits or rolls back.
          </p>

          <h3>Features of Immediate Database Modification:</h3>
          <ul>
            <li>Changes are reflected immediately in the database.</li>
            <li>If the transaction is committed, all changes are permanent.</li>
            <li>If the transaction is rolled back, the changes are undone using the <strong>UNDO log</strong>.</li>
            <li>This method is useful in systems where quick feedback is required after a transaction.</li>
          </ul>

          <h3>Advantages:</h3>
          <ul>
            <li>Reduces time delay between transaction execution and database updates.</li>
            <li>Faster response times as modifications are immediately reflected.</li>
            <li>Simple and easy to implement.</li>
          </ul>

          <h3>Disadvantages:</h3>
          <ul>
            <li>Can lead to inconsistencies if a transaction is rolled back after modification.</li>
            <li>May cause data corruption in case of unexpected system failure during a transaction.</li>
          </ul>

          <h3>Example of Immediate Modification:</h3>
          <pre>
{`UPDATE Employees
SET salary = 50000
WHERE employee_id = 101;`}
          </pre>
          <p>
            In this example, the salary of the employee with ID 101 is updated immediately in the database.
          </p>
        </div>

        {/* Deferred Database Modification */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">⏳ Deferred Database Modification</h2>
          <p>
            **Deferred Database Modification** refers to a strategy where changes made by a transaction are not immediately reflected in the database. Instead, all changes are kept in a <strong>log buffer</strong> or a transaction log, and are only applied to the database when the transaction is committed. If the transaction is rolled back, none of the changes are applied to the database, ensuring the database remains in a consistent state.
          </p>

          <h3>Features of Deferred Database Modification:</h3>
          <ul>
            <li>Changes are not applied immediately to the database.</li>
            <li>Modifications are stored in a log until the transaction is committed.</li>
            <li>If a transaction is rolled back, all modifications are discarded and not applied.</li>
            <li>Only committed transactions will reflect changes in the database.</li>
          </ul>

          <h3>Advantages:</h3>
          <ul>
            <li>Ensures consistency as modifications are not written until the transaction is confirmed.</li>
            <li>Reduces the risk of leaving the database in an inconsistent state after a rollback.</li>
            <li>Efficient for systems with heavy transactional loads where rollback scenarios are common.</li>
          </ul>

          <h3>Disadvantages:</h3>
          <ul>
            <li>Requires a more complex recovery mechanism to handle the log buffer.</li>
            <li>Transaction commit times may be longer as modifications are written at the end of the transaction.</li>
          </ul>

          <h3>Example of Deferred Modification:</h3>
          <pre>
{`BEGIN TRANSACTION;
UPDATE Employees
SET salary = 50000
WHERE employee_id = 101;
-- Modifications are logged but not applied yet
COMMIT;`}
          </pre>
          <p>
            In this example, the salary of employee 101 is updated, but the changes are only written to the database when the transaction is committed.
          </p>
        </div>

        {/* Comparison Between Immediate and Deferred Database Modification */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📊 Comparison: Immediate vs. Deferred Database Modification</h2>
          <table className="dbms-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Immediate Database Modification</th>
                <th>Deferred Database Modification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Modification Time</td>
                <td>Changes are applied immediately to the database.</td>
                <td>Changes are stored in logs and only applied when the transaction is committed.</td>
              </tr>
              <tr>
                <td>Rollback</td>
                <td>If the transaction is rolled back, changes are undone using the <strong>UNDO log</strong>.</td>
                <td>Changes are discarded upon rollback.</td>
              </tr>
              <tr>
                <td>Consistency</td>
                <td>May lead to inconsistencies if the system crashes before the transaction is completed.</td>
                <td>Ensures consistency as changes are applied only after a commit.</td>
              </tr>
              <tr>
                <td>Complexity</td>
                <td>Relatively simpler to implement as changes are made immediately.</td>
                <td>More complex due to the use of log buffers and commit handling.</td>
              </tr>
              <tr>
                <td>Use Case</td>
                <td>Useful when immediate feedback is required from transactions.</td>
                <td>Ideal for systems where consistency is crucial, and rollback scenarios are common.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Conclusion */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 Conclusion</h2>
          <p>
            Both **Immediate Database Modification** and **Deferred Database Modification** play important roles in the way transactions are handled in a database system. The choice of which modification technique to use depends on the requirements of the application, such as the need for quick response times, the importance of transaction consistency, and the complexity of transaction recovery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DatabaseModificationComponent;
