import React from "react";
import "../../../../CSS/Dbms.css";

function BasicPlsqlAndLoops() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">

        {/* Title */}
        <h1 className="dbms-title">🧩 Basic PL/SQL Commands and PL/SQL Loops</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 What is PL/SQL?</h2>
          <p className="text-grey-400">
            <strong>PL/SQL (Procedural Language/Structured Query Language)</strong> is Oracle's procedural extension to SQL. It allows the use of variables, conditions, loops, and exceptions inside SQL programs, making database interaction much more powerful.
          </p>
        </div>

        {/* Basic Structure */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📦 Basic PL/SQL Block Structure</h2>
          <pre className="dbms-code">
{`DECLARE
   -- variable declarations
BEGIN
   -- executable statements
EXCEPTION
   -- exception handling
END;`}
          </pre>
          <p className="text-grey-400 pt-2">Each PL/SQL block has **optional** DECLARE and EXCEPTION parts, but **mandatory** BEGIN and END parts.</p>
        </div>

        {/* Basic Commands */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🛠️ Basic PL/SQL Commands</h2>

          <div className="text-grey-400">
            <h3 className="font-bold pt-2">1. DECLARE</h3>
            <p>Used to define variables.</p>

            <h3 className="font-bold pt-4">2. BEGIN-END</h3>
            <p>Main executable code area.</p>

            <h3 className="font-bold pt-4">3. Assignment</h3>
            <pre className="dbms-code">variable_name := value;</pre>

            <h3 className="font-bold pt-4">4. SELECT INTO</h3>
            <p>To fetch data into a variable.</p>
            <pre className="dbms-code">
{`SELECT column_name INTO variable_name
FROM table_name
WHERE condition;`}
            </pre>

            <h3 className="font-bold pt-4">5. IF-THEN-ELSE</h3>
            <p>Conditional execution.</p>
            <pre className="dbms-code">
{`IF condition THEN
   statements;
ELSIF condition THEN
   statements;
ELSE
   statements;
END IF;`}
            </pre>

            <h3 className="font-bold pt-4">6. EXCEPTION</h3>
            <p>Error handling.</p>
            <pre className="dbms-code">
{`EXCEPTION
WHEN exception_name THEN
   statements;`}
            </pre>
          </div>
        </div>

        {/* PL/SQL Loops */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔄 PL/SQL Loops</h2>

          <div className="text-grey-400">
            <h3 className="font-bold pt-2">1. Simple LOOP</h3>
            <p>Infinite loop unless explicitly exited.</p>
            <pre className="dbms-code">
{`LOOP
   statements;
   EXIT WHEN condition;
END LOOP;`}
            </pre>

            <h3 className="font-bold pt-4">2. WHILE LOOP</h3>
            <p>Condition checked at the beginning.</p>
            <pre className="dbms-code">
{`WHILE condition LOOP
   statements;
END LOOP;`}
            </pre>

            <h3 className="font-bold pt-4">3. FOR LOOP</h3>
            <p>Automatically handles counter variables.</p>
            <pre className="dbms-code">
{`FOR counter IN [REVERSE] lower_bound..upper_bound LOOP
   statements;
END LOOP;`}
            </pre>
            <p className="pt-2">Example:</p>
            <pre className="dbms-code">
{`FOR i IN 1..5 LOOP
   DBMS_OUTPUT.PUT_LINE(i);
END LOOP;`}
            </pre>
          </div>
        </div>

        {/* Example Full Program */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🖥️ Full Example: Sum of First 5 Numbers</h2>
          <pre className="dbms-code">
{`DECLARE
   total_sum NUMBER := 0;
BEGIN
   FOR i IN 1..5 LOOP
      total_sum := total_sum + i;
   END LOOP;
   DBMS_OUTPUT.PUT_LINE('Sum is: ' || total_sum);
END;`}
          </pre>
        </div>

        {/* Interview Questions */}
        <div className="dbms-section">
  <h2 className="dbms-subtitle">🧠 Interview-Level Questions:</h2>
  <ul className="list-decimal text-grey-400 space-y-4">
    <li>
      <strong>What is the difference between PL/SQL and SQL?</strong>
      <p className="ml-4">
        - <strong>SQL</strong> is a **query language** used to interact with the database (e.g., select, insert, update data).  
        - <strong>PL/SQL</strong> (Procedural Language/SQL) is an **extension of SQL** that adds programming features like loops, conditions, and variables for **writing complex programs** inside the database.
      </p>
    </li>

    <li>
      <strong>What are the main sections of a PL/SQL block?</strong>
      <p className="ml-4">
        - <strong>Declaration Section:</strong> Variables, constants, cursors are declared. (Optional)  
        - <strong>Execution Section:</strong> SQL statements and procedural code are written. (Mandatory)  
        - <strong>Exception Handling Section:</strong> Errors during execution are caught and managed. (Optional)
      </p>
    </li>

    <li>
      <strong>Explain different types of loops in PL/SQL.</strong>
      <p className="ml-4">
        - <strong>Basic LOOP:</strong> Repeats indefinitely unless exited manually using EXIT statement.  
        - <strong>WHILE LOOP:</strong> Repeats as long as a given condition is TRUE.  
        - <strong>FOR LOOP:</strong> Repeats a fixed number of times over a range.
      </p>
    </li>

    <li>
      <strong>When should we use a FOR loop instead of a WHILE loop?</strong>
      <p className="ml-4">
        - Use a <strong>FOR loop</strong> when the **number of iterations is known** beforehand (e.g., from 1 to 10).  
        - Use a <strong>WHILE loop</strong> when the **number of iterations depends on a dynamic condition** evaluated at runtime.
      </p>
    </li>

    <li>
      <strong>How are exceptions handled in PL/SQL?</strong>
      <p className="ml-4">
        - Exceptions are handled in the **EXCEPTION section** of a PL/SQL block.  
        - You can handle built-in exceptions like `NO_DATA_FOUND`, `ZERO_DIVIDE`, or define custom exceptions.  
        Example:  
        <pre>
        <code>
          BEGIN<br/>
          -- code<br/>
          EXCEPTION<br/>
          WHEN NO_DATA_FOUND THEN<br/>
          DBMS_OUTPUT.PUT_LINE('No data found');<br/>
          END;
        </code>
        </pre>
        
      </p>
    </li>
  </ul>
</div>


      </div>
    </div>
  );
}

export default BasicPlsqlAndLoops;
