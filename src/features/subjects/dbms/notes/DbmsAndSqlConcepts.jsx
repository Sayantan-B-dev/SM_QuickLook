import React from 'react'
import '../../../../CSS/Dbms.css'

function DbmsAndSqlConcepts() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">DBMS and SQL Important Concepts</h1>

        {/* DBMS vs RDBMS */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">DBMS vs RDBMS</h2>
          <pre>
{`DBMS (Database Management System):
- Manages data stored in files/tables without strict relationships.
- Example: File systems, XML databases.
- No concept of primary key/foreign key.

RDBMS (Relational Database Management System):
- Data is stored in well-organized related tables.
- Must follow Codd's Rules (relational model).
- Example: MySQL, PostgreSQL, Oracle.`}
          </pre>
        </div>

        {/* Primary Key */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Primary Key</h2>
          <pre>
{`- Uniquely identifies each row in a table.
- Cannot have NULL or duplicate values.

Example:
CREATE TABLE Students (
  StudentID INT PRIMARY KEY,
  Name VARCHAR(50)
);`}

          </pre>
        </div>

        {/* Foreign Key */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Foreign Key</h2>
          <pre>
{`- Creates a link between two tables.
- Enforces referential integrity.

Example:
CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  StudentID INT,
  FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);`}

          </pre>
        </div>

        {/* Constraints */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Constraints and Their Types</h2>
          <pre>
{`Types:
1. PRIMARY KEY - Uniquely identifies a row.
2. FOREIGN KEY - Links two tables.
3. UNIQUE - Ensures all values in a column are different.
4. NOT NULL - Ensures a column cannot have NULL values.
5. CHECK - Validates that values meet a condition.
6. DEFAULT - Sets a default value if none is provided.

Example:
CREATE TABLE Employees (
  ID INT PRIMARY KEY,
  Email VARCHAR(100) UNIQUE,
  Salary INT CHECK (Salary > 0),
  Country VARCHAR(50) DEFAULT 'India'
);`}

          </pre>
        </div>

        {/* SQL Commands */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Different Types of SQL Commands</h2>
          <pre>
{`- DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE
- DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE
- DCL (Data Control Language): GRANT, REVOKE
- TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT
- DQL (Data Query Language): SELECT`}
          </pre>
        </div>

        {/* GROUP BY vs ORDER BY */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">GROUP BY vs ORDER BY</h2>
          <pre>
{`GROUP BY:
- Groups rows that have the same values.
- Often used with aggregate functions (SUM, COUNT).

Example:
SELECT Department, COUNT(*) FROM Employees GROUP BY Department;

ORDER BY:
- Sorts the result set ascending (ASC) or descending (DESC).

Example:
SELECT Name, Salary FROM Employees ORDER BY Salary DESC;`}
          </pre>
        </div>

        {/* Types of Joins */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Types of Joins</h2>
          <pre>
{`1. INNER JOIN - Returns matching rows.
2. LEFT JOIN - All rows from left + matched rows from right.
3. RIGHT JOIN - All rows from right + matched rows from left.
4. FULL JOIN - All matching + unmatched rows from both sides.
5. CROSS JOIN - Cartesian product (all combinations).

Example:
SELECT A.Name, B.Course
FROM Students A
INNER JOIN Courses B
ON A.CourseID = B.CourseID;`}
          </pre>
        </div>

        {/* Nested vs Correlated Subquery */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Nested Subquery vs Correlated Subquery</h2>
          <pre>
{`Nested Subquery:
- Executed once for the main query.
Example:
SELECT Name FROM Students
WHERE StudentID IN (SELECT StudentID FROM Orders WHERE Amount > 500);

Correlated Subquery:
- Executed for each row processed by the main query.
Example:
SELECT Name FROM Students S
WHERE EXISTS (
  SELECT * FROM Orders O WHERE O.StudentID = S.StudentID
);`}
          </pre>
        </div>

        {/* Pattern Matching */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Pattern Matching in SQL</h2>
          <pre>
{`- Use LIKE operator.
- % = any sequence of characters
- _ = any single character

Example:
SELECT * FROM Employees WHERE Name LIKE 'A%';  -- Names starting with A
SELECT * FROM Employees WHERE Name LIKE '_a%'; -- Second letter is 'a'`}
          </pre>
        </div>

        {/* Find 2nd, 3rd, Nth highest salary */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Find 2nd, 3rd, Nth Highest Salary</h2>
          <pre>
{`Second Highest Salary:
SELECT MAX(Salary) 
FROM Employees
WHERE Salary < (SELECT MAX(Salary) FROM Employees);

Nth Highest Salary (Using OFFSET/FETCH):
SELECT Salary
FROM Employees
ORDER BY Salary DESC
OFFSET (N-1) ROWS FETCH NEXT 1 ROW ONLY;`}
          </pre>
        </div>

        {/* SQL vs NoSQL */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">SQL vs NoSQL</h2>
          <pre>
{`SQL:
- Structured data (tables, rows).
- Fixed schema.
- Example: MySQL, PostgreSQL.

NoSQL:
- Unstructured/semi-structured data (documents, key-value).
- Dynamic schema.
- Example: MongoDB, Cassandra.`}
          </pre>
        </div>

        {/* VARCHAR vs VARCHAR2 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">VARCHAR vs VARCHAR2</h2>
          <pre>
{`VARCHAR:
- ANSI Standard type.
- Might store trailing spaces (depends on DB).

VARCHAR2 (Oracle-specific):
- Automatically removes trailing spaces.
- Recommended over VARCHAR in Oracle.`}
          </pre>
        </div>

        {/* Triggers */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">What are Triggers?</h2>
          <pre>
{`- A trigger is an automatic action fired by database events (INSERT, UPDATE, DELETE).
- Used to maintain integrity, audit changes.

Example:
CREATE TRIGGER BeforeInsertStudent
BEFORE INSERT ON Students
FOR EACH ROW
SET NEW.CreatedAt = NOW();`}
          </pre>
        </div>

        {/* ACID Properties */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">ACID Properties in DBMS</h2>
          <pre>
{`ACID stands for:
A - Atomicity: All operations must succeed or fail as a unit.
C - Consistency: Database must move from one valid state to another.
I - Isolation: Concurrent transactions must not affect each other.
D - Durability: Once committed, data must persist even after failure.`}
          </pre>
        </div>

      </div>
    </div>
  )
}

export default DbmsAndSqlConcepts
