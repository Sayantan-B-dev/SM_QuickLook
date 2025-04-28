import React, { useState } from "react";
import "../../../../CSS/Dbms.css";

function JoinsIntroduction() {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Introduction to Joins</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 What Are Joins?</h2>
          <p>
            A <strong>join</strong> in DBMS is used to combine records from two
            or more tables based on a related column between them. It allows us
            to fetch data that is stored in separate tables and represent it in
            a unified view. Joins are essential for relational databases, as
            they help to reduce data redundancy and maintain data consistency.
          </p>
          <p>
            There are several types of joins, and understanding each is crucial
            to performing complex queries in relational databases.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">Types of Joins:</h2>
          <ul>
            <li>
              1️⃣ <strong>Inner Join</strong>
            </li>
            <li>
              2️⃣ <strong>Left Join (or Left Outer Join)</strong>
            </li>
            <li>
              3️⃣ <strong>Right Join (or Right Outer Join)</strong>
            </li>
            <li>
              4️⃣ <strong>Full Join (or Full Outer Join)</strong>
            </li>
            <li>
              5️⃣ <strong>Cross Join</strong>
            </li>
            <li>
              6️⃣ <strong>Self Join</strong>
            </li>
            <li>
              7️⃣ <strong>Natural Join</strong>
            </li>
            <li>
              8️⃣ <strong>Conditional Join</strong>
            </li>
            <li>
              9️⃣ <strong>Equi Join</strong>
            </li>
          </ul>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Learn More About Each Join Type:</h2>
          <ul>
            <li>
              <a href="#inner-join">Inner Join</a>
            </li>
            <li>
              <a href="#left-join">Left Join</a>
            </li>
            <li>
              <a href="#right-join">Right Join</a>
            </li>
            <li>
              <a href="#full-join">Full Join</a>
            </li>
            <li>
              <a href="#cross-join">Cross Join</a>
            </li>
            <li>
              <a href="#self-join">Self Join</a>
            </li>
            <li>
              <a href="#natural-join">Natural Join</a>
            </li>
            <li>
              <a href="#conditional-join">Conditional Join</a>
            </li>
            <li>
              <a href="#equi-join">Equi Join</a>
            </li>
          </ul>
        </div>
        <img
          src="https://media.datacamp.com/cms/joining-data-in-sql-updated-0425.png"
          alt=""
        />
        <div className="dbms-section">
          <button
            className="dbmsBtn"
            onClick={() =>
              window.open(
                "https://media.datacamp.com/cms/joining-data-in-sql-updated-0425.pdf",
                "blank"
              )
            }
          >
            Learn More About Joins
          </button>
        </div>
      </div>
    </div>
  );
}

function NaturalJoin() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Natural Join</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 What is a Natural Join?</h2>
          <p>
            A <strong>Natural Join</strong> is a type of join that automatically
            joins tables based on all columns with the same name in both tables.
            It eliminates duplicate columns in the result.
          </p>
          <p>
            <strong>Example:</strong> Consider two tables: `Customers` and
            `Orders`. We can perform a natural join on them, assuming both
            tables have a column with the same name, like `CustomerID`.
          </p>
          <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
            <code>
              SELECT *<br />
              FROM Customers
              <br />
              NATURAL JOIN Orders;
            </code>
          </pre>

          <h3 className="dbms-subtitle">📊 Example Table</h3>
          <table className="example-table">
            <thead>
              <tr>
                <th>CustomerID</th>
                <th>Name</th>
                <th>OrderID</th>
                <th>OrderDate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>1001</td>
                <td>2025-04-01</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>1002</td>
                <td>2025-04-02</td>
              </tr>
            </tbody>
          </table>

          <button className="dbmsBtn">Learn More About Natural Joins</button>
        </div>
      </div>
    </div>
  );
}

function EquiJoin() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Equi Join</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 What is an Equi Join?</h2>
          <p>
            An <strong>Equi Join</strong> is a type of join where the condition
            is based on equality between columns of the two tables. This is the
            most common type of join, and it is implemented using the equality
            operator (`=`).
          </p>
          <p>
            <strong>Example:</strong> In an equi join, we can join the
            `Employees` table and the `Departments` table based on matching
            `DeptID`.
          </p>
          <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
            <code>
              SELECT Employees.EmployeeID, Employees.Name, Departments.DeptName
              <br />
              FROM Employees
              <br />
              JOIN Departments ON Employees.DeptID = Departments.DeptID;
            </code>
          </pre>

          <h3 className="dbms-subtitle">📊 Example Table</h3>
          <table className="example-table">
            <thead>
              <tr>
                <th>EmployeeID</th>
                <th>Name</th>
                <th>DeptName</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>HR</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>Finance</td>
              </tr>
            </tbody>
          </table>

          <button className="dbmsBtn">Learn More About Equi Joins</button>
        </div>
      </div>
    </div>
  );
}

