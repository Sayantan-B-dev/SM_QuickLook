import React from "react";
import "../../../../CSS/SE.css";

function SoftwareRequirementSpecification() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Software Requirement Specification (SRS)</h1>

        {/* Definition */}
        <div className="se-section">
          <h2 className="se-subtitle">Definition</h2>
          <p className="se-example">
            The Software Requirements Specification (SRS) is a formal document that comprehensively describes the functional and non-functional requirements of the software system to be developed. It serves as a contract between the client and the developer.
          </p>
        </div>

        {/* Importance */}
        <div className="se-section">
          <h2 className="se-subtitle">Importance of SRS</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example">✔ Establishes a mutual understanding between stakeholders.</p>
              <p className="se-example">✔ Acts as a reference point throughout the software lifecycle.</p>
              <p className="se-example">✔ Facilitates test planning and validation.</p>
              <p className="se-example">✔ Reduces project risk and miscommunication.</p>
            </div>
          </div>
        </div>

        {/* SRS Structure */}
        <div className="se-section">
          <h2 className="se-subtitle">Structure of a Standard SRS Document</h2>
          <ul className="se-example list-disc pl-6">
            <li>1. Introduction</li>
            <li>2. Overall Description</li>
            <li>3. Specific Requirements</li>
            <li>4. External Interface Requirements</li>
            <li>5. Functional Requirements</li>
            <li>6. Non-Functional Requirements</li>
            <li>7. Constraints and Assumptions</li>
            <li>8. Appendices</li>
            <li>9. Index and Glossary</li>
          </ul>
        </div>

        {/* User Requirements + Real Life Example */}
        <div className="se-section">
          <h2 className="se-subtitle">User Requirements (with Real-Life Example)</h2>
          <p className="se-example">
            User requirements describe what the user expects from the system in natural language.
          </p>
          <p className="se-example"><strong>Example:</strong> For a food delivery app:</p>
          <ul className="se-example list-disc pl-6">
            <li>The user should be able to search for restaurants near their location.</li>
            <li>The user should be able to place and track orders.</li>
            <li>The user should receive notifications for order status updates.</li>
          </ul>
        </div>

        {/* User Requirement Specification */}
        <div className="se-section">
          <h2 className="se-subtitle">User Requirement Specification</h2>
          <p className="se-example">
            This section of the SRS translates user needs into technical specifications that can be implemented. It typically includes:
          </p>
          <ul className="se-example list-disc pl-6">
            <li>Use cases and user scenarios</li>
            <li>UI mockups or wireframes</li>
            <li>Input/output descriptions</li>
            <li>Workflow diagrams</li>
            <li>Functional behavior expectations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SoftwareRequirementSpecification;
