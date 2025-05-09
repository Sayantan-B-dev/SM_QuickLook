import React from "react";
import "../../../../CSS/OS.css";

function ProcessVsThread() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Process vs Thread</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is a Process?</h2>
          <p className="os-example">
            A process is an independent program in execution. It has its own address space, program counter, and system resources. Processes are the primary unit of execution in an operating system and are isolated from each other.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">What is a Thread?</h2>
          <p className="os-example">
            A thread is a smaller unit of execution within a process. It shares the same memory space and resources of the process it belongs to. Threads allow multiple tasks to run concurrently within a process, improving efficiency and responsiveness.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Key Differences Between Process and Thread</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Process</th>
                <th>Thread</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>Independent program in execution.</td>
                <td>Unit of execution within a process.</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>Each process has its own separate memory space.</td>
                <td>Threads share the same memory space within a process.</td>
              </tr>
              <tr>
                <td>Execution</td>
                <td>Processes run independently.</td>
                <td>Threads run concurrently within a process.</td>
              </tr>
              <tr>
                <td>Creation</td>
                <td>Creating a process requires more time and overhead.</td>
                <td>Threads are lightweight and quicker to create.</td>
              </tr>
              <tr>
                <td>Communication</td>
                <td>Inter-process communication (IPC) is needed.</td>
                <td>Threads can communicate easily since they share the same memory.</td>
              </tr>
              <tr>
                <td>Overhead</td>
                <td>Higher overhead due to memory management and resource allocation.</td>
                <td>Lower overhead, as threads share resources and memory.</td>
              </tr>
              <tr>
                <td>Context Switching</td>
                <td>Context switching between processes is more expensive.</td>
                <td>Context switching between threads is quicker.</td>
              </tr>
              <tr>
                <td>Failure</td>
                <td>If a process crashes, it does not affect other processes.</td>
                <td>If a thread crashes, it may affect the entire process.</td>
              </tr>
              <tr>
                <td>Examples</td>
                <td>Running applications like browsers or text editors.</td>
                <td>Threads in a browser handling multiple tabs or background tasks.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Process vs Thread</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20190522155604/Untitled-Diagram-361.png"
            alt="Process vs Thread Diagram"
            className="os-example"
          />
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Advantages and Disadvantages</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">Advantages of Processes</h3>
              <ul className="os-example">
                <li>Independent execution.</li>
                <li>Protection between processes.</li>
                <li>Easy to manage and debug.</li>
              </ul>
            </div>
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">Disadvantages of Processes</h3>
              <ul className="os-example">
                <li>Higher memory usage due to separate address spaces.</li>
                <li>Slower context switching.</li>
                <li>Complex inter-process communication.</li>
              </ul>
            </div>
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">Advantages of Threads</h3>
              <ul className="os-example">
                <li>Lower overhead and quicker context switching.</li>
                <li>Shared memory allows easy communication between threads.</li>
                <li>Better for parallelism in a single application.</li>
              </ul>
            </div>
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">Disadvantages of Threads</h3>
              <ul className="os-example">
                <li>Crash in one thread can affect the entire process.</li>
                <li>Harder to debug due to shared memory.</li>
                <li>Requires synchronization to avoid race conditions.</li>
              </ul>
            </div>
          </div>
        </div>

        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/difference-between-process-and-thread/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default ProcessVsThread;
