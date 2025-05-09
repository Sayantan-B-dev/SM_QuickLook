import React from "react";
import "../../../../CSS/OS.css";

function RoundRobin() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Round Robin Scheduling</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Overview</h2>
          <p className="os-example">
            Round Robin (RR) is a <strong>preemptive scheduling algorithm</strong> where each process gets executed for a fixed time slice or quantum. After a time slice, the process is moved to the end of the ready queue. This continues until all processes are complete. It is one of the most <strong>fair and simple scheduling algorithms</strong>.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Characteristics</h2>
          <ul className="os-example">
            <li>Preemptive and time-sharing</li>
            <li>Each process is given an equal quantum cyclically</li>
            <li>Reduces starvation</li>
            <li>Performance depends on the length of time quantum</li>
            <li>High context switching overhead for small quanta</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Example Problem (With Idle Time)</h2>
          <p className="os-example">Consider the following processes (Time Quantum = 3):</p>
          <pre>{`
Process   Arrival Time (AT)   Burst Time (BT)
  P1            0                 5
  P2            1                 3
  P3            2                 8
  P4            10                6
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Gantt Chart</h2>
          <pre>{`
Time:     0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
          |P1|P1|P1|P2|P2|P2|P3|P3|P3|P1|P1|   |P3|P3|P3|P4|P4|P4|P3|P3|P4|P4|P4|
Note: CPU idle at time 12 (no process in ready queue)
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Calculations</h2>
          <pre>{`
Process   AT   BT   CT   TAT (CT-AT)   WT (TAT-BT)
  P1       0    5    10      10            5
  P2       1    3     6       5            2
  P3       2    8    20      18           10
  P4      10    6    24      14            8
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Key Points to Remember</h2>
          <ul className="os-example">
            <li>Time Quantum plays a key role in performance</li>
            <li>Context switch occurs after each time quantum</li>
            <li>Ideal for time-sharing systems</li>
            <li>May lead to idle time if no process is ready</li>
            <li>CT = completion time | TAT = CT - AT | WT = TAT - BT</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Round Robin Scheduling</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250104145952395533/round_robinn.webp"
            alt="Round Robin Scheduling Diagram"
          />

        </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TxjIlNYRZ5M?si=hTm874uSMilWmOc5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/round-robin-scheduling-in-operating-system/", "_blank")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default RoundRobin;