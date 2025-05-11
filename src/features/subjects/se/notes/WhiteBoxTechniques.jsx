import React from "react";
import "../../../../CSS/SE.css";

function WhiteBoxTechniques() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">White Box Testing Techniques</h1>

        <div className="se-section">
          <h2 className="se-subtitle">1. Statement Coverage</h2>
          <p className="se-example">
            Statement coverage is a white-box testing technique that ensures every line of code is executed at least once during testing.
          </p>
          <h2 className="se-subtitle">Formula</h2>
          <pre>{`
Statement Coverage (%) = 
(Number of statements executed / Total number of statements) × 100
          `}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">2. Condition Coverage</h2>
          <p className="se-example">
            Condition coverage ensures that each Boolean sub-expression in a decision is evaluated to both TRUE and FALSE at least once.
          </p>
          <pre>{`
Example:
if (A && B)
Condition coverage ensures:
- A is TRUE and FALSE
- B is TRUE and FALSE
          `}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">3. Data Flow Testing</h2>
          <p className="se-example">
            Data flow testing focuses on the points at which variables receive values and the points at which these values are used. It helps detect improper use of variables and ensures that data is correctly initialized and used.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Advantages & Disadvantages of Data Flow Testing</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Advantages</th>
                <th>Disadvantages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Detects variable misuse and undefined data usage</td>
                <td>More complex to implement than other white-box techniques</td>
              </tr>
              <tr>
                <td>Enhances reliability by ensuring proper data initialization</td>
                <td>Not effective for large-scale systems due to complexity</td>
              </tr>
              <tr>
                <td>Identifies potential bugs early in development</td>
                <td>Requires deep knowledge of internal code and data flow</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: Statement Coverage Example</h2>
          <pre>{`
Code:
1. int a = 5;
2. if (a > 0) {
3.   a++;
4. }
5. return a;

To achieve 100% statement coverage:
- Execute all 5 lines at least once
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default WhiteBoxTechniques;
