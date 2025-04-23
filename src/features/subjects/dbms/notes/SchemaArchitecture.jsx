import React from "react";
import "../../../../CSS/Dbms.css";

function SchemaArchitecture() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">📘 Schema and Three Schema Architecture</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔹 What is a Schema?</h2>
          <p>
            A <strong>schema</strong> is the structural design of a database. It defines how data is organized, including tables, relationships, constraints, and more. It acts like a blueprint for how a database is constructed.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🏛️ Three-Schema Architecture</h2>
          <p>
            This model divides the database architecture into three levels to provide abstraction and independence:
          </p>
          <img
            src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Blogs/home/three-schema-architecture-of-dbms-image-1.png"
            alt="Three Schema Architecture"
            className="dbms-example w-100"
          />
          <ul>
            <li><strong>External Level:</strong> User-specific views (different users see different representations of the same data).</li>
            <li><strong>Conceptual Level:</strong> Logical structure of the entire database (tables, relationships, constraints).</li>
            <li><strong>Internal Level:</strong> Physical storage of data (files, indexes, memory layout).</li>
          </ul>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧠 Schema Types</h2>
          <div className="dbms-grid">
            <div className="dbms-grid-item structured">
              <h3>External Schema</h3>
              <p>Defines different user views. One database can have multiple external schemas.</p>
            </div>
            <div className="dbms-grid-item structured">
              <h3>Conceptual Schema</h3>
              <p>Represents the logical view — what data is stored and how it's related.</p>
            </div>
            <div className="dbms-grid-item structured">
              <h3>Internal Schema</h3>
              <p>Describes physical storage: data files, indexing, memory usage.</p>
            </div>
          </div>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🌐 Useful Reference</h2>
          <p className="dbms-example">
            <a href="https://en.wikipedia.org/wiki/Three-schema_approach" target="_blank" rel="noreferrer">
              Wikipedia: Three Schema Architecture
            </a>
          </p>
          <p className="dbms-example">
            <a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer">
              MDN Web Docs (for related web/database content)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SchemaArchitecture;
