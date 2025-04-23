import React from "react";
import "../../../../CSS/Dbms.css";

function ArchitectureTiers() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🏛️ Two-tier vs Three-tier Architecture</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 What is Two-tier Architecture?</h2>
          <p className="dbms-example">
            In a <strong>Two-tier architecture</strong>, the client directly communicates with the database server. The application logic resides on the client side.
          </p>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240907155154/2.png" alt="Two-tier architecture" className="dbms-image w-100" />
          <p className="dbms-example">
            💡 <strong>Example:</strong> A desktop application that connects directly to a MySQL database.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 What is Three-tier Architecture?</h2>
          <p className="dbms-example">
            A <strong>Three-tier architecture</strong> introduces an intermediate application server between the client and database. The client interacts with the application server, which then communicates with the database.
          </p>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240907155153/3.png" alt="Three-tier architecture" className="dbms-image w-100" />
          <p className="dbms-example">
            💡 <strong>Example:</strong> A web application where the browser interacts with a Node.js server, which then connects to MongoDB.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">✅ Advantages & ❌ Disadvantages</h2>
          <div className="dbms-grid">
            <div className="dbms-grid-item structured">
              <h3>Two-tier</h3>
              <ul>
                <li>✅ Simple and fast for small applications.</li>
                <li>✅ Direct communication with database.</li>
                <li>❌ Poor scalability.</li>
                <li>❌ Tight coupling between client and server.</li>
              </ul>
            </div>
            <div className="dbms-grid-item unstructured">
              <h3>Three-tier</h3>
              <ul>
                <li>✅ Better scalability and separation of concerns.</li>
                <li>✅ Easier maintenance and updates.</li>
                <li>❌ More complex to implement.</li>
                <li>❌ Slight latency due to additional layer.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🆚 Key Differences</h2>
          <div className="dbms-grid">
            <div className="dbms-grid-item structured">
              <h3>Two-tier</h3>
              <p>Client ↔ Database</p>
              <p>Best for small-scale apps.</p>
            </div>
            <div className="dbms-grid-item unstructured">
              <h3>Three-tier</h3>
              <p>Client ↔ App Server ↔ Database</p>
              <p>Best for scalable, maintainable systems.</p>
            </div>
          </div>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 References & Links</h2>
          <ul className="dbms-example">
            <li>
              🔗 <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview" target="_blank" rel="noopener noreferrer">
                MDN – Client-Server Overview
              </a>
            </li>
            <li>
              🔗 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Three-tier_architecture" target="_blank" rel="noopener noreferrer">
                MDN – Three-tier Architecture
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArchitectureTiers;
