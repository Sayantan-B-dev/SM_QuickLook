import React from "react";
import "../../../../CSS/SE.css";

function SoftwareTestingTypes() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Types of Software Testing</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Unit Testing</h2>
          <p className="se-example">
            Unit testing involves testing individual units or components of software in isolation. It is usually done by developers and often uses white-box testing techniques.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Integration Testing</h2>
          <p className="se-example">
            Integration testing checks the interaction between different modules. It ensures that combined modules work together correctly. It can use both white-box and black-box approaches.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">System Testing</h2>
          <p className="se-example">
            System testing tests the complete and integrated software as a whole to ensure it meets specified requirements. It uses black-box testing techniques.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Relationship Between the Three</h2>
          <pre>{`
Unit Testing -> test individual components
       ↓
Integration Testing -> test combinations of components
       ↓
System Testing -> test the entire system in real-world conditions
          `}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">White Box Testing</h2>
          <p className="se-example">
            White-box testing involves testing internal structures or workings of an application. It requires knowledge of the code. Common techniques include path testing, loop testing, and condition testing.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Black Box Testing</h2>
          <p className="se-example">
            Black-box testing evaluates software functionality without looking at internal code structure. Testers focus on input/output behavior. Techniques include equivalence partitioning, boundary value analysis, and decision table testing.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">White Box vs Black Box Testing</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>White Box Testing</th>
                <th>Black Box Testing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Focus</td>
                <td>Internal logic of the code</td>
                <td>Functionality and user requirements</td>
              </tr>
              <tr>
                <td>Knowledge of Code</td>
                <td>Required</td>
                <td>Not required</td>
              </tr>
              <tr>
                <td>Performed By</td>
                <td>Developers</td>
                <td>Testers</td>
              </tr>
              <tr>
                <td>Testing Level</td>
                <td>Mainly Unit & Integration</td>
                <td>Mainly System & Acceptance</td>
              </tr>
              <tr>
                <td>Techniques</td>
                <td>Path testing, condition testing</td>
                <td>Equivalence partitioning, BVA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SoftwareTestingTypes;
