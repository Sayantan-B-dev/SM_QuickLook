import React from 'react'
import '../../../../CSS/Dbms.css'

function DBMSintro() {
  return (
    <div className="dbms-wrapper">
      
      <div className="dbms-card">
        <h1 className="dbms-title">📚 Introduction to DBMS</h1>

        {/* Database System */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔧 Database System</h2>
          <p>
            A <strong>Database System</strong> consists of two main components: the <em>database</em> itself and the <em>Database Management System (DBMS)</em>.
            The database is an organized collection of data, while the DBMS is the software used to manage, retrieve, and manipulate that data.
          </p>
          <p className="dbms-example">💡 Example: A banking system where user data (name, account number, balance) is stored and accessed using Oracle DBMS.</p>
        </div>

        {/* Database vs DBMS */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🆚 Database vs DBMS</h2>
          <p>
            A <strong>Database</strong> is just the data — structured and stored. A <strong>DBMS</strong> is a tool to manage that data.
          </p>
          <ul>
            <li><strong>Database:</strong> A passive collection of data (e.g., a file of customer records).</li>
            <li><strong>DBMS:</strong> Software that enables creation, retrieval, update, and management (e.g., MySQL, PostgreSQL).</li>
          </ul>
        </div>

        {/* Structured vs Unstructured Data */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧩 Structured vs Unstructured Data</h2>
          <p>
            <strong>Structured Data</strong> is organized in rows and columns, easily searchable in RDBMS. <br />
            <strong>Unstructured Data</strong> has no pre-defined format and is harder to process.
          </p>
          <div className="dbms-grid">
            <div className="dbms-grid-item structured">
              <h3>Structured</h3>
              <p>Examples: SQL tables, Excel spreadsheets, employee records.</p>
            </div>
            <div className="dbms-grid-item unstructured">
              <h3>Unstructured</h3>
              <p>Examples: Images, Videos, PDFs, Word documents, Social media posts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DBMSintro
