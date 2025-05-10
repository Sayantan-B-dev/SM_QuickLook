import React from "react";
import "../../../../CSS/OS.css";

function SchedulingMetricsExplanation() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Scheduling Metrics Explained</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Key Terminologies</h2>
          <ul className="os-example">
            <li><strong>AT (Arrival Time):</strong> Time when the process arrives in the ready queue.</li>
            <li><strong>BT (Burst Time):</strong> Time required by the process to complete execution.</li>
            <li><strong>CT (Completion Time):</strong> Time when the process finishes execution.</li>
            <li><strong>TAT (Turnaround Time):</strong> Total time taken by the process from arrival to completion. TAT = CT - AT.</li>
            <li><strong>WT (Waiting Time):</strong> Total time a process spends waiting in the ready queue. WT = TAT - BT.</li>
            <li><strong>RT (Response Time):</strong> Time from arrival to first CPU allocation. RT = First Run Time - AT.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Example with Gantt Chart</h2>
          <p className="os-example">Let's consider 3 processes:</p>
          <pre className="os-example">
Process | AT | BT
--------|----|----
  P1    |  0 |  4
  P2    |  1 |  3
  P3    |  2 |  1
          </pre>
          <p className="os-example">Using Shortest Job First (non-preemptive):</p>
          <pre className="os-example">
Gantt Chart:
| P1 | P3 | P2 |
0    4    5    8
          </pre>
          <pre className="os-example">
Calculations:
Process | AT | BT | CT | TAT | WT | RT
--------|----|----|----|-----|----|----
  P1    |  0 |  4 |  4 |  4  |  0 | 0
  P2    |  1 |  3 |  8 |  7  |  4 | 4
  P3    |  2 |  1 |  5 |  3  |  2 | 2
          </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Inter-Relationships</h2>
          <p className="os-example">
            These metrics help evaluate performance of a scheduling algorithm. TAT is influenced by AT and CT,
            WT is derived from TAT and BT, and RT indicates system responsiveness.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Scheduling Flow</h2>
          <pre className="os-example">{`
+----------+       +--------+       +-----------+       +-----------+
|  Arrival | ----> |  Ready | --->  | Execution | --->  | Completion|
+----------+       +--------+       +-----------+       +-----------+
      |                               ^   |
      |                               |   v
      +-----------------------------+ Waiting`}
          </pre>
        </div>

        <button className="infoBtn" onClick={() => window.open("https://web.cs.ucla.edu/classes/spring14/cs111/scribe/8d/")}>Know more</button>
      </div>
    </div>
  );
}

export default SchedulingMetricsExplanation;
