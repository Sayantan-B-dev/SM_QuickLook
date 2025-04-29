import React from 'react';
import '../../../../CSS/Dbms.css';

function DataAbstractionExplained() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Data Abstraction in DBMS</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">What is Data Abstraction?</h2>
          <p className="text-grey-400">
            Data Abstraction is the process of hiding the complexity of the internal database structure from users while providing only the essential information. It helps separate data descriptions from actual data operations and enhances system flexibility, maintainability, and security.
          </p>
          <p className="text-grey-400">
            DBMS supports abstraction to allow users to interact with data without knowing the underlying technical details.
          </p>
        </div>

        {/* 3 Levels of Data Abstraction */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Levels of Data Abstraction</h2>

          {/* 1. Physical Level */}
          <div className="mb-4">
            <h3 className="font-semibold text-grey-400">1. Physical Level (Lowest Level)</h3>
            <p className="text-grey-400">
              This level defines how the data is stored physically on storage devices — e.g., files, indexing, hashing, compression, etc.
            </p>
            <p className="text-grey-400 italic">
              🧠 Example: The database engine may store student records in binary format across sectors of a disk. Indexes might be built using B+ Trees for faster searching.
            </p>
          </div>

          {/* 2. Logical Level */}
          <div className="mb-4">
            <h3 className="font-semibold text-grey-400">2. Logical Level (Middle Level)</h3>
            <p className="text-grey-400">
              This level describes *what* data is stored in the database and the relationships between them. It defines tables, columns, types, constraints, etc., without worrying about physical storage.
            </p>
            <p className="text-grey-400 italic">
              🧠 Example: A logical model might define a table `Students` with attributes `RollNo`, `Name`, and `Marks` without showing how it's actually saved on disk.
            </p>
            <pre>
{`CREATE TABLE Students (
  RollNo INT PRIMARY KEY,
  Name VARCHAR(100),
  Marks INT
);`}
            </pre>
          </div>

          {/* 3. View Level */}
          <div className="mb-4">
            <h3 className="font-semibold text-grey-400">3. View Level (Highest Level)</h3>
            <p className="text-grey-400">
              The view level defines how users interact with the data. Different users may have different views of the same data, based on their access level.
            </p>
            <p className="text-grey-400 italic">
              🧠 Example: A student can see only their own marks, while an admin can see all student records.
            </p>
            <pre>
{`-- View for students to see their data only
CREATE VIEW StudentView AS
SELECT Name, Marks FROM Students
WHERE RollNo = CURRENT_USER();`}
            </pre>
          </div>
        </div>

        {/* Summary */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Why is Data Abstraction Important?</h2>
          <ul className="text-grey-400 list-disc pl-5">
            <li>Protects users from technical complexities.</li>
            <li>Supports data independence and flexibility.</li>
            <li>Improves database security and maintainability.</li>
            <li>Allows role-based access (custom views per user).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DataAbstractionExplained;
