import React from "react";
import "../../../../CSS/SE.css";

function CohesionAndCoupling() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Cohesion and Coupling in Software Engineering</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Cohesion</h2>
          <p className="se-example">
            Cohesion refers to how closely the operations in a single module are related to each other. High cohesion means the elements inside the module belong together and work together as a single, well-defined task.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Coupling</h2>
          <p className="se-example">
            Coupling refers to the degree of interdependence between software modules. Low coupling is preferred as it allows for better modularity and less ripple effect on changes.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Cohesion vs Coupling</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Cohesion</th>
                <th>Coupling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>Intra-module bonding</td>
                <td>Inter-module dependency</td>
              </tr>
              <tr>
                <td>Goal</td>
                <td>Increase</td>
                <td>Decrease</td>
              </tr>
              <tr>
                <td>Quality Indicator</td>
                <td>High cohesion preferred</td>
                <td>Low coupling preferred</td>
              </tr>
              <tr>
                <td>Maintenance</td>
                <td>Easier</td>
                <td>Harder if tightly bound</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Modularity</h2>
          <p className="se-example">
            Modularity is the concept of dividing a system into separate components or modules, each responsible for a specific functionality. It improves readability, maintainability, and scalability.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Cleanly vs Non-Cleanly Decomposed System</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Cleanly Decomposed System</th>
                <th>Non-Cleanly Decomposed System</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Module Independence</td>
                <td>High</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Understandability</td>
                <td>Easy</td>
                <td>Complex</td>
              </tr>
              <tr>
                <td>Maintenance</td>
                <td>Simple</td>
                <td>Difficult</td>
              </tr>
              <tr>
                <td>Reusability</td>
                <td>High</td>
                <td>Low</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Classification of Cohesion</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <pre>{`
Types of Cohesion (Best to Worst):
1. Functional
2. Sequential
3. Communicational
4. Procedural
5. Temporal
6. Logical
7. Coincidental
              `}</pre>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                Functional cohesion is the most desirable, where every part of the module contributes to a single well-defined task. Coincidental cohesion is the weakest, where parts are grouped arbitrarily.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Degree of Cohesion</h2>
          <pre>{`
High Cohesion  -> Better module design, easier to maintain
Medium Cohesion -> Acceptable, but may need improvement
Low Cohesion   -> Poor design, hard to maintain
          `}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Classification of Coupling</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <pre>{`
Types of Coupling (Worst to Best):
1. Content Coupling
2. Common Coupling
3. Control Coupling
4. Stamp Coupling
5. Data Coupling
6. No Coupling (ideal but rare)
              `}</pre>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                Data coupling is the most desirable in practice where modules interact through well-defined parameters. Content coupling is the worst, where one module directly modifies the contents of another.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Degree of Coupling</h2>
          <pre>{`
Tight Coupling   -> Difficult to modify and test
Loose Coupling   -> Encouraged, promotes modularity
No Coupling      -> Ideal but often impractical
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default CohesionAndCoupling;
