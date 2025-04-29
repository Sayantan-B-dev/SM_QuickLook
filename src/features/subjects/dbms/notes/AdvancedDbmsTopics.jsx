import React from "react";
import "../../../../CSS/Dbms.css";

/* ====== 1. Hadoop Introduction ====== */
function HadoopIntroduction() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Introduction to Hadoop</h1>
        <div className="dbms-section">
          <p className="dbms-text">
            <strong>What is Hadoop?</strong> <br />
            - Open-source framework for storing and processing Big Data.<br />
            - Works on distributed storage and parallel processing.<br />
            - Designed for horizontal scaling using cheap commodity hardware.
          </p>

          <p className="dbms-text">
            <strong>Main Units of Hadoop:</strong>
          </p>
          <ul className="dbms-points">
            <li><strong>HDFS (Hadoop Distributed File System):</strong> Storage layer that stores data across multiple nodes.</li>
            <li><strong>YARN (Yet Another Resource Negotiator):</strong> Manages computing resources.</li>
            <li><strong>MapReduce:</strong> Programming model for processing large datasets.</li>
            <li><strong>Hadoop Common:</strong> Set of shared utilities and libraries.</li>
          </ul>

          <p className="dbms-text">
            <strong>How Hadoop Works:</strong>
          </p>
          <ol className="dbms-points">
            <li>Splits large files into blocks.</li>
            <li>Distributes blocks across cluster nodes.</li>
            <li>Processes blocks in parallel using MapReduce jobs.</li>
          </ol>

          <p className="dbms-text">
            <strong>Example:</strong> A 1GB file might be split into 64MB blocks and stored across 16 nodes.
          </p>

          <p className="dbms-text">
            <strong>Advantages:</strong>
          </p>
          <ul className="dbms-points">
            <li>Fault-tolerant (replicates data).</li>
            <li>Scalable (add more nodes).</li>
            <li>Cost-effective (uses inexpensive hardware).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ====== 2. Big Data vs Small Data ====== */
function BigDataVsSmallData() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Big Data vs Small Data</h1>
        <div className="dbms-section">
          <table className="example-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Big Data</th>
                <th>Small Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Size</td>
                <td>Terabytes, Petabytes, Exabytes</td>
                <td>Megabytes, Gigabytes</td>
              </tr>
              <tr>
                <td>Tools</td>
                <td>Hadoop, Spark, NoSQL Databases</td>
                <td>Traditional Databases (SQL)</td>
              </tr>
              <tr>
                <td>Structure</td>
                <td>Often unstructured/semi-structured</td>
                <td>Mostly structured</td>
              </tr>
              <tr>
                <td>Processing</td>
                <td>Distributed Computing</td>
                <td>Single Server</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>Distributed (HDFS, Cloud)</td>
                <td>Local storage/server</td>
              </tr>
              <tr>
                <td>Examples</td>
                <td>Social media, IoT sensors</td>
                <td>Company payroll, inventory list</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ====== 3. Simple vs Complex vs Materialized Views ====== */
function ViewsComparison() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Simple View vs Complex View vs Materialized View</h1>
        <div className="dbms-section">
          <table className="example-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Simple View</th>
                <th>Complex View</th>
                <th>Materialized View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Based On</td>
                <td>Single table</td>
                <td>Multiple tables</td>
                <td>Physical copy of data</td>
              </tr>
              <tr>
                <td>Updatable</td>
                <td>Yes</td>
                <td>No (generally)</td>
                <td>No (unless refreshed)</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>No storage (virtual only)</td>
                <td>No storage (virtual only)</td>
                <td>Stored on disk</td>
              </tr>
              <tr>
                <td>Use Case</td>
                <td>Basic access control</td>
                <td>Joins, calculations</td>
                <td>Performance optimization</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ====== 4. Foreign Key with Delete Behavior ====== */
function ForeignKeyDeleteBehavior() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Foreign Key Delete Behavior</h1>
        <div className="dbms-section">
          <ul className="dbms-points">
            <li><strong>ON DELETE CASCADE:</strong> Deletes child records automatically when parent is deleted.</li>
            <li><strong>ON DELETE SET NULL:</strong> Sets foreign key value to NULL if parent is deleted.</li>
            <li><strong>ON DELETE RESTRICT / NO ACTION:</strong> Prevents deletion if there are related child records.</li>
          </ul>

          <p className="dbms-text"><strong>Example:</strong></p>
          <pre>{`CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  CustomerID INT,
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
  ON DELETE CASCADE
);`}</pre>
        </div>
      </div>
    </div>
  );
}

