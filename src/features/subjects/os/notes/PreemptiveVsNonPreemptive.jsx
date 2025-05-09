import React from "react";
import "../../../../CSS/OS.css";

function PreemptiveVsNonPreemptive() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Preemptive vs Non-Preemptive Scheduling</h1>

        <div className="os-section">
          <p className="os-example">
            CPU scheduling determines the order in which processes access the CPU. The two main types are:
            <strong> Preemptive</strong> (allows interruption) and
            <strong> Non-Preemptive</strong> (does not allow interruption).
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Comparison Table</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Criteria</th>
                <th>Preemptive Scheduling</th>
                <th>Non-Preemptive Scheduling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>CPU can be taken from a process before completion</td>
                <td>CPU cannot be taken until process completes</td>
              </tr>
              <tr>
                <td>Control</td>
                <td>OS decides when to switch</td>
                <td>Process keeps CPU voluntarily</td>
              </tr>
              <tr>
                <td>Response Time</td>
                <td>Better, faster response to high-priority tasks</td>
                <td>Slower, can delay high-priority processes</td>
              </tr>
              <tr>
                <td>Complexity</td>
                <td>More complex due to context switching</td>
                <td>Simpler to implement</td>
              </tr>
              <tr>
                <td>Overhead</td>
                <td>Higher (frequent context switching)</td>
                <td>Lower</td>
              </tr>
              <tr>
                <td>Examples</td>
                <td>Round Robin, SRTF, Preemptive Priority</td>
                <td>FCFS, SJF, Non-Preemptive Priority</td>
              </tr>
              <tr>
                <td>Use Cases</td>
                <td>Real-time & multitasking systems</td>
                <td>Batch systems or simpler real-world tasks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Scheduling Flow</h2>
          <pre className="os-example">
{`
Preemptive:
[Process A] --> [Process B arrives (high priority)] --> [Switch to B]

Non-Preemptive:
[Process A] ----------------------------> (A finishes)
                     [Process B waits]
`}
          </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Advantages & Disadvantages</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <h3>Preemptive</h3>
              <ul className="os-example">
                <li>✅ Better system responsiveness</li>
                <li>✅ High-priority tasks get CPU quickly</li>
                <li>❌ More context switch overhead</li>
                <li>❌ Complex to implement</li>
              </ul>
            </div>
            <div className="os-grid-item structured">
              <h3>Non-Preemptive</h3>
              <ul className="os-example">
                <li>✅ Simpler and less overhead</li>
                <li>✅ Useful for predictable workloads</li>
                <li>❌ High-priority tasks may starve</li>
                <li>❌ Poor responsiveness</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Examples and Use Cases</h2>
          <p className="os-example">
            <strong>Preemptive:</strong> Windows, Linux, mobile OSes—suitable for multitasking and real-time environments.<br />
            <strong>Non-Preemptive:</strong> Simpler batch processing systems, printer job queues, or embedded systems with fixed sequences.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: CPU Control in Scheduling</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/pre-2.png"
            alt="Preemptive vs Non-Preemptive Scheduling Diagram"
          /><img
            src="https://media.geeksforgeeks.org/wp-content/uploads/nonpre.png"
            alt="Preemptive vs Non-Preemptive Scheduling Diagram"
          />
        </div>
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/preemptive-and-non-preemptive-scheduling/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default PreemptiveVsNonPreemptive;
