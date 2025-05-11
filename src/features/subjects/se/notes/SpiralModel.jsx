import React from "react";
import "../../../../CSS/SE.css";

function SpiralModel() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Spiral Model</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition</h2>
          <p className="se-example">
            The Spiral Model is a risk-driven software development model that combines iterative development with the systematic aspects of the waterfall model. It involves repeated iterations or “spirals” of development, with each spiral consisting of planning, risk analysis, engineering, testing, and evaluation.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Key Features</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>Risk-Driven Approach:</strong> Each iteration focuses on identifying and addressing project risks.</p>
              <p className="se-example"><strong>Iterative Development:</strong> Development is broken into smaller cycles, with each iteration producing a working version of the product.</p>
              <p className="se-example"><strong>Focus on Prototyping:</strong> Each cycle involves the development of prototypes, which are refined over time.</p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                The Spiral Model is highly flexible and allows for continuous risk management, but it can be resource-intensive and difficult to manage for smaller projects.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Advantages</h2>
          <ul className="se-example">
            <li>✓ Emphasis on risk management, making it suitable for large, complex projects.</li>
            <li>✓ Flexibility to adapt to changes and evolving requirements throughout the project lifecycle.</li>
            <li>✓ Regular prototypes allow for ongoing user feedback, improving the product iteratively.</li>
            <li>✓ Clear focus on identifying and mitigating risks early in the development process.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Disadvantages</h2>
          <ul className="se-example">
            <li>✗ Can be resource-intensive due to repeated risk analysis and prototype development.</li>
            <li>✗ Difficult to manage for smaller projects due to its complexity and overhead.</li>
            <li>✗ Requires specialized expertise to carry out proper risk assessments and evaluations.</li>
            <li>✗ May result in unclear project scope and expectations if not well-managed.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: Spiral Model</h2>
          <pre>{`
     +--------------------------+
     |     Planning & Analysis  |
     +--------------------------+
               ↓
     +--------------------------+
     |     Risk Analysis        |
     +--------------------------+
               ↓
     +--------------------------+
     |     Engineering & Design |
     +--------------------------+
               ↓
     +--------------------------+
     |     Testing & Evaluation |
     +--------------------------+
               ↓
    Iteration Loop (Repetition)
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default SpiralModel;
