import React from 'react';
import '../../../../CSS/Dbms.css';

function RelationalAlgebraAndCalculus() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">

        <h1 className="dbms-title">Relational Algebra and Relational Calculus</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <p className="text-grey-400">
            Relational Algebra and Relational Calculus are theoretical languages used to query relational databases. They are the formal foundation behind SQL and other database query languages.
          </p>
        </div>

        {/* Relational Algebra */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">Relational Algebra</h2>

          <p className="text-grey-400 mt-2">
            <strong>Relational Algebra</strong> is a procedural query language that tells the system how to retrieve the required data. It uses operators to perform queries.
          </p>

          <p className="text-grey-400 mt-4"><strong>Basic Operators:</strong></p>
          <ul className="list-disc text-grey-400 pl-5">
            <li><strong>Selection (σ)</strong>: Selects rows satisfying a given predicate.</li>
            <li><strong>Projection (π)</strong>: Selects specific columns from a table.</li>
            <li><strong>Union (∪)</strong>: Combines tuples from two relations.</li>
            <li><strong>Set Difference (−)</strong>: Tuples in one relation but not in another.</li>
            <li><strong>Cartesian Product (×)</strong>: Combines every tuple of one relation with every tuple of another.</li>
            <li><strong>Rename (ρ)</strong>: Renames the relation or its attributes.</li>
          </ul>

          <p className="text-grey-400 mt-4"><strong>Example Query:</strong></p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`π Name (σ Age > 20 (Student))`}
          </pre>
          <p className="text-grey-400 mt-2">
            This query retrieves the names of students older than 20 years.
          </p>
        </div>

        {/* Relational Calculus */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">Relational Calculus</h2>

          <p className="text-grey-400 mt-2">
            <strong>Relational Calculus</strong> is a non-procedural query language that describes what result is desired without specifying how to compute it.
          </p>

          <p className="text-grey-400 mt-4"><strong>Types of Relational Calculus:</strong></p>
          <ul className="list-disc text-grey-400 pl-5">
            <li><strong>Tuple Relational Calculus (TRC)</strong>: Variables represent tuples.</li>
            <li><strong>Domain Relational Calculus (DRC)</strong>: Variables represent domain values.</li>
          </ul>

          <p className="text-grey-400 mt-4"><strong>Example (TRC):</strong></p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`{ t.Name | Student(t) AND t.Age > 20 }`}
          </pre>

          <p className="text-grey-400 mt-2">
            Find the names of students where Age is greater than 20.
          </p>

          <p className="text-grey-400 mt-6"><strong>Example (DRC):</strong></p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`{ <n> | ∃a (Student(n, a) ∧ a > 20) }`}
          </pre>

          <p className="text-grey-400 mt-2">
            Find the names (n) of students who are older than 20 years.
          </p>
        </div>

        {/* Comparison */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Relational Algebra vs Relational Calculus</h2>

          <table className="table-auto w-full text-grey-400 mt-4">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-2">Aspect</th>
                <th className="px-4 py-2">Relational Algebra</th>
                <th className="px-4 py-2">Relational Calculus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Type</td>
                <td className="border px-4 py-2">Procedural</td>
                <td className="border px-4 py-2">Non-Procedural</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Focus</td>
                <td className="border px-4 py-2">How to retrieve data</td>
                <td className="border px-4 py-2">What data is required</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Usage</td>
                <td className="border px-4 py-2">Defines steps to follow</td>
                <td className="border px-4 py-2">Specifies conditions only</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default RelationalAlgebraAndCalculus;
