import React from "react";
import "../../../../CSS/Dbms.css";

function SQLCommands2() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">
          📚 SQL Commands: DELETE, DROP, TRUNCATE, and Subqueries
        </h1>
        <img
          src="https://d8it4huxumps7.cloudfront.net/bites/wp-content/banners/2023/11/6549df69e7564_delete,_drop_and_truncate_in_sql.jpg?d=700x400"
          alt=""
        />
        {/* DELETE, DROP, and TRUNCATE */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">
            📌 Difference Between DELETE, DROP, and TRUNCATE
          </h2>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">1. DELETE</h3>
            <p>
              The <strong>DELETE</strong> command is used to remove rows from a
              table based on a condition. It is a DML (Data Manipulation
              Language) command.
            </p>
            <ul>
              <li>Removes rows one by one.</li>
              <li>It can be rolled back if in a transaction.</li>
              <li>Can use WHERE clause to delete specific rows.</li>
              <li>Fires any triggers associated with the deletion.</li>
            </ul>
            <p>
              <strong>Example:</strong>
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>DELETE FROM employees WHERE employee_id = 101;</code>
            </pre>
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">2. DROP</h3>
            <p>
              The <strong>DROP</strong> command removes a table or database
              completely. It is a DDL (Data Definition Language) command.
            </p>
            <ul>
              <li>Removes the entire table or database.</li>
              <li>Cannot be rolled back after execution.</li>
              <li>Frees the space used by the table.</li>
            </ul>
            <p>
              <strong>Example:</strong>
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>DROP TABLE employees;</code>
            </pre>
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">3. TRUNCATE</h3>
            <p>
              The <strong>TRUNCATE</strong> command removes all rows from a
              table but does not log individual row deletions. It is faster than
              DELETE as it does not log each row removal.
            </p>
            <ul>
              <li>Removes all rows from the table.</li>
              <li>Cannot be rolled back (in most RDBMS).</li>
              <li>Does not fire triggers.</li>
              <li>Frees the space used by the table.</li>
            </ul>
            <p>
              <strong>Example:</strong>
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>TRUNCATE TABLE employees;</code>
            </pre>
          </div>
        </div>

        {/* IN, NOT IN, EXISTS, NOT EXISTS */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">
            📌 Subqueries: IN, NOT IN, EXISTS, NOT EXISTS
          </h2>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">1. IN</h3>
            <p>
              The <strong>IN</strong> operator allows you to specify multiple
              values in a WHERE clause. It’s used to check if a value matches
              any value in a list or subquery.
            </p>
            <p>
              <strong>Example:</strong>
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                SELECT * FROM employees WHERE department_id IN (1, 2, 3);
              </code>
            </pre>
            <p>
              <strong>Use Case:</strong> It’s used when you need to check for
              multiple values in a column.
            </p>
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">2. NOT IN</h3>
            <p>
              The <strong>NOT IN</strong> operator checks if a value does not
              match any value in a list or subquery.
            </p>
            <p>
              <strong>Example:</strong>
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                SELECT * FROM employees WHERE department_id NOT IN (1, 2, 3);
              </code>
            </pre>
            <p>
              <strong>Use Case:</strong> Use it when you want to exclude
              specific values from your query.
            </p>
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">3. EXISTS</h3>
            <p>
              The <strong>EXISTS</strong> operator is used to check if a
              subquery returns any records. If the subquery returns one or more
              rows, EXISTS returns TRUE.
            </p>
            <p>
              <strong>Example:</strong>
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                SELECT employee_id, employee_name FROM employees WHERE EXISTS
                (SELECT * FROM departments WHERE department_id =
                employees.department_id);
              </code>
            </pre>
            <p>
              <strong>Use Case:</strong> Use EXISTS when you want to check for
              the existence of records in a subquery.
            </p>
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">4. NOT EXISTS</h3>
            <p>
              The <strong>NOT EXISTS</strong> operator is used to check if a
              subquery does not return any records.
            </p>
            <p>
              <strong>Example:</strong>
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                SELECT employee_id, employee_name FROM employees WHERE NOT
                EXISTS (SELECT * FROM departments WHERE department_id =
                employees.department_id);
              </code>
            </pre>
            <p>
              <strong>Use Case:</strong> Use NOT EXISTS when you want to ensure
              no records exist in the subquery.
            </p>
          </div>
        </div>

        {/* Interview Questions */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧠 Interview-Level Questions:</h2>
          <ul>
            <li className="font-bold text-xl" >What is the difference between DELETE, DROP, and TRUNCATE?</li>
            <p className="text-grey-400 text-sm"  style={{ marginLeft: "2rem",marginBottom:"2rem" }}>
              <strong>DELETE:</strong> Removes rows from a table based on a
              condition. It is a DML command and can be rolled back if wrapped
              in a transaction.
              <br />
              <strong>DROP:</strong> Removes the entire table or database. It is
              a DDL command, and the structure of the table is permanently
              removed. It cannot be rolled back.
              <br />
              <strong>TRUNCATE:</strong> Removes all rows from a table, but the
              table structure remains. It is a DDL command that cannot be rolled
              back in most cases and does not fire triggers.
            </p>

            <li className="font-bold text-xl" >When would you use TRUNCATE instead of DELETE?</li>
            <p className="text-grey-400 text-sm"  style={{ marginLeft: "2rem",marginBottom:"2rem" }} >
              <strong>TRUNCATE</strong> is preferred when you need to remove all
              rows from a table quickly and do not need to log each row's
              deletion. It is more efficient than <strong>DELETE</strong>{" "}
              because it does not check each row.
              <br />
              <strong>DELETE</strong> is used when you need to delete specific
              rows based on a condition (i.e., with a WHERE clause) and when you
              need the ability to roll back.
            </p>

            <li className="font-bold text-xl"  className="font-bold text-xl" >Can we rollback a TRUNCATE operation?</li>
            <p className="text-grey-400 text-sm"  style={{ marginLeft: "2rem",marginBottom:"2rem" }} >
              <strong>TRUNCATE</strong> operations cannot be rolled back in most
              cases. It’s a non-logged operation in terms of individual row
              deletion, and once it’s committed, the data is lost. However, in
              some databases (e.g., when used within a transaction in certain
              conditions), <strong>TRUNCATE</strong> can be rolled back.
            </p>

            <li className="font-bold text-xl" >What is the difference between IN and EXISTS?</li>
            <p className="text-grey-400 text-sm"  style={{ marginLeft: "2rem",marginBottom:"2rem" }} >
              <strong>IN:</strong> Used to check if a value exists in a list or
              a subquery. It checks for specific values.
              <br />
              <strong>Example:</strong> `SELECT * FROM employees WHERE
              department_id IN (1, 2, 3);`
              <br />
              <strong>EXISTS:</strong> Used to check if a subquery returns any
              results. It checks the existence of rows returned by the subquery.
              <br />
              <strong>Example:</strong> `SELECT * FROM employees WHERE EXISTS
              (SELECT 1 FROM departments WHERE department_id =
              employees.department_id);`
            </p>

            <li className="font-bold text-xl" >
              What does the NOT EXISTS operator do? How is it different from NOT
              IN?
            </li>
            <p className="text-grey-400 text-sm"  style={{ marginLeft: "2rem",marginBottom:"2rem" }} >
              <strong>NOT EXISTS:</strong> Returns true if the subquery does not
              return any rows.
              <br />
              <strong>NOT IN:</strong> Used to exclude values from a list. It
              checks whether a value is not in a list or subquery.
              <br />
              **Difference**: <strong>NOT EXISTS</strong> is used for checking
              the non-existence of rows, while <strong>NOT IN</strong> checks if
              a value is absent from a specific set of values.
            </p>

            <li className="font-bold text-xl" >When would you use the EXISTS operator in a query?</li>
            <p className="text-grey-400 text-sm"  style={{ marginLeft: "2rem",marginBottom:"2rem" }} >
              <strong>EXISTS</strong> is used when you want to check for the
              existence of a row in a subquery. It is efficient because it stops
              processing as soon as it finds the first matching row.
              <br />
              **Use case**: For filtering results based on the presence of
              related rows in a subquery.
            </p>

            <li className="font-bold text-xl" >
              Explain the performance differences between DELETE and TRUNCATE.
            </li>
            <p className="text-grey-400 text-sm"  style={{ marginLeft: "2rem",marginBottom:"2rem" }} >
              <strong>DELETE:</strong> Slower than <strong>TRUNCATE</strong>{" "}
              because it removes rows one by one and logs each deletion. It also
              checks constraints (like foreign key constraints) for each row.
              <br />
              <strong>TRUNCATE:</strong> Faster because it does not log
              individual row deletions and does not check constraints. It simply
              deallocates the entire table's data.
            </p>

            <li className="font-bold text-xl" >
              What are the constraints that affect the execution of DELETE and
              TRUNCATE commands?
            </li>
            <p className="text-grey-400 text-sm"  style={{ marginLeft: "2rem",marginBottom:"2rem" }} >
              <strong>DELETE:</strong> Affected by foreign key constraints (if
              cascading options are not specified). It requires checking and
              ensuring referential integrity.
              <br />
              <strong>TRUNCATE:</strong> Generally not affected by foreign key
              constraints, but it may be blocked if there are any foreign key
              references unless the table is explicitly empty or the foreign key
              constraints allow truncation.
            </p>
          </ul>
        </div>

        <div className="dbms-section">
          <button className="dbmsBtn">Learn More SQL Commands</button>
        </div>
      </div>
    </div>
  );
}

export default SQLCommands2;
