import React from "react";
import "../../../../CSS/SE.css";

function IterativeWaterfallModel() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Iterative Waterfall Model</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition</h2>
          <p className="se-example">
            The Iterative Waterfall Model is an enhancement of the Classical Waterfall Model. Unlike the strictly linear approach, it allows limited feedback and revisions between phases, making it slightly more flexible for handling errors or changes in requirements during development.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Key Features</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>Backtracking:</strong> Allows moving backward to a previous phase if issues are found.</p>
              <p className="se-example"><strong>Error Correction:</strong> Early error detection and correction is possible.</p>
              <p className="se-example"><strong>Controlled Iteration:</strong> Iterations are limited to adjacent phases to prevent chaos.</p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                This model tries to combine the structure of the classical waterfall with a bit more adaptability, though it is still not suitable for frequent changes or highly dynamic requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Advantages</h2>
          <ul className="se-example">
            <li>✓ Allows correction of errors in the previous phase before proceeding further.</li>
            <li>✓ Reduces risk compared to the Classical Waterfall Model.</li>
            <li>✓ Provides a more realistic approach by acknowledging that issues may arise.</li>
            <li>✓ Improves project accuracy and quality through limited iteration.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Disadvantages</h2>
          <ul className="se-example">
            <li>✗ Still not suitable for frequently changing requirements.</li>
            <li>✗ Backtracking is only allowed to the immediate previous phase, not any earlier one.</li>
            <li>✗ Documentation overhead remains high.</li>
            <li>✗ Project delivery may still be delayed if many corrections are needed.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: Iterative Waterfall Model</h2>
          <pre>{`
+----------------------+
| Requirement Analysis |
+----------------------+
           ↓
+----------------+
| System Design  |
+----------------+
           ↓
+-------------------+
| Implementation    |
+-------------------+
      ↑      ↓
+------------------------+
| Integration & Testing  |
+------------------------+
           ↓
+----------------+
|  Deployment    |
+----------------+
           ↓
+----------------+
|  Maintenance   |
+----------------+
          `}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default IterativeWaterfallModel;
