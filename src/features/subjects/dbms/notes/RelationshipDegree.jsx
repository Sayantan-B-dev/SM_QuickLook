import React from "react";
import "../../../../CSS/Dbms.css";

function RelationshipDegree() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">
          🔗 Degree of Relationship and Types of Relationships
        </h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">
            📌 Degree of Relationship (Cardinality)
          </h2>
          <p>
            The <strong>degree of a relationship</strong> in an
            Entity-Relationship (ER) model refers to the number of entity sets
            that participate in a relationship set. It is also sometimes called{" "}
            <strong>Cardinality</strong>.
          </p>
          <p>
            <strong>Degree 2:</strong> Binary relationship (most common). <br />
            <strong>Degree 3:</strong> Ternary relationship. <br />
            <strong>Degree n:</strong> n-ary relationship.
          </p>
          <p className="dbms-example">
            💡 Example: In a "Student enrolls in Course" relationship, the
            degree is 2 (Student and Course entities).
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">
            📌 Types of Relationships Based on Cardinality
          </h2>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">1. One-to-One (1:1) Relationship</h3>
            <p>
              In a <strong>1:1 relationship</strong>, each entity in Entity Set
              A is related to at most one entity in Entity Set B and vice versa.
            </p>
            <p className="dbms-example">
              💡 Example: Each person has one passport, and each passport
              belongs to one person.
            </p>

            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                {`CREATE TABLE users (
  user_id INT PRIMARY KEY,
  username VARCHAR(50)
);

CREATE TABLE user_profiles (
  profile_id INT PRIMARY KEY,
  user_id INT UNIQUE,
  profile_data VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);`}
              </code>
            </pre>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20240207155604/one-to-one-relatonship.png"
              alt=""
            />
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">2. One-to-Many (1:N) Relationship</h3>
            <p>
              In a <strong>1:N relationship</strong>, an entity in Entity Set A
              can be associated with multiple entities in Entity Set B, but an
              entity in B is associated with only one entity in A.
            </p>
            <p className="dbms-example">
              💡 Example: One department has many employees, but each employee
              belongs to one department.
            </p>

            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
{`CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50)
    );
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
    );`}
              </code>
            </pre>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240207155647/One-to-Many-Relationship.png" alt="" />
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">
              3. Many-to-Many (N:M) Relationship
            </h3>
            <p>
              In an <strong>N:M relationship</strong>, multiple entities from
              Entity Set A can be associated with multiple entities from Entity
              Set B.
            </p>
            <p className="dbms-example">
              💡 Example: Students can enroll in multiple courses, and each
              course can have multiple students.
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
                <code>
{`CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50)
    );
CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50)
    );
CREATE TABLE student_courses (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
    );`}
                </code>
            </pre>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240207155716/Many-to-Many-Relationship.png" alt="" />
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">
              4. Many-to-One (M:1) Relationship
            </h3>
            <p>
                In an <strong>M:1 relationship</strong>, multiple entities from
                Entity Set A can be associated with one entity from Entity Set B,
                but one entity in B is associated with only one entity in A.
            </p>
            <p className="dbms-example">
                💡 Example: Many students can belong to one class, but each class
                has many students.
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
                <code>
{`CREATE TABLE Teachers (
    teacher_id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);
CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(255),
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES Teachers(teacher_id)
);`}
                </code>
            </pre>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240402154154/Many-to-One-Relationship.png" alt="" />
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">
              5. Self-Referencing Relationship
            </h3>
            <p>
                In a <strong>self-referencing relationship</strong>, an entity in
                an entity set is related to itself. This can be either 1:1, 1:N,
                or N:M.
            </p>
            <p className="dbms-example">
                💡 Example: An employee can be a manager of other employees in the
                same table.
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
                <code>
{`CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employees(employee_id));`}
                </code>
            </pre>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240207155741/Self-Referencing-Relationship.png" alt="" />
          </div>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 Summary Points</h2>
          <ul>
            <li>
              Binary (Degree 2) relationships are most common in ER modeling.
            </li>
            <li>
              One-to-One relationships often merge tables for optimization.
            </li>
            <li>One-to-Many is the standard for parent-child relationships.</li>
            <li>
              Many-to-Many usually needs a separate{" "}
              <strong>junction table</strong> in RDBMS to manage the
              association.
            </li>
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

export default RelationshipDegree;
