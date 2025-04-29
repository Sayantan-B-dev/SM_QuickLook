import React from 'react'
import '../../../../CSS/Dbms.css'

function DBMSObjects() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">DBMS Objects: Tables, Views, Sequences, Indexes, Synonyms, and Views Types</h1>

        {/* Tables Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Tables</h2>
          <p className="dbms-example">
            A table is the most basic and fundamental object in a relational database. It consists of rows and columns, where each row is a record and each column represents a field in the record.
            Tables store data in a structured format.
          </p>

          <ul>
            <li>
              <strong>Example:</strong> <code>CREATE TABLE</code> statement is used to create a table.
              <p className="dbms-example">
                <pre>
{`CREATE TABLE employees (
employee_id INT PRIMARY KEY,
employee_name VARCHAR(100),
hire_date DATE
);`}
                </pre>
              </p>
            </li>
          </ul>
        </div>

        {/* Views Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Views</h2>
          <p className="dbms-example">
            A view is a virtual table based on the result of a query. Views do not store data but display data from one or more tables. Views can simplify complex queries and improve security by restricting data access.
          </p>

          <ul>
            <li>
              <strong>Types of Views:</strong>
              <ul>
                <li><strong>Conceptual View:</strong> Represents the logical view of the data, independent of the physical storage. It focuses on what data is stored in the database.</li>
                <li><strong>Internal View:</strong> Represents how data is stored in the database, including indexing, storage formats, etc. This is related to the physical storage of the data.</li>
                <li><strong>External View:</strong> Represents the way data is presented to the user or applications. It provides different perspectives of the same data depending on the needs.</li>
              </ul>
            </li>
            <li>
              <strong>Example:</strong> <code>CREATE VIEW</code> statement is used to create a view.
              <p className="dbms-example">
                <pre>
{`CREATE VIEW employee_view AS
SELECT employee_name, hire_date FROM employees WHERE hire_date > '2020-01-01';`}
                </pre>
              </p>
            </li>
          </ul>
        </div>

        {/* Sequences Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Sequences</h2>
          <p className="dbms-example">
            A sequence is a database object used to generate unique numbers, often used for generating primary key values automatically. Sequences can be incremented by a specific value, and the current value is maintained in the database.
          </p>

          <ul>
            <li>
              <strong>Example:</strong> <code>CREATE SEQUENCE</code> is used to create a sequence.
              <p className="dbms-example">
                <pre>
{`CREATE SEQUENCE emp_seq
START WITH 1
INCREMENT BY 1;`}
                </pre>
              </p>
            </li>
          </ul>
        </div>

        {/* Indexes Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Indexes</h2>
          <p className="dbms-example">
            An index is an object that helps to speed up the retrieval of data from a table by providing quick access paths to the data. Indexes are created on columns that are frequently used in query conditions.
          </p>

          <ul>
            <li>
              <strong>Example:</strong> <code>CREATE INDEX</code> is used to create an index.
              <p className="dbms-example">
                <pre>
{`CREATE INDEX idx_employee_name
ON employees (employee_name);`}
                </pre>
              </p>
            </li>
          </ul>
        </div>

        {/* Synonyms Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Synonyms</h2>
          <p className="dbms-example">
            A synonym is an alias for a database object such as a table, view, or sequence. Synonyms can be used to simplify the query syntax or to provide an alternative name for an object.
          </p>

          <ul>
            <li>
              <strong>Example:</strong> <code>CREATE SYNONYM</code> is used to create a synonym.
              <p className="dbms-example">
                <pre>
{`CREATE SYNONYM emp_alias FOR employees;`}
                </pre>
              </p>
            </li>
          </ul>
        </div>

        {/* Views: Conceptual, Internal, Physical, External Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">View Types in DBMS</h2>
          <p className="dbms-example">
            Views in DBMS can be categorized into the following types based on the layer of abstraction:
          </p>

          <ul>
            <li>
              <strong>Conceptual View:</strong>
              <p>This view describes the logical structure of the database, independent of how data is physically stored. It represents the entire database as a set of tables, relationships, and constraints.</p>
              <p className="dbms-example">
                <pre>
{`Conceptual View Example: 
A conceptual view might represent the organization of tables like Customers, Orders, and Products in an e-commerce system.`}
                </pre>
              </p>
            </li>
            <li>
              <strong>Internal View:</strong>
              <p>This view describes how data is stored in the database, including physical storage, indexing methods, and other performance optimizations. The internal view is concerned with the details of data storage.</p>
              <p className="dbms-example">
                <pre>
{`Internal View Example: 
The internal view would describe how data for customers and orders is stored on disk, perhaps using B-trees for indexing.`}
                </pre>
              </p>
            </li>
            <li>
              <strong>External View:</strong>
              <p>This view represents the user’s perspective of the data. Different users or applications may have different external views of the same data, tailored to their needs.</p>
              <p className="dbms-example">
                <pre>
{`External View Example: 
A customer might only see their personal information, while an administrator sees all customer data.`}
                </pre>
              </p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default DBMSObjects
