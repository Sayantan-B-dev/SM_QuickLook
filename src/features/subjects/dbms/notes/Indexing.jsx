import React from "react";

function Indexing() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">📚 Indexing in DBMS</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔍 Introduction to Indexing</h2>
          <p>
            Indexing is a technique used in databases to speed up the retrieval of rows from a table. An index is a data structure that allows the database to locate data efficiently. It works similarly to an index in a book, where you can quickly find the page number for a specific topic. Indexes help in optimizing SELECT queries but may slow down INSERT, UPDATE, and DELETE operations.
          </p>
          <p>
            In this section, we'll cover different types of indexes, including primary, clustered, secondary, and key/non-key indexes. We'll also explore numerical examples of index cost and how indexing impacts performance.
          </p>
        </div>

        {/* Types of Indexes */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📊 Types of Indexes</h2>
          <p>
            There are different types of indexes, each serving different purposes. The main types include:
          </p>
          <ul>
            <li>
              <strong>Primary Index</strong>: An index created on the primary key of a table. It uniquely identifies each record in the table.
            </li>
            <li>
              <strong>Clustered Index</strong>: The data rows in the table are stored in the same order as the clustered index. Each table can have only one clustered index.
            </li>
            <li>
              <strong>Secondary Index</strong>: An index that provides a way to quickly search non-primary key columns. A table can have multiple secondary indexes.
            </li>
            <li>
              <strong>Key Index</strong>: An index created on the key columns of a table. It can be either a primary or secondary index.
            </li>
            <li>
              <strong>Non-Key Index</strong>: An index created on non-key columns to improve query performance when the query searches those columns.
            </li>
          </ul>
        </div>

        {/* Primary Index and Clustered Index */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔑 Primary and Clustered Indexes</h2>
          <p>
            The <strong>primary index</strong> is created on the primary key column, which uniquely identifies each row in a table. It is usually implemented as a clustered index. A <strong>clustered index</strong> determines the physical order of data in the table, which means that the data rows are sorted in the same order as the index.
          </p>
          <h3>Example of Primary and Clustered Index:</h3>
          <pre>
{`Table: Employee
+------------+----------+
| Emp_ID     | Name     |
+------------+----------+
| 101        | Alice    |
| 102        | Bob      |
| 103        | Charlie  |
+------------+----------+
Primary Index: Emp_ID (Clustered Index)
`}
          </pre>
          <p>
            Here, the primary key is Emp_ID, and the clustered index will arrange the data in ascending order based on the Emp_ID. Since the data is physically stored in this order, the primary index is also clustered.
          </p>
        </div>

        {/* Secondary Index */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔍 Secondary Index</h2>
          <p>
            A <strong>secondary index</strong> is used to create an index on columns that are not the primary key. Secondary indexes are helpful when you need to frequently query non-key columns. Unlike primary indexes, secondary indexes do not affect the physical storage of the data in the table.
          </p>
          <h3>Example of Secondary Index:</h3>
          <pre>
{`Table: Employee
+------------+----------+---------+
| Emp_ID     | Name     | Dept_ID |
+------------+----------+---------+
| 101        | Alice    | 10      |
| 102        | Bob      | 20      |
| 103        | Charlie  | 10      |
+------------+----------+---------+
Secondary Index: Dept_ID (Non-clustered)
`}
          </pre>
          <p>
            In this example, a secondary index is created on the Dept_ID column to improve query performance when searching employees by department. The secondary index is non-clustered, meaning the data is not physically stored in the order of the index.
          </p>
        </div>

        {/* Numerical Example of Index Cost */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">💰 Numerical Example of Index Cost</h2>
          <p>
            The cost of an index is typically measured in terms of the number of disk I/O operations required to fetch data. Let's consider a table of 1 million rows and examine the cost of a query with and without an index.
          </p>
          <h3>Example: Index Cost Calculation</h3>
          <pre>
{`Without Index:
- For a full table scan, the cost will be proportional to the number of rows, which is 1 million rows.
- Cost = 1 million I/O operations.

With Index (assuming a B-Tree index):
- For a query on an indexed column, the cost is proportional to the height of the B-Tree, which is logarithmic.
- Cost = log2(1 million) = 20 I/O operations.
`}
          </pre>
          <p>
            As we can see, the index significantly reduces the number of I/O operations required to fetch the data, improving query performance.
          </p>
        </div>

        {/* Diagram for Indexing */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📊 Diagram of Indexing</h2>
          <p>
            Below is a simple diagram illustrating how indexing works in a B-Tree structure. The B-Tree index helps reduce the time complexity of searching for records.
          </p>
          <pre>
            {`
              B-Tree Index (Dept_ID)
                Root
               |   |
             10     20
            |  |   |  |
           1   5  15  25
            `}
          </pre>
          <p>
            In this B-Tree index, the values on the left branch correspond to records with Dept_ID 10, and those on the right correspond to Dept_ID 20. This structure allows fast access to data based on the index value.
          </p>
        </div>

        {/* Key vs Non-Key Index */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🗝 Key vs Non-Key Index</h2>
          <p>
            A <strong>key index</strong> is an index that is created on a key column (either primary or unique). A <strong>non-key index</strong> is created on a non-key column to improve query performance on columns that are not part of the key.
          </p>
          <h3>Example:</h3>
          <pre>
{`Table: Employee
+------------+----------+---------+
| Emp_ID     | Name     | Dept_ID |
+------------+----------+---------+
| 101        | Alice    | 10      |
| 102        | Bob      | 20      |
+------------+----------+---------+

Key Index: Emp_ID (Primary key)
Non-Key Index: Dept_ID (Secondary index)
`}
          </pre>
          <p>
            In this example, the Emp_ID is indexed as a key index (primary key), while the Dept_ID is indexed as a non-key index to facilitate fast searches by department.
          </p>
        </div>

        {/* Conclusion */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 Conclusion</h2>
          <p>
            Indexing plays a vital role in optimizing query performance in databases. The choice of index type, whether primary, clustered, secondary, key, or non-key, depends on the specific needs of the database and the queries it serves. Understanding how indexing impacts query performance is essential for building efficient database systems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Indexing;
