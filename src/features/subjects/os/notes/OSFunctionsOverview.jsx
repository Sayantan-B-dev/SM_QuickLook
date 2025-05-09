import React from "react";
import "../../../../CSS/OS.css";


function OSFunctionsOverview() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        {/* Main Title */}
        <h1 className="os-title">Operating System (OS) - Overview and Functions</h1>

        {/* What is OS */}
        <div className="os-section">
          <h2 className="os-subtitle">🔹 What is an Operating System?</h2>
          <p className="os-example">
            An <strong>Operating System (OS)</strong> is a system software that acts as an intermediary between the
            <em> user applications</em> and the <em>hardware</em>. It manages the execution of programs and
            handles hardware resources efficiently. The OS ensures that system operations run smoothly by controlling
            inputs/outputs, memory, processes, and peripheral devices.
          </p>
        </div>

        {/* Why OS is Used */}
        <div className="os-section">
          <h2 className="os-subtitle">🔸 Why Do We Use an Operating System?</h2>
          <p className="os-example">
            Imagine trying to run a computer by manually controlling the CPU, memory, disk, and input/output devices — it would be practically impossible. 
            The OS automates these interactions and provides:
            <ul className="os-example">
              <li>➡️ A convenient interface to interact with the system (GUI or CLI)</li>
              <li>➡️ Efficient resource management for multitasking and multiprocessing</li>
              <li>➡️ Security and stability for users and programs</li>
              <li>➡️ Abstraction to hide hardware-level complexities</li>
            </ul>
          </p>
        </div>

        {/* Functions of OS */}
        <div className="os-section">
          <h2 className="os-subtitle">🔹 Core Functions of an Operating System</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <strong>1. Process Management</strong>
              <div className="os-grid-item unstructured">
                Handles process creation, scheduling, termination, and coordination among processes.
              </div>
            </div>
            <div className="os-grid-item structured">
              <strong>2. Memory Management</strong>
              <div className="os-grid-item unstructured">
                Keeps track of each byte in a computer's memory and manages allocation/deallocation.
              </div>
            </div>
            <div className="os-grid-item structured">
              <strong>3. File System Management</strong>
              <div className="os-grid-item unstructured">
                Manages data storage, retrieval, naming, and protection on disk drives.
              </div>
            </div>
            <div className="os-grid-item structured">
              <strong>4. Device Management</strong>
              <div className="os-grid-item unstructured">
                Coordinates and controls input/output devices via device drivers.
              </div>
            </div>
            <div className="os-grid-item structured">
              <strong>5. Security & Access Control</strong>
              <div className="os-grid-item unstructured">
                Protects data and system integrity using authentication, authorization, and encryption.
              </div>
            </div>
            <div className="os-grid-item structured">
              <strong>6. User Interface</strong>
              <div className="os-grid-item unstructured">
                Offers GUI (Graphical User Interface) or CLI (Command Line Interface) for user interaction.
              </div>
            </div>
            <div className="os-grid-item structured">
              <strong>7. Networking</strong>
              <div className="os-grid-item unstructured">
                Manages communication between devices and enables remote access and networking protocols.
              </div>
            </div>
            <div className="os-grid-item structured">
              <strong>8. Performance Monitoring</strong>
              <div className="os-grid-item unstructured">
                Tracks system performance using metrics like CPU usage, memory load, and system logs.
              </div>
            </div>
          </div>
        </div>

        {/* Diagram Section */}
        <div className="os-section">
          <h2 className="os-subtitle">🧩 Diagram: Interaction Between User, OS, and Hardware</h2>
          <pre className="os-example">
{`
+----------------+          +------------------+          +----------------+
|     User       | <------> |  Operating System | <------> |   Hardware     |
+----------------+          +------------------+          +----------------+
        |                          |                             |
        |                          |                             |
        |       Application        |       Device Drivers        |
        |       Interface          |       Kernel Services       |
        V                          V                             V
   [Apps, Shells]        [Memory Mgmt, Scheduler, I/O]     [CPU, RAM, Disks]
`}
          </pre>
        </div>

        {/* External Info Link */}
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/operating-systems/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default OSFunctionsOverview;
