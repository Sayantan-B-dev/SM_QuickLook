import React from "react";
import "../../../../CSS/SE.css";

function RequirementEngineering() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">
          Software Requirements & Requirement Engineering
        </h1>

        <div className="se-section">
          <h2 className="se-subtitle">What are Software Requirements?</h2>
          <p className="se-example">
            Software requirements are detailed descriptions of the system
            functionalities, constraints, and features that a software product
            must fulfill. These requirements act as a foundation for the design,
            development, and testing phases.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">What is Requirement Engineering?</h2>
          <p className="se-example">
            Requirement Engineering is the process of defining, documenting, and
            maintaining software requirements. It involves identifying the needs
            of stakeholders and translating them into formal specifications that
            developers can implement.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Steps in Requirement Engineering</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <h3 className="se-example">1. Feasibility Study</h3>
              <p className="se-example">
                Determines whether the proposed system is technically,
                economically, and operationally feasible.
              </p>

              <h3 className="se-example">
                2. Requirement Gathering / Elicitation
              </h3>
              <p className="se-example">
                Involves interacting with stakeholders to gather all possible
                requirements through interviews, questionnaires, observations,
                and brainstorming.
              </p>

              <h3 className="se-example">
                3. SRS (Software Requirement Specification)
              </h3>
              <p className="se-example">
                A detailed, structured document that outlines all the functional
                and non-functional requirements of the software. It serves as a
                contract between client and developer.
              </p>

              <h3 className="se-example">
                4. SRV (Software Requirements Validation)
              </h3>
              <p className="se-example">
                The process of ensuring that the documented requirements are
                complete, consistent, correct, and meet stakeholder
                expectations.
              </p>
            </div>

            <div className="se-grid-item unstructured">
              <p className="se-example">
                All steps are iterative and may be revisited multiple times as
                new requirements or clarifications arise. The goal is to ensure
                the final software product aligns with user expectations and
                needs.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">
            Tools that Support Requirement Engineering
          </h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example">
                <strong>1. IBM DOORS:</strong> Enterprise-level tool for
                requirements management with traceability and version control.
              </p>
              <p className="se-example">
                <strong>2. Jama Connect:</strong> Helps in managing complex
                system requirements, traceability, and change impact analysis.
              </p>
              <p className="se-example">
                <strong>3. ReQtest:</strong> Supports requirement gathering,
                test management, and bug tracking.
              </p>
              <p className="se-example">
                <strong>4. Helix RM:</strong> End-to-end requirement lifecycle
                management with collaboration support.
              </p>
              <p className="se-example">
                <strong>5. Visure:</strong> Customizable and compliance-driven
                RE tool for safety-critical systems.
              </p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                These tools improve accuracy, collaboration, documentation
                consistency, and traceability throughout the lifecycle of
                software development.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">
            Diagram: Steps in Requirement Engineering
          </h2>
          <pre>{`
          [ Feasibility Study ]
                    ↓
     [ Requirement Gathering / Elicitation ]
                    ↓
           [ SRS Documentation ]
                    ↓
         [ SRV (Validation & Verification) ]
          `}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Importance of Requirement Engineering</h2>
          <ul className="se-example">
            <li>
              Helps avoid software rework and defects later in the project.
            </li>
            <li>Improves communication between developers and stakeholders.</li>
            <li>Defines the scope and expectations clearly.</li>
            <li>Forms the basis for testing and validation.</li>
          </ul>
        </div>
        <div className="se-section">
          <h2 className="se-subtitle">
            Functional vs Non-Functional Requirements
          </h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Functional Requirement</th>
                <th>Non-Functional Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>
                  Describes what the system should do (features and
                  functionality).
                </td>
                <td>
                  Describes how the system should behave (performance,
                  usability, etc.).
                </td>
              </tr>
              <tr>
                <td>Examples</td>
                <td>User login, data processing, report generation.</td>
                <td>Response time, security, scalability, availability.</td>
              </tr>
              <tr>
                <td>Focus</td>
                <td>System behavior and business logic.</td>
                <td>System qualities and user experience.</td>
              </tr>
              <tr>
                <td>Testability</td>
                <td>
                  Usually tested using functional test cases (unit,
                  integration).
                </td>
                <td>
                  Usually tested using performance, security, or usability
                  testing.
                </td>
              </tr>
              <tr>
                <td>Documentation</td>
                <td>Included in the use case or functional specification.</td>
                <td>
                  Described in quality attribute or non-functional specs
                  section.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RequirementEngineering;
