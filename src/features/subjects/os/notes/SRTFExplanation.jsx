import React from "react";
import "../../../../CSS/OS.css";

function SRTFExplanation() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">SJF Preemptive (SRTF) - Shortest Remaining Time First</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Overview</h2>
          <p className="os-example">
            SRTF (Shortest Remaining Time First) is the <strong>preemptive</strong> version of Shortest Job First (SJF).
            At any given time, the process with the <strong>smallest remaining burst time</strong> is selected for execution.
            If a new process arrives with a burst time smaller than the remaining time of the currently running process,
            it preempts the running process.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Characteristics</h2>
          <ul className="os-example">
            <li>Preemptive scheduling</li>
            <li>Based on remaining burst time</li>
            <li>Efficient but may cause starvation</li>
            <li>Context switching overhead</li>
            <li>Needs burst time estimation in advance</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Example Problem</h2>
          <p className="os-example">Consider the following processes:</p>
          <pre>{`
Process   Arrival Time (AT)   Burst Time (BT)
  P1            0                 8
  P2            1                 4
  P3            2                 2
  P4            3                 1
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Gantt Chart</h2>
          <pre>{`
Time:     0 1 2 3 4 5 6 7 8 9 10 11 12
          |P1|P2|P3|P4|P3|P2|P2|P2|P1|P1|P1 |P1 |P1|
          `}</pre>
          <p className="os-example">
            At time 0, P1 starts. At time 1, P2 arrives and preempts P1. At time 2, P3 arrives and preempts P2. At time 3, P4 arrives and preempts P3.
            This continues based on remaining time until all are completed.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Calculations</h2>
          <pre>{`
Process   AT   BT   CT   TAT (CT-AT)   WT (TAT-BT)
  P1       0    8    13      13            5
  P2       1    4     8       7            3
  P3       2    2     5       3            1
  P4       3    1     4       1            0
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Key Points to Remember</h2>
          <ul className="os-example">
            <li>Always choose the process with shortest remaining time</li>
            <li>May cause starvation of longer jobs</li>
            <li>More CPU overhead due to frequent context switching</li>
            <li>CT = completion time | TAT = CT - AT | WT = TAT - BT</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: SJF Preemptive (SRTF)</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250106120238234973/srtf_algorithm_with_same_arrival_time1.webp"
            alt="SRTF Scheduling Diagram"
          />

        </div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/hoN7_VMzw_g?si=9R0ILWpYPKBRlcaJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/shortest-remaining-time-first-preemptive-sjf-scheduling-algorithm/", "_blank")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default SRTFExplanation;
