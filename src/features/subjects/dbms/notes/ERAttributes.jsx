import React from "react";
import "../../../../CSS/Dbms.css";

function ERAttributes() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🎯 Types of Attributes in ER Model</h1>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230428090323/Introduction-to-ER-Model-1-768.webp" alt="" />

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔹 Simple vs Composite Attribute</h2>
          <p>
            <strong>Simple Attribute</strong> (Atomic Attribute) cannot be divided further.
          </p>
          <p className="dbms-example">
            💡 Example: <em>Age</em>, <em>Gender</em>.
          </p>

          <p>
            <strong>Composite Attribute</strong> can be divided into smaller subparts.
          </p>
          <p className="dbms-example">
            💡 Example: <em>Full Name</em> can be split into <em>First Name</em> and <em>Last Name</em>.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔹 Single-valued vs Multi-valued Attribute</h2>
          <p>
            <strong>Single-valued Attribute</strong> holds only one value for each entity.
          </p>
          <p className="dbms-example">
            💡 Example: <em>Date of Birth</em> of a person.
          </p>

          <p>
            <strong>Multi-valued Attribute</strong> can hold multiple values for a single entity.
          </p>
          <p className="dbms-example">
            💡 Example: <em>Phone Numbers</em> of a person (may have multiple).
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔹 Stored (Student) vs Derived Attribute</h2>
          <p>
            <strong>Stored Attribute</strong> is physically stored in the database.
          </p>
          <p className="dbms-example">
            💡 Example: <em>Date of Birth</em>.
          </p>

          <p>
            <strong>Derived Attribute</strong> is calculated from stored attributes.
          </p>
          <p className="dbms-example">
            💡 Example: <em>Age</em> derived from <em>Date of Birth</em>.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔹 Key Attribute vs Non-Key Attribute</h2>
          <p>
            <strong>Key Attribute</strong> uniquely identifies an entity in an entity set.
          </p>
          <p className="dbms-example">
            💡 Example: <em>Roll Number</em> of a Student.
          </p>

          <p>
            <strong>Non-Key Attribute</strong> is any attribute that does not uniquely identify entities.
          </p>
          <p className="dbms-example">
            💡 Example: <em>Name</em> or <em>Address</em> of a Student.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔹 Required vs Optional Attribute</h2>
          <p>
            <strong>Required Attribute</strong> must have a value, cannot be NULL.
          </p>
          <p className="dbms-example">
            💡 Example: <em>Employee ID</em> in an employee database.
          </p>

          <p>
            <strong>Optional Attribute</strong> can be NULL.
          </p>
          <p className="dbms-example">
            💡 Example: <em>Alternate Email Address</em>.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔹 Complex Attribute</h2>
          <p>
            A <strong>Complex Attribute</strong> is a combination of multivalued and composite attributes.
          </p>
          <p className="dbms-example">
            💡 Example: A <em>person</em> having multiple <em>addresses</em> where each address has street, city, and zip code.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ERAttributes;
