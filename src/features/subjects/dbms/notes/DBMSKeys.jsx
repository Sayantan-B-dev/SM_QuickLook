import React from "react";
import "../../../../CSS/Dbms.css";

function DBMSKeys() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔑 Keys in DBMS</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📘 What are Keys?</h2>
          <p>
            Keys are constraints used to uniquely identify rows in a table and establish relationships between tables. They are essential for ensuring data integrity.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧷 Types of Keys</h2>
          <div className="dbms-grid">
            <div className="dbms-grid-item structured">
              <h3>Super Key</h3>
              <p>A set of one or more attributes that can uniquely identify a record in a table.</p>
              <p className="dbms-example">💡 Example: {`{ID}, {ID, Name}`}</p>
            </div>
            <div className="dbms-grid-item structured">
              <h3>Candidate Key</h3>
              <p>Minimal super keys. A table can have multiple candidate keys but only one primary key.</p>
              <p className="dbms-example">💡 Example: {`{Email}, {Phone}`}</p>
            </div>
            <div className="dbms-grid-item structured">
              <h3>Primary Key</h3>
              <p>The chosen candidate key that uniquely identifies records. Cannot contain NULL values.</p>
              <p className="dbms-example">💡 Example: Student ID</p>
            </div>
            <div className="dbms-grid-item structured">
              <h3>Alternate Key</h3>
              <p>Candidate keys not selected as the primary key.</p>
              <p className="dbms-example">💡 Example: Phone if Email is primary</p>
            </div>
            <div className="dbms-grid-item structured">
              <h3>Foreign Key</h3>
              <p>An attribute that establishes a link between two tables. Refers to the primary key of another table.</p>
              <p className="dbms-example">💡 Example: DeptID in Employee table refers to Dept table</p>
            </div>
            <div className="dbms-grid-item structured">
              <h3>Composite Key</h3>
              <p>A combination of two or more columns that together uniquely identify a row.</p>
              <p className="dbms-example">💡 Example: {`{CourseID, StudentID}`}</p>
            </div>
            <div className="dbms-grid-item structured">
              <h3>Unique Key</h3>
              <p>Ensures all values in a column are different. Unlike primary key, it can contain one NULL.</p>
              <p className="dbms-example">💡 Example: Username or Email field</p>
            </div>
          </div>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 External Resources</h2>
          <p className="dbms-example">
            <a href="https://www.geeksforgeeks.org/types-of-keys-in-database/" target="_blank" rel="noreferrer">
              GeeksforGeeks: Types of Keys in DBMS
            </a>
          </p>
          <p className="dbms-example">
            <a href="https://www.javatpoint.com/dbms-keys" target="_blank" rel="noreferrer">
              JavaTpoint: DBMS Keys Explained
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DBMSKeys;
