import React from "react";
import "../../../../CSS/Dbms.css";

function DBMSvsFile() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">📂 DBMS vs File System</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📝 What is a File System?</h2>
          <p className="dbms-example">
            A <strong>File System</strong> is a method used by operating systems to store, retrieve, and organize files on a storage device. It provides basic data storage without relationships or structure.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">⚖️ Differences Between File System and DBMS</h2>
          <div className="dbms-grid">
            <div className="dbms-grid-item structured">
              <h3>📁 File System</h3>
              <ul>
                <li>1. Data stored as flat files.</li>
                <li>2. Manual data retrieval and searching.</li>
                <li>3. No relationships among data.</li>
                <li>4. No built-in data security.</li>
                <li>5. Data redundancy and inconsistency common.</li>
                <li>6. Hard to maintain large volumes of data.</li>
                <li>7. No standard query support (e.g., no SQL).</li>
              </ul>
            </div>
            <div className="dbms-grid-item unstructured">
              <h3>🛠️ DBMS</h3>
              <ul>
                <li>1. Data stored in structured formats (tables).</li>
                <li>2. Efficient data access using queries (SQL).</li>
                <li>3. Supports relationships via keys.</li>
                <li>4. Provides security and access control.</li>
                <li>5. Minimizes data redundancy and maintains consistency.</li>
                <li>6. Scalable and suitable for large datasets.</li>
                <li>7. Backup and recovery options available.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DBMSvsFile;
