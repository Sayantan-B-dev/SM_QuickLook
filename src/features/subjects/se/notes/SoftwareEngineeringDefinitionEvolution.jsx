import React from "react";
import "../../../../CSS/SE.css";

function SoftwareEngineeringDefinitionEvolution() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Software Engineering: Definition and Evolution</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition of Software Engineering</h2>
          <p className="se-example">
            Software Engineering is a branch of computer science that deals with the systematic design, development, testing, deployment, and maintenance of software applications using engineering principles. It focuses on creating reliable, efficient, and scalable software systems while managing cost, time, and resources.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Evolution of Software Engineering</h2>
          <p className="se-example">
            The field of Software Engineering has evolved significantly since the 1960s, primarily due to the software crisis — where increasing system complexity led to unmanageable and error-prone software development practices. This drove the need for structured and disciplined approaches, giving rise to Software Engineering.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Evolution Stages Overview</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>Structured Era:</strong> 1960s-1970s – Emergence of procedural programming and structured methods.</p>
              <p className="se-example"><strong>Object-Oriented Era:</strong> 1980s-1990s – Introduction of OOP, reuse and modularity.</p>
              <p className="se-example"><strong>Agile and Modern Practices:</strong> 2000s-Present – Emphasis on flexibility, collaboration, CI/CD, and DevOps.</p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example"><strong>Challenges Addressed:</strong> Cost overruns, delayed schedules, poor quality, and maintainability.</p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: Evolution of Software Engineering</h2>
          <pre>{`
+----------------------------+
|   1960s: Software Crisis   |
+----------------------------+
             ↓
+----------------------------+
| Structured Programming Era |
|  - Flowcharts              |
|  - Waterfall Model         |
+----------------------------+
             ↓
+----------------------------+
| Object-Oriented Paradigm   |
|  - C++, Java               |
|  - Reusability, Encapsulation |
+----------------------------+
             ↓
+----------------------------+
| Agile & DevOps Era         |
|  - Agile, Scrum, DevOps    |
|  - Rapid delivery, CI/CD   |
+----------------------------+
          `}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default SoftwareEngineeringDefinitionEvolution;
