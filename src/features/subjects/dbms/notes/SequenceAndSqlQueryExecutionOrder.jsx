import React from 'react';
import '../../../../CSS/Dbms.css';

function SequenceAndSqlQueryExecutionOrder() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">SQL Sequence and SQL Query Execution Order</h1>

        {/* SEQUENCE IN SQL */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Sequence in SQL</h2>
          <p className="dbms-text">
            <strong>What is a Sequence?</strong>
          </p>
          <ul className="dbms-points">
            <li>A database object that automatically generates sequential numeric values.</li>
            <li>Commonly used for auto-generating primary key values.</li>
            <li>Useful for inserting unique IDs without manual handling.</li>
          </ul>

          <p className="dbms-text"><strong>Important Points:</strong></p>
          <ul className="dbms-points">
            <li>Sequences are independent of tables.</li>
            <li>Can be reused across multiple tables.</li>
            <li>You can control parameters such as START, INCREMENT, MAXVALUE, MINVALUE, CYCLE, CACHE.</li>
          </ul>

          <p className="dbms-text"><strong>Syntax:</strong></p>
          <pre className="dbms-code">
{`CREATE SEQUENCE sequence_name
START WITH initial_value
INCREMENT BY step_value
MAXVALUE max_value
MINVALUE min_value
CYCLE | NOCYCLE
CACHE cache_size;`}
          </pre>

          <p className="dbms-text"><strong>Example:</strong></p>
          <pre className="dbms-code">
{`CREATE SEQUENCE emp_seq
START WITH 1
INCREMENT BY 1
NOCYCLE
CACHE 20;`}
          </pre>

          <p className="dbms-text"><strong>Using the Sequence:</strong></p>
          <pre className="dbms-code">
{`INSERT INTO Employees (EmployeeID, Name)
VALUES (emp_seq.NEXTVAL, 'John Doe');`}
          </pre>
          <ul className="dbms-points">
            <li><strong>NEXTVAL:</strong> Generates the next number.</li>
            <li><strong>CURRVAL:</strong> Returns the current value without incrementing.</li>
          </ul>
          <p className="dbms-text"><strong>Important Notes:</strong></p>
          <ul className="dbms-points">
            <li>NEXTVAL can be called once per row in INSERT.</li>
            <li>CURRVAL cannot be called before the first NEXTVAL.</li>
          </ul>
        </div>

        {/* SQL QUERY EXECUTION ORDER */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">SQL Query Execution Order</h2>
          <p className="dbms-text">
            SQL Queries are <strong>NOT</strong> executed in the order we write them!
          </p>
          <p className="dbms-text"><strong>Correct Execution Order:</strong></p>
          <ol className="dbms-points">
            <li>FROM</li>
            <li>JOIN (if any)</li>
            <li>WHERE</li>
            <li>GROUP BY</li>
            <li>HAVING</li>
            <li>SELECT</li>
            <li>DISTINCT</li>
            <li>ORDER BY</li>
            <li>LIMIT</li>
          </ol>

          <p className="dbms-text"><strong>Detailed Explanation:</strong></p>

          <div className="dbms-text">
            <h3>1. FROM</h3>
            <p>Load the base tables mentioned in the FROM clause.</p>
            <pre className="dbms-code">
{`FROM Students S`}
            </pre>

            <h3>2. JOIN</h3>
            <p>Perform any JOINs between tables.</p>
            <pre className="dbms-code">
{`JOIN Departments D ON S.DeptID = D.ID`}
            </pre>

            <h3>3. WHERE</h3>
            <p>Apply row filtering based on conditions.</p>
            <pre className="dbms-code">
{`WHERE S.Age > 18`}
            </pre>

            <h3>4. GROUP BY</h3>
            <p>Group rows based on column values (for aggregation).</p>
            <pre className="dbms-code">
{`GROUP BY D.DepartmentName`}
            </pre>

            <h3>5. HAVING</h3>
            <p>Filter groups created by GROUP BY.</p>
            <pre className="dbms-code">
{`HAVING COUNT(S.StudentID) > 10`}
            </pre>

            <h3>6. SELECT</h3>
            <p>Pick the columns or expressions to return.</p>
            <pre className="dbms-code">
{`SELECT D.DepartmentName, COUNT(S.StudentID)`}
            </pre>

            <h3>7. DISTINCT</h3>
            <p>Remove duplicate rows from the output.</p>
            <pre className="dbms-code">
{`SELECT DISTINCT D.DepartmentName`}
            </pre>

            <h3>8. ORDER BY</h3>
            <p>Sort the final result.</p>
            <pre className="dbms-code">
{`ORDER BY D.DepartmentName ASC`}
            </pre>

            <h3>9. LIMIT</h3>
            <p>Restrict the number of rows returned.</p>
            <pre className="dbms-code">
{`LIMIT 10`}
            </pre>
          </div>

          <p className="dbms-text"><strong>Full Example:</strong></p>
          <pre className="dbms-code">
{`SELECT D.DepartmentName, COUNT(S.StudentID) AS TotalStudents
FROM Students S
JOIN Departments D ON S.DeptID = D.ID
WHERE S.Age > 18
GROUP BY D.DepartmentName
HAVING COUNT(S.StudentID) > 10
ORDER BY TotalStudents DESC
LIMIT 5;`}
          </pre>
          <p className="dbms-text"><strong>Explanation:</strong></p>
          <ul className="dbms-points">
            <li>FROM loads Students and Departments.</li>
            <li>JOIN links Students to Departments.</li>
            <li>WHERE filters students older than 18.</li>
            <li>GROUP BY organizes by department.</li>
            <li>HAVING filters departments with more than 10 students.</li>
            <li>SELECT picks department name and student count.</li>
            <li>ORDER BY sorts the result by TotalStudents descending.</li>
            <li>LIMIT shows top 5 departments.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SequenceAndSqlQueryExecutionOrder;
