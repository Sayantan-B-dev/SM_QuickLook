import React from "react";
import "../../../../CSS/OS.css";

function ProcessStatesAndScheduling() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Process States and Scheduling</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Process States</h2>
          <p className="os-example">
            A process undergoes different states during its execution lifecycle:
          </p>
          <ul className="os-example">
            <li><strong>New:</strong> Process is being created.</li>
            <li><strong>Ready:</strong> Waiting in the ready queue to be assigned to CPU.</li>
            <li><strong>Running:</strong> Currently being executed by CPU.</li>
            <li><strong>Waiting:</strong> Waiting for some event (I/O or resource).</li>
            <li><strong>Terminated:</strong> Finished execution.</li>
            <li><strong>Deallocated:</strong> Resources are released.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Queues in Scheduling</h2>
          <p className="os-example">
            <strong>Ready Queue:</strong> Stores processes that are ready and waiting to execute.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Schedulers</h2>
          <ul className="os-example">
            <li><strong>Long-term Scheduler:</strong> Selects which processes are admitted to the ready queue.</li>
            <li><strong>Short-term Scheduler:</strong> Selects which ready process is sent to CPU.</li>
            <li><strong>Medium-term Scheduler:</strong> Handles swapping processes in and out of memory.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Multitasking Concept</h2>
          <p className="os-example">
            Multitasking allows multiple processes to share CPU. Context switching enables quick transitions.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Scheduling Policies</h2>
          <ul className="os-example">
            <li><strong>Priority-less Scheduling:</strong> No process is favored, equal opportunity.</li>
            <li><strong>LFU (Least Frequently Used):</strong> Least used process/page is replaced or de-prioritized.</li>
            <li><strong>MFU (Most Frequently Used):</strong> Most used is replaced, assuming it has completed its need.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Why a Process Goes from Running to Ready?</h2>
          <p className="os-example">
            A process may move from Running to Ready due to preemption (higher priority process arrival or time slice expiry).
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Linux Process Viewing Commands</h2>
          <ul className="os-example">
            <li><code>ps -e</code>: Show all processes.</li>
            <li><code>ps -u [username]</code>: Show processes by user.</li>
            <li><code>ps aux</code>: Detailed view of all running processes.</li>
            <li><code>top</code>: Dynamic real-time process monitoring.</li>
            <li><code>htop</code>: Interactive process viewer (enhanced top).</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Process State Transition</h2>
          <pre className="os-example">
{`
        +-------+       +-------+       +----------+
        |  New  |----->| Ready |-----> | Running  |
        +-------+       +-------+       +----------+
                             ^              |
                             |              v
                          +------+      +--------+
                          |Waiting|<----|Blocked |
                          +------+      +--------+
                             |              |
                             +--------------+
                                 (Event Occurs)
                                
        After execution ---> Terminated ---> Deallocated
`}
          </pre>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/states-of-a-process-in-operating-systems/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default ProcessStatesAndScheduling;
