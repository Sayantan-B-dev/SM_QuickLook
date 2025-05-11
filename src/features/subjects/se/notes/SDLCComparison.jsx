import React from "react";
import "../../../../CSS/SE.css";

function SDLCComparison() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Comparison of SDLC Models</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Comparison Table</h2>
          <div className="se-grid">
              <table className="se-table">
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>Classical Waterfall</th>
                    <th>Iterative Waterfall</th>
                    <th>Prototyping</th>
                    <th>Incremental</th>
                    <th>Evolutionary</th>
                    <th>RAD</th>
                    <th>Spiral</th>
                    <th>Agile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Development Approach</td>
                    <td>Linear and sequential</td>
                    <td>Iterative with feedback loops between phases</td>
                    <td>Develop prototypes, refine based on feedback</td>
                    <td>Incrementally deliver parts of the system</td>
                    <td>Development in small, evolving releases</td>
                    <td>Rapid prototyping and user feedback</td>
                    <td>Iterative, risk-driven, and evolving</td>
                    <td>Short iterations and constant customer feedback</td>
                  </tr>
                  <tr>
                    <td>Flexibility</td>
                    <td>Low</td>
                    <td>Moderate</td>
                    <td>High</td>
                    <td>Moderate</td>
                    <td>High</td>
                    <td>High</td>
                    <td>High</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Risk Management</td>
                    <td>None</td>
                    <td>Handled iteratively</td>
                    <td>Handled with prototypes</td>
                    <td>Handled with incremental delivery</td>
                    <td>Handled with evolving releases</td>
                    <td>Handled with prototypes and feedback</td>
                    <td>Handled in each iteration</td>
                    <td>Handled throughout the process</td>
                  </tr>
                  <tr>
                    <td>Cost</td>
                    <td>High if changes are needed</td>
                    <td>Lower than classical</td>
                    <td>Moderate (due to prototypes)</td>
                    <td>Moderate</td>
                    <td>Lower (due to incremental releases)</td>
                    <td>Moderate to high (prototyping costs)</td>
                    <td>High (due to risk management activities)</td>
                    <td>Moderate (due to continuous feedback)</td>
                  </tr>
                  <tr>
                    <td>Suitable Project Type</td>
                    <td>Fixed, well-defined requirements</td>
                    <td>Fixed requirements, but flexibility allowed</td>
                    <td>Uncertain or evolving requirements</td>
                    <td>Large, complex systems broken into parts</td>
                    <td>Prototyping with evolving requirements</td>
                    <td>Rapid development with clear requirements</td>
                    <td>High-risk projects, evolving scope</td>
                    <td>Dynamic, fast-paced projects with changing requirements</td>
                  </tr>
                  <tr>
                    <td>Test Phases</td>
                    <td>At the end</td>
                    <td>After each iteration</td>
                    <td>After prototype is built</td>
                    <td>After each increment</td>
                    <td>After each release</td>
                    <td>After each prototype</td>
                    <td>After each iteration</td>
                    <td>During each iteration</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  );
}

export default SDLCComparison;
