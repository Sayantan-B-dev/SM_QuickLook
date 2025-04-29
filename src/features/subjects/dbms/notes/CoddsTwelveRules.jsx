import React from 'react'
import '../../../../CSS/Dbms.css'

function CoddsTwelveRules() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Codd's 12 Rules of Relational Databases</h1>

        <div className="dbms-section">
          <p className="dbms-example">
            <strong>Dr. Edgar F. Codd</strong> introduced 12 rules (plus Rule 0) in 1985 to define what is required for a database management system to be considered truly relational. 
            These rules were intended to set clear guidelines for database vendors and prevent "pseudo-relational" systems.
          </p>
        </div>

        {/* Rule 0 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Rule 0: Foundation Rule</h2>
          <p className="dbms-example">
            <pre>
              {`A system must qualify as a relational database management system (RDBMS) if it can manage databases entirely through its relational capabilities.`}
            </pre>
          </p>
          <p className="dbms-example">
            ➔ The system must be able to handle all management (CRUD operations, security, etc.) relationally.
          </p>
        </div>

        {/* Rule 1 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Rule 1: Information Rule</h2>
          <p className="dbms-example">
            <pre>
              {`All data must be stored in tables (relations) and represented only as values in columns.`}
            </pre>
          </p>
          <p className="dbms-example">
            ➔ Example: A student's details are stored in rows and columns, not hidden in files.
          </p>
        </div>

        {/* Rule 2 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Rule 2: Guaranteed Access Rule</h2>
          <p className="dbms-example">
            <pre>
              {`Every individual data element (atomic value) must be accessible logically using a combination of table name, primary key (row), and column name.`}
            </pre>
          </p>
          <p className="dbms-example">
            ➔ Example: You can fetch a student's "Email" by knowing their ID and table name.
          </p>
        </div>

        {/* Rule 3 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Rule 3: Systematic Treatment of NULL Values</h2>
          <p className="dbms-example">
            <pre>
              {`NULL values must be treated uniformly as representing missing or inapplicable information.`}
            </pre>
          </p>
          <p className="dbms-example">
            ➔ Example: NULL ≠ 0, NULL ≠ empty string; it must be handled carefully.
          </p>
        </div>

        {/* Rule 4 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Rule 4: Dynamic Online Catalog Based on the Relational Model</h2>
          <p className="dbms-example">
            <pre>
              {`The database schema (metadata) must also be stored as relational tables and accessible via SQL.`}
            </pre>
          </p>
          <p className="dbms-example">
            ➔ Example: `INFORMATION_SCHEMA` tables in modern databases like MySQL, PostgreSQL.
          </p>
        </div>

        {/* Rule 5 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Rule 5: Comprehensive Data Sublanguage Rule</h2>
          <p className="dbms-example">
            <pre>
              {`The system must support at least one comprehensive language (like SQL) that can define data, manipulate data, handle transactions, and control access.`}
            </pre>
          </p>
          <p className="dbms-example">
            ➔ Example: SQL (Structured Query Language) provides DDL, DML, DCL functionalities.
          </p>
        </div>

        {/* Rule 6 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Rule 6: View Updating Rule</h2>
          <p className="dbms-example">
            <pre>
              {`All theoretically possible views must be updatable by the system.`}
            </pre>
          </p>
          <p className="dbms-example">
            ➔ Example: If a view is simple enough (single table, no aggregation), updates should reflect back to base tables.
          </p>
        </div>

        {/* Rule 7 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Rule 7: High-Level Insert, Update, and Delete</h2>
          <p className="dbms-example">
            <pre>
              {`The system must support set-level (bulk) operations, not just row-by-row record handling.`}
            </pre>
          </p>
          <p className="dbms-example">
            ➔ Example: Insert multiple rows using one SQL statement.
          </p>
        </div>

        {/* Rule 8 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Rule 8: Physical Data Independence</h2>
          <p className="dbms-example">
            <pre>
              {`Changes to physical storage (e.g., file organization) should not affect how the user interacts with data.`}
            </pre>
          </p>
          <p className="dbms-example">
            ➔ Example: Moving the database to SSD should not break applications.
          </p>
        </div>

        {/* Rule 9 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Rule 9: Logical Data Independence</h2>
          <p className="dbms-example">
            <pre>
              {`Changes to logical structure (e.g., adding a new column) should not require changes to application programs.`}
            </pre>
          </p>
          <p className="dbms-example">
            ➔ Example: Adding an "age" column to a student table should not break the app if it only uses "name" and "email."
          </p>
        </div>

        {/* Rule 10 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Rule 10: Integrity Independence</h2>
          <p className="dbms-example">
            <pre>
              {`Integrity constraints (like primary keys, foreign keys) must be definable in the database itself and independent from applications.`}
            </pre>
          </p>
          <p className="dbms-example">
            ➔ Example: Defining NOT NULL or UNIQUE directly in table definition.
          </p>
        </div>

        {/* Rule 11 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Rule 11: Distribution Independence</h2>
          <p className="dbms-example">
            <pre>
              {`Users should not be aware of whether the database is distributed across multiple locations.`}
            </pre>
          </p>
          <p className="dbms-example">
            ➔ Example: A bank may distribute customer data across servers globally, but queries remain the same.
          </p>
        </div>

        {/* Rule 12 */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Rule 12: Non-Subversion Rule</h2>
          <p className="dbms-example">
            <pre>
              {`If a system provides low-level (record-at-a-time) access, it should not be able to bypass integrity rules and constraints.`}
            </pre>
          </p>
          <p className="dbms-example">
            ➔ Example: Even a direct file operation should respect primary keys, foreign keys, constraints.
          </p>
        </div>

      </div>
    </div>
  )
}

export default CoddsTwelveRules
