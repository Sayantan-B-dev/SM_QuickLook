import React from "react";
import "../../../../CSS/SE.css";

function SoftwareMaintenance() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Software Maintenance</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition</h2>
          <p className="se-example">
            Software Maintenance refers to the process of modifying and updating software applications after delivery to correct faults, improve performance, or adapt it to a changed environment.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Types of Software Maintenance</h2>
          <p className="se-example">
            There are four main types of software maintenance based on purpose:
          </p>

          <div className="se-grid">
            <div className="se-grid-item structured">
              <h3 className="se-subtitle">Corrective Maintenance</h3>
              <p className="se-example">Fixes bugs or errors reported by users after the software is deployed.</p>
            </div>
            <div className="se-grid-item structured">
              <h3 className="se-subtitle">Adaptive Maintenance</h3>
              <p className="se-example">Modifies software to keep it compatible with changing environments (e.g., OS upgrades, new hardware).</p>
            </div>
            <div className="se-grid-item structured">
              <h3 className="se-subtitle">Preventive Maintenance</h3>
              <p className="se-example">Improves software reliability by identifying and fixing potential issues before they cause failure.</p>
            </div>
            <div className="se-grid-item structured">
              <h3 className="se-subtitle">Perfective Maintenance</h3>
              <p className="se-example">Enhances performance or adds new features based on user feedback or evolving needs.</p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Maintenance Types Comparison</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Purpose</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Corrective</td>
                <td>Fix existing defects</td>
                <td>Bug fixing after user reports</td>
              </tr>
              <tr>
                <td>Adaptive</td>
                <td>Adapt to new environment</td>
                <td>Update for new OS version</td>
              </tr>
              <tr>
                <td>Preventive</td>
                <td>Prevent future problems</td>
                <td>Code refactoring to remove vulnerabilities</td>
              </tr>
              <tr>
                <td>Perfective</td>
                <td>Enhance performance/features</td>
                <td>Add new dashboard feature</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Software Maintenance Metrics</h2>
          <p className="se-example">
            Maintenance metrics help in evaluating the effectiveness of software maintenance. Two key metrics are:
          </p>

          <h3 className="se-subtitle">1. MTBF (Mean Time Between Failures)</h3>
          <p className="se-example">
            Indicates the average time between two successive failures. Higher MTBF means higher reliability.
          </p>
          <pre>{`
MTBF = Total operational time / Number of failures
          `}</pre>

          <h3 className="se-subtitle">2. MTTR (Mean Time To Repair)</h3>
          <p className="se-example">
            Indicates the average time required to fix a failure. Lower MTTR means faster recovery.
          </p>
          <pre>{`
MTTR = Total downtime / Number of failures
          `}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: Maintenance Cycle</h2>
          <pre>{`
[Initial Deployment]
         ↓
[Bug Reported] → Corrective
         ↓
[New Environment] → Adaptive
         ↓
[Risk Detected] → Preventive
         ↓
[New Feature Request] → Perfective
         ↓
[Updated System]
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default SoftwareMaintenance;
