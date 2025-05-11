import React from "react";
import "../../../../CSS/SE.css";

function RADModel() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Rapid Application Development (RAD) Model</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition</h2>
          <p className="se-example">
            The Rapid Application Development (RAD) Model is a software development methodology that emphasizes an extremely fast development cycle. Unlike traditional models, RAD focuses on quick prototyping and iterative user feedback, aiming to develop high-quality software in a short time frame. It typically involves collaborative user involvement and the use of automated tools for rapid prototyping.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Key Features</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>Prototyping:</strong> RAD uses rapid prototyping to create working models of the software for immediate feedback.</p>
              <p className="se-example"><strong>User Involvement:</strong> The user is actively involved throughout the development process, ensuring the software meets the user’s needs.</p>
              <p className="se-example"><strong>Incremental Delivery:</strong> Software is delivered in small, manageable parts or releases for faster evaluation and improvement.</p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                RAD focuses on accelerating the development process by using prototypes and iterative cycles, with heavy reliance on user feedback to refine the system as development progresses.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Advantages</h2>
          <ul className="se-example">
            <li>✓ Faster delivery of working software, reducing the time to market.</li>
            <li>✓ Continuous user feedback helps improve the product’s functionality and usability.</li>
            <li>✓ Allows for flexibility and adaptability in accommodating changes during development.</li>
            <li>✓ Prototyping helps identify potential issues early in the development process.</li>
            <li>✓ Suitable for projects with well-defined requirements and a quick turnaround time.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Disadvantages</h2>
          <ul className="se-example">
            <li>✗ Not ideal for large-scale projects due to limited scalability and complexity handling.</li>
            <li>✗ Heavy reliance on user feedback may lead to unrealistic expectations or scope creep.</li>
            <li>✗ Prototyping may result in incomplete solutions if user feedback is not properly implemented.</li>
            <li>✗ Resource-intensive as it requires rapid development tools and skilled personnel.</li>
            <li>✗ Can be difficult to control the overall project scope and cost with continuous changes and iterations.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: RAD Model</h2>
          <pre>{`
          +---------------------+
          |   Requirement       |
          |   Planning          |
          +---------------------+
                    ↓
          +---------------------+
          |   User Design       |
          |   (Prototyping)     |
          +---------------------+
                    ↓
          +---------------------+
          |   Construction      |
          |   (Development)     |
          +---------------------+
                    ↓
          +---------------------+
          |   Cutover           |
          |   (Final Testing &  |
          |    Implementation)  |
          +---------------------+
                    ↓
          Iterative Loop for Feedback
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default RADModel;
