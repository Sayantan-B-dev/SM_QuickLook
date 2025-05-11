import React from "react";
import "../../../../CSS/SE.css";

function ClassicalWaterfallModel() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Classical Waterfall Model</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition</h2>
          <p className="se-example">
            The Classical Waterfall Model is a linear and sequential approach to software development where each phase must be completed before the next one begins. It is one of the earliest SDLC models and emphasizes meticulous planning and documentation.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Phases of Waterfall Model</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>1. Requirement Analysis:</strong> Understand what the user needs.</p>
              <p className="se-example"><strong>2. System Design:</strong> Blueprint for system architecture and modules.</p>
              <p className="se-example"><strong>3. Implementation:</strong> Actual coding begins based on design.</p>
              <p className="se-example"><strong>4. Integration and Testing:</strong> Combine modules and test the system as a whole.</p>
              <p className="se-example"><strong>5. Deployment:</strong> Deliver the system to the user.</p>
              <p className="se-example"><strong>6. Maintenance:</strong> Correct errors and make improvements post-deployment.</p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                Each phase has specific deliverables and is strictly documented. Once a phase is complete, you cannot go back easily, which is why it's called the "waterfall" model.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Advantages</h2>
          <ul className="se-example">
            <li>✓ Simple to understand and use.</li>
            <li>✓ Structured and disciplined approach with clear milestones.</li>
            <li>✓ Ideal for smaller projects with well-defined requirements.</li>
            <li>✓ Easy to manage due to its rigidity and documentation.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Disadvantages</h2>
          <ul className="se-example">
            <li>✗ No room for changing requirements once development starts.</li>
            <li>✗ Not suitable for complex or long-term projects.</li>
            <li>✗ Late discovery of issues due to late testing phase.</li>
            <li>✗ Customer only sees working software at the end.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: Classical Waterfall Model</h2>
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
           ↓
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

export default ClassicalWaterfallModel;
