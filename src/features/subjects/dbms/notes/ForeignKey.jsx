import React from "react";
import "../../../../CSS/Dbms.css";

function ForeignKey() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🌐 Foreign Key in DBMS</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📘 What is a Foreign Key?</h2>
          <p>
            A <strong>Foreign Key</strong> is a column (or group of columns) in a table that provides a link between data in two tables.
            It acts as a cross-reference between tables because it references the <strong>primary key</strong> of another table.
          </p>
          <p className="dbms-example">
            💡 It ensures referential integrity by enforcing a link between the data in two tables.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📐 Properties of Foreign Key</h2>
          <ul>
            <li><strong>Reference:</strong> It refers to the primary key of another table.</li>
            <li><strong>Nullability:</strong> It can contain NULL values unless explicitly restricted.</li>
            <li><strong>Enforces Integrity:</strong> Prevents actions that would destroy links between tables.</li>
            <li><strong>Multiple Foreign Keys:</strong> A table can have more than one foreign key.</li>
          </ul>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧭 Use of Foreign Keys</h2>
          <p>
            Foreign keys are used to establish and enforce a link between the data in two tables, making the database more normalized, consistent, and connected.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧮 Example Schema</h2>
          <p className="dbms-example">
            <code>Department(<strong>DeptID</strong>, DeptName)</code> <br />
            <code>Employee(EmpID, Name, <strong>DeptID</strong>)</code>
          </p>
          <p>
            Here, <strong>DeptID</strong> in the Employee table is a foreign key that references <strong>DeptID</strong> in the Department table.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📊 Example Tables</h2>
          <div className="dbms-grid">
            <div className="dbms-grid-item structured">
              <h3>Department Table</h3>
              <table className="example-table">
                <thead>
                  <tr>
                    <th>DeptID</th>
                    <th>DeptName</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10</td>
                    <td>HR</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>Finance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="dbms-grid-item structured">
              <h3>Employee Table</h3>
              <table className="example-table">
                <thead>
                  <tr>
                    <th>EmpID</th>
                    <th>Name</th>
                    <th>DeptID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>101</td>
                    <td>Ravi</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>102</td>
                    <td>Sneha</td>
                    <td>20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧾 Example SQL Queries</h2>
          <p className="dbms-example">🔧 Creating a foreign key:</p>
          <pre className="code-snippet">
{`CREATE TABLE Employee (
  EmpID INT PRIMARY KEY,
  Name VARCHAR(50),
  DeptID INT,
  FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);`}
          </pre>

          <p className="dbms-example">🔍 Fetching employee details along with department:</p>
          <pre className="code-snippet">
{`SELECT e.Name, d.DeptName
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID;`}
          </pre>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔗 Reference</h2>
          <p className="dbms-example">
            <a href="https://www.geeksforgeeks.org/foreign-key-in-dbms/" target="_blank" rel="noreferrer">
              GeeksforGeeks – Foreign Key in DBMS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForeignKey;
