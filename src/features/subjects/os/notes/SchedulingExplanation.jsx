import React from "react";
import "../../../../CSS/OS.css";

function SchedulingExplanation() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Multilevel Queue and Multilevel Feedback Queue Scheduling</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Multilevel Queue Scheduling</h2>
          <p className="os-example">
            In multilevel queue scheduling, processes are divided into different queues based on their priority and characteristics.
            Each queue has a different priority, and processes are assigned to a queue based on their behavior, such as:
            <ul>
              <li><strong>System Processes</strong> - High priority, e.g., operating system processes.</li>
              <li><strong>Interactive Processes</strong> - Medium priority, e.g., user programs interacting with the system.</li>
              <li><strong>Batch Processes</strong> - Low priority, e.g., long-running background tasks.</li>
            </ul>
            The CPU scheduling algorithm is applied to each queue separately, and each queue can use different algorithms like Round Robin (RR) or Shortest Job First (SJF).
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Multilevel Queue Scheduling: Example</h2>
          <pre>{`
Queue:       High Priority       Medium Priority        Low Priority
Process:        P1 (System)        P2 (Interactive)      P3 (Batch)
Algorithm:      SJF                 RR                     RR
          `}</pre>
          <p className="os-example">
            - System processes (P1) are assigned the highest priority and handled using SJF.
            - Interactive processes (P2) use Round Robin.
            - Batch processes (P3) use Round Robin as well but with the lowest priority.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Multilevel Queue Scheduling Diagram</h2>
          <pre>{`
        +------------------------+
        | High Priority Queue    |  <--- SJF
        | (System Processes)     |
        +------------------------+
                |
                v
        +------------------------+
        | Medium Priority Queue  |  <--- Round Robin
        | (Interactive Processes)|
        +------------------------+
                |
                v
        +------------------------+
        | Low Priority Queue     |  <--- Round Robin
        | (Batch Processes)      |
        +------------------------+
                |
                v
             CPU
          `}</pre>
          <p className="os-example">
            Processes are placed in specific queues based on their priority level and type. The CPU scheduler picks processes from each queue based on their priority.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Multilevel Feedback Queue Scheduling</h2>
          <p className="os-example">
            In multilevel feedback queue scheduling, processes can move between queues based on their execution history.
            The goal is to allow more CPU time to interactive processes, while preventing long-running processes from monopolizing CPU time. Processes that use more CPU time can be moved to a lower-priority queue. Conversely, processes that are I/O bound can be moved to a higher-priority queue.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Multilevel Feedback Queue Scheduling: Example</h2>
          <pre>{`
Queue:       High Priority       Medium Priority       Low Priority
Process:        P1 (Interactive)    P2 (Interactive)      P3 (Batch)
Algorithm:      RR                   RR                     RR
Action:         Moves up after      Moves down after       Moves down if it exceeds time
                quantum expires     quantum limit
          `}</pre>
          <p className="os-example">
            - If an interactive process (P1) uses less CPU time, it stays at the high-priority queue. 
            - If a batch process (P3) exceeds its allocated time, it moves down to a lower priority queue.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Multilevel Feedback Queue Diagram</h2>
          <pre>{`
        +------------------------+
        | High Priority Queue    |  <--- Round Robin
        | (Interactive Processes)|
        +------------------------+
                |
                v
        +------------------------+
        | Medium Priority Queue  |  <--- Round Robin
        | (Interactive Processes)|
        +------------------------+
                |
                v
        +------------------------+
        | Low Priority Queue     |  <--- Round Robin
        | (Batch Processes)      |
        +------------------------+
                |
                v
             CPU
          `}</pre>
          <p className="os-example">
            - Processes start in the highest priority queue.
            - Processes can move between queues based on how much CPU time they use.
            - If a process exceeds its time quantum or behaves in a way that suggests it is CPU-bound, it moves to a lower priority queue.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Key Differences</h2>
          <ul className="os-example">
            <li><strong>Multilevel Queue:</strong> Processes are permanently assigned to a specific queue based on their characteristics.</li>
            <li><strong>Multilevel Feedback Queue:</strong> Processes can move between queues dynamically based on their behavior.</li>
            <li>Feedback queues provide more flexibility by adjusting priorities based on execution history.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Advantages</h2>
          <ul className="os-example">
            <li>Multilevel queue ensures system processes get higher priority while batch processes get lower priority.</li>
            <li>Multilevel feedback queues ensure that I/O bound processes don’t suffer from starvation.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Disadvantages</h2>
          <ul className="os-example">
            <li>Multilevel queue lacks flexibility for processes to change priority.</li>
            <li>Multilevel feedback queues are more complex to implement and manage.</li>
          </ul>
        </div>
            <img className="smallImg" src="https://media.geeksforgeeks.org/wp-content/uploads/multilevel-queue-schedueling-1-300x217.png" alt="" />
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/multilevel-queue-mlq-cpu-scheduling/", "_blank")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default SchedulingExplanation;
