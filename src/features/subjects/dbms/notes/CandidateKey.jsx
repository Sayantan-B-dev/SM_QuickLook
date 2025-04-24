import React from "react";
import "../../../../CSS/Dbms.css";

function CandidateKey() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔑 Candidate Key in DBMS</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📘 What is a Candidate Key?</h2>
          <p>
            A <strong>Candidate Key</strong> is a set of attributes that uniquely identifies a tuple (row) in a relation (table). It is called "candidate" because it is a candidate to become the <strong>Primary Key</strong>.
          </p>
          <p className="dbms-example">
            💡 All candidate keys are unique and minimal (no redundant attributes).
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📐 Properties of Candidate Keys</h2>
          <ul>
            <li><strong>Uniqueness:</strong> Each value combination is unique for every row.</li>
            <li><strong>Minimality:</strong> No attribute in the key can be removed without losing uniqueness.</li>
            <li><strong>Non-null:</strong> Candidate keys must always have a value (implicitly, like primary key).</li>
          </ul>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧭 Use of Candidate Keys</h2>
          <p>
            Candidate keys ensure data integrity and are essential for uniquely identifying records in a relational database.
            From a set of candidate keys, one is selected as the primary key, while the rest can be used as alternate keys.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧮 Example Schema</h2>
          <p className="dbms-example">
            <code>Student(<strong>RollNo</strong>, Name, Email, <strong>AadharNo</strong>, Course)</code>
          </p>
          <p>
            In this schema, both <strong>RollNo</strong> and <strong>AadharNo</strong> can uniquely identify a student, so they are candidate keys.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📊 Example Table</h2>
          <div className="dbms-grid">
            <div className="dbms-grid-item structured">
              <table className="example-table">
                <thead>
                  <tr>
                    <th>RollNo</th> 
                    <th>Name</th> 
                    <th>Email</th> 
                    <th>AadharNo</th> 
                    <th>Course</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>101</td> 
                    <td>Ravi</td> 
                    <td>ravi@example.com</td> 
                    <td>123456789012</td> 
                    <td>CS</td>
                  </tr>
                  <tr>
                    <td>102</td> 
                    <td>Sita</td> 
                    <td>sita@example.com</td> 
                    <td>987654321098</td> 
                    <td>IT</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧾 Example SQL Query</h2>
          <p className="dbms-example">
            🔍 Get student data using <strong>AadharNo</strong> (a candidate key):
          </p>
          <pre className="code-snippet">
{`SELECT * FROM Student
WHERE AadharNo = '123456789012';`}
          </pre>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔗 References</h2>
          <p className="dbms-example">
            <a href="https://www.geeksforgeeks.org/candidate-key-in-dbms/" target="_blank" rel="noreferrer">
              GeeksforGeeks - Candidate Key in DBMS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CandidateKey;
