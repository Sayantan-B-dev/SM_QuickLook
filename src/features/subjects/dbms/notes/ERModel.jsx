import React from "react";
import "../../../../CSS/Dbms.css";

function ERModel() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">📊 Entity-Relationship (ER) Model</h1>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🛠️ What is ER Model?</h2>
          <p>
            The <strong>Entity-Relationship (ER) Model</strong> is a high-level conceptual data model used to define data elements and their relationships for a specified system. It provides a graphical view of data and its interconnections.
          </p>
          <p className="dbms-example">
            💡 Example: In a university database, entities like <em>Student</em>, <em>Course</em>, and <em>Professor</em> can be represented along with their relationships like <em>enrolls</em> or <em>teaches</em>.
          </p>
        </div>

        <div className="dbms-section">
          <h2 className="dbms-subtitle">🏛️ Structure of an ER Model</h2>
          <p>
            The structure of an ER model includes entities, attributes, and relationships, organized visually using diagrams. These diagrams help database designers communicate complex requirements in an understandable form.
          </p>
          <p className="dbms-example">
            🔹 Entities are shown as rectangles. <br />
            🔹 Relationships are shown as diamonds. <br />
            🔹 Attributes are shown as ovals.
          </p>
        </div>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230428115454/Introduction-to-ER-Model-2-768.webp" alt="" />
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔍 Elements of ER Model</h2>
          <div className="dbms-grid">
            <div className="dbms-grid-item structured">
              <h3>Entity</h3>
              <p>
                An <strong>Entity</strong> is an object or thing in the real world that is distinguishable from other objects.
              </p>
              <p className="dbms-example">
                ✨ Example: <em>Student</em>, <em>Employee</em>, <em>Product</em>.
              </p>
            </div>

            <div className="dbms-grid-item structured">
              <h3>Attributes</h3>
              <p>
                <strong>Attributes</strong> are properties or characteristics of an entity.
              </p>
              <p className="dbms-example">
                ✨ Example: For Student, attributes could be <em>Roll Number</em>, <em>Name</em>, <em>Age</em>.
              </p>
            </div>

            <div className="dbms-grid-item structured">
              <h3>Entity Set</h3>
              <p>
                A collection of similar types of entities.
              </p>
              <p className="dbms-example">
                ✨ Example: All students in a university form a Student entity set.
              </p>
            </div>

            <div className="dbms-grid-item structured">
              <h3>Relationship</h3>
              <p>
                <strong>Relationship</strong> represents the association among two or more entities.
              </p>
              <p className="dbms-example">
                ✨ Example: A Student <em>enrolls</em> in a Course.
              </p>
            </div>

            <div className="dbms-grid-item structured">
              <h3>Relationship Set</h3>
              <p>
                A collection of similar types of relationships.
              </p>
              <p className="dbms-example">
                ✨ Example: All enrollments in different courses by students form an enrollment relationship set.
              </p>
            </div>

            <div className="dbms-grid-item structured">
              <h3>Keys</h3>
              <p>
                A <strong>Key</strong> is an attribute (or combination of attributes) that uniquely identifies an entity within an entity set.
              </p>
              <p className="dbms-example">
                ✨ Example: Student's Roll Number.
              </p>
            </div>

            <div className="dbms-grid-item structured">
              <h3>Participation</h3>
              <p>
                Describes whether all entities are involved in a relationship (Total or Partial Participation).
              </p>
              <p className="dbms-example">
                ✨ Example: Every course must have a professor assigned (Total Participation).
              </p>
            </div>

            <div className="dbms-grid-item structured">
              <h3>Cardinality</h3>
              <p>
                Defines the number of entities to which another entity can be associated via a relationship (1:1, 1:N, N:M).
              </p>
              <p className="dbms-example">
                ✨ Example: One professor teaches many courses (1:N).
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ERModel;