/* ====== 5. Procedures in PL/SQL ====== */
function ProceduresInPLSQL() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Procedures in PL/SQL</h1>
        <div className="dbms-section">
          <p className="dbms-text"><strong>What is a Procedure?</strong></p>
          <ul className="dbms-points">
            <li>A named block of code that can be executed repeatedly.</li>
            <li>Used to perform operations like INSERT, UPDATE, DELETE.</li>
          </ul>

          <p className="dbms-text"><strong>Local Procedure:</strong> Declared inside an anonymous block. Limited to that block.</p>
          <p className="dbms-text"><strong>Stored Procedure:</strong> Stored permanently in the database. Invoked by applications.</p>

          <p className="dbms-text"><strong>Example Stored Procedure:</strong></p>
          <pre>{`CREATE OR REPLACE PROCEDURE AddEmployee
(empName IN VARCHAR2, empSalary IN NUMBER) AS
BEGIN
  INSERT INTO Employees (Name, Salary) VALUES (empName, empSalary);
END;`}</pre>

          <p className="dbms-text"><strong>Calling the Procedure:</strong></p>
          <pre>{`EXEC AddEmployee('John Doe', 50000);`}</pre>
        </div>
      </div>
    </div>
  );
}

/* ====== 6. Fetch Date from DBMS using PL/SQL ====== */
function FetchDatePLSQL() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Fetch Date using PL/SQL</h1>
        <div className="dbms-section">
          <pre>{`DECLARE
  v_date DATE;
BEGIN
  SELECT SYSDATE INTO v_date FROM DUAL;
  DBMS_OUTPUT.PUT_LINE('Today''s Date: ' || v_date);
END;`}</pre>
        </div>
      </div>
    </div>
  );
}

/* ====== 7. Cursor in PL/SQL (Implicit, Explicit, Attributes) ====== */
function CursorInPLSQL() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Cursor in PL/SQL</h1>
        <div className="dbms-section">
          <p className="dbms-text"><strong>What is a Cursor?</strong> A pointer that allows row-by-row processing of result sets.</p>

          <p className="dbms-text"><strong>Types:</strong></p>
          <ul className="dbms-points">
            <li><strong>Implicit Cursor:</strong> Handled automatically by Oracle for single SELECT INTO statements.</li>
            <li><strong>Explicit Cursor:</strong> Declared manually using OPEN, FETCH, CLOSE.</li>
          </ul>

          <p className="dbms-text"><strong>Cursor Attributes:</strong></p>
          <ul className="dbms-points">
            <li><code>%FOUND</code>: Returns TRUE if row was fetched.</li>
            <li><code>%NOTFOUND</code>: TRUE if no row fetched.</li>
            <li><code>%ROWCOUNT</code>: Number of rows fetched so far.</li>
            <li><code>%ISOPEN</code>: TRUE if cursor is open.</li>
          </ul>

          <p className="dbms-text"><strong>Implicit Cursor Example:</strong></p>
          <pre>{`DECLARE
  v_name Employees.Name%TYPE;
BEGIN
  SELECT Name INTO v_name FROM Employees WHERE EmployeeID = 1;
  DBMS_OUTPUT.PUT_LINE('Employee Name: ' || v_name);
END;`}</pre>

          <p className="dbms-text"><strong>Explicit Cursor Example:</strong></p>
          <pre>{`DECLARE
  CURSOR emp_cursor IS
    SELECT Name FROM Employees;
  v_name Employees.Name%TYPE;
BEGIN
  OPEN emp_cursor;
  LOOP
    FETCH emp_cursor INTO v_name;
    EXIT WHEN emp_cursor%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE('Employee: ' || v_name);
  END LOOP;
  CLOSE emp_cursor;
END;`}</pre>

          <p className="dbms-text"><strong>Note:</strong> %TYPE helps in defining variables based on column types dynamically.</p>
        </div>
      </div>
    </div>
  );
}

