import React from "react";
import "../../../../CSS/SE.css";

function ReverseEngineeringAndCASE() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Reverse Engineering & CASE Tools</h1>

        {/* Reverse Engineering Section */}
        <div className="se-section">
          <h2 className="se-subtitle">What is Reverse Engineering?</h2>
          <p className="se-example">
            Reverse Engineering is the process of analyzing a software system to identify its components and interrelationships, and create representations of the system in another form or at a higher level of abstraction. It is often used when the source code is unavailable or outdated.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Purpose of Reverse Engineering</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example">Understanding legacy systems</p>
            </div>
            <div className="se-grid-item structured">
              <p className="se-example">Recovering lost documentation</p>
            </div>
            <div className="se-grid-item structured">
              <p className="se-example">Detecting malware or vulnerabilities</p>
            </div>
            <div className="se-grid-item structured">
              <p className="se-example">Software migration & re-engineering</p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Reverse Engineering Process</h2>
          <pre>{`
[Binary/Executable]
        ↓
  Disassemble/Decompile
        ↓
  Analyze Components
        ↓
  Reconstruct Design
        ↓
  Generate Documentation
          `}</pre>
        </div>

        {/* CASE Tools Section */}
        <div className="se-section">
          <h2 className="se-subtitle">What is CASE (Computer-Aided Software Engineering)?</h2>
          <p className="se-example">
            CASE refers to the use of software tools that assist in all phases of software development life cycle, from planning to testing. These tools help improve productivity, accuracy, and consistency.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Types of CASE Tools</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <h3 className="se-subtitle">Upper CASE</h3>
              <p className="se-example">Supports early SDLC stages like requirement analysis and design (e.g., Rational Rose, ERwin)</p>
            </div>
            <div className="se-grid-item structured">
              <h3 className="se-subtitle">Lower CASE</h3>
              <p className="se-example">Supports later SDLC stages like implementation and testing (e.g., Selenium, JUnit)</p>
            </div>
            <div className="se-grid-item structured">
              <h3 className="se-subtitle">Integrated CASE</h3>
              <p className="se-example">Combines both upper and lower CASE tools into a single environment (e.g., Enterprise Architect)</p>
            </div>
          </div>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Examples of CASE Tools</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Tool</th>
                <th>Category</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rational Rose</td>
                <td>Upper CASE</td>
                <td>UML modeling and design</td>
              </tr>
              <tr>
                <td>ERwin</td>
                <td>Upper CASE</td>
                <td>Database design</td>
              </tr>
              <tr>
                <td>JUnit</td>
                <td>Lower CASE</td>
                <td>Java unit testing</td>
              </tr>
              <tr>
                <td>Selenium</td>
                <td>Lower CASE</td>
                <td>Web application testing</td>
              </tr>
              <tr>
                <td>Enterprise Architect</td>
                <td>Integrated CASE</td>
                <td>Design, development, testing</td>
              </tr>
              <tr>
                <td>Visual Paradigm</td>
                <td>Integrated CASE</td>
                <td>Design, modeling, code generation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Diagram: CASE Tool Support in SDLC</h2>
          <pre>{`
[Planning] → [Analysis] → [Design] → [Coding] → [Testing] → [Maintenance]
   ↑             ↑            ↑          ↑          ↑            ↑
Upper CASE ───────────────┐
                         │
Lower CASE ───────────────────────┐
                                 ↓
                        Integrated CASE
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default ReverseEngineeringAndCASE;
