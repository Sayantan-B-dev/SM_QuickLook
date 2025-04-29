import React from 'react';
import '../../../../CSS/Dbms.css';

function TypesOfDatabaseLanguages() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Types of Database Languages</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <p className="text-grey-400">
            Database languages are used to interact with and manage data stored in a database. They help in defining, manipulating, and retrieving the database structure and its data. Broadly, database languages can be classified based on the type of database model they interact with: <strong>SQL, NoSQL, and NewSQL</strong>.
          </p>
        </div>

        {/* SQL */}
        <div className="dbms-section mt-6">
          <h2 className="dbms-subtitle">1. SQL (Structured Query Language)</h2>
          <p className="text-grey-400">
            SQL is the standard language used for managing and manipulating relational databases (RDBMS) such as MySQL, PostgreSQL, Oracle, and SQL Server.
          </p>
          <p className="text-grey-400 mt-2">
            <strong>Key Features:</strong>
          </p>
          <ul className="text-grey-400 list-disc pl-5 mt-1">
            <li>Based on table structure with rows and columns</li>
            <li>Supports ACID properties (Atomicity, Consistency, Isolation, Durability)</li>
            <li>Uses schema-defined structure (strict schema)</li>
            <li>Supports complex queries with JOINs, nested queries, etc.</li>
          </ul>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`SELECT * FROM Employees WHERE Salary > 50000;`}
          </pre>
        </div>

        {/* NoSQL */}
        <div className="dbms-section mt-6">
          <h2 className="dbms-subtitle">2. NoSQL (Not Only SQL)</h2>
          <p className="text-grey-400">
            NoSQL refers to a variety of database technologies designed for flexible, scalable storage and retrieval of data, often without strict schema definitions. Popular NoSQL databases include MongoDB, Cassandra, Redis, and CouchDB.
          </p>
          <p className="text-grey-400 mt-2">
            <strong>Key Features:</strong>
          </p>
          <ul className="text-grey-400 list-disc pl-5 mt-1">
            <li>Schema-less design (flexible data model)</li>
            <li>High scalability and performance for big data and real-time applications</li>
            <li>Can handle unstructured, semi-structured, and structured data</li>
            <li>Types: Document stores, Key-Value stores, Column stores, Graph databases</li>
          </ul>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`// MongoDB Example
db.Employees.find({ Salary: { $gt: 50000 } });`}
          </pre>
        </div>

        {/* NewSQL */}
        <div className="dbms-section mt-6">
          <h2 className="dbms-subtitle">3. NewSQL</h2>
          <p className="text-grey-400">
            NewSQL is a new class of databases that provide the scalability benefits of NoSQL systems while still maintaining the ACID guarantees of traditional relational databases. Examples include Google Spanner, VoltDB, and NuoDB.
          </p>
          <p className="text-grey-400 mt-2">
            <strong>Key Features:</strong>
          </p>
          <ul className="text-grey-400 list-disc pl-5 mt-1">
            <li>Relational database structure (tables, rows, columns)</li>
            <li>Support for SQL queries</li>
            <li>High scalability like NoSQL databases</li>
            <li>Guarantees ACID properties</li>
          </ul>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`SELECT COUNT(*) FROM Orders WHERE Status = 'Pending';`}
          </pre>
        </div>

        {/* Summary */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">Summary</h2>
          <ul className="text-grey-400 list-disc pl-5">
            <li><strong>SQL</strong> – Structured, relational, strict schema</li>
            <li><strong>NoSQL</strong> – Flexible, non-relational, scalable</li>
            <li><strong>NewSQL</strong> – Relational with high scalability and performance</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default TypesOfDatabaseLanguages;