function WeakEntityExplanation() {
    return (
      <div className="dbms-wrapper">
        <div className="dbms-card">
          <h1 className="dbms-title">Weak Entity in DBMS</h1>
          <div className="dbms-section">
            <p className="dbms-text"><strong>What is a Weak Entity?</strong></p>
            <ul className="dbms-points">
              <li>A weak entity does not have a primary key of its own.</li>
              <li>It depends on a "strong" or "owner" entity for identification.</li>
              <li>It always exists in the context of its owner entity.</li>
            </ul>
  
            <p className="dbms-text"><strong>Example:</strong> Consider an `Order` entity that depends on the `Customer` entity.</p>
            <pre>{`CREATE TABLE Order (
    OrderID INT,
    CustomerID INT,
    OrderDate DATE,
    PRIMARY KEY (OrderID, CustomerID),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
  );`}</pre>
  
            <p className="dbms-text"><strong>Where it works:</strong></p>
            <ul className="dbms-points">
              <li>Used in scenarios where an entity cannot exist without its parent entity.</li>
              <li>Example: In a database of a library system, a `Loan` entity may be considered a weak entity because it depends on the `Book` entity.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  function RenameOperatorInRelationalAlgebra() {
    return (
      <div className="dbms-wrapper">
        <div className="dbms-card">
          <h1 className="dbms-title">Rename Operator in Relational Algebra</h1>
          <div className="dbms-section">
            <p className="dbms-text"><strong>What is the Rename Operator?</strong></p>
            <ul className="dbms-points">
              <li>The Rename operator is used to change the names of attributes or relations in relational algebra.</li>
              <li>It is denoted by the Greek letter ρ (rho).</li>
              <li>Used to avoid ambiguity when selecting or joining tables with same attribute names.</li>
            </ul>
  
            <p className="dbms-text"><strong>Syntax:</strong></p>
            <pre>{`ρ(NewTableName, OldTableName)`}</pre>
  
            <p className="dbms-text"><strong>Example:</strong></p>
            <pre>{`ρ(EmployeeDetails, Employee)`}</pre>
  
            <p className="dbms-text"><strong>Use case:</strong> Renaming attributes for easier querying.</p>
          </div>
        </div>
      </div>
    );
  }

  function NonCorrelatedSubquery() {
    return (
      <div className="dbms-wrapper">
        <div className="dbms-card">
          <h1 className="dbms-title">Non-Correlated Subquery in SQL</h1>
          <div className="dbms-section">
            <p className="dbms-text"><strong>What is a Non-Correlated Subquery?</strong></p>
            <ul className="dbms-points">
              <li>A non-correlated subquery is a query that can be run independently of the outer query.</li>
              <li>The inner query does not reference any columns from the outer query.</li>
              <li>It is executed once for the entire outer query.</li>
            </ul>
  
            <p className="dbms-text"><strong>Example:</strong></p>
            <pre>{`SELECT EmployeeID, Name
  FROM Employees
  WHERE DepartmentID = (SELECT DepartmentID FROM Departments WHERE Name = 'IT');`}</pre>
  
            <p className="dbms-text"><strong>Explanation:</strong> The subquery in the WHERE clause retrieves the DepartmentID of 'IT', and the outer query uses it to filter employees.</p>
          </div>
        </div>
      </div>
    );
  }
  
  function SqlOperators() {
    return (
      <div className="dbms-wrapper">
        <div className="dbms-card">
          <h1 className="dbms-title">SQL Operators: =, &lt;&gt;, IN, = ANY, &lt;&gt; ALL</h1>
          <div className="dbms-section">
            <p className="dbms-text"><strong>What are SQL Operators?</strong></p>
            <ul className="dbms-points">
              <li><strong>=:</strong> Used to compare equality between two values.</li>
              <li><strong>&lt;&gt;:</strong> Represents the "not equal" comparison.</li>
              <li><strong>IN:</strong> Used to check if a value matches any value in a list or subquery.</li>
              <li><strong>= ANY:</strong> Checks if a value is equal to any value in a list or subquery.</li>
              <li><strong>&lt;&gt; ALL:</strong> Checks if a value is not equal to all values in a list or subquery.</li>
            </ul>
  
            <p className="dbms-text"><strong>Examples:</strong></p>
  
            <pre>{`-- 1. Using '=' operator:
  SELECT * FROM Employees WHERE DepartmentID = 2;
  
  -- 2. Using '<>' operator:
  SELECT * FROM Employees WHERE Salary <> 50000;
  
  -- 3. Using 'IN' operator:
  SELECT * FROM Employees WHERE DepartmentID IN (1, 2, 3);
  
  -- 4. Using '= ANY' operator:
  SELECT * FROM Employees WHERE Salary = ANY (SELECT Salary FROM Employees WHERE DepartmentID = 2);
  
  -- 5. Using '<> ALL' operator:
  SELECT * FROM Employees WHERE Salary <> ALL (SELECT Salary FROM Employees WHERE DepartmentID = 2);`}</pre>
  
            <p className="dbms-text"><strong>Use case:</strong> These operators are used in WHERE clauses to filter data based on conditions.</p>
          </div>
        </div>
      </div>
    );
  }
  

/* Exporting all functions together */
export {
  HadoopIntroduction,
  BigDataVsSmallData,
  ViewsComparison,
  ForeignKeyDeleteBehavior,
  ProceduresInPLSQL,
  FetchDatePLSQL,
  CursorInPLSQL,
    WeakEntityExplanation,
    RenameOperatorInRelationalAlgebra,
    NonCorrelatedSubquery,
    SqlOperators,
};
