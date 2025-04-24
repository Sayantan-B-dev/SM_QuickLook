import React from "react";
import "../../../../CSS/Dbms.css";

function IntegrityConstraints() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🛡️ Integrity Constraints in DBMS</h1>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20250122170114749572/integrity_constraints.webp" alt="" />
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📘 What are Integrity Constraints?</h2>
          <p>
            Integrity Constraints are rules that ensure the accuracy and consistency of data within a database. These constraints enforce valid data entry and relationships, preventing invalid or contradictory information.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧱 Types of Integrity Constraints</h2>
          <div className="dbms-grid">

            <div className="dbms-grid-item structured">
              <h3>🔍 Domain Constraints</h3>
              <p>
                Ensure that all values in a column belong to a predefined domain (set of valid values).
              </p>
              <p className="dbms-example">
                💡 Example: Age must be an integer between 0 and 120.
              </p>
            </div>

            <div className="dbms-grid-item structured">
              <h3>👤 Entity Integrity Constraints</h3>
              <p>
                Ensures that the primary key of a table is unique and not null, guaranteeing that each entity (row) is uniquely identifiable.
              </p>
              <p className="dbms-example">
                💡 Example: A Student ID field must be unique and never null.
              </p>
            </div>

            <div className="dbms-grid-item structured">
              <h3>🔗 Referential Integrity Constraints</h3>
              <p>
                Ensure that a foreign key value always refers to an existing valid row in another table.
              </p>
              <p className="dbms-example">
                💡 Example: Order.CustomerID must exist in the Customer table’s ID column.
              </p>
            </div>

            <div className="dbms-grid-item structured">
              <h3>🗝️ Key Constraints</h3>
              <p>
                Ensure that keys (primary, unique) follow their rules — uniqueness, non-null for primary keys.
              </p>
              <p className="dbms-example">
                💡 Example: Two users cannot have the same email if it’s marked UNIQUE.
              </p>
            </div>
          </div>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 Additional Notes</h2>
          <ul>
            <li><strong>Domain Integrity:</strong> Controlled via data types and constraints like CHECK.</li>
            <li><strong>Entity Integrity:</strong> Ensures row-level identity using primary keys.</li>
            <li><strong>Referential Integrity:</strong> Maintains relationships using foreign keys.</li>
          </ul>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔗 References</h2>
          <p className="dbms-example">
            <a href="https://www.geeksforgeeks.org/integrity-constraints-in-dbms/" target="_blank" rel="noreferrer">
              GeeksforGeeks: Integrity Constraints in DBMS
            </a>
          </p>
          <p className="dbms-example">
            <a href="https://www.tutorialspoint.com/dbms/dbms_integrity.htm" target="_blank" rel="noreferrer">
              TutorialsPoint: DBMS Integrity
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntegrityConstraints;
