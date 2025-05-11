import React from "react";
import "../../../../CSS/SE.css";

function SoftwareProjectManagement() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Software Project Management (SPM)</h1>

        <div className="se-section">
          <h2 className="se-subtitle">What is Software Project Management?</h2>
          <p className="se-example">
            Software Project Management (SPM) is the process of planning,
            executing, monitoring, and controlling software projects to ensure
            they are delivered on time, within budget, and with the required
            quality. It includes managing project scope, timelines, cost, risks,
            and team coordination.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">
            Key Responsibilities of a Software Project Manager
          </h2>
          <ul className="se-example list-disc pl-6">
            <li>Define project goals and scope</li>
            <li>Estimate time and cost</li>
            <li>Create and manage project plans</li>
            <li>Allocate tasks and resources</li>
            <li>Communicate with stakeholders</li>
            <li>Identify and mitigate risks</li>
            <li>Track progress and ensure deadlines are met</li>
            <li>Ensure quality of deliverables</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Skills Required for a Project Manager</h2>
          <ul className="se-example list-disc pl-6">
            <li>
              <strong>Leadership:</strong> Ability to motivate and guide the
              team
            </li>
            <li>
              <strong>Communication:</strong> Clear communication with team and
              stakeholders
            </li>
            <li>
              <strong>Risk Management:</strong> Anticipating and mitigating
              risks
            </li>
            <li>
              <strong>Time Management:</strong> Prioritizing tasks effectively
            </li>
            <li>
              <strong>Technical Knowledge:</strong> Understanding software
              processes
            </li>
            <li>
              <strong>Problem-Solving:</strong> Resolving conflicts and
              challenges
            </li>
            <li>
              <strong>Negotiation Skills:</strong> Balancing needs of team and
              clients
            </li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Project Planning in SPM</h2>
          <p className="se-example">
            Project planning is a core phase where the manager creates a roadmap
            for executing the project. It includes several sub-activities:
          </p>

          <h3 className="se-subtitle mt-4">1. Estimation</h3>
          <p className="se-example">
            Involves estimating effort, time, and cost required to complete the
            project. Techniques include expert judgment, analogy-based
            estimation, and algorithmic models like COCOMO.
          </p>

          <h3 className="se-subtitle mt-4">2. Staffing</h3>
          <p className="se-example">
            Determining the roles, responsibilities, and number of team members
            needed. Also includes defining the project organization structure
            and resource allocation plan.
          </p>

          <h3 className="se-subtitle mt-4">3. Scheduling</h3>
          <p className="se-example">
            Creating a timeline of project activities using tools like Gantt
            Charts and PERT Charts. It defines task sequences, dependencies, and
            deadlines.
          </p>

          <h3 className="se-subtitle mt-4">4. Risk Management</h3>
          <p className="se-example">
            Identifying, analyzing, and mitigating risks that could impact the
            project. Includes risk assessment, prioritization, and preparation
            of contingency plans.
          </p>

          <h3 className="se-subtitle mt-4">5. Miscellaneous Plans</h3>
          <ul className="se-example list-disc pl-6">
            <li>
              <strong>Communication Plan:</strong> Defines how and when
              information will be shared among stakeholders.
            </li>
            <li>
              <strong>Configuration Management Plan:</strong> Handles version
              control and documentation changes.
            </li>
            <li>
              <strong>Quality Assurance Plan:</strong> Ensures deliverables meet
              specified standards through reviews, audits, and testing.
            </li>
          </ul>
        </div>
        <div className="se-section">
          <h2 className="se-subtitle">
            Precedence Diagram with Project Planning
          </h2>
          <p className="se-example">
            A Precedence Diagram helps visualize the sequence of activities and
            their dependencies. In this case, we're integrating several aspects
            of project planning, including size, effort, cost, duration
            estimation, and staff scheduling.
          </p>
          <pre>{`
      [Start]
         |
    (Size: 2, Effort: 5hrs, Cost: $100, Duration: 2 Days)
         |
     [Activity A] -------> [Activity B] 
         |                     |
     (Size: 3, Effort: 8hrs, Cost: $150, Duration: 3 Days)
         |                     |
     [Activity C] <--------- [Activity D]
         |
   (Size: 4, Effort: 6hrs, Cost: $120, Duration: 2 Days)
         |
       [End]
  `}</pre>
        </div>
      </div>
    </div>
  );
}

export default SoftwareProjectManagement;