function SelfJoin() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Self Join</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 What is a Self Join?</h2>
          <p>
            A <strong>Self Join</strong> is a join where a table is joined with
            itself. It is typically used when we need to compare rows within the
            same table.
          </p>
          <p>
            <strong>Example:</strong> Consider a `Employees` table where each
            employee has a `ManagerID`. To get the names of employees and their
            managers, we can join the table with itself using the `EmployeeID`
            and `ManagerID`.
          </p>
          <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
            <code>
              SELECT E.EmployeeName, M.EmployeeName AS ManagerName
              <br />
              FROM Employees E, Employees M<br />
              WHERE E.ManagerID = M.EmployeeID;
            </code>
          </pre>

          <h3 className="dbms-subtitle">📊 Example Table</h3>
          <table className="example-table">
            <thead>
              <tr>
                <th>EmployeeID</th>
                <th>EmployeeName</th>
                <th>ManagerID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>NULL</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>

          <button className="dbmsBtn">Learn More About Self Joins</button>
        </div>
      </div>
    </div>
  );
}

function ConditionalJoin() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Conditional Join</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 What is a Conditional Join?</h2>
          <p>
            A <strong>Conditional Join</strong> is used when the join condition
            is based on a complex expression or condition, not just an equality
            check. This allows you to perform joins based on specific conditions
            or ranges.
          </p>
          <p>
            <strong>Example:</strong> If we want to get employees who joined
            before a certain date or from a specific department, we can use a
            conditional join.
          </p>
          <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
            <code>
              SELECT Employees.EmployeeID, Employees.Name, Departments.DeptName
              <br />
              FROM Employees
              <br />
              JOIN Departments ON Employees.DeptID = Departments.DeptID
              <br />
              WHERE Employees.JoinDate &lt; '2025-01-01';
            </code>
          </pre>

          <h3 className="dbms-subtitle">📊 Example Table</h3>
          <table className="example-table">
            <thead>
              <tr>
                <th>EmployeeID</th>
                <th>Name</th>
                <th>DeptName</th>
                <th>JoinDate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>HR</td>
                <td>2025-03-15</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>Finance</td>
                <td>2024-05-10</td>
              </tr>
            </tbody>
          </table>

          <button className="dbmsBtn">
            Learn More About Conditional Joins
          </button>
        </div>
      </div>
    </div>
  );
}

function InnerJoin() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Inner Join</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 What is an Inner Join?</h2>
          <p>
            An <strong>Inner Join</strong> returns records that have matching
            values in both tables. If there is no match, the row is excluded
            from the result.
          </p>
          <p>
            <strong>Example:</strong> Suppose we have two tables: `Employees`
            and `Departments`. If we want to get all employees who belong to a
            department, we can perform an inner join.
          </p>
          <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
            <code>
              SELECT Employees.EmployeeID, Employees.Name, Departments.DeptName
              <br />
              FROM Employees
              <br />
              INNER JOIN Departments ON Employees.DeptID = Departments.DeptID;
            </code>
          </pre>

          <h3 className="dbms-subtitle">📊 Example Table</h3>
          <table className="example-table">
            <thead>
              <tr>
                <th>EmployeeID</th>
                <th>Name</th>
                <th>DeptName</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>HR</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>Finance</td>
              </tr>
            </tbody>
          </table>

          <button className="dbmsBtn">Learn More About Inner Joins</button>
        </div>
      </div>
    </div>
  );
}

function LeftJoin() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Left Join</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 What is a Left Join?</h2>
          <p>
            A <strong>Left Join</strong> returns all records from the left table
            (Table A) and the matched records from the right table (Table B). If
            there is no match, the result will contain NULL values for columns
            from the right table.
          </p>
          <p>
            <strong>Example:</strong> Fetching all employees, including those
            who do not belong to any department.
          </p>
          <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
            <code>
              SELECT Employees.EmployeeID, Employees.Name, Departments.DeptName
              <br />
              FROM Employees
              <br />
              LEFT JOIN Departments ON Employees.DeptID = Departments.DeptID;
            </code>
          </pre>

          <h3 className="dbms-subtitle">📊 Example Table</h3>
          <table className="example-table">
            <thead>
              <tr>
                <th>EmployeeID</th>
                <th>Name</th>
                <th>DeptName</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>HR</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>Finance</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Carol</td>
                <td>NULL</td>
              </tr>
            </tbody>
          </table>

          <button className="dbmsBtn">Learn More About Left Joins</button>
        </div>
      </div>
    </div>
  );
}

function RightJoin() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Right Join</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 What is a Right Join?</h2>
          <p>
            A <strong>Right Join</strong> returns all records from the right
            table (Table B) and the matched records from the left table (Table
            A). If there is no match, the result will contain NULL values for
            columns from the left table.
          </p>
          <p>
            <strong>Example:</strong> Fetching all departments, including those
            without any employees.
          </p>
          <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
            <code>
              SELECT Employees.EmployeeID, Employees.Name, Departments.DeptName
              <br />
              FROM Employees
              <br />
              RIGHT JOIN Departments ON Employees.DeptID = Departments.DeptID;
            </code>
          </pre>

          <h3 className="dbms-subtitle">📊 Example Table</h3>
          <table className="example-table">
            <thead>
              <tr>
                <th>EmployeeID</th>
                <th>Name</th>
                <th>DeptName</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>HR</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>Finance</td>
              </tr>
              <tr>
                <td>NULL</td>
                <td>NULL</td>
                <td>Marketing</td>
              </tr>
            </tbody>
          </table>

          <button className="dbmsBtn">Learn More About Right Joins</button>
        </div>
      </div>
    </div>
  );
}

