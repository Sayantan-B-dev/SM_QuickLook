import React from "react";
import "../../../../CSS/SE.css";

function IncrementalModel() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Incremental Model</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition</h2>
          <p className="se-example">
            The Incremental Model is a software development approach where the system is designed, implemented, and tested incrementally (a little more is added each time). The overall system is divided into smaller, manageable parts (increments), which are developed and delivered iteratively.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Key Features</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>Incremental Development:</strong> The system is built and delivered in small, functional pieces (increments).</p>
              <p className="se-example"><strong>Early Partial Deployment:</strong> Each increment provides a functional module that can be deployed and used.</p>
              <p className="se-example"><strong>Flexible and Adaptable:</strong> Adjustments can be made as each increment is developed based on user feedback.</p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                The incremental model is useful when there is a need to deliver a part of the system early for user feedback, and the full system can be developed in parallel increments.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Advantages</h2>
          <ul className="se-example">
            <li>✓ Allows early partial deployment and feedback on the system.</li>
            <li>✓ Easier to manage risks as each increment is smaller in scope.</li>
            <li>✓ Flexibility to incorporate changes during the development process.</li>
            <li>✓ Faster delivery of critical system functionality in early increments.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Disadvantages</h2>
          <ul className="se-example">
            <li>✗ More planning is required to identify and prioritize increments.</li>
            <li>✗ System architecture may become inconsistent if not managed carefully between increments.</li>
            <li>✗ Final system may be harder to integrate as more increments are added.</li>
            <li>✗ Continuous customer feedback may not always be feasible or timely for every increment.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: Incremental Model</h2>
          <pre>{`
       Requirements Analysis
               │
   →  Design the First Increment  →   Implementation of the First Increment
               │                                      │
  Testing for First Increment ←→        Testing for Second Increment
               │                                      │
  First Increment Delivery         →     Design and Implementation of Next Increment
               │                                      │
Repeat Process for Each Increment
               │
 Final System Delivery
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default IncrementalModel;
