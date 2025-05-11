import React from "react";
import "../../../../CSS/SE.css";

function DesignApproachComparison() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Software Design Approaches</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Overview</h2>
          <p className="se-example">
            Software design is the process of transforming user requirements into a suitable form, which helps the programmer in software coding and implementation. The two widely used approaches are:
          </p>
          <ul className="se-example list-disc pl-6">
            <li><strong>Function-Oriented Design:</strong> Focuses on functions and procedures that transform data.</li>
            <li><strong>Object-Oriented Design:</strong> Emphasizes encapsulation of data and behavior into reusable objects.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Function-Oriented Design</h2>
          <p className="se-example">
            Function-Oriented Design decomposes a system into a set of interacting functions. The main concern is how data flows between functions. Tools like Data Flow Diagrams (DFDs) are commonly used.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Object-Oriented Design</h2>
          <p className="se-example">
            Object-Oriented Design decomposes a system into interacting objects. Each object contains both data (attributes) and behavior (methods). This approach improves code reusability, flexibility, and maintainability.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Comparison: Function-Oriented vs Object-Oriented Design</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Function-Oriented Design</th>
                <th>Object-Oriented Design</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Unit</td>
                <td>Function/Procedure</td>
                <td>Object (class instance)</td>
              </tr>
              <tr>
                <td>Focus</td>
                <td>Process and logic</td>
                <td>Data and behavior encapsulation</td>
              </tr>
              <tr>
                <td>Data Access</td>
                <td>Global/shared data</td>
                <td>Private data within objects</td>
              </tr>
              <tr>
                <td>Design Tools</td>
                <td>Data Flow Diagrams (DFD), Structure Charts</td>
                <td>UML Diagrams (Class, Sequence, Use-case)</td>
              </tr>
              <tr>
                <td>Modularity</td>
                <td>Procedural modules</td>
                <td>Reusable objects and classes</td>
              </tr>
              <tr>
                <td>Reusability</td>
                <td>Low</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Real-life Mapping</td>
                <td>Less natural</td>
                <td>Highly natural (models real-world entities)</td>
              </tr>
              <tr>
                <td>Suitability</td>
                <td>Best for small, process-driven systems</td>
                <td>Best for complex, evolving systems</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DesignApproachComparison;
