import React from "react";

function AggregateFunctionsAndSubqueries() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔢 Aggregate Functions & Subqueries</h1>

        {/* Aggregate Functions Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📊 Aggregate Functions</h2>
          <p>
            Aggregate functions perform a calculation on a set of values and return a single value. These are often used in conjunction with the <strong>GROUP BY</strong> clause to group rows that have the same values into summary rows.
          </p>
          <ul>
            <li>
              <strong>COUNT():</strong> Returns the number of rows in a set.
              <br />
              <strong>Example:</strong> `SELECT COUNT(*) FROM employees;`
            </li>
            <li>
              <strong>SUM():</strong> Returns the sum of a numeric column.
              <br />
              <strong>Example:</strong> `SELECT SUM(salary) FROM employees WHERE department_id = 1;`
            </li>
            <li>
              <strong>AVG():</strong> Returns the average value of a numeric column.
              <br />
              <strong>Example:</strong> `SELECT AVG(salary) FROM employees;`
            </li>
            <li>
              <strong>MIN():</strong> Returns the minimum value in a set.
              <br />
              <strong>Example:</strong> `SELECT MIN(salary) FROM employees;`
            </li>
            <li>
              <strong>MAX():</strong> Returns the maximum value in a set.
              <br />
              <strong>Example:</strong> `SELECT MAX(salary) FROM employees;`
            </li>
          </ul>
        </div>

        {/* Correlated Subqueries Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔄 Correlated Subqueries</h2>
          <p>
            A correlated subquery is a subquery that references columns from the outer query. This means the subquery is evaluated for each row in the outer query. It performs row-by-row evaluation.
          </p>
          <p>
            <strong>Example:</strong>
            <br />
            <code>
              SELECT name, salary
              <br />
              FROM employees e
              <br />
              WHERE salary &gt; (
              <br />
              &nbsp;&nbsp;SELECT AVG(salary)
              <br />
              &nbsp;&nbsp;FROM employees
              <br />
              &nbsp;&nbsp;WHERE department_id = e.department_id
              <br />
              );
            </code>
            This query returns the names and salaries of employees whose salary is above the average salary in their respective department.
          </p>
        </div>

        {/* Comparison Table Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔍 Difference Between Nested Subqueries, Correlated Subqueries & Joins</h2>
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 border text-left">Type</th>
                <th className="p-2 border text-left">Approach</th>
                <th className="p-2 border text-left">Evaluation</th>
                <th className="p-2 border text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Nested Subquery</td>
                <td className="p-2 border">Top-down</td>
                <td className="p-2 border">The inner query is evaluated first, and its result is passed to the outer query for comparison.</td>
                <td className="p-2 border">
                  <code>
                    SELECT name FROM employees WHERE salary &gt; (SELECT AVG(salary) FROM employees);
                  </code>
                </td>
              </tr>
              <tr>
                <td className="p-2 border">Correlated Subquery</td>
                <td className="p-2 border">Bottom-up</td>
                <td className="p-2 border">The subquery is evaluated once for each row in the outer query.</td>
                <td className="p-2 border">
                  <code>
                    SELECT name, salary FROM employees e WHERE salary &gt; (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);
                  </code>
                </td>
              </tr>
              <tr>
                <td className="p-2 border">Join</td>
                <td className="p-2 border">Cross-product</td>
                <td className="p-2 border">Joins combine rows from two or more tables based on related columns.</td>
                <td className="p-2 border">
                  <code>
                    SELECT e.name, e.salary FROM employees e JOIN departments d ON e.department_id = d.department_id;
                  </code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Approach Explanation Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔎 Approaches in Subqueries & Joins</h2>
          <ul>
            <li>
              <strong>Top-down (Nested Subquery):</strong> The outer query is executed first, and the inner subquery is evaluated with the result of the outer query. This approach is typically used in nested subqueries where the inner query depends on the outer query.
            </li>
            <li>
              <strong>Bottom-up (Correlated Subquery):</strong> The inner query is executed first for each row, and the result is passed to the outer query. This is typical in correlated subqueries where each row in the outer query requires a separate evaluation of the subquery.
            </li>
            <li>
              <strong>Cross-product (Join):</strong> Joins work by combining rows from two or more tables based on a condition. This approach evaluates the cross-product of both tables, filtering them based on the given condition (i.e., the <code>ON</code> clause).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AggregateFunctionsAndSubqueries;
