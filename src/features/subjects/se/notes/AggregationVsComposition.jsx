import React from "react";
import "../../../../CSS/SE.css";

function AggregationVsComposition() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Aggregation vs Composition</h1>

        <div className="se-section">
          <h2 className="se-subtitle">What is Aggregation?</h2>
          <p className="se-example">
            Aggregation is a “has-a” relationship where the child can exist independently
            of the parent. It represents a weak association.
          </p>
          <pre>{`
class Department {
  String name;
}

class School {
  Department dept; // Aggregation
}
          `}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">What is Composition?</h2>
          <p className="se-example">
            Composition is a stronger form of association where the child cannot exist
            independently of the parent.
          </p>
          <pre>{`
class Heart {
  // vital component
}

class Human {
  private Heart heart = new Heart(); // Composition
}
          `}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Difference Between Aggregation and Composition</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Aggregation</th>
                <th>Composition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>“Has-a” relationship with independent lifecycles</td>
                <td>Strong “has-a” relationship; child cannot live without parent</td>
              </tr>
              <tr>
                <td>Dependency</td>
                <td>Child object can exist without parent</td>
                <td>Child object depends entirely on parent</td>
              </tr>
              <tr>
                <td>Example</td>
                <td>School and Department</td>
                <td>Human and Heart</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>Weak Association</td>
                <td>Strong Association</td>
              </tr>
              <tr>
                <td>Object Lifespan</td>
                <td>Objects live independently</td>
                <td>Child's lifespan is bound to parent</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: Aggregation</h2>
          <pre>{`
+------------+         +----------------+
|   School   |<>------>|  Department    |
+------------+         +----------------+
          `}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: Composition</h2>
          <pre>{`
+--------+        +--------+
| Human  |●------>| Heart  |
+--------+        +--------+
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default AggregationVsComposition;