function LeftOuterJoin() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Left Outer Join</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Definition</h2>
          <p>
            A <strong>Left Outer Join</strong> returns all the records from the
            left table (Table A) and the matching records from the right table
            (Table B). If there is no match, NULL values are returned for
            columns from the right table.
          </p>

          <p className="dbms-example">
            💡 Example: A "Customers" table and "Orders" table. Even if a
            customer has no orders, they will still appear in the result, with
            NULL values for the order-related columns.
          </p>

          <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
            <code>
              SELECT Customers.CustomerID, Customers.CustomerName,
              Orders.OrderID FROM Customers LEFT OUTER JOIN Orders ON
              Customers.CustomerID = Orders.CustomerID;
            </code>
          </pre>

          <h3 className="dbms-subtitle">Example Data:</h3>
          <table className="example-table">
            <thead>
              <tr>
                <th>CustomerID</th>
                <th>CustomerName</th>
                <th>OrderID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>101</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>102</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Carol</td>
                <td>NULL</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button className="dbmsBtn">Learn More</button>
      </div>
    </div>
  );
}

function RightOuterJoin() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Right Outer Join</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Definition</h2>
          <p>
            A <strong>Right Outer Join</strong> returns all the records from the
            right table (Table B) and the matching records from the left table
            (Table A). If there is no match, NULL values are returned for
            columns from the left table.
          </p>

          <p className="dbms-example">
            💡 Example: In a "Employees" and "Departments" table, if there are
            departments without any employees, they will still appear in the
            result with NULL values for employee-related columns.
          </p>

          <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
            <code>
              SELECT Employees.EmployeeID, Employees.Name,
              Departments.DepartmentName FROM Employees RIGHT OUTER JOIN
              Departments ON Employees.DepartmentID = Departments.DepartmentID;
            </code>
          </pre>

          <h3 className="dbms-subtitle">Example Data:</h3>
          <table className="example-table">
            <thead>
              <tr>
                <th>EmployeeID</th>
                <th>Name</th>
                <th>DepartmentName</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>HR</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>Finance</td>
              </tr>
              <tr>
                <td>NULL</td>
                <td>NULL</td>
                <td>Marketing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button className="dbmsBtn">Learn More</button>
      </div>
    </div>
  );
}

function FullOuterJoin() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Full Outer Join</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Definition</h2>
          <p>
            A <strong>Full Outer Join</strong> returns all records when there is
            a match in either the left (Table A) or the right table (Table B).
            If there is no match, NULL values are returned for the non-matching
            side.
          </p>

          <p className="dbms-example">
            💡 Example: If there are customers with no orders and orders with no
            customers, both will appear in the result.
          </p>

          <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
            <code>
              SELECT Customers.CustomerID, Customers.CustomerName,
              Orders.OrderID FROM Customers FULL OUTER JOIN Orders ON
              Customers.CustomerID = Orders.CustomerID;
            </code>
          </pre>

          <h3 className="dbms-subtitle">Example Data:</h3>
          <table className="example-table">
            <thead>
              <tr>
                <th>CustomerID</th>
                <th>CustomerName</th>
                <th>OrderID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>101</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>102</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Carol</td>
                <td>NULL</td>
              </tr>
              <tr>
                <td>NULL</td>
                <td>NULL</td>
                <td>103</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button className="dbmsBtn">Learn More</button>
      </div>
    </div>
  );
}

function CrossJoin() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Cross Join</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Definition</h2>
          <p>
            A <strong>Cross Join</strong> produces a Cartesian product of two
            tables. It returns all possible combinations of rows from both
            tables. There is no condition, so the result will be the
            multiplication of the number of rows in both tables.
          </p>

          <p className="dbms-example">
            💡 Example: If one table has 3 rows and another has 4 rows, the
            result will have 12 rows.
          </p>

          <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
            <code>
              SELECT Products.ProductName, Categories.CategoryName FROM Products
              CROSS JOIN Categories;
            </code>
          </pre>

          <h3 className="dbms-subtitle">Example Data:</h3>
          <table className="example-table">
            <thead>
              <tr>
                <th>ProductName</th>
                <th>CategoryName</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shirt</td>
                <td>Clothing</td>
              </tr>
              <tr>
                <td>Jeans</td>
                <td>Clothing</td>
              </tr>
              <tr>
                <td>Laptop</td>
                <td>Electronics</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>Electronics</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button className="dbmsBtn">Learn More</button>
      </div>
    </div>
  );
}

export {
  JoinsIntroduction,
  NaturalJoin,
  EquiJoin,
  SelfJoin,
  ConditionalJoin,
  InnerJoin,
  LeftJoin,
  RightJoin,
  LeftOuterJoin,
  RightOuterJoin,
  FullOuterJoin,
  CrossJoin,
};
