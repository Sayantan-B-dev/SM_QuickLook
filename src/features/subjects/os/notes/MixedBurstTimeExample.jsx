import React from "react";
import "../../../../CSS/OS.css";

function MixedBurstTimeExample() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Mixed Burst Time (CPU + I/O) in Scheduling</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is Mixed Burst Time?</h2>
          <p className="os-example">
            In real operating systems, a process often doesn't use the CPU continuously. Instead, it alternates between CPU burst
            and I/O burst. A <strong>CPU burst</strong> is the time the process spends executing on the CPU, while an 
            <strong> I/O burst</strong> is the time it waits for input/output operations to complete.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Example</h2>
          <pre>{`
Process   Arrival Time   CPU1   I/O   CPU2
  P1           0          4     3     5
  P2           2          6     2     4
  P3           4          5     4     3
          `}</pre>
          <p className="os-example">
            Here, each process uses the CPU, performs I/O, and then uses the CPU again. 
            The scheduler needs to consider I/O blocking and only schedule processes that are in the READY state.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Scheduling Strategy</h2>
          <p className="os-example">
            Let’s assume we use FCFS for this mixed burst example and manage I/O through blocking.
            When a process enters I/O, it’s removed from the ready queue and another process is scheduled.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Gantt Chart</h2>
          <pre>{`
Time:   0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
        | P1 | P2 | P3 | P1 | P2 | P3 |
        CPU1   IO   CPU2
            ↑ Switch during I/O
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">How It Works</h2>
          <ul className="os-example">
            <li><strong>P1</strong> arrives at 0 and runs for 4 units → enters I/O for 3 units (blocked).</li>
            <li><strong>P2</strong> arrives at 2, runs CPU1 for 6 → I/O for 2 units.</li>
            <li><strong>P3</strong> arrives at 4, runs CPU1 for 5 → I/O for 4 units.</li>
            <li>Once I/O is done, processes P1, P2, and P3 come back for their CPU2 burst.</li>
            <li>The scheduler alternates based on availability in ready queue (no process is selected when all are doing I/O → idle time).</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Key Concepts</h2>
          <ul className="os-example">
            <li><strong>Context switching</strong> occurs when CPU is handed over to another process.</li>
            <li>Processes are removed from ready queue when performing I/O.</li>
            <li>CPU may be idle if no process is ready due to all being in I/O.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Mixed Burst Time</h2>
          <pre>{`
        +--------------------+
        |     Process        |
        +--------------------+
                |
                v
        +--------------------+        +--------------+
        |  CPU Burst (CPU1)  | -----> | I/O Burst    |
        +--------------------+        +--------------+
                |                           |
                v                           v
        +--------------------+        +--------------+
        |  CPU Burst (CPU2)  |       |   Back to     |
        +--------------------+       | Ready Queue   |
                                     +--------------+
          `}</pre>
          
        </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0T5PlFVA9_k?si=yFfuF6XqR78aOfCR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://programmingport.hashnode.dev/mix-burst-time-cpu-io-both-or-operating-system-m02-p09", "_blank")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default MixedBurstTimeExample;
