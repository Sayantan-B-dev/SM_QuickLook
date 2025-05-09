import React from "react";
import "../../../../CSS/OS.css";

function FCFSExplanation() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">First-Come, First-Served (FCFS) Scheduling</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Overview</h2>
          <p className="os-example">
            FCFS is the simplest CPU scheduling algorithm where the process that arrives first gets executed first.
            It is a <strong>non-preemptive</strong> algorithm, and scheduling is based on **arrival time**.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Characteristics</h2>
          <ul className="os-example">
            <li>Non-preemptive scheduling</li>
            <li>Easy to implement and understand</li>
            <li>May cause <strong>convoy effect</strong> (slow process delays faster ones)</li>
            <li>Fair in terms of arrival order</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Example Problem</h2>
          <p className="os-example">Consider the following processes:</p>
          <pre>{`
Process   Arrival Time (AT)   Burst Time (BT)
  P1            0                 4
  P2            2                 3
  P3            5                 2
  P4            10                1
          `}</pre>
          <p className="os-example">
            In FCFS, processes are executed in the order they arrive. If there's a gap between processes, <strong>CPU stays idle</strong> during that time.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Gantt Chart</h2>
          <pre>{`
Time:      0     4     7     9     10    11
           | P1 | P2 | P3 | IDLE | P4 |
          `}</pre>
          <p className="os-example">Note: Between P3 and P4 there's a CPU idle time from time 9 to 10.</p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Calculations</h2>
          <pre>{`
Process   AT   BT   CT   TAT (CT-AT)   WT (TAT-BT)
  P1       0    4    4       4             0
  P2       2    3    7       5             2
  P3       5    2    9       4             2
  P4      10    1    11      1             0
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Key Points to Remember</h2>
          <ul className="os-example">
            <li>Sort processes by <strong>arrival time</strong></li>
            <li>If CPU becomes free and no process has arrived → <strong>Idle Time</strong></li>
            <li>CT (Completion Time) = max(current time, arrival time) + BT</li>
            <li>WT (Waiting Time) = TAT - BT</li>
            <li>Easy but not optimal for minimizing average WT</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: FCFS Flow</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250106105917623162/first_come_first_serve_with_same_arrival_time1.webp"
            alt="FCFS Flow Diagram"
          />

        </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MZdVAVMgNpA?si=PVmcE2vQjM4FJ09Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/first-come-first-serve-cpu-scheduling-non-preemptive/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default FCFSExplanation;
