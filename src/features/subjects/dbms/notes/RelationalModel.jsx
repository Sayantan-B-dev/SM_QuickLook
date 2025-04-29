import React from 'react';
import '../../../../CSS/Dbms.css';

function RelationalModel() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">

        <h1 className="dbms-title">Relational Model: Basic Concepts, Attributes, and Domains</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <p className="text-grey-400">
            The <strong>Relational Model</strong> is the most widely used data model for designing databases. Proposed by <strong>E.F. Codd</strong> in 1970, it organizes data into structured tables (called relations) consisting of rows and columns.
          </p>
        </div>

        {/* Basic Concepts */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">1. Basic Concepts</h2>

          <p className="text-grey-400 mt-2">
            A <strong>relation</strong> is a table with columns and rows:
          </p>
          <ul className="list-disc text-grey-400 pl-5 mt-2">
            <li><strong>Relation:</strong> A table consisting of rows and columns.</li>
            <li><strong>Tuple:</strong> A single row in a table.</li>
            <li><strong>Attribute:</strong> A column in the table, describing a property of the entity.</li>
            <li><strong>Relation Schema:</strong> The structure or design of a relation, defining its name and attributes.</li>
            <li><strong>Relation Instance:</strong> A snapshot of the data in a relation at a particular moment (collection of tuples).</li>
          </ul>

          <p className="text-grey-400 mt-4"><strong>Example:</strong></p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`Relation Name: Student

| RollNo | Name    | Course  | Age |
|--------|---------|---------|-----|
| 101    | Rahul   | BCA     | 20  |
| 102    | Priya   | MCA     | 22  |
| 103    | Arjun   | B.Tech  | 21  |`}
          </pre>
        </div>

        {/* Attributes */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">2. Attributes</h2>

          <p className="text-grey-400 mt-2">
            An <strong>attribute</strong> represents a property or characteristic of an entity or relationship. Each attribute has a corresponding value in every tuple.
          </p>

          <p className="text-grey-400 mt-4"><strong>Types of Attributes:</strong></p>
          <ul className="list-disc text-grey-400 pl-5 mt-2">
            <li><strong>Simple Attribute:</strong> Cannot be divided further. (e.g., RollNo, Age)</li>
            <li><strong>Composite Attribute:</strong> Can be divided into smaller sub-parts. (e.g., Name → First Name, Last Name)</li>
            <li><strong>Derived Attribute:</strong> Can be derived from other attributes. (e.g., Age can be derived from Date of Birth)</li>
            <li><strong>Multivalued Attribute:</strong> Can have multiple values. (e.g., Phone Numbers)</li>
          </ul>

          <p className="text-grey-400 mt-4"><strong>Example:</strong></p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`Student(RollNo, Name, Course, Age)

Attributes:
- RollNo (Simple)
- Name (Composite: FirstName, LastName)
- Course (Simple)
- Age (Derived from DOB)`}
          </pre>
        </div>

        {/* Domains */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">3. Domains</h2>

          <p className="text-grey-400 mt-2">
            A <strong>domain</strong> is the set of all possible valid values that an attribute can hold. Every attribute is associated with a domain.
          </p>

          <p className="text-grey-400 mt-4"><strong>Key Points:</strong></p>
          <ul className="list-disc text-grey-400 pl-5 mt-2">
            <li>Domains define the data type (e.g., integer, string, date).</li>
            <li>Each attribute value must be atomic and must belong to its domain.</li>
            <li>Ensures data consistency and integrity.</li>
          </ul>

          <p className="text-grey-400 mt-4"><strong>Example Domains:</strong></p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`Domains:
- RollNo: Integer values between 1 and 9999
- Name: String (up to 50 characters)
- Course: One of {BCA, MCA, B.Tech, M.Tech}
- Age: Integer between 15 and 30`}
          </pre>

          <p className="text-grey-400 mt-4"><strong>Domain Violations:</strong>  
            If a value is inserted into a relation that does not match the domain of an attribute, it causes a domain violation.
          </p>

          <p className="text-grey-400 mt-2"><strong>Example of Violation:</strong> Inserting 'Twenty' into the Age attribute (should be an integer).</p>
        </div>

        {/* Final Notes */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Summary</h2>
          <p className="text-grey-400 mt-4">
            The Relational Model provides a logical view of the database structure based on simple concepts like relations, tuples, attributes, and domains. It offers data consistency, integrity, and flexibility which makes it the most popular model for modern databases like MySQL, PostgreSQL, Oracle, etc.
          </p>
        </div>

      </div>
    </div>
  );
}

export default RelationalModel;
