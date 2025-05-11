import React from "react";
import "../../../../CSS/SE.css";

function PrototypingModel() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Prototyping Model</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition</h2>
          <p className="se-example">
            The Prototyping Model is a software development process where a prototype (an early approximation of the system) is built, tested, and then refined until it meets the user's requirements. This model is often used when the requirements are not fully understood at the outset, allowing for iterative refinement.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Key Features</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>Early User Involvement:</strong> Users interact with the prototype to give feedback on features.</p>
              <p className="se-example"><strong>Iterative Development:</strong> Prototype is refined with each iteration based on user feedback.</p>
              <p className="se-example"><strong>Quick Feedback:</strong> Changes can be made quickly as a result of user testing and feedback.</p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                This model helps to build a working version of the system that can evolve quickly as requirements are clarified.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Advantages</h2>
          <ul className="se-example">
            <li>✓ Early and continuous user feedback improves the system's usability and functionality.</li>
            <li>✓ Can adapt to changing user requirements throughout development.</li>
            <li>✓ Risk of misunderstanding user requirements is reduced since a working model is built early.</li>
            <li>✓ Helps to identify potential problems early on in the project.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Disadvantages</h2>
          <ul className="se-example">
            <li>✗ Not suitable for large systems or systems with complex requirements.</li>
            <li>✗ Risk of scope creep as users continuously request new features.</li>
            <li>✗ Can be time-consuming and costly due to repeated iterations.</li>
            <li>✗ The prototype may be misinterpreted as the final product, leading to unrealistic expectations.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: Prototyping Model</h2>
          <pre>{`
     Requirements Gathering
             │
      Prototype Development
             │
        User Evaluation  ←→
             │
     Refining the Prototype
             │
  → Repeat (Until the System is Satisfactory)
             │
    Final System Delivery
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default PrototypingModel;
