import React from 'react';
import '../../../../CSS/Dbms.css';

function NullValuesNestedComplexQueries() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Handling NULL Values, Nested Subqueries & Complex Queries in SQL</h1>

        {/* Null Values */}
        <div className="dbms-section mt-6">
          <h2 className="dbms-subtitle">Null Values in SQL</h2>
          <p className="text-grey-400 mt-2">
            In SQL, <strong>NULL</strong> represents missing, undefined, or unknown data. It is different from an empty string ('') or zero (0).
          </p>

          <p className="text-grey-400 mt-4 font-semibold">Checking for NULL:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`SELECT * FROM Employee
WHERE ManagerID IS NULL;`}
          </pre>

          <p className="text-grey-400 mt-4 font-semibold">Replacing NULL with Default Values (using COALESCE):</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`SELECT Name, COALESCE(ManagerID, 'No Manager') AS Manager
FROM Employee;`}
          </pre>

          <p className="text-grey-400 mt-4 font-semibold">Important Points:</p>
          <ul className="list-disc text-grey-400 pl-5 mt-2">
            <li>NULL is not equal to anything, even NULL itself.</li>
            <li>Use <strong>IS NULL</strong> or <strong>IS NOT NULL</strong> for comparisons.</li>
            <li>Aggregate functions usually ignore NULLs (e.g., AVG, SUM).</li>
          </ul>
        </div>

        {/* Nested Subqueries */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Nested Subqueries</h2>
          <p className="text-grey-400 mt-2">
            A subquery is a query embedded inside another SQL query. Subqueries can return a single value, a set of values, or even a full table.
          </p>

          <p className="text-grey-400 mt-4 font-semibold">Single-Row Subquery:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`SELECT Name
FROM Employee
WHERE Salary > (SELECT AVG(Salary) FROM Employee);`}
          </pre>
          <p className="text-grey-400 mt-2">→ Finds employees earning more than the average salary.</p>

          <p className="text-grey-400 mt-4 font-semibold">Multiple-Row Subquery (using IN):</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`SELECT Name
FROM Employee
WHERE DepartmentID IN (SELECT DepartmentID FROM Department WHERE Location = 'New York');`}
          </pre>
          <p className="text-grey-400 mt-2">→ Lists employees in New York departments.</p>

          <p className="text-grey-400 mt-4 font-semibold">Correlated Subquery:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`SELECT Name
FROM Employee e
WHERE Salary > (
  SELECT AVG(Salary)
  FROM Employee
  WHERE DepartmentID = e.DepartmentID
);`}
          </pre>
          <p className="text-grey-400 mt-2">→ Compares each employee's salary against their own department’s average salary.</p>

          <p className="text-grey-400 mt-4 font-semibold">Important Points:</p>
          <ul className="list-disc text-grey-400 pl-5 mt-2">
            <li>Subqueries can be used in SELECT, FROM, WHERE, or HAVING clauses.</li>
            <li>Correlated subqueries reference columns from the outer query.</li>
          </ul>
        </div>

        {/* Complex Queries */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Complex Queries</h2>
          <p className="text-grey-400 mt-2">
            Complex queries often involve multiple subqueries, joins, grouping, and aggregation together to solve business problems.
          </p>

          <p className="text-grey-400 mt-4 font-semibold">Example 1: Complex Subquery with JOIN and GROUP BY</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`SELECT d.DepartmentName, AVG(e.Salary) AS AvgSalary
FROM Department d
JOIN Employee e ON d.DepartmentID = e.DepartmentID
GROUP BY d.DepartmentName
HAVING AVG(e.Salary) > (
  SELECT AVG(Salary) FROM Employee
);`}
          </pre>
          <p className="text-grey-400 mt-2">→ Departments where the average salary is higher than the company's overall average salary.</p>

          <p className="text-grey-400 mt-4 font-semibold">Example 2: Nested Subquery Inside a WHERE Clause</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`SELECT Name
FROM Employee
WHERE DepartmentID = (
  SELECT DepartmentID
  FROM Department
  WHERE DepartmentName = 'Sales'
);`}
          </pre>

          <p className="text-grey-400 mt-4 font-semibold">Example 3: Double Nested Subquery</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`SELECT Name
FROM Employee
WHERE DepartmentID IN (
  SELECT DepartmentID
  FROM Department
  WHERE Location IN (
    SELECT Location
    FROM Branch
    WHERE Region = 'East'
  )
);`}
          </pre>
          <p className="text-grey-400 mt-2">→ Employees who belong to departments located in the 'East' region branches.</p>

          <p className="text-grey-400 mt-4 font-semibold">Key Techniques in Complex Queries:</p>
          <ul className="list-disc text-grey-400 pl-5 mt-2">
            <li>Use JOINs to bring related tables together.</li>
            <li>Use nested subqueries for dependent data retrieval.</li>
            <li>Use GROUP BY and HAVING for summarized results.</li>
            <li>Combine multiple filters and conditions carefully for performance optimization.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Conclusion</h2>
          <p className="text-grey-400 mt-2">
            Mastering NULL handling, writing nested subqueries, and constructing complex SQL queries are critical for effective database management and real-world applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NullValuesNestedComplexQueries;
