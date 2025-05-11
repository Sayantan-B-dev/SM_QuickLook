import React from "react";
import "../../../../CSS/SE.css";

function Scrum() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">SCRUM Model</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition</h2>
          <p className="se-example">
            SCRUM is an Agile methodology used primarily for software development. It is a framework that encourages collaborative teamwork, frequent inspection, and adaptation to deliver high-quality products. SCRUM breaks the development process into smaller, manageable chunks called "Sprints" that last typically 2-4 weeks.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Key Features</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>Iterative Process:</strong> SCRUM works in short, fixed-length iterations called Sprints.</p>
              <p className="se-example"><strong>Roles:</strong> SCRUM defines specific roles, including Product Owner, SCRUM Master, and Development Team.</p>
              <p className="se-example"><strong>Daily Standup Meetings:</strong> A quick daily meeting (15 mins) for teams to discuss progress and blockers.</p>
              <p className="se-example"><strong>Backlog:</strong> A prioritized list of tasks or user stories, which the team works on during Sprints.</p>
              <p className="se-example"><strong>Review and Retrospective:</strong> At the end of each Sprint, a review is conducted followed by a retrospective to improve the next Sprint.</p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                SCRUM focuses on delivering increments of the product and involves regular communication, feedback, and adjustment to ensure a flexible approach to development.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">SCRUM Process</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>Product Backlog:</strong> A list of all desired work items (features, enhancements, bug fixes).</p>
              <p className="se-example"><strong>Sprint Planning:</strong> The team selects items from the Product Backlog to work on during the Sprint.</p>
              <p className="se-example"><strong>Sprint:</strong> A time-boxed period (usually 2-4 weeks) in which the selected items are worked on.</p>
              <p className="se-example"><strong>Daily Standups:</strong> A short meeting where the team discusses progress, obstacles, and plans for the day.</p>
              <p className="se-example"><strong>Sprint Review:</strong> A meeting at the end of the Sprint to demo completed work and gather feedback.</p>
              <p className="se-example"><strong>Sprint Retrospective:</strong> A meeting to discuss what went well and what can be improved in the next Sprint.</p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                This process is iterative and incremental, where each Sprint is a cycle that focuses on delivering value to the customer. After each Sprint, the feedback gathered leads to improvements in the next cycle.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: SCRUM Process</h2>
          <pre>{`
            Product Backlog → Sprint Planning → Sprint → Daily Standup → Sprint Review → Sprint Retrospective
                 ↑                                              ↓
              Backlog Refinement ←-----------------------------------
          `}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Advantages and Disadvantages</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <h3 className="se-example">Advantages</h3>
              <ul>
                <li>Improved product quality through regular reviews.</li>
                <li>Increased collaboration between team members and stakeholders.</li>
                <li>Faster time-to-market with incremental delivery.</li>
                <li>Highly flexible and adaptable to changing requirements.</li>
              </ul>
            </div>
            <div className="se-grid-item unstructured">
              <h3 className="se-example">Disadvantages</h3>
              <ul>
                <li>Requires a high level of discipline from the team.</li>
                <li>Can be difficult to implement in large-scale projects without experienced SCRUM Masters.</li>
                <li>May not be suitable for projects with very fixed and rigid requirements.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scrum;
