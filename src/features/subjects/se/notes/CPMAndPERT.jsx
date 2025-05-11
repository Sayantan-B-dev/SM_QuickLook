import React from "react";
import "../../../../CSS/SE.css";

function CPMAndPERT() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">CPM (Critical Path Method) & PERT (Program Evaluation and Review Technique)</h1>

        {/* Critical Path Method (CPM) */}
        <div className="se-section">
          <h2 className="se-subtitle">Critical Path Method (CPM)</h2>
          <p className="se-example">
            The Critical Path Method (CPM) is a project management tool used to identify the longest sequence of dependent tasks in a project, ensuring the project’s duration is minimized. The critical path is the sequence of activities that determine the minimum time required to complete the project.
          </p>

          <h3 className="se-subtitle">Key Points of CPM</h3>
          <ul className="se-example">
            <li><strong>Time-Oriented:</strong> CPM is time-focused and aims to complete the project in the shortest time possible by identifying tasks that directly affect the project duration.</li>
            <li><strong>Deterministic:</strong> CPM assumes that activity durations are known and fixed, i.e., no uncertainty in time estimation.</li>
            <li><strong>Critical Path:</strong> The critical path is the longest path through the project, and the tasks on this path have no slack. Any delay in these tasks will delay the project.</li>
            <li><strong>Slack/Float:</strong> The amount of time a task can be delayed without affecting the overall project timeline. Non-critical path tasks have slack.</li>
          </ul>

          <h3 className="se-subtitle">CPM Example</h3>
          <p className="se-example">
            Suppose a project consists of five tasks, with the following duration and dependencies:
            <ul>
              <li>Task A: 4 days</li>
              <li>Task B: 3 days, depends on Task A</li>
              <li>Task C: 6 days, depends on Task A</li>
              <li>Task D: 2 days, depends on Task B</li>
              <li>Task E: 3 days, depends on Task C</li>
            </ul>
            By calculating the critical path, you can identify that Tasks A, C, and E form the critical path and should be completed without delay to avoid delays in the project.
          </p>
        </div>

        {/* PERT (Program Evaluation and Review Technique) */}
        <div className="se-section">
          <h2 className="se-subtitle">PERT (Program Evaluation and Review Technique)</h2>
          <p className="se-example">
            PERT is another project management tool that focuses on the analysis and representation of tasks involved in completing a project. PERT is used when the exact time of task completion is uncertain, and it incorporates probabilistic time estimates.
          </p>

          <h3 className="se-subtitle">Key Points of PERT</h3>
          <ul className="se-example">
            <li><strong>Uncertainty-Oriented:</strong> PERT accounts for uncertainty by considering different time estimates for each task (optimistic, pessimistic, and most likely).</li>
            <li><strong>Probabilistic:</strong> PERT uses three time estimates for each activity: the optimistic time (O), the pessimistic time (P), and the most likely time (M).</li>
            <li><strong>Expected Time (ET):</strong> The expected time is calculated using the formula:
              <pre>ET = (O + 4M + P) / 6</pre></li>
            <li><strong>Critical Path:</strong> The critical path in PERT is the longest path based on expected times, similar to CPM.</li>
          </ul>

          <h3 className="se-subtitle">PERT Example</h3>
          <p className="se-example">
            Consider the same project tasks as in the CPM example. Each task has three time estimates:
            <ul>
              <li>Task A: Optimistic: 3, Most Likely: 4, Pessimistic: 5</li>
              <li>Task B: Optimistic: 2, Most Likely: 3, Pessimistic: 4</li>
              <li>Task C: Optimistic: 5, Most Likely: 6, Pessimistic: 7</li>
              <li>Task D: Optimistic: 1, Most Likely: 2, Pessimistic: 3</li>
              <li>Task E: Optimistic: 2, Most Likely: 3, Pessimistic: 4</li>
            </ul>
            The expected time for each task would be calculated, and the critical path would be determined similarly, but with consideration of the uncertainties.
          </p>
        </div>

        {/* Comparison of CPM and PERT */}
        <div className="se-section">
          <h2 className="se-subtitle">Comparison: CPM vs PERT</h2>
          <table className="se-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>CPM</th>
                <th>PERT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nature of Time Estimates</td>
                <td>Deterministic (fixed time estimates)</td>
                <td>Probabilistic (uncertain time estimates)</td>
              </tr>
              <tr>
                <td>Purpose</td>
                <td>Time optimization and schedule determination</td>
                <td>Planning and control of projects with uncertain durations</td>
              </tr>
              <tr>
                <td>Use of Time Estimates</td>
                <td>Single time estimate for each activity</td>
                <td>Three time estimates (Optimistic, Most Likely, Pessimistic)</td>
              </tr>
              <tr>
                <td>Focus</td>
                <td>Minimizing project time by identifying the critical path</td>
                <td>Analyzing the uncertainty and variability in time estimates</td>
              </tr>
              <tr>
                <td>Application</td>
                <td>Best for projects with well-defined tasks and durations</td>
                <td>Best for research and development projects or those with uncertain activity durations</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Conclusion */}
        <div className="se-section">
          <h2 className="se-subtitle">Conclusion</h2>
          <p className="se-example">
            Both CPM and PERT are vital tools in project management for determining project timelines, resource allocation, and identifying critical tasks. While CPM is best suited for projects with well-defined tasks and fixed durations, PERT is more applicable for projects with high uncertainty, providing estimates based on probabilities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CPMAndPERT;
