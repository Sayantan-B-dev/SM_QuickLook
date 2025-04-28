import React from "react";

function PLsqlAndTransactions() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">💻 PL/SQL, Functions, Procedures, Triggers, and Transactions</h1>

        {/* PL/SQL Overview */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 What is PL/SQL?</h2>
          <p>
            <strong>PL/SQL</strong> (Procedural Language for SQL) is Oracle's procedural extension to SQL. It is used to write programs (functions, procedures, triggers, etc.) that can execute SQL statements in a procedural manner, making it possible to handle complex operations on databases.
            PL/SQL allows for the creation of complex logic, exception handling, and more structured querying of the database.
          </p>
        </div>

        {/* Functions */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔧 Functions in PL/SQL</h2>
          <p>
            A <strong>function</strong> in PL/SQL is a named block of code that can return a single value. Functions are often used to encapsulate commonly used calculations or logic that can be reused throughout your database operations.
          </p>
          <ul>
            <li>
              <strong>Syntax:</strong>
              <pre>
{`CREATE OR REPLACE FUNCTION function_name (parameter_list) 
RETURN data_type IS
BEGIN
    -- code here
    RETURN value;
END;`}
              </pre>
            </li>
            <li>
              <strong>Example:</strong>
              <pre>
{`CREATE OR REPLACE FUNCTION get_salary(employee_id IN NUMBER) 
RETURN NUMBER IS
    salary NUMBER;
BEGIN
    SELECT salary INTO salary FROM employees WHERE employee_id = employee_id;
    RETURN salary;
END;`}
              </pre>
              This function takes an employee ID as input and returns the corresponding salary.
            </li>
          </ul>
        </div>

        {/* Procedures */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">⚙️ Procedures in PL/SQL</h2>
          <p>
            A <strong>procedure</strong> is a named block of PL/SQL code that performs a specific task. Procedures do not return values but can accept parameters to perform actions such as updating or deleting rows from a table.
          </p>
          <ul>
            <li>
              <strong>Syntax:</strong>
              <pre>
{`CREATE OR REPLACE PROCEDURE procedure_name (parameter_list) IS
BEGIN
    -- code here
END;`}
              </pre>
            </li>
            <li>
              <strong>Example:</strong>
              <pre>
{`CREATE OR REPLACE PROCEDURE update_salary(employee_id IN NUMBER, new_salary IN NUMBER) IS
BEGIN
    UPDATE employees SET salary = new_salary WHERE employee_id = employee_id;
END;`}
              </pre>
              This procedure takes an employee ID and a new salary as input and updates the corresponding employee's salary.
            </li>
          </ul>
        </div>

        {/* Triggers */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔔 Triggers in PL/SQL</h2>
          <p>
            A <strong>trigger</strong> is a stored procedure that is automatically executed or "triggered" when a specific event occurs in the database, such as an insert, update, or delete operation on a table.
          </p>
          <ul>
            <li>
              <strong>Syntax:</strong>
              <pre>
{`CREATE OR REPLACE TRIGGER trigger_name
BEFORE INSERT ON table_name
FOR EACH ROW
BEGIN
    -- trigger code here
END;`}
              </pre>
            </li>
            <li>
              <strong>Example:</strong>
              <pre>
{`CREATE OR REPLACE TRIGGER employee_salary_check
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    IF :new.salary < 1000 THEN
    RAISE_APPLICATION_ERROR(-20001, 'Salary cannot be less than 1000');
    END IF;
END;`}
              </pre>
              This trigger checks if the salary is less than 1000 before an employee is inserted into the `employees` table and raises an error if the condition is met.
            </li>
          </ul>
        </div>

        {/* Cursors */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔄 Cursors in PL/SQL</h2>
          <p>
            A <strong>cursor</strong> in PL/SQL is a pointer to a context area that stores information about a SQL statement's execution. Cursors are used to process individual rows returned by a query. There are two types of cursors: 
            <strong>Implicit</strong> and <strong>Explicit</strong> cursors.
          </p>
          <ul>
            <li>
              <strong>Implicit Cursor:</strong> Automatically created by Oracle when an SQL statement is executed.
              <br />
              <strong>Example:</strong> When performing a SELECT query in PL/SQL, an implicit cursor is used to fetch results.
            </li>
            <li>
              <strong>Explicit Cursor:</strong> Defined by the programmer when a SELECT statement is executed within PL/SQL.
              <br />
              <strong>Syntax:</strong>
              <pre>
{`DECLARE
    CURSOR cursor_name IS
    SELECT column1, column2 FROM table_name;
BEGIN
    OPEN cursor_name;
    FETCH cursor_name INTO var1, var2;
    CLOSE cursor_name;
END;`}
              </pre>
              <strong>Example:</strong>
              <pre>
{`DECLARE
    CURSOR emp_cursor IS
    SELECT name FROM employees;
    employee_name employees.name%TYPE;
BEGIN
    OPEN emp_cursor;
    FETCH emp_cursor INTO employee_name;
    DBMS_OUTPUT.PUT_LINE(employee_name);
    CLOSE emp_cursor;`}
                END;
              </pre>
              This code declares a cursor to fetch employee names and prints them.
            </li>
          </ul>
        </div>

        {/* Transaction Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">💼 Transactions in PL/SQL</h2>
          <p>
            A <strong>transaction</strong> is a sequence of one or more SQL operations treated as a single unit of work. The goal of a transaction is to ensure data integrity by making sure all operations in the transaction succeed or none of them are executed (rollback).
          </p>
          <ul>
            <li>
              <strong>Transactions involve 4 key properties (ACID):</strong>
              <ul>
                <li><strong>Atomicity:</strong> All operations are completed; if one fails, all fail.</li>
                <li><strong>Consistency:</strong> The database transitions from one consistent state to another.</li>
                <li><strong>Isolation:</strong> Changes made by one transaction are not visible to others until the transaction is committed.</li>
                <li><strong>Durability:</strong> Once committed, changes are permanent, even in case of a system failure.</li>
              </ul>
            </li>
            <li>
              <strong>Syntax for a Transaction:</strong>
              <pre>
{`BEGIN
    -- SQL statements
    COMMIT;  -- commits the transaction
    ROLLBACK;  -- rolls back the transaction in case of failure
END;`}
              </pre>
            </li>
          </ul>
        </div>

        {/* Transaction Concurrency */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔄 Transaction Concurrency</h2>
          <p>
            <strong>Transaction Concurrency</strong> refers to the ability of the database to manage multiple transactions occurring simultaneously while maintaining the integrity and isolation of each transaction. In a multi-user environment, concurrency controls ensure that transactions don't interfere with each other, leading to consistency.
          </p>
          <ul>
            <li>
              <strong>Concurrency Control Techniques:</strong>
              <ul>
                <li><strong>Locking:</strong> Prevents other transactions from accessing data that is being modified.</li>
                <li><strong>Timestamp Ordering:</strong> Ensures transactions are processed in the order of their timestamps.</li>
                <li><strong>Optimistic Concurrency Control:</strong> Transactions execute without locking resources but check for conflicts before committing.</li>
              </ul>
            </li>
            <li>
              <strong>Example of Transaction Concurrency:</strong>
              <pre>
{`BEGIN
    -- Transaction 1
    UPDATE account SET balance = balance - 500 WHERE account_id = 1;
    COMMIT;
END;`}
              </pre>
              <pre>
{`BEGIN
    -- Transaction 2
    UPDATE account SET balance = balance + 500 WHERE account_id = 2;
    COMMIT;
END;`}
              </pre>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PLsqlAndTransactions;
