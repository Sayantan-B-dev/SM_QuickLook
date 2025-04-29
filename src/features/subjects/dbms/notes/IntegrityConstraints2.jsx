import React from 'react';
import '../../../../CSS/Dbms.css';

function IntegrityConstraints2() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">

        <h1 className="dbms-title">Integrity Constraints in DBMS</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <p className="text-grey-400">
            <strong>Integrity Constraints</strong> are rules applied to the database to maintain correctness, accuracy, and validity of the stored data. They ensure that the database remains consistent even after operations like insertions, deletions, and updates.
          </p>
        </div>

        {/* Implicit and Explicit Constraints */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">1. Implicit and Explicit Constraints</h2>

          <p className="text-grey-400 mt-2">
            Constraints can be classified into two types:
          </p>

          <ul className="list-disc text-grey-400 pl-5 mt-2">
            <li><strong>Implicit Constraints:</strong> Automatically enforced by the DBMS based on the relational model structure. These include:
              <ul className="list-disc pl-5">
                <li>Uniqueness of tuples (no duplicate rows)</li>
                <li>Atomicity of attribute values (each cell must have a single value)</li>
              </ul>
            </li>
            <li className="mt-2"><strong>Explicit Constraints:</strong> Defined clearly by the database designer using DDL commands (like <code>CREATE TABLE</code>). Examples:
              <ul className="list-disc pl-5">
                <li>Primary key, foreign key, unique constraints</li>
                <li>Check conditions (e.g., Age &gt; 0)</li>
              </ul>
            </li>
          </ul>

          <p className="text-grey-400 mt-4"><strong>Example:</strong></p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`CREATE TABLE Student (
    RollNo INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT CHECK (Age > 0)
);`}
          </pre>
        </div>

        {/* Domain Constraint */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">2. Domain Constraint</h2>

          <p className="text-grey-400 mt-2">
            A <strong>Domain Constraint</strong> restricts the set of values that an attribute can take. Each attribute value must belong to a defined domain (data type + possible value range).
          </p>

          <p className="text-grey-400 mt-4"><strong>Example:</strong></p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`Attribute: Age
Domain: Integer values between 0 and 120`}
          </pre>

          <p className="text-grey-400 mt-4">
            Trying to insert a string like "Twenty" for Age would violate the domain constraint.
          </p>
        </div>

        {/* Key Constraint */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">3. Key Constraint</h2>

          <p className="text-grey-400 mt-2">
            A <strong>Key Constraint</strong> ensures that no two tuples (rows) have the same value for a key attribute. A <strong>Primary Key</strong> must be unique and not null.
          </p>

          <p className="text-grey-400 mt-4"><strong>Example:</strong></p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`CREATE TABLE Employee (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(100)
);`}
          </pre>

          <p className="text-grey-400 mt-4">
            Here, <strong>EmpID</strong> must be unique across all employees.
          </p>
        </div>

        {/* Entity Integrity Constraint */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">4. Entity Integrity Constraint</h2>

          <p className="text-grey-400 mt-2">
            <strong>Entity Integrity</strong> states that the primary key value for every tuple must be unique and <strong>cannot be NULL</strong>. Every entity must be uniquely identifiable.
          </p>

          <p className="text-grey-400 mt-4"><strong>Example:</strong></p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`Student(RollNo PRIMARY KEY, Name, Age)

- RollNo must have a value and cannot be NULL.`}
          </pre>

          <p className="text-grey-400 mt-4">
            If RollNo is NULL for any student, it violates entity integrity.
          </p>
        </div>

        {/* Referential Integrity Constraint */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">5. Referential Integrity Constraint</h2>

          <p className="text-grey-400 mt-2">
            <strong>Referential Integrity</strong> ensures that a foreign key value in one relation matches an existing primary key value in another relation, or is NULL.  
            It maintains valid references between tables.
          </p>

          <p className="text-grey-400 mt-4"><strong>Example:</strong></p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`CREATE TABLE Department (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(100)
);

CREATE TABLE Employee (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(100),
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);`}
          </pre>

          <p className="text-grey-400 mt-4">
            Here, an Employee's DeptID must refer to a valid Department's DeptID.  
            It prevents insertion of an employee with a non-existent department.
          </p>
        </div>

        {/* Final Notes */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Summary</h2>
          <p className="text-grey-400 mt-4">
            Integrity constraints are critical to maintaining accurate and consistent data in a relational database. They protect data from invalid operations, ensure relationships among tables are valid, and uphold the rules defined by the business logic.
          </p>
        </div>

      </div>
    </div>
  );
}

export default IntegrityConstraints2;
