import React from 'react';
import '../../../../CSS/Dbms.css';

function DbmsComponentsAndArchitecture() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Components of DBMS & ANSI/SPARC Architecture</h1>

        {/* Section 1: Components of a DBMS */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">1. Components of a DBMS</h2>
          <p className="text-grey-400">
            A Database Management System (DBMS) consists of various components that work together to store, retrieve, manipulate, and manage data efficiently. These components provide the infrastructure required for interacting with the database.
          </p>

          <ul className="text-grey-400 list-disc pl-5 mt-2">
            <li>
              <strong>1. Query Processor:</strong> Interprets and converts user queries (usually SQL) into low-level instructions.
              <br />
              <span className="italic">🧠 Example: Converts <code>SELECT *</code> into internal query tree.</span>
            </li>
            <li>
              <strong>2. Storage Manager:</strong> Manages data storage on physical media, ensuring consistency and efficiency.
              <ul className="list-disc pl-5">
                <li><strong>Buffer Manager</strong>: Caches frequently used data</li>
                <li><strong>File Manager</strong>: Manages space allocation on disk</li>
              </ul>
            </li>
            <li>
              <strong>3. Transaction Manager:</strong> Ensures ACID properties (Atomicity, Consistency, Isolation, Durability) during concurrent transactions.
            </li>
            <li>
              <strong>4. Concurrency Control Manager:</strong> Handles conflicts when multiple users access the database simultaneously.
            </li>
            <li>
              <strong>5. Recovery Manager:</strong> Restores data to a consistent state after a crash using logs and checkpoints.
            </li>
            <li>
              <strong>6. Database Engine:</strong> Core software that interacts with storage and processes SQL operations.
            </li>
            <li>
              <strong>7. Catalog/Metadata Manager:</strong> Maintains schema definitions, user privileges, and database structure info.
            </li>
            <li>
              <strong>8. Authorization & Integrity Manager:</strong> Enforces security rules, access controls, and data integrity.
            </li>
            <li>
              <strong>9. User Interface:</strong> Allows users/admins to interact via GUI, CLI, or programming APIs.
            </li>
          </ul>
        </div>

        {/* Section 2: ANSI/SPARC Architecture */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">2. ANSI/SPARC DBMS Architecture (3-Schema)</h2>
          <p className="text-grey-400">
            The ANSI/SPARC model introduces a **3-level abstraction** to separate user views from physical storage. It promotes **data independence** and modular DBMS design.
          </p>

          <div className="mb-4 mt-2">
            <h3 className="font-semibold text-grey-400">1️⃣ External Level (View Schema)</h3>
            <p className="text-grey-400">
              Describes how different users see the data. Each user can have a customized view showing only what they need.
              <br />
              <span className="italic">🧠 Example: A student sees only their marks, not others.</span>
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-grey-400">2️⃣ Conceptual Level (Logical Schema)</h3>
            <p className="text-grey-400">
              Represents the logical structure of the entire database — entities, relationships, data types, constraints.
              <br />
              <span className="italic">🧠 Example: A table with all students and their subjects/marks.</span>
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-grey-400">3️⃣ Internal Level (Storage Schema)</h3>
            <p className="text-grey-400">
              Defines how data is actually stored in files, memory blocks, and indexes on disk.
              <br />
              <span className="italic">🧠 Example: Data is stored as binary, indexed using B+ Trees.</span>
            </p>
          </div>

          {/* Summary Table */}
          <table className="mt-4 w-full text-grey-400 border border-gray-600">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-2 border border-gray-600">Level</th>
                <th className="p-2 border border-gray-600">Description</th>
                <th className="p-2 border border-gray-600">User</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-600">External</td>
                <td className="p-2 border border-gray-600">User-specific views</td>
                <td className="p-2 border border-gray-600">End Users</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-600">Conceptual</td>
                <td className="p-2 border border-gray-600">Logical structure of DB</td>
                <td className="p-2 border border-gray-600">DBA, Designers</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-600">Internal</td>
                <td className="p-2 border border-gray-600">Physical storage</td>
                <td className="p-2 border border-gray-600">DBMS Engine</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Conclusion */}
        <div className="dbms-section mt-6">
          <h2 className="dbms-subtitle">Why These Matter</h2>
          <ul className="text-grey-400 list-disc pl-5">
            <li>Helps in organizing database system functionality.</li>
            <li>Supports separation of concerns (logical vs physical).</li>
            <li>Improves scalability, maintainability, and security.</li>
            <li>Enables different user views and roles.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DbmsComponentsAndArchitecture;
