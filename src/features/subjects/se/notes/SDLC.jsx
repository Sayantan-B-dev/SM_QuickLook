import React from "react";
import "../../../../CSS/SE.css";

function SDLC() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Software Development Life Cycle (SDLC)</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition of SDLC</h2>
          <p className="se-example">
            The Software Development Life Cycle (SDLC) is a structured process used by software engineers to design, develop, test, and deploy software efficiently and with high quality. It ensures that all functional and user requirements are met while controlling time and cost.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Phases of SDLC</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>1. Requirement Analysis:</strong> Gathering and analyzing user needs.</p>
              <p className="se-example"><strong>2. System Design:</strong> Planning architecture, components, and interfaces.</p>
              <p className="se-example"><strong>3. Implementation:</strong> Writing actual code based on design.</p>
              <p className="se-example"><strong>4. Testing:</strong> Verifying that the software works as intended.</p>
              <p className="se-example"><strong>5. Deployment:</strong> Releasing the product to users or clients.</p>
              <p className="se-example"><strong>6. Maintenance:</strong> Fixing issues and upgrading features over time.</p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                These phases ensure that software is built in a controlled, predictable, and measurable way, reducing the risks of failure or cost overrun.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: SDLC Process</h2>
          <pre>{`
+------------------------+
| 1. Requirement Analysis|
+------------------------+
             ↓
+------------------------+
|    2. System Design     |
+------------------------+
             ↓
+------------------------+
|   3. Implementation     |
+------------------------+
             ↓
+------------------------+
|      4. Testing         |
+------------------------+
             ↓
+------------------------+
|     5. Deployment       |
+------------------------+
             ↓
+------------------------+
|     6. Maintenance      |
+------------------------+
          `}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default SDLC;
