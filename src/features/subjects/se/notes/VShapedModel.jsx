import React from "react";
import "../../../../CSS/SE.css";

function VShapedModel() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">V-Shaped Model</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Definition</h2>
          <p className="se-example">
            The V-Shaped Model, also known as the Verification and Validation model, is an extension of the waterfall model. Instead of moving down in a linear way, the process steps are bent upwards after the coding phase to form a V shape. It emphasizes testing at each development stage, with a corresponding test phase for every development activity.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Key Features</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>High Emphasis on Testing:</strong> Each development stage has an associated test plan.</p>
              <p className="se-example"><strong>Verification and Validation:</strong> Both processes are equally important.</p>
              <p className="se-example"><strong>Simple and Easy to Use:</strong> Good for small to medium projects with fixed requirements.</p>
            </div>
            <div className="se-grid-item unstructured">
              <p className="se-example">
                The V-Model ensures early development of test cases, helping reduce defects. However, it is not flexible for handling changes once the development starts.
              </p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Advantages</h2>
          <ul className="se-example">
            <li>✓ Early test planning leads to early detection of issues.</li>
            <li>✓ Each development phase has a corresponding testing phase, ensuring consistency and quality.</li>
            <li>✓ Suitable for small projects with well-defined requirements.</li>
            <li>✓ Simple to understand and implement.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Disadvantages</h2>
          <ul className="se-example">
            <li>✗ Limited flexibility for changes after the project has started.</li>
            <li>✗ Not suitable for large or complex projects with evolving requirements.</li>
            <li>✗ Testing is done late in the process, which may delay defect identification.</li>
            <li>✗ Difficult to manage in projects that involve frequent changes or iterations.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: V-Shaped Model</h2>
          <pre>{`
           Requirements Analysis           ←→     Acceptance Testing
                    │                               ↑
           System Design               ←→     System Testing
                    │                               ↑
        Architectural Design         ←→   Integration Testing
                    │                               ↑
         Module Design               ←→     Unit Testing
                    │                               ↑
                Coding  (Implementation Phase)
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default VShapedModel;
