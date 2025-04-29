import React from 'react';
import '../../../../CSS/Dbms.css';

function PlSqlIntroduction() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">PL/SQL Introduction and Core Concepts</h1>

        {/* Introduction to PL/SQL */}
        <div className="dbms-section mt-6">
          <h2 className="dbms-subtitle">Introduction to PL/SQL</h2>
          <p className="text-grey-400 mt-2">
            <strong>PL/SQL</strong> stands for **Procedural Language extensions to SQL**. It is Oracle’s procedural extension for SQL and the Oracle relational database.
            PL/SQL combines the data manipulation power of SQL with the processing power of procedural languages.
          </p>
          <p className="text-grey-400 mt-2">It allows:</p>
          <ul className="list-disc text-grey-400 pl-5 mt-2">
            <li>Conditional processing with IF statements</li>
            <li>Looping through data using FOR, WHILE loops</li>
            <li>Modular programming with procedures, functions, packages, triggers, cursors</li>
          </ul>
        </div>

        {/* PL/SQL Block Structure */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">PL/SQL Block Structure</h2>
          <p className="text-grey-400 mt-2">
            A PL/SQL program is organized into blocks. Each block contains:
          </p>
          <ul className="list-disc text-grey-400 pl-5 mt-2">
            <li><strong>Declaration Section</strong> (optional): Declare variables, cursors, exceptions.</li>
            <li><strong>Execution Section</strong> (mandatory): SQL and PL/SQL statements.</li>
            <li><strong>Exception Section</strong> (optional): Handle exceptions or errors.</li>
          </ul>

          <p className="text-grey-400 mt-4 font-semibold">General Block Syntax:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`DECLARE
  -- Variable declarations
BEGIN
  -- SQL and PL/SQL statements
EXCEPTION
  -- Error handling
END;`}
          </pre>
        </div>

        {/* Variables */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Variables in PL/SQL</h2>
          <p className="text-grey-400 mt-2">
            Variables are used to store data during the execution of the block. They must be declared in the DECLARE section.
          </p>

          <p className="text-grey-400 mt-4 font-semibold">Example of Variable Declaration:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`DECLARE
  employee_name VARCHAR2(50);
  salary NUMBER(8,2);
BEGIN
  employee_name := 'John';
  salary := 50000;
END;`}
          </pre>
        </div>

        {/* SQL Statements in PL/SQL */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">SQL Statements inside PL/SQL</h2>
          <p className="text-grey-400 mt-2">
            PL/SQL can execute SQL statements such as INSERT, UPDATE, DELETE, and SELECT INTO.
          </p>

          <p className="text-grey-400 mt-4 font-semibold">Example:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`DECLARE
  employee_salary NUMBER(8,2);
BEGIN
  SELECT salary INTO employee_salary
  FROM employees
  WHERE employee_id = 100;
  
  UPDATE employees
  SET salary = salary + 500
  WHERE employee_id = 100;
END;`}
          </pre>
        </div>

        {/* Control Structures */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">PL/SQL Control Structures</h2>
          <p className="text-grey-400 mt-2">
            Control structures are used to control the flow of execution:
          </p>

          <ul className="list-disc text-grey-400 pl-5 mt-2">
            <li><strong>IF-THEN-ELSE</strong></li>
            <li><strong>CASE statement</strong></li>
            <li><strong>LOOPS (FOR, WHILE, SIMPLE LOOP)</strong></li>
          </ul>

          <p className="text-grey-400 mt-4 font-semibold">Example of IF-ELSE:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`IF salary > 50000 THEN
  DBMS_OUTPUT.PUT_LINE('High salary');
ELSE
  DBMS_OUTPUT.PUT_LINE('Average salary');
END IF;`}
          </pre>

          <p className="text-grey-400 mt-4 font-semibold">Example of FOR Loop:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`FOR i IN 1..5 LOOP
  DBMS_OUTPUT.PUT_LINE(i);
END LOOP;`}
          </pre>
        </div>

        {/* Cursors */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Cursors</h2>
          <p className="text-grey-400 mt-2">
            A cursor is a pointer to the result set of a query.
          </p>

          <ul className="list-disc text-grey-400 pl-5 mt-2">
            <li><strong>Implicit Cursors:</strong> Automatically created by Oracle for single SQL statements.</li>
            <li><strong>Explicit Cursors:</strong> Defined by the programmer to control the context area manually.</li>
          </ul>

          <p className="text-grey-400 mt-4 font-semibold">Example of Explicit Cursor:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`DECLARE
  CURSOR emp_cursor IS
    SELECT employee_id, salary FROM employees;
  
  emp_record emp_cursor%ROWTYPE;
BEGIN
  OPEN emp_cursor;
  LOOP
    FETCH emp_cursor INTO emp_record;
    EXIT WHEN emp_cursor%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(emp_record.employee_id || ' ' || emp_record.salary);
  END LOOP;
  CLOSE emp_cursor;
END;`}
          </pre>
        </div>

        {/* Triggers */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Triggers</h2>
          <p className="text-grey-400 mt-2">
            A trigger is a stored procedure that automatically runs when certain events occur (INSERT, UPDATE, DELETE).
          </p>

          <p className="text-grey-400 mt-4 font-semibold">Example of BEFORE INSERT Trigger:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`CREATE OR REPLACE TRIGGER before_insert_trigger
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
  :NEW.created_at := SYSDATE;
END;`}
          </pre>
        </div>

        {/* Functions */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Functions</h2>
          <p className="text-grey-400 mt-2">
            A function returns a single value and can be used in SQL expressions.
          </p>

          <p className="text-grey-400 mt-4 font-semibold">Example:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`CREATE OR REPLACE FUNCTION get_total_salary (p_id IN NUMBER)
RETURN NUMBER
IS
  total_salary NUMBER(10,2);
BEGIN
  SELECT salary * 12 INTO total_salary
  FROM employees
  WHERE employee_id = p_id;
  RETURN total_salary;
END;`}
          </pre>
        </div>

        {/* Procedures */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Procedures</h2>
          <p className="text-grey-400 mt-2">
            A procedure is a subprogram that performs a specific action but does not return a value like a function.
          </p>

          <p className="text-grey-400 mt-4 font-semibold">Example:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`CREATE OR REPLACE PROCEDURE update_salary(p_id IN NUMBER, increment IN NUMBER)
IS
BEGIN
  UPDATE employees
  SET salary = salary + increment
  WHERE employee_id = p_id;
END;`}
          </pre>
        </div>

        {/* Packages */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Packages</h2>
          <p className="text-grey-400 mt-2">
            A package is a collection of procedures, functions, variables, and cursors grouped together as a single unit.
          </p>

          <p className="text-grey-400 mt-4 font-semibold">Package Specification:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`CREATE OR REPLACE PACKAGE emp_pkg IS
  PROCEDURE raise_salary(emp_id NUMBER, amount NUMBER);
  FUNCTION get_salary(emp_id NUMBER) RETURN NUMBER;
END emp_pkg;`}
          </pre>

          <p className="text-grey-400 mt-4 font-semibold">Package Body:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
{`CREATE OR REPLACE PACKAGE BODY emp_pkg IS
  PROCEDURE raise_salary(emp_id NUMBER, amount NUMBER) IS
  BEGIN
    UPDATE employees
    SET salary = salary + amount
    WHERE employee_id = emp_id;
  END;

  FUNCTION get_salary(emp_id NUMBER) RETURN NUMBER IS
    emp_salary NUMBER;
  BEGIN
    SELECT salary INTO emp_salary
    FROM employees
    WHERE employee_id = emp_id;
    RETURN emp_salary;
  END;
END emp_pkg;`}
          </pre>
        </div>

        {/* Conclusion */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Conclusion</h2>
          <p className="text-grey-400 mt-2">
            PL/SQL empowers database developers to write high-performance, reusable, secure business logic directly inside the database server with the ability to handle errors, improve transaction control, and manage modular coding.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlSqlIntroduction;
