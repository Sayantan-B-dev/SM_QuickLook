import React from "react";
import "../../../../CSS/Dbms.css";

function DataIndependence() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔐 Data Independence & Database Levels</h1>

        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240425015401/data-independence-(1).png" alt="Two-tier architecture" className="dbms-image " />
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 What is Data Independence?</h2>
          <p>
            <strong>Data Independence</strong> is the ability to change the schema at one level of a database system without affecting the schema at the next higher level. It ensures a clear separation between different layers of abstraction.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧱 Database Levels</h2>
          <div className="dbms-grid">
            <div className="dbms-grid-item structured">
              <h3>View Level (External Schema)</h3>
              <p>
                Describes how data is viewed by individual users. Multiple views can exist for the same data based on user roles.
              </p>
            </div>
            <div className="dbms-grid-item structured">
              <h3>Conceptual Level (Logical Schema)</h3>
              <p>
                Describes what data is stored and the relationships. It’s the logical structure of the entire database.
              </p>
            </div>
            <div className="dbms-grid-item structured">
              <h3>Physical Level (Internal Schema)</h3>
              <p>
                Describes how data is physically stored in memory, including indexing and file structures.
              </p>
            </div>
          </div>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🎯 Types of Data Independence</h2>
          <div className="dbms-grid">
            <div className="dbms-grid-item structured">
              <h3>Logical Data Independence</h3>
              <p>
                Ability to change the conceptual schema without having to change the external views or application programs.
              </p>
              <p className="dbms-example">💡 Example: Adding a new field in a table without affecting user views.</p>
            </div>
            <div className="dbms-grid-item structured">
              <h3>Physical Data Independence</h3>
              <p>
                Ability to change the internal schema (e.g., file organization, indexing) without altering the conceptual schema.
              </p>
              <p className="dbms-example">💡 Example: Moving from heap file to B+ Tree indexing internally.</p>
            </div>
          </div>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 External Resources</h2>
          <p className="dbms-example">
            <a href="https://en.wikipedia.org/wiki/Data_independence" target="_blank" rel="noreferrer">
              Wikipedia: Data Independence
            </a>
          </p>
          <p className="dbms-example">
            <a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer">
              MDN Web Docs (for related topics)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataIndependence;
