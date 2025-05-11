import React from "react";
import "../../../../CSS/SE.css";

function PerformanceAndRegressionTesting() {
    return (
        <div className="se-wrapper">
            <div className="se-card">
                <h1 className="se-title">Performance Testing & Regression Testing</h1>

                {/* Performance Testing Section */}
                <div className="se-section">
                    <h2 className="se-subtitle">What is Performance Testing?</h2>
                    <p className="se-example">
                        Performance testing involves assessing the speed, responsiveness,
                        and stability of a software application under a specific load. Its
                        main goal is to identify performance bottlenecks and improve the
                        system's efficiency.
                    </p>
                </div>

                <div className="se-section">
                    <h2 className="se-subtitle">Types of Performance Testing</h2>
                    <div className="se-grid">
                        <div className="se-grid-item structured">
                            <h3 className="se-subtitle">Load Testing</h3>
                            <p className="se-example">
                                Evaluates the system's ability to handle expected user load and
                                identifies potential performance issues.
                            </p>
                        </div>
                        <div className="se-grid-item structured">
                            <h3 className="se-subtitle">Stress Testing</h3>
                            <p className="se-example">
                                Tests the system's behavior under extreme load conditions to
                                ensure it can handle peak traffic.
                            </p>
                        </div>
                        <div className="se-grid-item structured">
                            <h3 className="se-subtitle">Spike Testing</h3>
                            <p className="se-example">
                                Assesses how the system handles sudden spikes in load, such as
                                unexpected surges in traffic.
                            </p>
                        </div>
                        <div className="se-grid-item structured">
                            <h3 className="se-subtitle">Endurance Testing</h3>
                            <p className="se-example">
                                Checks the system’s stability and performance over prolonged
                                periods of continuous operation under load.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="se-section">
                    <h2 className="se-subtitle">Performance Testing Process</h2>
                    <pre>{`
[Identify Requirements]
        ↓
[Design Test Plan]
        ↓
[Set Performance Criteria]
        ↓
[Execute Test]
        ↓
[Collect & Analyze Results]
        ↓
[Optimize & Retest]
          `}</pre>
                </div>

                <div className="se-section">
                    <h2 className="se-subtitle">Tools for Performance Testing</h2>
                    <table className="se-table">
                        <thead>
                            <tr>
                                <th>Tool</th>
                                <th>Type</th>
                                <th>Usage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JMeter</td>
                                <td>Load Testing</td>
                                <td>Open-source tool for performance and load testing</td>
                            </tr>
                            <tr>
                                <td>LoadRunner</td>
                                <td>Stress Testing</td>
                                <td>Performance testing tool from Micro Focus</td>
                            </tr>
                            <tr>
                                <td>Gatling</td>
                                <td>Spike Testing</td>
                                <td>Open-source tool for load testing with Scala scripting</td>
                            </tr>
                            <tr>
                                <td>BlazeMeter</td>
                                <td>Endurance Testing</td>
                                <td>Cloud-based load and performance testing tool</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Regression Testing Section */}
                <div className="se-section">
                    <h2 className="se-subtitle">What is Regression Testing?</h2>
                    <p className="se-example">
                        Regression testing is a type of software testing that ensures that
                        recent code changes do not negatively affect the existing
                        functionality of the application. It helps detect unintended
                        side-effects from modifications or enhancements.
                    </p>
                </div>

                <div className="se-section">
                    <h2 className="se-subtitle">Types of Regression Testing</h2>
                    <div className="se-grid">
                        <div className="se-grid-item structured">
                            <h3 className="se-subtitle">Retest Testing</h3>
                            <p className="se-example">
                                Testing of previously fixed bugs to ensure that they do not
                                reoccur after a code change.
                            </p>
                        </div>
                        <div className="se-grid-item structured">
                            <h3 className="se-subtitle">Corrective Testing</h3>
                            <p className="se-example">
                                Focused on testing defect fixes, often after a bug is fixed
                                during development or QA.
                            </p>
                        </div>
                        <div className="se-grid-item structured">
                            <h3 className="se-subtitle">Progressive Testing</h3>
                            <p className="se-example">
                                Tests for new features after they are implemented, ensuring they
                                work without breaking the existing functionality.
                            </p>
                        </div>
                        <div className="se-grid-item structured">
                            <h3 className="se-subtitle">Selective Testing</h3>
                            <p className="se-example">
                                Focuses only on the modules that are impacted by recent changes,
                                reducing test time and effort.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="se-section">
                    <h2 className="se-subtitle">Regression Testing Process</h2>
                    <pre>{`
[Identify Changes]
        ↓
[Select Test Cases]
        ↓
[Execute Tests]
        ↓
[Verify Functionality]
        ↓
[Log and Report Defects]
          `}</pre>
                </div>

                <div className="se-section">
                    <h2 className="se-subtitle">Tools for Regression Testing</h2>
                    <table className="se-table">
                        <thead>
                            <tr>
                                <th>Tool</th>
                                <th>Type</th>
                                <th>Usage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Selenium</td>
                                <td>Automated Testing</td>
                                <td>Open-source tool for web application regression testing</td>
                            </tr>
                            <tr>
                                <td>QTP/UFT</td>
                                <td>Automated Testing</td>
                                <td>Automation tool for functional and regression testing</td>
                            </tr>
                            <tr>
                                <td>TestComplete</td>
                                <td>Automated Testing</td>
                                <td>
                                    Test automation for functional, regression, and performance
                                    testing
                                </td>
                            </tr>
                            <tr>
                                <td>JUnit</td>
                                <td>Unit Testing</td>
                                <td>
                                    Popular testing framework for Java to facilitate regression
                                    testing
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="se-section">
                    <h2 className="se-subtitle">Diagram: Regression Testing Cycle</h2>
                    <pre>{`
[Code Changes]
         ↓
[Select Test Cases]
         ↓
[Run Regression Tests]
         ↓
[Check for Issues]
         ↓
[Fixed or Verified]
         ↓
[Re-run Test Cases]
         ↓
[Final Verification]
          `}</pre>
                </div>
            </div>
        </div>
    );
}

export default PerformanceAndRegressionTesting;
