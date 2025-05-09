import React from "react";
import "../../../../CSS/OS.css";

function PrioritySchedulingExplanation() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Priority Based Scheduling</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Overview</h2>
          <p className="os-example">
            Priority Scheduling is a CPU scheduling algorithm where each process is assigned a priority.
            The CPU is allocated to the process with the <strong>highest priority</strong> (lowest priority number).
            If two processes have the same priority, they are scheduled based on their arrival time (FCFS).
            Priority can be <strong>preemptive</strong> or <strong>non-preemptive</strong>.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Types</h2>
          <ul className="os-example">
            <li><strong>Preemptive:</strong> Higher priority process preempts the currently running lower priority process.</li>
            <li><strong>Non-Preemptive:</strong> CPU is not preempted until the current process finishes execution.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Example Problem (Preemptive)</h2>
          <pre>{`
Process   Arrival Time (AT)   Burst Time (BT)   Priority
  P1            0                 10              2
  P2            2                 4               1
  P3            4                 6               3
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Gantt Chart</h2>
          <pre>{`
Time:     0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
          |P1|P1|P2|P2|P2|P2|P1|P1|P1|P1|P1|P3|P3|P3|P3|P3|P3|
          `}</pre>
          <p className="os-example">
            P2 arrives at time 2 with higher priority than P1, so it preempts P1. After P2 completes, P1 resumes until completion.
            Then P3 executes.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Calculations</h2>
          <pre>{`
Process   AT   BT   Priority   CT   TAT (CT-AT)   WT (TAT-BT)
  P1       0    10     2        11      11            1
  P2       2    4      1         6       4            0
  P3       4    6      3        17      13            7
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Advantages</h2>
          <ul className="os-example">
            <li>Simple to implement</li>
            <li>Useful when some processes require priority treatment</li>
            <li>Efficient for real-time systems</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Disadvantages</h2>
          <ul className="os-example">
            <li>Lower priority processes may suffer starvation</li>
            <li>Requires aging technique to prevent starvation</li>
            <li>Complex to maintain dynamic priorities</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Key Points to Remember</h2>
          <ul className="os-example">
            <li>Higher priority means lower number</li>
            <li>Preemptive scheduling increases responsiveness</li>
            <li>Use aging to prevent starvation</li>
          </ul>
        </div>


          <iframe width="560" height="315" src="https://www.youtube.com/embed/rsDGfFxSgiY?si=CDc5Ldvy4525EiN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/priority-scheduling-in-operating-system/", "_blank")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default PrioritySchedulingExplanation;
