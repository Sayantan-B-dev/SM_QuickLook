import React from "react";
import "../../../../CSS/Dbms.css";

function ForeignKeyOperations() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Foreign Key Operations & Constraints</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📘 What is a Foreign Key?</h2>
          <p className="dbms-example">
            A <strong>foreign key</strong> is a column or set of columns in one table that refers to the <strong>primary key</strong> in another table.
            It enforces referential integrity between the child and parent tables.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🏛️ Where and Why to Use Foreign Keys</h2>
          <p>
            Foreign keys are used to <strong>create relationships</strong> between tables. They prevent invalid data from being inserted into the foreign key column and ensure consistency.
          </p>
          <p className="dbms-example">
            Example: <code>Order.CustomerID</code> is a foreign key referencing <code>Customer.CustomerID</code>.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">⚙️ Common Foreign Key Constraints</h2>
          <div className="dbms-grid">
            <div className="dbms-grid-item structured">
              <h3>ON DELETE CASCADE</h3>
              <p>If a record in the parent table is deleted, corresponding records in the child table are automatically deleted.</p>
            </div>
            <div className="dbms-grid-item structured">
              <h3>ON DELETE SET NULL</h3>
              <p>If a parent record is deleted, the foreign key in the child table is set to NULL.</p>
            </div>
            <div className="dbms-grid-item structured">
              <h3>ON DELETE NO ACTION</h3>
              <p>Prevents deletion in the parent table if there are referencing records in the child table.</p>
            </div>
          </div>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🛠️ Operations</h2>
          <ul>
            <li><strong>Insert:</strong> Ensure the value inserted in the foreign key column exists in the parent table.</li>
            <li><strong>Update:</strong> Changes in the referenced column may need cascading updates depending on configuration.</li>
            <li><strong>Delete:</strong> Behavior depends on the constraint used (CASCADE, SET NULL, etc).</li>
          </ul>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">⚠️ Problems and Solutions</h2>
          <ul>
            <li><strong>Problem:</strong> Trying to insert a non-existent value in foreign key.</li>
            <li><strong>Solution:</strong> Insert the value into the parent table first or ensure it exists.</li>
            <li><strong>Problem:</strong> Deleting a parent record that is referenced.</li>
            <li><strong>Solution:</strong> Use CASCADE if child deletion is intended, otherwise SET NULL or NO ACTION.</li>
          </ul>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧪 Example Schema</h2>
          <pre className="dbms-example">
{`CREATE TABLE Customer (
  CustomerID INT PRIMARY KEY,
  Name VARCHAR(100)
);

CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  OrderDate DATE,
  CustomerID INT,
  FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID) ON DELETE CASCADE
);`}
          </pre>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📊 Example Operations</h2>
          <pre className="dbms-example">
{`-- Insert into parent
INSERT INTO Customer VALUES (1, 'Alice');

-- Insert into child
INSERT INTO Orders VALUES (101, '2025-04-01', 1);

-- Delete parent (cascades to child)
DELETE FROM Customer WHERE CustomerID = 1;
`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default ForeignKeyOperations;
