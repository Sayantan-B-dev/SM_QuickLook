import React from "react";
import "../../../../CSS/Dbms.css";

function SuperKeyDetails() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔐 Super Key in DBMS</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📘 What is a Super Key?</h2>
          <p className="dbms-example">
            A <strong>Super Key</strong> is a set of one or more attributes
            (columns) that can uniquely identify a record in a table. It
            includes all possible combinations that uniquely identify a tuple.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🏗️ Properties of Super Key</h2>
          <ul>
            <li>Can have redundant attributes (i.e., not minimal).</li>
            <li>Uniquely identifies each tuple in a relation.</li>
            <li>Every relation has at least one super key.</li>
            <li>
              Every primary key is a super key, but not all super keys are
              primary keys.
            </li>
          </ul>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🎯 Use of Super Key</h2>
          <p>
            Super keys are used to ensure <strong>uniqueness</strong> of data
            within a table and help the DBMS to enforce{" "}
            <strong>data integrity</strong>. Candidate keys and primary keys are
            chosen from the set of super keys.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧪 Example Schema</h2>
          <pre className="dbms-example">
            {`CREATE TABLE Employee (
  EmpID INT,
  Email VARCHAR(100),
  Name VARCHAR(100),
  Phone VARCHAR(15),
  PRIMARY KEY (EmpID)
);`}
          </pre>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📊 Example Super Keys</h2>
          <ul>
            <li>{`{EmpID}`}</li>
            <li>{`{EmpID, Email}`}</li>
            <li>{`{EmpID, Name, Phone}`}</li>
            <li>{`{Email, Phone}`}</li> <span>(If combination is unique)</span>
          </ul>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📝 Example Table</h2>
          <table className="example-table">
            <thead>
              <tr>
                <th>EmpID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>alice@example.com</td>
                <td>Alice</td>
                <td>9999911111</td>
              </tr>
              <tr>
                <td>2</td>
                <td>bob@example.com</td>
                <td>Bob</td>
                <td>9999922222</td>
              </tr>
              <tr>
                <td>3</td>
                <td>carol@example.com</td>
                <td>Carol</td>
                <td>9999933333</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔍 Example Query Using Super Key</h2>
          <pre className="dbms-example">
            {`-- Using EmpID as super key
SELECT * FROM Employee WHERE EmpID = 2;

-- Using multiple attributes (composite super key)
SELECT * FROM Employee WHERE Email = 'bob@example.com' AND Phone = '9999922222';`}
          </pre>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📎 Additional Notes</h2>
          <ul>
            <li>A relation may have many super keys.</li>
            <li>
              The <strong>candidate key</strong> is the minimal super key.
            </li>
            <li>
              Redundant attributes in a super key make it non-minimal but still
              uniquely identifying.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SuperKeyDetails;
