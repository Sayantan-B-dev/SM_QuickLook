import React from "react";
import "../../../../CSS/SE.css";

function FunctionPointAnalysis() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Function Point Analysis (FPA)</h1>

        <div className="se-section">
          <h2 className="se-subtitle">What is Function Point Analysis?</h2>
          <p className="se-example">
            Function Point Analysis (FPA) is a standardized method to measure software size
            by quantifying the functions provided to the user, independent of technology.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Unadjusted Transactional Functions (UTP)</h2>
          <p className="se-example">There are 5 types of functional units considered in UFP:</p>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <h3>EI (External Input)</h3>
              <p>User inputs data into the system. E.g., login form.</p>
            </div>
            <div className="se-grid-item structured">
              <h3>EO (External Output)</h3>
              <p>Data exits the system for user consumption. E.g., reports.</p>
            </div>
            <div className="se-grid-item structured">
              <h3>EQ (External Inquiry)</h3>
              <p>Input-output combo that does not update internal data. E.g., search queries.</p>
            </div>
            <div className="se-grid-item structured">
              <h3>ILF (Internal Logical File)</h3>
              <p>Logically related data maintained within the system. E.g., customer database.</p>
            </div>
            <div className="se-grid-item structured">
              <h3>EIF (External Interface File)</h3>
              <p>Files used by the system but maintained by another system. E.g., vendor data.</p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Value Adjustment Factor (VAF)</h2>
          <p className="se-example">
            VAF accounts for 14 general system characteristics like performance, portability,
            data communication, and user efficiency.
          </p>
          <pre>{`
VAF = 0.65 + (ΣFi × 0.01)
Where:
Fi = rating (0–5) of each of the 14 general system characteristics`}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Final Function Point (FP) Formula</h2>
          <pre>{`
FP = UFP × VAF
Where:
UFP = Unadjusted Function Points
VAF = Value Adjustment Factor`}</pre>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Example FP Estimation</h2>
          <pre>{`
Assume:
EI = 4 (avg weight = 4) → 4 × 4 = 16
EO = 3 (avg weight = 5) → 3 × 5 = 15
EQ = 2 (avg weight = 4) → 2 × 4 = 8
ILF = 2 (avg weight = 7) → 2 × 7 = 14
EIF = 1 (avg weight = 5) → 1 × 5 = 5

UFP = 16 + 15 + 8 + 14 + 5 = 58
Assume VAF = 1.01
Final FP = 58 × 1.01 = 58.58`}</pre>
        </div>
      </div>
    </div>
  );
}

export default FunctionPointAnalysis;
