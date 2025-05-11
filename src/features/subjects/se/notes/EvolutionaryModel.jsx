import React from "react";
import "../../../../CSS/SE.css";

function EvolutionaryModel() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Evolutionary Model</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition</h2>
          <p className="se-example">
            The Evolutionary Model is a software development model where the system is developed in incremental stages (called versions) based on evolving requirements. Each version is a prototype that is refined through several iterations, allowing for continuous user feedback and improvement over time.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Key Features</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>Prototyping:</strong> The system is initially developed as a prototype, which is refined based on feedback.</p>
              <p className="se-example"><strong>Iterative Development:</strong> The system is built in iterations, each version improving upon the last.</p>
              <p className="se-example"><strong>User Feedback:</strong> Continuous user feedback drives each iteration, ensuring the system meets user needs.</p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                The evolutionary model is highly flexible and adaptable, making it ideal for projects with unclear or evolving requirements, but it may result in scope creep if not managed properly.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Advantages</h2>
          <ul className="se-example">
            <li>✓ Supports changes and evolving requirements throughout the development process.</li>
            <li>✓ User feedback is incorporated early and often, leading to a system that better meets user needs.</li>
            <li>✓ The system can be deployed early with incremental improvements, providing value in the early stages.</li>
            <li>✓ Ideal for projects where requirements are not well-defined from the start.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Disadvantages</h2>
          <ul className="se-example">
            <li>✗ May result in scope creep, as continuous changes can expand the project’s scope beyond initial plans.</li>
            <li>✗ Continuous feedback loops may lead to delays in project timelines.</li>
            <li>✗ Prototype systems may lack proper documentation, leading to difficulties in maintenance.</li>
            <li>✗ It can be difficult to estimate project costs and time accurately due to constant changes and iterations.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: Evolutionary Model</h2>
          <pre>{`
  Initial Requirement Analysis
               │
     →    Develop Initial Prototype
               │
    ←  User Feedback & Evaluation  ←→  Modify the Prototype
               │
 Repeat Process (Iteration 1, Iteration 2, etc.)
               │
    → Final System Delivery (after several iterations)
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default EvolutionaryModel;
