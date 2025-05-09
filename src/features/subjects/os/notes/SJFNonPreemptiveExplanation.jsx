import React from "react";
import "../../../../CSS/OS.css";

function SJFNonPreemptiveExplanation() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Shortest Job First (SJF) - Non-Preemptive Scheduling</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Overview</h2>
          <p className="os-example">
            SJF is a <strong>non-preemptive</strong> scheduling algorithm where the process with the <strong>shortest burst time</strong> is executed next.
            Among all available processes at the current time, the one with the lowest burst time is selected. It aims to minimize average waiting time.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Characteristics</h2>
          <ul className="os-example">
            <li>Non-preemptive scheduling</li>
            <li>Favors short jobs, which can starve long jobs</li>
            <li>Optimal for minimizing average waiting time (theoretical)</li>
            <li>Needs prior knowledge of burst times (not always realistic)</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Example Problem</h2>
          <p className="os-example">Consider the following processes:</p>
          <pre>{`
Process   Arrival Time (AT)   Burst Time (BT)
  P1            0                 7
  P2            2                 4
  P3            4                 1
  P4            10                2
          `}</pre>
          <p className="os-example">
            Here, SJF selects the shortest job among the processes that have arrived by the current time.
            CPU may go <strong>idle</strong> if no process has arrived yet.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Gantt Chart</h2>
          <pre>{`
Time:      0     7     8     12    14
           | P1 | P3 | P2 | IDLE | P4 |
          `}</pre>
          <p className="os-example">CPU stays idle between time 12 and 14 as P4 arrives at 10 but others finish before it.</p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Calculations</h2>
          <pre>{`
Process   AT   BT   CT   TAT (CT-AT)   WT (TAT-BT)
  P1       0    7    7       7             0
  P3       4    1    8       4             3
  P2       2    4    12      10            6
  P4      10    2    14      4             2
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Key Points to Remember</h2>
          <ul className="os-example">
            <li>Always check available processes at the current time before selecting the shortest</li>
            <li>If no process has arrived, CPU stays idle</li>
            <li>Sort based on burst time but <strong>among arrived processes only</strong></li>
            <li>May cause starvation for long jobs</li>
            <li>CT = current time + BT | WT = TAT - BT</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: SJF Non-Preemptive</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200303163658/SJF.jpg"
            alt="SJF Non Preemptive Diagram"
          />

        </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VCIVXPoiLpU?si=Qbr4B_h2Qtnqxyx-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/shortest-job-first-or-sjf-cpu-scheduling/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default SJFNonPreemptiveExplanation;
