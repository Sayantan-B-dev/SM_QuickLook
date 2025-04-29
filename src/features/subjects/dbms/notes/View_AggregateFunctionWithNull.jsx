import React from 'react'
import '../../../../CSS/Dbms.css'

function View_AggregateFunctionWithNull() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">

        {/* Views in Database Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Views in Database</h2>
          <p className="dbms-example">
            A view in a database is a virtual table that represents the result of a query. It doesn't store data but displays data stored in tables.
            Views can be used to simplify complex queries, improve security, and provide a convenient way to access data.
          </p>

          <ul>
            <li>
              <strong>Creating a View:</strong> You can create a view using the <code>CREATE VIEW</code> statement.
              <p className="dbms-example">
                <pre>
                  {`CREATE VIEW employee_view AS
                  SELECT name, department, salary FROM employees WHERE department = 'HR';`}
                </pre>
                This view filters employees from the "HR" department and shows their name, department, and salary.
              </p>
            </li>
            <li>
              <strong>Using a View:</strong> Once a view is created, you can query it like a normal table.
              <p className="dbms-example">
                <pre>
                  {`SELECT * FROM employee_view;`}
                </pre>
                This would return all the employees who belong to the 'HR' department.
              </p>
            </li>
            <li>
              <strong>Updating a View:</strong> If the view is based on a single table, you can update data through it.
              <p className="dbms-example">
                <pre>
                  {`UPDATE employee_view SET salary = salary + 500 WHERE department = 'HR';`}
                </pre>
                This would increase the salary of all employees in the HR department by 500.
              </p>
            </li>
          </ul>
        </div>

        {/* Aggregate Functions and NULL Handling Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">How Aggregate Functions Work with NULL Values</h2>
          <p className="dbms-example">
            Aggregate functions perform calculations on multiple rows of data and return a single result. Some common aggregate functions include <code>SUM()</code>, <code>COUNT()</code>, <code>AVG()</code>, and <code>MAX()</code>. When dealing with NULL values, it’s important to understand how these functions handle them.
          </p>

          <ul>
            <li>
              <strong>COUNT Function:</strong> The <code>COUNT()</code> function counts the number of rows, but it does not count NULL values in the specified column.
              <p className="dbms-example">
                <pre>
                  {`SELECT COUNT(salary) FROM employees; -- Does not count NULL salaries`}
                </pre>
                If there are NULL values in the salary column, they will not be counted by the <code>COUNT()</code> function.
              </p>
            </li>
            <li>
              <strong>SUM Function:</strong> The <code>SUM()</code> function sums the values of a column, ignoring NULL values.
              <p className="dbms-example">
                <pre>
                  {`SELECT SUM(salary) FROM employees; -- Ignores NULL salaries`}
                </pre>
                If there are NULL values in the salary column, they will be excluded from the sum calculation.
              </p>
            </li>
            <li>
              <strong>AVG Function:</strong> The <code>AVG()</code> function calculates the average of a numeric column. It ignores NULL values when calculating the average.
              <p className="dbms-example">
                <pre>
                  {`SELECT AVG(salary) FROM employees; -- Ignores NULL salaries in the calculation`}
                </pre>
                The <code>AVG()</code> function only averages the non-NULL values in the column, which can affect the result.
              </p>
            </li>
            <li>
              <strong>MAX and MIN Functions:</strong> The <code>MAX()</code> and <code>MIN()</code> functions return the maximum and minimum values, respectively, ignoring NULL values.
              <p className="dbms-example">
                <pre>
                  {`SELECT MAX(salary) FROM employees; -- Ignores NULL salaries`}
                </pre>
                Similarly, <code>MIN()</code> returns the minimum value, excluding any NULL values.
              </p>
            </li>
            <li>
              <strong>Handling NULL with COALESCE:</strong> The <code>COALESCE()</code> function can be used to replace NULL values with a default value.
              <p className="dbms-example">
                <pre>
                  {`SELECT COALESCE(salary, 0) FROM employees; -- Replaces NULL salaries with 0`}
                </pre>
                This ensures that NULL values are replaced by 0 before performing the aggregate function.
              </p>
            </li>
          </ul>

          {/* Example Query for Multiple Aggregate Functions with NULL */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">Example: Using Multiple Aggregate Functions with NULL</h3>
            <p className="dbms-example">
              Here is an example query that uses multiple aggregate functions on a column that contains NULL values:
            </p>
            <p className="dbms-example">
              <pre>
                {`SELECT 
                    COUNT(salary) AS count_salary,
                    SUM(salary) AS sum_salary,
                    AVG(salary) AS avg_salary,
                    MAX(salary) AS max_salary,
                    MIN(salary) AS min_salary
                  FROM employees;`}
              </pre>
              In this query:
              <ul>
                <li>NULL values in the salary column will not be counted in the <code>COUNT()</code> function.</li>
                <li>NULL values in the salary column will be excluded from the <code>SUM()</code>, <code>AVG()</code>, <code>MAX()</code>, and <code>MIN()</code> functions.</li>
              </ul>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default View_AggregateFunctionWithNull
