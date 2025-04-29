import React from 'react';
import '../../../../CSS/Dbms.css';

function SqlQueriesAndFunctions() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Structured Query Language (SQL)</h1>

        {/* 4.1 Intro */}
        <div className="dbms-section mt-6">
          <h2 className="dbms-subtitle">4.1 SQL Queries: CREATE, INSERT, UPDATE, DELETE</h2>
          <p className="text-grey-400 mt-2">SQL (Structured Query Language) is used to communicate with and manipulate relational databases.</p>

          <p className="text-grey-400 mt-4 font-semibold">CREATE TABLE:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`CREATE TABLE Employee (
  EmpID INT,
  Name VARCHAR(50),
  Salary DECIMAL(10,2)
);`}
          </pre>

          <p className="text-grey-400 mt-4 font-semibold">INSERT INTO:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`INSERT INTO Employee (EmpID, Name, Salary)
VALUES (101, 'John', 45000);`}
          </pre>

          <p className="text-grey-400 mt-4 font-semibold">UPDATE:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`UPDATE Employee
SET Salary = 50000
WHERE EmpID = 101;`}
          </pre>

          <p className="text-grey-400 mt-4 font-semibold">DELETE:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`DELETE FROM Employee
WHERE EmpID = 101;`}
          </pre>
        </div>

        {/* 4.2 Constraints */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">4.2 Table Creation with Constraints</h2>
          <p className="text-grey-400 mt-2">
            Constraints enforce rules on data columns to maintain integrity and validity.
          </p>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4">
{`CREATE TABLE Student (
  RollNo INT PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  Age INT CHECK (Age >= 18),
  Email VARCHAR(100) UNIQUE
);`}
          </pre>

          <p className="text-grey-400 mt-4 font-semibold">Foreign Key Example:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`CREATE TABLE Enrollment (
  EnrollID INT PRIMARY KEY,
  RollNo INT,
  FOREIGN KEY (RollNo) REFERENCES Student(RollNo)
);`}
          </pre>
        </div>

        {/* 4.3 Set Operations */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">4.3 Set Operations and Operators</h2>
          <p className="text-grey-400 mt-2">
            Set operations combine results from two SELECT queries:
          </p>

          <ul className="list-disc text-grey-400 pl-5 mt-2">
            <li><strong>UNION:</strong> Combines and removes duplicates</li>
            <li><strong>UNION ALL:</strong> Includes duplicates</li>
            <li><strong>INTERSECT:</strong> Common rows (not supported by all DBs)</li>
            <li><strong>MINUS / EXCEPT:</strong> Rows in first query but not in second</li>
          </ul>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4">
{`SELECT Name FROM Student
UNION
SELECT Name FROM Alumni;`}
          </pre>
        </div>

        {/* Operators */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">Operators in SQL</h2>
          <ul className="list-disc text-grey-400 pl-5">
            <li><strong>Arithmetic:</strong> +, -, *, /, %</li>
            <li><strong>Comparison:</strong> =, !=, &lt;, &gt;, &lt;=, &gt;=</li>
            <li><strong>Logical:</strong> AND, OR, NOT</li>
            <li><strong>Special:</strong> BETWEEN, IN, LIKE, IS NULL</li>
          </ul>
        </div>

        {/* Aggregate Functions */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">Aggregate Functions</h2>
          <ul className="list-disc text-grey-400 pl-5">
            <li><strong>COUNT():</strong> Counts rows</li>
            <li><strong>SUM():</strong> Adds values</li>
            <li><strong>AVG():</strong> Calculates average</li>
            <li><strong>MAX(), MIN():</strong> Finds largest/smallest values</li>
          </ul>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4">
{`SELECT AVG(Salary) FROM Employee;`}
          </pre>
        </div>

        {/* String Functions */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">String Functions</h2>
          <ul className="list-disc text-grey-400 pl-5">
            <li><strong>UPPER(str):</strong> Converts to uppercase</li>
            <li><strong>LOWER(str):</strong> Converts to lowercase</li>
            <li><strong>CONCAT(str1, str2):</strong> Combines strings</li>
            <li><strong>LENGTH(str):</strong> Returns length of string</li>
            <li><strong>SUBSTRING(str, start, length):</strong> Extracts part</li>
          </ul>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4">
{`SELECT CONCAT(UPPER(Name), ' is a student')
FROM Student;`}
          </pre>
        </div>

        {/* Date and Time Functions */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">Date and Time Functions</h2>
          <ul className="list-disc text-grey-400 pl-5">
            <li><strong>NOW():</strong> Current date & time</li>
            <li><strong>CURDATE():</strong> Current date</li>
            <li><strong>CURTIME():</strong> Current time</li>
            <li><strong>DATE_ADD(date, INTERVAL x):</strong> Add time to date</li>
            <li><strong>DATEDIFF(date1, date2):</strong> Difference in days</li>
          </ul>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4">
{`SELECT DATEDIFF('2025-05-10', CURDATE());`}
          </pre>
        </div>

        {/* Summary */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Summary</h2>
          <p className="text-grey-400 mt-2">
            SQL provides powerful tools for data definition, manipulation, and processing. Mastering queries, constraints, set operations, and functions is essential for any database professional.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SqlQueriesAndFunctions;
