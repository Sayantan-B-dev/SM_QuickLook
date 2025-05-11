import React from "react";
import "../../../../CSS/SE.css";

function AgileModel() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Agile Model</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition</h2>
          <p className="se-example">
            The Agile Model is an iterative and incremental software development methodology that emphasizes flexibility, collaboration, and customer feedback. It promotes adaptive planning, early delivery of small functional releases, and continual improvement throughout the development cycle. Agile is best suited for projects where requirements are expected to change frequently.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Key Features</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>Iterative Development:</strong> Agile develops the product in small, manageable parts (iterations) that are reviewed and improved in each cycle.</p>
              <p className="se-example"><strong>Customer Collaboration:</strong> Continuous communication and collaboration with the customer throughout the development process.</p>
              <p className="se-example"><strong>Embracing Change:</strong> Agile is flexible and welcomes changes even late in the development process, allowing the product to adapt as user needs evolve.</p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                The Agile Model values individuals and interactions, working software, customer collaboration, and responding to change over processes and tools. It focuses on delivering small, incremental improvements in functional software.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Advantages</h2>
          <ul className="se-example">
            <li>✓ Flexibility to accommodate changing requirements throughout the development cycle.</li>
            <li>✓ Faster delivery of functional software due to iterative releases.</li>
            <li>✓ Close collaboration with customers ensures the software meets their needs and expectations.</li>
            <li>✓ Continuous feedback allows for early detection of issues and improvements.</li>
            <li>✓ Promotes team collaboration and quick decision-making, improving productivity.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Disadvantages</h2>
          <ul className="se-example">
            <li>✗ Difficult to predict timelines and costs due to the flexibility of the model.</li>
            <li>✗ Requires a high level of customer involvement, which may not always be feasible.</li>
            <li>✗ Can be challenging to scale for larger projects or teams.</li>
            <li>✗ Lack of comprehensive documentation, which may hinder future maintenance or onboarding.</li>
            <li>✗ Requires skilled team members and effective communication to be successful.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: Agile Model</h2>
          <pre>{`
   +------------------+
   |  Requirement     |       
   |  Gathering       |
   +------------------+
           ↓
   +------------------+
   |  Sprint Planning |
   +------------------+
           ↓
   +------------------+
   |    Iteration     |       ←─> Iteration/Feedback
   |  (Development)   |
   +------------------+
           ↓
   +------------------+
   |  Sprint Review   |
   +------------------+
           ↓
   +------------------+
   |  Release         |
   +------------------+
           ↓
   Continuous Feedback Loop
          ↑
           │
  (Product Backlog Refinement)
          ↑
           ↓
   +------------------+
   |  Next Sprint     |
   +------------------+
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default AgileModel;
