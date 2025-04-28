import React from "react";
import "../../../../CSS/Dbms.css";

function NormalForms() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔎 Comparison of Normal Forms (1NF, 2NF, 3NF, BCNF, 4NF, 5NF)</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 What are Normal Forms?</h2>
          <p>
            <strong>Normal Forms (NF)</strong> are a series of guidelines used to design a relational database schema
            that is free from redundancy and dependency issues. These guidelines help in organizing the database tables
            in such a way that they avoid common problems like anomalies, data redundancy, and update anomalies.
          </p>
        </div>

        {/* 1NF */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 1st Normal Form (1NF)</h2>
          <ul className="dbms-list">
            <li>✅ <strong>No Multiple-Valued Attributes:</strong> Each column in a table must contain only single values, not sets or lists.</li>
            <li>✅ <strong>Atomicity:</strong> Each field must contain atomic (indivisible) values.</li>
            <li>✅ <strong>Example:</strong> A table containing <em>Student (StudentID, Subjects)</em> with multiple subjects per student violates 1NF. It should be modified to separate each subject into individual rows.</li>
          </ul>
          <table className="example-table">
            <thead>
              <tr>
                <th>StudentID</th>
                <th>Subjects</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S001</td>
                <td>Math, Science</td>
              </tr>
              <tr>
                <td>S002</td>
                <td>History, Geography</td>
              </tr>
            </tbody>
          </table>
          <p>
            The above table violates 1NF because it contains multiple subjects in the same field. It should be transformed into:
          </p>
          <table className="example-table">
            <thead>
              <tr>
                <th>StudentID</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S001</td>
                <td>Math</td>
              </tr>
              <tr>
                <td>S001</td>
                <td>Science</td>
              </tr>
              <tr>
                <td>S002</td>
                <td>History</td>
              </tr>
              <tr>
                <td>S002</td>
                <td>Geography</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2NF */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 2nd Normal Form (2NF)</h2>
          <ul className="dbms-list">
            <li>✅ <strong>Must Be in 1NF:</strong> The relation must first satisfy 1NF before it can be considered for 2NF.</li>
            <li>✅ <strong>No Partial Dependency:</strong> All non-prime attributes must depend on the whole primary key. There should be no partial dependency (dependency on a part of the primary key).</li>
            <li>✅ <strong>Example:</strong> In a table <em>StudentCourse (StudentID, CourseID, Instructor, InstructorPhone)</em>, if <em>Instructor</em> depends only on <em>CourseID</em> (not the full primary key <em>(StudentID, CourseID)</em>), it violates 2NF.</li>
          </ul>
          <p>In 2NF, we should decompose the table like this:</p>
          <table className="example-table">
            <thead>
              <tr>
                <th>StudentID</th>
                <th>CourseID</th>
                <th>Instructor</th>
                <th>InstructorPhone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S001</td>
                <td>C001</td>
                <td>Dr. Smith</td>
                <td>123-456</td>
              </tr>
              <tr>
                <td>S002</td>
                <td>C002</td>
                <td>Dr. Johnson</td>
                <td>789-012</td>
              </tr>
            </tbody>
          </table>
          <p>We split the Instructor info into a separate table:</p>
          <table className="example-table">
            <thead>
              <tr>
                <th>CourseID</th>
                <th>Instructor</th>
                <th>InstructorPhone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C001</td>
                <td>Dr. Smith</td>
                <td>123-456</td>
              </tr>
              <tr>
                <td>C002</td>
                <td>Dr. Johnson</td>
                <td>789-012</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3NF */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 3rd Normal Form (3NF)</h2>
          <ul className="dbms-list">
            <li>✅ <strong>Must Be in 2NF:</strong> The relation must first satisfy 2NF.</li>
            <li>✅ <strong>No Transitive Dependency:</strong> No non-prime attribute should depend on another non-prime attribute. In other words, non-prime attributes should depend only on the candidate keys, not on each other.</li>
            <li>✅ <strong>Example:</strong> In a table <em>Employee (EmpID, EmpName, EmpDept, DeptManager)</em>, if <em>DeptManager</em> depends on <em>EmpDept</em> instead of the <em>EmpID</em>, it violates 3NF.</li>
          </ul>
          <p>We decompose the table as follows:</p>
          <table className="example-table">
            <thead>
              <tr>
                <th>EmpID</th>
                <th>EmpName</th>
                <th>EmpDept</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>E001</td>
                <td>Alice</td>
                <td>HR</td>
              </tr>
              <tr>
                <td>E002</td>
                <td>Bob</td>
                <td>Engineering</td>
              </tr>
            </tbody>
          </table>
          <p>And we create a separate table for the department and manager:</p>
          <table className="example-table">
            <thead>
              <tr>
                <th>EmpDept</th>
                <th>DeptManager</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HR</td>
                <td>John</td>
              </tr>
              <tr>
                <td>Engineering</td>
                <td>Steve</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* BCNF */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Boyce-Codd Normal Form (BCNF)</h2>
          <ul className="dbms-list">
            <li>✅ <strong>Must Be in 3NF:</strong> The relation must first satisfy 3NF.</li>
            <li>✅ <strong>Left-Hand Side Must Be a Candidate Key:</strong> For every functional dependency, the left-hand side (LHS) must be a candidate key.</li>
            <li>✅ <strong>Example:</strong> In a table <em>CourseInstructor (CourseID, InstructorID, InstructorName)</em>, if <em>InstructorID → InstructorName</em> holds, but <em>InstructorID</em> is not a candidate key, it violates BCNF.</li>
          </ul>
          <p>The decomposition of the table into BCNF form looks like:</p>
          <table className="example-table">
            <thead>
              <tr>
                <th>CourseID</th>
                <th>InstructorID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C001</td>
                <td>I001</td>
              </tr>
              <tr>
                <td>C002</td>
                <td>I002</td>
              </tr>
            </tbody>
          </table>
          <table className="example-table">
            <thead>
              <tr>
                <th>InstructorID</th>
                <th>InstructorName</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I001</td>
                <td>Dr. Smith</td>
              </tr>
              <tr>
                <td>I002</td>
                <td>Dr. Johnson</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4NF */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 4th Normal Form (4NF)</h2>
          <ul className="dbms-list">
            <li>✅ <strong>Must Be in BCNF:</strong> The relation must first satisfy BCNF.</li>
            <li>✅ <strong>No Multivalued Dependency:</strong> There should be no multivalued dependency, meaning that one attribute set should not determine another attribute set independently of other attributes.</li>
            <li>✅ <strong>Example:</strong> A table <em>StudentCourse (StudentID, Subject, PhoneNumber)</em> with multivalued dependency violates 4NF. We separate it into two tables to eliminate the multivalued dependency.</li>
          </ul>
        </div>

        {/* 5NF */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 5th Normal Form (5NF)</h2>
          <ul className="dbms-list">
            <li>✅ <strong>Must Be in 4NF:</strong> The relation must first satisfy 4NF.</li>
            <li>✅ <strong>Lossless Decomposition:</strong> The decomposition must ensure that there is no loss of information when the original table is split.</li>
            <li>✅ <strong>Example:</strong> A table <em>OrderProduct (OrderID, ProductID, Quantity)</em> may violate 5NF if the decomposition does not preserve information during a split.</li>
          </ul>
        </div>

        <button className="dbmsBtn">Explore More about Normal Forms</button>
      </div>
    </div>
  );
}

export default NormalForms;
