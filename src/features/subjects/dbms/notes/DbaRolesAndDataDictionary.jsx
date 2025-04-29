import React from 'react';
import '../../../../CSS/Dbms.css';

function DbaRolesAndDataDictionary() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Roles & Functionalities of DBA and Data Dictionary</h1>

        {/* Section 1: DBA Roles and Functionalities */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">1. Roles and Functionalities of a Database Administrator (DBA)</h2>
          <p className="text-grey-400">
            A Database Administrator (DBA) is responsible for the installation, configuration, upgrading, administration, monitoring, and maintenance of databases in an organization. 
          </p>

          <ul className="text-grey-400 list-disc pl-5 mt-2">
            <li>
              <strong>1. Database Design:</strong> Designing the logical and physical structure of the database for optimal performance and storage.
              <br />
              <span className="italic">🧠 Example: Deciding tables, indexes, relationships, constraints.</span>
            </li>
            <li>
              <strong>2. Installation and Configuration:</strong> Setting up DBMS software and configuring settings to suit the organizational environment.
            </li>
            <li>
              <strong>3. Data Security and Authorization:</strong> Granting and revoking user permissions, implementing security policies to protect data from unauthorized access.
            </li>
            <li>
              <strong>4. Backup and Recovery:</strong> Planning and managing regular backups and creating disaster recovery strategies.
              <br />
              <span className="italic">🧠 Example: Scheduling nightly backups and maintaining copies offsite.</span>
            </li>
            <li>
              <strong>5. Performance Tuning:</strong> Monitoring database performance and optimizing slow queries, memory usage, and indexing.
            </li>
            <li>
              <strong>6. Storage Management:</strong> Managing disk space, data files, and ensuring efficient data storage strategies.
            </li>
            <li>
              <strong>7. Monitoring and Maintenance:</strong> Continuously monitoring the database for errors, security breaches, and other issues, and performing corrective actions.
            </li>
            <li>
              <strong>8. Ensuring Data Integrity:</strong> Enforcing rules and constraints to maintain accurate and consistent data within the database.
            </li>
            <li>
              <strong>9. Documentation:</strong> Maintaining up-to-date documentation of database structures, procedures, and security protocols.
            </li>
            <li>
              <strong>10. Upgrading Systems:</strong> Applying patches, upgrades, and migrating databases to newer versions for better performance and security.
            </li>
          </ul>
        </div>

        {/* Section 2: Data Dictionary */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">2. Data Dictionary</h2>
          <p className="text-grey-400">
            The <strong>Data Dictionary</strong> is a centralized repository of metadata (data about data). It stores and manages important information about database objects like tables, views, indexes, users, constraints, and relationships.
          </p>

          <ul className="text-grey-400 list-disc pl-5 mt-2">
            <li>
              <strong>Definition:</strong> A set of system tables automatically maintained by the DBMS containing schema definitions and descriptions.
            </li>
            <li>
              <strong>Purpose:</strong> Helps the DBMS manage the database and allows users and DBAs to understand the structure and rules of the database.
            </li>
          </ul>

          {/* Features of Data Dictionary */}
          <div className="mt-4">
            <h3 className="font-semibold text-grey-400">Key Features:</h3>
            <ul className="text-grey-400 list-disc pl-5 mt-2">
              <li>Stores table names, column names, data types, sizes, and constraints.</li>
              <li>Maintains information about users, privileges, and roles.</li>
              <li>Tracks indexes, views, triggers, stored procedures, etc.</li>
              <li>Maintains auditing and access history.</li>
              <li>Automatically updated when database schema changes.</li>
            </ul>
          </div>

          {/* Types of Data Dictionary */}
          <div className="mt-4">
            <h3 className="font-semibold text-grey-400">Types:</h3>
            <ul className="text-grey-400 list-disc pl-5 mt-2">
              <li><strong>Active Data Dictionary:</strong> Continuously updated by DBMS and directly used by the system to enforce integrity, security, etc.</li>
              <li><strong>Passive Data Dictionary:</strong> Updated manually or periodically and mainly used for documentation or reference.</li>
            </ul>
          </div>

          {/* Example snippet */}
          <div className="mt-6">
            <h3 className="font-semibold text-grey-400">Simple Example of Data Dictionary Entry:</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`Table: Students
Columns:
- StudentID (INTEGER, Primary Key)
- Name (VARCHAR(50))
- Age (INTEGER)
- DepartmentID (Foreign Key)
Constraints:
- Age > 0
`}
            </pre>
          </div>
        </div>

        {/* Conclusion */}
        <div className="dbms-section mt-6">
          <h2 className="dbms-subtitle">Summary</h2>
          <ul className="text-grey-400 list-disc pl-5">
            <li>DBA is critical for the smooth operation, security, and efficiency of databases.</li>
            <li>Data Dictionary is crucial for understanding, managing, and controlling the database structure.</li>
            <li>Both work hand-in-hand to maintain a robust database environment.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default DbaRolesAndDataDictionary;
