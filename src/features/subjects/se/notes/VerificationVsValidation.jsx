import React from "react";
import "../../../../CSS/SE.css";

function VerificationVsValidation() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Verification vs Validation</h1>
        
        <div className="se-section">
          <h2 className="se-subtitle">Verification vs Validation</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Verification</th>
                <th>Validation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>Ensures the product is built according to the requirements and specifications.</td>
                <td>Ensures the product meets the user’s needs and works as expected in real-world scenarios.</td>
              </tr>
              <tr>
                <td>Focus</td>
                <td>Checks if the product is being built correctly (conformance to design).</td>
                <td>Checks if the right product is being built (meets user needs).</td>
              </tr>
              <tr>
                <td>When it Occurs</td>
                <td>Occurs throughout the development process (static testing).</td>
                <td>Occurs after the product is built (dynamic testing).</td>
              </tr>
              <tr>
                <td>Methods</td>
                <td>Reviews, inspections, walkthroughs, desk-checking.</td>
                <td>Usability testing, acceptance testing, field trials.</td>
              </tr>
              <tr>
                <td>Objective</td>
                <td>To ensure that the software was built in the right way as per the specifications.</td>
                <td>To ensure that the software meets the user’s needs and requirements in practice.</td>
              </tr>
              <tr>
                <td>Example</td>
                <td>Reviewing code, validating design documents.</td>
                <td>Testing the software with users, running a user acceptance test (UAT).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VerificationVsValidation;
