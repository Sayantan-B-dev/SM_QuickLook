import React from "react";
import "../../../../CSS/Dbms.css";

function Normalization() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔍 Normalization in DBMS</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 What is Normalization?</h2>
          <p>
            <strong>Normalization</strong> is a process used in database design
            to eliminate redundancy (duplicate data) and ensure data integrity
            by organizing the data within the database. The main goal is to
            simplify the structure of the data, reduce potential anomalies during
            data insertion, update, and deletion, and to make the database more
            efficient and easier to maintain. The normalization process involves
            decomposing a large, complex table into smaller, more manageable ones
            without losing information.
          </p>

          <p>
            In other words, <strong>Normalization</strong> helps to achieve a
            higher level of data consistency by removing unwanted data
            dependencies. These dependencies could lead to anomalies such as data
            redundancy, deletion anomalies, or insertion anomalies.
          </p>

          <p>
            The process of normalization breaks down the data into multiple
            tables, each focused on a specific aspect of the data. These tables
            are then connected using <strong>foreign keys</strong>. The goal is
            to achieve several <strong>normal forms</strong> (1NF, 2NF, 3NF, BCNF,
            4NF, 5NF) through progressive steps of normalization.
          </p>

          <h2 className="dbms-subtitle">📌 Normal Forms (NF)</h2>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">1. First Normal Form (1NF)</h3>
            <p>
              A table is said to be in <strong>First Normal Form (1NF)</strong> if:
            </p>
            <ul>
              <li>Each column contains atomic (indivisible) values.</li>
              <li>Each record (row) is unique.</li>
              <li>There are no repeating groups or arrays in the table.</li>
            </ul>
            <p>
              In simple terms, 1NF ensures that the table does not have any
              repeating sets of data or multiple values in a single column.
            </p>
            <p className="dbms-example">
              💡 Example: A table storing student information with multiple
              courses in one column would violate 1NF. It should be split into
              separate rows for each student-course relationship.
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                {`CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  student_name VARCHAR(100),
  course_1 VARCHAR(100),
  course_2 VARCHAR(100)
);`}
              </code>
            </pre>
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">2. Second Normal Form (2NF)</h3>
            <p>
              A table is in <strong>Second Normal Form (2NF)</strong> if it:
            </p>
            <ul>
              <li>Is already in 1NF.</li>
              <li>All non-key columns are fully dependent on the primary key.</li>
            </ul>
            <p>
              In 2NF, we remove partial dependencies, where a non-key attribute
              depends on only a part of a composite primary key (when a table has
              more than one primary key).
            </p>
            <p className="dbms-example">
              💡 Example: If a table has a composite primary key (student_id,
              course_id), and a column (e.g., student_name) depends only on
              student_id, it violates 2NF. To normalize, we split the table.
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                {`CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  student_name VARCHAR(100)
);

CREATE TABLE Enrollments (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES Students(student_id)
);`}
              </code>
            </pre>
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">3. Third Normal Form (3NF)</h3>
            <p>
              A table is in <strong>Third Normal Form (3NF)</strong> if it:
            </p>
            <ul>
              <li>Is in 2NF.</li>
              <li>There is no transitive dependency between non-key attributes.</li>
            </ul>
            <p>
              In 3NF, we ensure that non-key attributes do not depend on other
              non-key attributes. This removes transitive dependencies, which
              occur when a non-key attribute depends on another non-key attribute
              via another non-key attribute.
            </p>
            <p className="dbms-example">
              💡 Example: A table with columns like student_name, department_name,
              and department_head would violate 3NF if department_head depends on
              department_name. We split these into separate tables.
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                {`CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  student_name VARCHAR(100),
  department_id INT
);

CREATE TABLE Departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(100),
  department_head VARCHAR(100)
);`}
              </code>
            </pre>
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">4. Boyce-Codd Normal Form (BCNF)</h3>
            <p>
              A table is in <strong>Boyce-Codd Normal Form (BCNF)</strong> if:
            </p>
            <ul>
              <li>It is in 3NF.</li>
              <li>Every determinant is a candidate key.</li>
            </ul>
            <p>
              BCNF is a stricter version of 3NF. It removes certain types of
              dependency where a non-prime attribute (non-key) can still act as
              a determinant.
            </p>
            <p className="dbms-example">
              💡 Example: If a table has a non-prime attribute that determines
              another non-prime attribute, it violates BCNF. We normalize the
              table by decomposing it further.
            </p>
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">5. Fourth Normal Form (4NF)</h3>
            <p>
              A table is in <strong>Fourth Normal Form (4NF)</strong> if:
            </p>
            <ul>
              <li>It is in BCNF.</li>
              <li>There are no multi-valued dependencies.</li>
            </ul>
            <p>
              4NF ensures that a record does not store multiple independent
              multi-valued facts about an entity. We split such multi-valued
              attributes into separate tables.
            </p>
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">6. Fifth Normal Form (5NF)</h3>
            <p>
              A table is in <strong>Fifth Normal Form (5NF)</strong> if:
            </p>
            <ul>
              <li>It is in 4NF.</li>
              <li>It cannot be decomposed into smaller tables without losing data.</li>
            </ul>
            <p>
              5NF deals with the decomposition of tables into smaller relations
              without losing any meaningful data. This is the highest level of
              normalization.
            </p>
          </div>

        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 Summary Points</h2>
          <ul>
            <li>Normalization reduces redundancy and dependency in a database.</li>
            <li>Each Normal Form solves specific types of redundancy or anomaly.</li>
            <li>The process involves breaking down larger tables into smaller ones, preserving relationships between them.</li>
            <li>The higher the normal form, the more normalized the database becomes, but it may also require more joins in queries.</li>
          </ul>
        </div>

        <button
          className="dbmsBtn"
          onClick={() =>
            window.open(
              "https://www.lucidchart.com/pages/er-diagrams",
              "_blank"
            )
          }
        >
          Open ER Diagram
        </button>
      </div>
    </div>
  );
}

export default Normalization;
