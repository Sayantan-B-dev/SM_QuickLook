import React from "react";
import "../../../../CSS/SE.css";

function BoundaryValueTesting() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Boundary Value Testing</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition</h2>
          <p className="se-example">
            Boundary Value Testing (BVT) is a black-box testing technique in which tests are designed to include values at the boundaries of input domains. It is based on the observation that defects often occur at the extreme ends of input ranges.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">How to Choose Min and Max Values</h2>
          <p className="se-example">
            Suppose the input range is from <strong>min = 10</strong> to <strong>max = 100</strong>.
            You should test:
          </p>
          <pre>{`
Valid Test Cases:
- Minimum value: 10
- Minimum + 1: 11
- Maximum - 1: 99
- Maximum value: 100
- A typical mid-value: 55

Invalid Test Cases:
- Just below min: 9
- Just above max: 101
          `}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Valid vs Invalid Test Cases</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Test Input</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Valid</td>
                <td>10</td>
                <td>Exact lower boundary</td>
              </tr>
              <tr>
                <td>Valid</td>
                <td>11</td>
                <td>Just above lower boundary</td>
              </tr>
              <tr>
                <td>Valid</td>
                <td>99</td>
                <td>Just below upper boundary</td>
              </tr>
              <tr>
                <td>Valid</td>
                <td>100</td>
                <td>Exact upper boundary</td>
              </tr>
              <tr>
                <td>Invalid</td>
                <td>9</td>
                <td>Below lower boundary</td>
              </tr>
              <tr>
                <td>Invalid</td>
                <td>101</td>
                <td>Above upper boundary</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: Boundary Value Testing</h2>
          <pre>{`
Range: [10, 100]
         ↓        ↓
Valid: 10, 11, ..., 99, 100
Invalid: 9, 101
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default BoundaryValueTesting;
