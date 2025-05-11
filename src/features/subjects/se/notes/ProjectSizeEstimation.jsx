import React from "react";
import "../../../../CSS/SE.css";

function ProjectSizeEstimation() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Project Size Estimation</h1>

        <div className="se-section">
          <h2 className="se-subtitle">What is Project Size Estimation?</h2>
          <p className="se-example">
            Project size estimation helps determine the scope and effort
            required to build a software system. It influences planning,
            scheduling, and resource allocation.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Function Point (FP)</h2>
          <p className="se-example">
            Function Point is a unit of measurement to express the amount of
            business functionality an information system provides to a user.
            It is independent of the programming language and measures size
            based on user-visible features.
          </p>
          <pre>{`
FP = UFP × CAF
Where:
UFP = Unadjusted Function Points (based on number of inputs, outputs, inquiries, files, and interfaces)
CAF = Complexity Adjustment Factor (based on 14 general system characteristics)`}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Lines of Code (LOC)</h2>
          <p className="se-example">
            LOC measures the size of software by counting the number of lines
            in the source code. It's language-dependent and used for effort
            and cost estimation.
          </p>
          <pre>{`
LOC includes:
- Executable lines
- Data definitions
- Comments (sometimes excluded)

Example:
int sum(int a, int b) {
  return a + b;
}
// 3 lines of code (if comments included)`}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Function Point vs Lines of Code (LOC)</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Function Point (FP)</th>
                <th>Lines of Code (LOC)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>Measures functionality from user's perspective.</td>
                <td>Measures the number of lines in source code.</td>
              </tr>
              <tr>
                <td>Language Dependency</td>
                <td>Independent of programming language.</td>
                <td>Dependent on the language used.</td>
              </tr>
              <tr>
                <td>Focus</td>
                <td>Focuses on user-visible features.</td>
                <td>Focuses on developer implementation.</td>
              </tr>
              <tr>
                <td>Accuracy</td>
                <td>More accurate for early estimation.</td>
                <td>Less accurate before code is written.</td>
              </tr>
              <tr>
                <td>Ease of Use</td>
                <td>Needs training to analyze function types.</td>
                <td>Easy to count using tools or manually.</td>
              </tr>
              <tr>
                <td>Application</td>
                <td>Used in function-based estimation methods.</td>
                <td>Used in traditional estimation techniques.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProjectSizeEstimation;
