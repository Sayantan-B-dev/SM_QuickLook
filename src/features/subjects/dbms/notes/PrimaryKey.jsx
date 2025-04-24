import React from "react";
import "../../../../CSS/Dbms.css";

function PrimaryKey() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔐 Primary Key in DBMS</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📘 What is a Primary Key?</h2>
          <p>
            A <strong>Primary Key</strong> is a specific choice among the set of candidate keys. It uniquely identifies each record in a table and ensures that no two rows have the same value for the primary key column(s).
          </p>
          <p className="dbms-example">
            💡 A table can have multiple candidate keys but only one of them is selected as the primary key.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📐 Properties of Primary Key</h2>
          <ul>
            <li><strong>Uniqueness:</strong> Every value must be unique across all rows.</li>
            <li><strong>Non-null:</strong> It cannot contain NULL values.</li>
            <li><strong>Immutable:</strong> Ideally, primary key values should not change frequently.</li>
            <li><strong>Minimal:</strong> Must not contain any unnecessary attributes.</li>
          </ul>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧭 Use of Primary Keys</h2>
          <p>
            Primary keys are used to uniquely identify records and form relationships between different tables in a database using <strong>foreign keys</strong>.
            They are also crucial for indexing and ensuring data consistency.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧮 Example Schema</h2>
          <p className="dbms-example">
            <code>Employee(<strong>EmpID</strong>, Name, Email, Department)</code>
          </p>
          <p>
            Here, <strong>EmpID</strong> is the primary key because it uniquely identifies each employee.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📊 Example Table</h2>
          <div className="dbms-grid">
            <div className="dbms-grid-item structured">
              <table className="example-table">
                <thead>
                  <tr>
                    <th>EmpID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>201</td>
                    <td>Arjun</td>
                    <td>arjun@example.com</td>
                    <td>HR</td>
                  </tr>
                  <tr>
                    <td>202</td>
                    <td>Meera</td>
                    <td>meera@example.com</td>
                    <td>Finance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧾 Example SQL Query</h2>
          <p className="dbms-example">
            🔍 Fetch employee details using the primary key <strong>EmpID</strong>:
          </p>
          <pre className="code-snippet">
{`SELECT * FROM Employee
WHERE EmpID = 201;`}
          </pre>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔗 Reference</h2>
          <p className="dbms-example">
            <a href="https://www.geeksforgeeks.org/primary-key-in-dbms/" target="_blank" rel="noreferrer">
              GeeksforGeeks – Primary Key in DBMS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrimaryKey;
