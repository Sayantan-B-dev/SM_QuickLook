import React from "react";
import "../../../../CSS/OS.css";

function SchedulingAlgorithms() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">CPU Scheduling Algorithms</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Types of Scheduling</h2>
          <p className="os-example">
            CPU scheduling can be classified into two broad categories:
          </p>
          <ul className="os-example">
            <li><strong>Preemptive:</strong> The CPU can be taken away from a process if a higher priority process arrives (e.g., SRTF, Round Robin, Priority).</li>
            <li><strong>Non-Preemptive:</strong> Once a process gets the CPU, it runs to completion (e.g., FCFS, SJF, LJF).</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">1. First-Come, First-Served (FCFS)</h2>
          <p className="os-example">Processes are executed in the order they arrive. Non-preemptive. Simple but may cause convoy effect.</p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">2. Shortest Job First (SJF)</h2>
          <p className="os-example">Executes the process with the shortest burst time. Non-preemptive. May lead to starvation of long jobs.</p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">3. Shortest Remaining Time First (SRTF)</h2>
          <p className="os-example">Preemptive version of SJF. If a new process arrives with a shorter remaining time, it preempts the current one.</p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">4. Longest Job First (LJF)</h2>
          <p className="os-example">Opposite of SJF. Longest burst time is selected first. Non-preemptive.</p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">5. Longest Remaining Time First (LRTF)</h2>
          <p className="os-example">Preemptive version of LJF. Gives preference to longer remaining processes.</p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">6. Priority Scheduling</h2>
          <p className="os-example">Each process has a priority. The one with the highest priority runs first. Can be preemptive or non-preemptive.</p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">7. Round Robin (RR)</h2>
          <p className="os-example">Each process gets a fixed time quantum. After the quantum, it goes back to the queue. Preemptive and time-sharing.</p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">8. Highest Response Ratio Next (HRRN)</h2>
          <p className="os-example">Non-preemptive. Chooses the process with highest response ratio = (waiting time + burst time) / burst time. Balances short and long jobs.</p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">9. Multilevel Queue Scheduling</h2>
          <p className="os-example">Processes are divided into queues based on priority or type (system/user). Each queue has its own scheduling algorithm.</p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">10. Multilevel Feedback Queue Scheduling</h2>
          <p className="os-example">Similar to Multilevel Queue, but processes can move between queues based on their behavior and aging.</p>
        </div>

        <button
          className="infoBtn"
          onClick={() => window.open("http://geeksforgeeks.org/cpu-scheduling-in-operating-systems/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default SchedulingAlgorithms;
