import React from "react";
import "../../../../CSS/SE.css";

function RiskManagement() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Risk Management in Software Projects</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Risk Management Plan</h2>
          <p className="se-example">
            A Risk Management Plan outlines the process for identifying, assessing, and managing risks throughout the software development lifecycle. It defines strategies for risk prevention, mitigation, monitoring, and evaluation.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Reactive vs Proactive Risk Management</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Reactive Risk Management</th>
                <th>Proactive Risk Management</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Approach</td>
                <td>Responding to risks as they occur</td>
                <td>Anticipating risks and planning ahead</td>
              </tr>
              <tr>
                <td>Focus</td>
                <td>Minimizing damage</td>
                <td>Preventing risks from occurring</td>
              </tr>
              <tr>
                <td>Timing</td>
                <td>After the risk event has occurred</td>
                <td>Before the risk event occurs</td>
              </tr>
              <tr>
                <td>Cost</td>
                <td>Higher, due to emergency responses</td>
                <td>Lower, as risks are mitigated in advance</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Types of Risks</h2>
          <ul className="se-example">
            <li><strong>Technical Risks:</strong> Risks related to the technical challenges of the project (e.g., untested technology, complexity).</li>
            <li><strong>Operational Risks:</strong> Risks in the processes, such as human resource issues or workflow inefficiencies.</li>
            <li><strong>External Risks:</strong> Risks arising from factors outside the control of the project, such as market changes or regulations.</li>
            <li><strong>Project Risks:</strong> Risks associated with time, budget, and scope constraints.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Risk Assessment & Risk Assessment Matrix</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Risk Level</th>
                <th>Probability</th>
                <th>Impact</th>
                <th>Severity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>High</td>
                <td>Very Likely</td>
                <td>Very Significant</td>
                <td>Immediate Action Required</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>Likely</td>
                <td>Moderate</td>
                <td>Monitor and Plan Mitigation</td>
              </tr>
              <tr>
                <td>Low</td>
                <td>Unlikely</td>
                <td>Minor</td>
                <td>Minimal or No Action Needed</td>
              </tr>
            </tbody>
          </table>
          <p className="se-example">
            The Risk Assessment Matrix helps evaluate risks based on their probability and impact. Risks are categorized based on these factors and prioritized accordingly.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Risk Control</h2>
          <p className="se-example">
            Risk Control refers to actions taken to manage, reduce, or eliminate identified risks. It involves implementing measures that will either prevent risks from happening or reduce their impact.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Risk Control vs Risk Mitigation</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Risk Control</th>
                <th>Risk Mitigation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>Actions taken to minimize the probability and impact of risks.</td>
                <td>Efforts to reduce the severity of risks when they occur.</td>
              </tr>
              <tr>
                <td>Timing</td>
                <td>Ongoing, throughout the project.</td>
                <td>Usually done after a risk is identified.</td>
              </tr>
              <tr>
                <td>Focus</td>
                <td>Aim to avoid or reduce the occurrence of risks.</td>
                <td>Aim to lessen the consequences of risks that cannot be avoided.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Risk Strategies</h2>
          <ul className="se-example">
            <li><strong>Risk Avoidance:</strong> Changing project plans to avoid the risk altogether.</li>
            <li><strong>Risk Transfer:</strong> Shifting the responsibility of a risk to a third party, such as through insurance or outsourcing.</li>
            <li><strong>Risk Reduction:</strong> Taking actions to reduce the probability or impact of the risk (e.g., more rigorous testing).</li>
            <li><strong>Risk Monitoring:</strong> Continuously observing risk factors and adjusting plans accordingly.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Control Statements</h2>
          <p className="se-example">
            Control statements help to manage risks effectively by defining actions, responsibilities, and timelines. Examples include:
            <ul>
              <li><strong>If risk X happens:</strong> Assign action to address the issue immediately.</li>
              <li><strong>If probability is high:</strong> Implement additional measures to monitor and mitigate the impact.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RiskManagement;
